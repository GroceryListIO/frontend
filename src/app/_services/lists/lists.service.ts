import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, URLSearchParams, QueryEncoder } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth/auth.service';
import { GoogleAnalyticsEventsService } from '../ga/google-analytics-events.service';

@Injectable()
export class ListsService {

  public lists: Array<any>;

  constructor(private http: Http, private authService: AuthService, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {}

  getLists(): Observable<Array<any>> {
    let params = new URLSearchParams;
    // params.set('filter', JSON.stringify({'where': {'userId': this.authService.userId}}) ); // Leaving in as a good example
    params.set('access_token', this.authService.token)

    return this.http.get(environment.api_host + '/api/users/' + this.authService.userId + '/lists/', { search: params })
      .map((response: Response) => {
        this.lists = response.json();
        return response.json();
      });
  }

  getList(listId): Observable<Array<any>> {
    let params = new URLSearchParams;
    params.set('access_token', this.authService.token)

    return this.http.get(environment.api_host + '/api/users/' + this.authService.userId + '/lists/' + listId, { search: params })
      .map((response: Response) => {
        this.lists = response.json();
        return response.json();
      });
  }

  newList(list): Observable<Array<any>> {
    let params = new URLSearchParams;
    params.set('access_token', this.authService.token)

    return this.http.post(environment.api_host + '/api/users/' + this.authService.userId + '/lists/', list, { search: params })
      .map((response: Response) => {
        this.lists.push(response.json());
        console.log(response.json());
        this.googleAnalyticsEventsService.emitEvent('List', 'Create');
        return response.json();
      });
  }

}
