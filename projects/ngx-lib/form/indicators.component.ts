import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-indicators',
    templateUrl: './indicators.component.html',
    styleUrls: ['./indicators.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepperiIndicatorsComponent {
    @Input() key: string;
    @Input() value: string;

    controlType = 'indicators';

    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiTable;
    LAYOUT_TYPE = LAYOUT_TYPE;

    constructor() { }
}
