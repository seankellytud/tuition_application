import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class GrindListService {

  constructor( private httpClient: HttpClient) { }

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
    xmlhttp.open("GET", "/server/api/v1/grinds", true); //server implementation needed to call by frind id and return a single grind entity
    xmlhttp.send();
    
  }
}
