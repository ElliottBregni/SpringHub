import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../model';
import { map ,  distinctUntilChanged } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';


//Read this about user authetication https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
@Injectable({
  providedIn: 'root'
})

export class UserService {
  isAuthenticatedSubject: any;
  currentUserSubject: any;
  jwtService: any;
  private userUrl = 'http://localhost:8080/api/test/user';
  public currentUser;
  isAuthenticated: any;

/*
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
*/
  constructor (
    private apiService: ApiService,
    private http: HttpClient,

  ) {}

  // Verify JWT in localstorage with server & load user's info.
 // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get('/user')
      .subscribe(
        data => this.setAuth(data.user),
        err => this.purgeAuth()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.accessToken);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .pipe(map(
      data => {
        this.setAuth(data.user);
        return data;
      }
    ));
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
    .put('/user', { user })
    .pipe(map(data => {
      // Update the currentUser observable
      this.currentUserSubject.next(data.user);
      return data.user;
    }));
  }
///////////Old authentication

getAll() {
  return this.http.get<User[]>(`${environment.api_url}/users`);
}

getById(id: number) {
  return this.http.get(`${environment.api_url}Users/${id}`);
}

register(user: User) {
  return this.http.post(`${environment.api_url}/users/register`, user);
}

updateold(user: User) {
  return this.http.put(`${environment.api_url}/users/${user.id}`, user);
}

delete(id: number) {
  return this.http.delete(`${environment.api_url}/users/${id}`);
}
getUserBoard(): Observable<string> {
  return this.http.get(this.userUrl, { responseType: 'text' });
}
findByUserName(Username: String): Observable<any>{
  console.log(environment.api_url);
  return this.http.get(`${environment.api_url}Users/${Username}`);
}
findByUserName1(Username: String): Observable<User>{
  console.log(environment.api_url);
  return this.http.get<User>(`${environment.api_url}Users/${Username}`);
}
}


