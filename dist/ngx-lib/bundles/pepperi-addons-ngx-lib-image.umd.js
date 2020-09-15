(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/field-title'), require('@pepperi-addons/ngx-lib/files-uploader'), require('@pepperi-addons/ngx-lib/images-filmstrip'), require('jquery'), require('@ngx-translate/core'), require('@pepperi-addons/ngx-lib/dialog')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/image', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/core', '@angular/material/form-field', '@angular/material/icon', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/field-title', '@pepperi-addons/ngx-lib/files-uploader', '@pepperi-addons/ngx-lib/images-filmstrip', 'jquery', '@ngx-translate/core', '@pepperi-addons/ngx-lib/dialog'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].image = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.core, global.ng.material.formField, global.ng.material.icon, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib']['field-title'], global['pepperi-addons']['ngx-lib']['files-uploader'], global['pepperi-addons']['ngx-lib']['images-filmstrip'], global.jquery, global.translate, global['pepperi-addons']['ngx-lib'].dialog));
}(this, (function (exports, i0, i5, i4, core, formField, i8, i3, i1, i6, i7, imagesFilmstrip, $, i1$1, i2) { 'use strict';

    var _c0 = function (a0) { return { "one-row": a0 }; };
    function PepperiImageComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵelement(2, "pep-field-title", 3);
            i0.ɵɵelementStart(3, "files-uploader", 4);
            i0.ɵɵlistener("fileChanged", function PepperiImageComponent_ng_container_1_ng_container_2_Template_files_uploader_fileChanged_3_listener($event) { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.onFileChanged($event); })("elementClicked", function PepperiImageComponent_ng_container_1_ng_container_2_Template_files_uploader_elementClicked_3_listener($event) { i0.ɵɵrestoreView(_r8_1); var ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.onFileClicked($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(20, _c0, ctx_r1.rowSpan == 1));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", ctx_r1.label)("required", ctx_r1.required)("disabled", ctx_r1.disabled)("xAlignment", ctx_r1.xAlignment)("showTitle", ctx_r1.showTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("id", ctx_r1.key)("key", ctx_r1.key)("layoutType", ctx_r1.layoutType)("standAlone", ctx_r1.standAlone)("src", ctx_r1.srcLarge || ctx_r1.src)("label", ctx_r1.label)("required", ctx_r1.required)("disabled", ctx_r1.disabled)("xAlignment", ctx_r1.xAlignment)("rowSpan", ctx_r1.rowSpan)("controlType", ctx_r1.controlType)("form", ctx_r1.form)("acceptedExtensions", ctx_r1.acceptImagesType)("sizeLimitMB", ctx_r1.sizeLimitMB);
        }
    }
    var _c1 = function (a0, a1, a2) { return { "left-alignment": a0, "right-alignment": a1, "center-alignment": a2 }; };
    function PepperiImageComponent_ng_container_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 5);
            i0.ɵɵelementStart(2, "img", 6);
            i0.ɵɵlistener("click", function PepperiImageComponent_ng_container_1_ng_container_3_Template_img_click_2_listener($event) { i0.ɵɵrestoreView(_r11_1); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.itemImageClick($event); })("error", function PepperiImageComponent_ng_container_1_ng_container_3_Template_img_error_2_listener($event) { i0.ɵɵrestoreView(_r11_1); var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.errorHandler($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(6, _c1, ctx_r2.xAlignment == "1" || ctx_r2.xAlignment == "0", ctx_r2.xAlignment == "2", ctx_r2.xAlignment == "3"));
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("max-height", ctx_r2.fieldHeight);
            i0.ɵɵproperty("id", ctx_r2.key)("alt", ctx_r2.label)("src", ctx_r2.src, i0.ɵɵsanitizeUrl);
        }
    }
    var _c2 = function (a0) { return [a0]; };
    function PepperiImageComponent_ng_container_1_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 5);
            i0.ɵɵelementStart(2, "img", 7);
            i0.ɵɵlistener("click", function PepperiImageComponent_ng_container_1_ng_container_4_Template_img_click_2_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.itemImageClick($event); })("error", function PepperiImageComponent_ng_container_1_ng_container_4_Template_img_error_2_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.errorHandler($event); })("load", function PepperiImageComponent_ng_container_1_ng_container_4_Template_img_load_2_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.setTitle($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(7, _c1, ctx_r3.xAlignment == "1" || ctx_r3.xAlignment == "0", ctx_r3.xAlignment == "2", ctx_r3.xAlignment == "3"));
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("max-height", ctx_r3.fieldHeight);
            i0.ɵɵproperty("id", ctx_r3.key)("ngClass", i0.ɵɵpureFunction1(11, _c2, "text-align-" + ctx_r3.xAlignment))("alt", ctx_r3.label)("src", ctx_r3.src, i0.ɵɵsanitizeUrl);
        }
    }
    var _c3 = function (a0, a1, a2, a3) { return { bottom: a0, top: a1, left: a2, right: a3 }; };
    function PepperiImageComponent_ng_container_1_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "button", 8);
            i0.ɵɵlistener("click", function PepperiImageComponent_ng_container_1_ng_container_5_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.enterChildren($event); });
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵelement(3, "pep-icon", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("id", ctx_r4.key)("ngClass", i0.ɵɵpureFunction4(2, _c3, (ctx_r4.menuField == null ? null : ctx_r4.menuField.Layout == null ? null : ctx_r4.menuField.Layout.YAlignment) == "2", (ctx_r4.menuField == null ? null : ctx_r4.menuField.Layout == null ? null : ctx_r4.menuField.Layout.YAlignment) == "1", (ctx_r4.menuField == null ? null : ctx_r4.menuField.Layout == null ? null : ctx_r4.menuField.Layout.XAlignment) == "1", (ctx_r4.menuField == null ? null : ctx_r4.menuField.Layout == null ? null : ctx_r4.menuField.Layout.XAlignment) == "2"));
        }
    }
    function PepperiImageComponent_ng_container_1_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span", 10);
            i0.ɵɵelementStart(2, "mat-icon", 11);
            i0.ɵɵelement(3, "pep-icon", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.FormattedValue);
            i0.ɵɵproperty("id", ctx_r5.key)("ngClass", i0.ɵɵpureFunction4(3, _c3, (ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.Layout == null ? null : ctx_r5.hasCampaignField.Layout.YAlignment) == "2", (ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.Layout == null ? null : ctx_r5.hasCampaignField.Layout.YAlignment) == "1", (ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.Layout == null ? null : ctx_r5.hasCampaignField.Layout.XAlignment) == "1", (ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.Layout == null ? null : ctx_r5.hasCampaignField.Layout.XAlignment) == "2"));
        }
    }
    function PepperiImageComponent_ng_container_1_ng_container_7_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "pep-icon", 15);
            i0.ɵɵelementContainerEnd();
        }
    }
    function PepperiImageComponent_ng_container_1_ng_container_7_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "pep-icon", 16);
            i0.ɵɵelementContainerEnd();
        }
    }
    function PepperiImageComponent_ng_container_1_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span", 13);
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtemplate(3, PepperiImageComponent_ng_container_1_ng_container_7_ng_container_3_Template, 2, 0, "ng-container", 14);
            i0.ɵɵtemplate(4, PepperiImageComponent_ng_container_1_ng_container_7_ng_container_4_Template, 2, 0, "ng-container", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("id", ctx_r6.key)("ngClass", i0.ɵɵpureFunction4(4, _c3, (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.Layout == null ? null : ctx_r6.indicatorsField.Layout.YAlignment) == "2", (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.Layout == null ? null : ctx_r6.indicatorsField.Layout.YAlignment) == "1", (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.Layout == null ? null : ctx_r6.indicatorsField.Layout.XAlignment) == "1", (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.Layout == null ? null : ctx_r6.indicatorsField.Layout.XAlignment) == "2"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.FormattedValue == null ? null : ctx_r6.indicatorsField.FormattedValue.split(";"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.FormattedValue == null ? null : ctx_r6.indicatorsField.FormattedValue.split(";").length) < 4);
        }
    }
    function PepperiImageComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementContainerStart(1);
            i0.ɵɵtemplate(2, PepperiImageComponent_ng_container_1_ng_container_2_Template, 4, 22, "ng-container", 1);
            i0.ɵɵtemplate(3, PepperiImageComponent_ng_container_1_ng_container_3_Template, 3, 10, "ng-container", 1);
            i0.ɵɵtemplate(4, PepperiImageComponent_ng_container_1_ng_container_4_Template, 3, 13, "ng-container", 1);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(5, PepperiImageComponent_ng_container_1_ng_container_5_Template, 4, 7, "ng-container", 1);
            i0.ɵɵtemplate(6, PepperiImageComponent_ng_container_1_ng_container_6_Template, 4, 8, "ng-container", 1);
            i0.ɵɵtemplate(7, PepperiImageComponent_ng_container_1_ng_container_7_Template, 5, 9, "ng-container", 1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r0.layoutType === ctx_r0.LAYOUT_TYPE.PepperiForm);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.layoutType === ctx_r0.LAYOUT_TYPE.PepperiCard);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.layoutType === ctx_r0.LAYOUT_TYPE.PepperiTable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.menuField);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.hasCampaignField && (ctx_r0.hasCampaignField == null ? null : ctx_r0.hasCampaignField.FormattedValue));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.indicatorsField && (ctx_r0.indicatorsField == null ? null : ctx_r0.indicatorsField.FormattedValue) != "");
        }
    }
    var PepperiImageComponent = /** @class */ (function () {
        function PepperiImageComponent(translate, dialogService, customizationService, fileService, renderer, element) {
            this.translate = translate;
            this.dialogService = dialogService;
            this.customizationService = customizationService;
            this.fileService = fileService;
            this.renderer = renderer;
            this.element = element;
            this.key = '';
            this.srcLarge = '';
            this.src = '';
            this.options = null;
            this.label = '';
            this.type = 'image';
            this.required = false;
            this.disabled = false;
            this.readonly = false;
            this.xAlignment = '0';
            this.rowSpan = 1;
            this.indicatorsField = null;
            this.menuField = null;
            this.hasCampaignField = null;
            this.controlType = 'image';
            this.form = null;
            this.objectId = '';
            this.showTitle = true;
            this.layoutType = i3.LAYOUT_TYPE.PepperiForm;
            this.isActive = false;
            this.sizeLimitMB = 5;
            this.acceptImagesType = 'bmp,jpg,jpeg,png,gif'; // "image/bmp, image/jpg, image/jpeg, image/png, image/tif, image/tiff";
            this.valueChanged = new i0.EventEmitter();
            this.elementClicked = new i0.EventEmitter();
            this.LAYOUT_TYPE = i3.LAYOUT_TYPE;
            this.fieldHeight = '';
            this.standAlone = false;
            this.dataURI = null;
        }
        PepperiImageComponent.prototype.ngOnInit = function () {
            if (this.form === null) {
                this.standAlone = true;
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.src, this.required, this.readonly, this.disabled);
                this.renderer.addClass(this.element.nativeElement, i3.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
            }
            this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
        };
        PepperiImageComponent.prototype.ngOnChanges = function (changes) {
            var _a, _b;
            if (((_b = (_a = changes.src) === null || _a === void 0 ? void 0 : _a.currentValue) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                // Empty dataURI if there is change in the src.
                this.dataURI = null;
            }
        };
        PepperiImageComponent.prototype.ngOnDestroy = function () {
            if (this.elementClicked) {
                this.elementClicked.unsubscribe();
            }
            if (this.valueChanged) {
                this.valueChanged.unsubscribe();
            }
        };
        PepperiImageComponent.prototype.errorHandler = function (event) {
            event.target.src = this.fileService.getNoImagePath();
            event.target.title = this.translate.instant('IMAGE.NO_IMAGE');
        };
        PepperiImageComponent.prototype.setTitle = function (event) {
            event.target.style.visibility = 'visible';
            event.target.title = event.target.title.length === 0 ? this.translate.instant('IMAGE.CLICK_TO_ENLARGE') : event.target.title;
        };
        PepperiImageComponent.prototype.enterChildren = function (event) {
            this.elementClicked.emit({ apiName: PepperiImageComponent.ENTER_CHILDREN, eventWhich: event.which });
        };
        PepperiImageComponent.prototype.onFileChanged = function (value) {
            this.dataURI = value.length > 0 ? JSON.parse(value) : null;
            this.src = this.srcLarge = this.standAlone && this.dataURI ? this.dataURI.fileStr : '';
            this.customizationService.updateFormFieldValue(this.form, this.key, this.dataURI ? this.dataURI.fileExt : '');
            this.valueChanged.emit({ apiName: this.key, value: value, controlType: this.controlType });
        };
        PepperiImageComponent.prototype.objectIdIsNotEmpty = function () {
            var _a;
            return (((_a = this.objectId) === null || _a === void 0 ? void 0 : _a.length) > 0 && this.objectId !== '0');
        };
        PepperiImageComponent.prototype.onFileClicked = function (event) {
            var hasParentImage = true;
            if (this.objectIdIsNotEmpty() && this.src && this.src.indexOf('no-image') > -1) {
                hasParentImage = false;
            }
            this.openImageModal(hasParentImage);
            this.elementClicked.emit({ apiName: this.key, eventWhich: event.which });
        };
        PepperiImageComponent.prototype.itemImageClick = function (event) {
            var hasParentImage = true;
            if (($(event.target).attr('src') && $(event.target).attr('src').indexOf('no-image') > -1) ||
                ($(event.target).next('img').length && $(event.target).next('img').attr('src').indexOf('no-image') > -1)) {
                hasParentImage = false;
            }
            this.openImageModal(hasParentImage);
        };
        PepperiImageComponent.prototype.openImageModal = function (hasParentImage) {
            if (this.dataURI) {
                var fileStrArr = this.dataURI.fileStr.split(';');
                if (fileStrArr.length === 2) {
                    var win = window.open('', '_blank');
                    var contentType = fileStrArr[0].split(':')[1];
                    var base64 = fileStrArr[1].split(',')[1];
                    var blob = this.fileService.convertFromb64toBlob(base64, contentType);
                    var url = URL.createObjectURL(blob);
                    win.location.href = url;
                }
            }
            else {
                // Show image in modal.
                var dialogRef = this.dialogService.openDialog(imagesFilmstrip.PepperiImagesFilmstripComponent, {
                    currIndex: 0,
                    key: this.key,
                    value: this.srcLarge || this.src,
                    label: this.label,
                    objectId: this.objectId,
                    showThumbnails: true
                });
            }
        };
        return PepperiImageComponent;
    }());
    PepperiImageComponent.ENTER_CHILDREN = '[EnterChildren]';
    PepperiImageComponent.ɵfac = function PepperiImageComponent_Factory(t) { return new (t || PepperiImageComponent)(i0.ɵɵdirectiveInject(i1$1.TranslateService), i0.ɵɵdirectiveInject(i2.DialogService), i0.ɵɵdirectiveInject(i3.CustomizationService), i0.ɵɵdirectiveInject(i3.FileService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PepperiImageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiImageComponent, selectors: [["pep-image"]], inputs: { key: "key", srcLarge: "srcLarge", src: "src", options: "options", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", indicatorsField: "indicatorsField", menuField: "menuField", hasCampaignField: "hasCampaignField", form: "form", objectId: "objectId", showTitle: "showTitle", layoutType: "layoutType", isActive: "isActive", sizeLimitMB: "sizeLimitMB", acceptImagesType: "acceptImagesType" }, outputs: { valueChanged: "valueChanged", elementClicked: "elementClicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "formGroup"], [4, "ngIf"], [1, "pepperi-file-container", "image-container", 3, "ngClass"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [3, "id", "key", "layoutType", "standAlone", "src", "label", "required", "disabled", "xAlignment", "rowSpan", "controlType", "form", "acceptedExtensions", "sizeLimitMB", "fileChanged", "elementClicked"], [1, "img-wrapper", 3, "ngClass"], [1, "pepperi-report-file", 3, "id", "alt", "src", "click", "error"], [1, "pepperi-report-file", "pepperi-report-img", 3, "id", "ngClass", "alt", "src", "click", "error", "load"], [1, "floating-field", "pepperi-button", "icon-button", "weak", "invert", 3, "id", "ngClass", "click"], ["name", "system_menu"], [1, "campaign", "floating-field", 3, "id", "title", "ngClass"], [1, "has-active-campaign"], ["name", "system_bolt"], [1, "indicators-container", "floating-field", 3, "id", "ngClass"], [4, "ngFor", "ngForOf"], ["name", "indicator_dot_placeholder", "fill", "value", 1, "pull-left", "flip"], ["name", "indicator_dot_placeholder", 1, "pull-left", "flip"]], template: function PepperiImageComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, PepperiImageComponent_ng_container_1_Template, 8, 6, "ng-container", 1);
                i0.ɵɵelementContainerEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.form);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.type !== "images");
            }
        }, directives: [i4.NgControlStatusGroup, i4.FormGroupDirective, i5.NgIf, i5.NgClass, i6.PepperiFieldTitleComponent, i7.FilesUploaderComponent, i8.MatIcon, i1.PepperiIconComponent, i5.NgForOf], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit;width:100%}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.img-wrapper[_ngcontent-%COMP%]{align-items:center;display:flex;height:100%;max-width:100%}.img-wrapper.left-alignment[_ngcontent-%COMP%]{justify-content:flex-start}.img-wrapper.center-alignment[_ngcontent-%COMP%]{justify-content:center}.img-wrapper.right-alignment[_ngcontent-%COMP%]{justify-content:flex-end}.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:contain;height:100%;max-width:100%;object-fit:contain}.pepperi-file-container[_ngcontent-%COMP%]{height:100%}.pepperi-file-container[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]{height:calc(100% - 1.5rem)}.pepperi-file-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer}.indicators-container[_ngcontent-%COMP%]{padding:0!important}.indicators-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:100%;padding:.4rem;width:100%}.indicators-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]{height:.75rem;margin:.05rem;width:.75rem}.floating-field[_ngcontent-%COMP%]{border-radius:var(--pep-border-radius-md,.25rem);cursor:pointer;height:2.5rem;padding:.5rem;position:absolute;width:2.5rem}.top[_ngcontent-%COMP%]{top:0}.bottom[_ngcontent-%COMP%]{bottom:0}.left[_ngcontent-%COMP%]{left:0}.right[_ngcontent-%COMP%]{right:0}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiImageComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-image',
                        templateUrl: './image.component.html',
                        styleUrls: ['./image.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i1$1.TranslateService }, { type: i2.DialogService }, { type: i3.CustomizationService }, { type: i3.FileService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
                    type: i0.Input
                }], srcLarge: [{
                    type: i0.Input
                }], src: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], required: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], readonly: [{
                    type: i0.Input
                }], xAlignment: [{
                    type: i0.Input
                }], rowSpan: [{
                    type: i0.Input
                }], indicatorsField: [{
                    type: i0.Input
                }], menuField: [{
                    type: i0.Input
                }], hasCampaignField: [{
                    type: i0.Input
                }], form: [{
                    type: i0.Input
                }], objectId: [{
                    type: i0.Input
                }], showTitle: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], isActive: [{
                    type: i0.Input
                }], sizeLimitMB: [{
                    type: i0.Input
                }], acceptImagesType: [{
                    type: i0.Input
                }], valueChanged: [{
                    type: i0.Output
                }], elementClicked: [{
                    type: i0.Output
                }] });
    })();

    var PepperiImageModule = /** @class */ (function () {
        function PepperiImageModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1.pepperiIconSystemMenu,
                i1.pepperiIconSystemBolt,
                i1.pepperiIconIndicatorDotPlaceholder
            ]);
        }
        return PepperiImageModule;
    }());
    PepperiImageModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiImageModule });
    PepperiImageModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiImageModule_Factory(t) { return new (t || PepperiImageModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
                i5.CommonModule,
                i4.ReactiveFormsModule,
                i4.FormsModule,
                // Material modules,
                core.MatCommonModule,
                formField.MatFormFieldModule,
                i8.MatIconModule,
                // Pepperi modules
                i3.PepperiModule,
                i1.PepperiIconModule,
                i6.PepperiFieldTitleModule,
                i7.PepperiFilesUploaderModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiImageModule, { declarations: [PepperiImageComponent], imports: [i5.CommonModule,
                i4.ReactiveFormsModule,
                i4.FormsModule,
                // Material modules,
                core.MatCommonModule,
                formField.MatFormFieldModule,
                i8.MatIconModule,
                // Pepperi modules
                i3.PepperiModule,
                i1.PepperiIconModule,
                i6.PepperiFieldTitleModule,
                i7.PepperiFilesUploaderModule], exports: [PepperiImageComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiImageModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i5.CommonModule,
                            i4.ReactiveFormsModule,
                            i4.FormsModule,
                            // Material modules,
                            core.MatCommonModule,
                            formField.MatFormFieldModule,
                            i8.MatIconModule,
                            // Pepperi modules
                            i3.PepperiModule,
                            i1.PepperiIconModule,
                            i6.PepperiFieldTitleModule,
                            i7.PepperiFilesUploaderModule,
                        ],
                        exports: [PepperiImageComponent],
                        declarations: [PepperiImageComponent],
                    }]
            }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/image
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiImageComponent = PepperiImageComponent;
    exports.PepperiImageModule = PepperiImageModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-image.umd.js.map
