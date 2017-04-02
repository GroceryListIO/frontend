import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../_services/lists/lists.service';

@Component({
  selector: 'sidebar-lists',
  templateUrl: './sidebar-lists.component.html',
  styleUrls: ['./sidebar-lists.component.css']
})
export class SidebarListsComponent implements OnInit {
  error = '';
  constructor(private listsService: ListsService) { }

  ngOnInit() {
    // get users from secure api end point
    this.listsService.getLists()
    .subscribe(
      resp => {
        //console.log(this.listsService.lists);
      }, error => {
        this.error = error;
      }
    );
  }

}
