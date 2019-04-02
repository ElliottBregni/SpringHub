package fsu.team2.hub20.Services;
import fsu.team2.hub20.models.Article;
import fsu.team2.hub20.models.tag;
import fsu.team2.hub20.models.tagGroup;

import java.lang.reflect.Array;
import java.net.URL;
import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fsu.team2.hub20.Repositorys.ArticleRepo;
import fsu.team2.hub20.Repositorys.TagGroupRepository;
import fsu.team2.hub20.Repositorys.TagRepo;

@Lazy
@Repository
@Transactional
public class TagGroupServiceImpl implements TagGroupService {
	@Autowired
	private TagGroupRepository TagGroupRepo;
	@Autowired
    private ArticleRepo ArticleRepo;
	private int ArticleID;
	private static final Logger logger = LoggerFactory.getLogger(TagGroupServiceImpl.class);
	public List<tagGroup> getAllTagGroups() {
		   List<tagGroup> result = new ArrayList<tagGroup>();
		   List<tagGroup> groups = (List<tagGroup>) TagGroupRepo.findAll();
		   for (tagGroup tagGroup : groups) {
			   
			   result.add(tagGroup);
		   }
		   return result;
	}
	
	public void addTagGroup(tag tag,int id) {
		
		
		 	tagGroup newTagGroup = new tagGroup();
		 	newTagGroup.setArticleID((long)id);
		 	newTagGroup.setTagID(tag.getTagID());
			TagGroupRepo.save(newTagGroup);

			
			
			 
	}
	
	public Optional<tagGroup> getTagGroup(int id) {
		Optional<tagGroup> tagGroup = TagGroupRepo.findBytagID(id);
		return tagGroup;
	}

	

	@Override
	public List<Set<tag>> getTagArticle(int id) {
		 ArrayList<tagGroup> tagGroup = (ArrayList<fsu.team2.hub20.models.tagGroup>) TagGroupRepo.findByArticleID(id);
		 List<Set<tag>> result = new ArrayList<Set<tag>>();
		 for (int i = 0; i < tagGroup.size(); i++) {
			   tagGroup tagGroups = tagGroup.get(i);
			   Set<tag> tags = tagGroups.getTags();
			   result.add(tags);
		   }
		
		return result;
	}

	

	


}
