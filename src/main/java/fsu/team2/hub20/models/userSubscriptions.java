package fsu.team2.hub20.models;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "UserSubscriptions")
public class userSubscriptions {
	
	@Column(name = "tagID")
	@Id
	private int tagID;						// used to store the tag ID
	@Column(name = "userID")
	private int userID;						// used to store the user ID
	@Column(name = "notifyOnNewArticle")
	private Integer notifyOnNewArticle;     // used to store the notification information for the new article
	@OneToMany(mappedBy = "tagID")
	private Set<tagGroup> tags;
	
	public userSubscriptions (int tagID, int userID, Integer notifyOnNewArticle)
	{
		this.tagID = tagID;
		this.userID = userID;
		this.notifyOnNewArticle = notifyOnNewArticle;
	}
	public userSubscriptions() {}
	
	/**
	 * Method used to transfer information needed into a String format
	 */
	@Override
	public String toString() {
		return String.format(
				"UserSubscriptions [tid=%d, uid=%d, notify=%d]",
				tagID, userID, notifyOnNewArticle);
	}
	/**
	 * Method setTagID - receives input from the user and stores it
	 * as tagID.
	 * @param tag
	 */
	public void setTagID(int tag)
	{
		this.tagID = tag;
	}
	
	/**
	 * Method setUserID - receives input from the user and stores it 
	 * as the userID.
	 * @param ID
	 */
	public void setUserID (int ID)
	{
		this.userID = ID;
	}
	
	/**
	 * Method setNotifyOnNewArticle - receives input from the user and stores 
	 * it as notifyOnNewArticle.
	 * @param newArticle
	 */
	public void setNotifyOnNewArticle (Integer newArticle)
	{
		this.notifyOnNewArticle = newArticle;
	}
	
	/**
	 * Method - returns the value of the tagID.
	 * @return
	 */
	public int getTagID()
	{
		return tagID;
	}
	
	/**
	 * Method - returns the value for the userID
	 * @return
	 */
	public int getUserID ()
	{
		return userID;
	}
	
	/**
	 * Method - returns the value for notifyOnNewArticle.
	 * @return
	 */
	public Integer getNotifyOnNewArticle ()
	{
		return notifyOnNewArticle; 
	}
	public Set<tagGroup> getTags() {
        return tags;
}

	public void setTags(Set<tagGroup> tags) {
        this.tags = tags;
	}
}


