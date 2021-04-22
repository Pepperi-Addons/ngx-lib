import {
    Component,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import { PepStyleType, PepStyleStateType, PepSizeType } from '@pepperi-addons/ngx-lib';
import { PepIconType } from '@pepperi-addons/ngx-lib/icon';
import { PepButton, IPepButtonClickEvent } from './button.model';

/**
 * This is a button component that support pepperi theme
 * style & state & sizes
 *
 * @export
 * @class PepButtonComponent
 * @implements {OnDestroy}
 */
@Component({
    selector: 'pep-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class PepButtonComponent implements OnDestroy {
    /**
     * @ignore
     */
    @Input() key: string;

    /**
     * The text on the button.
     *
     * @type {string}
     * @memberof PepButtonComponent
     */
    @Input() value: string;


    /**
     * The style of the button.
     *
     * @type {PepStyleType}
     * @memberof PepButtonComponent
     */
    @Input() styleType: PepStyleType = 'weak';
    @Input() styleStateType: PepStyleStateType = 'system';
    @Input() sizeType: PepSizeType = 'md';
    @Input() classNames = '';
    @Input() disabled = false;
    @Input() iconName: PepIconType;
    @Input() iconPosition: 'start' | 'end' = 'end';

    @Output()
    buttonClick: EventEmitter<IPepButtonClickEvent> = new EventEmitter<IPepButtonClickEvent>();

    /**
     * @ignore
     */
    ngOnDestroy(): void {
        if (this.buttonClick) {
            this.buttonClick.unsubscribe();
        }
    }

    /**
     * @ignore
     */
    onButtonClicked(event: Event): void {
        const button = new PepButton({
            key: this.key,
            value: this.value,
            // callback: this.callback
        });

        const buttonClick = {
            source: button,
            event,
        };

        // if (this.callback) {
        //     this.callback(buttonClick);
        // } else {
        this.buttonClick.emit(buttonClick);
        // }
    }
}
