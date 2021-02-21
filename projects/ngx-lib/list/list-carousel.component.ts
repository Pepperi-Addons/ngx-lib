import {
    Component,
    Injectable,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    Renderer2,
    ChangeDetectorRef,
    OnDestroy,
    AfterViewInit,
} from '@angular/core';
import {
    ObjectsDataRow,
    UIControl,
    PepLayoutService,
    PepScreenSizeType,
} from '@pepperi-addons/ngx-lib';
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
export class PepListCarouselComponent implements AfterViewInit, OnDestroy {
    @Input() duration = 1000;
    @Input() layout: UIControl = null;
    @Input() itemsToMove = 3;
    @Input() lockItemInnerEvents = true;
    @Input() hideArrowsInSmallScreen = true;

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
    screenSize: PepScreenSizeType;
    PepScreenSizeType = PepScreenSizeType;
    // deviceHasMouse = false;

    constructor(public layoutService: PepLayoutService) {
        // this.deviceHasMouse = this.layoutService.getDeviceHasMouse();
    }

    ngAfterViewInit(): void {
        this.layoutService.onResize$.subscribe((size: PepScreenSizeType) => {
            this.screenSize = size;
        });

        // this.layoutService.onMouseOver$.subscribe((deviceHasMouse: boolean) => {
        //     this.deviceHasMouse = deviceHasMouse;
        // });
    }

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

    moveTo(index: number) {
        if (this.carousel) {
            this.carousel.moveTo(index);
        }
    }

    onReachesLeftBound(event: boolean) {
        this.prevDisabled = event;
    }

    onReachesRightBound(event: boolean) {
        this.nextDisabled = event;
    }
}
