import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, URLSearchParams, QueryEncoder } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class ListsService {

  public lists: Array<any>;

  constructor(private http: Http, private authService: AuthService) {}

  getLists(): Observable<Array<any>> {
    let params = new URLSearchParams;
    // params.set('filter', JSON.stringify({'where': {'userId': this.authService.userId}}) ); // Leaving in as a good example
    params.set('access_token', this.authService.token)

    return this.http.get(environment.api_host + '/api/lists/myLists', { search: params })
      .map((response: Response) => {
        this.lists = response.json();
        return response.json();
      });
  }

  getList(listId): Observable<Array<any>> {
    let params = new URLSearchParams;
    params.set('access_token', this.authService.token)

    return this.http.get(environment.api_host + '/api/lists/' + listId, { search: params })
      .map((response: Response) => {
        this.lists = response.json();
        return response.json();
      });
  }

  newList(list): Observable<Array<any>> {
    let params = new URLSearchParams;
    params.set('access_token', this.authService.token)

    return this.http.post(environment.api_host + '/api/lists', list, { search: params })
      .map((response: Response) => {
        this.lists.push(response.json());
        console.log(response.json());
        return response.json();
      });
  }

}
