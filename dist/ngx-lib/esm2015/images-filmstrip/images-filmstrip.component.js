import { Component, ViewChild, Input, TemplateRef, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { LoadingStrategy, SlidingDirection, ThumbnailsPosition, ImageItem } from '@ngx-gallery/core';
import { CustomizationService } from '@pepperi-addons/ngx-lib';
import { pepperiIconArrowRightAlt } from '@pepperi-addons/ngx-lib/icon';
import 'hammerjs';
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
import { IMAGEVIEWER_CONFIG, createButtonConfig } from '@hallysonh/ngx-imageviewer';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib";
import * as i2 from "@pepperi-addons/ngx-lib/dialog";
import * as i3 from "@ngx-gallery/core";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
import * as i7 from "@pepperi-addons/ngx-lib/field-title";
import * as i8 from "@angular/material/icon";
import * as i9 from "@pepperi-addons/ngx-lib/icon";
import * as i10 from "@hallysonh/ngx-imageviewer";
const _c0 = ["galleryCont"];
const _c1 = ["galleryDialogTemplate"];
const _c2 = ["galleryDialogCont"];
function PepperiImagesFilmstripComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiImagesFilmstripComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 4);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelement(2, "pep-field-title", 6);
    i0.ɵɵelementStart(3, "div", 7, 8);
    i0.ɵɵelementStart(5, "gallery", 9);
    i0.ɵɵlistener("itemClick", function PepperiImagesFilmstripComponent_ng_template_1_Template_gallery_itemClick_5_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.enlargeImage($event); })("indexChange", function PepperiImagesFilmstripComponent_ng_template_1_Template_gallery_indexChange_5_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.indexChange($event); })("error", function PepperiImagesFilmstripComponent_ng_template_1_Template_gallery_error_5_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onError($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r2.form);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("label", ctx_r2.label)("xAlignment", ctx_r2.xAlignment)("showTitle", ctx_r2.showTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("height", ctx_r2.fieldHeight);
    i0.ɵɵproperty("ngClass", ctx_r2.isVertical ? "vertical-gallery" : "horizontal-gallery");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r2.key, "-", ctx_r2.objectId, "-gallery");
} }
function PepperiImagesFilmstripComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h2", 10);
    i0.ɵɵelementStart(1, "span", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 12);
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵelement(5, "pep-icon", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 14, 15);
    i0.ɵɵelementStart(8, "gallery", 16);
    i0.ɵɵlistener("indexChange", function PepperiImagesFilmstripComponent_ng_template_3_Template_gallery_indexChange_8_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.indexChange($event); })("error", function PepperiImagesFilmstripComponent_ng_template_3_Template_gallery_error_8_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onError($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mat-dialog-close", null);
    i0.ɵɵadvance(5);
    i0.ɵɵstyleProp("height", "auto", "px");
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r4.key, "-", ctx_r4.objectId, "-dlgGallery");
    i0.ɵɵproperty("itemTemplate", _r5);
} }
function PepperiImagesFilmstripComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-imageviewer", 17, 18);
} if (rf & 2) {
    const data_r18 = ctx.data;
    i0.ɵɵproperty("src", data_r18.src);
} }
export function createViewerConfig(translate) {
    return {
        // width: 800, // component default width
        // height: 600, // component default height
        bgStyle: '#FFF',
        // scaleStep: 0.1, // zoom scale step (using the zoom in/out buttons)
        // rotateStepper: false, // touch rotate should rotate only 90 to 90 degrees
        loadingMessage: translate.instant('MESSAGES.INFO_LOADING_FILE'),
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
export class PepperiImagesFilmstripComponent {
    constructor(customizationService, dialogService, layoutService, fileService, gallery, renderer, element, cd, dialogRef, data) {
        this.customizationService = customizationService;
        this.dialogService = dialogService;
        this.layoutService = layoutService;
        this.fileService = fileService;
        this.gallery = gallery;
        this.renderer = renderer;
        this.element = element;
        this.cd = cd;
        this.dialogRef = dialogRef;
        this.data = data;
        // @ViewChild('ngxViewerImage') ngxViewerImage: any; // TODO: Check if we need to use this??
        this.value = '';
        this.key = '';
        this.label = '';
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.controlType = 'images';
        this.form = null;
        this.objectId = '';
        this.showTitle = false;
        this.currIndex = 0;
        this.showThumbnails = false;
        this.items = null;
        this.inDialog = false;
        this.required = false;
        this.readonly = false;
        this.disabled = false;
        this.fieldHeight = '';
        this.standAlone = false;
        this.galleryWidth = 0;
        this.isVertical = false;
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
            counter: false,
            gestures: true,
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
        };
    }
    ngOnInit() {
        if (!this.inDialog) {
            if (this.form === null) {
                this.standAlone = true;
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
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
    ngAfterViewInit() {
        if (this.inDialog) {
            this.afterDialogOpened();
        }
        else {
            this.galleryRef = this.gallery.ref(this.key + '-' + this.objectId + '-gallery');
            this.initGalleryStyle(this.galleryCont, this.galleryRef);
        }
    }
    ngOnDestroy() {
        if (this.galleryRef) {
            this.galleryRef.destroy();
        }
        if (this.dialogGalleryRef) {
            this.dialogGalleryRef.destroy();
        }
        // if (this.myPinch) { this.myPinch.destroy(); }
    }
    initGalleryStyle(galleryContainer, galleryRef) {
        // Set thumbnails position and sliding direction
        this.setThumbnailDimension(galleryContainer);
        galleryRef.setConfig(this.config);
        galleryRef.load(this.items);
        const currentIndex = this.currIndex;
        if (currentIndex > 0) {
            galleryRef.set(currentIndex);
        }
    }
    onError(e) {
        const noImageSrc = this.fileService.getNoImagePath();
        const noimg = new ImageItem({ src: noImageSrc, thumb: noImageSrc });
        this.items.splice(e.itemIndex, 1, noimg);
    }
    enlargeImage(event) {
        const dialogRef = this.dialogService.openDialog(this.galleryDialogTemplate);
        dialogRef.afterOpened().subscribe(() => {
            this.afterDialogOpened();
        });
        // Update currentIndex in galleryRef
        dialogRef.afterClosed().subscribe(value => {
            this.galleryRef.set(this.currIndex);
        });
    }
    afterDialogOpened() {
        this.dialogGalleryRef = this.gallery.ref(this.key + '-' + this.objectId + '-dlgGallery');
        this.initGalleryStyle(this.galleryDialogCont, this.dialogGalleryRef);
    }
    setThumbnailDimension(galleryContainer) {
        this.galleryWidth = galleryContainer.nativeElement.clientWidth;
        this.galleryHeight = galleryContainer.nativeElement.clientHeight;
        this.isVertical = this.galleryWidth < this.galleryHeight;
        if (this.isVertical) {
            let width = (this.galleryWidth - ((this.items.length - 1) * 16)) / this.items.length;
            width = Math.min(Math.max(width, 24), 96);
            this.config.thumbHeight = width;
            this.config.thumbWidth = (width + 16);
        }
        else {
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
    indexChange(item) {
        this.currIndex = item.currIndex;
        // if (this.ngxViewerImage && this.ngxViewerImage.scale) {
        //     this.ngxViewerImage.scale = 1;
        //     this.updateStyle();
        // }
    }
}
PepperiImagesFilmstripComponent.ɵfac = function PepperiImagesFilmstripComponent_Factory(t) { return new (t || PepperiImagesFilmstripComponent)(i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i2.DialogService), i0.ɵɵdirectiveInject(i1.LayoutService), i0.ɵɵdirectiveInject(i1.FileService), i0.ɵɵdirectiveInject(i3.Gallery), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i4.MatDialogRef, 8), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA, 8)); };
PepperiImagesFilmstripComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiImagesFilmstripComponent, selectors: [["pep-images-filmstrip"]], viewQuery: function PepperiImagesFilmstripComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true, TemplateRef);
        i0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.galleryCont = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.galleryDialogTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.galleryDialogCont = _t.first);
    } }, inputs: { value: "value", key: "key", label: "label", xAlignment: "xAlignment", rowSpan: "rowSpan", form: "form", objectId: "objectId", showTitle: "showTitle", layoutType: "layoutType", currIndex: "currIndex", showThumbnails: "showThumbnails" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: IMAGEVIEWER_CONFIG,
                // useValue: IMAGEVIEWER_CONFIG_DEFAULT,
                useFactory: createViewerConfig,
                deps: [TranslateService]
            }
        ])], decls: 7, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["regularTemplate", ""], ["galleryDialogTemplate", ""], ["itemTemplate", ""], [3, "formGroup"], [1, "images-filmstrip-container"], [3, "label", "xAlignment", "showTitle"], [1, "img-wrapper", 3, "ngClass"], ["galleryCont", ""], [3, "id", "itemClick", "indexChange", "error"], ["mat-dialog-title", "", 1, "pepperi-border-bottom"], [1, "pull-left", "flip"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], ["mat-dialog-content", ""], ["galleryDialogCont", ""], [3, "id", "itemTemplate", "indexChange", "error"], ["id", "ngxViewerImage", 3, "src"], ["ngxViewerImage", ""]], template: function PepperiImagesFilmstripComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PepperiImagesFilmstripComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, PepperiImagesFilmstripComponent_ng_template_1_Template, 6, 9, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PepperiImagesFilmstripComponent_ng_template_3_Template, 9, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, PepperiImagesFilmstripComponent_ng_template_5_Template, 2, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r3 = i0.ɵɵreference(4);
        i0.ɵɵproperty("ngIf", ctx.inDialog)("ngIfThen", _r3)("ngIfElse", _r1);
    } }, directives: [i5.NgIf, i6.NgControlStatusGroup, i6.FormGroupDirective, i7.PepperiFieldTitleComponent, i5.NgClass, i3.GalleryComponent, i4.MatDialogTitle, i4.MatDialogClose, i8.MatIcon, i9.PepperiIconComponent, i4.MatDialogContent, i10.ɵb], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit;width:100%}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.images-filmstrip-container[_ngcontent-%COMP%]{height:100%}.images-filmstrip-container[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%], gallery[_ngcontent-%COMP%]{height:calc(100% - 1.5rem)}gallery[_ngcontent-%COMP%]{min-height:calc(100% - 1.5rem)}.mat-dialog-content[_ngcontent-%COMP%]{max-height:80vh;min-height:80vh}.mat-dialog-content[_ngcontent-%COMP%]   gallery[_ngcontent-%COMP%]{min-height:calc(100% - 50px);min-width:65vw}  gallery-thumbs{margin:0 var(--pep-spacing-lg,1rem) 0 var(--pep-spacing-sm,.5rem)}  gallery-thumbs gallery-thumb{border-radius:var(--pep-border-radius-md,.25rem);margin:var(--pep-spacing-sm,.5rem) 0;padding:0!important}  gallery-thumbs gallery-thumb .g-image-item{background-size:cover}  gallery-item gallery-image .g-image-item{border-radius:var(--pep-border-radius-lg,.5rem)}  gallery-item:hover{cursor:pointer}  gallery-dots{border-radius:var(--pep-border-radius-md,.25rem);position:absolute!important}  gallery-dots.pepperi-button{display:flex!important}  .img-container{align-items:center;display:flex}  .g-nav-next,   .g-nav-prev{border-radius:var(--pep-border-radius-md,.25rem);height:2rem!important;padding:.25rem;width:2rem!important}  .g-nav-next .mat-icon,   .g-nav-prev .mat-icon{display:inline-block!important}  .g-nav-prev{transform:translateY(-50%) perspective(1px) scaleX(-1)!important}.vertical-gallery[_ngcontent-%COMP%]     gallery-thumbs{margin:var(--pep-spacing-lg,1rem) 0 var(--pep-spacing-sm,.5rem) 0}.vertical-gallery[_ngcontent-%COMP%]     gallery-thumbs gallery-thumb{margin:0 var(--pep-spacing-sm,.5rem)}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiImagesFilmstripComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: i1.CustomizationService }, { type: i2.DialogService }, { type: i1.LayoutService }, { type: i1.FileService }, { type: i3.Gallery }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i4.MatDialogRef, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, { value: [{
            type: Input
        }], key: [{
            type: Input
        }], label: [{
            type: Input
        }], xAlignment: [{
            type: Input
        }], rowSpan: [{
            type: Input
        }], form: [{
            type: Input
        }], objectId: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], currIndex: [{
            type: Input
        }], showThumbnails: [{
            type: Input
        }], galleryCont: [{
            type: ViewChild,
            args: ['galleryCont']
        }], galleryDialogTemplate: [{
            type: ViewChild,
            args: ['galleryDialogTemplate', { read: TemplateRef }]
        }], galleryDialogCont: [{
            type: ViewChild,
            args: ['galleryDialogCont']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLWZpbG1zdHJpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2ltYWdlcy1maWxtc3RyaXAvaW1hZ2VzLWZpbG1zdHJpcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2ltYWdlcy1maWxtc3RyaXAvaW1hZ2VzLWZpbG1zdHJpcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLFNBQVMsRUFBZ0QsS0FBSyxFQUN6RSxXQUFXLEVBQWdDLE1BQU0sRUFBRSxRQUFRLEVBQzlELE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUEwQixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQWUsU0FBUyxFQUFjLE1BQU0sbUJBQW1CLENBQUM7QUFDdEosT0FBTyxFQUFFLG9CQUFvQixFQUEyQyxNQUFNLHlCQUF5QixDQUFDO0FBRXhHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3hFLE9BQU8sVUFBVSxDQUFDO0FBV2xCLDhEQUE4RDtBQUM5RCxzRUFBc0U7QUFDdEUsNkJBQTZCO0FBQzdCLGlFQUFpRTtBQUNqRSx1QkFBdUI7QUFDdkIsVUFBVTtBQUNWLDZCQUE2QjtBQUM3Qiw4RUFBOEU7QUFDOUUsU0FBUztBQUNULE1BQU07QUFFTixPQUFPLEVBQUUsa0JBQWtCLEVBQXFCLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuQ3ZHLHdCQUFnRzs7OztJQUU1RixnQ0FDSTtJQUFBLDhCQUNJO0lBQUEscUNBQ2tCO0lBQ2xCLGlDQUVJO0lBQUEsa0NB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QWE7WUFDbUMscUJBQXFCO2tCQUEvRSxTQUFTO21CQUFDLHVCQUF1QixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUN6QixpQkFBaUI7a0JBQWhELFNBQVM7bUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsXHJcbiAgICBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiwgSW5qZWN0LCBPcHRpb25hbCwgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IEdhbGxlcnksIEdhbGxlcnlDb25maWcsIExvYWRpbmdTdHJhdGVneSwgU2xpZGluZ0RpcmVjdGlvbiwgVGh1bWJuYWlsc1Bvc2l0aW9uLCBHYWxsZXJ5SXRlbSwgSW1hZ2VJdGVtLCBHYWxsZXJ5UmVmIH0gZnJvbSAnQG5neC1nYWxsZXJ5L2NvcmUnO1xyXG5pbXBvcnQgeyBDdXN0b21pemF0aW9uU2VydmljZSwgTEFZT1VUX1RZUEUsIExheW91dFNlcnZpY2UsIEZpbGVTZXJ2aWNlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvZGlhbG9nJztcclxuaW1wb3J0IHsgcGVwcGVyaUljb25BcnJvd1JpZ2h0QWx0IH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvaWNvbic7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCAnaGFtbWVyanMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZXNGaWxtc3RyaXBEaWFsb2dEYXRhIHtcclxuICAgIGN1cnJJbmRleDogbnVtYmVyO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIG9iamVjdElkOiBzdHJpbmc7XHJcbiAgICBzaG93VGh1bWJuYWlsczogYm9vbGVhbjtcclxufVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHNsaWRlSW5BbmltYXRpb24gPSB0cmlnZ2VyKCdzbGlkZUFuaW1hdGlvbicsIFtcclxuLy8gICAgIHN0YXRlKCdpbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDEgfSkpLFxyXG4vLyAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4vLyAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknLCBvcGFjaXR5OiAwIH0pLFxyXG4vLyAgICAgICAgIGFuaW1hdGUoNDAwKVxyXG4vLyAgICAgXSksXHJcbi8vICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbi8vICAgICAgICAgYW5pbWF0ZSg0MDAsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknLCBvcGFjaXR5OiAwIH0pKVxyXG4vLyAgICAgXSlcclxuLy8gXSk7XHJcblxyXG5pbXBvcnQgeyBJTUFHRVZJRVdFUl9DT05GSUcsIEltYWdlVmlld2VyQ29uZmlnLCBjcmVhdGVCdXR0b25Db25maWcgfSBmcm9tICdAaGFsbHlzb25oL25neC1pbWFnZXZpZXdlcic7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpZXdlckNvbmZpZyh0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpOiBJbWFnZVZpZXdlckNvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIHdpZHRoOiA4MDAsIC8vIGNvbXBvbmVudCBkZWZhdWx0IHdpZHRoXHJcbiAgICAgICAgLy8gaGVpZ2h0OiA2MDAsIC8vIGNvbXBvbmVudCBkZWZhdWx0IGhlaWdodFxyXG4gICAgICAgIGJnU3R5bGU6ICcjRkZGJywgLy8gY29tcG9uZW50IGJhY2tncm91bmQgc3R5bGVcclxuICAgICAgICAvLyBzY2FsZVN0ZXA6IDAuMSwgLy8gem9vbSBzY2FsZSBzdGVwICh1c2luZyB0aGUgem9vbSBpbi9vdXQgYnV0dG9ucylcclxuICAgICAgICAvLyByb3RhdGVTdGVwcGVyOiBmYWxzZSwgLy8gdG91Y2ggcm90YXRlIHNob3VsZCByb3RhdGUgb25seSA5MCB0byA5MCBkZWdyZWVzXHJcbiAgICAgICAgbG9hZGluZ01lc3NhZ2U6IHRyYW5zbGF0ZS5pbnN0YW50KCdNRVNTQUdFUy5JTkZPX0xPQURJTkdfRklMRScpLCAvLyAnTG9hZGluZy4uLicsXHJcbiAgICAgICAgLy8gYnV0dG9uU3R5bGU6IHtcclxuICAgICAgICAvLyAgICAgaWNvbkZvbnRGYW1pbHk6ICdNYXRlcmlhbCBJY29ucycsIC8vIGZvbnQgdXNlZCB0byByZW5kZXIgdGhlIGJ1dHRvbiBpY29uc1xyXG4gICAgICAgIC8vICAgICBhbHBoYTogMC41LCAvLyBidXR0b25zJyB0cmFuc3BhcmVuY2UgdmFsdWVcclxuICAgICAgICAvLyAgICAgaG92ZXJBbHBoYTogMC43LCAvLyBidXR0b25zJyB0cmFuc3BhcmVuY2UgdmFsdWUgd2hlbiBtb3VzZSBpcyBvdmVyXHJcbiAgICAgICAgLy8gICAgIGJnU3R5bGU6ICcjMDAwMDAwJywgLy8gIGJ1dHRvbnMnIGJhY2tncm91bmQgc3R5bGVcclxuICAgICAgICAvLyAgICAgaWNvblN0eWxlOiAnI2ZmZmZmZicsIC8vIGJ1dHRvbnMnIGljb24gY29sb3JzXHJcbiAgICAgICAgLy8gICAgIGJvcmRlclN0eWxlOiAnIzAwMDAwMCcsIC8vIGJ1dHRvbnMnIGJvcmRlciBzdHlsZVxyXG4gICAgICAgIC8vICAgICBib3JkZXJXaWR0aDogMCwgLy8gYnV0dG9ucycgYm9yZGVyIHdpZHRoICgwID09IGRpc2FibGVkKVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gdG9vbHRpcHM6IHtcclxuICAgICAgICAvLyAgICAgZW5hYmxlZDogdHJ1ZSwgLy8gZW5hYmxlIG9yIGRpc2FibGUgdG9vbHRpcHMgZm9yIGJ1dHRvbnNcclxuICAgICAgICAvLyAgICAgYmdTdHlsZTogJyMwMDAwMDAnLCAvLyB0b29sdGlwIGJhY2tncm91bmQgc3R5bGVcclxuICAgICAgICAvLyAgICAgYmdBbHBoYTogMC41LCAvLyB0b29sdGlwIGJhY2tncm91bmQgdHJhbnNwYXJlbmNlXHJcbiAgICAgICAgLy8gICAgIHRleHRTdHlsZTogJyNmZmZmZmYnLCAvLyB0b29sdGlwJ3MgdGV4dCBzdHlsZVxyXG4gICAgICAgIC8vICAgICB0ZXh0QWxwaGE6IDAuOSwgLy8gdG9vbHRpcCdzIHRleHQgdHJhbnNwYXJlbmNlXHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmc6IDE1LCAvLyB0b29sdGlwIHBhZGRpbmdcclxuICAgICAgICAvLyAgICAgcmFkaXVzOiAyMCwgLy8gdG9vbHRpcCBib3JkZXIgcmFkaXVzXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBzaG9ydGVyIGJ1dHRvbiBjb25maWd1cmF0aW9uIHN0eWxlXHJcbiAgICAgICAgbmV4dFBhZ2VCdXR0b246IGNyZWF0ZUJ1dHRvbkNvbmZpZygnbmF2aWdhdGVfbmV4dCcsICdOZXh0IHBhZ2UnLCAwLCBmYWxzZSksXHJcbiAgICAgICAgYmVmb3JlUGFnZUJ1dHRvbjogY3JlYXRlQnV0dG9uQ29uZmlnKCduYXZpZ2F0ZV9iZWZvcmUnLCAnUHJldmlvdXMgcGFnZScsIDEsIGZhbHNlKSxcclxuICAgICAgICB6b29tT3V0QnV0dG9uOiBjcmVhdGVCdXR0b25Db25maWcoJ3pvb21fb3V0JywgJ1pvb20gb3V0JywgMCwgZmFsc2UpLFxyXG4gICAgICAgIHpvb21JbkJ1dHRvbjogY3JlYXRlQnV0dG9uQ29uZmlnKCd6b29tX2luJywgJ1pvb20gaW4nLCAxLCBmYWxzZSksXHJcbiAgICAgICAgcm90YXRlTGVmdEJ1dHRvbjogY3JlYXRlQnV0dG9uQ29uZmlnKCdyb3RhdGVfbGVmdCcsICdSb3RhdGUgbGVmdCcsIDIsIGZhbHNlKSxcclxuICAgICAgICByb3RhdGVSaWdodEJ1dHRvbjogY3JlYXRlQnV0dG9uQ29uZmlnKCdyb3RhdGVfcmlnaHQnLCAnUm90YXRlIHJpZ2h0JywgMywgZmFsc2UpLFxyXG4gICAgICAgIHJlc2V0QnV0dG9uOiBjcmVhdGVCdXR0b25Db25maWcoJ2F1dG9yZW5ldycsICdSZXNldCcsIDQsIGZhbHNlKSxcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgdGhlIGRlZmF1bHRcclxuLy8gZXhwb3J0IGNvbnN0IElNQUdFVklFV0VSX0NPTkZJR19ERUZBVUxUOiBJbWFnZVZpZXdlckNvbmZpZyA9IHtcclxuLy8gICAgIHdpZHRoOiA4MDAsIC8vIGNvbXBvbmVudCBkZWZhdWx0IHdpZHRoXHJcbi8vICAgICBoZWlnaHQ6IDYwMCwgLy8gY29tcG9uZW50IGRlZmF1bHQgaGVpZ2h0XHJcbi8vICAgICBiZ1N0eWxlOiAnI0VDRUZGMScsIC8vIGNvbXBvbmVudCBiYWNrZ3JvdW5kIHN0eWxlXHJcbi8vICAgICBzY2FsZVN0ZXA6IDAuMSwgLy8gem9vbSBzY2FsZSBzdGVwICh1c2luZyB0aGUgem9vbSBpbi9vdXQgYnV0dG9ucylcclxuLy8gICAgIHJvdGF0ZVN0ZXBwZXI6IGZhbHNlLCAvLyB0b3VjaCByb3RhdGUgc2hvdWxkIHJvdGF0ZSBvbmx5IDkwIHRvIDkwIGRlZ3JlZXNcclxuLy8gICAgIGxvYWRpbmdNZXNzYWdlOiAnTG9hZGluZy4uLicsXHJcbi8vICAgICBidXR0b25TdHlsZToge1xyXG4vLyAgICAgICAgIGljb25Gb250RmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnLCAvLyBmb250IHVzZWQgdG8gcmVuZGVyIHRoZSBidXR0b24gaWNvbnNcclxuLy8gICAgICAgICBhbHBoYTogMC41LCAvLyBidXR0b25zJyB0cmFuc3BhcmVuY2UgdmFsdWVcclxuLy8gICAgICAgICBob3ZlckFscGhhOiAwLjcsIC8vIGJ1dHRvbnMnIHRyYW5zcGFyZW5jZSB2YWx1ZSB3aGVuIG1vdXNlIGlzIG92ZXJcclxuLy8gICAgICAgICBiZ1N0eWxlOiAnIzAwMDAwMCcsIC8vICBidXR0b25zJyBiYWNrZ3JvdW5kIHN0eWxlXHJcbi8vICAgICAgICAgaWNvblN0eWxlOiAnI2ZmZmZmZicsIC8vIGJ1dHRvbnMnIGljb24gY29sb3JzXHJcbi8vICAgICAgICAgYm9yZGVyU3R5bGU6ICcjMDAwMDAwJywgLy8gYnV0dG9ucycgYm9yZGVyIHN0eWxlXHJcbi8vICAgICAgICAgYm9yZGVyV2lkdGg6IDAsIC8vIGJ1dHRvbnMnIGJvcmRlciB3aWR0aCAoMCA9PSBkaXNhYmxlZClcclxuLy8gICAgIH0sXHJcbi8vICAgICB0b29sdGlwczoge1xyXG4vLyAgICAgICAgIGVuYWJsZWQ6IHRydWUsIC8vIGVuYWJsZSBvciBkaXNhYmxlIHRvb2x0aXBzIGZvciBidXR0b25zXHJcbi8vICAgICAgICAgYmdTdHlsZTogJyMwMDAwMDAnLCAvLyB0b29sdGlwIGJhY2tncm91bmQgc3R5bGVcclxuLy8gICAgICAgICBiZ0FscGhhOiAwLjUsIC8vIHRvb2x0aXAgYmFja2dyb3VuZCB0cmFuc3BhcmVuY2VcclxuLy8gICAgICAgICB0ZXh0U3R5bGU6ICcjZmZmZmZmJywgLy8gdG9vbHRpcCdzIHRleHQgc3R5bGVcclxuLy8gICAgICAgICB0ZXh0QWxwaGE6IDAuOSwgLy8gdG9vbHRpcCdzIHRleHQgdHJhbnNwYXJlbmNlXHJcbi8vICAgICAgICAgcGFkZGluZzogMTUsIC8vIHRvb2x0aXAgcGFkZGluZ1xyXG4vLyAgICAgICAgIHJhZGl1czogMjAsIC8vIHRvb2x0aXAgYm9yZGVyIHJhZGl1c1xyXG4vLyAgICAgfSxcclxuLy8gICAgIHpvb21PdXRCdXR0b246IHtcclxuLy8gICAgICAgICAvLyB6b29tT3V0IGJ1dHRvbiBjb25maWdcclxuLy8gICAgICAgICBpY29uOiAnem9vbV9vdXQnLCAvLyBpY29uIHRleHRcclxuLy8gICAgICAgICB0b29sdGlwOiAnWm9vbSBvdXQnLCAvLyBidXR0b24gdG9vbHRpcFxyXG4vLyAgICAgICAgIHNvcnRJZDogMCwgLy8gbnVtYmVyIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBvcmRlciBvZiB0aGUgYnV0dG9uc1xyXG4vLyAgICAgICAgIHNob3c6IHRydWUsIC8vIHVzZWQgdG8gc2hvdy9oaWRlIHRoZSBidXR0b25cclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAgLy8gc2hvcnRlciBidXR0b24gY29uZmlndXJhdGlvbiBzdHlsZVxyXG4vLyAgICAgbmV4dFBhZ2VCdXR0b246IGNyZWF0ZUJ1dHRvbkNvbmZpZygnbmF2aWdhdGVfbmV4dCcsICdOZXh0IHBhZ2UnLCAwKSxcclxuLy8gICAgIGJlZm9yZVBhZ2VCdXR0b246IGNyZWF0ZUJ1dHRvbkNvbmZpZygnbmF2aWdhdGVfYmVmb3JlJywgJ1ByZXZpb3VzIHBhZ2UnLCAxKSxcclxuLy8gICAgIHpvb21JbkJ1dHRvbjogY3JlYXRlQnV0dG9uQ29uZmlnKCd6b29tX2luJywgJ1pvb20gaW4nLCAxKSxcclxuLy8gICAgIHJvdGF0ZUxlZnRCdXR0b246IGNyZWF0ZUJ1dHRvbkNvbmZpZygncm90YXRlX2xlZnQnLCAnUm90YXRlIGxlZnQnLCAyKSxcclxuLy8gICAgIHJvdGF0ZVJpZ2h0QnV0dG9uOiBjcmVhdGVCdXR0b25Db25maWcoJ3JvdGF0ZV9yaWdodCcsICdSb3RhdGUgcmlnaHQnLCAzKSxcclxuLy8gICAgIHJlc2V0QnV0dG9uOiBjcmVhdGVCdXR0b25Db25maWcoJ2F1dG9yZW5ldycsICdSZXNldCcsIDQpLFxyXG4vLyB9O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BlcC1pbWFnZXMtZmlsbXN0cmlwJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbWFnZXMtZmlsbXN0cmlwLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2ltYWdlcy1maWxtc3RyaXAuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIC8vIGFuaW1hdGlvbnM6IFtzbGlkZUluQW5pbWF0aW9uXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogSU1BR0VWSUVXRVJfQ09ORklHLFxyXG4gICAgICAgICAgICAvLyB1c2VWYWx1ZTogSU1BR0VWSUVXRVJfQ09ORklHX0RFRkFVTFQsXHJcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGNyZWF0ZVZpZXdlckNvbmZpZyxcclxuICAgICAgICAgICAgZGVwczogW1RyYW5zbGF0ZVNlcnZpY2VdXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaUltYWdlc0ZpbG1zdHJpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAgIC8vIEBWaWV3Q2hpbGQoJ25neFZpZXdlckltYWdlJykgbmd4Vmlld2VySW1hZ2U6IGFueTsgLy8gVE9ETzogQ2hlY2sgaWYgd2UgbmVlZCB0byB1c2UgdGhpcz8/XHJcbiAgICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xyXG4gICAgQElucHV0KCkga2V5ID0gJyc7XHJcbiAgICBASW5wdXQoKSBsYWJlbCA9ICcnO1xyXG4gICAgQElucHV0KCkgeEFsaWdubWVudCA9ICcwJztcclxuICAgIEBJbnB1dCgpIHJvd1NwYW4gPSAxO1xyXG5cclxuICAgIGNvbnRyb2xUeXBlID0gJ2ltYWdlcyc7XHJcblxyXG4gICAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIG9iamVjdElkID0gJyc7XHJcbiAgICBASW5wdXQoKSBzaG93VGl0bGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGxheW91dFR5cGU6IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtO1xyXG4gICAgQElucHV0KCkgY3VyckluZGV4ID0gMDtcclxuICAgIEBJbnB1dCgpIHNob3dUaHVtYm5haWxzID0gZmFsc2U7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnZ2FsbGVyeUNvbnQnKSBnYWxsZXJ5Q29udDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ2dhbGxlcnlEaWFsb2dUZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgZ2FsbGVyeURpYWxvZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQFZpZXdDaGlsZCgnZ2FsbGVyeURpYWxvZ0NvbnQnKSBnYWxsZXJ5RGlhbG9nQ29udDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25maWc6IEdhbGxlcnlDb25maWc7XHJcbiAgICBpdGVtczogR2FsbGVyeUl0ZW1bXSA9IG51bGw7XHJcbiAgICBpbkRpYWxvZyA9IGZhbHNlO1xyXG5cclxuICAgIHJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICByZWFkb25seSA9IGZhbHNlO1xyXG4gICAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGZpZWxkSGVpZ2h0ID0gJyc7XHJcbiAgICBzdGFuZEFsb25lID0gZmFsc2U7XHJcblxyXG4gICAgZ2FsbGVyeVdpZHRoID0gMDtcclxuICAgIGdhbGxlcnlIZWlnaHQ7XHJcbiAgICBpc1ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICBnYWxsZXJ5UmVmOiBHYWxsZXJ5UmVmO1xyXG4gICAgZGlhbG9nR2FsbGVyeVJlZjogR2FsbGVyeVJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGN1c3RvbWl6YXRpb25TZXJ2aWNlOiBDdXN0b21pemF0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZmlsZVNlcnZpY2U6IEZpbGVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZ2FsbGVyeTogR2FsbGVyeSxcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8UGVwcGVyaUltYWdlc0ZpbG1zdHJpcENvbXBvbmVudD4sXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogSW1hZ2VzRmlsbXN0cmlwRGlhbG9nRGF0YVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy8gSWYgZGF0YSBleGlzdCBjb3B5IGFsbCBkYXRhIHByb3BlcnRpZXMgaW50byB0aGlzLlxyXG4gICAgICAgIGlmIChkaWFsb2dSZWYgJiYgZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmluRGlhbG9nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgaW4gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcclxuICAgICAgICAgICAgLy8gbmF2OiBmYWxzZSwgLy8gU2hvdyBuYXZpZ2F0aW9uIGJ1dHRvbnNcclxuICAgICAgICAgICAgbmF2SWNvbjogcGVwcGVyaUljb25BcnJvd1JpZ2h0QWx0LmRhdGEsXHJcbiAgICAgICAgICAgIC8vIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIHpvb21PdXQ6IDAsXHJcbiAgICAgICAgICAgIC8vIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyBkb3RzUG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICAvLyBjb3VudGVyUG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAvLyB0aHVtYjogdHJ1ZSxcclxuICAgICAgICAgICAgY291bnRlcjogZmFsc2UsIC8vIFNob3cgY291bnRlclxyXG4gICAgICAgICAgICBnZXN0dXJlczogdHJ1ZSwgLy8gVXNlIHRvdWNoIGV2ZW50cyAocmVxdWlyZXMgaGFtbWVyLmpzKVxyXG4gICAgICAgICAgICAvLyBhdXRvUGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIHRodW1iV2lkdGg6IDEyMCxcclxuICAgICAgICAgICAgLy8gdGh1bWJIZWlnaHQ6IDkwLFxyXG4gICAgICAgICAgICAvLyBpbWFnZVNpemU6ICdjb250YWluJyxcclxuICAgICAgICAgICAgLy8gcGFuU2Vuc2l0aXZpdHk6IDI1LFxyXG4gICAgICAgICAgICAvLyBkaXNhYmxlVGh1bWI6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyBwbGF5ZXJJbnRlcnZhbDogMzAwMCxcclxuICAgICAgICAgICAgLy8gdGh1bWJNb2RlOiBUaHVtYm5haWxzTW9kZS5GcmVlLFxyXG4gICAgICAgICAgICAvLyB0aHVtYlBvc2l0aW9uOiBUaHVtYm5haWxzUG9zaXRpb24uQm90dG9tLFxyXG4gICAgICAgICAgICBsb2FkaW5nU3RyYXRlZ3k6IExvYWRpbmdTdHJhdGVneS5EZWZhdWx0LFxyXG4gICAgICAgICAgICAvLyBzbGlkaW5nRGlyZWN0aW9uOiBTbGlkaW5nRGlyZWN0aW9uLkhvcml6b250YWwsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5EaWFsb2cpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFuZEFsb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UuZ2V0RGVmYXVsdEZyb21Hcm91cCh0aGlzLmtleSwgdGhpcy52YWx1ZSwgdGhpcy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRvbmx5LCB0aGlzLmRpc2FibGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDdXN0b21pemF0aW9uU2VydmljZS5TVEFORF9BTE9ORV9GSUVMRF9DTEFTU19OQU1FKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5maWVsZEhlaWdodCA9IHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UuY2FsY3VsYXRlRmllbGRIZWlnaHQodGhpcy5sYXlvdXRUeXBlLCB0aGlzLnJvd1NwYW4sIHRoaXMuc3RhbmRBbG9uZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pdGVtcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWdBcnIgPSB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS5zcGxpdCgnOycpIDogW107XHJcbiAgICAgICAgICAgIC8vIGFkZCBObyBpbWFnZSBpbWFnZSB3aGVuIHRoZXJlIGlzIG5vIGltYWdlc1xyXG4gICAgICAgICAgICBpZiAoaW1nQXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9JbWFnZVNyYyA9IHRoaXMuZmlsZVNlcnZpY2UuZ2V0Tm9JbWFnZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGltZ0Fyci5wdXNoKG5vSW1hZ2VTcmMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gaW1nQXJyLm1hcChpbWcgPT4gbmV3IEltYWdlSXRlbSh7IHNyYzogaW1nLCB0aHVtYjogaW1nIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnLmRvdHMgPSB0aGlzLmNvbmZpZy5uYXYgPSB0aGlzLml0ZW1zLmxlbmd0aCA+IDE7XHJcbiAgICAgICAgdGhpcy5jb25maWcudGh1bWIgPSAodGhpcy5rZXkgPT09ICdJdGVtRmlsbXN0cmlwSW1hZ2VzJyB8fCB0aGlzLnNob3dUaHVtYm5haWxzKSAmJiB0aGlzLml0ZW1zLmxlbmd0aCA+IDEgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJySW5kZXggPVxyXG4gICAgICAgICAgICB0aGlzLmtleSA9PT0gJ0l0ZW1GaWxtc3RyaXBJbWFnZXMnICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJJbmRleCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGggPiAxID9cclxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IodGhpcy5pdGVtcy5sZW5ndGggLyAyKSAtIDEgOiB0aGlzLmN1cnJJbmRleDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmluRGlhbG9nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJEaWFsb2dPcGVuZWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbGxlcnlSZWYgPSB0aGlzLmdhbGxlcnkucmVmKHRoaXMua2V5ICsgJy0nICsgdGhpcy5vYmplY3RJZCArICctZ2FsbGVyeScpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRHYWxsZXJ5U3R5bGUodGhpcy5nYWxsZXJ5Q29udCwgdGhpcy5nYWxsZXJ5UmVmKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FsbGVyeVJlZikgeyB0aGlzLmdhbGxlcnlSZWYuZGVzdHJveSgpOyB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGlhbG9nR2FsbGVyeVJlZikgeyB0aGlzLmRpYWxvZ0dhbGxlcnlSZWYuZGVzdHJveSgpOyB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMubXlQaW5jaCkgeyB0aGlzLm15UGluY2guZGVzdHJveSgpOyB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEdhbGxlcnlTdHlsZShnYWxsZXJ5Q29udGFpbmVyLCBnYWxsZXJ5UmVmKTogdm9pZCB7XHJcbiAgICAgICAgLy8gU2V0IHRodW1ibmFpbHMgcG9zaXRpb24gYW5kIHNsaWRpbmcgZGlyZWN0aW9uXHJcbiAgICAgICAgdGhpcy5zZXRUaHVtYm5haWxEaW1lbnNpb24oZ2FsbGVyeUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGdhbGxlcnlSZWYuc2V0Q29uZmlnKHRoaXMuY29uZmlnKTtcclxuICAgICAgICBnYWxsZXJ5UmVmLmxvYWQodGhpcy5pdGVtcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuY3VyckluZGV4O1xyXG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIGdhbGxlcnlSZWYuc2V0KGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXJyb3IoZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5vSW1hZ2VTcmMgPSB0aGlzLmZpbGVTZXJ2aWNlLmdldE5vSW1hZ2VQYXRoKCk7XHJcbiAgICAgICAgY29uc3Qgbm9pbWcgPSBuZXcgSW1hZ2VJdGVtKHsgc3JjOiBub0ltYWdlU3JjLCB0aHVtYjogbm9JbWFnZVNyYyB9KTtcclxuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShlLml0ZW1JbmRleCwgMSwgbm9pbWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGVubGFyZ2VJbWFnZShldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW5EaWFsb2codGhpcy5nYWxsZXJ5RGlhbG9nVGVtcGxhdGUpO1xyXG5cclxuICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJPcGVuZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFmdGVyRGlhbG9nT3BlbmVkKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBjdXJyZW50SW5kZXggaW4gZ2FsbGVyeVJlZlxyXG4gICAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FsbGVyeVJlZi5zZXQodGhpcy5jdXJySW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyRGlhbG9nT3BlbmVkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nR2FsbGVyeVJlZiA9IHRoaXMuZ2FsbGVyeS5yZWYodGhpcy5rZXkgKyAnLScgKyB0aGlzLm9iamVjdElkICsgJy1kbGdHYWxsZXJ5Jyk7XHJcbiAgICAgICAgdGhpcy5pbml0R2FsbGVyeVN0eWxlKHRoaXMuZ2FsbGVyeURpYWxvZ0NvbnQsIHRoaXMuZGlhbG9nR2FsbGVyeVJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGh1bWJuYWlsRGltZW5zaW9uKGdhbGxlcnlDb250YWluZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdhbGxlcnlXaWR0aCA9IGdhbGxlcnlDb250YWluZXIubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICB0aGlzLmdhbGxlcnlIZWlnaHQgPSBnYWxsZXJ5Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLmlzVmVydGljYWwgPSB0aGlzLmdhbGxlcnlXaWR0aCA8IHRoaXMuZ2FsbGVyeUhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNWZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSAodGhpcy5nYWxsZXJ5V2lkdGggLSAoKHRoaXMuaXRlbXMubGVuZ3RoIC0gMSkgKiAxNikpIC8gdGhpcy5pdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHdpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgod2lkdGgsIDI0KSwgOTYpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25maWcudGh1bWJIZWlnaHQgPSB3aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcudGh1bWJXaWR0aCA9ICh3aWR0aCArIDE2KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gKHRoaXMuZ2FsbGVyeUhlaWdodCAtICgodGhpcy5pdGVtcy5sZW5ndGggLSAxKSAqIDE2KSkgLyB0aGlzLml0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoaGVpZ2h0LCAyNCksIDk2KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnRodW1iSGVpZ2h0ID0gKGhlaWdodCArIDE2KTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcudGh1bWJXaWR0aCA9IGhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnLnRodW1iUG9zaXRpb24gPSB0aGlzLmlzVmVydGljYWwgP1xyXG4gICAgICAgICAgICBUaHVtYm5haWxzUG9zaXRpb24uQm90dG9tIDogdGhpcy5sYXlvdXRTZXJ2aWNlLmlzUnRsKCkgP1xyXG4gICAgICAgICAgICAgICAgVGh1bWJuYWlsc1Bvc2l0aW9uLlJpZ2h0IDogVGh1bWJuYWlsc1Bvc2l0aW9uLkxlZnQ7XHJcbiAgICAgICAgdGhpcy5jb25maWcuc2xpZGluZ0RpcmVjdGlvbiA9IHRoaXMua2V5ICE9PSAnSXRlbUZpbG1zdHJpcEltYWdlcycgP1xyXG4gICAgICAgICAgICBTbGlkaW5nRGlyZWN0aW9uLkhvcml6b250YWwgOiB0aGlzLmlzVmVydGljYWwgP1xyXG4gICAgICAgICAgICAgICAgU2xpZGluZ0RpcmVjdGlvbi5Ib3Jpem9udGFsIDogU2xpZGluZ0RpcmVjdGlvbi5WZXJ0aWNhbDtcclxuICAgIH1cclxuXHJcbiAgICBpbmRleENoYW5nZShpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJJbmRleCA9IGl0ZW0uY3VyckluZGV4O1xyXG4gICAgICAgIC8vIGlmICh0aGlzLm5neFZpZXdlckltYWdlICYmIHRoaXMubmd4Vmlld2VySW1hZ2Uuc2NhbGUpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5uZ3hWaWV3ZXJJbWFnZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2Nyb2xsRnVuY3Rpb24oZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICAvLyAgICAgZS5kZWx0YVkgPiAwID8gdGhpcy56b29tT3V0KCkgOiB0aGlzLnpvb21JbigpO1xyXG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyB6b29tSW4oKTogdm9pZCB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMubmd4Vmlld2VySW1hZ2Uuc2NhbGUgPCAyKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubmd4Vmlld2VySW1hZ2Uuc2NhbGUgKj0gKDEgKyB0aGlzLm5neFZpZXdlckltYWdlLmNvbmZpZy56b29tRmFjdG9yKTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLm5neFZpZXdlckltYWdlLnNjYWxlID0gMjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy51cGRhdGVTdHlsZSgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHpvb21PdXQoKTogdm9pZCB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMubmd4Vmlld2VySW1hZ2Uuc2NhbGUgPiB0aGlzLm5neFZpZXdlckltYWdlLmNvbmZpZy56b29tRmFjdG9yKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubmd4Vmlld2VySW1hZ2Uuc2NhbGUgLz0gKDEgKyB0aGlzLm5neFZpZXdlckltYWdlLmNvbmZpZy56b29tRmFjdG9yKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy51cGRhdGVTdHlsZSgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHByaXZhdGUgdXBkYXRlU3R5bGUoKTogdm9pZCB7XHJcbiAgICAvLyAgICAgdGhpcy5uZ3hWaWV3ZXJJbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy5uZ3hWaWV3ZXJJbWFnZS50cmFuc2xhdGVYfXB4LFxyXG4gICAgLy8gICAgICAgICAke3RoaXMubmd4Vmlld2VySW1hZ2UudHJhbnNsYXRlWX1weCkgcm90YXRlKCR7dGhpcy5uZ3hWaWV3ZXJJbWFnZS5yb3RhdGlvbn1kZWcpIHNjYWxlKCR7dGhpcy5uZ3hWaWV3ZXJJbWFnZS5zY2FsZX0pYDtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAvLyB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImluRGlhbG9nOyB0aGVuIGdhbGxlcnlEaWFsb2dUZW1wbGF0ZTsgZWxzZSByZWd1bGFyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuPG5nLXRlbXBsYXRlICNyZWd1bGFyVGVtcGxhdGU+XHJcbiAgICA8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXMtZmlsbXN0cmlwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8cGVwLWZpZWxkLXRpdGxlIFtsYWJlbF09XCJsYWJlbFwiIFt4QWxpZ25tZW50XT1cInhBbGlnbm1lbnRcIiBbc2hvd1RpdGxlXT1cInNob3dUaXRsZVwiPlxyXG4gICAgICAgICAgICA8L3BlcC1maWVsZC10aXRsZT5cclxuICAgICAgICAgICAgPGRpdiAjZ2FsbGVyeUNvbnQgY2xhc3M9XCJpbWctd3JhcHBlclwiIFtuZ0NsYXNzXT1cImlzVmVydGljYWwgPyAndmVydGljYWwtZ2FsbGVyeScgOiAnaG9yaXpvbnRhbC1nYWxsZXJ5J1wiXHJcbiAgICAgICAgICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cImZpZWxkSGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8Z2FsbGVyeSBpZD1cInt7a2V5fX0te3tvYmplY3RJZH19LWdhbGxlcnlcIiAoaXRlbUNsaWNrKT1cImVubGFyZ2VJbWFnZSgkZXZlbnQpO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKGluZGV4Q2hhbmdlKT1cImluZGV4Q2hhbmdlKCRldmVudClcIiAoZXJyb3IpPVwib25FcnJvcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8L2dhbGxlcnk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2dhbGxlcnlEaWFsb2dUZW1wbGF0ZT5cclxuICAgIDxoMiBtYXQtZGlhbG9nLXRpdGxlIGNsYXNzPVwicGVwcGVyaS1ib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnQgZmxpcFwiPnt7IGxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJudWxsXCIgY2xhc3M9XCJwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiBtZCB3ZWFrIHB1bGwtcmlnaHQgZmxpcFwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cInN5c3RlbV9jbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvaDI+XHJcbiAgICA8ZGl2IG1hdC1kaWFsb2ctY29udGVudCAjZ2FsbGVyeURpYWxvZ0NvbnQ+XHJcbiAgICAgICAgPGdhbGxlcnkgaWQ9XCJ7e2tleX19LXt7b2JqZWN0SWR9fS1kbGdHYWxsZXJ5XCIgW2l0ZW1UZW1wbGF0ZV09XCJpdGVtVGVtcGxhdGVcIiAoaW5kZXhDaGFuZ2UpPVwiaW5kZXhDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiJ2F1dG8nXCIgKGVycm9yKT1cIm9uRXJyb3IoJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvZ2FsbGVyeT5cclxuICAgIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPCEtLSBBZGQgY3VzdG9tIHRlbXBsYXRlIHRvIGltYWdlIGl0ZW1zIC0tPlxyXG48bmctdGVtcGxhdGUgI2l0ZW1UZW1wbGF0ZSBsZXQtaW5kZXg9XCJpbmRleFwiIGxldC10eXBlPVwidHlwZVwiIGxldC1kYXRhPVwiZGF0YVwiIGxldC1jdXJySW5kZXg9XCJjdXJySW5kZXhcIj5cclxuICAgIDwhLS0gPHNwYW4gKm5nSWY9XCJ0eXBlID09PSAnaW1hZ2UnICYmIGluZGV4ID09PSBjdXJySW5kZXhcIiBbQHNsaWRlQW5pbWF0aW9uXSBjbGFzcz1cIml0ZW0tdGV4dFwiPlxyXG4gICAgICAgIHt7ZGF0YT8udGl0bGV9fVxyXG4gICAgPC9zcGFuPiAtLT5cclxuICAgIDxuZ3gtaW1hZ2V2aWV3ZXIgaWQ9XCJuZ3hWaWV3ZXJJbWFnZVwiICNuZ3hWaWV3ZXJJbWFnZSBbc3JjXT1cImRhdGEuc3JjXCI+PC9uZ3gtaW1hZ2V2aWV3ZXI+XHJcbiAgICA8IS0tIDxuZ3gtaW1hZ2Utdmlld2VyICNuZ3hWaWV3ZXJJbWFnZSBbY29uZmlnXT1cInsgYnRuU2hvdzp7em9vbUluOiBmYWxzZSwgem9vbU91dDogZmFsc2UgfX1cIiBbc3JjXT1cIltkYXRhLnNyY11cIlxyXG4gICAgICAgICh3aGVlbCk9XCJzY3JvbGxGdW5jdGlvbigkZXZlbnQpXCI+XHJcbiAgICA8L25neC1pbWFnZS12aWV3ZXI+IC0tPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==