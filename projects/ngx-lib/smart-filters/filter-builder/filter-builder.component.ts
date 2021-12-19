import {
    Component,
    EventEmitter,
    Input,
    Output,
    OnInit,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ViewContainerRef,
    ChangeDetectorRef

} from '@angular/core';
import { IPepField, IPepJSONSection } from './common/model/legacy';
import { FilterBuilderService } from './filter-builder.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'pep-filter-builder',
    templateUrl: './filter-builder.component.html',
    styleUrls: ['./filter-builder.component.scss'],
})
export class FilterBuilderComponent implements OnInit, OnDestroy {
    @Input() json: IPepJSONSection = null;
    @Input() fields: Array<IPepField> = new Array<IPepField>();

    @Output()
    filters: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    formValidationChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('filterRoot', { read: ViewContainerRef, static: true }) filterRoot: ViewContainerRef;

    _formSubscription$: Subscription;
    _outputJsonSubscription$: Subscription;

    _isFormValid: boolean = true;

    form: FormGroup;

    constructor(private _fb: FormBuilder, /*private _changeDetectionRef: ChangeDetectorRef,*/ public _filterBuilderService: FilterBuilderService) {
        this.setupForm();
        this._formSubscription$ = this.form.valueChanges.subscribe((val) => {
            if (this.form.valid !== this._isFormValid) {
                this._isFormValid = this.form.valid;
                this.formValidationChange.emit(this._isFormValid);
            }
        });
        this._outputJsonSubscription$ = this._filterBuilderService.triggerOutputJson.subscribe((outputJson) => {
            this.filters.emit(outputJson);
        });
    }

    setupForm() {
        this.form = this._fb.group({})
    }
    ngOnInit() {
        this._filterBuilderService.createFilterTree(this.json, this.fields, this.form, this.filterRoot);
    }

    /*
    ngAfterViewInit() {
        //this._filterBuilderService.createFilterTree(this.json, this.fields, this.form, this.filterRoot);
    }

    ngAfterViewChecked() {
        //this._changeDetectionRef.detectChanges();
    } */

    ngOnDestroy() {
        if (this._formSubscription$) {
            this._formSubscription$.unsubscribe();
        }
        if (this._outputJsonSubscription$) {
            this._outputJsonSubscription$.unsubscribe();
        }
    }


}
