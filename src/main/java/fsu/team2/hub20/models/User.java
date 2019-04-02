package fsu.team2.hub20.models;


import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.engine.internal.Collections;
import org.springframework.context.annotation.Scope;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
//User Entity mapped to database table Users
// Had to change database table to Users instead of User
//User is already an object in SQL
@Table
@Entity(name="Users")
public class User {
	/**
	 * 
	 */
	//private static final long serialVersionUID = 1L;

	@Id
	@Column(name="userID")
	private int userID;		
	@Column(name="userFName")// used to store the user ID
	private String FName;	
	@Column(name="userLName")				// used to store the user first name
	private  String LName;					// used to store the user last name
	private  String userEmail;				// used to store the user email
	private String userPhone;				// used to store the user phone number
	private Integer colorCorrection;
	@JsonIgnore// used to store the user color preferences
	private Integer darkMode;				// used to store the user color mode preference
	private Integer notifyOnMention;		// used to store the user notifications
	private int designationID;				// used to store the user designation ID
	private int departmentID;				// used to store the user department number
	private Integer franchiseID;	
	@Column()// used to store the user franchise ID
	private String userPassHash;
	@Column()// used to store the user franchise ID
	private String userSalt;
	/*@OneToMany(mappedBy = "userId")
	private Set<Article> Article;*/
	@ManyToOne( optional = false)
    @JoinColumn(name = "designationId", nullable = false)
	private Designation Role;
	@ManyToOne( optional = false)
    @JoinColumn(name = "departmentId", nullable = false)
	private department department;
	@ManyToOne( optional = false)
    @JoinColumn(name = "franchiseId", nullable = false)
	private franchise franchise;

	private String username;
	@JsonIgnore
	private String password;
	@Column(name="userImg")
	private String Image;



	/**
	 * Constructor - takes in arguments for each category that are in the 
	 * user table
	 * @param userID
	 * @param FName
	 * @param LName
	 * @param userEmail
	 * @param userPhone
	 * @param colorCorrection
	 * @param darkMode
	 * @param notifyOnMention
	 * @param designationID
	 * @param departmentID
	 * @param franchiseID
	 */

	public User (int userID, String FName, String LName, String userEmail, String userPhone,
			int colorCorrection, Integer darkMode, Integer notifyOnMention, int designationID, 
			int departmentID, int franchiseID)
	
	{
		
		this.userID = userID;
		this.FName = FName;
		this.LName = LName;
		this.userEmail = userEmail;
		this.userPhone = userPhone;
		this.colorCorrection = colorCorrection;
		this.darkMode = darkMode;
		this.notifyOnMention = notifyOnMention;
		this.designationID = designationID;
		this.departmentID = departmentID;
		this.franchiseID = franchiseID;		
	}
	//This is nessasary in every entity model class
	public User() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * Method setUserID - receives input from the user and stores it 
	 * as the userID.
	 * @param ID
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public void setUserID (int uID)
	{
		this.userID = uID;
	}
	
	/**
	 * Method setFName - receives input from the user and stores it
	 * as FName
	 * @param first
	 */
	public void setFName (String first)
	{
		this.FName = first;
	}
	
	/**
	 * Method setLName - receives input from the user and stores it
	 * as LName
	 * @param last
	 */
	public void setLName (String last)
	{
		this.LName = last;
	}
	
	/**
	 * Method setUserEmail - receives input from the user and stores it
	 * as userEmail
	 * @param email
	 */
	public void setUserEmail (String email)
	{
		this.userEmail = email;
	}
	
	/**
	 * Method setUserPhone - receives input from the user and stores it
	 * as userPhone
	 * @param phone
	 */
	public void setUserPhone (String phone)
	{
		this.userPhone = phone;
	}
	
	/**
	 * Method setColorCorrection - receives input from the user and stores it 
	 * as colorCorrection.
	 * @param cCorrection
	 */
	public void setColorCorrection (int cCorrection)
	{
		this.colorCorrection = cCorrection;
	}
	
	/**
	 * Method setDarkMode - receives input from the user and stores it 
	 * as darkMode
	 * @param dark
	 */
	public void setDarkMode (Integer dark)
	{
		this.darkMode = dark;
	}
	
	/**
	 * Method setNotifyOnMention - receives input from the user and stores it 
	 * as notifyOnMention
	 * @param notify
	 */
	public void setNotifyOnMention (Integer notify)
	{
		this.notifyOnMention = notify;
	}
	
	/**
	 * Method setDesignationID - receives input from the user and stores it as 
	 * designationID.
	 * @param dID
	 */
	public void setDesignationID (int dID)
	{
		this.designationID = dID;
	}
	
	/**
	 * Method setDepartmentID - receives input from the user and stores it as 
	 * departmentID
	 * @param department
	 */
	public void setDepartmentID (int department)
	{
		//Cannot be null
		this.departmentID = department;
	}
	
	/**
	 * Method setFranchiseID - receives input from the user and stores it as 
	 * franchoseID
	 * @param franchise
	 */
	public void setFranchiseID (int franchise)
	{
		this.franchiseID = franchise;
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
	 * Method - returns the value for FName
	 * @return
	 */
	public String getFName()
	{
		return FName;
	}
	
	/**
	 * Method - returns the value for LName
	 * @return
	 */
	public String getLName ()
	{
		return LName;
	}
	
	/**
	 * Method - returns the value for userEmail
	 * @return
	 */
	public String getUserEmail ()
	{
		return userEmail;
	}
	
	/**
	 * Method - returns the value for userPhone
	 * @return
	 */
	public String getUserPhone ()
	{
		return userPhone;
	}
	
	/**
	 * Method - returns the value for colorCorrection
	 * @return
	 */
	public int getColorCorrection ()
	{
		return colorCorrection;
	}
	
	/**
	 * Method - returns the value for darkMode
	 * @return
	 */
	public Integer getDarkMode ()
	{
		return darkMode;
	}
	
	/**
	 * Method - returns the value for notifyOnMention
	 * @return
	 */
	public Integer getNotifyOnMention ()
	{
		return notifyOnMention;
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
	 * Method - returns the value for departmentID.
	 * @return
	 */
	public int getDepartmentID ()
	{
		return this.departmentID;
	}
	
	/**
	 * Method - returns the value for franchoseID
	 * @return
	 */
	public int getFranchiseID ()
	{
		return franchiseID;
	}

	public String getUserPassHash() {
		return userPassHash;
	}

	public void setUserPassHash(String userPassHash) {
		this.userPassHash = userPassHash;
	}
	/*
	 public Set<Article> getArticle() {
	        return Article;
	}
	 //All getter an setter methods set the JSON resonse 
	 public void setArticle(Set<Article> article) {
	        this.Article = article;
	 }
	*/
	public String getPassword() {
		return password;
	}

	public String getEmail() {
		// TODO Auto-generated method stub
		return null;
	}
	
	public String getUsername() {
		
		return username;
	}


	
		public String getName() {
			// TODO Auto-generated method stub
			return FName+LName;
		}
		/**
		 * @return the roles
		 */
		public Designation getRoles() {
			return Role;
		}
		/**
		 * @param roles the roles to set
		 * @param Role 
		 */
		public void setRoles(Designation Role) {
			this.Role = Role;
		}
		public franchise getFranchise() {
			return franchise;
		}
		/**
		 * @param roles the roles to set
		 * @param Role 
		 */
		public void setFranchise(franchise franchise) {
			this.franchise = franchise;
		}
		public department getDepartment() {
			return department;
		}
		/**
		 * @param roles the roles to set
		 * @param Role 
		 */
		public void setDepartment(department depo) {
			this.department = depo;
		}
		@Override
		public String toString() {
			return String.format(
					"User [id=%d, fName=%s, lName=%s, phone=%s, email=%s, color=%d, darkMode=%s, notify=%d, designation=%d, department=%d, franchise=%d]",
					userID, FName, LName, userEmail, userPhone, colorCorrection, darkMode, notifyOnMention, designationID, departmentID, franchiseID);
		}
		/**
		 * @return the image
		 */
		public String getImage() {
			return Image;
		}
		/**
		 * @param image the image to set
		 */
		public void setImage(String image) {
			Image = image;
		}
}
