import {NgModule} from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
import { AppInterceptor } from './app.interceptor';


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers:[{ provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
             { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },AuthService, 
             UserService]
})
export class AuthModule {}
