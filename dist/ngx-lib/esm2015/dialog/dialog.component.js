import { Component, Inject, ViewEncapsulation, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@pepperi-addons/ngx-lib";
import * as i3 from "@angular/cdk/overlay";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
import * as i7 from "@pepperi-addons/ngx-lib/icon";
import * as i8 from "@ngx-translate/core";
function PepperiDefaultDialogComponent_h2_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.data == null ? null : ctx_r4.data.title);
} }
function PepperiDefaultDialogComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 5);
    i0.ɵɵtemplate(1, PepperiDefaultDialogComponent_h2_0_span_1_Template, 2, 1, "span", 6);
    i0.ɵɵelementStart(2, "button", 7);
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵelement(4, "pep-icon", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.title == null ? null : ctx_r0.data.title.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mat-dialog-close", null);
} }
function PepperiDefaultDialogComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 10);
    i0.ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", i0.ɵɵpipeBind1(1, 1, ctx_r1.data == null ? null : ctx_r1.data.content), i0.ɵɵsanitizeHtml);
} }
function PepperiDefaultDialogComponent_textarea_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 11);
    i0.ɵɵlistener("blur", function PepperiDefaultDialogComponent_textarea_3_Template_textarea_blur_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.updateContent($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("readonly", ctx_r2.data == null ? null : ctx_r2.data.contentData == null ? null : ctx_r2.data.contentData.disabled)("name", ctx_r2.data == null ? null : ctx_r2.data.contentData == null ? null : ctx_r2.data.contentData.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.data == null ? null : ctx_r2.data.content);
} }
function PepperiDefaultDialogComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "div", 13);
    i0.ɵɵelementStart(2, "button", 14);
    i0.ɵɵlistener("click", function PepperiDefaultDialogComponent_div_4_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.save(); });
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 15);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, "ACTIONS.SAVE"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("mat-dialog-close", null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 5, "ACTIONS.CANCEL"), " ");
} }
export var DialogDataType;
(function (DialogDataType) {
    DialogDataType[DialogDataType["Text"] = 0] = "Text";
    DialogDataType[DialogDataType["TextArea"] = 1] = "TextArea";
    DialogDataType[DialogDataType["Html"] = 2] = "Html";
    DialogDataType[DialogDataType["Iframe"] = 3] = "Iframe";
})(DialogDataType || (DialogDataType = {}));
export class DialogData {
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
export class DialogService {
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
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(i0.ɵɵinject(i1.MatDialog), i0.ɵɵinject(i2.LayoutService), i0.ɵɵinject(i3.Overlay)); };
DialogService.ɵprov = i0.ɵɵdefineInjectable({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MatDialog }, { type: i2.LayoutService }, { type: i3.Overlay }]; }, null); })();
export class PepperiDefaultDialogComponent {
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
PepperiDefaultDialogComponent.ɵfac = function PepperiDefaultDialogComponent_Factory(t) { return new (t || PepperiDefaultDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
PepperiDefaultDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiDefaultDialogComponent, selectors: [["ng-component"]], decls: 5, vars: 4, consts: [["mat-dialog-title", "", "class", "pepperi-border-bottom", 4, "ngIf"], ["mat-dialog-content", ""], [3, "innerHtml", 4, "ngIf"], [3, "readonly", "name", "blur", 4, "ngIf"], ["mat-dialog-actions", "", "class", "pepperi-border-top", 4, "ngIf"], ["mat-dialog-title", "", 1, "pepperi-border-bottom"], ["class", "pull-left flip", 4, "ngIf"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], [1, "pull-left", "flip"], [3, "innerHtml"], [3, "readonly", "name", "blur"], ["mat-dialog-actions", "", 1, "pepperi-border-top"], [1, "spacing-element-negative"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "strong", "pull-right", "flip", 3, "click"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"]], template: function PepperiDefaultDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PepperiDefaultDialogComponent_h2_0_Template, 5, 2, "h2", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, PepperiDefaultDialogComponent_span_2_Template, 2, 3, "span", 2);
        i0.ɵɵtemplate(3, PepperiDefaultDialogComponent_textarea_3_Template, 2, 3, "textarea", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, PepperiDefaultDialogComponent_div_4_Template, 8, 7, "div", 4);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.data == null ? null : ctx.data.showHeader);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (ctx.data == null ? null : ctx.data.contentType) === ctx.DialogDataType.Text || (ctx.data == null ? null : ctx.data.contentType) === ctx.DialogDataType.Html);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.data == null ? null : ctx.data.contentType) === ctx.DialogDataType.TextArea);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data == null ? null : ctx.data.showFooter);
    } }, directives: [i4.NgIf, i1.MatDialogContent, i1.MatDialogTitle, i5.MatButton, i1.MatDialogClose, i6.MatIcon, i7.PepperiIconComponent, i1.MatDialogActions], pipes: [i2.SafeHtmlPipe, i8.TranslatePipe], styles: [".mat-dialog-content{padding:0!important}.mat-dialog-content span{padding:var(--pep-spacing-md,.75rem) 0;width:100%}.mat-dialog-content textarea{border:none;height:13rem;padding:var(--pep-spacing-lg,1rem) var(--pep-spacing-sm,.5rem);resize:none;width:25rem}.mat-dialog-content textarea:focus{outline:none}"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiDefaultDialogComponent, [{
        type: Component,
        args: [{
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: DialogData, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxlQUFlLEVBQTJCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7OztJQ0FqRywrQkFBeUQ7SUFBQSxZQUFpQjtJQUFBLGlCQUFPOzs7SUFBeEIsZUFBaUI7SUFBakIsb0VBQWlCOzs7SUFEOUUsNkJBQ0k7SUFBQSxxRkFBeUQ7SUFDekQsaUNBQ0k7SUFBQSxnQ0FDSTtJQUFBLDhCQUNXO0lBQ2YsaUJBQVc7SUFDZixpQkFBUztJQUNiLGlCQUFLOzs7SUFQNEIsZUFBMkI7SUFBM0IsK0dBQTJCO0lBQ3JDLGVBQXlCO0lBQXpCLHVDQUF5Qjs7O0lBUTVDLDJCQUNrRDs7OztJQUE5QyxxSEFBc0M7Ozs7SUFDMUMsb0NBQ29FO0lBQWhDLHFOQUErQjtJQUFDLFlBQW1CO0lBQUEsaUJBQVc7OztJQURsQyxpSUFBd0MsMkdBQUE7SUFDcEMsZUFBbUI7SUFBbkIsc0VBQW1COzs7O0lBRTNGLCtCQUNJO0lBQUEsK0JBQ0k7SUFBQSxrQ0FDSTtJQURnRiwyTEFBZ0I7SUFDaEcsWUFDSjs7SUFBQSxpQkFBUztJQUNULGtDQUNJO0lBQUEsWUFDSjs7SUFBQSxpQkFBUztJQUNiLGlCQUFNO0lBQ1YsaUJBQU07O0lBTk0sZUFDSjtJQURJLHFFQUNKO0lBQ21CLGVBQXlCO0lBQXpCLHVDQUF5QjtJQUN4QyxlQUNKO0lBREksdUVBQ0o7O0FEakJSLE1BQU0sQ0FBTixJQUFZ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QkFBNkIsdUJBSTFCLGVBQWU7a0VBSmxCLDZCQUE2QjtRQzlHMUMsNEVBQ0k7UUFRSiw4QkFDSTtRQUFBLGdGQUMyQztRQUMzQyx3RkFDb0U7UUFDeEUsaUJBQU07UUFDTiw4RUFDSTs7UUFoQmlCLG9FQUF3QjtRQVVuQyxlQUE4RjtRQUE5RixtTEFBOEY7UUFFMUYsZUFBcUQ7UUFBckQsdUdBQXFEO1FBRzNDLGVBQXdCO1FBQXhCLG9FQUF3Qjs7a0REK0ZuQyw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNQLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN4QztzQ0FLNkMsVUFBVTtzQkFBL0MsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nLCBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBDb21wb25lbnRUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5cclxuZXhwb3J0IGVudW0gRGlhbG9nRGF0YVR5cGUge1xyXG4gICAgVGV4dCxcclxuICAgIFRleHRBcmVhLFxyXG4gICAgSHRtbCxcclxuICAgIElmcmFtZVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbG9nRGF0YSB7XHJcbiAgICB0aXRsZSA9ICcnO1xyXG4gICAgY29udGVudDogYW55O1xyXG4gICAgY29udGVudFR5cGU6IERpYWxvZ0RhdGFUeXBlID0gRGlhbG9nRGF0YVR5cGUuVGV4dDtcclxuICAgIGNvbnRlbnREYXRhPzogYW55O1xyXG4gICAgc2hvd0hlYWRlciA9IHRydWU7XHJcbiAgICBzaG93Rm9vdGVyID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICB0aXRsZT86IHN0cmluZyxcclxuICAgICAgICAgICAgY29udGVudD86IGFueSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IERpYWxvZ0RhdGFUeXBlLFxyXG4gICAgICAgICAgICBjb250ZW50RGF0YT86IGFueSxcclxuICAgICAgICAgICAgc2hvd0hlYWRlcj86IGJvb2xlYW4sXHJcbiAgICAgICAgICAgIHNob3dGb290ZXI/OiBib29sZWFuXHJcbiAgICAgICAgfVxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGl0bGUgPSBvcHRpb25zLnRpdGxlIHx8ICcnO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IG9wdGlvbnMuY29udGVudCB8fCAnJztcclxuICAgICAgICB0aGlzLmNvbnRlbnRUeXBlID0gb3B0aW9ucy5jb250ZW50VHlwZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnREYXRhID0gb3B0aW9ucy5jb250ZW50RGF0YSB8fCB7fTtcclxuICAgICAgICB0aGlzLnNob3dIZWFkZXIgPSBvcHRpb25zLnNob3dIZWFkZXIgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLnNob3dIZWFkZXI7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9vdGVyID0gb3B0aW9ucy5zaG93Rm9vdGVyID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0aW9ucy5zaG93Rm9vdGVyO1xyXG4gICAgICAgIC8vIHRoaXMuYWN0aW9uQnV0dG9ucyA9IGFjdGlvbkJ1dHRvbnM7XHJcbiAgICAgICAgLy8gdGhpcy5zaG93TG9hZGluZ1NwaW5uZXIgPSBzaG93TG9hZGluZ1NwaW5uZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwcml2YXRlIGxheW91dFNlcnZpY2U6IExheW91dFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7IH1cclxuXHJcbiAgICBnZXREaWFsb2dDb25maWcoXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBoZWlnaHQ/OiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRpc2FibGVDbG9zZT86IGJvb2xlYW4sXHJcbiAgICAgICAgICAgIG1pbldpZHRoPzogc3RyaW5nLFxyXG4gICAgICAgICAgICBtYXhXaWR0aD86IHN0cmluZyxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0Pzogc3RyaW5nLFxyXG4gICAgICAgICAgICBwYW5lbENsYXNzPzogc3RyaW5nLFxyXG4gICAgICAgIH0gPSB7fVxyXG4gICAgKTogTWF0RGlhbG9nQ29uZmlnIHtcclxuXHJcbiAgICAgICAgY29uc3QgZGlhbG9nQ29uZmlnID0gbmV3IE1hdERpYWxvZ0NvbmZpZygpO1xyXG5cclxuICAgICAgICBkaWFsb2dDb25maWcuYXV0b0ZvY3VzID0gZmFsc2U7XHJcbiAgICAgICAgZGlhbG9nQ29uZmlnLmRpcmVjdGlvbiA9IHRoaXMubGF5b3V0U2VydmljZS5pc1J0bCgpID8gJ3J0bCcgOiAnbHRyJztcclxuICAgICAgICBkaWFsb2dDb25maWcuZGlzYWJsZUNsb3NlID0gb3B0aW9ucy5kaXNhYmxlQ2xvc2UgfHwgZmFsc2U7XHJcbiAgICAgICAgZGlhbG9nQ29uZmlnLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8ICdhdXRvJztcclxuICAgICAgICBkaWFsb2dDb25maWcubWF4V2lkdGggPSBvcHRpb25zLm1heFdpZHRoIHx8ICcxMDB2dyc7XHJcbiAgICAgICAgZGlhbG9nQ29uZmlnLm1heEhlaWdodCA9IG9wdGlvbnMubWF4SGVpZ2h0IHx8ICcxMDB2aCc7XHJcbiAgICAgICAgZGlhbG9nQ29uZmlnLm1pbldpZHRoID0gb3B0aW9ucy5taW5XaWR0aCB8fCAnMCc7XHJcbiAgICAgICAgZGlhbG9nQ29uZmlnLnBhbmVsQ2xhc3MgPSBbJ3BlcHBlcmktZGlhbG9nJywgb3B0aW9ucy5wYW5lbENsYXNzIHx8ICcnXTtcclxuXHJcbiAgICAgICAgZGlhbG9nQ29uZmlnLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMubm9vcCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlhbG9nQ29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5EZWZhdWx0RGlhbG9nKGRhdGE6IERpYWxvZ0RhdGEsIGNvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gbnVsbCk6IE1hdERpYWxvZ1JlZjxhbnk+IHtcclxuICAgICAgICBpZiAoIWNvbmZpZykge1xyXG4gICAgICAgICAgICBjb25maWcgPSB0aGlzLmdldERpYWxvZ0NvbmZpZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uZmlnLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oUGVwcGVyaURlZmF1bHREaWFsb2dDb21wb25lbnQsIGNvbmZpZyk7XHJcbiAgICAgICAgcmV0dXJuIGRpYWxvZ1JlZjtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRGlhbG9nPFQ+KFxyXG4gICAgICAgIGNvbXBvbmVudE9yVGVtcGxhdGVSZWY6IENvbXBvbmVudFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxUPixcclxuICAgICAgICBkYXRhOiBhbnkgPSB7fSxcclxuICAgICAgICBjb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IG51bGwpOiBNYXREaWFsb2dSZWY8VD4ge1xyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZykge1xyXG4gICAgICAgICAgICBjb25maWcgPSB0aGlzLmdldERpYWxvZ0NvbmZpZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uZmlnLmRhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKGNvbXBvbmVudE9yVGVtcGxhdGVSZWYsIGNvbmZpZyk7XHJcbiAgICAgICAgcmV0dXJuIGRpYWxvZ1JlZjtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2RpYWxvZy5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaURlZmF1bHREaWFsb2dDb21wb25lbnQge1xyXG4gICAgRGlhbG9nRGF0YVR5cGUgPSBEaWFsb2dEYXRhVHlwZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGFueT5cclxuICAgICkgeyB9XHJcblxyXG4gICAgc2F2ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLmRhdGEgPyB0aGlzLmRhdGEuY29udGVudCA6ICcnKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb250ZW50KGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEuY29udGVudCA9IGUudGFyZ2V0ID8gZS50YXJnZXQudmFsdWUgOiAoZS5jdXJyZW50VGFyZ2V0ID8gZS5jdXJyZW50VGFyZ2V0LnZhbHVlIDogJycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCI8aDIgbWF0LWRpYWxvZy10aXRsZSAqbmdJZj1cImRhdGE/LnNob3dIZWFkZXJcIiBjbGFzcz1cInBlcHBlcmktYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnQgZmxpcFwiICpuZ0lmPVwiZGF0YT8udGl0bGU/Lmxlbmd0aFwiPnt7IGRhdGE/LnRpdGxlIH19PC9zcGFuPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXQtZGlhbG9nLWNsb3NlXT1cIm51bGxcIiBjbGFzcz1cInBlcHBlcmktYnV0dG9uIGljb24tYnV0dG9uIG1kIHdlYWsgcHVsbC1yaWdodCBmbGlwXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cInN5c3RlbV9jbG9zZVwiPlxyXG4gICAgICAgICAgICA8L3BlcC1pY29uPlxyXG4gICAgICAgIDwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9oMj5cclxuPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgICA8c3BhbiAqbmdJZj1cImRhdGE/LmNvbnRlbnRUeXBlID09PSBEaWFsb2dEYXRhVHlwZS5UZXh0IHx8IGRhdGE/LmNvbnRlbnRUeXBlID09PSBEaWFsb2dEYXRhVHlwZS5IdG1sXCJcclxuICAgICAgICBbaW5uZXJIdG1sXT1cImRhdGE/LmNvbnRlbnQgfCBzYWZlSHRtbFwiPjwvc3Bhbj5cclxuICAgIDx0ZXh0YXJlYSAqbmdJZj1cImRhdGE/LmNvbnRlbnRUeXBlID09PSBEaWFsb2dEYXRhVHlwZS5UZXh0QXJlYVwiIFtyZWFkb25seV09XCJkYXRhPy5jb250ZW50RGF0YT8uZGlzYWJsZWRcIlxyXG4gICAgICAgIFtuYW1lXT1cImRhdGE/LmNvbnRlbnREYXRhPy5rZXlcIiAoYmx1cik9XCJ1cGRhdGVDb250ZW50KCRldmVudCk7XCI+e3sgZGF0YT8uY29udGVudCB9fTwvdGV4dGFyZWE+XHJcbjwvZGl2PlxyXG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucyAqbmdJZj1cImRhdGE/LnNob3dGb290ZXJcIiBjbGFzcz1cInBlcHBlcmktYm9yZGVyLXRvcFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNwYWNpbmctZWxlbWVudC1uZWdhdGl2ZVwiPlxyXG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInNwYWNpbmctZWxlbWVudCBwZXBwZXJpLWJ1dHRvbiBtZCBzdHJvbmcgcHVsbC1yaWdodCBmbGlwXCIgKGNsaWNrKT1cInNhdmUoKVwiPlxyXG4gICAgICAgICAgICB7eyAnQUNUSU9OUy5TQVZFJyB8IHRyYW5zbGF0ZSB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJudWxsXCIgY2xhc3M9XCJzcGFjaW5nLWVsZW1lbnQgcGVwcGVyaS1idXR0b24gbWQgd2VhayBwdWxsLXJpZ2h0IGZsaXBcIj5cclxuICAgICAgICAgICAge3sgJ0FDVElPTlMuQ0FOQ0VMJyB8IHRyYW5zbGF0ZSB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==