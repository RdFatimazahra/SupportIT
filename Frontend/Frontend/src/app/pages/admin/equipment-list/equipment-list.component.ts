import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/services/equipement-service.service';
import { equipement } from 'src/app/interfaces/equipement';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {

  equipmentList: equipement[] = [];

  constructor(private equipmentService: EquipmentService) {}

  ngOnInit(): void {
    this.loadEquipment();
  }

  private loadEquipment(): void {
    this.equipmentService.getEquipmentList().subscribe(
      (data: equipement[]) => {
        this.equipmentList = data;
      },
      (error) => {
        console.error('Error fetching equipment list', error);
      }
    );
  }
}
