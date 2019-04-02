package fsu.team2.hub20.Services;

import java.net.URL;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fsu.team2.hub20.Repositorys.FranchiseRepository;
import fsu.team2.hub20.models.franchise;

@Repository
@Transactional
public class FranchiseServiceImpl implements FranchiseService {
	@Autowired
	private FranchiseRepository FranchiseRepo;
	
	public List<franchise> getAllFranchises() {
		   List<franchise> result = new ArrayList<franchise>();
		   List<franchise> franchises = (List<franchise>) FranchiseRepo.findAll();
		   for (franchise franchise : franchises) {
			   
			   result.add(franchise);
		   }
		   return result;
	}
	
	public void addFranchise(franchise franchise) {
			franchise newFranchise = new franchise();
			newFranchise.setFranchiseID(franchise.getFranchiseID());
			newFranchise.setFranchiseCity(franchise.getFranchiseCity());
			newFranchise.setFranchiseState(franchise.getFranchiseState());
			newFranchise.setFranchiseZip(franchise.getFranchiseZip());
			newFranchise.setFranchisePhone(franchise.getFranchisePhone());
			FranchiseRepo.save(newFranchise);
	}
	
	public Optional<franchise> getFranchise(long franchise2) {
		Optional<franchise> franchise = FranchiseRepo.findById(franchise2);
		return franchise;
	}

	public Optional<franchise> getFranchiseByName(String franchise2) {
		Optional<franchise> franchise = FranchiseRepo.findByfranchiseCity(franchise2);
		return franchise;
	}

	

}
