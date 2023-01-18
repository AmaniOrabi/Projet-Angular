import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnDestroy {
  constructor(private postService: PostService) {
    this.subscription = this.postService.getPosts().subscribe((res: any) => {
      this.posts = res;
      this.loaded = true;
    });
  }
  @Output() myEvent = new EventEmitter<any>();
  posts: Post[] = [new Post()];
  subscription: any;
  loaded: boolean = false;
  ngOnInit() {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  getPosts = () => {
    return this.posts;
  };
  logPosts = () => {
    console.log(this.posts);
  };
  onSubmit(form: NgForm) {
    console.log({
      departure: form.value.departure,
      arrival: form.value.arrival,
      passengers: form.value.passengers,
    });

    this.myEvent.emit({
      departure: form.value.departure,
      arrival: form.value.arrival,
      passengers: form.value.passengers,
    });
  }
}
