import { Component,Input,Output,NgModule, NgIterable, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Auto } from '../auto';

@Component({
  selector: 'app-auto-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto-list.component.html',
  styleUrl: './auto-list.component.css'
})
export class AutoListComponent {
  @Input()  autos: Auto[] = [];
  @Input()  autoVoir: Auto| null=null;
  @Output() voirPlus: EventEmitter<Auto> = new EventEmitter<Auto>();

selectAuto(auto : Auto):void {

let modelView= auto;
this.voirPlus.emit(modelView);  



}




}

