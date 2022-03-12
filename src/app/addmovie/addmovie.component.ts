import { Component, OnInit } from '@angular/core';
import { DataservicesService } from '../dataservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  cards;
  err;

  newMovie: { image_url, name, description, genre, imdb, eposides, releaseyear, season, id } =
   { image_url: "", name: "", description: "", genre: "", imdb: "", eposides: "", releaseyear: "", season: "", id: "" };
  constructor(public router: Router, private mycards: DataservicesService) { }

  ngOnInit(): void {

  }
  addNewMovie() {
    this.mycards.createCard(this.newMovie);
    this.newMovie = { image_url: "", name: "", description: "", genre: "", imdb: "", eposides: "", releaseyear: "", season: "", id: "" };

  }

}
