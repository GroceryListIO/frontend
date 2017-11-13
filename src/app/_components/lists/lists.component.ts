import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../_services/auth/auth.service';
import { ListsService } from '../../_services/lists/lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  error = '';

  constructor(public listsService: ListsService, public authService: AuthService) { }

  ngOnInit() {
    // get users from secure api end point
    this.listsService.getLists()
    .subscribe(
      resp => {
        // console.log(this.listsService.lists);
      }, error => {
        this.error = error;
        if (error.status == 401) {
          this.authService.logout();
        }
      }
    );
  }

  newList(f: NgForm) {
    this.listsService.newList({name: f.value.name})
    .subscribe(
      resp => {
        // console.log(this.listsService.lists);
      }, error => {
        this.error = error;
      }
    );
  }

}
