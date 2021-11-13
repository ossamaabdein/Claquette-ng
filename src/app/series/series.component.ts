import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  TrendingSeries:any = [];
  SeriesByGenre:any = [];
  media = "tv";


  constructor(private _MoviesService:MoviesService) { }

  getSeries(){
    this._MoviesService.getMovies("trending/tv/week").subscribe((response)=>{
      this.TrendingSeries = response.results;
    })
  }

  getSeriesByGenre(genreId:number){
    this._MoviesService.getByGenre(this.media, genreId).subscribe((response)=>{
      this.SeriesByGenre = response.results;
    })
}

  ngOnInit(): void {
    this.getSeries();
    this._MoviesService.checkDark();
  }

}
