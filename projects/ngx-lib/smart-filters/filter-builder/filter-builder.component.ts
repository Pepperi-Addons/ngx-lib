import {
    Component,
    EventEmitter,
    Input,
    Output,
    OnInit,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ElementRef,

    ViewContainerRef,
    ComponentFactory,
    ChangeDetectorRef

} from '@angular/core';
import { IPepField, IPepJSONSection, IPepJSONItem } from './common/model/legacy';
import { elementAt } from 'rxjs/operators';
import { PepSmartFilterBaseField } from '../common/model/field';
import { IPepSmartFilterData } from '../common/model/filter';//'@pepperi-addons/ngx-lib/smart-filters';
import { FilterBuilderService } from './filter-builder.service';
import { FilterBuilderSectionComponent } from './filter-builder-section/filter-builder-section.component';
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
    @Input() form: FormGroup = this.fb.group({});

    @Output() filters: EventEmitter<any> = new EventEmitter<any>();;

    @ViewChild('filterRoot', { read: ViewContainerRef, static: true }) filterRoot: ViewContainerRef;

    filterSubscription$: Subscription;

    constructor(private fb: FormBuilder, private changeDetectionRef: ChangeDetectorRef, public filterBuilderService: FilterBuilderService) {
        this.filterSubscription$ = this.filterBuilderService.triggerOutputJson.subscribe((outputJson) => {
            this.filters.emit(outputJson);
        });
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.filterBuilderService.createFilterTree(this.json, this.fields, this.form, this.filterRoot);
    }

    ngAfterViewChecked() {
        this.changeDetectionRef.detectChanges();
    }

    ngOnDestroy() {
        this.filterSubscription$.unsubscribe();
    }


}
