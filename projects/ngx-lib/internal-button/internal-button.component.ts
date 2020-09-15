import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import { GROUP_BUTTONS_VIEW_TYPE, PepperiGroupButton } from '@pepperi-addons/ngx-lib/group-buttons';

@Component({
    selector: 'pep-internal-button',
    templateUrl: './internal-button.component.html',
    styleUrls: ['./internal-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepperiInternalButtonComponent implements OnInit, OnChanges, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() formattedValue = '';
    @Input() label = '';
    @Input() referenceObjectInternalType: any;
    @Input() type = 'button'; // || 'reference' || 'listofobjects' || 'Agents' || 'ContactPersons' || 'Buyers', etc
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment = '0';
    @Input() rowSpan = 1;

    controlType = 'button';

    @Input() form: FormGroup = null;
    @Input() showTitle = true;
    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiForm;

    @Output() elementClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

    LAYOUT_TYPE = LAYOUT_TYPE;
    GROUP_BUTTONS_VIEW_TYPE = GROUP_BUTTONS_VIEW_TYPE;

    standAlone = false;
    createNewReference = false;
    referenceButtons: Array<PepperiGroupButton> = [
        { Value: '', Class: '', Callback: () => this.onButtonClicked(event), Icon: null },
        { Value: '', Class: 'caution', Callback: () => this.remove(event), Icon: 'system_bin' },
    ];

    constructor(
        private customizationService: CustomizationService,
        private renderer: Renderer2,
        private element: ElementRef) { }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
            this.formattedValue = this.formattedValue || this.value;
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
    }

    ngOnChanges(changes: any): void {
        if (this.type === 'reference') {
            this.createNewReference = this.value.length === 0;
            this.referenceButtons[0].Value = this.formattedValue;
        }
    }

    ngOnDestroy(): void {
        if (this.elementClicked) {
            this.elementClicked.unsubscribe();
        }
    }

    onButtonClicked(event): void {
        if (this.type === 'reference') {
            const valueArr = this.value.split('/');

            this.elementClicked.emit({
                apiName: this.key,
                eventWhich: event.which,
                value: valueArr[valueArr.length - 1], // .replace(/[^a-zA-Z0-9 ]/g, ''),
                referenceObjectInternalType: this.referenceObjectInternalType,
            });
        } else if (this.type === 'button' && true) {
            this.elementClicked.emit({
                apiName: this.key,
                eventWhich: event.which,
                value: this.value // should contain the program name
            });
        }
        else {
            this.elementClicked.emit({ apiName: this.key, eventWhich: event.which });
        }
    }

    hrefFunction(event): void {
        if (event.which === 1 /*|| event.which === 2*/) {
            this.onButtonClicked(event);
        }
    }

    openReferenceObjectInternal(event): void {
        this.elementClicked.emit({
            apiName: this.key,
            eventWhich: event.which,
            value: this.value,
            referenceObjectInternalType: this.referenceObjectInternalType
        });
    }

    remove(event): void {
        this.value = '';
        this.valueChanged.emit({ apiName: this.key, value: this.value });
    }
}
