import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private postService: PostService
  ) {}
  loaded: boolean = false;
  posts: any;
  ngOnInit(): void {
    this.postService
      .getUserPosts(this.authService.getUser()._id)
      .subscribe((res) => {
        this.posts = res;
        this.loaded = true;
      });
  }
}
