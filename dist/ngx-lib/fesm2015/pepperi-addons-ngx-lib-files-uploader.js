import { ɵɵelementContainer, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelement, ɵɵelementEnd, ɵɵproperty, ɵɵpureFunction1, ɵɵstyleProp, ɵɵsanitizeUrl, ɵɵtext, ɵɵpipe, ɵɵadvance, ɵɵtextInterpolate, ɵɵpipeBind1, ɵɵtemplate, ɵɵtextInterpolate1, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵpropertyInterpolate1, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵpureFunction2, ɵɵpipeBind2, EventEmitter, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵdefineInjectable, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Injectable, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, NgTemplateOutlet, CommonModule } from '@angular/common';
import { NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FileUploader, FileSelectDirective, FileUploadModule } from 'ng2-file-upload';
import { LAYOUT_TYPE, CustomizationService, FileService, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconSystemBin, pepperiIconSystemAttach, pepperiIconSystemFileUploadCloud, pepperiIconSystemProcessing, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { DialogData, DialogDataType, DialogService, PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

const _c0 = ["fileInput"];
const _c1 = ["imagePreview"];
function FilesUploaderComponent_ng_template_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2 = function (a0) { return { "right-alignment": a0 }; };
function FilesUploaderComponent_ng_template_0_ng_template_4_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14);
    ɵɵlistener("click", function FilesUploaderComponent_ng_template_0_ng_template_4_button_0_Template_button_click_0_listener() { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(3); return ctx_r13.deleteFile(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c2, ctx_r10.xAlignment == "2"));
} }
const _c3 = function (a0) { return [a0]; };
function FilesUploaderComponent_ng_template_0_ng_template_4_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 16, 17);
    ɵɵlistener("error", function FilesUploaderComponent_ng_template_0_ng_template_4_img_2_Template_img_error_0_listener($event) { ɵɵrestoreView(_r17); const ctx_r16 = ɵɵnextContext(3); return ctx_r16.errorHandler($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵstyleProp("max-height", ctx_r11.fieldHeight);
    ɵɵproperty("src", ctx_r11.src, ɵɵsanitizeUrl)("alt", ctx_r11.label)("ngClass", ɵɵpureFunction1(5, _c3, "text-align-" + ctx_r11.xAlignment));
} }
function FilesUploaderComponent_ng_template_0_ng_template_4_div_3_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 20);
    ɵɵelement(1, "pep-icon", 21);
    ɵɵelementStart(2, "span", 22);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 1, "FILE.SEE_ORIGINAL"));
} }
function FilesUploaderComponent_ng_template_0_ng_template_4_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, FilesUploaderComponent_ng_template_0_ng_template_4_div_3_a_1_Template, 5, 3, "a", 19);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r12.src != "");
} }
function FilesUploaderComponent_ng_template_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵtemplate(0, FilesUploaderComponent_ng_template_0_ng_template_4_button_0_Template, 3, 3, "button", 10);
    ɵɵelementStart(1, "div", 11);
    ɵɵlistener("click", function FilesUploaderComponent_ng_template_0_ng_template_4_Template_div_click_1_listener($event) { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(2); return ctx_r19.onElementClicked($event); });
    ɵɵtemplate(2, FilesUploaderComponent_ng_template_0_ng_template_4_img_2_Template, 2, 7, "img", 12);
    ɵɵtemplate(3, FilesUploaderComponent_ng_template_0_ng_template_4_div_3_Template, 2, 1, "div", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r7.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r7.controlType === "image");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.controlType === "attachment");
} }
function FilesUploaderComponent_ng_template_0_ng_template_6_pep_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-icon", 21);
} }
function FilesUploaderComponent_ng_template_0_ng_template_6_pep_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-icon", 26);
} }
function FilesUploaderComponent_ng_template_0_ng_template_6_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r23.disabled ? ctx_r23.controlType === "image" ? "MESSAGES.INFO_MISSING_IMAGE" : "MESSAGES.INFO_MISSING_FILE" : "FILE.HINT"), " ");
} }
function FilesUploaderComponent_ng_template_0_ng_template_6_ng_container_4_button_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 30);
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 31);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c2, ctx_r26.xAlignment == "2"));
} }
function FilesUploaderComponent_ng_template_0_ng_template_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "input", 27, 28);
    ɵɵtemplate(3, FilesUploaderComponent_ng_template_0_ng_template_6_ng_container_4_button_3_Template, 3, 3, "button", 29);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("id", "pepperi-file-", ctx_r24.key, "");
    ɵɵproperty("uploader", ctx_r24.uploader);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r24.progress != 0);
} }
function FilesUploaderComponent_ng_template_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, FilesUploaderComponent_ng_template_0_ng_template_6_pep_icon_1_Template, 1, 0, "pep-icon", 23);
    ɵɵtemplate(2, FilesUploaderComponent_ng_template_0_ng_template_6_pep_icon_2_Template, 1, 0, "pep-icon", 24);
    ɵɵtemplate(3, FilesUploaderComponent_ng_template_0_ng_template_6_span_3_Template, 3, 3, "span", 25);
    ɵɵelementEnd();
    ɵɵtemplate(4, FilesUploaderComponent_ng_template_0_ng_template_6_ng_container_4_Template, 4, 3, "ng-container", 1);
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.controlType === "attachment");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.controlType === "image");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.progress == 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r9.disabled);
} }
const _c4 = function (a0, a1) { return { "one-row": a0, disable: a1 }; };
const _c5 = function (a0) { return { field: a0 }; };
function FilesUploaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 2);
    ɵɵelementStart(1, "div", 3);
    ɵɵelementStart(2, "div", 4);
    ɵɵtemplate(3, FilesUploaderComponent_ng_template_0_ng_container_3_Template, 1, 0, "ng-container", 5);
    ɵɵtemplate(4, FilesUploaderComponent_ng_template_0_ng_template_4_Template, 4, 3, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵtemplate(6, FilesUploaderComponent_ng_template_0_ng_template_6_Template, 5, 4, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(8, "input", 8);
    ɵɵlistener("click", function FilesUploaderComponent_ng_template_0_Template_input_click_8_listener($event) { ɵɵrestoreView(_r28); const ctx_r27 = ɵɵnextContext(); return ctx_r27.onClick_ChooseFile($event); })("keypress", function FilesUploaderComponent_ng_template_0_Template_input_keypress_8_listener($event) { ɵɵrestoreView(_r28); const ctx_r29 = ɵɵnextContext(); return ctx_r29.onKeyPress_ChooseFile($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(9, "mat-error");
    ɵɵelement(10, "span", 9);
    ɵɵpipe(11, "translate");
    ɵɵpipe(12, "translate");
    ɵɵpipe(13, "translate");
    ɵɵpipe(14, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r6 = ɵɵreference(5);
    const _r8 = ɵɵreference(7);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(2);
    ɵɵstyleProp("height", ctx_r1.fieldHeight);
    ɵɵproperty("ngClass", ɵɵpureFunction2(26, _c4, ctx_r1.rowSpan == 1, ctx_r1.disabled));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.src != "")("ngIfThen", _r6)("ngIfElse", _r8);
    ɵɵadvance(5);
    ɵɵproperty("id", ctx_r1.key)("name", ctx_r1.key)("formControlName", ctx_r1.key)("value", ctx_r1.src)("disabled", ctx_r1.disabled);
    ɵɵadvance(2);
    ɵɵproperty("title", ctx_r1.required && ctx_r1.src.length == 0 ? ɵɵpipeBind2(11, 14, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(29, _c5, ctx_r1.label)) : ɵɵpipeBind2(12, 17, "MESSAGES.ERROR_IS_NOT_VALID", ɵɵpureFunction1(31, _c5, ctx_r1.label)))("innerText", ctx_r1.required && ctx_r1.src.length == 0 ? ɵɵpipeBind2(13, 20, "MESSAGES.ERROR_IS_REQUIRED", ɵɵpureFunction1(33, _c5, ctx_r1.label)) : ɵɵpipeBind2(14, 23, "MESSAGES.ERROR_IS_NOT_VALID", ɵɵpureFunction1(35, _c5, ctx_r1.label)));
} }
function FilesUploaderComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function FilesUploaderComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FilesUploaderComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 32);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function FilesUploaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function FilesUploaderComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
class FilesUploaderComponent {
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
FilesUploaderComponent.ɵfac = function FilesUploaderComponent_Factory(t) { return new (t || FilesUploaderComponent)(ɵɵdirectiveInject(TranslateService), ɵɵdirectiveInject(DialogService), ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(FileService)); };
FilesUploaderComponent.ɵcmp = ɵɵdefineComponent({ type: FilesUploaderComponent, selectors: [["files-uploader"]], viewQuery: function FilesUploaderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fileInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.imagePreview = _t.first);
    } }, inputs: { key: "key", src: "src", label: "label", required: "required", disabled: "disabled", xAlignment: "xAlignment", rowSpan: "rowSpan", controlType: "controlType", sizeLimitMB: "sizeLimitMB", form: "form", standAlone: "standAlone", acceptedExtensions: "acceptedExtensions", layoutType: "layoutType" }, outputs: { fileChanged: "fileChanged", elementClicked: "elementClicked" }, decls: 5, vars: 3, consts: [["pepperiTemplate", ""], [4, "ngIf"], ["appearance", "outline", 3, "formGroup"], [1, "pepperi-file-wrapper"], [1, "pepperi-file", "body-sm", 3, "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["withImg", ""], ["noImg", ""], ["matInput", "", "type", "text", "autocomplete", "off", 1, "hidden-input", 3, "id", "name", "formControlName", "value", "disabled", "click", "keypress"], [1, "body-xs", 3, "title", "innerText"], ["mat-button", "", "class", "pepperi-button icon-button weak md delete", "tabindex", "-1", 3, "ngClass", "click", 4, "ngIf"], [1, "pepperi-file-preview", 3, "click"], ["class", "pepperi-file-preview-img", 3, "src", "max-height", "alt", "ngClass", "error", 4, "ngIf"], ["class", "ellipsis pepperi-file-message", 4, "ngIf"], ["mat-button", "", "tabindex", "-1", 1, "pepperi-button", "icon-button", "weak", "md", "delete", 3, "ngClass", "click"], ["name", "system_bin"], [1, "pepperi-file-preview-img", 3, "src", "alt", "ngClass", "error"], ["imagePreview", ""], [1, "ellipsis", "pepperi-file-message"], ["href", "javascript:void(0)", 4, "ngIf"], ["href", "javascript:void(0)"], ["name", "system_attach"], [1, "body-sm", "ellipsis"], ["name", "system_attach", 4, "ngIf"], ["name", "system_file_upload_cloud", 4, "ngIf"], ["class", "body-sm ellipsis", 4, "ngIf"], ["name", "system_file_upload_cloud"], ["tabindex", "-1", "type", "file", "accept", "acceptedExtensions", "ng2FileSelect", "", "autocomplete", "off", 3, "id", "uploader"], ["fileInput", ""], ["mat-button", "", "class", "pepperi-button icon-button weak md delete", 3, "ngClass", 4, "ngIf"], ["mat-button", "", 1, "pepperi-button", "icon-button", "weak", "md", "delete", 3, "ngClass"], ["name", "system_processing", 1, "spin-icon"], [4, "ngTemplateOutlet"]], template: function FilesUploaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FilesUploaderComponent_ng_template_0_Template, 15, 37, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, FilesUploaderComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        ɵɵtemplate(3, FilesUploaderComponent_ng_container_3_Template, 1, 0, "ng-container", 1);
        ɵɵtemplate(4, FilesUploaderComponent_ng_container_4_Template, 1, 0, "ng-container", 1);
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
    } }, directives: [NgIf, MatFormField, NgControlStatusGroup, FormGroupDirective, NgClass, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, MatError, MatButton, MatIcon, PepperiIconComponent, FileSelectDirective, NgTemplateOutlet], pipes: [TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}"], changeDetection: 0 });
FilesUploaderComponent.ɵprov = ɵɵdefineInjectable({ token: FilesUploaderComponent, factory: FilesUploaderComponent.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilesUploaderComponent, [{
        type: Component,
        args: [{
                selector: 'files-uploader',
                templateUrl: './files-uploader.component.html',
                styleUrls: ['./files-uploader.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }, {
        type: Injectable
    }], function () { return [{ type: TranslateService }, { type: DialogService }, { type: CustomizationService }, { type: FileService }]; }, { key: [{
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

class PepperiFilesUploaderModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemBin,
            pepperiIconSystemAttach,
            pepperiIconSystemFileUploadCloud,
            pepperiIconSystemProcessing
        ]);
    }
}
PepperiFilesUploaderModule.ɵmod = ɵɵdefineNgModule({ type: PepperiFilesUploaderModule });
PepperiFilesUploaderModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiFilesUploaderModule_Factory(t) { return new (t || PepperiFilesUploaderModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules,
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            // External modules
            FileUploadModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiFilesUploaderModule, { declarations: [FilesUploaderComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        // External modules
        FileUploadModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiDialogModule], exports: [FilesUploaderComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiFilesUploaderModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules,
                    MatCommonModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatIconModule,
                    // External modules
                    FileUploadModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiDialogModule
                ],
                exports: [FilesUploaderComponent],
                declarations: [FilesUploaderComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/files-uploader
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FilesUploaderComponent, PepperiFilesUploaderModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-files-uploader.js.map
