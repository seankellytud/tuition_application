import { Injectable } from '@angular/core';
import { GrindService } from 'src/app/services/grind.service';
import { User } from 'src/app/models/User';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor( private appService: GrindService,
               private authService: AuthService,
               private router: Router,
               private grindService: GrindService) { }

  public register(user: User) {
      this.appService.registerUser(user);
  }

  public getLoggedInUserName(): string {
    return sessionStorage.getItem('currentUser');
  }

  public logoutUser() {
    this.authService.logout();
    this.router.navigate(['home']);
  }

  public isUserAuth(): boolean {
    return this.authService.isAuth();
  }

  public updateAccount(user: User): Promise<any> {
    return new Promise(resolve => {
      this.grindService.updateAccount(user).then((res) => {
        resolve(res);
      }); 
    });
  }

  public deleteAccount(id: number):Promise<any> {
    return new Promise(resolve => {
      this.grindService.deleteAccount(id).then((res) => {
        resolve(res);
      }); 
    });
  }
}
