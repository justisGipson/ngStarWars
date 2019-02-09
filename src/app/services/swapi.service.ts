import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private swapiURL = 'https://swapi.co/api/people/?search=r2'
  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]>{
    return this.http.get<Person[]>{this.swapiURL};
  }

  getShips(): Observable<Ship[]>{
    return this.http.get<Ship[]>{this.swapiURL};
  }

  getFilms(): Observable<Film[]>{
    return this.http.get<Film[]>{this.swapiURL};
  }
}
