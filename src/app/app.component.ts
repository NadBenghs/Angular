import { Component, model } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { HeadBarComponent } from "./head-bar/head-bar.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import {Auto} from "./auto";
import { AutoListComponent } from "./auto-list/auto-list.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeadBarComponent, SearchBarComponent, AutoListComponent, CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'showroom-auto';
  
  searchCar : Auto[]= [];
  searchBrand : string ="";

 updateAutoList(resultatsRecherches: Auto[]): void
 {
  this.searchCar= resultatsRecherches;
 
 } 

 selectedAutoView : Auto | null=null ;

 selectedAuto(modelView : Auto): void
 {

  this.selectedAutoView=modelView;


 }
 majBrand(marque : string):void
 {
  this.searchBrand=marque;
 }


}