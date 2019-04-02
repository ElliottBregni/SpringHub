package fsu.team2.hub20.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity()
@Table(name="Tag")
public class tag {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long tagID;				// used to store the tag ID number.
	private String tagContent;		// used to store the tag content.
	
	/**
	 * Constructor - creates the variables for tagID and tagContent.
	 * @param tagID
	 * @param tagContent
	 */
	public tag() {}
	public tag(Long tagID, String tagContent)
	{
		this.tagID = tagID;				
		this.tagContent = tagContent;	
	}
	
	/**
	 * Method setTagID - receives input from the user and stores it
	 * as tagID.
	 * @param tag
	 */
	public void setTagID(Long tag)
	{
		this.tagID = tag;
	}
	
	/**
	 * Method setTagContent - receives input from the user and stores 
	 * it as tagContent.
	 * @param content
	 */
	public void setTagContent(String content)
	{
		this.tagContent = content;
	}
	
	/**
	 * Method - returns the value of the tagID.
	 * @return
	 */
	public Long getTagID()
	{
		return tagID;
	}
	
	/**
	 * Method - returns the value of the tagContent.
	 * @return
	 */
	public String getTagContent()
	{
		return tagContent;
	}
	@Override
	public String toString() {
		return String.format(
				"User [tagID=%d, tagContent=%d]",
				tagID, tagContent);
	}
}
