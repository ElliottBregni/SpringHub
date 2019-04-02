import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../service';
import { TokenStorageService } from 'src/app/Core/auth/token-storage.service';
import { AuthService } from 'src/app/Core/auth/auth.service';
import { UserService } from 'src/app/Core';
import { Component } from '@angular/core';

@Injectable({ providedIn: 'root', 

})

export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
  
        private authenticationService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.accessToken) {
            
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}