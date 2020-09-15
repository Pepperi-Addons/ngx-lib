(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/material/icon'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/field-title'), require('@angular/cdk/bidi'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/select', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/core', '@angular/material/button', '@angular/material/form-field', '@angular/material/select', '@angular/material/icon', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/field-title', '@angular/cdk/bidi', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].select = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.core, global.ng.material.button, global.ng.material.formField, global.ng.material.select, global.ng.material.icon, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib']['field-title'], global.ng.cdk.bidi, global.translate));
}(this, (function (exports, i0, i3, i2, i7, i9, i4, i6, i10, i1, i1$1, i8, i5, i12) { 'use strict';

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

    var _c0 = ["select"];
    function PepperiSelectComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiSelectComponent_ng_template_1_ng_template_1_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 12);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "LIST.NONE"));
        }
    }
    function PepperiSelectComponent_ng_template_1_ng_template_1_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 13);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r14 = ctx.$implicit;
            i0.ɵɵproperty("value", option_r14.Key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(option_r14.Value);
        }
    }
    var _c1 = function (a0) { return { "right-alignment": a0 }; };
    var _c2 = function () { return { standalone: true }; };
    var _c3 = function (a0) { return { field: a0 }; };
    function PepperiSelectComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field", 6);
            i0.ɵɵelementStart(1, "mat-select", 7, 8);
            i0.ɵɵlistener("ngModelChange", function PepperiSelectComponent_ng_template_1_ng_template_1_Template_mat_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.selectedValueModel = $event; })("selectionChange", function PepperiSelectComponent_ng_template_1_ng_template_1_Template_mat_select_selectionChange_1_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.selectionChange($event); })("openedChange", function PepperiSelectComponent_ng_template_1_ng_template_1_Template_mat_select_openedChange_1_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.openedChange($event); });
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵtemplate(4, PepperiSelectComponent_ng_template_1_ng_template_1_mat_option_4_Template, 3, 3, "mat-option", 9);
            i0.ɵɵtemplate(5, PepperiSelectComponent_ng_template_1_ng_template_1_mat_option_5_Template, 2, 2, "mat-option", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-error");
            i0.ɵɵelement(7, "span", 11);
            i0.ɵɵpipe(8, "translate");
            i0.ɵɵpipe(9, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("dir", ctx_r8.xAlignment === "2" ? "rtl" : "ltr");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("body-sm text-align-", ctx_r8.xAlignment, "");
            i0.ɵɵpropertyInterpolate("title", ctx_r8.formattedValue);
            i0.ɵɵproperty("required", ctx_r8.required ? ctx_r8.required : undefined)("id", ctx_r8.key)("ngClass", i0.ɵɵpureFunction1(24, _c1, ctx_r8.xAlignment == "2"))("placeholder", ctx_r8.disabled || ctx_r8.readonly ? "" : i0.ɵɵpipeBind1(3, 16, "SELECT.HINT"))("ngModel", ctx_r8.selectedValueModel)("ngModelOptions", i0.ɵɵpureFunction0(26, _c2))("disabled", ctx_r8.disabled);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx_r8.emptyOption);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r8.options);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", i0.ɵɵpipeBind2(8, 18, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(27, _c3, ctx_r8.label)))("innerText", i0.ɵɵpipeBind2(9, 21, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(29, _c3, ctx_r8.label)));
        }
    }
    function PepperiSelectComponent_ng_template_1_ng_template_3_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 13);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r21 = ctx.$implicit;
            i0.ɵɵproperty("value", option_r21.Key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(option_r21.Value);
        }
    }
    function PepperiSelectComponent_ng_template_1_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field", 6);
            i0.ɵɵelementStart(1, "mat-select", 14, 8);
            i0.ɵɵlistener("ngModelChange", function PepperiSelectComponent_ng_template_1_ng_template_3_Template_mat_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.selectedValuesModel = $event; })("openedChange", function PepperiSelectComponent_ng_template_1_ng_template_3_Template_mat_select_openedChange_1_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.openedChange($event); });
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵtemplate(4, PepperiSelectComponent_ng_template_1_ng_template_3_mat_option_4_Template, 2, 2, "mat-option", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-error");
            i0.ɵɵelement(6, "span", 11);
            i0.ɵɵpipe(7, "translate");
            i0.ɵɵpipe(8, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("dir", ctx_r10.xAlignment === "2" ? "rtl" : "ltr");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("body-sm text-align-", ctx_r10.xAlignment, "");
            i0.ɵɵpropertyInterpolate("title", ctx_r10.formattedValue);
            i0.ɵɵproperty("required", ctx_r10.required ? ctx_r10.required : undefined)("id", ctx_r10.key)("ngClass", i0.ɵɵpureFunction1(23, _c1, ctx_r10.xAlignment == "2"))("placeholder", ctx_r10.disabled || ctx_r10.readonly ? "" : i0.ɵɵpipeBind1(3, 15, "SELECT.HINT"))("ngModel", ctx_r10.selectedValuesModel)("ngModelOptions", i0.ɵɵpureFunction0(25, _c2))("disabled", ctx_r10.disabled);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx_r10.options);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", i0.ɵɵpipeBind2(7, 17, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(26, _c3, ctx_r10.label)))("innerText", i0.ɵɵpipeBind2(8, 20, "MESSAGES.ERROR_IS_REQUIRED", i0.ɵɵpureFunction1(28, _c3, ctx_r10.label)));
        }
    }
    function PepperiSelectComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiSelectComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 3);
            i0.ɵɵtemplate(1, PepperiSelectComponent_ng_template_1_ng_template_1_Template, 10, 31, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, PepperiSelectComponent_ng_template_1_ng_template_3_Template, 9, 30, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r7 = i0.ɵɵreference(2);
            var _r9 = i0.ɵɵreference(4);
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", ctx_r1.type == "multi")("ngIfThen", _r9)("ngIfElse", _r7);
        }
    }
    function PepperiSelectComponent_ng_container_3_pep_field_title_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-field-title", 17);
        }
        if (rf & 2) {
            var ctx_r25 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("label", ctx_r25.label)("required", ctx_r25.required)("disabled", ctx_r25.disabled)("xAlignment", ctx_r25.xAlignment)("showTitle", ctx_r25.showTitle);
        }
    }
    function PepperiSelectComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiSelectComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiSelectComponent_ng_container_3_pep_field_title_1_Template, 1, 5, "pep-field-title", 15);
            i0.ɵɵtemplate(2, PepperiSelectComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 16);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r2.parentFieldKey);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiSelectComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiSelectComponent_ng_container_4_ng_template_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c4 = function (a0) { return { "one-row": a0 }; };
    function PepperiSelectComponent_ng_container_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵtemplate(1, PepperiSelectComponent_ng_container_4_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r29 = i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c4, ctx_r29.rowSpan === 1));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function PepperiSelectComponent_ng_container_4_ng_template_4_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 25);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r33 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r33.label);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx_r33.label, "\u00A0");
        }
    }
    function PepperiSelectComponent_ng_container_4_ng_template_4_button_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 26);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var _c5 = function (a0, a1) { return { "one-row": a0, "pepperi-button weak": a1 }; };
    function PepperiSelectComponent_ng_container_4_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r36_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 21);
            i0.ɵɵlistener("click", function PepperiSelectComponent_ng_container_4_ng_template_4_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r36_1); var ctx_r35 = i0.ɵɵnextContext(2); return !ctx_r35.disabled ? ctx_r35.cardTemplateClicked($event) : ""; });
            i0.ɵɵtemplate(1, PepperiSelectComponent_ng_container_4_ng_template_4_span_1_Template, 2, 2, "span", 22);
            i0.ɵɵelementStart(2, "span", 23);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, PepperiSelectComponent_ng_container_4_ng_template_4_button_4_Template, 3, 0, "button", 24);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r31 = i0.ɵɵnextContext(2);
            i0.ɵɵclassMap("text-align-" + ctx_r31.xAlignment);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c5, ctx_r31.rowSpan === 1, ctx_r31.isActive && !ctx_r31.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r31.showTitle && ctx_r31.label != "");
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r31.formattedValue);
            i0.ɵɵproperty("id", ctx_r31.key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r31.formattedValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r31.isActive && !ctx_r31.disabled);
        }
    }
    function PepperiSelectComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiSelectComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 3);
            i0.ɵɵtemplate(2, PepperiSelectComponent_ng_container_4_ng_template_2_Template, 2, 4, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiSelectComponent_ng_container_4_ng_template_4_Template, 5, 11, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r28 = i0.ɵɵreference(3);
            var _r30 = i0.ɵɵreference(5);
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.isInEditMode)("ngIfThen", _r28)("ngIfElse", _r30);
        }
    }
    function PepperiSelectComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiSelectComponent_ng_container_5_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiSelectComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiSelectComponent_ng_container_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 16);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    var _c6 = function (a0) { return { readonly: a0 }; };
    function PepperiSelectComponent_ng_container_5_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 30);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r41 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("title", ctx_r41.fieldFormattedValue);
            i0.ɵɵproperty("id", ctx_r41.key)("ngClass", i0.ɵɵpureFunction1(4, _c6, ctx_r41.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r41.fieldFormattedValue);
        }
    }
    function PepperiSelectComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiSelectComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 3);
            i0.ɵɵtemplate(2, PepperiSelectComponent_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiSelectComponent_ng_container_5_ng_template_4_Template, 2, 6, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r38 = i0.ɵɵreference(3);
            var _r40 = i0.ɵɵreference(5);
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.isActive && !ctx_r4.disabled)("ngIfThen", _r38)("ngIfElse", _r40);
        }
    }
    function PepperiSelectComponent_ng_container_6_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiSelectComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "pep-field-title", 17);
            i0.ɵɵtemplate(2, PepperiSelectComponent_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 16);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", ctx_r5.label)("required", ctx_r5.required)("disabled", ctx_r5.disabled)("xAlignment", ctx_r5.xAlignment)("showTitle", ctx_r5.showTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    var PepperiSelectComponent = /** @class */ (function () {
        function PepperiSelectComponent(customizationService, renderer, element) {
            this.customizationService = customizationService;
            this.renderer = renderer;
            this.element = element;
            this.key = '';
            this.value = '';
            this.formattedValue = '';
            this.label = '';
            this.type = 'select';
            this.required = false;
            this.disabled = false;
            this.readonly = false;
            this.xAlignment = '0';
            this.rowSpan = 1;
            this.options = [];
            this.controlType = 'select';
            // @Input() field: PepperiFieldBase;
            this.form = null;
            this.layoutType = i1.LAYOUT_TYPE.PepperiForm;
            this.parentFieldKey = null;
            this.isActive = false;
            this.showTitle = true;
            this.emptyOption = true;
            this.valueChanged = new i0.EventEmitter();
            this.formValidationChanged = new i0.EventEmitter();
            this.LAYOUT_TYPE = i1.LAYOUT_TYPE;
            this.standAlone = false;
            this.isInEditMode = false;
            // isFocus: boolean = false;
            this.isMulti = false;
            this.fieldFormattedValue = '';
        }
        PepperiSelectComponent.prototype.addOptionsIfNeeded = function () {
            var e_1, _a;
            var _this = this;
            if (this.isMulti) {
                var _loop_1 = function (selectedValue) {
                    var valueNotExist = false;
                    if (this_1.options && !this_1.options.find(function (opt) { return opt.Key === selectedValue; })) {
                        valueNotExist = true;
                    }
                    // Add it to options.
                    if (valueNotExist) {
                        this_1.options.push({ Key: selectedValue, Value: selectedValue });
                    }
                };
                var this_1 = this;
                try {
                    // Go gor all selected and add to options if not exist
                    // for (let i = 0; i < this.selectedValuesModel.length; i++) {
                    for (var _b = __values(this.selectedValuesModel), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var selectedValue = _c.value;
                        _loop_1(selectedValue);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                if (this.value && this.value !== '' && this.options && !this.options.find(function (opt) { return opt.Key === _this.value; })) {
                    this.options.push({ Key: this.value, Value: this.formattedValue });
                }
            }
        };
        PepperiSelectComponent.prototype.ngOnInit = function () {
            if (this.form === null) {
                this.standAlone = true;
                this.form = this.customizationService.getDefaultFromGroup(this.key, this.value, this.required, this.readonly, this.disabled);
                this.renderer.addClass(this.element.nativeElement, i1.CustomizationService.STAND_ALONE_FIELD_CLASS_NAME);
            }
        };
        PepperiSelectComponent.prototype.ngOnChanges = function (changes) {
            this.isMulti = this.type === 'multi';
            if (this.isMulti) {
                this.selectedValuesModel = this.value.length > 0 ? this.value.split(';') : [];
            }
            else {
                this.selectedValueModel = this.value;
            }
            this.fieldFormattedValue = typeof this.value === 'string' ? this.value.replace(new RegExp(';', 'g'), ', ') : '';
            this.addOptionsIfNeeded();
        };
        PepperiSelectComponent.prototype.ngOnDestroy = function () {
            if (this.valueChanged) {
                this.valueChanged.unsubscribe();
            }
            if (this.formValidationChanged) {
                this.formValidationChanged.unsubscribe();
            }
        };
        PepperiSelectComponent.prototype.selectionChange = function (event) {
            // this.isFocus = false;
            if (!this.isMulti) {
                this.changeValue(this.selectedValueModel);
            }
        };
        PepperiSelectComponent.prototype.openedChange = function (event) {
            // Only on close.
            if (!event) {
                if (this.isMulti) {
                    // this.isFocus = false;
                    this.changeValue(this.selectedValuesModel.join(';'));
                }
                if (this.isInEditMode) {
                    this.isInEditMode = false;
                }
            }
        };
        PepperiSelectComponent.prototype.changeValue = function (value) {
            this.formattedValue = value;
            this.customizationService.updateFormFieldValue(this.form, this.key, value, this.parentFieldKey);
            if (this.required) {
                var fieldControl = this.form.controls[this.key];
                if (value) {
                    fieldControl.setErrors(null);
                }
                else {
                    fieldControl.setErrors({
                        serverError: 'Required',
                    });
                }
                this.formValidationChanged.emit(this.form.valid);
            }
            this.valueChanged.emit({ apiName: this.key, value: value });
        };
        PepperiSelectComponent.prototype.cardTemplateClicked = function (event) {
            var self = this;
            this.isInEditMode = true;
            setTimeout(function () {
                self.select.open();
            }, 0);
        };
        return PepperiSelectComponent;
    }());
    PepperiSelectComponent.ɵfac = function PepperiSelectComponent_Factory(t) { return new (t || PepperiSelectComponent)(i0.ɵɵdirectiveInject(i1.CustomizationService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PepperiSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiSelectComponent, selectors: [["pep-select"]], viewQuery: function PepperiSelectComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.select = _t.first);
            }
        }, inputs: { key: "key", value: "value", formattedValue: "formattedValue", label: "label", type: "type", required: "required", disabled: "disabled", readonly: "readonly", xAlignment: "xAlignment", rowSpan: "rowSpan", options: "options", form: "form", layoutType: "layoutType", parentFieldKey: "parentFieldKey", isActive: "isActive", showTitle: "showTitle", emptyOption: "emptyOption" }, outputs: { valueChanged: "valueChanged", formValidationChanged: "formValidationChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[3, "formGroup"], ["pepperiTemplate", ""], [4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["regularSelectBlock", ""], ["multiSelectBlock", ""], ["appearance", "outline", 3, "dir"], ["matInput", "", "disableOptionCentering", "", 3, "required", "id", "ngClass", "placeholder", "ngModel", "ngModelOptions", "disabled", "title", "ngModelChange", "selectionChange", "openedChange"], ["select", ""], ["value", "", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "body-xs", 3, "title", "innerText"], ["value", ""], [3, "value"], ["matInput", "", "disableOptionCentering", "", "multiple", "", 3, "required", "id", "ngClass", "placeholder", "ngModel", "ngModelOptions", "disabled", "title", "ngModelChange", "openedChange"], [3, "label", "required", "disabled", "xAlignment", "showTitle", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "label", "required", "disabled", "xAlignment", "showTitle"], ["editBlock", ""], ["readOnlyBlock", ""], [3, "ngClass"], [1, "pepperi-card-input", "card-flex-container", 3, "ngClass", "click"], ["class", "body-xs title", 3, "title", 4, "ngIf"], [1, "body-sm", "value", 3, "id", "title"], ["class", "pepperi-button weak card-edit-button", "mat-button", "", 4, "ngIf"], [1, "body-xs", "title", 3, "title"], ["mat-button", "", 1, "pepperi-button", "weak", "card-edit-button"], ["name", "system_edit"], ["selectedBlock", ""], ["notSelectedBlock", ""], [1, "body-sm", "pepperi-report-input", 3, "id", "ngClass", "title"]], template: function PepperiSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, PepperiSelectComponent_ng_template_1_Template, 5, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, PepperiSelectComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
                i0.ɵɵtemplate(4, PepperiSelectComponent_ng_container_4_Template, 6, 3, "ng-container", 2);
                i0.ɵɵtemplate(5, PepperiSelectComponent_ng_container_5_Template, 6, 3, "ng-container", 2);
                i0.ɵɵtemplate(6, PepperiSelectComponent_ng_container_6_Template, 3, 6, "ng-container", 2);
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
        }, directives: [i2.NgControlStatusGroup, i2.FormGroupDirective, i3.NgIf, i4.MatFormField, i5.Dir, i6.MatSelect, i2.RequiredValidator, i3.NgClass, i2.NgControlStatus, i2.NgModel, i3.NgForOf, i4.MatError, i7.MatOption, i3.NgTemplateOutlet, i8.PepperiFieldTitleComponent, i9.MatButton, i10.MatIcon, i1$1.PepperiIconComponent], pipes: [i12.TranslatePipe], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.material-additional-selection[_ngcontent-%COMP%]{font-size:.75em;opacity:.75}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiSelectComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-select',
                        templateUrl: './select.component.html',
                        styleUrls: ['./select.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i1.CustomizationService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { key: [{
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
                }], xAlignment: [{
                    type: i0.Input
                }], rowSpan: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }], form: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], parentFieldKey: [{
                    type: i0.Input
                }], isActive: [{
                    type: i0.Input
                }], showTitle: [{
                    type: i0.Input
                }], emptyOption: [{
                    type: i0.Input
                }], valueChanged: [{
                    type: i0.Output
                }], formValidationChanged: [{
                    type: i0.Output
                }], select: [{
                    type: i0.ViewChild,
                    args: ['select']
                }] });
    })();

    var PepperiSelectModule = /** @class */ (function () {
        function PepperiSelectModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1$1.pepperiIconSystemEdit
            ]);
        }
        return PepperiSelectModule;
    }());
    PepperiSelectModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiSelectModule });
    PepperiSelectModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiSelectModule_Factory(t) { return new (t || PepperiSelectModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
                i3.CommonModule,
                i2.ReactiveFormsModule,
                i2.FormsModule,
                // Material modules
                i7.MatCommonModule,
                i9.MatButtonModule,
                i4.MatFormFieldModule,
                i6.MatSelectModule,
                i10.MatIconModule,
                // Pepperi modules
                i1.PepperiModule,
                i1$1.PepperiIconModule,
                i8.PepperiFieldTitleModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiSelectModule, { declarations: [PepperiSelectComponent], imports: [i3.CommonModule,
                i2.ReactiveFormsModule,
                i2.FormsModule,
                // Material modules
                i7.MatCommonModule,
                i9.MatButtonModule,
                i4.MatFormFieldModule,
                i6.MatSelectModule,
                i10.MatIconModule,
                // Pepperi modules
                i1.PepperiModule,
                i1$1.PepperiIconModule,
                i8.PepperiFieldTitleModule], exports: [PepperiSelectComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiSelectModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i2.ReactiveFormsModule,
                            i2.FormsModule,
                            // Material modules
                            i7.MatCommonModule,
                            i9.MatButtonModule,
                            i4.MatFormFieldModule,
                            i6.MatSelectModule,
                            i10.MatIconModule,
                            // Pepperi modules
                            i1.PepperiModule,
                            i1$1.PepperiIconModule,
                            i8.PepperiFieldTitleModule
                        ],
                        exports: [PepperiSelectComponent,],
                        declarations: [PepperiSelectComponent],
                    }]
            }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
    })();

    /*
     * Public API Surface of ngx-lib/select
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiSelectComponent = PepperiSelectComponent;
    exports.PepperiSelectModule = PepperiSelectModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-select.umd.js.map
