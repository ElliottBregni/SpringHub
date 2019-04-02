import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  [x: string]: any;
  slug: "a";
  results: any;
  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  this.results = JSON.parse(window.localStorage.getItem("data"));  
  console.log(this.results);
  localStorage.removeItem("data");
 
  }

}
