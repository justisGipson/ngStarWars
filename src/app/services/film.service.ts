import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  constructor(private http: HttpClient) { }

  getFilm(getStuff): Observable<any>{
    return this.http.get(`https://swapi.co/api/films/?search=${getStuff}`, httpOptions)
  }
}
