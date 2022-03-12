import { Component, OnInit } from '@angular/core';
import { DataservicesService } from '../dataservices.service';
import { ActivatedRoute, Data } from '@angular/router';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  movie;


  
  constructor(private route:ActivatedRoute , private card : DataservicesService) { }

  ngOnInit(): void {
    console.log(this.movie);
     this.route.paramMap.subscribe((params)=>{
       this.movie = this.card.getMovie(Number(params.get('id')));
       console.log(this.movie);
     })
     console.log(this.movie);
  }
  


}
