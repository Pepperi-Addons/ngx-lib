import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseDataView, DataViewType } from '@pepperi-addons/papi-sdk';
import { IPepDataViewClickEvent, IPepProfileDataView, IPepProfileDataViewClickEvent } from '../profile-data-views-list.model';
import { IPepMenuItemClickEvent, PepMenuItem } from '@pepperi-addons/ngx-lib/menu';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'pep-profile-data-views-card',
    templateUrl: './profile-data-views-card.component.html',
    styleUrls: ['./profile-data-views-card.component.scss', './profile-data-views-card.component.theme.scss']
})
export class ProfileDataViewsCardComponent implements OnInit {
    @Input() profileId = '';
    @Input() title = '';
    @Input() dataViews: IPepProfileDataView[] = [];
    @Input() configurationPerScreenSize = false;
    @Input() isDefault = false;

    @Output() dataViewEditClick: EventEmitter<IPepProfileDataViewClickEvent> = new EventEmitter<IPepProfileDataViewClickEvent>();
    @Output() dataViewDeleteClick: EventEmitter<IPepProfileDataViewClickEvent> = new EventEmitter<IPepProfileDataViewClickEvent>();
    @Output() dataViewImportClick: EventEmitter<IPepProfileDataViewClickEvent> = new EventEmitter<IPepProfileDataViewClickEvent>();

    menuItems: Array<PepMenuItem> = [];

    constructor(private translate: TranslateService) { }

    private loadMenuItems(): void {
        const removeKey = 'ACTIONS.REMOVE';
        const importKey = 'ACTIONS.IMPORT';

        // Load translation before get the options in the children.
        this.translate.get([removeKey, importKey]).subscribe((res) => {

            if (!this.isDefault) {
                this.menuItems.push({ key: 'delete', text: this.translate.instant(res[removeKey]) });
            }

            this.menuItems.push({ key: 'import', text: this.translate.instant(res[importKey]) });
        });
    }

    ngOnInit() {
        this.loadMenuItems();
    }

    onMenuItemClicked(action: IPepMenuItemClickEvent) {
        if (this.dataViews.length === 1) {
            if (action.source.key === 'delete') {
                this.onDataViewDeleteClicked({ dataViewId: this.dataViews[0].dataViewId });
            } else if (action.source.key === 'import') {
                this.dataViewImportClick.emit({ profileId: this.profileId, dataViewId: this.dataViews[0].dataViewId });
            }
        }
    }

    onDataViewEditClicked(event: IPepDataViewClickEvent): void {
        const newEvent = {
            profileId: this.profileId,
            dataViewId: event.dataViewId
        }
        this.dataViewEditClick.emit(newEvent);
    }

    onDataViewDeleteClicked(event: IPepDataViewClickEvent): void {
        const newEvent = {
            profileId: this.profileId,
            dataViewId: event.dataViewId
        }
        this.dataViewDeleteClick.emit(newEvent);
    }

}
