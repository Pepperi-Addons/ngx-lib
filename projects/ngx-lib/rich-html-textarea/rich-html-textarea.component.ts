import {
    Component, OnInit, Input, Output, EventEmitter,
    ChangeDetectionStrategy, OnDestroy, ElementRef, Renderer2, TemplateRef, ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import { DialogService, DialogData, DialogDataType } from '@pepperi-addons/ngx-lib/dialog';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'pep-rich-html-textarea',
    templateUrl: './rich-html-textarea.component.html',
    styleUrls: ['./rich-html-textarea.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepperiRichHtmlTextareaComponent implements OnInit, OnDestroy {
    @Input() key = '';
    @Input() value = '';
    @Input() label = '';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() maxFieldCharacters = 0;
    @Input() xAlignment = '0';
    @Input() rowSpan = 1;

    controlType = 'richhtmltextarea';

    @Input() form: FormGroup = null;
    @Input() isActive = false;
    @Input() showTitle = true;
    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiForm;

    @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('richTextEditorDialogTemplate', { read: TemplateRef }) richTextEditorDialogTemplate: TemplateRef<any>;
    quillContent: SafeHtml = '';

    LAYOUT_TYPE = LAYOUT_TYPE;
    fieldHeight = '';
    standAlone = false;

    constructor(
        private sanitizer: DomSanitizer,
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

    ngOnDestroy(): void {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
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
        this.quillContent = this.sanitizer.bypassSecurityTrustHtml(this.value);

        const config = this.dialogService.getDialogConfig({
            minWidth: '50vw',
            maxWidth: '90vw',
            maxHeight: '90vh',
        });

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
