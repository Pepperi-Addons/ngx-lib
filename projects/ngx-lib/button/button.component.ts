import {
    Component,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import {
    PepStyleType,
    PepSizeType,
    PepStyleStateType,
} from '@pepperi-addons/ngx-lib';
import { PepIconType } from '@pepperi-addons/ngx-lib/icon';
import { PepButton, IPepButtonClickEvent } from './button.model';

@Component({
    selector: 'pep-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class PepButtonComponent implements OnDestroy {
    @Input() key: string;
    @Input() value: string;
    @Input() styleType: PepStyleType = 'weak';
    @Input() sizeType: PepSizeType = 'md';
    @Input() classNames = '';
    @Input() styleStateType: PepStyleStateType = 'system';
    @Input() disabled = false;
    @Input() iconName: PepIconType;
    @Input() iconPosition: 'start' | 'end' = 'end';

    @Output()
    buttonClick: EventEmitter<IPepButtonClickEvent> = new EventEmitter<IPepButtonClickEvent>();

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
