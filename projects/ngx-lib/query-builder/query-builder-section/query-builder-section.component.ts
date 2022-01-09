import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    IPepButtonClickEvent,
    PepButton,
} from '@pepperi-addons/ngx-lib/button';
import { IPepOption } from '@pepperi-addons/ngx-lib';
import { PepTypeConvertorService } from '../common/services/type-convertor.service';
import { IPepQueryDepth } from '../common/model/structure';

@Component({
    selector: 'pep-query-builder-section',
    templateUrl: './query-builder-section.component.html',
    styleUrls: ['./query-builder-section.component.scss', './query-builder-section.component.theme.scss'],
})
export class PepQueryBuilderSectionComponent {
    @Input() form: FormGroup;
    @Input() depth: IPepQueryDepth;
    @Input() hasFields = true;

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

    constructor(private _typeConvertorService: PepTypeConvertorService) {
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
    }

    onAddRuleSetClicked() {
        this.createSection.emit();
    }

    onDeleteSectionClicked() {
        this.remove.emit();
    }


}
