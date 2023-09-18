import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPepButtonClickEvent } from '@pepperi-addons/ngx-lib/button';
import { IPepDataViewClickEvent } from '../profile-data-views-list.model';

@Component({
    selector: 'pep-profile-data-view',
    templateUrl: './profile-data-view.component.html',
    styleUrls: ['./profile-data-view.component.scss', './profile-data-view.component.theme.scss']
})
export class ProfileDataViewComponent implements OnInit {
    @Input() dataViewId: string;
    @Input() title: string;
    @Input() fields: string[];
    @Input() canDelete = true;

    @Output() editClick: EventEmitter<IPepDataViewClickEvent> = new EventEmitter<IPepDataViewClickEvent>();
    @Output() deleteClick: EventEmitter<IPepDataViewClickEvent> = new EventEmitter<IPepDataViewClickEvent>();

    constructor() {
        //
     }

    ngOnInit() {
        //
    }

    onEditClicked(event: IPepButtonClickEvent): void {
        this.editClick.emit({
            dataViewId: this.dataViewId
        });
    }

    onDeleteClicked(event: IPepButtonClickEvent): void {
        this.deleteClick.emit({
            dataViewId: this.dataViewId
        });
    }
}
