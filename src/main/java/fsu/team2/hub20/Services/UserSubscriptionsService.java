package fsu.team2.hub20.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import fsu.team2.hub20.models.userBookmark;
import fsu.team2.hub20.models.userSubscriptions;

@Service
public interface UserSubscriptionsService {
	
	public List<userSubscriptions> getAllSubscriptions();
	public void addUserSubscription(userSubscriptions userSubscriptions, int id, String username);
	public List<userSubscriptions> getUserSubscription(String username);
	public void deleteSubscription(int id, String username);

}
