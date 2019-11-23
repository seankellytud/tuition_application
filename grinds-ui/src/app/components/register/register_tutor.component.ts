import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterService } from './services/register_service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register-tutor',
  templateUrl: './register_tutor.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterTutorComponent extends RegisterComponent implements OnInit {

  public ocupation =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public experience =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  protected readonly userRole: string = Role[Role.TEACHER];
  constructor(protected service: RegisterService, protected router: Router) { 
    super(service, router);
  }

  ngOnInit() {
  }

  protected createUser(): User {
    let newUser: User = super.createUser();;
    newUser.ocupation = this.ocupation.value;
    newUser.teachingExperience = this.experience.value;
    return newUser;
  }

  getErrorMessage(value: string):string {
    switch(value){
      case'7':
          return this.ocupation.hasError('required') ? 'Please enter your ocupation.':
                 this.ocupation.hasError('minlength') ? 'Ocupation should be minimum 2 characters long.': '';
      case'8':
          return this.experience.hasError('required') ? 'Please enter your experience.':
                  this.experience.hasError('minlength') ? 'Experience should be minimum 2 characters long.': ''; 
    }
    return super.getErrorMessage(value);
  }

}
