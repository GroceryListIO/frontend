import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class ListsService {

  public lists: Array<any>;

  constructor(private http: Http, private authService: AuthService) {}

  getLists(): Observable<Array<any>> {
    // add jwt token to headers
    let headers = new Headers({ 'Authorization': this.authService.token });
    let options = new RequestOptions({ headers: headers });

    console.log("auth info");
    console.log(this.authService.token);

    return this.http.get('http://localhost:3000/api/lists', options)
      .map((response: Response) => {
        this.lists = response.json();
        return response.json();
      });
  }

  newList(list): Observable<Array<any>> {
    // add jwt token to headers
    let headers = new Headers({ 'Authorization': this.authService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:3000/api/lists', list, options)
      .map((response: Response) => {
        this.lists.push(response.json());
        console.log(response.json());
        return response.json();
      });
  }

}
