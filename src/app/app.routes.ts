import { Routes } from '@angular/router';
import { AutoListComponent } from './auto-list/auto-list.component';
import { AutoDetailsComponent } from './auto-details/auto-details.component';


export const routes: Routes = [
    { path: '', redirectTo: '/autos', pathMatch: 'full' },  
    { path: 'autos', component: AutoListComponent },   
    { path: 'autos/:id', component: AutoDetailsComponent }  
  ];
;
