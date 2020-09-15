import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import { PepperiImagesFilmstripComponent } from '@pepperi-addons/ngx-lib/images-filmstrip';
import * as $ from 'jquery';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@pepperi-addons/ngx-lib/dialog";
import * as i3 from "@pepperi-addons/ngx-lib";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "@pepperi-addons/ngx-lib/field-title";
import * as i7 from "@pepperi-addons/ngx-lib/files-uploader";
import * as i8 from "@angular/material/icon";
import * as i9 from "@pepperi-addons/ngx-lib/icon";
const _c0 = function (a0) { return { "one-row": a0 }; };
function PepperiImageComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelement(2, "pep-field-title", 3);
    i0.ɵɵelementStart(3, "files-uploader", 4);
    i0.ɵɵlistener("fileChanged", function PepperiImageComponent_ng_container_1_ng_container_2_Template_files_uploader_fileChanged_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.onFileChanged($event); })("elementClicked", function PepperiImageComponent_ng_container_1_ng_container_2_Template_files_uploader_elementClicked_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.onFileClicked($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(20, _c0, ctx_r1.rowSpan == 1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r1.label)("required", ctx_r1.required)("disabled", ctx_r1.disabled)("xAlignment", ctx_r1.xAlignment)("showTitle", ctx_r1.showTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", ctx_r1.key)("key", ctx_r1.key)("layoutType", ctx_r1.layoutType)("standAlone", ctx_r1.standAlone)("src", ctx_r1.srcLarge || ctx_r1.src)("label", ctx_r1.label)("required", ctx_r1.required)("disabled", ctx_r1.disabled)("xAlignment", ctx_r1.xAlignment)("rowSpan", ctx_r1.rowSpan)("controlType", ctx_r1.controlType)("form", ctx_r1.form)("acceptedExtensions", ctx_r1.acceptImagesType)("sizeLimitMB", ctx_r1.sizeLimitMB);
} }
const _c1 = function (a0, a1, a2) { return { "left-alignment": a0, "right-alignment": a1, "center-alignment": a2 }; };
function PepperiImageComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "img", 6);
    i0.ɵɵlistener("click", function PepperiImageComponent_ng_container_1_ng_container_3_Template_img_click_2_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.itemImageClick($event); })("error", function PepperiImageComponent_ng_container_1_ng_container_3_Template_img_error_2_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.errorHandler($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(6, _c1, ctx_r2.xAlignment == "1" || ctx_r2.xAlignment == "0", ctx_r2.xAlignment == "2", ctx_r2.xAlignment == "3"));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-height", ctx_r2.fieldHeight);
    i0.ɵɵproperty("id", ctx_r2.key)("alt", ctx_r2.label)("src", ctx_r2.src, i0.ɵɵsanitizeUrl);
} }
const _c2 = function (a0) { return [a0]; };
function PepperiImageComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "img", 7);
    i0.ɵɵlistener("click", function PepperiImageComponent_ng_container_1_ng_container_4_Template_img_click_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.itemImageClick($event); })("error", function PepperiImageComponent_ng_container_1_ng_container_4_Template_img_error_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.errorHandler($event); })("load", function PepperiImageComponent_ng_container_1_ng_container_4_Template_img_load_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.setTitle($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(7, _c1, ctx_r3.xAlignment == "1" || ctx_r3.xAlignment == "0", ctx_r3.xAlignment == "2", ctx_r3.xAlignment == "3"));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("max-height", ctx_r3.fieldHeight);
    i0.ɵɵproperty("id", ctx_r3.key)("ngClass", i0.ɵɵpureFunction1(11, _c2, "text-align-" + ctx_r3.xAlignment))("alt", ctx_r3.label)("src", ctx_r3.src, i0.ɵɵsanitizeUrl);
} }
const _c3 = function (a0, a1, a2, a3) { return { bottom: a0, top: a1, left: a2, right: a3 }; };
function PepperiImageComponent_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 8);
    i0.ɵɵlistener("click", function PepperiImageComponent_ng_container_1_ng_container_5_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.enterChildren($event); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵelement(3, "pep-icon", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", ctx_r4.key)("ngClass", i0.ɵɵpureFunction4(2, _c3, (ctx_r4.menuField == null ? null : ctx_r4.menuField.Layout == null ? null : ctx_r4.menuField.Layout.YAlignment) == "2", (ctx_r4.menuField == null ? null : ctx_r4.menuField.Layout == null ? null : ctx_r4.menuField.Layout.YAlignment) == "1", (ctx_r4.menuField == null ? null : ctx_r4.menuField.Layout == null ? null : ctx_r4.menuField.Layout.XAlignment) == "1", (ctx_r4.menuField == null ? null : ctx_r4.menuField.Layout == null ? null : ctx_r4.menuField.Layout.XAlignment) == "2"));
} }
function PepperiImageComponent_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 10);
    i0.ɵɵelementStart(2, "mat-icon", 11);
    i0.ɵɵelement(3, "pep-icon", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.FormattedValue);
    i0.ɵɵproperty("id", ctx_r5.key)("ngClass", i0.ɵɵpureFunction4(3, _c3, (ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.Layout == null ? null : ctx_r5.hasCampaignField.Layout.YAlignment) == "2", (ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.Layout == null ? null : ctx_r5.hasCampaignField.Layout.YAlignment) == "1", (ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.Layout == null ? null : ctx_r5.hasCampaignField.Layout.XAlignment) == "1", (ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.Layout == null ? null : ctx_r5.hasCampaignField.Layout.XAlignment) == "2"));
} }
function PepperiImageComponent_ng_container_1_ng_container_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "pep-icon", 15);
    i0.ɵɵelementContainerEnd();
} }
function PepperiImageComponent_ng_container_1_ng_container_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "pep-icon", 16);
    i0.ɵɵelementContainerEnd();
} }
function PepperiImageComponent_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 13);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtemplate(3, PepperiImageComponent_ng_container_1_ng_container_7_ng_container_3_Template, 2, 0, "ng-container", 14);
    i0.ɵɵtemplate(4, PepperiImageComponent_ng_container_1_ng_container_7_ng_container_4_Template, 2, 0, "ng-container", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", ctx_r6.key)("ngClass", i0.ɵɵpureFunction4(4, _c3, (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.Layout == null ? null : ctx_r6.indicatorsField.Layout.YAlignment) == "2", (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.Layout == null ? null : ctx_r6.indicatorsField.Layout.YAlignment) == "1", (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.Layout == null ? null : ctx_r6.indicatorsField.Layout.XAlignment) == "1", (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.Layout == null ? null : ctx_r6.indicatorsField.Layout.XAlignment) == "2"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.FormattedValue == null ? null : ctx_r6.indicatorsField.FormattedValue.split(";"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.FormattedValue == null ? null : ctx_r6.indicatorsField.FormattedValue.split(";").length) < 4);
} }
function PepperiImageComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
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
} }
export class PepperiImageComponent {
    constructor(translate, dialogService, customizationService, fileService, renderer, element) {
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
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.isActive = false;
        this.sizeLimitMB = 5;
        this.acceptImagesType = 'bmp,jpg,jpeg,png,gif'; // "image/bmp, image/jpg, image/jpeg, image/png, image/tif, image/tiff";
        this.valueChanged = new EventEmitter();
        this.elementClicked = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.fieldHeight = '';
        this.standAlone = false;
        this.dataURI = null;
    }
    ngOnInit() {
        if (this.form === null) {
            this.standAlone = true;
            this.form = this.customizationService.getDefaultFromGroup(this.key, this.src, this.required, this.readonly, this.disabled);
            this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        }
        this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (((_b = (_a = changes.src) === null || _a === void 0 ? void 0 : _a.currentValue) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            // Empty dataURI if there is change in the src.
            this.dataURI = null;
        }
    }
    ngOnDestroy() {
        if (this.elementClicked) {
            this.elementClicked.unsubscribe();
        }
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }
    errorHandler(event) {
        event.target.src = this.fileService.getNoImagePath();
        event.target.title = this.translate.instant('IMAGE.NO_IMAGE');
    }
    setTitle(event) {
        event.target.style.visibility = 'visible';
        event.target.title = event.target.title.length === 0 ? this.translate.instant('IMAGE.CLICK_TO_ENLARGE') : event.target.title;
    }
    enterChildren(event) {
        this.elementClicked.emit({ apiName: PepperiImageComponent.ENTER_CHILDREN, eventWhich: event.which });
    }
    onFileChanged(value) {
        this.dataURI = value.length > 0 ? JSON.parse(value) : null;
        this.src = this.srcLarge = this.standAlone && this.dataURI ? this.dataURI.fileStr : '';
        this.customizationService.updateFormFieldValue(this.form, this.key, this.dataURI ? this.dataURI.fileExt : '');
        this.valueChanged.emit({ apiName: this.key, value, controlType: this.controlType });
    }
    objectIdIsNotEmpty() {
        var _a;
        return (((_a = this.objectId) === null || _a === void 0 ? void 0 : _a.length) > 0 && this.objectId !== '0');
    }
    onFileClicked(event) {
        let hasParentImage = true;
        if (this.objectIdIsNotEmpty() && this.src && this.src.indexOf('no-image') > -1) {
            hasParentImage = false;
        }
        this.openImageModal(hasParentImage);
        this.elementClicked.emit({ apiName: this.key, eventWhich: event.which });
    }
    itemImageClick(event) {
        let hasParentImage = true;
        if (($(event.target).attr('src') && $(event.target).attr('src').indexOf('no-image') > -1) ||
            ($(event.target).next('img').length && $(event.target).next('img').attr('src').indexOf('no-image') > -1)) {
            hasParentImage = false;
        }
        this.openImageModal(hasParentImage);
    }
    openImageModal(hasParentImage) {
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
        }
        else {
            // Show image in modal.
            const dialogRef = this.dialogService.openDialog(PepperiImagesFilmstripComponent, {
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
PepperiImageComponent.ENTER_CHILDREN = '[EnterChildren]';
PepperiImageComponent.ɵfac = function PepperiImageComponent_Factory(t) { return new (t || PepperiImageComponent)(i0.ɵɵdirectiveInject(i1.TranslateService), i0.ɵɵdirectiveInject(i2.DialogService), i0.ɵɵdirectiveInject(i3.CustomizationService), i0.ɵɵdirectiveInject(i3.FileService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PepperiImageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiImageComponent, selectors: [["pep-image"]], inputs: { key: "key", srcLarge: "srcLarge", src: "src", options: "options", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", indicatorsField: "indicatorsField", menuField: "menuField", hasCampaignField: "hasCampaignField", form: "form", objectId: "objectId", showTitle: "showTitle", layoutType: "layoutType", isActive: "isActive", sizeLimitMB: "sizeLimitMB", acceptImagesType: "acceptImagesType" }, outputs: { valueChanged: "valueChanged", elementClicked: "elementClicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "formGroup"], [4, "ngIf"], [1, "pepperi-file-container", "image-container", 3, "ngClass"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [3, "id", "key", "layoutType", "standAlone", "src", "label", "required", "disabled", "xAlignment", "rowSpan", "controlType", "form", "acceptedExtensions", "sizeLimitMB", "fileChanged", "elementClicked"], [1, "img-wrapper", 3, "ngClass"], [1, "pepperi-report-file", 3, "id", "alt", "src", "click", "error"], [1, "pepperi-report-file", "pepperi-report-img", 3, "id", "ngClass", "alt", "src", "click", "error", "load"], [1, "floating-field", "pepperi-button", "icon-button", "weak", "invert", 3, "id", "ngClass", "click"], ["name", "system_menu"], [1, "campaign", "floating-field", 3, "id", "title", "ngClass"], [1, "has-active-campaign"], ["name", "system_bolt"], [1, "indicators-container", "floating-field", 3, "id", "ngClass"], [4, "ngFor", "ngForOf"], ["name", "indicator_dot_placeholder", "fill", "value", 1, "pull-left", "flip"], ["name", "indicator_dot_placeholder", 1, "pull-left", "flip"]], template: function PepperiImageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PepperiImageComponent_ng_container_1_Template, 8, 6, "ng-container", 1);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type !== "images");
    } }, directives: [i4.NgControlStatusGroup, i4.FormGroupDirective, i5.NgIf, i5.NgClass, i6.PepperiFieldTitleComponent, i7.FilesUploaderComponent, i8.MatIcon, i9.PepperiIconComponent, i5.NgForOf], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit;width:100%}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.img-wrapper[_ngcontent-%COMP%]{align-items:center;display:flex;height:100%;max-width:100%}.img-wrapper.left-alignment[_ngcontent-%COMP%]{justify-content:flex-start}.img-wrapper.center-alignment[_ngcontent-%COMP%]{justify-content:center}.img-wrapper.right-alignment[_ngcontent-%COMP%]{justify-content:flex-end}.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:contain;height:100%;max-width:100%;object-fit:contain}.pepperi-file-container[_ngcontent-%COMP%]{height:100%}.pepperi-file-container[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]{height:calc(100% - 1.5rem)}.pepperi-file-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer}.indicators-container[_ngcontent-%COMP%]{padding:0!important}.indicators-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:100%;padding:.4rem;width:100%}.indicators-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]{height:.75rem;margin:.05rem;width:.75rem}.floating-field[_ngcontent-%COMP%]{border-radius:var(--pep-border-radius-md,.25rem);cursor:pointer;height:2.5rem;padding:.5rem;position:absolute;width:2.5rem}.top[_ngcontent-%COMP%]{top:0}.bottom[_ngcontent-%COMP%]{bottom:0}.left[_ngcontent-%COMP%]{left:0}.right[_ngcontent-%COMP%]{right:0}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiImageComponent, [{
        type: Component,
        args: [{
                selector: 'pep-image',
                templateUrl: './image.component.html',
                styleUrls: ['./image.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.TranslateService }, { type: i2.DialogService }, { type: i3.CustomizationService }, { type: i3.FileService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
            type: Input
        }], srcLarge: [{
            type: Input
        }], src: [{
            type: Input
        }], options: [{
            type: Input
        }], label: [{
            type: Input
        }], type: [{
            type: Input
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input
        }], readonly: [{
            type: Input
        }], xAlignment: [{
            type: Input
        }], rowSpan: [{
            type: Input
        }], indicatorsField: [{
            type: Input
        }], menuField: [{
            type: Input
        }], hasCampaignField: [{
            type: Input
        }], form: [{
            type: Input
        }], objectId: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], isActive: [{
            type: Input
        }], sizeLimitMB: [{
            type: Input
        }], acceptImagesType: [{
            type: Input
        }], valueChanged: [{
            type: Output
        }], elementClicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9pbWFnZS9pbWFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUN0Qyx1QkFBdUIsRUFDN0MsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFlLFdBQVcsRUFBYyxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXJHLE9BQU8sRUFBRSwrQkFBK0IsRUFBNkIsTUFBTSwwQ0FBMEMsQ0FBQztBQUV0SCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNMaEIsNkJBQ0k7SUFBQSw4QkFDSTtJQUFBLHFDQUVrQjtJQUNsQix5Q0FLaUI7SUFGMkIscVBBQXFDLDhPQUFBO0lBRWpGLGlCQUFpQjtJQUNyQixpQkFBTTtJQUNWLDBCQUFlOzs7SUFYeUMsZUFBc0M7SUFBdEMsMEVBQXNDO0lBQ3JFLGVBQWU7SUFBZixvQ0FBZSw2QkFBQSw2QkFBQSxpQ0FBQSwrQkFBQTtJQUdoQixlQUFVO0lBQVYsK0JBQVUsbUJBQUEsaUNBQUEsaUNBQUEsc0NBQUEsdUJBQUEsNkJBQUEsNkJBQUEsaUNBQUEsMkJBQUEsbUNBQUEscUJBQUEsK0NBQUEsbUNBQUE7Ozs7O0lBU2xDLDZCQUNJO0lBQUEsOEJBRUk7SUFBQSw4QkFFSjtJQURvQixrT0FBZ0MsbU5BQUE7SUFEaEQsaUJBRUo7SUFBQSxpQkFBTTtJQUNWLDBCQUFlOzs7SUFKUCxlQUFxSjtJQUFySiw4SkFBcUo7SUFDckksZUFBZ0M7SUFBaEMsZ0RBQWdDO0lBQTNDLCtCQUFVLHFCQUFBLHFDQUFBOzs7OztJQUt2Qiw2QkFDSTtJ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QUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFJRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUVJLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxjQUFjO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcclxuICAgIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVTZXJ2aWNlLCBMQVlPVVRfVFlQRSwgU1RZTEVfVFlQRSwgQ3VzdG9taXphdGlvblNlcnZpY2UgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYic7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9kaWFsb2cnO1xyXG5pbXBvcnQgeyBQZXBwZXJpSW1hZ2VzRmlsbXN0cmlwQ29tcG9uZW50LCBJbWFnZXNGaWxtc3RyaXBEaWFsb2dEYXRhIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvaW1hZ2VzLWZpbG1zdHJpcCc7XHJcblxyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGVwLWltYWdlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9pbWFnZS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHVibGljIHN0YXRpYyBFTlRFUl9DSElMRFJFTiA9ICdbRW50ZXJDaGlsZHJlbl0nO1xyXG5cclxuICAgIEBJbnB1dCgpIGtleSA9ICcnO1xyXG4gICAgQElucHV0KCkgc3JjTGFyZ2UgPSAnJztcclxuICAgIEBJbnB1dCgpIHNyYyA9ICcnO1xyXG4gICAgQElucHV0KCkgb3B0aW9uczogYW55ID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgICBASW5wdXQoKSB0eXBlID0gJ2ltYWdlJztcclxuICAgIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHhBbGlnbm1lbnQgPSAnMCc7XHJcbiAgICBASW5wdXQoKSByb3dTcGFuID0gMTtcclxuICAgIEBJbnB1dCgpIGluZGljYXRvcnNGaWVsZDogYW55ID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIG1lbnVGaWVsZDogYW55ID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGhhc0NhbXBhaWduRmllbGQ6IGFueSA9IG51bGw7XHJcblxyXG4gICAgY29udHJvbFR5cGUgPSAnaW1hZ2UnO1xyXG5cclxuICAgIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cCA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBvYmplY3RJZCA9ICcnO1xyXG4gICAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGxheW91dFR5cGU6IExBWU9VVF9UWVBFID0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm07XHJcbiAgICBASW5wdXQoKSBpc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgc2l6ZUxpbWl0TUIgPSA1O1xyXG4gICAgQElucHV0KCkgYWNjZXB0SW1hZ2VzVHlwZSA9ICdibXAsanBnLGpwZWcscG5nLGdpZic7IC8vIFwiaW1hZ2UvYm1wLCBpbWFnZS9qcGcsIGltYWdlL2pwZWcsIGltYWdlL3BuZywgaW1hZ2UvdGlmLCBpbWFnZS90aWZmXCI7XHJcblxyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBlbGVtZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFO1xyXG4gICAgZmllbGRIZWlnaHQgPSAnJztcclxuICAgIHN0YW5kQWxvbmUgPSBmYWxzZTtcclxuICAgIGRhdGFVUkkgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGN1c3RvbWl6YXRpb25TZXJ2aWNlOiBDdXN0b21pemF0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGZpbGVTZXJ2aWNlOiBGaWxlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YW5kQWxvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmN1c3RvbWl6YXRpb25TZXJ2aWNlLmdldERlZmF1bHRGcm9tR3JvdXAodGhpcy5rZXksIHRoaXMuc3JjLCB0aGlzLnJlcXVpcmVkLCB0aGlzLnJlYWRvbmx5LCB0aGlzLmRpc2FibGVkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlNUQU5EX0FMT05FX0ZJRUxEX0NMQVNTX05BTUUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maWVsZEhlaWdodCA9IHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UuY2FsY3VsYXRlRmllbGRIZWlnaHQodGhpcy5sYXlvdXRUeXBlLCB0aGlzLnJvd1NwYW4sIHRoaXMuc3RhbmRBbG9uZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuc3JjPy5jdXJyZW50VmFsdWU/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gRW1wdHkgZGF0YVVSSSBpZiB0aGVyZSBpcyBjaGFuZ2UgaW4gdGhlIHNyYy5cclxuICAgICAgICAgICAgdGhpcy5kYXRhVVJJID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudENsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Q2xpY2tlZC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVycm9ySGFuZGxlcihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnNyYyA9IHRoaXMuZmlsZVNlcnZpY2UuZ2V0Tm9JbWFnZVBhdGgoKTtcclxuICAgICAgICBldmVudC50YXJnZXQudGl0bGUgPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdJTUFHRS5OT19JTUFHRScpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpdGxlKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICBldmVudC50YXJnZXQudGl0bGUgPSBldmVudC50YXJnZXQudGl0bGUubGVuZ3RoID09PSAwID8gdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnSU1BR0UuQ0xJQ0tfVE9fRU5MQVJHRScpIDogZXZlbnQudGFyZ2V0LnRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyQ2hpbGRyZW4oZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudENsaWNrZWQuZW1pdCh7IGFwaU5hbWU6IFBlcHBlcmlJbWFnZUNvbXBvbmVudC5FTlRFUl9DSElMRFJFTiwgZXZlbnRXaGljaDogZXZlbnQud2hpY2ggfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlQ2hhbmdlZCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhVVJJID0gdmFsdWUubGVuZ3RoID4gMCA/IEpTT04ucGFyc2UodmFsdWUpIDogbnVsbDtcclxuICAgICAgICB0aGlzLnNyYyA9IHRoaXMuc3JjTGFyZ2UgPSB0aGlzLnN0YW5kQWxvbmUgJiYgdGhpcy5kYXRhVVJJID8gdGhpcy5kYXRhVVJJLmZpbGVTdHIgOiAnJztcclxuXHJcbiAgICAgICAgdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS51cGRhdGVGb3JtRmllbGRWYWx1ZSh0aGlzLmZvcm0sIHRoaXMua2V5LCB0aGlzLmRhdGFVUkkgPyB0aGlzLmRhdGFVUkkuZmlsZUV4dCA6ICcnKTtcclxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KHsgYXBpTmFtZTogdGhpcy5rZXksIHZhbHVlLCBjb250cm9sVHlwZTogdGhpcy5jb250cm9sVHlwZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvYmplY3RJZElzTm90RW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm9iamVjdElkPy5sZW5ndGggPiAwICYmIHRoaXMub2JqZWN0SWQgIT09ICcwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlQ2xpY2tlZChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGhhc1BhcmVudEltYWdlID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5vYmplY3RJZElzTm90RW1wdHkoKSAmJiB0aGlzLnNyYyAmJiB0aGlzLnNyYy5pbmRleE9mKCduby1pbWFnZScpID4gLTEpIHtcclxuICAgICAgICAgICAgaGFzUGFyZW50SW1hZ2UgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub3BlbkltYWdlTW9kYWwoaGFzUGFyZW50SW1hZ2UpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudENsaWNrZWQuZW1pdCh7IGFwaU5hbWU6IHRoaXMua2V5LCBldmVudFdoaWNoOiBldmVudC53aGljaCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpdGVtSW1hZ2VDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGhhc1BhcmVudEltYWdlID0gdHJ1ZTtcclxuICAgICAgICBpZiAoKCQoZXZlbnQudGFyZ2V0KS5hdHRyKCdzcmMnKSAmJiAkKGV2ZW50LnRhcmdldCkuYXR0cignc3JjJykuaW5kZXhPZignbm8taW1hZ2UnKSA+IC0xKSB8fFxyXG4gICAgICAgICAgICAoJChldmVudC50YXJnZXQpLm5leHQoJ2ltZycpLmxlbmd0aCAmJiAkKGV2ZW50LnRhcmdldCkubmV4dCgnaW1nJykuYXR0cignc3JjJykuaW5kZXhPZignbm8taW1hZ2UnKSA+IC0xKSkge1xyXG4gICAgICAgICAgICBoYXNQYXJlbnRJbWFnZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vcGVuSW1hZ2VNb2RhbChoYXNQYXJlbnRJbWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkltYWdlTW9kYWwoaGFzUGFyZW50SW1hZ2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhVVJJKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVTdHJBcnIgPSB0aGlzLmRhdGFVUkkuZmlsZVN0ci5zcGxpdCgnOycpO1xyXG4gICAgICAgICAgICBpZiAoZmlsZVN0ckFyci5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpbiA9IHdpbmRvdy5vcGVuKCcnLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IGZpbGVTdHJBcnJbMF0uc3BsaXQoJzonKVsxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGZpbGVTdHJBcnJbMV0uc3BsaXQoJywnKVsxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSB0aGlzLmZpbGVTZXJ2aWNlLmNvbnZlcnRGcm9tYjY0dG9CbG9iKGJhc2U2NCwgY29udGVudFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgIHdpbi5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2hvdyBpbWFnZSBpbiBtb2RhbC5cclxuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW5EaWFsb2coXHJcbiAgICAgICAgICAgICAgICBQZXBwZXJpSW1hZ2VzRmlsbXN0cmlwQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJJbmRleDogMCxcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IHRoaXMua2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNyY0xhcmdlIHx8IHRoaXMuc3JjLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdElkOiB0aGlzLm9iamVjdElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dUaHVtYm5haWxzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgICA8IS0tIGltYWdlIE9SIGF0dGFjaG1lbnQgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSAhPT0gJ2ltYWdlcydcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8IS0tIE5ldyBjb2RlIC0tPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWZpbGUtY29udGFpbmVyIGltYWdlLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsgJ29uZS1yb3cnOiByb3dTcGFuID09IDF9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBlcC1maWVsZC10aXRsZSBbbGFiZWxdPVwibGFiZWxcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeEFsaWdubWVudF09XCJ4QWxpZ25tZW50XCIgW3Nob3dUaXRsZV09XCJzaG93VGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L3BlcC1maWVsZC10aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlsZXMtdXBsb2FkZXIgW2lkXT1cImtleVwiIFtrZXldPVwia2V5XCIgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiIFtzdGFuZEFsb25lXT1cInN0YW5kQWxvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cInNyY0xhcmdlIHx8IHNyY1wiIFtsYWJlbF09XCJsYWJlbFwiIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4QWxpZ25tZW50XT1cInhBbGlnbm1lbnRcIiBbcm93U3Bhbl09XCJyb3dTcGFuXCIgW2NvbnRyb2xUeXBlXT1cImNvbnRyb2xUeXBlXCIgW2Zvcm1dPVwiZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthY2NlcHRlZEV4dGVuc2lvbnNdPVwiYWNjZXB0SW1hZ2VzVHlwZVwiIChmaWxlQ2hhbmdlZCk9XCJvbkZpbGVDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZWxlbWVudENsaWNrZWQpPVwib25GaWxlQ2xpY2tlZCgkZXZlbnQpXCIgW3NpemVMaW1pdE1CXT1cInNpemVMaW1pdE1CXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWxlcy11cGxvYWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy13cmFwcGVyIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnbGVmdC1hbGlnbm1lbnQnOiB4QWxpZ25tZW50ID09ICcxJyB8fCB4QWxpZ25tZW50ID09ICcwJywgJ3JpZ2h0LWFsaWdubWVudCc6IHhBbGlnbm1lbnQgPT0gJzInLCAnY2VudGVyLWFsaWdubWVudCc6IHhBbGlnbm1lbnQgPT0gJzMnIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFtpZF09XCJrZXlcIiBbc3R5bGUubWF4LWhlaWdodF09XCJmaWVsZEhlaWdodFwiIGNsYXNzPVwicGVwcGVyaS1yZXBvcnQtZmlsZVwiIFthbHRdPVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cInNyY1wiIChjbGljayk9XCJpdGVtSW1hZ2VDbGljaygkZXZlbnQpXCIgKGVycm9yKT1cImVycm9ySGFuZGxlcigkZXZlbnQpXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5QZXBwZXJpVGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWctd3JhcHBlclwiIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQtYWxpZ25tZW50JzogeEFsaWdubWVudCA9PSAnMScgfHwgeEFsaWdubWVudCA9PSAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyaWdodC1hbGlnbm1lbnQnOiB4QWxpZ25tZW50ID09ICcyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NlbnRlci1hbGlnbm1lbnQnOiB4QWxpZ25tZW50ID09ICczJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFtpZF09XCJrZXlcIiBbc3R5bGUubWF4LWhlaWdodF09XCJmaWVsZEhlaWdodFwiIGNsYXNzPVwicGVwcGVyaS1yZXBvcnQtZmlsZSBwZXBwZXJpLXJlcG9ydC1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJbJ3RleHQtYWxpZ24tJyArIHhBbGlnbm1lbnRdXCIgW2FsdF09XCJsYWJlbFwiIFtzcmNdPVwic3JjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIml0ZW1JbWFnZUNsaWNrKCRldmVudClcIiAoZXJyb3IpPVwiZXJyb3JIYW5kbGVyKCRldmVudClcIiAobG9hZCk9XCJzZXRUaXRsZSgkZXZlbnQpXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPCEtLSBNZW51IC0tPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtZW51RmllbGRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBbaWRdPVwia2V5XCIgKGNsaWNrKT1cImVudGVyQ2hpbGRyZW4oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZsb2F0aW5nLWZpZWxkIHBlcHBlcmktYnV0dG9uIGljb24tYnV0dG9uIHdlYWsgaW52ZXJ0XCIgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogbWVudUZpZWxkPy5MYXlvdXQ/LllBbGlnbm1lbnQgPT0gJzInLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogbWVudUZpZWxkPy5MYXlvdXQ/LllBbGlnbm1lbnQgPT0gJzEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IG1lbnVGaWVsZD8uTGF5b3V0Py5YQWxpZ25tZW50ID09ICcxJyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogbWVudUZpZWxkPy5MYXlvdXQ/LlhBbGlnbm1lbnQgPT0gJzInXHJcbiAgICAgICAgICAgICAgICB9XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBlcC1pY29uIG5hbWU9XCJzeXN0ZW1fbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcGVwLWljb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8IS0tIENhbXBhaWduIC0tPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNDYW1wYWlnbkZpZWxkICYmIGhhc0NhbXBhaWduRmllbGQ/LkZvcm1hdHRlZFZhbHVlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIFtpZF09XCJrZXlcIiBjbGFzcz1cImNhbXBhaWduIGZsb2F0aW5nLWZpZWxkXCIgdGl0bGU9XCJ7eyBoYXNDYW1wYWlnbkZpZWxkPy5Gb3JtYXR0ZWRWYWx1ZSB9fVwiIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IGhhc0NhbXBhaWduRmllbGQ/LkxheW91dD8uWUFsaWdubWVudCA9PSAnMicsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBoYXNDYW1wYWlnbkZpZWxkPy5MYXlvdXQ/LllBbGlnbm1lbnQgPT0gJzEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGhhc0NhbXBhaWduRmllbGQ/LkxheW91dD8uWEFsaWdubWVudCA9PSAnMScsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGhhc0NhbXBhaWduRmllbGQ/LkxheW91dD8uWEFsaWdubWVudCA9PSAnMidcclxuICAgICAgICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImhhcy1hY3RpdmUtY2FtcGFpZ25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cInN5c3RlbV9ib2x0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPCEtLSBJbmRpY2F0b3JzIC0tPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbmRpY2F0b3JzRmllbGQgJiYgaW5kaWNhdG9yc0ZpZWxkPy5Gb3JtYXR0ZWRWYWx1ZSAhPSAnJ1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBbaWRdPVwia2V5XCIgY2xhc3M9XCJpbmRpY2F0b3JzLWNvbnRhaW5lciBmbG9hdGluZy1maWVsZFwiIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IGluZGljYXRvcnNGaWVsZD8uTGF5b3V0Py5ZQWxpZ25tZW50ID09ICcyJyxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IGluZGljYXRvcnNGaWVsZD8uTGF5b3V0Py5ZQWxpZ25tZW50ID09ICcxJyxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBpbmRpY2F0b3JzRmllbGQ/LkxheW91dD8uWEFsaWdubWVudCA9PSAnMScsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGluZGljYXRvcnNGaWVsZD8uTGF5b3V0Py5YQWxpZ25tZW50ID09ICcyJ1xyXG4gICAgICAgICAgICAgICAgfVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHZhbHVlIG9mIGluZGljYXRvcnNGaWVsZD8uRm9ybWF0dGVkVmFsdWU/LnNwbGl0KCc7JylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBlcC1pY29uIGNsYXNzPVwicHVsbC1sZWZ0IGZsaXBcIiBuYW1lPVwiaW5kaWNhdG9yX2RvdF9wbGFjZWhvbGRlclwiIGZpbGw9XCJ2YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbmRpY2F0b3JzRmllbGQ/LkZvcm1hdHRlZFZhbHVlPy5zcGxpdCgnOycpLmxlbmd0aCA8IDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBlcC1pY29uIGNsYXNzPVwicHVsbC1sZWZ0IGZsaXBcIiBuYW1lPVwiaW5kaWNhdG9yX2RvdF9wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPiJdfQ==