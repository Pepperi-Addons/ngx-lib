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
export class FilterBuilderComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() json: IPepJSONSection = null;
    @Input() fields: Array<IPepField> = new Array<IPepField>();
    @Input() form: FormGroup = this._fb.group({});

    @Output() filters: EventEmitter<any> = new EventEmitter<any>();;

    @ViewChild('filterRoot', { read: ViewContainerRef, static: true }) filterRoot: ViewContainerRef;

    filterSubscription$: Subscription;

    constructor(private _fb: FormBuilder, private _changeDetectionRef: ChangeDetectorRef, public _filterBuilderService: FilterBuilderService) {
        this.filterSubscription$ = this._filterBuilderService.triggerOutputJson.subscribe((outputJson) => {
            this.filters.emit(outputJson);
        });
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this._filterBuilderService.createFilterTree(this.json, this.fields, this.form, this.filterRoot);
    }

    ngAfterViewChecked() {
        this._changeDetectionRef.detectChanges();
    }

    ngOnDestroy() {
        this.filterSubscription$.unsubscribe();
    }


}
