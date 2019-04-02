import { Injectable } from '@angular/core';



@Injectable()
export class JwtService {

  getToken(): String {
    return window.localStorage['AuthToken'];
  }

  saveToken(token: String) {
    window.localStorage['AuthToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('AuthToken');
  }

}
