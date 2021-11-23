import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMessageFromService:string | undefined
  name = ''
  //String message = "Some Welcome Message"

  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) { }

  ngOnInit(): void {
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
    (response: any) => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
    );
    //console.log("last line of getWelcomeMessage")

    //console.log("get welcome message")
  }


  getWelcomeMessagewithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
    (response: any) => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
    );
    //console.log("last line of getWelcomeMessage")

    //console.log("get welcome message")
  }


  handleSuccessfulResponse(response: any) {

    this.welcomeMessageFromService = response.message;
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error: { error: { message: string | undefined; }; }){
    this.welcomeMessageFromService = error.error.message;
    ;
    
  }

}

export class Class1 {

}
