import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}
  loggedIn: boolean = false;
  ngDoCheck() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
      return;
    }
    return (this.loggedIn = false);
  }
  getUser() {
    return this.authService.getUser();
  }
  logout = () => {
    this.authService.logout();
  };
}
