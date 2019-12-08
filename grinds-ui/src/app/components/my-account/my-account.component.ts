import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { GrindService } from 'src/app/services/grind.service';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/Role';
import { UserService } from '../auth/services/user.service';
// import { usernameValidator } from '../register/services/validator';

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
  private editMode: boolean = false;
  private user: User = null;
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
                    Validators.email
                  ]),
                  userName: new FormControl('', [
                    Validators.required,
                    Validators.minLength(6)
                  ]),
                  experience: new FormControl('', [
                    Validators.minLength(1)
                  ]),
                  occupation: new FormControl('', [
                    Validators.minLength(1)
                  ])
                });
}

  ngOnInit() {
    if(this.authService.isAuth()){
      this.grindService.getUserByUsername(this.userService.getLoggedInUserName()).subscribe((user: User) => {
        if(user){
          console.info('MyAccountComponent --> ngOnInit user returned'+JSON.stringify(user));
          this.user = user;
          this.pofileViewForm.setValue({firstName: user.firstName, lastName: user.lastName, emailAddress: user.emailAddress, occupation:user.ocupation, experience:user.teachingExperience, userName: user.username});
          this.pofileViewForm.disable();
        }else {
          console.error('MyAccountComponent --> ngOnInit no user returned');
        }
        
      });
    }else {
      this.router.navigate(['home']);
    }
  }

  restoreFields(){
    this.ngOnInit();
    this.editMode = false;
  }

  private overWriteUser() {
    this.user.firstName = this.pofileViewForm.controls['firstName'].value;
    this.user.lastName = this.pofileViewForm.controls['lastName'].value;
    this.user.emailAddress = this.pofileViewForm.controls['emailAddress'].value;
    this.user.username = this.pofileViewForm.controls['userName'].value;
    this.user.ocupation = this.pofileViewForm.controls['occupation'].value;
    this.user.teachingExperience = this.pofileViewForm.controls['experience'].value;

  }
  public getUsername(): string {
    return sessionStorage.getItem('currentUser');
  }

  public isTeacher(): boolean {
    return this.userService.getUserRole() === Role.TEACHER;
  }

  public updateUser(){
    this.overWriteUser();
    this.userService.updateAccount(this.user).then((res) => {
      sessionStorage.setItem('currentUser',this.user.username);
      this.message = "Account updated.";
      this.editMode = false;
      this.pofileViewForm.disable();
    }, err => {               
      console.error("MyAccountComponent --> update user failed");
  });
  }

  public deleteUserMode(){
    this.message = "Are you sure ?";
    this.deleteMode = true;
  }

  public deleteUser() {
    this.userService.deleteAccount(this.user.id).then((res) => {
      this.message = "Account deleted.";
      setTimeout(() => {
        this.userService.logoutUser();
    },1000);
    });
  }

  public activateFields() {
    this.editMode = true;
    this.pofileViewForm.enable();
  }

  public cancelDelete() {
    this.message = "";
    this.deleteMode = false;
  }
}

