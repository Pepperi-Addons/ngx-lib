import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵproperty, ɵɵelementContainer, ɵɵtext, ɵɵpropertyInterpolate, ɵɵsanitizeUrl, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵelementContainerStart, ɵɵelement, ɵɵelementContainerEnd, ɵɵpureFunction2, EventEmitter, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, NgTemplateOutlet, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LAYOUT_TYPE, CustomizationService, FileService, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { FilesUploaderComponent, PepperiFilesUploaderModule } from '@pepperi-addons/ngx-lib/files-uploader';

function PepperiAttachmentComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "files-uploader", 3);
    ɵɵlistener("fileChanged", function PepperiAttachmentComponent_ng_template_0_Template_files_uploader_fileChanged_0_listener($event) { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.onFileChanged($event); })("elementClicked", function PepperiAttachmentComponent_ng_template_0_Template_files_uploader_elementClicked_0_listener($event) { ɵɵrestoreView(_r8); const ctx_r9 = ɵɵnextContext(); return ctx_r9.onFileClicked($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("key", ctx_r1.key)("src", ctx_r1.src)("label", ctx_r1.label)("required", ctx_r1.required)("disabled", ctx_r1.disabled)("xAlignment", ctx_r1.xAlignment)("rowSpan", ctx_r1.rowSpan)("controlType", ctx_r1.controlType)("form", ctx_r1.form)("layoutType", ctx_r1.layoutType)("standAlone", ctx_r1.standAlone)("acceptedExtensions", ctx_r1.acceptAttachmentType);
} }
function PepperiAttachmentComponent_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_template_2_ng_template_1_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r15.src);
    ɵɵpropertyInterpolate("href", ctx_r15.src, ɵɵsanitizeUrl);
    ɵɵproperty("id", ctx_r15.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r15.src);
} }
function PepperiAttachmentComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, PepperiAttachmentComponent_ng_template_2_ng_template_1_a_1_Template, 2, 4, "a", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r12.src != null);
} }
function PepperiAttachmentComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "\u00A0");
    ɵɵelementEnd();
} }
function PepperiAttachmentComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiAttachmentComponent_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(1, PepperiAttachmentComponent_ng_template_2_ng_template_1_Template, 2, 1, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, PepperiAttachmentComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r11 = ɵɵreference(2);
    const _r13 = ɵɵreference(4);
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngIf", (ctx_r3.src == null ? null : ctx_r3.src.length) > 0)("ngIfThen", _r11)("ngIfElse", _r13);
} }
function PepperiAttachmentComponent_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1) { return { "one-row": a0, "stand-alone": a1 }; };
function PepperiAttachmentComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 10);
    ɵɵelement(2, "pep-field-title", 11);
    ɵɵtemplate(3, PepperiAttachmentComponent_ng_container_4_ng_container_3_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const _r0 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction2(7, _c0, ctx_r4.rowSpan == 1, ctx_r4.standAlone));
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r4.label)("required", ctx_r4.required)("disabled", ctx_r4.disabled)("xAlignment", ctx_r4.xAlignment)("showTitle", ctx_r4.showTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiAttachmentComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_container_5_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, PepperiAttachmentComponent_ng_container_5_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(2);
    const _r0 = ɵɵreference(1);
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c0, ctx_r19.rowSpan == 1, ctx_r19.standAlone));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiAttachmentComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiAttachmentComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 12);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", _r2);
} }
function PepperiAttachmentComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiAttachmentComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(2, PepperiAttachmentComponent_ng_container_5_ng_template_2_Template, 2, 5, "ng-template", null, 13, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiAttachmentComponent_ng_container_5_ng_template_4_Template, 1, 1, "ng-template", null, 14, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r18 = ɵɵreference(3);
    const _r20 = ɵɵreference(5);
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", false && ctx_r5.isActive && !ctx_r5.disabled)("ngIfThen", _r18)("ngIfElse", _r20);
} }
function PepperiAttachmentComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_container_6_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, PepperiAttachmentComponent_ng_container_6_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r0 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiAttachmentComponent_ng_container_6_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_container_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiAttachmentComponent_ng_container_6_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 12);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", _r2);
} }
function PepperiAttachmentComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiAttachmentComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(2, PepperiAttachmentComponent_ng_container_6_ng_template_2_Template, 2, 1, "ng-template", null, 13, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiAttachmentComponent_ng_container_6_ng_template_4_Template, 1, 1, "ng-template", null, 14, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r25 = ɵɵreference(3);
    const _r27 = ɵɵreference(5);
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", false && ctx_r6.isActive && !ctx_r6.disabled)("ngIfThen", _r25)("ngIfElse", _r27);
} }
class PepperiAttachmentComponent {
    constructor(customizationService, renderer, element, fileService) {
        this.customizationService = customizationService;
        this.renderer = renderer;
        this.element = element;
        this.fileService = fileService;
        this.key = '';
        this.src = '';
        this.label = '';
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.controlType = 'attachment';
        this.form = null;
        this.showTitle = true;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.isActive = false;
        this.valueChanged = new EventEmitter();
        this.elementClicked = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.fieldHeight = '';
        this.standAlone = false;
        this.dataURI = null;
        this.acceptAttachmentType = 'application/pdf,application/json,text/csv,text/csv-schema,application/msword,application/vnd.ms-excel,text/plain,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/bmp,image/jpg, image/jpeg, image/png, image/tif, image/tiff, txt, json';
    }
    ngOnDestroy() {
        if (this.elementClicked) {
            this.elementClicked.unsubscribe();
        }
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
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
        if (changes.src && changes.src.currentValue.length > 0) {
            // Empty dataURI if there is change in the src.
            this.dataURI = null;
        }
    }
    onFileChanged(value) {
        this.dataURI = value.length > 0 ? JSON.parse(value) : null;
        this.src = this.dataURI ? this.dataURI.fileStr : '';
        this.customizationService.updateFormFieldValue(this.form, this.key, this.dataURI ? this.dataURI.fileExt : '');
        this.valueChanged.emit({ apiName: this.key, value, controlType: this.controlType });
    }
    onFileClicked(event) {
        if (this.dataURI != null) {
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
            if (this.fileService.isValidUrl(this.src)) {
                const win = window.open('', '_blank');
                win.location.href = this.src;
            }
        }
        this.elementClicked.emit({ apiName: this.key, eventWhich: event.which });
    }
}
PepperiAttachmentComponent.ɵfac = function PepperiAttachmentComponent_Factory(t) { return new (t || PepperiAttachmentComponent)(ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FileService)); };
PepperiAttachmentComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiAttachmentComponent, selectors: [["pep-attachment"]], inputs: { key: "key", src: "src", label: "label", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", form: "form", showTitle: "showTitle", layoutType: "layoutType", isActive: "isActive" }, outputs: { valueChanged: "valueChanged", elementClicked: "elementClicked" }, features: [ɵɵNgOnChangesFeature], decls: 7, vars: 3, consts: [["pepperiTemplate", ""], ["pepperiReadonlyTemplate", ""], [4, "ngIf"], [3, "key", "src", "label", "required", "disabled", "xAlignment", "rowSpan", "controlType", "form", "layoutType", "standAlone", "acceptedExtensions", "fileChanged", "elementClicked"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["notEmptyBlock", ""], ["emptyBlock", ""], [1, "pepperi-file-container"], ["class", "color-link body-sm pepperi-card-input ", "target", "_blank", 3, "id", "title", "href", 4, "ngIf"], ["target", "_blank", 1, "color-link", "body-sm", "pepperi-card-input", 3, "id", "title", "href"], [1, "pepperi-file-container", 3, "ngClass"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [4, "ngTemplateOutlet"], ["selectedBlock", ""], ["notSelectedBlock", ""], [1, "pepperi-file-container", "one-row"]], template: function PepperiAttachmentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PepperiAttachmentComponent_ng_template_0_Template, 1, 12, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, PepperiAttachmentComponent_ng_template_2_Template, 5, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(4, PepperiAttachmentComponent_ng_container_4_Template, 4, 10, "ng-container", 2);
        ɵɵtemplate(5, PepperiAttachmentComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        ɵɵtemplate(6, PepperiAttachmentComponent_ng_container_6_Template, 6, 3, "ng-container", 2);
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
    } }, directives: [NgIf, FilesUploaderComponent, NgClass, PepperiFieldTitleComponent, NgTemplateOutlet], styles: ["[_nghost-%COMP%]{display:block}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiAttachmentComponent, [{
        type: Component,
        args: [{
                selector: 'pep-attachment',
                templateUrl: './attachment.component.html',
                styleUrls: ['./attachment.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: CustomizationService }, { type: Renderer2 }, { type: ElementRef }, { type: FileService }]; }, { key: [{
            type: Input
        }], src: [{
            type: Input
        }], label: [{
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
        }], form: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], isActive: [{
            type: Input
        }], valueChanged: [{
            type: Output
        }], elementClicked: [{
            type: Output
        }] }); })();

class PepperiAttachmentModule {
}
PepperiAttachmentModule.ɵmod = ɵɵdefineNgModule({ type: PepperiAttachmentModule });
PepperiAttachmentModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiAttachmentModule_Factory(t) { return new (t || PepperiAttachmentModule)(); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatFormFieldModule,
            // Pepperi modules
            PepperiModule,
            PepperiFieldTitleModule,
            PepperiFilesUploaderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiAttachmentModule, { declarations: [PepperiAttachmentComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatFormFieldModule,
        // Pepperi modules
        PepperiModule,
        PepperiFieldTitleModule,
        PepperiFilesUploaderModule], exports: [PepperiAttachmentComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiAttachmentModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules
                    MatCommonModule,
                    MatFormFieldModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiFieldTitleModule,
                    PepperiFilesUploaderModule
                ],
                exports: [PepperiAttachmentComponent],
                declarations: [PepperiAttachmentComponent],
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-lib/attachment
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiAttachmentComponent, PepperiAttachmentModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-attachment.js.map
