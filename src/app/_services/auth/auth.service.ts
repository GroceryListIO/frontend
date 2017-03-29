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
    this.token = currentUser && currentUser.token;
    this.checkToken();
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
    return this.http.post('http://localhost:8080/login', { email: email, password: password })
      .map((response: Response) => {
        let token = response.json() && response.json().token;
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

  register(email: string, password: string): Observable<boolean> {
    return this.http.post('http://localhost:8080/register', { email: email, password: password })
      .map((response: Response) => {
        let token = response.json() && response.json().token;
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

  logout(): void {
    console.log("logging out");
    this.isAuthenticated = false;
    this.token = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

}
