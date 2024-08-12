import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Panne } from 'src/app/interfaces/Panne';
import { PanneServiceService } from 'src/app/services/panne-service.service';

@Component({
  selector: 'app-panne-list',
  templateUrl: './panne-list.component.html',
  styleUrls: ['./panne-list.component.scss']
})
export class PanneListComponent implements OnInit {

  panneList: Panne[] = [];

  constructor(private panneService: PanneServiceService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.loadPannes();
  }

  private loadPannes(): void {
    this.panneService.getPanneList().subscribe(
      (data: Panne[]) => {
        console.log('Liste des pannes récupérées :', data);
        this.panneList = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de la liste des pannes', error);
      }
    );
  }
  

  updatePanne(idPanne: number): void {
    this.router.navigate(['/edit', idPanne]); // Redirige vers la page de mise à jour
  }

  deletePanne(id: number): void {
    this.panneService.deletePanne(id).subscribe(
      () => {
        this.panneList = this.panneList.filter(panneList => panneList.idPanne !== id);
        console.log('Panne deleted successfully');
      },
      (error) => {
        console.error('Error deleting panne', error);
      }
    );
  }
}
