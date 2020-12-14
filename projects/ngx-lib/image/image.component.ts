import {
    Component,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    ElementRef,
    OnDestroy,
    Renderer2
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FileService, PepLayoutType, CustomizationService, PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT, PepFieldValueChangedData, PepFieldClickedData,
    PepOption, PepImageField } from '@pepperi-addons/ngx-lib';

import { DialogService } from '@pepperi-addons/ngx-lib/dialog';
import {
    PepImagesFilmstripComponent,
    PepImagesFilmstripDialogData
} from '@pepperi-addons/ngx-lib/images-filmstrip';
import { pepIconNoImage } from '@pepperi-addons/ngx-lib/icon';
import { ImageItem } from '@ngx-gallery/core';

@Component({
    selector: 'pep-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PepImageComponent implements OnChanges, OnInit, OnDestroy {
    public static MENU_CLICKED = '[MenuClicked]';

    @Input() key = '';
    @Input() srcLarge = '';
    @Input() src = '';
    @Input() options: PepOption[] = null;
    @Input() label = '';
    // @Input() type = 'image';
    @Input() required = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;
    @Input() rowSpan = 1;
    @Input() indicatorsField: any = null;
    @Input() menuField: any = null;
    @Input() hasCampaignField: any = null;

    controlType = 'image';

    @Input() form: FormGroup = null;
    @Input() objectId = '';
    @Input() showTitle = true;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() isActive = false;
    @Input() sizeLimitMB = 5;
    @Input() acceptImagesType = 'bmp,jpg,jpeg,png,gif'; // "image/bmp, image/jpg, image/jpeg, image/png, image/tif, image/tiff";

    @Output() valueChange: EventEmitter<PepFieldValueChangedData> = new EventEmitter<PepFieldValueChangedData>();
    @Output() elementClick: EventEmitter<PepFieldClickedData> = new EventEmitter<PepFieldClickedData>();

    fieldHeight = '';
    standAlone = false;
    dataURI = null;

    constructor(
        private translate: TranslateService,
        private dialogService: DialogService,
        private customizationService: CustomizationService,
        private fileService: FileService,
        private renderer: Renderer2,
        private element: ElementRef
    ) {}

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;

            // this.form = this.customizationService.getDefaultFromGroup(
            //     this.key,
            //     this.src,
            //     this.required,
            //     this.readonly,
            //     this.disabled
            // );
            const pepField = new PepImageField({
                key: this.key,
                value: this.src,
                required: this.required,
                readonly: this.readonly,
                disabled: this.disabled
            });
            this.form = this.customizationService.getDefaultFromGroup(pepField);

            this.renderer.addClass(
                this.element.nativeElement,
                CustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );
        }

        this.fieldHeight = this.customizationService.calculateFieldHeight(
            this.layoutType,
            this.rowSpan,
            this.standAlone
        );
    }

    ngOnChanges(changes: any): void {
        if (changes.src?.currentValue?.length > 0) {
            // Empty dataURI if there is change in the src.
            this.dataURI = null;
        }
    }

    ngOnDestroy(): void {
        if (this.elementClick) {
            this.elementClick.unsubscribe();
        }

        if (this.valueChange) {
            this.valueChange.unsubscribe();
        }
    }

    errorHandler(event: any): void {
        event.target.src = this.fileService.getSvgAsImageSrc(pepIconNoImage.data);
        event.target.title = this.translate.instant('IMAGE.NO_IMAGE');
    }

    setTitle(event: any): void {
        event.target.style.visibility = 'visible';
        event.target.title =
            event.target.title.length === 0
                ? this.translate.instant('IMAGE.CLICK_TO_ENLARGE')
                : event.target.title;
    }

    onMenuClick(event: any): void {
        this.elementClick.emit({
            key: this.key,
            value: PepImageComponent.MENU_CLICKED,
            eventWhich: event.which
        });
    }

    onFileChanged(value: any): void {
        this.dataURI = value.length > 0 ? JSON.parse(value) : null;
        this.src = this.srcLarge =
            this.standAlone && this.dataURI ? this.dataURI.fileStr : '';

        this.customizationService.updateFormFieldValue(
            this.form,
            this.key,
            this.dataURI ? this.dataURI.fileExt : ''
        );
        this.valueChange.emit({
            key: this.key,
            value,
            controlType: this.controlType
        });
    }

    objectIdIsNotEmpty(): boolean {
        return this.objectId?.length > 0 && this.objectId !== '0';
    }

    onFileClicked(event: PepFieldClickedData): void {
        let hasParentImage = true;
        if (
            this.objectIdIsNotEmpty() &&
            this.src &&
            this.src.indexOf('no-image') > -1
        ) {
            hasParentImage = false;
        }

        this.openImageModal(hasParentImage);
        this.elementClick.emit(event);
    }

    itemImageClick(event: any): void {
        let hasParentImage = true;
        const elemTarget = event.target || event.srcElement;
        const nextElement = elemTarget.nextElementSibling || null;
        const imageSRC = elemTarget.src || null;
        const nextElementSRC =
            nextElement && nextElement.src ? nextElement.src : null;

        if (
            (imageSRC && imageSRC.indexOf('no-image') > -1) ||
            (nextElementSRC && nextElementSRC.src.indexOf('no-image') > -1)
        ) {
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
                const blob = this.fileService.convertFromb64toBlob(
                    base64,
                    contentType
                );
                const url = URL.createObjectURL(blob);
                win.location.href = url;
            }
        } else {

            // this.options.forEach((img: any) => this.srcLarge += ';' + img.Value);
            const arr = [(this.srcLarge || this.src)].concat(this.options.map( opt => opt.Value ));
            const imagesValue = arr.join(';');

            // Show image in modal.
            const config = this.dialogService.getDialogConfig({}, 'inline');
            config.maxWidth = '75vw';
            config.height = '95vh';

            this.dialogService.openDialog(
                PepImagesFilmstripComponent,
                {
                    currIndex: 0,
                    key: this.key,
                    value: imagesValue,
                    label: this.label,
                    objectId: this.objectId,
                    showThumbnails: arr.length > 1
                },
                config
            );
        }
    }
}