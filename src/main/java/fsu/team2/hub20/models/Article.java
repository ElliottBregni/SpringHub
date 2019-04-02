package fsu.team2.hub20.models;


import org.springframework.data.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.core.serializer.Serializer;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.net.URI;
import java.util.*;

import javax.persistence.*;
//*Maps to database*/
@Entity
@Table(name = "Article")
public class Article {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long articleID;
	@Column(name = "articleContent")
    private String articleContent;
	@Column(name = "articleType")
	private String articleType;
	@Column(name = "url")
    private String url;
	@Column(name ="PublishDateTime")
    private Date createdAt;
	@Column(name="FranchiseID")
    private long franchiseID;
	//@Column(name ="categoryID")
    private long categoryID;
	@Column(name ="archiveID")
    private Integer archiveID;
	//@Column(name = "userID")
    //private long userId;
	@JsonIgnore
	@Column(name ="departmentID")
    private long departmentID;
	@Column(name ="articleTitle")
    private String title;
	
	//One to many maping for comments
	//Mapped bt

	
	@OneToMany(mappedBy = "articleID")
	private Set<tagGroup> tagGroup;
	@OneToMany(mappedBy = "departmentID")
	private Set<department> department;
	@ManyToOne()
	@JoinColumn(name="userID")
	private User user;
	/*@OneToMany(mappedBy = "categoryID")
	private Set<category> category;
	//One to many mapping
	//@OneToMany(mappedBy = "articleID", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	 
	
	   
    //TODO add more article fields
    public Article(long id, String content, String type, String url, Date publishDate,
    		long franchiseId, long categoryId, Integer archiveId, long userId, long departmentID, String title)
    		 {
    	 this.articleID = id;
         this.articleContent = content;
         this.articleType = type;
         this.url = url;
         this.createdAt = publishDate;
         this.franchiseID = franchiseId;
         this.categoryID = categoryId;
         this.archiveID = archiveId;
         //this.userId = userId;
         this.departmentID = departmentID;
         this.title = title;
         
    }
    public Article() {}
    
    /*
     * 
     */
    public long getId() {
        return articleID;
    }
    /**
     * 
     * @return
     */
    public String getContent() {
        return articleContent;
    }
    /**
     * 
     * @return
     */
    public String getType() {
        return articleType;
    }
    /**
     * 
     * @return
     */
    
    public String getUrl() {
        return url;
    }
    public Date getDate() {
        return createdAt;
    }
    public long getCategoryId() {
        return categoryID;
    }
    public long getFranchiseId() {
        return franchiseID;
    }
    public Integer getArchiveId() {
        return archiveID;
    }
/*
    public long getUserId() {
        return userId;
    }*/
    public long getDepartmentId() {
        return departmentID;
    }
    //Why are there two of these

    public String getTitle() {
        return title;
    }
    
	public void setId(long id2) {
		this.articleID = id2;
		
	}
	public void setContent(String content) {
		this.articleContent = content;
		
	}
	public void setType(String type) {
		this.articleType = type;
		
	}
	public void setUrl(String string) {
		this.url = string;
		
	}
	public void setDate(Date date) {
		this.createdAt= date;
		
	}
	public void setFrachiseId(long franchiseId2) {
		this.franchiseID = franchiseId2;
		
	}
	public void setArchiveId(Integer id) {
		this.archiveID = id;
		
	}/*
	public void setUserId(long id) {
		this.userId = id;
		
	}*/
	public void setCategoryId(long id2) {
		this.categoryID = id2;
	}
	
	@Override
    public String toString() {
        return String.format(
                "Article [id=%d, title='%s', Content='%s', type='%s, url='%s, date='%s, frachiseId='%d, archiveId='%d, userId='%d, category='%d']",
                articleID, title, articleContent, articleType, url, createdAt, franchiseID, archiveID, user, categoryID);
    }
	public void setDepartmentID(long id) {
		this.departmentID = id;
	}
	public void setTitle(String title) {
		this.title = title;
	}

	
	 public Set<tagGroup> getTags() {
	        return tagGroup;
	}

	 public void setTags(Set<tagGroup> tags) {
	        this.tagGroup = tags;
	 }
	 public Set<department> getDepartment() {
	        return department;
	}

	 public void setDepartment(Set<department> Department) {
	        this.department = Department;
	 }
	 /*
	 public void setCategory(Set<category> category) {
	        this.category = category;
	 }
	 public Set<category> getCategory() {
	        return category;
	}*/

	

	 public User getUser() {
	        return user;
	}

	 public void setUser(User User) {
	        this.user = User;
	 }
	/**
	 * @return the userId
	 */
	/*public long getUserId() {
		return userId;
	}
	/**
	 * @param userId the userId to set
	 */
	/*public void setUserId(long userId) {
		this.userId = userId;
	}*/

}
