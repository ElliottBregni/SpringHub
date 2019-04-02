package fsu.team2.hub20.Services;

import java.net.URI;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


import fsu.team2.hub20.models.Article;
import fsu.team2.hub20.models.Comments;
import fsu.team2.hub20.models.userBookmark;
@Service
public interface ArticleService {
	/**
	 * 
	 * @return
	 */
	 public List<Article> getAllArticles(Pageable Pageable);
	 /**
	  * 
	  * @param article
	  */
	 public void addArticle(Article article);
	 /**
	  * 
	  * @param id
	  * @return
	  */
	public Optional<Article> getArticle(long id);
	/**
	 * 
	 * @param comment
	 * @return
	 */
	public Comments createComment(Comments comment);
	/**
	 * 
	 * @param id
	 * @return
	 */
	
	/**
	 * 
	 * @param id
	 * @return
	 */
	public List<Comments> findAllComments(long id);

	/**
	 * 
	 * @param id
	 */
	public void deleteCommentById(long id);
	/**
	 * 
	 * @param id
	 * @return
	 */
	public Comments findComment(long id);
	/**
	 * 
	 * @param id
	 * @param comment
	 * @return
	 */
	public Comments updateComment(long id, Comments comment);
	public List<Object[]> JoinArticleComment();
	public List<Object[]> getArticleQuery();
	public List<Comments> findByArticleId(long id);
	public Page<Article> getAllArticleByCategory(String category, Pageable pageable);
	public Page<Article> getAllArticleByFranchise(String franchise, Pageable pageable);
	public Page<Article> getByFranchiseAndCategory(String franchise, String franchise2, Pageable pageable);
	public Page<Article> getByTag(String tag);
	public void deleteById(long id);
	public List<Article> getBookmarkedArticles(List<userBookmark> bookmarkId, Pageable pageable);;
	public List<Article> getFeaturedArticle(String type, long franchise, Pageable pageable);
	public List<Article> getAllProjects(int id);
	public List<Article> forSettingTags(String aT);

	

}
