import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {
  UpcomingMovies:any = [];

  constructor(private _MoviesService:MoviesService, private _NgxSpinnerService: NgxSpinnerService) { }
  getUpcomingMovies(){
    this._NgxSpinnerService.show();
     this._MoviesService.getUpcoming().subscribe((response) => {
      this.UpcomingMovies = response.results;
      this._NgxSpinnerService.hide();
    })

  }

  ngOnInit(): void {
    this.getUpcomingMovies();
  }

}
