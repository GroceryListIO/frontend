import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(f: NgForm) {
    this.authService.login(f.value.username, f.value.password)
    .subscribe(
      resp => {
        this.info = JSON.stringify(resp);
      }, error => {
        this.error = 'Bad username or password';
      }
    );
  }

}
