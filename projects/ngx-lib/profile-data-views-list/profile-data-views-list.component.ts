import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { BaseDataView, DataViewType } from '@pepperi-addons/papi-sdk';
import { IPepButtonClickEvent } from '@pepperi-addons/ngx-lib/button';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';
import { IPepOption } from '@pepperi-addons/ngx-lib';
import { IPepProfile, IPepProfileDataViewClickEvent, IPepProfileDataViewsCard } from './profile-data-views-list.model';

@Component({
    selector: 'pep-profile-data-views-list',
    templateUrl: './profile-data-views-list.component.html',
    styleUrls: ['./profile-data-views-list.component.scss']
})
export class ProfileDataViewsListComponent implements OnInit {
    @Input() defaultProfile: IPepProfileDataViewsCard = null;

    private _availableProfiles: Array<IPepProfile> = [];
    @Input()
    set availableProfiles(value: Array<IPepProfile>) {
        this._availableProfiles = value;
        this.setNonExistingProfiles();
    }
    get availableProfiles(): Array<IPepProfile> {
        return this._availableProfiles;
    }

    private _profileDataViewsList: Array<IPepProfileDataViewsCard> = [];
    @Input()
    set profileDataViewsList(value: Array<IPepProfileDataViewsCard>) {
        this._profileDataViewsList = value;
        this.setNonExistingProfiles();
    }
    get profileDataViewsList(): Array<IPepProfileDataViewsCard> {
        return this._profileDataViewsList;
    }

    @Input() configurationPerScreenSize = false;

    @Output() saveNewProfileClick: EventEmitter<string> = new EventEmitter<string>();
    @Output() dataViewEditClick: EventEmitter<IPepProfileDataViewClickEvent> = new EventEmitter<IPepProfileDataViewClickEvent>();
    @Output() dataViewDeleteClick: EventEmitter<IPepProfileDataViewClickEvent> = new EventEmitter<IPepProfileDataViewClickEvent>();

    @ViewChild('selectProfileTemplate', { read: TemplateRef }) selectProfileTemplate: TemplateRef<any>;

    dialogRef: MatDialogRef<any>;
    selectedNewProfileId = '';
    nonExistingProfiles: Array<IPepProfile> = [];

    // Set the profiles that not exist already in profileDataViewsList.
    private setNonExistingProfiles() {
        this.nonExistingProfiles = this.availableProfiles.filter(ap => this.profileDataViewsList.findIndex(pdv => pdv.profileId === ap.id) === -1);
    }

    constructor(
        private dialogService: PepDialogService
    ) { }

    ngOnInit() {
        //
    }

    setSelectedNewProfileId(value: string) {
        this.selectedNewProfileId = value;
    }

    closeDialog(): void {
        this.dialogRef?.close();
    }

    saveNewProfile() {
        // Add the new profile
        this.saveNewProfileClick.emit(this.selectedNewProfileId);
        this.closeDialog();
    }

    onAddProfileClicked(event: IPepButtonClickEvent) {
        // Raise select profile dialog
        this.selectedNewProfileId = '';
        const options: Array<IPepOption> = [];
        options.push(...(this.nonExistingProfiles.map((opt) => {
            return {
                key: opt.id, value: opt.name
            };
        })));
        this.dialogRef = this.dialogService.openDialog(this.selectProfileTemplate, { options });
    }

    onDataViewEditClicked(event: IPepProfileDataViewClickEvent): void {
        this.dataViewEditClick.emit(event);
    }

    onDataViewDeleteClicked(event: IPepProfileDataViewClickEvent): void {
        this.dataViewDeleteClick.emit(event);
    }
}
