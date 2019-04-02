package fsu.team2.hub20.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Department")
public class department {
	@Id
	private int departmentID;	       // used to store the ID of the Department
	
	private String departmentName;		// used to store the name of the Department
	
	/**
	 * Constructor - takes in the arguments for each category that are
	 * in the department table.
	 * @param departmentID
	 * @param departmentName
	 */
	
	public department(int departmentID, String departmentName)
	{
		this.departmentID = departmentID;
		this.departmentName = departmentName;
	}
	/**
	 * @author bregn
	 * noArg constructor  
	 * 
	 */
	public department() {}
	
	/**
	 * Method setDepartmentID - receives input from the user and stores it
	 * as departmentID
	 * @param ID
	 */
	public void setDepartmentID (int ID)
	{
		this.departmentID = ID;
	}
	
	/**
	 * Method setDepartmentName - receives input from the user and stores it
	 * as departmentName.
	 * @param name
	 */
	public void setDepartmentName (String name)
	{
		this.departmentName = name;
	}
	
	/**
	 * Method - returns the value for departmentID.
	 * @return
	 */
	public int getDepartmentID ()
	{
		return departmentID;
	}
	
	/**
	 * Method - Returns the value for departmentName.
	 * @return
	 */
	public String getDepartmentName ()
	{
		return departmentName;
	}
}
