import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PepLayoutType, PepHorizontalAlignment, DEFAULT_HORIZONTAL_ALIGNMENT, PepFieldValueChangedData } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepAddressComponent implements OnChanges, OnInit, OnDestroy {
    @Input() key = '';
    // @Input() value = '';
    @Input() formattedValue = '';
    @Input() label = '';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;
    @Input() groupFields: Array<any>;

    @Input() form: FormGroup = null;
    @Input() layoutType: PepLayoutType = 'form';

    @Output() valueChange: EventEmitter<PepFieldValueChangedData> = new EventEmitter<PepFieldValueChangedData>();

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
        if (this.valueChange) {
            this.valueChange.unsubscribe();
        }
    }

    // Not in use for material
    onBlur(e: any, key: string): void {
        const value = e.target ? e.target.value : e;
        this.changeValue({ key, value }, e.relatedTarget);
    }

    onValueChange(e: any, key: string): void {
        if (e.target) {
            const input = e.target ? e.target.value : e;
            this.changeValue({ key, value: input.value });
        } else {
            this.changeValue(e);
        }
    }

    changeValue(field: any, lastFocusedField: any = null): void {
        const currentGroupField = this.groupFields.filter(groupField => groupField.key === field.key)[0];

        if (currentGroupField.value !== field.value) {
            // Set the value in the form controls
            if (this.form) {
                const formCtrl = this.form.get(this.key);

                if (formCtrl) {
                    formCtrl.get(field.key).setValue(field.value);
                }
            }

            this.valueChange.emit({ key: field.key, value: field.value, lastFocusedField });
        }
    }
}
