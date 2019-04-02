package fsu.team2.hub20.models;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "UserBookmarks")
public class userBookmark {
	@Id
	private int articleID; 			// stores the article ID
	@Column(name = "userID")
	private int userID;				// stores the user ID
	@Column(name = "showInLinks")
	private Integer showInLinks;	// Stores the Internet Link
	
	/**
	 * Constructor - takes in the arguments for each category that are
	 * in the userBookMark table.
	 * @param articleID
	 * @param userID
	 * @param showInLinks
	 */
	public userBookmark (int articleID, int userID, Integer showInLinks)
	{
		this.articleID = articleID;
		this.userID = userID;
		this.showInLinks = showInLinks;
		
	}
	public userBookmark() {}
	
	/**
	 * Method setArticleID - receives input from the user and stores it
	 * as the articleID.
	 * @param article
	 */
	public void setArticleID (int article)
	{
		this.articleID = article;
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
	 * Method setShowInLink - receives input from the user and stores it
	 * as showInLinks.
	 * @param link
	 */
	public void setShowInLink (Integer link)
	{
		this.showInLinks = link;
	}
	
	/**
	 * Method - returns the value for articleID
	 * @return
	 */
	public int getArticleID ()
	{
		return articleID;
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
	 * Method - returns the value for the userID
	 * @return
	 */

	
	/**
	 * Method - returns the value of showInLinks.
	 * @return
	 */
	public Integer getShowInLinks ()
	{
		return showInLinks;
	}
	/**
	 * Used to tranfer data to a string format
	 */
	@Override
	public String toString() {
		return String.format(
				"userBookmarks [id=%d, uid=%d, link=%d]",
				articleID, userID, showInLinks);
	}
}
