import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

export class HelloWorldBean {
  constructor( public message : string ){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http : HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Executed Hello World Bean Service");
  }

  ///hello-world/path-variable/{name}
  executeHelloWorldBeanServiceWithPathVariable(name: any){

    // let basicAuthHeaderString = this.createBasicAuthHttpHeader();

    // let header = new HttpHeaders({
    //   Authorization : basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
    //{headers : header}
    );
    //console.log("Executed Hello World Bean Service");
  }

  // createBasicAuthHttpHeader(){
  //   let username = "in28minutes"
  //   let password = "dummy"
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

  //   return basicAuthHeaderString;
  // }
  //Access to XMLHttpRequest at 'http://localhost:8080/users/in28minutes/todos' from origin 
  //'http://localhost:4200'
  //has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

}
