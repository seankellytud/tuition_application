import { Component, OnInit } from '@angular/core';
import { GrindService } from 'src/app/services/grind.service';
import { MatTableDataSource } from '@angular/material/table';
import { Grind } from 'src/app/models/Grind';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-grinds-list',
  templateUrl: './grinds-list.component.html',
  styleUrls: ['./grinds-list.component.css'],
})
export class GrindsListComponent implements OnInit {

  dataSource = new MatTableDataSource<Grind>();
  public displayedColumns = [
    'id',
    'type',
    'pricePerHour',
    'address'
    // 'moreDetails'
  ];

  constructor(private grindService: GrindService) { }

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
 


 ////////////////AJAX REVEAL ADDRESS?/////////////////////
 public showAddress(index: number){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      console.log(myObj[2].grindAddress); // returns 145 Fake Street Tallaght Dublin 18 when button clicked => attributes are accessible
      var revealAddress = document.getElementById("addressReveal").innerHTML=('The address for that grind is: '+ myObj[index].grindAddress); //Put into Empty div
      return revealAddress;
    }
  };
  xmlhttp.open("GET", "/server/api/v1/grinds", true); 
  xmlhttp.send();
  
}
}



















  // applyFilter(filterValue: string) {
  //   this.dataSource.grindType.filterPredicate = function(dataSource, filterValue: string): boolean {
  //     return dataSource.grindType.toLowerCase().includes(filterValue);
      // dataSource.grindAddress.toLowerCase().includes(filterValue) || 
      // dataSource.pricePerHour.toString() === filterValue ||
      // dataSource.id.toString() === filterValue;
  //   };
  // }


  // applyFilter(filterValue: string) {
  //   this.dataSource.filterPredicate = function(data, filterValue: string): boolean {
  //     return data.grindType.toLowerCase().includes(filterValue);
  //   }
  // }



//   logData(row){
//     console.log(row);// This is a click method set up for clicking rows in
