import { Observable } from 'rxjs/Rx';
import { ConfirmDialogComponent } from '../../_components/confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string, okText: string, cancelText:string): Observable<boolean> {

    let dialogRef: MatDialogRef<ConfirmDialogComponent>;

    dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;
    dialogRef.componentInstance.okText = okText;
    dialogRef.componentInstance.cancelText = cancelText;

    return dialogRef.afterClosed();
  }

}
