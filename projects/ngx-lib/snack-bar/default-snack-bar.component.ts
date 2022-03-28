import { Component, EventEmitter, Inject, Output, ViewEncapsulation } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { PepSnackBarData } from './snack-bar.model';

@Component({
    templateUrl: './default-snack-bar.component.html',
    styleUrls: ['./default-snack-bar.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PepDefaultSnackBarComponent {
    @Output()
    closeClick: EventEmitter<void> = new EventEmitter<void>();
    
    constructor(
        @Inject(MAT_SNACK_BAR_DATA) public data: PepSnackBarData,
        public snackBarRef: MatSnackBarRef<PepDefaultSnackBarComponent>
    ) {}

    onCloseClicked(event): void {
        this.closeClick.emit();
    }

}
