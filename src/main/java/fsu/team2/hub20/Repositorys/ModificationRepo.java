package fsu.team2.hub20.Repositorys;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import fsu.team2.hub20.models.modification;

@Repository
public interface ModificationRepo extends JpaRepository<modification, Long> {
	
	
	Optional<modification> findById(long id);

}
