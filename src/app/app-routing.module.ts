import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { DisplayPeopleComponent} from './display-people/display-people.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'people', component: DisplayPeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
