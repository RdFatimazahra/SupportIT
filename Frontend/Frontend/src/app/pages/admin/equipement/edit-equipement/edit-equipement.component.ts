import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipement, EtatEquipement } from 'src/app/interfaces/equipement';
import { EquipmentService } from 'src/app/services/equipement-service.service';

@Component({
  selector: 'app-edit-equipement',
  templateUrl: './edit-equipement.component.html',
  styleUrls: ['./edit-equipement.component.scss']
})
export class EditEquipementComponent {
  equipement: Equipement = {
    nom: '',
    image: '',
    description: '',
    etat: EtatEquipement.EN_SERVICE
  };
  idEquipement!: number;
  EtatEquipement = EtatEquipement; // Ajout de cette ligne

  constructor(
    private equipementService: EquipmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idEquipement = +this.route.snapshot.paramMap.get('id')!;
    console.log('Fetching equipment with ID:', this.idEquipement);
    this.equipementService.getEquipementById(this.idEquipement).subscribe((data) => {
      console.log('Data fetched:', data);
      this.equipement = data;
    }, (error) => {
      console.error('Error fetching equipment:', error);
    });
  }
  

  onSubmit(): void {
    this.equipementService.updateEquipement(this.equipement, this.idEquipement).subscribe(
      () => {
        console.log('Équipement mis à jour avec succès');
        this.router.navigate(['/dashboard/equipment-list']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de l\'équipement', error);
      }
    );
  }
  
}
