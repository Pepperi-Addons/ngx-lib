import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ChangeDetectorRef, AfterViewChecked, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterBuilderService } from '../filter-builder.service';
import { PepSmartFilterType } from '../../common/model/type';
import { PepSmartFilterBaseField, IPepSmartFilterField } from '../../common/model/field';
import { IPepSmartFilterData } from '../../common/model/filter';
import { PepOperatorTypes } from '../common/model/type';



@Component({
    selector: 'pep-filter-builder-section',
    templateUrl: './filter-builder-section.component.html',
    styleUrls: ['./filter-builder-section.component.scss'],
})
export class FilterBuilderSectionComponent implements AfterViewChecked {
    @Input() set operator(value: string) {
        this._operator = value;

    };
    //@Input() index: number = 1;
    @Input() form: FormGroup;
    /*@Input() set form(value: FormGroup) {
        console.log('section form', value);
        //this.addToForm(value);        
        //this._form = value;
       
        //        this._form.addControl('operator', this.fb.control(''));
    } */

    @ViewChild('sectionContainer', { read: ViewContainerRef, static: true }) sectionContainer: ViewContainerRef;

    _operator: string;
    //_form: FormGroup;

    constructor(private changeDetectionRef: ChangeDetectorRef, public vccRef: ViewContainerRef, private fb: FormBuilder, private _filterBuilderService: FilterBuilderService) {
        /*this._form = this.fb.group({
            operator: 'ANDDDAND'
        }) */
    }

    ngOnInit() {

    }

    ngAfterViewChecked() {

        /*this.changeDetectionRef.detectChanges();
        console.log('ngAfterViewChecked'); */
    }

    addRuleClicked() {
        this._filterBuilderService.createItem(null, this.sectionContainer, this.form);
    }

    addRuleSetClicked() {
        this._filterBuilderService.createSection(PepOperatorTypes.And, this.sectionContainer, this.form);
    }

    /*addToForm(parentForm: FormGroup) {
        //parentForm.addControl('section' + this.index, this._form);
    } */



}
