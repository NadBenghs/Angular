import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Auto } from '../auto';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})


export class SearchBarComponent {

  @Input()  autos: Auto[] = [];
  @Output() resultatsRecherches: EventEmitter<Auto[]> = new EventEmitter<Auto[]>();
  
searchAutoList() : void
{

  let search= document.getElementById('car-brand') as HTMLInputElement;
  let voiture=search.value;
  let searchValid : Auto[] = [];
  searchValid= this.autos.filter( autos => autos.brand.toLowerCase().includes(voiture.toLowerCase()));
  console.log(searchValid);
  this.resultatsRecherches.emit(searchValid);  


  
}
}
