import { Component, OnInit } from '@angular/core';
import { GrindService } from 'src/app/services/grind.service';
import { MatTableDataSource } from '@angular/material/table';
import { Grind } from 'src/app/models/Grind';
import { DataSource } from '@angular/cdk/table';
import { UserService } from '../auth/services/user.service';
import { User } from 'src/app/models/User';


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


public showAddress(grind: Grind){
  document.getElementById("address").innerHTML = grind.buildingNo +", " + grind.street +", " + grind.county+", " + grind.eircode;
}
  public showType(grind: Grind){
  document.getElementById("type").innerHTML=grind.grindType;
}
  public showPrice(grind: Grind){
    document.getElementById("price").innerHTML=grind.pricePerHour.toString();
}
  public showEmail(user: User){
    document.getElementById("email").innerHTML=user.emailAddress; 
}
public showExp(user: User){
  document.getElementById("experience").innerHTML=user.teachingExperience;
}
public showOcc(user:User){
  document.getElementById("occupation").innerHTML=user.ocupation;
}

  public showAll(index: number){
    let grind: Grind = this.dataSource.data[index];
    //retrieve user to display some user details 
    this.grindService.getUserByUsername(grind.username).subscribe((user: User) => {
      this.showAddress(grind);
      this.showPrice(grind);
      this.showType(grind);
      this.showEmail(user);
      this.showOcc(user);
      this.showExp(user);
    });
  }
}



