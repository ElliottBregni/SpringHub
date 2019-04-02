import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ArticlesService } from '../Core/service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article} from '../core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService } from 'src/app/core/service/user.service';
@Injectable()
export class UserResolver implements Resolve<any> {

  constructor(private http: HttpClient, private UserService:UserService,private route: ActivatedRoute,private router: Router
  
  ) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> { 
    return this.UserService.findByUserName((window.sessionStorage.getItem("AuthUsername")));
    
  }
 
}