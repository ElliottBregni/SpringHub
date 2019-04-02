package fsu.team2.hub20.models;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "Category")
public class category {
	@Id
	private Integer categoryID;		// used to store the category ID
	@Column(name = "categoryName")
	private String categoryName;	// used to store the category name
	@Column(name = "parentCategory")
	private Integer parentCategory;	// used to store the parent category

	
	/**
	 * Constructor - takes in the arguments for each category that are in the 
	 * category table.
	 * @param categoryID
	 * @param categoryName
	 * @param parentCategory
	 */
	public category (Integer categoryID, String categoryName, Integer parentCategory)
	{
		this.categoryID = categoryID;
		this.categoryName = categoryName;
		this.parentCategory = parentCategory;
	}
	
	public category() {}
	
	/**
	 * Method setCategoryID - receives input from the user and stores it as
	 * categoryID
	 * @param category
	 */
	public void setCategoryID (Integer category)
	{
		this.categoryID = category;
	}
	
	/**
	 * Method setCategoryName - receives input from the user and stores it as
	 * categoryName
	 * @param name
	 */
	public void setCategoryName (String name)
	{
		this.categoryName = name;
	}
	
	/**
	 * Method setParentCategory - receives input from the user and stores it as
	 * parentCategory
	 * @param parent
	 */
	public void setParentCategory (int parent)
	{
		this.parentCategory = parent;
	}
	
	/**
	 * Method - returns the value of categoryID
	 * @return
	 */
	public Integer getCategoryID ()
	{
		return categoryID;
	}
	
	/**
	 * Method - returns the value of categoryName
	 * @return
	 */
	public String getCategoryName ()
	{
		return categoryName;
	}
	
	/**
	 * Method - returns the value of parentCategory
	 * @return
	 */
	public Integer getParentCategory ()
	{
		return parentCategory;
	}
	@Override
	public String toString()
	{
		return String.format(
				"Category [id=%d, name=%s, parent=%d]",
				categoryID, categoryName, parentCategory);
	}

	/**
	 * @return the subCategory
*/
	
}