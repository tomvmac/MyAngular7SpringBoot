import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    console.log('intercept');
    console.log('basicAuthHeaderString', basicAuthHeaderString);
    console.log('username', username);

    if (basicAuthHeaderString && username){
      console.log('cloning');
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      }
      );
    }

    return next.handle(request);
  }
}
