import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

import { Comment, User, UserService, Article } from '../../core';
import { Subscription } from 'rxjs';
import { ApiService, ArticlesService } from 'src/app/Core/service';
import { environment } from 'src/environments/environment.prod';
import { Form } from '@angular/forms';
@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.css'],
})
export class ArticleCommentComponent implements OnInit, OnDestroy {
  asyncResult: any;
  userID = window.sessionStorage.getItem("userID");
  form: any = {};
  
  constructor(
    private userService: UserService,
    private ApiService: ApiService,
    private articlesService: ArticlesService
  ) {}

  private subscription: Subscription;

  comment: any;
  @Input() Article: any;
  @Output() deleteComment = new EventEmitter<boolean>();

  canModify: boolean;

  ngOnInit() {
    // Load the current user's data
 
    this.getDataUsingPromise();
  
  }
  

  getDataUsingPromise() {
    this.ApiService.get("/Comments/" + this.Article.id).toPromise().then(data => {
      this.asyncResult = data;
      console.log('Promise resolved.')
    });
    console.log('I will not wait until promise is resolved..');
  }
  ngOnDestroy() {
  
  }

  deleteClicked() {
    
  }
  onSubmit() {
    
    console.log(this.form);
    console.log(this.Article.id);
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
    this.comment = new Comment(
      
      this.Article.id,           
      this.form.comment,
      Number(this.userID),
    
    );
    console.log(this.comment);
    this.articlesService.addComment(this.comment,this.Article.id).subscribe(
      data => {
        //console.log(this.comment);
        //console.log(data);
        console.log(this.Article.id)
        this.getDataUsingPromise();
      },
      error => {
        console.log(error);
  
      });

      
  }

}

