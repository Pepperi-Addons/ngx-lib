import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { BaseDataView, DataViewType } from '@pepperi-addons/papi-sdk';
import { IPepButtonClickEvent } from '@pepperi-addons/ngx-lib/button';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';
import { IPepOption } from '@pepperi-addons/ngx-lib';
import { IPepProfile, IPepProfileDataViewClickEvent, IPepProfileDataViewSaveClickEvent, IPepProfileDataViewsCard } from './profile-data-views-list.model';

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

    @Output() saveProfileClick: EventEmitter<IPepProfileDataViewSaveClickEvent> = new EventEmitter<IPepProfileDataViewSaveClickEvent>();
    @Output() dataViewEditClick: EventEmitter<IPepProfileDataViewClickEvent> = new EventEmitter<IPepProfileDataViewClickEvent>();
    @Output() dataViewDeleteClick: EventEmitter<IPepProfileDataViewClickEvent> = new EventEmitter<IPepProfileDataViewClickEvent>();

    @ViewChild('addNewProfileTemplate', { read: TemplateRef }) addNewProfileTemplate: TemplateRef<any>;
    @ViewChild('importProfileTemplate', { read: TemplateRef }) importProfileTemplate: TemplateRef<any>;

    dialogRef: MatDialogRef<any>;
    selectedProfileId = '';
    nonExistingProfiles: Array<IPepProfile> = [];
    
    selectedCopyFromProfileId = '';
    // existingProfiles: Array<IPepProfile> = [];

    private setProfilesOptions() {
        // Set the profiles that not exist already in profileDataViewsList.
        this.nonExistingProfiles = this.availableProfiles.filter(ap => this.profileDataViewsList.findIndex(pdv => pdv.profileId === ap.id) === -1);

        // // Set the existing profiles.
        // this.existingProfiles = this.availableProfiles.filter(ap => this.profileDataViewsList.findIndex(pdv => pdv.profileId === ap.id) > -1);
    }

    constructor(
        private dialogService: PepDialogService
    ) { }

    ngOnInit() {
        //
    }

    setSelectedProfileId(value: string) {
        this.selectedProfileId = value;
    }
    
    setCopyFromProfileId(value: string) {
        this.selectedCopyFromProfileId = value;
    }

    closeDialog(): void {
        this.dialogRef?.close();
    }

    saveProfile() {
        // Save the profile (can be new or import to existing).
        this.saveProfileClick.emit({
            profileId: this.selectedProfileId,
            copyFromProfileId: this.selectedCopyFromProfileId
        });
        this.closeDialog();
    }

    onAddProfileClicked() {
        // Raise select profile dialog
        this.selectedProfileId = '';
        this.selectedCopyFromProfileId = '';

        const options: Array<IPepOption> = this.nonExistingProfiles.map((opt) => {
            return { key: opt.id, value: opt.name };
        });

        const copyFromOptions: Array<IPepOption> = this.profileDataViewsList.map((opt) => {
            return { key: opt.profileId, value: opt.title };
        });

        this.dialogRef = this.dialogService.openDialog(this.addNewProfileTemplate, { 
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

    onDataViewImportClicked(event: IPepProfileDataViewClickEvent): void {
        // Raise import profile dialog
        const profile = this.profileDataViewsList.find(p => p.profileId === event.profileId);
        const profileTitle = profile.title;

        this.selectedProfileId = event.profileId;
        this.selectedCopyFromProfileId = '';

        // Add to the copyFromOptions all the existing except the clicked profile. 
        const copyFromOptions: Array<IPepOption> = this.profileDataViewsList.filter(p => p.profileId !== event.profileId).map((opt) => {
            return { key: opt.profileId, value: opt.title };
        });

        this.dialogRef = this.dialogService.openDialog(this.importProfileTemplate, { 
            profileTitle,
            copyFromOptions,
        });
    }
}
