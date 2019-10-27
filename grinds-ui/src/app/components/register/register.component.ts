import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { RegisterService } from './services/register_service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private service: RegisterService) { 
   
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
        Validators.minLength(2)
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]), 
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
    });
  }

  public onRegisterUser() {
    if(this.registerForm.valid){
      console.log("RegisterComponent --> registration form is valid");
      this.service.registerUser(this.createUser()).subscribe((user) => {
        console.log("RegisterComponent --> user registered");
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
