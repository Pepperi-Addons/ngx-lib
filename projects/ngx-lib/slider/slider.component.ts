import {
    Component,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    Renderer2,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { PepLayoutService, DEFAULT_HORIZONTAL_ALIGNMENT, PepHorizontalAlignment } from '@pepperi-addons/ngx-lib';

/**
 * This is a slider component that support pepperi theme
 * style & state & sizes
 *
 * @export
 * @class PepSliderComponent
 * @implements {OnDestroy}
 */
@Component({
    selector: 'pep-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
})
export class PepSliderComponent implements OnInit {
    @Input() label = '';
    @Input() disabled = false;
    @Input() hint = '';

    private _background = '';
    @Input()
    set background(background: string) {
        if (!background) {
            background = '';
        }

        this._background = background;
        this.setBackground();
    }
    get background(): string {
        return this._background;
    }

    @Input() step = 1;
    @Input() minValue = NaN;
    @Input() maxValue = NaN;

    private _value = NaN;
    @Input()
    set value(value: number) {
        this._value = value;
    }
    get value(): number {
        return this._value;
    }

    @Output()
    valueChange: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    inputChange: EventEmitter<number> = new EventEmitter<number>();

    xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    sliderWrapper: any = null;

    constructor(private renderer: Renderer2, private element: ElementRef, private pepLayoutService: PepLayoutService) { }

    private setBackground(): void {
        // Get the wrapper for set the background.
        if (!this.sliderWrapper) {
            this.sliderWrapper = this.element.nativeElement.querySelector('.mat-slider-wrapper');
        }

        if (this.sliderWrapper) {
            this.renderer.setStyle(this.sliderWrapper, 'background', this.background?.length > 0 ? this.background : '');

            if (this.background?.length > 0) {
                this.renderer.removeClass(this.sliderWrapper, 'background-color-dimmed');
            } else {
                this.renderer.addClass(this.sliderWrapper, 'background-color-dimmed');
            }
        }
    }

    ngOnInit(): void {
        this.xAlignment = this.pepLayoutService.isRtl() ? 'right' : 'left';
        this.setBackground();
    }

    onValueChange(event) {
        this.valueChange.emit(event.value);
    }

    onInputChange(event) {
        this.inputChange.emit(event.value);
    }
}
