import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { JwtService } from './jwt.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserBookmark } from 'src/app/Core/model/UserBookmark';
import { Tag } from 'src/app/Core/model/Tag';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};  

@Injectable()
export class ApiService {
  [x: string]: any;
  constructor(
    private http: HttpClient,
    //private jwtService: JwtService
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),httpOptions
    ).pipe(catchError(this.formatErrors));
  }

  postTag(path: string, tag: Tag): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`,  JSON.stringify(tag), httpOptions)
      .pipe(
        catchError(this.handleError('addHero', tag))
      );
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }
  postBookmark(path: string, bookmark: UserBookmark): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, bookmark, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', bookmark))
      );
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
