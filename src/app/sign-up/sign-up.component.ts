import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private router: Router, private authService: AuthService) {}
  error: string = '';

  onSubmit(form: NgForm) {
    this.authService
      .signup(
        form.controls['email'].value,
        form.controls['password'].value,
        form.controls['gender'].value,
        form.controls['name'].value,
        form.controls['lastName'].value
      )
      .subscribe((res: any) => {
        console.log(res);
        if (!res.token) return (this.error = 'Error signing in');
        this.authService.setUser({
          email: res.email,
          name: res.name,
          lastName: res.lastName,
          gender: res.gender,
        });
        this.router.navigate(['/']);
        return localStorage.setItem('token', res.token);
      });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
