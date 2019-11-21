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
  public message: string = ''
  public uname =  new FormControl;
  public pword =  new FormControl;

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

  loginClearForm() {
    this.uname.setValue('');
    this.pword.setValue('');
}

  public onLogin() {
    this.message = '';
    if(this.loginForm.valid){
      console.log("LoginComponent --> login form is valid");
      this.authService.attemptAuth(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).then((token) => {
        console.log("LoginComponent --> logged");
        setTimeout(() => {
          this.router.navigate(['home']);
        },1000);
      },err =>{
        console.log(console.log("LoginComponent --> log in failed"));
        this.loginForm.reset();
        this.message = 'You have entered an invalid username or password.';
      });
    }
    else
      console.error("LoginComponent --> registration form has errors");
  }

}
