package fsu.team2.hub20.Repositorys;
import fsu.team2.hub20.models.category;
import fsu.team2.hub20.models.tag.*;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Lazy
@Repository
public interface CategoryRepo extends JpaRepository<category, Long> {
	
	Optional<category> findById(long id);
	Optional<category> findBycategoryName(String name);
	Set<category>  findByparentCategory(int id);

}
