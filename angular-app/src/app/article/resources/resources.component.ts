import { Component, OnInit } from '@angular/core';
import { ArticlesService, ApiService } from 'src/app/Core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer,private restService: ArticlesService, private f: FormBuilder,
    private route: ActivatedRoute,
    private ApiService: ApiService
  )
     { }

  ngOnInit() {
    this.route.data.subscribe(data => { 
      console.log('Data :', data)
    });
    this.getArticles();
  }
  getArticles(){
    this.ApiService.get('Project/').subscribe(data => {
        console.log(data);
    });
  }

}
