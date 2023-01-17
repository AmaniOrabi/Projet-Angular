import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { environment } from 'src/environment/environment';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      this.user = jwt_decode(token);
    } else {
      this.user = undefined;
    }
  }
  user: User | undefined;
  login = (email: string, password: string) => {
    return this.http.post(`${environment.api}users/login`, {
      email,
      password,
    });
  };
  signup = (
    email: string,
    password: string,
    gender: string,
    name: string,
    lastName: string
  ) => {
    return this.http.post(`${environment.api}users`, {
      email,
      password,
      gender,
      name,
      lastName,
    });
  };
  getUser = () => {
    return this.user;
  };
  setUser = (user: User) => {
    this.user = user;
  };
  logout = () => {
    localStorage.removeItem('token');
    this.user = undefined;
  };
}
