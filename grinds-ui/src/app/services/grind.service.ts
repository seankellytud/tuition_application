import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  getUserByUsername(username: string): Observable<User> {
    console.log("GrindService --> getUserByUsername()");
    let params = new HttpParams().set("username", username);
    return this.httpClient.get<User>('/server/api/v1/user', { headers: httpOptions.headers, params: params }).pipe();
  }

  deleteAccount(id: number):Promise<any>{
    return new Promise(resolve => {
      console.log("GrindService --> deleteAccount()"+id);
      let parameters = new HttpParams().set("id", id.toString());
      this.httpClient.delete('/server/api/v1/delete', {headers:httpOptions.headers, params:parameters}).subscribe(res => {     
            resolve(res);
        }, err => {               
            resolve(err);
        });
      
    });
    // return this.httpClient.delete<any>('/server/api/v1/user/delete',{ headers: httpOptions.headers, params: params }).pipe();
  }

  

  // deleteUser(user: User): Observable<void> {
  //   return this.httpClient.delete<void>('/server/api/v1/user',httpOptions).pipe();
  // } ##############Trying to add a delete user function#############

  
}
