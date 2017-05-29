import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';

import { ItemsService } from '../../_services/items/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  listID = '';
  error = '';

  constructor(private itemsService: ItemsService, private route:ActivatedRoute) { }

  ngOnInit() {
    // get items
    this.getItems();

    this.route.params // Subscribe to route changes incase user changes the list
    .subscribe(
      resp => {
        this.getItems();
      }, error => {
        this.error = error;
      }
    );

  }

  getItems() {
    this.listID = this.route.snapshot.params['listID'];
    this.itemsService.getItems(this.listID)
    .subscribe(
      resp => {
        //console.log("Items: ");
        //console.log(resp);
      }, error => {
        this.error = error;
      }
    );
  }

  newItem(f: NgForm) {
    this.itemsService.newItem({name: f.value.name, inventory: f.value.inventory, quantity: f.value.quantity })
    .subscribe(
      resp => {
        //console.log(resp);
        f.reset();
      }, error => {
        this.error = error;
      }
    );
  }

  editItem(item) {
    console.log("edit item");
    console.log(item);
  }

  deleteItem(itemID){
    this.itemsService.deleteItem(itemID)
    .subscribe(
      resp => {
        console.log(resp);
      }, error => {
        this.error = error;
      }
    );
  }


}
