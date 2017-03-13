import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../_services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})

export class LoginComponent implements OnInit {
  error = '';
  info = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(f: NgForm) {
    this.authService.login(f.value.email, f.value.password)
    .subscribe(
      resp => {
        this.router.navigate(['/lists'])
      }, error => {
        this.error = 'Bad username or password';
      }
    );
  }

}
