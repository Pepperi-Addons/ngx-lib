import {
    Component, OnChanges, Input, Output, EventEmitter,
    ViewEncapsulation, ChangeDetectionStrategy, OnDestroy
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-field-generator',
    templateUrl: './field-generator.component.html',
    styleUrls: ['./field-generator.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepperiFieldGeneratorComponent implements OnChanges, OnDestroy {
    @Input() field: any;
    @Input() hasHeightLimit = false;
    @Input() isActive = false;
    @Input() objectId: any = null;
    @Input() form: FormGroup;
    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiForm;
    @Input() showTitle = true;

    @Input() checkForChanges: any = null;
    @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() childChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() formValidationChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() elementClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() notifyMenuItemClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() notifyChildClicked: EventEmitter<any> = new EventEmitter<any>();

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

    constructor() { }

    ngOnDestroy(): void {
        if (this.valueChanged) { this.valueChanged.unsubscribe(); }

        if (this.formValidationChanged) { this.formValidationChanged.unsubscribe(); }

        if (this.childChanged) { this.childChanged.unsubscribe(); }

        if (this.elementClicked) { this.elementClicked.unsubscribe(); }

        if (this.notifyMenuItemClicked) { this.notifyMenuItemClicked.unsubscribe(); }

        if (this.notifyChildClicked) { this.notifyChildClicked.unsubscribe(); }
    }

    onValueChanged(valueChanged: any): void {
        this.valueChanged.emit(valueChanged);
    }

    onChildChanged(childChanged: any): void {
        this.childChanged.emit(childChanged);
    }

    onFormValidationChanged(formValidationChanged: any): void {
        this.formValidationChanged.emit(formValidationChanged);
    }

    onClick(fieldClicked: any): void {
        this.elementClicked.emit(fieldClicked);
    }

    onMenuItemClicked(fieldToEdit: any): void {
        this.notifyMenuItemClicked.emit(fieldToEdit);
    }

    onChildClick(childClicked: any): void {
        this.notifyChildClicked.emit(childClicked);
    }

    ngOnChanges(changes: any): void {
        // debugger;
        // TODO: Remove it only for testing.
        // this.field.disabled = this.field.readonly = false;
    }
}
