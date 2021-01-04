import {
    Component,
    OnInit,
    Injectable,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    Renderer2,
    ChangeDetectorRef,
    OnDestroy,
} from '@angular/core';
import { ObjectsDataRow, UIControl } from '@pepperi-addons/ngx-lib';
import { PepCarouselComponent } from '@pepperi-addons/ngx-lib/carousel';

export type PepListCarouselSizeType = 'xs' | 'sm' | 'md';

export interface IPepListCarouselItemClickEvent {
    source: ObjectsDataRow;
}

@Component({
    selector: 'pep-list-carousel',
    templateUrl: './list-carousel.component.html',
    styleUrls: ['./list-carousel.component.scss'],
})
@Injectable()
export class PepListCarouselComponent implements OnInit, OnDestroy {
    @Input() duration = 500;
    @Input() layout: UIControl = null;
    @Input() itemsToMove = 3;

    private _items: Array<ObjectsDataRow> = null;
    @Input()
    set items(value: Array<ObjectsDataRow>) {
        this._items = value;
        this.moveTo(0);
    }
    get items() {
        return this._items;
    }

    private _itemSize: PepListCarouselSizeType = 'xs';
    @Input()
    set itemSize(value: PepListCarouselSizeType) {
        this._itemSize = value;
        this.moveTo(0);
    }
    get itemSize() {
        return this._itemSize;
    }

    @Output()
    itemClick: EventEmitter<IPepListCarouselItemClickEvent> = new EventEmitter<IPepListCarouselItemClickEvent>();

    @ViewChild('carousel', { read: PepCarouselComponent })
    carousel: PepCarouselComponent;

    prevDisabled = false;
    nextDisabled = false;

    constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {}

    ngOnInit(): void {}

    ngOnDestroy(): void {
        if (this.itemClick) {
            this.itemClick.unsubscribe();
        }
    }

    itemClicked(item: ObjectsDataRow): void {
        this.itemClick.emit({ source: item });
    }

    moveLeft() {
        // this.carousel.moveLeft();
        const indexToMove = Math.max(
            this.carousel.currIndex - this.itemsToMove,
            0
        );
        this.moveTo(indexToMove);
    }

    moveRight() {
        // this.carousel.moveRight();
        const indexToMove = Math.min(
            this.carousel.currIndex + this.itemsToMove,
            this.items.length
        );
        this.moveTo(indexToMove);
    }

    moveTo(index) {
        if (this.carousel) {
            this.carousel.moveTo(index);
        }
    }

    onReachesLeftBound(event) {
        this.prevDisabled = event;
    }

    onReachesRightBound(event) {
        this.nextDisabled = event;
    }
}
