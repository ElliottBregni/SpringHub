package fsu.team2.hub20.Repositorys;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fsu.team2.hub20.models.userBookmark;
import fsu.team2.hub20.models.userSubscriptions;

@Repository
public interface UserSubscriptionsRepo extends JpaRepository<userSubscriptions, Long> {
	
	
	Optional<userSubscriptions> findByTagID(int id);
	List<userSubscriptions> findByuserID(int userID);
	@Modifying
	@Query("delete from userSubscriptions s where s.userID = ?2 AND s.tagID = ?1")
	public void deleteUserSub(int id, int userID);


}
