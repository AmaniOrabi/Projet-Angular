import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
declare var $: any;
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(private router: Router, private authService: AuthService) {}
  email: string = '';
  password: string = '';
  onSubmit(form: NgForm) {
    // console.log(this.email, this.password);
    this.authService
      .login(
        form.controls['login-email'].value,
        form.controls['login-password'].value
      )
      .subscribe((res) => console.log(res));
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
