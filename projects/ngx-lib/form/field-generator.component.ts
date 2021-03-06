import {
    Component,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    OnDestroy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    PepLayoutType,
    IPepFieldValueChangeEvent,
    IPepFieldClickEvent,
} from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-field-generator',
    templateUrl: './field-generator.component.html',
    styleUrls: ['./field-generator.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepFieldGeneratorComponent implements OnChanges, OnDestroy {
    @Input() field: any;
    @Input() isActive = false;
    @Input() uid: any = null;
    @Input() form: FormGroup;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() showTitle = true;

    @Input() checkForChanges: any = null;
    @Output()
    valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();
    @Output() childChange: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    formValidationChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    elementClick: EventEmitter<IPepFieldClickEvent> = new EventEmitter<IPepFieldClickEvent>();
    @Output() childClick: EventEmitter<any> = new EventEmitter<any>();

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

    ngOnDestroy(): void {
        // if (this.valueChange) {
        //     this.valueChange.unsubscribe();
        // }
        // if (this.formValidationChange) {
        //     this.formValidationChange.unsubscribe();
        // }
        // if (this.childChange) {
        //     this.childChange.unsubscribe();
        // }
        // if (this.elementClick) {
        //     this.elementClick.unsubscribe();
        // }
        // if (this.childClick) {
        //     this.childClick.unsubscribe();
        // }
    }

    onValueChanged(valueChange: IPepFieldValueChangeEvent): void {
        this.valueChange.emit(valueChange);
    }

    onChildChanged(childChange: any): void {
        this.childChange.emit(childChange);
    }

    onFormValidationChanged(formValidationChange: any): void {
        this.formValidationChange.emit(formValidationChange);
    }

    onClick(fieldClicked: any): void {
        this.elementClick.emit(fieldClicked);
    }

    onChildClick(childClick: any): void {
        this.childClick.emit(childClick);
    }

    ngOnChanges(changes: any): void {
        // debugger;
        // For testing.
        // this.field.disabled = this.field.readonly = false;
    }
}
