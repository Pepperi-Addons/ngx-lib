import { ɵɵelementContainer, ɵɵgetCurrentView, ɵɵelementContainerStart, ɵɵelementStart, ɵɵelement, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵelementContainerEnd, ɵɵproperty, ɵɵadvance, ɵɵstyleProp, ɵɵpropertyInterpolate2, ɵɵtext, ɵɵreference, ɵɵtextInterpolate, ɵɵdirectiveInject, Renderer2, ElementRef, ChangeDetectorRef, ɵɵdefineComponent, ɵɵviewQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵsetClassMetadata, Component, Optional, Inject, Input, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgControlStatusGroup, FormGroupDirective, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogClose, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CustomizationService, LayoutService, FileService, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { pepperiIconArrowRightAlt, PepperiIconComponent, pepperiIconSystemEdit, pepperiIconSystemClose, pepperiIconArrowLeftAlt, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { DialogService, PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { LoadingStrategy, ImageItem, ThumbnailsPosition, SlidingDirection, Gallery, GalleryComponent, GalleryModule } from '@ngx-gallery/core';
import { createButtonConfig, IMAGEVIEWER_CONFIG, ɵb, ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { TranslateService } from '@ngx-translate/core';
import 'hammerjs';

const _c0 = ["galleryCont"];
const _c1 = ["galleryDialogTemplate"];
const _c2 = ["galleryDialogCont"];
function PepperiImagesFilmstripComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiImagesFilmstripComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0, 4);
    ɵɵelementStart(1, "div", 5);
    ɵɵelement(2, "pep-field-title", 6);
    ɵɵelementStart(3, "div", 7, 8);
    ɵɵelementStart(5, "gallery", 9);
    ɵɵlistener("itemClick", function PepperiImagesFilmstripComponent_ng_template_1_Template_gallery_itemClick_5_listener($event) { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(); return ctx_r8.enlargeImage($event); })("indexChange", function PepperiImagesFilmstripComponent_ng_template_1_Template_gallery_indexChange_5_listener($event) { ɵɵrestoreView(_r9); const ctx_r10 = ɵɵnextContext(); return ctx_r10.indexChange($event); })("error", function PepperiImagesFilmstripComponent_ng_template_1_Template_gallery_error_5_listener($event) { ɵɵrestoreView(_r9); const ctx_r11 = ɵɵnextContext(); return ctx_r11.onError($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r2.form);
    ɵɵadvance(2);
    ɵɵproperty("label", ctx_r2.label)("xAlignment", ctx_r2.xAlignment)("showTitle", ctx_r2.showTitle);
    ɵɵadvance(1);
    ɵɵstyleProp("height", ctx_r2.fieldHeight);
    ɵɵproperty("ngClass", ctx_r2.isVertical ? "vertical-gallery" : "horizontal-gallery");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate2("id", "", ctx_r2.key, "-", ctx_r2.objectId, "-gallery");
} }
function PepperiImagesFilmstripComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "h2", 10);
    ɵɵelementStart(1, "span", 11);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 12);
    ɵɵelementStart(4, "mat-icon");
    ɵɵelement(5, "pep-icon", 13);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 14, 15);
    ɵɵelementStart(8, "gallery", 16);
    ɵɵlistener("indexChange", function PepperiImagesFilmstripComponent_ng_template_3_Template_gallery_indexChange_8_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(); return ctx_r13.indexChange($event); })("error", function PepperiImagesFilmstripComponent_ng_template_3_Template_gallery_error_8_listener($event) { ɵɵrestoreView(_r14); const ctx_r15 = ɵɵnextContext(); return ctx_r15.onError($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const _r5 = ɵɵreference(6);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r4.label);
    ɵɵadvance(1);
    ɵɵproperty("mat-dialog-close", null);
    ɵɵadvance(5);
    ɵɵstyleProp("height", "auto", "px");
    ɵɵpropertyInterpolate2("id", "", ctx_r4.key, "-", ctx_r4.objectId, "-dlgGallery");
    ɵɵproperty("itemTemplate", _r5);
} }
function PepperiImagesFilmstripComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "ngx-imageviewer", 17, 18);
} if (rf & 2) {
    const data_r18 = ctx.data;
    ɵɵproperty("src", data_r18.src);
} }
function createViewerConfig(translate) {
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
class PepperiImagesFilmstripComponent {
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
PepperiImagesFilmstripComponent.ɵfac = function PepperiImagesFilmstripComponent_Factory(t) { return new (t || PepperiImagesFilmstripComponent)(ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(DialogService), ɵɵdirectiveInject(LayoutService), ɵɵdirectiveInject(FileService), ɵɵdirectiveInject(Gallery), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MatDialogRef, 8), ɵɵdirectiveInject(MAT_DIALOG_DATA, 8)); };
PepperiImagesFilmstripComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiImagesFilmstripComponent, selectors: [["pep-images-filmstrip"]], viewQuery: function PepperiImagesFilmstripComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true, TemplateRef);
        ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.galleryCont = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.galleryDialogTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.galleryDialogCont = _t.first);
    } }, inputs: { value: "value", key: "key", label: "label", xAlignment: "xAlignment", rowSpan: "rowSpan", form: "form", objectId: "objectId", showTitle: "showTitle", layoutType: "layoutType", currIndex: "currIndex", showThumbnails: "showThumbnails" }, features: [ɵɵProvidersFeature([
            {
                provide: IMAGEVIEWER_CONFIG,
                // useValue: IMAGEVIEWER_CONFIG_DEFAULT,
                useFactory: createViewerConfig,
                deps: [TranslateService]
            }
        ])], decls: 7, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["regularTemplate", ""], ["galleryDialogTemplate", ""], ["itemTemplate", ""], [3, "formGroup"], [1, "images-filmstrip-container"], [3, "label", "xAlignment", "showTitle"], [1, "img-wrapper", 3, "ngClass"], ["galleryCont", ""], [3, "id", "itemClick", "indexChange", "error"], ["mat-dialog-title", "", 1, "pepperi-border-bottom"], [1, "pull-left", "flip"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], ["mat-dialog-content", ""], ["galleryDialogCont", ""], [3, "id", "itemTemplate", "indexChange", "error"], ["id", "ngxViewerImage", 3, "src"], ["ngxViewerImage", ""]], template: function PepperiImagesFilmstripComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PepperiImagesFilmstripComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        ɵɵtemplate(1, PepperiImagesFilmstripComponent_ng_template_1_Template, 6, 9, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, PepperiImagesFilmstripComponent_ng_template_3_Template, 9, 7, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(5, PepperiImagesFilmstripComponent_ng_template_5_Template, 2, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(2);
        const _r3 = ɵɵreference(4);
        ɵɵproperty("ngIf", ctx.inDialog)("ngIfThen", _r3)("ngIfElse", _r1);
    } }, directives: [NgIf, NgControlStatusGroup, FormGroupDirective, PepperiFieldTitleComponent, NgClass, GalleryComponent, MatDialogTitle, MatDialogClose, MatIcon, PepperiIconComponent, MatDialogContent, ɵb], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit;width:100%}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.images-filmstrip-container[_ngcontent-%COMP%]{height:100%}.images-filmstrip-container[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%], gallery[_ngcontent-%COMP%]{height:calc(100% - 1.5rem)}gallery[_ngcontent-%COMP%]{min-height:calc(100% - 1.5rem)}.mat-dialog-content[_ngcontent-%COMP%]{max-height:80vh;min-height:80vh}.mat-dialog-content[_ngcontent-%COMP%]   gallery[_ngcontent-%COMP%]{min-height:calc(100% - 50px);min-width:65vw}  gallery-thumbs{margin:0 var(--pep-spacing-lg,1rem) 0 var(--pep-spacing-sm,.5rem)}  gallery-thumbs gallery-thumb{border-radius:var(--pep-border-radius-md,.25rem);margin:var(--pep-spacing-sm,.5rem) 0;padding:0!important}  gallery-thumbs gallery-thumb .g-image-item{background-size:cover}  gallery-item gallery-image .g-image-item{border-radius:var(--pep-border-radius-lg,.5rem)}  gallery-item:hover{cursor:pointer}  gallery-dots{border-radius:var(--pep-border-radius-md,.25rem);position:absolute!important}  gallery-dots.pepperi-button{display:flex!important}  .img-container{align-items:center;display:flex}  .g-nav-next,   .g-nav-prev{border-radius:var(--pep-border-radius-md,.25rem);height:2rem!important;padding:.25rem;width:2rem!important}  .g-nav-next .mat-icon,   .g-nav-prev .mat-icon{display:inline-block!important}  .g-nav-prev{transform:translateY(-50%) perspective(1px) scaleX(-1)!important}.vertical-gallery[_ngcontent-%COMP%]     gallery-thumbs{margin:var(--pep-spacing-lg,1rem) 0 var(--pep-spacing-sm,.5rem) 0}.vertical-gallery[_ngcontent-%COMP%]     gallery-thumbs gallery-thumb{margin:0 var(--pep-spacing-sm,.5rem)}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiImagesFilmstripComponent, [{
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
    }], function () { return [{ type: CustomizationService }, { type: DialogService }, { type: LayoutService }, { type: FileService }, { type: Gallery }, { type: Renderer2 }, { type: ElementRef }, { type: ChangeDetectorRef }, { type: MatDialogRef, decorators: [{
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

class PepperiImagesFilmstripModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit,
            pepperiIconSystemClose,
            pepperiIconArrowRightAlt,
            pepperiIconArrowLeftAlt
        ]);
    }
}
PepperiImagesFilmstripModule.ɵmod = ɵɵdefineNgModule({ type: PepperiImagesFilmstripModule });
PepperiImagesFilmstripModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiImagesFilmstripModule_Factory(t) { return new (t || PepperiImagesFilmstripModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            BrowserAnimationsModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules,
            MatCommonModule,
            MatFormFieldModule,
            MatDialogModule,
            MatIconModule,
            // External modules
            GalleryModule,
            ImageViewerModule,
            // ImageViewerModule.forRoot({
            //     btnClass: 'default', // The CSS class(es) that will apply to the buttons
            //     zoomFactor: 0.1, // The amount that the scale will be increased by
            //     containerBackgroundColor: 'transparent', // The color to use for the background. This can provided in hex, or rgb(a).
            //     wheelZoom: true, // If true, the mouse wheel can be used to zoom in
            //     allowFullscreen: false, // If true, the fullscreen button will be shown, allowing the user to entr fullscreen mode
            //     btnIcons: {
            //         // The icon classes that will apply to the buttons. By default, font-awesome is used.
            //         zoomIn: 'fa fa-plus',
            //         zoomOut: 'fa fa-minus',
            //         rotateClockwise: 'fa fa-repeat',
            //         rotateCounterClockwise: 'fa fa-undo',
            //         next: 'fa fa-arrow-right',
            //         prev: 'fa fa-arrow-left',
            //         fullscreen: 'fa fa-arrows-alt'
            //     }
            // }),
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiImagesFilmstripModule, { declarations: [PepperiImagesFilmstripComponent], imports: [CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        MatDialogModule,
        MatIconModule,
        // External modules
        GalleryModule,
        ImageViewerModule,
        // ImageViewerModule.forRoot({
        //     btnClass: 'default', // The CSS class(es) that will apply to the buttons
        //     zoomFactor: 0.1, // The amount that the scale will be increased by
        //     containerBackgroundColor: 'transparent', // The color to use for the background. This can provided in hex, or rgb(a).
        //     wheelZoom: true, // If true, the mouse wheel can be used to zoom in
        //     allowFullscreen: false, // If true, the fullscreen button will be shown, allowing the user to entr fullscreen mode
        //     btnIcons: {
        //         // The icon classes that will apply to the buttons. By default, font-awesome is used.
        //         zoomIn: 'fa fa-plus',
        //         zoomOut: 'fa fa-minus',
        //         rotateClockwise: 'fa fa-repeat',
        //         rotateCounterClockwise: 'fa fa-undo',
        //         next: 'fa fa-arrow-right',
        //         prev: 'fa fa-arrow-left',
        //         fullscreen: 'fa fa-arrows-alt'
        //     }
        // }),
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiDialogModule], exports: [PepperiImagesFilmstripComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiImagesFilmstripModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    BrowserAnimationsModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules,
                    MatCommonModule,
                    MatFormFieldModule,
                    MatDialogModule,
                    MatIconModule,
                    // External modules
                    GalleryModule,
                    ImageViewerModule,
                    // ImageViewerModule.forRoot({
                    //     btnClass: 'default', // The CSS class(es) that will apply to the buttons
                    //     zoomFactor: 0.1, // The amount that the scale will be increased by
                    //     containerBackgroundColor: 'transparent', // The color to use for the background. This can provided in hex, or rgb(a).
                    //     wheelZoom: true, // If true, the mouse wheel can be used to zoom in
                    //     allowFullscreen: false, // If true, the fullscreen button will be shown, allowing the user to entr fullscreen mode
                    //     btnIcons: {
                    //         // The icon classes that will apply to the buttons. By default, font-awesome is used.
                    //         zoomIn: 'fa fa-plus',
                    //         zoomOut: 'fa fa-minus',
                    //         rotateClockwise: 'fa fa-repeat',
                    //         rotateCounterClockwise: 'fa fa-undo',
                    //         next: 'fa fa-arrow-right',
                    //         prev: 'fa fa-arrow-left',
                    //         fullscreen: 'fa fa-arrows-alt'
                    //     }
                    // }),
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiDialogModule
                ],
                exports: [PepperiImagesFilmstripComponent],
                declarations: [PepperiImagesFilmstripComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/images-filmstrip
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiImagesFilmstripComponent, PepperiImagesFilmstripModule, createViewerConfig };
//# sourceMappingURL=pepperi-addons-ngx-lib-images-filmstrip.js.map
