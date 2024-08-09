import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashbordComponent } from './shared/components/dashbord/dashbord.component';
import { AuthGuard } from './auth.guard';
import { EquipmentListComponent } from './pages/admin/equipment-list/equipment-list.component';

const routes: Routes = [
   // Default route to the login component
   { path: '', redirectTo: '/login', pathMatch: 'full' },
  
   // Route to the login component
   { path: 'login', component: LoginComponent },
 
   // Route to the dashboard component
   { path: 'dashbord', component: DashbordComponent},

   { path: 'equipment-list', component: EquipmentListComponent },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
