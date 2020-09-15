(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/checkbox'), require('@angular/material/dialog'), require('@angular/material/icon'), require('@angular/material/slider'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/field-title'), require('@pepperi-addons/ngx-lib/textbox'), require('@ngx-translate/core'), require('@pepperi-addons/ngx-lib/dialog')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/color', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/core', '@angular/material/button', '@angular/material/form-field', '@angular/material/checkbox', '@angular/material/dialog', '@angular/material/icon', '@angular/material/slider', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/field-title', '@pepperi-addons/ngx-lib/textbox', '@ngx-translate/core', '@pepperi-addons/ngx-lib/dialog'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].color = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.core, global.ng.material.button, global.ng.material.formField, global.ng.material.checkbox, global.ng.material.dialog, global.ng.material.icon, global.ng.material.slider, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib']['field-title'], global['pepperi-addons']['ngx-lib'].textbox, global.translate, global['pepperi-addons']['ngx-lib'].dialog));
}(this, (function (exports, i0, i5, forms, core, i2, i6, i10, i1, i3, i7, i4, i1$1, i9, i8, i11, i1$2) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var FLOAT_REGEX = /^\d+(\.\d+)?$/;
    var THREE_DIGIT_HEX_COLOR_REGEX = /^[0-9a-fA-F]{3}$/;
    var THREE_DIGIT_HEX_COLOR_WITH_HASH_REGEX = /^#[0-9a-fA-F]{3}$/;
    var SIX_DIGIT_HEX_COLOR_REGEX = /^[0-9a-fA-F]{6}$/;
    var SIX_DIGIT_HEX_COLOR_WITH_HASH_REGEX = /^#[0-9a-fA-F]{6}$/;
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
        var sixDigitHex = hex2sixDigitHex(str);
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
        var sep = str.indexOf(',') > -1 ? ',' : ' ';
        var rgbArr = str.substr(4).split(')')[0].split(sep);
        var r = rgbArr[0];
        var g = rgbArr[1].substr(0, rgbArr[1].length).trim();
        var b = rgbArr[2].substr(0, rgbArr[2].length).trim();
        return rgb2hsl({ r: r, g: g, b: b });
    }
    function rgb2hsl(_a) {
        var r = _a.r, g = _a.g, b = _a.b;
        r /= 255;
        g /= 255;
        b /= 255;
        // Find greatest and smallest channel values
        var cmin = Math.min(r, g, b);
        var cmax = Math.max(r, g, b);
        var delta = cmax - cmin;
        var h = 0;
        var s = 0;
        var l = 0;
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
        return { h: h, s: s, l: l };
    }
    function hslString2hsl(str) {
        var sep = str.indexOf(',') > -1 ? ',' : ' ';
        var hslArr = str.substr(4).split(')')[0].split(sep);
        var h = hslArr[0];
        var s = hslArr[1].substr(0, hslArr[1].length).trim();
        var l = hslArr[2].substr(0, hslArr[2].length).trim();
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
        return { h: h, s: s, l: l };
    }
    function hsl2rgb(_a) {
        var h = _a.h, s = _a.s, l = _a.l;
        var r;
        var g;
        var b;
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
        var c = (1 - Math.abs((2 * l) - 1)) * s;
        var x = c * (1 - Math.abs((h % 2) - 1));
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
        var m = l - c / 2;
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);
        return { r: r, g: g, b: b };
    }
    function hex2hsl(str) {
        var sixDigitHex = hex2sixDigitHex(str);
        if (sixDigitHex === null) {
            return null;
        }
        var rgb = hex2rgb(sixDigitHex);
        if (rgb === null) {
            return null;
        }
        return rgb2hsl(rgb);
    }
    function hsl2hex(hsl) {
        var rgb = hsl2rgb(hsl);
        return rgb2sixDigitHex(rgb);
    }
    function relativeLuminance(_a) {
        var _b;
        var r = _a.r, g = _a.g, b = _a.b;
        _b = __read([r, g, b].map(function (c) {
            c = c / 255;
            if (c <= 0.03928) {
                return c / 12.92;
            }
            return Math.pow((c + 0.055) / 1.055, 2.4);
        }), 3), r = _b[0], g = _b[1], b = _b[2];
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    function contrast(str1, str2) {
        var L1 = relativeLuminance(hex2rgb(str1));
        var L2 = relativeLuminance(hex2rgb(str2));
        if (L1 < L2) {
            return (L2 + 0.05) / (L1 + 0.05);
        }
        return (L1 + 0.05) / (L2 + 0.05);
    }
    function findClosestAccessibleDarkerColor(adjustableColor, otherColor, contrastRatio) {
        var _a = hex2hsl(adjustableColor), h = _a.h, s = _a.s, l = _a.l;
        if (contrast(adjustableColor, otherColor) >= contrastRatio) {
            return {
                color: adjustableColor,
                lightness: l
            };
        }
        var minColor = hsl2hex({ h: h, s: s, l: 0 });
        if (contrast(minColor, otherColor) < contrastRatio) {
            return null;
        }
        var min = 0;
        var max = l;
        var maxColor = hsl2hex({ h: h, s: s, l: l });
        var lastMinColor;
        var lastMaxColor;
        while (minColor !== lastMinColor || maxColor !== lastMaxColor) {
            lastMinColor = minColor;
            lastMaxColor = maxColor;
            l = (min + max) / 2;
            adjustableColor = hsl2hex({ h: h, s: s, l: l });
            if (contrast(adjustableColor, otherColor) < contrastRatio) {
                max = l;
                maxColor = hsl2hex({ h: h, s: s, l: l });
            }
            else {
                min = l;
                minColor = hsl2hex({ h: h, s: s, l: l });
            }
        }
        return {
            color: minColor,
            lightness: min
        };
    }
    function findClosestAccessibleLighterColor(adjustableColor, otherColor, contrastRatio) {
        var _a = hex2hsl(adjustableColor), h = _a.h, s = _a.s, l = _a.l;
        if (contrast(adjustableColor, otherColor) >= contrastRatio) {
            return {
                color: adjustableColor,
                lightness: l
            };
        }
        var maxColor = hsl2hex({ h: h, s: s, l: 100 });
        if (contrast(maxColor, otherColor) < contrastRatio) {
            return null;
        }
        var min = l;
        var max = 100;
        var minColor = hsl2hex({ h: h, s: s, l: l });
        var lastMinColor;
        var lastMaxColor;
        while (minColor !== lastMinColor || maxColor !== lastMaxColor) {
            lastMinColor = minColor;
            lastMaxColor = maxColor;
            l = (min + max) / 2;
            adjustableColor = hsl2hex({ h: h, s: s, l: l });
            if (contrast(adjustableColor, otherColor) < contrastRatio) {
                min = l;
                minColor = hsl2hex({ h: h, s: s, l: l });
            }
            else {
                max = l;
                maxColor = hsl2hex({ h: h, s: s, l: l });
            }
        }
        return {
            color: maxColor,
            lightness: max
        };
    }
    function findClosestAccessibleColor(adjustableColor, otherColor, contrastRatio) {
        var closestDarkerColor = findClosestAccessibleDarkerColor(adjustableColor, otherColor, contrastRatio);
        var closestLighterColor = findClosestAccessibleLighterColor(adjustableColor, otherColor, contrastRatio);
        if (closestDarkerColor === null) {
            if (closestLighterColor === null) {
                return null;
            }
            return closestLighterColor.color;
        }
        if (closestLighterColor === null) {
            return closestDarkerColor.color;
        }
        var l = hex2hsl(adjustableColor).l;
        if (closestLighterColor.lightness - l < l - closestDarkerColor.lightness) {
            return closestLighterColor.color;
        }
        return closestDarkerColor.color;
    }
    function convertHslToStringHsl(hsl) {
        return 'hsl(' + (hsl.h < 0 ? hsl.h + 360 : hsl.h) + ', ' + hsl.s + '%, ' + hsl.l + '%)';
    }

    (function (PepColorType) {
        PepColorType[PepColorType["AnyColor"] = 0] = "AnyColor";
        PepColorType[PepColorType["MainColor"] = 1] = "MainColor";
        PepColorType[PepColorType["SuccessColor"] = 2] = "SuccessColor";
        PepColorType[PepColorType["CautionColor"] = 3] = "CautionColor";
    })(exports.PepColorType || (exports.PepColorType = {}));

    function PepperiColorPickerComponent_div_33_mat_icon_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-icon");
            i0.ɵɵelement(1, "pep-icon", 27);
            i0.ɵɵelementEnd();
        }
    }
    var _c0 = function (a0) { return { "background": a0 }; };
    function PepperiColorPickerComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 23);
            i0.ɵɵelement(1, "pep-field-title", 24);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementStart(3, "div", 25);
            i0.ɵɵtemplate(4, PepperiColorPickerComponent_div_33_mat_icon_4_Template, 2, 0, "mat-icon", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", i0.ɵɵpipeBind1(2, 3, "COLOR.AA_COMPLIENT"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c0, ctx_r0.complientColor));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.isUserChooseAAComplientColor);
        }
    }
    function PepperiColorPickerComponent_mat_checkbox_36_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-checkbox", 28);
            i0.ɵɵlistener("change", function PepperiColorPickerComponent_mat_checkbox_36_Template_mat_checkbox_change_0_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.checkAAComplient = !ctx_r3.checkAAComplient; });
            i0.ɵɵelementStart(1, "span", 29);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("checked", ctx_r1.checkAAComplient);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "COLOR.AA_COMPLIENT"));
        }
    }
    var _c1 = function (a0, a1, a2) { return { "main": a0, "success": a1, "caution": a2 }; };
    var _c2 = function (a0) { return { "with-complient": a0 }; };
    var ContrastRatioType;
    (function (ContrastRatioType) {
        ContrastRatioType[ContrastRatioType["AA"] = 4.5] = "AA";
        ContrastRatioType[ContrastRatioType["AAA"] = 7] = "AAA";
    })(ContrastRatioType || (ContrastRatioType = {}));
    var PepperiColorPickerComponent = /** @class */ (function () {
        function PepperiColorPickerComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.PepColorType = exports.PepColorType;
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
            this.data.type = data ? data.type : exports.PepColorType.AnyColor;
            this.data.showAAComplient = data && data.showAAComplient === undefined ? true : (data ? data.showAAComplient : false);
            this.data.textColor = data && data.textColor ? data.textColor : '#fff';
            this.data.contrastRatio = data && data.contrastRatio ? data.contrastRatio : ContrastRatioType.AA;
        }
        PepperiColorPickerComponent.prototype.ngOnInit = function () {
            this.initVars();
            this.checkAAComplient = this.data.showAAComplient;
            this.convertValueStringToColor(this.data.value);
        };
        PepperiColorPickerComponent.prototype.initVars = function () {
            if (this.data.type === exports.PepColorType.MainColor) {
                this.currentLightnessMax = 10;
                this.currentLightness = 5;
            }
            else if (this.data.type === exports.PepColorType.SuccessColor) {
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
            else if (this.data.type === exports.PepColorType.CautionColor) {
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
        };
        PepperiColorPickerComponent.prototype.setCurrentHueInCss = function () {
            document.documentElement.style.setProperty(PepperiColorPickerComponent.CURRENT_HUE, this.currentHue.toString());
        };
        PepperiColorPickerComponent.prototype.convertValueStringToColor = function (color) {
            if (color.indexOf('hsl') === 0) {
                var hsl = hslString2hsl(color);
                this.convertColorToValueString(hsl);
            }
            else if (color.indexOf('rgb') === 0) {
                var hsl = rgbString2hsl(color);
                this.convertColorToValueString(hsl);
            }
            else if (color.indexOf('#') === 0) {
                var hsl = hex2hsl(color);
                this.convertColorToValueString(hsl);
            }
            else {
                // Handle other colors.
            }
            this.setCurrentHueInCss();
        };
        PepperiColorPickerComponent.prototype.convertColorToValueString = function (hslColor) {
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
            var hsl = { h: this.currentHue, s: this.currentSaturation, l: this.currentLightness };
            this.data.value = convertHslToStringHsl(hsl);
            // Check the contrast ratio - set the closest accessible color to complientColor
            // and update isUserChooseAAComplientColor.
            var adjustableColor = hsl2hex(hsl);
            var closestHex = findClosestAccessibleColor(adjustableColor, this.data.textColor, this.data.contrastRatio);
            this.isUserChooseAAComplientColor = adjustableColor === closestHex;
            this.complientColor = convertHslToStringHsl(hex2hsl(closestHex));
        };
        PepperiColorPickerComponent.prototype.onHueChange = function (event) {
            this.convertColorToValueString({ h: event.value });
            this.setCurrentHueInCss();
        };
        PepperiColorPickerComponent.prototype.onSaturationChange = function (event) {
            // this.currentSaturation = event.value;
            this.convertColorToValueString({ s: event.value });
        };
        PepperiColorPickerComponent.prototype.onLightnessChange = function (event) {
            // this.currentLightness = event.value;
            this.convertColorToValueString({ l: this.currentLightnessMax - event.value + this.currentLightnessMin });
        };
        PepperiColorPickerComponent.prototype.onColorValueChange = function (event) {
            this.convertValueStringToColor(event.value);
        };
        PepperiColorPickerComponent.prototype.onSave = function (event) {
            var color = this.checkAAComplient ? this.complientColor : this.data.value;
            // this.notify.emit({ key: this.key, value: color });
            this.dialogRef.close(color);
        };
        return PepperiColorPickerComponent;
    }());
    PepperiColorPickerComponent.CURRENT_HUE = '--pep-color-picker-current-hue';
    PepperiColorPickerComponent.ɵfac = function PepperiColorPickerComponent_Factory(t) { return new (t || PepperiColorPickerComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i1.MAT_DIALOG_DATA)); };
    PepperiColorPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiColorPickerComponent, selectors: [["ng-component"]], decls: 44, vars: 58, consts: [[1, "pepperi-color-picker-container"], ["mat-dialog-title", "", 1, "pepperi-border-bottom"], [1, "pull-left", "flip"], ["mat-button", "", 1, "pepperi-button", "icon-button", "md", "weak", "pull-right", "flip", 3, "mat-dialog-close"], ["name", "system_close"], ["mat-dialog-content", ""], [1, "color-chooser-content"], [1, "current-color", 3, "ngStyle"], [1, "slider-box"], [1, "body-xs"], [1, "current-hue", 3, "ngClass"], ["step", "1", 3, "min", "max", "value", "change"], [1, "current-saturation", 3, "ngClass"], [1, "current-lightness", 3, "ngClass"], [1, "color-value-content"], [1, "color-value", 3, "ngClass"], [3, "key", "label", "formattedValue", "value", "valueChanged"], ["class", "color-complient-container", 4, "ngIf"], ["mat-dialog-actions", "", 1, "pepperi-border-top", "split-actions"], ["type", "checkbox", "id", "checkAAComplient", 3, "checked", "change", 4, "ngIf"], [1, "spacing-element-negative"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "cancel-btn", "md", "weak", 3, "mat-dialog-close"], ["mat-button", "", 1, "spacing-element", "pepperi-button", "save-btn", "md", "strong", 3, "click"], [1, "color-complient-container"], [3, "label"], [1, "color-complient", 3, "ngStyle"], [4, "ngIf"], ["name", "system_ok"], ["type", "checkbox", "id", "checkAAComplient", 3, "checked", "change"], [1, "body-xs", "ellipsis"]], template: function PepperiColorPickerComponent_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
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
            }
        }, directives: [i1.MatDialogTitle, i2.MatButton, i1.MatDialogClose, i3.MatIcon, i1$1.PepperiIconComponent, i1.MatDialogContent, i5.NgStyle, i6.MatLabel, i5.NgClass, i7.MatSlider, i8.PepperiTextboxComponent, i5.NgIf, i1.MatDialogActions, i9.PepperiFieldTitleComponent, i10.MatCheckbox], pipes: [i11.TranslatePipe], styles: [".mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-track-background[_ngcontent-%COMP%]{display:none}.pepperi-color-picker-container[_ngcontent-%COMP%]   .mat-dialog-title[_ngcontent-%COMP%]{margin-bottom:0}.pepperi-color-picker-container[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]{padding-bottom:var(--pep-spacing-sm,.5rem);padding-left:var(--pep-spacing-sm,.5rem);padding-right:var(--pep-spacing-sm,.5rem)}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-chooser-content[_ngcontent-%COMP%]{-ms-grid-columns:(1fr)[8];-ms-grid-rows:(1fr)[3];display:-ms-grid;display:grid;grid-column-gap:var(--pep-spacing-xl,1.5rem);grid-row-gap:var(--pep-spacing-sm,.5rem);grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(3,1fr);margin-top:var(--pep-spacing-sm,.5rem)}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-chooser-content[_ngcontent-%COMP%]   .current-color[_ngcontent-%COMP%]{-ms-grid-column:6;-ms-grid-column-span:4;-ms-grid-row:1;-ms-grid-row-span:3;border-radius:var(--pep-border-radius-md,.25rem);grid-column:6/span 4;grid-row:1/span 3;height:9.25rem;width:9.25rem}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-chooser-content[_ngcontent-%COMP%]   .slider-box[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:5;grid-column:1/span 5}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]{-ms-grid-columns:(1fr)[8];-ms-grid-rows:(1fr)[1];display:-ms-grid;display:grid;grid-column-gap:var(--pep-spacing-xl,1.5rem);grid-row-gap:var(--pep-spacing-sm,.5rem);grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(1,1fr);margin-top:1.5rem}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]   .color-value[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:9;-ms-grid-row:1;-ms-grid-row-span:1;grid-column:1/span 9;grid-row:1/span 1}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]   .color-value.with-complient[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-column-span:5;grid-column:1/span 5}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]   .color-complient-container[_ngcontent-%COMP%]{-ms-grid-column:6;-ms-grid-column-span:4;grid-column:6/span 4}.pepperi-color-picker-container[_ngcontent-%COMP%]   .color-value-content[_ngcontent-%COMP%]   .color-complient-container[_ngcontent-%COMP%]   .color-complient[_ngcontent-%COMP%]{align-items:center;border-radius:var(--pep-border-radius-md,.25rem);display:flex;height:var(--pep-form-field-height,2.5rem);justify-content:center;width:9.25rem}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiColorPickerComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './color-picker.component.html',
                        styleUrls: ['./color-picker.component.scss']
                    }]
            }], function () {
            return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.MAT_DIALOG_DATA]
                        }] }];
        }, null);
    })();

    function PepperiColorComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 4);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var _c0$1 = function (a0) { return { "right-alignment": a0 }; };
    var _c1$1 = function (a0, a1) { return { disable: a0, "one-row": a1 }; };
    var _c2$1 = function (a0) { return { "background": a0 }; };
    var PepperiColorComponent = /** @class */ (function () {
        function PepperiColorComponent(dialogService, renderer, element) {
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
            this.type = exports.PepColorType.AnyColor;
            this.showTitle = true;
            this.showAAComplient = true;
            this.layoutType = i4.LAYOUT_TYPE.PepperiForm;
            this.valueChanged = new i0.EventEmitter();
            this.LAYOUT_TYPE = i4.LAYOUT_TYPE;
        }
        PepperiColorComponent.prototype.ngOnInit = function () {
            this.renderer.addClass(this.element.nativeElement, i4.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
        };
        PepperiColorComponent.prototype.ngOnDestroy = function () {
            if (this.valueChanged) {
                this.valueChanged.unsubscribe();
            }
        };
        PepperiColorComponent.prototype.changeColor = function (value) {
            this.value = value;
            this.valueChanged.emit({ apiName: this.key, value: value });
        };
        PepperiColorComponent.prototype.chooseColor = function () {
            var _this = this;
            var dialogRef = this.dialogService.openDialog(PepperiColorPickerComponent, { value: this.value, type: this.type, showAAComplient: this.showAAComplient });
            dialogRef.afterClosed().subscribe(function (value) {
                if (value !== undefined && value !== null) {
                    _this.changeColor(value);
                }
            });
        };
        return PepperiColorComponent;
    }());
    PepperiColorComponent.ɵfac = function PepperiColorComponent_Factory(t) { return new (t || PepperiColorComponent)(i0.ɵɵdirectiveInject(i1$2.DialogService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PepperiColorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiColorComponent, selectors: [["pep-color"]], inputs: { key: "key", value: "value", label: "label", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", type: "type", showTitle: "showTitle", showAAComplient: "showAAComplient", layoutType: "layoutType" }, outputs: { valueChanged: "valueChanged" }, decls: 4, vars: 16, consts: [[3, "label", "disabled", "xAlignment", "showTitle"], [1, "pepperi-color-container", 3, "id", "ngClass"], ["pepRtlDirection", "", 1, "pepperi-color", "pepperi-input", 3, "ngClass", "ngStyle", "click"], ["class", "pepperi-button icon-button xs weak invert mat-button btn-edit", "tabindex", "-1", "pepButtonBlur", "", "mat-button", "", 4, "ngIf"], ["tabindex", "-1", "pepButtonBlur", "", "mat-button", "", 1, "pepperi-button", "icon-button", "xs", "weak", "invert", "mat-button", "btn-edit"], ["name", "system_edit"]], template: function PepperiColorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "pep-field-title", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵlistener("click", function PepperiColorComponent_Template_div_click_2_listener() { return ctx.chooseColor(); });
                i0.ɵɵtemplate(3, PepperiColorComponent_button_3_Template, 3, 0, "button", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("label", ctx.label)("disabled", ctx.disabled)("xAlignment", ctx.xAlignment)("showTitle", ctx.showTitle);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("id", ctx.key)("ngClass", i0.ɵɵpureFunction1(9, _c0$1, ctx.xAlignment == "2"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(11, _c1$1, ctx.disabled, ctx.rowSpan === 1))("ngStyle", i0.ɵɵpureFunction1(14, _c2$1, ctx.value ? ctx.value : "transparent"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.disabled);
            }
        }, directives: [i9.PepperiFieldTitleComponent, i5.NgClass, i4.RtlDirectionDirective, i5.NgStyle, i5.NgIf, i2.MatButton, i4.ButtonBlurDirective, i3.MatIcon, i1$1.PepperiIconComponent], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid}.pepperi-color-container[_ngcontent-%COMP%]   .pepperi-color[_ngcontent-%COMP%]{display:-ms-grid;display:grid;padding:0}.pepperi-color-container[_ngcontent-%COMP%]   .pepperi-color[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]{-ms-grid-column-align:end;-ms-grid-row-align:center;align-self:center;justify-self:end;margin:0 var(--pep-spacing-md,.75rem);min-width:unset;padding:0;width:calc(var(--pep-form-field-height, 2.5rem) - var(--pep-spacing-lg, 1rem))}.pepperi-color-container.right-alignment[_ngcontent-%COMP%]   .pepperi-color[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]{-ms-grid-column-align:start;justify-self:start}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiColorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-color',
                        templateUrl: './color.component.html',
                        styleUrls: ['./color.component.scss']
                    }]
            }], function () { return [{ type: i1$2.DialogService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], readonly: [{
                    type: i0.Input
                }], xAlignment: [{
                    type: i0.Input
                }], rowSpan: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], showTitle: [{
                    type: i0.Input
                }], showAAComplient: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], valueChanged: [{
                    type: i0.Output
                }] });
    })();

    var PepperiColorModule = /** @class */ (function () {
        function PepperiColorModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1$1.pepperiIconSystemEdit,
                i1$1.pepperiIconSystemOk,
                i1$1.pepperiIconSystemClose
            ]);
        }
        return PepperiColorModule;
    }());
    PepperiColorModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiColorModule });
    PepperiColorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiColorModule_Factory(t) { return new (t || PepperiColorModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
                i5.CommonModule,
                forms.ReactiveFormsModule,
                forms.FormsModule,
                // Material modules
                core.MatCommonModule,
                i2.MatButtonModule,
                i6.MatFormFieldModule,
                i10.MatCheckboxModule,
                i1.MatDialogModule,
                i3.MatIconModule,
                i7.MatSliderModule,
                // Pepperi modules
                i4.PepperiModule,
                i1$1.PepperiIconModule,
                i9.PepperiFieldTitleModule,
                i8.PepperiTextboxModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiColorModule, { declarations: [PepperiColorComponent, PepperiColorPickerComponent], imports: [i5.CommonModule,
                forms.ReactiveFormsModule,
                forms.FormsModule,
                // Material modules
                core.MatCommonModule,
                i2.MatButtonModule,
                i6.MatFormFieldModule,
                i10.MatCheckboxModule,
                i1.MatDialogModule,
                i3.MatIconModule,
                i7.MatSliderModule,
                // Pepperi modules
                i4.PepperiModule,
                i1$1.PepperiIconModule,
                i9.PepperiFieldTitleModule,
                i8.PepperiTextboxModule], exports: [PepperiColorComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiColorModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i5.CommonModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule,
                            // Material modules
                            core.MatCommonModule,
                            i2.MatButtonModule,
                            i6.MatFormFieldModule,
                            i10.MatCheckboxModule,
                            i1.MatDialogModule,
                            i3.MatIconModule,
                            i7.MatSliderModule,
                            // Pepperi modules
                            i4.PepperiModule,
                            i1$1.PepperiIconModule,
                            i9.PepperiFieldTitleModule,
                            i8.PepperiTextboxModule
                        ],
                        exports: [PepperiColorComponent],
                        declarations: [PepperiColorComponent, PepperiColorPickerComponent],
                    }]
            }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/color
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiColorComponent = PepperiColorComponent;
    exports.PepperiColorModule = PepperiColorModule;
    exports.contrast = contrast;
    exports.convertHslToStringHsl = convertHslToStringHsl;
    exports.findClosestAccessibleColor = findClosestAccessibleColor;
    exports.findClosestAccessibleDarkerColor = findClosestAccessibleDarkerColor;
    exports.findClosestAccessibleLighterColor = findClosestAccessibleLighterColor;
    exports.hex2hsl = hex2hsl;
    exports.hex2rgb = hex2rgb;
    exports.hex2sixDigitHex = hex2sixDigitHex;
    exports.hsl2hex = hsl2hex;
    exports.hsl2rgb = hsl2rgb;
    exports.hslString2hsl = hslString2hsl;
    exports.relativeLuminance = relativeLuminance;
    exports.rgb2hsl = rgb2hsl;
    exports.rgb2sixDigitHex = rgb2sixDigitHex;
    exports.rgbString2hsl = rgbString2hsl;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-color.umd.js.map
