import {
    Component,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    Renderer2,
    ElementRef,
} from '@angular/core';
import { PepStyleType, PepSizeType } from '@pepperi-addons/ngx-lib';
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
    @Input() disabled = false;
    @Input() iconName: PepIconType;
    @Input() iconPosition: 'start' | 'end' = 'end';

    private _visible = true;
    @Input()
    set visible(visible: boolean) {
        this._visible = visible;
        if (visible) {
            this.renderer.removeClass(
                this.element.nativeElement,
                'hidden-element'
            );
        } else {
            this.renderer.addClass(
                this.element.nativeElement,
                'hidden-element'
            );
        }
    }
    get visible(): boolean {
        return this._visible;
    }

    @Output()
    buttonClick: EventEmitter<IPepButtonClickEvent> = new EventEmitter<IPepButtonClickEvent>();

    ngOnDestroy(): void {
        if (this.buttonClick) {
            this.buttonClick.unsubscribe();
        }
    }

    constructor(private renderer: Renderer2, private element: ElementRef) {}

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
