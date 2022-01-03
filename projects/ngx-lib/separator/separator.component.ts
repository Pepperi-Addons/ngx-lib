import {
    Component,
    Input,
    OnInit,
    ChangeDetectionStrategy,
    Renderer2,
    ElementRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    PepLayoutType,
    PepCustomizationService,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
} from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-separator',
    templateUrl: './separator.component.html',
    styleUrls: ['./separator.component.scss', './separator.component.theme.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepSeparatorComponent implements OnInit {
    @Input() key = '';
    @Input() label = '';
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;

    controlType = 'separator';

    @Input() form: FormGroup = null;
    @Input() layoutType: PepLayoutType = 'form';
    // @Input() renderTitle = true;

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

    standAlone = false;

    constructor(private renderer: Renderer2, private element: ElementRef) { }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;

            this.renderer.addClass(
                this.element.nativeElement,
                PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );

            // There is no pep-title-field here
            // if (!this.renderTitle) {
            //     this.renderer.addClass(
            //         this.element.nativeElement,
            //         PepCustomizationService.STAND_ALONE_FIELD_NO_SPACING_CLASS_NAME
            //     );
            // }
        }
    }
}
