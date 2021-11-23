import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
    //console.log('before ' + this.isUserLoggedIn());
    if(username && password == 'dummy'){
      sessionStorage.setItem('authenticaterUser', username); 
      //console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user == null);
   }

   logout(){
    sessionStorage.removeItem('authenticateUser');
   }
}
