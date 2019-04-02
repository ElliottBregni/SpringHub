package fsu.team2.hub20.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity()
@Table(name="TagGroup")
public class tagGroup {
	
	@Column(name="articleID")
	private long articleID; 
	// used to store the article ID
	@Id
	private long tagID;	   // used to store the tag ID
	@OneToMany(mappedBy = "tagID")
	private Set<tag> tags;
	
	/**
	 * Constructor - takes in the arguments for each category that are 
	 * in the tagGroup table.
	 * @param articleID
	 * @param tagID
	 */
	//NoArg Constructor
	public tagGroup() {}
	public tagGroup (int articleID, int tagID)
	{
		this.articleID = articleID;
		this.tagID = (long) tagID;
	}
	
	/**
	 * Method setArticleID - receives input from the user and stores it as the
	 * articleID
	 * @param ID
	 */
	public void setArticleID (long ID)
	{
		this.articleID = ID;
	}
	
	/**
	 * Method SetTagID - receives input from the user and stores it as 
	 * the tagID
	 * @param long1
	 */
	public void setTagID (long long1)
	{
		this.tagID = long1;
	}
	
	/**
	 * Method - returns the value of articleID
	 * @return
	 */
	public long getArticleID()
	{
		return articleID;
	}
	
	/**
	 * Method - returns the value of tagID
	 * @return
	 */
	public long getTagID ()
	{
		return tagID;
	}
	public Set<tag> getTags() {
        return tags;
}

	public void setTags(Set<tag> tags) {
        this.tags = tags;
	}
}
