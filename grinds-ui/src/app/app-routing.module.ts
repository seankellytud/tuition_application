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
import { TeacherGuard } from './components/auth/teacher.guard';
import { MyAccountComponent } from './components/my-account/my-account.component'
import { GrindsDetailComponent } from './components/grinds-detail/grinds-detail.component';

const routes: Routes = [
  //{ path: '**', component: PageNotFoundComponent },//need to add component
  {path: 'grinds-list', component: GrindsListComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'grinds', component: GrindsComponent, canActivate: [TeacherGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register_tutor', component: RegisterTutorComponent},
  {path: 'my-account', component: MyAccountComponent},
  {path: 'grinds-detail',component: GrindsDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
