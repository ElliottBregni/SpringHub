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
import { PasswordSettingComponent } from 'src/app/user/user-profile/password-setting/password-setting.component';
import { NotificationSettingComponent } from 'src/app/user/user-profile/notification-setting/notification-setting.component';
import { UserProfileComponent } from 'src/app/user/user-profile/user-profile.component';
import { UserRoutingModule } from 'src/app/user/UserRoutes.Module';
import { ApiService, UserService } from 'src/app/core';
import { UserResolver } from 'src/app/user/user-resolver.service';
import {MarkdownPipes} from './markdown.pipes';

import { AdminComponent } from './admin/admin.component';
import { CoreModule } from 'src/app/Core/Core.Module';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';


@NgModule({
  declarations: [
    PasswordSettingComponent,
    NotificationSettingComponent,
    UserProfileComponent,
    AdminComponent,
    MarkdownPipes,
    EditUserProfileComponent
  ],
  imports: [
    NgbModalModule,
    BrowserModule,
    UserRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
    
     
  ],
  providers: [
    ApiService,
    UserResolver,
    UserService

  ],
  exports: [ 

    PasswordSettingComponent,
    NotificationSettingComponent,
    UserProfileComponent,
    AdminComponent,
    MarkdownPipes,
    EditUserProfileComponent
  ]
})
export class UserModule { }
