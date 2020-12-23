import { Component, Input, OnInit, ChangeDetectionStrategy, Renderer2, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PepLayoutType, PepCustomizationService, PepHorizontalAlignment, DEFAULT_HORIZONTAL_ALIGNMENT } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-separator',
    templateUrl: './separator.component.html',
    styleUrls: ['./separator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepSeparatorComponent implements OnInit {
    @Input() key = '';
    @Input() label = '';
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;

    controlType = 'separator';

    @Input() form: FormGroup = null;
    @Input() layoutType: PepLayoutType = 'form';

    standAlone = false;

    constructor(
        private renderer: Renderer2,
        private element: ElementRef) { }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;

            this.renderer.addClass(this.element.nativeElement, PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
    }
}
