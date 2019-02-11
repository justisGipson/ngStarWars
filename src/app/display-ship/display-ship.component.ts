import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-display-ship',
  templateUrl: './display-ship.component.html',
  styleUrls: ['./display-ship.component.css']
})
export class DisplayShipComponent implements OnInit {
  public ship = {}

  ngOnInit() {
  }

  @Input() set data(data: any){
    this.ship = data;
    console.log(this.ship);
  }

  get data(): any {
    return this.ship
  }

}
