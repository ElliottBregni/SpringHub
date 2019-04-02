import { NgModule } from '@angular/core';
import { ArticleComponent } from 'src/app/article/article.component';
import { ArticlesComponent } from 'src/app/article/articles/articles.component';
import { AddArticleComponent } from 'src/app/article/add-article/add-article.component';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from 'src/app/article/ArticleRoutes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSummernoteModule } from 'ngx-summernote';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/Shared';
import { ArticlesResolver } from './article.resolver';
import { ApiService, JwtService } from 'src/app/Core/service';
import { ArticleResolver } from './article-resolver.service';
import { ArticleMetaComponent } from './article-meta/article-meta.component';
import {CoreModule} from 'src/app/Core/Core.Module';
import { CategoryResolver } from 'src/app/article/Category-resolver';
import { CategoryService } from 'src/app/Core/service/category.service';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TagsComponent } from 'src/app/article/tags/tags.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/Core/material.module';
import { ArticleCommentComponent } from 'src/app/article/article-comment/article-comment.component';
import { TrainingComponent } from './training/training.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AddArticleComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleMetaComponent,
    SubscribeComponent,
    TagsComponent,
    ArticleCommentComponent,
    TrainingComponent,
    EditArticleComponent,
    ResourcesComponent,
    ProjectComponent 
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    NgxSummernoteModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CoreModule,
    NgbPaginationModule,
    MaterialModule,
     
  ],
  providers: [
    ArticleResolver,
    ApiService,
    JwtService,
    ArticlesResolver,
    CategoryResolver,
    CategoryService,
    TagsComponent 

  ],
  exports: [
    ArticleComponent,
    ArticlesComponent,
    AddArticleComponent,
    ArticleMetaComponent,
    SubscribeComponent,
    TagsComponent,
    ArticleCommentComponent,
    TrainingComponent 
    
  ]
})
export class ArticleModule { }
