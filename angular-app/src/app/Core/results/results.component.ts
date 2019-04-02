import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() slug: any;
  @Input() results: any;
  @Input() sort: any;

  constructor() {
  

  }
  ngOnInit() {
    console.log(this.results);
  }

}
