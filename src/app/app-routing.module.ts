import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { SignupComponent } from './signup/signup.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TrendingComponent } from './MoviesNestedComponents/trending/trending.component';


const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"movies", component:MoviesComponent},
  {path:"series", component:SeriesComponent},
  {path:"upcoming", component:UpcomingComponent, canActivate:[AuthGuard]},
  {path:"details/:id", component:DetailsComponent},
  {path:"tv-details/:id", component:TvDetailsComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"movies/trending", component:TrendingComponent},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
