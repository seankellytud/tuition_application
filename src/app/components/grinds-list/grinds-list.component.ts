import { Component, OnInit } from '@angular/core';
import { GrindService } from 'src/app/services/grind.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Grind } from 'src/app/models/Grind';

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
    'address',
    'grindLevel'
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
  }

}
