import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { PepSnackBarService } from '@pepperi-addons/ngx-lib/snack-bar';
import {
    PepLayoutService,
    IPepFieldClickEvent,
    PepScreenSizeType,
    PepTextboxField,
    PepCustomizationService
} from '@pepperi-addons/ngx-lib';
import { pepIconSystemBin } from '@pepperi-addons/ngx-lib/icon';
import {
    PepMenuItem,
    IPepMenuItemClickEvent,
} from '@pepperi-addons/ngx-lib/menu';
import { PepSnackBarData } from '@pepperi-addons/ngx-lib/snack-bar';
import { PepChipsComponent } from '@pepperi-addons/ngx-lib/chips';
//import { } from '@pepperi-addons/ngx-lib/chips';

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

    textboxFormGroup;
    formattedValue = null;
    chips: any[] = [
        {
            value: 'Chair',
            removable: false
        },
        {
            value: 'Table',
            selectable: false
        },
        {
            value: 'Bench',
            selected: true
        }
    ]

    constructor(
        private snackBarService: PepSnackBarService,
        public layoutService: PepLayoutService,
        private customizationService: PepCustomizationService
    ) {

        this.minDateValue = new Date('1-1-2019').getTime();
        this.maxDateValue = new Date('1-1-2021').getTime();

        this.layoutService.onResize$.pipe().subscribe((size) => {
            this.screenSize = size;
        });

        this.richHtml =
            "<h1><u>Rich Text Value Example</u></h1><h2><em style=' color: rgb(147, 200, 14);'>Pepperi Rich Text Value </em><u style='color: rgb(0, 102, 204);'>Example</u></h2><ol><li><strong><u>Pepperi Rich Text Value Example</u></strong></li><li>Pepperi Rich text [value] example</li></ol>";
    }

    private setTextboxFormGroup() {
        // [key]="'Texbox'" [label]="'Pepperi Texbox'" [placeholder]="'place holder'"
        //                 [maxFieldCharacters]="15" [mandatory]="true" [xAlignment]="'left'" [rowSpan]="2"
        //                 [value]="e'Peppri Textbox'"
        const pepField = new PepTextboxField({
            key: 'Texbox',
            value: 'Peppri Textbox',
            mandatory: true,
            readonly: false,
            disabled: false,
            maxFieldCharacters: 15,
            type: 'text',
            minValue: NaN,
            maxValue: NaN,
        });
        this.textboxFormGroup = this.customizationService.getDefaultFromGroup(
            pepField,
            true
        );
    }

    ngOnInit(): void {
        this.setTextboxFormGroup();

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

    onValueChanged(key: any) {
        alert(`${key}: value was changed`);
    }

    imageChange(event: any) {
        // console.log(event?.fileStr);
    }

    elementClicked(event: IPepFieldClickEvent) {
        alert(`${event.key}: was clicked`);
    }

    raiseSnackBar(event) {
        debugger;
        const data: PepSnackBarData = {
            title: 'test',
            content: 'content bla bla'
        }

        this.snackBarService.openDefaultSnackBar(data);
    }

    
   
}
