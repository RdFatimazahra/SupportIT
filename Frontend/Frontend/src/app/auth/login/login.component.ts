import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jwt } from 'src/app/interfaces/Jwt';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  loginForm!: FormGroup;
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  constructor(
    private service: AuthenticateService,
    private fb: FormBuilder,
    private router: Router,
    private jwtHelper: JwtHelperService // Inject the service
  ) {}
  
  submitForm(): void {
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe(
      (response: Jwt) => {
        const jwToken = response.token;
        const userRole = response.role; // Directly use the role from the response
        console.log("The role:", userRole);
  
        localStorage.setItem('jwt', jwToken);
        localStorage.setItem('role', userRole);
  
        if (userRole === 'ADMIN') {
          this.router.navigateByUrl('/dashboard');
        } else if (userRole === 'USER') {
          this.router.navigateByUrl('/dashboard/user-dashboard');
        } else if (userRole === 'TECHNICIEN') {
          this.router.navigateByUrl('/dashboard/technician-dashboard'); // Adjusted path
        } else {
          this.router.navigateByUrl('/dashboard'); // Default route
        }
      }
    );
  }
  
    
}
