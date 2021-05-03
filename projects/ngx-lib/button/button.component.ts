import {
    Component,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    Renderer2,
    ElementRef,
} from '@angular/core';
import {
    PepStyleType,
    PepStyleStateType,
    PepSizeType,
} from '@pepperi-addons/ngx-lib';
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
     *
     * @type {string}
     * @memberof PepButtonComponent
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

    /**
     * The style state of the button.
     *
     * @type {PepStyleStateType}
     * @memberof PepButtonComponent
     */
    @Input() styleStateType: PepStyleStateType = 'system';

    /**
     * The size of the button.
     *
     * @type {PepSizeType}
     * @memberof PepButtonComponent
     */
    @Input() sizeType: PepSizeType = 'md';

    /**
     * Class names that should be on the button element tag like classNames="class1 class2"
     *
     * @memberof PepButtonComponent
     */
    @Input() classNames = '';

    /**
     * If the button is disable or not.
     *
     * @type {boolean}
     * @memberof PepButtonComponent
     */
    @Input() disabled = false;

    /**
     * The icon name to show on the button. look in (@link icon -> All icons)
     *
     * @type {PepIconType} See {@link PepIconType}
     * @memberof PepButtonComponent
     */
    @Input() iconName: PepIconType;

    /**
     * The icon position.
     *
     * @type {('start' | 'end')}
     * @memberof PepButtonComponent
     */
    @Input() iconPosition: 'start' | 'end' = 'end';

    /**
     * @ignore
     *
     * @private
     * @memberof PepButtonComponent
     */
    private _visible = true;
    /**
     * If the button is visible or not.
     *
     * @memberof PepButtonComponent
     */
    @Input()
    set visible(visible: boolean) {
        if (visible !== undefined) {
            this._visible = !!visible;
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
    }
    get visible(): boolean {
        return this._visible;
    }

    /**
     * The button click event.
     *
     * @type {EventEmitter<IPepButtonClickEvent>}
     * @memberof PepButtonComponent
     */
    @Output()
    buttonClick: EventEmitter<IPepButtonClickEvent> = new EventEmitter<IPepButtonClickEvent>();

    constructor(private renderer: Renderer2, private element: ElementRef) { }

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
