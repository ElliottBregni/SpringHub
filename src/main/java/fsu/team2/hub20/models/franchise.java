package fsu.team2.hub20.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="franchise")
public class franchise {
	@Id 
	@Column(name="franchiseID")
	private long franchiseID;				// used to store the franchise ID
	private String franchiseCity;			// used to store the franchise city
	private String franchiseState;			// used to store the franchise state
	private int franchiseZip;				// used to store the franchise zip code
	private String franchisePhone;			// used to store the franchise phone number
	
	public franchise (long franchiseID, String franchiseCity, String franchiseState, int franchiseZip,
			String franchisePhone)
	{
		this.franchiseID = franchiseID;
		this.franchiseCity = franchiseCity;
		this.franchiseState = franchiseState;
		this.franchiseZip = franchiseZip;
		this.franchisePhone = franchisePhone;
	}
	public franchise () {}
	
	/**
	 * Method setFranchiseID - receives input from the user and stores it as 
	 * franchoseID
	 * @param franchise
	 */
	public void setFranchiseID (long franchise)
	{
		this.franchiseID = franchise;
	}
	
	/**
	 * Method setFranchiseCity - receives input from the user and stores it as 
	 * franchiseCity
	 * @param city
	 */
	public void setFranchiseCity (String city)
	{
		this.franchiseCity = city;
	}
	
	/**
	 * Method setFranchiseState - receives input from the user and stores it as 
	 * franchiseState
	 * @param state
	 */
	public void setFranchiseState (String state)
	{
		this.franchiseState = state;
	}
	
	/**
	 * Method setFranchiseZip - receives input from the user and stores it as
	 * franchiseZip
	 * @param zip
	 */
	public void setFranchiseZip (int zip)
	{
		this.franchiseZip = zip;
	}
	
	/**
	 * Method setFranchisePhone - receives input from the user and stores it as
	 * franchisePhone
	 * @param phone
	 */
	public void setFranchisePhone (String phone)
	{
		this.franchisePhone = phone;
	}
	
	/**
	 * Method - returns the value for franchoseID
	 * @return
	 */
	public long getFranchiseID ()
	{
		return franchiseID;
	}
	
	/**
	 * Method - returns the value for franchiseCity
	 * @return
	 */
	public String getFranchiseCity ()
	{
		return franchiseCity;
	}
	
	/**
	 * Method - returns the value for franchiseState
	 * @return
	 */
	public String getFranchiseState ()
	{
		return franchiseState;
	}
	
	/**
	 * Method - returns the value for franchiseZip
	 * @return
	 */
	public int getFranchiseZip ()
	{
		return franchiseZip;
	}
	
	/**
	 * Method - returns the value for franchisePhone
	 * @return
	 */
	public String getFranchisePhone ()
	{
		return franchisePhone;
	}
}
