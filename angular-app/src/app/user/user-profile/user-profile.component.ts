import { Component, OnInit } from '@angular/core';
import { UserService, ApiService } from '../../Core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/Core/auth/auth.service';
import { User } from 'src/app/Core/model';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],

})
export class UserProfileComponent implements OnInit {
  result: any;
  Username: string;
  AuthService: any;
  page = 0;
  sort = "createdAt"
  User: any;
  id: String;
  Tags: any;
  constructor(
    //private commentsService: CommentsService,
    private userService: UserService,
   private route: ActivatedRoute, private router: Router,
    private sanitizer: DomSanitizer, AuthService: AuthService,private ApiService: ApiService) { }

 
    ngOnInit() {
      // Retreive the prefetched article
      
      this.route.data.subscribe(data => { 
        console.log('Data :', data)
        this.User = data;
        console.log(this.User);
        //get Subscription
        this.Username = window.sessionStorage.getItem("AuthUsername");
        this.ApiService.get("Bookmarks/" + this.Username + "/" + this.page + "/" + this.sort).subscribe(data =>{
          //Checks if user is subscribed  
          
          this.result = data;
          console.log(this.result[1]);
          window.localStorage.setItem("Bookmarks",JSON.stringify(this.result));
        });
        
        this.ApiService.get("UserSubscriptions/" + this.Username).subscribe(data =>{
          //Checks if user is subscribed  
          this.Tags = data;
          console.log(this.Tags.tags[1]);
          window.localStorage.setItem("Tags",JSON.stringify(this.Tags));

        });
        });
      
        
  }
}
    