import { CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { IPepDraggableItem, PepDraggableItemPlaceholderType, PepDraggableItemsTitleType } from './draggable-items.model';
import { PepSizeType } from '@pepperi-addons/ngx-lib';
@Component({
    selector: 'pep-draggable-items',
    templateUrl: './draggable-items.component.html',
    styleUrls: ['./draggable-items.component.scss', './draggable-items.component.theme.scss']
})
export class PepDraggableItemsComponent implements OnInit, OnDestroy {
    @Input() containerId = 'draggable-container';
    @Input() showSearch = false;
    @Input() title = '';
    @Input() titleType: PepDraggableItemsTitleType = 'regular';
    //! 'md' should be the default
    @Input() titleSizeType: PepSizeType = 'xl';
    
    //! This shouldn't be an option 
    //! And it should be 'weak'
    @Input() itemPlaceholderType: PepDraggableItemPlaceholderType = 'none';

    @Input() dropAreaIds = [];

    private _items: Array<IPepDraggableItem> = [];
    @Input()
    set items(value: Array<IPepDraggableItem>) {
        this._items = value;

        if (this.items?.length > 0) {
            this.searchControl.enable();
        } else {
            this.searchControl.disable();
        }
    }
    get items(): Array<IPepDraggableItem> {
        return this._items;
    }

    @Output() itemDragStarted: EventEmitter<CdkDragStart<IPepDraggableItem>> = new EventEmitter<CdkDragStart<IPepDraggableItem>>();
    @Output() itemDragEnded: EventEmitter<CdkDragEnd<IPepDraggableItem>> = new EventEmitter<CdkDragEnd<IPepDraggableItem>>();

    filteredItems$: Observable<any>;
    searchControl = new FormControl();
    numberItemsToShowSearch = 5;
    private readonly _destroyed: Subject<void>;

    constructor() {
        //
        this._destroyed = new Subject();
    }

    private filterItems(value: string): any[] {
        const filterValue = value.toLowerCase();
        return this.items.filter(
            (opt) =>
                opt.title &&
                opt.title.toLowerCase().includes(filterValue.toLowerCase())
        );
    }

    private changeCursorOnDragStart() {
        document.body.classList.add('inheritCursors');
        document.body.style.cursor = 'grabbing';
    }

    private changeCursorOnDragEnd() {
        document.body.classList.remove('inheritCursors');
        document.body.style.cursor = 'unset';
    }

    protected getDestroyer() {
        return takeUntil(this._destroyed);
    }

    ngOnInit(): void {
        // If there is no item disable the search.
        if (this.items.length === 0) {
            this.searchControl.disable();
        }

        // Filter the draggableItems by the search control.
        this.filteredItems$ = this.searchControl.valueChanges.pipe(
            this.getDestroyer(),
            startWith<any>(''),
            map((option) =>
                typeof option === 'string' ? option : option && option.value
            ),
            map((value) => (value ? this.filterItems(value) : this.items))
        );
    }

    ngOnDestroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
    }

    onDragStart(event: CdkDragStart) {
        this.changeCursorOnDragStart();
        this.itemDragStarted.emit(event);
    }

    onDragEnd(event: CdkDragEnd) {
        this.changeCursorOnDragEnd();
        this.itemDragEnded.emit(event);
    }
}
