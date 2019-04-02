import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
//add-article wysiwyg editor
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { longStackSupport } from 'q';
import {ResponsiveService, User} from './Core'
import { TokenStorageService } from 'src/app/Core/auth/token-storage.service';
import { AuthService } from 'src/app/Core/auth/auth.service';
import { AuthGuard } from 'src/app/Core/auth-gaurd/auth-gaurd.component';
import { SearchService } from 'src/app/Core/service/Search.service';
import { Subject } from 'rxjs';
import { ElasticsearchService } from 'src/app/Core/service/elastic.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ElasticsearchService]
})

export class AppComponent implements OnInit {

  currentUser: User;
  show: boolean;
  deviceMobile = false;
  deviceDesktop = false;
  deviceMedium = false;
  showNav: boolean;
  results: {};
  searchTerm$ = new Subject<string>();
  hiddenSearch = true;
  isConnected = false;
  status: string;

  constructor(private router: Router,private token:TokenStorageService, 
      private authenticationService: AuthService,
      private ResponsiveService: ResponsiveService,
      private TokenStorage: TokenStorageService,    
      private Authguard: AuthGuard,
      private searchService: SearchService,
      private ESS: ElasticsearchService,
      private cd: ChangeDetectorRef
      
    ) {
      this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });

      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      if ( this.router.url === this.router.url + '/logout') {
      this.logout();
      }
    }

 logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

  shownav(): boolean {
    const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.accessToken) {
             
            this.show = true;
           
        } else {
         
            this.show = false;
        
          }
          return this.show;
        }
        shownavMobile(): boolean {
          if (this.authenticationService.isAuthenticated) {
               
              this.showNav = true;
             
          } else {
           
              this.showNav = false;
          
            }
            return this.showNav;
          }
 
    onResize() {
    this.ResponsiveService.checkWidth();

  }
    ngOnInit() {
      this.ESS.isAvailable().then(() => {
        this.status = 'OK';
        this.isConnected = true;
        console.log(this.status);
      }, error => {
        this.status = 'ERROR';
        this.isConnected = false;
        console.error('Server is down', error);
      }).then(() => {
        this.cd.detectChanges();
      });
    
      
      console.log(this.authenticationService.currentUserValue.username)
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
    showSearchComponent() {
      console.log('Button clicked.');
      this.hiddenSearch = false;
      
    }
    showSearch(): boolean {
      if(this.hiddenSearch){
        return true

      } else {
        return false;
      }
    }
}
