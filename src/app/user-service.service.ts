import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from './iuser';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private API_URL = 'http://localhost:3000/user';
  constructor(
    private http: HttpClient
  ) { }
  public getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.API_URL);
  }
}
