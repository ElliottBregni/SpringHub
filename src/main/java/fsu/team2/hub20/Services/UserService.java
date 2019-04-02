package fsu.team2.hub20.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import fsu.team2.hub20.models.User;
@Service
public interface UserService  {
	
	public List<User> getAllUsers();
	public void addUser(User user);
	public Optional<User> getUser(long id);
	Optional<User> findById(long id);
	Optional<User> findByUsername(String username);


}