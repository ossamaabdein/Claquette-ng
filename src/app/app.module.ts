import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SeriesComponent } from './series/series.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ActionComponent } from './MoviesNestedComponents/action/action.component';
import { ComedyComponent } from './MoviesNestedComponents/comedy/comedy.component';
import { CrimeComponent } from './MoviesNestedComponents/crime/crime.component';
import { DramaComponent } from './MoviesNestedComponents/drama/drama.component';
import { HorrorComponent } from './MoviesNestedComponents/horror/horror.component';
import { RomanceComponent } from './MoviesNestedComponents/romance/romance.component';
import { ScienceComponent } from './MoviesNestedComponents/science/science.component';
import { SuspenceComponent } from './MoviesNestedComponents/suspence/suspence.component';
import { TrendingComponent } from './MoviesNestedComponents/trending/trending.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    UpcomingComponent,
    SeriesComponent,
    NavbarComponent,
    NotfoundComponent,
    DetailsComponent,
    TvDetailsComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    ActionComponent,
    ComedyComponent,
    CrimeComponent,
    DramaComponent,
    HorrorComponent,
    RomanceComponent,
    ScienceComponent,
    SuspenceComponent,
    TrendingComponent,
    FooterComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

