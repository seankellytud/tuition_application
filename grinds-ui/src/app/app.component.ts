import { Component } from '@angular/core';
import { AuthService } from './components/auth/services/auth.service';
import { GrindService } from './services/grind.service'
import { UserService } from './components/auth/services/user.service';
import { Role } from './models/Role';
import * as $ from '../../node_modules/jquery';// import Jquery here

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grinds-ui';
  public username: string = '';
  
  constructor(private userService: UserService, private grindService: GrindService ) {}

  public isAuth():boolean{
    return this.userService.isUserAuth();
  }

  public logOut():void{
    this.userService.logoutUser();
  }

  public getUsername(): string {
    return sessionStorage.getItem('currentUser');
  }

  public isTeacher(): boolean {
    return this.userService.getUserRole() === Role.TEACHER;
  }

}

$(window).scroll(function() {
  if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
  {
      $('.opaque-navbar').addClass('opaque');
  } else {
      $('.opaque-navbar').removeClass('opaque');
  }
});

