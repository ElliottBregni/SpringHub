import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../Core/service/Article.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Article} from '../../Core';
import {options} from '../../Core/model/options';
import { toArray } from 'rxjs/operators';
import {Http, Response} from "@angular/http";
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']

})


export class ArticlesComponent implements OnInit {
  Article:any;
  arrayList: [string] = [""];
  html: any;
  Comments: [""];
  sort = Array<options>();
  pagination: 1;
  page = 1;

  constructor(public articlesService: ArticlesService, private route: ActivatedRoute, private router: Router) {
    
   }
  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }
  ngOnInit() {
    this.sort = Array<options>();
    this.sort.push(new options("createdAt","ASC"));

    console.log(this.page);
  this.route.data.subscribe(data => { this.Article = data.Articles;
  console.log(data.Articles);
  },
   
    
   );


  }
  pageChanged(page: number) {
    // update current page of items
    this.page = page;
    console.log(this.page);
  }

}
