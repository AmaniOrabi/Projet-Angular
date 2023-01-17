import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
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
}
