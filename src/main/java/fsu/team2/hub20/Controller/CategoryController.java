package fsu.team2.hub20.Controller;

import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.Set;

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

import fsu.team2.hub20.Services.CategoryService;
import fsu.team2.hub20.models.category;
import fsu.team2.hub20.Services.CategoryServiceImpl;

@CrossOrigin()
@RestController
@RequestMapping(path = "/api/Category")
public class CategoryController 
{
	@Autowired
	private CategoryService categoryService;
	
	
	@CrossOrigin()
	@GetMapping(path="/", produces = "application/json")
	public List<category> getCategories()
	{
		return categoryService.getAllCategories();
	}
	
	/*@CrossOrigin()
	@GetMapping(path="/{id}", produces = "application/json")
	public Optional<category> getCategoryById(@PathVariable("id") Integer id)
	{
		return categoryService.getCategory(id);
	}*/
	@CrossOrigin()
	@GetMapping(path="/{name}", produces = "application/json")
	public Optional<category> getCategoryByName(@PathVariable("name") String name)
	{
		return categoryService.getCategoryByName(name);
	}
	
	
	@CrossOrigin()
	@PostMapping(path="/", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Object> addCategory(@RequestBody category category)
	{
		categoryService.addCategory(category);
		
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
												.path("/{id}")
												.buildAndExpand(category.getCategoryID())
												.toUri();
		
		return ResponseEntity.created(location).build();
	}
	@CrossOrigin()
	@GetMapping(path="/SubCategorys", produces = "application/json")
	public HashMap<category, Set<category>> getCategorysAndSub()
	{
		return categoryService.getSubCategory();
	}
}
