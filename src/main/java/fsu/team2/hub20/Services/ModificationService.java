package fsu.team2.hub20.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import fsu.team2.hub20.models.modification;
@Service
public interface ModificationService {
	
	public List<modification> getAllModifications();
	public void addModification(modification modification);
	public Optional<modification> getModification(long id);

}
