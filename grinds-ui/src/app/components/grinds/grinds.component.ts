import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-grinds',
  templateUrl: './grinds.component.html',
  styleUrls: ['./grinds.component.css']
})
export class GrindsComponent implements OnInit {

  public buildingNoName =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public streetAddress =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public county =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public eircode =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public subject =  new FormControl('', [Validators.required, Validators.minLength(2)]);
  public pricePerHour =  new FormControl('', [Validators.required, Validators.minLength(2)]);


  grindClearForm() {
    this.buildingNoName.setValue('');
    this.streetAddress.setValue('');
    this.county.setValue('');
    this.eircode.setValue('');
    this.subject.setValue('');
    this.pricePerHour.setValue('');
}

  constructor() { }

  ngOnInit() {
    
  }

}
