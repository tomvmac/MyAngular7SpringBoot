import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router,
    private basicAuthService: BasicAuthenticationService,
    private hardCodedAuthService: HardcodedAuthenticationService ) { }

  ngOnInit() {
  }


  handleBasicAuthLogin(){
    // call hard coded authentication service
    this.basicAuthService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
       // redirect to welcome
       this.router.navigate(['welcome', this.username]);
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );

  }

  handleJWTAuthLogin(){
    // call hard coded authentication service
    this.basicAuthService.executeJWTAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
       // redirect to welcome
       this.router.navigate(['welcome', this.username]);
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );

  }

  handleLogin(){
    // call hard coded authentication service
    if (this.hardCodedAuthService.authenticate(this.username, this.password)){
      this.invalidLogin = false;
       // redirect to welcome
       this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }

  }



}
