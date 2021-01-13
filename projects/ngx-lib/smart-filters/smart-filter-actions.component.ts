import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pep-smart-filter-actions',
    templateUrl: './smart-filter-actions.component.html',
    styleUrls: ['./smart-filter-actions.component.scss'],
})
export class PepSmartFilterActionsComponent {
    @Output() clearClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() applyClick: EventEmitter<boolean> = new EventEmitter<boolean>();

    clear() {
        this.clearClick.emit();
    }

    apply() {
        this.applyClick.emit();
    }
}
