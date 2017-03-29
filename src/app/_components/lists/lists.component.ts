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
  //lists = [];
  error = '';

  constructor(private listsService: ListsService, private authService: AuthService) { }

  ngOnInit() {
    // get users from secure api end point
    this.listsService.getLists()
    .subscribe(
      resp => {
        //this.lists = resp;
        console.log(this.listsService.lists);
      }, error => {
        this.error = error;
      }
    );
  }

  newList(f: NgForm) {
    this.listsService.newList({name: f.value.name})
    .subscribe(
      resp => {
        //this.lists.push(resp);
        console.log(this.listsService.lists);
      }, error => {
        this.error = error;
      }
    );
  }

}
