import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrindsListComponent } from './components/grinds-list/grinds-list.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {GrindsComponent} from './components/grinds/grinds.component';
import {RegisterComponent} from './components/register/register.component';
import { RegisterTutorComponent } from './components/register/register_tutor.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/auth/auth.guard';
import { MyAccountComponent } from './components/my-account/my-account.component';

const routes: Routes = [
  {path: 'grinds-list', component: GrindsListComponent, canActivate: [AuthGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'grinds', component: GrindsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register_tutor', component: RegisterTutorComponent},
  // {path: 'my-account', component: MyAccountComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
