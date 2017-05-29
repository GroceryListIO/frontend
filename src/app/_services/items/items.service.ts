import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class ItemsService {

  public items: Array<any>;
  listID: string;

  constructor(private http: Http, private authService: AuthService) { }

  getItems(id: string): Observable<boolean> {
    this.listID = id;
    this.items = [];
    // add jwt token to headers
    let headers = new Headers({ 'Authorization': this.authService.token });
    let options = new RequestOptions({ headers: headers });
    let url = "http://localhost:3000/api/lists/" + id + "/items";

    return this.http.get(url, options)
      .map((response: Response) => {
        this.items = response.json();
        return response.json();
      });
  }

  newItem(item): Observable<Array<any>> {
    // add jwt token to headers
    let headers = new Headers({ 'Authorization': this.authService.token });
    let options = new RequestOptions({ headers: headers });
    let url = "http://localhost:3000/api/items/";
    item.listId = this.listID;

    return this.http.post(url, item, options)
      .map((response: Response) => {
        this.items.push(response.json());
        return response.json();
      });
  }

  deleteItem(itemID): Observable<Response> {
    // add jwt token to headers
    let headers = new Headers({ 'Authorization': this.authService.token });
    let options = new RequestOptions({ headers: headers });
    let url = "http://localhost:3000/api/lists/" + this.listID + "/items/" + itemID;

    return this.http.delete(url, options)
      .map((response: Response) => {
        if (response.status === 204) { // Delete it out of in memoery  items
          for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == itemID) {
              this.items.splice(i, 1);
            }
          }
        }
        return response;
      });
  }

}
