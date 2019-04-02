package fsu.team2.hub20.Controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import fsu.team2.hub20.Repositorys.UserSubscriptionsRepo;
import fsu.team2.hub20.Services.UserSubscriptionsService;
import fsu.team2.hub20.models.userBookmark;
import fsu.team2.hub20.models.userSubscriptions;
import fsu.team2.hub20.Services.UserSubscriptionsServiceImpl;

@CrossOrigin()
@RestController
@RequestMapping(path = "/api/UserSubscriptions")
public class UserSubscriptionsController 
{
	@Autowired
	private  UserSubscriptionsService UserSubscriptionsService;
	
	@CrossOrigin()
	@GetMapping(path = "/", produces = "application/json")
	public List<userSubscriptions> getAllSubscriptions()
	{
		return UserSubscriptionsService.getAllSubscriptions();
	}
	/*
	@CrossOrigin()
	@GetMapping(path = "/{id}", produces = "application/json")
	public Optional<userSubscriptions> getSubscriptionsById(@PathVariable("id") long id)
	{
		return UserSubscriptionsService.getUserSubscriptions(id);
	}*/
	
	
	@CrossOrigin("http://localhost:4200")
	@GetMapping(path="/{Username}", produces = "application/json")
	public List<userSubscriptions> getSubUser(@PathVariable("Username") String Username)
	{
		return UserSubscriptionsService.getUserSubscription(Username);
	}
	@CrossOrigin()
	@PostMapping(path = "/{id}/{Username}", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Object> addUsersSubscription(@RequestBody userSubscriptions userSubscriptions, @PathVariable("id") int id, @PathVariable("Username") String Username)
	{
		UserSubscriptionsService.addUserSubscription(userSubscriptions,id,Username);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
												  .path("/{id}")
												  .buildAndExpand(userSubscriptions.getTagID())
												  .toUri();
		
		return ResponseEntity.created(location).build();
	}
	@CrossOrigin("http://localhost:4200")
	@DeleteMapping(path = "/{id}/{Username}", produces = "application/json")
	public void deleteUsersSubscription( @PathVariable("id") int id, @PathVariable("Username") String Username)
	{
		 UserSubscriptionsService.deleteSubscription(id,Username);
		
		
	}
}
