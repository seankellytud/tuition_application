import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { GrindService } from 'src/app/services/grind.service';
import { Grind } from 'src/app/models/Grind'
import { HttpClient } from '@angular/common/http' //https://www.positronx.io/how-to-use-angular-8-httpclient-to-post-formdata/
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

  constructor(protected service: GrindService, protected router: Router, private http: HttpClient)  { }


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
  newGrind.streetAddress = this.streetAddress.value;
  newGrind.county = this.county.value;
  newGrind.eircode = this.eircode.value;
  newGrind.grindType = this.grindType.value;
  newGrind.pricePerHour = this.pricePerHour.value;
  newGrind.userName = this.getUsername(); // Not sure if this is correct way to to pass in user's username into this variable

  return newGrind;
}

public getUsername(): string {
    return sessionStorage.getItem('currentUser');
  }

public onCreateGrind() {
  if(this.isFormValid()){
    console.log("CreateGrindComponent --> Create Grind form is valid");
    this.service.postGrind(this.createGrind()).subscribe((grind) => {
      console.log(" Post Grind Component--> Grind Posted");
      this.message = "Grind Posted.";
      setTimeout(() => {
        this.router.navigate(['/home']);
      },3000);
    });
  }
  else
    console.error("CreateGrind Component -->  has errors");
    
}
isFormValid(): boolean {
  return this.buildingNo.valid && this.streetAddress.valid && this.eircode.valid && this.grindType.valid && this.pricePerHour.valid;
}

  

  ngOnInit() {
    
  }

}
