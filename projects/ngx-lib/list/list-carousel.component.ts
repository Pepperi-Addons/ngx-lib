import { Component, OnInit, Injectable, Input, Output, EventEmitter, ViewChild,
    ElementRef, Renderer2, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ObjectSingleData, UIControl } from '@pepperi-addons/ngx-lib';
import { PepCarouselComponent } from '@pepperi-addons/ngx-lib/carousel';

@Component({
    selector: 'pep-list-carousel',
    templateUrl: './list-carousel.component.html',
    styleUrls: ['./list-carousel.component.scss']
})
@Injectable()
export class PepListCarouselComponent implements OnInit, OnDestroy {
    @Input() duration: number = 500;
    @Input() uiControl: UIControl = null;
    @Input() items: Array<ObjectSingleData>; 
    @Input() itemSize: 'xs' | 'sm' | 'md' = 'xs';

    @Output() itemClick: EventEmitter<ObjectSingleData> = new EventEmitter<ObjectSingleData>();
    
    @ViewChild('carousel', {read: PepCarouselComponent}) carousel: PepCarouselComponent;
    
    prevDisabled = false;
    nextDisabled = false;

    constructor(
        private cd: ChangeDetectorRef,
        private renderer: Renderer2
    ) { }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        if (this.itemClick) {
            this.itemClick.unsubscribe();
        }
    }

    itemClicked(objectSingleData: ObjectSingleData): void {
        this.itemClick.emit(objectSingleData);
    }

    moveLeft() {
        // this.carousel.moveLeft();
        this.carousel.moveTo(this.carousel.currIndex - 3);
    }
    
    moveRight() {
        // this.carousel.moveRight();
        this.carousel.moveTo(this.carousel.currIndex + 3);
    }
    
    moveTo(index) {
        this.carousel.moveTo(index);
    }

    onReachesLeftBound(event) {
        this.prevDisabled = event;
    }

    onReachesRightBound(event) {
        this.nextDisabled = event;
    }
}
