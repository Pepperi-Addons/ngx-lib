import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss'],
    // host: { 'class': 'pepperi-grouped-field' },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepperiAddressComponent implements OnChanges, OnInit, OnDestroy {
    @Input() key = '';
    // @Input() value = '';
    @Input() formattedValue = '';
    @Input() label = '';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment = '0';
    @Input() rowSpan = 1;
    @Input() groupFields: Array<any>;

    @Input() form: FormGroup = null;
    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiForm;

    @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

    LAYOUT_TYPE = LAYOUT_TYPE;

    constructor(
        private element: ElementRef,
        private renderer: Renderer2
    ) { }

    ngOnInit(): void {
        this.renderer.addClass(this.element.nativeElement, 'pep-grouped-field');
    }

    ngOnChanges(changes): void {
        setTimeout(() => {
            const focusedFieldParent = this.groupFields.filter(groupField => groupField.lastFocusField)[0];
            if (focusedFieldParent) {
                focusedFieldParent.lastFocusField.focus();
            }
        }, 100);
    }

    ngOnDestroy(): void {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }

    // Not in use for material
    onBlur(e: any, apiName: string): void {
        const value = e.target ? e.target.value : e;
        this.changeValue({ apiName, value }, e.relatedTarget);
    }

    onValueChange(e: any, apiName: string): void {
        if (e.target) {
            const input = e.target ? e.target.value : e;
            this.changeValue({ apiName, value: input.value });
        } else {
            this.changeValue(e);
        }
    }

    changeValue(obj: any, lastFocusedField: any = null): void {
        const currentGroupField = this.groupFields.filter(groupField => groupField.key === obj.apiName)[0];

        if (currentGroupField.value !== obj.value) {
            // Set the value in the form controls
            if (this.form) {
                const formCtrl = this.form.get(this.key);

                if (formCtrl) {
                    formCtrl.get(obj.apiName).setValue(obj.value);
                }
            }

            this.valueChanged.emit({ apiName: obj.apiName, value: obj.value, lastFocusedField });
        }
    }
}
