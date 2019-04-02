package fsu.team2.hub20.models;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "CalendarEvent")
public class calendarEvent {

	@Id
	private int calEventID;			// used to store the calendar event ID
	@Column(name = "eventType")
	private String eventType;		// used to store the event type
	@Column(name = "eventDate")
	private String date;			// used to store the date
	@Column(name = "franchiseID")   
	private int franchiseID;   // used to store franchise ID
	@Column (name= "userID")
	private int userID;
	// may need to change the data type for date.
	
	/**
	 * Constructor - takes in the arguments for each category that are
	 * in the calendarEvent table.
	 * @param calEventID
	 * @param eventType
	 * @param date
	 */
	public calendarEvent (int calEventID, String eventType, String date, int franchiseID)
	{
		this.calEventID = calEventID;
		this.eventType = eventType;
		this.date = date;
		this.franchiseID = franchiseID;
	}
	public calendarEvent() {}
	
	/**
	 * Method setCalEventID - receives input from the user and stores it
	 * as calEventID
	 * @param event
	 */
	public void setCalEventID (int event)
	{
		this.calEventID = event;
	}
	
	/**
	 * Method setEventType - receives input from the user and stores it 
	 * as eventType
	 * @param type
	 */
	public void setEventType (String type)
	{
		this.eventType = type;
	}
	
	/**
	 * Method setDate - receives input from the user and stores it 
	 * as date
	 * @param date
	 */
	public void setDate (String date)
	{
		this.date = date;
	}
	
	/**
	 * Method - returns the value of calEventID
	 * @return
	 */
	public int getCalEventID ()
	{
		return calEventID;
	}
	
	/**
	 * Method - returns the value of eventType
	 * @return
	 */
	public String getEventType ()
	{
		return eventType;
	}
	
	/**
	 * Method - returns the value of date
	 * @return
	 */
	public String getDate ()
	{
		return date;
	}
	@Override
	public String toString() {
		return String.format(
				"calendarEvent [id=%d, type=%s, date=%s, franID=%d]",
				calEventID, eventType, date, franchiseID);
	}
}
