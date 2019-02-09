import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
  private shipUrl = 'https://swapi.com/api/starships/'
  private filmURL = 'https://swapi.com/api/films/'

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]>{
    return this.http.get<Person[]>{this.personURL}.pipe(data => {
      return data['results'];
    });
  }

  getShips(): Observable<Ship>{
    return this.http.get<Ship>{this.filmURL}.map(data => {
      return data['results'];
    });
  }

  getFilms(): Observable<Film[]>{
    return this.http.get<Film[]>{this.filmURL}.map(data => {
      return data['results'];
    });
  }
}
