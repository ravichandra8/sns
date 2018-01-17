import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Observable} from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class PostService {
   i:number;
  constructor(private _http: Http){

  }

  getPostResponse() {
    var header = new Headers();
    header.append('Content-type', 'application/json');
let body = {"request":{"Zone":"","Division":"","PoliceStation":"","CCODE":"2030"}};
        return this._http.post('http://tscops.telangana.gov.in:8081/LogicShore.svc/GetAllPSdetails', JSON.stringify(body), {
        headers:header
      }).map((response:Response) => response.json());
	}
}
