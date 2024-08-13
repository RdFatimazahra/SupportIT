import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jwt } from 'src/app/interfaces/Jwt';
import { AuthenticateService } from 'src/app/services/authenticate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  constructor(
    private service: AuthenticateService,
    private fb: FormBuilder,
    private router: Router
  
  ){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
 /* submitForm(): void {
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe(
      (response : Jwt) => {
             const jwToken = response.token;
            localStorage.setItem('jwt', jwToken);
           this.router.navigateByUrl('/dashboard')
        }
    )
  }*/
    submitForm(): void {
      console.log(this.loginForm.value);
      this.service.login(this.loginForm.value).subscribe(
        (response: Jwt) => {
          const jwToken = response.token;
          localStorage.setItem('jwt', jwToken);
          
          const decodedToken = this.decodeToken(jwToken);
          const userRole = decodedToken.role; // Adjust based on how the role is stored in the token
    
          if (userRole === 'ROLE_ADMIN') {
            this.router.navigateByUrl('/admin-dashboard');
          } else if (userRole === 'ROLE_USER') {
            this.router.navigateByUrl('/user-dashboard');
          } else {
            this.router.navigateByUrl('/dashboard'); // Default route
          }
        }
      );
    }
    
    decodeToken(token: string): any {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    }
    
}
