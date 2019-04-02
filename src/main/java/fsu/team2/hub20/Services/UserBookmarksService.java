package fsu.team2.hub20.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import fsu.team2.hub20.models.userBookmark;
@Service
public interface UserBookmarksService {

	public List<userBookmark> getAllBookmarks();
	public void addBookmark(userBookmark userBookmark, long id);
	public Optional<userBookmark> getUserBookmark(long id);
	public List<userBookmark> getUserBookmarks(String username);
	public void deleteBookmark(String username, int ArticleId);
	
}
