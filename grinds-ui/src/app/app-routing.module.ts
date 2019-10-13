import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrindsListComponent } from './components/grinds-list/grinds-list.component';


const routes: Routes = [{
  path: 'grinds-list',
  component: GrindsListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
