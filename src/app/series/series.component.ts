import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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


  constructor(private _MoviesService:MoviesService, private _NgxSpinnerService: NgxSpinnerService) { }

  getSeries(){
    this._NgxSpinnerService.show();
    this._MoviesService.getMovies("trending/tv/week").subscribe((response)=>{
      this.TrendingSeries = response.results;
      this._NgxSpinnerService.hide();
    })
  }

  getSeriesByGenre(genreId:number){
    this._NgxSpinnerService.show();
    this._MoviesService.getByGenre(this.media, genreId).subscribe((response)=>{
      this.SeriesByGenre = response.results;
      this._NgxSpinnerService.hide();
    })
}

  ngOnInit(): void {
    this.getSeries();
    this._MoviesService.checkDark();
  }

}
