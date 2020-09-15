import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵelement, ɵɵproperty, ɵɵpipe, ɵɵpipeBind1, ɵɵsanitizeHtml, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵtextInterpolate1, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdirectiveInject, ɵɵdefineComponent, Component, ViewEncapsulation, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDialogConfig, MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogTitle, MatDialogClose, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { LayoutService, SafeHtmlPipe, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconSystemClose, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { Overlay } from '@angular/cdk/overlay';
import { TranslatePipe } from '@ngx-translate/core';

function PepperiDefaultDialogComponent_h2_0_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.data == null ? null : ctx_r4.data.title);
} }
function PepperiDefaultDialogComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h2", 5);
    ɵɵtemplate(1, PepperiDefaultDialogComponent_h2_0_span_1_Template, 2, 1, "span", 6);
    ɵɵelementStart(2, "button", 7);
    ɵɵelementStart(3, "mat-icon");
    ɵɵelement(4, "pep-icon", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.title == null ? null : ctx_r0.data.title.length);
    ɵɵadvance(1);
    ɵɵproperty("mat-dialog-close", null);
} }
function PepperiDefaultDialogComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 10);
    ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerHtml", ɵɵpipeBind1(1, 1, ctx_r1.data == null ? null : ctx_r1.data.content), ɵɵsanitizeHtml);
} }
function PepperiDefaultDialogComponent_textarea_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "textarea", 11);
    ɵɵlistener("blur", function PepperiDefaultDialogComponent_textarea_3_Template_textarea_blur_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.updateContent($event); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("readonly", ctx_r2.data == null ? null : ctx_r2.data.contentData == null ? null : ctx_r2.data.contentData.disabled)("name", ctx_r2.data == null ? null : ctx_r2.data.contentData == null ? null : ctx_r2.data.contentData.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.data == null ? null : ctx_r2.data.content);
} }
function PepperiDefaultDialogComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12);
    ɵɵelementStart(1, "div", 13);
    ɵɵelementStart(2, "button", 14);
    ɵɵlistener("click", function PepperiDefaultDialogComponent_div_4_Template_button_click_2_listener() { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.save(); });
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 15);
    ɵɵtext(6);
    ɵɵpipe(7, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "ACTIONS.SAVE"), " ");
    ɵɵadvance(2);
    ɵɵproperty("mat-dialog-close", null);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 5, "ACTIONS.CANCEL"), " ");
} }
var DialogDataType;
(function (DialogDataType) {
    DialogDataType[DialogDataType["Text"] = 0] = "Text";
    DialogDataType[DialogDataType["TextArea"] = 1] = "TextArea";
    DialogDataType[DialogDataType["Html"] = 2] = "Html";
    DialogDataType[DialogDataType["Iframe"] = 3] = "Iframe";
})(DialogDataType || (DialogDataType = {}));
class DialogData {
    constructor(options) {
        this.title = '';
        this.contentType = DialogDataType.Text;
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
}
class DialogService {
    constructor(dialog, layoutService, overlay) {
        this.dialog = dialog;
        this.layoutService = layoutService;
        this.overlay = overlay;
    }
    getDialogConfig(options = {}) {
        const dialogConfig = new MatDialogConfig();
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
    }
    openDefaultDialog(data, config = null) {
        if (!config) {
            config = this.getDialogConfig();
        }
        config.data = data;
        const dialogRef = this.dialog.open(PepperiDefaultDialogComponent, config);
        return dialogRef;
    }
    openDialog(componentOrTemplateRef, data = {}, config = null) {
        if (!config) {
            config = this.getDialogConfig();
        }
        config.data = data;
        const dialogRef = this.dialog.open(componentOrTemplateRef, config);
        return dialogRef;
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(ɵɵinject(MatDialog), ɵɵinject(LayoutService), ɵɵinject(Overlay)); };
DialogService.ɵprov = ɵɵdefineInjectable({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: MatDialog }, { type: LayoutService }, { type: Overlay }]; }, null); })();
class PepperiDefaultDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.DialogDataType = DialogDataType;
    }
    save() {
        this.dialogRef.close(this.data ? this.data.content : '');
    }
    updateContent(e) {
        this.data.content = e.target ? e.target.value : (e.currentTarget ? e.currentTarget.value : '');
    }
}
PepperiDefaultDialogComponent.ɵfac = function PepperiDefaultDialogComponent_Factory(t) { return new (t || PepperiDefaultDialogComponent)(ɵɵdirectiveInject(MAT_DIALOG_DATA), ɵɵdirectiveInject(MatDialogRef)); };
PepperiDefaultDialogComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiDefaultDialogComponent, selectors: [["ng-component"]], decls: 5, vars: 4, consts: [["mat-dialog-title", "", "class", "pepperi-border-bottom", 4, "ngIf"], ["mat-dialog-content", ""], [3, "innerHtml", 4, "ngIf"], [3, "readonly", "name", "blur", 4, "ngIf"], ["mat-dialog-actions", "", "class", "pepperi-border-top", 4, "ngIf"], ["mat-dialog-title", "", 1, "pepperi-border-bottom"], ["class", "pull-left flip", 4, "ngIf"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], [1, "pull-left", "flip"], [3, "innerHtml"], [3, "readonly", "name", "blur"], ["mat-dialog-actions", "", 1, "pepperi-border-top"], [1, "spacing-element-negative"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "strong", "pull-right", "flip", 3, "click"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"]], template: function PepperiDefaultDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PepperiDefaultDialogComponent_h2_0_Template, 5, 2, "h2", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵtemplate(2, PepperiDefaultDialogComponent_span_2_Template, 2, 3, "span", 2);
        ɵɵtemplate(3, PepperiDefaultDialogComponent_textarea_3_Template, 2, 3, "textarea", 3);
        ɵɵelementEnd();
        ɵɵtemplate(4, PepperiDefaultDialogComponent_div_4_Template, 8, 7, "div", 4);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.data == null ? null : ctx.data.showHeader);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", (ctx.data == null ? null : ctx.data.contentType) === ctx.DialogDataType.Text || (ctx.data == null ? null : ctx.data.contentType) === ctx.DialogDataType.Html);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", (ctx.data == null ? null : ctx.data.contentType) === ctx.DialogDataType.TextArea);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.data == null ? null : ctx.data.showFooter);
    } }, directives: [NgIf, MatDialogContent, MatDialogTitle, MatButton, MatDialogClose, MatIcon, PepperiIconComponent, MatDialogActions], pipes: [SafeHtmlPipe, TranslatePipe], styles: [".mat-dialog-content{padding:0!important}.mat-dialog-content span{padding:var(--pep-spacing-md,.75rem) 0;width:100%}.mat-dialog-content textarea{border:none;height:13rem;padding:var(--pep-spacing-lg,1rem) var(--pep-spacing-sm,.5rem);resize:none;width:25rem}.mat-dialog-content textarea:focus{outline:none}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiDefaultDialogComponent, [{
        type: Component,
        args: [{
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: DialogData, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: MatDialogRef }]; }, null); })();

class PepperiDialogModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemClose
        ]);
    }
}
PepperiDialogModule.ɵmod = ɵɵdefineNgModule({ type: PepperiDialogModule });
PepperiDialogModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiDialogModule_Factory(t) { return new (t || PepperiDialogModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            // Material modules,
            MatCommonModule,
            MatButtonModule,
            MatIconModule,
            MatDialogModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiDialogModule, { declarations: [PepperiDefaultDialogComponent], imports: [CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        // Material modules,
        MatCommonModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiDialogModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    // Material modules,
                    MatCommonModule,
                    MatButtonModule,
                    MatIconModule,
                    MatDialogModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule
                ],
                exports: [],
                declarations: [PepperiDefaultDialogComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/dialog
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DialogData, DialogDataType, DialogService, PepperiDefaultDialogComponent, PepperiDialogModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-dialog.js.map
