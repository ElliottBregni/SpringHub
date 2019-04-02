import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ArticlesService } from '../Core/service/article.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ArticlesResolver implements Resolve<any> {

  constructor(private http: HttpClient, private articlesService:
    ArticlesService,private route: ActivatedRoute) { }

  resolve(route: ActivatedRouteSnapshot) { 

    return this.articlesService.find(route.params['page'], route.params['sort']);
    
  }
 
}