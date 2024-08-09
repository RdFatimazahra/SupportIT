import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jwt } from '../interfaces/Jwt';
import { Observable } from 'rxjs';

const BASE_URL  = ["http://localhost:8083/api/v1/auth/"]

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor( private http : HttpClient) { }

  register(signRequest:any): Observable<Jwt>{
    return this.http.post<Jwt>(BASE_URL+'register', signRequest)

  }

  login(loginRequest:any): Observable<Jwt>{
    return this.http.post<Jwt>(BASE_URL+'authenticate', loginRequest)

  }

  getUserCount(): Observable<number> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<number>(BASE_URL + 'Admin/count', { headers });
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
