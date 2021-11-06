import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MoviesService } from '../movies.service';

declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean = false;
  movieInput: any = "";
  returnedMovies:any = [];
  constructor(private _AuthService:AuthService, private _MoviesService:MoviesService) { }


  ngOnInit(): void {
    this._MoviesService.darken();
    this._MoviesService.checkDark();

    this._AuthService.userData.subscribe(()=> {
      if(this._AuthService.userData.getValue() != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    })
  }

  logOut(){
    this._AuthService.logOut();
  }

  search(input = this.movieInput) {
    this._MoviesService.getSearchedMovies(input).subscribe((response) => {
      this.returnedMovies = response.results;
    });
  }

 

}
