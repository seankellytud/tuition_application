import { Component, OnInit, ViewChild } from '@angular/core';
import { GrindService } from 'src/app/services/grind.service';
import { MatTableDataSource } from '@angular/material/table';
import { Grind } from 'src/app/models/Grind';
import { DataSource } from '@angular/cdk/table';
import { UserService } from '../auth/services/user.service';
import { User } from 'src/app/models/User';
import { MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';
import {debounceTime, startWith, map} from 'rxjs/operators';
import { Observable } from 'rxjs';


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
  isLoading: boolean = false;
  // HINTS LIST FOR THE TYPE SEARCH FIELD DROPDOWN
  options: string[] = ['Mathematics', 'English', 'Spanish', 'Music', 'Irish', 'Biology', 'Chemistry', 'Physics'];
  filteredOptions: Observable<string[]>;
  // HINTS LIST FOR THE COUNTY SEARCH FIELD DROPDOWN
  countyOptions: string[] = ['Antrim', 'Armagh', 'Carlow', 'Cavan', 'Clare', 'Cork', 'Derry', 'Donegal','Down', 'Dublin', 'Fermanagh', 'Galway', 'Kerry', 'Kildare', 'Kilkenny', 'Laois', 'Leitrim', 'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 'Monaghan', 'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Tyrone', 'Waterford', 'Westmeath', 'Wexford', 'Wicklow'];
  countyFilteredOptions: Observable<string[]>;


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
    this.initializeGrindsProvider();
   
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
 
    this.dataSource.sort = this.sort;
    this.filteredOptions = this.grindTypeFilter.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.countyFilteredOptions = this.countyFilter.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCounty(value))
    );
  }

  initializeGrindsProvider() {
    this.isLoading = true;
    this.grindService.getGrinds().subscribe(grinds => {
      console.log(JSON.stringify(grinds));
      setTimeout(() => {
        this.dataSource.data =  grinds;
        this.isLoading = false;
      },1500); 
    }, err =>{
      console.error(err);
    }, () => console.log('grinds loaded'));
  }

  searchClearForm() {
    this.grindTypeFilter.setValue('');
    this.countyFilter.setValue('');
    this.pricePerHourFilter.setValue('');
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
      else if(searchString.grindType.length > 0 && searchString.pricePerHour.length == 0 && searchString.county.length > 0){
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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterCounty(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.countyOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}



