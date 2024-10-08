import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement } from '../interfaces/equipement';

const BASE_URL  = ["http://localhost:8083/api/v1/auth/Admin/equipements"]
@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }


  createEquipement(equipement: Equipement): Observable<Equipement> {
    const headers = this.createAuthorizationHeader();
    return this.http.post<Equipement>(`${BASE_URL}`,equipement,{ headers });
  }

  deleteEquipment(id: number): Observable<void> {
    const headers = this.createAuthorizationHeader();
    return this.http.delete<void>(`${BASE_URL}/${id}`,{ headers });
  }

  updateEquipement(equipement: Equipement, idEquipement: number): Observable<Equipement> {
    const headers = this.createAuthorizationHeader();
    return this.http.put<Equipement>(`${BASE_URL}/${idEquipement}`, equipement, { headers });
  }
  getEquipementById(idEquipement: number): Observable<Equipement> {
    const headers = this.createAuthorizationHeader();

    return this.http.get<Equipement>(`${BASE_URL}/${idEquipement}`, { headers });
  }

  getEquipmentList(): Observable<Equipement[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Equipement[]>(BASE_URL + '/afficher', { headers });
  }

  private createAuthorizationHeader(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
      return undefined;
    }
  }
}
