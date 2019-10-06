import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Grind } from '../models/Grind';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class GrindService {

  constructor( private httpClient: HttpClient) { }

  getGrinds() {
    return this.httpClient.get<Grind[]>('/server/api/v1/grinds');
  }
}
