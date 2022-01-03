import {
    Component,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    OnDestroy,
    Renderer2,
    ElementRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    PepLayoutType,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    IPepFieldValueChangeEvent,
} from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss', './address.component.theme.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepAddressComponent implements OnChanges, OnInit, OnDestroy {
    @Input() key = '';
    // @Input() value = '';
    @Input() formattedValue = '';
    @Input() label = '';
    @Input() mandatory = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;
    @Input() groupFields: Array<any>;

    @Input() form: FormGroup = null;
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
    addressValueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.renderer.addClass(this.element.nativeElement, 'pep-grouped-field');
    }

    ngOnChanges(changes): void {
        //
    }

    ngOnDestroy(): void {
        //
    }

    // Not in use anymore comment in 16.55.
    // onBlur(e: any, key: string): void {
    //     const value = e.target ? e.target.value : e;
    //     this.changeValue({ key, value }, e.relatedTarget);
    // }

    onValueChange(value: string, key: string): void {
        // if (e.target) {
        //     const input = e.target ? e.target.value : e;
        //     this.changeValue({ key, value: input.value });
        // } else {
        //     this.changeValue(e);
        // }

        const currentGroupField = this.groupFields.find((gf) => gf.key === key);

        if (currentGroupField && currentGroupField.value !== value) {
            // Set the value in the form controls
            if (this.form) {
                const formCtrl = this.form.get(this.key);

                if (formCtrl) {
                    formCtrl.get(key).setValue(value);
                }
            }

            this.addressValueChange.emit({
                key: key,
                value: value,
            });
        }
    }

    // changeValue(field: any): void {
    //     const currentGroupField = this.groupFields.filter(
    //         (groupField) => groupField.key === field.key
    //     )[0];

    //     if (currentGroupField.value !== field.value) {
    //         // Set the value in the form controls
    //         if (this.form) {
    //             const formCtrl = this.form.get(this.key);

    //             if (formCtrl) {
    //                 formCtrl.get(field.key).setValue(field.value);
    //             }
    //         }

    //         this.valueChange.emit({
    //             key: field.key,
    //             value: field.value,
    //         });
    //     }
    // }
}
