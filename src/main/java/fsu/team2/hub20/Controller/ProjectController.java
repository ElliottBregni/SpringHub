package fsu.team2.hub20.Controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fsu.team2.hub20.Services.ArticleService;
import fsu.team2.hub20.models.Article;
@CrossOrigin()
//Tells SpringBoot that this class is a Restcontroller
@RestController
//Specfices that this class is a RestControler for http://{baseURL}/api/Articles
@RequestMapping(path = "/api/Projects")
public class ProjectController {

	//Article service class
    @Autowired
    private ArticleService articleService;

    
    @CrossOrigin()
    //path for method = (/Api/Articles) + /
    @GetMapping(path="/", produces = "application/json")
    public List<Article> getProjects(HttpServletResponse response)
    {
    	//Method from article service class getAllArticles
    	//Returns a List of all articles from the database
    	
        return articleService.getAllProjects(3);
    }
}
