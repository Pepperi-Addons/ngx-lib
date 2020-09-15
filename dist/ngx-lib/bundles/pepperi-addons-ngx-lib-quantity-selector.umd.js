(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/button'), require('@angular/material/badge'), require('@angular/material/icon'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/field-title'), require('@angular/animations'), require('jquery'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/quantity-selector', ['exports', '@angular/core', '@angular/common', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/forms', '@angular/material/core', '@angular/material/form-field', '@angular/material/input', '@angular/material/button', '@angular/material/badge', '@angular/material/icon', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/field-title', '@angular/animations', 'jquery', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib']['quantity-selector'] = {}), global.ng.core, global.ng.common, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.forms, global.ng.material.core, global.ng.material.formField, global.ng.material.input, global.ng.material.button, global.ng.material.badge, global.ng.material.icon, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib']['field-title'], global.ng.animations, global.jquery, global.translate));
}(this, (function (exports, i0, i3, platformBrowser, animations, i2, core, i6, i7, i5, i10, i8, i1, i1$1, i4, animations$1, $, i12) { 'use strict';

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

    var QuantitySelectorNumber = /** @class */ (function () {
        function QuantitySelectorNumber() {
        }
        QuantitySelectorNumber.prototype.transform = function (value, allowDecimal) {
            var tmpValue = parseFloat(value);
            if (tmpValue === 0) {
                return '0';
            }
            else if (allowDecimal) {
                return tmpValue.toString();
            }
            else {
                return parseInt(value).toString();
            }
        };
        return QuantitySelectorNumber;
    }());
    QuantitySelectorNumber.ɵfac = function QuantitySelectorNumber_Factory(t) { return new (t || QuantitySelectorNumber)(); };
    QuantitySelectorNumber.ɵpipe = i0.ɵɵdefinePipe({ name: "quantitySelectorNumber", type: QuantitySelectorNumber, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(QuantitySelectorNumber, [{
                type: i0.Pipe,
                args: [{ name: 'quantitySelectorNumber' }]
            }], null, null);
    })();

    var _c0 = ["QSCont"];
    var _c1 = ["QSInput"];
    function PepperiQuantitySelectorComponent_ng_template_1_pep_field_title_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-field-title", 6);
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("label", ctx_r7.label)("required", ctx_r7.required)("disabled", ctx_r7.disabled)("showTitle", ctx_r7.showTitle)("xAlignment", ctx_r7.xAlignment);
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c2 = function (a0, a1, a2) { return { caution: a0, md: a1, xs: a2 }; };
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 10);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r14 = i0.ɵɵnextContext(3);
            i0.ɵɵclassMapInterpolate1("pepperi-button ", ctx_r14.styleClass, " ellipsis");
            i0.ɵɵpropertyInterpolate("title", ctx_r14.formattedValue);
            i0.ɵɵproperty("id", ctx_r14.key)("ngClass", i0.ɵɵpureFunction3(7, _c2, ctx_r14.isCaution, ctx_r14.rowSpan !== 1, ctx_r14.rowSpan === 1));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r14.formattedValue, " ");
        }
    }
    var _c3 = function (a0, a1) { return { caution: a0, "keep-background-on-focus": a1 }; };
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 16);
            i0.ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_4_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r21 = i0.ɵɵnextContext(4); return ctx_r21.decrement($event); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r18.isCaution && ctx_r18.styleClass !== ctx_r18.STYLE_TYPE.Strong, ctx_r18.styleClass === ctx_r18.STYLE_TYPE.Strong));
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 18);
            i0.ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_5_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r24_1); var ctx_r23 = i0.ɵɵnextContext(4); return ctx_r23.increment($event); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r19 = i0.ɵɵnextContext(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r19.isCaution && ctx_r19.styleClass !== ctx_r19.STYLE_TYPE.Strong, ctx_r19.styleClass === ctx_r19.STYLE_TYPE.Strong));
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_mat_error_6_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 21);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var msg_r26 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(2, 2, msg_r26.Key), " : ", msg_r26.Value, " ");
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_mat_error_6_span_1_Template, 3, 4, "span", 20);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r20 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r20.messages);
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r28_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field", 11);
            i0.ɵɵelementStart(1, "input", 12, 13);
            i0.ɵɵlistener("keypress", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r28_1); var ctx_r27 = i0.ɵɵnextContext(3); return ctx_r27.onKeyPress($event); })("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template_input_click_1_listener($event) { i0.ɵɵrestoreView(_r28_1); return $event.target.setSelectionRange(0, 999); })("blur", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template_input_blur_1_listener($event) { i0.ɵɵrestoreView(_r28_1); var ctx_r30 = i0.ɵɵnextContext(3); return ctx_r30.onBlur($event); })("focus", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template_input_focus_1_listener($event) { i0.ɵɵrestoreView(_r28_1); var ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.onFocus($event); });
            i0.ɵɵpipe(3, "quantitySelectorNumber");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_4_Template, 3, 4, "button", 14);
            i0.ɵɵtemplate(5, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_button_5_Template, 3, 4, "button", 15);
            i0.ɵɵtemplate(6, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_mat_error_6_Template, 2, 1, "mat-error", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("name", ctx_r16.key);
            i0.ɵɵpropertyInterpolate("title", ctx_r16.formattedValue);
            i0.ɵɵproperty("id", ctx_r16.key)("formControlName", ctx_r16.key)("value", ctx_r16.isFocus ? i0.ɵɵpipeBind2(3, 9, ctx_r16.value, ctx_r16.alowDecimal) : ctx_r16.formattedValue)("disabled", ctx_r16.disabled);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx_r16.showQsBtn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r16.showQsBtn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx_r16.messages == null ? null : ctx_r16.messages.length) > 0);
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 7);
            i0.ɵɵtemplate(2, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_2_Template, 2, 11, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_ng_template_4_Template, 7, 12, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r13 = i0.ɵɵreference(3);
            var _r15 = i0.ɵɵreference(5);
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r8.readonly)("ngIfThen", _r13)("ngIfElse", _r15);
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 22);
            i0.ɵɵtext(1, " X ");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r34 = i0.ɵɵnextContext(3);
            i0.ɵɵclassMapInterpolate1("pepperi-button ", ctx_r34.styleClass, " disabled");
            i0.ɵɵproperty("id", ctx_r34.key)("ngClass", i0.ɵɵpureFunction3(5, _c2, ctx_r34.isCaution, ctx_r34.rowSpan !== 1, ctx_r34.rowSpan === 1));
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_span_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 27);
        }
        if (rf & 2) {
            var ctx_r37 = i0.ɵɵnextContext(4);
            i0.ɵɵpropertyInterpolate("matBadge", ctx_r37.additionalValue);
            i0.ɵɵproperty("@showHide", ctx_r37.getAdditionalValue);
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_mat_error_5_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 21);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var msg_r42 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(2, 2, msg_r42.Key), " : ", msg_r42.Value, " ");
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_mat_error_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_mat_error_5_span_1_Template, 3, 4, "span", 20);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r39 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r39.messages);
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_span_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 28);
        }
        if (rf & 2) {
            var ctx_r40 = i0.ɵɵnextContext(4);
            i0.ɵɵpropertyInterpolate("matBadge", ctx_r40.additionalValue);
            i0.ɵɵproperty("@showHide", ctx_r40.getAdditionalValue);
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r44_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_span_0_Template, 1, 2, "span", 23);
            i0.ɵɵelementStart(1, "mat-form-field", 24);
            i0.ɵɵlistener("mouseleave", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_mat_form_field_mouseleave_1_listener($event) { i0.ɵɵrestoreView(_r44_1); var ctx_r43 = i0.ɵɵnextContext(3); return !ctx_r43.isFocus ? ctx_r43.onMatrixMouseleave($event) : null; });
            i0.ɵɵelementStart(2, "input", 25, 13);
            i0.ɵɵlistener("keypress", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_keypress_2_listener($event) { i0.ɵɵrestoreView(_r44_1); var ctx_r45 = i0.ɵɵnextContext(3); return ctx_r45.onKeyPress($event); })("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_click_2_listener($event) { i0.ɵɵrestoreView(_r44_1); var ctx_r46 = i0.ɵɵnextContext(3); ctx_r46.onMatrixClick($event); return $event.target.setSelectionRange(0, 999); })("blur", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_blur_2_listener($event) { i0.ɵɵrestoreView(_r44_1); var ctx_r47 = i0.ɵɵnextContext(3); return ctx_r47.onMatrixBlur($event); })("focus", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_focus_2_listener($event) { i0.ɵɵrestoreView(_r44_1); var ctx_r48 = i0.ɵɵnextContext(3); ctx_r48.onMatrixMouseEnter($event); return ctx_r48.onFocus($event); })("mouseenter", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template_input_mouseenter_2_listener($event) { i0.ɵɵrestoreView(_r44_1); var ctx_r49 = i0.ɵɵnextContext(3); return ctx_r49.onMatrixMouseEnter($event); });
            i0.ɵɵpipe(4, "quantitySelectorNumber");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_mat_error_5_Template, 2, 1, "mat-error", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_span_6_Template, 1, 2, "span", 26);
        }
        if (rf & 2) {
            var ctx_r36 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngIf", ctx_r36.xAlignment == "2");
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("name", ctx_r36.key);
            i0.ɵɵpropertyInterpolate("title", ctx_r36.formattedValue);
            i0.ɵɵproperty("id", ctx_r36.key)("formControlName", ctx_r36.key)("value", ctx_r36.isFocus ? i0.ɵɵpipeBind2(4, 9, ctx_r36.value, ctx_r36.alowDecimal) : ctx_r36.formattedValue)("disabled", ctx_r36.disabled);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", (ctx_r36.messages == null ? null : ctx_r36.messages.length) > 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r36.xAlignment != "2");
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 7);
            i0.ɵɵtemplate(2, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_2_Template, 2, 9, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_ng_template_4_Template, 7, 12, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r33 = i0.ɵɵreference(3);
            var _r35 = i0.ɵɵreference(5);
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r9.readonly)("ngIfThen", _r33)("ngIfElse", _r35);
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r56_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 31);
            i0.ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r56_1); var ctx_r55 = i0.ɵɵnextContext(3); return ctx_r55.enterChildren($event); });
            i0.ɵɵpipe(1, "translate");
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r52 = i0.ɵɵnextContext(3);
            i0.ɵɵclassMapInterpolate1("pepperi-button ", ctx_r52.styleClass, " ellipsis");
            i0.ɵɵpropertyInterpolate("name", ctx_r52.key);
            i0.ɵɵproperty("id", ctx_r52.key)("ngClass", i0.ɵɵpureFunction3(12, _c2, ctx_r52.isCaution, ctx_r52.rowSpan !== 1, ctx_r52.rowSpan === 1))("title", i0.ɵɵpipeBind1(1, 8, "QS.ORDER"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 10, "QS.ORDER"), " ");
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r63_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 34);
            i0.ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r63_1); var ctx_r62 = i0.ɵɵnextContext(4); return ctx_r62.enterChildren($event); });
            i0.ɵɵpipe(1, "translate");
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r59 = i0.ɵɵnextContext(4);
            i0.ɵɵclassMapInterpolate1("pepperi-button ", ctx_r59.styleClass, " ellipsis right-alignment");
            i0.ɵɵpropertyInterpolate("matBadge", ctx_r59.formattedValue);
            i0.ɵɵpropertyInterpolate("name", ctx_r59.key);
            i0.ɵɵproperty("matBadgeSize", ctx_r59.layoutType === ctx_r59.LAYOUT_TYPE.PepperiCard && ctx_r59.rowSpan === 1 ? "small" : "medium")("id", ctx_r59.key)("ngClass", i0.ɵɵpureFunction3(14, _c2, ctx_r59.isCaution, ctx_r59.rowSpan !== 1, ctx_r59.rowSpan === 1))("title", i0.ɵɵpipeBind1(1, 10, "QS.ORDER"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 12, "QS.ORDER"), " ");
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r65_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 35);
            i0.ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r65_1); var ctx_r64 = i0.ɵɵnextContext(4); return ctx_r64.enterChildren($event); });
            i0.ɵɵpipe(1, "translate");
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r61 = i0.ɵɵnextContext(4);
            i0.ɵɵclassMapInterpolate1("pepperi-button ", ctx_r61.styleClass, " ellipsis left-alignment");
            i0.ɵɵpropertyInterpolate("matBadge", ctx_r61.formattedValue);
            i0.ɵɵpropertyInterpolate("name", ctx_r61.key);
            i0.ɵɵproperty("matBadgeSize", ctx_r61.layoutType === ctx_r61.LAYOUT_TYPE.PepperiCard && ctx_r61.rowSpan === 1 ? "small" : "medium")("id", ctx_r61.key)("ngClass", i0.ɵɵpureFunction3(14, _c2, ctx_r61.isCaution, ctx_r61.rowSpan !== 1, ctx_r61.rowSpan === 1))("title", i0.ɵɵpipeBind1(1, 10, "QS.ORDER"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 12, "QS.ORDER"), " ");
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 7);
            i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_1_Template, 4, 18, "ng-template", null, 32, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_ng_template_3_Template, 4, 18, "ng-template", null, 33, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r58 = i0.ɵɵreference(2);
            var _r60 = i0.ɵɵreference(4);
            var ctx_r54 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngIf", ctx_r54.xAlignment == "2")("ngIfThen", _r58)("ngIfElse", _r60);
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 7);
            i0.ɵɵtemplate(2, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_2_Template, 4, 16, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_ng_template_4_Template, 5, 3, "ng-template", null, 30, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r51 = i0.ɵɵreference(3);
            var _r53 = i0.ɵɵreference(5);
            var ctx_r10 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r10.value == "0")("ngIfThen", _r51)("ngIfElse", _r53);
        }
    }
    function PepperiQuantitySelectorComponent_ng_template_1_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r67_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "button", 36);
            i0.ɵɵlistener("click", function PepperiQuantitySelectorComponent_ng_template_1_ng_container_6_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r67_1); var ctx_r66 = i0.ɵɵnextContext(2); return ctx_r66.enterPackage($event); });
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("pepperi-button ", ctx_r11.styleClass, " ellipsis");
            i0.ɵɵpropertyInterpolate("name", ctx_r11.key);
            i0.ɵɵpropertyInterpolate("title", i0.ɵɵpipeBind1(2, 9, "QS.ORDER"));
            i0.ɵɵproperty("id", ctx_r11.key)("ngClass", i0.ɵɵpureFunction3(13, _c2, ctx_r11.isCaution, ctx_r11.rowSpan !== 1, ctx_r11.rowSpan === 1));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(4, 11, "QS.ORDER"), " (", ctx_r11.formattedValue, ") ");
        }
    }
    var _c4 = function (a0, a1, a2, a3, a4) { return { "pepperi-table-quantity-selector": a0, "one-row": a1, caution: a2, "matrix-qs": a3, "zero-quantity": a4 }; };
    function PepperiQuantitySelectorComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 3, 4);
            i0.ɵɵtemplate(2, PepperiQuantitySelectorComponent_ng_template_1_pep_field_title_2_Template, 1, 5, "pep-field-title", 5);
            i0.ɵɵtemplate(3, PepperiQuantitySelectorComponent_ng_template_1_ng_container_3_Template, 6, 3, "ng-container", 2);
            i0.ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_template_1_ng_container_4_Template, 6, 3, "ng-container", 2);
            i0.ɵɵtemplate(5, PepperiQuantitySelectorComponent_ng_template_1_ng_container_5_Template, 6, 3, "ng-container", 2);
            i0.ɵɵtemplate(6, PepperiQuantitySelectorComponent_ng_template_1_ng_container_6_Template, 5, 17, "ng-container", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵclassMapInterpolate1("pepperi-quantity-selector-container ", ctx_r1.styleClass, "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(9, _c4, ctx_r1.layoutType === ctx_r1.LAYOUT_TYPE.PepperiTable, ctx_r1.rowSpan === 1, ctx_r1.isCaution, ctx_r1.type === "qsForMatrix", ctx_r1.formattedValue === "0"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r1.layoutType !== ctx_r1.LAYOUT_TYPE.PepperiTable && ctx_r1.layoutType !== ctx_r1.LAYOUT_TYPE.PepperiCard);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.type == "qs");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.type == "qsForMatrix");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.type == "button");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.type == "packageButton");
        }
    }
    function PepperiQuantitySelectorComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiQuantitySelectorComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 37);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiQuantitySelectorComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiQuantitySelectorComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 37);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiQuantitySelectorComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiQuantitySelectorComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 37);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiQuantitySelectorComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiQuantitySelectorComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 37);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    var PepperiQuantitySelectorComponent = /** @class */ (function () {
        function PepperiQuantitySelectorComponent(cd, customizationService, renderer, element) {
            this.cd = cd;
            this.customizationService = customizationService;
            this.renderer = renderer;
            this.element = element;
            this.key = '';
            this.value = '';
            this.formattedValue = '';
            this.label = '';
            this.type = 'qs';
            this.required = false;
            this.disabled = false;
            this.readonly = false;
            this.textColor = '';
            this.xAlignment = '0';
            this.rowSpan = 1;
            this.alowDecimal = false;
            this.additionalValue = '';
            this.controlType = 'qs';
            this.form = null;
            this.showTitle = true;
            this.layoutType = i1.LAYOUT_TYPE.PepperiForm;
            this.isActive = false;
            this.valueChanged = new i0.EventEmitter();
            this.elementClicked = new i0.EventEmitter();
            this.LAYOUT_TYPE = i1.LAYOUT_TYPE;
            this.standAlone = false;
            this.isFocus = false;
            this.isMatrixFocus = false;
            this.isCaution = false;
            this.messages = null;
            this.showQsBtn = false;
            this.sameElementInTheWantedRow = null;
            this.STYLE_TYPE = i1.STYLE_TYPE;
            this.styleClass = i1.STYLE_TYPE.Strong;
            this.isEmptyKey = false;
        }
        PepperiQuantitySelectorComponent.prototype.ngOnInit = function () {
            if (this.form === null) {
                if (this.key === '') {
                    this.isEmptyKey = true;
                }
                this.standAlone = true;
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
                this.formattedValue = this.formattedValue || this.value;
                this.renderer.addClass(this.element.nativeElement, i1.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
            }
            this.setQsView();
            // TODO:
            // const self = this;
            // this.resize = Observable.fromEvent(window, 'resize')
            //     .debounceTime(100)
            //     .subscribe((event) => {
            //         self.setQsView();
            //     });
        };
        // TODO:
        PepperiQuantitySelectorComponent.prototype.ngAfterViewChecked = function () {
            var _this = this;
            setTimeout(function () {
                _this.setQsView();
            }, 125);
        };
        PepperiQuantitySelectorComponent.prototype.ngOnChanges = function (changes) {
            var e_1, _a;
            var _this = this;
            // Bug fix for addons when the key is '' in the ngOnInit for some reson
            if (this.isEmptyKey && this.key !== '') {
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
            }
            this.isCaution = this.textColor === '#FF0000';
            var messages = this.notificationInfo && this.notificationInfo.length > 0 ? JSON.parse(this.notificationInfo).Messages : '';
            if (messages && messages.length > 0) {
                try {
                    // Replace the msg keys.
                    for (var messages_1 = __values(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()) {
                        var msg = messages_1_1.value;
                        if (msg.Key === 'Inventory_Limit_Msg') {
                            msg.Key = 'MESSAGES.ERROR_INVENTORY_LIMIT';
                        }
                        else if (msg.Key === 'Case_Quantity_Limit_Msg') {
                            msg.Key = 'MESSAGES.ERROR_CASE_QUANTITY_LIMIT';
                        }
                        else if (msg.Key === 'Min_Quantity_Limit_Msg') {
                            msg.Key = 'MESSAGES.ERROR_MIN_QUANTITY_LIMIT';
                        }
                        else if (msg.Key === 'Max_Quantity_Limit_Msg') {
                            msg.Key = 'MESSAGES.ERROR_MAX_QUANTITY_LIMIT';
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (messages_1_1 && !messages_1_1.done && (_a = messages_1.return)) _a.call(messages_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                this.messages = messages;
                var fieldControl = this.form.controls[this.key];
                fieldControl.setErrors({
                    serverError: 'Error',
                });
                setTimeout(function () {
                    if (_this.QSInput && _this.QSInput.nativeElement) {
                        _this.QSInput.nativeElement.focus();
                    }
                }, 150);
            }
            else {
                var self_1 = this;
                setTimeout(function () {
                    if (self_1.lastFocusField) {
                        self_1.lastFocusField.focus();
                        self_1.lastFocusField = null;
                    }
                    else {
                        self_1.focusToTheSameElementInTheWantedRow();
                    }
                }, 100);
            }
        };
        PepperiQuantitySelectorComponent.prototype.ngOnDestroy = function () {
            if (this.resize) {
                this.resize.unsubscribe();
            }
            if (this.valueChanged) {
                this.valueChanged.unsubscribe();
            }
            if (this.elementClicked) {
                this.elementClicked.unsubscribe();
            }
        };
        Object.defineProperty(PepperiQuantitySelectorComponent.prototype, "getAdditionalValue", {
            get: function () {
                return this.additionalValue.length > 0 ? 'show' : 'hide';
            },
            enumerable: false,
            configurable: true
        });
        PepperiQuantitySelectorComponent.prototype.getSameElementInTheWantedRowByClassName = function (event, isNext) {
            if (isNext === void 0) { isNext = true; }
            var eventTarget = event.target || event.srcElement;
            var sameElementInTheWantedRowByClassName;
            var parentSelector;
            if (this.layoutType === i1.LAYOUT_TYPE.PepperiTable) {
                parentSelector = sameElementInTheWantedRowByClassName = $(eventTarget).parents('.table-row');
            }
            else if (this.layoutType === i1.LAYOUT_TYPE.PepperiCard) {
                parentSelector = sameElementInTheWantedRowByClassName = $(eventTarget).parents('.card-view');
                if (parentSelector.length === 0) {
                    parentSelector = sameElementInTheWantedRowByClassName = $(eventTarget).parents('.line-view');
                }
            }
            if (isNext) {
                if (parentSelector.is(':last-child')) {
                    sameElementInTheWantedRowByClassName = parentSelector
                        .parent()
                        .children()
                        .first()
                        .find('[name=' + this.key + ']');
                }
                else {
                    sameElementInTheWantedRowByClassName = parentSelector.next().find('[name=' + this.key + ']');
                }
            }
            else {
                if (parentSelector.is(':first-child')) {
                    sameElementInTheWantedRowByClassName = parentSelector
                        .parent()
                        .children()
                        .last()
                        .find('[name=' + this.key + ']');
                }
                else {
                    sameElementInTheWantedRowByClassName = parentSelector.prev().find('[name=' + this.key + ']');
                }
            }
            return sameElementInTheWantedRowByClassName;
        };
        PepperiQuantitySelectorComponent.prototype.setSameElementInTheWantedRow = function (event, isNext) {
            if (isNext === void 0) { isNext = true; }
            // Navigate to the QS in the next row.
            // const target = event.target || event.srcElement;
            this.sameElementInTheWantedRow = this.getSameElementInTheWantedRowByClassName(event, isNext);
            this.QSInput.nativeElement.blur();
        };
        PepperiQuantitySelectorComponent.prototype.focusToTheSameElementInTheWantedRow = function () {
            if (this.sameElementInTheWantedRow) {
                // If this is regular item (qs and not button) .
                if (this.sameElementInTheWantedRow.is('input')) {
                    this.sameElementInTheWantedRow.click().select();
                }
                else {
                    this.sameElementInTheWantedRow.parent().click();
                    this.sameElementInTheWantedRow.focus();
                }
                this.sameElementInTheWantedRow = null;
            }
        };
        PepperiQuantitySelectorComponent.prototype.cleanError = function () {
            var fieldControl = this.form.controls[this.key];
            // Clean the error message
            if (this.messages && this.messages.length > 0) {
                this.messages = this.notificationInfo = null;
                fieldControl.setErrors(null);
            }
        };
        PepperiQuantitySelectorComponent.prototype.onMatrixMouseEnter = function (event) {
            this.isMatrixFocus = true;
        };
        PepperiQuantitySelectorComponent.prototype.onMatrixMouseleave = function (event) {
            this.isMatrixFocus = false;
        };
        PepperiQuantitySelectorComponent.prototype.onMatrixClick = function (event) {
            this.isFocus = true;
            if (this.QSInput && this.QSInput.nativeElement) {
                this.QSInput.nativeElement.focus();
            }
        };
        PepperiQuantitySelectorComponent.prototype.onMatrixBlur = function (event) {
            if (!event.relatedTarget || event.relatedTarget.className.indexOf('qs') < 0) {
                this.isMatrixFocus = false;
            }
            this.onBlur(event);
        };
        PepperiQuantitySelectorComponent.prototype.onFocus = function (event) {
            this.isFocus = true;
        };
        PepperiQuantitySelectorComponent.prototype.onBlur = function (event) {
            this.isFocus = false;
            this.cleanError();
            var value = event.target ? event.target.value : event;
            if (parseFloat(this.value) !== parseFloat(value)) {
                this.value = value;
                this.formattedValue = value;
                this.customizationService.updateFormFieldValue(this.form, this.key, value);
                // this.propagateChange(this.value, event.relatedTarget);
                this.changeValue(this.value, event.relatedTarget);
            }
            else {
                this.focusToTheSameElementInTheWantedRow();
            }
        };
        PepperiQuantitySelectorComponent.prototype.changeValue = function (value, lastFocusedField) {
            if (lastFocusedField === void 0) { lastFocusedField = null; }
            this.valueChanged.emit({ apiName: this.key, value: value, controlType: this.controlType, lastFocusedField: lastFocusedField });
        };
        PepperiQuantitySelectorComponent.prototype.increment = function (event) {
            if (this.standAlone) {
                var tmp = parseFloat(this.value);
                this.value = this.formattedValue = (++tmp).toString();
                this.customizationService.updateFormFieldValue(this.form, this.key, this.value);
            }
            // this.propagateChange('+');
            this.changeValue('+', null);
            event.stopPropagation();
        };
        PepperiQuantitySelectorComponent.prototype.decrement = function (event) {
            if (this.standAlone) {
                var tmp = parseFloat(this.value);
                this.value = this.formattedValue = (--tmp).toString();
                this.customizationService.updateFormFieldValue(this.form, this.key, this.value);
            }
            // this.propagateChange('-');
            this.changeValue('-', null);
            event.stopPropagation();
        };
        PepperiQuantitySelectorComponent.prototype.enterChildren = function (event) {
            this.elementClicked.emit({ apiName: PepperiQuantitySelectorComponent.ENTER_CHILDREN, eventWhich: event.which });
        };
        PepperiQuantitySelectorComponent.prototype.enterPackage = function (event) {
            this.elementClicked.emit({
                apiName: PepperiQuantitySelectorComponent.ENTER_PACKAGE,
                eventWhich: event.which, otherData: this.notificationInfo
            });
        };
        PepperiQuantitySelectorComponent.prototype.setQsView = function () {
            if (this.layoutType === i1.LAYOUT_TYPE.Editmodal ||
                this.layoutType === i1.LAYOUT_TYPE.PepperiCard && this.rowSpan <= 1) {
                this.showQsBtn = false;
            }
            else {
                if (this.QSCont && this.QSCont.nativeElement) {
                    this.showQsBtn = this.QSCont.nativeElement.clientWidth > 140;
                }
            }
            // Get state class from theme.
            // this.styleClass = this.customizationService.getThemeVariable(CustomizationService.STYLE_QS_KEY);
            this.styleClass = document.documentElement.style.getPropertyValue(i1.CustomizationService.STYLE_QS_KEY);
            if (!this.cd['destroyed']) {
                this.cd.detectChanges();
            }
        };
        PepperiQuantitySelectorComponent.prototype.onKeyPress = function (event) {
            var inputChar = String.fromCharCode(event.charCode);
            var keyboardEvent = event;
            if (keyboardEvent.keyCode === 13) {
                this.setSameElementInTheWantedRow(keyboardEvent, !keyboardEvent.shiftKey);
                return true;
            }
            // TODO: Make it one function like in PepperiTextboxComponent
            if (
            /*[8, 9, 27, 13, 190].indexOf(keyboardEvent.keyCode) !== -1 ||*/
            // Allow: Ctrl+A
            (keyboardEvent.keyCode === 65 && keyboardEvent.ctrlKey === true) ||
                // Allow: Ctrl+C
                (keyboardEvent.keyCode === 67 && keyboardEvent.ctrlKey === true) ||
                // Allow: Ctrl+V
                (keyboardEvent.keyCode === 86 && keyboardEvent.ctrlKey === true) ||
                // Allow: Ctrl+X
                (keyboardEvent.keyCode === 88 &&
                    keyboardEvent.ctrlKey === true) /*||
    // Allow: home, end, left, right
    (keyboardEvent.keyCode >= 35 && keyboardEvent.keyCode <= 39)*/) {
                // let it happen, don't do anything
                return true;
            }
            if (this.alowDecimal) {
                var decPoint = '.';
                var thousandSeparator = ',';
                var pattern = /^\d[\d,]*(\.\d+)?$/;
                if (keyboardEvent.keyCode === 46) {
                    inputChar = inputChar + '0';
                }
                else if (keyboardEvent.keyCode === 44) {
                    inputChar = inputChar + '000';
                }
                if (!pattern.test(event.target.value + inputChar)) {
                    keyboardEvent.preventDefault();
                }
            }
            else {
                var pattern = /[0-9\+\-\ ]/;
                if (!pattern.test(inputChar)) {
                    keyboardEvent.preventDefault();
                }
            }
        };
        return PepperiQuantitySelectorComponent;
    }());
    PepperiQuantitySelectorComponent.ENTER_CHILDREN = '[EnterChildren]';
    PepperiQuantitySelectorComponent.ENTER_PACKAGE = '[EnterPackage]';
    PepperiQuantitySelectorComponent.ɵfac = function PepperiQuantitySelectorComponent_Factory(t) { return new (t || PepperiQuantitySelectorComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PepperiQuantitySelectorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiQuantitySelectorComponent, selectors: [["pep-quantity-selector"]], viewQuery: function PepperiQuantitySelectorComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
                i0.ɵɵviewQuery(_c1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.QSCont = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.QSInput = _t.first);
            }
        }, inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", textColor: "textColor", xAlignment: "xAlignment", rowSpan: "rowSpan", lastFocusField: "lastFocusField", alowDecimal: "alowDecimal", additionalValue: "additionalValue", notificationInfo: "notificationInfo", form: "form", showTitle: "showTitle", layoutType: "layoutType", isActive: "isActive" }, outputs: { valueChanged: "valueChanged", elementClicked: "elementClicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [3, "ngClass"], ["QSCont", ""], [3, "label", "required", "disabled", "showTitle", "xAlignment", 4, "ngIf"], [3, "label", "required", "disabled", "showTitle", "xAlignment"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["readonlyBlock", ""], ["editableQSBlock", ""], ["mat-button", "", "disabled", "true", 3, "id", "ngClass", "title"], ["appearance", "outline"], ["type", "decimalNumber", "inputmode", "decimal", "matInput", "", "autocomplete", "off", 1, "body-lg", "ellipsis", 3, "name", "title", "id", "formControlName", "value", "disabled", "keypress", "click", "blur", "focus"], ["QSInput", ""], ["mat-button", "", "matPrefix", "", "class", "pepperi-button icon-button sm weak qs-action", 3, "ngClass", "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "class", "pepperi-button icon-button sm weak qs-action", 3, "ngClass", "click", 4, "ngIf"], ["mat-button", "", "matPrefix", "", 1, "pepperi-button", "icon-button", "sm", "weak", "qs-action", 3, "ngClass", "click"], ["name", "number_minus"], ["mat-button", "", "matSuffix", "", 1, "pepperi-button", "icon-button", "sm", "weak", "qs-action", 3, "ngClass", "click"], ["name", "number_plus"], ["class", "qs-error body-xs", 4, "ngFor", "ngForOf"], [1, "qs-error", "body-xs"], ["mat-button", "", "disabled", "true", 3, "id", "ngClass"], ["class", "body-sm additional-value prefix", "matBadgePosition", "before", "matBadgeSize", "rowSpan === 1 ? small : medium", 3, "matBadge", 4, "ngIf"], ["appearance", "outline", 3, "mouseleave"], ["type", "decimalNumber", "inputmode", "decimal", "matInput", "", "autocomplete", "off", 1, "body-sm", "ellipsis", 3, "name", "title", "id", "formControlName", "value", "disabled", "keypress", "click", "blur", "focus", "mouseenter"], ["class", "body-sm additional-value suffix", "matBadgePosition", "before", "matBadgeSize", "rowSpan === 1 ? small : medium", 3, "matBadge", 4, "ngIf"], ["matBadgePosition", "before", "matBadgeSize", "rowSpan === 1 ? small : medium", 1, "body-sm", "additional-value", "prefix", 3, "matBadge"], ["matBadgePosition", "before", "matBadgeSize", "rowSpan === 1 ? small : medium", 1, "body-sm", "additional-value", "suffix", 3, "matBadge"], ["regularBlock", ""], ["withBadgeBlock", ""], ["mat-button", "", 3, "name", "id", "ngClass", "title", "click"], ["leftBadgeBlock", ""], ["rightBadgeBlock", ""], ["mat-button", "", "matBadgePosition", "before", 3, "matBadge", "matBadgeSize", "name", "id", "ngClass", "title", "click"], ["mat-button", "", "matBadgePosition", "after", 3, "matBadge", "matBadgeSize", "name", "id", "ngClass", "title", "click"], ["mat-button", "", 3, "name", "title", "id", "ngClass", "click"], [4, "ngTemplateOutlet"]], template: function PepperiQuantitySelectorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, PepperiQuantitySelectorComponent_ng_template_1_Template, 7, 15, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, PepperiQuantitySelectorComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
                i0.ɵɵtemplate(4, PepperiQuantitySelectorComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
                i0.ɵɵtemplate(5, PepperiQuantitySelectorComponent_ng_container_5_Template, 2, 1, "ng-container", 2);
                i0.ɵɵtemplate(6, PepperiQuantitySelectorComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
                i0.ɵɵelementContainerEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.form);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiForm);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiCard);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.layoutType === ctx.LAYOUT_TYPE.Editmodal);
            }
        }, directives: [i2.NgControlStatusGroup, i2.FormGroupDirective, i3.NgIf, i3.NgClass, i4.PepperiFieldTitleComponent, i5.MatButton, i6.MatFormField, i7.MatInput, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName, i6.MatPrefix, i8.MatIcon, i1$1.PepperiIconComponent, i6.MatSuffix, i6.MatError, i3.NgForOf, i10.MatBadge, i3.NgTemplateOutlet], pipes: [QuantitySelectorNumber, i12.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}.pepperi-quantity-selector-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-flow:wrap;height:inherit;min-width:2rem;width:100%}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .pepperi-quantity-selector-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{font-weight:var(--pep-font-weight-bold,600);padding:0 .25rem;text-align:center;width:100%}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{height:unset}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]{width:100%}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .pepperi-button.qs-action[_ngcontent-%COMP%]{height:2rem!important;line-height:2rem;min-width:2rem;width:2rem!important}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .pepperi-button.qs-action[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:inherit;width:inherit}.pepperi-quantity-selector-container[_ngcontent-%COMP%]   .qs-error[_ngcontent-%COMP%]{display:block}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .additional-value[_ngcontent-%COMP%]{align-self:flex-start;display:flex;height:1.25rem;justify-content:flex-end;top:calc(var(--pep-spacing-xs, .25rem)*-1);transform:unset!important}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .additional-value.prefix[_ngcontent-%COMP%]{left:calc(var(--pep-spacing-sm, .5rem)*-1)!important}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .additional-value.suffix[_ngcontent-%COMP%]{right:calc(var(--pep-spacing-sm, .5rem)*-1)!important}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .additional-value[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{-ms-text-overflow:ellipsis;border-radius:.625rem;max-width:inherit;min-width:1.5rem;overflow:hidden;padding:0 .5rem;text-overflow:ellipsis;white-space:nowrap;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;z-index:99}.pepperi-quantity-selector-container.matrix-qs[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{min-width:.5rem;padding:0 .25rem}.pepperi-quantity-selector-container.pepperi-table-quantity-selector[_ngcontent-%COMP%]   .pepperi-button[_ngcontent-%COMP%]:not(.qs-action){height:2rem;line-height:2rem}.pepperi-quantity-selector-container.pepperi-table-quantity-selector[_ngcontent-%COMP%]   .pepperi-button.qs-action[_ngcontent-%COMP%]{height:1.5rem!important;line-height:1.5rem;min-width:1.5rem;width:1.5rem!important}"], data: { animation: [
                animations$1.trigger('showHide', [
                    animations$1.state('show', animations$1.style({
                        opacity: 1,
                        transform: 'scale(1)',
                    })),
                    animations$1.state('hide', animations$1.style({
                        opacity: 0,
                        transform: 'scale(0)',
                    })),
                    animations$1.transition('show => hide', animations$1.animate('250ms ease-out')),
                    animations$1.transition('hide => show', animations$1.animate('250ms ease-in')),
                ]),
            ] }, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiQuantitySelectorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-quantity-selector',
                        templateUrl: './quantity-selector.component.html',
                        styleUrls: ['./quantity-selector.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        animations: [
                            animations$1.trigger('showHide', [
                                animations$1.state('show', animations$1.style({
                                    opacity: 1,
                                    transform: 'scale(1)',
                                })),
                                animations$1.state('hide', animations$1.style({
                                    opacity: 0,
                                    transform: 'scale(0)',
                                })),
                                animations$1.transition('show => hide', animations$1.animate('250ms ease-out')),
                                animations$1.transition('hide => show', animations$1.animate('250ms ease-in')),
                            ]),
                        ],
                    }]
            }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.CustomizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], formattedValue: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], required: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], readonly: [{
                    type: i0.Input
                }], textColor: [{
                    type: i0.Input
                }], xAlignment: [{
                    type: i0.Input
                }], rowSpan: [{
                    type: i0.Input
                }], lastFocusField: [{
                    type: i0.Input
                }], alowDecimal: [{
                    type: i0.Input
                }], additionalValue: [{
                    type: i0.Input
                }], notificationInfo: [{
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
                }], QSCont: [{
                    type: i0.ViewChild,
                    args: ['QSCont']
                }], QSInput: [{
                    type: i0.ViewChild,
                    args: ['QSInput']
                }] });
    })();

    var PepperiQuantitySelectorModule = /** @class */ (function () {
        function PepperiQuantitySelectorModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1$1.pepperiIconNumberMinus,
                i1$1.pepperiIconNumberPlus
            ]);
        }
        return PepperiQuantitySelectorModule;
    }());
    PepperiQuantitySelectorModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiQuantitySelectorModule });
    PepperiQuantitySelectorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiQuantitySelectorModule_Factory(t) { return new (t || PepperiQuantitySelectorModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
                i3.CommonModule,
                platformBrowser.BrowserModule,
                animations.BrowserAnimationsModule,
                i2.ReactiveFormsModule,
                i2.FormsModule,
                // Material modules
                core.MatCommonModule,
                i6.MatFormFieldModule,
                i7.MatInputModule,
                i5.MatButtonModule,
                i10.MatBadgeModule,
                i8.MatIconModule,
                // Pepperi modules
                i1.PepperiModule,
                i1$1.PepperiIconModule,
                i4.PepperiFieldTitleModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiQuantitySelectorModule, { declarations: [PepperiQuantitySelectorComponent, QuantitySelectorNumber], imports: [i3.CommonModule,
                platformBrowser.BrowserModule,
                animations.BrowserAnimationsModule,
                i2.ReactiveFormsModule,
                i2.FormsModule,
                // Material modules
                core.MatCommonModule,
                i6.MatFormFieldModule,
                i7.MatInputModule,
                i5.MatButtonModule,
                i10.MatBadgeModule,
                i8.MatIconModule,
                // Pepperi modules
                i1.PepperiModule,
                i1$1.PepperiIconModule,
                i4.PepperiFieldTitleModule], exports: [PepperiQuantitySelectorComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiQuantitySelectorModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            platformBrowser.BrowserModule,
                            animations.BrowserAnimationsModule,
                            i2.ReactiveFormsModule,
                            i2.FormsModule,
                            // Material modules
                            core.MatCommonModule,
                            i6.MatFormFieldModule,
                            i7.MatInputModule,
                            i5.MatButtonModule,
                            i10.MatBadgeModule,
                            i8.MatIconModule,
                            // Pepperi modules
                            i1.PepperiModule,
                            i1$1.PepperiIconModule,
                            i4.PepperiFieldTitleModule
                        ],
                        exports: [PepperiQuantitySelectorComponent],
                        declarations: [PepperiQuantitySelectorComponent, QuantitySelectorNumber],
                    }]
            }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/quantity-selector
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiQuantitySelectorComponent = PepperiQuantitySelectorComponent;
    exports.PepperiQuantitySelectorModule = PepperiQuantitySelectorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-quantity-selector.umd.js.map
