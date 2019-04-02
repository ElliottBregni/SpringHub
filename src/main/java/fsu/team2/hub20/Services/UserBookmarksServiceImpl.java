package fsu.team2.hub20.Services;

import java.net.URL;
import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fsu.team2.hub20.Repositorys.UserRepo;
import fsu.team2.hub20.Controller.UserBookmarksController;
import fsu.team2.hub20.Repositorys.UserBookmarksRepo;
import fsu.team2.hub20.models.User;
import fsu.team2.hub20.models.userBookmark;

@Repository
@Transactional
public class UserBookmarksServiceImpl implements UserBookmarksService {
	private static final Logger logger = LoggerFactory.getLogger(UserBookmarksServiceImpl.class);
	@Autowired
	private UserBookmarksRepo UserBookmarksRepo;
	@Autowired
	private  UserRepo userRepo;
	public List<userBookmark> getAllBookmarks() {
		   List<userBookmark> result = new ArrayList<userBookmark>();
		   List<userBookmark> bookmarks = (List<userBookmark>) UserBookmarksRepo.findAll();
		   for (userBookmark bookmark : bookmarks) {
			   
			   result.add(bookmark);
		   }
		   return result;
	}
	
	public void addBookmark(userBookmark bookmark, long id) {
			userBookmark newBookmark = new userBookmark();
			newBookmark.setArticleID((int) id);
			newBookmark.setUserID(bookmark.getUserID());
			newBookmark.setShowInLink(bookmark.getShowInLinks());
			UserBookmarksRepo.save(newBookmark);
	}
	
	public Optional<userBookmark> getUserBookmark(long id) {
		Optional<userBookmark> bookmark = UserBookmarksRepo.findById(id);
		return bookmark;
	}
	public List<userBookmark> getUserBookmarks(String username) {
			Optional<User> user = userRepo.findByUsername(username);
			User userObject = user.get();
			
		   List<userBookmark> result = new ArrayList<userBookmark>();
		   List<userBookmark> bookmarks = (List<userBookmark>) UserBookmarksRepo.findByUserID(userObject.getUserID());
		   for (userBookmark bookmark : bookmarks) {
			   
			   result.add(bookmark);
		   }
		   return result;
	}
	public void deleteBookmark(String username, int ArticleId) {
		Optional<User> user = userRepo.findByUsername(username);
		User userObject = user.get();
		logger.info(userObject.toString());
		Optional<userBookmark> bookmark = UserBookmarksRepo.findByUserIDAndArticleID(userObject.getUserID(), ArticleId);
		userBookmark bookmarkObject = bookmark.get();
		UserBookmarksRepo.deleteByuser(ArticleId,userObject.getUserID());
	
	}

	

	
	
}
