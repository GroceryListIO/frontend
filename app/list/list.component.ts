import { Component }  from '@angular/core';
import { Auth }       from '../auth/auth.service';

import {AuthHttp} from 'angular2-jwt';
import { Http }      from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'lists',
  templateUrl: 'app/list/list.template.html'
})

export class ListComponent {

  API_URL: string = 'http://localhost:8080';
  lists: string;

  constructor(private auth: Auth, private http: Http, private authHttp: AuthHttp) {}

  ngOnInit(){
    this.getLists();
  }

  public getLists() {
    this.authHttp.get(`${this.API_URL}/list/`)
      .map(res => res.json())
      .subscribe(
        data => this.lists = data,
        error => this.lists = error._body || error
      );
  }

};
