package fsu.team2.hub20.Services;
import  fsu.team2.hub20.models.category;
import fsu.team2.hub20.security.jwt.JwtAuthEntryPoint;

import java.net.URL;
import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fsu.team2.hub20.Repositorys.*;

@Repository
@Transactional
public class CategoryServiceImpl implements CategoryService {
	private static final Logger logger = LoggerFactory.getLogger(CategoryServiceImpl.class);
	@Autowired
	private CategoryRepo CategoryRepo;
	@Async
	public List<category> getAllCategories() {
			List<category> result = new ArrayList<category>();
			List<category> categories = (List<category>) CategoryRepo.findAll();
			for (category category : categories) {
				
				result.add(category);
			}
			return result;
	}
	@Async
	public void addCategory(category category) {
		category newCategory = new category();
		newCategory.setCategoryID(category.getCategoryID());
		newCategory.setCategoryName(category.getCategoryName());
		newCategory.setParentCategory(category.getParentCategory());
		
	}
	@Async
	public Optional<category> getCategory(Integer id) 
	{
		Optional<category> category = CategoryRepo.findById(id);
		return category;
	}
	@Override
	public Optional<category> getCategoryByName(String name) {
		Optional<category> category = CategoryRepo.findBycategoryName(name);
		return category;
	}
	//Confusing but gets categorys sub categorys. does not work with a tree of categorys greater than 2
	@Override
	public HashMap<category, Set<category>> getSubCategory() {
		HashMap<category, Set<category>> result = new HashMap<category, Set<category>>();
		List<category> categories = (List<category>) CategoryRepo.findAll();
		for (category category : categories) {
			logger.info(category.toString());
			Integer pC = category.getParentCategory();
			if(pC == 1) {
				Set<category> cat = CategoryRepo.findByparentCategory(category.getCategoryID());
				if(!cat.isEmpty()) {
					result.put(category, cat);
				} else {
				Set<category>  Default =  CategoryRepo.findByparentCategory(1);
				result.put(category, Default);
				}
			}

		}
		return result;
	}
	@Override
	public Set<category> getCategorySub() {
		Set<category> cat = CategoryRepo.findByparentCategory(1);
		return cat;
	}

	

}
