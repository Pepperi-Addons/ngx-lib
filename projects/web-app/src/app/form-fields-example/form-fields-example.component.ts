import { Component, OnInit } from '@angular/core';
import { LayoutService, PepFieldClickedData, PepFieldValueChangedData, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { PepButtonClick, PepButton } from '@pepperi-addons/ngx-lib/button';
import { pepIconSystemBin } from '@pepperi-addons/ngx-lib/icon';
import { PepMenuItem, PepMenuItemClick } from '@pepperi-addons/ngx-lib/menu';

@Component({
    templateUrl: './form-fields-example.component.html',
    styleUrls: ['./form-fields-example.component.scss']
})
export class FormFieldsExampleComponent implements OnInit {

    title = 'client-side';
    minDateValue: number;
    maxDateValue: number;
    
    richHtml;

    menuItems: Array<PepMenuItem>;

    PepScreenSizeType = PepScreenSizeType;
    screenSize: PepScreenSizeType;

    searchString = '';
    searchAutoCompleteValues = [];

    constructor(
        public layoutService: LayoutService
    ) { 
        this.minDateValue = new Date('1-1-2019').getTime();
        this.maxDateValue = new Date('1-1-2021').getTime();

        this.layoutService.onResize$.pipe().subscribe(size => {
            this.screenSize = size;
        });

        this.richHtml = "<h1><u>Rich Text Value Example</u></h1><h2><em style=' color: rgb(147, 200, 14);'>Pepperi Rich Text Value </em><u style='color: rgb(0, 102, 204);'>Example</u></h2><ol><li><strong><u>Pepperi Rich Text Value Example</u></strong></li><li>Pepperi Rich text [value] example</li></ol>";
    }

    ngOnInit(): void {
        this.loadMenuItems();
    }

    getMenuItems(): Array<PepMenuItem> {
        const menuItems: Array<PepMenuItem> = [
            { key: 'test1', title: 'test 1'},
            { key: 'test2', title: 'test 2', disabled: true },
            { key: 'sep', type: 'splitter' },
            { key: 'test3', title: 'test 3'}];

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
}
