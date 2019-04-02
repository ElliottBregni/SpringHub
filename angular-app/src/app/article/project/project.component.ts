import { Component, OnInit } from '@angular/core';
import { ArticlesService, ApiService } from 'src/app/Core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

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


