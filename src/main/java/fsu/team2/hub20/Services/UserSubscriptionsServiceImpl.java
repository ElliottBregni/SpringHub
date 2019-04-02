package fsu.team2.hub20.Services;

import java.net.URL;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fsu.team2.hub20.Repositorys.TagGroupRepository;
import fsu.team2.hub20.Repositorys.UserRepo;
import fsu.team2.hub20.models.User;
import fsu.team2.hub20.models.tagGroup;
import fsu.team2.hub20.models.userBookmark;
import fsu.team2.hub20.models.userSubscriptions;

@Repository
@Transactional
public class UserSubscriptionsServiceImpl implements UserSubscriptionsService {
	@Autowired
	private fsu.team2.hub20.Repositorys.UserSubscriptionsRepo UserSubscriptionsRepo;
	@Autowired
	private  UserRepo userRepo;
	@Autowired
	private TagGroupRepository TagGroupRepo;
	public List<userSubscriptions> getAllSubscriptions() {
		   List<userSubscriptions> result = new ArrayList<userSubscriptions>();
		   List<userSubscriptions> subscriptions = (List<userSubscriptions>) UserSubscriptionsRepo.findAll();
		   for (userSubscriptions subscription : subscriptions) {
			   
			   result.add(subscription);
		   }
		   return result;
	}
	

	


	@Override
	public List<userSubscriptions> getUserSubscription(String username) {
		Optional<User> user = userRepo.findByUsername(username);
		User userObject = user.get();
		List<userSubscriptions> subscription = UserSubscriptionsRepo.findByuserID(userObject.getUserID());
		return subscription;
		
	}

	@Override
	public void addUserSubscription(userSubscriptions userSubscriptions, int id, String username) {
		userSubscriptions newSubscription = new userSubscriptions();
		//Optional<tagGroup> tagGroup = TagGroupRepo.findBytagId(id);
		//tagGroup tagGroupId = tagGroup.get();
		newSubscription.setTagID(id);
		Optional<User> user = userRepo.findByUsername(username);
		User userObject = user.get();
		newSubscription.setUserID((int)userObject.getUserID());
		newSubscription.setNotifyOnNewArticle(1);
		UserSubscriptionsRepo.save(newSubscription);
		
	}

	@Override
	public void deleteSubscription(int id, String username) {
		Optional<User> user = userRepo.findByUsername(username);
		User userObject = user.get();
		UserSubscriptionsRepo.deleteUserSub(id,userObject.getUserID());
		
	}

}
