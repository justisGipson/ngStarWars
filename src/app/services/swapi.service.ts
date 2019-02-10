import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { Person } from '../models/person.model';
import { Ship } from '../models/ship.model';
import { Film } from '../models/film.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class SwapiService {
  private personURL = 'https://swapi.co/api/people/'
  private shipURL = 'https://swapi.com/api/starships/'
  private filmURL = 'https://swapi.com/api/films/'

  query: string = '?search=';

  constructor(private http: HttpClient) { }

  findPeople(): Observable<Person[]>{
    return this.http.get<Person[]>(this.personURL + this.query)
  }

  findShips(): Observable<Ship>{
    return this.http.get<Ship>(this.shipURL + this.query)
  }

  findFilms(): Observable<Film[]>{
    return this.http.get<Film[]>(this.filmURL + this.query)
  }
}
