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
    @Input() defaultProfileId = '';

    private _availableProfiles: Array<IPepProfile> = [];
    @Input()
    set availableProfiles(value: Array<IPepProfile>) {
        this._availableProfiles = value;
        this.setProfilesOptions();
    }
    get availableProfiles(): Array<IPepProfile> {
        return this._availableProfiles;
    }

    private _profileDataViewsList: Array<IPepProfileDataViewsCard> = [];
    @Input()
    set profileDataViewsList(value: Array<IPepProfileDataViewsCard>) {
        this._profileDataViewsList = value;
        this.setProfilesOptions();
    }
    get profileDataViewsList(): Array<IPepProfileDataViewsCard> {
        return this._profileDataViewsList;
    }

    @Input() configurationPerScreenSize = false;

    @Output() saveNewProfileClick: EventEmitter<any> = new EventEmitter<any>();
    @Output() dataViewEditClick: EventEmitter<IPepProfileDataViewClickEvent> = new EventEmitter<IPepProfileDataViewClickEvent>();
    @Output() dataViewDeleteClick: EventEmitter<IPepProfileDataViewClickEvent> = new EventEmitter<IPepProfileDataViewClickEvent>();

    @ViewChild('selectProfileTemplate', { read: TemplateRef }) selectProfileTemplate: TemplateRef<any>;

    dialogRef: MatDialogRef<any>;
    selectedNewProfileId = '';
    nonExistingProfiles: Array<IPepProfile> = [];
    
    selectedCopyFromProfileId = '';
    existingProfiles: Array<IPepProfile> = [];

    private setProfilesOptions() {
        // Set the profiles that not exist already in profileDataViewsList.
        this.nonExistingProfiles = this.availableProfiles.filter(ap => this.profileDataViewsList.findIndex(pdv => pdv.profileId === ap.id) === -1);

        // Set the existing profiles.
        this.existingProfiles = this.availableProfiles.filter(ap => this.profileDataViewsList.findIndex(pdv => pdv.profileId === ap.id) > -1);
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
    
    setCopyFromProfileId(value: string) {
        this.selectedCopyFromProfileId = value;
    }

    closeDialog(): void {
        this.dialogRef?.close();
    }

    saveNewProfile() {
        // Add the new profile
        this.saveNewProfileClick.emit({
            profileId: this.selectedNewProfileId,
            copyFromProfileId: this.selectedCopyFromProfileId
        });
        this.closeDialog();
    }

    onAddProfileClicked(event: IPepButtonClickEvent) {
        // Raise select profile dialog
        this.selectedNewProfileId = '';
        this.selectedCopyFromProfileId = '';

        const options: Array<IPepOption> = this.nonExistingProfiles.map((opt) => {
            return { key: opt.id, value: opt.name };
        });

        const copyFromOptions: Array<IPepOption> = this.existingProfiles.map((opt) => {
            return { key: opt.id, value: opt.name };
        });

        this.dialogRef = this.dialogService.openDialog(this.selectProfileTemplate, { 
            options,
            copyFromOptions
        });
    }

    onDataViewEditClicked(event: IPepProfileDataViewClickEvent): void {
        this.dataViewEditClick.emit(event);
    }

    onDataViewDeleteClicked(event: IPepProfileDataViewClickEvent): void {
        this.dataViewDeleteClick.emit(event);
    }
}
