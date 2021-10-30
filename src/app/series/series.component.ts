import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  TrendingSeries:any = [];
  SeriesByGenre: any = [];
  media = "tv";

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

  getSeries(){
    this.TrendingSeries = this._MoviesService.getMovies("trending/tv/week").subscribe((response)=>{
      this.TrendingSeries = response.results;
    })
  }

  getSeriesByGenre(genreId:number){
    this.SeriesByGenre = this._MoviesService.getByGenre(this.media, genreId).subscribe((response)=>{
      this.SeriesByGenre = response.results;
    })
}

  ngOnInit(): void {
    this.getSeries();
  }

}
