import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title: string = 'Star Wars API Search';

  public show: boolean = false;
  public buttonName: any = true;

  toggle() {
    this.show = !this.show;
    if(this.show)
      this.buttonName = false;
    else
      this.buttonName = true;
}

  constructor() { }

  ngOnInit() {
  }

}
