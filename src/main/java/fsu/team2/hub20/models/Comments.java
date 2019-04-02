package fsu.team2.hub20.models;
//This is for testing
import javax.persistence.Column;
//This is the  correct import for @Comment
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

//This is the import for @ID
import javax.persistence.Id;


@Entity(name="Comments")
public class Comments {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "CommentID", unique = true, nullable = false)
	private int commentID;	
	@Column()// used to store the comment id
	private String commentContent;
	@Column(name="commentDateTime")// used to store the comment content
	private String commentDateTime; 
	@Column()// used to store the comment date and time
	private int userID;		
	@Column(name="articleID")
	private Long articleID;		
	@ManyToOne()
	@JoinColumn(insertable = false, updatable = false, name="userId")
	private User user;

	//many to one mapping for article 

	/**
	 * Constructor - takes in the arguments for each category that is 
	 * in the comments table.
	 * @param commentID
	 * @param commentContent
	 * @param commentDateTime
	 * @param userID
	 */
	public Comments() {}
	public Comments (int commentID, String commentContent,
			String commentDateTime,	int userID)
	{
		this.commentID = commentID;
		this.commentContent = commentContent;
		this.commentDateTime = commentDateTime;

	}

	/**
	 * Method setCommentID - receives input from the user and stores it 
	 * as the commentID.
	 * @param ID
	 */
	public void setCommentID(int ID)
	{
		this.commentID = ID;
	}
	
	/**
	 * Method setCommentContent - receives input from the user and stores it 
	 * as the commentContent.
	 * @param content
	 */
	public void setCommentContent(String content)
	{
		this.commentContent = content;
	}

	/**
	 * Method setCommentDateTime - receives input from the user and stores it 
	 * as commentDateTime.
	 * @param dateTime
	 */
	public void setCommentDateTime(String dateTime)
	{
		this.commentDateTime = dateTime;
	}

	/**
	 * Method setUserID - receives input from the user and stores it 
	 * as the userID.
	 * @param ID
	 */
	public void setUserID(int ID)
	{
		this.userID = ID;
	}
	
	/**
	 * Method - returns the value for the commentID
	 * @return
	 */
	public int getCommentID()
	{
		return commentID;
	}
	
	/**
	 * Method - returns the value for commentContent
	 * @return
	 */
	public String getCommentContent()
	{
		return commentContent;
	}
	
	/**
	 * Method - returns the value for commentDateTime.
	 * @return
	 */
	public String getCommentDateTime()
	{
		return commentDateTime;
	}
	
	/**
	 * Method - returns the value for the userID
	 * @return
	 */
	public int getUserID()
	{
		return userID;
	}
	/**
	 * 
	 * @return int articleID
	 */
	public Long getArticleID() {
		return articleID;
	}
	/**
	 * 
	 * @param int articleID
	 */
	public void setArticleID(Long articleID) {
		this.articleID = articleID;
	}
	public User getUser() {
        return user;
}

 public void setUser(User User) {
        this.user = User;
 }
}
