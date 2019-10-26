import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Grind } from '../models/Grind';
import { User } from '../models/User';
import { Observable } from 'rxjs';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class GrindService {

  constructor( private httpClient: HttpClient) { }

  getGrinds() {
    return this.httpClient.get<Grind[]>('/server/api/v1/grinds');
  }

  registerUser(user: User): Observable<User> {
    return this.httpClient.post<User>('/server/api/v1/user', user, httpOptions).pipe();
  }
}
