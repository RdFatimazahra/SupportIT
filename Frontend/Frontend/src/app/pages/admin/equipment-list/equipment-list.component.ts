import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/services/equipement-service.service';
import { Equipement } from 'src/app/interfaces/equipement';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {

  equipmentList: Equipement[] = [];

  constructor(private equipmentService: EquipmentService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadEquipment();
  }

  private loadEquipment(): void {
    this.equipmentService.getEquipmentList().subscribe(
      (data: Equipement[]) => {
        this.equipmentList = data;
      },
      (error) => {
        console.error('Error fetching equipment list', error);
      }
    );
  }

  deleteEquipment(id: number) {
    this.equipmentService.deleteEquipment(id).subscribe(() => {
      this.loadEquipment(); // Reload the list after deletion
    });
  }
}
