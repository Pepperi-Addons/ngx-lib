import { Component, Injectable, Input } from '@angular/core';

@Component({
    selector: 'pep-list-total',
    templateUrl: './list-total.component.html',
    styleUrls: ['./list-total.component.scss'],
})
@Injectable()
export class PepListTotalComponent {
    @Input() totalRows = -1;
    @Input() totalAmount = -1;
    @Input() isMapView = false;
}
