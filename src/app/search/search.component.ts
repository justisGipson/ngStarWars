import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms'

import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private form: FormBuilder, private SWservice: SwapiService) {
    
   }

  ngOnInit() {
  }

}
