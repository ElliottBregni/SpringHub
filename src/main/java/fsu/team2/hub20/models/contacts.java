package fsu.team2.hub20.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Contacts")
public class contacts {
	@Id
	private int contactPricipal;		// used to store the contact
	private int listMember;				// used to store the list member
	
	/**
	 * Constructor - takes in the arguments for each category that are in the 
	 * contacts table.
	 * @param contactPricipal
	 * @param listMember
	 */
	public contacts (int contactPricipal, int listMember)
	{
		this.contactPricipal = contactPricipal;
		this.listMember = listMember;
	}
	
	/**
	 * Method setContactPricipal - receives input from the user and stores it as
	 * contactPricipal
	 * @param contact
	 */
	public void setContactPricipal (int contact)
	{
		this.contactPricipal = contact;
	}
	
	/**
	 * Method setListMember - receives input from the user and stores it as 
	 * listMember
	 * @param member
	 */
	public void setListMember (int member)
	{
		this.listMember = member;
	}
	
	/**
	 * Method - returns the value of contactPricipal
	 * @return
	 */
	public int getContactPricipal ()
	{
		return contactPricipal;
	}
	
	/**
	 * Method - returns the value of listMember
	 * @return
	 */
	public int getListMember ()
	{
		return listMember;
	}
	
	
}
