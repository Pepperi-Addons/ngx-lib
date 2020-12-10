import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { LayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import { PepButton, PepButtonClick } from '@pepperi-addons/ngx-lib/button';
import { delay } from 'rxjs/operators';

export type PepGroupButtonsViewType = 'regular' | 'dropdown' | 'split';
@Component({
    selector: 'pep-group-buttons',
    templateUrl: './group-buttons.component.html',
    styleUrls: ['./group-buttons.component.scss'],
})
export class GroupButtonsComponent implements OnInit, OnDestroy {
    PepScreenSizeType = PepScreenSizeType;
    screenSize: PepScreenSizeType;

    @Input() viewType: PepGroupButtonsViewType = 'regular';
    @Input() buttons: Array<PepButton>;
    @Input() buttonsClass: string;
    @Input() buttonsDisabled: string;

    @Output() buttonClick: EventEmitter<PepButtonClick> = new EventEmitter<PepButtonClick>();

    constructor(public layoutService: LayoutService) {
        this.layoutService.onResize$
            .subscribe(size => {
                this.screenSize = size;
            });
    }

    ngOnInit(): void { }

    ngOnDestroy(): void {
        if (this.buttonClick) {
            this.buttonClick.unsubscribe();
        }
    }

    onButtonClicked(event: Event, button: PepButton): void {
        const buttonClick = new PepButtonClick(button, event);

        if (button?.callback) {
            button.callback(buttonClick);
        } else {
            this.buttonClick.emit(buttonClick);
        }
    }
}
