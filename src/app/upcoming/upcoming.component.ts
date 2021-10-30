import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
MoviesService

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {
  UpcomingMovies:any = [];

  constructor(private _MoviesService:MoviesService) { }
  getUpcomingMovies(){
     this._MoviesService.getUpcoming().subscribe((response) => {
      this.UpcomingMovies = response.results;
    })

  }

  ngOnInit(): void {
    this.getUpcomingMovies();
  }

}
