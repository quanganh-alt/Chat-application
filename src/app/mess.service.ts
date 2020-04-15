import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMess} from './imess';

@Injectable({
  providedIn: 'root'
})
export class MessService {
  private API_URL_MESS = 'http://localhost:3000/message';
  constructor(
    private http: HttpClient
  ) { }
  getAllMess(): Observable<IMess[]> {
    return this.http.get<IMess[]>(this.API_URL_MESS);
  }
  sendMess(newMess: Partial<IMess>): Observable<IMess> {
    return this.http.post<IMess>(this.API_URL_MESS, newMess);
  }
}
