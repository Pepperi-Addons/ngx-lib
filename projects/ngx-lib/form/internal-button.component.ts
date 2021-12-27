import {
    Component,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    Renderer2,
    ElementRef,
    OnDestroy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    PepLayoutType,
    PepCustomizationService,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    IPepFieldClickEvent,
    PepInternalButtonFieldType,
    PepInternalButtonField,
} from '@pepperi-addons/ngx-lib';
import {
    PepButton,
    IPepButtonClickEvent,
} from '@pepperi-addons/ngx-lib/button';
import { pepIconSystemBin } from '@pepperi-addons/ngx-lib/icon';

@Component({
    selector: 'pep-internal-button',
    templateUrl: './internal-button.component.html',
    styleUrls: ['./internal-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepInternalButtonComponent
    implements OnInit, OnChanges, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() formattedValue = '';
    @Input() label = '';
    @Input() referenceObjectInternalType: any;
    @Input() type: PepInternalButtonFieldType = 'button';
    @Input() mandatory = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;

    private _visible = true;
    @Input()
    set visible(visible: boolean) {
        this._visible = visible;
        if (visible) {
            this.renderer.removeClass(
                this.element.nativeElement,
                'hidden-element'
            );
        } else {
            this.renderer.addClass(
                this.element.nativeElement,
                'hidden-element'
            );
        }
    }
    get visible(): boolean {
        return this._visible;
    }

    controlType = 'button';

    @Input() form: FormGroup = null;
    @Input() showTitle = true;
    @Input() layoutType: PepLayoutType = 'form';

    @Output()
    elementClick: EventEmitter<IPepFieldClickEvent> = new EventEmitter<IPepFieldClickEvent>();
    @Output()
    valueChange: EventEmitter<string> = new EventEmitter<string>();

    // standAlone = false;
    createNewReference = false;
    referenceButtons: Array<PepButton> = [
        {
            key: 'action',
            callback: (action: IPepButtonClickEvent) =>
                this.onButtonClicked(action.event),
        },
        {
            key: 'delete',
            callback: (action: IPepButtonClickEvent) => this.remove(),
            classNames: 'caution',
            iconName: pepIconSystemBin.name,
        },
    ];

    constructor(
        private customizationService: PepCustomizationService,
        private renderer: Renderer2,
        private element: ElementRef
    ) { }

    ngOnInit(): void {
        // if (this.form === null) {
        //     this.standAlone = true;
        //     // this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.mandatory, this.readonly, this.disabled);
        //     const pepField = new PepInternalButtonField({
        //         key: this.key,
        //         value: this.value,
        //         mandatory: this.mandatory,
        //         readonly: this.readonly,
        //         disabled: this.disabled,
        //     });
        //     this.form = this.customizationService.getDefaultFromGroup(pepField);

        //     this.formattedValue = this.formattedValue || this.value;
        //     this.renderer.addClass(
        //         this.element.nativeElement,
        //         PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
        //     );
        // }
    }

    ngOnChanges(changes: any): void {
        if (this.type === 'reference') {
            this.createNewReference = this.value.length === 0;
            this.referenceButtons[0].value = this.formattedValue;
        }
    }

    ngOnDestroy(): void {
        //
    }

    // groupButtonClicked(action: IPepButtonClickEvent): void {
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
                value: valueArr[valueArr.length - 1], // .replace(/[^a-zA-Z0-9 ]/g, ''),
                controlType: this.controlType,
                eventWhich: event.which,
                otherData: this.referenceObjectInternalType,
            });
        } else if (this.type === 'button' && true) {
            this.elementClick.emit({
                key: this.key,
                value: this.value, // should contain the program name
                controlType: this.controlType,
                eventWhich: event.which,
            });
        } else {
            this.elementClick.emit({
                key: this.key,
                controlType: this.controlType,
                eventWhich: event.which,
            });
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
            value: this.value,
            controlType: this.controlType,
            eventWhich: event.which,
            otherData: this.referenceObjectInternalType,
        });
    }

    remove(): void {
        this.value = '';
        this.valueChange.emit(this.value);
    }
}
