import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserServiceService} from '../user-service.service';
import {IUser} from '../iuser';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userList: IUser[];
  constructor(
    private userService: UserServiceService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:triple-equals
    if (localStorage.getItem('login') != 'null') {
      this.authService.login(Number(localStorage.getItem('login')));
      this.router.navigate(['/message']);
    }
    this.loginForm = this.fb.group({
      username: ['' , [ Validators.required]],
      password: ['' , [Validators.required]]
    })
    this.userService.getAll().subscribe(next => {
      this.userList = next;
    });
  }
  getUser(username: string, password: string): IUser {
    return this.userList.find(user => user.password === password && user.username === username);
  }
  login() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    const user = this.getUser(username, password);
    if (user) {
      console.log('Success');
      localStorage.setItem('login', '' + user.id);
      this.authService.login(user.id);
      this.authService.idUser = user.id;
      user.status = true;
      this.router.navigate(['message']);
    } else {
      console.log('Fail');
      this.authService.logout();
    }
  }

}
