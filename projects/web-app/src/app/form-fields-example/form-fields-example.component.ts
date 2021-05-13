import { Component, OnInit } from '@angular/core';
import {
    PepLayoutService,
    IPepFieldClickEvent,
    IPepFieldValueChangeEvent,
    PepScreenSizeType,
} from '@pepperi-addons/ngx-lib';
import { pepIconSystemBin } from '@pepperi-addons/ngx-lib/icon';
import {
    PepMenuItem,
    IPepMenuItemClickEvent,
} from '@pepperi-addons/ngx-lib/menu';

@Component({
    templateUrl: './form-fields-example.component.html',
    styleUrls: ['./form-fields-example.component.scss'],
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

    dateString;
    constructor(public layoutService: PepLayoutService) {
        this.minDateValue = new Date('1-1-2019').getTime();
        this.maxDateValue = new Date('1-1-2021').getTime();

        this.layoutService.onResize$.pipe().subscribe((size) => {
            this.screenSize = size;
        });

        this.richHtml =
            "<h1><u>Rich Text Value Example</u></h1><h2><em style=' color: rgb(147, 200, 14);'>Pepperi Rich Text Value </em><u style='color: rgb(0, 102, 204);'>Example</u></h2><ol><li><strong><u>Pepperi Rich Text Value Example</u></strong></li><li>Pepperi Rich text [value] example</li></ol>";
    }

    ngOnInit(): void {
        this.menuItems = [
            { key: 'test1', text: 'test 1' },
            { key: 'test2', text: 'test 2', disabled: true },
            { key: 'sep', type: 'splitter' },
            { key: 'test3', text: 'test 3' },
        ];

        this.dateString = new Date().toUTCString();
    }

    menuClicked(event): void {
        alert('menu clicked');
    }

    onValueChanged(event: IPepFieldValueChangeEvent) {
        alert(`${event.key}: value was changed to ${event.value}`);
    }

    elementClicked(event: IPepFieldClickEvent) {
        alert(`${event.key}: was clicked`);
    }
}
