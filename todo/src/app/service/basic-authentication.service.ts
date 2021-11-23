import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constant';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    public http : HttpClient
  ) { }

  // authenticate(username: string, password: string){
  //   //console.log('before ' + this.isUserLoggedIn());
  //   if(username && password == 'dummy'){
  //     sessionStorage.setItem('authenticaterUser', username); 
  //     //console.log('after ' + this.isUserLoggedIn());
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  executeBasicAuthenticationService(username: string, password: string){

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let header = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
    {headers : header}).pipe(
      map(
        data =>{
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    );
    //console.log("Executed Hello World Bean Service");
  }
 
  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
   }

   getAuthenticatedToken() {
    //if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user == null);
   }

   logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
   }

}



export class AuthenticationBean {
  constructor(
    public message : string
  ) {
    
  }
}
