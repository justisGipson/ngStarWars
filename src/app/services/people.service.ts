import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(getStuff){
    return this.http.get(`https://swapi.com/api/people/?search=${getStuff}`)
  }
}
