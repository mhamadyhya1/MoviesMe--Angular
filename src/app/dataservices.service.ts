import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  cards = [
    {id:1,image_url:"./assets/images/resize.jpeg",name:"Squid Game",description:"Seong Gi-hun, a divorced father  and indebted gambler who lives with his elderly mother, is invited to play a series of children's games for a chance at a large cash prize.",genre:"action",imdb:9,eposides:32,releaseyear:2021,season:1},
    {id:2,image_url:"./assets/images/spenser confidential.jpg",name:"Spenser confidential",description:"Spenser, an ex-cop and ex-con, teams up with aspiring fighter Hawk to uncover a sinister conspiracy tied to the deaths of two Boston police officers.",genre:"action",imdb:9.5,eposides:32,releaseyear:2021,season:1},
    {id:3,image_url:"./assets/images/Angel Has Follen.jpg", name:"Angel Has Follen", description:"Seong Gi-hun, a divorced father and indebted gambler who lives with his elderly mother, is invited to play a series of children's games for a chance at a large cash prize.",genre:"action",imdb:7.5,eposides:32,releaseyear:2021,season:2},
    {id:4,image_url:"./assets/images/Extraction.jpg", name:"Extraction", description:"A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",genre:"action",imdb:7,eposides:32,releaseyear:2021,season:1},
    {id:5,image_url:"./assets/images/DenOfThieves.jpg", name:"Den Of Thievese", description:"A highly skilled crew of bank robbers plotting a heist at the supposedly impenetrable Federal Reserve faces off against an elite unit of L.A. cops.",genre:"action",imdb:6,eposides:32,releaseyear:2021,season:2},
    {id:6,image_url:"./assets/images/polar.jpg",name:"Polar",description:"An assassin on the verge of retirement must put the good life on hold when his greedy boss sends a squad of young, ruthless killers to take him out.",genre:"action",imdb:5,eposides:32,releaseyear:2021,season:1}
  ]
  
  error = "No more details for this movie 😓";

  constructor() { }
  public createCard(card:{image_url,name,description,season,releaseyear,eposides,imdb,genre,id}){
    this.cards.push(card);
    
  }
  getAllcards():Array<{image_url,name,description,season,releaseyear,eposides,imdb,genre,id}>{
    return this.cards;
  }
  getMovie(id:number){
    return this.cards.find(x=>x.id===id);
  }
}
