/*import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {

  serCount: number | undefined;

  constructor(
    private service: AuthenticateService
  ){}

  ngOnInit(): void {
    this.loadUserCount();
  }

  private loadUserCount(): void {
    this.service.getUserCount().subscribe(
      (count: number) => {
        this.serCount = count;
      },
      (error) => {
        console.error('Error fetching user count', error);
      }
    );
  }
}*/

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EquipmentService } from 'src/app/services/equipement-service.service' // Importer votre service
import { equipement } from 'src/app/interfaces/equipement'; // Importer votre modèle d'équipement
import { AddEquipmentDialogComponent } from 'src/app/add-equipment-dialog/add-equipment-dialog.component';
import { EditEquipmentDialogComponent } from 'src/app/edit-equipment-dialog/edit-equipment-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashboardComponent {
  equipmentList: equipement[] = [];

  constructor(private dialog: MatDialog, private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.loadEquipment();
  }

  loadEquipment() {
    this.equipmentService.getEquipmentList().subscribe(data => {
      this.equipmentList = data;
    });
  }

  openAddEquipmentModal() {
    const dialogRef = this.dialog.open(AddEquipmentDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadEquipment(); // Recharger la liste après ajout
      }
    });
  }

  openEditEquipmentModal(equipment: equipement) {
    const dialogRef = this.dialog.open(EditEquipmentDialogComponent, {
      data: equipment
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadEquipment(); // Recharger la liste après modification
      }
    });
  }

  deleteEquipment(id: number) {
    this.equipmentService.deleteEquipment(id).subscribe(() => {
      this.loadEquipment(); // Recharger la liste après suppression
    });
  }
}

