import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  constructor(private authService: AuthService) {}
  @Input() post: any;
  loaded: boolean = false;
  user: any;
  ngOnInit() {
    this.authService.getUserById(this.post.poster_id).subscribe((res) => {
      this.user = res;
      this.loaded = true;
    });
  }
}
