import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { PepLayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import {
    IPepButtonClickEvent,
    PepButton,
} from '@pepperi-addons/ngx-lib/button';
import { pepIconSystemBin, pepIconSystemSettings } from '@pepperi-addons/ngx-lib/icon';
import {
    PepMenuItem,
    IPepMenuItemClickEvent,
} from '@pepperi-addons/ngx-lib/menu';
import { IPepSearchStateChangeEvent } from '@pepperi-addons/ngx-lib/search';
import { IPepDraggableItem } from '@pepperi-addons/ngx-lib/draggable-items';
import { IPepProfileDataViewsCard, IPepProfile, IPepProfileDataView, IPepProfileDataViewClickEvent } from '@pepperi-addons/ngx-lib/profile-data-views-list';

@Component({
    templateUrl: './draggable-example.component.html',
    styleUrls: ['./draggable-example.component.scss'],
})
export class DraggableExampleComponent implements OnInit {
    all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    even = [10];
    title = 'client-side';

    defaultProfileId: string;
    profileDataViewsList: Array<IPepProfileDataViewsCard> = [];
    availableProfiles: Array<IPepProfile> = [];

    draggableItems: Array<IPepDraggableItem> = [];
    draggableItems2: Array<IPepDraggableItem> = [];
    dropArea = [];

    PepScreenSizeType = PepScreenSizeType;
    screenSize: PepScreenSizeType;

    constructor(public layoutService: PepLayoutService) {
        this.layoutService.onResize$.pipe().subscribe((size) => {
            this.screenSize = size;
        });
    }

    private setProfiles() {
        const repDataViews: IPepProfileDataView[] = [{
            dataViewId: '1',
            fields: ['field1', 'field2'],
            viewType: 'Landscape'
        }];

        const repProfile = {
            profileId: '123',
            title: 'Rep 1',
            dataViews: repDataViews
        };

        const buyerDataViews: IPepProfileDataView[] = [{
            dataViewId: '2',
            fields: [],
            viewType: 'Landscape'
        }];

        const profile2 = {
            profileId: '345',
            title: 'Buyer 1',
            dataViews: buyerDataViews
        };

        this.defaultProfileId = repProfile.profileId;
        this.profileDataViewsList = [repProfile, profile2];

        this.availableProfiles = [{
            id: '123',
            name: 'Rep'
        }, {
            id: '1234',
            name: 'Rep Agent'
        }, {
            id: '345',
            name: 'Buyer'
        }, {
            id: '678',
            name: 'Admin'
        }]
    }

    private getDraggableItems(): any[] {
        return [
            { title: 'draggable 1', data: 1, disabled: true },
            { title: 'draggable 2', data: 2 },
            { title: 'draggable 3', data: 3 },
            { title: 'draggable 4', data: 4 },
            { title: 'draggable 11', data: 11, disabled: true },
            { title: 'draggable 12', data: 12 },
            { title: 'draggable 13', data: 13 },
            { title: 'draggable 14', data: 14 },
            { title: 'draggable 21', data: 21, disabled: true },
            { title: 'draggable 22', data: 22 },
            { title: 'draggable 23', data: 23 },
            { title: 'draggable 24', data: 24 },
        ];
    }

    ngOnInit(): void {
        this.setProfiles();

        this.draggableItems = this.getDraggableItems();
        this.draggableItems2 = this.getDraggableItems();
    }


    onDataViewEditClicked(event: IPepProfileDataViewClickEvent): void {
        alert(`edit on ${event.dataViewId} was clicked`);
    }

    onDataViewDeleteClicked(event: IPepProfileDataViewClickEvent): void {
        alert(`delete on ${event.dataViewId} was clicked`);
    }

    drop(event: CdkDragDrop<IPepDraggableItem[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            // transferArrayItem(
            //     event.previousContainer.data,
            //     event.container.data,
            //     event.previousIndex,
            //     event.currentIndex,
            // );

            copyArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );


            const item = this.draggableItems.find(item => item === event.container.data[event.currentIndex]);
            if (item) {
                item.disabled = true;
            }
        }
    }

}
