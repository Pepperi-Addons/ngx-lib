import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ElementRef,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    ViewChild,
    AfterViewInit,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PepInternalCaruselService } from './internal-carusel.service';

import {
    PepLayoutType,
    UIControl,
    PepCustomizationService,
    ObjectsDataRow,
    PepInternalCaruselField,
    PepLayoutService,
    PepScreenSizeType,
} from '@pepperi-addons/ngx-lib';
import {
    IPepFormFieldClickEvent,
    IPepFormFieldValueChangeEvent,
} from './form.model';
import { PepQuantitySelectorComponent } from '@pepperi-addons/ngx-lib/quantity-selector';
import { PepCarouselComponent } from '@pepperi-addons/ngx-lib/carousel';

@Component({
    selector: 'pep-internal-carusel',
    templateUrl: './internal-carusel.component.html',
    styleUrls: ['./internal-carusel.component.scss'],
    providers: [PepInternalCaruselService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepInternalCaruselComponent implements OnInit, AfterViewInit {
    @ViewChild('carousel', { read: PepCarouselComponent })
    carousel: PepCarouselComponent;

    private _field: any;
    @Input()
    set field(value: any) {
        this._field = value;
        const caruselField = this._field as PepInternalCaruselField;

        if (caruselField && caruselField.pageInfo) {
            this.layout = caruselField.pageInfo.UIControl;
            this.items = caruselField.pageInfo.Rows;
        }
    }
    get field(): any {
        return this._field;
    }

    @Input() layoutType: PepLayoutType = 'form';

    @Output()
    internalFormFieldChange: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    internalFormFieldClick: EventEmitter<IPepFormFieldClickEvent> = new EventEmitter<IPepFormFieldClickEvent>();

    private _items: Array<any> = null;
    set items(value: Array<any>) {
        this._items = value;
        // this.moveTo(0);
    }
    get items() {
        return this._items;
    }

    layout: any = null;
    duration = 1000;

    private itemsToMove = 3;

    prevDisabled = false;
    nextDisabled = false;
    screenSize: PepScreenSizeType;
    PepScreenSizeType = PepScreenSizeType;

    constructor(
        protected fb: FormBuilder,
        private layoutService: PepLayoutService,
        private internalCaruselService: PepInternalCaruselService
    ) { }

    ngOnInit(): void {
        //
    }

    ngAfterViewInit(): void {
        this.layoutService.onResize$.subscribe((size: PepScreenSizeType) => {
            this.screenSize = size;
        });
    }

    onCustomizeObjectChanged(
        customizeObjectChangedData: IPepFormFieldValueChangeEvent
    ): void {
        this.internalCaruselService.emitEvent(customizeObjectChangedData.uiObjectKey, customizeObjectChangedData.key, customizeObjectChangedData.value, 'SetFieldValue', () => {
            this.internalFormFieldChange.emit(customizeObjectChangedData);
        });
    }

    onCustomizeFieldClick(fieldClickEvent: IPepFormFieldClickEvent): void {
        let handledEvent = false;

        // For the new custom form, the plus and minus events transform in the IPepFormFieldValueChangeEvent
        if (fieldClickEvent.controlType === 'qs') {
            if (fieldClickEvent.value === PepQuantitySelectorComponent.PLUS) {
                handledEvent = true;
                this.internalCaruselService.emitEvent(fieldClickEvent.uiObjectKey, fieldClickEvent.key, '', 'IncrementFieldValue', () => {
                    this.internalFormFieldChange.emit({});
                });

            } else if (fieldClickEvent.value === PepQuantitySelectorComponent.MINUS) {
                handledEvent = true;
                this.internalCaruselService.emitEvent(fieldClickEvent.uiObjectKey, fieldClickEvent.key, '', 'DecrementFieldValue', () => {
                    this.internalFormFieldChange.emit({});
                });
            }
        }

        if (!handledEvent) {
            this.internalFormFieldClick.emit(fieldClickEvent);
        }
    }

    moveLeft() {
        const indexToMove = Math.max(
            this.carousel.currIndex - this.itemsToMove,
            0
        );
        this.moveTo(indexToMove);
    }

    moveRight() {
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