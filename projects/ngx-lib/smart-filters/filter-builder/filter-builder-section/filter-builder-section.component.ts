import { Component, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPepOption } from '@pepperi-addons/ngx-lib';
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
    //@Input() isRoot = false;
    @Input() depth: number;

    @Output()
    remove = new EventEmitter();
    @Output()
    operatorChange = new EventEmitter();

    @ViewChild('sectionContainer', { read: ViewContainerRef, static: true }) sectionContainer: ViewContainerRef;

    operators: IPepOption[];

    constructor(public filterBuilderService: FilterBuilderService) {
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
        this.filterBuilderService.createItem(null, this.sectionContainer, this.form);
    }

    onAddRuleSetClicked() {
        const result = this.filterBuilderService.createSection(PepOperatorTypes.And, this.sectionContainer, this.form, this.depth + 1);
        this.filterBuilderService.createItem(null, result.containerRef, result.parentForm);
    }

    onDeleteSectionClicked() {
        this.remove.emit();
    }


}
