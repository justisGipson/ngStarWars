import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-display-film',
  templateUrl: './display-film.component.html',
  styleUrls: ['./display-film.component.css']
})
export class DisplayFilmComponent implements OnInit {
  public _film = {}

  ngOnInit() {
  }

  @Input() set data(data: any){
    this._film = data;
    console.log(this._film);
  }

  get data(): any {
    console.log(this._film)
    return this._film;
  }

}
