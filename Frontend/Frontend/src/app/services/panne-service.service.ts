import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Panne } from '../interfaces/Panne';
import { Observable } from 'rxjs';


const BASE_URL = "http://localhost:8083/api/v1/auth/Admin/pannes";
@Injectable({
  providedIn: 'root'
})
export class PanneServiceService {

  constructor(private http: HttpClient) { }

  createPanne(panne: Panne): Observable<Panne> {
    const headers = this.createAuthorizationHeader();
    return this.http.post<Panne>(`${BASE_URL}`, panne, { headers });
  }

  deletePanne(id: number): Observable<void> {
    const headers = this.createAuthorizationHeader();
    return this.http.delete<void>(`${BASE_URL}/${id}`, { headers });
  }

  updatePanne(panne: Panne, idPanne: number): Observable<Panne> {
    const headers = this.createAuthorizationHeader();
    return this.http.put<Panne>(`${BASE_URL}/${idPanne}`, panne, { headers });
  }

  getPanneById(idPanne: number): Observable<Panne> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Panne>(`${BASE_URL}/${idPanne}`, { headers });
  }

  getPanneList(): Observable<Panne[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Panne[]>(BASE_URL + '/afficher', { headers });
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
