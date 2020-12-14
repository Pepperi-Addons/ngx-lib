import { Component, OnInit } from '@angular/core';
import { PepFieldClickedData, PepFieldValueChangedData } from '@pepperi-addons/ngx-lib';
import { PepButtonClick, PepButton } from '@pepperi-addons/ngx-lib/button';
import { pepIconSystemBin } from '@pepperi-addons/ngx-lib/icon';
import { PepMenuItem, PepMenuItemClick } from '@pepperi-addons/ngx-lib/menu';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'addon-ngx-lib-examples',
    templateUrl: './pepperi-ngx-lib-examples.component.html',
    styleUrls: ['./pepperi-ngx-lib-examples.component.scss']
})
export class PepperiNgxLibExamplesComponent implements OnInit {

    title = 'client-side';
    minDateValue: number;
    maxDateValue: number;
    groupButtons: Array<PepButton>;
    richHtml;

    menuItems: Array<PepMenuItem>;

    constructor() { 
        this.minDateValue = new Date('1-1-2019').getTime();
        this.maxDateValue = new Date('1-1-2021').getTime();

        this.groupButtons = [
            {
                key: 'action',
                value: 'test for check the size of the button',
                callback: (event: PepButtonClick) => this.onGroupButtonClicked(event)
            },
            {
                key: 'del',
                class: 'caution',
                callback: (event: PepButtonClick) => this.onGroupButtonClicked(event),
                icon: pepIconSystemBin.name 
            }
        ];

        this.richHtml = "<h1><u>Rich Text Value Example</u></h1><h2><em style=' color: rgb(147, 200, 14);'>Pepperi Rich Text Value </em><u style='color: rgb(0, 102, 204);'>Example</u></h2><ol><li><strong><u>Pepperi Rich Text Value Example</u></strong></li><li>Pepperi Rich text [value] example</li></ol>";
    }

    ngOnInit(): void {
        this.loadMenuItems();
    }

    getMenuItems(withChildren = true, index = 0): Array<PepMenuItem> {
        let menuItems: Array<PepMenuItem>;
        
        index++;

        if (withChildren) {
            menuItems = [
                { key: 'test1', title: 'test 1'},
                { key: 'test2', title: 'test 2', disabled: true },
                { key: 'sep', type: 'splitter' },
                { key: 'test3', title: 'test 3', children: this.getMenuItems(index <= 5, index)}
            ];
        } else {
            menuItems = [
                { key: 'test1', title: 'test 1'},
                { key: 'test2', title: 'test 2', disabled: true },
                { key: 'sep', type: 'splitter' },
                { key: 'test3', title: 'test 3'}
            ];
        }

        return menuItems;
    }

    private loadMenuItems(): void {
        this.menuItems = this.getMenuItems();
    }

    toggleMenu(): void {
        this.menuItems = this.menuItems === null ? this.getMenuItems() : null;
    }

    onMenuItemClicked(action: PepMenuItemClick): void {
        alert(action.source.key);
    }

    menuClicked(event): void {
        alert('menu clicked');
    }

    onValueChanged(event: PepFieldValueChangedData) {
        alert(`${event.key}: value was changed to ${event.value}`);
    }

    elementClicked(event: PepFieldClickedData) {
        alert(`${event.key}: was clicked`);
    }

    onGroupButtonClicked(event: PepButtonClick): void {
        alert(`${event.source.key}: was clicked`);
    }
}
