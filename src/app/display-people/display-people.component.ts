import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-display-people',
  templateUrl: './display-people.component.html',
  styleUrls: ['./display-people.component.css']
})
export class DisplayPeopleComponent implements OnInit {
  public _person = {}

  ngOnInit() {
  }

  @Input() set data(data: any){
    this._person = data;
    console.log(this._person);
  }

  get data(): any {
    return this._person;
  }
}
