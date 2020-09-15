import { Component, Input } from '@angular/core';

@Component({
    selector: 'pep-field-title',
    templateUrl: './field-title.component.html',
    styleUrls: ['./field-title.component.scss'],
})
export class PepperiFieldTitleComponent {
    @Input() label = '';
    @Input() required = false;
    @Input() disabled = false;
    @Input() maxFieldCharacters = 0;
    @Input() xAlignment = '0';

    @Input() showTitle = true;
    @Input() inputLength = 0;

    constructor() { }

}
