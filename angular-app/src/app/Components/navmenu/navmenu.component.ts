import { Component,ViewChild, OnInit, Output, EventEmitter  } from '@angular/core';
import {ResponsiveService } from '../../Core/Service'
import {AuthenticationService } from '../../Core/Service'
//import {AlertService } from '../../Core/Service'
import { ActivatedRoute, Router } from '@angular/router';
//import {MatSidenav} from '@angular/material/sidenav';
import { UserService } from 'src/app/Core';
import { User } from '../../Core/model/user';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css'],
    providers: [ResponsiveService]
})
export class NavMenuComponent implements OnInit {
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

    constructor(
        private router: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private route: Router,
        private ResponsiveService: ResponsiveService,
        private userService: UserService) {
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
        window.location.replace(environment.url);
      window.sessionStorage.clear();
      window.localStorage.clear();
           
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
    this.userService.findByUserName((window.sessionStorage.getItem("AuthUsername"))).subscribe(data => {
        console.log(data);
        this.User = data;
        console.log(this.User);
    });
    

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
        if(this.User.roles.designationID === 11){
             this.HOA = true;
        } else{
        this.HOA = false;
        }
        return this.HOA;
    }
        
       
}

