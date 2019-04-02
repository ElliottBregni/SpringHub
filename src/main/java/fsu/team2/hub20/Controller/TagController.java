package fsu.team2.hub20.Controller;

import java.net.URI;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import fsu.team2.hub20.Repositorys.TagGroupRepository;
import fsu.team2.hub20.Services.ArticleService;
import fsu.team2.hub20.Services.TagService;
import fsu.team2.hub20.models.Article;
import fsu.team2.hub20.models.tag;
import fsu.team2.hub20.models.tagGroup;


@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(path = "/api/Tag")
@Lazy
public class TagController 
{
	@Autowired
	private TagService tagService;
	 @Autowired
	private ArticleService articleService;
	@Autowired
	private TagGroupRepository TagGroupRepo;
	@CrossOrigin("http://localhost:4200")
	@GetMapping(path="/", produces = "application/json")
	public List<tag> getTags()
	{
		return tagService.getAllTags();
	}
	

	//Get tags by articleID
	@CrossOrigin("http://localhost:4200")
	@GetMapping(path="/{id}", produces = "application/json")
	public Optional<tag> getTagByArticleId(@PathVariable("id") int id)
	{
		return tagService.getTag(id);
	}
	@CrossOrigin("http://localhost:4200")
	@PostMapping(path="/Post/{AT}", consumes = "application/json")
	public void addTag(@RequestBody tag tag,@PathVariable("AT") String AT)
	{
		
		tagService.addTag(tag,AT);
		
		
	}
	

}
