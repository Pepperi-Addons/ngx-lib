import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PepSmartFilterBaseField, IPepSmartFilterField } from '@pepperi-addons/ngx-lib/smart-filters';
import { IPepSmartFilterData } from '@pepperi-addons/ngx-lib/smart-filters';
import { IPepOption } from '@pepperi-addons/ngx-lib';
import { PepTypeConvertorService } from '../common/services/type-convertor.service';

@Component({
    selector: 'pep-query-builder-item',
    templateUrl: './query-builder-item.component.html',
    styleUrls: ['./query-builder-item.component.scss'],
})
export class PepQueryBuilderItemComponent {
    @Input() formKey: string;
    _fields: Array<any> = [];
    _options: IPepOption[] = [];
    @Input()
    set fields(list: Array<IPepSmartFilterField>) {
        if (list?.length > 0) {
            this._fields = list;
            this._options = list.map(field => {
                return {
                    key: field.id,
                    value: field.name
                }
            })
        }
    }
    _selectedField: PepSmartFilterBaseField = null;
    @Input()
    set selected(value: any) {
        if (value) {
            this._selectedField = value;
        }
    }
    _filter: IPepSmartFilterData;
    @Input()
    set filter(value: IPepSmartFilterData) {
        if (value) {
            this._filter = value;
        }
    }
    _parentForm: FormGroup;
    @Input()
    set parentForm(value: FormGroup) {
        if (value) {
            this._parentForm = value;
            this.addToParentForm();
        }
    }

    @Output()
    filterChange = new EventEmitter();
    @Output()
    remove = new EventEmitter();


    //test: any = {};

    _form: FormGroup;
    /*fieldWidth = 26;
    filterWidth = 67.5;
    binWidth = 6.5; */

    constructor(
        private _fb: FormBuilder,
        public typeConvertorService: PepTypeConvertorService
    ) {
        this.setupForm();
    }

    ngOnInit() {
        //
    }

    setupForm() {
        this._form = this._fb.group({
            fieldId: this._fb.control(null),
            fieldType: this._fb.control(null),
            operator: this._fb.control(null),
            operatorUnit: this._fb.control(null),
            values: this._fb.group({
                first: this._fb.control(null),
                second: this._fb.control(null)
            }),
        });
    }

    addToParentForm() {
        this._parentForm.setControl(this.formKey, this._form);
    }

    onFieldChanged(key) {
        const item = this._fields.find(field => field.id === key);

        this.setupForm();
        this.addToParentForm();

        /**
         * hack due to angular's change detection bug -
         * ERROR Error: There is no FormControl instance attached to form control element with name: [formControlName]
         */
        this._selectedField = null;
        setTimeout(() => {
            this._selectedField = item ? item : null;
        }, 0);

        this._filter = null;
    }

    onFilterChanged() {
        if (this._form.valid) {
            this.filterChange.emit();
        }
    }

    onDeleteItemClicked() {
        this.remove.emit();
    }



}