import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    OnDestroy,
    Renderer2,
    ElementRef,
    Optional,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TranslateService } from '@ngx-translate/core';
import {
    PepCustomizationService,
    PepLayoutType,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    IPepFieldValueChangeEvent,
    PepCheckboxFieldType,
    PepCheckboxField,
} from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepCheckboxComponent implements OnInit, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() label = '';

    private _type: PepCheckboxFieldType = 'checkbox'; // || 'booleanText'
    @Input()
    set type(value: PepCheckboxFieldType) {
        this._type = value;

        if (this._type === 'booleanText') {
            try {
                if (typeof this.additionalValue === 'string') {
                    this.additionalValueObject = JSON.parse(
                        this.additionalValue
                    );
                } else {
                    this.additionalValueObject = this.additionalValue;
                }
            } catch {
                this.additionalValueObject = {
                    CheckedText: this.translate.instant('CHECKBOX.TRUE'),
                    UncheckedText: this.translate.instant('CHECKBOX.FALSE'),
                };
            }
        }
    }
    get type(): PepCheckboxFieldType {
        return this._type;
    }

    @Input() mandatory = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;
    @Input() additionalValue: any;

    controlType = 'checkbox';

    @Input() form: FormGroup = null;
    @Input() isActive = false;
    @Input() showTitle = true;
    @Input() renderTitle = true;
    @Input() layoutType: PepLayoutType = 'form';

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

    @Output()
    valueChange: EventEmitter<string> = new EventEmitter<string>();

    standAlone = false;

    additionalValueObject: any;
    public jsonLib = JSON;

    constructor(
        private renderer: Renderer2,
        private customizationService: PepCustomizationService,
        private element: ElementRef,
        private translate: TranslateService
    ) { }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;

            // this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.mandatory, this.readonly, this.disabled, 0, null, true);
            const pepField = new PepCheckboxField({
                key: this.key,
                value: this.value,
                mandatory: this.mandatory,
                readonly: this.readonly,
                disabled: this.disabled,
            });
            this.form = this.customizationService.getDefaultFromGroup(pepField);

            this.renderer.addClass(
                this.element.nativeElement,
                PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );
        }
    }

    ngOnDestroy(): void {
    }

    onMaterialChange(e: MatCheckboxChange): void {
        this.changeValue(e.checked);
    }

    toggleChecked(event: Event): void {
        if (!this.disabled) {
            const isChecked: boolean =
                this.value === 'true' || this.value === '1' ? true : false;
            const newValue = !isChecked;
            this.value = newValue.toString();
            this.changeValue(newValue);
        }
    }

    changeValue(value: any): void {
        this.customizationService.updateFormFieldValue(
            this.form,
            this.key,
            value
        );
        this.valueChange.emit(value.toString());
    }
}
