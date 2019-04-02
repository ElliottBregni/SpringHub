package fsu.team2.hub20.Services;

import java.net.URL;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import fsu.team2.hub20.Repositorys.DesignationRepo;
import fsu.team2.hub20.models.Designation;

@Repository
@Transactional
public class DesignationServiceImpl implements DesignationService {
	@Autowired
	private DesignationRepo DesignationRepo;
	
	public List<Designation> getAllDesignations() {
		   List<Designation> result = new ArrayList<Designation>();
		   List<Designation> designations = (List<Designation>) DesignationRepo.findAll();
		   for (Designation designation : designations) {
			   
			   result.add(designation);
		   }
		   return result;
	}
	
	public void addDesignation(Designation designation) {
			Designation newDesignation = new Designation();
			newDesignation.setDesignationID(designation.getDesignationID());
			newDesignation.setDesignationType(designation.getDesignationType());
			DesignationRepo.save(newDesignation);
	}
	
	public Optional<Designation> getDesignation(long id) {
		Optional<Designation> designation = DesignationRepo.findById(id);
		return designation;
	}

}
