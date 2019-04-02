package fsu.team2.hub20.Controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import fsu.team2.hub20.Services.ArticleService;
import fsu.team2.hub20.Services.FranchiseService;
import fsu.team2.hub20.models.Article;
import fsu.team2.hub20.models.franchise;
import fsu.team2.hub20.Services.FranchiseServiceImpl;

@CrossOrigin()
@RestController
@RequestMapping(path = "api/Franchise")
public class FranchiseController 
{
	@Autowired
	private fsu.team2.hub20.Services.FranchiseService FranchiseService;
	@Autowired
    private ArticleService articleService;
	@CrossOrigin()
	@GetMapping(path = "/", produces = "application/json")
	public List<franchise> getFranchises()
	{
		return FranchiseService.getAllFranchises();
	}
	
	@CrossOrigin()
	@GetMapping(path = "/{id}", produces = "application/json")
	public Optional<franchise> getFranchiseById(@PathVariable("id") long id)
	{
		return FranchiseService.getFranchise(id);
	}
	
	@CrossOrigin()
	@PostMapping(path = "/", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Object> addFranchise(@RequestBody franchise franchise)
	{
		FranchiseService.addFranchise(franchise);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
												  .path("/{id}")
												  .buildAndExpand(franchise.getFranchiseID())
												  .toUri();
		
		return ResponseEntity.created(location).build();
	}
	 @CrossOrigin()
	    //path for method = (/Api/Articles) + /
	    @GetMapping(path="/{franchise}/{type}/{page}/{sorted}", produces = "application/json")
	    public List<Article> getArticlesByFranchiseandType(@PathVariable("page") int page,@PathVariable("franchise") long  franchise,@PathVariable("type") String type,@PathVariable("sorted") String sorted, HttpServletResponse response)
	    {
	    	Pageable pageable = PageRequest.of(page, 3, Sort.by(sorted));
	    	//Method from article service class getAllArticles
	    	//Returns a List of all articles from the database
	    	
	        return articleService.getFeaturedArticle(type,franchise,pageable);
	    }
}
