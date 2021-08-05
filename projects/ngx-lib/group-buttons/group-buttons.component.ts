import {
    Component,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import {
    PepLayoutService, PepScreenSizeType, PepStyleType, PepSizeType
} from '@pepperi-addons/ngx-lib';
import {
    PepButton,
    IPepButtonClickEvent,
} from '@pepperi-addons/ngx-lib/button';

export type PepGroupButtonsViewType = 'regular' | 'dropdown' | 'split' | 'toggle';
@Component({
    selector: 'pep-group-buttons',
    templateUrl: './group-buttons.component.html',
    styleUrls: ['./group-buttons.component.scss'],
})
export class PepGroupButtonsComponent implements OnDestroy {
    PepScreenSizeType = PepScreenSizeType;
    screenSize: PepScreenSizeType;

    @Input() viewType: PepGroupButtonsViewType = 'regular';
    @Input() styleType: PepStyleType = 'weak';
    @Input() sizeType: PepSizeType = 'md';
    @Input() buttons: Array<PepButton> = [];
    @Input() buttonsDisabled: boolean = false;
    @Input() selectedButtonKey = '';

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
        this.selectedButtonKey = button?.key;

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
