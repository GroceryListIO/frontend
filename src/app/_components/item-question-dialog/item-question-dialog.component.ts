import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-item-question-dialog',
  templateUrl: './item-question-dialog.component.html',
  styleUrls: ['./item-question-dialog.component.css']
})
export class ItemQuestionDialogComponent implements OnInit {

  public question: string; // Question to ask
  public value: string; // Value to update in item object,
  public fieldType: string; // Type of input field

  constructor(public dialogRef: MatDialogRef<ItemQuestionDialogComponent>) { }

  ngOnInit() {
  }

  public test(){
    
  }

}
