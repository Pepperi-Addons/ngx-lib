import {
    Component,
    EventEmitter,
    Input,
    Output,
    OnInit,
    OnDestroy,
    ViewChild
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PepQueryBuilderSectionComponent } from './query-builder-section/query-builder-section.component';
import { IPepQueryBuilderField, IPepQuerySection, IPepQueryItem } from './common/model/legacy';
import { PepQueryStructureService } from './common/services/query-structure.service';
import { PepTypeConvertorService } from './common/services/type-convertor.service';
import { PepOutputQueryService } from './common/services/output-query.service';
import { IPepQueryDepth } from './common/model/structure';
import { PepOperatorTypes } from './common/model/type';
import { Subscription } from 'rxjs';

@Component({
    selector: 'pep-query-builder',
    templateUrl: './query-builder.component.html',
    styleUrls: ['./query-builder.component.scss'],
    providers: [ PepQueryStructureService, PepTypeConvertorService, PepOutputQueryService]
})
export class PepQueryBuilderComponent implements OnInit, OnDestroy {
    _query: IPepQuerySection | IPepQueryItem = null;
    @Input()
    set query(object: IPepQuerySection | IPepQueryItem) {
        this._query = object;
        this.loadQuery()
    }
    @Input()
    set fields(list: Array<IPepQueryBuilderField>) {
        this.queryStructureService.fields = list;
        this.hasFields = this.queryStructureService.hasFields;
        this.loadQuery();
    }
    @Input() 
    set variableFields(list : Array<IPepQueryBuilderField>) {
        this.queryStructureService.variableFields = list;
    }
    @Input()
    set maxDepth(value: number) {
        this.queryStructureService.maxDepth = value;
    }

    @Output()
    queryChange: EventEmitter<IPepQuerySection | IPepQueryItem> = new EventEmitter<IPepQuerySection | IPepQueryItem>();
    @Output()
    formValidationChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('rootContainer', { static: true }) root: PepQueryBuilderSectionComponent;

    _formSubscription$: Subscription;
    _outputQuerySubscription$: Subscription;
    _lastFormValidStatus = true;
    depth: IPepQueryDepth;
    hasFields = false;

    constructor(
        private _fb: FormBuilder,
        public queryStructureService: PepQueryStructureService
    ) {
        this.setupForm();
        this.initDepth();
        this._formSubscription$ = this.queryStructureService.form.valueChanges.subscribe((val) => {
            if (this.queryStructureService.form.valid !== this._lastFormValidStatus) {
                this._lastFormValidStatus = this.queryStructureService.form.valid;
                this.formValidationChange.emit(this._lastFormValidStatus);
            }
        });
        this._outputQuerySubscription$ = this.queryStructureService.outputQuery$.subscribe((outputQuery) => {
            this.queryChange.emit(outputQuery);
        });
    }

    ngOnInit() {
        //
    }

    setupForm() {
        this.queryStructureService.form = this._fb.group({
            operator: this._fb.control(PepOperatorTypes.And)
        });
    }

    initDepth() {
        this.depth = {
            current: 0,
            max: this.queryStructureService.maxDepth
        }
    }

    /**
     * builds UI query structure as soon as both the fields and query loads
     */
    loadQuery() {
        if (
            this._query &&
            this.queryStructureService.hasFields &&
            this.root?.sectionContainer
        ) {
            this.queryStructureService.buildQueryStructure(this._query, this.root.sectionContainer);
        }
    }

    onCreateSection() {
        const section = this.queryStructureService.createSection(PepOperatorTypes.And, this.root.sectionContainer, this.queryStructureService.form, 1);
        this.queryStructureService.createItem(null, section.containerRef, section.parentForm);
    }

    onCreateItem() {
        this.queryStructureService.createItem(null, this.root.sectionContainer, this.queryStructureService.form);
    }

    onOperatorChange() {
        this.queryStructureService.createOutputQuery();
    }

    ngOnDestroy() {
        if (this._formSubscription$) {
            this._formSubscription$.unsubscribe();
        }
        if (this._outputQuerySubscription$) {
            this._outputQuerySubscription$.unsubscribe();
        }
    }

}
