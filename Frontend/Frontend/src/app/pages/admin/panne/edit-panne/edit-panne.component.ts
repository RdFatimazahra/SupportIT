import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Panne, EtatPanne } from 'src/app/interfaces/Panne';
import { PanneServiceService } from 'src/app/services/panne-service.service';

@Component({
  selector: 'app-edit-panne',
  templateUrl: './edit-panne.component.html',
  styleUrls: ['./edit-panne.component.scss']
})
export class EditPanneComponent implements OnInit {
  panne: Panne = {
    description: '',
    etatPanne: EtatPanne.SIGNALEE
  };
  idPanne!: number;
  EtatPanne = EtatPanne; // Adding this line to access the enum in the template

  constructor(
    private panneService: PanneServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idPanne = +this.route.snapshot.params['idPanne']!;
    console.log(this.idPanne);
    
    this.panneService.getPanneById(this.idPanne).subscribe((data) => {
      console.log('Fetched data:', data);
      this.panne = data;
    });
  }
  
  onSubmit(): void {
    this.panneService.updatePanne(this.panne, this.idPanne).subscribe(
      () => {
        console.log('Panne mise à jour avec succès');
        this.router.navigate(['/dashboard/panne-list']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la panne', error);
      }
    );
  }
}
