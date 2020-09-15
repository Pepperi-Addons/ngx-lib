(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/form-field'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/field-title'), require('@pepperi-addons/ngx-lib/files-uploader')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/attachment', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/core', '@angular/material/form-field', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/field-title', '@pepperi-addons/ngx-lib/files-uploader'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].attachment = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.core, global.ng.material.formField, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib']['field-title'], global['pepperi-addons']['ngx-lib']['files-uploader']));
}(this, (function (exports, i0, i2, forms, core, formField, i1, i4, i3) { 'use strict';

    function PepperiAttachmentComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "files-uploader", 3);
            i0.ɵɵlistener("fileChanged", function PepperiAttachmentComponent_ng_template_0_Template_files_uploader_fileChanged_0_listener($event) { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onFileChanged($event); })("elementClicked", function PepperiAttachmentComponent_ng_template_0_Template_files_uploader_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r8_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onFileClicked($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("key", ctx_r1.key)("src", ctx_r1.src)("label", ctx_r1.label)("required", ctx_r1.required)("disabled", ctx_r1.disabled)("xAlignment", ctx_r1.xAlignment)("rowSpan", ctx_r1.rowSpan)("controlType", ctx_r1.controlType)("form", ctx_r1.form)("layoutType", ctx_r1.layoutType)("standAlone", ctx_r1.standAlone)("acceptedExtensions", ctx_r1.acceptAttachmentType);
        }
    }
    function PepperiAttachmentComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiAttachmentComponent_ng_template_2_ng_template_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 9);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r15 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r15.src);
            i0.ɵɵpropertyInterpolate("href", ctx_r15.src, i0.ɵɵsanitizeUrl);
            i0.ɵɵproperty("id", ctx_r15.key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r15.src);
        }
    }
    function PepperiAttachmentComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, PepperiAttachmentComponent_ng_template_2_ng_template_1_a_1_Template, 2, 4, "a", 8);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r12 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r12.src != null);
        }
    }
    function PepperiAttachmentComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function PepperiAttachmentComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiAttachmentComponent_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(1, PepperiAttachmentComponent_ng_template_2_ng_template_1_Template, 2, 1, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, PepperiAttachmentComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r11 = i0.ɵɵreference(2);
            var _r13 = i0.ɵɵreference(4);
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", (ctx_r3.src == null ? null : ctx_r3.src.length) > 0)("ngIfThen", _r11)("ngIfElse", _r13);
        }
    }
    function PepperiAttachmentComponent_ng_container_4_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c0 = function (a0, a1) { return { "one-row": a0, "stand-alone": a1 }; };
    function PepperiAttachmentComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 10);
            i0.ɵɵelement(2, "pep-field-title", 11);
            i0.ɵɵtemplate(3, PepperiAttachmentComponent_ng_container_4_ng_container_3_Template, 1, 0, "ng-container", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c0, ctx_r4.rowSpan == 1, ctx_r4.standAlone));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", ctx_r4.label)("required", ctx_r4.required)("disabled", ctx_r4.disabled)("xAlignment", ctx_r4.xAlignment)("showTitle", ctx_r4.showTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiAttachmentComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiAttachmentComponent_ng_container_5_ng_template_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiAttachmentComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 10);
            i0.ɵɵtemplate(1, PepperiAttachmentComponent_ng_container_5_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 12);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r19 = i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0, ctx_r19.rowSpan == 1, ctx_r19.standAlone));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiAttachmentComponent_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiAttachmentComponent_ng_container_5_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiAttachmentComponent_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 12);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵproperty("ngTemplateOutlet", _r2);
        }
    }
    function PepperiAttachmentComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiAttachmentComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(2, PepperiAttachmentComponent_ng_container_5_ng_template_2_Template, 2, 5, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiAttachmentComponent_ng_container_5_ng_template_4_Template, 1, 1, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r18 = i0.ɵɵreference(3);
            var _r20 = i0.ɵɵreference(5);
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", false && ctx_r5.isActive && !ctx_r5.disabled)("ngIfThen", _r18)("ngIfElse", _r20);
        }
    }
    function PepperiAttachmentComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiAttachmentComponent_ng_container_6_ng_template_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiAttachmentComponent_ng_container_6_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 15);
            i0.ɵɵtemplate(1, PepperiAttachmentComponent_ng_container_6_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 12);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiAttachmentComponent_ng_container_6_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiAttachmentComponent_ng_container_6_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiAttachmentComponent_ng_container_6_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 12);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵproperty("ngTemplateOutlet", _r2);
        }
    }
    function PepperiAttachmentComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiAttachmentComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 4);
            i0.ɵɵtemplate(2, PepperiAttachmentComponent_ng_container_6_ng_template_2_Template, 2, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiAttachmentComponent_ng_container_6_ng_template_4_Template, 1, 1, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r25 = i0.ɵɵreference(3);
            var _r27 = i0.ɵɵreference(5);
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", false && ctx_r6.isActive && !ctx_r6.disabled)("ngIfThen", _r25)("ngIfElse", _r27);
        }
    }
    var PepperiAttachmentComponent = /** @class */ (function () {
        function PepperiAttachmentComponent(customizationService, renderer, element, fileService) {
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
            this.layoutType = i1.LAYOUT_TYPE.PepperiForm;
            this.isActive = false;
            this.valueChanged = new i0.EventEmitter();
            this.elementClicked = new i0.EventEmitter();
            this.LAYOUT_TYPE = i1.LAYOUT_TYPE;
            this.fieldHeight = '';
            this.standAlone = false;
            this.dataURI = null;
            this.acceptAttachmentType = 'application/pdf,application/json,text/csv,text/csv-schema,application/msword,application/vnd.ms-excel,text/plain,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/bmp,image/jpg, image/jpeg, image/png, image/tif, image/tiff, txt, json';
        }
        PepperiAttachmentComponent.prototype.ngOnDestroy = function () {
            if (this.elementClicked) {
                this.elementClicked.unsubscribe();
            }
            if (this.valueChanged) {
                this.valueChanged.unsubscribe();
            }
        };
        PepperiAttachmentComponent.prototype.ngOnInit = function () {
            if (this.form === null) {
                this.standAlone = true;
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.src, this.required, this.readonly, this.disabled);
                this.renderer.addClass(this.element.nativeElement, i1.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
            }
            this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);
        };
        PepperiAttachmentComponent.prototype.ngOnChanges = function (changes) {
            if (changes.src && changes.src.currentValue.length > 0) {
                // Empty dataURI if there is change in the src.
                this.dataURI = null;
            }
        };
        PepperiAttachmentComponent.prototype.onFileChanged = function (value) {
            this.dataURI = value.length > 0 ? JSON.parse(value) : null;
            this.src = this.dataURI ? this.dataURI.fileStr : '';
            this.customizationService.updateFormFieldValue(this.form, this.key, this.dataURI ? this.dataURI.fileExt : '');
            this.valueChanged.emit({ apiName: this.key, value: value, controlType: this.controlType });
        };
        PepperiAttachmentComponent.prototype.onFileClicked = function (event) {
            if (this.dataURI != null) {
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
                if (this.fileService.isValidUrl(this.src)) {
                    var win = window.open('', '_blank');
                    win.location.href = this.src;
                }
            }
            this.elementClicked.emit({ apiName: this.key, eventWhich: event.which });
        };
        return PepperiAttachmentComponent;
    }());
    PepperiAttachmentComponent.ɵfac = function PepperiAttachmentComponent_Factory(t) { return new (t || PepperiAttachmentComponent)(i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FileService)); };
    PepperiAttachmentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiAttachmentComponent, selectors: [["pep-attachment"]], inputs: { key: "key", src: "src", label: "label", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", form: "form", showTitle: "showTitle", layoutType: "layoutType", isActive: "isActive" }, outputs: { valueChanged: "valueChanged", elementClicked: "elementClicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 3, consts: [["pepperiTemplate", ""], ["pepperiReadonlyTemplate", ""], [4, "ngIf"], [3, "key", "src", "label", "required", "disabled", "xAlignment", "rowSpan", "controlType", "form", "layoutType", "standAlone", "acceptedExtensions", "fileChanged", "elementClicked"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["notEmptyBlock", ""], ["emptyBlock", ""], [1, "pepperi-file-container"], ["class", "color-link body-sm pepperi-card-input ", "target", "_blank", 3, "id", "title", "href", 4, "ngIf"], ["target", "_blank", 1, "color-link", "body-sm", "pepperi-card-input", 3, "id", "title", "href"], [1, "pepperi-file-container", 3, "ngClass"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], [4, "ngTemplateOutlet"], ["selectedBlock", ""], ["notSelectedBlock", ""], [1, "pepperi-file-container", "one-row"]], template: function PepperiAttachmentComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PepperiAttachmentComponent_ng_template_0_Template, 1, 12, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(2, PepperiAttachmentComponent_ng_template_2_Template, 5, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(4, PepperiAttachmentComponent_ng_container_4_Template, 4, 10, "ng-container", 2);
                i0.ɵɵtemplate(5, PepperiAttachmentComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
                i0.ɵɵtemplate(6, PepperiAttachmentComponent_ng_container_6_Template, 6, 3, "ng-container", 2);
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
            }
        }, directives: [i2.NgIf, i3.FilesUploaderComponent, i2.NgClass, i4.PepperiFieldTitleComponent, i2.NgTemplateOutlet], styles: ["[_nghost-%COMP%]{display:block}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiAttachmentComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-attachment',
                        templateUrl: './attachment.component.html',
                        styleUrls: ['./attachment.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i1.CustomizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.FileService }]; }, { key: [{
                    type: i0.Input
                }], src: [{
                    type: i0.Input
                }], label: [{
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
                }], form: [{
                    type: i0.Input
                }], showTitle: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], isActive: [{
                    type: i0.Input
                }], valueChanged: [{
                    type: i0.Output
                }], elementClicked: [{
                    type: i0.Output
                }] });
    })();

    var PepperiAttachmentModule = /** @class */ (function () {
        function PepperiAttachmentModule() {
        }
        return PepperiAttachmentModule;
    }());
    PepperiAttachmentModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiAttachmentModule });
    PepperiAttachmentModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiAttachmentModule_Factory(t) { return new (t || PepperiAttachmentModule)(); }, imports: [[
                i2.CommonModule,
                forms.ReactiveFormsModule,
                forms.FormsModule,
                // Material modules
                core.MatCommonModule,
                formField.MatFormFieldModule,
                // Pepperi modules
                i1.PepperiModule,
                i4.PepperiFieldTitleModule,
                i3.PepperiFilesUploaderModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiAttachmentModule, { declarations: [PepperiAttachmentComponent], imports: [i2.CommonModule,
                forms.ReactiveFormsModule,
                forms.FormsModule,
                // Material modules
                core.MatCommonModule,
                formField.MatFormFieldModule,
                // Pepperi modules
                i1.PepperiModule,
                i4.PepperiFieldTitleModule,
                i3.PepperiFilesUploaderModule], exports: [PepperiAttachmentComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiAttachmentModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CommonModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule,
                            // Material modules
                            core.MatCommonModule,
                            formField.MatFormFieldModule,
                            // Pepperi modules
                            i1.PepperiModule,
                            i4.PepperiFieldTitleModule,
                            i3.PepperiFilesUploaderModule
                        ],
                        exports: [PepperiAttachmentComponent],
                        declarations: [PepperiAttachmentComponent],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ngx-lib/attachment
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiAttachmentComponent = PepperiAttachmentComponent;
    exports.PepperiAttachmentModule = PepperiAttachmentModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-attachment.umd.js.map
