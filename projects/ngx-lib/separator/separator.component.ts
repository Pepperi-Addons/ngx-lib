import { Component, Input, OnInit, ChangeDetectionStrategy, Renderer2, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-separator',
    templateUrl: './separator.component.html',
    styleUrls: ['./separator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepperiSeparatorComponent implements OnInit {
    @Input() key = '';
    @Input() label = '';
    @Input() xAlignment = '0';

    controlType = 'separator';

    @Input() form: FormGroup = null;
    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiForm;

    LAYOUT_TYPE = LAYOUT_TYPE;
    standAlone = false;

    constructor(
        private renderer: Renderer2,
        private element: ElementRef) { }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;

            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
    }
}
