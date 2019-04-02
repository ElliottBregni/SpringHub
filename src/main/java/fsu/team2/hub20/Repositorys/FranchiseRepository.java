package fsu.team2.hub20.Repositorys;


import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fsu.team2.hub20.models.Article;
import fsu.team2.hub20.models.Comments;
import fsu.team2.hub20.models.franchise;
/**
 * 
 * @author bregn
 *
 */
@Repository
public interface FranchiseRepository extends JpaRepository<franchise, Long> {

	Optional<franchise> findByfranchiseCity(String franchise2);

	Optional<franchise> findByfranchiseID(Integer id); 
	

	
	
}