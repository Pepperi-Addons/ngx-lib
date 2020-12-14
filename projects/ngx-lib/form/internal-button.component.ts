import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PepLayoutType, CustomizationService, PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT, PepFieldValueChangedData, PepFieldClickedData,
    PepInternalButtonFieldType,
    PepInternalButtonField} from '@pepperi-addons/ngx-lib';
import { PepButton, PepButtonClick } from '@pepperi-addons/ngx-lib/button';
import { pepIconSystemBin } from '@pepperi-addons/ngx-lib/icon';

@Component({
    selector: 'pep-internal-button',
    templateUrl: './internal-button.component.html',
    styleUrls: ['./internal-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepInternalButtonComponent implements OnInit, OnChanges, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() formattedValue = '';
    @Input() label = '';
    @Input() referenceObjectInternalType: any;
    @Input() type: PepInternalButtonFieldType = 'button';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;

    controlType = 'button';

    @Input() form: FormGroup = null;
    @Input() showTitle = true;
    @Input() layoutType: PepLayoutType = 'form';

    @Output() elementClick: EventEmitter<PepFieldClickedData> = new EventEmitter<PepFieldClickedData>();
    @Output() valueChange: EventEmitter<PepFieldValueChangedData> = new EventEmitter<PepFieldValueChangedData>();

    standAlone = false;
    createNewReference = false;
    referenceButtons: Array<PepButton> = [
        { key: 'action', callback: (action: PepButtonClick) => this.onButtonClicked(action.event) },
        { key: 'delete', callback: (action: PepButtonClick) => this.remove(), class: 'caution', icon: pepIconSystemBin.name }
    ];

    constructor(
        private customizationService: CustomizationService,
        private renderer: Renderer2,
        private element: ElementRef) { }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;
            // this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
            const pepField = new PepInternalButtonField({
                key: this.key,
                value: this.value,
                required: this.required,
                readonly: this.readonly,
                disabled: this.disabled
            });
            this.form = this.customizationService.getDefaultFromGroup(pepField);

            this.formattedValue = this.formattedValue || this.value;
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
    }

    ngOnChanges(changes: any): void {
        if (this.type === 'reference') {
            this.createNewReference = this.value.length === 0;
            this.referenceButtons[0].value = this.formattedValue;
        }
    }

    ngOnDestroy(): void {
        if (this.elementClick) {
            this.elementClick.unsubscribe();
        }
    }

    // groupButtonClicked(action: PepButtonClick): void {
    //     if (action.source.key === 'action') {
    //         this.onButtonClicked(action.event);
    //     } else if (action.source.key === 'delete') {
    //         this.remove();
    //     }
    // }

    onButtonClicked(event): void {
        if (this.type === 'reference') {
            const valueArr = this.value.split('/');

            this.elementClick.emit({
                key: this.key,
                eventWhich: event.which,
                value: valueArr[valueArr.length - 1], // .replace(/[^a-zA-Z0-9 ]/g, ''),
                otherData: this.referenceObjectInternalType,
            });
        } else if (this.type === 'button' && true) {
            this.elementClick.emit({
                key: this.key,
                eventWhich: event.which,
                value: this.value // should contain the program name
            });
        }
        else {
            this.elementClick.emit({ key: this.key, eventWhich: event.which });
        }
    }

    hrefFunction(event): void {
        if (event.which === 1 /*|| event.which === 2*/) {
            this.onButtonClicked(event);
        }
    }

    openReferenceObjectInternal(event): void {
        this.elementClick.emit({
            key: this.key,
            eventWhich: event.which,
            value: this.value,
            otherData: this.referenceObjectInternalType
        });
    }

    remove(): void {
        this.value = '';
        this.valueChange.emit({ key: this.key, value: this.value });
    }
}