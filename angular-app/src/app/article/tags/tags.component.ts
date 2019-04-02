import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ApiService } from 'src/app/Core';
import { environment } from 'src/environments/environment';
import { subscription } from 'src/app/Core/model/subscription';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  count: any;
  asyncResult: any;
  subResult: any;
  SubArray = [];
  nonSubArr = [];
  @Input() ArticleId: number;
  @Input() Subscription: any;
  constructor(private ApiService: ApiService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'check',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/check.svg'));

   }

  ngOnInit() {
    this.getTagUsingPromise();
    

    
    
    console.log( "hi");
    console.log(this.subResult);
  }
  getTagUsingPromise(): any {
    this.ApiService.get('tagGroup/' + this.ArticleId).toPromise().then(data => {
      this.asyncResult = data;
      this.count = data.length;
      console.log(data);
      console.log('Promise resolved.'+ this.count);
      this.ApiService.get('/UserSubscriptions/' + window.sessionStorage.getItem("AuthUsername")).subscribe(data => {
        this.subResult = data;
        console.log(data);
        console.log('Promise resolved.')
        console.log(this.subResult);
        console.log(this.asyncResult);
        if(this.subResult[0] === undefined){
          for(let i = 0; i < this.asyncResult.length; i++){
          this.nonSubArr[i] = this.asyncResult[i][0];
          }
        } else {
        for(let i = 0; i < this.asyncResult.length; i++){
          let x = 0;
          if(this.subResult[x].tagID != this.asyncResult[i][0].tagID){
            console.log("Array of not subscribedd");
            this.nonSubArr.push(this.asyncResult[i][0]);
            console.log(this.nonSubArr);
          } 
          if(this.subResult[x].tagID === this.asyncResult[i][0].tagID) {
            console.log( 'Array of subscribed');
            this.SubArray.push(this.asyncResult[i][0]);
            console.log(this.SubArray);
            x++;
          }
          console.log("hit")
        }
      }
      });
    
      console.log('I will not wait until promise is resolved..');
     
    });
    console.log('I will not wait until promise is resolved..');
    
    return this.asyncResult;
  }
 
  UnSubscribe(Id: String){
    this.ApiService.delete('UserSubscriptions/'+ Id + "/" + window.sessionStorage.getItem("AuthUsername")).subscribe(status => 
    console.log(JSON.stringify(status)));
    let button = document.getElementById("unsub-"+Id);
    button.style.backgroundColor = "#ff0000";
    console.log(Id);
      for(let i of this.SubArray){
          if(this.SubArray[i].tagID == Id){
            console.log("Yet another log");
            this.nonSubArr.push(this.SubArray[i]);
            this.SubArray[i].splice(i,1);
          } else {
            this.getTagUsingPromise();
          }
          this.SubArray = [];
          this.nonSubArr = [];
          this.getTagUsingPromise();
      }
  }
  Subscribe(value: String){
    let notification = 1;
    let subscrib = new subscription(
      window.sessionStorage.getItem("UserID"),
      value,
      notification
    )
    this.ApiService.post('UserSubscriptions/'+ value + "/" + window.sessionStorage.getItem("AuthUsername"),subscrib).subscribe(status => 
    console.log(JSON.stringify(status)));
    let button = document.getElementById("sub-"+value);
    button.style.backgroundColor = "#17a2b8";
    console.log(value);
    this.nonSubArr = [];
    this.SubArray = [];
    this.getTagUsingPromise();
   
    for(let i of this.nonSubArr){
      if(this.nonSubArr[i].tagID == value){
        console.log("Yet another log");
        this.SubArray.push(this.nonSubArr[i]);
        this.nonSubArr[i].splice(i,1);
      } else {
        this.getTagUsingPromise();
      }

  }
  }
  
}
