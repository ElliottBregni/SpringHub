import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {ApiService} from './api.service';
import {environment} from '../../../environments/environment';
import { ArticleListConfig, Article } from 'src/app/Core/model';
import { HttpParams } from '@angular/common/http';
import { data } from 'jquery';

const url = environment.api_url;
console.log(url);
const endpoint = url + 'Articles/';
console.log(endpoint);

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};  

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor (
    private apiService: ApiService,
    private http: HttpClient
  ) {}
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  query(config: ArticleListConfig): Observable<{articles: Article[], articlesCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

   Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];
    });
    return this.apiService
    .get(
      '/articles' + ((config.type === 'feed') ? '/feed' : ''),
      new HttpParams({ fromObject: params })
    );
  }

  get(id): Observable<any> {
    return this.apiService.get('Articles/' + id)
      .pipe(map(this.extractData));
  }

  destroy(slug) {
    return this.apiService.delete('/Articles/' + slug);
  }

  save(article): Observable<Article> {
    // If we're updating an existing article
    if (article.slug) {
      return this.apiService.put('/Articles/' + article.slug, {article: article})
        .pipe(map(data => data.article));

    // Otherwise, create a new article
    } else {
      return this.apiService.post('/Articles/', {article: article})
        .pipe(map(data => data.article));
    }
  }

  favorite(slug): Observable<Article> {
    return this.apiService.post('/Articles/' + slug + '/favorite');
  }

  unfavorite(slug): Observable<Article> {
    return this.apiService.delete('/Articles/' + slug + '/favorite');
  }
  find(Page: String,Sort: String): Observable<any> {
    return this.apiService.get('Articles/' + Page +"/" +Sort).pipe(
      map(this.extractData));
  }
  add(article: Article): Observable<any> {
    return this.http.post<Article>(endpoint, article, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', article))
      );
  }
  addComment(comment: Comment, id: string): Observable<any> {
    console.log(endpoint);
    return this.http.post<Comment>(endpoint + 'comments/' + id + '/', comment, httpOptions)
    .pipe(
      catchError(this.handleError('Comment', comment))
    )
  }
  getArticleById(id): Observable<any> {
  
    return this.http.get(endpoint + '/'+ id).pipe(
      map(this.extractData));
  }
 
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  
  
  
}
