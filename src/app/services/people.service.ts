import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(getStuff): Observable<any>{
    return this.http.get(`https://swapi.co/api/people/?search=${getStuff}`)
  }
}
