import { ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵpipe, ɵɵtemplate, ɵɵnextContext, ɵɵadvance, ɵɵproperty, ɵɵpipeBind1, ɵɵpureFunction1, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵtext, ɵɵtextInterpolate, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵpureFunction3, ɵɵtextInterpolate1, ɵsetClassMetadata, Component, Inject, EventEmitter, Renderer2, ElementRef, ɵɵpureFunction2, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgStyle, NgClass, NgIf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogClose, MatDialogContent, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSlider, MatSliderModule } from '@angular/material/slider';
import { LAYOUT_TYPE, CustomizationService, RtlDirectionDirective, ButtonBlurDirective, PepperiModule } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconSystemEdit, pepperiIconSystemOk, pepperiIconSystemClose, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { PepperiFieldTitleComponent, PepperiFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { PepperiTextboxComponent, PepperiTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { TranslatePipe } from '@ngx-translate/core';
import { DialogService } from '@pepperi-addons/ngx-lib/dialog';

const FLOAT_REGEX = /^\d+(\.\d+)?$/;
const THREE_DIGIT_HEX_COLOR_REGEX = /^[0-9a-fA-F]{3}$/;
const THREE_DIGIT_HEX_COLOR_WITH_HASH_REGEX = /^#[0-9a-fA-F]{3}$/;
const SIX_DIGIT_HEX_COLOR_REGEX = /^[0-9a-fA-F]{6}$/;
const SIX_DIGIT_HEX_COLOR_WITH_HASH_REGEX = /^#[0-9a-fA-F]{6}$/;
/**
 * Convert hex string to 6 digits hex string.
 * @param str The string to convert.
 */
function hex2sixDigitHex(str) {
    if (!str) {
        return null;
    }
    str = str.trim();
    if (SIX_DIGIT_HEX_COLOR_WITH_HASH_REGEX.test(str)) {
        return str;
    }
    if (SIX_DIGIT_HEX_COLOR_REGEX.test(str)) {
        return '#' + str;
    }
    if (THREE_DIGIT_HEX_COLOR_WITH_HASH_REGEX.test(str)) {
        return '#' + str[1] + str[1] + str[2] + str[2] + str[3] + str[3];
    }
    if (THREE_DIGIT_HEX_COLOR_REGEX.test(str)) {
        return '#' + str[0] + str[0] + str[1] + str[1] + str[2] + str[2];
    }
    return null;
}
/**
 * Convert rgb color to 6 digits hex string.
 * @param color The rgb color to convert.
 */
function rgb2sixDigitHex(color) {
    color.r = color.r.toString(16);
    color.g = color.g.toString(16);
    color.b = color.b.toString(16);
    if (color.r.length === 1) {
        color.r = '0' + color.r;
    }
    if (color.g.length === 1) {
        color.g = '0' + color.g;
    }
    if (color.b.length === 1) {
        color.b = '0' + color.b;
    }
    return '#' + color.r + color.g + color.b;
}
/**
 * Convert hex string to rgb color.
 * @param str The hex string to convert.
 */
function hex2rgb(str) {
    const sixDigitHex = hex2sixDigitHex(str);
    if (sixDigitHex === null) {
        return null;
    }
    return {
        r: parseInt(sixDigitHex.slice(1, 3), 16),
        g: parseInt(sixDigitHex.slice(3, 5), 16),
        b: parseInt(sixDigitHex.slice(5, 7), 16)
    };
}
function rgbString2hsl(str) {
    const sep = str.indexOf(',') > -1 ? ',' : ' ';
    const rgbArr = str.substr(4).split(')')[0].split(sep);
    const r = rgbArr[0];
    const g = rgbArr[1].substr(0, rgbArr[1].length).trim();
    const b = rgbArr[2].substr(0, rgbArr[2].length).trim();
    return rgb2hsl({ r, g, b });
}
function rgb2hsl({ r, g, b }) {
    r /= 255;
    g /= 255;
    b /= 255;
    // Find greatest and smallest channel values
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;
    if (delta === 0) {
        h = 0;
    }
    else if (cmax === r) {
        h = ((g - b) / delta) % 6;
    }
    else if (cmax === g) {
        h = (b - r) / delta + 2;
    }
    else {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }
    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return { h, s, l };
}
function hslString2hsl(str) {
    const sep = str.indexOf(',') > -1 ? ',' : ' ';
    const hslArr = str.substr(4).split(')')[0].split(sep);
    let h = hslArr[0];
    let s = hslArr[1].substr(0, hslArr[1].length).trim();
    let l = hslArr[2].substr(0, hslArr[2].length).trim();
    // Strip label and convert to degrees (if necessary)
    if (h.indexOf('deg') > -1) {
        h = h.substr(0, h.length - 3);
    }
    else if (h.indexOf('rad') > -1) {
        h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
    }
    else if (h.indexOf('turn') > -1) {
        h = Math.round(h.substr(0, h.length - 4) * 360);
    }
    // Keep hue fraction of 360 if ending up over
    if (h >= 360) {
        h %= 360;
    }
    // Remove the %
    if (s.indexOf('%') > -1) {
        s = s.replace(/%/g, '');
    }
    // Remove the %
    if (l.indexOf('%') > -1) {
        l = l.replace(/%/g, '');
    }
    return { h, s, l };
}
function hsl2rgb({ h, s, l }) {
    let r;
    let g;
    let b;
    if (!isFinite(h)) {
        h = 0;
    }
    if (!isFinite(s)) {
        s = 0;
    }
    if (!isFinite(l)) {
        l = 0;
    }
    h /= 60;
    if (h < 0) {
        h = 6 - (-h % 6);
    }
    h %= 6;
    s = Math.max(0, Math.min(1, s / 100));
    l = Math.max(0, Math.min(1, l / 100));
    const c = (1 - Math.abs((2 * l) - 1)) * s;
    const x = c * (1 - Math.abs((h % 2) - 1));
    if (h < 1) {
        r = c;
        g = x;
        b = 0;
    }
    else if (h < 2) {
        r = x;
        g = c;
        b = 0;
    }
    else if (h < 3) {
        r = 0;
        g = c;
        b = x;
    }
    else if (h < 4) {
        r = 0;
        g = x;
        b = c;
    }
    else if (h < 5) {
        r = x;
        g = 0;
        b = c;
    }
    else {
        r = c;
        g = 0;
        b = x;
    }
    const m = l - c / 2;
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return { r, g, b };
}
function hex2hsl(str) {
    const sixDigitHex = hex2sixDigitHex(str);
    if (sixDigitHex === null) {
        return null;
    }
    const rgb = hex2rgb(sixDigitHex);
    if (rgb === null) {
        return null;
    }
    return rgb2hsl(rgb);
}
function hsl2hex(hsl) {
    const rgb = hsl2rgb(hsl);
    return rgb2sixDigitHex(rgb);
}
function relativeLuminance({ r, g, b }) {
    [r, g, b] = [r, g, b].map(c => {
        c = c / 255;
        if (c <= 0.03928) {
            return c / 12.92;
        }
        return Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(str1, str2) {
    const L1 = relativeLuminance(hex2rgb(str1));
    const L2 = relativeLuminance(hex2rgb(str2));
    if (L1 < L2) {
        return (L2 + 0.05) / (L1 + 0.05);
    }
    return (L1 + 0.05) / (L2 + 0.05);
}
function findClosestAccessibleDarkerColor(adjustableColor, otherColor, contrastRatio) {
    let { h, s, l } = hex2hsl(adjustableColor);
    if (contrast(adjustableColor, otherColor) >= contrastRatio) {
        return {
            color: adjustableColor,
            lightness: l
        };
    }
    let minColor = hsl2hex({ h, s, l: 0 });
    if (contrast(minColor, otherColor) < contrastRatio) {
        return null;
    }
    let min = 0;
    let max = l;
    let maxColor = hsl2hex({ h, s, l });
    let lastMinColor;
    let lastMaxColor;
    while (minColor !== lastMinColor || maxColor !== lastMaxColor) {
        lastMinColor = minColor;
        lastMaxColor = maxColor;
        l = (min + max) / 2;
        adjustableColor = hsl2hex({ h, s, l });
        if (contrast(adjustableColor, otherColor) < contrastRatio) {
            max = l;
            maxColor = hsl2hex({ h, s, l });
        }
        else {
            min = l;
            minColor = hsl2hex({ h, s, l });
        }
    }
    return {
        color: minColor,
        lightness: min
    };
}
function findClosestAccessibleLighterColor(adjustableColor, otherColor, contrastRatio) {
    let { h, s, l } = hex2hsl(adjustableColor);
    if (contrast(adjustableColor, otherColor) >= contrastRatio) {
        return {
            color: adjustableColor,
            lightness: l
        };
    }
    let maxColor = hsl2hex({ h, s, l: 100 });
    if (contrast(maxColor, otherColor) < contrastRatio) {
        return null;
    }
    let min = l;
    let max = 100;
    let minColor = hsl2hex({ h, s, l });
    let lastMinColor;
    let lastMaxColor;
    while (minColor !== lastMinColor || maxColor !== lastMaxColor) {
        lastMinColor = minColor;
        lastMaxColor = maxColor;
        l = (min + max) / 2;
        adjustableColor = hsl2hex({ h, s, l });
        if (contrast(adjustableColor, otherColor) < contrastRatio) {
            min = l;
            minColor = hsl2hex({ h, s, l });
        }
        else {
            max = l;
            maxColor = hsl2hex({ h, s, l });
        }
    }
    return {
        color: maxColor,
        lightness: max
    };
}
function findClosestAccessibleColor(adjustableColor, otherColor, contrastRatio) {
    const closestDarkerColor = findClosestAccessibleDarkerColor(adjustableColor, otherColor, contrastRatio);
    const closestLighterColor = findClosestAccessibleLighterColor(adjustableColor, otherColor, contrastRatio);
    if (closestDarkerColor === null) {
        if (closestLighterColor === null) {
            return null;
        }
        return closestLighterColor.color;
    }
    if (closestLighterColor === null) {
        return closestDarkerColor.color;
    }
    const { l } = hex2hsl(adjustableColor);
    if (closestLighterColor.lightness - l < l - closestDarkerColor.lightness) {
        return closestLighterColor.color;
    }
    return closestDarkerColor.color;
}
function convertHslToStringHsl(hsl) {
    return 'hsl(' + (hsl.h < 0 ? hsl.h + 360 : hsl.h) + ', ' + hsl.s + '%, ' + hsl.l + '%)';
}

var PepColorType;
(function (PepColorType) {
    PepColorType[PepColorType["AnyColor"] = 0] = "AnyColor";
    PepColorType[PepColorType["MainColor"] = 1] = "MainColor";
    PepColorType[PepColorType["SuccessColor"] = 2] = "SuccessColor";
    PepColorType[PepColorType["CautionColor"] = 3] = "CautionColor";
})(PepColorType || (PepColorType = {}));

function PepperiColorPickerComponent_div_33_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵelement(1, "pep-icon", 27);
    ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "background": a0 }; };
function PepperiColorPickerComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵelement(1, "pep-field-title", 24);
    ɵɵpipe(2, "translate");
    ɵɵelementStart(3, "div", 25);
    ɵɵtemplate(4, PepperiColorPickerComponent_div_33_mat_icon_4_Template, 2, 0, "mat-icon", 26);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("label", ɵɵpipeBind1(2, 3, "COLOR.AA_COMPLIENT"));
    ɵɵadvance(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c0, ctx_r0.complientColor));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isUserChooseAAComplientColor);
} }
function PepperiColorPickerComponent_mat_checkbox_36_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 28);
    ɵɵlistener("change", function PepperiColorPickerComponent_mat_checkbox_36_Template_mat_checkbox_change_0_listener() { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.checkAAComplient = !ctx_r3.checkAAComplient; });
    ɵɵelementStart(1, "span", 29);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("checked", ctx_r1.checkAAComplient);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "COLOR.AA_COMPLIENT"));
} }
const _c1 = function (a0, a1, a2) { return { "main": a0, "success": a1, "caution": a2 }; };
const _c2 = function (a0) { return { "with-complient": a0 }; };
var ContrastRatioType;
(function (ContrastRatioType) {
    ContrastRatioType[ContrastRatioType["AA"] = 4.5] = "AA";
    ContrastRatioType[ContrastRatioType["AAA"] = 7] = "AAA";
})(ContrastRatioType || (ContrastRatioType = {}));
class PepperiColorPickerComponent {
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
PepperiColorPickerComponent.ɵfac = function PepperiColorPickerComponent_Factory(t) { return new (t || PepperiColorPickerComponent)(ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
PepperiColorPickerComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiColorPickerComponent, selectors: [["ng-component"]], decls: 44, vars: 58, consts: [[1, "pepperi-color-picker-container"], ["mat-dialog-title", "", 1, "pepperi-border-bottom"], [1, "pull-left", "flip"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], ["mat-dialog-content", ""], [1, "color-chooser-content"], [1, "current-color", 3, "ngStyle"], [1, "slider-box"], [1, "body-xs"], [1, "current-hue", 3, "ngClass"], ["step", "1", 3, "min", "max", "value", "change"], [1, "current-saturation", 3, "ngClass"], [1, "current-lightness", 3, "ngClass"], [1, "color-value-content"], [1, "color-value", 3, "ngClass"], [3, "key", "label", "formattedValue", "value", "valueChanged"], ["class", "color-complient-container", 4, "ngIf"], ["mat-dialog-actions", "", 1, "pepperi-border-top", "split-actions"], ["type", "checkbox", "id", "checkAAComplient", 3, "checked", "change", 4, "ngIf"], [1, "spacing-element-negative"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "cancel-btn", "md", "weak", 3, "mat-dialog-close"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "save-btn", "md", "strong", 3, "click"], [1, "color-complient-container"], [3, "label"], [1, "color-complient", 3, "ngStyle"], [4, "ngIf"], ["name", "system_ok"], ["type", "checkbox", "id", "checkAAComplient", 3, "checked", "change"], [1, "body-xs", "ellipsis"]], template: function PepperiColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h2", 1);
        ɵɵelementStart(2, "span", 2);
        ɵɵtext(3);
        ɵɵpipe(4, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(5, "button", 3);
        ɵɵelementStart(6, "mat-icon");
        ɵɵelement(7, "pep-icon", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 5);
        ɵɵelementStart(9, "div", 6);
        ɵɵelement(10, "div", 7);
        ɵɵelementStart(11, "div", 8);
        ɵɵelementStart(12, "mat-label", 9);
        ɵɵtext(13);
        ɵɵpipe(14, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(15, "div", 10);
        ɵɵelementStart(16, "mat-slider", 11);
        ɵɵlistener("change", function PepperiColorPickerComponent_Template_mat_slider_change_16_listener($event) { return ctx.onHueChange($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(17, "div", 8);
        ɵɵelementStart(18, "mat-label", 9);
        ɵɵtext(19);
        ɵɵpipe(20, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(21, "div", 12);
        ɵɵelementStart(22, "mat-slider", 11);
        ɵɵlistener("change", function PepperiColorPickerComponent_Template_mat_slider_change_22_listener($event) { return ctx.onSaturationChange($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(23, "div", 8);
        ɵɵelementStart(24, "mat-label", 9);
        ɵɵtext(25);
        ɵɵpipe(26, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(27, "div", 13);
        ɵɵelementStart(28, "mat-slider", 11);
        ɵɵlistener("change", function PepperiColorPickerComponent_Template_mat_slider_change_28_listener($event) { return ctx.onLightnessChange($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(29, "div", 14);
        ɵɵelementStart(30, "div", 15);
        ɵɵelementStart(31, "pep-textbox", 16);
        ɵɵlistener("valueChanged", function PepperiColorPickerComponent_Template_pep_textbox_valueChanged_31_listener($event) { return ctx.onColorValueChange($event); });
        ɵɵpipe(32, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(33, PepperiColorPickerComponent_div_33_Template, 5, 7, "div", 17);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(34, "div", 18);
        ɵɵelementStart(35, "div");
        ɵɵtemplate(36, PepperiColorPickerComponent_mat_checkbox_36_Template, 4, 4, "mat-checkbox", 19);
        ɵɵelementEnd();
        ɵɵelementStart(37, "div", 20);
        ɵɵelementStart(38, "button", 21);
        ɵɵtext(39);
        ɵɵpipe(40, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(41, "button", 22);
        ɵɵlistener("click", function PepperiColorPickerComponent_Template_button_click_41_listener($event) { return ctx.onSave($event); });
        ɵɵtext(42);
        ɵɵpipe(43, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(4, 28, "COLOR.DIALOG_TITLE"));
        ɵɵadvance(2);
        ɵɵproperty("mat-dialog-close", null);
        ɵɵadvance(5);
        ɵɵproperty("ngStyle", ɵɵpureFunction1(42, _c0, (ctx.data == null ? null : ctx.data.value) ? ctx.data.value : "transparent"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(14, 30, "COLOR.CHANGE_HUE"));
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction3(44, _c1, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.MainColor, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.SuccessColor, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.CautionColor));
        ɵɵadvance(1);
        ɵɵproperty("min", ctx.currentHueMin)("max", ctx.currentHueMax)("value", ctx.currentHue);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(20, 32, "COLOR.CHANGE_SATURATION"));
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction3(48, _c1, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.MainColor, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.SuccessColor, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.CautionColor));
        ɵɵadvance(1);
        ɵɵproperty("min", ctx.currentSaturationMin)("max", ctx.currentSaturationMax)("value", ctx.currentSaturation);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(26, 34, "COLOR.CHANGE_LIGHTNESS"));
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction3(52, _c1, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.MainColor, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.SuccessColor, (ctx.data == null ? null : ctx.data.type) === ctx.PepColorType.CautionColor));
        ɵɵadvance(1);
        ɵɵproperty("min", ctx.currentLightnessMin)("max", ctx.currentLightnessMax)("value", ctx.currentLightnessMax - ctx.currentLightness + ctx.currentLightnessMin);
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction1(56, _c2, ctx.checkAAComplient));
        ɵɵadvance(1);
        ɵɵproperty("key", "colorValue")("label", ɵɵpipeBind1(32, 36, "COLOR.ADD_VALUE_HERE"))("formattedValue", ctx.data == null ? null : ctx.data.value)("value", ctx.data == null ? null : ctx.data.value);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.checkAAComplient);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.data.showAAComplient);
        ɵɵadvance(2);
        ɵɵproperty("mat-dialog-close", null);
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(40, 38, "ACTIONS.CANCEL"), " ");
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(43, 40, "ACTIONS.OK"), " ");
    } }, directives: [MatDialogTitle, MatButton, MatDialogClose, MatIcon, PepperiIconComponent, MatDialogContent, NgStyle, MatLabel, NgClass, MatSlider, PepperiTextboxComponent, NgIf, MatDialogActions, PepperiFieldTitleComponent, MatCheckbox], pipes: [TranslatePipe], styles: [".mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-track-background[_ngcontent-%COMP%]{display:none}.pepperi-color-picker-container[_ngcontent-%COMP%]   .mat-dialog-title[_ngcontent-%COMP%]{margin-bottom:0}.pepperi-color-picker-container[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]{padding-bottom:var(--pep-spacing-sm,.5rem);padding-left:var(--pep-spacing-sm,.5rem);padding-right:var(--pep-spacing-sm,.5rem)}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-chooser-content[_ngcontent-%COMP%]{-ms-grid-columns:(1fr)[8];-ms-grid-rows:(1fr)[3];display:-ms-grid;display:grid;grid-column-gap:var(--pep-spacing-xl,1.5rem);grid-row-gap:var(--pep-spacing-sm,.5rem);grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(3,1fr);margin-top:var(--pep-spacing-sm,.5rem)}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-chooser-content[_ngcontent-%COMP%]   .current-color[_ngcontent-%COMP%]{-ms-grid-column:6;-ms-grid-column-span:4;-ms-grid-row:1;-ms-grid-row-span:3;border-radius:var(--pep-border-radius-md,.25rem);grid-column:6/span 4;grid-row:1/span 3;height:9.25rem;width:9.25rem}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-chooser-content[_ngcontent-%COMP%]   .slider-box[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:5;grid-column:1/span 5}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]{-ms-grid-columns:(1fr)[8];-ms-grid-rows:(1fr)[1];display:-ms-grid;display:grid;grid-column-gap:var(--pep-spacing-xl,1.5rem);grid-row-gap:var(--pep-spacing-sm,.5rem);grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(1,1fr);margin-top:1.5rem}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]   .color-value[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:9;-ms-grid-row:1;-ms-grid-row-span:1;grid-column:1/span 9;grid-row:1/span 1}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]   .color-value.with-complient[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:5;grid-column:1/span 5}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]   .color-complient-container[_ngcontent-%COMP%]{-ms-grid-column:6;-ms-grid-column-span:4;grid-column:6/span 4}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]   .color-complient-container[_ngcontent-%COMP%]   .color-complient[_ngcontent-%COMP%]{align-items:center;border-radius:var(--pep-border-radius-md,.25rem);display:flex;height:var(--pep-form-field-height,2.5rem);justify-content:center;width:9.25rem}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiColorPickerComponent, [{
        type: Component,
        args: [{
                templateUrl: './color-picker.component.html',
                styleUrls: ['./color-picker.component.scss']
            }]
    }], function () { return [{ type: MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

function PepperiColorComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 4);
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
const _c0$1 = function (a0) { return { "right-alignment": a0 }; };
const _c1$1 = function (a0, a1) { return { disable: a0, "one-row": a1 }; };
const _c2$1 = function (a0) { return { "background": a0 }; };
class PepperiColorComponent {
    constructor(dialogService, renderer, element) {
        this.dialogService = dialogService;
        this.renderer = renderer;
        this.element = element;
        this.key = '';
        this.value = '';
        this.label = '';
        this.disabled = false;
        this.readonly = false;
        this.xAlignment = '0';
        this.rowSpan = 1;
        this.type = PepColorType.AnyColor;
        this.showTitle = true;
        this.showAAComplient = true;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.valueChanged = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
    }
    ngOnInit() {
        this.renderer.addClass(this.element.nativeElement, CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
    }
    ngOnDestroy() {
        if (this.valueChanged) {
            this.valueChanged.unsubscribe();
        }
    }
    changeColor(value) {
        this.value = value;
        this.valueChanged.emit({ apiName: this.key, value });
    }
    chooseColor() {
        const dialogRef = this.dialogService.openDialog(PepperiColorPickerComponent, { value: this.value, type: this.type, showAAComplient: this.showAAComplient });
        dialogRef.afterClosed().subscribe(value => {
            if (value !== undefined && value !== null) {
                this.changeColor(value);
            }
        });
    }
}
PepperiColorComponent.ɵfac = function PepperiColorComponent_Factory(t) { return new (t || PepperiColorComponent)(ɵɵdirectiveInject(DialogService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
PepperiColorComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiColorComponent, selectors: [["pep-color"]], inputs: { key: "key", value: "value", label: "label", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", type: "type", showTitle: "showTitle", showAAComplient: "showAAComplient", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, decls: 4, vars: 16, consts: [[3, "label", "disabled", "xAlignment", "showTitle"], [1, "pepperi-color-container", 3, "id", "ngClass"], ["pepRtlDirection", "", 1, "pepperi-color", "pepperi-input", 3, "ngClass", "ngStyle", "click"], ["class", "pepperi-button icon-button xs weak invert mat-button btn-edit", "tabindex", "-1", "pepButtonBlur", "", "mat-button", "", 4, "ngIf"], ["tabindex", "-1", "pepButtonBlur", "", "mat-button", "", 1, "pepperi-button", "icon-button", "xs", "weak", "invert", "mat-button", "btn-edit"], ["name", "system_edit"]], template: function PepperiColorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "pep-field-title", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵlistener("click", function PepperiColorComponent_Template_div_click_2_listener() { return ctx.chooseColor(); });
        ɵɵtemplate(3, PepperiColorComponent_button_3_Template, 3, 0, "button", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("label", ctx.label)("disabled", ctx.disabled)("xAlignment", ctx.xAlignment)("showTitle", ctx.showTitle);
        ɵɵadvance(1);
        ɵɵproperty("id", ctx.key)("ngClass", ɵɵpureFunction1(9, _c0$1, ctx.xAlignment == "2"));
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction2(11, _c1$1, ctx.disabled, ctx.rowSpan === 1))("ngStyle", ɵɵpureFunction1(14, _c2$1, ctx.value ? ctx.value : "transparent"));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.disabled);
    } }, directives: [PepperiFieldTitleComponent, NgClass, RtlDirectionDirective, NgStyle, NgIf, MatButton, ButtonBlurDirective, MatIcon, PepperiIconComponent], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid}.pepperi-color-container[_ngcontent-%COMP%]   .pepperi-color[_ngcontent-%COMP%]{display:-ms-grid;display:grid;padding:0}.pepperi-color-container[_ngcontent-%COMP%]   .pepperi-color[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]{-ms-grid-column-align:end;-ms-grid-row-align:center;align-self:center;justify-self:end;margin:0 var(--pep-spacing-md,.75rem);min-width:unset;padding:0;width:calc(var(--pep-form-field-height, 2.5rem) - var(--pep-spacing-lg, 1rem))}.pepperi-color-container.right-alignment[_ngcontent-%COMP%]   .pepperi-color[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]{-ms-grid-column-align:start;justify-self:start}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiColorComponent, [{
        type: Component,
        args: [{
                selector: 'pep-color',
                templateUrl: './color.component.html',
                styleUrls: ['./color.component.scss']
            }]
    }], function () { return [{ type: DialogService }, { type: Renderer2 }, { type: ElementRef }]; }, { key: [{
            type: Input
        }], value: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], readonly: [{
            type: Input
        }], xAlignment: [{
            type: Input
        }], rowSpan: [{
            type: Input
        }], type: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], showAAComplient: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], valueChanged: [{
            type: Output
        }] }); })();

class PepperiColorModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconSystemEdit,
            pepperiIconSystemOk,
            pepperiIconSystemClose
        ]);
    }
}
PepperiColorModule.ɵmod = ɵɵdefineNgModule({ type: PepperiColorModule });
PepperiColorModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiColorModule_Factory(t) { return new (t || PepperiColorModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules
            MatCommonModule,
            MatButtonModule,
            MatFormFieldModule,
            MatCheckboxModule,
            MatDialogModule,
            MatIconModule,
            MatSliderModule,
            // Pepperi modules
            PepperiModule,
            PepperiIconModule,
            PepperiFieldTitleModule,
            PepperiTextboxModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiColorModule, { declarations: [PepperiColorComponent, PepperiColorPickerComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDialogModule,
        MatIconModule,
        MatSliderModule,
        // Pepperi modules
        PepperiModule,
        PepperiIconModule,
        PepperiFieldTitleModule,
        PepperiTextboxModule], exports: [PepperiColorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiColorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules
                    MatCommonModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatCheckboxModule,
                    MatDialogModule,
                    MatIconModule,
                    MatSliderModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiIconModule,
                    PepperiFieldTitleModule,
                    PepperiTextboxModule
                ],
                exports: [PepperiColorComponent],
                declarations: [PepperiColorComponent, PepperiColorPickerComponent],
            }]
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();

/*
 * Public API Surface of ngx-lib/color
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepColorType, PepperiColorComponent, PepperiColorModule, contrast, convertHslToStringHsl, findClosestAccessibleColor, findClosestAccessibleDarkerColor, findClosestAccessibleLighterColor, hex2hsl, hex2rgb, hex2sixDigitHex, hsl2hex, hsl2rgb, hslString2hsl, relativeLuminance, rgb2hsl, rgb2sixDigitHex, rgbString2hsl };
//# sourceMappingURL=pepperi-addons-ngx-lib-color.js.map
