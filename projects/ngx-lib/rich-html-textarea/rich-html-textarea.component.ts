import {
    Component, OnInit, Input, Output, EventEmitter,
    ChangeDetectionStrategy, OnDestroy, ElementRef, Renderer2, TemplateRef, ViewChild, OnChanges, SimpleChanges
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PepLayoutType, CustomizationService, PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT, PepFieldValueChangedData, PepRichHtmlTextareaField } from '@pepperi-addons/ngx-lib';
import { DialogService, PepDialogData } from '@pepperi-addons/ngx-lib/dialog';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

export interface PepRichHtmlTextareaToolbarOptions {
    font?: any;
    size?: any;
    header?: any;
    bold?: any;
    italic?: any;
    underline?: any;
    strike?: any;
    link?: any;
    image?: any;
    ordered?: any;
    bullet?: any;
    color?: any;
    background?: any;
    align?: any;
}

@Component({
    selector: 'pep-rich-html-textarea',
    templateUrl: './rich-html-textarea.component.html',
    styleUrls: ['./rich-html-textarea.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepRichHtmlTextareaComponent implements OnInit, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() label = '';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() maxFieldCharacters = 0;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;

    controlType = 'richhtmltextarea';

    @Input() form: FormGroup = null;
    @Input() isActive = false;
    @Input() showTitle = true;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() inlineMode = false;

    protected _toolbarOptions: PepRichHtmlTextareaToolbarOptions;
    @Input()
    get toolbarOptions(): PepRichHtmlTextareaToolbarOptions { return this._toolbarOptions; }
    set toolbarOptions(options: PepRichHtmlTextareaToolbarOptions) {
        if (options) {
            this._toolbarOptions = options;
        }
    }

    @Output() valueChange: EventEmitter<PepFieldValueChangedData> = new EventEmitter<PepFieldValueChangedData>();

    @ViewChild('richTextEditorDialogTemplate', { read: TemplateRef }) richTextEditorDialogTemplate: TemplateRef<any>;
    quillContent = '';
    quillContentDialog = '';

    fieldHeight = '';
    standAlone = false;
    active = false;

    constructor(
        private sanitizer: DomSanitizer,
        private dialogService: DialogService,
        private customizationService: CustomizationService,
        private renderer: Renderer2,
        private element: ElementRef
    ) {
        this._toolbarOptions = this.getDefaultToolbarOptions();
    }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;
            // this.form = this.customizationService.getDefaultFromGroup(
            //     this.key, this.value, this.required, this.readonly, this.disabled, this.maxFieldCharacters);
            const pepField = new PepRichHtmlTextareaField({
                key: this.key,
                value: this.value,
                required: this.required,
                readonly: this.readonly,
                disabled: this.disabled,
                maxFieldCharacters: this.maxFieldCharacters
            });
            this.form = this.customizationService.getDefaultFromGroup(pepField);

            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }

        this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);

        this.quillContent = this.value;
    }

    ngOnDestroy(): void {
        if (this.valueChange) {
            this.valueChange.unsubscribe();
        }
    }

    getDefaultToolbarOptions(): PepRichHtmlTextareaToolbarOptions {
        return {
            font: false,
            size: false,
            header: true,
            bold: true,
            italic: true,
            underline: true,
            strike: false,
            link: true,
            image: true,
            ordered: true,
            bullet: true,
            color: true,
            background: false,
            align: true,
        };
    }

    changeValue(value: any, lastFocusedField: any = null): void {
        if (value !== this.value) {
            this.value = value;
            this.quillContent = value;
            this.customizationService.updateFormFieldValue(this.form, this.key, value);
            this.valueChange.emit({ key: this.key, value, lastFocusedField });
        }
    }

    cardTemplateClicked(event: any): void {
        this.openDialog();
    }

    openDialog(): void {
        const config = this.dialogService.getDialogConfig({
            // minWidth: '50vw',
            // maxWidth: '90vw',
            // maxHeight: '90vh',
        }, 'large');

        // If disabled open regular modal as html mode.
        if (this.disabled || this.readonly) {
            const data = new PepDialogData({
                title: this.label,
                content: this.quillContent,
                showFooter: false
            });
            this.dialogService.openDefaultDialog(data, config);
        } else {
            this.quillContentDialog = this.quillContent;
            const dialogRef = this.dialogService.openDialog(
                this.richTextEditorDialogTemplate,
                {},
                config);

            dialogRef.afterClosed().subscribe(value => {
                if (value !== undefined && value !== null) {
                    this.changeValue(value);
                }
            });
        }
    }

    // Init quillContent in case that there are html tags...
    onEditorCreated(quill: any, inDialog: boolean): void {
        if (!inDialog) {
            this.quillContent = quill.getText();
        }
    }

    onContentChanged(obj: any, inDialog: boolean): void {
        if (inDialog) {
            this.quillContentDialog = obj.html;
        } else {
            this.quillContent = obj.html;
        }
    }

    onBlur(obj: any, inDialog: boolean): void {
        if (!inDialog) {
            this.active = false;
            this.changeValue(this.quillContent);
        }
    }

    onFocus(obj: any, inDialog: boolean): void {
        if (!inDialog) {
            this.active = true;
        }
    }
}
