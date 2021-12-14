import { Component, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterBuilderService } from '../filter-builder.service';
import { PepOperatorTypes } from '../common/model/type';
import { PepOperatorMapper } from '../common/model/type';


@Component({
    selector: 'pep-filter-builder-section',
    templateUrl: './filter-builder-section.component.html',
    styleUrls: ['./filter-builder-section.component.scss'],
})
export class FilterBuilderSectionComponent {
    @Input() form: FormGroup;
    //@Input() operator: string = 'AND'; 
    @Input() isRoot = false;

    @Output()
    remove = new EventEmitter();
    @Output()
    operatorChange = new EventEmitter();

    @ViewChild('sectionContainer', { read: ViewContainerRef, static: true }) sectionContainer: ViewContainerRef;

    //_operatorMapper: PepOperatorMapper;
    operators;

    constructor(/*public vccRef: ViewContainerRef, private _fb: FormBuilder, */private _filterBuilderService: FilterBuilderService) {
    }

    ngOnInit() {
        this.operators = PepOperatorMapper.getAll();
    }

    get f() {
        return this.form.controls;
    }

    onOperatorChanged(value) {
        this.f.operator.setValue(value);
        this.operatorChange.emit();
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


}
