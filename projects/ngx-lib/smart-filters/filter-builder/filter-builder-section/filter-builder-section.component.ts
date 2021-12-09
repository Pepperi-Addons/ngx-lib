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
    //@Input() operator = PepOperatorTypes.And; //default
    /*@Input() set operator(value: string) {
        this._operator = value;

    };  */

    @Input() form: FormGroup;
    @Input() isRoot = false;

    @Output()
    remove = new EventEmitter();

    /*@Input() set form(value: FormGroup) {
        console.log('section form', value);
        //this.addToForm(value);        
        //this._form = value;
       
        //        this._form.addControl('operator', this.fb.control(''));
    } */

    @ViewChild('sectionContainer', { read: ViewContainerRef, static: true }) sectionContainer: ViewContainerRef;


    constructor(private changeDetectionRef: ChangeDetectorRef, public vccRef: ViewContainerRef, private _fb: FormBuilder, private _filterBuilderService: FilterBuilderService) {
    }

    ngOnInit() {

    }

    ngAfterViewChecked() {

        /*this.changeDetectionRef.detectChanges();
        console.log('ngAfterViewChecked'); */
    }

    onAddRuleClicked() {
        this._filterBuilderService.createItem(null, this.sectionContainer, this.form);
    }

    onAddRuleSetClicked() {
        this._filterBuilderService.createSection(PepOperatorTypes.And, this.sectionContainer, this.form);
    }

    onDeleteSectionClicked() {
        this.remove.emit();
    }


    /*addToForm(parentForm: FormGroup) {
        //parentForm.addControl('section' + this.index, this._form);
    } */



}
