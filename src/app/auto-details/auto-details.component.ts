import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AutoService } from '../auto.service';
import { Auto } from '../auto';

@Component({
  standalone: true,
  imports:[CommonModule],
  selector: 'app-auto-details',
  templateUrl: './auto-details.component.html',
  styleUrls: ['./auto-details.component.css']
})
export class AutoDetailsComponent implements OnInit {
  auto?: Auto;

  constructor(
    private route: ActivatedRoute,
    private autoService: AutoService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de la voiture depuis le paramètre d'URL
    const uniqueId = this.route.snapshot.paramMap.get('id');
    if (uniqueId) {
      // Décomposer l'ID en marque et modèle
      const [marque, modele,version] = uniqueId.split('.');
      console.log(marque);
      console.log(modele);
      console.log(version);
      
      // Chercher la voiture correspondante
      this.autoService.getAllAutos().subscribe({
        next: (autos) => {
          // Cherchez la voiture correspondant à la marque et au modèle
          this.auto = autos.find(auto =>
            auto.marque.toLowerCase().includes(marque.toLowerCase()) &&
            auto.modele.toLowerCase().includes(modele.toLowerCase()) 
          );
        },
        error: (err) => console.error('Erreur lors de la récupération des voitures:', err)
      });
    }
  }
}
