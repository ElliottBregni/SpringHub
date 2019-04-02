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

import fsu.team2.hub20.Services.ContactsService;
import fsu.team2.hub20.models.contacts;
import fsu.team2.hub20.Services.ContactsServiceImpl;

@CrossOrigin()
@RestController
@RequestMapping(path = "/api/Contacts")
public class ContactsController 
{
	@Autowired
	private ContactsService ContactsService;
	
	@CrossOrigin()
	@GetMapping(path = "/", produces = "application/json")
	public List<contacts> getContacts()
	{
		return ContactsService.getAllContacts();
	}
	
	@CrossOrigin()
	@GetMapping(path = "/{id}", produces = "appliation/json")
	public Optional<contacts> getContactById(@PathVariable("id") long id)
	{
		return ContactsService.getContact(id);
	}
	
	@CrossOrigin()
	@PostMapping(path = "/", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Object> addContact(@RequestBody contacts contact)
	{
		ContactsService.addContact(contact);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
												  .path("/{id}")
												  .buildAndExpand(contact.getContactPricipal())
												  .toUri();
		
		return ResponseEntity.created(location).build();
	}

}
