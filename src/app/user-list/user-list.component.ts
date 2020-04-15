import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {IUser} from '../iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: IUser[];
  constructor(
    private userServiceService: UserServiceService
  ) { }

  ngOnInit() {
    this.userServiceService.getAll().subscribe(next => {
      this.userList = next;
    });
  }

}
