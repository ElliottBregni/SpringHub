package fsu.team2.hub20.Controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import fsu.team2.hub20.Services.DepartmentService;
import fsu.team2.hub20.models.department;
import fsu.team2.hub20.Services.DepartmentServiceImpl;

@CrossOrigin()
@RestController
@RequestMapping(path = "/api/departments")
public class DepartmentController 
{
	@Autowired
	private DepartmentService departmentService;
	
	@CrossOrigin()
	@GetMapping(path="/", produces = "application/json")
	public List<department> getDepartments()
	{
		return departmentService.getAllDepartments();
	}
	
	@CrossOrigin()
	@GetMapping(path="/{id}", produces = "application/json")
	public Optional<department> getDepartmentById(@PathVariable("id") long id)
	{
		return departmentService.getDepartment(id);
	}
	
	@CrossOrigin()
	@PostMapping(path="/", consumes = "application/json", produces = "application/json")
	public ResponseEntity<department> addDepartment(@RequestBody department department)
	{
		departmentService.addDepartment(department);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
													.path("/{id}")
													.buildAndExpand(department.getDepartmentID())
													.toUri();
		
		return ResponseEntity.created(location).build();
	}

}
