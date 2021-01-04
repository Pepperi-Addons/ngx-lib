import { Component, Input } from '@angular/core';
import {
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
} from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-field-title',
    templateUrl: './field-title.component.html',
    styleUrls: ['./field-title.component.scss'],
})
export class PepFieldTitleComponent {
    @Input() label = '';
    @Input() required = false;
    @Input() disabled = false;
    @Input() maxFieldCharacters = 0;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;

    @Input() showTitle = true;
    @Input() inputLength = 0;

    constructor() {}
}
