package fsu.team2.hub20.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.NaturalId;

@Entity
@Table(name = "designation")
public class Designation {
    @Id
	@Column(name="designationID")
	private int designationID;	// used to store the designation ID
	private String designationType;		// used to store the designation type
    public Designation () {}
	/**
	 * Constructor - take in the arguments for each category that are in the 
	 * designation table
	 * @param designationID
	 * @param designationType
	 */
	public Designation (int designationID, String designationType)
	{
		this.designationID = designationID;
		this.designationType = designationType;
	}
	
	/**
	 * Method setDesignationID - receives input from the user and stores it as 
	 * designationID.
	 * @param ID
	 */
	public void setDesignationID (int ID)
	{
		this.designationID = ID;
	}
	
	/**
	 * Method setDesignationType - receives input from the user and stores it as 
	 * designationType.
	 * @param type
	 */
	public void setDesignationType (String type)
	{
		this.designationType = type;
	}
	
	/**
	 * Method - returns the value of designationID.
	 * @return
	 */
	public int getDesignationID ()
	{
		return designationID;
	}
	
	/**
	 * Method - returns the value of designationType.
	 * @return
	 */
	public String getDesignationType ()
	{
		return designationType;
	}
	
	 
	
	
	
	
}
