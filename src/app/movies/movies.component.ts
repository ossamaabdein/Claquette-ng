import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  TrendingMovies:any = [];
  MoviesByGenre: any = [];
  TopRated: any = [];
  media = "movie";

/*  
  actionId:number = 28;
  comedyId:number = 35;
  crimeId:number = 80;
  dramaId:number = 18;
  horrorId:number = 27;
  romanceId:number = 10749;
  scienceId:number = 878;
  suspenceId:number = 53;
*/

  constructor(private _MoviesService:MoviesService) { }

  getMovies(){
    this._MoviesService.getMovies("trending/movie/week").subscribe((response)=>{
      this.TrendingMovies = response.results;
    })
  }

  getMoviesByGenre(genreId:number){
    this._MoviesService.getByGenre(this.media, genreId).subscribe((response)=>{
      this.MoviesByGenre = response.results;
    })
  }

  getTopRated() {
    this._MoviesService.getMovies("movie/top_rated").subscribe((response)=>{
      this.TopRated = response.results;
    })
  }

  ngOnInit(): void {
    this.getMovies();
    this.getTopRated();
    // this._MoviesService.darken();
    this._MoviesService.checkDark();
  }

}
