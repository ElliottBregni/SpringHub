package fsu.team2.hub20.Controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import fsu.team2.hub20.models.tag;
import fsu.team2.hub20.models.tagGroup;
import fsu.team2.hub20.Services.TagGroupService;
import fsu.team2.hub20.Services.TagGroupServiceImpl;
import fsu.team2.hub20.Services.TagService;

@CrossOrigin()
@RestController
@RequestMapping(path = "/api/tagGroup")
@Lazy
public class TagGroupContoller 
{
	@Autowired
	private TagGroupService tagGroupService;
	
	@CrossOrigin()
	@GetMapping(path = "/", produces = "application/json")
	public List<tagGroup> getTagGroups()
	{
		return tagGroupService.getAllTagGroups();
	}
	/*
	@CrossOrigin()
	@GetMapping(path="/{id}", produces = "application/json")
	public Optional<tagGroup> getTagGroupById(@PathVariable("id") long id)
	{
		return tagGroupService.getTagGroup(id);
	}*/
	//Get tags by article
	@CrossOrigin()
	@GetMapping(path="/{id}", produces = "application/json")
	public List<Set<tag>> getTagGroupByArticle(@PathVariable("id") int id)
	{
		return tagGroupService.getTagArticle(id);
	}
	
	/*@CrossOrigin()
	@PostMapping(path="/", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Object> addTagGroup(@RequestBody tagGroup tagGroup)
	{
		tagGroupService.addTagGroup(tagGroup);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
												  .path("/{id}")
												  .buildAndExpand(tagGroup.getArticleID())
												  .toUri();
		
		return ResponseEntity.created(location).build();
	}*/

}
