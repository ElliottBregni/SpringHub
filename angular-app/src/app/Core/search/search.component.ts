import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() 
  data: any;
  @Input() 
  text: string;
  @Output() 
  search = new EventEmitter();
  
  constructor() { }
  
  ngOnInit() {
  }
  onSearch(searchText) {
    this.search.emit(searchText);
  }
}
