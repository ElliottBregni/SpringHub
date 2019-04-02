package fsu.team2.hub20.Services;

import java.net.URL;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.format.datetime.standard.DateTimeContext;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fsu.team2.hub20.Repositorys.CommentRepository;
import fsu.team2.hub20.models.Comments;

@Repository
@Transactional
public class CommentsServiceImpl implements CommentsService {
	@Autowired
	private CommentRepository CommentsRepo;
	
	public List<Comments> getAllComments() {
		   List<Comments> result = new ArrayList<Comments>();
		   List<Comments> comments = (List<Comments>) CommentsRepo.findAll();
		   for (Comments comment : comments) {
			   
			   result.add(comment);
		   }
		   return result;
	}
	
	public void addComment(Comments comment) {
			Comments newComment = new Comments();
			newComment.setCommentID(3);
			newComment.setCommentContent(comment.getCommentContent());
			newComment.setCommentDateTime(comment.getCommentDateTime());
			newComment.setUser(comment.getUser());
			newComment.setArticleID(comment.getArticleID());
			//((Object) CommentsRepo).save(newComment);
			
	}
	public Optional<Comments> getComment(long id) {
		Optional<Comments> comment = CommentsRepo.findById(id);
		return comment;
	}

	@Override
	public List<Comments> getByArticle(long id) {
		List<Comments> comment = CommentsRepo.findByArticleID(id, Sort.by(Sort.Direction.DESC, "commentDateTime"));
		return comment;
	}

}
