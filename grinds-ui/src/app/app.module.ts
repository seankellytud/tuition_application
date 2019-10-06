import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrindService } from './services/grind.service';
import { HttpClientModule } from '@angular/common/http';
import { GrindsListComponent } from './components/grinds-list/grinds-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrindsListModule } from'./components/grinds-list/grinds-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GrindsListModule
  ],
  providers: [GrindService],
  bootstrap: [AppComponent]
})
export class AppModule { }
