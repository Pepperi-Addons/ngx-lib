import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'pep-smart-filter-boolean',
    templateUrl: './smart-filter-boolean.component.html',
    styleUrls: ['./smart-filter-boolean.component.scss'],
})
export class PepSmartFilterBooleanComponent {
    @Input() id = '';
    @Input() value = false;

    @Output() filterClear: EventEmitter<void> = new EventEmitter<void>();
    @Output() filterChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    toggleChecked() {
        this.value = !this.value;
    }

    clear() {
        this.value = false;
        this.filterClear.emit();
    }

    apply() {
        this.filterChange.emit(this.value);
    }
}
