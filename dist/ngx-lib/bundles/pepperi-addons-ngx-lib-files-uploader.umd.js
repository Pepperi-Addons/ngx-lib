(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/icon'), require('ng2-file-upload'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/dialog'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/files-uploader', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/core', '@angular/material/button', '@angular/material/form-field', '@angular/material/input', '@angular/material/icon', 'ng2-file-upload', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/dialog', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib']['files-uploader'] = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.core, global.ng.material.button, global.ng.material.formField, global.ng.material.input, global.ng.material.icon, global['file-upload'], global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib'].dialog, global.translate));
}(this, (function (exports, i0, i4, i6, core, i8, i5, i7, i9, i11, i3, i1, i2, i1$1) { 'use strict';

    var _c0 = ["fileInput"];
    var _c1 = ["imagePreview"];
    function FilesUploaderComponent_ng_template_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c2 = function (a0) { return { "right-alignment": a0 }; };
    function FilesUploaderComponent_ng_template_0_ng_template_4_button_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 14);
            i0.ɵɵlistener("click", function FilesUploaderComponent_ng_template_0_ng_template_4_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.deleteFile(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c2, ctx_r10.xAlignment == "2"));
        }
    }
    var _c3 = function (a0) { return [a0]; };
    function FilesUploaderComponent_ng_template_0_ng_template_4_img_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "img", 16, 17);
            i0.ɵɵlistener("error", function FilesUploaderComponent_ng_template_0_ng_template_4_img_2_Template_img_error_0_listener($event) { i0.ɵɵrestoreView(_r17_1); var ctx_r16 = i0.ɵɵnextContext(3); return ctx_r16.errorHandler($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(3);
            i0.ɵɵstyleProp("max-height", ctx_r11.fieldHeight);
            i0.ɵɵproperty("src", ctx_r11.src, i0.ɵɵsanitizeUrl)("alt", ctx_r11.label)("ngClass", i0.ɵɵpureFunction1(5, _c3, "text-align-" + ctx_r11.xAlignment));
        }
    }
    function FilesUploaderComponent_ng_template_0_ng_template_4_div_3_a_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 20);
            i0.ɵɵelement(1, "pep-icon", 21);
            i0.ɵɵelementStart(2, "span", 22);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 1, "FILE.SEE_ORIGINAL"));
        }
    }
    function FilesUploaderComponent_ng_template_0_ng_template_4_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵtemplate(1, FilesUploaderComponent_ng_template_0_ng_template_4_div_3_a_1_Template, 5, 3, "a", 19);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r12 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r12.src != "");
        }
    }
    function FilesUploaderComponent_ng_template_0_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, FilesUploaderComponent_ng_template_0_ng_template_4_button_0_Template, 3, 3, "button", 10);
            i0.ɵɵelementStart(1, "div", 11);
            i0.ɵɵlistener("click", function FilesUploaderComponent_ng_template_0_ng_template_4_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r20_1); var ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.onElementClicked($event); });
            i0.ɵɵtemplate(2, FilesUploaderComponent_ng_template_0_ng_template_4_img_2_Template, 2, 7, "img", 12);
            i0.ɵɵtemplate(3, FilesUploaderComponent_ng_template_0_ng_template_4_div_3_Template, 2, 1, "div", 13);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngIf", !ctx_r7.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r7.controlType === "image");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r7.controlType === "attachment");
        }
    }
    function FilesUploaderComponent_ng_template_0_ng_template_6_pep_icon_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-icon", 21);
        }
    }
    function FilesUploaderComponent_ng_template_0_ng_template_6_pep_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-icon", 26);
        }
    }
    function FilesUploaderComponent_ng_template_0_ng_template_6_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 22);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r23 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r23.disabled ? ctx_r23.controlType === "image" ? "MESSAGES.INFO_MISSING_IMAGE" : "MESSAGES.INFO_MISSING_FILE" : "FILE.HINT"), " ");
        }
    }
    function FilesUploaderComponent_ng_template_0_ng_template_6_ng_container_4_button_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 30);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 31);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r26 = i0.ɵɵnextContext(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c2, ctx_r26.xAlignment == "2"));
        }
    }
    function FilesUploaderComponent_ng_template_0_ng_template_6_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "input", 27, 28);
            i0.ɵɵtemplate(3, FilesUploaderComponent_ng_template_0_ng_template_6_ng_container_4_button_3_Template, 3, 3, "button", 29);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r24 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate1("id", "pepperi-file-", ctx_r24.key, "");
            i0.ɵɵproperty("uploader", ctx_r24.uploader);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r24.progress != 0);
        }
    }
    function FilesUploaderComponent_ng_template_0_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵtemplate(1, FilesUploaderComponent_ng_template_0_ng_template_6_pep_icon_1_Template, 1, 0, "pep-icon", 23);
            i0.ɵɵtemplate(2, FilesUploaderComponent_ng_template_0_ng_template_6_pep_icon_2_Template, 1, 0, "pep-icon", 24);
            i0.ɵɵtemplate(3, FilesUploaderComponent_ng_template_0_ng_template_6_span_3_Template, 3, 3, "span", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, FilesUploaderComponent_ng_template_0_ng_template_6_ng_container_4_Template, 4, 3, "ng-container", 1);
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r9.controlType === "attachment");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r9.controlType === "image");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r9.progress == 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r9.disabled);
        }
    }
    var _c4 = function (a0, a1) { return { "one-row": a0, disable: a1 }; };
    var _c5 = function (a0) { return { field: a0 }; };
    function FilesUploaderComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r28_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field", 2);
            i0.ɵɵelementStart(1, "div", 3);
            i0.ɵɵelementStart(2, "div", 4);
            i0.ɵɵtemplate(3, FilesUploaderComponent_ng_template_0_ng_container_3_Template, 1, 0, "ng-container", 5);
            i0.ɵɵtemplate(4, FilesUploaderComponent_ng_template_0_ng_template_4_Template, 4, 3, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(6, FilesUploaderComponent_ng_template_0_ng_template_6_Template, 5, 4, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "input", 8);
            i0.ɵɵlistener("click", function FilesUploaderComponent_ng_template_0_Template_input_click_8_listener($event) { i0.ɵɵrestoreView(_r28_1); var ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.onClick_ChooseFile($event); })("keypress", function FilesUploaderComponent_ng_template_0_Template_input_keypress_8_listener($event) { i0.ɵɵrestoreView(_r28_1); var ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.onKeyPress_ChooseFile($event); });
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
        }
        if (rf & 2) {
            var _r6 = i0.ɵɵreference(5);
            var _r8 = i0.ɵɵreference(7);
            var ctx_r1 = i0.ɵɵnextContext();
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
        }
    }
    function FilesUploaderComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function FilesUploaderComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, FilesUploaderComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 32);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function FilesUploaderComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function FilesUploaderComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var FilesUploaderComponent = /** @class */ (function () {
        function FilesUploaderComponent(translate, dialogService, customizationService, fileService) {
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
            this.layoutType = i3.LAYOUT_TYPE.PepperiForm;
            this.fileChanged = new i0.EventEmitter();
            this.elementClicked = new i0.EventEmitter();
            this.LAYOUT_TYPE = i3.LAYOUT_TYPE;
            this.fieldHeight = '';
            this.progress = 0;
            // response: string;
            this.intervalID = null;
            var self = this;
            this.uploader = new i11.FileUploader({ removeAfterUpload: true });
            this.uploader.onAfterAddingFile = function (item) {
                var _a;
                if ((_a = self.fileInput) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                    self.fileInput.nativeElement.value = '';
                }
                var reader = new FileReader();
                reader.onload = function (event) {
                    var fileExt = item._file.name.split('.').pop();
                    var target = event.target || event.srcElement;
                    var fileStr = target.result;
                    var errorMsg = self.isValidFile(fileStr, fileExt, self.acceptedExtensions, self.sizeLimitMB);
                    if (errorMsg === '') {
                        self.src = fileStr;
                        self.setIntervalX(25, 75);
                        self.setProgress(5);
                        self.fileChanged.emit(JSON.stringify({
                            acceptedExtensions: self.acceptedExtensions,
                            fileStr: fileStr,
                            fileExt: fileExt,
                        }));
                    }
                    else {
                        var title = self.translate.instant('MESSAGES.TITLE_NOTICE');
                        var data = new i2.DialogData({
                            title: title,
                            content: errorMsg,
                            contentType: i2.DialogDataType.Html
                        });
                        self.dialogService.openDefaultDialog(data);
                    }
                };
                reader.readAsDataURL(item._file);
            };
        }
        FilesUploaderComponent.prototype.ngOnInit = function () {
            this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
            /*this.uploader.onCompleteAll = () => {
                this.fileInput.nativeElement.value = '';
            }*/
        };
        FilesUploaderComponent.prototype.isValidFile = function (fileStr, fileExtension, acceptedExtensions, sizeLimitMB) {
            if (sizeLimitMB === void 0) { sizeLimitMB = 5; }
            var file = fileStr;
            var fileSize = 0;
            var content = '';
            // check if got file as Base64
            if (typeof fileStr === 'string' && fileStr.indexOf('data:') > -1) {
                fileSize = this.getBase64FileSize(fileStr);
            }
            else {
                fileSize = file.size;
            }
            // check the size and the extension
            var sizeOK = fileSize !== -1 && file != null && fileSize < sizeLimitMB * (1048576);
            var extensionOK = acceptedExtensions === '' || acceptedExtensions.indexOf(fileExtension.toLowerCase()) !== -1;
            if (!extensionOK) {
                content = this.translate.instant('MESSAGES.ERROR_FAILD_TO_LOAD_EXTENSION', { fileExtension: '<label class=\'uppercase bold\'>' + fileExtension + '</label>' });
            }
            else if (!sizeOK) {
                content = this.translate.instant('MESSAGES.ERROR_FAILD_TO_LOAD_SIZE', { fileSize: '<label class=\'uppercase bold\'>' + (sizeLimitMB).toString() + '</label>' });
            }
            return content;
        };
        FilesUploaderComponent.prototype.getBase64FileSize = function (base64String) {
            var fileSize;
            try {
                base64String = base64String.substr(base64String.indexOf(',') + 1);
                fileSize = atob(base64String).length;
            }
            catch (e) {
                fileSize = -1;
            }
            return fileSize; // return size in bytes;
        };
        FilesUploaderComponent.prototype.setIntervalX = function (delay, repetitions) {
            var self = this;
            var x = 0;
            this.intervalID = window.setInterval(function () {
                // self.setProgress(self.progress + 5);
                if (++x === repetitions || self.uploader.progress >= 100) {
                    window.clearInterval(self.intervalID);
                }
            }, delay);
        };
        FilesUploaderComponent.prototype.errorHandler = function (event) {
            event.target.src = this.fileService.getNoImagePath();
            event.target.title = this.translate.instant('IMAGE.NO_IMAGE');
        };
        FilesUploaderComponent.prototype.setProgress = function (progress) {
            this.progress = progress;
            this.uploader.progress = progress;
        };
        FilesUploaderComponent.prototype.deleteFile = function () {
            this.uploader.clearQueue();
            window.clearInterval(this.intervalID);
            this.setProgress(0);
            var value = '';
            this.src = value;
            this.fileChanged.emit(value);
        };
        FilesUploaderComponent.prototype.onElementClicked = function (event) {
            this.elementClicked.emit({ apiName: this.key, event: event });
        };
        FilesUploaderComponent.prototype.onClick_ChooseFile = function (event) {
            var _a;
            if ((_a = this.fileInput) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                this.fileInput.nativeElement.click();
            }
        };
        FilesUploaderComponent.prototype.onKeyPress_ChooseFile = function (event) {
            var _a;
            var e = event;
            if ([13, 32].indexOf(e.which) !== -1) {
                if ((_a = this.fileInput) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                    this.fileInput.nativeElement.click();
                }
            }
            e.preventDefault();
        };
        return FilesUploaderComponent;
    }());
    FilesUploaderComponent.ɵfac = function FilesUploaderComponent_Factory(t) { return new (t || FilesUploaderComponent)(i0.ɵɵdirectiveInject(i1$1.TranslateService), i0.ɵɵdirectiveInject(i2.DialogService), i0.ɵɵdirectiveInject(i3.CustomizationService), i0.ɵɵdirectiveInject(i3.FileService)); };
    FilesUploaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FilesUploaderComponent, selectors: [["files-uploader"]], viewQuery: function FilesUploaderComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
                i0.ɵɵviewQuery(_c1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fileInput = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.imagePreview = _t.first);
            }
        }, inputs: { key: "key", src: "src", label: "label", required: "required", disabled: "disabled", xAlignment: "xAlignment", rowSpan: "rowSpan", controlType: "controlType", sizeLimitMB: "sizeLimitMB", form: "form", standAlone: "standAlone", acceptedExtensions: "acceptedExtensions", layoutType: "layoutType" }, outputs: { fileChanged: "fileChanged", elementClicked: "elementClicked" }, decls: 5, vars: 3, consts: [["pepperiTemplate", ""], [4, "ngIf"], ["appearance", "outline", 3, "formGroup"], [1, "pepperi-file-wrapper"], [1, "pepperi-file", "body-sm", 3, "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["withImg", ""], ["noImg", ""], ["matInput", "", "type", "text", "autocomplete", "off", 1, "hidden-input", 3, "id", "name", "formControlName", "value", "disabled", "click", "keypress"], [1, "body-xs", 3, "title", "innerText"], ["mat-button", "", "class", "pepperi-button icon-button weak md delete", "tabindex", "-1", 3, "ngClass", "click", 4, "ngIf"], [1, "pepperi-file-preview", 3, "click"], ["class", "pepperi-file-preview-img", 3, "src", "max-height", "alt", "ngClass", "error", 4, "ngIf"], ["class", "ellipsis pepperi-file-message", 4, "ngIf"], ["mat-button", "", "tabindex", "-1", 1, "pepperi-button", "icon-button", "weak", "md", "delete", 3, "ngClass", "click"], ["name", "system_bin"], [1, "pepperi-file-preview-img", 3, "src", "alt", "ngClass", "error"], ["imagePreview", ""], [1, "ellipsis", "pepperi-file-message"], ["href", "javascript:void(0)", 4, "ngIf"], ["href", "javascript:void(0)"], ["name", "system_attach"], [1, "body-sm", "ellipsis"], ["name", "system_attach", 4, "ngIf"], ["name", "system_file_upload_cloud", 4, "ngIf"], ["class", "body-sm ellipsis", 4, "ngIf"], ["name", "system_file_upload_cloud"], ["tabindex", "-1", "type", "file", "accept", "acceptedExtensions", "ng2FileSelect", "", "autocomplete", "off", 3, "id", "uploader"], ["fileInput", ""], ["mat-button", "", "class", "pepperi-button icon-button weak md delete", 3, "ngClass", 4, "ngIf"], ["mat-button", "", 1, "pepperi-button", "icon-button", "weak", "md", "delete", 3, "ngClass"], ["name", "system_processing", 1, "spin-icon"], [4, "ngTemplateOutlet"]], template: function FilesUploaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FilesUploaderComponent_ng_template_0_Template, 15, 37, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(2, FilesUploaderComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
                i0.ɵɵtemplate(3, FilesUploaderComponent_ng_container_3_Template, 1, 0, "ng-container", 1);
                i0.ɵɵtemplate(4, FilesUploaderComponent_ng_container_4_Template, 1, 0, "ng-container", 1);
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
            }
        }, directives: [i4.NgIf, i5.MatFormField, i6.NgControlStatusGroup, i6.FormGroupDirective, i4.NgClass, i7.MatInput, i6.DefaultValueAccessor, i6.NgControlStatus, i6.FormControlName, i5.MatError, i8.MatButton, i9.MatIcon, i1.PepperiIconComponent, i11.FileSelectDirective, i4.NgTemplateOutlet], pipes: [i1$1.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}"], changeDetection: 0 });
    FilesUploaderComponent.ɵprov = i0.ɵɵdefineInjectable({ token: FilesUploaderComponent, factory: FilesUploaderComponent.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FilesUploaderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'files-uploader',
                        templateUrl: './files-uploader.component.html',
                        styleUrls: ['./files-uploader.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }, {
                type: i0.Injectable
            }], function () { return [{ type: i1$1.TranslateService }, { type: i2.DialogService }, { type: i3.CustomizationService }, { type: i3.FileService }]; }, { key: [{
                    type: i0.Input
                }], src: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], required: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], xAlignment: [{
                    type: i0.Input
                }], rowSpan: [{
                    type: i0.Input
                }], controlType: [{
                    type: i0.Input
                }], sizeLimitMB: [{
                    type: i0.Input
                }], form: [{
                    type: i0.Input
                }], standAlone: [{
                    type: i0.Input
                }], acceptedExtensions: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], fileChanged: [{
                    type: i0.Output
                }], elementClicked: [{
                    type: i0.Output
                }], fileInput: [{
                    type: i0.ViewChild,
                    args: ['fileInput']
                }], imagePreview: [{
                    type: i0.ViewChild,
                    args: ['imagePreview']
                }] });
    })();

    var PepperiFilesUploaderModule = /** @class */ (function () {
        function PepperiFilesUploaderModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1.pepperiIconSystemBin,
                i1.pepperiIconSystemAttach,
                i1.pepperiIconSystemFileUploadCloud,
                i1.pepperiIconSystemProcessing
            ]);
        }
        return PepperiFilesUploaderModule;
    }());
    PepperiFilesUploaderModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiFilesUploaderModule });
    PepperiFilesUploaderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiFilesUploaderModule_Factory(t) { return new (t || PepperiFilesUploaderModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
                i4.CommonModule,
                i6.ReactiveFormsModule,
                i6.FormsModule,
                // Material modules,
                core.MatCommonModule,
                i8.MatButtonModule,
                i5.MatFormFieldModule,
                i7.MatInputModule,
                i9.MatIconModule,
                // External modules
                i11.FileUploadModule,
                // Pepperi modules
                i3.PepperiModule,
                i1.PepperiIconModule,
                i2.PepperiDialogModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiFilesUploaderModule, { declarations: [FilesUploaderComponent], imports: [i4.CommonModule,
                i6.ReactiveFormsModule,
                i6.FormsModule,
                // Material modules,
                core.MatCommonModule,
                i8.MatButtonModule,
                i5.MatFormFieldModule,
                i7.MatInputModule,
                i9.MatIconModule,
                // External modules
                i11.FileUploadModule,
                // Pepperi modules
                i3.PepperiModule,
                i1.PepperiIconModule,
                i2.PepperiDialogModule], exports: [FilesUploaderComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiFilesUploaderModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i6.ReactiveFormsModule,
                            i6.FormsModule,
                            // Material modules,
                            core.MatCommonModule,
                            i8.MatButtonModule,
                            i5.MatFormFieldModule,
                            i7.MatInputModule,
                            i9.MatIconModule,
                            // External modules
                            i11.FileUploadModule,
                            // Pepperi modules
                            i3.PepperiModule,
                            i1.PepperiIconModule,
                            i2.PepperiDialogModule
                        ],
                        exports: [FilesUploaderComponent],
                        declarations: [FilesUploaderComponent],
                    }]
            }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/files-uploader
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FilesUploaderComponent = FilesUploaderComponent;
    exports.PepperiFilesUploaderModule = PepperiFilesUploaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-files-uploader.umd.js.map
