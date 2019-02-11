import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilm(getStuff){
    return this.http.get(`https://swapi.com/api/films/?search=${getStuff}`)
  }
}
