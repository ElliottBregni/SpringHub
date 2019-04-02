import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import {ArticleComponent} from './article.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesResolver } from './article.resolver';
import { ArticleResolver } from './article-resolver.service';
import { TrainingComponent } from './training/training.component';
import { CategoryResolver } from 'src/app/article/Category-resolver';
import { AuthGuard } from 'src/app/Core/auth-gaurd/auth-gaurd.component';
import { EditArticleComponent } from 'src/app/article/edit-article/edit-article.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProjectComponent } from './project/project.component';
const routes: Routes = [



   {
     path: 'Articles/:page/:sort',
     component: ArticlesComponent,
     data: { title: 'Article List'},
     resolve:{ Articles: ArticlesResolver},
     canActivate: [AuthGuard]
   },
  {
    path: 'AddArticle',
    component: AddArticleComponent,
    resolve:{
      Category:CategoryResolver
    }
  },
  {
    path: 'article/:id',
    component: ArticleComponent,
    data: { title: 'Article Details' },
    resolve:{ Article: ArticleResolver}
  },
  {
    path: 'Training',
    component: TrainingComponent,
  },
  {
    path: 'Resources',
    component: ResourcesComponent,
  },
  {
    path: 'Project',
    component: ProjectComponent,
    resolve:{
      Category:CategoryResolver,
    }
  },
  {
    path: 'editor/:id',
    component: EditArticleComponent,
    data: { title: 'Article Details' },
    resolve:{ Article: ArticleResolver}
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ArticleResolver,ArticlesResolver]
})
export class ArticleRoutingModule { }


