import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'pep-dialog',
    styleUrls: ['./dialog.component.scss', './dialog.component.theme.scss'],
    templateUrl: './dialog.component.html',
})
export class PepDialogComponent {
    @Input() title: string;
    @Input() showClose = true;
    @Input() showHeader = true;
    @Input() showFooter = true;

    // @Input() dialogRef: MatDialogRef<any>;

    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}
    
    closeDialog() {
        // if (this.dialogRef) {
        //     this.dialogRef.close(null);
        // }

        this.close.emit(null);
    }
}
