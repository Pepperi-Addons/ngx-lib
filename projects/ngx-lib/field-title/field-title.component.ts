import { Component, Input } from '@angular/core';
import {
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
} from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-field-title',
    templateUrl: './field-title.component.html',
    styleUrls: ['./field-title.component.scss', './field-title.component.theme.scss'],
})
export class PepFieldTitleComponent {
    @Input() label = '';
    @Input() mandatory = false;
    @Input() disabled = false;
    @Input() maxFieldCharacters = 0;
    @Input() hint = '';
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;

    @Input() showTitle = true;
    @Input() inputLength = 0;
    @Input() fontBodyType: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'xs';

}
