import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { Person } from '../models/person.model';
import { Film } from '../models/film.model';
import { Ship } from '../models/ship.model';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SwapiService]
})

export class SearchComponent implements OnInit {
  people: Observable<Person>[];
  ships: Observable<Ship>[];
  films: Observable<Film>[];
  // private searchTerms = new Subject<string>();

  terms = [
    'People',
    'Star Ships',
    'Films'
  ];

  constructor(private fb: FormBuilder, private database: SwapiService) {
   
   }

  ngOnInit(): void {
    
  }

}
