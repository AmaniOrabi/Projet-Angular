import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'create', component: CreatePostComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
