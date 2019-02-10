import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms'
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SwapiService]
})
export class SearchComponent implements OnInit {
  people: [];
  ships: [];
  films: [];

  terms = [
    {value: 1, view: 'People'},
    {value: 2, view: 'Star Ships'},
    {value: 3, view: 'Films'}
  ];

  constructor(private fb :FormBuilder, private database: SwapiService) {
   
   }

  ngOnInit() {
   
  }

  findPeople(): void {
    this.database.findPeople().subscribe(People => {
      this.people = name;
    })
  }

  findFilms(): void {
    this.database.findFilms().subscribe(Films => {
      this.films = name;
    })
  }

}
