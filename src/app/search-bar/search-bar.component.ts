import { Component,NgModule,Input,Output,EventEmitter } from '@angular/core';
import { Auto } from '../auto';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})


export class SearchBarComponent {

  @Output() filtreCriteres = new EventEmitter<any>();
  @Output() resetToken= new EventEmitter<number>;
  searchModele='';
  price:number=1000000;
  gearboxType: string = '';
  carType: string = ''; 
  
  

  constructor(private cdr: ChangeDetectorRef) {}

  resetForm(form: NgForm){
    this.searchModele = '';
    this.price=1000000;
    this.gearboxType = '';
    this.carType = '';
   
   
    form.resetForm({
      searchModele: '',
      price: this.price,
      gearboxType: '',
      carType: '',
      
    });
  this.cdr.detectChanges();
 
    
    const crit = {
      searchModele: this.searchModele,
      price: this.price,
      gearboxType: this.gearboxType,
      carType: this.carType,
    
    };
    this.filtreCriteres.emit(crit);
    
  }
  
  onSubmit() {
    // Logique de filtrage
    const crit = {
      searchModele: this.searchModele,
      price: this.price,
      gearboxType: this.gearboxType,
      carType: this.carType
    };

    console.log('Formulaire soumis avec les valeurs :', {
      searchModele: this.searchModele,
      price: this.price,
      gearboxType: this.gearboxType,
      carType: this.carType,
     
    })

  this.filtreCriteres.emit(crit);
}

  

}
 
  


