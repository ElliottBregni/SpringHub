package fsu.team2.hub20.Services;

import java.net.URI;
import java.net.URL;
import java.util.*;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.JsonParser;

import fsu.team2.hub20.Repositorys.ArticleRepo;
import fsu.team2.hub20.Repositorys.CommentRepository;
import fsu.team2.hub20.models.Article;
import fsu.team2.hub20.models.Comments;
import fsu.team2.hub20.models.category;
import fsu.team2.hub20.models.department;
import fsu.team2.hub20.models.franchise;
import fsu.team2.hub20.models.tagGroup;
import fsu.team2.hub20.models.userBookmark;

/**
 * 
 * @author bregn
 *
 */
@Repository
@Transactional
public class ArticleServiceImpl implements ArticleService {
	/**
	 * Our Crud class for Article
	 */
	@Autowired
    private ArticleRepo ArticleRepo;
	@Autowired
    private CommentRepository CommentRepo;
	@Autowired 
	private CategoryServiceImpl categoryService;
	@Autowired 
	private FranchiseService franchiseService;
	@Autowired 
	TagGroupService tagService;
	/**
	 * 
	 */
	 public List<Article> getAllArticles(Pageable pageable) {
		 	//Result array list
		 //Pageable page = PageRequest.of(1,5);
		 	List<Article> result = new ArrayList<Article>();
		 	//findAll(); method from  Article crudrepo
		 	Page<Article> articles = ArticleRepo.findAll(pageable);
		 	
	        for (Article article : articles) {
	        	
	            result.add(article);
	        }
	        return result;
	    }
	/**
	 * 
	 * @return
	 */
	 public List<Object[]> getArticleQuery() {
		 	
		 	List<Object[]> result = new ArrayList<Object[]>();
		 	List<Object[]> articles = ArticleRepo.JoinArticleComment();
	        for (Object[] article : articles) {
	        	
	            result.add(article);
	        }
	        return result;
	    }
	/**
	 * This is called in post method of our article contoller 
	 * 
	 */
	public void addArticle(Article article) {
	        Article newArticle = new Article();
	        department department = new department();
	        department.setDepartmentID((int) article.getDepartmentId());
	        		
	        category category = new category();
	        category.setCategoryID((int) article.getCategoryId());
	        franchise franchise = new franchise();
	        franchise.setFranchiseID(article.getFranchiseId());
	        Date date = new Date();
	        
	        //Sets Id of aricle
	        newArticle.setId(1);
	        //
	        newArticle.setTitle(article.getTitle());
	        newArticle.setContent(article.getContent());
	        newArticle.setCategoryId(1);
	        newArticle.setType("");
	        newArticle.setDate(date);
	        newArticle.setFrachiseId(article.getFranchiseId());
	        newArticle.setCategoryId(article.getCategoryId());
	        newArticle.setDepartmentID(article.getDepartmentId());
	        //newArticle.setUrl(location.toString());
	        //newArticle.setUserId(4);
	        newArticle.setDepartmentID(1);
	        //This saves the new article to the database
	        ArticleRepo.save(newArticle);
	        
	        
	       
	 }
	//Optional is a class of CrudRepo that returns a single column
	public Optional<Article> getArticle(long id) {
		//Pageable page = PageRequest.of(1,5);
		Optional<Article> article = ArticleRepo.findById(id);
        return article;
    }
	/*public Optional<Article> getArticleBy(long id) {
		Optional<Article> article = ArticleRepo.findBycategoryID(id);
        return article;
    }*/
	
	@Override
	public Comments createComment(Comments comment) {
		CommentRepo.save(comment);
		return comment;
	}
	@Override
	public List<Comments> findAllComments(long id) {
		List<Comments> Comments = CommentRepo.findByArticleID(id);
		return Comments;
	}
	@Override
	public void deleteCommentById(long id) {
		
	}
	@Override
	public Comments findComment(long id) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Comments updateComment(long id, Comments comment) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<Object[]> JoinArticleComment() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<Comments> findByArticleId(long id) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Page<Article> getAllArticleByCategory(String category, Pageable pageable) {
		Optional<category> newcategory = categoryService.getCategoryByName(category);
		category cat = newcategory.get();
		
		Page<Article> article = ArticleRepo.findBycategoryID(cat.getCategoryID(),pageable);
		return (Page<Article>) article;
	}
	@Override
	public Page<Article> getAllArticleByFranchise(String franchise, Pageable pageable) {
		Optional<franchise> newFranchise = franchiseService.getFranchiseByName(franchise);
		franchise fran = newFranchise.get();
		
		Page<Article> article = ArticleRepo.findByfranchiseID(fran.getFranchiseID(),pageable);
		return (Page<Article>) article;
	}
	
	public Page<Article> getByFranchiseAndCategory(String franchise, String category, Pageable pageable) {
		Optional<fsu.team2.hub20.models.franchise> newFranchise = franchiseService.getFranchiseByName(franchise);
		Optional<fsu.team2.hub20.models.category> newcategory = categoryService.getCategoryByName(category);
		category categorys = newcategory.get();
		franchise franchises = newFranchise.get();
		Page<Article> article = (Page<Article>) ArticleRepo.findByfranchiseIDAndCategoryID(categorys.getCategoryID(),franchises.getFranchiseID(), pageable);
		return article;
		
	}
	@Override
	public Page<Article> getByTag(String tag) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void deleteById(long id) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public List<Article> getBookmarkedArticles(List<userBookmark> bookmarkId, Pageable pageable) {
		List<Long> list = new ArrayList();
		for(int i = 0; i < bookmarkId.size(); i++) {
			userBookmark bookmark = bookmarkId.get(i);
			int id = bookmark.getArticleID();
			list.add((long) id);
			
		}
		List<Article> article = ArticleRepo.findByArticleIDIn(list, pageable);
		
		return article;
	}
	public List<Article> getFeaturedArticle(String type, long franchise, Pageable pageable) {
		
		List<Article> article = ArticleRepo.findByfranchiseIDAndArticleType(franchise,type, pageable);
        return article;
    }
	@Override
	public List<Article> getAllProjects(int id) {
		List<Article> articles = ArticleRepo.findByArticleType(id);
		return articles;
	}
	@Override
	public List<Article> forSettingTags(String Title) {
		Pageable pageable = PageRequest.of(1, 3,Sort.by("createdAt"));
		List<Article> articles = ArticleRepo.findByTitle(Title, pageable);
		
		return articles;
		
	}
	


}
