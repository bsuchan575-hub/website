import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { CelebritiesComponent } from './celebrities/celebrities.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { LoginComponent } from './login/login.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviePageComponent },
  { path: 'celebrities', component: CelebritiesComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'top-rated', component: TopRatedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'review/:title', component: ReviewComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }