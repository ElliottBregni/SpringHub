import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ArticlesService } from '../Core/service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article} from '../core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CategoryService } from 'src/app/Core/service/category.service';
@Injectable()
export class ResultsResolver implements Resolve<any> {

  constructor(private http: HttpClient, private categoryService:CategoryService,private route: ActivatedRoute,private router: Router
  
  ) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> { 
    return this.categoryService.get();
    
  }
    
  
 
}