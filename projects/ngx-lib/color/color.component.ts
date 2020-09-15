import { Component, OnInit, Input, Output, Renderer2, ElementRef, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { CustomizationService, LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';
import { DialogService } from '@pepperi-addons/ngx-lib/dialog';

import { PepperiColorPickerComponent } from './color-picker.component';
import { PepColorType } from './color.model';

@Component({
    selector: 'pep-color',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.scss']
})
export class PepperiColorComponent implements OnInit, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() label = '';
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment = '0';
    @Input() rowSpan = 1;
    @Input() type: PepColorType = PepColorType.AnyColor;

    @Input() showTitle = true;
    @Input() showAAComplient = true;
    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiForm;

    @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

    LAYOUT_TYPE = LAYOUT_TYPE;

    constructor(
        private dialogService: DialogService,
        private renderer: Renderer2,
        private element: ElementRef
    ) {
    }

    ngOnInit(): void {
        this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
    }

    ngOnDestroy(): void {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }

    changeColor(value: any): void {
        this.value = value;
        this.valueChanged.emit({ apiName: this.key, value });
    }

    chooseColor(): void {
        const dialogRef = this.dialogService.openDialog(
            PepperiColorPickerComponent,
            { value: this.value, type: this.type, showAAComplient: this.showAAComplient });

        dialogRef.afterClosed().subscribe(value => {
            if (value !== undefined && value !== null) {
                this.changeColor(value);
            }
        });
    }


}
