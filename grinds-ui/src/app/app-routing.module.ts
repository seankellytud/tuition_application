import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrindsListComponent } from './components/grinds-list/grinds-list.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {GrindsComponent} from './components/grinds/grinds.component';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  {path: 'grinds-list', component: GrindsListComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'grinds', component: GrindsComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
