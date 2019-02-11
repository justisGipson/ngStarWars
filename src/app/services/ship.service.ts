import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor(private http: HttpClient) { }

  getShips(getStuff){
    return this.http.get(`https://swapi.com/api/starships/?search=${getStuff}`)
  }
}
