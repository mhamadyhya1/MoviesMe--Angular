import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 title= 'Movies';
 homeButton = "Home";
 addMoviebutton = "Add Movies";
 imagenavbar = '../../assets/images/logo.png';
genreButton = ["Genre", "Action","Horror","Comedy"];





  constructor() { }

  ngOnInit(): void {
  }

}
