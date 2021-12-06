import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ChangeDetectorRef, AfterViewChecked, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PepSmartFilterType } from '../../common/model/type';
import { PepSmartFilterBaseField, IPepSmartFilterField } from '../../common/model/field';
import { IPepSmartFilterData } from '../../common/model/filter';




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

    constructor(private changeDetectionRef: ChangeDetectorRef, public vccRef: ViewContainerRef, private fb: FormBuilder) {
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

    }

    addRuleSetClicked() {

    }

    /*addToForm(parentForm: FormGroup) {
        //parentForm.addControl('section' + this.index, this._form);
    } */



}
