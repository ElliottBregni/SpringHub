import { Profile } from './profile.model';
import { Article, User } from 'src/app/Core';

export class Comment {
  articleID: number;
  commentContent: String;
  commentDateTime: Date;
  userID: number;
  myDate = new Date();
  
constructor(id: number, body: String, userid: number) {
  this.articleID = id;
  this.commentContent = body;
  this.commentDateTime = this.myDate;
  this.userID = userid;



}
}