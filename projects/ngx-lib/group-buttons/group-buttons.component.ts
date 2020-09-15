import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { LayoutService, SCREEN_SIZE } from '@pepperi-addons/ngx-lib';
import { delay } from 'rxjs/operators';

export interface PepperiGroupButton {
    Value;
    Class;
    Icon;
    Callback;
}

export enum GROUP_BUTTONS_VIEW_TYPE {
    Regular,
    Dropdown,
    Split,
}

@Component({
    selector: 'pep-group-buttons',
    templateUrl: './group-buttons.component.html',
    styleUrls: ['./group-buttons.component.scss'],
})
export class GroupButtonsComponent implements OnInit, OnDestroy {
    GROUP_BUTTONS_VIEW_TYPE = GROUP_BUTTONS_VIEW_TYPE;
    screenSize: SCREEN_SIZE;

    @Input() viewType: GROUP_BUTTONS_VIEW_TYPE = GROUP_BUTTONS_VIEW_TYPE.Regular;
    @Input() buttons: Array<PepperiGroupButton>;
    @Input() buttonsClass: string;
    @Input() buttonsDisabled: string;

    // @Output() buttonClick: EventEmitter<PepperiGroupButton> = new EventEmitter<PepperiGroupButton>();

    constructor(public layoutService: LayoutService) {
        this.layoutService.onResize$
            .pipe(delay(0))
            .subscribe(size => {
                this.screenSize = size;
            });
    }

    ngOnInit(): void { }

    ngOnDestroy() {
        // if (this.buttonClick) this.buttonClick.unsubscribe();
    }

    // onButtonClicked(button: PepperiGroupButton) {
    //     this.buttonClick.emit(button);
    // }
}
