import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { TokenStorageService } from 'src/app/Core/auth/token-storage.service';
import { User } from 'src/app/Core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private loginUrl = environment.api_url + 'login';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient,public jwtHelper: TokenStorageService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions).pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.accessToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
      }

      return user;
  }));;
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}
  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
  /*public isAuth(): boolean {
    const token = localStorage.getItem('');
    return !this.jwtHelper.isTokenExpired(token);
  }*/
  logout(): any {

  }
  isAuthenticated(): boolean {
    return !!this.jwtHelper.getToken();
  }

}
