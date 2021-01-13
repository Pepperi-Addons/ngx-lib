import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pep-smart-filter-distinct-values',
    templateUrl: './smart-filter-distinct-values.component.html',
    styleUrls: ['./smart-filter-distinct-values.component.scss'],
})
export class PepSmartFilterDistinctValuesComponent implements OnInit {
    @Input() values = [];

    @Output() filterClear: EventEmitter<void> = new EventEmitter<void>();
    @Output() filterChange: EventEmitter<string[]> = new EventEmitter<
        string[]
    >();

    // readonly control = new FormControl('');

    constructor() {
        const i = 0;
    }

    ngOnInit() {
        const i = 0;
    }

    clear() {
        this.values = [];
        this.filterClear.emit();
    }

    apply() {
        this.filterChange.emit(this.values);
    }
}
