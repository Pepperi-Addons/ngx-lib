import {
    Component,
    OnInit,
    Input,
    Output,
    Renderer2,
    ElementRef,
    EventEmitter,
    OnChanges,
    OnDestroy,
} from '@angular/core';
import {
    PepCustomizationService,
    PepLayoutType,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    IPepFieldValueChangeEvent,
} from '@pepperi-addons/ngx-lib';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';
import { PepColorPickerComponent } from './color-picker.component';
import { PepColorType } from './color.model';

@Component({
    selector: 'pep-color',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.scss'],
})
export class PepColorComponent implements OnInit, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() label = '';
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;
    @Input() type: PepColorType = 'any';

    @Input() showTitle = true;
    @Input() showAAComplient = true;
    @Input() layoutType: PepLayoutType = 'form';

    @Output()
    valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();

    constructor(
        private dialogService: PepDialogService,
        private renderer: Renderer2,
        private element: ElementRef
    ) {}

    ngOnInit(): void {
        this.renderer.addClass(
            this.element.nativeElement,
            PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
        );
    }

    ngOnDestroy(): void {
        if (this.valueChange) {
            this.valueChange.unsubscribe();
        }
    }

    changeColor(value: any): void {
        this.value = value;
        this.valueChange.emit({ key: this.key, value });
    }

    chooseColor(): void {
        const dialogRef = this.dialogService.openDialog(
            PepColorPickerComponent,
            {
                value: this.value,
                type: this.type,
                showAAComplient: this.showAAComplient,
            }
        );

        dialogRef.afterClosed().subscribe((value) => {
            if (value !== undefined && value !== null) {
                this.changeColor(value);
            }
        });
    }
}
