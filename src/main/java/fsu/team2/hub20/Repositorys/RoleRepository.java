package fsu.team2.hub20.Repositorys;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fsu.team2.hub20.models.Designation;
import fsu.team2.hub20.models.RoleName;



@Repository
public interface RoleRepository extends JpaRepository<Designation, Long> {
    
}