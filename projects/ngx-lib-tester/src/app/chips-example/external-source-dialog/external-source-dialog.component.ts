import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'external-source-dialog',
  templateUrl: './external-source-dialog.component.html',
  styleUrls: ['./external-source-dialog.component.scss']
})
export class ExternalSourceDialogComponent {

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ExternalSourceDialogComponent>) {
   //
  }

  onValueChanged(values: string) {
    if (values) {
        let recArray = values.split(';');    
        this.dialogRef.close(recArray);
    } else {
        this.dialogRef.close();
    }    
  }

  onDialogClose() {
    this.dialogRef.close();
  }

}
