package fsu.team2.hub20.Controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

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


import fsu.team2.hub20.Services.CommentsService;
import fsu.team2.hub20.models.Comments;
import fsu.team2.hub20.Services.CommentsServiceImpl;

@CrossOrigin()
@RestController
@RequestMapping(path = "/api/Comments")
public class CommentsController 
{
	@Autowired
	private CommentsService commentsService;
	
	@CrossOrigin()
	@GetMapping(path="/", produces = "application/json")
	public List<Comments> getComments()
	{
		return commentsService.getAllComments();
	}
	
	@CrossOrigin()
	@GetMapping(path = "/{id}", produces = "application/json")
	public List<Comments> getCommentById(@PathVariable("id") long id)
	{
		return commentsService.getByArticle(id);
	}
	
	@CrossOrigin()
	@PostMapping(path = "/", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Object> addComment(@RequestBody Comments comment)
	{
		commentsService.addComment(comment);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
												  .path("/{id}")
												  .buildAndExpand(comment.getCommentID())
												  .toUri();
		
		return ResponseEntity.created(location).build();
	}

}
