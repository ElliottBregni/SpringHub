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

import fsu.team2.hub20.models.Designation;
import fsu.team2.hub20.Services.DesignationServiceImpl;

@CrossOrigin()
@RestController
@RequestMapping(path = "api/Designation")
public class DesignationController 
{
	@Autowired
	private fsu.team2.hub20.Services.DesignationService DesignationService;
	
	@CrossOrigin()
	@GetMapping(path = "/", produces = "application/json")
	public List<Designation> getDesignation()
	{
		return DesignationService.getAllDesignations();
	}
	
	@CrossOrigin()
	@GetMapping(path = "/{id}", produces = "application/json")
	public Optional<Designation> getDesignationById(@PathVariable("id") long id)
	{
		return DesignationService.getDesignation(id);
	}
	
	@CrossOrigin()
	@PostMapping(path = "/", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Object> addDesignation(@RequestBody Designation designation)
	{
		DesignationService.addDesignation(designation);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
												  .path("/{id}")
												  .buildAndExpand(designation.getDesignationID())
												  .toUri();
		
		return ResponseEntity.created(location).build();
	}
	

}
