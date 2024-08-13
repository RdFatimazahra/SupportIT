import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { MainContentComponent } from './shared/components/main-content/main-content.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashbordComponent } from './shared/components/dashbord/dashbord.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEquipementComponent } from './pages/admin/equipement/edit-equipement/edit-equipement.component';
import { FormsModule } from '@angular/forms';
import { AddEquipementComponent } from './pages/admin/equipement/add-equipement/add-equipement.component';
import { EquipmentListComponent } from './pages/admin/equipment-list/equipment-list.component';
import { AddPanneComponent } from './pages/admin/panne/add-panne/add-panne.component';
import { EditPanneComponent } from './pages/admin/panne/edit-panne/edit-panne.component';
import { PanneListComponent } from './pages/admin/panne/panne-list/panne-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    LoginComponent,
    MainContentComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    EquipmentListComponent,
    AddEquipementComponent,
    EditEquipementComponent,
    PanneListComponent,
    AddPanneComponent,
    EditPanneComponent,

    

  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
