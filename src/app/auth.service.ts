import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject(null);

  saveUserData() {
    let encodedUserData = JSON.stringify(localStorage.getItem("userToken"));
    this.userData.next(jwtDecode(encodedUserData));
  }

  constructor(private _HttpClient:HttpClient, private _Router:Router) {
    if(localStorage.getItem("userToken") != null) {
      this.saveUserData();
    }
   }



  register(formData:object):Observable<any> {
    return this._HttpClient.post("https://routeegypt.herokuapp.com/signup", formData)
  }

  login(formData:any):Observable<any> {
    return this._HttpClient.post("https://routeegypt.herokuapp.com/signin", formData)
  }

  logOut(){
    localStorage.removeItem("userToken");
    this.userData.next(null);
    this._Router.navigate(["/login"]);
  }
}
