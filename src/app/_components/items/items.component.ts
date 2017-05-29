import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {MdDialog, MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

import { ItemsService } from '../../_services/items/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  listID = '';
  error = '';
  editingItem = {};

  constructor(private itemsService: ItemsService, private route:ActivatedRoute, public dialog: MdDialog) { }

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
    console.log("edit item");
    console.log(item);
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

@Component({
  selector: 'edit-item-dialog',
  templateUrl: './edit-item-dialog.html',
})
export class EditItemDialog {

  constructor(@Inject(MD_DIALOG_DATA) public item: any, private itemsService: ItemsService, public dialogRef: MdDialogRef<EditItemDialog>) { }

  updateItem(editForm: NgForm){
    console.log("form submission");
    console.log(editForm.value);
    console.log(editForm.value.id);
    this.itemsService.updateItem(editForm.value)
    .subscribe(
      resp => {
        console.log(resp);
        this.dialogRef.close();
      }, error => {
        console.log(error);
      }
    );
  }

}
