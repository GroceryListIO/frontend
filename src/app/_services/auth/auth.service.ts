import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  public token: string;
  public isAuthenticated: boolean;

  constructor(private http: Http, private router: Router) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    this.token = currentUser && currentUser.token;
    //this.checkToken();
    if (this.token) {
      this.isAuthenticated = true
    }
  }

  checkToken(){
    // Check weather if the current user has a valid token
    if (!this.token) return false;
    let tokenData = this.token.split('.')[1];
    let tokenExpDate = JSON.parse(atob(tokenData)).exp;
    if (Date.now() < +tokenExpDate) {
      console.log("Expired Token");
      this.logout();
      this.isAuthenticated = false;
      return false;
    } else {
      console.log("Valid Token");
      this.isAuthenticated = true;
      return true;
    }
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post('http://localhost:3000/api/Users/login', { email: email, password: password })
      .map((response: Response) => {
        console.log("logging in");
        console.log(response.json());
        let token = response.json().id;
        if (token) {
          // set token
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
          this.isAuthenticated = true;
          return token;
        } else {
          return false;
        }
      }
    );
  }

  register(email: string, password: string): Observable<void> {
    return this.http.post('http://localhost:3000/api/Users', { email: email, password: password })
      .map((response: Response) => {
        console.log("Registration complete");
        console.log(response.json());
        this.login(email, password);
      }
    );
  }

  logout(): void {
    console.log("logging out");
    this.isAuthenticated = false;
    this.token = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

}
