import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ChangeDetectorRef, AfterViewChecked, ViewContainerRef } from '@angular/core';
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

    @ViewChild('sectionContainer', { read: ViewContainerRef, static: true }) sectionContainer: ViewContainerRef;

    _operator: string;
    constructor(private changeDetectionRef: ChangeDetectorRef, public vccRef: ViewContainerRef) {
    }

    ngOnInit() {

    }

    ngAfterViewChecked() {

        /*this.changeDetectionRef.detectChanges();
        console.log('ngAfterViewChecked'); */
    }





}
