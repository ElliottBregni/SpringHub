package fsu.team2.hub20.security.services;


import com.fasterxml.jackson.annotation.JsonIgnore;

import fsu.team2.hub20.models.Designation;
import fsu.team2.hub20.models.User;
import fsu.team2.hub20.models.department;
import fsu.team2.hub20.models.franchise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class UserPrinciple implements UserDetails {
	private static final long serialVersionUID = 1L;

	private Long id;

    private String name;

    private String username;

    private String email;

 
    private String password;
    @Autowired
	private PasswordEncoder passwordEncoder;
    private Collection<? extends GrantedAuthority> authorities;

	private String franchise;

	private String designation;

	private String department;

    public UserPrinciple(long i, 
			    		String username, String password, String email, String string, String franchise , String department
			    		) {
        this.id = i;
        
        this.username = username;
        //this.email = email;
        this.password = password;
        this.setFranchise(franchise);
        this.setDesignation(string);
        this.setDepartment(department);
        
    }

    public static UserPrinciple build(User user) {
     
        Designation role = user.getRoles();
        franchise franchise = user.getFranchise();
        department department = user.getDepartment();
        
        return new UserPrinciple(
                user.getUserID(),
                user.getUsername(),
                user.getPassword(),
                user.getEmail(),
                role.getDesignationType(),
                franchise.getFranchiseCity(),
                department.getDepartmentName()
                
        );
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    /**
	 * @return the franchise
	 */
	public String getFranchise() {
		return franchise;
	}

	/**
	 * @return the designation
	 */
	public String getDesignation() {
		return designation;
	}

	/**
	 * @param designation the designation to set
	 */
	public void setDesignation(String designation) {
		this.designation = designation;
	}

	/**
	 * @param franchise the franchise to set
	 */
	public void setFranchise(String franchise) {
		this.franchise = franchise;
	}

	/**
	 * @return the department
	 */
	public String getDepartment() {
		return department;
	}

	/**
	 * @param department the department to set
	 */
	public void setDepartment(String department) {
		this.department = department;
	}

	@Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        
        UserPrinciple user = (UserPrinciple) o;
        return Objects.equals(id, user.id);
    }
}