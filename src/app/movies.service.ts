import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

declare var $:any;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMovies(category:any):Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/${category}?api_key=5e1ed7cfdf4a3adeb2f19d92c06f0327`);
  }

  getCurrentMovie(media:any, id:any):Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=5e1ed7cfdf4a3adeb2f19d92c06f0327&language=en-US`)
  }

  getActors():Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/person/popular?api_key=5e1ed7cfdf4a3adeb2f19d92c06f0327&language=en-US")
  }

  getRecommended(media:any, id:number):Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/${media}/${id}/recommendations?api_key=5e1ed7cfdf4a3adeb2f19d92c06f0327`)
  }

  getByGenre(media:any,genreId:number):Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/discover/${media}?api_key=5e1ed7cfdf4a3adeb2f19d92c06f0327&&with_genres=${genreId}`)
  }

  getUpcoming():Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=5e1ed7cfdf4a3adeb2f19d92c06f0327")
  }

  getSearchedMovies(movieName:any):Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=5e1ed7cfdf4a3adeb2f19d92c06f0327&query=${movieName}`)
  }

  // When routing to other components, it checks if there is already darkMode applied or not, 
  // otherwise you need to reactivate darkMode again.
  checkDark(){
    if($(".circle").hasClass("dark")) {
      $("body").css("backgroundColor" , "#171717").css("color" , "#B1BBBB");
      $(".nav-tabs li button").addClass("dark");
      $(".CurrentTitle").addClass("dark");
      $(".factor").addClass("dark");
      $(".otherInfo").addClass("dark2");
    } else {
      $("body").css("backgroundColor" , "rgb(241, 242, 243)").css("color" , "black");
      $(".nav-tabs li button").removeClass("dark");
      $(".CurrentTitle").removeClass("dark");
      $(".factor").removeClass("dark");
      $(".otherInfo").removeClass("dark2");
    }
  }

  darken() {
    $(".darkMode").click(function (){
      $(".darkMode").toggleClass("bgCol");
      $(".circle").toggleClass("dark");
      if($(".circle").hasClass("dark")) {
        $("body").css("backgroundColor" , "#171717").css("color" , "#B1BBBB");
        $(".nav-tabs li button").addClass("dark");
        $(".CurrentTitle").addClass("dark");
        $(".factor").addClass("dark");
        $(".otherInfo").addClass("dark2");
      } else {
        $("body").css("backgroundColor" , "rgb(241, 242, 243)").css("color" , "black");
        $(".nav-tabs li button").removeClass("dark");
        $(".CurrentTitle").removeClass("dark");
        $(".factor").removeClass("dark");
        $(".otherInfo").removeClass("dark2");
      }
    })
  }
}
