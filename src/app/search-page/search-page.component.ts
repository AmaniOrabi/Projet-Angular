import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  constructor(private postService: PostService) {}
  posts: [Post] = [new Post()];
  subscription: any;
  loaded: boolean = false;
  ngOnInit() {
    this.subscription = this.postService.getPosts();
    this.subscription.subscribe((res: any) => {
      this.posts = res;
      this.loaded = true;
    });
  }
  getPosts = () => {
    return this.posts;
  };
}
