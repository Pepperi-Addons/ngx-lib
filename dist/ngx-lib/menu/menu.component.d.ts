import { EventEmitter, OnDestroy } from '@angular/core';
import { LAYOUT_TYPE, PepperiOption } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
export declare class PepperiMenuComponent implements OnDestroy {
    key: string;
    label: string;
    disabled: boolean;
    xAlignment: string;
    options: PepperiOption[];
    invertClass: boolean;
    controlType: string;
    layoutType: LAYOUT_TYPE;
    elementClicked: EventEmitter<any>;
    notifyMenuItemClicked: EventEmitter<any>;
    LAYOUT_TYPE: typeof LAYOUT_TYPE;
    constructor();
    ngOnDestroy(): void;
    menuClicked(event: any): void;
    menuItemClicked(itemKey: any): void;
    static ɵfac: i0.ɵɵFactoryDef<PepperiMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PepperiMenuComponent, "pep-menu", never, { "key": "key"; "label": "label"; "disabled": "disabled"; "xAlignment": "xAlignment"; "options": "options"; "invertClass": "invertClass"; "layoutType": "layoutType"; }, { "elementClicked": "elementClicked"; "notifyMenuItemClicked": "notifyMenuItemClicked"; }, never, never>;
}
