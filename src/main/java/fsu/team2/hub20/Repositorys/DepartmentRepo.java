package fsu.team2.hub20.Repositorys;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import fsu.team2.hub20.models.department;

@Repository
public interface DepartmentRepo extends CrudRepository<department, Long> {
	
	Optional<department> findById(long id);

}
