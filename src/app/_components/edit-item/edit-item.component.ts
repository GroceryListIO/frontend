import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MdDialog} from '@angular/material';

import { ItemsService } from '../../_services/items/items.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(private itemsService: ItemsService, public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(EditItemComponent);
  }

}
