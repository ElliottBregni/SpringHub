package fsu.team2.hub20.Services;

import java.net.URL;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fsu.team2.hub20.models.modification;

@Repository
@Transactional
public class ModificationServiceImpl implements ModificationService {
	@Autowired
	private fsu.team2.hub20.Repositorys.ModificationRepo ModificationRepo;
	
	public List<modification> getAllModifications() {
		   List<modification> result = new ArrayList<modification>();
		   List<modification> modifications = (List<modification>) ModificationRepo.findAll();
		   for (modification modification : modifications) {
			   
			   result.add(modification);
		   }
		   return result;
	}
	
	public void addModification(modification modification) {
			modification newModification = new modification();
			modification.setArticleID(modification.getArticleID());
			modification.setDateTime(modification.getDateTime());
			modification.setUserID(modification.getUserID());
			modification.setModID(modification.getModID());
			ModificationRepo.save(newModification);
	}
	
	public Optional<modification> getModification(long id) {
		Optional<modification> modifications = ModificationRepo.findById(id);
		return modifications;
	}

}
