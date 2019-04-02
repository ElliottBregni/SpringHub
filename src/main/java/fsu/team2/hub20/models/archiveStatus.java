package fsu.team2.hub20.models;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "ArchiveStatus")
public class archiveStatus {
	@Id
	private long archiveID;			// used to store the archive ID
	@Column(name = "archiveDate")
	private String dateTime;        // used to store the date and time
	@Column(name = "userID")
	private int userID;				// used to store the user ID 
	
	/**
	 * Constructor - takes in the arguments for each category that are
	 * in the archiveStatus table. 
	 * @param archiveID
	 * @param dateTime
	 * @param userID
	 */
	public archiveStatus (int archiveID, String dateTime, int userID)
	{
		this.archiveID = archiveID;
		this.dateTime = dateTime;
		this.userID = userID;
	}
	
	public archiveStatus() {}
	
	/**
	 * Method setArchiveID - receives input from the user and stores it
	 * as archiveID
	 * @param AID
	 */
	public void setArchiveID (int AID)
	{
		this.archiveID = AID;
	}
	
	/**
	 * Method setDateTime - receives input from the user and stores it
	 * as dateTime
	 * @param DT
	 */
	public void setDateTime (String DT)
	{
		this.dateTime = DT;
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
	 * Method - returns the value of archiveID
	 * @return
	 */
	public int getArchiveID ()
	{
		return (int) archiveID;
	}
	
	/**
	 * Method - returns the value of dateTime
	 * @return
	 */
	public String getDateTime ()
	{
		return dateTime;
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
	 * Puts the information into String format
	 */
	@Override
	public String toString() 
	{
		return String.format(
				"archiveStatus [archiveID=%d, dateTime=%s, userID=%d]",
				archiveID, dateTime, userID);
	}
				
}
