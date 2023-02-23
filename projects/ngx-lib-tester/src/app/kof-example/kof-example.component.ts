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

@Component({
    templateUrl: './kof-example.component.html',
    styleUrls: ['./kof-example.component.scss'],
})
export class KofExampleComponent implements OnInit {
    title = 'client-side';
    groupButtons: Array<PepButton>;
    groupButtons2: Array<PepButton>;

    menuItems: Array<PepMenuItem>;
    selectedMenuItem: PepMenuItem;

    PepScreenSizeType = PepScreenSizeType;
    screenSize: PepScreenSizeType;

    searchString = '';
    searchAutoCompleteValues = [];

    background = `
        linear-gradient(to right,
            hsl(0, 100%, 50%) 0%,
            hsl(60, 100%, 50%) 17%,
            hsl(120, 100%, 50%) 33%,
            hsl(180, 100%, 50%) 50%,
            hsl(240, 100%, 50%) 67%,
            hsl(300, 100%, 50%) 83%,
            hsl(360, 100%, 50%) 100%)
    `;

    constructor(public layoutService: PepLayoutService) {
        this.layoutService.onResize$.pipe().subscribe((size) => {
            this.screenSize = size;
        });

        this.groupButtons = [
            {
                key: 'action',
                value: 'test for check the size of the button',
                callback: (event: IPepButtonClickEvent) =>
                    this.onGroupButtonClicked(event),
            },
            {
                key: 'del',
                classNames: 'caution',
                callback: (event: IPepButtonClickEvent) =>
                    this.onGroupButtonClicked(event),
                iconName: pepIconSystemBin.name,
            },
        ];


        this.groupButtons2 = [
            {
                key: 'action1',
                value: 'test1',
                callback: (event: IPepButtonClickEvent) =>
                    this.onGroupButtonClicked(event),
                iconName: pepIconSystemSettings.name
            },
            {
                key: 'action2',
                value: 'test2',
                callback: (event: IPepButtonClickEvent) =>
                    this.onGroupButtonClicked(event),
                iconName: pepIconSystemSettings.name
            },
            ...this.groupButtons]
    }

    ngOnInit(): void {
        this.loadMenuItems();
    }

    getMenuItems(withChildren = true, index = 0): Array<PepMenuItem> {
        let menuItems: Array<PepMenuItem>;

        index++;

        if (withChildren) {
            menuItems = [
                {
                    key: `${index}_test1`,
                    text: 'test 1',
                    iconName: pepIconSystemBin.name,
                    children: this.getMenuItems(index <= 3, index)
                },
                {
                    key: `${index}_test2`,
                    text: 'test 2',
                    iconName: pepIconSystemBin.name,
                },
                { key: `${index}_sep`, type: 'splitter' },
                {
                    key: `${index}_test3`,
                    text: 'test 3',
                    iconName: pepIconSystemBin.name,
                    children: this.getMenuItems(index <= 3, index),
                },
            ];
        } else {
            menuItems = [
                { key: `${index}_test1`, text: 'test 1' },
                { key: `${index}_test2`, text: 'test 2', disabled: true },
                { key: `${index}_sep`, type: 'splitter' },
                { key: `${index}_test3`, text: 'test 3' },
            ];
        }

        return menuItems;
    }

    private loadMenuItems(): void {
        this.menuItems = this.getMenuItems();
        this.selectedMenuItem = this.menuItems[0];
    }

    toggleMenu(): void {
        this.menuItems = this.menuItems === null ? this.getMenuItems() : null;
    }

    onMenuItemClicked(action: IPepMenuItemClickEvent): void {
        alert(action.source.key);
    }

    menuClicked(event): void {
        alert('menu clicked');
    }

    onGroupButtonClicked(event: IPepButtonClickEvent): void {
        // alert(`${event.source.key}: was clicked`);
    }

    onSearchStateChanged(searchStateChangeEvent: IPepSearchStateChangeEvent) {
        // debugger;
    }

    onSearchChanged(search: any) {
        console.log(search);
        // debugger;
    }

    onSearchAutocompleteChanged(value) {
        console.log(value);
        // debugger;
    }

    onSliderValueChange(value) {
        console.log(value);
    }
}
