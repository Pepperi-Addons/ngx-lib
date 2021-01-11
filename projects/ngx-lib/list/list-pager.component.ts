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
    @Input() pageIndex = 0;
    @Input() length = 0;
    @Input() pageSize = DEFAULT_PAGE_SIZE;

    @Output()
    pagerChange: EventEmitter<IPepListPagerChangeEvent> = new EventEmitter<IPepListPagerChangeEvent>();

    constructor(private _changeDetectorRef: ChangeDetectorRef) {}

    nextPage(): void {
        if (!this.hasNextPage()) {
            return;
        }

        const previousPageIndex = this.pageIndex;
        this.pageIndex++;
        this._emitChangeEvent(previousPageIndex);
    }

    previousPage(): void {
        if (!this.hasPreviousPage()) {
            return;
        }

        const previousPageIndex = this.pageIndex;
        this.pageIndex--;
        this._emitChangeEvent(previousPageIndex);
    }

    firstPage(): void {
        if (!this.hasPreviousPage()) {
            return;
        }

        const previousPageIndex = this.pageIndex;
        this.pageIndex = 0;
        this._emitChangeEvent(previousPageIndex);
    }

    lastPage(): void {
        if (!this.hasNextPage()) {
            return;
        }

        const previousPageIndex = this.pageIndex;
        this.pageIndex = this.getNumberOfPages() - 1;
        this._emitChangeEvent(previousPageIndex);
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

    onValueChange(event: IPepFieldValueChangeEvent) {
        const newIndex = coerceNumberProperty(event.value);
        const previousPageIndex = this.pageIndex;

        if (newIndex >= 1 && newIndex <= this.getNumberOfPages()) {
            this.pageIndex = newIndex - 1;
        } else {
            this.pageIndex = 0;
        }

        this._changeDetectorRef.markForCheck();

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
