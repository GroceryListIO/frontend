import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemsService } from '../../_services/items/items.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  listID = '';
  error = '';

  constructor(private itemsService: ItemsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.listID = this.route.snapshot.params['listID'];

    this.route.params // Subscribe to route changes incase user changes the list
    .subscribe(
      resp => {
        this.listID = this.route.snapshot.params['listID'];
      }, error => {
        this.error = error;
      }
    );
  }

}
