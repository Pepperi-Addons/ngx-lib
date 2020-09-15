import { OnInit, OnDestroy } from '@angular/core';
import { LayoutService, SCREEN_SIZE } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
export interface PepperiGroupButton {
    Value: any;
    Class: any;
    Icon: any;
    Callback: any;
}
export declare enum GROUP_BUTTONS_VIEW_TYPE {
    Regular = 0,
    Dropdown = 1,
    Split = 2
}
export declare class GroupButtonsComponent implements OnInit, OnDestroy {
    layoutService: LayoutService;
    GROUP_BUTTONS_VIEW_TYPE: typeof GROUP_BUTTONS_VIEW_TYPE;
    screenSize: SCREEN_SIZE;
    viewType: GROUP_BUTTONS_VIEW_TYPE;
    buttons: Array<PepperiGroupButton>;
    buttonsClass: string;
    buttonsDisabled: string;
    constructor(layoutService: LayoutService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<GroupButtonsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GroupButtonsComponent, "pep-group-buttons", never, { "viewType": "viewType"; "buttons": "buttons"; "buttonsClass": "buttonsClass"; "buttonsDisabled": "buttonsDisabled"; }, {}, never, never>;
}
