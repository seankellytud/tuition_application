import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpErrorResponse, HttpEvent } from '@angular/common/http';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { TokenStorage } from './token.storage';
import { AuthService } from './services/auth.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('token')) {
        req = req.clone({
          setHeaders: {
            Authorization: sessionStorage.getItem('token')
          }
        })
      }

    return next.handle(req);
    }
}

