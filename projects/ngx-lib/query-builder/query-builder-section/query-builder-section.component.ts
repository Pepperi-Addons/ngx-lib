import { Component, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    IPepButtonClickEvent,
    PepButton,
} from '@pepperi-addons/ngx-lib/button';
import { IPepOption } from '@pepperi-addons/ngx-lib';
//import { PepQueryBuilderService } from '../query-builder.service';
import { PepQueryBuilderConstantsService } from '../common/services/constants.service';
//import { PepOperatorTypes } from '../common/model/type';
import { PepTypeConvertorService } from '../common/services/type-convertor.service';

@Component({
    selector: 'pep-query-builder-section',
    templateUrl: './query-builder-section.component.html',
    styleUrls: ['./query-builder-section.component.scss'],
})
export class PepQueryBuilderSectionComponent {
    @Input() form: FormGroup;
    @Input() depth: number;

    @Output()
    createSection = new EventEmitter();
    @Output()
    createItem = new EventEmitter();
    @Output()
    remove = new EventEmitter();
    @Output()
    operatorChange = new EventEmitter();

    @ViewChild('sectionContainer', { read: ViewContainerRef, static: true }) sectionContainer: ViewContainerRef;

    toggleButtons: Array<PepButton>;

    constructor(
        public constantsService: PepQueryBuilderConstantsService,
        private _typeConvertorService: PepTypeConvertorService
    ) {
    }

    ngOnInit() {
        this.initOperators();
    }

    get f() {
        return this.form.controls;
    }

    initOperators() {
        this.toggleButtons = this._typeConvertorService.operators.map((operator: IPepOption) => {
            return {
                key: operator.key,
                value: operator.value,
                callback: (event: IPepButtonClickEvent) =>
                    this.onOperatorChanged(event)
            } as PepButton
        });
    }

    onOperatorChanged(event) {
        if (event?.source?.key) {
            this.f.operator.setValue(event.source.key);
            this.operatorChange.emit();
        }
    }

    onAddRuleClicked() {
        this.createItem.emit();
        //this.queryBuilderService.createItem(null, this.sectionContainer, this.form);
    }

    onAddRuleSetClicked() {
        this.createSection.emit();
        //const result = this.queryBuilderService.createSection(PepOperatorTypes.And, this.sectionContainer, this.form, this.depth + 1);
        //this.queryBuilderService.createItem(null, result.containerRef, result.parentForm);
    }

    onDeleteSectionClicked() {
        this.remove.emit();
    }


}
