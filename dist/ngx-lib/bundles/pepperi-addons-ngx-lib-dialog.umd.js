(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/material/core'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/dialog'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@angular/cdk/overlay'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/dialog', ['exports', '@angular/core', '@angular/common', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/material/core', '@angular/material/button', '@angular/material/icon', '@angular/material/dialog', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@angular/cdk/overlay', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].dialog = {}), global.ng.core, global.ng.common, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.material.core, global.ng.material.button, global.ng.material.icon, global.ng.material.dialog, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global.ng.cdk.overlay, global.translate));
}(this, (function (exports, i0, i4, platformBrowser, animations, core, i5, i6, i1, i2, i1$1, i3, i8) { 'use strict';

    function PepperiDefaultDialogComponent_h2_0_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 9);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r4.data == null ? null : ctx_r4.data.title);
        }
    }
    function PepperiDefaultDialogComponent_h2_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "h2", 5);
            i0.ɵɵtemplate(1, PepperiDefaultDialogComponent_h2_0_span_1_Template, 2, 1, "span", 6);
            i0.ɵɵelementStart(2, "button", 7);
            i0.ɵɵelementStart(3, "mat-icon");
            i0.ɵɵelement(4, "pep-icon", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.title == null ? null : ctx_r0.data.title.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("mat-dialog-close", null);
        }
    }
    function PepperiDefaultDialogComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 10);
            i0.ɵɵpipe(1, "safeHtml");
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("innerHtml", i0.ɵɵpipeBind1(1, 1, ctx_r1.data == null ? null : ctx_r1.data.content), i0.ɵɵsanitizeHtml);
        }
    }
    function PepperiDefaultDialogComponent_textarea_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "textarea", 11);
            i0.ɵɵlistener("blur", function PepperiDefaultDialogComponent_textarea_3_Template_textarea_blur_0_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.updateContent($event); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("readonly", ctx_r2.data == null ? null : ctx_r2.data.contentData == null ? null : ctx_r2.data.contentData.disabled)("name", ctx_r2.data == null ? null : ctx_r2.data.contentData == null ? null : ctx_r2.data.contentData.key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r2.data == null ? null : ctx_r2.data.content);
        }
    }
    function PepperiDefaultDialogComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵelementStart(1, "div", 13);
            i0.ɵɵelementStart(2, "button", 14);
            i0.ɵɵlistener("click", function PepperiDefaultDialogComponent_div_4_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.save(); });
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 15);
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, "ACTIONS.SAVE"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("mat-dialog-close", null);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 5, "ACTIONS.CANCEL"), " ");
        }
    }
    (function (DialogDataType) {
        DialogDataType[DialogDataType["Text"] = 0] = "Text";
        DialogDataType[DialogDataType["TextArea"] = 1] = "TextArea";
        DialogDataType[DialogDataType["Html"] = 2] = "Html";
        DialogDataType[DialogDataType["Iframe"] = 3] = "Iframe";
    })(exports.DialogDataType || (exports.DialogDataType = {}));
    var DialogData = /** @class */ (function () {
        function DialogData(options) {
            this.title = '';
            this.contentType = exports.DialogDataType.Text;
            this.showHeader = true;
            this.showFooter = false;
            this.title = options.title || '';
            this.content = options.content || '';
            this.contentType = options.contentType;
            this.contentData = options.contentData || {};
            this.showHeader = options.showHeader === undefined ? true : options.showHeader;
            this.showFooter = options.showFooter === undefined ? true : options.showFooter;
            // this.actionButtons = actionButtons;
            // this.showLoadingSpinner = showLoadingSpinner;
        }
        return DialogData;
    }());
    var DialogService = /** @class */ (function () {
        function DialogService(dialog, layoutService, overlay) {
            this.dialog = dialog;
            this.layoutService = layoutService;
            this.overlay = overlay;
        }
        DialogService.prototype.getDialogConfig = function (options) {
            if (options === void 0) { options = {}; }
            var dialogConfig = new i1.MatDialogConfig();
            dialogConfig.autoFocus = false;
            dialogConfig.direction = this.layoutService.isRtl() ? 'rtl' : 'ltr';
            dialogConfig.disableClose = options.disableClose || false;
            dialogConfig.height = options.height || 'auto';
            dialogConfig.maxWidth = options.maxWidth || '100vw';
            dialogConfig.maxHeight = options.maxHeight || '100vh';
            dialogConfig.minWidth = options.minWidth || '0';
            dialogConfig.panelClass = ['pepperi-dialog', options.panelClass || ''];
            dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop();
            return dialogConfig;
        };
        DialogService.prototype.openDefaultDialog = function (data, config) {
            if (config === void 0) { config = null; }
            if (!config) {
                config = this.getDialogConfig();
            }
            config.data = data;
            var dialogRef = this.dialog.open(PepperiDefaultDialogComponent, config);
            return dialogRef;
        };
        DialogService.prototype.openDialog = function (componentOrTemplateRef, data, config) {
            if (data === void 0) { data = {}; }
            if (config === void 0) { config = null; }
            if (!config) {
                config = this.getDialogConfig();
            }
            config.data = data;
            var dialogRef = this.dialog.open(componentOrTemplateRef, config);
            return dialogRef;
        };
        return DialogService;
    }());
    DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(i0.ɵɵinject(i1.MatDialog), i0.ɵɵinject(i2.LayoutService), i0.ɵɵinject(i3.Overlay)); };
    DialogService.ɵprov = i0.ɵɵdefineInjectable({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DialogService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1.MatDialog }, { type: i2.LayoutService }, { type: i3.Overlay }]; }, null);
    })();
    var PepperiDefaultDialogComponent = /** @class */ (function () {
        function PepperiDefaultDialogComponent(data, dialogRef) {
            this.data = data;
            this.dialogRef = dialogRef;
            this.DialogDataType = exports.DialogDataType;
        }
        PepperiDefaultDialogComponent.prototype.save = function () {
            this.dialogRef.close(this.data ? this.data.content : '');
        };
        PepperiDefaultDialogComponent.prototype.updateContent = function (e) {
            this.data.content = e.target ? e.target.value : (e.currentTarget ? e.currentTarget.value : '');
        };
        return PepperiDefaultDialogComponent;
    }());
    PepperiDefaultDialogComponent.ɵfac = function PepperiDefaultDialogComponent_Factory(t) { return new (t || PepperiDefaultDialogComponent)(i0.ɵɵdirectiveInject(i1.MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
    PepperiDefaultDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiDefaultDialogComponent, selectors: [["ng-component"]], decls: 5, vars: 4, consts: [["mat-dialog-title", "", "class", "pepperi-border-bottom", 4, "ngIf"], ["mat-dialog-content", ""], [3, "innerHtml", 4, "ngIf"], [3, "readonly", "name", "blur", 4, "ngIf"], ["mat-dialog-actions", "", "class", "pepperi-border-top", 4, "ngIf"], ["mat-dialog-title", "", 1, "pepperi-border-bottom"], ["class", "pull-left flip", 4, "ngIf"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], [1, "pull-left", "flip"], [3, "innerHtml"], [3, "readonly", "name", "blur"], ["mat-dialog-actions", "", 1, "pepperi-border-top"], [1, "spacing-element-negative"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "strong", "pull-right", "flip", 3, "click"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"]], template: function PepperiDefaultDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PepperiDefaultDialogComponent_h2_0_Template, 5, 2, "h2", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵtemplate(2, PepperiDefaultDialogComponent_span_2_Template, 2, 3, "span", 2);
                i0.ɵɵtemplate(3, PepperiDefaultDialogComponent_textarea_3_Template, 2, 3, "textarea", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, PepperiDefaultDialogComponent_div_4_Template, 8, 7, "div", 4);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.data == null ? null : ctx.data.showHeader);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", (ctx.data == null ? null : ctx.data.contentType) === ctx.DialogDataType.Text || (ctx.data == null ? null : ctx.data.contentType) === ctx.DialogDataType.Html);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", (ctx.data == null ? null : ctx.data.contentType) === ctx.DialogDataType.TextArea);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.data == null ? null : ctx.data.showFooter);
            }
        }, directives: [i4.NgIf, i1.MatDialogContent, i1.MatDialogTitle, i5.MatButton, i1.MatDialogClose, i6.MatIcon, i1$1.PepperiIconComponent, i1.MatDialogActions], pipes: [i2.SafeHtmlPipe, i8.TranslatePipe], styles: [".mat-dialog-content{padding:0!important}.mat-dialog-content span{padding:var(--pep-spacing-md,.75rem) 0;width:100%}.mat-dialog-content textarea{border:none;height:13rem;padding:var(--pep-spacing-lg,1rem) var(--pep-spacing-sm,.5rem);resize:none;width:25rem}.mat-dialog-content textarea:focus{outline:none}"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiDefaultDialogComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './dialog.component.html',
                        styleUrls: ['./dialog.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () {
            return [{ type: DialogData, decorators: [{
                            type: i0.Inject,
                            args: [i1.MAT_DIALOG_DATA]
                        }] }, { type: i1.MatDialogRef }];
        }, null);
    })();

    var PepperiDialogModule = /** @class */ (function () {
        function PepperiDialogModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1$1.pepperiIconSystemClose
            ]);
        }
        return PepperiDialogModule;
    }());
    PepperiDialogModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiDialogModule });
    PepperiDialogModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiDialogModule_Factory(t) { return new (t || PepperiDialogModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
                i4.CommonModule,
                platformBrowser.BrowserModule,
                animations.BrowserAnimationsModule,
                // Material modules,
                core.MatCommonModule,
                i5.MatButtonModule,
                i6.MatIconModule,
                i1.MatDialogModule,
                // Pepperi modules
                i2.PepperiModule,
                i1$1.PepperiIconModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiDialogModule, { declarations: [PepperiDefaultDialogComponent], imports: [i4.CommonModule,
                platformBrowser.BrowserModule,
                animations.BrowserAnimationsModule,
                // Material modules,
                core.MatCommonModule,
                i5.MatButtonModule,
                i6.MatIconModule,
                i1.MatDialogModule,
                // Pepperi modules
                i2.PepperiModule,
                i1$1.PepperiIconModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiDialogModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            platformBrowser.BrowserModule,
                            animations.BrowserAnimationsModule,
                            // Material modules,
                            core.MatCommonModule,
                            i5.MatButtonModule,
                            i6.MatIconModule,
                            i1.MatDialogModule,
                            // Pepperi modules
                            i2.PepperiModule,
                            i1$1.PepperiIconModule
                        ],
                        exports: [],
                        declarations: [PepperiDefaultDialogComponent],
                    }]
            }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/dialog
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DialogData = DialogData;
    exports.DialogService = DialogService;
    exports.PepperiDefaultDialogComponent = PepperiDefaultDialogComponent;
    exports.PepperiDialogModule = PepperiDialogModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-dialog.umd.js.map
