import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


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
}
