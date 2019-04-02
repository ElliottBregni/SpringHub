package fsu.team2.hub20.Repositorys;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fsu.team2.hub20.models.Article;
import fsu.team2.hub20.models.Comments;
/**
 * 
 * @author bregn
 *
 */
@Repository
public interface CommentRepository extends JpaRepository<Comments, Long> { 
	
	Optional<Comments> findById(long Id);


	List<Comments> findByArticleID(long id);


	List<Comments> findByArticleID(long id, Sort sort);


	
	
	
}