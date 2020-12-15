import { Component, OnInit } from '@angular/core';
import { LayoutService, PepFieldClickedData, PepFieldValueChangedData, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { PepButtonClick, PepButton } from '@pepperi-addons/ngx-lib/button';
import { pepIconSystemBin } from '@pepperi-addons/ngx-lib/icon';
import { PepMenuItem, PepMenuItemClick } from '@pepperi-addons/ngx-lib/menu';

@Component({
    templateUrl: './top-bar-example.component.html',
    styleUrls: ['./top-bar-example.component.scss']
})
export class TopBarExampleComponent implements OnInit {

    title = 'client-side';
    groupButtons: Array<PepButton>;
    
    menuItems: Array<PepMenuItem>;

    PepScreenSizeType = PepScreenSizeType;
    screenSize: PepScreenSizeType;

    searchString = '';
    searchAutoCompleteValues = [];

    constructor(
        public layoutService: LayoutService
    ) { 
        this.layoutService.onResize$.pipe().subscribe(size => {
            this.screenSize = size;
        });

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
    }

    ngOnInit(): void {
        this.loadMenuItems();
    }

    getMenuItems(withChildren = true, index = 0): Array<PepMenuItem> {
        let menuItems: Array<PepMenuItem>;
        
        index++;

        if (withChildren) {
            menuItems = [
                { key: 'test1', title: 'test 1', iconName: pepIconSystemBin.name},
                { key: 'test2', title: 'test 2', disabled: true, iconName: pepIconSystemBin.name },
                { key: 'sep', type: 'splitter' },
                { key: 'test3', title: 'test 3', iconName: pepIconSystemBin.name, children: this.getMenuItems(index <= 3, index)}
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

    onGroupButtonClicked(event: PepButtonClick): void {
        alert(`${event.source.key}: was clicked`);
    }

    onSearchStateChanged(searchState: boolean) {
        debugger;
    }

    onSearchChanged(search: any) {
        debugger;
    }

    onSearchAutocompleteChanged(value) {
        debugger;
        
    }
}
