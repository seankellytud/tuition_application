import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Grind } from '../models/Grind';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { UriConstructorService } from './uri-contructor.service';
import { UriType } from '../models/UriType';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable()
export class GrindService {

  constructor( private httpClient: HttpClient, private uriConstructor: UriConstructorService) { }

  getGrinds() {
    let uri = this.uriConstructor.constructUri(UriType.GRIND);
    console.log("GrindService --> getGrinds() " + uri);
    return this.httpClient.get<Grind[]>(uri, { headers: httpOptions.headers}).pipe();
  }


// ###################################################
  // GETGRIND BY USERNAME FOR MYGRIND TABLE IN HERE
// ###################################################
  getGrindsByUsername(username:string) {
    let uri = this.uriConstructor.constructUri(UriType.GRIND);
    console.log("GrindService --> getGrindsByUserName() " + uri);
    let params = new HttpParams().set("username", username);
    return this.httpClient.get<Grind[]>(uri, { headers: httpOptions.headers, params: params }).pipe();
  }


// ###################################################
  // GET GRIND BY USERNAME FOR MYGRIND TABLE IN HERE
// ###################################################


 getUserByUsername(username: string): Observable<User> {
    let uri = this.uriConstructor.constructUri(UriType.USER);
    console.log("GrindService --> getUserByUsername() "+uri);
    let params = new HttpParams().set("username", username);
    return this.httpClient.get<User>(uri, { headers: httpOptions.headers, params: params }).pipe();
  }




  postGrind(grind: Grind) {
    console.log("GrindService --> updateGrinds()");
    return this.httpClient.post('/server/api/v1/grinds', grind, httpOptions);
  }

  

  registerUser(user: User): Observable<User> {
    let uri = this.uriConstructor.constructUri(UriType.REGISTRATION);
    console.log("GrindService --> registerUser()"+JSON.stringify(user)+" "+uri);
    return this.httpClient.post<User>(uri, user, httpOptions).pipe();
  }

  attemptLogin(username: string, password: string): Promise<any> {
    return new Promise((resolve,reject) => {
      const credentials = {username: username, password: password};
      let uri = this.uriConstructor.constructUri(UriType.AUTHENTICATION);
      console.log("GrindService --> attemptLogin() "+username+" "+uri);
      this.httpClient.post<User>(uri, credentials, httpOptions).subscribe(res => {     
            resolve(res);
        }, err => {               
          reject(err);
        });
      
    });
  }

 

  deleteAccount(id: number):Promise<any>{
    return new Promise(resolve => {
      let uri = this.uriConstructor.constructUri(UriType.USER);
      console.log("GrindService --> deleteAccount() "+id +" "+ uri);
      let parameters = new HttpParams().set("id", id.toString());
      this.httpClient.delete(uri, {headers:httpOptions.headers, params:parameters}).subscribe(res => {     
            resolve(res);
        }, err => {               
            resolve(err);
        });
      
    });
  }

  updateAccount(user: User):Promise<any>{
    return new Promise(resolve => {
      let uri = this.uriConstructor.constructUri(UriType.USER);
      console.log("GrindService --> updateAccount() "+uri);
      this.httpClient.put<User>(uri, user, httpOptions).subscribe(res => {     
            resolve(res);
        }, err => {               
            resolve(err);
        });
      
    });
  }
 
}
