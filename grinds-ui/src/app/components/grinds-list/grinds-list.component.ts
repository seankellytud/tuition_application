import { Component, OnInit } from '@angular/core';
import { GrindService } from 'src/app/services/grind.service';
import { MatTableDataSource } from '@angular/material/table';
import { Grind } from 'src/app/models/Grind';
import { DataSource } from '@angular/cdk/table';
import { UserService } from '../auth/services/user.service';


@Component({
  selector: 'app-grinds-list',
  templateUrl: './grinds-list.component.html',
  styleUrls: ['./grinds-list.component.css'],
})
export class GrindsListComponent implements OnInit {

  dataSource = new MatTableDataSource<Grind>();
  public displayedColumns = [
    'type',
    'pricePerHour',
    'county',
    'moreDetails'
  ];

  constructor(private grindService: GrindService, private userService: UserService) { }

  ngOnInit() {
    // this.dataSource = this.grindService.getGrinds();
    // this.dataSource = new MatTableDataSource(this.dataSource);
    this.initializeGrindsProvider();
  }

  initializeGrindsProvider() {
    this.grindService.getGrinds().subscribe(grinds => {
      console.log(JSON.stringify(grinds));
      this.dataSource =  new MatTableDataSource<Grind>(grinds); 
    }, err =>{
      console.error(err);
    }, () => console.log('grinds loaded'));
  }



  applyFilter(filterValue: string, predicate: string) {
    console.log("GrindsListComponent --> applyFilter "+"filterValue: "+filterValue+" predicate: "+predicate);
    this.dataSource.filterPredicate = (data: Grind, filterValue:string) => data[predicate].toString().trim().toLowerCase().includes(filterValue.trim().toLowerCase()); 
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } //THIS IS THE WORKING GLOBAL ONE
 
  public isAuth() {
    return this.userService.isUserAuth();
  }






public showAddress(index: number){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      console.log(myObj[2].grindAddress); // returns 145 Fake Street Tallaght Dublin 18 when button clicked => attributes are accessible
      var revealAddress = document.getElementById("address").innerHTML=
        (myObj[index].buildingNo 
        +", " + myObj[index].grindAddress 
        +", " + myObj[index].county
        +", " + myObj[index].eircode)
      return revealAddress;
    }
  };
  xmlhttp.open("GET", "/server/api/v1/grinds", true); 
  xmlhttp.send();
  
}
  public showType(index: number){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      console.log(myObj[2].grindAddress); // returns 145 Fake Street Tallaght Dublin 18 when button clicked => attributes are accessible
      var revealType = document.getElementById("type").innerHTML=(myObj[index].grindType)
      return revealType;
    }
  };
  xmlhttp.open("GET", "/server/api/v1/grinds", true); 
  xmlhttp.send();
  
}
  public showPrice(index: number){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      var revealPrice = document.getElementById("price").innerHTML=(myObj[index].pricePerHour)
      return revealPrice;
    }
  };
  xmlhttp.open("GET", "/server/api/v1/grinds", true); 
  xmlhttp.send();
  
}
  public showEmail(index: number){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      var revealEmail = document.getElementById("email").innerHTML=(myObj[index].email)
      return revealEmail;
    }
  };
  xmlhttp.open("GET", "/server/api/v1/grinds", true); 
  xmlhttp.send();
  
}


public showAll(index: number){
this.showAddress(index);
this.showPrice(index);
this.showType(index);
this.showEmail(index); //A very inefficient wasof populating the grind details table. It works though....
}
}



