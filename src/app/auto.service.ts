import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Auto } from './auto';
import { map, Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  private jsonUrl = "http://127.0.0.1:5001/api/voitures";

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les données des voitures
  getAllAutos(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.jsonUrl);
 
  }



}

