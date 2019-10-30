import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GrindService } from 'src/app/services/grind.service';
import { User } from 'src/app/models/User';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private grindService: GrindService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  attemptAuth(username: string, password: string): Observable<any> {
    console.log('attempAuth ::');
    return this.grindService.attemptLogin(username, password) .pipe(map(userData => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      sessionStorage.setItem('currentUser',username);
      let tokenStr= 'Bearer '+userData.token;
      sessionStorage.setItem('token', tokenStr);
      return userData;
  }));
  }

  isAuth() {
    let user = sessionStorage.getItem('currentUser')
    //console.log(!(user === null))
    return !(user === null)
  }

  logout() {
    console.log('AuthService --> logout');
    // remove user from local storage to log user out
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
    this.currentUserSubject.next(null);
}
}