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
    IPepFieldValueChangeEvent,
    IPepFieldClickEvent,
    PepAttachmentField,
} from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-attachment',
    templateUrl: './attachment.component.html',
    styleUrls: ['./attachment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepAttachmentComponent implements OnInit, OnChanges, OnDestroy {
    @Input() key = '';
    @Input() src = '';
    @Input() label = '';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;

    controlType = 'attachment';

    @Input() form: FormGroup = null;
    @Input() showTitle = true;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() isActive = false;

    @Output()
    valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();
    @Output()
    elementClick: EventEmitter<IPepFieldClickEvent> = new EventEmitter<IPepFieldClickEvent>();

    fieldHeight = '';
    standAlone = false;
    dataURI = null;

    acceptAttachmentType =
        'application/pdf,application/json,text/csv,text/csv-schema,application/msword,application/vnd.ms-excel,text/plain,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/bmp,image/jpg, image/jpeg, image/png, image/tif, image/tiff, txt, json';

    constructor(
        private customizationService: PepCustomizationService,
        private renderer: Renderer2,
        public element: ElementRef,
        private fileService: PepFileService
    ) {}

    ngOnDestroy(): void {
        // if (this.elementClick) {
        //     this.elementClick.unsubscribe();
        // }
        // if (this.valueChange) {
        //     this.valueChange.unsubscribe();
        // }
    }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;

            // this.form = this.customizationService.getDefaultFromGroup(this.key, this.src, this.required, this.readonly, this.disabled);
            const pepField = new PepAttachmentField({
                key: this.key,
                value: this.src,
                required: this.required,
                readonly: this.readonly,
                disabled: this.disabled,
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
    }

    ngOnChanges(changes: any): void {
        if (changes.src && changes.src.currentValue.length > 0) {
            // Empty dataURI if there is change in the src.
            this.dataURI = null;
        }
    }

    onFileChanged(value: any): void {
        this.dataURI = value.length > 0 ? JSON.parse(value) : null;
        this.src = this.dataURI ? this.dataURI.fileStr : '';
        this.customizationService.updateFormFieldValue(
            this.form,
            this.key,
            this.dataURI ? this.dataURI.fileExt : ''
        );
        this.valueChange.emit({
            key: this.key,
            value,
            controlType: this.controlType,
        });
    }

    onFileClicked(event: IPepFieldClickEvent): void {
        if (this.dataURI != null) {
            const fileStrArr = this.dataURI.fileStr.split(';');
            if (fileStrArr.length === 2) {
                const win = window.open('', '_blank');
                const contentType = fileStrArr[0].split(':')[1];
                const base64 = fileStrArr[1].split(',')[1];
                const blob = this.fileService.convertFromb64toBlob(
                    base64,
                    contentType
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

        this.elementClick.emit(event);
    }
}
