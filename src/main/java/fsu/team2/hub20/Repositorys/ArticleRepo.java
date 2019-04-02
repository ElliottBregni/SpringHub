package fsu.team2.hub20.Repositorys;


import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import fsu.team2.hub20.models.Article;
import fsu.team2.hub20.models.userBookmark;
/**
 * 
 * @author bregn
 * This class extends CrudRepository
 * it has inherates a few useful methods from CrudRepo that allow for crud operations on the database
 * https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/repository/CrudRepository.html
 * passing CrudRepository our Article entity mapps these methods to our database
 */
@Repository

public interface ArticleRepo extends JpaRepository<Article, Long> {
	/**
	 * 
	 * 
	 * @param id
	 * @return
	 * This returns a single record
	 */
	Page<Article> findAll(Pageable Pageable);
	Optional<Article> findById(long id);
	Page<Article> findBycategoryID(long id, Pageable pageable);
	/**
	 * Stored Procfures
	 * https://dzone.com/articles/calling-stored-procedures-from-spring-data-jpa
	 * @return
	 */
	
	/*@Procedure(name = "in_only_test")
    void inOnlyTest(@Param("inParam1") String inParam1);
	/**
	 * https://dzone.com/articles/calling-stored-procedures-from-spring-data-jpa
	 * @return
	 */
	
	//Native Query for joining title content and commentContent
	@Query(value = "SELECT r.title AS TITLE, r.articleContent, c.commentContent from Article r inner join Comments c on r.articleID=c.articleID ")
	List<Object[]> JoinArticleComment();
	
	Page<Article> findByfranchiseID(long l, Pageable pageable);

	Page<Article> findByfranchiseIDAndCategoryID(int categoryID, long l, Pageable pageable);
	List<Article> findByArticleIDIn(List<Long> list, Pageable pageable);
	List<Article> findByfranchiseIDAndArticleType(long id, String type, Pageable pageable);
	List<Article> findByArticleType(int id);
	List<Article> findByTitleAndCreatedAt(String title, Date date);
	List<Article> findByTitle(String title, Pageable pageable);
	@Query(value = "SELECT MAX(articleID) from Article")
	List<Object[]> getLastArticleID();
	
	
	
	
	
}