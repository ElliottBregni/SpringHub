package fsu.team2.hub20.Repositorys;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import fsu.team2.hub20.models.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

	
	Optional<User> findById(long id);

	User findByusername(String username);
	Optional<User> findByUsername(String username);
}