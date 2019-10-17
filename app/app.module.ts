import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrindService } from './services/grind.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrindsListModule } from'./components/grinds-list/grinds-list.module';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { GrindDetailsComponent } from './components/grind-details/grind-details.component';
import { ViewAccountComponent } from './components/view-account/view-account.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LogInComponent,
    GrindDetailsComponent,
    ViewAccountComponent,
     
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
