import { Component, OnInit } from '@angular/core';

import { ListsService } from '../../_services/lists/lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [ListsService]
})
export class ListsComponent implements OnInit {
  lists = {};

  constructor(private listService: ListsService) { }

  ngOnInit() {
    // get users from secure api end point
    console.log("initalizing lists component.");
    this.listService.getLists()
    .subscribe(
      resp => {
        this.lists = resp;
      }, error => {
        throw(error);
      }
    );
  }

}
