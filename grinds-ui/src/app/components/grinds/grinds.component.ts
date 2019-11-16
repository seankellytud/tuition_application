import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { GrindService } from 'src/app/services/grind.service';
import { Grind } from 'src/app/models/Grind'
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
  public subject =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public pricePerHour =  new FormControl('', [Validators.required, Validators.minLength(2)]);

  constructor(protected service: GrindService, protected router: Router) { }


  grindClearForm() {
    this.buildingNo.setValue('');
    this.streetAddress.setValue('');
    this.county.setValue('');
    this.eircode.setValue('');
    this.subject.setValue('');
    this.pricePerHour.setValue('');
}

private createGrind(): Grind {
  let newGrind: Grind = new Grind();
  newGrind.buildingNo = this.buildingNo.value;
  newGrind.streetAddress = this.streetAddress.value;
  newGrind.county = this.county.value;
  newGrind.eircode = this.eircode.value;
  newGrind.subject = this.subject.value;
  newGrind.pricePerHour = this.pricePerHour.value;
  return newGrind;
}

public onCreateGrind() {
  if(this.isFormValid()){
    console.log("CreateGrindComponent --> Create Grind form is valid");
    this.service.postGrind(this.createGrind()).subscribe((grind) => {
      console.log(" Post Grind Component--> Grind Posted");
      this.message = "Grind Posted.";
      setTimeout(() => {
        this.router.navigate(['/grinds']);
      },3000);
    });
  }
  else
    console.error("CreateGrind Component -->  has errors");
    
}
isFormValid(): boolean {
  return this.buildingNo.valid && this.streetAddress.valid && this.eircode.valid && this.subject.valid && this.pricePerHour.valid;
}

  

  ngOnInit() {
    
  }

}
