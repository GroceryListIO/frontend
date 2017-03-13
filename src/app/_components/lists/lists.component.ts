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
    this.listService.getLists()
    .subscribe(
      resp => {
        this.lists = resp;
        console.log("Type of this.lists: %s", typeof this.lists);
        console.log("Type of resp: %s", typeof resp);
        console.log(this.lists);
      }, error => {
        throw(error);
      }
    );
  }

}
