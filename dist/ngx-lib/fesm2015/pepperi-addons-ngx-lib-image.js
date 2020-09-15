import { ɵɵgetCurrentView, ɵɵelementContainerStart, ɵɵelementStart, ɵɵelement, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵelementContainerEnd, ɵɵadvance, ɵɵproperty, ɵɵpureFunction1, ɵɵpureFunction3, ɵɵstyleProp, ɵɵsanitizeUrl, ɵɵpureFunction4, ɵɵpropertyInterpolate, ɵɵtemplate, EventEmitter, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, NgForOf, CommonModule } from '@angular/common';
import { NgControlStatusGroup, FormGroupDirective, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LAYOUT_TYPE, CustomizationService, FileService, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconSystemMenu, pepperiIconSystemBolt, pepperiIconIndicatorDotPlaceholder, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { FilesUploaderComponent, PepperiFilesUploaderModule } from '@pepperi-addons/ngx-lib/files-uploader';
import { PepperiImagesFilmstripComponent } from '@pepperi-addons/ngx-lib/images-filmstrip';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@pepperi-addons/ngx-lib/dialog';

const _c0 = function (a0) { return { "one-row": a0 }; };
function PepperiImageComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵelement(2, "pep-field-title", 3);
    ɵɵelementStart(3, "files-uploader", 4);
    ɵɵlistener("fileChanged", function PepperiImageComponent_ng_container_1_ng_container_2_Template_files_uploader_fileChanged_3_listener($event) { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(2); return ctx_r7.onFileChanged($event); })("elementClicked", function PepperiImageComponent_ng_container_1_ng_container_2_Template_files_uploader_elementClicked_3_listener($event) { ɵɵrestoreView(_r8); const ctx_r9 = ɵɵnextContext(2); return ctx_r9.onFileClicked($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(20, _c0, ctx_r1.rowSpan == 1));
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r1.label)("required", ctx_r1.required)("disabled", ctx_r1.disabled)("xAlignment", ctx_r1.xAlignment)("showTitle", ctx_r1.showTitle);
    ɵɵadvance(1);
    ɵɵproperty("id", ctx_r1.key)("key", ctx_r1.key)("layoutType", ctx_r1.layoutType)("standAlone", ctx_r1.standAlone)("src", ctx_r1.srcLarge || ctx_r1.src)("label", ctx_r1.label)("required", ctx_r1.required)("disabled", ctx_r1.disabled)("xAlignment", ctx_r1.xAlignment)("rowSpan", ctx_r1.rowSpan)("controlType", ctx_r1.controlType)("form", ctx_r1.form)("acceptedExtensions", ctx_r1.acceptImagesType)("sizeLimitMB", ctx_r1.sizeLimitMB);
} }
const _c1 = function (a0, a1, a2) { return { "left-alignment": a0, "right-alignment": a1, "center-alignment": a2 }; };
function PepperiImageComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5);
    ɵɵelementStart(2, "img", 6);
    ɵɵlistener("click", function PepperiImageComponent_ng_container_1_ng_container_3_Template_img_click_2_listener($event) { ɵɵrestoreView(_r11); const ctx_r10 = ɵɵnextContext(2); return ctx_r10.itemImageClick($event); })("error", function PepperiImageComponent_ng_container_1_ng_container_3_Template_img_error_2_listener($event) { ɵɵrestoreView(_r11); const ctx_r12 = ɵɵnextContext(2); return ctx_r12.errorHandler($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction3(6, _c1, ctx_r2.xAlignment == "1" || ctx_r2.xAlignment == "0", ctx_r2.xAlignment == "2", ctx_r2.xAlignment == "3"));
    ɵɵadvance(1);
    ɵɵstyleProp("max-height", ctx_r2.fieldHeight);
    ɵɵproperty("id", ctx_r2.key)("alt", ctx_r2.label)("src", ctx_r2.src, ɵɵsanitizeUrl);
} }
const _c2 = function (a0) { return [a0]; };
function PepperiImageComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5);
    ɵɵelementStart(2, "img", 7);
    ɵɵlistener("click", function PepperiImageComponent_ng_container_1_ng_container_4_Template_img_click_2_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(2); return ctx_r13.itemImageClick($event); })("error", function PepperiImageComponent_ng_container_1_ng_container_4_Template_img_error_2_listener($event) { ɵɵrestoreView(_r14); const ctx_r15 = ɵɵnextContext(2); return ctx_r15.errorHandler($event); })("load", function PepperiImageComponent_ng_container_1_ng_container_4_Template_img_load_2_listener($event) { ɵɵrestoreView(_r14); const ctx_r16 = ɵɵnextContext(2); return ctx_r16.setTitle($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction3(7, _c1, ctx_r3.xAlignment == "1" || ctx_r3.xAlignment == "0", ctx_r3.xAlignment == "2", ctx_r3.xAlignment == "3"));
    ɵɵadvance(1);
    ɵɵstyleProp("max-height", ctx_r3.fieldHeight);
    ɵɵproperty("id", ctx_r3.key)("ngClass", ɵɵpureFunction1(11, _c2, "text-align-" + ctx_r3.xAlignment))("alt", ctx_r3.label)("src", ctx_r3.src, ɵɵsanitizeUrl);
} }
const _c3 = function (a0, a1, a2, a3) { return { bottom: a0, top: a1, left: a2, right: a3 }; };
function PepperiImageComponent_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 8);
    ɵɵlistener("click", function PepperiImageComponent_ng_container_1_ng_container_5_Template_button_click_1_listener($event) { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(2); return ctx_r17.enterChildren($event); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵelement(3, "pep-icon", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("id", ctx_r4.key)("ngClass", ɵɵpureFunction4(2, _c3, (ctx_r4.menuField == null ? null : ctx_r4.menuField.Layout == null ? null : ctx_r4.menuField.Layout.YAlignment) == "2", (ctx_r4.menuField == null ? null : ctx_r4.menuField.Layout == null ? null : ctx_r4.menuField.Layout.YAlignment) == "1", (ctx_r4.menuField == null ? null : ctx_r4.menuField.Layout == null ? null : ctx_r4.menuField.Layout.XAlignment) == "1", (ctx_r4.menuField == null ? null : ctx_r4.menuField.Layout == null ? null : ctx_r4.menuField.Layout.XAlignment) == "2"));
} }
function PepperiImageComponent_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 10);
    ɵɵelementStart(2, "mat-icon", 11);
    ɵɵelement(3, "pep-icon", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.FormattedValue);
    ɵɵproperty("id", ctx_r5.key)("ngClass", ɵɵpureFunction4(3, _c3, (ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.Layout == null ? null : ctx_r5.hasCampaignField.Layout.YAlignment) == "2", (ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.Layout == null ? null : ctx_r5.hasCampaignField.Layout.YAlignment) == "1", (ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.Layout == null ? null : ctx_r5.hasCampaignField.Layout.XAlignment) == "1", (ctx_r5.hasCampaignField == null ? null : ctx_r5.hasCampaignField.Layout == null ? null : ctx_r5.hasCampaignField.Layout.XAlignment) == "2"));
} }
function PepperiImageComponent_ng_container_1_ng_container_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "pep-icon", 15);
    ɵɵelementContainerEnd();
} }
function PepperiImageComponent_ng_container_1_ng_container_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "pep-icon", 16);
    ɵɵelementContainerEnd();
} }
function PepperiImageComponent_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 13);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtemplate(3, PepperiImageComponent_ng_container_1_ng_container_7_ng_container_3_Template, 2, 0, "ng-container", 14);
    ɵɵtemplate(4, PepperiImageComponent_ng_container_1_ng_container_7_ng_container_4_Template, 2, 0, "ng-container", 1);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("id", ctx_r6.key)("ngClass", ɵɵpureFunction4(4, _c3, (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.Layout == null ? null : ctx_r6.indicatorsField.Layout.YAlignment) == "2", (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.Layout == null ? null : ctx_r6.indicatorsField.Layout.YAlignment) == "1", (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.Layout == null ? null : ctx_r6.indicatorsField.Layout.XAlignment) == "1", (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.Layout == null ? null : ctx_r6.indicatorsField.Layout.XAlignment) == "2"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.FormattedValue == null ? null : ctx_r6.indicatorsField.FormattedValue.split(";"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r6.indicatorsField == null ? null : ctx_r6.indicatorsField.FormattedValue == null ? null : ctx_r6.indicatorsField.FormattedValue.split(";").length) < 4);
} }
function PepperiImageComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainerStart(1);
    ɵɵtemplate(2, PepperiImageComponent_ng_container_1_ng_container_2_Template, 4, 22, "ng-container", 1);
    ɵɵtemplate(3, PepperiImageComponent_ng_container_1_ng_container_3_Template, 3, 10, "ng-container", 1);
    ɵɵtemplate(4, PepperiImageComponent_ng_container_1_ng_container_4_Template, 3, 13, "ng-container", 1);
    ɵɵelementContainerEnd();
    ɵɵtemplate(5, PepperiImageComponent_ng_container_1_ng_container_5_Template, 4, 7, "ng-container", 1);
    ɵɵtemplate(6, PepperiImageComponent_ng_container_1_ng_container_6_Template, 4, 8, "ng-container", 1);
    ɵɵtemplate(7, PepperiImageComponent_ng_container_1_ng_container_7_Template, 5, 9, "ng-container", 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.layoutType === ctx_r0.LAYOUT_TYPE.PepperiForm);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.layoutType === ctx_r0.LAYOUT_TYPE.PepperiCard);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.layoutType === ctx_r0.LAYOUT_TYPE.PepperiTable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.menuField);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.hasCampaignField && (ctx_r0.hasCampaignField == null ? null : ctx_r0.hasCampaignField.FormattedValue));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.indicatorsField && (ctx_r0.indicatorsField == null ? null : ctx_r0.indicatorsField.FormattedValue) != "");
} }
class PepperiImageComponent {
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
PepperiImageComponent.ɵfac = function PepperiImageComponent_Factory(t) { return new (t || PepperiImageComponent)(ɵɵdirectiveInject(TranslateService), ɵɵdirectiveInject(DialogService), ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(FileService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
PepperiImageComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiImageComponent, selectors: [["pep-image"]], inputs: { key: "key", srcLarge: "srcLarge", src: "src", options: "options", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", indicatorsField: "indicatorsField", menuField: "menuField", hasCampaignField: "hasCampaignField", form: "form", objectId: "objectId", showTitle: "showTitle", layoutType: "layoutType", isActive: "isActive", sizeLimitMB: "sizeLimitMB", acceptImagesType: "acceptImagesType" }, outputs: { valueChanged: "valueChanged", elementClicked: "elementClicked" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "formGroup"], [4, "ngIf"], [1, "pepperi-file-container", "image-container", 3, "ngClass"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [3, "id", "key", "layoutType", "standAlone", "src", "label", "required", "disabled", "xAlignment", "rowSpan", "controlType", "form", "acceptedExtensions", "sizeLimitMB", "fileChanged", "elementClicked"], [1, "img-wrapper", 3, "ngClass"], [1, "pepperi-report-file", 3, "id", "alt", "src", "click", "error"], [1, "pepperi-report-file", "pepperi-report-img", 3, "id", "ngClass", "alt", "src", "click", "error", "load"], [1, "floating-field", "pepperi-button", "icon-button", "weak", "invert", 3, "id", "ngClass", "click"], ["name", "system_menu"], [1, "campaign", "floating-field", 3, "id", "title", "ngClass"], [1, "has-active-campaign"], ["name", "system_bolt"], [1, "indicators-container", "floating-field", 3, "id", "ngClass"], [4, "ngFor", "ngForOf"], ["name", "indicator_dot_placeholder", "fill", "value", 1, "pull-left", "flip"], ["name", "indicator_dot_placeholder", 1, "pull-left", "flip"]], template: function PepperiImageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PepperiImageComponent_ng_container_1_Template, 8, 6, "ng-container", 1);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.type !== "images");
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgIf, NgClass, PepperiFieldTitleComponent, FilesUploaderComponent, MatIcon, PepperiIconComponent, NgForOf], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit;width:100%}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.img-wrapper[_ngcontent-%COMP%]{align-items:center;display:flex;height:100%;max-width:100%}.img-wrapper.left-alignment[_ngcontent-%COMP%]{justify-content:flex-start}.img-wrapper.center-alignment[_ngcontent-%COMP%]{justify-content:center}.img-wrapper.right-alignment[_ngcontent-%COMP%]{justify-content:flex-end}.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:contain;height:100%;max-width:100%;object-fit:contain}.pepperi-file-container[_ngcontent-%COMP%]{height:100%}.pepperi-file-container[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]{height:calc(100% - 1.5rem)}.pepperi-file-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer}.indicators-container[_ngcontent-%COMP%]{padding:0!important}.indicators-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:100%;padding:.4rem;width:100%}.indicators-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]{height:.75rem;margin:.05rem;width:.75rem}.floating-field[_ngcontent-%COMP%]{border-radius:var(--pep-border-radius-md,.25rem);cursor:pointer;height:2.5rem;padding:.5rem;position:absolute;width:2.5rem}.top[_ngcontent-%COMP%]{top:0}.bottom[_ngcontent-%COMP%]{bottom:0}.left[_ngcontent-%COMP%]{left:0}.right[_ngcontent-%COMP%]{right:0}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiImageComponent, [{
        type: Component,
        args: [{
                selector: 'pep-image',
                templateUrl: './image.component.html',
                styleUrls: ['./image.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: TranslateService }, { type: DialogService }, { type: CustomizationService }, { type: FileService }, { type: Renderer2 }, { type: ElementRef }]; }, { key: [{
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

class PepperiImageModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemMenu,
            pepperiIconSystemBolt,
            pepperiIconIndicatorDotPlaceholder
        ]);
    }
}
PepperiImageModule.ɵmod = ɵɵdefineNgModule({ type: PepperiImageModule });
PepperiImageModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiImageModule_Factory(t) { return new (t || PepperiImageModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules,
            MatCommonModule,
            MatFormFieldModule,
            MatIconModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiFilesUploaderModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiImageModule, { declarations: [PepperiImageComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatFormFieldModule,
        MatIconModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiFilesUploaderModule], exports: [PepperiImageComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiImageModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules,
                    MatCommonModule,
                    MatFormFieldModule,
                    MatIconModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiFilesUploaderModule,
                ],
                exports: [PepperiImageComponent],
                declarations: [PepperiImageComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/image
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiImageComponent, PepperiImageModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-image.js.map
