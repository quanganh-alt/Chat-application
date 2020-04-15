import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthorized = false;
  public idUser: number;
  constructor() { }
  login(id) {
    this.isAuthorized = true;
    this.idUser = id;
  }
  logout() {
    this.isAuthorized = false;
    this.idUser = null;
  }
}
