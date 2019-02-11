import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-display-ship',
  templateUrl: './display-ship.component.html',
  styleUrls: ['./display-ship.component.css']
})
export class DisplayShipComponent implements OnInit {
  public _ship = {}

  ngOnInit() {
  }

  @Input() set data(data: any){
    this._ship = data;
    console.log(this._ship);
  }

  get data(): any {
    return this._ship
  }

}
