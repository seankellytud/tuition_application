import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
import { GrindService } from 'src/app/services/grind.service';
import { Role } from 'src/app/models/Role';

@Injectable({ providedIn: 'root' })
export class TeacherGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService,
        
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authService.currentUserValue;
        if (this.authService.isAuth()) {
            if(this.authService.getUserRole() === Role.TEACHER)
                return true;
            else
                this.router.navigate(['/home']);
        }
        this.router.navigate(['/home']);
        return false;
    }
}