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
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';

@Component({
    selector: 'pep-multi-select-filter',
    templateUrl: './multi-select-filter.component.html',
    styleUrls: ['./multi-select-filter.component.scss'],
})
export class PepMultiSelectFilterComponent
    extends BaseFilterComponent
    implements OnInit, AfterViewInit {
    filteredValues: Observable<any>;
    searchString = '';

    @ViewChild('optionsContainer')
    optionsContainer: ElementRef;

    // @ViewChild(VirtualScrollerComponent)
    // private virtualScroller: VirtualScrollerComponent;

    ngOnInit() {
        this.filteredValues = this.form.get('first').valueChanges.pipe(
            this.getDestroyer(),
            startWith<any>(''),
            map((value) =>
                typeof value === 'string' ? value : value && value.name
            ),
            map((name) =>
                name ? this.filterOptions(name) : this.field.options
            )
        );
    }

    ngAfterViewInit() {
        this.calcOptionsHeight();

        // this.virtualScroller.refresh();
    }

    private calcOptionsHeight() {
        const maxOptionsToShow = 15;
        const optionsToShow =
            this.field.options.length > maxOptionsToShow
                ? maxOptionsToShow
                : this.field.options.length;
        // optionsToShow * 2.25 is 1 option height + 1 is the padding top & bottom of the container.
        const optionsHeight = optionsToShow * 2.25 + 1 + 'rem';

        this.renderer.setStyle(
            this.optionsContainer.nativeElement,
            'height',
            optionsHeight
        );
    }

    private filterOptions(name: string): any[] {
        const filterValue = name.toLowerCase();
        return this.field.options.filter(
            (opt) =>
                opt.value &&
                opt.value.toLowerCase().includes(filterValue.toLowerCase())
        );
    }

    getDefaultOperator(): IPepSmartFilterOperator {
        return PepSmartFilterOperators.Equals;
    }

    getFilterValue(): IPepSmartFilterDataValue {
        const filterValue = { first: [] };

        return filterValue;
    }

    onSearchChanged(search: any) {
        debugger;
    }
}
