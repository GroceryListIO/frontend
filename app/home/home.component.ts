import { Component }  from '@angular/core';
import { Auth }       from '../auth/auth.service';

import {AuthHttp} from 'angular2-jwt';
import { Http }      from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'home',
  templateUrl: 'app/home/home.template.html'
})

export class HomeComponent {

  API_URL: string = 'http://localhost:8080';
  message: string;

  constructor(private auth: Auth, private http: Http, private authHttp: AuthHttp) {}

  public securedPing() {
    this.authHttp.get(`${this.API_URL}/secured/`)
      .map(res => res.json())
      .subscribe(
        data => this.message= data.text,
        error => this.message = error._body || error
      );
  }

};
