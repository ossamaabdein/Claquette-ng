import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {
currentId:number=0;
currentMedia:any="tv";
currentMovie:any = [];
RecommendedSeries:any = [];

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService, private _Router:Router) { 
    this.currentId = this._ActivatedRoute.snapshot.params.id;

    console.log(_ActivatedRoute.snapshot.params)
  }

  currentMovieDetails() {
    this._MoviesService.getCurrentMovie(this.currentMedia, this.currentId).subscribe((response)=> {
      this.currentMovie = response;
    })
  }

  recommendedSeries(){
    this._MoviesService.getRecommended(this.currentMedia, this.currentId).subscribe((response) => {
      this.RecommendedSeries= response.results;
    })
  }

  ngOnInit(): void {
    this.currentMovieDetails();
    this.recommendedSeries();
    this._Router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._MoviesService.checkDark();
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true,
    slideBy: "page"
  }


}
