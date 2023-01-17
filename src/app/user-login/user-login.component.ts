import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
declare var $: any;
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private authService: AuthService) {}
  email: string = '';
  password: string = '';
  subscribtion: any;
  onSubmit(form: NgForm) {
    this.subscribtion = this.authService
      .login(
        form.controls['login-email'].value,
        form.controls['login-password'].value
      )
      .subscribe((res: any) => {
        this.authService.setUser({
          email: res.email,
          name: res.name,
          lastName: res.lastName,
          gender: res.gender,
        });
        this.router.navigate(['/']);
        localStorage.setItem('token', res.token);
      });
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  goHome() {
    this.router.navigate(['/']);
  }
  ngOnInit() {
    if (this.authService.user) this.router.navigate(['/']);
  }
  handleError = (err: any) => {};
  ngOnDestroy() {
    if (this.subscribtion) this.subscribtion.unsubscribe();
  }
}
