import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { first } from 'rxjs/internal/operators/first';
import { Article } from 'src/app/core/model/article';
import {ArticlesService} from '../../Core/service/Article.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {options} from '../../Core/model/options';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/Core';
declare var $: any;

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  ArtricleId: any;
  article: any;

  constructor(private http: HttpClient, private articlesService:ArticlesService, private route: ActivatedRoute,private ApiService: ApiService) { }

  ngOnInit() {

    this.route.data.subscribe(data => { 
      console.log('Data :', data)
      this.article = data;
      this.ArtricleId = this.article.Article.id;
      console.log(this.article.Article.content);
      
   });
    $("#summernote").summernote('code', this.article.Article.content);
  }

}
