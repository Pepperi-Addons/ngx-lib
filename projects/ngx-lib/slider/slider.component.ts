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
    @Input() background = '';
    @Input() step: number = 1;
    @Input() minValue = NaN;
    @Input() maxValue = NaN;

    private _value = null;
    @Input()
    set value(value: string) {
        if (!value) {
            value = '';
        }

        this._value = value;
    }
    get value(): string {
        return this._value;
    }

    @Output()
    valueChange: EventEmitter<string> = new EventEmitter<string>();

    xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;

    constructor(private renderer: Renderer2, private element: ElementRef, private pepLayoutService: PepLayoutService) { }

    ngOnInit(): void {
        this.xAlignment = this.pepLayoutService.isRtl() ? 'right' : 'left';

        // Get the wrapper for set the background.
        const sliderWrapper = this.element.nativeElement.querySelector('.mat-slider-wrapper');
        if (sliderWrapper) {
            this.renderer.setStyle(sliderWrapper, 'background', this.background.length > 0 ? this.background : '#ccc');
        }
    }

    onValueChange(event) {
        this.valueChange.emit(event.value);
    }
}
