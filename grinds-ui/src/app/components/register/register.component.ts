import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { RegisterService } from './services/register_service';
import { Router } from '@angular/router';
import  { passwordValidator } from './services/validator';
import { usernameValidator } from './services/username.validator';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public message: string = '';

  constructor(private service: RegisterService, private router: Router) { 
   
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]), 
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      userName: new FormControl('', Validators.compose([ 
        Validators.required, 
        Validators.minLength(6), 
        usernameValidator])),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        passwordValidator //Custom validator to ensure both passwords match
      ])
    });
  }

  public onRegisterUser() {
    if(this.registerForm.valid){
      console.log("RegisterComponent --> registration form is valid");
      this.service.registerUser(this.createUser()).subscribe((user) => {
        console.log("RegisterComponent --> user registered");
        this.registerForm.reset();
        this.message = "Registration success. Please log in.";
        setTimeout(() => {
          this.router.navigate(['/login']);
        },3000);
      });
    }
    else
      console.error("RegisterComponent --> registration form has errors");
      
  }

  private createUser(): User {
    let newUser: User = new User();
    newUser.firstName = this.registerForm.controls['firstName'].value;
    newUser.lastName = this.registerForm.controls['lastName'].value;
    newUser.emailAddress = this.registerForm.controls['emailAddress'].value;
    newUser.username = this.registerForm.controls['userName'].value;
    newUser.password = this.registerForm.controls['password'].value;
    return newUser;
  }
  
}

