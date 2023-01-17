import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  constructor(
    private toastr: ToastrService,
    private postService: PostService,
    private authService: AuthService
  ) {}
  onsubmit(form: NgForm) {
    if (!form.valid) return this.toastr.warning('All fields are required');
    const user = this.authService.getUser();
    console.log({
      poster_id: user._id,
      start: form.value.departure,
      departs_at: new Date(),
      destination: form.value.arrival,
      place_count: form.value.number,
      price: parseInt(form.value.price),
    });
    this.postService
      .createPost({
        poster_id: user._id,
        start: form.value.departure,
        departs_at: new Date(),
        destination: form.value.arrival,
        place_count: form.value.number,
        price: parseInt(form.value.price),
      })
      .subscribe((res) => console.log(res));
    return 'hehe';
  }
}
