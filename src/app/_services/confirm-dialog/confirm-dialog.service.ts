import { Observable } from 'rxjs/Rx';
import { ConfirmDialogComponent } from '../../_components/confirm-dialog/confirm-dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmDialogService {

  constructor(private dialog: MdDialog) { }

  public confirm(title: string, message: string, okText: string, cancelText:string): Observable<boolean> {

    let dialogRef: MdDialogRef<ConfirmDialogComponent>;

    dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;
    dialogRef.componentInstance.okText = okText;
    dialogRef.componentInstance.cancelText = cancelText;

    return dialogRef.afterClosed();
  }

}
