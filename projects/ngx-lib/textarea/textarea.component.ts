import {
    Component, OnInit, OnChanges, Input, Output, EventEmitter,
    ChangeDetectionStrategy, ElementRef, ViewChild, OnDestroy, Renderer2
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import { DialogService, DialogData, DialogDataType } from '@pepperi-addons/ngx-lib/dialog';

@Component({
    selector: 'pep-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepperiTextareaComponent implements OnChanges, OnInit, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() label = '';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() maxFieldCharacters: number;
    @Input() textColor = '';
    @Input() xAlignment = '0';
    @Input() rowSpan = 1;
    @Input() lastFocusField: any;

    controlType = 'textarea';

    @Input() form: FormGroup = null;
    @Input() isActive = false;
    @Input() showTitle = true;
    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiForm;

    @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('input') input: ElementRef;

    LAYOUT_TYPE = LAYOUT_TYPE;
    fieldHeight = '';
    standAlone = false;
    isInEditMode = false;

    constructor(
        private dialogService: DialogService,
        private customizationService: CustomizationService,
        private renderer: Renderer2,
        private element: ElementRef
    ) {
    }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(
                this.key, this.value, this.required, this.readonly, this.disabled, this.maxFieldCharacters);

            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }

        this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
    }

    ngOnChanges(changes: any): void {
        const self = this;
        setTimeout(() => {
            if (self.lastFocusField) {
                self.lastFocusField.focus();
                self.lastFocusField = null;
            }
        }, 100);
    }

    ngOnDestroy(): void {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }

    onBlur(event: any): void {
        const value = event.target ? event.target.value : event;
        this.changeValue(value, event.relatedTarget);

        setTimeout(() => {
            if (this.isInEditMode) {
                this.isInEditMode = false;
            }
        }, 0);
    }

    changeValue(value: any, lastFocusedField: any = null): void {
        if (value !== this.value) {
            this.value = value;
            this.customizationService.updateFormFieldValue(this.form, this.key, value);
            this.valueChanged.emit({ apiName: this.key, value, lastFocusedField });
        }
    }

    cardTemplateClicked(event: any): void {
        this.openDialog();
    }

    openDialog(): void {
        // TODO:
        const data = new DialogData({
            title: this.label,
            content: this.value,
            contentType: DialogDataType.TextArea,
            contentData: { key: this.key, disabled: this.disabled },
            showFooter: true
        });

        const config = this.dialogService.getDialogConfig({
            maxWidth: '90vw',
            maxHeight: '90vh'
        });

        const dialogRef = this.dialogService.openDefaultDialog(data, config);

        dialogRef.afterClosed().subscribe(value => {
            if (value !== undefined && value !== null) {
                this.changeValue(value);
            }
        });
    }
}
