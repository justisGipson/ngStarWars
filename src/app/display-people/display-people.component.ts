import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-display-people',
  templateUrl: './display-people.component.html',
  styleUrls: ['./display-people.component.css']
})
export class DisplayPeopleComponent implements OnInit {
  public person = []

  ngOnInit() {
  }

  @Input() set data(data: any){
    this.person = data;
    console.log(this.person);
  }

  get data(): any {
    return this.person;
  }
}
