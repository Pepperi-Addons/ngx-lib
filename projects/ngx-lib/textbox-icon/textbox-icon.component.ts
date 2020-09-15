import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pep-textbox-icon',
    templateUrl: './textbox-icon.component.html',
    styleUrls: ['./textbox-icon.component.scss'],
})
export class PepperiTextboxIconComponent {
    @Input() value: string;
    @Input() label: string;
    @Input() type?: string;
    @Input() disabled: boolean;

    test = true;
    @Output() iconClicked: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    iconButtonClicked(): void {
        const currentValue = this.value;
        if (currentValue.toString().trim().length > 0) {
            switch (this.type) {
                case 'email':
                    window.open('mailto:' + currentValue, 'email');
                    break;
                case 'phone':
                    window.open('tel:' + currentValue, 'tel');
                    break;
                case 'link':
                    window.open(currentValue);
                    break;
                default:
                    break;
            }
        }

        this.iconClicked.emit();
    }
}
