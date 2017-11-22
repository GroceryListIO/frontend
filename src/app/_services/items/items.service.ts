import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class ItemsService {

  public items: Array<any>;
  public shoppingItems: Array<any>;
  listID: string;

  constructor(private http: Http, private authService: AuthService) { }

  getItems(id: string): Observable<boolean> {
    this.listID = id;
    this.items = [];
    // add jwt token to headers
    let headers = new Headers({ 'Authorization': this.authService.token });
    let options = new RequestOptions({ headers: headers });
    let url = environment.api_host + "/api/users/" + this.authService.userId + "/items/?filter[where][listId]=" + id + "&filter[order]=aisle";

    return this.http.get(url, options)
      .map((response: Response) => {
        this.items = response.json();
        this.calculateShoppingList();
        return response.json();
      });
  }

  newItem(item): Observable<Array<any>> {
    // add jwt token to headers
    let headers = new Headers({ 'Authorization': this.authService.token });
    let options = new RequestOptions({ headers: headers });
    let url = environment.api_host + "/api/users/" + this.authService.userId + "/items/";
    item.listId = this.listID;

    return this.http.post(url, item, options)
      .map((response: Response) => {
        this.items.push(response.json());
        this.calculateShoppingList();
        return response.json();
      });
  }

  updateItem(item): Observable<Array<any>> {
    // add jwt token to headers
    let headers = new Headers({ 'Authorization': this.authService.token });
    let options = new RequestOptions({ headers: headers });
    let url = environment.api_host + "/api/users/" + this.authService.userId + "/items/" + item.id;

    return this.http.put(url, item, options)
      .map((response: Response) => {

        if (response.status === 200) { // Update in memory items
          for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == response.json().id) {
              this.items[i] = response.json();
            }
          }
        }
        this.calculateShoppingList();
        return response.json();

      });
  }

  calculateShoppingList() {
    console.log('Caluclating the shopping List');
    this.shoppingItems = [];
    for (let i = 0; i < this.items.length; i++) {
      if ((this.items[i].inventory - this.items[i].quantity) < 1) { continue } // Skip if they need less than 1
      this.shoppingItems.push(this.items[i]);
    }
  }

  deleteItem(itemID): Observable<Response> {
    // add jwt token to headers
    let headers = new Headers({ 'Authorization': this.authService.token });
    let options = new RequestOptions({ headers: headers });
    let url = environment.api_host + "/api/users/" + this.authService.userId + "/items/" + itemID;

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
