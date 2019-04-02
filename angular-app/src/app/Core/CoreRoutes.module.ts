
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryResolver } from 'src/app/article/Category-resolver';
import { AuthGuard } from 'src/app/Core/auth-gaurd/auth-gaurd.component';
import { ResultsPageComponent } from 'src/app/Core/results-page/results-page.component';
const routes: Routes = [



   {
     path: 'Results/:data',
     component: ResultsPageComponent,
     canActivate: [AuthGuard]
   },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CoreRoutingModule { }


