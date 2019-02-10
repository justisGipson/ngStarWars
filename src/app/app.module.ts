import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { SwapiService } from './services/swapi.service'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [SwapiService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
