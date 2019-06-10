import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message:string){ }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWordBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }


  executeHelloWordServiceWithPathVariable(name) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    //return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, {headers: header});
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }


  createBasicAuthenticationHttpHeader(){
    let username = 'in28minutes';
    let password = 'test';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' +  password);
    return basicAuthHeaderString;
  }
}
