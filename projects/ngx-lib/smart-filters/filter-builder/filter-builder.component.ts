import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
    ElementRef,
    AfterViewInit,
    ViewContainerRef,
    ComponentFactory,
    ChangeDetectorRef

} from '@angular/core';
import { IPepField } from './common/model/field';
import { elementAt } from 'rxjs/operators';
import { PepSmartFilterBaseField } from '../common/model/field';
import { IPepSmartFilterData } from '../common/model/filter';//'@pepperi-addons/ngx-lib/smart-filters';
import { FilterBuilderService } from './filter-builder.service';
import { FilterBuilderSectionComponent } from './filter-builder-section/filter-builder-section.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'pep-filter-builder',
    templateUrl: './filter-builder.component.html',
    styleUrls: ['./filter-builder.component.scss'],
})
export class FilterBuilderComponent implements OnInit, AfterViewInit {
    @Input() json: any = null;
    //@Input() fields: Array<IPepField> = new Array<IPepField>();
    @Input() fields: Array<any> = [];
    @Input() form: FormGroup = this.fb.group({});

    @Output() filters = new EventEmitter<any>();;

    @ViewChild('filterRoot', { read: ViewContainerRef, static: true }) filterRoot: ViewContainerRef;

    constructor(private fb: FormBuilder, private changeDetectionRef: ChangeDetectorRef, public filterBuilderService: FilterBuilderService) {
        this.filterBuilderService.triggerOutputJson.subscribe((outputJson) => {
            //console.log('outputJson', outputJson);
            this.filters.emit(outputJson);
        });
    }

    ngOnInit() {
        //TEMP    
        if (this.json) {
            //this.loadTable();
            let res = this.filterBuilderService.jsonParser(this.json);
            console.log('parsed json', res);
        }
    }

    ngAfterViewInit() {
        this.filterBuilderService.createFilterTree(this.json, this.fields, this.form, this.filterRoot);
    }

    ngAfterViewChecked() {
        this.changeDetectionRef.detectChanges();
    }

    onSaveFiltersClicked() {
        this.filterBuilderService.saveFilterData();
    }


}
