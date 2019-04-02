package fsu.team2.hub20.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import fsu.team2.hub20.models.Comments;
@Service
public interface CommentsService {
	
	public List<Comments> getAllComments();
	public void addComment(Comments comments);
	public Optional<Comments> getComment(long id);
	public List<Comments> getByArticle(long id);
}
