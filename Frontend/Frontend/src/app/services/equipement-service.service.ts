import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement } from '../interfaces/equipement';

const BASE_URL  = ["http://localhost:8083/api/v1/auth/Admin/equipements"]
@Injectable({
  providedIn: 'root'
})
export class EquipmentService {


  createEquipement(equipement: Equipement): Observable<Equipement> {
    const headers = this.createAuthorizationHeader();
    return this.http.post<Equipement>(`${BASE_URL}`,equipement,{ headers });
  }

  deleteEquipment(id: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/equipments/${id}`);
  }

  constructor(private http: HttpClient) { }


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
