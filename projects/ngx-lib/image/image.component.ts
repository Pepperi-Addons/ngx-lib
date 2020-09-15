import {
    Component, OnInit, OnChanges, Input, Output, EventEmitter,
    ChangeDetectorRef, ChangeDetectionStrategy, ElementRef, OnDestroy, Renderer2
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FileService, LAYOUT_TYPE, STYLE_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import { DialogService } from '@pepperi-addons/ngx-lib/dialog';
import { PepperiImagesFilmstripComponent, ImagesFilmstripDialogData } from '@pepperi-addons/ngx-lib/images-filmstrip';

import * as $ from 'jquery';

@Component({
    selector: 'pep-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepperiImageComponent implements OnChanges, OnInit, OnDestroy {
    public static ENTER_CHILDREN = '[EnterChildren]';

    @Input() key = '';
    @Input() srcLarge = '';
    @Input() src = '';
    @Input() options: any = null;
    @Input() label = '';
    @Input() type = 'image';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment = '0';
    @Input() rowSpan = 1;
    @Input() indicatorsField: any = null;
    @Input() menuField: any = null;
    @Input() hasCampaignField: any = null;

    controlType = 'image';

    @Input() form: FormGroup = null;
    @Input() objectId = '';
    @Input() showTitle = true;
    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiForm;
    @Input() isActive = false;
    @Input() sizeLimitMB = 5;
    @Input() acceptImagesType = 'bmp,jpg,jpeg,png,gif'; // "image/bmp, image/jpg, image/jpeg, image/png, image/tif, image/tiff";

    @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() elementClicked: EventEmitter<any> = new EventEmitter<any>();

    LAYOUT_TYPE = LAYOUT_TYPE;
    fieldHeight = '';
    standAlone = false;
    dataURI = null;

    constructor(
        private translate: TranslateService,
        private dialogService: DialogService,
        private customizationService: CustomizationService,
        private fileService: FileService,
        private renderer: Renderer2,
        private element: ElementRef) {
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
        if (changes.src?.currentValue?.length > 0) {
            // Empty dataURI if there is change in the src.
            this.dataURI = null;
        }
    }

    ngOnDestroy(): void {
        if (this.elementClicked) {
            this.elementClicked.unsubscribe();
        }

        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }

    errorHandler(event: any): void {
        event.target.src = this.fileService.getNoImagePath();
        event.target.title = this.translate.instant('IMAGE.NO_IMAGE');
    }

    setTitle(event: any): void {
        event.target.style.visibility = 'visible';
        event.target.title = event.target.title.length === 0 ? this.translate.instant('IMAGE.CLICK_TO_ENLARGE') : event.target.title;
    }

    enterChildren(event: any): void {
        this.elementClicked.emit({ apiName: PepperiImageComponent.ENTER_CHILDREN, eventWhich: event.which });
    }

    onFileChanged(value: any): void {
        this.dataURI = value.length > 0 ? JSON.parse(value) : null;
        this.src = this.srcLarge = this.standAlone && this.dataURI ? this.dataURI.fileStr : '';

        this.customizationService.updateFormFieldValue(this.form, this.key, this.dataURI ? this.dataURI.fileExt : '');
        this.valueChanged.emit({ apiName: this.key, value, controlType: this.controlType });
    }

    objectIdIsNotEmpty(): boolean {
        return (this.objectId?.length > 0 && this.objectId !== '0');
    }

    onFileClicked(event: any): void {
        let hasParentImage = true;
        if (this.objectIdIsNotEmpty() && this.src && this.src.indexOf('no-image') > -1) {
            hasParentImage = false;
        }

        this.openImageModal(hasParentImage);
        this.elementClicked.emit({ apiName: this.key, eventWhich: event.which });
    }

    itemImageClick(event: any): void {
        let hasParentImage = true;
        if (($(event.target).attr('src') && $(event.target).attr('src').indexOf('no-image') > -1) ||
            ($(event.target).next('img').length && $(event.target).next('img').attr('src').indexOf('no-image') > -1)) {
            hasParentImage = false;
        }

        this.openImageModal(hasParentImage);
    }

    openImageModal(hasParentImage: boolean): void {
        if (this.dataURI) {
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
            // Show image in modal.
            const dialogRef = this.dialogService.openDialog(
                PepperiImagesFilmstripComponent,
                {
                    currIndex: 0,
                    key: this.key,
                    value: this.srcLarge || this.src,
                    label: this.label,
                    objectId: this.objectId,
                    showThumbnails: true
                });
        }
    }

}
