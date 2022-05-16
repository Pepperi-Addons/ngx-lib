import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PepSmartFilterBaseField, IPepSmartFilterField } from '@pepperi-addons/ngx-lib/smart-filters';
import { IPepSmartFilterData } from '@pepperi-addons/ngx-lib/smart-filters';
import { IPepOption } from '@pepperi-addons/ngx-lib';
import { PepTypeConvertorService } from '../common/services/type-convertor.service';
import { IPepQueryBuilderFieldContainer } from '../common/model/field';


@Component({
    selector: 'pep-query-builder-item',
    templateUrl: './query-builder-item.component.html',
    styleUrls: ['./query-builder-item.component.scss'],
})
export class PepQueryBuilderItemComponent {
    @Input() formKey: string;
    _fields: Array<IPepQueryBuilderFieldContainer> = [];
    _options: IPepOption[] = [];
    @Input()
    set fields(list: Array<IPepQueryBuilderFieldContainer>) {
        if (list?.length > 0) {
            this._fields = list;
            this._options = list.map(field => {
                return {
                    key: field.smart.id,
                    value: field.smart.name
                }
            })
        }
    }
    _selectedField: PepSmartFilterBaseField = null;
    @Input()
    set selected(value: IPepQueryBuilderFieldContainer) {
        if (value) {
            this._selectedField = value.smart;
            this.queryForm.fieldType.setValue(value.query.fieldType);
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
    /*
    @Input() 
    set variableFields(val: any) {
        console.log('variableFields 2', val);
    } */
    
    @Input() 
    variableFields: any = {};

    @Output()
    filterChange = new EventEmitter();
    @Output()
    remove = new EventEmitter();

    form: FormGroup;

    constructor(
        private _fb: FormBuilder,
        public typeConvertorService: PepTypeConvertorService
    ) {
        this.setupForm();
    }

    ngOnInit() {
        //
    }

    get f() {
        return this.form.controls;
    }

    get queryForm() {
        return (this.f.query as FormGroup).controls;
    }

    setupForm() {
        this.form = this._fb.group({
            smart: this._fb.group({
                fieldId: this._fb.control(null),
                fieldType: this._fb.control(null),
                operator: this._fb.control(null),
                operatorUnit: this._fb.control(null),
                values: this._fb.group({
                    first: this._fb.control(null),
                    second: this._fb.control(null)
                })
            }),
            query: this._fb.group({
                fieldType: this._fb.control(null)
            })
        });
    }

    addToParentForm() {
        this._parentForm.setControl(this.formKey, this.form);
    }

    onFieldChanged(key) {
        const item = this._fields.find(field => field.smart.id === key);

        this.setupForm();
        this.queryForm.fieldType.setValue(item.query.fieldType);
        this.addToParentForm();

        /**
         * hack due to angular's change detection bug -
         * ERROR Error: There is no FormControl instance attached to form control element with name: [formControlName]
         */
        this._selectedField = null;
        setTimeout(() => {
            this._selectedField = item ? item.smart : null;
        }, 0);

        this._filter = null;
    }

    onFilterChanged() {
        if (this.form.valid) {
            this.filterChange.emit();
        }
    }

    onDeleteItemClicked() {
        this.remove.emit();
    }



}
