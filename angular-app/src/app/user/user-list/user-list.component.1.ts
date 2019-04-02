import { Component, OnInit } from '@angular/core';

import {User, UserService } from '../../core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  private user: User[]
  constructor(private userService: UserService) { }

  ngOnInit() {
 
  }
  getAllUsers() {
    
  }
}
