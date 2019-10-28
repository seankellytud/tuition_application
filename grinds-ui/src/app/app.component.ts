import { Component } from '@angular/core';
import { AuthService } from './components/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grinds-ui';
  public username: string = '';
  
  constructor(private authService: AuthService ) {}

  public isAuth():boolean{
    return this.authService.isAuth();
  }

  public logOut():void{
    this.authService.logout();
  }

  public getUsername(): string {
    return sessionStorage.getItem('currentUser');
  }
}
