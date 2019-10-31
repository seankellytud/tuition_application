import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { GrindService } from 'src/app/services/grind.service';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../auth/services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
  preserveWhitespaces: true
})

export class MyAccountComponent implements OnInit {

  public pofileViewForm: FormGroup ;
  public message: string = '';
  public deleteMode: boolean = false;
  private userId: number;
  constructor(private grindService: GrindService,
              private authService: AuthService,
              private router: Router,
              private userService: UserService) {
                this.pofileViewForm = new FormGroup({
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
                  ])
                });
               }

  ngOnInit() {
    if(this.authService.isAuth()){
      this.grindService.getUserByUsername(this.userService.getLoggedInUserName()).subscribe((user: User) => {
        if(user){
          console.info('MyAccountComponent --> ngOnInit user returned'+JSON.stringify(user));
          this.userId = user.id;
          this.pofileViewForm.setValue({
            firstName: user.firstName, 
            lastName: user.lastName,
            emailAddress: user.emailAddress,
            userName: user.username
          });
        }else {
          console.error('MyAccountComponent --> ngOnInit no user returned');
        }
        
      });
    }else {
      this.router.navigate(['home']);
    }
  }

  // public onRegisterUser() {
  //   if(this.registerForm.valid){
  //     console.log("RegisterComponent --> registration form is valid");
  //     this.service.registerUser(this.createUser()).subscribe((user) => {
  //       console.log("RegisterComponent --> user registered");
  //       this.registerForm.reset();
  //       this.message = "Registration success. Please log in.";
  //       setTimeout(() => {
  //         this.router.navigate(['/login']);
  //       },3000);
  //     });
  //   }
  //   else
  //     console.error("RegisterComponent --> registration form has errors");
      
  // }

  // private createUser(): User {
  //   let newUser: User = new User();
  //   newUser.firstName = this.registerForm.controls['firstName'].value;
  //   newUser.lastName = this.registerForm.controls['lastName'].value;
  //   newUser.emailAddress = this.registerForm.controls['emailAddress'].value;
  //   newUser.username = this.registerForm.controls['userName'].value;
  //   newUser.password = this.registerForm.controls['password'].value;
  //   return newUser;
  // }

  public getUsername(): string {
    return sessionStorage.getItem('currentUser');
  }
  public activateFields() { //This makes the fields editable once the edit button is click and enables the save changes button
    const ele1 = document.getElementById("firstName") as HTMLInputElement;
    ele1.readOnly = false;
    const ele2 = document.getElementById("lastName") as HTMLInputElement;
    ele2.readOnly = false;
    const ele3 = document.getElementById("userName") as HTMLInputElement;
    ele3.readOnly = false;
    const ele4 = document.getElementById("emailAddress") as HTMLInputElement;
    ele4.readOnly = false; 
    const ele5 = document.getElementById("saveChanges") as HTMLInputElement;
    ele5.disabled = false;
    return {ele1, ele2, ele3, ele4, ele5};
  }

  public updateUser(){

    //info passed into the form fields will update logged in users credentials....BACKEND TO BE SET UP FOR THIS
  }

  public deleteUserMode(){
    this.message = "Are you sure ?";
    this.deleteMode = true;
  }

  public deleteUser() {
    this.userService.deleteAccount(this.userId).then((res) => {
      this.message = "Account deleted.";
      setTimeout(() => {
        this.userService.logoutUser();
    },1000);
    });
  }

  public cancelDelete() {
    this.message = "";
    this.deleteMode = false;
  }
}

