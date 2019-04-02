import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  @Input() values: any;
  selectedValue: String;
  constructor() { }

  ngOnInit() {
    console.log(this.values);
    console.log(this.selectedValue);
  }

}
