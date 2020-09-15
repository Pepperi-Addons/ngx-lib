import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CustomizationService, LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepperiCheckboxComponent implements OnInit, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() label = '';
    @Input() type = 'checkbox'; // || 'booleanText'
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment = '0';
    @Input() rowSpan = 1;
    @Input() additionalValue: any;

    controlType = 'checkbox';

    @Input() form: FormGroup = null;
    @Input() isActive = false;
    @Input() showTitle = true;
    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiForm;

    @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

    LAYOUT_TYPE = LAYOUT_TYPE;
    standAlone = false;

    additionalValueObject: any;
    public jsonLib = JSON;

    constructor(
        private renderer: Renderer2,
        private customizationService: CustomizationService,
        public translate: TranslateService,
        private element: ElementRef
    ) { }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled, 0, '', true);

            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }

        if (this.type === 'booleanText') {
            try {
                if (typeof this.additionalValue === 'string') {
                    this.additionalValueObject = JSON.parse(this.additionalValue);
                } else {
                    this.additionalValueObject = this.additionalValue;
                }
            } catch {
                this.additionalValueObject = {
                    CheckedText: this.translate.instant('CHECKBOX.TRUE'),
                    UncheckedText: this.translate.instant('CHECKBOX.FALSE')
                };
            }
        }
    }

    ngOnDestroy(): void {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }

    onMaterialChange(e: any): void {
        this.changeValue(e.checked);
    }

    toggleChecked(event: any): void {
        if (!this.disabled) {
            const isChecked: boolean = this.value === 'true' || this.value === '1' ? true : false;
            this.value = (!isChecked).toString();
            this.changeValue(this.value);
        }
    }

    changeValue(value: any): void {
        this.customizationService.updateFormFieldValue(this.form, this.key, value);
        this.valueChanged.emit({ apiName: this.key, value });
    }
}
