package fsu.team2.hub20.Controller;

import java.net.URI;
import java.security.Principal;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

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

import fsu.team2.hub20.Services.UserService;
import fsu.team2.hub20.models.User;




@CrossOrigin()
@RestController
//This was still set to /api/Articles this is important to the controller 
@RequestMapping(path = "/api/Users")
public class UserController 
{
	@Autowired
	private UserService userService;
	
	
	
	
	
	
	@CrossOrigin()
	@GetMapping(path="/", produces = "application/json")
	public List<User> getUsers()
	{
		return userService.getAllUsers();
	}
	@CrossOrigin()
	@GetMapping(path="{username}/{id}/", produces = "application/json")
	public Optional<User> getUserById(@PathVariable("id") long id)
	{
		return userService.getUser(id);
	}
	@CrossOrigin("http://localhost:4200")
	@GetMapping(path="/{username}", produces = "application/json")
	public Optional<User> getUserName(@PathVariable("username") String username)
	{
		return userService.findByUsername(username);
	}
	
	
	@CrossOrigin()
	@PostMapping(path="/", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Object> addUser(@RequestBody User user)
	{
		userService.addUser(user);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
											.path("/{id}")
											.buildAndExpand(user.getUserID())
											.toUri();
		
		return ResponseEntity.created(location).build();
	}

}