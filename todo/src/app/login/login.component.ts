import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "in28minutes"
  password= ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  constructor(private router : Router,
    private hardCodedAuthenticationService : HardCodedAuthenticationService,
    private basicAuthenticationService : BasicAuthenticationService) {}

  ngOnInit(){
  }

  handleLogin(){
    //console.log(this.username);
    //if(this.username && this.password == 'dummy'){
      if(this.hardCodedAuthenticationService.authenticate(this.username,this.password)){ 
    //Redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else{
      this.invalidLogin = true
    }
  }

  // handleBasicAuthLogin(){
  //   //console.log(this.username);
  //   //if(this.username && this.password == 'dummy'){
  //     this.basicAuthenticationService.executeBasicAuthenticationService(this.username,this.password) 
  //       .subscribe(
  //         data=>{
  //           console.log(data)
  //           this.router.navigate(['welcome', this.username])
  //           this.invalidLogin = false
  //         },
  //         error=>{
  //           console.log(error)
  //           this.invalidLogin = true
  //         }
  //       )
  //   }  

    handleJWTAuthLogin(){
      //console.log(this.username);
      //if(this.username && this.password == 'dummy'){
        this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password) 
          .subscribe(
            data=>{
              console.log(data)
              this.router.navigate(['welcome', this.username])
              this.invalidLogin = false
            },
            error=>{
              console.log(error)
              this.invalidLogin = true
            }
          )
      }  
}
