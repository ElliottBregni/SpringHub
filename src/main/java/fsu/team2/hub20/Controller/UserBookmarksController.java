package fsu.team2.hub20.Controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import fsu.team2.hub20.Repositorys.ArticleRepo;
import fsu.team2.hub20.Services.ArticleService;
import fsu.team2.hub20.Services.UserBookmarksService;
import fsu.team2.hub20.models.Article;
import fsu.team2.hub20.models.User;
import fsu.team2.hub20.models.userBookmark;
import fsu.team2.hub20.Services.UserBookmarksServiceImpl;

@CrossOrigin()
@RestController
@RequestMapping(path = "/api/Bookmarks")
public class UserBookmarksController 
{
	private static final Logger logger = LoggerFactory.getLogger(UserBookmarksController.class);
	
	@Autowired
	private UserBookmarksService UserBookmarksService;
	@Autowired 
	private ArticleService ArticleService;
	
	/*@CrossOrigin()
	@GetMapping(path = "/", produces = "application/json")
	public List<userBookmark> getUserBookmarks()
	{
		return UserBookmarksService.getAllBookmarks();
	}
	*/
	/*@CrossOrigin()
	@GetMapping(path="/{id}", produces = "application/json")
	public Optional<userBookmark> getBookmarkById(@PathVariable("id") long id)
	{
		return UserBookmarksService.getUserBookmark(id);
	}*/
	
	@CrossOrigin("http://localhost:4200")
	//@PostMapping(path = "/", consumes = "application/json", produces = "application/json")
	@RequestMapping(value = "/{id}", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public ResponseEntity<Object> addBookmarks(@RequestBody userBookmark userBookmark,@PathVariable("id") long id)
	{
		
		logger.info(userBookmark.toString());
		UserBookmarksService.addBookmark(userBookmark, id);
		  URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                  .path("/")
                  .buildAndExpand(userBookmark.getArticleID())
                  .toUri();
	
		  return ResponseEntity.created(location).build();
	}
	//Getting all Users bookmarks
	@CrossOrigin()
	@GetMapping(path="/{Username}", produces = "application/json")
	public List<userBookmark> getBookmarkByUser(@PathVariable("Username") String Username)
	{
		return UserBookmarksService.getUserBookmarks(Username);
	}
	@CrossOrigin()
	@RequestMapping(path="/{Username}/{ArticleId}", produces = "application/json", method = RequestMethod.DELETE)
	public void deleteBookmarkByUser(@PathVariable("Username") String Username,@PathVariable("ArticleId") int ArticleId)
	{
		 UserBookmarksService.deleteBookmark(Username,ArticleId);
	}
	//Get method for article content by user bookmark
	@CrossOrigin()
	@GetMapping(path="/{Username}/{page}/{sort}", produces = "application/json")
	public List<Article> getBookmarkedArticleByUser(@PathVariable("Username") String Username,@PathVariable("page") int page,@PathVariable("sort") String sorted)
	{
	
		Pageable pageable = PageRequest.of(page, 3, Sort.by(sorted));
		List<userBookmark> bookmarkId = UserBookmarksService.getUserBookmarks(Username);
		List<Article> article = ArticleService.getBookmarkedArticles(bookmarkId,pageable);
 		return article;	
		
		
	}

}
