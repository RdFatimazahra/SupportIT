import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {



  constructor(
    private service: AuthenticateService
  ){}

  onLogout(): void {
    this.service.logout();
  }
  

  ngOnInit(): void {
    
  }


}


// import { Component } from '@angular/core';
// import { AuthenticateService } from 'src/app/services/authenticate.service';
// import { MatDialog } from '@angular/material/dialog';
// import { EquipmentService } from 'src/app/services/equipement-service.service' // Importer votre service
// import { equipement } from 'src/app/interfaces/equipement'; // Importer votre modèle d'équipement

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashbord.component.html',
//   styleUrls: ['./dashbord.component.scss']
// })
// export class DashboardComponent {

  
//   equipmentList: equipement[] = [];

//   constructor(private dialog: MatDialog, private equipmentService: EquipmentService) { }

//   ngOnInit() {
//     this.loadEquipment();
//   }

//   loadEquipment() {
//     this.equipmentService.getEquipmentList().subscribe(data => {
//       this.equipmentList = data;
//     });
//   }

//   openAddEquipmentModal() {
//     const dialogRef = this.dialog.open(AddEquipmentDialogComponent);

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.loadEquipment(); // Recharger la liste après ajout
//       }
//     });
//   }

//   openEditEquipmentModal(equipment: equipement) {
//     const dialogRef = this.dialog.open(EditEquipmentDialogComponent, {
//       data: equipment
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.loadEquipment(); // Recharger la liste après modification
//       }
//     });
//   }

//   deleteEquipment(id: number) {
//     this.equipmentService.deleteEquipment(id).subscribe(() => {
//       this.loadEquipment(); // Reload the list after deletion
//     });
//   }
// }

