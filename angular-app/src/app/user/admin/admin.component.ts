import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pressed: boolean;

  constructor() { }
  public show:boolean = false;
  ngOnInit() {
  }
  toggleNav(){
    this.show = !this.show;
  }
  
}
