import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PepDialogData, PepDialogActionButton } from './dialog.model';

@Component({
    templateUrl: './default-dialog.component.html',
    styleUrls: ['./default-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PepDefaultDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: PepDialogData,
        public dialogRef: MatDialogRef<any>
    ) {}

    onActionButtonClicked(button: PepDialogActionButton): void {
        this.dialogRef.close(true);
        this.dialogRef.afterClosed().subscribe((isActionButtonClicked) => {
            if (isActionButtonClicked && button?.callback) {
                button.callback();
            }
        });
    }

    closeDialog(res) {
        this.dialogRef.close(res);
    }
}
