import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService, ResponsiveService, UserService, User } from 'src/app/Core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent implements OnInit {
  User: User;
  role: string;
  deviceMobile: boolean;
  show: boolean;
  deviceDesktop: boolean;
  HOA = false;
  Admin = false;
  FU = false;
  franchise: any;
  // tslint:disable-next-line:no-inferrable-types
  showSearchCompontent = false;
  @Output() buttonClicked = new EventEmitter();
  Currentuser: any;
  constructor(
      private router: ActivatedRoute,
      private authenticationService: AuthenticationService,
      private route: Router,
      private ResponsiveService: ResponsiveService,
      private userService: UserService,
      iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
  
    ) {
        iconRegistry.addSvgIcon(
            'person',
            sanitizer.bypassSecurityTrustResourceUrl('src/assets/images/person.svg'));
            iconRegistry.addSvgIcon(
                'calendar',
                sanitizer.bypassSecurityTrustResourceUrl('/assets/images/baseline-calendar_today-24px.svg'));

               this.Currentuser = this.authenticationService.currentUserValue;
         }
         
  


   // tslint:disable-next-line:member-ordering
   //@ViewChild('sidenav') sidenav: MatSidenav;

// tslint:disable-next-line:member-ordering
reason = '';

// shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


close(reason: string) {
  this.reason = reason;
 // this.sidenav.close();
}
logout() {
    
    window.location.reload();
    window.sessionStorage.clear();
    window.localStorage.clear();
    window.location.href = environment.url;
    
}

shownav(): boolean {
  if (this.deviceDesktop === true ) {
      this.show = true;
  } else {
      this.show = false;
}
  return this.show;
}
ngOnInit() {
    this.Currentuser = this.authenticationService.currentUserValue;
console.log(this.Currentuser);
  this.userService.findByUserName((window.sessionStorage.getItem("AuthUsername"))).subscribe(data => {
      console.log(data);
      this.User = data;
      console.log(this.User);
      
  });
  if(this.User.roles == null) {
      console.log("nulls");
  }
  
  this.designation();
  this.ResponsiveService.getMobileStatus().subscribe( isMobile => {
    if ( isMobile) {
      console.log('Mobile device detected');
      this.deviceMobile = true;
    } else {
      console.log('Desktop detected');
      this.deviceDesktop = true;
    }
  });
  this.onResize();
  }
  onResize() {
      this.ResponsiveService.checkWidth();
    }

    showSearch() {
      this.showSearchCompontent = true;
      this.buttonClicked.emit(this.showSearchCompontent);
    }
  designation(){
      const role = window.sessionStorage.getItem("AuthAuthorities");
      if(this.role = "Home Office Admin"){
          this.HOA = true;
      } else if (this.role = "Franchise User") {
          this.FU = true;
          this.franchise = this.User.franchise;
      } else if(this.role = "Admin"){
          this.Admin = true;
      }
  }
  admin(): boolean {
   
      const role = window.sessionStorage.getItem("AuthAuthorities");
      console.log(role);
     
      if(this.User.roles.designationID === 11 || this.User.roles.designationID === 12 || this.User.roles.designationID === 13){
           this.HOA = true;
      } else{
      this.HOA = false;
      }
      return this.HOA;
  }
      
     
}