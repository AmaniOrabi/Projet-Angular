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
  applyToPost = (user_id: string, post_id: string) => {
    return this.http.post(`${environment.api}post/apply`, {
      user_id,
      post_id,
    });
  };
  getUserPosts = (userId: string) => {
    return this.http.get(`${environment.api}post/user_posts/${userId}`);
  };
}
