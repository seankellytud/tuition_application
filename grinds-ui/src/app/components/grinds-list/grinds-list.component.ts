import { Component, OnInit, ViewChild } from '@angular/core';
import { GrindService } from 'src/app/services/grind.service';
import { MatTableDataSource } from '@angular/material/table';
import { Grind } from 'src/app/models/Grind';
import { DataSource } from '@angular/cdk/table';
import { UserService } from '../auth/services/user.service';
import { User } from 'src/app/models/User';
import { MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-grinds-list',
  templateUrl: './grinds-list.component.html',
  styleUrls: ['./grinds-list.component.css'],
})
export class GrindsListComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource = new MatTableDataSource<Grind>();
  grindTypeFilter = new FormControl('');
  pricePerHourFilter = new FormControl('');
  countyFilter = new FormControl('');

  public displayedColumns = [
    'grindType',
    'pricePerHour',
    'county',
    'moreDetails'
  ];
  filterValues = {
    grindType: '',
    pricePerHour: '',
    county: '',
  };

  constructor(private grindService: GrindService, private userService: UserService) { }

  ngOnInit() {
    // this.dataSource = this.grindService.getGrinds();
    // this.dataSource = new MatTableDataSource(this.dataSource);
    this.initializeGrindsProvider();
    // this.subjectCheckPermissions.debounceTime(100).subscribe(this.checkActionPermissions.bind(this));
    this.grindTypeFilter.valueChanges.pipe(debounceTime(1000)).subscribe(
      (grindTypeValue) => {
        this.filterValues['grindType'] = grindTypeValue;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
    this.pricePerHourFilter.valueChanges.pipe(debounceTime(1000)).subscribe(
      (pricePerHourValue) => {
        this.filterValues['pricePerHour'] = pricePerHourValue;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
    this.countyFilter.valueChanges.pipe(debounceTime(1000)).subscribe(
      (countyValue) => {
        this.filterValues['county'] = countyValue;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )

    this.dataSource.filterPredicate = this.customFilterPredicate();

  }

  initializeGrindsProvider() {
    this.grindService.getGrinds().subscribe(grinds => {
      console.log(JSON.stringify(grinds));
      this.dataSource.data =  grinds; 
    }, err =>{
      console.error(err);
    }, () => console.log('grinds loaded'));
  }



  applyFilter(filter) {
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }

  customFilterPredicate() {
    const myFilterPredicate = (data: Grind, filter: string): boolean => {
      let searchString = JSON.parse(filter);
      if(searchString.grindType.length == 0 && searchString.pricePerHour.length == 0 && searchString.county.length == 0)
        return true;
      if(searchString.grindType.length > 0 && searchString.pricePerHour.length == 0 && searchString.county.length == 0){
        return data.grindType.toString().trim().toLowerCase().includes(searchString.grindType.trim().toLowerCase());
      }
      else if(searchString.grindType.length == 0 && searchString.pricePerHour.length > 0 && searchString.county.length == 0){
        let price: number = searchString.pricePerHour;
        return data.pricePerHour <= price;
      }
      else if(searchString.grindType.length == 0 && searchString.pricePerHour.length == 0 && searchString.county.length > 0){
        return data.county.toString().trim().toLowerCase().includes(searchString.county.trim().toLowerCase());
      }
      let pr: number = searchString.pricePerHour;;
      return data.grindType.toString().trim().toLowerCase().includes(searchString.grindType.trim().toLowerCase()) &&
        data.pricePerHour <= pr &&
        data.county.toString().trim().toLowerCase().includes(searchString.county.trim().toLowerCase());
    }
    return myFilterPredicate;
  }

 
  public isAuth() {
    return this.userService.isUserAuth();
  }


public showAddress(grind: Grind){
  document.getElementById("address").innerHTML = grind.buildingNo +", " + grind.street +", " + grind.county+", " + grind.eircode;
}
  public showType(grind: Grind){
  document.getElementById("grindType").innerHTML=grind.grindType;
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
public showName(user:User){
  document.getElementById("name").innerHTML=user.firstName + ' ' + user.lastName;
}

  public showAll(index: number){
    let grind: Grind = this.dataSource.data[index];
    //retrieve user to display some user details 
    this.grindService.getUserByUsername(grind.username).subscribe((user: User) => {
      this.showName(user);
      this.showAddress(grind);
      this.showPrice(grind);
      this.showType(grind);
      this.showEmail(user);
      this.showOcc(user);
      this.showExp(user);
    });
  }
}



