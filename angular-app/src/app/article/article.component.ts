import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Article,
  ArticlesService,
  Comment,
  CommentsService,
  User,
  UserService
} from '../core';
import { Profile } from 'src/app/Core/model/profile.model';
import { SafeHtml } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { Form } from '@angular/forms';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TokenStorageService } from 'src/app/Core/auth/token-storage.service';
import { ApiService } from 'src/app/Core/service';

/**
 * 
 */
@Component({
  selector: 'app-article-page',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[CommentsService]
})
/**
 * 
 */
export class ArticleComponent implements OnInit {
  subResult: any;
  ArtricleId = this.route.params['id'];
  data: string;
  
  article: any;
  id: String;
  form: any = {};
  currentUser: User;
  comments: [""];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;
  sanatized: SafeHtml;
  content: string;
  comment:any;
  cast: number = 1;
  userID = window.sessionStorage.getItem("userID");
  isAuthor: boolean;

  constructor(
    private articlesService: ArticlesService,
    //private commentsService: CommentsService,
    private userService: UserService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private tokenStorage: TokenStorageService,
    private ApiService: ApiService,
 
  ) { 

  }
  
  ngOnInit() {
    // Retreive the prefetched article
    this.route.data.subscribe(data => { 
      console.log('Data :', data)
      this.article = data;
      this.ArtricleId = this.article.Article.id;
      console.log(this.article);
      
   });

}

canModify(): boolean{
  if(this.article.Article.userID === window.sessionStorage.getItem("userID")){
    this.isAuthor = true;


 } else {
   this.isAuthor = false;
 }
 return this.isAuthor;
}
    // Load the current user's data
   /* this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = (this.currentUser.username === this.article.author.username);
      }
    );
  }

  onToggleFavorite(favorited: boolean) {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }

  onToggleFollowing(following: boolean) {
    this.article.author.following = following;
  }

  deleteArticle() {
    this.isDeleting = true;

    this.articlesService.destroy(this.article.slug)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }

  populateComments() {
    this.commentsService.getAll(this.article.slug)
      .subscribe(comments => this.comments = comments);
  }

  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = {};

    const commentBody = this.commentControl.value;
    this.commentsService
      .add(this.article.slug, commentBody)
      .subscribe(
        comment => {
          this.comments.unshift(comment);
          this.commentControl.reset('');
          this.isSubmitting = false;
        },
        errors => {
          this.isSubmitting = false;
          this.commentFormErrors = errors;
        }
      );
  }

  onDeleteComment(comment) {
    this.commentsService.destroy(comment.id, this.article.slug)
      .subscribe(
        success => {
          this.comments = this.comments.filter((item) => item !== comment);
        }
      );
  }
}*/
}
