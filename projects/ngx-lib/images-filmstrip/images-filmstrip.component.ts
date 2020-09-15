import {
    Component, ViewChild, OnInit, OnDestroy, AfterViewInit, ElementRef, Input,
    TemplateRef, Renderer2, ChangeDetectorRef, Inject, Optional, ViewContainerRef
} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Gallery, GalleryConfig, LoadingStrategy, SlidingDirection, ThumbnailsPosition, GalleryItem, ImageItem, GalleryRef } from '@ngx-gallery/core';
import { CustomizationService, LAYOUT_TYPE, LayoutService, FileService } from '@pepperi-addons/ngx-lib';
import { DialogService } from '@pepperi-addons/ngx-lib/dialog';
import { pepperiIconArrowRightAlt } from '@pepperi-addons/ngx-lib/icon';
import { FormGroup } from '@angular/forms';

import 'hammerjs';

export interface ImagesFilmstripDialogData {
    currIndex: number;
    key: string;
    value: string;
    label: string;
    objectId: string;
    showThumbnails: boolean;
}

// export const slideInAnimation = trigger('slideAnimation', [
//     state('in', style({ transform: 'translateY(0)', opacity: 1 })),
//     transition(':enter', [
//         style({ transform: 'translateY(-100%)', opacity: 0 }),
//         animate(400)
//     ]),
//     transition(':leave', [
//         animate(400, style({ transform: 'translateY(-100%)', opacity: 0 }))
//     ])
// ]);

import { IMAGEVIEWER_CONFIG, ImageViewerConfig, createButtonConfig } from '@hallysonh/ngx-imageviewer';


export function createViewerConfig(translate: TranslateService): ImageViewerConfig {
    return {
        // width: 800, // component default width
        // height: 600, // component default height
        bgStyle: '#FFF', // component background style
        // scaleStep: 0.1, // zoom scale step (using the zoom in/out buttons)
        // rotateStepper: false, // touch rotate should rotate only 90 to 90 degrees
        loadingMessage: translate.instant('MESSAGES.INFO_LOADING_FILE'), // 'Loading...',
        // buttonStyle: {
        //     iconFontFamily: 'Material Icons', // font used to render the button icons
        //     alpha: 0.5, // buttons' transparence value
        //     hoverAlpha: 0.7, // buttons' transparence value when mouse is over
        //     bgStyle: '#000000', //  buttons' background style
        //     iconStyle: '#ffffff', // buttons' icon colors
        //     borderStyle: '#000000', // buttons' border style
        //     borderWidth: 0, // buttons' border width (0 == disabled)
        // },
        // tooltips: {
        //     enabled: true, // enable or disable tooltips for buttons
        //     bgStyle: '#000000', // tooltip background style
        //     bgAlpha: 0.5, // tooltip background transparence
        //     textStyle: '#ffffff', // tooltip's text style
        //     textAlpha: 0.9, // tooltip's text transparence
        //     padding: 15, // tooltip padding
        //     radius: 20, // tooltip border radius
        // },
        // shorter button configuration style
        nextPageButton: createButtonConfig('navigate_next', 'Next page', 0, false),
        beforePageButton: createButtonConfig('navigate_before', 'Previous page', 1, false),
        zoomOutButton: createButtonConfig('zoom_out', 'Zoom out', 0, false),
        zoomInButton: createButtonConfig('zoom_in', 'Zoom in', 1, false),
        rotateLeftButton: createButtonConfig('rotate_left', 'Rotate left', 2, false),
        rotateRightButton: createButtonConfig('rotate_right', 'Rotate right', 3, false),
        resetButton: createButtonConfig('autorenew', 'Reset', 4, false),
    };
}

// This is the default
// export const IMAGEVIEWER_CONFIG_DEFAULT: ImageViewerConfig = {
//     width: 800, // component default width
//     height: 600, // component default height
//     bgStyle: '#ECEFF1', // component background style
//     scaleStep: 0.1, // zoom scale step (using the zoom in/out buttons)
//     rotateStepper: false, // touch rotate should rotate only 90 to 90 degrees
//     loadingMessage: 'Loading...',
//     buttonStyle: {
//         iconFontFamily: 'Material Icons', // font used to render the button icons
//         alpha: 0.5, // buttons' transparence value
//         hoverAlpha: 0.7, // buttons' transparence value when mouse is over
//         bgStyle: '#000000', //  buttons' background style
//         iconStyle: '#ffffff', // buttons' icon colors
//         borderStyle: '#000000', // buttons' border style
//         borderWidth: 0, // buttons' border width (0 == disabled)
//     },
//     tooltips: {
//         enabled: true, // enable or disable tooltips for buttons
//         bgStyle: '#000000', // tooltip background style
//         bgAlpha: 0.5, // tooltip background transparence
//         textStyle: '#ffffff', // tooltip's text style
//         textAlpha: 0.9, // tooltip's text transparence
//         padding: 15, // tooltip padding
//         radius: 20, // tooltip border radius
//     },
//     zoomOutButton: {
//         // zoomOut button config
//         icon: 'zoom_out', // icon text
//         tooltip: 'Zoom out', // button tooltip
//         sortId: 0, // number used to determine the order of the buttons
//         show: true, // used to show/hide the button
//     },

//     // shorter button configuration style
//     nextPageButton: createButtonConfig('navigate_next', 'Next page', 0),
//     beforePageButton: createButtonConfig('navigate_before', 'Previous page', 1),
//     zoomInButton: createButtonConfig('zoom_in', 'Zoom in', 1),
//     rotateLeftButton: createButtonConfig('rotate_left', 'Rotate left', 2),
//     rotateRightButton: createButtonConfig('rotate_right', 'Rotate right', 3),
//     resetButton: createButtonConfig('autorenew', 'Reset', 4),
// };

@Component({
    selector: 'pep-images-filmstrip',
    templateUrl: './images-filmstrip.component.html',
    styleUrls: ['./images-filmstrip.component.scss'],
    // animations: [slideInAnimation],
    providers: [
        {
            provide: IMAGEVIEWER_CONFIG,
            // useValue: IMAGEVIEWER_CONFIG_DEFAULT,
            useFactory: createViewerConfig,
            deps: [TranslateService]
        }
    ]
})
export class PepperiImagesFilmstripComponent implements OnInit, AfterViewInit, OnDestroy {
    // @ViewChild('ngxViewerImage') ngxViewerImage: any; // TODO: Check if we need to use this??
    @Input() value = '';
    @Input() key = '';
    @Input() label = '';
    @Input() xAlignment = '0';
    @Input() rowSpan = 1;

    controlType = 'images';

    @Input() form: FormGroup = null;
    @Input() objectId = '';
    @Input() showTitle = false;
    @Input() layoutType: LAYOUT_TYPE.PepperiForm;
    @Input() currIndex = 0;
    @Input() showThumbnails = false;

    @ViewChild('galleryCont') galleryCont: ElementRef;
    @ViewChild('galleryDialogTemplate', { read: TemplateRef }) galleryDialogTemplate: TemplateRef<any>;
    @ViewChild('galleryDialogCont') galleryDialogCont: ElementRef;

    config: GalleryConfig;
    items: GalleryItem[] = null;
    inDialog = false;

    required = false;
    readonly = false;
    disabled = false;
    fieldHeight = '';
    standAlone = false;

    galleryWidth = 0;
    galleryHeight;
    isVertical = false;
    galleryRef: GalleryRef;
    dialogGalleryRef: GalleryRef;

    constructor(
        private customizationService: CustomizationService,
        private dialogService: DialogService,
        private layoutService: LayoutService,
        private fileService: FileService,
        private gallery: Gallery,
        private renderer: Renderer2,
        private element: ElementRef,
        private cd: ChangeDetectorRef,
        @Optional() private dialogRef: MatDialogRef<PepperiImagesFilmstripComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) private data: ImagesFilmstripDialogData
    ) {
        // If data exist copy all data properties into this.
        if (dialogRef && data) {
            this.inDialog = true;

            Object.keys(data).forEach(key => {
                if (key in this) {
                    this[key] = data[key];
                }
            });
        }

        this.config = {
            // nav: false, // Show navigation buttons
            navIcon: pepperiIconArrowRightAlt.data,
            // loop: true,
            // zoomOut: 0,
            // dots: false,
            // dotsPosition: 'bottom',
            // counterPosition: 'top',
            // thumb: true,
            counter: false, // Show counter
            gestures: true, // Use touch events (requires hammer.js)
            // autoPlay: false,
            // thumbWidth: 120,
            // thumbHeight: 90,
            // imageSize: 'contain',
            // panSensitivity: 25,
            // disableThumb: false,
            // playerInterval: 3000,
            // thumbMode: ThumbnailsMode.Free,
            // thumbPosition: ThumbnailsPosition.Bottom,
            loadingStrategy: LoadingStrategy.Default,
            // slidingDirection: SlidingDirection.Horizontal,
        };
    }

    ngOnInit(): void {
        if (!this.inDialog) {
            if (this.form === null) {
                this.standAlone = true;
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required,
                    this.readonly, this.disabled);

                this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
            }

            this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
        }

        if (this.items === null) {
            const imgArr = this.value ? this.value.split(';') : [];
            // add No image image when there is no images
            if (imgArr.length === 0) {
                const noImageSrc = this.fileService.getNoImagePath();
                imgArr.push(noImageSrc);
            }

            this.items = imgArr.map(img => new ImageItem({ src: img, thumb: img }));
        }

        this.config.dots = this.config.nav = this.items.length > 1;
        this.config.thumb = (this.key === 'ItemFilmstripImages' || this.showThumbnails) && this.items.length > 1 ? true : false;
        this.currIndex =
            this.key === 'ItemFilmstripImages' &&
                this.currIndex === 0 &&
                this.items.length > 1 ?
                Math.floor(this.items.length / 2) - 1 : this.currIndex;

    }

    ngAfterViewInit(): void {
        if (this.inDialog) {
            this.afterDialogOpened();
        } else {
            this.galleryRef = this.gallery.ref(this.key + '-' + this.objectId + '-gallery');
            this.initGalleryStyle(this.galleryCont, this.galleryRef);
        }
    }

    ngOnDestroy(): void {
        if (this.galleryRef) { this.galleryRef.destroy(); }
        if (this.dialogGalleryRef) { this.dialogGalleryRef.destroy(); }
        // if (this.myPinch) { this.myPinch.destroy(); }
    }

    initGalleryStyle(galleryContainer, galleryRef): void {
        // Set thumbnails position and sliding direction
        this.setThumbnailDimension(galleryContainer);

        galleryRef.setConfig(this.config);
        galleryRef.load(this.items);

        const currentIndex = this.currIndex;
        if (currentIndex > 0) {
            galleryRef.set(currentIndex);
        }
    }

    onError(e): void {
        const noImageSrc = this.fileService.getNoImagePath();
        const noimg = new ImageItem({ src: noImageSrc, thumb: noImageSrc });
        this.items.splice(e.itemIndex, 1, noimg);
    }

    enlargeImage(event: any): void {
        const dialogRef = this.dialogService.openDialog(this.galleryDialogTemplate);

        dialogRef.afterOpened().subscribe(() => {
            this.afterDialogOpened();
        });

        // Update currentIndex in galleryRef
        dialogRef.afterClosed().subscribe(value => {
            this.galleryRef.set(this.currIndex);
        });
    }

    afterDialogOpened(): void {
        this.dialogGalleryRef = this.gallery.ref(this.key + '-' + this.objectId + '-dlgGallery');
        this.initGalleryStyle(this.galleryDialogCont, this.dialogGalleryRef);
    }

    setThumbnailDimension(galleryContainer): void {
        this.galleryWidth = galleryContainer.nativeElement.clientWidth;
        this.galleryHeight = galleryContainer.nativeElement.clientHeight;

        this.isVertical = this.galleryWidth < this.galleryHeight;

        if (this.isVertical) {
            let width = (this.galleryWidth - ((this.items.length - 1) * 16)) / this.items.length;
            width = Math.min(Math.max(width, 24), 96);

            this.config.thumbHeight = width;
            this.config.thumbWidth = (width + 16);
        } else {
            let height = (this.galleryHeight - ((this.items.length - 1) * 16)) / this.items.length;
            height = Math.min(Math.max(height, 24), 96);

            this.config.thumbHeight = (height + 16);
            this.config.thumbWidth = height;
        }

        this.config.thumbPosition = this.isVertical ?
            ThumbnailsPosition.Bottom : this.layoutService.isRtl() ?
                ThumbnailsPosition.Right : ThumbnailsPosition.Left;
        this.config.slidingDirection = this.key !== 'ItemFilmstripImages' ?
            SlidingDirection.Horizontal : this.isVertical ?
                SlidingDirection.Horizontal : SlidingDirection.Vertical;
    }

    indexChange(item: any): void {
        this.currIndex = item.currIndex;
        // if (this.ngxViewerImage && this.ngxViewerImage.scale) {
        //     this.ngxViewerImage.scale = 1;
        //     this.updateStyle();
        // }
    }

    // scrollFunction(e: any): boolean {
    //     e.deltaY > 0 ? this.zoomOut() : this.zoomIn();
    //     return false;
    // }

    // zoomIn(): void {
    //     if (this.ngxViewerImage.scale < 2) {
    //         this.ngxViewerImage.scale *= (1 + this.ngxViewerImage.config.zoomFactor);
    //     } else {
    //         this.ngxViewerImage.scale = 2;
    //     }
    //     this.updateStyle();
    // }

    // zoomOut(): void {
    //     if (this.ngxViewerImage.scale > this.ngxViewerImage.config.zoomFactor) {
    //         this.ngxViewerImage.scale /= (1 + this.ngxViewerImage.config.zoomFactor);
    //     }
    //     this.updateStyle();
    // }

    // private updateStyle(): void {
    //     this.ngxViewerImage.style.transform = `translate(${this.ngxViewerImage.translateX}px,
    //         ${this.ngxViewerImage.translateY}px) rotate(${this.ngxViewerImage.rotation}deg) scale(${this.ngxViewerImage.scale})`;

    //     this.cd.detectChanges();
    // }
}
