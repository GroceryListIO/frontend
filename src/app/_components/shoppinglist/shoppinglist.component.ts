import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import { ItemsService } from '../../_services/items/items.service';
import { ItemQuestionDialogService } from '../../_services/item-question-dialog/item-question-dialog.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  listID = '';
  error = '';

  constructor(public itemsService: ItemsService, public route:ActivatedRoute, public dialogsService: ItemQuestionDialogService) { }

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

  gotItem(item){
    item.quantity = item.inventory;
    this.itemsService.updateItem(item)
    .subscribe(
      resp => {
        this.askQuestion(item);
      }, error => {
        this.error = error;
      }
    );
  }

  askQuestion(item){
    // Main entry point to question asking.
    if (!item.aisle) {
      this.askQuestionAisle(item);
    }
  }

  askQuestionAisle(item){
    this.dialogsService
      .ask('What aisle are you on?')
      .subscribe(res => {
        item.aisle = res.value.answer;
        if (res) {
          this.itemsService.updateItem(item)
          .subscribe(
            resp => {
            }, error => {
              this.error = error;
            }
          );
        }
      });
  }

}
