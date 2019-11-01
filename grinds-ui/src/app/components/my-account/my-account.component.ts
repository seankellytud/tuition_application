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
          this.user = user;
          this.pofileViewForm.setValue({firstName: user.firstName, lastName: user.lastName, emailAddress: user.emailAddress, userName: user.username});
          this.pofileViewForm.disable();
        }else {
          console.error('MyAccountComponent --> ngOnInit no user returned');
        }
        
      });
    }else {
      this.router.navigate(['home']);
    }
  }

  private overWriteUser() {
    this.user.firstName = this.pofileViewForm.controls['firstName'].value;
    this.user.lastName = this.pofileViewForm.controls['lastName'].value;
    this.user.emailAddress = this.pofileViewForm.controls['emailAddress'].value;
    this.user.username = this.pofileViewForm.controls['userName'].value;
  }

  public getUsername(): string {
    return sessionStorage.getItem('currentUser');
  }

  public updateUser(){
    this.overWriteUser();
    this.userService.updateAccount(this.user).then((res) => {
      sessionStorage.setItem('currentUser',this.user.username);
      this.message = "Account updated.";
      this.editMode = false;
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

