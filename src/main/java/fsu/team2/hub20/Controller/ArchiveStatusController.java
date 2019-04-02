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

import fsu.team2.hub20.Services.ArchiveStatusService;
import fsu.team2.hub20.models.archiveStatus;
import fsu.team2.hub20.Services.ArchiveStatusServiceImpl;

@CrossOrigin()
@RestController
@RequestMapping(path = "/api/ArchiveStatus")
public class ArchiveStatusController 
{
	@Autowired
	private ArchiveStatusService ArchiveStatusService;
	
	@CrossOrigin()
	@GetMapping(path = "/", produces = "application/json")
	public List<archiveStatus> getArchiveStatus()
	{
		return ArchiveStatusService.getAllStatuses();
	}
	
	@CrossOrigin()
	@GetMapping(path = "/{id}", produces = "application/json")
	public Optional<archiveStatus> getStatusById(@PathVariable("id") long id)
	{
		return ArchiveStatusService.getArchiveStatus(id);
	}
	
	@CrossOrigin()
	@PostMapping(path ="/", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Object> addArchiveStatus(@RequestBody archiveStatus archiveStatus)
	{
		ArchiveStatusService.addArchiveStatus(archiveStatus);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
												  .path("/{id}")
												  .buildAndExpand(archiveStatus.getArchiveID())
												  .toUri();
		
		return ResponseEntity.created(location).build();
	}

}
