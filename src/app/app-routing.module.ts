import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { CardsComponent } from './cards/cards.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
const routes: Routes = [
  { path: '', pathMatch: "full", component: CardsComponent },
  { path: 'movie/:id', component: MoviedetailsComponent },
  { path: "AddMovie", component: AddmovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

