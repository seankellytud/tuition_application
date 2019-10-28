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
    console.log("GrindService --> getGrinds()");
    return this.httpClient.get<Grind[]>('/server/api/v1/grinds');
  }

  registerUser(user: User): Observable<User> {
    console.log("GrindService --> registerUser()"+JSON.stringify(user));
    return this.httpClient.post<User>('/server/api/v1/register', user, httpOptions).pipe();
  }

  attemptLogin(username: string, password: string): Observable<any> {
    console.log("GrindService --> attemptLogin()"+username);
    const credentials = {username: username, password: password};
    return this.httpClient.post<User>('/server/api/v1/authenticate', credentials, httpOptions).pipe();
  }
}
