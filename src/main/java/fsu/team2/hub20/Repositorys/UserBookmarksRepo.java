package fsu.team2.hub20.Repositorys;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import fsu.team2.hub20.models.userBookmark;

@Repository
public interface UserBookmarksRepo extends JpaRepository<userBookmark, Long> {
	
	
	Optional<userBookmark> findById(long id);

	List<userBookmark> findByUserID(int userID);

	Optional<userBookmark> findByUserIDAndArticleID(int userID, int articleId);

	@Modifying
	@Query("delete from userBookmark b where b.userID = ?2 AND b.articleID = ?1")
	void deleteByuser(int ArticleId, int userId);

}
