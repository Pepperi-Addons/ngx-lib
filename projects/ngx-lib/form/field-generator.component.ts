import {
    Component,
    AfterViewInit,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    ViewContainerRef,
    ComponentFactoryResolver,
    OnDestroy,
    ComponentRef,
    ComponentFactory,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    PepFieldBase,
    PepLayoutType,
    IPepFieldValueChangeEvent,
    IPepFieldClickEvent,
} from '@pepperi-addons/ngx-lib';
import { IPepFormFieldClickEvent, IPepFormFieldValueChangeEvent } from './form.model';


@Component({
    selector: 'pep-field-generator',
    templateUrl: './field-generator.component.html',
    styleUrls: ['./field-generator.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepFieldGeneratorComponent implements OnChanges, OnDestroy {      
    private _field: any;
    @Input()
    set field(value: any) {
        this._field = value;       
    }
    get field(): any {
        return this._field;
    }

    @Input() isActive = false;
    @Input() uid: any = null;
    @Input() form: FormGroup;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() showTitle = true;

    @Input() checkForChanges: any = null;
    @Output()
    valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();
    @Output()
    formValidationChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    elementClick: EventEmitter<IPepFieldClickEvent> = new EventEmitter<IPepFieldClickEvent>();

    @Output() internalFormFieldChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() internalFormFieldClick: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    formValueChange: EventEmitter<IPepFormFieldValueChangeEvent> = new EventEmitter<IPepFormFieldValueChangeEvent>();
    @Output()
    formFieldClick: EventEmitter<IPepFormFieldClickEvent> = new EventEmitter<IPepFormFieldClickEvent>();

    get isValid(): boolean {
        if (this.field.readonly || this.field.disabled) {
            return true;
        } else {
            const formControl = this.form && this.form.get(this.field.key);

            if (formControl) {
                return formControl.valid;
            } else {
                return false;
            }
        }
    }

    get isTouched(): boolean {
        const formControl = this.form && this.form.get(this.field.key);
        return formControl ? formControl.touched : false;
    }

    get isDirty(): boolean {
        const formControl = this.form && this.form.get(this.field.key);
        return formControl ? formControl.dirty : false;
    }

    onFileChanged(fileData: any, field: PepFieldBase) {
        const value = fileData ? JSON.stringify(fileData) : '';
        const fieldValueChange = {
            key: field.key,
            value: value,
            controlType: field.controlType,
        };
        this.valueChange.emit(fieldValueChange);
    }

    onAddressValueChanged(
        valueChange: IPepFieldValueChangeEvent,
        field: PepFieldBase
    ) {
        const fieldValueChange = {
            key: valueChange.key,
            value: valueChange.value,
            controlType: field.controlType,
        };
        this.valueChange.emit(fieldValueChange);
    }

    onValueChanged(value: any, field: PepFieldBase): void {
        const fieldValueChange = {
            key: field.key,
            value: value.toString(),
            controlType: field.controlType,
        };
        this.valueChange.emit(fieldValueChange);
    }

    onInternalFormFieldChanged(internalFormFieldChange: any): void {
        this.internalFormFieldChange.emit(internalFormFieldChange);
    }

    onFormValidationChanged(formValidationChange: any): void {
        this.formValidationChange.emit(formValidationChange);
    }

    onClick(fieldClicked: any): void {
        this.elementClick.emit(fieldClicked);
    }

    onInternalFormFieldClick(internalFormFieldClick: any): void {
        this.internalFormFieldClick.emit(internalFormFieldClick);
    }

    onFormValueChanged(event: IPepFormFieldValueChangeEvent): void {
        this.formValueChange.emit(event);
    }

    onFormFieldClick(event: IPepFormFieldClickEvent): void {
        this.formFieldClick.emit(event);
    }

    ngOnChanges(changes: any): void {
        // debugger;
        // For testing.
        // this.field.disabled = this.field.readonly = false;
    }

    ngOnDestroy(): void {
        //
    }
}
