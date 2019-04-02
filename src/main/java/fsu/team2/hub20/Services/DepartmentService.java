package fsu.team2.hub20.Services;
import  fsu.team2.hub20.models.department;
import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
@Lazy
@Service
public interface DepartmentService {
	
	public List<department> getAllDepartments();
	public void addDepartment(department department);
	public Optional<department> getDepartment(long id);
	public List<department> findAll();
	public Optional<fsu.team2.hub20.models.department> findById(long id);
	
}
