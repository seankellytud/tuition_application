
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/User';
import { RegisterService } from './services/register_service';
import { Router } from '@angular/router';
// import  { passwordValidator } from './services/validator';
import { usernameValidator } from './services/validator';
import { Role } from 'src/app/models/Role';

const MINIMUM_PASSWORD_LENGTH: number = 6;
const MAXIMUM_PASSWORD_LENGTH: number = 30;
const STRENGTH_MESSAGES: Array<string> = ['Low', 'Medium', 'High', 'Very high'];
const STRENGHT_COLORS: Array<string> = ['low-strength', 'medium-stregth', 'high-strenght', 'very-high-strenght'];

const THEMES: any[] = [{ label: 'theme.dark', value: 'dark' }, { label: 'theme.light', value: 'classic' }];

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public message: string = '';
  public firstName =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public lastName =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public emailAddress =  new FormControl('', [Validators.required, Validators.email]);
  public userName =  new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), usernameValidator]));
  public password =  new FormControl('', [Validators.required, Validators.minLength(6)]);
  public confirmPassword =  new FormControl('', [Validators.required, this.passwordValidator.bind(this)]);
  public newPasswordStrength: number = 0;
  public newPasswordStrenghtMessage: string = null;
  public newPasswordStrengthColor: string = '';
  public newPasswordSuccess: boolean = false;
  protected readonly userRole: string = Role[Role.STUDENT];
  

  constructor(protected service: RegisterService, protected router: Router) { }

  ngOnInit() {}

  public onRegisterUser() {
    if(this.isFormValid()){
      console.log("RegisterComponent --> registration form is valid");
      this.service.registerUser(this.createUser()).subscribe((user) => {
        console.log("RegisterComponent --> user registered");
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
    newUser.firstName = this.firstName.value;
    newUser.lastName = this.lastName.value;
    newUser.emailAddress = this.emailAddress.value;
    newUser.username = this.userName.value;
    newUser.password = this.password.value;
    newUser.userRole = this.userRole;
    return newUser;
  }

  getErrorMessage(value: string):string {
    switch(value){
      case'1':
          return this.firstName.hasError('required') ? 'Please enter your first name.':
                 this.firstName.hasError('minlength') ? 'First Name should be minimum 2 characters long.': '';
      case'2':
          return this.lastName.hasError('required') ? 'Please enter your last name.':
                 this.lastName.hasError('minlength') ? 'Last Name should be minimum 2 characters long.': '';
      case'3':
          return this.emailAddress.hasError('required') ? 'Please enter email address.' :
                 this.emailAddress.hasError('email') ? 'Email Address should be in someone@something.something format.' : '';
      case'4':
          return this.userName.hasError('required') ? 'Please enter user name. ' :
                 this.userName.hasError('minlength') ? 'User name should be minimum 6 characters long. ' :
                 this.userName.hasError('userNameTaken') ? 'Sorry username already exists. ' : '';
      case'5':
      return this.password.hasError('required') ? 'Please enter password. ' :
                 this.password.hasError('minlength') ? 'Password should be minimum 6 characters long. ' : '';  
      case'6':
      return this.confirmPassword.hasError('required') ? 'Please confirm password. ' :
                 this.confirmPassword.hasError('passwordNotMatching') ? 'Both Passwords Should Match. ' : '';

    }
    return '';
  }

  isFormValid(): boolean {
    return this.firstName.valid && this.lastName.valid && this.emailAddress.valid && this.userName.valid && this.password.valid && this.confirmPassword.valid;
  }
  

  passwordValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) { //set stipulations for control to move forward with fuction
        const confirmPassword = control.value; //save control into variable

        const passValue = this.password.value; //get value that was passed into the first password field
        if (passValue) {
            // const passValue = passControl.value; //save that value into variable
            if (passValue !== confirmPassword || passValue === '') {
                return {
                  passwordNotMatching: true
                };
            }
        }
    }

    return null;
  }

  public checkPasswordStrength(): void {
    this.newPasswordStrength = this.calculateStrength(this.password.value);
    this.newPasswordStrenghtMessage = STRENGTH_MESSAGES[this.newPasswordStrength - 1];
    this.newPasswordStrengthColor = STRENGHT_COLORS[this.newPasswordStrength - 1];
}

public calculateStrength(password: string): number {
    var strength: number = 0;

    var regSmall: RegExp = new RegExp(/([a-z]+)/);
    var regBig: RegExp = new RegExp(/([A-Z]+)/);
    var regNum: RegExp = new RegExp(/([0-9]+)/);
    var regSpecial: RegExp = new RegExp(/(\W+)/);

    if (password.search(regSmall) != -1) {
        strength++;
    }

    if (password.search(regBig) != -1) {
        strength++;
    }

    if (password.search(regNum) != -1) {
        strength++;
    }

    if (password.search(regSpecial) != -1) {
        strength++;
    }

    return strength;
}

  onClearForm() {
      this.firstName.setValue('');
      this.lastName.setValue('');
      this.emailAddress.setValue('');
      this.userName.setValue('');
      this.password.setValue('');
      this.confirmPassword.setValue('');
  }
}