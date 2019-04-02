package fsu.team2.hub20.Services;


import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fsu.team2.hub20.models.Article;
import fsu.team2.hub20.models.User;
import fsu.team2.hub20.security.services.UserPrinciple;
import fsu.team2.hub20.Repositorys.UserRepo;
@Repository
@Transactional
public class UserServiceImpl implements UserService {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Autowired
	private UserRepo UserRepo;
	
	  public List<User> getAllUsers(){
		  List<User> result = new ArrayList<User>();
		  List<User> users = (List<User>) UserRepo.findAll();
		  for (User user : users) {
			  
			  result.add(user);
		  }
		  return result;
	  }
	
	  public void addUser(User user) {
		  User newuser = new User();
		  newuser.setUserID(1);
		  newuser.setFName(user.getFName());
		  newuser.setLName(user.getLName());
		  newuser.setUserEmail(user.getUserEmail());
		  newuser.setUserPhone(user.getUserPhone());
		  newuser.setColorCorrection(user.getColorCorrection());
		  newuser.setDarkMode(user.getDarkMode());
		  newuser.setNotifyOnMention(user.getNotifyOnMention());
		  newuser.setDesignationID(user.getDesignationID());
		  newuser.setDepartmentID(user.getDepartmentID());
		  newuser.setFranchiseID(user.getFranchiseID());
		  
	  }
	  @Override
	public Optional<User> findById(long id) {
		Optional<User> user = UserRepo.findById(id);
        return user;
    }

	@Override
	public Optional<User> getUser(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<User> findByUsername(String username) {
		Optional<User> user = UserRepo.findByUsername(username);
		return user;
	}
	
	
	

	

}