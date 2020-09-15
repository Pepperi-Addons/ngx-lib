import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { hex2hsl, hslString2hsl, rgbString2hsl, findClosestAccessibleColor, hsl2hex, convertHslToStringHsl } from './color-utils';
import { PepColorType } from './color.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@pepperi-addons/ngx-lib/icon";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/slider";
import * as i8 from "@pepperi-addons/ngx-lib/textbox";
import * as i9 from "@pepperi-addons/ngx-lib/field-title";
import * as i10 from "@angular/material/checkbox";
import * as i11 from "@ngx-translate/core";
function PepperiColorPickerComponent_div_33_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵelement(1, "pep-icon", 27);
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "background": a0 }; };
function PepperiColorPickerComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelement(1, "pep-field-title", 24);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementStart(3, "div", 25);
    i0.ɵɵtemplate(4, PepperiColorPickerComponent_div_33_mat_icon_4_Template, 2, 0, "mat-icon", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(2, 3, "COLOR.AA_COMPLIENT"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c0, ctx_r0.complientColor));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isUserChooseAAComplientColor);
} }
function PepperiColorPickerComponent_mat_checkbox_36_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 28);
    i0.ɵɵlistener("change", function PepperiColorPickerComponent_mat_checkbox_36_Template_mat_checkbox_change_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.checkAAComplient = !ctx_r3.checkAAComplient; });
    i0.ɵɵelementStart(1, "span", 29);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checked", ctx_r1.checkAAComplient);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "COLOR.AA_COMPLIENT"));
} }
const _c1 = function (a0, a1, a2) { return { "main": a0, "success": a1, "caution": a2 }; };
const _c2 = function (a0) { return { "with-complient": a0 }; };
export var ContrastRatioType;
(function (ContrastRatioType) {
    ContrastRatioType[ContrastRatioType["AA"] = 4.5] = "AA";
    ContrastRatioType[ContrastRatioType["AAA"] = 7] = "AAA";
})(ContrastRatioType || (ContrastRatioType = {}));
export class PepperiColorPickerComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.PepColorType = PepColorType;
        this.checkAAComplient = true;
        this.currentHue = 100;
        this.currentHueMin = 0;
        this.currentHueMax = 360;
        this.currentSaturation = 50;
        this.currentSaturationMin = 0;
        this.currentSaturationMax = 100;
        this.currentLightness = 50;
        this.currentLightnessMin = 0;
        this.currentLightnessMax = 100;
        this.data.type = data ? data.type : PepColorType.AnyColor;
        this.data.showAAComplient = data && data.showAAComplient === undefined ? true : (data ? data.showAAComplient : false);
        this.data.textColor = data && data.textColor ? data.textColor : '#fff';
        this.data.contrastRatio = data && data.contrastRatio ? data.contrastRatio : ContrastRatioType.AA;
    }
    ngOnInit() {
        this.initVars();
        this.checkAAComplient = this.data.showAAComplient;
        this.convertValueStringToColor(this.data.value);
    }
    initVars() {
        if (this.data.type === PepColorType.MainColor) {
            this.currentLightnessMax = 10;
            this.currentLightness = 5;
        }
        else if (this.data.type === PepColorType.SuccessColor) {
            this.currentHueMin = 70;
            this.currentHueMax = 150;
            this.currentHue = 100;
            this.currentSaturationMin = 50;
            this.currentSaturationMax = 100;
            this.currentSaturation = 50;
            this.currentLightnessMin = 10;
            this.currentLightnessMax = 65;
            this.currentLightness = 50;
        }
        else if (this.data.type === PepColorType.CautionColor) {
            this.currentHueMin = -20;
            this.currentHueMax = 20;
            this.currentHue = 10;
            this.currentSaturationMin = 75;
            this.currentSaturationMax = 100;
            this.currentSaturation = 75;
            this.currentLightnessMin = 25;
            this.currentLightnessMax = 75;
            this.currentLightness = 50;
        }
    }
    setCurrentHueInCss() {
        document.documentElement.style.setProperty(PepperiColorPickerComponent.CURRENT_HUE, this.currentHue.toString());
    }
    convertValueStringToColor(color) {
        if (color.indexOf('hsl') === 0) {
            const hsl = hslString2hsl(color);
            this.convertColorToValueString(hsl);
        }
        else if (color.indexOf('rgb') === 0) {
            const hsl = rgbString2hsl(color);
            this.convertColorToValueString(hsl);
        }
        else if (color.indexOf('#') === 0) {
            const hsl = hex2hsl(color);
            this.convertColorToValueString(hsl);
        }
        else {
            // Handle other colors.
        }
        this.setCurrentHueInCss();
    }
    convertColorToValueString(hslColor) {
        // Regular hue
        if (hslColor.h >= this.currentHueMin && hslColor.h <= this.currentHueMax) {
            this.currentHue = hslColor.h;
        }
        else if (this.currentHueMin < 0 && hslColor.h >= 0 && hslColor.h <= 360) {
            // For min with - (change to the other side of the circle)
            hslColor.h = hslColor.h - 360;
            if (hslColor.h >= this.currentHueMin && hslColor.h <= this.currentHueMax) {
                this.currentHue = hslColor.h;
            }
        }
        this.currentSaturation =
            (hslColor.s >= this.currentSaturationMin &&
                hslColor.s <= this.currentSaturationMax) ?
                hslColor.s : this.currentSaturation;
        this.currentLightness =
            (hslColor.l >= this.currentLightnessMin &&
                hslColor.l <= this.currentLightnessMax) ?
                hslColor.l : this.currentLightness;
        // Write the value (if hue is changed to the other side of the circle return it back).
        const hsl = { h: this.currentHue, s: this.currentSaturation, l: this.currentLightness };
        this.data.value = convertHslToStringHsl(hsl);
        // Check the contrast ratio - set the closest accessible color to complientColor
        // and update isUserChooseAAComplientColor.
        const adjustableColor = hsl2hex(hsl);
        const closestHex = findClosestAccessibleColor(adjustableColor, this.data.textColor, this.data.contrastRatio);
        this.isUserChooseAAComplientColor = adjustableColor === closestHex;
        this.complientColor = convertHslToStringHsl(hex2hsl(closestHex));
    }
    onHueChange(event) {
        this.convertColorToValueString({ h: event.value });
        this.setCurrentHueInCss();
    }
    onSaturationChange(event) {
        // this.currentSaturation = event.value;
        this.convertColorToValueString({ s: event.value });
    }
    onLightnessChange(event) {
        // this.currentLightness = event.value;
        this.convertColorToValueString({ l: this.currentLightnessMax - event.value + this.currentLightnessMin });
    }
    onColorValueChange(event) {
        this.convertValueStringToColor(event.value);
    }
    onSave(event) {
        const color = this.checkAAComplient ? this.complientColor : this.data.value;
        // this.notify.emit({ key: this.key, value: color });
        this.dialogRef.close(color);
    }
}
PepperiColorPickerComponent.CURRENT_HUE = '--pep-color-picker-current-hue';
PepperiColorPickerComponent.ɵfac = function PepperiColorPickerComponent_Factory(t) { return new (t || PepperiColorPickerComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
PepperiColorPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiColorPickerComponent, selectors: [["ng-component"]], decls: 44, vars: 58, consts: [[1, "pepperi-color-picker-container"], ["mat-dialog-title", "", 1, "pepperi-border-bottom"], [1, "pull-left", "flip"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], ["mat-dialog-content", ""], [1, "color-chooser-content"], [1, "current-color", 3, "ngStyle"], [1, "slider-box"], [1, "body-xs"], [1, "current-hue", 3, "ngClass"], ["step", "1", 3, "min", "max", "value", "change"], [1, "current-saturation", 3, "ngClass"], [1, "current-lightness", 3, "ngClass"], [1, "color-value-content"], [1, "color-value", 3, "ngClass"], [3, "key", "label", "formattedValue", "value", "valueChanged"], ["class", "color-complient-container", 4, "ngIf"], ["mat-dialog-actions", "", 1, "pepperi-border-top", "split-actions"], ["type", "checkbox", "id", "checkAAComplient", 3, "checked", "change", 4, "ngIf"], [1, "spacing-element-negative"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "cancel-btn", "md", "weak", 3, "mat-dialog-close"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "save-btn", "md", "strong", 3, "click"], [1, "color-complient-container"], [3, "label"], [1, "color-complient", 3, "ngStyle"], [4, "ngIf"], ["name", "system_ok"], ["type", "checkbox", "id", "checkAAComplient", 3, "checked", "change"], [1, "body-xs", "ellipsis"]], template: function PepperiColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h2", 1);
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵtext(3);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 3);
        i0.ɵɵelementStart(6, "mat-icon");
        i0.ɵɵelement(7, "pep-icon", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 5);
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵelement(10, "div", 7);
        i0.ɵɵelementStart(11, "div", 8);
        i0.ɵɵelementStart(12, "mat-label", 9);
        i0.ɵɵtext(13);
        i0.ɵɵpipe(14, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 10);
        i0.ɵɵelementStart(16, "mat-slider", 11);
        i0.ɵɵlistener("change", function PepperiColorPickerComponent_Template_mat_slider_change_16_listener($event) { return ctx.onHueChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 8);
        i0.ɵɵelementStart(18, "mat-label", 9);
        i0.ɵɵtext(19);
        i0.ɵɵpipe(20, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 12);
        i0.ɵɵelementStart(22, "mat-slider", 11);
        i0.ɵɵlistener("change", function PepperiColorPickerComponent_Template_mat_slider_change_22_listener($event) { return ctx.onSaturationChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 8);
        i0.ɵɵelementStart(24, "mat-label", 9);
        i0.ɵɵtext(25);
        i0.ɵɵpipe(26, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 13);
        i0.ɵɵelementStart(28, "mat-slider", 11);
        i0.ɵɵlistener("change", function PepperiColorPickerComponent_Template_mat_slider_change_28_listener($event) { return ctx.onLightnessChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "div", 14);
        i0.ɵɵelementStart(30, "div", 15);
        i0.ɵɵelementStart(31, "pep-textbox", 16);
        i0.ɵɵlistener("valueChanged", function PepperiColorPickerComponent_Template_pep_textbox_valueChanged_31_listener($event) { return ctx.onColorValueChange($event); });
        i0.ɵɵpipe(32, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(33, PepperiColorPickerComponent_div_33_Template, 5, 7, "div", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "div", 18);
        i0.ɵɵelementStart(35, "div");
        i0.ɵɵtemplate(36, PepperiColorPickerComponent_mat_checkbox_36_Template, 4, 4, "mat-checkbox", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "div", 20);
        i0.ɵɵelementStart(38, "button", 21);
        i0.ɵɵtext(39);
        i0.ɵɵpipe(40, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "button", 22);
        i0.ɵɵlistener("click", function PepperiColorPickerComponent_Template_button_click_41_listener($event) { return ctx.onSave($event); });
        i0.ɵɵtext(42);
        i0.ɵɵpipe(43, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 28, "COLOR.DIALOG_TITLE"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("mat-dialog-close", null);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(42, _c0, (ctx.data == null ? null : ctx.data.value) ? ctx.data.value : "transparent"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 30, "COLOR.CHANGE_HUE"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(44, _c1, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.MainColor, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.SuccessColor, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.CautionColor));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("min", ctx.currentHueMin)("max", ctx.currentHueMax)("value", ctx.currentHue);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(20, 32, "COLOR.CHANGE_SATURATION"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(48, _c1, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.MainColor, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.SuccessColor, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.CautionColor));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("min", ctx.currentSaturationMin)("max", ctx.currentSaturationMax)("value", ctx.currentSaturation);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(26, 34, "COLOR.CHANGE_LIGHTNESS"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(52, _c1, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.MainColor, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.SuccessColor, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.CautionColor));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("min", ctx.currentLightnessMin)("max", ctx.currentLightnessMax)("value", ctx.currentLightnessMax - ctx.currentLightness + ctx.currentLightnessMin);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(56, _c2, ctx.checkAAComplient));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("key", "colorValue")("label", i0.ɵɵpipeBind1(32, 36, "COLOR.ADD_VALUE_HERE"))("formattedValue", ctx.data == null ? null : ctx.data.value)("value", ctx.data == null ? null : ctx.data.value);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.checkAAComplient);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.data.showAAComplient);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("mat-dialog-close", null);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(40, 38, "ACTIONS.CANCEL"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(43, 40, "ACTIONS.OK"), " ");
    } }, directives: [i1.MatDialogTitle, i2.MatButton, i1.MatDialogClose, i3.MatIcon, i4.PepperiIconComponent, i1.MatDialogContent, i5.NgStyle, i6.MatLabel, i5.NgClass, i7.MatSlider, i8.PepperiTextboxComponent, i5.NgIf, i1.MatDialogActions, i9.PepperiFieldTitleComponent, i10.MatCheckbox], pipes: [i11.TranslatePipe], styles: [".mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-track-background[_ngcontent-%COMP%]{display:none}.pepperi-color-picker-container[_ngcontent-%COMP%]   .mat-dialog-title[_ngcontent-%COMP%]{margin-bottom:0}.pepperi-color-picker-container[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]{padding-bottom:var(--pep-spacing-sm,.5rem);padding-left:var(--pep-spacing-sm,.5rem);padding-right:var(--pep-spacing-sm,.5rem)}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-chooser-content[_ngcontent-%COMP%]{-ms-grid-columns:(1fr)[8];-ms-grid-rows:(1fr)[3];display:-ms-grid;display:grid;grid-column-gap:var(--pep-spacing-xl,1.5rem);grid-row-gap:var(--pep-spacing-sm,.5rem);grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(3,1fr);margin-top:var(--pep-spacing-sm,.5rem)}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-chooser-content[_ngcontent-%COMP%]   .current-color[_ngcontent-%COMP%]{-ms-grid-column:6;-ms-grid-column-span:4;-ms-grid-row:1;-ms-grid-row-span:3;border-radius:var(--pep-border-radius-md,.25rem);grid-column:6/span 4;grid-row:1/span 3;height:9.25rem;width:9.25rem}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-chooser-content[_ngcontent-%COMP%]   .slider-box[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:5;grid-column:1/span 5}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]{-ms-grid-columns:(1fr)[8];-ms-grid-rows:(1fr)[1];display:-ms-grid;display:grid;grid-column-gap:var(--pep-spacing-xl,1.5rem);grid-row-gap:var(--pep-spacing-sm,.5rem);grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(1,1fr);margin-top:1.5rem}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]   .color-value[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:9;-ms-grid-row:1;-ms-grid-row-span:1;grid-column:1/span 9;grid-row:1/span 1}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]   .color-value.with-complient[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:5;grid-column:1/span 5}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]   .color-complient-container[_ngcontent-%COMP%]{-ms-grid-column:6;-ms-grid-column-span:4;grid-column:6/span 4}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]   .color-complient-container[_ngcontent-%COMP%]   .color-complient[_ngcontent-%COMP%]{align-items:center;border-radius:var(--pep-border-radius-md,.25rem);display:flex;height:var(--pep-form-field-height,2.5rem);justify-content:center;width:9.25rem}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiColorPickerComponent, [{
        type: Component,
        args: [{
                templateUrl: './color-picker.component.html',
                styleUrls: ['./color-picker.component.scss']
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvY29sb3IvY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvY29sb3IvY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFZLDBCQUEwQixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7OztJQ3VEekIsZ0NBQ0k7SUFBQSwrQkFDVztJQUNmLGlCQUFXOzs7O0lBUG5CLCtCQUNJO0lBQUEsc0NBQ2tCOztJQUNsQiwrQkFDSTtJQUFBLDhGQUNJO0lBR1IsaUJBQU07SUFDVixpQkFBTTs7O0lBUmUsZUFBMkM7SUFBM0Msa0VBQTJDO0lBRS9CLGVBQTRDO0lBQTVDLDJFQUE0QztJQUMzRCxlQUFvQztJQUFwQywwREFBb0M7Ozs7SUFVdEQsd0NBRUk7SUFEQSxnUEFBK0M7SUFDL0MsZ0NBQStCO0lBQUEsWUFBc0M7O0lBQUEsaUJBQU87SUFDaEYsaUJBQWU7OztJQUZxQyxpREFBNEI7SUFDN0MsZUFBc0M7SUFBdEMsZ0VBQXNDOzs7O0FEakVyRixNQUFNLENBQU4sSUFBWSxpQkFHWDtBQUhELFdBQVksaUJBQWlCO0lBQ3pCLHVEQUFRLENBQUE7SUFDUix1REFBTyxDQUFBO0FBQ1gsQ0FBQyxFQUhXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFHNUI7QUFjRCxNQUFN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QyxTQUFTO2VBQUM7Z0JBQ1AsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDL0M7O3NCQVVRLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBoZXgyaHNsLCBoc2xTdHJpbmcyaHNsLCByZ2JTdHJpbmcyaHNsLCBIc2xDb2xvciwgZmluZENsb3Nlc3RBY2Nlc3NpYmxlQ29sb3IsIGhzbDJoZXgsIGNvbnZlcnRIc2xUb1N0cmluZ0hzbCB9IGZyb20gJy4vY29sb3ItdXRpbHMnO1xyXG5pbXBvcnQgeyBQZXBDb2xvclR5cGUgfSBmcm9tICcuL2NvbG9yLm1vZGVsJztcclxuXHJcbmV4cG9ydCBlbnVtIENvbnRyYXN0UmF0aW9UeXBlIHtcclxuICAgIEFBID0gNC41LFxyXG4gICAgQUFBID0gN1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yUGlja2VyRGlhbG9nRGF0YSB7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgdHlwZTogUGVwQ29sb3JUeXBlO1xyXG4gICAgc2hvd0FBQ29tcGxpZW50OiBib29sZWFuO1xyXG4gICAgdGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgICBjb250cmFzdFJhdGlvOiBDb250cmFzdFJhdGlvVHlwZTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NvbG9yLXBpY2tlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXBwZXJpQ29sb3JQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHN0YXRpYyBDVVJSRU5UX0hVRSA9ICctLXBlcC1jb2xvci1waWNrZXItY3VycmVudC1odWUnO1xyXG5cclxuICAgIFBlcENvbG9yVHlwZSA9IFBlcENvbG9yVHlwZTtcclxuICAgIGNoZWNrQUFDb21wbGllbnQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8UGVwcGVyaUNvbG9yUGlja2VyQ29tcG9uZW50PixcclxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IENvbG9yUGlja2VyRGlhbG9nRGF0YVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnR5cGUgPSBkYXRhID8gZGF0YS50eXBlIDogUGVwQ29sb3JUeXBlLkFueUNvbG9yO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zaG93QUFDb21wbGllbnQgPSBkYXRhICYmIGRhdGEuc2hvd0FBQ29tcGxpZW50ID09PSB1bmRlZmluZWQgPyB0cnVlIDogKGRhdGEgPyBkYXRhLnNob3dBQUNvbXBsaWVudCA6IGZhbHNlKTtcclxuICAgICAgICB0aGlzLmRhdGEudGV4dENvbG9yID0gZGF0YSAmJiBkYXRhLnRleHRDb2xvciA/IGRhdGEudGV4dENvbG9yIDogJyNmZmYnO1xyXG4gICAgICAgIHRoaXMuZGF0YS5jb250cmFzdFJhdGlvID0gZGF0YSAmJiBkYXRhLmNvbnRyYXN0UmF0aW8gPyBkYXRhLmNvbnRyYXN0UmF0aW8gOiBDb250cmFzdFJhdGlvVHlwZS5BQTtcclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50SHVlID0gMTAwO1xyXG4gICAgY3VycmVudEh1ZU1pbiA9IDA7XHJcbiAgICBjdXJyZW50SHVlTWF4ID0gMzYwO1xyXG5cclxuICAgIGN1cnJlbnRTYXR1cmF0aW9uID0gNTA7XHJcbiAgICBjdXJyZW50U2F0dXJhdGlvbk1pbiA9IDA7XHJcbiAgICBjdXJyZW50U2F0dXJhdGlvbk1heCA9IDEwMDtcclxuXHJcbiAgICBjdXJyZW50TGlnaHRuZXNzID0gNTA7XHJcbiAgICBjdXJyZW50TGlnaHRuZXNzTWluID0gMDtcclxuICAgIGN1cnJlbnRMaWdodG5lc3NNYXggPSAxMDA7XHJcblxyXG4gICAgY29tcGxpZW50Q29sb3I6IHN0cmluZztcclxuICAgIGlzVXNlckNob29zZUFBQ29tcGxpZW50Q29sb3I6IGJvb2xlYW47XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0VmFycygpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tBQUNvbXBsaWVudCA9IHRoaXMuZGF0YS5zaG93QUFDb21wbGllbnQ7XHJcbiAgICAgICAgdGhpcy5jb252ZXJ0VmFsdWVTdHJpbmdUb0NvbG9yKHRoaXMuZGF0YS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFZhcnMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS50eXBlID09PSBQZXBDb2xvclR5cGUuTWFpbkNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpZ2h0bmVzc01heCA9IDEwO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaWdodG5lc3MgPSA1O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnR5cGUgPT09IFBlcENvbG9yVHlwZS5TdWNjZXNzQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SHVlTWluID0gNzA7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEh1ZU1heCA9IDE1MDtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SHVlID0gMTAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2F0dXJhdGlvbk1pbiA9IDUwO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTYXR1cmF0aW9uTWF4ID0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTYXR1cmF0aW9uID0gNTA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaWdodG5lc3NNaW4gPSAxMDtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlnaHRuZXNzTWF4ID0gNjU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpZ2h0bmVzcyA9IDUwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnR5cGUgPT09IFBlcENvbG9yVHlwZS5DYXV0aW9uQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SHVlTWluID0gLTIwO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRIdWVNYXggPSAyMDtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SHVlID0gMTA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTYXR1cmF0aW9uTWluID0gNzU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNhdHVyYXRpb25NYXggPSAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNhdHVyYXRpb24gPSA3NTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExpZ2h0bmVzc01pbiA9IDI1O1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaWdodG5lc3NNYXggPSA3NTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlnaHRuZXNzID0gNTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnRIdWVJbkNzcygpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoUGVwcGVyaUNvbG9yUGlja2VyQ29tcG9uZW50LkNVUlJFTlRfSFVFLCB0aGlzLmN1cnJlbnRIdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydFZhbHVlU3RyaW5nVG9Db2xvcihjb2xvcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjb2xvci5pbmRleE9mKCdoc2wnKSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBoc2wgPSBoc2xTdHJpbmcyaHNsKGNvbG9yKTtcclxuICAgICAgICAgICAgdGhpcy5jb252ZXJ0Q29sb3JUb1ZhbHVlU3RyaW5nKGhzbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb2xvci5pbmRleE9mKCdyZ2InKSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBoc2wgPSByZ2JTdHJpbmcyaHNsKGNvbG9yKTtcclxuICAgICAgICAgICAgdGhpcy5jb252ZXJ0Q29sb3JUb1ZhbHVlU3RyaW5nKGhzbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb2xvci5pbmRleE9mKCcjJykgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaHNsID0gaGV4MmhzbChjb2xvcik7XHJcbiAgICAgICAgICAgIHRoaXMuY29udmVydENvbG9yVG9WYWx1ZVN0cmluZyhoc2wpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBjb2xvcnMuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRIdWVJbkNzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRDb2xvclRvVmFsdWVTdHJpbmcoaHNsQ29sb3I6IEhzbENvbG9yKTogdm9pZCB7XHJcbiAgICAgICAgLy8gUmVndWxhciBodWVcclxuICAgICAgICBpZiAoaHNsQ29sb3IuaCA+PSB0aGlzLmN1cnJlbnRIdWVNaW4gJiYgaHNsQ29sb3IuaCA8PSB0aGlzLmN1cnJlbnRIdWVNYXgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SHVlID0gaHNsQ29sb3IuaDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEh1ZU1pbiA8IDAgJiYgaHNsQ29sb3IuaCA+PSAwICYmIGhzbENvbG9yLmggPD0gMzYwKSB7XHJcbiAgICAgICAgICAgIC8vIEZvciBtaW4gd2l0aCAtIChjaGFuZ2UgdG8gdGhlIG90aGVyIHNpZGUgb2YgdGhlIGNpcmNsZSlcclxuICAgICAgICAgICAgaHNsQ29sb3IuaCA9IGhzbENvbG9yLmggLSAzNjA7XHJcblxyXG4gICAgICAgICAgICBpZiAoaHNsQ29sb3IuaCA+PSB0aGlzLmN1cnJlbnRIdWVNaW4gJiYgaHNsQ29sb3IuaCA8PSB0aGlzLmN1cnJlbnRIdWVNYXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEh1ZSA9IGhzbENvbG9yLmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFNhdHVyYXRpb24gPVxyXG4gICAgICAgICAgICAoaHNsQ29sb3IucyA+PSB0aGlzLmN1cnJlbnRTYXR1cmF0aW9uTWluICYmXHJcbiAgICAgICAgICAgICBoc2xDb2xvci5zIDw9IHRoaXMuY3VycmVudFNhdHVyYXRpb25NYXgpID9cclxuICAgICAgICAgICAgICAgIGhzbENvbG9yLnMgOiB0aGlzLmN1cnJlbnRTYXR1cmF0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaWdodG5lc3MgPVxyXG4gICAgICAgICAgICAoaHNsQ29sb3IubCA+PSB0aGlzLmN1cnJlbnRMaWdodG5lc3NNaW4gJiZcclxuICAgICAgICAgICAgIGhzbENvbG9yLmwgPD0gdGhpcy5jdXJyZW50TGlnaHRuZXNzTWF4KSA/XHJcbiAgICAgICAgICAgICAgICBoc2xDb2xvci5sIDogdGhpcy5jdXJyZW50TGlnaHRuZXNzO1xyXG5cclxuICAgICAgICAvLyBXcml0ZSB0aGUgdmFsdWUgKGlmIGh1ZSBpcyBjaGFuZ2VkIHRvIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBjaXJjbGUgcmV0dXJuIGl0IGJhY2spLlxyXG4gICAgICAgIGNvbnN0IGhzbCA9IHsgaDogdGhpcy5jdXJyZW50SHVlLCBzOiB0aGlzLmN1cnJlbnRTYXR1cmF0aW9uLCBsOiB0aGlzLmN1cnJlbnRMaWdodG5lc3MgfTtcclxuICAgICAgICB0aGlzLmRhdGEudmFsdWUgPSBjb252ZXJ0SHNsVG9TdHJpbmdIc2woaHNsKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIGNvbnRyYXN0IHJhdGlvIC0gc2V0IHRoZSBjbG9zZXN0IGFjY2Vzc2libGUgY29sb3IgdG8gY29tcGxpZW50Q29sb3JcclxuICAgICAgICAvLyBhbmQgdXBkYXRlIGlzVXNlckNob29zZUFBQ29tcGxpZW50Q29sb3IuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0YWJsZUNvbG9yID0gaHNsMmhleChoc2wpO1xyXG4gICAgICAgIGNvbnN0IGNsb3Nlc3RIZXggPSBmaW5kQ2xvc2VzdEFjY2Vzc2libGVDb2xvcihhZGp1c3RhYmxlQ29sb3IsIHRoaXMuZGF0YS50ZXh0Q29sb3IsIHRoaXMuZGF0YS5jb250cmFzdFJhdGlvKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1VzZXJDaG9vc2VBQUNvbXBsaWVudENvbG9yID0gYWRqdXN0YWJsZUNvbG9yID09PSBjbG9zZXN0SGV4O1xyXG4gICAgICAgIHRoaXMuY29tcGxpZW50Q29sb3IgPSBjb252ZXJ0SHNsVG9TdHJpbmdIc2woaGV4MmhzbChjbG9zZXN0SGV4KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IdWVDaGFuZ2UoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnZlcnRDb2xvclRvVmFsdWVTdHJpbmcoeyBoOiBldmVudC52YWx1ZSB9KTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRIdWVJbkNzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2F0dXJhdGlvbkNoYW5nZShldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFNhdHVyYXRpb24gPSBldmVudC52YWx1ZTtcclxuICAgICAgICB0aGlzLmNvbnZlcnRDb2xvclRvVmFsdWVTdHJpbmcoeyBzOiBldmVudC52YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxpZ2h0bmVzc0NoYW5nZShldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudExpZ2h0bmVzcyA9IGV2ZW50LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuY29udmVydENvbG9yVG9WYWx1ZVN0cmluZyh7IGw6IHRoaXMuY3VycmVudExpZ2h0bmVzc01heCAtIGV2ZW50LnZhbHVlICsgdGhpcy5jdXJyZW50TGlnaHRuZXNzTWluIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sb3JWYWx1ZUNoYW5nZShldmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29udmVydFZhbHVlU3RyaW5nVG9Db2xvcihldmVudC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TYXZlKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNoZWNrQUFDb21wbGllbnQgPyB0aGlzLmNvbXBsaWVudENvbG9yIDogdGhpcy5kYXRhLnZhbHVlO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm5vdGlmeS5lbWl0KHsga2V5OiB0aGlzLmtleSwgdmFsdWU6IGNvbG9yIH0pO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGNvbG9yKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBlcHBlcmktY29sb3ItcGlja2VyLWNvbnRhaW5lclwiPlxyXG5cclxuICAgIDxoMiBtYXQtZGlhbG9nLXRpdGxlIGNsYXNzPVwicGVwcGVyaS1ib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnQgZmxpcFwiPnt7ICdDT0xPUi5ESUFMT0dfVElUTEUnIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJudWxsXCIgY2xhc3M9XCJwZXBwZXJpLWJ1dHRvbiBpY29uLWJ1dHRvbiBtZCB3ZWFrIHB1bGwtcmlnaHQgZmxpcFwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cInN5c3RlbV9jbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvaDI+XHJcblxyXG4gICAgPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLWNob29zZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1jb2xvclwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQnOiBkYXRhPy52YWx1ZSA/IGRhdGEudmFsdWUgOiAndHJhbnNwYXJlbnQnIH1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsIGNsYXNzPVwiYm9keS14cyBcIj57eyAnQ09MT1IuQ0hBTkdFX0hVRScgfCB0cmFuc2xhdGV9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtaHVlXCIgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICdtYWluJzogZGF0YT8udHlwZSA9PT0gUGVwQ29sb3JUeXBlLk1haW5Db2xvcixcclxuICAgICAgICAgICAgICAgICAgICAnc3VjY2Vzcyc6IGRhdGE/LnR5cGUgPT09IFBlcENvbG9yVHlwZS5TdWNjZXNzQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdXRpb24nOiBkYXRhPy50eXBlID09PSBQZXBDb2xvclR5cGUuQ2F1dGlvbkNvbG9yIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlciBbbWluXT1cImN1cnJlbnRIdWVNaW5cIiBbbWF4XT1cImN1cnJlbnRIdWVNYXhcIiBzdGVwPVwiMVwiIFt2YWx1ZV09XCJjdXJyZW50SHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvbkh1ZUNoYW5nZSgkZXZlbnQpXCI+PC9tYXQtc2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbCBjbGFzcz1cImJvZHkteHMgXCI+e3sgJ0NPTE9SLkNIQU5HRV9TQVRVUkFUSU9OJyB8IHRyYW5zbGF0ZX19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1zYXR1cmF0aW9uXCIgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICdtYWluJzogZGF0YT8udHlwZSA9PT0gUGVwQ29sb3JUeXBlLk1haW5Db2xvcixcclxuICAgICAgICAgICAgICAgICAgICAnc3VjY2Vzcyc6IGRhdGE/LnR5cGUgPT09IFBlcENvbG9yVHlwZS5TdWNjZXNzQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdXRpb24nOiBkYXRhPy50eXBlID09PSBQZXBDb2xvclR5cGUuQ2F1dGlvbkNvbG9yIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlciBbbWluXT1cImN1cnJlbnRTYXR1cmF0aW9uTWluXCIgW21heF09XCJjdXJyZW50U2F0dXJhdGlvbk1heFwiIHN0ZXA9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cImN1cnJlbnRTYXR1cmF0aW9uXCIgKGNoYW5nZSk9XCJvblNhdHVyYXRpb25DaGFuZ2UoJGV2ZW50KVwiPjwvbWF0LXNsaWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWwgY2xhc3M9XCJib2R5LXhzIFwiPnt7ICdDT0xPUi5DSEFOR0VfTElHSFRORVNTJyB8IHRyYW5zbGF0ZX19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1saWdodG5lc3NcIiBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgJ21haW4nOiBkYXRhPy50eXBlID09PSBQZXBDb2xvclR5cGUuTWFpbkNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdWNjZXNzJzogZGF0YT8udHlwZSA9PT0gUGVwQ29sb3JUeXBlLlN1Y2Nlc3NDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAnY2F1dGlvbic6IGRhdGE/LnR5cGUgPT09IFBlcENvbG9yVHlwZS5DYXV0aW9uQ29sb3IgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGVyIFttaW5dPVwiY3VycmVudExpZ2h0bmVzc01pblwiIFttYXhdPVwiY3VycmVudExpZ2h0bmVzc01heFwiIHN0ZXA9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cImN1cnJlbnRMaWdodG5lc3NNYXggLSBjdXJyZW50TGlnaHRuZXNzICsgY3VycmVudExpZ2h0bmVzc01pblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25MaWdodG5lc3NDaGFuZ2UoJGV2ZW50KVwiPjwvbWF0LXNsaWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItdmFsdWUtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItdmFsdWVcIiBbbmdDbGFzc109XCJ7ICd3aXRoLWNvbXBsaWVudCc6IGNoZWNrQUFDb21wbGllbnQgfVwiPlxyXG4gICAgICAgICAgICAgICAgPHBlcC10ZXh0Ym94IFtrZXldPVwiJ2NvbG9yVmFsdWUnXCIgW2xhYmVsXT1cIidDT0xPUi5BRERfVkFMVUVfSEVSRScgfCB0cmFuc2xhdGUgXCJcclxuICAgICAgICAgICAgICAgICAgICBbZm9ybWF0dGVkVmFsdWVdPVwiZGF0YT8udmFsdWVcIiBbdmFsdWVdPVwiZGF0YT8udmFsdWVcIiAodmFsdWVDaGFuZ2VkKT1cIm9uQ29sb3JWYWx1ZUNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8L3BlcC10ZXh0Ym94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNoZWNrQUFDb21wbGllbnRcIiBjbGFzcz1cImNvbG9yLWNvbXBsaWVudC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwZXAtZmllbGQtdGl0bGUgW2xhYmVsXT1cIidDT0xPUi5BQV9DT01QTElFTlQnIHwgdHJhbnNsYXRlIFwiPlxyXG4gICAgICAgICAgICAgICAgPC9wZXAtZmllbGQtdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItY29tcGxpZW50XCIgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZCc6IGNvbXBsaWVudENvbG9yIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJpc1VzZXJDaG9vc2VBQUNvbXBsaWVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwZXAtaWNvbiBuYW1lPVwic3lzdGVtX29rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGVwLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnMgY2xhc3M9XCJwZXBwZXJpLWJvcmRlci10b3Agc3BsaXQtYWN0aW9ucyBcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94ICpuZ0lmPVwiZGF0YS5zaG93QUFDb21wbGllbnRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrQUFDb21wbGllbnRcIlxyXG4gICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJjaGVja0FBQ29tcGxpZW50ID0gIWNoZWNrQUFDb21wbGllbnRcIiBbY2hlY2tlZF09XCJjaGVja0FBQ29tcGxpZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvZHkteHMgZWxsaXBzaXNcIj57eyAnQ09MT1IuQUFfQ09NUExJRU5UJyB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNpbmctZWxlbWVudC1uZWdhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVwibnVsbFwiIGNsYXNzPVwic3BhY2luZy1lbGVtZW50IHBlcHBlcmktYnV0dG9uIGNhbmNlbC1idG4gbWQgd2Vha1wiPlxyXG4gICAgICAgICAgICAgICAge3snQUNUSU9OUy5DQU5DRUwnIHwgdHJhbnNsYXRlfX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInNwYWNpbmctZWxlbWVudCBwZXBwZXJpLWJ1dHRvbiBzYXZlLWJ0biBtZCBzdHJvbmdcIiAoY2xpY2spPVwib25TYXZlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIHt7J0FDVElPTlMuT0snIHwgdHJhbnNsYXRlfX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvZGl2PiJdfQ==