import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

  public deleteUser(){

    //Remove user's info completely from the database....BACKEND TO BE SET UP FOR THIS
  }
}

