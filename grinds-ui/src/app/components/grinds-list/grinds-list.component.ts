import { Component, OnInit } from '@angular/core';
import { GrindService } from 'src/app/services/grind.service';
import { MatTableDataSource } from '@angular/material/table';
import { Grind } from 'src/app/models/Grind';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-grinds-list',
  templateUrl: './grinds-list.component.html',
  styleUrls: ['./grinds-list.component.css']
})
export class GrindsListComponent implements OnInit {

  dataSource = new MatTableDataSource<Grind>();
  public displayedColumns = [
    'id',
    'type',
    'pricePerHour',
    'address'
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } //THIS IS THE WORKING GLOBAL ONE

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
//   }
// }




