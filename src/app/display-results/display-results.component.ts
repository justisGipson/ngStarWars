import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.css']
})
export class DisplayResultsComponent implements OnInit {
  public _data = {}

  ngOnInit() {
  }

  @Input() set data(data: any){
    this._data = data;
    console.log(this._data);
  }

  get data(): any {
    return this._data
  }
}
