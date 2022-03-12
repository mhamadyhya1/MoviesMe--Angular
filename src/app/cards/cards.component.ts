import { Component, OnInit } from '@angular/core';
import { DataservicesService } from '../dataservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
cards;
err;

  constructor(private mycards :DataservicesService , private router:Router) { }

  ngOnInit() {
    this.cards = this.mycards.getAllcards();
    this.err = this.mycards.error;
  }
   

}
