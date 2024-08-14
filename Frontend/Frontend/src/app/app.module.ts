import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { MainContentComponent } from './shared/components/main-content/main-content.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashbordComponent } from './shared/components/dashbord/dashbord.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditEquipementComponent } from './pages/admin/equipement/edit-equipement/edit-equipement.component';
import { AddEquipementComponent } from './pages/admin/equipement/add-equipement/add-equipement.component';
import { EquipmentListComponent } from './pages/admin/equipment-list/equipment-list.component';
import { AddPanneComponent } from './pages/admin/panne/add-panne/add-panne.component';
import { EditPanneComponent } from './pages/admin/panne/edit-panne/edit-panne.component';
import { PanneListComponent } from './pages/admin/panne/panne-list/panne-list.component';
import { AuthInterceptor } from './core/auth.interceptor';
import { TechDashbordComponent } from './pages/technicien/tech-dashbord/tech-dashbord.component';
import { UserDashbordComponent } from './pages/user/user-dashbord/user-dashbord.component';
import { JwtModule, JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AddUserComponent } from './pages/admin/add-user/add-user.component';
import { ListUserComponent } from './pages/admin/list-user/list-user.component';
import { AddTechComponent } from './pages/admin/add-tech/add-tech.component';

// Function to retrieve the token
export function tokenGetter() {
  return localStorage.getItem('access_token'); // Adjust this according to how you're storing the token
}

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
    TechDashbordComponent,
    UserDashbordComponent,
    AddUserComponent,
    ListUserComponent,
    AddTechComponent,
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['your-api-domain.com'], // Replace with your API domain
        disallowedRoutes: ['http://example.com/auth/'], // Replace with routes you want to skip
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
