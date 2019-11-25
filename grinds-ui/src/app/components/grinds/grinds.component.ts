import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { GrindService } from 'src/app/services/grind.service';
import { Grind } from 'src/app/models/Grind'
import { HttpClient } from '@angular/common/http' //https://www.positronx.io/how-to-use-angular-8-httpclient-to-post-formdata/
import { MatTableDataSource, MatAccordion } from '@angular/material';
import { UserService } from '../auth/services/user.service';

@Component({
  selector: 'app-grinds',
  templateUrl: './grinds.component.html',
  styleUrls: ['./grinds.component.css']
})
export class GrindsComponent implements OnInit {

  public message: string = ''
  public buildingNo =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public streetAddress =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public county =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public eircode =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public grindType =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public pricePerHour =  new FormControl('', [Validators.required, Validators.minLength(2)]);

  constructor(private grindService: GrindService,
    protected service: GrindService, 
    protected router: Router, 
    private http: HttpClient,
    private userService: UserService)  { }


  dataSource = new MatTableDataSource<Grind>();
  public displayedColumns = [
    'type',
    'pricePerHour',
    'grindAddress',

  ];

  public isAuth() {
    return this.userService.isUserAuth();
  }

 initializeMyGrindsProvider(userName:string) {
    this.grindService.getGrindsByUsername(userName).subscribe(grinds => {
      console.log(JSON.stringify(grinds));
      this.dataSource =  new MatTableDataSource<Grind>(grinds); 
    }, err =>{
      console.error(err);
    }, () => console.log('grinds loaded'));
  }

  ngOnInit() {
    // this.dataSource = this.grindService.getGrinds();
    // this.dataSource = new MatTableDataSource(this.dataSource);
    let currentUserName:string = this.getUsername();
    console.log('user currently logged in: ' + currentUserName);
    this.initializeMyGrindsProvider(currentUserName);
  }

  grindClearForm() {
    this.buildingNo.setValue('');
    this.streetAddress.setValue('');
    this.county.setValue('');
    this.eircode.setValue('');
    this.grindType.setValue('');
    this.pricePerHour.setValue('');
}

private createGrind(): Grind {
  let newGrind: Grind = new Grind();
  newGrind.buildingNo = this.buildingNo.value;
  newGrind.street = this.streetAddress.value;
  newGrind.county = this.county.value;
  newGrind.eircode = this.eircode.value;
  newGrind.grindType = this.grindType.value.toString().toUpperCase();
  newGrind.pricePerHour = this.pricePerHour.value;
  newGrind.username = this.getUsername(); // Not sure if this is correct way to to pass in user's username into this variable

  return newGrind;
}

public getUsername(): string {
    return sessionStorage.getItem('currentUser');
  }

public onCreateGrind(accordion: any) {
  if(this.isFormValid()){
    console.log("CreateGrindComponent --> Create Grind form is valid");
    this.service.postGrind(this.createGrind()).subscribe((grind) => {
      console.log(" Post Grind Component--> Grind Posted");
      this.message = "Grind Posted.";
      
      setTimeout(() => {
        accordion.closeAll();
        this.grindClearForm();
        this.initializeMyGrindsProvider(this.getUsername());
      },100);
    });
  }
  else
    console.error("CreateGrind Component -->  has errors");
    
}
isFormValid(): boolean {
  return this.buildingNo.valid && this.streetAddress.valid && this.eircode.valid && this.grindType.valid && this.pricePerHour.valid;
}

  

}
