import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    selector: 'pep-snack-bar',
    styleUrls: ['./snack-bar.component.scss', './snack-bar.component.theme.scss'],
    templateUrl: './snack-bar.component.html',
})
export class PepSnackBarComponent {
    @Input() snackBarRef: MatSnackBarRef<any>;
    @Input() title: string;

    @Output()
    closeClick: EventEmitter<void> = new EventEmitter<void>();
    
    constructor() {
        //
    }

    onCloseClicked(event: any): void {
        this.snackBarRef?.dismiss();
        this.closeClick.emit();
    }
}
