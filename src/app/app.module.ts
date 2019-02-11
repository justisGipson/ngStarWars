import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { DisplayPeopleComponent } from './display-people/display-people.component';
import { DisplayShipComponent } from './display-ship/display-ship.component';
import { DisplayFilmComponent } from './display-film/display-film.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { ShipService } from './services/ship.service';
import { FilmService } from './services/film.service';
import { PeopleService } from './services/people.service';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavComponent,
    AboutComponent,
    DisplayPeopleComponent,
    DisplayShipComponent,
    DisplayFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatButtonModule
  ],
  providers: [HttpClient, FilmService, PeopleService, ShipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
