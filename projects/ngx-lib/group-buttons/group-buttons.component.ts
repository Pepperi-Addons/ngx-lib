import {
    Component,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import { PepLayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import {
    PepButton,
    IPepButtonClickEvent,
} from '@pepperi-addons/ngx-lib/button';

export type PepGroupButtonsViewType = 'regular' | 'dropdown' | 'split';
@Component({
    selector: 'pep-group-buttons',
    templateUrl: './group-buttons.component.html',
    styleUrls: ['./group-buttons.component.scss'],
})
export class PepGroupButtonsComponent implements OnDestroy {
    PepScreenSizeType = PepScreenSizeType;
    screenSize: PepScreenSizeType;

    @Input() viewType: PepGroupButtonsViewType = 'regular';
    @Input() buttons: Array<PepButton>;
    @Input() buttonsClass: string;
    @Input() buttonsDisabled: boolean;

    @Output()
    buttonClick: EventEmitter<IPepButtonClickEvent> = new EventEmitter<IPepButtonClickEvent>();

    constructor(public layoutService: PepLayoutService) {
        this.layoutService.onResize$.subscribe((size) => {
            this.screenSize = size;
        });
    }

    ngOnDestroy(): void {
        // if (this.buttonClick) {
        //     this.buttonClick.unsubscribe();
        // }
    }

    onButtonClicked(event: Event, button: PepButton): void {
        const buttonClick = {
            source: button,
            event,
        };

        if (button?.callback) {
            button.callback(buttonClick);
        } else {
            this.buttonClick.emit(buttonClick);
        }
    }
}
