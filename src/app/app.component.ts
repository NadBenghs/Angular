import { Component, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBarComponent } from "./head-bar/head-bar.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import {Auto} from "./auto";
import { AutoListComponent } from "./auto-list/auto-list.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadBarComponent, SearchBarComponent, AutoListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'showroom-auto';
  autoList: Auto[]=[
    {
      brand: "Audi",
      model: "A3",
      price: 163,
      power: 6,
      photo: "photos/a3.png",
      availability:11
    },
    {
      brand: "Land Rover",
      model: "Range Rover Evoque",
      price: 290,
      power: 8,
      photo: "photos/evoque.png",
      

availability  :4
    },
    {
      brand: "Mercedes Benz",
      model: "GLA",
      price: 220,
      power: 8,
      photo: "photos/gla.png",
      availability  :9
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio",
      price: 340,
      power: 18,
      photo: "photos/stelvio.png",
      availability  :11
      


    },
    {
      brand: "BMW",
      model: "x2",
      price: 210,
      power: 8,
      photo: "photos/x2.jpg",
      availability  :3
    },
    {
      brand: "BMW",
      model: "x3",
      price: 360,
      power: 11,
      photo: "photos/x3.jpg",
      availability  :6
    }  
  ]

  searchCar : Auto[]= [];

 updateAutoList(resultatsRecherches: Auto[]): void
 {
  this.searchCar= resultatsRecherches;
 
 } 

 selectedAutoView : Auto | null=null ;

 selectedAuto(modelView : Auto): void
 {

  this.selectedAutoView=modelView;


 }


}