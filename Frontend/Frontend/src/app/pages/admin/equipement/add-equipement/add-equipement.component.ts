import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipement-service.service';
import { Equipement, EtatEquipement } from 'src/app/interfaces/equipement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-equipment-dialog',
  templateUrl: './add-equipement.component.html',
  styleUrls: ['./add-equipement.component.scss']
})
export class AddEquipementComponent {

  equipement: Equipement = {
    nom: '',
    description: '',
    image:'',
    etat: EtatEquipement.EN_SERVICE
  };

  etats = Object.values(EtatEquipement);

  constructor(private equipementService: EquipmentService,private router: Router) { }

  onSubmit() {
    this.equipementService.createEquipement(this.equipement).subscribe({
      next: (response) => {
        alert('Équipement créé avec succès');
        this.router.navigate(['/dashboard/equipements']);
        // Réinitialiser le formulaire après la soumission ou naviguer vers une autre page
      },
      error: (error) => {
        console.error('Erreur lors de la création de l\'équipement', error);
      
      }
    });
  }
}
