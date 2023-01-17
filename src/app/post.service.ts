import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  getPosts = () => {
    return this.http.get(`${environment.api}post`);
  };
  createPost = (body: any) => {
    return this.http.post(`${environment.api}post`, body);
  };
}
