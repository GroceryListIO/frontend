import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../_services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(f: NgForm) {
    this.authService.register(f.value.email, f.value.password)
    .subscribe(
      resp => {
        this.login(f);
      }, error => {
        this.error = 'Bad username or password';
      }
    );
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
