package fsu.team2.hub20.models;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "Modification")
public class modification {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int modID;				// used to store the modification ID
	@Column(name = "modDateTime")
	private String dateTime;		// used to store the date and time
	@Column(name = "articleID")
	private int articleID;			// used to store the article ID
	@Column(name = "userID")
	private int userID;				// used to store the user ID
	
	/**
	 *  Constructor - takes in the arguments for each category that is 
	 * in the modification table.
	 * @param modID
	 * @param dateTime
	 * @param articleID
	 * @param userID
	 */
	public modification (int modID, String dateTime, int articleID, int userID)
	{
		this.modID = modID;
		this.dateTime = dateTime;
		this.articleID = articleID;
		this.userID = userID;
	}
	public modification() {}
	
	/**
	 * Method setModID - receives input from the user and it as modID
	 * @param mod
	 */
	public void setModID (int mod)
	{
		this.modID = mod;
	}
	
	/**
	 * Method setCommentDateTime - receives input from the user and stores it 
	 * as dateTime.
	 * @param DT
	 */
	public void setDateTime(String DT)
	{
		this.dateTime = DT;
	}
	
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
	 * Method - returns the value for modID
	 * @return
	 */
	public int getModID ()
	{
		return modID;
	}
	
	/**
	 * Method - returns the value for dateTime.
	 * @return
	 */
	public String getDateTime()
	{
		return dateTime;
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
	 * sends the needed information to the string format
	 */
	@Override
	public String toString() {
		return String.format(
				"Modification [modid=%d, datetime=%s, aid=%d, uid=%d]",
				modID, dateTime, articleID, userID);
	}
}
