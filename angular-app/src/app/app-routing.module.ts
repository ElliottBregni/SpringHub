import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { CalendarComponent } from 'src/app/Components/calendar/calendar.component';
//import { UserListComponent } from 'src/app/Components/user-list/user-list.component';
import { BiReportsComponent } from 'src/app/Components/bi-reports/bi-reports.component';
import { AuthGuard } from 'src/app/Core/auth-gaurd/auth-gaurd.component';
import { UserResolver } from 'src/app/user/user-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
  resolve: {User: UserResolver},
  canActivate: [AuthGuard]
  },
  
   { path: 'calendar', component: CalendarComponent,  canActivate: [AuthGuard]},
   
   { path: 'BiReport',component: BiReportsComponent, canActivate: [AuthGuard] },

   {
     path: 'Articles',
     loadChildren: '../app/article/article.module#ArticleModule',
     data: { title: 'Article List' },
     canActivate: [AuthGuard]
   },
   {
    path: 'login',
    loadChildren: './Login/Login.Module#LoginModule',
  },
  {
    path: 'AddArticle',
    loadChildren: '../app/article/article.module#ArticleModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: './Login/Login.Module#LoginModule',
  },
  {
    path: 'article/:id',
    data: { title: 'Article Details' },
    loadChildren: './article/article.module#ArticleModule',
    canActivate: [AuthGuard]
  },
  
  {
    path: 'User',
    loadChildren: '../app/user/User.Module#UserModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'ContentManager',
    loadChildren: '../app/user/User.Module#UserModule',
    canActivate: [AuthGuard]
  },
  {
   path: 'NotificationSettings',
   loadChildren: './user/User.Module#UserModule',
 },
 {
   path: 'PasswordSettings',
   loadChildren: './user/User.Module#UserModule',
 },
 {
  path: 'Results/:data',
  loadChildren: './Core/Core.Module#CoreModule',
},
{
  path: 'Training',
  loadChildren: './article/article.module#ArticleModule',
},
{
  path: 'Project',
  loadChildren: './article/article.module#ArticleModule',
},
{
  path: 'Resources',
  loadChildren: './article/article.module#ArticleModule',
},
{
  path: 'EditUserProfile',
  loadChildren: '../app/user/User.Module#UserModule',
},
{
  path: 'editor/:id',
  loadChildren: './article/article.module#ArticleModule',
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


