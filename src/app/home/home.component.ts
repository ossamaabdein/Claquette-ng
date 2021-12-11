import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
      600: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true,
    slideBy: "page"
  }


  TrendingMovies:any = [];
  TrendingTv:any = [];

  constructor(private _moviesServices: MoviesService, private _NgxSpinnerService: NgxSpinnerService ) {
   }
  
  getMoviesList() {
    this._moviesServices.getMovies("trending/movie/week").subscribe((response)=>{
      this.TrendingMovies = response.results;
      this._NgxSpinnerService.hide();
    })
  }
  getTvList() {
    this._moviesServices.getMovies("trending/tv/week").subscribe((response)=>{
      this.TrendingTv = response.results;
    })
  }


  
  ngOnInit(): void {
    this._NgxSpinnerService.show();
    this.getMoviesList();
    // setTimeout(() => {
    //   this._NgxSpinnerService.hide();

    // }, 1500);
    this.getTvList();

  }

}
