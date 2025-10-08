import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ReviewComponent } from './review/review.component';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { CelebritiesComponent } from './celebrities/celebrities.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { LoginComponent } from './login/login.component';
import { MoviePageComponent } from './movie-page/movie-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SlideshowComponent,
    ReviewComponent,
    MovieCardsComponent,
    CelebritiesComponent,
    FooterComponent,
    ReviewsComponent,
    TopRatedComponent,
    LoginComponent,
    MoviePageComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
