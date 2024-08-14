import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-add-tech',
  templateUrl: './add-tech.component.html',
  styleUrls: ['./add-tech.component.scss']
})
export class AddTechComponent implements OnInit {

  registerForm!: FormGroup


    constructor(
      private service : AuthenticateService,
      private fb: FormBuilder,
      private router: Router
    ){}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: this.passwordMathValidator})
  }


  passwordMathValidator(formGroup: FormGroup){
    const password = formGroup.get('password')?.value;
    const confirmPassword= formGroup.get('confirmPassword')?.value;

    if(password != confirmPassword){
      formGroup.get('confirmPassword')?.setErrors({passwordMisamtch : true});
    }else
    {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
  submitFormT() {
    console.log(this.registerForm.value);
    this.service.register(this.registerForm.value).subscribe(
      (response) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/dashboard/technicien']);
      },
      (error) => {
          console.error('Registration failed:', error);
      }
    );
  }
  


}