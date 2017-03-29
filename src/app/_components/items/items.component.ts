import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemsService } from '../../_services/items/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [ItemsService]
})
export class ItemsComponent implements OnInit {
  listID = "";
  list = {};

  constructor(private itemsService: ItemsService, private route:ActivatedRoute) { }

  ngOnInit() {
    // get list
    this.listID = this.route.snapshot.params['listID'];

    this.itemsService.getList(this.listID)
    .subscribe(
      resp => {
        this.list = resp;
      }, error => {
        throw(error);
      }
    );
  }


}
