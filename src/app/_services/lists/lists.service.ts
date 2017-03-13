import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class ListsService {

  constructor(private http: Http, private authService: AuthService) { }

  getLists(): Observable<boolean> {
    // add jwt token to headers
    let headers = new Headers({ 'Authorization': this.authService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get('http://localhost:8080/lists', options)
      .map((response: Response) => response.json());
  }

}
