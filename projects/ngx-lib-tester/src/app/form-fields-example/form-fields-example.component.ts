import { Component, OnInit, ViewChild } from '@angular/core';

import { PepSnackBarService, PepSnackBarData } from '@pepperi-addons/ngx-lib/snack-bar';
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


import { PepChipsComponent } from '@pepperi-addons/ngx-lib/chips';
import { IPepSelectionOption } from '@pepperi-addons/ngx-lib/select-panel';
import { PepButton } from 'ngx-lib/button';

@Component({
    templateUrl: './form-fields-example.component.html',
    styleUrls: ['./form-fields-example.component.scss'],
})
export class FormFieldsExampleComponent implements OnInit {
    @ViewChild('chipsComp') chipsComp: PepChipsComponent;

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

    regex = /^[0-9]*$/;

    multiSelectArr = [];
    numOfSelectionColumn = 1;
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
    public numOfColumn : Array<PepButton> = [
            { key: '1', value: '1', callback: (event: any) => this.onColNumChanged(event.source.key)},
            { key: '2', value: '2', callback: (event: any) => this.onColNumChanged(event.source.key)},
            { key: '3', value: '3', callback: (event: any) => this.onColNumChanged(event.source.key)}
    ] 

    selectedChips(){
        console.log('selectedChips', this.chipsComp.chips);
    }

    onSelectionChange(value) {
        console.log('onSelectionChange', value);
    }

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
            "<h1><u>Rich Text Value Example</u></h1><h2><em style=' color: rgb(147, 200, 14);'>Pepperi Rich Text Value </em><u style='color: rgb(0, 102, 204);'>Example</u></h2><ol><li><strong><u>Pepperi Rich Text Value Example</u></strong></li><li>Pepperi Rich text [value] example</li><li>Pepperi Rich text [value] example</li><li>Pepperi Rich text [value] example</li><li>Pepperi Rich text [value] example</li></ol>";
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

        for(let i = 0; i < 5; i++){
            const opt: IPepSelectionOption = { 
                'key': 'val' + i.toString(), 
                'value': 'Opt' + i.toString(),
                isChecked: i % 2 == 0
            };

            this.multiSelectArr.push(opt);
        }

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
        const data: PepSnackBarData = {
            title: 'test',
            content: 'content bla bla'
        }

        this.snackBarService.openDefaultSnackBar(data);
    }

    onColNumChanged(event){
        this.numOfSelectionColumn = event;
    }

    
   
}
