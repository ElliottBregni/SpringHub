package fsu.team2.hub20.Services;
import fsu.team2.hub20.models.Article;
import fsu.team2.hub20.models.tag;
import fsu.team2.hub20.models.tagGroup;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Lazy
@Service
public interface TagGroupService {
	
	public List<tagGroup> getAllTagGroups();
	public void addTagGroup(tag newTag, int i);
	public Optional<tagGroup> getTagGroup(int id);
	//Optional<tagGroup> findBy(long id);
	List<Set<tag>> getTagArticle(int id);

}
