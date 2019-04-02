import { NgModule } from '@angular/core';
import { ArticleComponent } from 'src/app/article/article.component';
import { ArticlesComponent } from 'src/app/article/articles/articles.component';
import { AddArticleComponent } from 'src/app/article/add-article/add-article.component';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from 'src/app/article/ArticleRoutes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSummernoteModule } from 'ngx-summernote';
import { FormsModule } from '@angular/forms';
import { MarkdownPipe } from 'src/app/article/markdown.pipe';
import { FilterPipe } from 'src/app/Core/filter.pipe';
import { SearchComponent } from 'src/app/Core/search/search.component';
import { ApiService, ArticlesService, UserService } from 'src/app/Core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchService } from 'src/app/Core/service/Search.service';

import {MaterialModule} from './material.module';
import { NavMenuComponent } from 'src/app/Components/navmenu/navmenu.component';
import { MobileNavComponent } from 'src/app/Components/mobile-nav/mobile-nav.component';

import {SortComponent} from './sort/sort.component';
import {PaginationComponent} from './pagination/pagination.component';
import {ResultsComponent} from './results/results.component';
import { ResultsPageComponent } from 'src/app/Core/results-page/results-page.component';
import { CoreRoutingModule } from 'src/app/Core/CoreRoutes.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormUploadComponent } from 'src/app/Core/upload/form-upload/form-upload.component';
import { ListUploadComponent } from 'src/app/Core/upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from 'src/app/Core/upload/details-upload/details-upload.component';
import { JwtInterceptor } from 'src/app/helpers/JWT.interceptor';
import { XhrInterceptor } from 'src/app/helpers/XhrInterceptor';
import { ErrorInterceptor } from 'src/app/helpers/error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UploadFileService } from 'src/app/Core/service/UploadFile.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MarkdownPipe,
    SortComponent,
    ResultsComponent,
    PaginationComponent,
    SearchComponent,
    ResultsPageComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    CoreRoutingModule,
    NgxSummernoteModule,
    ReactiveFormsModule,
    FormsModule,
    NgbPaginationModule, 
    NgbAlertModule,
    MaterialModule,
  NgbPaginationModule,
  Ng2SearchPipeModule,
  HttpClientModule

     
  ],
  providers: [,
    ApiService,
    ArticlesService,
    UserService,
    SearchService,
    SearchComponent,
    NavMenuComponent,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }, 
    UploadFileService

  ],
  exports: [

    MarkdownPipe,
    SortComponent,
    PaginationComponent,
    ResultsComponent,
    SearchComponent,
    ResultsPageComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,  
  ]
})
export class CoreModule { }
