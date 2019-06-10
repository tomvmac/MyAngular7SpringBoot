import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  message = '';

  constructor(private route: ActivatedRoute,
    private welcomeDataService:WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];


  }

  getWelcomeMessage() {

    // this.welcomeDataService.executeHelloWordBeanService().subscribe(
    //   response => this.handleSuccessfulResponse(response),
    //   error => this.handleErrorResponse(error)
    // );

    this.welcomeDataService.executeHelloWordServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

  }


  handleSuccessfulResponse(response){
    console.log(response);
    this.message = response.message;
  }

  handleErrorResponse(error){
    console.log(error);
    //console.log(error.error);
    //this.message = error.error.message;
  }

}
