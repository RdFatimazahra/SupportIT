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
import { UserDashbordComponent } from './pages/user/user-dashbord/user-dashbord.component';
import { TechDashbordComponent } from './pages/technicien/tech-dashbord/tech-dashbord.component';
import { AddUserComponent } from './pages/admin/add-user/add-user.component';
import { ListUserComponent } from './pages/admin/list-user/list-user.component';
import { TechListComponent } from './pages/admin/tech-list/tech-list.component';
import { AddTechComponent } from './pages/admin/add-tech/add-tech.component';

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
      { path: 'user-dashboard', component: UserDashbordComponent },
      { path: 'technician-dashboard', component: TechDashbordComponent },
      { path: 'list-user/register', component:AddUserComponent },
      {path: 'list-user', component:ListUserComponent},
      {path: 'tech-list', component:TechListComponent},
      {path:'tech-list/add-tech', component:AddTechComponent},
      
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
