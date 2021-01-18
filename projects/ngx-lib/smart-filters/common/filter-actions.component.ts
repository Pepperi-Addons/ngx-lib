import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'pep-filter-actions',
    templateUrl: './filter-actions.component.html',
    styleUrls: ['./filter-actions.component.scss'],
})
export class PepFilterActionsComponent {
    @Input() form: FormGroup;

    @Output() clearClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() applyClick: EventEmitter<boolean> = new EventEmitter<boolean>();

    clear() {
        this.clearClick.emit();
    }

    apply() {
        this.applyClick.emit();
    }
}
