import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserServiceService} from '../user-service.service';
import {IUser} from '../iuser';

@Component({
  selector: 'app-mess-tag',
  templateUrl: './mess-tag.component.html',
  styleUrls: ['./mess-tag.component.scss']
})
export class MessTagComponent implements OnInit {
  @Input() avatar: string;
  @Input() name: string;
  @Input() time: Date;
  @Input() content: string;
  @Input() idUser: number;
  userList: IUser[] = [];
  constructor(
    private http: HttpClient,
    private userService: UserServiceService
  ) { }
  ngOnInit() {
  }

}
