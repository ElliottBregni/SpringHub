
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordSettingComponent } from 'src/app/user/user-profile/password-setting/password-setting.component';
import { NotificationSettingComponent } from 'src/app/user/user-profile/notification-setting/notification-setting.component';
import { UserProfileComponent } from 'src/app/user/user-profile/user-profile.component';
import { UserResolver } from 'src/app/user/user-resolver.service';
import { AdminComponent } from 'src/app/user/admin/admin.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
const routes: Routes = [



   {
     path: 'User',
     component: UserProfileComponent,
     resolve:{ User: UserResolver}
   },
   {
    path: 'ContentManager',
    component: AdminComponent
  },
   {
    path: 'EditUserProfile',
    component: EditUserProfileComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }


