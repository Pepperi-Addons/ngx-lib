import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    OnDestroy,
    ElementRef,
    Renderer2,
    TemplateRef,
    ViewChild,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    PepLayoutType,
    PepCustomizationService,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    IPepFieldValueChangeEvent,
    PepRichHtmlTextareaField,
} from '@pepperi-addons/ngx-lib';
import {
    PepDialogService,
    PepDialogData,
} from '@pepperi-addons/ngx-lib/dialog';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

export interface IPepRichHtmlTextareaToolbarOptions {
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
    changeDetection: ChangeDetectionStrategy.OnPush,
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

    private _visible = true;
    @Input()
    set visible(visible: boolean) {
        this._visible = visible;
        if (visible) {
            this.renderer.removeClass(this.element.nativeElement, 'hidden-element');
        }
        else {
            this.renderer.addClass(this.element.nativeElement, 'hidden-element');
        }
    }
    get visible(): boolean {
        return this._visible;
    }

    controlType = 'richhtmltextarea';

    @Input() form: FormGroup = null;
    @Input() isActive = false;
    @Input() showTitle = true;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() inlineMode = false;

    protected _toolbarOptions: IPepRichHtmlTextareaToolbarOptions;
    @Input()
    get toolbarOptions(): IPepRichHtmlTextareaToolbarOptions {
        return this._toolbarOptions;
    }
    set toolbarOptions(options: IPepRichHtmlTextareaToolbarOptions) {
        if (options) {
            this._toolbarOptions = options;
        }
    }

    @Output()
    valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();

    @ViewChild('richTextEditorDialogTemplate', { read: TemplateRef })
    richTextEditorDialogTemplate: TemplateRef<any>;
    quillContent = '';
    quillContentDialog = '';

    fieldHeight = '';
    standAlone = false;
    active = false;

    constructor(
        private sanitizer: DomSanitizer,
        private dialogService: PepDialogService,
        private customizationService: PepCustomizationService,
        private renderer: Renderer2,
        private element: ElementRef
    ) {
        this.toolbarOptions = this.getDefaultToolbarOptions();
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
                maxFieldCharacters: this.maxFieldCharacters,
            });
            this.form = this.customizationService.getDefaultFromGroup(pepField);

            this.renderer.addClass(
                this.element.nativeElement,
                PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );
        }

        this.fieldHeight = this.customizationService.calculateFieldHeight(
            this.layoutType,
            this.rowSpan,
            this.standAlone
        );

        this.quillContent = this.value;
    }

    ngOnDestroy(): void {
        // if (this.valueChange) {
        //     this.valueChange.unsubscribe();
        // }
    }

    getDefaultToolbarOptions(): IPepRichHtmlTextareaToolbarOptions {
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
                // minWidth: '50vw',
                // maxWidth: '90vw',
                // maxHeight: '90vh',
            },
            'large'
        );

        // If disabled open regular modal as html mode.
        if (this.disabled || this.readonly) {
            const data = new PepDialogData({
                title: this.label,
                content: this.quillContent,
                showFooter: false,
            });
            this.dialogService.openDefaultDialog(data, config);
        } else {
            this.quillContentDialog = this.quillContent;
            const dialogRef = this.dialogService.openDialog(
                this.richTextEditorDialogTemplate,
                {},
                config
            );

            dialogRef.afterClosed().subscribe((value) => {
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
