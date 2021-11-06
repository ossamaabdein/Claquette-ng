import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
currentId:number=0;
currentMedia:any="movie";
currentMovie:any = [];
RecommendedMovies:any = [];

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService, private _Router:Router) { 
    this.currentId = this._ActivatedRoute.snapshot.params.id;
  }

  currentMovieDetails() {
    this._MoviesService.getCurrentMovie(this.currentMedia, this.currentId).subscribe((response)=> {
      this.currentMovie = response;
    })
  }

  recommendedMovies(){
    this._MoviesService.getRecommended(this.currentMedia, this.currentId).subscribe((response) => {
      this.RecommendedMovies = response.results;
    })
  }

  flooring(x:number){
   return Math.floor(Number(x/60));

  }

  remainder(x:number) {
    return Number(x%60);
  }

  ngOnInit(): void {
    this.currentMovieDetails();
    this.recommendedMovies();
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
