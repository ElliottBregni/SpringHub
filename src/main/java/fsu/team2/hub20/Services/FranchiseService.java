package fsu.team2.hub20.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import fsu.team2.hub20.models.franchise;

@Service
public interface FranchiseService {
	
	public List<franchise> getAllFranchises();
	public void addFranchise(franchise franchise);
	public Optional<franchise> getFranchise(long id);
	public Optional<franchise> getFranchiseByName(String franchise);

}
