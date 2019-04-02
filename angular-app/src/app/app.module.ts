import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr' ;
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import 'flatpickr/dist/flatpickr.css';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { NavMenuComponent } from './Components/navmenu/navmenu.component';
import { HomeComponent } from './Components/home/home.component';
//import { ArticleModule } from './Core/articles/articles.module';
//import { NgxSummernoteModule } from '../../projects/ngx-summernote/src/lib/ngx-summernote.module';
import { AuthenticationService, UserService,  } from './core/service';
import { AlertService  } from './core/service/alert.service';
import {ResponsiveService} from './Core/service'
//import { JwtInterceptor, ErrorInterceptor } from './helpers';

import {  HTTP_INTERCEPTORS } from '@angular/common/http';

import { AlertComponent } from 'src/app/Components/alert/alert.component';


import {MaterialModule} from './Core/material.module';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { MobileNavComponent } from './Components/mobile-nav/mobile-nav.component';
import { ArticleModule } from 'src/app/article/article.module';
import { LoginModule } from 'src/app/Login/Login.Module';
import { UserModule } from './user/User.Module';
import { UserComponent } from './User/user/user.component';
import { ApiService } from 'src/app/Core/service/api.service';
import { JwtService } from 'src/app/core';
//import { SharedModule } from 'src/app/Shared';
import {ArticlesService} from './Core/service/Article.service';
import { BiReportsComponent } from './Components/bi-reports/bi-reports.component'
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { XhrInterceptor } from 'src/app/helpers/XhrInterceptor';

import { httpInterceptorProviders } from './Core/auth/auth-interceptor';
import { JwtInterceptor } from 'src/app/helpers/JWT.interceptor';
import { AuthService } from 'src/app/Core/auth/auth.service';
import { AuthGuard } from 'src/app/Core/auth-gaurd/auth-gaurd.component';
import { ErrorInterceptor } from 'src/app/helpers/error.interceptor';
import { TokenStorageService } from 'src/app/Core/auth/token-storage.service';

import { UserResolver } from 'src/app/user/user-resolver.service';
import { CategoryResolver } from 'src/app/article/Category-resolver';
import { CategoryService } from 'src/app/Core/service/category.service';
import { AddCategoryComponent } from './user/admin/add-category/add-category.component';
import { ArchiveArticleComponent } from './user/admin/archive-article/archive-article.component';
import { EditUserComponent } from './user/admin/edit-user/edit-user.component';
import { EditArticleComponent } from './user/admin/edit-article/edit-article.component';
import { ActionComponent } from './user/admin/action/action.component';
;
import { IconBarComponent } from './Components/icon-bar/icon-bar.component';
import { CoreModule } from 'src/app/Core/Core.Module';






@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomeComponent,
    NavMenuComponent,
    AlertComponent,
    SidebarComponent,
    MobileNavComponent,
    UserComponent,
    BiReportsComponent,
    AddCategoryComponent,
    ArchiveArticleComponent,
    EditUserComponent,
    EditArticleComponent,
    ActionComponent,
    IconBarComponent,
   

  
    
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    LoginModule,
    UserModule,
    NgbModalModule,
    MaterialModule,
    ReactiveFormsModule,
    ArticleModule,
    CoreModule,
	  //SharedModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AppRoutingModule,



     BrowserAnimationsModule
  ],
  entryComponents: [MobileNavComponent],
  providers: [
    AuthGuard,
    AuthenticationService,
    AuthService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    ResponsiveService,
    TokenStorageService,
    httpInterceptorProviders, 
    ApiService,
    JwtService,
    AlertService,
    HttpModule,

    UserResolver,
    CategoryResolver,
    CategoryService 



  ],
  bootstrap: [AppComponent],
  exports: [CalendarComponent]
})

export class AppModule { }

