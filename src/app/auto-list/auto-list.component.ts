import { Input,Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auto } from '../auto';
import { AutoService } from '../auto.service';
import { RouterModule,RouterOutlet } from '@angular/router';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';


@Component({

  selector: 'app-auto-list',
  imports: [CommonModule,SearchBarComponent,RouterModule],
  standalone: true,
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css'],
})
export class AutoListComponent implements OnInit {
  autos: Auto[] = []; 
  allAutos : Auto[]=[];
  filteredAutos : Auto[] = [];
  autoVoir?: Auto;
 

  constructor(private autoService: AutoService) {}

  ngOnInit(): void {
    // Charger toutes les voitures lors de l'initialisation
    this.autoService.getAllAutos().subscribe({
      next: (data) => {
        this.autos = data;
        this.allAutos=data;
        this.filteredAutos=data;
        
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des voitures :', err);
      },

    }
  )
  ;
  console.log(this.autos)
  
  }



  filtrage(criteres: { searchModele?: string, price?: number, gearboxType?: string, carType?: string })
   {


    if(criteres.searchModele==''&&criteres.price==100000&&criteres.gearboxType==''&&criteres.carType=="")
    
    {
      return this.filteredAutos=this.allAutos;
    }
    else{   

    
    return this.filteredAutos= this.allAutos.filter(car => {
      const matchesModele = criteres.searchModele ? car.modele.toLowerCase().includes(criteres.searchModele.toLowerCase()) : true;
      const priceString =car.prix;
      const cleanedPriceString = priceString.replace(/[^\d\s]/g, '');
      const carPrice= parseInt(cleanedPriceString.replace(/\s/g, ''), 10);
      const matchesPrice = criteres.price !== undefined ? carPrice <= criteres.price : true;
      const matchesGearboxType = criteres.gearboxType ? car.type_boite.toLowerCase() === criteres.gearboxType.toLowerCase() : true;
      const matchesCarType = criteres.carType ? car.Carosserie.toLowerCase() === criteres.carType.toLowerCase() : true;

          return  matchesModele && matchesPrice && matchesGearboxType && matchesCarType;
      
    
    
    });
  }
  };

  
  // Méthode pour sélectionner une voiture et afficher ses détails
  selectedAuto(auto: Auto): void {
    this.autoVoir = auto;
  }

  
}
