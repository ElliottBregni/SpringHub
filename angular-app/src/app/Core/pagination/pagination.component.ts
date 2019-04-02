import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PagerService } from '../service/pager.service';
import { Router } from '@angular/router';
import { Promise } from 'q';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [PagerService]
})
export class PaginationComponent implements OnInit {
  constructor(private pagerService: PagerService, private router: Router, private _route: ActivatedRoute) { }
    @Input() data: any
    @Input() pageSize: any;
    page: number;
    total: Promise<number>;
    @Input() values: any;
    @Output() selectedValue = "createdAt";
    @Output() ValueChange = new EventEmitter();
    // array of all items to be paged
    private allItems: any[];

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    ngOnInit() {
      this.pageSize = 2;
      
        // get dummy data
                // set items to json response
      this.allItems = this.data;

      console.log(this.values);
      console.log(this.selectedValue);

      this._route.queryParams.forEach(queryParams => {
        if (queryParams['page']) {
          this.page = queryParams['page'];
          console.log('Current param page: ', this.page);
        }
      });
    }
    loadPage($event, page){
      
    }
    pageChanged(page) {
      console.log('Page changed: ' + page);
      this.router.navigate(['/Articles', page, this.selectedValue]);
    }
}