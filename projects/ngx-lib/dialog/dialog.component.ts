import { Component, Input } from '@angular/core';

@Component({
    selector: 'pep-dialog',
    styleUrls: ['./dialog.component.scss', './dialog.component.theme.scss'],
    templateUrl: './dialog.component.html',
})
export class PepDialogComponent {
    @Input() title: string;
    @Input() showClose = true;
    @Input() showHeader = true;
    @Input() showFooter = true;
}
