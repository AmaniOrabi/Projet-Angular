import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { filter, Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  constructor(private postService: PostService) {}
  posts: Post[] = [new Post()];
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
  updatePosts(filters: any) {
    console.log(filters);

    if (filters.departure)
      this.posts = this.posts.filter(
        (post) => post.start === filters.departure.toString()
      );
    if (filters.arrival)
      this.posts = this.posts.filter(
        (post) => post.destination === filters.arrival.toString()
      );
    if (filters.passengers)
      this.posts = this.posts.filter(
        (post) => post.place_count === filters.passengers.toInt()
      );
  }
}
