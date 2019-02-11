import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ship } from '../models/ship.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ShipService {

  constructor(private http: HttpClient) { }

  getShips(getStuff): Observable<any>{
    return this.http.get(`https://swapi.co/api/starships/?search=${getStuff}`, httpOptions)
  }
}
