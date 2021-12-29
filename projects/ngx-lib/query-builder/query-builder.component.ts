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
import { IPepQueryBuilderField, IPepQuerySection } from './common/model/legacy';
import { PepQueryBuilderService } from './query-builder.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'pep-query-builder',
    templateUrl: './query-builder.component.html',
    styleUrls: ['./query-builder.component.scss'],
})
export class PepQueryBuilderComponent implements OnInit, OnDestroy {
    @Input() query: IPepQuerySection = null;
    @Input() fields: Array<IPepQueryBuilderField> = new Array<IPepQueryBuilderField>();

    @Output()
    queryChange: EventEmitter<IPepQuerySection> = new EventEmitter<IPepQuerySection>();
    @Output()
    formValidationChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('queryRoot', { read: ViewContainerRef, static: true }) queryRoot: ViewContainerRef;

    _formSubscription$: Subscription;
    _outputQuerySubscription$: Subscription;

    _isFormValid = true;

    form: FormGroup;

    constructor(
        private _fb: FormBuilder,
        private _queryBuilderService: PepQueryBuilderService
    ) {
        this.setupForm();
        this._formSubscription$ = this.form.valueChanges.subscribe((val) => {
            if (this.form.valid !== this._isFormValid) {
                this._isFormValid = this.form.valid;
                this.formValidationChange.emit(this._isFormValid);
            }
        });
        this._outputQuerySubscription$ = this._queryBuilderService.outputQuery$.subscribe((outputQuery) => {
            this.queryChange.emit(outputQuery);
        });
    }

    setupForm() {
        this.form = this._fb.group({})
    }
    ngOnInit() {
        this._queryBuilderService.createFilterTree(this.query, this.fields, this.form, this.queryRoot);
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
