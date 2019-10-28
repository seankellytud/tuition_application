import { Component } from '@angular/core';
import { AuthService } from './components/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grinds-ui';
  
  constructor(private authService: AuthService ) {}

  public isAuth():boolean{
    return this.authService.isAuth();
  }
}
