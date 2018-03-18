import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {
  serverURL: any;
    constructor(private http: Http) {
      this.serverURL = 'http://localhost:3000';
  }

  // Add user / Registration Service
validateUser(newUser) {
  const headers = new Headers();
      headers.append('userid', 'userid');
      headers.append('password', 'password');
          headers.append('Content-Type', 'application/json');
          return this.http.post(this.serverURL + '/validateLogin', newUser, { headers: headers })
              .map(res => res.json());
  }

isLoggedIn(): boolean {
  return localStorage.getItem('currentUser') !== null;
}

logOut() {
  localStorage.clear();
}

storeUsersData(token, user) {
      localStorage.setItem('id_token', token); // JWT look directly for this in local storage
      localStorage.setItem('currentUser', user);
  }

}

