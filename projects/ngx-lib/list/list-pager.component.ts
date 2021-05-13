import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Injectable,
    Input,
    Output,
} from '@angular/core';
import { IPepFieldValueChangeEvent } from '@pepperi-addons/ngx-lib';
import { DEFAULT_PAGE_SIZE } from './list.model';

export class IPepListPagerChangeEvent {
    pageIndex: number;
    previousPageIndex: number;
    pageSize: number;
    length: number;
}

@Component({
    selector: 'pep-list-pager',
    templateUrl: './list-pager.component.html',
    styleUrls: ['./list-pager.component.scss'],
})
@Injectable()
export class PepListPagerComponent {
    @Input() disabled = false;
    private _pageIndex = 0;
    @Input()
    set pageIndex(value: number) {
        this.setPageIndex(value);
    }
    get pageIndex(): number {
        return this._pageIndex;
    }

    @Input() length = 0;
    @Input() pageSize = DEFAULT_PAGE_SIZE;

    @Output()
    pagerChange: EventEmitter<IPepListPagerChangeEvent> = new EventEmitter<IPepListPagerChangeEvent>();

    constructor(private _changeDetectorRef: ChangeDetectorRef) {}

    nextPage(): void {
        if (!this.hasNextPage()) {
            return;
        }

        this.setPageIndex(this.pageIndex + 1);
    }

    previousPage(): void {
        if (!this.hasPreviousPage()) {
            return;
        }

        this.setPageIndex(this.pageIndex - 1);
    }

    firstPage(): void {
        if (!this.hasPreviousPage()) {
            return;
        }

        this.setPageIndex(0);
    }

    lastPage(): void {
        if (!this.hasNextPage()) {
            return;
        }

        this.setPageIndex(this.getNumberOfPages() - 1);
    }

    hasPreviousPage(): boolean {
        return this.pageIndex >= 1 && this.pageSize != 0;
    }

    hasNextPage(): boolean {
        const maxPageIndex = this.getNumberOfPages() - 1;
        return this.pageIndex < maxPageIndex && this.pageSize != 0;
    }

    getNumberOfPages(): number {
        if (!this.pageSize) {
            return 0;
        }

        return Math.ceil(this.length / this.pageSize);
    }

    /** Checks whether the buttons for going forwards should be disabled. */
    _nextButtonsDisabled() {
        return this.disabled || !this.hasNextPage();
    }

    /** Checks whether the buttons for going backwards should be disabled. */
    _previousButtonsDisabled() {
        return this.disabled || !this.hasPreviousPage();
    }

    onValueChange(value: string) {
        const pageNumber = coerceNumberProperty(value);
        this.setPageIndex(pageNumber - 1); // - 1 to convert number into index.
    }

    private setPageIndex(newIndex: number) {
        const previousPageIndex = this.pageIndex;

        if (newIndex >= 0 && newIndex < this.getNumberOfPages()) {
            this._pageIndex = newIndex;
        } else {
            this._pageIndex = 0;
        }

        if (this.pageIndex !== previousPageIndex) {
            this._emitChangeEvent(previousPageIndex);
        }
    }

    /** Emits an event notifying that a change of the paginator's properties has been triggered. */
    private _emitChangeEvent(previousPageIndex: number) {
        this.pagerChange.emit({
            previousPageIndex,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            length: this.length,
        });
    }
}
