import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


   carousel = [["../../assets/images/resize.jpeg", "Squid Game","First Slide"],
  ["../../assets/images/catch me if you can.jpeg","Catch Me If you Can","Second Slide"],
  ["../../assets/images/free guy.jpeg","Free Guy","Third Slide"]];


  constructor() { }

  ngOnInit(): void {
  }

}
