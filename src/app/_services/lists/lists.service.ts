import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, URLSearchParams, QueryEncoder } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class ListsService {

  public lists: Array<any>;

  constructor(private http: Http, private authService: AuthService) {}

  getLists(): Observable<Array<any>> {
    let params = new URLSearchParams;
    params.set('filter', JSON.stringify({'where': {'userId': this.authService.userId}}) );
    params.set('access_token', this.authService.token)

    return this.http.get('http://localhost:3000/api/lists', { search: params })
      .map((response: Response) => {
        this.lists = response.json();
        return response.json();
      });
  }

  getList(listId): Observable<Array<any>> {
    let params = new URLSearchParams;
    params.set('access_token', this.authService.token)

    return this.http.get('http://localhost:3000/api/lists/' + listId, { search: params })
      .map((response: Response) => {
        this.lists = response.json();
        return response.json();
      });
  }

  newList(list): Observable<Array<any>> {
    let params = new URLSearchParams;
    params.set('access_token', this.authService.token)

    return this.http.post('http://localhost:3000/api/lists', list, { search: params })
      .map((response: Response) => {
        this.lists.push(response.json());
        console.log(response.json());
        return response.json();
      });
  }

}
