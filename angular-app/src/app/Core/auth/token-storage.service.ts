import { Injectable } from '@angular/core';
import { User } from 'src/app/Core';
import { Observable } from 'rxjs';

const TOKEN_KEY = 'AuthToken';
const User_ID = 'userID';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const DEPARTMENT_KEY = 'DepoKey';
const FRANCHISE_KEY = 'FranchiseKey';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: String;
    constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, authorities);
  }

  public getAuthorities(): string {
    return window.sessionStorage.getItem(AUTHORITIES_KEY);
  }
  public saveFranchise(franchise: string) {
    window.sessionStorage.removeItem(FRANCHISE_KEY);
    window.sessionStorage.setItem(FRANCHISE_KEY, franchise);
  }

  public getFranchise(): string {
    return window.sessionStorage.getItem(FRANCHISE_KEY);
  }

  public saveDepartment(Department: string) {
    window.sessionStorage.removeItem(DEPARTMENT_KEY);
    window.sessionStorage.setItem(DEPARTMENT_KEY, Department);
  }

  public getDepartment(): string {
    return window.sessionStorage.getItem(DEPARTMENT_KEY);
  }
  public saveId(id: string) {
    window.sessionStorage.removeItem(User_ID);
    window.sessionStorage.setItem(User_ID, id);
  }

  public getId(): string {
    return sessionStorage.getItem(User_ID);
  }


}

