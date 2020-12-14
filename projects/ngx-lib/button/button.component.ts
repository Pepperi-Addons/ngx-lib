import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { PepStyleType, PepSizeType } from '@pepperi-addons/ngx-lib';
import { PepIcon } from '@pepperi-addons/ngx-lib/icon';
import { PepButton, PepButtonClick } from './button.model';

@Component({
    selector: 'pep-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnDestroy {
    @Input() key: string;
    @Input() value: string;

    @Input() styleType: PepStyleType = 'weak';
    @Input() sizeType: PepSizeType = 'md';
    @Input() classNames = '';

    @Input() disabled = false;
    @Input() icon: PepIcon = null;
    // @Input() callback?: (action: PepButtonClick) => void = null;

    @Output() buttonClick: EventEmitter<PepButtonClick> = new EventEmitter<PepButtonClick>();

    constructor() {
    }

    ngOnInit(): void { }

    ngOnDestroy(): void {
        if (this.buttonClick) {
            this.buttonClick.unsubscribe();
        }
    }

    onButtonClicked(event: Event): void {
        const button = new PepButton({
            key: this.key,
            value: this.value,
            // callback: this.callback
        });

        const buttonClick = new PepButtonClick(button, event);

        // if (this.callback) {
        //     this.callback(buttonClick);
        // } else {
            this.buttonClick.emit(buttonClick);
        // }
    }
}
