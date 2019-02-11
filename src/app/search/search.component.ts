import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms'

import { FilmService } from '../services/film.service';
import { PeopleService } from '../services/people.service';
import { ShipService } from '../services/ship.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: []
})

export class SearchComponent implements OnInit {
  form: FormGroup;
  results: Object;

  constructor(private formBuilder: FormBuilder,
    private film: FilmService,
    private people: PeopleService,
    private ships: ShipService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      terms: new FormControl(),
      getStuff: new FormControl(),
    })
  }

  submit() {
    if (this.form.value.terms === 'films') {
      this.film.getFilm(this.form.value.getStuff)
        .subscribe(data => {
          this.results = data})
    }else if (this.form.value.terms === 'people') {
      this.people.getPeople(this.form.value.getStuff)
        .subscribe(data => {
          this.results = data})
    }else if (this.form.value.terms === "starships"){
      this.ships.getShips(this.form.value.getStuff)
        .subscribe(data =>{
          this.results = data})
    } else{
      console.log('Error')
    }
    
  }
}
