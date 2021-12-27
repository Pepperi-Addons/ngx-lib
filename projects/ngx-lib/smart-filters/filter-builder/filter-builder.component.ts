import {
    Component,
    EventEmitter,
    Input,
    Output,
    OnInit,
    OnDestroy,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IPepFilterBuilderField, IPepJSONSection } from './common/model/legacy';
import { FilterBuilderService } from './filter-builder.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'pep-filter-builder',
    templateUrl: './filter-builder.component.html',
    styleUrls: ['./filter-builder.component.scss'],
})
export class PepFilterBuilderComponent implements OnInit, OnDestroy {
    @Input() jsonFilter: IPepJSONSection = null;
    @Input() fields: Array<IPepFilterBuilderField> = new Array<IPepFilterBuilderField>();

    @Output()
    filter: EventEmitter<IPepJSONSection> = new EventEmitter<IPepJSONSection>();
    @Output()
    formValidationChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('filterRoot', { read: ViewContainerRef, static: true }) filterRoot: ViewContainerRef;

    _formSubscription$: Subscription;
    _outputJsonSubscription$: Subscription;

    _isFormValid = true;

    form: FormGroup;

    constructor(
        private _fb: FormBuilder,
        private _filterBuilderService: FilterBuilderService
    ) {
        this.setupForm();
        this._formSubscription$ = this.form.valueChanges.subscribe((val) => {
            if (this.form.valid !== this._isFormValid) {
                this._isFormValid = this.form.valid;
                this.formValidationChange.emit(this._isFormValid);
            }
        });
        this._outputJsonSubscription$ = this._filterBuilderService.triggerOutputJson.subscribe((outputJson) => {
            this.filter.emit(outputJson);
        });
    }

    setupForm() {
        this.form = this._fb.group({})
    }
    ngOnInit() {
        this._filterBuilderService.createFilterTree(this.jsonFilter, this.fields, this.form, this.filterRoot);
    }

    ngOnDestroy() {
        if (this._formSubscription$) {
            this._formSubscription$.unsubscribe();
        }
        if (this._outputJsonSubscription$) {
            this._outputJsonSubscription$.unsubscribe();
        }
    }


}
