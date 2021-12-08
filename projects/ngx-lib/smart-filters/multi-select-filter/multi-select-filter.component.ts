import {
    AfterViewInit,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BaseFilterComponent } from '../common/model/base-filter-component';
import {
    IPepSmartFilterOperator,
    PepSmartFilterOperators,
} from '../common/model/operator';
import { IPepSmartFilterDataValue } from '../common/model/filter';
import { IPepSmartFilterFieldOption } from '../common/model/field';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';

class PepMultiSelectFilterOption implements IPepSmartFilterFieldOption {
    value: string;
    count?: number;
    selected = false;
}

@Component({
    selector: 'pep-multi-select-filter',
    templateUrl: './multi-select-filter.component.html',
    styleUrls: ['./multi-select-filter.component.scss'],
})
export class PepMultiSelectFilterComponent
    extends BaseFilterComponent
    implements OnInit, AfterViewInit {
    options: PepMultiSelectFilterOption[] = [];
    filteredOptions$: Observable<any>;
    searchControl = new FormControl();

    @ViewChild('optionsContainer')
    optionsContainer: ElementRef;

    private readonly MAX_OPTIONS_TO_SHOW = 6.35;
    @ViewChild(VirtualScrollerComponent)
    private virtualScroller: VirtualScrollerComponent;

    numberOptionsToShowSearch = 10;

    ngOnInit() {
        super.ngOnInit;

        if (this.field.options?.length > 0) {
            this.options = this.field.options.map((opt) => {
                return { value: opt.value, count: opt.count, selected: false };
            });
        } else {
            this.searchControl.disable();
        }

        // Init the selected values from first value.
        const firstControl = this.firstControl;
        if (firstControl.value) {
            this.initOptionsSelectedValues(firstControl.value);
        }

        // Add subscription for the first value change to set the selected options.
        firstControl.valueChanges
            .pipe(this.getDestroyer(), distinctUntilChanged())
            .subscribe((selectedValues: string[]) => {
                this.initOptionsSelectedValues(selectedValues);
            });

        // Filter the options by the search control.
        this.filteredOptions$ = this.searchControl.valueChanges.pipe(
            this.getDestroyer(),
            startWith<any>(''),
            map((option) =>
                typeof option === 'string' ? option : option && option.value
            ),
            map((value) => (value ? this.filterOptions(value) : this.options))
        );

        // Each time the filter change.
        this.filteredOptions$.subscribe(
            (filterdOptions: PepMultiSelectFilterOption[]) => {
                this.calcOptionsHeight(filterdOptions.length);
                setTimeout(() => {
                    // 8 is the padding top of the multi-select-options
                    this.virtualScroller.scrollToPosition(-8);
                }, 125);
            }
        );
    }

    ngAfterViewInit(): void {
        // Calc for the first time.
        this.calcOptionsHeight(this.options.length);
    }

    initOptionsSelectedValues(selectedValues: string[]): void {
        this.options.forEach((opt) => {
            const isValueSelected =
                selectedValues && selectedValues.includes(opt.value);
            opt.selected = isValueSelected;
        });
    }

    private calcOptionsHeight(optionsCount: number) {
        if (this.optionsContainer) {
            const optionsToShow =
                optionsCount > this.MAX_OPTIONS_TO_SHOW
                    ? this.MAX_OPTIONS_TO_SHOW
                    : optionsCount;
            // optionsToShow * 2.25 is 1 option height + 1 is the padding top & bottom of the container.
            const optionsHeight = optionsToShow * 2.25 + 1 + 'rem';

            this.renderer.setStyle(
                this.optionsContainer.nativeElement,
                'height',
                optionsHeight
            );
        }
    }

    private filterOptions(value: string): any[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(
            (opt) =>
                opt.value &&
                opt.value.toLowerCase().includes(filterValue.toLowerCase())
        );
    }

    // Override
    getDefaultOperator(): IPepSmartFilterOperator {
        return PepSmartFilterOperators.In;
    }

    // Override
    getFilterValue(): IPepSmartFilterDataValue {
        const selectedValues = this.options
            .filter((opt) => opt.selected)
            .map((opt) => opt.value);
        const filterValue = {
            first: selectedValues,
        };

        return selectedValues.length > 0 ? filterValue : null;
    }

    // Override
    initFilter() {
        this.options.forEach((opt) => (opt.selected = false));
        this.searchControl.setValue('');
    }

    onOptionChange(
        option: PepMultiSelectFilterOption,
        event: MatCheckboxChange
    ) {
        option.selected = event.checked;
        this.firstControl.setValue(
            this.options.filter((opt) => opt.selected).map((opt) => opt.value),
            { emitEvent: false }
        );
        if (this.emitOnChange) {
            this.applyParentForm();
        }
    }
}
