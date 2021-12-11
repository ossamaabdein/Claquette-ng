import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(private _MoviesService:MoviesService, private _NgxSpinnerService: NgxSpinnerService) { }

  getMovies(){
    this._NgxSpinnerService.show();
    this._MoviesService.getMovies("trending/movie/week").subscribe((response)=>{
      this.TrendingMovies = response.results;
      this._NgxSpinnerService.hide();
    })
  }

  getMoviesByGenre(genreId:number){
    this._NgxSpinnerService.show();
    this._MoviesService.getByGenre(this.media, genreId).subscribe((response)=>{
      this.MoviesByGenre = response.results;
      this._NgxSpinnerService.hide();
    })
  }

  getTopRated() {
    this._NgxSpinnerService.show();
    this._MoviesService.getMovies("movie/top_rated").subscribe((response)=>{
      this.TopRated = response.results;
      this._NgxSpinnerService.hide();
    })
  }

  ngOnInit(): void {
    this.getMovies();
    this.getTopRated();
    this._MoviesService.checkDark();
  }

}
