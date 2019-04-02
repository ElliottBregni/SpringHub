package fsu.team2.hub20.Services;
import fsu.team2.hub20.models.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Lazy
@Service
public interface CategoryService {

	public List<category> getAllCategories();
	public void addCategory(category category);
	public Optional<category> getCategory(Integer id);
	public Optional<category> getCategoryByName(String name);
	public HashMap<category, Set<category>> getSubCategory();
	Set<category> getCategorySub();

}
