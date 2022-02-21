import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseDataView, DataViewType } from '@pepperi-addons/papi-sdk';
import { IPepProfileDataView, IPepProfileDataViewClickEvent } from '../profile-data-views-list.model';
import { IPepMenuItemClickEvent, PepMenuItem } from '@pepperi-addons/ngx-lib/menu';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'pep-profile-data-views-card',
    templateUrl: './profile-data-views-card.component.html',
    styleUrls: ['./profile-data-views-card.component.scss', './profile-data-views-card.component.theme.scss']
})
export class ProfileDataViewsCardComponent implements OnInit {
    @Input() profileId: string = '';
    @Input() title: string = '';
    @Input() dataViews: IPepProfileDataView[] = [];
    @Input() configurationPerScreenSize: boolean = false;
    @Input() isDefault = false;

    @Output() dataViewEditClick: EventEmitter<IPepProfileDataViewClickEvent> = new EventEmitter<IPepProfileDataViewClickEvent>();
    @Output() dataViewDeleteClick: EventEmitter<IPepProfileDataViewClickEvent> = new EventEmitter<IPepProfileDataViewClickEvent>();

    menuItems: Array<PepMenuItem> = [];

    constructor(private translate: TranslateService) { }

    private loadMenuItems(): void {
        const removeKey = 'ACTIONS.REMOVE';
        // Load translation before get the options in the children.
        this.translate.get([removeKey]).subscribe((res) => {
            this.menuItems = [
                { key: 'delete', text: this.translate.instant(res[removeKey]) }
            ];
        });
    }

    ngOnInit() {
        this.loadMenuItems();
    }

    onMenuItemClicked(action: IPepMenuItemClickEvent) {
        if (this.dataViews.length === 1) {
            if (action.source.key === 'delete') {
                this.onDataViewDeleteClicked({ dataViewId: this.dataViews[0].dataViewId });
            }
        }

    }

    onDataViewEditClicked(event: IPepProfileDataViewClickEvent): void {
        this.dataViewEditClick.emit(event);
    }

    onDataViewDeleteClicked(event: IPepProfileDataViewClickEvent): void {
        this.dataViewDeleteClick.emit(event);
    }
}
