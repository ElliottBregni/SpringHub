import { Component, OnInit } from '@angular/core';
import { UserService, ArticlesService, ApiService } from 'src/app/Core';
import { Input } from '@angular/core';
import { UserBookmark } from 'src/app/Core/model/UserBookmark';
import { HttpHeaders } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};  
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})

export class SubscribeComponent implements OnInit {
  Username: string;
  @Input() ArticleId: number;
  subscriped: boolean;
  buttonState: any;
  BookMark: any;
  result: any;
  index = 0;
  icon: string; 
  constructor(private userService:UserService,private articleService: ArticlesService, private ApiService: ApiService, 
  iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'notBookmarked',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/images/notBookmarked.svg'));
        iconRegistry.addSvgIcon(
          'Bookmarked',
          sanitizer.bypassSecurityTrustResourceUrl('/assets/images/baseline-bookmarks-24px.svg'));
    
     }
     
  ngOnInit() {
    
    
    this.Username = window.sessionStorage.getItem("AuthUsername");
    this.ApiService.get("Bookmarks/" + this.Username).subscribe(data =>{
      //Checks if user is subscribed  
      
      this.result = data
      console.log(this.ArticleId);
      for (let i = 0; i < data.length; i++) {
          if(this.result[i].articleID == this.ArticleId) {
            console.log(this.result[i].articleID);
            this.subscriped = true;
            console.log(this.result[i].articleID);
            console.log("is subscribed" + this.ArticleId);
            this.icon = 'fas fa-bookmark';
            break;
          } else {
            this.subscriped = false;
            console.log("is not subscribed" + this.result[i].articleID);
            this.icon = 'far fa-bookmark';
            
            
          }

        };

    },
    
  Error =>{

  });
 
}
  subscribe(){
    if(this.subscriped == true){
      this.icon = 'far fa-bookmark';
      this.ApiService.delete("Bookmarks/"+this.Username +"/"+this.ArticleId).subscribe(status => 
        console.log(JSON.stringify(status)+ this.ArticleId));
        this.subscriped = false;
    
      }else {
      this.icon = 'fas fa-bookmark';
    this.BookMark = new UserBookmark(
      this.ArticleId,
      Number(window.sessionStorage.getItem("userID")),
      "True"

    );
    console.log(this.BookMark);
    this.ApiService.postBookmark("Bookmarks/"+this.ArticleId, this.BookMark).subscribe(status => 
      console.log(JSON.stringify(status)+ this.ArticleId));
      this.subscriped = true;
 
      
      
    } 
    
  }
  
 

public change(newIcon: string ){
  if(this.subscriped == false){
    this.icon = newIcon ; 
  } 
}
  


}
