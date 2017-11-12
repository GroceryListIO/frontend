import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import { ItemsService } from '../../_services/items/items.service';
import { ConfirmDialogService } from '../../_services/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  listID = '';
  error = '';
  editingItem = {};

  constructor(public itemsService: ItemsService, public route:ActivatedRoute, public dialog: MatDialog, public dialogsService: ConfirmDialogService) { }

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

  editItemDialog(item) {
    this.dialog.open(EditItemDialog, {data: item});
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

  deleteItem(itemID){

    this.dialogsService
      .confirm('Delete Item', 'Are you sure you want to delete this item?', "Delete", "Cancel")
      .subscribe(res => {

        if (res) {
          this.itemsService.deleteItem(itemID)
          .subscribe(
            resp => {
              console.log(resp);
            }, error => {
              this.error = error;
            }
          );
        }
      });

  }


}

@Component({
  selector: 'edit-item-dialog',
  templateUrl: './edit-item-dialog.html',
})
export class EditItemDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public item: any, public itemsService: ItemsService, public dialogRef: MatDialogRef<EditItemDialog>) { }

  updateItem(editForm: NgForm){
    this.itemsService.updateItem(editForm.value)
    .subscribe(
      resp => {
        //console.log(resp);
        this.dialogRef.close();
      }, error => {
        console.log(error);
      }
    );
  }

}
