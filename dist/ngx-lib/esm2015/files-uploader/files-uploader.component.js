import { Component, Injectable, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';
import { DialogData, DialogDataType } from '@pepperi-addons/ngx-lib/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@pepperi-addons/ngx-lib/dialog";
import * as i3 from "@pepperi-addons/ngx-lib";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/forms";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
import * as i10 from "@pepperi-addons/ngx-lib/icon";
import * as i11 from "ng2-file-upload";
const _c0 = ["fileInput"];
const _c1 = ["imagePreview"];
function FilesUploaderComponent_ng_template_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0) { return { "right-alignment": a0 }; };
function FilesUploaderComponent_ng_template_0_ng_template_4_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function FilesUploaderComponent_ng_template_0_ng_template_4_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.deleteFile(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c2, ctx_r10.xAlignment == "2"));
} }
const _c3 = function (a0) { return [a0]; };
function FilesUploaderComponent_ng_template_0_ng_template_4_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 16, 17);
    i0.ɵɵlistener("error", function FilesUploaderComponent_ng_template_0_ng_template_4_img_2_Template_img_error_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(3); return ctx_r16.errorHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("max-height", ctx_r11.fieldHeight);
    i0.ɵɵproperty("src", ctx_r11.src, i0.ɵɵsanitizeUrl)("alt", ctx_r11.label)("ngClass", i0.ɵɵpureFunction1(5, _c3, "text-align-" + ctx_r11.xAlignment));
} }
function FilesUploaderComponent_ng_template_0_ng_template_4_div_3_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 20);
    i0.ɵɵelement(1, "pep-icon", 21);
    i0.ɵɵelementStart(2, "span", 22);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 1, "FILE.SEE_ORIGINAL"));
} }
function FilesUploaderComponent_ng_template_0_ng_template_4_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, FilesUploaderComponent_ng_template_0_ng_template_4_div_3_a_1_Template, 5, 3, "a", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.src != "");
} }
function FilesUploaderComponent_ng_template_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, FilesUploaderComponent_ng_template_0_ng_template_4_button_0_Template, 3, 3, "button", 10);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵlistener("click", function FilesUploaderComponent_ng_template_0_ng_template_4_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.onElementClicked($event); });
    i0.ɵɵtemplate(2, FilesUploaderComponent_ng_template_0_ng_template_4_img_2_Template, 2, 7, "img", 12);
    i0.ɵɵtemplate(3, FilesUploaderComponent_ng_template_0_ng_template_4_div_3_Template, 2, 1, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r7.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r7.controlType === "image");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.controlType === "attachment");
} }
function FilesUploaderComponent_ng_template_0_ng_template_6_pep_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-icon", 21);
} }
function FilesUploaderComponent_ng_template_0_ng_template_6_pep_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-icon", 26);
} }
function FilesUploaderComponent_ng_template_0_ng_template_6_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 22);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r23.disabled ? ctx_r23.controlType === "image" ? "MESSAGES.INFO_MISSING_IMAGE" : "MESSAGES.INFO_MISSING_FILE" : "FILE.HINT"), " ");
} }
function FilesUploaderComponent_ng_template_0_ng_template_6_ng_container_4_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c2, ctx_r26.xAlignment == "2"));
} }
function FilesUploaderComponent_ng_template_0_ng_template_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "input", 27, 28);
    i0.ɵɵtemplate(3, FilesUploaderComponent_ng_template_0_ng_template_6_ng_container_4_button_3_Template, 3, 3, "button", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("id", "pepperi-file-", ctx_r24.key, "");
    i0.ɵɵproperty("uploader", ctx_r24.uploader);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r24.progress != 0);
} }
function FilesUploaderComponent_ng_template_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, FilesUploaderComponent_ng_template_0_ng_template_6_pep_icon_1_Template, 1, 0, "pep-icon", 23);
    i0.ɵɵtemplate(2, FilesUploaderComponent_ng_template_0_ng_template_6_pep_icon_2_Template, 1, 0, "pep-icon", 24);
    i0.ɵɵtemplate(3, FilesUploaderComponent_ng_template_0_ng_template_6_span_3_Template, 3, 3, "span", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, FilesUploaderComponent_ng_template_0_ng_template_6_ng_container_4_Template, 4, 3, "ng-container", 1);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.controlType === "attachment");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.controlType === "image");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.progress == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r9.disabled);
} }
const _c4 = function (a0, a1) { return { "one-row": a0, disable: a1 }; };
const _c5 = function (a0) { return { field: a0 }; };
function FilesUploaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵtemplate(3, FilesUploaderComponent_ng_template_0_ng_container_3_Template, 1, 0, "ng-container", 5);
    i0.ɵɵtemplate(4, FilesUploaderComponent_ng_template_0_ng_template_4_Template, 4, 3, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(6, FilesUploaderComponent_ng_template_0_ng_template_6_Template, 5, 4, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 8);
    i0.ɵɵlistener("click", function FilesUploaderComponent_ng_template_0_Template_input_click_8_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.onClick_ChooseFile($event); })("keypress", function FilesUploaderComponent_ng_template_0_Template_input_keypress_8_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.onKeyPress_ChooseFile($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-error");
    i0.ɵɵelement(10, "span", 9);
    i0.ɵɵpipe(11, "translate");
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵpipe(14, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r6 = i0.ɵɵreference(5);
    const _r8 = i0.ɵɵreference(7);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("height", ctx_r1.fieldHeight);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(26, _c4, ctx_r1.rowSpan == 1, ctx_r1.disabled));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.src != "")("ngIfThen", _r6)("ngIfElse", _r8);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("id", ctx_r1.key)("name", ctx_r1.key)("formControlName", ctx_r1.key)("value", ctx_r1.src)("disabled", ctx_r1.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ctx_r1.required && ctx_r1.src.length == 0 ? i0.ɵɵpipeBind2(11, 14, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(29, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(12, 17, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(31, _c5, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.src.length == 0 ? i0.ɵɵpipeBind2(13, 20, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(33, _c5, ctx_r1.label)) : i0.ɵɵpipeBind2(14, 23, "MESSAGES.ERROR_IS_NOT_VALID", i0.ɵɵpureFunction1(35, _c5, ctx_r1.label)));
} }
function FilesUploaderComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function FilesUploaderComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, FilesUploaderComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function FilesUploaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function FilesUploaderComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
export class FilesUploaderComponent {
    constructor(translate, dialogService, customizationService, fileService) {
        this.translate = translate;
        this.dialogService = dialogService;
        this.customizationService = customizationService;
        this.fileService = fileService;
        this.key = '';
        this.src = '';
        this.label = '';
        this.required = false;
        this.disabled = false;
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.controlType = '';
        this.sizeLimitMB = 5;
        this.standAlone = false;
        this.acceptedExtensions = 'bmp,jpg,jpeg,png,gif,ico,svg,html,css';
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.fileChanged = new EventEmitter();
        this.elementClicked = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.fieldHeight = '';
        this.progress = 0;
        // response: string;
        this.intervalID = null;
        const self = this;
        this.uploader = new FileUploader({ removeAfterUpload: true });
        this.uploader.onAfterAddingFile = (item) => {
            var _a;
            if ((_a = self.fileInput) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                self.fileInput.nativeElement.value = '';
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                const fileExt = item._file.name.split('.').pop();
                const target = event.target || event.srcElement;
                const fileStr = target.result;
                const errorMsg = self.isValidFile(fileStr, fileExt, self.acceptedExtensions, self.sizeLimitMB);
                if (errorMsg === '') {
                    self.src = fileStr;
                    self.setIntervalX(25, 75);
                    self.setProgress(5);
                    self.fileChanged.emit(JSON.stringify({
                        acceptedExtensions: self.acceptedExtensions,
                        fileStr,
                        fileExt,
                    }));
                }
                else {
                    const title = self.translate.instant('MESSAGES.TITLE_NOTICE');
                    const data = new DialogData({
                        title,
                        content: errorMsg,
                        contentType: DialogDataType.Html
                    });
                    self.dialogService.openDefaultDialog(data);
                }
            };
            reader.readAsDataURL(item._file);
        };
    }
    ngOnInit() {
        this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
        /*this.uploader.onCompleteAll = () => {
            this.fileInput.nativeElement.value = '';
        }*/
    }
    isValidFile(fileStr, fileExtension, acceptedExtensions, sizeLimitMB = 5) {
        const file = fileStr;
        let fileSize = 0;
        let content = '';
        // check if got file as Base64
        if (typeof fileStr === 'string' && fileStr.indexOf('data:') > -1) {
            fileSize = this.getBase64FileSize(fileStr);
        }
        else {
            fileSize = file.size;
        }
        // check the size and the extension
        const sizeOK = fileSize !== -1 && file != null && fileSize < sizeLimitMB * (1048576);
        const extensionOK = acceptedExtensions === '' || acceptedExtensions.indexOf(fileExtension.toLowerCase()) !== -1;
        if (!extensionOK) {
            content = this.translate.instant('MESSAGES.ERROR_FAILD_TO_LOAD_EXTENSION', { fileExtension: '<label class=\'uppercase bold\'>' + fileExtension + '</label>' });
        }
        else if (!sizeOK) {
            content = this.translate.instant('MESSAGES.ERROR_FAILD_TO_LOAD_SIZE', { fileSize: '<label class=\'uppercase bold\'>' + (sizeLimitMB).toString() + '</label>' });
        }
        return content;
    }
    getBase64FileSize(base64String) {
        let fileSize;
        try {
            base64String = base64String.substr(base64String.indexOf(',') + 1);
            fileSize = atob(base64String).length;
        }
        catch (e) {
            fileSize = -1;
        }
        return fileSize; // return size in bytes;
    }
    setIntervalX(delay, repetitions) {
        const self = this;
        let x = 0;
        this.intervalID = window.setInterval(() => {
            // self.setProgress(self.progress + 5);
            if (++x === repetitions || self.uploader.progress >= 100) {
                window.clearInterval(self.intervalID);
            }
        }, delay);
    }
    errorHandler(event) {
        event.target.src = this.fileService.getNoImagePath();
        event.target.title = this.translate.instant('IMAGE.NO_IMAGE');
    }
    setProgress(progress) {
        this.progress = progress;
        this.uploader.progress = progress;
    }
    deleteFile() {
        this.uploader.clearQueue();
        window.clearInterval(this.intervalID);
        this.setProgress(0);
        const value = '';
        this.src = value;
        this.fileChanged.emit(value);
    }
    onElementClicked(event) {
        this.elementClicked.emit({ apiName: this.key, event });
    }
    onClick_ChooseFile(event) {
        var _a;
        if ((_a = this.fileInput) === null || _a === void 0 ? void 0 : _a.nativeElement) {
            this.fileInput.nativeElement.click();
        }
    }
    onKeyPress_ChooseFile(event) {
        var _a;
        const e = event;
        if ([13, 32].indexOf(e.which) !== -1) {
            if ((_a = this.fileInput) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                this.fileInput.nativeElement.click();
            }
        }
        e.preventDefault();
    }
}
FilesUploaderComponent.ɵfac = function FilesUploaderComponent_Factory(t) { return new (t || FilesUploaderComponent)(i0.ɵɵdirectiveInject(i1.TranslateService), i0.ɵɵdirectiveInject(i2.DialogService), i0.ɵɵdirectiveInject(i3.CustomizationService), i0.ɵɵdirectiveInject(i3.FileService)); };
FilesUploaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FilesUploaderComponent, selectors: [["files-uploader"]], viewQuery: function FilesUploaderComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fileInput = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.imagePreview = _t.first);
    } }, inputs: { key: "key", src: "src", label: "label", required: "required", disabled: "disabled", xAlignment: "xAlignment", rowSpan: "rowSpan", controlType: "controlType", sizeLimitMB: "sizeLimitMB", form: "form", standAlone: "standAlone", acceptedExtensions: "acceptedExtensions", layoutType: "layoutType" }, outputs: { fileChanged: "fileChanged", elementClicked: "elementClicked" }, decls: 5, vars: 3, consts: [["pepperiTemplate", ""], [4, "ngIf"], ["appearance", "outline", 3, "formGroup"], [1, "pepperi-file-wrapper"], [1, "pepperi-file", "body-sm", 3, "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["withImg", ""], ["noImg", ""], ["matInput", "", "type", "text", "autocomplete", "off", 1, "hidden-input", 3, "id", "name", "formControlName", "value", "disabled", "click", "keypress"], [1, "body-xs", 3, "title", "innerText"], ["mat-button", "", "class", "pepperi-button icon-button weak md delete", "tabindex", "-1", 3, "ngClass", "click", 4, "ngIf"], [1, "pepperi-file-preview", 3, "click"], ["class", "pepperi-file-preview-img", 3, "src", "max-height", "alt", "ngClass", "error", 4, "ngIf"], ["class", "ellipsis pepperi-file-message", 4, "ngIf"], ["mat-button", "", "tabindex", "-1", 1, "pepperi-button", "icon-button", "weak", "md", "delete", 3, "ngClass", "click"], ["name", "system_bin"], [1, "pepperi-file-preview-img", 3, "src", "alt", "ngClass", "error"], ["imagePreview", ""], [1, "ellipsis", "pepperi-file-message"], ["href", "javascript:void(0)", 4, "ngIf"], ["href", "javascript:void(0)"], ["name", "system_attach"], [1, "body-sm", "ellipsis"], ["name", "system_attach", 4, "ngIf"], ["name", "system_file_upload_cloud", 4, "ngIf"], ["class", "body-sm ellipsis", 4, "ngIf"], ["name", "system_file_upload_cloud"], ["tabindex", "-1", "type", "file", "accept", "acceptedExtensions", "ng2FileSelect", "", "autocomplete", "off", 3, "id", "uploader"], ["fileInput", ""], ["mat-button", "", "class", "pepperi-button icon-button weak md delete", 3, "ngClass", 4, "ngIf"], ["mat-button", "", 1, "pepperi-button", "icon-button", "weak", "md", "delete", 3, "ngClass"], ["name", "system_processing", 1, "spin-icon"], [4, "ngTemplateOutlet"]], template: function FilesUploaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FilesUploaderComponent_ng_template_0_Template, 15, 37, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, FilesUploaderComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        i0.ɵɵtemplate(3, FilesUploaderComponent_ng_container_3_Template, 1, 0, "ng-container", 1);
        i0.ɵɵtemplate(4, FilesUploaderComponent_ng_container_4_Template, 1, 0, "ng-container", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
    } }, directives: [i4.NgIf, i5.MatFormField, i6.NgControlStatusGroup, i6.FormGroupDirective, i4.NgClass, i7.MatInput, i6.DefaultValueAccessor, i6.NgControlStatus, i6.FormControlName, i5.MatError, i8.MatButton, i9.MatIcon, i10.PepperiIconComponent, i11.FileSelectDirective, i4.NgTemplateOutlet], pipes: [i1.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}"], changeDetection: 0 });
FilesUploaderComponent.ɵprov = i0.ɵɵdefineInjectable({ token: FilesUploaderComponent, factory: FilesUploaderComponent.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilesUploaderComponent, [{
        type: Component,
        args: [{
                selector: 'files-uploader',
                templateUrl: './files-uploader.component.html',
                styleUrls: ['./files-uploader.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }, {
        type: Injectable
    }], function () { return [{ type: i1.TranslateService }, { type: i2.DialogService }, { type: i3.CustomizationService }, { type: i3.FileService }]; }, { key: [{
            type: Input
        }], src: [{
            type: Input
        }], label: [{
            type: Input
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input
        }], xAlignment: [{
            type: Input
        }], rowSpan: [{
            type: Input
        }], controlType: [{
            type: Input
        }], sizeLimitMB: [{
            type: Input
        }], form: [{
            type: Input
        }], standAlone: [{
            type: Input
        }], acceptedExtensions: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], fileChanged: [{
            type: Output
        }], elementClicked: [{
            type: Output
        }], fileInput: [{
            type: ViewChild,
            args: ['fileInput']
        }], imagePreview: [{
            type: ViewChild,
            args: ['imagePreview']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtdXBsb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9maWxlcy11cGxvYWRlci9maWxlcy11cGxvYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2ZpbGVzLXVwbG9hZGVyL2ZpbGVzLXVwbG9hZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBcUIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEosT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBZSxXQUFXLEVBQXdCLE1BQU0seUJBQXlCLENBQUM7QUFDekYsT0FBTyxFQUFpQixVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNFM0Usd0JBQXlFOzs7OztJQUVyRSxrQ0FHSTtJQUhpQyw2TkFBc0I7SUFHdkQsZ0NBQ0k7SUFBQSwrQkFDVztJQUNmLGlCQUFXO0lBQ2YsaUJBQVM7OztJQUxMLCtFQUFvRDs7Ozs7SUFPcEQsbUNBR0E7SUFGcUMscU9BQThCO0lBRG5FLGlCQUdBOzs7SUFGSSxpREFBZ0M7SUFEZSxtREFBVyxzQkFBQSwyRUFBQTs7O0lBSTFELDZCQUNJO0lBQUEsK0JBQ1c7SUFDWCxnQ0FBK0I7SUFBQSxZQUFxQzs7SUFBQSxpQkFBTztJQUMvRSxpQkFBSTs7SUFEK0IsZUFBcUM7SUFBckMsK0RBQXFDOzs7SUFKNUUsK0JBQ0k7SUFBQSxzR0FDSTtJQUlSLGlCQUFNOzs7SUFMQyxlQUFpQjtJQUFqQix3Q0FBaUI7Ozs7SUFiNUIsMEdBR0k7SUFLSiwrQkFDSTtJQUQ4QixtT0FBa0M7SUFDaEUsb0dBR0E7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QkFBaEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUVHLElBQUk7a0JBQVosS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBRUksV0FBVztrQkFBcEIsTUFBTTtZQUNHLGNBQWM7a0JBQXZCLE1BQU07WUFFaUIsU0FBUztrQkFBaEMsU0FBUzttQkFBQyxXQUFXO1lBQ0ssWUFBWTtrQkFBdEMsU0FBUzttQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0YWJsZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRlciB9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRmlsZVNlcnZpY2UsIExBWU9VVF9UWVBFLCBDdXN0b21pemF0aW9uU2VydmljZSB9IGZyb20gJ0BwZXBwZXJpLWFkZG9ucy9uZ3gtbGliJztcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSwgRGlhbG9nRGF0YSwgRGlhbG9nRGF0YVR5cGUgfSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYi9kaWFsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpbGVzLXVwbG9hZGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9maWxlcy11cGxvYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9maWxlcy11cGxvYWRlci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlsZXNVcGxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBrZXkgPSAnJztcclxuICAgIEBJbnB1dCgpIHNyYyA9ICcnO1xyXG4gICAgQElucHV0KCkgbGFiZWwgPSAnJztcclxuICAgIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgeEFsaWdubWVudCA9ICcwJztcclxuICAgIEBJbnB1dCgpIHJvd1NwYW4gPSAxO1xyXG4gICAgQElucHV0KCkgY29udHJvbFR5cGUgPSAnJztcclxuICAgIEBJbnB1dCgpIHNpemVMaW1pdE1CID0gNTtcclxuXHJcbiAgICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBASW5wdXQoKSBzdGFuZEFsb25lID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBhY2NlcHRlZEV4dGVuc2lvbnMgPSAnYm1wLGpwZyxqcGVnLHBuZyxnaWYsaWNvLHN2ZyxodG1sLGNzcyc7XHJcbiAgICBASW5wdXQoKSBsYXlvdXRUeXBlOiBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtO1xyXG5cclxuICAgIEBPdXRwdXQoKSBmaWxlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBlbGVtZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnKSBmaWxlSW5wdXQ6IGFueTtcclxuICAgIEBWaWV3Q2hpbGQoJ2ltYWdlUHJldmlldycpIGltYWdlUHJldmlldzogYW55O1xyXG5cclxuICAgIExBWU9VVF9UWVBFID0gTEFZT1VUX1RZUEU7XHJcbiAgICBmaWVsZEhlaWdodCA9ICcnO1xyXG5cclxuICAgIC8vIG11bHRpcGxlID0gZmFsc2U7XHJcbiAgICB1cGxvYWRlcjogRmlsZVVwbG9hZGVyO1xyXG4gICAgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgLy8gcmVzcG9uc2U6IHN0cmluZztcclxuICAgIGludGVydmFsSUQ6IGFueSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY3VzdG9taXphdGlvblNlcnZpY2U6IEN1c3RvbWl6YXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZmlsZVNlcnZpY2U6IEZpbGVTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHsgcmVtb3ZlQWZ0ZXJVcGxvYWQ6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBsb2FkZXIub25BZnRlckFkZGluZ0ZpbGUgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5maWxlSW5wdXQ/Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlRXh0ID0gaXRlbS5fZmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVTdHIgPSB0YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBzZWxmLmlzVmFsaWRGaWxlKGZpbGVTdHIsIGZpbGVFeHQsIHNlbGYuYWNjZXB0ZWRFeHRlbnNpb25zLCBzZWxmLnNpemVMaW1pdE1CKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvck1zZyA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNyYyA9IGZpbGVTdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRJbnRlcnZhbFgoMjUsIDc1KTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFByb2dyZXNzKDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlsZUNoYW5nZWQuZW1pdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0ZWRFeHRlbnNpb25zOiBzZWxmLmFjY2VwdGVkRXh0ZW5zaW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVTdHIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlRXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ01FU1NBR0VTLlRJVExFX05PVElDRScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRGlhbG9nRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvck1zZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IERpYWxvZ0RhdGFUeXBlLkh0bWx9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRpYWxvZ1NlcnZpY2Uub3BlbkRlZmF1bHREaWFsb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpdGVtLl9maWxlKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmllbGRIZWlnaHQgPSB0aGlzLmN1c3RvbWl6YXRpb25TZXJ2aWNlLmNhbGN1bGF0ZUZpZWxkSGVpZ2h0KHRoaXMubGF5b3V0VHlwZSwgdGhpcy5yb3dTcGFuLCB0aGlzLnN0YW5kQWxvbmUpO1xyXG5cclxuICAgICAgICAvKnRoaXMudXBsb2FkZXIub25Db21wbGV0ZUFsbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWRGaWxlKGZpbGVTdHIsIGZpbGVFeHRlbnNpb24sIGFjY2VwdGVkRXh0ZW5zaW9ucywgc2l6ZUxpbWl0TUIgPSA1KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBmaWxlOiBhbnkgPSBmaWxlU3RyO1xyXG4gICAgICAgIGxldCBmaWxlU2l6ZSA9IDA7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSAnJztcclxuICAgICAgICAvLyBjaGVjayBpZiBnb3QgZmlsZSBhcyBCYXNlNjRcclxuICAgICAgICBpZiAodHlwZW9mIGZpbGVTdHIgPT09ICdzdHJpbmcnICYmIGZpbGVTdHIuaW5kZXhPZignZGF0YTonKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGZpbGVTaXplID0gdGhpcy5nZXRCYXNlNjRGaWxlU2l6ZShmaWxlU3RyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2hlY2sgdGhlIHNpemUgYW5kIHRoZSBleHRlbnNpb25cclxuICAgICAgICBjb25zdCBzaXplT0s6IGJvb2xlYW4gPSBmaWxlU2l6ZSAhPT0gLTEgJiYgZmlsZSAhPSBudWxsICYmIGZpbGVTaXplIDwgc2l6ZUxpbWl0TUIgKiAoMTA0ODU3Nik7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uT0sgPSBhY2NlcHRlZEV4dGVuc2lvbnMgPT09ICcnIHx8IGFjY2VwdGVkRXh0ZW5zaW9ucy5pbmRleE9mKGZpbGVFeHRlbnNpb24udG9Mb3dlckNhc2UoKSkgIT09IC0xO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uT0spIHtcclxuICAgICAgICAgICAgY29udGVudCA9IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ01FU1NBR0VTLkVSUk9SX0ZBSUxEX1RPX0xPQURfRVhURU5TSU9OJyxcclxuICAgICAgICAgICAgICAgIHsgZmlsZUV4dGVuc2lvbjogJzxsYWJlbCBjbGFzcz1cXCd1cHBlcmNhc2UgYm9sZFxcJz4nICsgZmlsZUV4dGVuc2lvbiArICc8L2xhYmVsPicgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghc2l6ZU9LKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdNRVNTQUdFUy5FUlJPUl9GQUlMRF9UT19MT0FEX1NJWkUnLFxyXG4gICAgICAgICAgICAgICAgeyBmaWxlU2l6ZTogJzxsYWJlbCBjbGFzcz1cXCd1cHBlcmNhc2UgYm9sZFxcJz4nICsgKHNpemVMaW1pdE1CKS50b1N0cmluZygpICsgJzwvbGFiZWw+JyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QmFzZTY0RmlsZVNpemUoYmFzZTY0U3RyaW5nOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBmaWxlU2l6ZTogbnVtYmVyO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBiYXNlNjRTdHJpbmcgPSBiYXNlNjRTdHJpbmcuc3Vic3RyKGJhc2U2NFN0cmluZy5pbmRleE9mKCcsJykgKyAxKTtcclxuICAgICAgICAgICAgZmlsZVNpemUgPSBhdG9iKGJhc2U2NFN0cmluZykubGVuZ3RoO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgZmlsZVNpemUgPSAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmaWxlU2l6ZTsgLy8gcmV0dXJuIHNpemUgaW4gYnl0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW50ZXJ2YWxYKGRlbGF5LCByZXBldGl0aW9ucyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCB4ID0gMDtcclxuICAgICAgICB0aGlzLmludGVydmFsSUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBzZWxmLnNldFByb2dyZXNzKHNlbGYucHJvZ3Jlc3MgKyA1KTtcclxuICAgICAgICAgICAgaWYgKCsreCA9PT0gcmVwZXRpdGlvbnMgfHwgc2VsZi51cGxvYWRlci5wcm9ncmVzcyA+PSAxMDApIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHNlbGYuaW50ZXJ2YWxJRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBkZWxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3JIYW5kbGVyKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnNyYyA9IHRoaXMuZmlsZVNlcnZpY2UuZ2V0Tm9JbWFnZVBhdGgoKTtcclxuICAgICAgICBldmVudC50YXJnZXQudGl0bGUgPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdJTUFHRS5OT19JTUFHRScpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy51cGxvYWRlci5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51cGxvYWRlci5jbGVhclF1ZXVlKCk7XHJcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEKTtcclxuICAgICAgICB0aGlzLnNldFByb2dyZXNzKDApO1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3JjID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5maWxlQ2hhbmdlZC5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVsZW1lbnRDbGlja2VkKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Q2xpY2tlZC5lbWl0KHsgYXBpTmFtZTogdGhpcy5rZXksIGV2ZW50IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tfQ2hvb3NlRmlsZShldmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbGVJbnB1dD8ubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5UHJlc3NfQ2hvb3NlRmlsZShldmVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGUgPSBldmVudCBhcyBLZXlib2FyZEV2ZW50O1xyXG5cclxuICAgICAgICBpZiAoWzEzLCAzMl0uaW5kZXhPZihlLndoaWNoKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZUlucHV0Py5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59XHJcbiIsIjwhLS0gTmV3IGNvZGUgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjcGVwcGVyaVRlbXBsYXRlPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBlcHBlcmktZmlsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWZpbGUgYm9keS1zbVwiIFtzdHlsZS5oZWlnaHRdPVwiZmllbGRIZWlnaHRcIiBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgJ29uZS1yb3cnOiByb3dTcGFuID09IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZTogZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzcmMgIT0gJyc7IHRoZW4gd2l0aEltZzsgZWxzZSBub0ltZ1wiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICN3aXRoSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhZGlzYWJsZWRcIiBtYXQtYnV0dG9uIChjbGljayk9XCJkZWxldGVGaWxlKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBlcHBlcmktYnV0dG9uIGljb24tYnV0dG9uIHdlYWsgbWQgZGVsZXRlXCIgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ3JpZ2h0LWFsaWdubWVudCc6IHhBbGlnbm1lbnQgPT0gJzInIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBlcC1pY29uIG5hbWU9XCJzeXN0ZW1fYmluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXBwZXJpLWZpbGUtcHJldmlld1wiIChjbGljayk9XCJvbkVsZW1lbnRDbGlja2VkKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cImNvbnRyb2xUeXBlID09PSAnaW1hZ2UnXCIgI2ltYWdlUHJldmlldyBbc3JjXT1cInNyY1wiIGNsYXNzPVwicGVwcGVyaS1maWxlLXByZXZpZXctaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5tYXgtaGVpZ2h0XT1cImZpZWxkSGVpZ2h0XCIgKGVycm9yKT1cImVycm9ySGFuZGxlcigkZXZlbnQpXCIgW2FsdF09XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJbJ3RleHQtYWxpZ24tJyArIHhBbGlnbm1lbnRdXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbnRyb2xUeXBlID09PSAnYXR0YWNobWVudCdcIiBjbGFzcz1cImVsbGlwc2lzIHBlcHBlcmktZmlsZS1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cInNyYyAhPSAnJ1wiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cInN5c3RlbV9hdHRhY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYm9keS1zbSBlbGxpcHNpc1wiPnt7ICdGSUxFLlNFRV9PUklHSU5BTCcgfCB0cmFuc2xhdGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm9JbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsbGlwc2lzIHBlcHBlcmktZmlsZS1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwZXAtaWNvbiAqbmdJZj1cImNvbnRyb2xUeXBlID09PSAnYXR0YWNobWVudCdcIiBuYW1lPVwic3lzdGVtX2F0dGFjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gKm5nSWY9XCJjb250cm9sVHlwZSA9PT0gJ2ltYWdlJ1wiIG5hbWU9XCJzeXN0ZW1fZmlsZV91cGxvYWRfY2xvdWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJib2R5LXNtIGVsbGlwc2lzXCIgKm5nSWY9XCJwcm9ncmVzcyA9PSAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAoZGlzYWJsZWQgPyAoY29udHJvbFR5cGUgPT09ICdpbWFnZScgPyAnTUVTU0FHRVMuSU5GT19NSVNTSU5HX0lNQUdFJyA6ICdNRVNTQUdFUy5JTkZPX01JU1NJTkdfRklMRScpIDogJ0ZJTEUuSElOVCcpIHwgdHJhbnNsYXRlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8cCAqbmdJZj1cInByb2dyZXNzICE9IDBcIiBjbGFzcz1cInB1bGwtbGVmdCBmbGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ3B1bGwtbGVmdCBmbGlwJzogcm93U3BhbiA9PSAxLCBpbWFnZTogY29udHJvbFR5cGUgPT0gJ2ltYWdlJywgYXR0YWNobWVudDogY29udHJvbFR5cGUgPT0gJ2F0dGFjaG1lbnQnIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICdGSUxFLlVQTE9BRElOR19GSUxFJyB8IHRyYW5zbGF0ZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZGlzYWJsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNmaWxlSW5wdXQgaWQ9XCJwZXBwZXJpLWZpbGUte3sga2V5IH19XCIgdGFiaW5kZXg9XCItMVwiIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImFjY2VwdGVkRXh0ZW5zaW9uc1wiIG5nMkZpbGVTZWxlY3QgW3VwbG9hZGVyXT1cInVwbG9hZGVyXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInByb2dyZXNzICE9IDBcIiBtYXQtYnV0dG9uIGNsYXNzPVwicGVwcGVyaS1idXR0b24gaWNvbi1idXR0b24gd2VhayBtZCBkZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAncmlnaHQtYWxpZ25tZW50JzogeEFsaWdubWVudCA9PSAnMicgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwZXAtaWNvbiBuYW1lPVwic3lzdGVtX3Byb2Nlc3NpbmdcIiBjbGFzcz1cInNwaW4taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGVwLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgW2lkXT1cImtleVwiIG1hdElucHV0IFtuYW1lXT1cImtleVwiIFtmb3JtQ29udHJvbE5hbWVdPVwia2V5XCIgY2xhc3M9XCJoaWRkZW4taW5wdXRcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwic3JjXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGNsaWNrKT1cIm9uQ2xpY2tfQ2hvb3NlRmlsZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIChrZXlwcmVzcyk9XCJvbktleVByZXNzX0Nob29zZUZpbGUoJGV2ZW50KVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxtYXQtZXJyb3I+PHNwYW4gY2xhc3M9XCJib2R5LXhzXCJcclxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJyZXF1aXJlZCAmJiBzcmMubGVuZ3RoID09IDAgPyAoJ01FU1NBR0VTLkVSUk9SX0lTX1JFUVVJUkVEJyB8IHRyYW5zbGF0ZTogeyBmaWVsZDogbGFiZWwgfSkgOiAoJ01FU1NBR0VTLkVSUk9SX0lTX05PVF9WQUxJRCcgfCB0cmFuc2xhdGU6IHsgZmllbGQ6IGxhYmVsIH0pXCJcclxuICAgICAgICAgICAgICAgIFtpbm5lclRleHRdPVwicmVxdWlyZWQgJiYgc3JjLmxlbmd0aCA9PSAwID8gKCdNRVNTQUdFUy5FUlJPUl9JU19SRVFVSVJFRCcgfCB0cmFuc2xhdGU6IHsgZmllbGQ6IGxhYmVsIH0pIDogKCdNRVNTQUdFUy5FUlJPUl9JU19OT1RfVkFMSUQnIHwgdHJhbnNsYXRlOiB7IGZpZWxkOiBsYWJlbCB9KVwiPjwvc3Bhbj5cclxuICAgICAgICA8L21hdC1lcnJvcj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm1cIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUNhcmRcIj5cclxuICAgIDwhLS0gPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcHBlcmlUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPiAtLT5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlXCI+XHJcbiAgICA8IS0tIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwZXBwZXJpVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj4gLS0+XHJcbjwvbmctY29udGFpbmVyPiJdfQ==