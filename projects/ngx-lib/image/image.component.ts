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
    Renderer2,
    Optional,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {
    PepFileService,
    PepLayoutType,
    PepCustomizationService,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    IPepFieldClickEvent,
    IPepOption,
    PepImageField,
} from '@pepperi-addons/ngx-lib';

import { pepIconNoImage2 } from '@pepperi-addons/ngx-lib/icon';
import { PepImageService } from './image.service';
import { IPepFileChangeEvent } from '@pepperi-addons/ngx-lib/files-uploader';

@Component({
    selector: 'pep-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss', './image.component.theme.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepImageComponent implements OnChanges, OnInit, OnDestroy {
    public static MENU_CLICKED = '[MenuClicked]';

    @Input() key = '';
    
    private _srcLarge = '';
    @Input()
    set srcLarge(value) {
        this._srcLarge = value || '';
    }
    get srcLarge(): string {
        return this._srcLarge;
    }
    
    private _src = '';
    @Input()
    set src(value) {
        this._src = value || '';
    }
    get src(): string {
        return this._src;
    }

    @Input() options: IPepOption[] = [];
    @Input() label = '';
    // @Input() type = 'image';
    @Input() mandatory = false;
    @Input() disabled = false;
    @Input() readonly = false;
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

    @Input() indicatorsField: any = null;
    @Input() menuField: any = null;
    @Input() hasCampaignField: any = null;

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

    controlType = 'image';

    @Input() form: FormGroup = null;
    @Input() uid = '';
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
    @Input() sizeLimitMB = 5;
    @Input() acceptImagesType = 'bmp,jpg,jpeg,png,gif'; // "image/bmp, image/jpg, image/jpeg, image/png, image/tif, image/tiff";

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

    constructor(
        private imageService: PepImageService,
        private customizationService: PepCustomizationService,
        private fileService: PepFileService,
        private renderer: Renderer2,
        private element: ElementRef,
        private translate: TranslateService
    ) { }

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

    private setFieldHeight(): void {
        this.fieldHeight = this.customizationService.calculateFieldHeight(
            this.layoutType,
            this.rowSpan,
            this.standAlone
        );
    }

    private setDefaultForm(): void {
        const pepField = new PepImageField({
            key: this.key,
            value: this.src,
            mandatory: this.mandatory,
            readonly: this.readonly,
            disabled: this.disabled,
        });
        this.form = this.customizationService.getDefaultFromGroup(pepField);
    }

    private getOtherData() {
        return {
            imageSrc: this.srcLarge || this.src,
            options: this.options,
            title: this.label
        };
    }

    ngOnChanges(changes: any): void {
        if (this.standAlone) {
            this.setDefaultForm();
        }

        if (changes.src?.currentValue?.length > 0) {
            // Empty dataURI if there is change in the src.
            this.dataURI = null;
        }
    }

    ngOnDestroy(): void {
        //
    }

    errorHandler(event: any): void {
        event.target.src = this.fileService.getSvgAsImageSrc(
            pepIconNoImage2.data
        );
        event.target.title = this.translate.instant('IMAGE.NO_IMAGE');
    }

    onImageLoad(event: any): void {
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
            controlType: this.controlType,
            eventWhich: event.which,
        });
    }

    onFileChanged(fileData: IPepFileChangeEvent): void {
        this.dataURI = fileData;
        this.src = this.srcLarge =
            this.standAlone && this.dataURI ? this.dataURI.fileStr : '';

        this.customizationService.updateFormFieldValue(
            this.form,
            this.key,
            this.dataURI ? this.dataURI.fileExt : ''
        );
        
        this.fileChange.emit(fileData);
    }

    objectIdIsNotEmpty(): boolean {
        return this.uid?.length > 0 && this.uid !== '0';
    }

    onFileClicked(event: IPepFieldClickEvent): void {
        let hasParentImage = true;
        if (
            // this.objectIdIsNotEmpty() &&
            this.src &&
            this.src.indexOf('no-image') > -1
        ) {
            hasParentImage = false;
        }

        // Add the other data object for let the client open the image dialog eazy.
        event.otherData = this.getOtherData();

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

        const eventToRaise: IPepFieldClickEvent = {
            key: this.key,
            controlType: this.controlType,
            eventWhich: event.which
        };
        eventToRaise.otherData = this.getOtherData();
        this.elementClick.emit(eventToRaise);
    }
    
    onChooseFile(event) {
        if (!this.handleActions) {
            this.chooseFile.emit();
        }
    }
}
