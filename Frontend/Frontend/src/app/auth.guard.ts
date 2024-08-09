import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticateService } from './services/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticateService: AuthenticateService, private router: Router) {}

  canActivate(): boolean {
    if (this.authenticateService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}