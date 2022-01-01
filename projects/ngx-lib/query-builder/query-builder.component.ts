import {
    Component,
    EventEmitter,
    Input,
    Output,
    OnInit,
    OnDestroy,
    ViewChild,
    ViewContainerRef,
    Renderer2
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PepQueryBuilderSectionComponent } from './query-builder-section/query-builder-section.component';
import { IPepQueryBuilderField, IPepQuerySection } from './common/model/legacy';
import { PepQueryBuilderService } from './query-builder.service';
import { IPepQueryDepth } from './common/model/structure';
import { PepOperatorTypes } from './common/model/type';
import { Subscription } from 'rxjs';

@Component({
    selector: 'pep-query-builder',
    templateUrl: './query-builder.component.html',
    styleUrls: ['./query-builder.component.scss'],
})
export class PepQueryBuilderComponent implements OnInit, OnDestroy {
    _query: IPepQuerySection = null;
    @Input()
    set query(object: IPepQuerySection) {
        this._query = object;
        this.loadQuery()
    };
    @Input()
    set fields(list: Array<IPepQueryBuilderField>) {
        this.queryBuilderService.fields = list;
        this.loadQuery();
    }
    @Input()
    set maxDepth(value: number) {
        this.queryBuilderService.maxDepth = value;
    }

    @Output()
    queryChange: EventEmitter<IPepQuerySection> = new EventEmitter<IPepQuerySection>();
    @Output()
    formValidationChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('rootContainer', { static: true }) root: PepQueryBuilderSectionComponent;

    _formSubscription$: Subscription;
    _outputQuerySubscription$: Subscription;

    _lastFormValidStatus = true;

    //form: FormGroup;
    depth: IPepQueryDepth;
    //sectionContainer;

    constructor(
        private _fb: FormBuilder,
        public queryBuilderService: PepQueryBuilderService
    ) {
        this.setupForm();
        this.initDepth();
        this._formSubscription$ = this.queryBuilderService.form.valueChanges.subscribe((val) => {
            if (this.queryBuilderService.form.valid !== this._lastFormValidStatus) {
                this._lastFormValidStatus = this.queryBuilderService.form.valid;
                this.formValidationChange.emit(this._lastFormValidStatus);
            }
        });
        this._outputQuerySubscription$ = this.queryBuilderService.outputQuery$.subscribe((outputQuery) => {
            this.queryChange.emit(outputQuery);
        });
    }

    ngOnInit() {
        //console.log('this.queryRoot.get()', this.root.sectionContainer);
        // this.queryBuilderService.createFilterTree(this.query, this.fields, this.form, this.queryRoot);
    }

    setupForm() {
        this.queryBuilderService.form = this._fb.group({
            operator: this._fb.control(PepOperatorTypes.And)
        });
    }

    initDepth() {
        this.depth = {
            current: 0,
            max: this.queryBuilderService.maxDepth
        }
    }

    /**
     * builds UI query structure as soon both the fields and query loads
     */
    loadQuery() {
        if (
            this._query &&
            this.queryBuilderService.hasFields &&
            this.root?.sectionContainer
        ) {
            this.queryBuilderService.buildQueryStructure(this._query, this.root.sectionContainer);
        }
    }

    onCreateSection() {
        const section = this.queryBuilderService.createSection(PepOperatorTypes.And, this.root.sectionContainer, this.queryBuilderService.form, 1);
        this.queryBuilderService.createItem(null, section.containerRef, section.parentForm);
        //console.log('onCreateSection outer');
    }

    onCreateItem() {
        this.queryBuilderService.createItem(null, this.root.sectionContainer, this.queryBuilderService.form);
        //console.log('onCreateItem outer');
    }

    onOperatorChange() {
        this.queryBuilderService.createOutputQuery();
        //console.log('onOperatorChange outer');
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
