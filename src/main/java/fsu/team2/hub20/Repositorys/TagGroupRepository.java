package fsu.team2.hub20.Repositorys;


import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fsu.team2.hub20.models.tag;
import fsu.team2.hub20.models.tagGroup;
/**
 * 
 * @author bregn
 *
 */
@Lazy
@Repository
public interface TagGroupRepository extends JpaRepository<tagGroup, Long> {

	List<tagGroup> findByArticleID(int id);



	Optional<tagGroup> findBytagID(int id); 

}