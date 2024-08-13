import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PanneServiceService } from 'src/app/services/panne-service.service';
import { Panne, EtatPanne } from 'src/app/interfaces/Panne';

@Component({
  selector: 'app-add-panne',
  templateUrl: './add-panne.component.html',
  styleUrls: ['./add-panne.component.scss']
})
export class AddPanneComponent {

  panne: Panne = {
    description: '',
    etatPanne: EtatPanne.SIGNALEE // Use the default state if needed
  };

  etats = Object.values(EtatPanne).filter(value => typeof value === 'string'); // Filter to get only string values

  constructor(private panneService: PanneServiceService, private router: Router) { }

  onSubmit() {
    this.panneService.createPanne(this.panne).subscribe({
      next: (response) => {
        alert('Panne créée avec succès');
        this.router.navigate(['dashboard/panne-list']);
      },
      error: (error) => {
        console.error('Erreur lors de la création de la panne', error);
      }
    });
  }
}
