import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashbordComponent } from './shared/components/dashbord/dashbord.component';
import { AuthGuard } from './auth.guard';
import { AddEquipementComponent } from './pages/admin/equipement/add-equipement/add-equipement.component';
import { EquipmentListComponent } from './pages/admin/equipment-list/equipment-list.component';
import { MainContentComponent } from './shared/components/main-content/main-content.component';
import { EditEquipementComponent } from './pages/admin/equipement/edit-equipement/edit-equipement.component';
import { PanneListComponent } from './pages/admin/panne/panne-list/panne-list.component';
import { AddPanneComponent } from './pages/admin/panne/add-panne/add-panne.component';

const routes: Routes = [
  {
    path: 'dashboard',component: DashbordComponent,
    children: [
      { path: '', component: MainContentComponent },  // Redirect to equipment-list by default
      { path: 'dashboard', component: DashbordComponent },
      {path: 'equipment-list', component: EquipmentListComponent},
      {path: 'equipment-list/add', component: AddEquipementComponent },
      {path: 'equipment-list/edit/:idEquipement', component: EditEquipementComponent},
      { path: 'panne-list', component: PanneListComponent },
      {path:'panne-list/add', component: AddPanneComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirect to login by default if no path is specified // Wildcard route for a 404 page, can be adjusted based on your needs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
