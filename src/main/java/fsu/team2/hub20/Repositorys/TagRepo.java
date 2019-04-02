package fsu.team2.hub20.Repositorys;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import fsu.team2.hub20.models.tag;
@Repository
public interface TagRepo extends JpaRepository<tag, Long> {
	
	//Optional<tag> findById(int id);
	//Optional<tag> findByTagD(long id);

	//Optional<tag> findBytagID(int id);

	Optional<tag> findBytagID(int id);

}
