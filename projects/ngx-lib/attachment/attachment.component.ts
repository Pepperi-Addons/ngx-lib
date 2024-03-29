import {
    Component,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    ElementRef,
    Renderer2,
    OnDestroy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    PepFileService,
    PepCustomizationService,
    PepLayoutType,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    IPepFieldClickEvent,
    PepAttachmentField,
} from '@pepperi-addons/ngx-lib';

/**
 * This is the attachment component that is used to upload 
 * files and media
 *
 */
@Component({
    selector: 'pep-attachment',
    templateUrl: './attachment.component.html',
    styleUrls: ['./attachment.component.scss', './attachment.component.theme.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepAttachmentComponent implements OnInit, OnChanges, OnDestroy {
    /**
     * The attachment key.
     *
     * @memberof PepAttachmentComponent
     */
    @Input() key = '';

    private _src = '';
    /**
     * The src of the attachment.
     *
     * @memberof PepAttachmentComponent
     */
    @Input()
    set src(value: string) {
        if (!value) {
            value = '';
        }

        this._src = value;
        if (this._src.length > 0) {
            // Empty dataURI.
            this.dataURI = null;
        }
    }
    get src(): string {
        return this._src;
    }

    /**
     * The title of the attachment.
     *
     * @memberof PepAttachmentComponent
     */
    @Input() label = '';

    /**
     * If the attachment is mandatory
     *
     * @memberof PepAttachmentComponent
     */
    @Input() mandatory = false;

    /**
     * If the attachment is disabled
     *
     * @memberof PepAttachmentComponent
     */
    @Input() disabled = false;

    /**
     * If the attachment is readonly. It could be with or without `src`
     *
     * @memberof PepAttachmentComponent
     */
    @Input() readonly = false;

    /**
     * The horizontal alignment of the attachment
     *
     * @type {PepHorizontalAlignment}
     * @memberof PepAttachmentComponent
     */
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

    controlType = 'attachment';

    @Input() form: FormGroup = null;
    @Input() showTitle = true;
    @Input() renderTitle = true;

    private _layoutType: PepLayoutType = 'form';
    @Input()
    set layoutType(value: PepLayoutType) {
        this._layoutType = value;
        this.setFieldHeight();
    }
    get layoutType(): PepLayoutType {
        return this._layoutType;
    }

    @Input() isActive = false;

    // To know if handle actions or just raise them as output
    @Input() handleActions = true;
    @Input() hint = '';
    
    @Output()
    chooseFile: EventEmitter<void> = new EventEmitter<void>(); // This event will fired only when handleActions Input is false

    @Output()
    fileChange: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    elementClick: EventEmitter<IPepFieldClickEvent> = new EventEmitter<IPepFieldClickEvent>();

    fieldHeight = '';
    standAlone = false;
    dataURI = null;

    acceptAttachmentType =
        'application/pdf,application/json,text/csv,text/csv-schema,application/msword,application/vnd.ms-excel,text/plain,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/bmp,image/jpg, image/jpeg, image/png, image/tif, image/tiff, txt, json, html';

    constructor(
        private customizationService: PepCustomizationService,
        private renderer: Renderer2,
        public element: ElementRef,
        private fileService: PepFileService
    ) { }

    private setFieldHeight(): void {
        this.fieldHeight = this.customizationService.calculateFieldHeight(
            this.layoutType,
            this.rowSpan,
            this.standAlone
        );
    }

    private setDefaultForm(): void {
        const pepField = new PepAttachmentField({
            key: this.key,
            value: this.src,
            mandatory: this.mandatory,
            readonly: this.readonly,
            disabled: this.disabled,
        });
        this.form = this.customizationService.getDefaultFromGroup(pepField);
    }

    ngOnDestroy(): void {
        //
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

            if (!this.renderTitle) {
                this.renderer.addClass(
                    this.element.nativeElement,
                    PepCustomizationService.STAND_ALONE_FIELD_NO_SPACING_CLASS_NAME
                );
            }
        }
    }

    ngOnChanges(changes: any): void {
        if (this.standAlone) {
            this.setDefaultForm();
        }
        // Moved to src input
        // if (changes.src && changes.src.currentValue.length > 0) {
        //     // Empty dataURI if there is change in the src.
        //     this.dataURI = null;
        // }
    }

    onFileChanged(fileData: any): void {
        // const tmp = value.length > 0 ? JSON.parse(value) : null;
        // set this.dataURI after this.src cause it initialize in the src setter.
        this.src = fileData ? fileData.fileStr : '';
        this.dataURI = fileData;

        this.customizationService.updateFormFieldValue(
            this.form,
            this.key,
            this.dataURI ? this.dataURI.fileExt : ''
        );
        // this.valueChange.emit({
        //     key: this.key,
        //     value,
        // });

        this.fileChange.emit(fileData);
        // this.fileChange.emit(value.length > 0 ? JSON.parse(value) : value);
    }

    onFileClicked(event: IPepFieldClickEvent): void {
        if (this.handleActions) {
            if (this.dataURI != null) {
                const fileStrArr = this.dataURI.fileStr.split(';');
                if (fileStrArr.length === 2) {
                    const win = window.open('', '_blank');
                    const blob = this.fileService.convertFromb64toBlob(
                        this.dataURI.fileStr
                    );
                    const url = URL.createObjectURL(blob);
                    win.location.href = url;
                }
            } else {
                if (this.fileService.isValidUrl(this.src)) {
                    const win = window.open('', '_blank');
                    win.location.href = this.src;
                }
            }
        }

        this.elementClick.emit(event);
    }

    onChooseFile(event) {
        if (!this.handleActions) {
            this.chooseFile.emit();
        }
    }
}

