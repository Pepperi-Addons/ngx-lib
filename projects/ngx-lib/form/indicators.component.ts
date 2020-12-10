import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PepLayoutType } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-indicators',
    templateUrl: './indicators.component.html',
    styleUrls: ['./indicators.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepIndicatorsComponent {
    @Input() key: string;
    @Input() value: string;

    controlType = 'indicators';

    @Input() layoutType: PepLayoutType = 'table';

    constructor() { }
}
