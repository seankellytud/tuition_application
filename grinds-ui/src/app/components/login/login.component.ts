import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }
  

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]), 
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
    });
  }

  public onLogin() {
    if(this.loginForm.valid){
      console.log("LoginComponent --> login form is valid");
      this.authService.attemptAuth(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).subscribe((token) => {
        console.log("LoginComponent --> logged");
        setTimeout(() => {
          this.router.navigate(['home']);
        },1000);
      });
    }
    else
      console.error("LoginComponent --> registration form has errors");
  }

}
