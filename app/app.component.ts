import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grinds-ui';
  public readonly MENU_LIST = [{label: 'Grinds'}, {label: 'Log In'},{label: 'Sign In'}, {label: 'Profile'}, {label: 'Log out'}]; 
}
