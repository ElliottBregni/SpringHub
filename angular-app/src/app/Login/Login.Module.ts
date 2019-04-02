import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgxSummernoteModule } from 'ngx-summernote';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './login/login.component';

import { LoginRoutingModule } from './LoginRoutes.Module';
import { AlertService } from 'src/app/core';



@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    NgbModalModule,
    BrowserModule,
    
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
    
     
  ],
  providers: [
    AlertService

  ],
  exports: [ LoginComponent,

  ]
})
export class LoginModule { }
