import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { PepMenuStateType, PepMenuItem, PepMenuItemClick } from '@pepperi-addons/ngx-lib/menu';
import { PepButtonSizeType } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-list-actions',
    templateUrl: './list-actions.component.html',
    styleUrls: ['./list-actions.component.scss']
})

@Injectable()
export class PepListActionsComponent implements OnInit {

    @Input() actions: Array<PepMenuItem> = null;
    @Input() sizeType: PepButtonSizeType = 'md';
    @Input() xPosition: 'before' | 'after' = 'before';
    @Input() hidden = false;

    @Output() actionClick: EventEmitter<PepMenuItemClick> = new EventEmitter<PepMenuItemClick>();
    @Output() stateChange: EventEmitter<PepMenuStateType> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {

    }

    onActionClicked(action): void {
        this.actionClick.emit(action);
    }

    onStateChanged(state): void {
        this.stateChange.emit(state);
    }
}
