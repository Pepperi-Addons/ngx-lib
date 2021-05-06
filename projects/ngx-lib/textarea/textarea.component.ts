import {
    Component,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    ElementRef,
    ViewChild,
    OnDestroy,
    Renderer2,
    TemplateRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {
    PepLayoutType,
    PepCustomizationService,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    IPepFieldValueChangeEvent,
    PepTextareaField,
} from '@pepperi-addons/ngx-lib';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';

@Component({
    selector: 'pep-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepTextareaComponent implements OnChanges, OnInit, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() label = '';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() maxFieldCharacters: number;
    @Input() textColor = '';
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;

    private _rowSpan = 1;
    @Input()
    set rowSpan(value) {
        this._rowSpan = value;
        this.setFieldHeight();
    }
    get rowSpan(): number {
        return this._rowSpan;
    }

    private _visible = true;
    @Input()
    set visible(visible: boolean) {
        this._visible = visible;
        if (visible) {
            this.renderer.removeClass(
                this.element.nativeElement,
                'hidden-element'
            );
        } else {
            this.renderer.addClass(
                this.element.nativeElement,
                'hidden-element'
            );
        }
    }
    get visible(): boolean {
        return this._visible;
    }

    // @Input() lastFocusField: any;

    controlType = 'textarea';

    @Input() form: FormGroup = null;
    @Input() isActive = false;
    @Input() showTitle = true;
    @Input() layoutType: PepLayoutType = 'form';

    @Output()
    valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();

    // @ViewChild('input') input: ElementRef;
    @ViewChild('textAreaDialogTemplate', { read: TemplateRef })
    textAreaDialogTemplate: TemplateRef<any>;

    fieldHeight = '';
    standAlone = false;
    isInEditMode = false;

    dialogRef: MatDialogRef<any>;

    constructor(
        private dialogService: PepDialogService,
        private customizationService: PepCustomizationService,
        private renderer: Renderer2,
        private element: ElementRef
    ) { }

    private setFieldHeight(): void {
        this.fieldHeight = this.customizationService.calculateFieldHeight(
            this.layoutType,
            this.rowSpan,
            this.standAlone
        );
    }

    private setDefaultForm(): void {
        const pepField = new PepTextareaField({
            key: this.key,
            value: this.value,
            required: this.required,
            readonly: this.readonly,
            disabled: this.disabled,
            maxFieldCharacters: this.maxFieldCharacters,
        });
        this.form = this.customizationService.getDefaultFromGroup(pepField);
    }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;
            this.setFieldHeight();
            this.setDefaultForm();

            this.renderer.addClass(
                this.element.nativeElement,
                PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );
        }
    }

    ngOnChanges(changes: any): void {
        if (this.standAlone) {
            this.setDefaultForm();
        }
    }

    ngOnDestroy(): void {
        // if (this.valueChange) {
        //     this.valueChange.unsubscribe();
        // }
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
            this.customizationService.updateFormFieldValue(
                this.form,
                this.key,
                value
            );
            this.valueChange.emit({ key: this.key, value, lastFocusedField });
        }
    }

    cardTemplateClicked(event: any): void {
        this.openDialog();
    }

    openDialog(): void {
        const config = this.dialogService.getDialogConfig(
            {
                // maxWidth: '90vw',
                // maxHeight: '90vh'
            },
            'regular'
        );

        this.dialogRef = this.dialogService.openDialog(
            this.textAreaDialogTemplate,
            {},
            config
        );

        this.dialogRef.afterClosed().subscribe((value) => {
            if (value !== undefined && value !== null) {
                this.changeValue(value);
            }
        });
    }

    closeDialog(data: any = null): void {
        this.dialogRef?.close(data);
    }
}
