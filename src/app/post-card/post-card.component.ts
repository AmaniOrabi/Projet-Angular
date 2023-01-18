import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private postService: PostService,
    private toastr: ToastrService
  ) {}
  @Input() post: any;
  loaded: boolean = false;
  user: any;
  ngOnInit() {
    this.authService.getUserById(this.post.poster_id).subscribe((res) => {
      this.user = res;
      this.loaded = true;
    });
  }
  applyToPost = () => {
    this.postService
      .applyToPost(this.authService.getUser()._id, this.post._id)
      .subscribe((res) => this.toastr.success('Succesfully applied to post'));
  };
}
