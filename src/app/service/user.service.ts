import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class UserService {
  serverURL: any;
  constructor(private http: Http) {
    this.serverURL = 'http://localhost:3000';
  }

    // Add user / Registration Service
createUser(newUser) {
  const headers = new Headers();
      headers.append('userid', 'userid');
      headers.append('Name', 'Name');
      headers.append('EmailAddress', 'EmailAddress');
      headers.append('PhoneNumber', 'PhoneNumber');
      headers.append('Password', 'Password');
      headers.append('Balance', 'Balance');
          headers.append('Content-Type', 'application/json');
          return this.http.post(this.serverURL + '/createUser', newUser, { headers: headers })
              .map(res => res.json());
  }


GetAllUsers() {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post(this.serverURL + '/getAllUsers', { headers: headers })
  .map(res => res.json());
}

GetUsersHistory() {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post(this.serverURL + '/getUsersHistory', { headers: headers })
  .map(res => res.json());
}


}
