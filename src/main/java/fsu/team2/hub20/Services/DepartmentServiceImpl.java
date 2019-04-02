package fsu.team2.hub20.Services;
import  fsu.team2.hub20.models.department;
import java.net.URL;
import java.util.*;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Lazy
@Repository
@Transactional
public class DepartmentServiceImpl implements DepartmentService {
	@Autowired
	private fsu.team2.hub20.Repositorys.DepartmentRepo DepartmentRepo;
	
	public List<department> getAllDepartments() {
		   List<department> result = new ArrayList<department>();
		   List<department> departments = (List<department>) DepartmentRepo.findAll();
		   for (department department : departments) {
			   
			   result.add(department);
		   }
		   return result;
	}
	
	public void addDepartment(department department) {
		department newDepartment = new department();
		newDepartment.setDepartmentID(1);
		newDepartment.setDepartmentName(department.getDepartmentName());
		//DepartmentRepo.save(newDepartment);
	}
	
	public Optional<department> getDepartment(long id) {
		Optional<department> department =  DepartmentRepo.findById(id);
		return department;
	}

	@Override
	public List<fsu.team2.hub20.models.department> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<fsu.team2.hub20.models.department> findById(long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
