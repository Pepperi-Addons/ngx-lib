import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'pep-snack-bar',
    styleUrls: ['./snack-bar.component.scss', './snack-bar.component.theme.scss'],
    templateUrl: './snack-bar.component.html',
})
export class PepSnackBarComponent {
    @Input() title: string;
    @Input() message: string;

    @Output()
    closeClick: EventEmitter<void> = new EventEmitter<void>();
    
    constructor() {
        //
    }

    onCloseClicked(event: any): void {
        this.closeClick.emit();
    }
}
