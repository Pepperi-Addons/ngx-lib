import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FileService, CustomizationService, LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'pep-attachment',
    templateUrl: './attachment.component.html',
    styleUrls: ['./attachment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepperiAttachmentComponent implements OnInit, OnChanges, OnDestroy {
    @Input() key = '';
    @Input() src = '';
    @Input() label = '';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment = '0';
    @Input() rowSpan = 1;

    controlType = 'attachment';

    @Input() form: FormGroup = null;
    @Input() showTitle = true;
    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiForm;
    @Input() isActive = false;

    @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() elementClicked: EventEmitter<any> = new EventEmitter<any>();

    LAYOUT_TYPE = LAYOUT_TYPE;
    fieldHeight = '';
    standAlone = false;
    dataURI = null;

    acceptAttachmentType =
        'application/pdf,application/json,text/csv,text/csv-schema,application/msword,application/vnd.ms-excel,text/plain,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/bmp,image/jpg, image/jpeg, image/png, image/tif, image/tiff, txt, json';

    constructor(
        private customizationService: CustomizationService,
        private renderer: Renderer2,
        public element: ElementRef,
        private fileService: FileService) { }

    ngOnDestroy(): void {
        if (this.elementClicked) {
            this.elementClicked.unsubscribe();
        }

        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.src, this.required, this.readonly, this.disabled);

            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }

        this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
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
        this.customizationService.updateFormFieldValue(this.form, this.key, this.dataURI ? this.dataURI.fileExt : '');
        this.valueChanged.emit({ apiName: this.key, value, controlType: this.controlType });
    }

    onFileClicked(event): void {
        if (this.dataURI != null) {
            const fileStrArr = this.dataURI.fileStr.split(';');
            if (fileStrArr.length === 2) {
                const win = window.open('', '_blank');
                const contentType = fileStrArr[0].split(':')[1];
                const base64 = fileStrArr[1].split(',')[1];
                const blob = this.fileService.convertFromb64toBlob(base64, contentType);
                const url = URL.createObjectURL(blob);
                win.location.href = url;
            }
        } else {
            if (this.fileService.isValidUrl(this.src)) {
                const win = window.open('', '_blank');
                win.location.href = this.src;
            }
        }

        this.elementClicked.emit({ apiName: this.key, eventWhich: event.which });
    }
}
