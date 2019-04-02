package fsu.team2.hub20.Services;

import java.net.URL;
import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import fsu.team2.hub20.Repositorys.ArticleRepo;
import fsu.team2.hub20.Repositorys.TagGroupRepository;
import fsu.team2.hub20.models.Article;
import fsu.team2.hub20.models.tag;
import fsu.team2.hub20.models.tagGroup;
import fsu.team2.hub20.security.jwt.JwtAuthEntryPoint;

@Repository
@Transactional
public class TagServiceImpl implements TagService {
	private static final Logger logger = LoggerFactory.getLogger(TagServiceImpl.class);
	@Autowired
	private fsu.team2.hub20.Repositorys.TagRepo TagRepo;
	@Autowired
    private ArticleRepo ArticleRepo;
	 
	@Autowired
	private TagGroupService  TagGroupService;
	
	public List<tag> getAllTags() {
		   List<tag> result = new ArrayList<tag>();
		   List<tag> tags = (List<tag>) TagRepo.findAll();
		   for (tag tag : tags) {
			   
			   result.add(tag);
		   }
		   return result;
	}
	
	public void addTag(tag tag,String AT) {
	    
	    logger.info(""+tag.getTagContent());
		tag newTag = new tag();
		tagGroup tagGroup = new tagGroup();
		
		//newTag.setTagID((long) 93);
		newTag.setTagContent(tag.getTagContent());
		
		//int articleId = (int) article.get(0).getId();
		TagRepo.save(newTag);
		List<Object[]> articles = ArticleRepo.getLastArticleID();
		Scanner scanner = new Scanner(articles.toString());
		 while (scanner.hasNext()) {
			 if (scanner.hasNextInt()) {
				 	scanner.nextInt();
				 	TagGroupService.addTagGroup(newTag, scanner.nextInt());
				 	logger.info(""+scanner.nextInt());
		         }
			
		 }
		
	
		
		
		
		
	}
	
	public Optional<tag> getTag(int id) {
		Optional<tag> tag = TagRepo.findBytagID(id);
		return tag;
	}


	





	

}
