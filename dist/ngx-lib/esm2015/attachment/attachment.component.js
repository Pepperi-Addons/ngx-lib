import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CustomizationService, LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib";
import * as i2 from "@angular/common";
import * as i3 from "@pepperi-addons/ngx-lib/files-uploader";
import * as i4 from "@pepperi-addons/ngx-lib/field-title";
function PepperiAttachmentComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "files-uploader", 3);
    i0.ɵɵlistener("fileChanged", function PepperiAttachmentComponent_ng_template_0_Template_files_uploader_fileChanged_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onFileChanged($event); })("elementClicked", function PepperiAttachmentComponent_ng_template_0_Template_files_uploader_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onFileClicked($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("key", ctx_r1.key)("src", ctx_r1.src)("label", ctx_r1.label)("required", ctx_r1.required)("disabled", ctx_r1.disabled)("xAlignment", ctx_r1.xAlignment)("rowSpan", ctx_r1.rowSpan)("controlType", ctx_r1.controlType)("form", ctx_r1.form)("layoutType", ctx_r1.layoutType)("standAlone", ctx_r1.standAlone)("acceptedExtensions", ctx_r1.acceptAttachmentType);
} }
function PepperiAttachmentComponent_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_template_2_ng_template_1_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r15.src);
    i0.ɵɵpropertyInterpolate("href", ctx_r15.src, i0.ɵɵsanitizeUrl);
    i0.ɵɵproperty("id", ctx_r15.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r15.src);
} }
function PepperiAttachmentComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, PepperiAttachmentComponent_ng_template_2_ng_template_1_a_1_Template, 2, 4, "a", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.src != null);
} }
function PepperiAttachmentComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} }
function PepperiAttachmentComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiAttachmentComponent_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(1, PepperiAttachmentComponent_ng_template_2_ng_template_1_Template, 2, 1, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, PepperiAttachmentComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r11 = i0.ɵɵreference(2);
    const _r13 = i0.ɵɵreference(4);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", (ctx_r3.src == null ? null : ctx_r3.src.length) > 0)("ngIfThen", _r11)("ngIfElse", _r13);
} }
function PepperiAttachmentComponent_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1) { return { "one-row": a0, "stand-alone": a1 }; };
function PepperiAttachmentComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelement(2, "pep-field-title", 11);
    i0.ɵɵtemplate(3, PepperiAttachmentComponent_ng_container_4_ng_container_3_Template, 1, 0, "ng-container", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c0, ctx_r4.rowSpan == 1, ctx_r4.standAlone));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r4.label)("required", ctx_r4.required)("disabled", ctx_r4.disabled)("xAlignment", ctx_r4.xAlignment)("showTitle", ctx_r4.showTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiAttachmentComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_container_5_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, PepperiAttachmentComponent_ng_container_5_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0, ctx_r19.rowSpan == 1, ctx_r19.standAlone));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiAttachmentComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_container_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiAttachmentComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 12);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function PepperiAttachmentComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiAttachmentComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(2, PepperiAttachmentComponent_ng_container_5_ng_template_2_Template, 2, 5, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiAttachmentComponent_ng_container_5_ng_template_4_Template, 1, 1, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r18 = i0.ɵɵreference(3);
    const _r20 = i0.ɵɵreference(5);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", false && ctx_r5.isActive && !ctx_r5.disabled)("ngIfThen", _r18)("ngIfElse", _r20);
} }
function PepperiAttachmentComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_container_6_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, PepperiAttachmentComponent_ng_container_6_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function PepperiAttachmentComponent_ng_container_6_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiAttachmentComponent_ng_container_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiAttachmentComponent_ng_container_6_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 12);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function PepperiAttachmentComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiAttachmentComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵtemplate(2, PepperiAttachmentComponent_ng_container_6_ng_template_2_Template, 2, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiAttachmentComponent_ng_container_6_ng_template_4_Template, 1, 1, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r25 = i0.ɵɵreference(3);
    const _r27 = i0.ɵɵreference(5);
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", false && ctx_r6.isActive && !ctx_r6.disabled)("ngIfThen", _r25)("ngIfElse", _r27);
} }
export class PepperiAttachmentComponent {
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
PepperiAttachmentComponent.ɵfac = function PepperiAttachmentComponent_Factory(t) { return new (t || PepperiAttachmentComponent)(i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FileService)); };
PepperiAttachmentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiAttachmentComponent, selectors: [["pep-attachment"]], inputs: { key: "key", src: "src", label: "label", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", form: "form", showTitle: "showTitle", layoutType: "layoutType", isActive: "isActive" }, outputs: { valueChanged: "valueChanged", elementClicked: "elementClicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 3, consts: [["pepperiTemplate", ""], ["pepperiReadonlyTemplate", ""], [4, "ngIf"], [3, "key", "src", "label", "required", "disabled", "xAlignment", "rowSpan", "controlType", "form", "layoutType", "standAlone", "acceptedExtensions", "fileChanged", "elementClicked"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["notEmptyBlock", ""], ["emptyBlock", ""], [1, "pepperi-file-container"], ["class", "color-link body-sm pepperi-card-input ", "target", "_blank", 3, "id", "title", "href", 4, "ngIf"], ["target", "_blank", 1, "color-link", "body-sm", "pepperi-card-input", 3, "id", "title", "href"], [1, "pepperi-file-container", 3, "ngClass"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [4, "ngTemplateOutlet"], ["selectedBlock", ""], ["notSelectedBlock", ""], [1, "pepperi-file-container", "one-row"]], template: function PepperiAttachmentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PepperiAttachmentComponent_ng_template_0_Template, 1, 12, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, PepperiAttachmentComponent_ng_template_2_Template, 5, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, PepperiAttachmentComponent_ng_container_4_Template, 4, 10, "ng-container", 2);
        i0.ɵɵtemplate(5, PepperiAttachmentComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
        i0.ɵɵtemplate(6, PepperiAttachmentComponent_ng_container_6_Template, 6, 3, "ng-container", 2);
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
    } }, directives: [i2.NgIf, i3.FilesUploaderComponent, i2.NgClass, i4.PepperiFieldTitleComponent, i2.NgTemplateOutlet], styles: ["[_nghost-%COMP%]{display:block}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiAttachmentComponent, [{
        type: Component,
        args: [{
                selector: 'pep-attachment',
                templateUrl: './attachment.component.html',
                styleUrls: ['./attachment.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.CustomizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.FileService }]; }, { key: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNobWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2F0dGFjaG1lbnQvYXR0YWNobWVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2F0dGFjaG1lbnQvYXR0YWNobWVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFFckosT0FBTyxFQUFlLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7OztJQ0FyRix5Q0FJaUI7SUFGdUMseU9BQXFDLGtPQUFBO0lBRTdGLGlCQUFpQjs7O0lBSkQsZ0NBQVcsbUJBQUEsdUJBQUEsNkJBQUEsNkJBQUEsaUNBQUEsMkJBQUEsbUNBQUEscUJBQUEsaUNBQUEsaUNBQUEsbURBQUE7OztJQVEzQix3QkFBMEY7OztJQUdsRiw0QkFDcUM7SUFBQSxZQUFTO0lBQUEsaUJBQUk7OztJQUQrQiw4Q0FBaUI7SUFDOUUsK0RBQWdCO0lBRGpDLGdDQUFVO0lBQ3dCLGVBQVM7SUFBVCxpQ0FBUzs7O0lBRmxELDhCQUNJO0lBQUEsbUdBQ3FDO0lBQ3pDLGlCQUFNOzs7SUFGMkQsZUFBbUI7SUFBbkIsMENBQW1COzs7SUFLcEYsNEJBQU07SUFBQSxzQkFBTTtJQUFBLGlCQUFPOzs7SUFSdkIsMkdBQTJFO0lBQzNFLDBJQUNJO0lBS0osMElBQ0k7Ozs7O0lBUlUsMEVBQTRELGtCQUFBLGtCQUFBOzs7SUFpQnRFLHdCQUFpRTs7OztJQUx6RSw2QkFDSTtJQUFBLCtCQUNJO0lBQUEsc0NBRWtCO0lBQ2xCLDZHQUFrRDtJQUN0RCxpQkFBTTtJQUNWLDBCQUFlOzs7O0lBTnlCLGVBQWtFO0lBQWxFLDRGQUFrRTtJ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SyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7b0dBeEZRLDBCQUEwQjsrREFBMUIsMEJBQTBCO1FDVHZDLDZIQUNJO1FBT0osNEhBQ0k7UUFZSiw4RkFDSTtRQVFKLDZGQUNJO1FBWUosNkZBQ0k7O1FBdkJVLGVBQThDO1FBQTlDLHFFQUE4QztRQVM5QyxlQUE4QztRQUE5QyxxRUFBOEM7UUFhOUMsZUFBK0M7UUFBL0Msc0VBQStDOztrRERsQ2hELDBCQUEwQjtjQU50QyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEO2tKQUVZLEdBQUc7a0JBQVgsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFJRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFFSSxZQUFZO2tCQUFyQixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRmlsZVNlcnZpY2UsIEN1c3RvbWl6YXRpb25TZXJ2aWNlLCBMQVlPVVRfVFlQRSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwZXAtYXR0YWNobWVudCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXR0YWNobWVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hdHRhY2htZW50LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlBdHRhY2htZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBASW5wdXQoKSBrZXkgPSAnJztcclxuICAgIEBJbnB1dCgpIHNyYyA9ICcnO1xyXG4gICAgQElucHV0KCkgbGFiZWwgPSAnJztcclxuICAgIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHhBbGlnbm1lbnQgPSAnMCc7XHJcbiAgICBASW5wdXQoKSByb3dTcGFuID0gMTtcclxuXHJcbiAgICBjb250cm9sVHlwZSA9ICdhdHRhY2htZW50JztcclxuXHJcbiAgICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXAgPSBudWxsO1xyXG4gICAgQElucHV0KCkgc2hvd1RpdGxlID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGxheW91dFR5cGU6IExBWU9VVF9UWVBFID0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm07XHJcbiAgICBASW5wdXQoKSBpc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgZWxlbWVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRTtcclxuICAgIGZpZWxkSGVpZ2h0ID0gJyc7XHJcbiAgICBzdGFuZEFsb25lID0gZmFsc2U7XHJcbiAgICBkYXRhVVJJID0gbnVsbDtcclxuXHJcbiAgICBhY2NlcHRBdHRhY2htZW50VHlwZSA9XHJcbiAgICAgICAgJ2FwcGxpY2F0aW9uL3BkZixhcHBsaWNhdGlvbi9qc29uLHRleHQvY3N2LHRleHQvY3N2LXNjaGVtYSxhcHBsaWNhdGlvbi9tc3dvcmQsYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLHRleHQvcGxhaW4sYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQsYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQsaW1hZ2UvYm1wLGltYWdlL2pwZywgaW1hZ2UvanBlZywgaW1hZ2UvcG5nLCBpbWFnZS90aWYsIGltYWdlL3RpZmYsIHR4dCwganNvbic7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjdXN0b21pemF0aW9uU2VydmljZTogQ3VzdG9taXphdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgZmlsZVNlcnZpY2U6IEZpbGVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Q2xpY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRDbGlja2VkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52YWx1ZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YW5kQWxvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmN1c3RvbWl6YXRpb25TZXJ2aWNlLmdldERlZmF1bHRGcm9tR3JvdXAodGhpcy5rZXksIHRoaXMuc3JjLCB0aGlzLnJlcXVpcmVkLCB0aGlzLnJlYWRvbmx5LCB0aGlzLmRpc2FibGVkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIEN1c3RvbWl6YXRpb25TZXJ2aWNlLlNUQU5EX0FMT05FX0ZJRUxEX0NMQVNTX05BTUUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maWVsZEhlaWdodCA9IHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UuY2FsY3VsYXRlRmllbGRIZWlnaHQodGhpcy5sYXlvdXRUeXBlLCB0aGlzLnJvd1NwYW4sIHRoaXMuc3RhbmRBbG9uZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuc3JjICYmIGNoYW5nZXMuc3JjLmN1cnJlbnRWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIEVtcHR5IGRhdGFVUkkgaWYgdGhlcmUgaXMgY2hhbmdlIGluIHRoZSBzcmMuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVVSSSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZUNoYW5nZWQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YVVSSSA9IHZhbHVlLmxlbmd0aCA+IDAgPyBKU09OLnBhcnNlKHZhbHVlKSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5zcmMgPSB0aGlzLmRhdGFVUkkgPyB0aGlzLmRhdGFVUkkuZmlsZVN0ciA6ICcnO1xyXG4gICAgICAgIHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UudXBkYXRlRm9ybUZpZWxkVmFsdWUodGhpcy5mb3JtLCB0aGlzLmtleSwgdGhpcy5kYXRhVVJJID8gdGhpcy5kYXRhVVJJLmZpbGVFeHQgOiAnJyk7XHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh7IGFwaU5hbWU6IHRoaXMua2V5LCB2YWx1ZSwgY29udHJvbFR5cGU6IHRoaXMuY29udHJvbFR5cGUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlQ2xpY2tlZChldmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFVUkkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlU3RyQXJyID0gdGhpcy5kYXRhVVJJLmZpbGVTdHIuc3BsaXQoJzsnKTtcclxuICAgICAgICAgICAgaWYgKGZpbGVTdHJBcnIubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aW4gPSB3aW5kb3cub3BlbignJywgJ19ibGFuaycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSBmaWxlU3RyQXJyWzBdLnNwbGl0KCc6JylbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlNjQgPSBmaWxlU3RyQXJyWzFdLnNwbGl0KCcsJylbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gdGhpcy5maWxlU2VydmljZS5jb252ZXJ0RnJvbWI2NHRvQmxvYihiYXNlNjQsIGNvbnRlbnRUeXBlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgICAgICB3aW4ubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVTZXJ2aWNlLmlzVmFsaWRVcmwodGhpcy5zcmMpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aW4gPSB3aW5kb3cub3BlbignJywgJ19ibGFuaycpO1xyXG4gICAgICAgICAgICAgICAgd2luLmxvY2F0aW9uLmhyZWYgPSB0aGlzLnNyYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50Q2xpY2tlZC5lbWl0KHsgYXBpTmFtZTogdGhpcy5rZXksIGV2ZW50V2hpY2g6IGV2ZW50LndoaWNoIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIjwhLS0gTmV3IGNvZGUgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjcGVwcGVyaVRlbXBsYXRlPlxyXG4gICAgPGZpbGVzLXVwbG9hZGVyIFtrZXldPVwia2V5XCIgW3NyY109XCJzcmNcIiBbbGFiZWxdPVwibGFiZWxcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFt4QWxpZ25tZW50XT1cInhBbGlnbm1lbnRcIiBbcm93U3Bhbl09XCJyb3dTcGFuXCIgW2NvbnRyb2xUeXBlXT1cImNvbnRyb2xUeXBlXCIgW2Zvcm1dPVwiZm9ybVwiXHJcbiAgICAgICAgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiIFtzdGFuZEFsb25lXT1cInN0YW5kQWxvbmVcIiAoZmlsZUNoYW5nZWQpPVwib25GaWxlQ2hhbmdlZCgkZXZlbnQpXCJcclxuICAgICAgICAoZWxlbWVudENsaWNrZWQpPVwib25GaWxlQ2xpY2tlZCgkZXZlbnQpXCIgW2FjY2VwdGVkRXh0ZW5zaW9uc109XCJhY2NlcHRBdHRhY2htZW50VHlwZVwiPlxyXG4gICAgPC9maWxlcy11cGxvYWRlcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjcGVwcGVyaVJlYWRvbmx5VGVtcGxhdGU+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3JjPy5sZW5ndGggPiAwOyB0aGVuIG5vdEVtcHR5QmxvY2s7IGVsc2UgZW1wdHlCbG9ja1wiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLXRlbXBsYXRlICNub3RFbXB0eUJsb2NrPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWZpbGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxhIFtpZF09XCJrZXlcIiBjbGFzcz1cImNvbG9yLWxpbmsgYm9keS1zbSBwZXBwZXJpLWNhcmQtaW5wdXQgXCIgKm5nSWY9XCJzcmMgIT0gbnVsbFwiIHRpdGxlPVwie3sgc3JjIH19XCJcclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJ7eyBzcmMgfX1cIj57eyBzcmMgfX08L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlICNlbXB0eUJsb2NrPlxyXG4gICAgICAgIDxzcGFuPiZuYnNwOzwvc3Bhbj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWZpbGUtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwieyAnb25lLXJvdyc6IHJvd1NwYW4gPT0gMSwgJ3N0YW5kLWFsb25lJzogc3RhbmRBbG9uZSB9XCI+XHJcbiAgICAgICAgPHBlcC1maWVsZC10aXRsZSBbbGFiZWxdPVwibGFiZWxcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbeEFsaWdubWVudF09XCJ4QWxpZ25tZW50XCJcclxuICAgICAgICAgICAgW3Nob3dUaXRsZV09XCJzaG93VGl0bGVcIj5cclxuICAgICAgICA8L3BlcC1maWVsZC10aXRsZT5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicGVwcGVyaVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUNhcmRcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmYWxzZSAmJiBpc0FjdGl2ZSAmJiAhZGlzYWJsZWQ7IHRoZW4gc2VsZWN0ZWRCbG9jazsgZWxzZSBub3RTZWxlY3RlZEJsb2NrXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctdGVtcGxhdGUgI3NlbGVjdGVkQmxvY2s+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBlcHBlcmktZmlsZS1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7ICdvbmUtcm93Jzogcm93U3BhbiA9PSAxLCAnc3RhbmQtYWxvbmUnOiBzdGFuZEFsb25lfVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicGVwcGVyaVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlICNub3RTZWxlY3RlZEJsb2NrPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpUmVhZG9ubHlUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlUYWJsZVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZhbHNlICYmIGlzQWN0aXZlICYmICFkaXNhYmxlZDsgdGhlbiBzZWxlY3RlZEJsb2NrOyBlbHNlIG5vdFNlbGVjdGVkQmxvY2tcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjc2VsZWN0ZWRCbG9jaz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGVwcGVyaS1maWxlLWNvbnRhaW5lciBvbmUtcm93XCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8bmctdGVtcGxhdGUgI25vdFNlbGVjdGVkQmxvY2s+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlSZWFkb25seVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19