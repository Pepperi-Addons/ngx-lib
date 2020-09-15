(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser/animations'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/form-field'), require('@angular/material/dialog'), require('@angular/material/icon'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/field-title'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/dialog'), require('@ngx-gallery/core'), require('@hallysonh/ngx-imageviewer'), require('@ngx-translate/core'), require('hammerjs')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/images-filmstrip', ['exports', '@angular/core', '@angular/common', '@angular/platform-browser/animations', '@angular/forms', '@angular/material/core', '@angular/material/form-field', '@angular/material/dialog', '@angular/material/icon', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/field-title', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/dialog', '@ngx-gallery/core', '@hallysonh/ngx-imageviewer', '@ngx-translate/core', 'hammerjs'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib']['images-filmstrip'] = {}), global.ng.core, global.ng.common, global.ng.platformBrowser.animations, global.ng.forms, global.ng.material.core, global.ng.material.formField, global.ng.material.dialog, global.ng.material.icon, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib']['field-title'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib'].dialog, global.gallery, global['image-viewer'], global.core$1));
}(this, (function (exports, i0, i5, animations, i6, core, formField, i4, i8, i1, i7, i1$1, i2, i3, i10, core$1) { 'use strict';

    var _c0 = ["galleryCont"];
    var _c1 = ["galleryDialogTemplate"];
    var _c2 = ["galleryDialogCont"];
    function PepperiImagesFilmstripComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiImagesFilmstripComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0, 4);
            i0.ɵɵelementStart(1, "div", 5);
            i0.ɵɵelement(2, "pep-field-title", 6);
            i0.ɵɵelementStart(3, "div", 7, 8);
            i0.ɵɵelementStart(5, "gallery", 9);
            i0.ɵɵlistener("itemClick", function PepperiImagesFilmstripComponent_ng_template_1_Template_gallery_itemClick_5_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.enlargeImage($event); })("indexChange", function PepperiImagesFilmstripComponent_ng_template_1_Template_gallery_indexChange_5_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.indexChange($event); })("error", function PepperiImagesFilmstripComponent_ng_template_1_Template_gallery_error_5_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onError($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("formGroup", ctx_r2.form);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("label", ctx_r2.label)("xAlignment", ctx_r2.xAlignment)("showTitle", ctx_r2.showTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("height", ctx_r2.fieldHeight);
            i0.ɵɵproperty("ngClass", ctx_r2.isVertical ? "vertical-gallery" : "horizontal-gallery");
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate2("id", "", ctx_r2.key, "-", ctx_r2.objectId, "-gallery");
        }
    }
    function PepperiImagesFilmstripComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
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
            i0.ɵɵlistener("indexChange", function PepperiImagesFilmstripComponent_ng_template_3_Template_gallery_indexChange_8_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.indexChange($event); })("error", function PepperiImagesFilmstripComponent_ng_template_3_Template_gallery_error_8_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onError($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            var _r5 = i0.ɵɵreference(6);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r4.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("mat-dialog-close", null);
            i0.ɵɵadvance(5);
            i0.ɵɵstyleProp("height", "auto", "px");
            i0.ɵɵpropertyInterpolate2("id", "", ctx_r4.key, "-", ctx_r4.objectId, "-dlgGallery");
            i0.ɵɵproperty("itemTemplate", _r5);
        }
    }
    function PepperiImagesFilmstripComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "ngx-imageviewer", 17, 18);
        }
        if (rf & 2) {
            var data_r18 = ctx.data;
            i0.ɵɵproperty("src", data_r18.src);
        }
    }
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
            nextPageButton: i10.createButtonConfig('navigate_next', 'Next page', 0, false),
            beforePageButton: i10.createButtonConfig('navigate_before', 'Previous page', 1, false),
            zoomOutButton: i10.createButtonConfig('zoom_out', 'Zoom out', 0, false),
            zoomInButton: i10.createButtonConfig('zoom_in', 'Zoom in', 1, false),
            rotateLeftButton: i10.createButtonConfig('rotate_left', 'Rotate left', 2, false),
            rotateRightButton: i10.createButtonConfig('rotate_right', 'Rotate right', 3, false),
            resetButton: i10.createButtonConfig('autorenew', 'Reset', 4, false),
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
    var PepperiImagesFilmstripComponent = /** @class */ (function () {
        function PepperiImagesFilmstripComponent(customizationService, dialogService, layoutService, fileService, gallery, renderer, element, cd, dialogRef, data) {
            var _this = this;
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
                Object.keys(data).forEach(function (key) {
                    if (key in _this) {
                        _this[key] = data[key];
                    }
                });
            }
            this.config = {
                // nav: false, // Show navigation buttons
                navIcon: i1$1.pepperiIconArrowRightAlt.data,
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
                loadingStrategy: i3.LoadingStrategy.Default,
            };
        }
        PepperiImagesFilmstripComponent.prototype.ngOnInit = function () {
            if (!this.inDialog) {
                if (this.form === null) {
                    this.standAlone = true;
                    this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
                    this.renderer.addClass(this.element.nativeElement, i1.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
                }
                this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
            }
            if (this.items === null) {
                var imgArr = this.value ? this.value.split(';') : [];
                // add No image image when there is no images
                if (imgArr.length === 0) {
                    var noImageSrc = this.fileService.getNoImagePath();
                    imgArr.push(noImageSrc);
                }
                this.items = imgArr.map(function (img) { return new i3.ImageItem({ src: img, thumb: img }); });
            }
            this.config.dots = this.config.nav = this.items.length > 1;
            this.config.thumb = (this.key === 'ItemFilmstripImages' || this.showThumbnails) && this.items.length > 1 ? true : false;
            this.currIndex =
                this.key === 'ItemFilmstripImages' &&
                    this.currIndex === 0 &&
                    this.items.length > 1 ?
                    Math.floor(this.items.length / 2) - 1 : this.currIndex;
        };
        PepperiImagesFilmstripComponent.prototype.ngAfterViewInit = function () {
            if (this.inDialog) {
                this.afterDialogOpened();
            }
            else {
                this.galleryRef = this.gallery.ref(this.key + '-' + this.objectId + '-gallery');
                this.initGalleryStyle(this.galleryCont, this.galleryRef);
            }
        };
        PepperiImagesFilmstripComponent.prototype.ngOnDestroy = function () {
            if (this.galleryRef) {
                this.galleryRef.destroy();
            }
            if (this.dialogGalleryRef) {
                this.dialogGalleryRef.destroy();
            }
            // if (this.myPinch) { this.myPinch.destroy(); }
        };
        PepperiImagesFilmstripComponent.prototype.initGalleryStyle = function (galleryContainer, galleryRef) {
            // Set thumbnails position and sliding direction
            this.setThumbnailDimension(galleryContainer);
            galleryRef.setConfig(this.config);
            galleryRef.load(this.items);
            var currentIndex = this.currIndex;
            if (currentIndex > 0) {
                galleryRef.set(currentIndex);
            }
        };
        PepperiImagesFilmstripComponent.prototype.onError = function (e) {
            var noImageSrc = this.fileService.getNoImagePath();
            var noimg = new i3.ImageItem({ src: noImageSrc, thumb: noImageSrc });
            this.items.splice(e.itemIndex, 1, noimg);
        };
        PepperiImagesFilmstripComponent.prototype.enlargeImage = function (event) {
            var _this = this;
            var dialogRef = this.dialogService.openDialog(this.galleryDialogTemplate);
            dialogRef.afterOpened().subscribe(function () {
                _this.afterDialogOpened();
            });
            // Update currentIndex in galleryRef
            dialogRef.afterClosed().subscribe(function (value) {
                _this.galleryRef.set(_this.currIndex);
            });
        };
        PepperiImagesFilmstripComponent.prototype.afterDialogOpened = function () {
            this.dialogGalleryRef = this.gallery.ref(this.key + '-' + this.objectId + '-dlgGallery');
            this.initGalleryStyle(this.galleryDialogCont, this.dialogGalleryRef);
        };
        PepperiImagesFilmstripComponent.prototype.setThumbnailDimension = function (galleryContainer) {
            this.galleryWidth = galleryContainer.nativeElement.clientWidth;
            this.galleryHeight = galleryContainer.nativeElement.clientHeight;
            this.isVertical = this.galleryWidth < this.galleryHeight;
            if (this.isVertical) {
                var width = (this.galleryWidth - ((this.items.length - 1) * 16)) / this.items.length;
                width = Math.min(Math.max(width, 24), 96);
                this.config.thumbHeight = width;
                this.config.thumbWidth = (width + 16);
            }
            else {
                var height = (this.galleryHeight - ((this.items.length - 1) * 16)) / this.items.length;
                height = Math.min(Math.max(height, 24), 96);
                this.config.thumbHeight = (height + 16);
                this.config.thumbWidth = height;
            }
            this.config.thumbPosition = this.isVertical ?
                i3.ThumbnailsPosition.Bottom : this.layoutService.isRtl() ?
                i3.ThumbnailsPosition.Right : i3.ThumbnailsPosition.Left;
            this.config.slidingDirection = this.key !== 'ItemFilmstripImages' ?
                i3.SlidingDirection.Horizontal : this.isVertical ?
                i3.SlidingDirection.Horizontal : i3.SlidingDirection.Vertical;
        };
        PepperiImagesFilmstripComponent.prototype.indexChange = function (item) {
            this.currIndex = item.currIndex;
            // if (this.ngxViewerImage && this.ngxViewerImage.scale) {
            //     this.ngxViewerImage.scale = 1;
            //     this.updateStyle();
            // }
        };
        return PepperiImagesFilmstripComponent;
    }());
    PepperiImagesFilmstripComponent.ɵfac = function PepperiImagesFilmstripComponent_Factory(t) { return new (t || PepperiImagesFilmstripComponent)(i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i2.DialogService), i0.ɵɵdirectiveInject(i1.LayoutService), i0.ɵɵdirectiveInject(i1.FileService), i0.ɵɵdirectiveInject(i3.Gallery), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i4.MatDialogRef, 8), i0.ɵɵdirectiveInject(i4.MAT_DIALOG_DATA, 8)); };
    PepperiImagesFilmstripComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiImagesFilmstripComponent, selectors: [["pep-images-filmstrip"]], viewQuery: function PepperiImagesFilmstripComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
                i0.ɵɵviewQuery(_c1, true, i0.TemplateRef);
                i0.ɵɵviewQuery(_c2, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.galleryCont = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.galleryDialogTemplate = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.galleryDialogCont = _t.first);
            }
        }, inputs: { value: "value", key: "key", label: "label", xAlignment: "xAlignment", rowSpan: "rowSpan", form: "form", objectId: "objectId", showTitle: "showTitle", layoutType: "layoutType", currIndex: "currIndex", showThumbnails: "showThumbnails" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: i10.IMAGEVIEWER_CONFIG,
                    // useValue: IMAGEVIEWER_CONFIG_DEFAULT,
                    useFactory: createViewerConfig,
                    deps: [core$1.TranslateService]
                }
            ])], decls: 7, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["regularTemplate", ""], ["galleryDialogTemplate", ""], ["itemTemplate", ""], [3, "formGroup"], [1, "images-filmstrip-container"], [3, "label", "xAlignment", "showTitle"], [1, "img-wrapper", 3, "ngClass"], ["galleryCont", ""], [3, "id", "itemClick", "indexChange", "error"], ["mat-dialog-title", "", 1, "pepperi-border-bottom"], [1, "pull-left", "flip"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], ["mat-dialog-content", ""], ["galleryDialogCont", ""], [3, "id", "itemTemplate", "indexChange", "error"], ["id", "ngxViewerImage", 3, "src"], ["ngxViewerImage", ""]], template: function PepperiImagesFilmstripComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PepperiImagesFilmstripComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
                i0.ɵɵtemplate(1, PepperiImagesFilmstripComponent_ng_template_1_Template, 6, 9, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, PepperiImagesFilmstripComponent_ng_template_3_Template, 9, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(5, PepperiImagesFilmstripComponent_ng_template_5_Template, 2, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(2);
                var _r3 = i0.ɵɵreference(4);
                i0.ɵɵproperty("ngIf", ctx.inDialog)("ngIfThen", _r3)("ngIfElse", _r1);
            }
        }, directives: [i5.NgIf, i6.NgControlStatusGroup, i6.FormGroupDirective, i7.PepperiFieldTitleComponent, i5.NgClass, i3.GalleryComponent, i4.MatDialogTitle, i4.MatDialogClose, i8.MatIcon, i1$1.PepperiIconComponent, i4.MatDialogContent, i10.ɵb], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit;width:100%}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.images-filmstrip-container[_ngcontent-%COMP%]{height:100%}.images-filmstrip-container[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%], gallery[_ngcontent-%COMP%]{height:calc(100% - 1.5rem)}gallery[_ngcontent-%COMP%]{min-height:calc(100% - 1.5rem)}.mat-dialog-content[_ngcontent-%COMP%]{max-height:80vh;min-height:80vh}.mat-dialog-content[_ngcontent-%COMP%]   gallery[_ngcontent-%COMP%]{min-height:calc(100% - 50px);min-width:65vw}  gallery-thumbs{margin:0 var(--pep-spacing-lg,1rem) 0 var(--pep-spacing-sm,.5rem)}  gallery-thumbs gallery-thumb{border-radius:var(--pep-border-radius-md,.25rem);margin:var(--pep-spacing-sm,.5rem) 0;padding:0!important}  gallery-thumbs gallery-thumb .g-image-item{background-size:cover}  gallery-item gallery-image .g-image-item{border-radius:var(--pep-border-radius-lg,.5rem)}  gallery-item:hover{cursor:pointer}  gallery-dots{border-radius:var(--pep-border-radius-md,.25rem);position:absolute!important}  gallery-dots.pepperi-button{display:flex!important}  .img-container{align-items:center;display:flex}  .g-nav-next,   .g-nav-prev{border-radius:var(--pep-border-radius-md,.25rem);height:2rem!important;padding:.25rem;width:2rem!important}  .g-nav-next .mat-icon,   .g-nav-prev .mat-icon{display:inline-block!important}  .g-nav-prev{transform:translateY(-50%) perspective(1px) scaleX(-1)!important}.vertical-gallery[_ngcontent-%COMP%]     gallery-thumbs{margin:var(--pep-spacing-lg,1rem) 0 var(--pep-spacing-sm,.5rem) 0}.vertical-gallery[_ngcontent-%COMP%]     gallery-thumbs gallery-thumb{margin:0 var(--pep-spacing-sm,.5rem)}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiImagesFilmstripComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-images-filmstrip',
                        templateUrl: './images-filmstrip.component.html',
                        styleUrls: ['./images-filmstrip.component.scss'],
                        // animations: [slideInAnimation],
                        providers: [
                            {
                                provide: i10.IMAGEVIEWER_CONFIG,
                                // useValue: IMAGEVIEWER_CONFIG_DEFAULT,
                                useFactory: createViewerConfig,
                                deps: [core$1.TranslateService]
                            }
                        ]
                    }]
            }], function () {
            return [{ type: i1.CustomizationService }, { type: i2.DialogService }, { type: i1.LayoutService }, { type: i1.FileService }, { type: i3.Gallery }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i4.MatDialogRef, decorators: [{
                            type: i0.Optional
                        }] }, { type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [i4.MAT_DIALOG_DATA]
                        }] }];
        }, { value: [{
                    type: i0.Input
                }], key: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], xAlignment: [{
                    type: i0.Input
                }], rowSpan: [{
                    type: i0.Input
                }], form: [{
                    type: i0.Input
                }], objectId: [{
                    type: i0.Input
                }], showTitle: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], currIndex: [{
                    type: i0.Input
                }], showThumbnails: [{
                    type: i0.Input
                }], galleryCont: [{
                    type: i0.ViewChild,
                    args: ['galleryCont']
                }], galleryDialogTemplate: [{
                    type: i0.ViewChild,
                    args: ['galleryDialogTemplate', { read: i0.TemplateRef }]
                }], galleryDialogCont: [{
                    type: i0.ViewChild,
                    args: ['galleryDialogCont']
                }] });
    })();

    var PepperiImagesFilmstripModule = /** @class */ (function () {
        function PepperiImagesFilmstripModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1$1.pepperiIconSystemEdit,
                i1$1.pepperiIconSystemClose,
                i1$1.pepperiIconArrowRightAlt,
                i1$1.pepperiIconArrowLeftAlt
            ]);
        }
        return PepperiImagesFilmstripModule;
    }());
    PepperiImagesFilmstripModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiImagesFilmstripModule });
    PepperiImagesFilmstripModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiImagesFilmstripModule_Factory(t) { return new (t || PepperiImagesFilmstripModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
                i5.CommonModule,
                animations.BrowserAnimationsModule,
                i6.ReactiveFormsModule,
                i6.FormsModule,
                // Material modules,
                core.MatCommonModule,
                formField.MatFormFieldModule,
                i4.MatDialogModule,
                i8.MatIconModule,
                // External modules
                i3.GalleryModule,
                i10.ImageViewerModule,
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
                i1.PepperiModule,
                i1$1.PepperiIconModule,
                i7.PepperiFieldTitleModule,
                i2.PepperiDialogModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiImagesFilmstripModule, { declarations: [PepperiImagesFilmstripComponent], imports: [i5.CommonModule,
                animations.BrowserAnimationsModule,
                i6.ReactiveFormsModule,
                i6.FormsModule,
                // Material modules,
                core.MatCommonModule,
                formField.MatFormFieldModule,
                i4.MatDialogModule,
                i8.MatIconModule,
                // External modules
                i3.GalleryModule,
                i10.ImageViewerModule,
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
                i1.PepperiModule,
                i1$1.PepperiIconModule,
                i7.PepperiFieldTitleModule,
                i2.PepperiDialogModule], exports: [PepperiImagesFilmstripComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiImagesFilmstripModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i5.CommonModule,
                            animations.BrowserAnimationsModule,
                            i6.ReactiveFormsModule,
                            i6.FormsModule,
                            // Material modules,
                            core.MatCommonModule,
                            formField.MatFormFieldModule,
                            i4.MatDialogModule,
                            i8.MatIconModule,
                            // External modules
                            i3.GalleryModule,
                            i10.ImageViewerModule,
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
                            i1.PepperiModule,
                            i1$1.PepperiIconModule,
                            i7.PepperiFieldTitleModule,
                            i2.PepperiDialogModule
                        ],
                        exports: [PepperiImagesFilmstripComponent],
                        declarations: [PepperiImagesFilmstripComponent],
                    }]
            }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/images-filmstrip
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiImagesFilmstripComponent = PepperiImagesFilmstripComponent;
    exports.PepperiImagesFilmstripModule = PepperiImagesFilmstripModule;
    exports.createViewerConfig = createViewerConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-images-filmstrip.umd.js.map
