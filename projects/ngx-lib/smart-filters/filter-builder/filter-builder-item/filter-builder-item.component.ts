import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    @Input()
    set selected(value: any) {
        //console.log('selected', value);
        if (value) {
            this._selectedField = value;
        }
    }
    @Input()
    set fields(list: Array<IPepSmartFilterField>) {
        if (list?.length > 0) {
            this._fields = list;
            //console.log('_fields', this._fields);
            this._options = list.map(field => {
                return {
                    key: field.id,
                    value: field.name
                }
            })
            //console.log('this._options', this._options);
        }
    };
    @Input()
    set filter(value: IPepSmartFilterData) {
        console.log('input filter', value);
        if (value) {
            this._filter = value;
            //this.setupFilters(list);
        }
    };
    _parentForm: FormGroup;
    @Input()
    set parentForm(value: FormGroup) {
        console.log('parent from input', value);
        if (value) {
            this._parentForm = value;
            //this._f = this._form;
            this.addToParentForm();
            console.log('item form', this._parentForm);
        }
        //this._filter = this._f.filter?.value;

    };
    @Input() formKey: string;

    @Output()
    filtersChange: EventEmitter<IPepSmartFilterData> = new EventEmitter<
        IPepSmartFilterData
    >();

    _form: FormGroup;
    _fields: Array<any> = [];
    _filter: IPepSmartFilterData;

    _filtersDataMap: Map<string, IPepSmartFilterData> = new Map<
        string,
        IPepSmartFilterData
    >();

    //form: FormGroup;
    _options: IPepOption[] = [];
    _selectedField: PepSmartFilterBaseField = null;
    //_selectedOption: any = null;

    constructor(private fb: FormBuilder, private _filterBuilderService: FilterBuilderService) {
        this.setupForm();
    }

    ngOnInit() {
        //console.log('parent form', this.form);
    }

    setupForm() {
        this._form = this.fb.group({
            fieldId: this.fb.control(null),
            operator: this.fb.control(null),
            operatorUnit: this.fb.control(null),
            value: this.fb.group({
                first: this.fb.control(null),
                second: this.fb.control(null)
            }),
        });
    }

    addToParentForm() {
        this._parentForm.setControl(this.formKey, this._form);
    }

    clearFilter(fieldId: string) {
        //    this._filtersDataMap.delete(fieldId);
    }

    private raiseFiltersChange(): void {
        this.filtersChange.emit(this._filter);
    }

    onFieldChanged(key) {
        console.log('onFieldChanged', key);
        let item = this._fields.find(field => field.id === key);
        //console.log('item', item);
        //this._f = this.fb.group({});
        this.setupForm();
        this.addToParentForm();

        this._selectedField = item ? item : null;
        this._filter = null;
        //this._form.patchValue(this._filterBuilderService.createItemForm());

    }

    onFilterChanged(filterData: IPepSmartFilterData) {
        console.log('onFilterChange value', filterData);
        //this._f.filter.patchValue(filterData);

    }

    onFilterClear(field: PepSmartFilterBaseField) {
        console.log('onFilterClear', field);
        this.clearFilter(field.id);
        this.raiseFiltersChange();
    }



}
