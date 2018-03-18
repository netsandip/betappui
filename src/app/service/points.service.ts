import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PointsService {
  serverURL: any;
  constructor(private http: Http) {
    this.serverURL = 'http://localhost:3000';
  }

    // Add user / Registration Service
updateBalancePoints(userDetails) {
  const headers = new Headers();
          headers.append('Content-Type', 'application/json');
          return this.http.post(this.serverURL + '/UpdateDeposit', userDetails, { headers: headers })
              .map(res => res.json());
  }

}
