package fsu.team2.hub20.Controller;


import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import fsu.team2.hub20.Services.ArticleService;
import fsu.team2.hub20.models.Article;

import fsu.team2.hub20.models.Comments;




import org.springframework.data.domain.Sort;


/**
 * 
 * @author bregn
 * more comments
 * another change
 */
/**
 * 
 * @author bregn
 * REST API map for contoller class
 */
//Cross Orgin is used to enable CORS we really done need this because our front end projects makes requests from the same URL but helpful when developing
//For instance i could make a HTTP request from a REST Client tool to test a GET,POST,PUT,DELETE operation without getting issues from CORS 
@CrossOrigin()
//Tells SpringBoot that this class is a Restcontroller
@RestController
//Specfices that this class is a RestControler for http://{baseURL}/api/Articles
@RequestMapping(path = "/api/Articles")
public class ArticleController 
{

	
	//Article service class
    @Autowired
    private ArticleService articleService;

    
    @CrossOrigin()
    //path for method = (/Api/Articles) + /
    @GetMapping(path="/{page}/{sorted}", produces = "application/json")
    public List<Article> getArticles(@PathVariable("page") int page,@PathVariable("sorted") String sorted, HttpServletResponse response)
    {
    	Pageable pageable = PageRequest.of(page, 10, Sort.by(sorted));
    	//Method from article service class getAllArticles
    	//Returns a List of all articles from the database
    	
        return articleService.getAllArticles(pageable);
    }

    @CrossOrigin()
    //path for method = (/Api/Articles) + /
    @GetMapping(path="{category}/{page}/{sorted}", produces = "application/json")
    public Page<Article> getArticleCategory(@PathVariable("page") int page,@PathVariable("category") String category,@PathVariable("sorted") String sorted, HttpServletResponse response)
    {
    	Pageable pageable = PageRequest.of(page, 10,Sort.by(sorted));
    	//Method from article service class getAllArticles
    	//Returns a List of all articles from the database
    	
        return articleService.getAllArticleByCategory(category,pageable);
    }
    //allarticles by franchise
    @CrossOrigin()
    //path for method = (/Api/Articles) + /
    @GetMapping(path="/Franchise/{franchise}/{page}/{sorted}", produces = "application/json")
    public Page<Article> getArticleFranchise(@PathVariable("page") int page,@PathVariable("franchise") String franchise, String category,@PathVariable("sorted") String sorted, HttpServletResponse response)
    {
    	Pageable pageable = PageRequest.of(page, 10);
    	//Method from article service class getAllArticles
    	//Returns a List of all articles from the database
    	
        return articleService.getAllArticleByFranchise(franchise,pageable);
    }
    @CrossOrigin()
    //path for method = (/Api/Articles) + /
    @GetMapping(path="/{franchise}/{category}/{page}/{sorted}/franchise", produces = "application/json")
    public Page<Article> getArticlesByFranCatTag(@PathVariable("page") int page,@PathVariable("franchise") String franchise,@PathVariable("category") String category,@PathVariable("sorted") String sorted, HttpServletResponse response)
    {
    	Pageable pageable = PageRequest.of(page, 1);
    	//Method from article service class getAllArticles
    	//Returns a List of all articles from the database
    	
        return articleService.getByFranchiseAndCategory(category,franchise,pageable);
    }
    
    /*@CrossOrigin()
    //path for method = (/Api/Articles) + /
    @GetMapping(path="/{TagGroup}", produces = "application/json")
    public Page<Article> getArticlesByTag(@PathVariable("TagGrpup") String tag, HttpServletResponse response)
    {
    	//Method from article service class getAllArticles
    	//Returns a List of all articles from the database
    	
        return articleService.getByTag(tag);
    }*/
    @CrossOrigin()
    //path for method = (/Api/Articles) + / + id(for article) i.e https://baseurl/api/Articles/12
    @GetMapping(path="/{id}", produces = "application/json")
    public Optional<Article> getArticleById(@PathVariable("id") long id, HttpServletResponse response)
    { 	
    	response.setHeader("Custom-Header", "foo");
        return articleService.getArticle(id);
    }
    //@CrossOrigin()
    //path for method = (/Api/Articles) + / + id(for article) i.e https://baseurl/api/Articles/12
    /*@GetMapping(path="/{category}", produces = "application/json")
    public Optional<Article> getArticleByCategory(@PathVariable("category") long category,@PathVariable("fracnhise") long franchise, HttpServletResponse response)
    { 	
    	response.setHeader("Custom-Header", "foo");
        return articleService.getArticle(category);
    }*/
    
     
     @CrossOrigin()
     /**
      * path of method = (/api/Articles/
      * Post method for adding article 
      * @param article
      * @return
      */
    @PostMapping(path= "/{TypeID}", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Object> addArticle(@RequestBody Article article, @PathVariable("TypeID") long TypeId )
    {
    	
    	article.setId(1);
    	//Builds a 
    	articleService.addArticle(article);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                                    .path("/{franchiseID}/{departmentID}/{id}")
                                    .buildAndExpand(article.getDepartmentId(),article.getFranchiseId(),article.getId())
                                    .toUri();
        articleService.addArticle(article);
        return ResponseEntity.created(location).build();
    }
     //Delete mapping
     @DeleteMapping("/{id}")
     public void deleteArticle(@PathVariable long id) {
     	articleService.deleteById(id);
     }
     //POST
     @PutMapping("/students/{id}")
     public ResponseEntity<Object> updateStudent(@RequestBody Article article, @PathVariable long id) {
    	 /*
     	Optional<Article> articleOptional = articleRepo.findById(id);

     	if (!studentOptional.isPresent())
     		return ResponseEntity.notFound().build();

     	student.setId(id);
     	
     	studentRepository.save(student);
    	  	*/
     	return ResponseEntity.noContent().build();
     }
  // --------------------------------------------
     // CRUD OPERATIONS FOR CHILD RECORDS (COMMENTS)
  
     @PostMapping("/comments/{id}")
     public Comments createComment(@PathVariable long id, @RequestBody Comments comment) {
    	 comment.setArticleID(id);
         return (Comments) articleService.createComment(comment);
     }
  
     @GetMapping("/{id}/comments")
     public List<Comments> getAllComments(@PathVariable long id) {
    	 
         return articleService.findByArticleId(id);
     }
  
     @GetMapping("/comments/{id}")
     public Comments getComment(@PathVariable long id) {
         return articleService.findComment(id);
     }
  
     @PutMapping(path="/comments/{id}",  consumes = "application/json", produces = "application/json")
     public Comments changeComment(@PathVariable long id, @RequestBody Comments comment) {
         return articleService.updateComment(id, comment);
     }
  
     @DeleteMapping(path="/comments/{id}",  consumes = "application/json", produces = "application/json")
     public String deleteComment(@PathVariable long id) {
    	 articleService.deleteCommentById(id);
         return String.format("Comment id %d successfully deleted", id);
     }
    
}

