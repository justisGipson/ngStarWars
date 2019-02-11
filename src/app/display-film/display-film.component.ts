import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-display-film',
  templateUrl: './display-film.component.html',
  styleUrls: ['./display-film.component.css']
})
export class DisplayFilmComponent implements OnInit {
  public film = {}

  ngOnInit() {
  }

  @Input() set data(data: any){
    this.film = data;
    console.log(this.film);
  }

  get data(): any {
    console.log(this.film)
    return this.film;
  }

}
