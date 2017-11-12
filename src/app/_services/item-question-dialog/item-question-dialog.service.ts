import { Observable } from 'rxjs/Rx';
import { ItemQuestionDialogComponent } from '../../_components/item-question-dialog/item-question-dialog.component';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemQuestionDialogService {

  constructor(private dialog: MatDialog) { }

  public ask(question: string): Observable<any> {

    let dialogRef: MatDialogRef<ItemQuestionDialogComponent>;

    dialogRef = this.dialog.open(ItemQuestionDialogComponent);
    dialogRef.componentInstance.question = question;

    return dialogRef.afterClosed();
  }

}
