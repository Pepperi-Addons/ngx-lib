import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterBuilderService } from '../filter-builder.service';
import { PepSmartFilterType } from '../../common/model/type';
import { PepSmartFilterBaseField, IPepSmartFilterField } from '../../common/model/field';
import { IPepSmartFilterData } from '../../common/model/filter';
import { IPepOption } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-filter-builder-item',
    templateUrl: './filter-builder-item.component.html',
    styleUrls: ['./filter-builder-item.component.scss'],
})
export class FilterBuilderItemComponent {
    _selectedField: PepSmartFilterBaseField = null;
    @Input()
    set selected(value: any) {
        if (value) {
            this._selectedField = value;
        }
    }
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
    };
    _filter: IPepSmartFilterData;
    @Input()
    set filter(value: IPepSmartFilterData) {
        //console.log('input filter', value);
        if (value) {
            this._filter = value;
        }
    };
    _parentForm: FormGroup;
    @Input()
    set parentForm(value: FormGroup) {
        if (value) {
            this._parentForm = value;
            this.addToParentForm();
        }
    };
    @Input() formKey: string;

    @Output()
    filterChange = new EventEmitter();
    @Output()
    remove = new EventEmitter();

    _form: FormGroup;
    /*_filtersDataMap: Map<string, IPepSmartFilterData> = new Map<
        string,
        IPepSmartFilterData
    >(); */

    constructor(private fb: FormBuilder, private _filterBuilderService: FilterBuilderService) {
        this.setupForm();
    }

    ngOnInit() {
    }

    setupForm() {
        this._form = this.fb.group({
            fieldId: this.fb.control(null),
            fieldType: this.fb.control(null),
            operator: this.fb.control(null),
            operatorUnit: this.fb.control(null),
            values: this.fb.group({
                first: this.fb.control(null),
                second: this.fb.control(null)
            }),
        });
    }

    addToParentForm() {
        this._parentForm.setControl(this.formKey, this._form);
    }

    onFieldChanged(key) {
        console.log('onFieldChanged', key);
        let item = this._fields.find(field => field.id === key);

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
