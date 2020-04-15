import {Component, OnInit} from '@angular/core';
import {IMess} from '../imess';
import {HttpClient} from '@angular/common/http';
import {MessService} from '../mess.service';

import {IUser} from '../iuser';
import {UserServiceService} from '../user-service.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-mess-list',
  templateUrl: './mess-list.component.html',
  styleUrls: ['./mess-list.component.scss']
})
export class MessListComponent implements OnInit {
  messList: IMess[];
  userList: IUser[] = [];
  username: string;
  input: FormControl;
  idUser: number;

  constructor(
    private http: HttpClient, private messService: MessService,
    public userService: UserServiceService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.idUser = this.authService.idUser;
    this.userService.getAll().subscribe(next1 => this.userList = next1);
    setInterval(() => {
      this.messService.getAllMess().subscribe(next => {
        this.messList = next;
        const messageBody = document.getElementById('messageBody');
        messageBody.scrollTop = messageBody.scrollHeight;
      });
    }, 1000 );
  }

  getuser(id: number): IUser {
    return this.userList.find(item => item.id === id);
  }
  logout() {
    localStorage.setItem('login', null);
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
