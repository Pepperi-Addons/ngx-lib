(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/menu'), require('angular2-signaturepad'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/dialog'), require('@pepperi-addons/ngx-lib/address'), require('@pepperi-addons/ngx-lib/attachment'), require('@pepperi-addons/ngx-lib/checkbox'), require('@pepperi-addons/ngx-lib/date'), require('@pepperi-addons/ngx-lib/image'), require('@pepperi-addons/ngx-lib/images-filmstrip'), require('@pepperi-addons/ngx-lib/internal-button'), require('@pepperi-addons/ngx-lib/menu'), require('@pepperi-addons/ngx-lib/quantity-selector'), require('@pepperi-addons/ngx-lib/rich-html-textarea'), require('@pepperi-addons/ngx-lib/select'), require('@pepperi-addons/ngx-lib/separator'), require('@pepperi-addons/ngx-lib/signature'), require('@pepperi-addons/ngx-lib/textarea'), require('@pepperi-addons/ngx-lib/textbox'), require('@ngx-translate/core'), require('rxjs/operators'), require('jquery'), require('@angular/cdk/bidi'), require('@angular/cdk/scrolling')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/form', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/core', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/menu', 'angular2-signaturepad', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/dialog', '@pepperi-addons/ngx-lib/address', '@pepperi-addons/ngx-lib/attachment', '@pepperi-addons/ngx-lib/checkbox', '@pepperi-addons/ngx-lib/date', '@pepperi-addons/ngx-lib/image', '@pepperi-addons/ngx-lib/images-filmstrip', '@pepperi-addons/ngx-lib/internal-button', '@pepperi-addons/ngx-lib/menu', '@pepperi-addons/ngx-lib/quantity-selector', '@pepperi-addons/ngx-lib/rich-html-textarea', '@pepperi-addons/ngx-lib/select', '@pepperi-addons/ngx-lib/separator', '@pepperi-addons/ngx-lib/signature', '@pepperi-addons/ngx-lib/textarea', '@pepperi-addons/ngx-lib/textbox', '@ngx-translate/core', 'rxjs/operators', 'jquery', '@angular/cdk/bidi', '@angular/cdk/scrolling'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].form = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.core, global.ng.material.gridList, global.ng.material.icon, global.ng.material.menu, global.signaturepad, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib'].dialog, global['pepperi-addons']['ngx-lib'].address, global['pepperi-addons']['ngx-lib'].attachment, global['pepperi-addons']['ngx-lib'].checkbox, global['pepperi-addons']['ngx-lib'].date, global['pepperi-addons']['ngx-lib'].image, global['pepperi-addons']['ngx-lib']['images-filmstrip'], global['pepperi-addons']['ngx-lib']['internal-button'], global['pepperi-addons']['ngx-lib'].menu, global['pepperi-addons']['ngx-lib']['quantity-selector'], global['pepperi-addons']['ngx-lib']['rich-html-textarea'], global['pepperi-addons']['ngx-lib'].select, global['pepperi-addons']['ngx-lib'].separator, global['pepperi-addons']['ngx-lib'].signature, global['pepperi-addons']['ngx-lib'].textarea, global['pepperi-addons']['ngx-lib'].textbox, global.translate, global.rxjs.operators, global.jquery, global.ng.cdk.bidi, global.ng.cdk.scrolling));
}(this, (function (exports, i0, i2, i3, i6, i5, i7, i9, i10, i11, i1, i1$1, i3$1, i4, i5$1, i6$1, i8, i7$1, i9$1, i10$1, i11$1, i12, i13, i14, i15, i16, i17, i3$2, operators, $$1, i4$1, i8$1) { 'use strict';

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

    function PepperiIndicatorsComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "pep-icon", 3);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var value_r2 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("fill", value_r2);
        }
    }
    function PepperiIndicatorsComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "pep-icon", 4);
            i0.ɵɵelementContainerEnd();
        }
    }
    var _c0 = function (a0) { return { "is-inside-table": a0 }; };
    var PepperiIndicatorsComponent = /** @class */ (function () {
        function PepperiIndicatorsComponent() {
            this.controlType = 'indicators';
            this.layoutType = i11.LAYOUT_TYPE.PepperiTable;
            this.LAYOUT_TYPE = i11.LAYOUT_TYPE;
        }
        return PepperiIndicatorsComponent;
    }());
    PepperiIndicatorsComponent.ɵfac = function PepperiIndicatorsComponent_Factory(t) { return new (t || PepperiIndicatorsComponent)(); };
    PepperiIndicatorsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiIndicatorsComponent, selectors: [["pep-indicators"]], inputs: { key: "key", value: "value", layoutType: "layoutType" }, decls: 3, vars: 5, consts: [[1, "indicators-container", 3, "ngClass"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["name", "indicator_dot_placeholder", 1, "pull-left", "flip", 3, "fill"], ["name", "indicator_dot_placeholder", 1, "pull-left", "flip"]], template: function PepperiIndicatorsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, PepperiIndicatorsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
                i0.ɵɵtemplate(2, PepperiIndicatorsComponent_ng_container_2_Template, 2, 0, "ng-container", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.value == null ? null : ctx.value.split(";"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.key != "ItemIndicatorsWithoutCampaign" && (ctx.value == null ? null : ctx.value.split(";").length) < 4);
            }
        }, directives: [i2.NgClass, i2.NgForOf, i2.NgIf, i1.PepperiIconComponent], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.indicators-container[_ngcontent-%COMP%]{height:2.5rem}.indicators-container[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]{height:1rem;margin:.05rem;width:1rem}.indicators-container.is-inside-table[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiIndicatorsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-indicators',
                        templateUrl: './indicators.component.html',
                        styleUrls: ['./indicators.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return []; }, { key: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }] });
    })();

    var PepperiInternalPageService = /** @class */ (function () {
        function PepperiInternalPageService(httpService) {
            this.httpService = httpService;
            this.parentId = '0';
            this.additionalApiName = '';
            this.transactionUrl = 'Service1.svc/v1/OrderCenter/Transaction/';
        }
        PepperiInternalPageService.prototype.getBaseParentUrl = function () {
            var url = "" + this.transactionUrl + this.objectId + "/ParentLine/" + this.parentId + "/";
            return url;
        };
        PepperiInternalPageService.prototype.getChildren = function (callbackFunc) {
            var body = JSON.stringify({
                TransactionUID: this.objectId,
                SearchCode: this.searchCode,
                AdditionalApiName: this.additionalApiName,
                ParentTransactionLineID: this.parentId,
                ViewType: this.viewType
            });
            // Set the additional api name with view type string.
            var moreParams = this.additionalApiName.length > 0 ?
                this.additionalApiName + "/" + this.viewType :
                "''/" + this.viewType;
            var url = this.getBaseParentUrl() + "Items/" + moreParams;
            this.httpService.postWapiApiCall(url, body).subscribe(function (res) { callbackFunc(res); }, function (error) { }, function () { });
        };
        PepperiInternalPageService.prototype.initDetails = function (objectId, parentId, searchCode, callbackFunc) {
            if (!objectId || !parentId) {
                return;
            }
            this.objectId = objectId;
            this.parentId = parentId;
            this.searchCode = searchCode;
            this.httpService.getWapiApiCall(this.getBaseParentUrl() + "ViewTypes").subscribe(function (res) { callbackFunc(res); }, function (error) { }, function () { });
        };
        PepperiInternalPageService.prototype.changeChildrenViewType = function (viewType, callbackFunc) {
            this.viewType = viewType;
            this.getChildren(callbackFunc);
        };
        PepperiInternalPageService.prototype.changeAdditionalApiName = function (additionalApiName, callbackFunc) {
            this.additionalApiName = additionalApiName;
            this.getChildren(callbackFunc);
        };
        PepperiInternalPageService.prototype.childPlusClick = function (itemId, fieldApiName, callbackFunc) {
            var body = JSON.stringify({
                TransactionUID: this.objectId,
                SearchCode: this.searchCode,
                ParentTransactionLineID: this.parentId,
                TransactionLineUID: itemId,
                FieldApiName: fieldApiName,
                ViewType: this.viewType
            });
            this.httpService.postWapiApiCall(this.getBaseParentUrl() + "IncrementValue", body).subscribe(function (res) { callbackFunc(res); }, function (error) { }, function () { });
        };
        PepperiInternalPageService.prototype.childMinusClick = function (itemId, fieldApiName, callbackFunc) {
            var body = JSON.stringify({
                TransactionUID: this.objectId,
                SearchCode: this.searchCode,
                ParentTransactionLineID: this.parentId,
                TransactionLineUID: itemId,
                FieldApiName: fieldApiName,
                ViewType: this.viewType
            });
            this.httpService.postWapiApiCall(this.getBaseParentUrl() + "DecrementValue", body).subscribe(function (res) { callbackFunc(res); }, function (error) { }, function () { });
        };
        PepperiInternalPageService.prototype.childValueChanged = function (itemId, fieldApiName, value, callbackFunc) {
            var body = JSON.stringify({
                TransactionUID: this.objectId,
                SearchCode: this.searchCode,
                ParentTransactionLineID: this.parentId,
                TransactionLineUID: itemId,
                FieldApiName: fieldApiName,
                FieldValue: value,
                ViewType: this.viewType
            });
            this.httpService.postWapiApiCall(this.getBaseParentUrl() + "SetFieldValue", body).subscribe(function (res) { callbackFunc(res); }, function (error) { }, function () { });
        };
        return PepperiInternalPageService;
    }());
    PepperiInternalPageService.ɵfac = function PepperiInternalPageService_Factory(t) { return new (t || PepperiInternalPageService)(i0.ɵɵinject(i11.HttpService)); };
    PepperiInternalPageService.ɵprov = i0.ɵɵdefineInjectable({ token: PepperiInternalPageService, factory: PepperiInternalPageService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiInternalPageService, [{
                type: i0.Injectable
            }], function () { return [{ type: i11.HttpService }]; }, null);
    })();

    var _c0$1 = ["noVirtualScrollCont"];
    var _c1 = ["tableHeader"];
    var _c2 = ["selectAllCB"];
    function PepperiInternalListComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 3);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r0.noDataFoundMsg);
        }
    }
    function PepperiInternalListComponent_ng_container_1_div_1_div_4_label_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "label", 16);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r12 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵclassMapInterpolate1("header-label body-sm pull-left flip text-align-", field_r12.Layout.XAlignment, "");
            i0.ɵɵpropertyInterpolate("id", field_r12.ApiName);
            i0.ɵɵpropertyInterpolate("title", field_r12.Title);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", field_r12.Title, " ");
        }
    }
    function PepperiInternalListComponent_ng_container_1_div_1_div_4_label_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "label", 17);
            i0.ɵɵtext(1, "\u00A0");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r12 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵpropertyInterpolate("id", field_r12.ApiName);
        }
    }
    function PepperiInternalListComponent_ng_container_1_div_1_div_4_div_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵlistener("mousedown", function PepperiInternalListComponent_ng_container_1_div_1_div_4_div_3_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r20_1); var field_r12 = i0.ɵɵnextContext().$implicit; var ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19.onListResizeStart($event, field_r12.ApiName); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵelement(2, "pep-icon", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var _c3 = function (a0) { return { width: a0 }; };
    var _c4 = function (a0, a1, a2) { return { "is-resizing": a0, "is-first": a1, "is-last": a2 }; };
    function PepperiInternalListComponent_ng_container_1_div_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵtemplate(1, PepperiInternalListComponent_ng_container_1_div_1_div_4_label_1_Template, 2, 6, "label", 13);
            i0.ɵɵtemplate(2, PepperiInternalListComponent_ng_container_1_div_1_div_4_label_2_Template, 2, 1, "label", 14);
            i0.ɵɵtemplate(3, PepperiInternalListComponent_ng_container_1_div_1_div_4_div_3_Template, 3, 0, "div", 15);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r12 = ctx.$implicit;
            var j_r13 = ctx.index;
            var ctx_r11 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c3, field_r12.calcTitleColumnWidthString))("ngClass", i0.ɵɵpureFunction3(7, _c4, field_r12.ApiName === ctx_r11.pressedColumn, j_r13 === 0, j_r13 === (ctx_r11.uiControl == null ? null : ctx_r11.uiControl.ControlFields == null ? null : ctx_r11.uiControl.ControlFields.length) - 1));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", field_r12.Title != "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", field_r12.Title == "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r11.supportResizing);
        }
    }
    var _c5 = function (a0) { return { "below-header-and-top-bar": a0 }; };
    function PepperiInternalListComponent_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 8, 9);
            i0.ɵɵlistener("mouseup", function PepperiInternalListComponent_ng_container_1_div_1_Template_div_mouseup_0_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.onListResizeEnd($event); })("mouseenter", function PepperiInternalListComponent_ng_container_1_div_1_Template_div_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.onListHeaderMouseEnter($event); })("mouseleave", function PepperiInternalListComponent_ng_container_1_div_1_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.onListHeaderMouseLeave($event); })("mousemove", function PepperiInternalListComponent_ng_container_1_div_1_Template_div_mousemove_0_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.onListResize($event); });
            i0.ɵɵelementStart(2, "fieldset", 10);
            i0.ɵɵelementStart(3, "fieldset");
            i0.ɵɵtemplate(4, PepperiInternalListComponent_ng_container_1_div_1_div_4_Template, 4, 11, "div", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c5, ctx_r6.parentScroll == null));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx_r6.uiControl == null ? null : ctx_r6.uiControl.ControlFields);
        }
    }
    function PepperiInternalListComponent_ng_container_1_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiInternalListComponent_ng_container_1_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c6 = function (a0, a1) { return { "table-body": a0, "cards-body": a1 }; };
    function PepperiInternalListComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiInternalListComponent_ng_container_1_div_1_Template, 5, 4, "div", 4);
            i0.ɵɵelementStart(2, "div", 5, 6);
            i0.ɵɵtemplate(4, PepperiInternalListComponent_ng_container_1_ng_container_4_Template, 1, 0, "ng-container", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, PepperiInternalListComponent_ng_container_1_ng_container_5_Template, 1, 0, "ng-container", 7);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            var _r2 = i0.ɵɵreference(3);
            var _r4 = i0.ɵɵreference(5);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.isTable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c6, ctx_r1.isTable, !ctx_r1.isTable));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r4);
        }
    }
    var _c7 = function (a0) { return { highlighted: a0 }; };
    var _c8 = function (a0, a1) { return { height: a0, visibility: a1 }; };
    var _c9 = function (a0) { return { "background-color": a0 }; };
    function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r34_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 21);
            i0.ɵɵlistener("mouseenter", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_div_mouseenter_1_listener($event) { i0.ɵɵrestoreView(_r34_1); var pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit; var ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.onTableRowMouseEnter($event, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type); })("mouseleave", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_div_mouseleave_1_listener($event) { i0.ɵɵrestoreView(_r34_1); var pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit; var ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.onTableRowMouseLeave($event, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type); });
            i0.ɵɵelementStart(2, "fieldset", 22);
            i0.ɵɵelementStart(3, "pep-form", 23);
            i0.ɵɵlistener("notifyValueChanged", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyValueChanged_3_listener($event) { i0.ɵɵrestoreView(_r34_1); var ctx_r38 = i0.ɵɵnextContext(3); return ctx_r38.onValueChanged($event); })("notifyFieldClicked", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyFieldClicked_3_listener($event) { i0.ɵɵrestoreView(_r34_1); var ctx_r39 = i0.ɵɵnextContext(3); return ctx_r39.onCustomizeFieldClick($event); })("notifyMenuItemClicked", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyMenuItemClicked_3_listener($event) { i0.ɵɵrestoreView(_r34_1); var ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.onCustomizeFieldMenuClicked($event); })("click", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_click_3_listener($event) { i0.ɵɵrestoreView(_r34_1); var pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit; var ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.itemClicked($event, pepperiObjectInput_r28); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit;
            var ctx_r31 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(16, _c7, (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r31.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r31.selectedItemId))("ngStyle", i0.ɵɵpureFunction2(18, _c8, ctx_r31.calculatedObjectHeight, ctx_r31.showItems || pepperiObjectInput_r28 ? "visible" : "hidden"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(21, _c9, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.BackgroundColor));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("checkForChanges", ctx_r31.checkForChanges)("uiControlHeader", ctx_r31.uiControl)("firstFieldAsLink", ctx_r31.firstFieldAsLink)("pepperiObjectInput", pepperiObjectInput_r28)("canEditObject", !ctx_r31.disabled && (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.IsEditable))("objectId", ctx_r31.objectId)("parentId", ctx_r31.parentId)("searchCode", ctx_r31.searchCode)("lockEvents", ctx_r31.disableSelectionItems)("layoutType", ctx_r31.LAYOUT_TYPE.PepperiTable)("listType", ctx_r31.listType)("isActive", ((pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r31.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r31.selectedItemId || (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r31.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r31.hoveredItemId) && !ctx_r31.isTouchDevice)("pageType", ctx_r31.pageType);
        }
    }
    var _c10 = function (a0, a1) { return { highlighted: a0, cardView: a1 }; };
    function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r45_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 24);
            i0.ɵɵlistener("mouseenter", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_div_mouseenter_1_listener($event) { i0.ɵɵrestoreView(_r45_1); var pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit; var ctx_r44 = i0.ɵɵnextContext(2); return ctx_r44.onCardMouseEnter($event, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type); })("mouseleave", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_div_mouseleave_1_listener($event) { i0.ɵɵrestoreView(_r45_1); var pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit; var ctx_r47 = i0.ɵɵnextContext(2); return ctx_r47.onCardMouseLeave($event, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type); });
            i0.ɵɵelementStart(2, "pep-form", 25);
            i0.ɵɵlistener("notifyValueChanged", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyValueChanged_2_listener($event) { i0.ɵɵrestoreView(_r45_1); var ctx_r49 = i0.ɵɵnextContext(3); return ctx_r49.onValueChanged($event); })("notifyFieldClicked", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyFieldClicked_2_listener($event) { i0.ɵɵrestoreView(_r45_1); var ctx_r50 = i0.ɵɵnextContext(3); return ctx_r50.onCustomizeFieldClick($event); })("notifyMenuItemClicked", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyMenuItemClicked_2_listener($event) { i0.ɵɵrestoreView(_r45_1); var ctx_r51 = i0.ɵɵnextContext(3); return ctx_r51.onCustomizeFieldMenuClicked($event); })("click", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_click_2_listener($event) { i0.ɵɵrestoreView(_r45_1); var pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit; var ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.itemClicked($event, pepperiObjectInput_r28); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit;
            var ctx_r32 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(ctx_r32.itemClass);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(18, _c10, (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r32.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r32.selectedItemId, ctx_r32.isCardView))("ngStyle", i0.ɵɵpureFunction2(21, _c8, ctx_r32.calculatedObjectHeight, ctx_r32.showItems || pepperiObjectInput_r28 ? "visible" : "hidden"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("firstFieldAsLink", ctx_r32.isCardView ? ctx_r32.firstFieldAsLink : false)("checkForChanges", ctx_r32.checkForChanges)("uiControlHeader", ctx_r32.uiControl)("pepperiObjectInput", pepperiObjectInput_r28)("isCardView", ctx_r32.isCardView)("canEditObject", !ctx_r32.disabled && (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.IsEditable))("objectId", ctx_r32.objectId)("parentId", ctx_r32.parentId)("searchCode", ctx_r32.searchCode)("lockEvents", ctx_r32.disableSelectionItems)("layoutType", ctx_r32.getThumbnailsLayout())("listType", ctx_r32.listType)("isActive", ((pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r32.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r32.selectedItemId || (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r32.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r32.hoveredItemId) && !ctx_r32.isTouchDevice)("pageType", ctx_r32.pageType);
        }
    }
    function PepperiInternalListComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template, 4, 23, "ng-container", 0);
            i0.ɵɵtemplate(2, PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template, 3, 24, "ng-container", 0);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r27 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r27.isTable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r27.isTable);
        }
    }
    function PepperiInternalListComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiInternalListComponent_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 20);
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngForOf", ctx_r3.scrollItems)("ngForTrackBy", ctx_r3.trackByFunc);
        }
    }
    function PepperiInternalListComponent_ng_template_4_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 29);
            i0.ɵɵelementStart(1, "label");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r57 = ctx.$implicit;
            var j_r58 = ctx.index;
            var ctx_r56 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c3, field_r57.calcTitleColumnWidthString));
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("total-label body-sm text-align-", field_r57.Layout.XAlignment, "");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r56.totalsRow[j_r58], " ");
        }
    }
    function PepperiInternalListComponent_ng_template_4_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 27);
            i0.ɵɵelementStart(1, "fieldset", 10);
            i0.ɵɵtemplate(2, PepperiInternalListComponent_ng_template_4_div_0_div_2_Template, 3, 7, "div", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r55 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r55.uiControl == null ? null : ctx_r55.uiControl.ControlFields);
        }
    }
    function PepperiInternalListComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiInternalListComponent_ng_template_4_div_0_Template, 3, 1, "div", 26);
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", (ctx_r5.totalsRow == null ? null : ctx_r5.totalsRow.length) > 0 && ctx_r5.totalsRow.length <= (ctx_r5.uiControl == null ? null : ctx_r5.uiControl.ControlFields.length));
        }
    }
    var VIEW_TYPE;
    (function (VIEW_TYPE) {
        VIEW_TYPE[VIEW_TYPE["Card"] = 0] = "Card";
        VIEW_TYPE[VIEW_TYPE["Line"] = 1] = "Line";
        VIEW_TYPE[VIEW_TYPE["Table"] = 2] = "Table";
    })(VIEW_TYPE || (VIEW_TYPE = {}));
    var PepperiInternalListComponent = /** @class */ (function () {
        function PepperiInternalListComponent(element, layoutService, cd, renderer) {
            var _this = this;
            this.element = element;
            this.layoutService = layoutService;
            this.cd = cd;
            this.renderer = renderer;
            this.currentListTypeTranslation = '';
            this.noDataFoundMsg = 'Items not found';
            this.hideAllSelectionInMulti = false;
            this.top = -1;
            this.listType = '';
            this.objectId = '0';
            this.parentId = '0';
            this.searchCode = '0';
            // @Input() showTopBorder = false;
            this.firstFieldAsLink = false;
            this.supportResizing = true;
            this.parentScroll = null;
            this.disabled = false;
            this.isPrinting = false;
            this.disableSelectionItems = false;
            this.layoutType = null;
            this.pageType = '';
            this.totalsRow = [];
            this.isTouchDevice = false;
            this.notifyThumbnailClicked = new i0.EventEmitter();
            this.notifyFieldClicked = new i0.EventEmitter();
            this.notifyMenuItemClicked = new i0.EventEmitter();
            this.notifyValueChanged = new i0.EventEmitter();
            this.notifySelectAllSingleActionClicked = new i0.EventEmitter();
            this.notifySingleActionClicked = new i0.EventEmitter();
            this.notifyListLoad = new i0.EventEmitter();
            this.LAYOUT_TYPE = i11.LAYOUT_TYPE;
            this.uiControl = null;
            this.totalRows = -1;
            this.isTable = false;
            this.hasColumnWidthOfTypePercentage = true;
            this.items = null;
            this.isCardView = false;
            this.itemsCounter = 0;
            this.showItems = true;
            this.SEPARATOR = ',';
            this.nativeWindow = null;
            this.selectedItemId = '';
            this.hoveredItemId = '';
            this.lockEvents = false;
            this.containerWidth = 0;
            // headerIsInFocus = false;
            // For resize
            this.pressedColumn = '';
            this.startX = 0;
            this.startWidth = 0;
            this.tableStartWidth = 0;
            this.isUserSelected = false;
            this.checkForChanges = null;
            this.useVirtualScroll = true;
            this.layoutService.onResize$
                .pipe(operators.delay(0))
                .subscribe(function (size) {
                _this.screenSize = size;
            });
            this.nativeWindow = window;
        }
        PepperiInternalListComponent.prototype.ngOnInit = function () {
            this.containerWidth = 0;
        };
        PepperiInternalListComponent.prototype.ngOnChanges = function (changes) {
            if (this.containerWidth <= 0) {
                this.setContainerWidth();
            }
        };
        PepperiInternalListComponent.prototype.ngOnDestroy = function () {
            if (this.notifyValueChanged) {
                this.notifyValueChanged.unsubscribe();
            }
            if (this.notifyFieldClicked) {
                this.notifyFieldClicked.unsubscribe();
            }
            if (this.notifyMenuItemClicked) {
                this.notifyMenuItemClicked.unsubscribe();
            }
            if (this.notifyThumbnailClicked) {
                this.notifyThumbnailClicked.unsubscribe();
            }
        };
        PepperiInternalListComponent.prototype.setContainerWidth = function () {
            var selectionCheckBoxWidth = 0;
            var rowHeight = 40; // the table row height (2.5rem * 16font-size).
            var style = window.getComputedStyle(this.element.nativeElement.parentElement);
            // The container-fluid class padding left + right + border
            var containerFluidSpacing = parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);
            var parentContainer = this.element.nativeElement.parentElement.parentElement > 0 ?
                this.element.nativeElement.parentElement.parentElement : this.element.nativeElement.parentElement;
            // Calculate if vertical scroll should appear, if so set the scroll width. (this.totalRows + 1) + 1 is for the header row.
            var scrollWidth = parentContainer.clientHeight < rowHeight * (this.totalRows + 1) ? 18 : 0; // 18 is the default scroll width.
            // The selectionCheckBoxWidth width + containerFluidSpacing + scrollWidth.
            var rowHeaderWidthToSub = containerFluidSpacing + selectionCheckBoxWidth + scrollWidth;
            this.containerWidth = parentContainer.offsetWidth - rowHeaderWidthToSub;
        };
        PepperiInternalListComponent.prototype.removeTable = function () {
            this.cleanItems();
            this.uiControl = null;
        };
        PepperiInternalListComponent.prototype.toggleItems = function (isVisible) {
            this.showItems = isVisible;
            this.lockEvents = !isVisible;
        };
        PepperiInternalListComponent.prototype.updateScrollItems = function (startIndex, endIndex, loadInChunks) {
            if (loadInChunks === void 0) { loadInChunks = true; }
            this.scrollItems = this.items.slice(startIndex, endIndex);
        };
        PepperiInternalListComponent.prototype.getUniqItemId = function (itemId, itemType) {
            if (itemType === void 0) { itemType = ''; }
            return itemId + this.SEPARATOR + itemType;
        };
        PepperiInternalListComponent.prototype.setLayout = function () {
            var self = this;
            if (this.totalRows === 0 ||
                !this.uiControl ||
                !this.uiControl.ControlFields ||
                this.uiControl.ControlFields.length === 0) {
                return;
            }
            this.uiControl.ControlFields.forEach(function (cf) {
                if (cf.ColumnWidth === 0) {
                    cf.ColumnWidth = 10;
                }
                if (self.isTable &&
                    (cf.FieldType === i11.FIELD_TYPE.Image ||
                        // cf.FieldType === FIELD_TYPE.Indicators || ???
                        cf.FieldType === i11.FIELD_TYPE.Signature ||
                        cf.FieldType === i11.FIELD_TYPE.NumberIntegerQuantitySelector ||
                        cf.FieldType === i11.FIELD_TYPE.NumberRealQuantitySelector ||
                        cf.FieldType === i11.FIELD_TYPE.NumberIntegerForMatrix ||
                        cf.FieldType === i11.FIELD_TYPE.NumberRealForMatrix ||
                        cf.FieldType === i11.FIELD_TYPE.Package ||
                        cf.ApiName === 'UnitsQuantity' ||
                        cf.ApiName === 'QuantitySelector')) {
                    cf.Layout.XAlignment = 3;
                }
            });
            if (!this.cd['destroyed']) {
                this.cd.detectChanges();
            }
            // Set the columns width.
            if (this.containerWidth <= 0) {
                this.setContainerWidth();
            }
            this.calcColumnsWidth();
            this.checkForChanges = new Date().getTime();
        };
        PepperiInternalListComponent.prototype.calcColumnsWidth = function () {
            var fixedMultiple = 3.78; // for converting em to pixel.
            var length = this.uiControl.ControlFields.length;
            var selectionCheckBoxWidth = 0;
            // Is table AND there is at least one column of width type of percentage.
            if (this.isTable) {
                if (this.uiControl && this.uiControl.ControlFields) {
                    this.hasColumnWidthOfTypePercentage = this.uiControl.ControlFields.filter(function (cf) { return cf.ColumnWidthType === 1; }).length === 0;
                }
            }
            // If the columns size is fixed and the total is small then the container change it to percentage.
            if (!this.hasColumnWidthOfTypePercentage) {
                var totalFixedColsWidth = this.uiControl.ControlFields
                    .map(function (cf) { return cf.ColumnWidth * fixedMultiple; })
                    .reduce(function (sum, current) { return sum + current; });
                if (window.innerWidth > totalFixedColsWidth) {
                    this.hasColumnWidthOfTypePercentage = true;
                }
            }
            var totalCalcColsWidth = 0;
            // Calc by percentage
            if (this.hasColumnWidthOfTypePercentage) {
                var totalColsWidth = this.uiControl.ControlFields.map(function (cf) { return cf.ColumnWidth; }).reduce(function (sum, current) { return sum + current; });
                for (var index = 0; index < length; index++) {
                    var uiControlField = this.uiControl.ControlFields[index];
                    var calcColumnWidthPercentage = (100 / totalColsWidth) * uiControlField.ColumnWidth;
                    uiControlField.calcColumnWidth = Math.floor((this.containerWidth * calcColumnWidthPercentage) / 100);
                    if (index === length - 1) {
                        uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                            'calc(100% - ' + totalCalcColsWidth + 'px)'; // For 100%
                    }
                    else {
                        uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                            uiControlField.calcColumnWidth + 'px';
                        totalCalcColsWidth += uiControlField.calcColumnWidth;
                    }
                }
                this.renderer.setStyle(this.element.nativeElement, 'width', 'inherit');
            }
            else {
                for (var index = 0; index < length; index++) {
                    var uiControlField = this.uiControl.ControlFields[index];
                    var currentFixedWidth = Math.floor(uiControlField.ColumnWidth * fixedMultiple);
                    if (index === length - 1) {
                        uiControlField.calcTitleColumnWidthString = currentFixedWidth + 'px';
                        uiControlField.calcColumnWidthString = currentFixedWidth - 4 + 'px'; // -4 for the row padding.
                    }
                    else {
                        uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                            currentFixedWidth + 'px';
                    }
                    totalCalcColsWidth += currentFixedWidth;
                }
                this.renderer.setStyle(this.element.nativeElement, 'width', totalCalcColsWidth + selectionCheckBoxWidth + 'px');
            }
        };
        PepperiInternalListComponent.prototype.initResizeData = function () {
            this.startX = 0;
            this.startWidth = 0;
            this.tableStartWidth = 0;
            this.pressedColumn = '';
        };
        PepperiInternalListComponent.prototype.onListResizeStart = function (event, apiName) {
            this.pressedColumn = apiName;
            this.startX = event.x;
            this.startWidth = event.target.closest('.header-column').offsetWidth;
            // Set the tableStartWidth to the container offsetWidth
            this.tableStartWidth = this.noVirtualScrollCont.nativeElement.offsetWidth;
        };
        PepperiInternalListComponent.prototype.onListResize = function (event) {
            if (this.pressedColumn.length > 0) {
                var widthToAdd = this.layoutService.isRtl() ? this.startX - event.x : event.x - this.startX;
                // Set the width of the column and the container of the whole columns.
                if (this.startWidth + widthToAdd >= 48 || widthToAdd > 0) {
                    var length = this.uiControl.ControlFields.length;
                    var totalCalcColsWidth = 0;
                    for (var index = 0; index < length; index++) {
                        var uiControlField = this.uiControl.ControlFields[index];
                        if (index === length - 1) {
                            // Calc the last column only in percentage type.
                            if (this.hasColumnWidthOfTypePercentage) {
                                uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                                    'calc(100% - ' + totalCalcColsWidth + 'px)'; // For 100%
                            }
                            else {
                                if (uiControlField.ApiName === this.pressedColumn) {
                                    uiControlField.calcColumnWidth = this.startWidth + widthToAdd;
                                    uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidth + 'px';
                                    uiControlField.calcColumnWidthString = uiControlField.calcColumnWidth - 4 + 'px';
                                }
                            }
                        }
                        else if (uiControlField.ApiName === this.pressedColumn) {
                            uiControlField.calcColumnWidth = this.startWidth + widthToAdd;
                            uiControlField.calcTitleColumnWidthString = uiControlField.calcColumnWidthString =
                                uiControlField.calcColumnWidth + 'px';
                        }
                        totalCalcColsWidth += uiControlField.calcColumnWidth;
                    }
                    this.renderer.setStyle(this.element.nativeElement, 'width', this.tableStartWidth + widthToAdd + 'px');
                }
                this.checkForChanges = new Date().getTime();
            }
        };
        PepperiInternalListComponent.prototype.onListResizeEnd = function (event) {
            if (this.pressedColumn.length > 0) {
                if (event && $(event.srcElement).parents('.resizeBox').length > 0) {
                    this.initResizeData();
                }
                else {
                    var self_1 = this;
                    setTimeout(function () {
                        self_1.initResizeData();
                    }, 0);
                }
            }
        };
        PepperiInternalListComponent.prototype.onListHeaderMouseEnter = function (event) {
            // this.headerIsInFocus = true;
        };
        PepperiInternalListComponent.prototype.onListHeaderMouseLeave = function (event) {
            // this.headerIsInFocus = false;
            this.onListResizeEnd(event);
            this.initResizeData();
        };
        PepperiInternalListComponent.prototype.onListChange = function (event) {
            if (this.isPrinting) {
                return;
            }
            // For other events do nothing.
            if (typeof event.start === 'undefined' || typeof event.end === 'undefined') {
                return;
            }
            this.calculatedObjectHeight = event.calculatedChildHeight + 'px';
            if (!this.lockEvents) {
                this.toggleItems(false);
                this.updateScrollItems(event.start, event.end, false);
                this.toggleItems(true);
            }
        };
        PepperiInternalListComponent.prototype.onListLoad = function (event) {
            this.notifyListLoad.emit(event);
        };
        PepperiInternalListComponent.prototype.getParentContainer = function () {
            return this.parentScroll ? this.parentScroll : window;
        };
        PepperiInternalListComponent.prototype.onValueChanged = function (valueChanged) {
            if (this.disabled) {
                return;
            }
            this.notifyValueChanged.emit(valueChanged);
        };
        PepperiInternalListComponent.prototype.onCustomizeFieldClick = function (customizeFieldClickedData) {
            if (this.disabled) {
                return;
            }
            this.notifyFieldClicked.emit(customizeFieldClickedData);
        };
        PepperiInternalListComponent.prototype.onCustomizeFieldMenuClicked = function (customizeFieldClickedData) {
            if (this.disabled) {
                return;
            }
            this.notifyMenuItemClicked.emit(customizeFieldClickedData);
        };
        PepperiInternalListComponent.prototype.getIsDisabled = function (pepperiObjectInput) {
            if (this.disableSelectionItems) {
                return true;
            }
            else {
                var IsNotSelectableForActions = (pepperiObjectInput === null || pepperiObjectInput === void 0 ? void 0 : pepperiObjectInput.Data) && !pepperiObjectInput.Data.IsSelectableForActions;
                return IsNotSelectableForActions;
            }
        };
        PepperiInternalListComponent.prototype.itemClicked = function (e, objectSingleData) {
            // Set seleted item
            var itemId = objectSingleData.Data.UID.toString();
            var itemType = objectSingleData.Data.Type.toString();
            var isChecked = false;
            if (objectSingleData && objectSingleData.Data && objectSingleData.Data.IsSelectableForActions) {
                this.selectedItemId = this.getUniqItemId(itemId, itemType);
                isChecked = true;
            }
            if (!this.isTable) {
                if (this.disabled) {
                    return;
                }
                this.notifyThumbnailClicked.emit(objectSingleData);
            }
        };
        PepperiInternalListComponent.prototype.onTableRowMouseEnter = function (event, itemId, itemType) {
            if (this.isTouchDevice) {
                return;
            }
            var uniqItemId = this.getUniqItemId(itemId, itemType);
            this.hoveredItemId = uniqItemId;
        };
        PepperiInternalListComponent.prototype.onTableRowMouseLeave = function (event, itemId, itemType) {
            this.hoveredItemId = '';
        };
        PepperiInternalListComponent.prototype.onCardMouseEnter = function (event, itemId, itemType) {
            if (this.isTouchDevice) {
                return;
            }
            var uniqItemId = this.getUniqItemId(itemId, itemType);
            this.hoveredItemId = uniqItemId;
        };
        PepperiInternalListComponent.prototype.onCardMouseLeave = function (event, itemId, itemType) {
            this.hoveredItemId = '';
        };
        PepperiInternalListComponent.prototype.getThumbnailsLayout = function () {
            return this.layoutType == null ? i11.LAYOUT_TYPE.PepperiCard : this.layoutType;
        };
        // call this function after resize + animation end
        PepperiInternalListComponent.prototype.winResize = function (e) {
            this.containerWidth = 0;
            this.setLayout();
        };
        PepperiInternalListComponent.prototype.trackByFunc = function (index, item) {
            return item && item.Data && item.Data.UID ? item.Data.UID : index;
        };
        PepperiInternalListComponent.prototype.cleanItems = function () {
            this.itemsCounter = 0;
            this.items = this.totalRows > 0 ? Array(this.totalRows) : [];
            this.scrollItems = [];
            this.calculatedObjectHeight = '';
        };
        PepperiInternalListComponent.prototype.getUIControl = function () {
            return this.uiControl;
        };
        PepperiInternalListComponent.prototype.initListData = function (uiControl, totalRows, items, viewType, itemClass) {
            if (viewType === void 0) { viewType = VIEW_TYPE.Table; }
            if (itemClass === void 0) { itemClass = ''; }
            this.isCardView = viewType === VIEW_TYPE.Card;
            this.uiControl = uiControl;
            this.itemClass = itemClass;
            this.selectedItemId = '';
            this.isTable = viewType === VIEW_TYPE.Table;
            this.totalRows = totalRows;
            // fix bug for the scrollTo that doesn't work on edge div , not window
            var scrollingElement = this.getParentContainer();
            scrollingElement.scrollTo(0, 0);
            this.cleanItems();
            this.updateListItems(items, null);
            this.onListLoad(null);
            this.setLayout();
        };
        PepperiInternalListComponent.prototype.updateListItems = function (items, event) {
            this.scrollItems = this.items = items;
            this.itemsCounter = items.length;
        };
        PepperiInternalListComponent.prototype.updateListItem = function (data) {
            var index = 0;
            // Update items list
            index = this.items.findIndex(function (i) { return i && i.Data && i.Data.UID === data.UID; });
            if (index >= 0 && index < this.items.length) {
                this.items[index].Data = data;
            }
            // Update scrollItems list
            index = this.scrollItems.findIndex(function (i) { return i && i.Data && i.Data.UID === data.UID; });
            if (index >= 0 && index < this.scrollItems.length) {
                this.scrollItems[index].Data = data;
                this.checkForChanges = new Date().getTime();
            }
        };
        PepperiInternalListComponent.prototype.getIsItemEditable = function (uid) {
            var item = this.items.filter(function (x) { return x.Data.UID.toString() === uid; });
            if (item.length > 0) {
                return item[0].Data.IsEditable;
            }
            else {
                return false;
            }
        };
        PepperiInternalListComponent.prototype.getItemDataByID = function (uid) {
            var _a;
            return (_a = this.items.find(function (item) { return item.Data.UID.toString() === uid; })) === null || _a === void 0 ? void 0 : _a.Data;
        };
        return PepperiInternalListComponent;
    }());
    PepperiInternalListComponent.ɵfac = function PepperiInternalListComponent_Factory(t) { return new (t || PepperiInternalListComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i11.LayoutService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    PepperiInternalListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiInternalListComponent, selectors: [["pep-internal-list"]], viewQuery: function PepperiInternalListComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$1, true);
                i0.ɵɵviewQuery(_c1, true);
                i0.ɵɵviewQuery(_c2, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.noVirtualScrollCont = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableHeader = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectAllCB = _t.first);
            }
        }, hostBindings: function PepperiInternalListComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("resize", function PepperiInternalListComponent_resize_HostBindingHandler($event) { return ctx.winResize($event); }, false, i0.ɵɵresolveWindow);
            }
        }, inputs: { currentListTypeTranslation: "currentListTypeTranslation", noDataFoundMsg: "noDataFoundMsg", hideAllSelectionInMulti: "hideAllSelectionInMulti", top: "top", listType: "listType", objectId: "objectId", parentId: "parentId", searchCode: "searchCode", firstFieldAsLink: "firstFieldAsLink", supportResizing: "supportResizing", parentScroll: "parentScroll", disabled: "disabled", isPrinting: "isPrinting", disableSelectionItems: "disableSelectionItems", layoutType: "layoutType", pageType: "pageType", totalsRow: "totalsRow", isTouchDevice: "isTouchDevice" }, outputs: { notifyThumbnailClicked: "notifyThumbnailClicked", notifyFieldClicked: "notifyFieldClicked", notifyMenuItemClicked: "notifyMenuItemClicked", notifyValueChanged: "notifyValueChanged", notifySelectAllSingleActionClicked: "notifySelectAllSingleActionClicked", notifySingleActionClicked: "notifySingleActionClicked", notifyListLoad: "notifyListLoad" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 2, consts: [[4, "ngIf"], ["listData", ""], ["listTotals", ""], [1, "no-data"], ["class", "table-header", 3, "ngClass", "mouseup", "mouseenter", "mouseleave", "mousemove", 4, "ngIf"], [3, "ngClass"], ["noVirtualScrollCont", ""], [4, "ngTemplateOutlet"], [1, "table-header", 3, "ngClass", "mouseup", "mouseenter", "mouseleave", "mousemove"], ["tableHeader", ""], [1, "table-header-fieldset"], ["class", "header-column pull-left flip", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [1, "header-column", "pull-left", "flip", 3, "ngStyle", "ngClass"], [3, "id", "class", "title", 4, "ngIf"], ["class", "header-label body-sm pull-left flip", 3, "id", 4, "ngIf"], ["class", "resizeBox pull-right flip", 3, "mousedown", 4, "ngIf"], [3, "id", "title"], [1, "header-label", "body-sm", "pull-left", "flip", 3, "id"], [1, "resizeBox", "pull-right", "flip", 3, "mousedown"], ["name", "arrow-up", 1, "asc"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-row", 3, "ngClass", "ngStyle", "mouseenter", "mouseleave"], [1, "table-row-fieldset", 3, "ngStyle"], [3, "checkForChanges", "uiControlHeader", "firstFieldAsLink", "pepperiObjectInput", "canEditObject", "objectId", "parentId", "searchCode", "lockEvents", "layoutType", "listType", "isActive", "pageType", "notifyValueChanged", "notifyFieldClicked", "notifyMenuItemClicked", "click"], [1, "pull-left", "flip", 3, "ngClass", "ngStyle", "mouseenter", "mouseleave"], [3, "firstFieldAsLink", "checkForChanges", "uiControlHeader", "pepperiObjectInput", "isCardView", "canEditObject", "objectId", "parentId", "searchCode", "lockEvents", "layoutType", "listType", "isActive", "pageType", "notifyValueChanged", "notifyFieldClicked", "notifyMenuItemClicked", "click"], ["class", "table-total", 4, "ngIf"], [1, "table-total"], ["class", "total-column pull-left flip", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "total-column", "pull-left", "flip", 3, "ngStyle"]], template: function PepperiInternalListComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PepperiInternalListComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
                i0.ɵɵtemplate(1, PepperiInternalListComponent_ng_container_1_Template, 6, 7, "ng-container", 0);
                i0.ɵɵtemplate(2, PepperiInternalListComponent_ng_template_2_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(4, PepperiInternalListComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.totalRows == 0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.totalRows > 0);
            }
        }, styles: ["[_nghost-%COMP%]{height:inherit}.no-data[_ngcontent-%COMP%]{font-size:1.5rem;margin-top:100px;text-align:center}.table-header[_ngcontent-%COMP%]{top:0}.table-header.below-header-and-top-bar[_ngcontent-%COMP%]{top:calc(var(--pep-header-height, 4rem) + var(--pep-top-bar-spacing-top, 1.5rem) + var(--pep-top-bar-spacing-bottom, .5rem) + var(--pep-top-bar-field-height, 2.5rem))}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiInternalListComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-internal-list',
                        templateUrl: './internal-list.component.html',
                        styleUrls: ['./internal-list.component.scss'],
                        host: {
                            '(window:resize)': 'winResize($event)'
                        }
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: i11.LayoutService }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { currentListTypeTranslation: [{
                    type: i0.Input
                }], noDataFoundMsg: [{
                    type: i0.Input
                }], hideAllSelectionInMulti: [{
                    type: i0.Input
                }], top: [{
                    type: i0.Input
                }], listType: [{
                    type: i0.Input
                }], objectId: [{
                    type: i0.Input
                }], parentId: [{
                    type: i0.Input
                }], searchCode: [{
                    type: i0.Input
                }], firstFieldAsLink: [{
                    type: i0.Input
                }], supportResizing: [{
                    type: i0.Input
                }], parentScroll: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], isPrinting: [{
                    type: i0.Input
                }], disableSelectionItems: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], pageType: [{
                    type: i0.Input
                }], totalsRow: [{
                    type: i0.Input
                }], isTouchDevice: [{
                    type: i0.Input
                }], notifyThumbnailClicked: [{
                    type: i0.Output
                }], notifyFieldClicked: [{
                    type: i0.Output
                }], notifyMenuItemClicked: [{
                    type: i0.Output
                }], notifyValueChanged: [{
                    type: i0.Output
                }], notifySelectAllSingleActionClicked: [{
                    type: i0.Output
                }], notifySingleActionClicked: [{
                    type: i0.Output
                }], notifyListLoad: [{
                    type: i0.Output
                }], noVirtualScrollCont: [{
                    type: i0.ViewChild,
                    args: ['noVirtualScrollCont']
                }], tableHeader: [{
                    type: i0.ViewChild,
                    args: ['tableHeader']
                }], selectAllCB: [{
                    type: i0.ViewChild,
                    args: ['selectAllCB']
                }] });
    })();

    var _c0$2 = ["orgCont"];
    var _c1$1 = ["modalCont"];
    var _c2$1 = ["matrixTemplate"];
    function PepperiInternalPageComponent_ng_template_0_ng_container_4_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 19);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("\u00A0", ctx_r7.currentAdditionalApiName == null ? null : ctx_r7.currentAdditionalApiName.Value, "\u00A0");
        }
    }
    var _c3$1 = function (a0) { return { selected: a0 }; };
    function PepperiInternalPageComponent_ng_template_0_ng_container_4_button_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 17);
            i0.ɵɵlistener("click", function PepperiInternalPageComponent_ng_template_0_ng_container_4_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12_1); var additionalApiName_r10 = ctx.$implicit; var ctx_r11 = i0.ɵɵnextContext(3); return ctx_r11.changeAdditionalApiName(additionalApiName_r10); });
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var additionalApiName_r10 = ctx.$implicit;
            var ctx_r9 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c3$1, (ctx_r9.currentAdditionalApiName == null ? null : ctx_r9.currentAdditionalApiName.Key) == (additionalApiName_r10 == null ? null : additionalApiName_r10.Key)));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(additionalApiName_r10.Value);
        }
    }
    var _c4$1 = function (a0) { return { "pull-left flip": a0 }; };
    function PepperiInternalPageComponent_ng_template_0_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "button", 11);
            i0.ɵɵtemplate(2, PepperiInternalPageComponent_ng_template_0_ng_container_4_span_2_Template, 2, 1, "span", 12);
            i0.ɵɵelementStart(3, "mat-icon", 13);
            i0.ɵɵelement(4, "pep-icon", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-menu", 15, 16);
            i0.ɵɵelementStart(7, "button", 17);
            i0.ɵɵlistener("click", function PepperiInternalPageComponent_ng_template_0_ng_container_4_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.changeAdditionalApiName(null); });
            i0.ɵɵelementStart(8, "span");
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, PepperiInternalPageComponent_ng_template_0_ng_container_4_button_11_Template, 3, 4, "button", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r8 = i0.ɵɵreference(6);
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matMenuTriggerFor", _r8);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.currentAdditionalApiName);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c4$1, ctx_r5.currentAdditionalApiName));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c3$1, ctx_r5.currentAdditionalApiName === null));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 6, "LIST.NONE"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r5.additionalApiNames);
        }
    }
    function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-icon", 26);
        }
    }
    function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-icon", 27);
        }
    }
    function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-icon", 28);
        }
    }
    function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 17);
            i0.ɵɵlistener("click", function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22_1); var viewType_r17 = ctx.$implicit; var ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.changeChildrenViewType(viewType_r17 == null ? null : viewType_r17.Key); });
            i0.ɵɵelementStart(1, "mat-icon", 22);
            i0.ɵɵtemplate(2, PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_2_Template, 1, 0, "pep-icon", 23);
            i0.ɵɵtemplate(3, PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_3_Template, 1, 0, "pep-icon", 24);
            i0.ɵɵtemplate(4, PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_4_Template, 1, 0, "pep-icon", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var viewType_r17 = ctx.$implicit;
            var ctx_r16 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c3$1, (ctx_r16.currentViewType == null ? null : ctx_r16.currentViewType.Key) == (viewType_r17 == null ? null : viewType_r17.Key)));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", viewType_r17 == null ? null : viewType_r17.Key);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "OrderCenterMatrix");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "OrderCenterFlatMatrixGrid");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "OrderCenterFlatMatrixLine");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(viewType_r17 == null ? null : viewType_r17.Value);
        }
    }
    function PepperiInternalPageComponent_ng_template_0_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "button", 11);
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵelement(3, "pep-icon", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-menu", 15, 21);
            i0.ɵɵtemplate(6, PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_Template, 7, 8, "button", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r15 = i0.ɵɵreference(5);
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matMenuTriggerFor", _r15);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r6.childViewTypes);
        }
    }
    function PepperiInternalPageComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵelementStart(1, "span", 7);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 8);
            i0.ɵɵtemplate(4, PepperiInternalPageComponent_ng_template_0_ng_container_4_Template, 12, 12, "ng-container", 9);
            i0.ɵɵtemplate(5, PepperiInternalPageComponent_ng_template_0_ng_container_5_Template, 7, 2, "ng-container", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "pep-internal-list", 10);
            i0.ɵɵlistener("notifyValueChanged", function PepperiInternalPageComponent_ng_template_0_Template_pep_internal_list_notifyValueChanged_6_listener($event) { i0.ɵɵrestoreView(_r24_1); var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onCustomizeObjectChanged($event); })("notifyFieldClicked", function PepperiInternalPageComponent_ng_template_0_Template_pep_internal_list_notifyFieldClicked_6_listener($event) { i0.ɵɵrestoreView(_r24_1); var ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.onCustomizeFieldClick($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵclassMapInterpolate1("matrix-title-container pepperi-border-bottom align-", ctx_r1.field.xAlignment, "");
            i0.ɵɵpropertyInterpolate("title", ctx_r1.field.label);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r1.field.label);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", (ctx_r1.currentViewType == null ? null : ctx_r1.currentViewType.Key) == "OrderCenterMatrix" && ctx_r1.additionalApiNames && ctx_r1.additionalApiNames.length > 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.childViewTypes && ctx_r1.childViewTypes.length > 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("totalsRow", ctx_r1.totalsRow);
        }
    }
    function PepperiInternalPageComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 29);
        }
    }
    function PepperiInternalPageComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r27_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 30);
            i0.ɵɵlistener("click", function PepperiInternalPageComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27_1); var ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.showMatrixDialog(); });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "INTERNAL_PAGE.CLICK_TO_ORDER"));
        }
    }
    var _c5$1 = function (a0, a1) { return { "max-width": a0, "max-height": a1 }; };
    var PepperiInternalPageComponent = /** @class */ (function () {
        function PepperiInternalPageComponent(fb, pepperiInternalPageService, customizationService, elementRef, changeDetectorRef) {
            this.fb = fb;
            this.pepperiInternalPageService = pepperiInternalPageService;
            this.customizationService = customizationService;
            this.elementRef = elementRef;
            this.changeDetectorRef = changeDetectorRef;
            this.controlType = 'internalPage';
            this.hasHeightLimit = false;
            this.layoutType = i11.LAYOUT_TYPE.PepperiForm;
            this.childChanged = new i0.EventEmitter();
            this.childClicked = new i0.EventEmitter();
            // TODO: Implement
            // @ViewChild('childModal') public childModal: ModalDirective;
            this.childModal = { isShown: false };
            this.LAYOUT_TYPE = i11.LAYOUT_TYPE;
            this.checkForChanges = null;
            this.childData = null;
            this.totalsRow = [];
            this.additionalApiNames = null;
            this.currentAdditionalApiName = null;
            this.focusedQS = false;
            this.fieldIdWithFocus = '';
            this.columnWidth = 100;
            this.coverChildTable = false;
            this.currentViewType = null;
            this.sumOfMinColWidth = 0;
            this.totalRowsWidth = 0;
            this.viewWidth = '100%';
            this.viewHeight = 'auto';
            this.displayQSbtns = true;
            this.selectedApiName = '';
            this.showSort = false;
            this.defaultRowSpan = -1;
        }
        PepperiInternalPageComponent.prototype.fillData = function () {
            var _this = this;
            var view = this.matrixTemplate.createEmbeddedView(null);
            if (this.childModal.isShown) {
                this.orgCont.clear();
                this.modalCont.clear();
                this.modalCont.insert(view);
            }
            else {
                this.modalCont.clear();
                this.orgCont.clear();
                this.orgCont.insert(view);
            }
            setTimeout(function () {
                var e_1, _a;
                var buffer = [];
                if (_this.childData.Rows) {
                    try {
                        // for (let i = 0; i < this.childData.Rows.length; i++) {
                        for (var _b = __values(_this.childData.Rows), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var childDataRow = _c.value;
                            var osd = new i11.ObjectSingleData(_this.uiControl, childDataRow);
                            osd.IsEditable = true;
                            buffer.push(osd);
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
                var viewType = _this.isTableView() ? VIEW_TYPE.Table : VIEW_TYPE.Line;
                _this.customList.initListData(_this.uiControl, _this.childData.TotalRows, buffer, viewType, _this.getItemClass());
                _this.setTotalsRow();
                if (!_this.childModal.isShown) {
                    var childrenCount = _this.childData.Rows ? _this.childData.Rows.length : 0;
                    var isEven = childrenCount % 2 === 0;
                    // 3 for matrix & flat matrix because the header + total is 2 more rows.
                    var rowsToAdd = _this.isMatrixView() || _this.isFlatMatrixView() ? 3 : 1;
                    var formRowHeight = _this.customizationService.calculateFormFieldHeight() * 16; // convert rem to pixel
                    // Set the default only if not set yet.
                    if (_this.defaultRowSpan === -1) {
                        _this.defaultRowSpan = _this.field.rowSpan;
                    }
                    // For line view Add the height of the line (form height).
                    if (_this.currentViewType.Key === 'OrderCenterFlatMatrixLine') {
                        var maxRow = Math.max.apply(Math, _this.uiControl.ControlFields.map(function (f) {
                            return f.Layout.Y + f.Layout.Height;
                        }));
                        // * 16 convert rem to pixel
                        var cardRowsHeight = _this.customizationService.calculateCardRowsHeight(maxRow) * 16;
                        // maxRow * 24 + 60 - 24 for each row in card + 60 for the padding of each card.
                        // const rowSpanToAdd = Math.floor(childrenCount * ((cardRowsHeight + 56) / formRowHeight) + rowsToAdd);
                        // + 16 is the 1rem margin outside card.
                        var rowSpanToAdd = (childrenCount * (cardRowsHeight + 16)) / formRowHeight + rowsToAdd;
                        _this.field.rowSpan = rowSpanToAdd;
                    }
                    else {
                        // const tableRowsHeight = this.customizationService.calculateTableRowsHeight(childrenCount) * 16;
                        // this.field.rowSpan = Math.ceil((tableRowsHeight + (rowsToAdd * 40)) / formRowHeight);
                        // * 16 convert rem to pixel
                        var rowsToAddHeight = _this.customizationService.calculateTableRowsHeight(rowsToAdd, false) * 16;
                        var tableRowsHeight = _this.customizationService.calculateTableRowsHeight(childrenCount) * 16;
                        _this.field.rowSpan = (rowsToAddHeight + tableRowsHeight) / formRowHeight;
                    }
                    var self_1 = _this;
                    self_1.sumOfMinColWidth = 0;
                    self_1.totalRowsWidth = 0;
                    _this.childData.UIControl.ControlFields.forEach(function (uiControlField) {
                        self_1.totalRowsWidth += uiControlField.ColumnWidth;
                        uiControlField.minFieldWidth = self_1.mmToPx(12); // NEED TO GET THIS PARAM FROM CUSTOMIZATION;
                        self_1.sumOfMinColWidth += 12;
                    });
                    setTimeout(function () {
                        self_1.setViewCover(_this.childData.Rows);
                    }, 0);
                }
            }, 150);
            this.changeDetectorRef.markForCheck();
        };
        PepperiInternalPageComponent.prototype.fillChildData = function (res) {
            // TODO: ??
            // this.userService.setOptionalValuesDic(res.Rows);
            this.childData = res;
            this.uiControl = res.UIControl;
            this.additionalApiNames = res.AdditionalApiNames;
            this.fillData();
        };
        PepperiInternalPageComponent.prototype.mmToPx = function (mm) {
            return Math.floor(mm * $$1('#my1_mm').height()); // JQuery returns sizes in PX
        };
        PepperiInternalPageComponent.prototype.isMatrixView = function () {
            return this.currentViewType && this.currentViewType.Key === 'OrderCenterMatrix';
        };
        PepperiInternalPageComponent.prototype.isFlatMatrixView = function () {
            return this.currentViewType && this.currentViewType.Key === 'OrderCenterFlatMatrixGrid';
        };
        PepperiInternalPageComponent.prototype.isTableView = function () {
            return this.isMatrixView() || this.isFlatMatrixView();
        };
        PepperiInternalPageComponent.prototype.getItemClass = function () {
            var res = '';
            if (!this.isTableView()) {
                res = 'line-view';
            }
            return res;
        };
        PepperiInternalPageComponent.prototype.changeChildrenViewType = function (viewTypeKey) {
            var e_2, _a;
            var self = this;
            this.rows = [];
            this.uiControl = null;
            try {
                for (var _b = __values(this.childViewTypes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var vt = _c.value;
                    if (vt.Key === viewTypeKey) {
                        this.currentViewType = vt;
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // check if view type changed
            // if (this.currentViewType.Key != viewTypeKey) {
            $$1('body').scrollTop(0);
            this.currentViewTypeTitle = this.currentViewType.Value;
            this.pepperiInternalPageService.changeChildrenViewType(this.currentViewType.Key, function (res) {
                if (res.Rows) {
                    self.fillChildData(res);
                }
            });
        };
        PepperiInternalPageComponent.prototype.setViewCover = function (rows) {
            if (!rows) {
                return;
            }
            var numofrows = rows.length;
            var matrixCont = $$1('#mainViewCont');
            var viewWidth = matrixCont.parents('mat-grid-tile').css('width');
            var viewHeight = matrixCont.parents('mat-grid-tile').css('height');
            this.viewWidth = viewWidth ? viewWidth.toString() : '100%';
            this.viewHeight = this.hasHeightLimit ? viewHeight.toString() : 'auto';
            // if the matrix located on the bottom / there is nothing under the matrix we dont need to check the height
            if (parseInt(viewWidth, 10) < this.mmToPx(this.sumOfMinColWidth) ||
                (this.hasHeightLimit && parseInt(viewHeight, 10) < numofrows * 41 + 72)) {
                this.coverChildTable = true;
            }
            else {
                this.coverChildTable = false;
            }
            this.changeDetectorRef.markForCheck();
        };
        PepperiInternalPageComponent.prototype.showMatrixDialog = function () {
            // this.childModal.config.ignoreBackdropClick = true;
            // TODO: Show modal
            // this.childModal.show();
        };
        // TODO:
        // onShown() {
        //     this.fillData();
        // }
        // TODO:
        // onHidden() {
        //     this.fillData();
        // }
        PepperiInternalPageComponent.prototype.ngOnInit = function () {
            var self = this;
            // let field = this.field as PepperiInternalPageField;
            this.pepperiInternalPageService.initDetails(this.field.objectId, this.field.parentId, this.field.searchCode, function (resViewTypes) {
                var e_3, _a;
                // my code DI-7134
                resViewTypes.Rows = resViewTypes.Rows.filter(function (item) { return item.Key !== 'OrderCenterView1'; });
                if (resViewTypes.Rows && resViewTypes.Rows.length > 0) {
                    if (!resViewTypes.Default) {
                        resViewTypes.Default = resViewTypes.Rows[0].Key;
                    }
                    self.childViewTypes = resViewTypes.Rows;
                    self.currentViewType = resViewTypes.Rows[0];
                    try {
                        // for (var i = 0; i < resViewTypes.Rows.length; i++) {
                        for (var _b = __values(resViewTypes.Rows), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var viewTypeRow = _c.value;
                            if (viewTypeRow.Value === resViewTypes.Default) {
                                self.currentViewType = viewTypeRow;
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    self.loadLastAdditionalApiName();
                    self.changeChildrenViewType(self.currentViewType.Key);
                }
            });
            // TODO:
            // this.resize = Observable.fromEvent(window, 'resize')
            //     .debounceTime(10)
            //     .subscribe((event) => {
            //         self.setViewCover(self.rows);
            //     });
        };
        PepperiInternalPageComponent.prototype.loadLastAdditionalApiName = function () {
            var daa = sessionStorage.getItem(PepperiInternalPageComponent.CURRENT_ADDITIONAL_API_NAME);
            if (daa && daa.length > 0) {
                var additionalApiName = JSON.parse(daa);
                this.currentAdditionalApiName = additionalApiName;
                this.pepperiInternalPageService.additionalApiName = additionalApiName.Key;
            }
        };
        PepperiInternalPageComponent.prototype.ngOnDestroy = function () {
            if (this.childChanged) {
                this.childChanged.unsubscribe();
            }
            if (this.childClicked) {
                this.childClicked.unsubscribe();
            }
            if (this.resize) {
                this.resize.unsubscribe();
            }
        };
        PepperiInternalPageComponent.prototype.changeAdditionalApiName = function (additionalApiName) {
            var _this = this;
            var self = this;
            this.pepperiInternalPageService.changeAdditionalApiName(additionalApiName ? additionalApiName.Key : '', function (res) {
                var e_4, _a;
                try {
                    // for (let index = 0; index < res.Rows.length; index++) {
                    for (var _b = __values(res.Rows), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var row = _c.value;
                        self.updateChanges(row);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                self.changeDetectorRef.markForCheck();
            });
            sessionStorage.setItem(PepperiInternalPageComponent.CURRENT_ADDITIONAL_API_NAME, JSON.stringify(additionalApiName));
            setTimeout(function () {
                _this.currentAdditionalApiName = additionalApiName;
            }, 0);
        };
        PepperiInternalPageComponent.prototype.setTotalsRow = function () {
            var e_5, _a;
            this.totalsRow = [];
            if (this.isMatrixView() || this.isFlatMatrixView()) {
                var totalCol = 0;
                if (this.customList.items) {
                    for (var col = 0; col < this.customList.items[0].Data.Fields.length; col++) {
                        var field = this.customList.items[0].Data.Fields[col];
                        if (field.FieldType === i11.FIELD_TYPE.NumberIntegerForMatrix ||
                            field.FieldType === i11.FIELD_TYPE.NumberIntegerQuantitySelector ||
                            field.FieldType === i11.FIELD_TYPE.NumberRealForMatrix ||
                            field.FieldType === i11.FIELD_TYPE.NumberRealQuantitySelector ||
                            field.FieldType === i11.FIELD_TYPE.CalculatedInt ||
                            field.FieldType === i11.FIELD_TYPE.NumberInteger ||
                            field.FieldType === i11.FIELD_TYPE.CalculatedReal ||
                            field.FieldType === i11.FIELD_TYPE.NumberReal) {
                            totalCol = 0;
                            try {
                                // for (var i = 0; i < this.customList.items.length; i++) {
                                for (var _b = (e_5 = void 0, __values(this.customList.items)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var listItem = _c.value;
                                    if (listItem.Data.Fields[col] && listItem.Data.Fields[col].Value) {
                                        var num = parseFloat(listItem.Data.Fields[col].Value);
                                        totalCol += isNaN(num) ? 0 : num;
                                    }
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                            this.totalsRow.push(totalCol);
                        }
                        else {
                            this.totalsRow.push('');
                        }
                    }
                }
            }
        };
        PepperiInternalPageComponent.prototype.updateChanges = function (elementToUpdate) {
            this.customList.updateListItem(elementToUpdate);
            // Update memory data
            for (var index = 0; index < this.childData.Rows.length; index++) {
                if (this.childData.Rows[index].UID === elementToUpdate.UID) {
                    this.childData.Rows[index] = elementToUpdate;
                }
            }
        };
        PepperiInternalPageComponent.prototype.setValueCallback = function (id, res) {
            if (res.Rows.length === 1) {
                this.updateChanges(res.Rows[0]);
            }
            this.setTotalsRow();
            this.checkForChanges = new Date();
            // DI-15985
            this.childChanged.emit(res);
            this.changeDetectorRef.markForCheck();
        };
        PepperiInternalPageComponent.prototype.onCustomizeObjectChanged = function (customizeObjectChangedData) {
            var handledEvent = false;
            var boundSetValueCallback = this.setValueCallback.bind(this); // .bind() to have this in the bound function.
            // For the new custom form, the plus and minus events transform in the PepperiObjectChangedData
            if (customizeObjectChangedData.ControlType === 'qs') {
                if (customizeObjectChangedData.Value === '+') {
                    handledEvent = true;
                    this.pepperiInternalPageService.childPlusClick(customizeObjectChangedData.Id, customizeObjectChangedData.ApiName, function (res) {
                        boundSetValueCallback(customizeObjectChangedData.Id, res);
                    });
                }
                else if (customizeObjectChangedData.Value === '-') {
                    handledEvent = true;
                    this.pepperiInternalPageService.childMinusClick(customizeObjectChangedData.Id, customizeObjectChangedData.ApiName, function (res) {
                        boundSetValueCallback(customizeObjectChangedData.Id, res);
                    });
                }
            }
            if (!handledEvent) {
                this.pepperiInternalPageService.childValueChanged(customizeObjectChangedData.Id, customizeObjectChangedData.ApiName, customizeObjectChangedData.Value, function (res) {
                    boundSetValueCallback(customizeObjectChangedData.Id, res);
                });
            }
        };
        PepperiInternalPageComponent.prototype.onCustomizeFieldClick = function (fieldClickEvent) {
            this.childClicked.emit(fieldClickEvent);
        };
        return PepperiInternalPageComponent;
    }());
    PepperiInternalPageComponent.CURRENT_ADDITIONAL_API_NAME = 'item_details_currentAdditionalApiName';
    PepperiInternalPageComponent.ɵfac = function PepperiInternalPageComponent_Factory(t) { return new (t || PepperiInternalPageComponent)(i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(PepperiInternalPageService), i0.ɵɵdirectiveInject(i11.CustomizationService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    PepperiInternalPageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiInternalPageComponent, selectors: [["pep-internal-page"]], viewQuery: function PepperiInternalPageComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$2, true, i0.ViewContainerRef);
                i0.ɵɵviewQuery(_c1$1, true, i0.ViewContainerRef);
                i0.ɵɵviewQuery(_c2$1, true);
                i0.ɵɵviewQuery(PepperiInternalListComponent, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.orgCont = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalCont = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.matrixTemplate = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customList = _t.first);
            }
        }, inputs: { field: "field", hasHeightLimit: "hasHeightLimit", layoutType: "layoutType" }, outputs: { childChanged: "childChanged", childClicked: "childClicked" }, features: [i0.ɵɵProvidersFeature([PepperiInternalPageService])], decls: 8, vars: 6, consts: [["matrixTemplate", ""], ["id", "mainViewCont", 3, "ngStyle"], ["id", "my1_mm", 2, "height", "1mm", "width", "1mm", "display", "none"], ["class", "table-cover", 4, "ngIf"], ["class", "pepperi-button strong sm table-cover-button", 3, "click", 4, "ngIf"], ["orgCont", ""], [3, "title"], [1, "block-with-text", "body-md"], [1, "buttons-container", "spacing-element-negative", "pull-right", "flip"], [4, "ngIf"], [3, "totalsRow", "notifyValueChanged", "notifyFieldClicked"], ["mat-button", "", "menu-blur", "", 1, "spacing-element", "pepperi-button", "icon-button", "sm", "weak", 3, "matMenuTriggerFor"], ["class", "pull-left flip", 4, "ngIf"], [3, "ngClass"], ["name", "system_info"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "ngClass", "click"], ["mat-menu-item", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pull-left", "flip"], ["name", "view_card_md"], ["viewsMenu", "matMenu"], [3, "ngSwitch"], ["name", "view_matrix", 4, "ngSwitchCase"], ["name", "view_table", 4, "ngSwitchCase"], ["name", "view_line", 4, "ngSwitchCase"], ["name", "view_matrix"], ["name", "view_table"], ["name", "view_line"], [1, "table-cover"], [1, "pepperi-button", "strong", "sm", "table-cover-button", 3, "click"]], template: function PepperiInternalPageComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PepperiInternalPageComponent_ng_template_0_Template, 7, 8, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(2, "div", 1);
                i0.ɵɵelement(3, "div", 2);
                i0.ɵɵtemplate(4, PepperiInternalPageComponent_div_4_Template, 1, 0, "div", 3);
                i0.ɵɵtemplate(5, PepperiInternalPageComponent_button_5_Template, 3, 3, "button", 4);
                i0.ɵɵelementContainer(6, null, 5);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(3, _c5$1, ctx.viewWidth, ctx.viewHeight));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.coverChildTable && ctx.uiControl != null);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.coverChildTable && ctx.uiControl != null);
            }
        }, directives: [i2.NgStyle, i2.NgIf, PepperiInternalListComponent, i9.MatMenuTrigger, i7.MatIcon, i2.NgClass, i1.PepperiIconComponent, i9._MatMenu, i9.MatMenuItem, i2.NgForOf, i2.NgSwitch, i2.NgSwitchCase], pipes: [i3$2.TranslatePipe], styles: [".matrix-title-container[_ngcontent-%COMP%]{align-items:flex-end;display:flex;height:var(--pep-form-field-height,2.5rem);padding:0}.matrix-title-container[_ngcontent-%COMP%]   .block-with-text[_ngcontent-%COMP%]{-ms-text-overflow:ellipsis;display:block;font-weight:var(--pep-font-weight-bold,600);max-height:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.matrix-title-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{align-self:center;display:flex}#mainViewCont[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin-bottom:1.5rem;width:100%}#mainViewCont[_ngcontent-%COMP%]   .table-cover[_ngcontent-%COMP%]{background-color:#fff;height:100%;opacity:.5;position:absolute;top:0;width:99%;z-index:101}#mainViewCont[_ngcontent-%COMP%]   .table-cover-button[_ngcontent-%COMP%]{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:102}#mainViewCont[_ngcontent-%COMP%]   .underCover[_ngcontent-%COMP%]{max-height:inherit;overflow:hidden}#mainViewCont[_ngcontent-%COMP%]    .table-header{top:unset!important}.modal-dialog[_ngcontent-%COMP%]{margin:.5rem 0;position:relative}.modal-dialog[_ngcontent-%COMP%]   .matrix-dialog-body[_ngcontent-%COMP%]{height:100%;overflow:auto;padding:.5rem}.modal-dialog[_ngcontent-%COMP%]   .matrix-dialog-body[_ngcontent-%COMP%]    .table-header{top:unset!important}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiInternalPageComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-internal-page',
                        templateUrl: './internal-page.component.html',
                        styleUrls: ['./internal-page.component.scss'],
                        providers: [PepperiInternalPageService],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i3.FormBuilder }, { type: PepperiInternalPageService }, { type: i11.CustomizationService }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { field: [{
                    type: i0.Input
                }], hasHeightLimit: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], childChanged: [{
                    type: i0.Output
                }], childClicked: [{
                    type: i0.Output
                }], orgCont: [{
                    type: i0.ViewChild,
                    args: ['orgCont', { read: i0.ViewContainerRef }]
                }], modalCont: [{
                    type: i0.ViewChild,
                    args: ['modalCont', { read: i0.ViewContainerRef }]
                }], matrixTemplate: [{
                    type: i0.ViewChild,
                    args: ['matrixTemplate']
                }], customList: [{
                    type: i0.ViewChild,
                    args: [PepperiInternalListComponent]
                }] });
    })();

    function PepperiFieldGeneratorComponent_pep_address_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-address", 19);
            i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_address_1_Template_pep_address_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onValueChanged($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("form", ctx_r0.form)("key", ctx_r0.field.key)("formattedValue", ctx_r0.field.formattedValue)("label", ctx_r0.field.label)("required", ctx_r0.field.required)("disabled", ctx_r0.field.disabled)("readonly", ctx_r0.field.readonly)("xAlignment", ctx_r0.field.xAlignment)("rowSpan", ctx_r0.field.rowSpan)("groupFields", ctx_r0.field.groupFields)("layoutType", ctx_r0.layoutType);
        }
    }
    function PepperiFieldGeneratorComponent_pep_attachment_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-attachment", 20);
            i0.ɵɵlistener("elementClicked", function PepperiFieldGeneratorComponent_pep_attachment_2_Template_pep_attachment_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onClick($event); })("valueChanged", function PepperiFieldGeneratorComponent_pep_attachment_2_Template_pep_attachment_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.onValueChanged($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("form", ctx_r1.form)("key", ctx_r1.field.key)("src", ctx_r1.field.value)("label", ctx_r1.field.label)("required", ctx_r1.field.required)("disabled", ctx_r1.field.disabled)("readonly", ctx_r1.field.readonly)("xAlignment", ctx_r1.field.xAlignment)("rowSpan", ctx_r1.field.rowSpan)("isActive", ctx_r1.isActive)("showTitle", ctx_r1.showTitle)("layoutType", ctx_r1.layoutType);
        }
    }
    function PepperiFieldGeneratorComponent_pep_checkbox_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-checkbox", 21);
            i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_checkbox_3_Template_pep_checkbox_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r24_1); var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onValueChanged($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("form", ctx_r2.form)("key", ctx_r2.field.key)("value", ctx_r2.field.value)("label", ctx_r2.field.label)("type", ctx_r2.field.type)("required", ctx_r2.field.required)("disabled", ctx_r2.field.disabled)("readonly", ctx_r2.field.readonly)("xAlignment", ctx_r2.field.xAlignment)("rowSpan", ctx_r2.field.rowSpan)("additionalValue", ctx_r2.field.additionalValue)("showTitle", ctx_r2.showTitle)("layoutType", ctx_r2.layoutType)("isActive", ctx_r2.isActive);
        }
    }
    function PepperiFieldGeneratorComponent_pep_date_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-date", 22);
            i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_date_4_Template_pep_date_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r26_1); var ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.onValueChanged($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("form", ctx_r3.form)("key", ctx_r3.field.key)("value", ctx_r3.field.value)("formattedValue", ctx_r3.field.formattedValue)("label", ctx_r3.field.label)("type", ctx_r3.field.type)("required", ctx_r3.field.required)("disabled", ctx_r3.field.disabled)("readonly", ctx_r3.field.readonly)("textColor", ctx_r3.field.textColor)("xAlignment", ctx_r3.field.xAlignment)("rowSpan", ctx_r3.field.rowSpan)("minValue", ctx_r3.field.minValue)("maxValue", ctx_r3.field.maxValue)("showTitle", ctx_r3.showTitle)("layoutType", ctx_r3.layoutType)("isActive", ctx_r3.isActive);
        }
    }
    function PepperiFieldGeneratorComponent_pep_images_filmstrip_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-images-filmstrip", 23);
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵproperty("objectId", ctx_r4.objectId)("form", ctx_r4.form)("key", ctx_r4.field.key)("label", ctx_r4.field.label)("showTitle", ctx_r4.showTitle)("value", ctx_r4.field.value)("layoutType", ctx_r4.layoutType);
        }
    }
    function PepperiFieldGeneratorComponent_pep_image_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r28_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-image", 24);
            i0.ɵɵlistener("elementClicked", function PepperiFieldGeneratorComponent_pep_image_6_Template_pep_image_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r28_1); var ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.onClick($event); })("valueChanged", function PepperiFieldGeneratorComponent_pep_image_6_Template_pep_image_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r28_1); var ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.onValueChanged($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵproperty("objectId", ctx_r5.objectId)("form", ctx_r5.form)("key", ctx_r5.field.key)("src", ctx_r5.field.formattedValue)("srcLarge", ctx_r5.field.value)("options", ctx_r5.field.options)("label", ctx_r5.field.label)("type", ctx_r5.field.type)("required", ctx_r5.field.required)("disabled", ctx_r5.field.disabled)("readonly", ctx_r5.field.readonly)("xAlignment", ctx_r5.field.xAlignment)("rowSpan", ctx_r5.field.rowSpan)("indicatorsField", ctx_r5.field.indicatorsField)("menuField", ctx_r5.field.menuField)("hasCampaignField", ctx_r5.field.hasCampaignField)("sizeLimitMB", ctx_r5.field.sizeLimitMB)("isActive", ctx_r5.isActive)("layoutType", ctx_r5.layoutType);
        }
    }
    function PepperiFieldGeneratorComponent_pep_internal_button_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r31_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-internal-button", 25);
            i0.ɵɵlistener("elementClicked", function PepperiFieldGeneratorComponent_pep_internal_button_7_Template_pep_internal_button_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r31_1); var ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.onClick($event); })("valueChanged", function PepperiFieldGeneratorComponent_pep_internal_button_7_Template_pep_internal_button_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r31_1); var ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.onValueChanged($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵproperty("form", ctx_r6.form)("key", ctx_r6.field.key)("value", ctx_r6.field.value)("formattedValue", ctx_r6.field.formattedValue)("label", ctx_r6.field.label)("referenceObjectInternalType", ctx_r6.field.referenceObjectInternalType)("type", ctx_r6.field.type)("disabled", ctx_r6.field.disabled)("readonly", ctx_r6.field.readonly)("xAlignment", ctx_r6.field.xAlignment)("layoutType", ctx_r6.layoutType);
        }
    }
    function PepperiFieldGeneratorComponent_pep_menu_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r34_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-menu", 26);
            i0.ɵɵlistener("elementClicked", function PepperiFieldGeneratorComponent_pep_menu_8_Template_pep_menu_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r34_1); var ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.onClick($event); })("notifyMenuItemClicked", function PepperiFieldGeneratorComponent_pep_menu_8_Template_pep_menu_notifyMenuItemClicked_0_listener($event) { i0.ɵɵrestoreView(_r34_1); var ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.onMenuItemClicked($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵproperty("key", ctx_r7.field.key)("label", ctx_r7.field.label)("disabled", ctx_r7.field.disabled)("xAlignment", ctx_r7.field.xAlignment)("options", ctx_r7.field.options)("layoutType", ctx_r7.layoutType);
        }
    }
    function PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r37_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-quantity-selector", 27);
            i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template_pep_quantity_selector_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r37_1); var ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.onValueChanged($event); })("formValidationChanged", function PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template_pep_quantity_selector_formValidationChanged_0_listener($event) { i0.ɵɵrestoreView(_r37_1); var ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.onFormValidationChanged($event); })("elementClicked", function PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template_pep_quantity_selector_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r37_1); var ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.onClick($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵproperty("form", ctx_r8.form)("key", ctx_r8.field.key)("value", ctx_r8.field.value)("formattedValue", ctx_r8.field.formattedValue)("label", ctx_r8.field.label)("type", ctx_r8.field.type)("required", ctx_r8.field.required)("disabled", ctx_r8.field.disabled)("readonly", ctx_r8.field.readonly)("textColor", ctx_r8.field.textColor)("xAlignment", ctx_r8.field.xAlignment)("rowSpan", ctx_r8.field.rowSpan)("lastFocusField", ctx_r8.field.lastFocusField)("alowDecimal", ctx_r8.field.alowDecimal)("additionalValue", ctx_r8.field.additionalValue)("notificationInfo", ctx_r8.field.notificationInfo)("isActive", ctx_r8.isActive)("layoutType", ctx_r8.layoutType)("showTitle", ctx_r8.showTitle);
        }
    }
    function PepperiFieldGeneratorComponent_pep_rich_html_textarea_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r41_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-rich-html-textarea", 28);
            i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_rich_html_textarea_10_Template_pep_rich_html_textarea_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r41_1); var ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.onValueChanged($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵproperty("form", ctx_r9.form)("key", ctx_r9.field.key)("value", ctx_r9.field.value)("label", ctx_r9.field.label)("required", ctx_r9.field.required)("disabled", ctx_r9.field.disabled)("readonly", ctx_r9.field.readonly)("maxFieldCharacters", ctx_r9.field.maxFieldCharacters)("xAlignment", ctx_r9.field.xAlignment)("rowSpan", ctx_r9.field.rowSpan)("showTitle", ctx_r9.showTitle)("layoutType", ctx_r9.layoutType)("isActive", ctx_r9.isActive);
        }
    }
    function PepperiFieldGeneratorComponent_pep_select_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r43_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-select", 29);
            i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_select_11_Template_pep_select_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r43_1); var ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.onValueChanged($event); })("formValidationChanged", function PepperiFieldGeneratorComponent_pep_select_11_Template_pep_select_formValidationChanged_0_listener($event) { i0.ɵɵrestoreView(_r43_1); var ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.onFormValidationChanged($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext();
            i0.ɵɵproperty("form", ctx_r10.form)("key", ctx_r10.field.key)("value", ctx_r10.field.value)("formattedValue", ctx_r10.field.formattedValue)("label", ctx_r10.field.label)("type", ctx_r10.field.type)("required", ctx_r10.field.required)("disabled", ctx_r10.field.disabled)("readonly", ctx_r10.field.readonly)("xAlignment", ctx_r10.field.xAlignment)("rowSpan", ctx_r10.field.rowSpan)("options", ctx_r10.field.options)("showTitle", ctx_r10.showTitle)("layoutType", ctx_r10.layoutType)("isActive", ctx_r10.isActive);
        }
    }
    function PepperiFieldGeneratorComponent_pep_separator_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-separator", 30);
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext();
            i0.ɵɵproperty("form", ctx_r11.form)("key", ctx_r11.field.key)("label", ctx_r11.field.label)("xAlignment", ctx_r11.field.xAlignment)("layoutType", ctx_r11.layoutType);
        }
    }
    function PepperiFieldGeneratorComponent_pep_signature_13_Template(rf, ctx) {
        if (rf & 1) {
            var _r46_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-signature", 31);
            i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_signature_13_Template_pep_signature_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r46_1); var ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.onValueChanged($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r12 = i0.ɵɵnextContext();
            i0.ɵɵproperty("form", ctx_r12.form)("key", ctx_r12.field.key)("src", ctx_r12.field.value)("label", ctx_r12.field.label)("required", ctx_r12.field.required)("disabled", ctx_r12.field.disabled)("readonly", ctx_r12.field.readonly)("xAlignment", ctx_r12.field.xAlignment)("rowSpan", ctx_r12.field.rowSpan)("isActive", ctx_r12.isActive)("layoutType", ctx_r12.layoutType);
        }
    }
    function PepperiFieldGeneratorComponent_pep_textarea_14_Template(rf, ctx) {
        if (rf & 1) {
            var _r48_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-textarea", 32);
            i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_textarea_14_Template_pep_textarea_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r48_1); var ctx_r47 = i0.ɵɵnextContext(); return ctx_r47.onValueChanged($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r13 = i0.ɵɵnextContext();
            i0.ɵɵproperty("form", ctx_r13.form)("key", ctx_r13.field.key)("value", ctx_r13.field.value)("label", ctx_r13.field.label)("required", ctx_r13.field.required)("disabled", ctx_r13.field.disabled)("readonly", ctx_r13.field.readonly)("maxFieldCharacters", ctx_r13.field.maxFieldCharacters)("textColor", ctx_r13.field.textColor)("xAlignment", ctx_r13.field.xAlignment)("rowSpan", ctx_r13.field.rowSpan)("lastFocusField", ctx_r13.field.lastFocusField)("showTitle", ctx_r13.showTitle)("layoutType", ctx_r13.layoutType)("isActive", ctx_r13.isActive);
        }
    }
    function PepperiFieldGeneratorComponent_pep_textbox_15_Template(rf, ctx) {
        if (rf & 1) {
            var _r50_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-textbox", 33);
            i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_textbox_15_Template_pep_textbox_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r50_1); var ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.onValueChanged($event); })("formValidationChanged", function PepperiFieldGeneratorComponent_pep_textbox_15_Template_pep_textbox_formValidationChanged_0_listener($event) { i0.ɵɵrestoreView(_r50_1); var ctx_r51 = i0.ɵɵnextContext(); return ctx_r51.onFormValidationChanged($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r14 = i0.ɵɵnextContext();
            i0.ɵɵproperty("form", ctx_r14.form)("key", ctx_r14.field.key)("value", ctx_r14.field.value)("formattedValue", ctx_r14.field.formattedValue)("label", ctx_r14.field.label)("placeholder", ctx_r14.field.placeholder)("type", ctx_r14.field.type)("required", ctx_r14.field.required)("disabled", ctx_r14.field.disabled)("readonly", ctx_r14.field.readonly)("maxFieldCharacters", ctx_r14.field.maxFieldCharacters)("textColor", ctx_r14.field.textColor)("xAlignment", ctx_r14.field.xAlignment)("rowSpan", ctx_r14.field.rowSpan)("lastFocusField", ctx_r14.field.lastFocusField)("showTitle", ctx_r14.showTitle)("layoutType", ctx_r14.layoutType)("isActive", ctx_r14.isActive);
        }
    }
    function PepperiFieldGeneratorComponent_pep_indicators_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-indicators", 34);
        }
        if (rf & 2) {
            var ctx_r15 = i0.ɵɵnextContext();
            i0.ɵɵproperty("key", ctx_r15.field.key)("value", ctx_r15.field.value)("layoutType", ctx_r15.layoutType);
        }
    }
    function PepperiFieldGeneratorComponent_pep_internal_page_17_Template(rf, ctx) {
        if (rf & 1) {
            var _r53_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-internal-page", 35);
            i0.ɵɵlistener("childClicked", function PepperiFieldGeneratorComponent_pep_internal_page_17_Template_pep_internal_page_childClicked_0_listener($event) { i0.ɵɵrestoreView(_r53_1); var ctx_r52 = i0.ɵɵnextContext(); return ctx_r52.onChildClick($event); })("childChanged", function PepperiFieldGeneratorComponent_pep_internal_page_17_Template_pep_internal_page_childChanged_0_listener($event) { i0.ɵɵrestoreView(_r53_1); var ctx_r54 = i0.ɵɵnextContext(); return ctx_r54.onChildChanged($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext();
            i0.ɵɵproperty("hasHeightLimit", ctx_r16.hasHeightLimit)("field", ctx_r16.field)("layoutType", ctx_r16.layoutType);
        }
    }
    function PepperiFieldGeneratorComponent_ng_container_18_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var PepperiFieldGeneratorComponent = /** @class */ (function () {
        function PepperiFieldGeneratorComponent() {
            this.hasHeightLimit = false;
            this.isActive = false;
            this.objectId = null;
            this.layoutType = i11.LAYOUT_TYPE.PepperiForm;
            this.showTitle = true;
            this.checkForChanges = null;
            this.valueChanged = new i0.EventEmitter();
            this.childChanged = new i0.EventEmitter();
            this.formValidationChanged = new i0.EventEmitter();
            this.elementClicked = new i0.EventEmitter();
            this.notifyMenuItemClicked = new i0.EventEmitter();
            this.notifyChildClicked = new i0.EventEmitter();
        }
        Object.defineProperty(PepperiFieldGeneratorComponent.prototype, "isValid", {
            get: function () {
                if (this.field.readonly || this.field.disabled) {
                    return true;
                }
                else {
                    var formControl = this.form && this.form.get(this.field.key);
                    if (formControl) {
                        return formControl.valid;
                    }
                    else {
                        return false;
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PepperiFieldGeneratorComponent.prototype, "isTouched", {
            get: function () {
                var formControl = this.form && this.form.get(this.field.key);
                return formControl ? formControl.touched : false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PepperiFieldGeneratorComponent.prototype, "isDirty", {
            get: function () {
                var formControl = this.form && this.form.get(this.field.key);
                return formControl ? formControl.dirty : false;
            },
            enumerable: false,
            configurable: true
        });
        PepperiFieldGeneratorComponent.prototype.ngOnDestroy = function () {
            if (this.valueChanged) {
                this.valueChanged.unsubscribe();
            }
            if (this.formValidationChanged) {
                this.formValidationChanged.unsubscribe();
            }
            if (this.childChanged) {
                this.childChanged.unsubscribe();
            }
            if (this.elementClicked) {
                this.elementClicked.unsubscribe();
            }
            if (this.notifyMenuItemClicked) {
                this.notifyMenuItemClicked.unsubscribe();
            }
            if (this.notifyChildClicked) {
                this.notifyChildClicked.unsubscribe();
            }
        };
        PepperiFieldGeneratorComponent.prototype.onValueChanged = function (valueChanged) {
            this.valueChanged.emit(valueChanged);
        };
        PepperiFieldGeneratorComponent.prototype.onChildChanged = function (childChanged) {
            this.childChanged.emit(childChanged);
        };
        PepperiFieldGeneratorComponent.prototype.onFormValidationChanged = function (formValidationChanged) {
            this.formValidationChanged.emit(formValidationChanged);
        };
        PepperiFieldGeneratorComponent.prototype.onClick = function (fieldClicked) {
            this.elementClicked.emit(fieldClicked);
        };
        PepperiFieldGeneratorComponent.prototype.onMenuItemClicked = function (fieldToEdit) {
            this.notifyMenuItemClicked.emit(fieldToEdit);
        };
        PepperiFieldGeneratorComponent.prototype.onChildClick = function (childClicked) {
            this.notifyChildClicked.emit(childClicked);
        };
        PepperiFieldGeneratorComponent.prototype.ngOnChanges = function (changes) {
            // debugger;
            // TODO: Remove it only for testing.
            // this.field.disabled = this.field.readonly = false;
        };
        return PepperiFieldGeneratorComponent;
    }());
    PepperiFieldGeneratorComponent.ɵfac = function PepperiFieldGeneratorComponent_Factory(t) { return new (t || PepperiFieldGeneratorComponent)(); };
    PepperiFieldGeneratorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiFieldGeneratorComponent, selectors: [["pep-field-generator"]], inputs: { field: "field", hasHeightLimit: "hasHeightLimit", isActive: "isActive", objectId: "objectId", form: "form", layoutType: "layoutType", showTitle: "showTitle", checkForChanges: "checkForChanges" }, outputs: { valueChanged: "valueChanged", childChanged: "childChanged", formValidationChanged: "formValidationChanged", elementClicked: "elementClicked", notifyMenuItemClicked: "notifyMenuItemClicked", notifyChildClicked: "notifyChildClicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 19, vars: 20, consts: [[3, "ngSwitch", "formGroup"], [3, "form", "key", "formattedValue", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "groupFields", "layoutType", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "isActive", "showTitle", "layoutType", "elementClicked", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "additionalValue", "showTitle", "layoutType", "isActive", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "minValue", "maxValue", "showTitle", "layoutType", "isActive", "valueChanged", 4, "ngSwitchCase"], [3, "objectId", "form", "key", "label", "showTitle", "value", "layoutType", 4, "ngSwitchCase"], [3, "objectId", "form", "key", "src", "srcLarge", "options", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "indicatorsField", "menuField", "hasCampaignField", "sizeLimitMB", "isActive", "layoutType", "elementClicked", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "referenceObjectInternalType", "type", "disabled", "readonly", "xAlignment", "layoutType", "elementClicked", "valueChanged", 4, "ngSwitchCase"], [3, "key", "label", "disabled", "xAlignment", "options", "layoutType", "elementClicked", "notifyMenuItemClicked", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "lastFocusField", "alowDecimal", "additionalValue", "notificationInfo", "isActive", "layoutType", "showTitle", "valueChanged", "formValidationChanged", "elementClicked", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "xAlignment", "rowSpan", "showTitle", "layoutType", "isActive", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "options", "showTitle", "layoutType", "isActive", "valueChanged", "formValidationChanged", 4, "ngSwitchCase"], [3, "form", "key", "label", "xAlignment", "layoutType", 4, "ngSwitchCase"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "isActive", "layoutType", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "lastFocusField", "showTitle", "layoutType", "isActive", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "placeholder", "type", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "lastFocusField", "showTitle", "layoutType", "isActive", "valueChanged", "formValidationChanged", 4, "ngSwitchCase"], [3, "key", "value", "layoutType", 4, "ngSwitchCase"], [3, "hasHeightLimit", "field", "layoutType", "childClicked", "childChanged", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "form", "key", "formattedValue", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "groupFields", "layoutType", "valueChanged"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "isActive", "showTitle", "layoutType", "elementClicked", "valueChanged"], [3, "form", "key", "value", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "additionalValue", "showTitle", "layoutType", "isActive", "valueChanged"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "minValue", "maxValue", "showTitle", "layoutType", "isActive", "valueChanged"], [3, "objectId", "form", "key", "label", "showTitle", "value", "layoutType"], [3, "objectId", "form", "key", "src", "srcLarge", "options", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "indicatorsField", "menuField", "hasCampaignField", "sizeLimitMB", "isActive", "layoutType", "elementClicked", "valueChanged"], [3, "form", "key", "value", "formattedValue", "label", "referenceObjectInternalType", "type", "disabled", "readonly", "xAlignment", "layoutType", "elementClicked", "valueChanged"], [3, "key", "label", "disabled", "xAlignment", "options", "layoutType", "elementClicked", "notifyMenuItemClicked"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "lastFocusField", "alowDecimal", "additionalValue", "notificationInfo", "isActive", "layoutType", "showTitle", "valueChanged", "formValidationChanged", "elementClicked"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "xAlignment", "rowSpan", "showTitle", "layoutType", "isActive", "valueChanged"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "options", "showTitle", "layoutType", "isActive", "valueChanged", "formValidationChanged"], [3, "form", "key", "label", "xAlignment", "layoutType"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "isActive", "layoutType", "valueChanged"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "lastFocusField", "showTitle", "layoutType", "isActive", "valueChanged"], [3, "form", "key", "value", "formattedValue", "label", "placeholder", "type", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "lastFocusField", "showTitle", "layoutType", "isActive", "valueChanged", "formValidationChanged"], [3, "key", "value", "layoutType"], [3, "hasHeightLimit", "field", "layoutType", "childClicked", "childChanged"]], template: function PepperiFieldGeneratorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, PepperiFieldGeneratorComponent_pep_address_1_Template, 1, 11, "pep-address", 1);
                i0.ɵɵtemplate(2, PepperiFieldGeneratorComponent_pep_attachment_2_Template, 1, 12, "pep-attachment", 2);
                i0.ɵɵtemplate(3, PepperiFieldGeneratorComponent_pep_checkbox_3_Template, 1, 14, "pep-checkbox", 3);
                i0.ɵɵtemplate(4, PepperiFieldGeneratorComponent_pep_date_4_Template, 1, 17, "pep-date", 4);
                i0.ɵɵtemplate(5, PepperiFieldGeneratorComponent_pep_images_filmstrip_5_Template, 1, 7, "pep-images-filmstrip", 5);
                i0.ɵɵtemplate(6, PepperiFieldGeneratorComponent_pep_image_6_Template, 1, 19, "pep-image", 6);
                i0.ɵɵtemplate(7, PepperiFieldGeneratorComponent_pep_internal_button_7_Template, 1, 11, "pep-internal-button", 7);
                i0.ɵɵtemplate(8, PepperiFieldGeneratorComponent_pep_menu_8_Template, 1, 6, "pep-menu", 8);
                i0.ɵɵtemplate(9, PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template, 1, 19, "pep-quantity-selector", 9);
                i0.ɵɵtemplate(10, PepperiFieldGeneratorComponent_pep_rich_html_textarea_10_Template, 1, 13, "pep-rich-html-textarea", 10);
                i0.ɵɵtemplate(11, PepperiFieldGeneratorComponent_pep_select_11_Template, 1, 15, "pep-select", 11);
                i0.ɵɵtemplate(12, PepperiFieldGeneratorComponent_pep_separator_12_Template, 1, 5, "pep-separator", 12);
                i0.ɵɵtemplate(13, PepperiFieldGeneratorComponent_pep_signature_13_Template, 1, 11, "pep-signature", 13);
                i0.ɵɵtemplate(14, PepperiFieldGeneratorComponent_pep_textarea_14_Template, 1, 15, "pep-textarea", 14);
                i0.ɵɵtemplate(15, PepperiFieldGeneratorComponent_pep_textbox_15_Template, 1, 18, "pep-textbox", 15);
                i0.ɵɵtemplate(16, PepperiFieldGeneratorComponent_pep_indicators_16_Template, 1, 3, "pep-indicators", 16);
                i0.ɵɵtemplate(17, PepperiFieldGeneratorComponent_pep_internal_page_17_Template, 1, 3, "pep-internal-page", 17);
                i0.ɵɵtemplate(18, PepperiFieldGeneratorComponent_ng_container_18_Template, 1, 0, "ng-container", 18);
                i0.ɵɵelementContainerEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngSwitch", ctx.field.controlType)("formGroup", ctx.form);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "address");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "attachment");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "checkbox");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "date");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "images");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "image");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "button");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "menu");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "qs");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "richhtmltextarea");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "select");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "separator");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "signature");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "textarea");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "textbox");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "indicators");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "internalPage");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "placeholder");
            }
        }, directives: [i2.NgSwitch, i3.NgControlStatusGroup, i3.FormGroupDirective, i2.NgSwitchCase, i3$1.PepperiAddressComponent, i4.PepperiAttachmentComponent, i5$1.PepperiCheckboxComponent, i6$1.PepperiDateComponent, i7$1.PepperiImagesFilmstripComponent, i8.PepperiImageComponent, i9$1.PepperiInternalButtonComponent, i10$1.PepperiMenuComponent, i11$1.PepperiQuantitySelectorComponent, i12.PepperiRichHtmlTextareaComponent, i13.PepperiSelectComponent, i14.PepperiSeparatorComponent, i15.PepperiSignatureComponent, i16.PepperiTextareaComponent, i17.PepperiTextboxComponent, PepperiIndicatorsComponent, PepperiInternalPageComponent], styles: ["[_nghost-%COMP%]{height:100%;width:100%}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiFieldGeneratorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-field-generator',
                        templateUrl: './field-generator.component.html',
                        styleUrls: ['./field-generator.component.scss'],
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return []; }, { field: [{
                    type: i0.Input
                }], hasHeightLimit: [{
                    type: i0.Input
                }], isActive: [{
                    type: i0.Input
                }], objectId: [{
                    type: i0.Input
                }], form: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], showTitle: [{
                    type: i0.Input
                }], checkForChanges: [{
                    type: i0.Input
                }], valueChanged: [{
                    type: i0.Output
                }], childChanged: [{
                    type: i0.Output
                }], formValidationChanged: [{
                    type: i0.Output
                }], elementClicked: [{
                    type: i0.Output
                }], notifyMenuItemClicked: [{
                    type: i0.Output
                }], notifyChildClicked: [{
                    type: i0.Output
                }] });
    })();

    function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-field-generator", 10);
            i0.ɵɵlistener("valueChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r11_1); var ctx_r10 = i0.ɵɵnextContext(4); return ctx_r10.onValueChanged($event); })("notifyChildClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_notifyChildClicked_0_listener($event) { i0.ɵɵrestoreView(_r11_1); var ctx_r12 = i0.ɵɵnextContext(4); return ctx_r12.onChildClicked($event); })("childChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_childChanged_0_listener($event) { i0.ɵɵrestoreView(_r11_1); var ctx_r13 = i0.ɵɵnextContext(4); return ctx_r13.onChildChanged($event); })("elementClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r11_1); var ctx_r14 = i0.ɵɵnextContext(4); return ctx_r14.onClick($event); })("notifyMenuItemClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_notifyMenuItemClicked_0_listener($event) { i0.ɵɵrestoreView(_r11_1); var ctx_r15 = i0.ɵɵnextContext(4); return ctx_r15.onMenuItemClicked($event); })("formValidationChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_formValidationChanged_0_listener($event) { i0.ɵɵrestoreView(_r11_1); var ctx_r16 = i0.ɵɵnextContext(4); return ctx_r16.onFormValidationChanged($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r8 = i0.ɵɵnextContext().$implicit;
            var ctx_r9 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("form", ctx_r9.form)("layoutType", ctx_r9.layoutType)("checkForChanges", ctx_r9.checkForChanges)("objectId", ctx_r9.pepperiObjectInput.Data.UID)("hasHeightLimit", !ctx_r9.matrixIsLast)("field", field_r8)("showTitle", ctx_r9.showTitle);
        }
    }
    function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-grid-tile", 8);
            i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template, 1, 7, "pep-field-generator", 9);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r8 = ctx.$implicit;
            i0.ɵɵproperty("rowspan", field_r8.rowSpan)("colspan", field_r8.colSpan);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", field_r8.controlType != "placeholder");
        }
    }
    function PepperiFormComponent_fieldset_0_mat_grid_list_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-grid-list", 6);
            i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_Template, 2, 3, "mat-grid-tile", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("cols", ctx_r3.columns)("rowHeight", ctx_r3.rowHeight + "rem")("gutterSize", ctx_r3.formGutterSize);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r3.fields);
        }
    }
    function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-field-generator", 15);
            i0.ɵɵlistener("valueChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r21 = i0.ɵɵnextContext(4); return ctx_r21.onValueChanged($event); })("notifyChildClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_notifyChildClicked_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r23 = i0.ɵɵnextContext(4); return ctx_r23.onChildClicked($event); })("childChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_childChanged_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r24 = i0.ɵɵnextContext(4); return ctx_r24.onChildChanged($event); })("elementClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r25 = i0.ɵɵnextContext(4); return ctx_r25.onClick($event); })("notifyMenuItemClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_notifyMenuItemClicked_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r26 = i0.ɵɵnextContext(4); return ctx_r26.onMenuItemClicked($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r19 = i0.ɵɵnextContext().$implicit;
            var ctx_r20 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("form", ctx_r20.form)("layoutType", ctx_r20.layoutType)("isActive", ctx_r20.isActive)("checkForChanges", ctx_r20.checkForChanges)("objectId", ctx_r20.pepperiObjectInput.Data.UID)("hasHeightLimit", !ctx_r20.matrixIsLast)("field", field_r19)("showTitle", ctx_r20.showTitle);
        }
    }
    var _c0$3 = function (a0) { return { overflow: a0 }; };
    function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-grid-tile", 13);
            i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template, 1, 8, "pep-field-generator", 14);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r19 = ctx.$implicit;
            i0.ɵɵproperty("rowspan", field_r19.rowSpan)("colspan", field_r19.colSpan)("ngStyle", i0.ɵɵpureFunction1(4, _c0$3, field_r19.type == "qs" ? "unset" : "hidden"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", field_r19.controlType != "placeholder");
        }
    }
    var _c1$2 = function (a0) { return { "lock-events": a0 }; };
    function PepperiFormComponent_fieldset_0_mat_grid_list_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-grid-list", 11);
            i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_Template, 2, 6, "mat-grid-tile", 12);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("cols", ctx_r4.columns)("rowHeight", ctx_r4.rowHeight + "rem")("gutterSize", ctx_r4.cardGutterSize)("ngClass", i0.ɵɵpureFunction1(5, _c1$2, ctx_r4.lockEvents));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r4.fields);
        }
    }
    function PepperiFormComponent_fieldset_0_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 19);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(3);
            var _r1 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r1);
        }
    }
    function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r39_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-field-generator", 23);
            i0.ɵɵlistener("valueChanged", function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template_pep_field_generator_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r39_1); var ctx_r38 = i0.ɵɵnextContext(5); return ctx_r38.onValueChanged($event); })("elementClicked", function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template_pep_field_generator_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r39_1); var ctx_r40 = i0.ɵɵnextContext(5); return ctx_r40.onClick($event); })("notifyMenuItemClicked", function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template_pep_field_generator_notifyMenuItemClicked_0_listener($event) { i0.ɵɵrestoreView(_r39_1); var ctx_r41 = i0.ɵɵnextContext(5); return ctx_r41.onMenuItemClicked($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r35 = i0.ɵɵnextContext().$implicit;
            var ctx_r37 = i0.ɵɵnextContext(4);
            i0.ɵɵproperty("checkForChanges", ctx_r37.checkForChanges)("objectId", ctx_r37.pepperiObjectInput.Data.UID)("field", field_r35)("form", ctx_r37.form)("layoutType", ctx_r37.layoutType)("showTitle", false)("isActive", ctx_r37.isActive);
        }
    }
    var _c2$2 = function (a0) { return [a0]; };
    var _c3$2 = function (a0) { return { width: a0 }; };
    function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 21);
            i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template, 1, 7, "pep-field-generator", 22);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r35 = ctx.$implicit;
            var j_r36 = ctx.index;
            var ctx_r34 = i0.ɵɵnextContext(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c2$2, "text-align-" + field_r35.xAlignment))("ngStyle", i0.ɵɵpureFunction1(5, _c3$2, ctx_r34.uiControlHeader == null ? null : ctx_r34.uiControlHeader.ControlFields[j_r36] == null ? null : ctx_r34.uiControlHeader.ControlFields[j_r36].calcColumnWidthString));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", field_r35.controlType != "placeholder");
        }
    }
    function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_Template, 2, 7, "div", 20);
        }
        if (rf & 2) {
            var ctx_r32 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngForOf", ctx_r32.fields);
        }
    }
    function PepperiFormComponent_fieldset_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 16);
            i0.ɵɵtemplate(2, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_Template, 1, 1, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r29 = i0.ɵɵreference(3);
            var _r31 = i0.ɵɵreference(5);
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.isReport)("ngIfThen", _r29)("ngIfElse", _r31);
        }
    }
    function PepperiFormComponent_fieldset_0_ng_container_4_div_1_pep_field_generator_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r48_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-field-generator", 27);
            i0.ɵɵlistener("valueChanged", function PepperiFormComponent_fieldset_0_ng_container_4_div_1_pep_field_generator_1_Template_pep_field_generator_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r48_1); var ctx_r47 = i0.ɵɵnextContext(4); return ctx_r47.onValueChanged($event); })("elementClicked", function PepperiFormComponent_fieldset_0_ng_container_4_div_1_pep_field_generator_1_Template_pep_field_generator_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r48_1); var ctx_r49 = i0.ɵɵnextContext(4); return ctx_r49.onClick($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r44 = i0.ɵɵnextContext().$implicit;
            var ctx_r46 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("checkForChanges", ctx_r46.checkForChanges)("objectId", ctx_r46.pepperiObjectInput.Data.UID)("field", field_r44)("form", ctx_r46.form)("layoutType", ctx_r46.layoutType)("showTitle", false)("isActive", ctx_r46.isActive);
        }
    }
    function PepperiFormComponent_fieldset_0_ng_container_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 25);
            i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_ng_container_4_div_1_pep_field_generator_1_Template, 1, 7, "pep-field-generator", 26);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r44 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", field_r44.controlType != "placeholder");
        }
    }
    function PepperiFormComponent_fieldset_0_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_ng_container_4_div_1_Template, 2, 1, "div", 24);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r6.fields);
        }
    }
    var _c4$2 = function (a0) { return { "background-color": a0 }; };
    var _c5$2 = function (a0, a1) { return { "material-form": a0, cardView: a1 }; };
    function PepperiFormComponent_fieldset_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "fieldset", 2);
            i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_1_Template, 2, 4, "mat-grid-list", 3);
            i0.ɵɵtemplate(2, PepperiFormComponent_fieldset_0_mat_grid_list_2_Template, 2, 7, "mat-grid-list", 4);
            i0.ɵɵtemplate(3, PepperiFormComponent_fieldset_0_ng_container_3_Template, 6, 3, "ng-container", 5);
            i0.ɵɵtemplate(4, PepperiFormComponent_fieldset_0_ng_container_4_Template, 2, 1, "ng-container", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("formGroup", ctx_r0.form)("disabled", ctx_r0.isLocked)("ngStyle", i0.ɵɵpureFunction1(8, _c4$2, ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiCard && (ctx_r0.pepperiObjectInput == null ? null : ctx_r0.pepperiObjectInput.Data == null ? null : ctx_r0.pepperiObjectInput.Data.BackgroundColor)))("ngClass", i0.ɵɵpureFunction2(10, _c5$2, ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiForm, ctx_r0.isCardView == true));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiForm);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiCard);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiTable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.Editmodal);
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_pep_image_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r62_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-image", 38);
            i0.ɵɵlistener("elementClicked", function PepperiFormComponent_ng_template_1_div_0_pep_image_2_Template_pep_image_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r62_1); var ctx_r61 = i0.ɵɵnextContext(3); return ctx_r61.onClick($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r52 = i0.ɵɵnextContext().$implicit;
            var ctx_r54 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("objectId", ctx_r54.objectId)("form", ctx_r54.form)("key", field_r52.key)("src", field_r52.formattedValue)("srcLarge", field_r52.value)("options", field_r52.options)("label", field_r52.label)("type", field_r52.type)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("layoutType", ctx_r54.layoutType);
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_pep_signature_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-signature", 39);
        }
        if (rf & 2) {
            var field_r52 = i0.ɵɵnextContext().$implicit;
            var ctx_r55 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("form", ctx_r55.form)("key", field_r52.key)("src", field_r52.value)("label", field_r52.label)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("layoutType", ctx_r55.layoutType);
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_pep_checkbox_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-checkbox", 40);
        }
        if (rf & 2) {
            var field_r52 = i0.ɵɵnextContext().$implicit;
            var ctx_r56 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("form", ctx_r56.form)("key", field_r52.key)("value", field_r52.value)("label", field_r52.label)("type", field_r52.type)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("additionalValue", field_r52.additionalValue)("layoutType", ctx_r56.layoutType);
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_pep_internal_button_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r67_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-internal-button", 41);
            i0.ɵɵlistener("elementClicked", function PepperiFormComponent_ng_template_1_div_0_pep_internal_button_5_Template_pep_internal_button_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r67_1); var ctx_r66 = i0.ɵɵnextContext(3); return ctx_r66.onClick($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r52 = i0.ɵɵnextContext().$implicit;
            var ctx_r57 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("form", ctx_r57.form)("key", field_r52.key)("value", field_r52.value)("formattedValue", field_r52.formattedValue)("label", field_r52.label)("type", field_r52.type)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("xAlignment", field_r52.xAlignment)("layoutType", ctx_r57.layoutType);
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_pep_textarea_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "pep-textarea", 42);
        }
        if (rf & 2) {
            var field_r52 = i0.ɵɵnextContext().$implicit;
            var ctx_r58 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("form", ctx_r58.form)("key", field_r52.key)("value", field_r52.value)("label", field_r52.label)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("maxFieldCharacters", field_r52.maxFieldCharacters)("textColor", field_r52.textColor)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("layoutType", ctx_r58.layoutType);
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_pep_quantity_selector_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r71_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pep-quantity-selector", 43);
            i0.ɵɵlistener("valueChanged", function PepperiFormComponent_ng_template_1_div_0_pep_quantity_selector_7_Template_pep_quantity_selector_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r71_1); var ctx_r70 = i0.ɵɵnextContext(3); return ctx_r70.onValueChanged($event); })("elementClicked", function PepperiFormComponent_ng_template_1_div_0_pep_quantity_selector_7_Template_pep_quantity_selector_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r71_1); var ctx_r72 = i0.ɵɵnextContext(3); return ctx_r72.onClick($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r52 = i0.ɵɵnextContext().$implicit;
            var ctx_r59 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("id", field_r52.key)("form", ctx_r59.form)("key", field_r52.key)("value", field_r52.value)("formattedValue", field_r52.formattedValue)("label", field_r52.label)("type", field_r52.type)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("textColor", field_r52.textColor)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("layoutType", ctx_r59.layoutType);
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_1_a_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 49);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r52 = i0.ɵɵnextContext(4).$implicit;
            i0.ɵɵpropertyInterpolate("title", field_r52.formattedValue);
            i0.ɵɵpropertyInterpolate("href", field_r52.value, i0.ɵɵsanitizeUrl);
            i0.ɵɵproperty("id", field_r52.key);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(field_r52.formattedValue);
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_1_a_0_Template, 2, 4, "a", 48);
        }
        if (rf & 2) {
            var field_r52 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵproperty("ngIf", field_r52.formattedValue != null);
        }
    }
    var _c6$1 = function (a0) { return { color: a0 }; };
    function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 50);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r52 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵpropertyInterpolate("title", field_r52.formattedValue);
            i0.ɵɵproperty("id", field_r52.key)("ngStyle", i0.ɵɵpureFunction1(4, _c6$1, field_r52.textColor));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(field_r52.formattedValue);
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 16);
            i0.ɵɵtemplate(1, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 46, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_3_Template, 2, 6, "ng-template", null, 47, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r80 = i0.ɵɵreference(2);
            var _r82 = i0.ɵɵreference(4);
            var field_r52 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵproperty("ngIf", field_r52.type === "attachment" || field_r52.type === "link")("ngIfThen", _r80)("ngIfElse", _r82);
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 16);
            i0.ɵɵtemplate(2, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_Template, 5, 3, "ng-template", null, 44, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_4_Template, 2, 0, "ng-template", null, 45, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r75 = i0.ɵɵreference(3);
            var _r77 = i0.ɵɵreference(5);
            var field_r52 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (field_r52.formattedValue == null ? null : field_r52.formattedValue.length) > 0)("ngIfThen", _r75)("ngIfElse", _r77);
        }
    }
    function PepperiFormComponent_ng_template_1_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 29);
            i0.ɵɵelementContainerStart(1, 30);
            i0.ɵɵtemplate(2, PepperiFormComponent_ng_template_1_div_0_pep_image_2_Template, 1, 14, "pep-image", 31);
            i0.ɵɵtemplate(3, PepperiFormComponent_ng_template_1_div_0_pep_signature_3_Template, 1, 10, "pep-signature", 32);
            i0.ɵɵtemplate(4, PepperiFormComponent_ng_template_1_div_0_pep_checkbox_4_Template, 1, 12, "pep-checkbox", 33);
            i0.ɵɵtemplate(5, PepperiFormComponent_ng_template_1_div_0_pep_internal_button_5_Template, 1, 10, "pep-internal-button", 34);
            i0.ɵɵtemplate(6, PepperiFormComponent_ng_template_1_div_0_pep_textarea_6_Template, 1, 12, "pep-textarea", 35);
            i0.ɵɵtemplate(7, PepperiFormComponent_ng_template_1_div_0_pep_quantity_selector_7_Template, 1, 14, "pep-quantity-selector", 36);
            i0.ɵɵtemplate(8, PepperiFormComponent_ng_template_1_div_0_ng_container_8_Template, 6, 3, "ng-container", 37);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r52 = ctx.$implicit;
            var j_r53 = ctx.index;
            var ctx_r51 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(9, _c3$2, ctx_r51.uiControlHeader == null ? null : ctx_r51.uiControlHeader.ControlFields[j_r53] == null ? null : ctx_r51.uiControlHeader.ControlFields[j_r53].calcColumnWidthString))("ngClass", i0.ɵɵpureFunction1(11, _c2$2, "text-align-" + field_r52.xAlignment));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", field_r52.controlType);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "image");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "signature");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "checkbox");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "button");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "textarea");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "qs");
        }
    }
    function PepperiFormComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PepperiFormComponent_ng_template_1_div_0_Template, 9, 13, "div", 28);
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngForOf", ctx_r2.fields);
        }
    }
    // tslint:disable-next-line: no-conflicting-lifecycle
    var PepperiFormComponent = /** @class */ (function () {
        function PepperiFormComponent(dialogService, customizationService, translate, fb, differs) {
            this.dialogService = dialogService;
            this.customizationService = customizationService;
            this.translate = translate;
            this.fb = fb;
            this.isReport = false;
            this.lockEvents = false;
            this.canEditObject = true;
            this.isActive = false;
            this.layoutType = i11.LAYOUT_TYPE.PepperiForm;
            this.listType = '';
            this.objectId = '0';
            this.parentId = '0';
            this.searchCode = '0';
            this.showTitle = true;
            this.firstFieldAsLink = false;
            this.isCardView = false;
            this.checkForChanges = null;
            this.pageType = '';
            this.notifyValueChanged = new i0.EventEmitter();
            this.formValidationChanged = new i0.EventEmitter();
            this.childClicked = new i0.EventEmitter();
            this.childChanged = new i0.EventEmitter();
            this.notifyFieldClicked = new i0.EventEmitter();
            this.notifyMenuItemClicked = new i0.EventEmitter();
            this.LAYOUT_TYPE = i11.LAYOUT_TYPE;
            this.isLocked = false;
            this.matrixIsLast = false;
            // payLoad = '';
            this.rows = [];
            this.fields = [];
            this.columns = 1;
            this.hasMenuFloatingOnOtherField = false;
            this.indicatorsDataField = null;
            this.shouldReloadForm = false;
            this.jsonLib = JSON;
            // store the initial value to compare with
            this.differ = differs.find({}).create();
        }
        PepperiFormComponent.convertAddressFields = function (controlField, addressFields, canEditObject) {
            var fields = [];
            addressFields.forEach(function (field) {
                var customField;
                var placeholder = field.ApiName;
                if (field.ApiName.toLowerCase().indexOf('street') >= 0) {
                    customField = new i11.PepperiTextboxField({
                        key: field.ApiName,
                        label: field.ApiName,
                        type: 'text',
                        placeholder: placeholder,
                        readonly: !canEditObject,
                        disabled: !field.Enabled || !canEditObject,
                        hidden: false,
                        required: false,
                        value: field.Value,
                        formattedValue: field.FormattedValue,
                        row: 0,
                        rowSpan: 1,
                        col: 0,
                        colSpan: 2,
                        xAlignment: controlField.Layout.XAlignment,
                        yAlignment: controlField.Layout.YAlignment,
                        order: 0
                    });
                }
                else if (field.ApiName.toLowerCase().indexOf('city') >= 0) {
                    customField = new i11.PepperiTextboxField({
                        key: field.ApiName,
                        label: field.ApiName,
                        type: 'text',
                        placeholder: placeholder,
                        readonly: !canEditObject,
                        disabled: !field.Enabled || !canEditObject,
                        hidden: false,
                        required: false,
                        value: field.Value,
                        formattedValue: field.FormattedValue,
                        row: 0,
                        rowSpan: 1,
                        col: 2,
                        colSpan: 1,
                        xAlignment: controlField.Layout.XAlignment,
                        yAlignment: controlField.Layout.YAlignment,
                        order: 1
                    });
                }
                else if (field.ApiName.toLowerCase().indexOf('state') >= 0) {
                    customField = new i11.PepperiSelectField({
                        key: field.ApiName,
                        label: field.ApiName,
                        placeholder: placeholder,
                        options: field.OptionalValues,
                        readonly: !canEditObject,
                        disabled: !field.Enabled || !canEditObject,
                        hidden: false,
                        required: false,
                        value: field.Value,
                        formattedValue: field.FormattedValue,
                        row: 1,
                        rowSpan: 1,
                        col: 0,
                        colSpan: 1,
                        xAlignment: controlField.Layout.XAlignment,
                        yAlignment: controlField.Layout.YAlignment,
                        order: 2
                    });
                }
                else if (field.ApiName.toLowerCase().indexOf('zipcode') >= 0) {
                    customField = new i11.PepperiTextboxField({
                        key: field.ApiName,
                        label: field.ApiName,
                        type: 'text',
                        placeholder: placeholder,
                        readonly: !canEditObject,
                        disabled: !field.Enabled || !canEditObject,
                        hidden: false,
                        required: false,
                        value: field.Value,
                        formattedValue: field.FormattedValue,
                        row: 1,
                        rowSpan: 1,
                        col: 1,
                        colSpan: 1,
                        xAlignment: controlField.Layout.XAlignment,
                        yAlignment: controlField.Layout.YAlignment,
                        order: 3
                    });
                }
                else if (field.ApiName.toLowerCase().indexOf('country') >= 0) {
                    customField = new i11.PepperiSelectField({
                        key: field.ApiName,
                        label: field.ApiName,
                        placeholder: placeholder,
                        options: field.OptionalValues,
                        readonly: !canEditObject,
                        disabled: !field.Enabled || !canEditObject,
                        hidden: false,
                        required: false,
                        value: field.Value,
                        formattedValue: field.FormattedValue,
                        row: 2,
                        rowSpan: 1,
                        col: 2,
                        colSpan: 1,
                        xAlignment: controlField.Layout.XAlignment,
                        yAlignment: controlField.Layout.YAlignment,
                        order: 4
                    });
                }
                fields.push(customField);
            });
            return fields.sort(function (n1, n2) { return (n1.order > n2.order ? 1 : n1.order < n2.order ? -1 : 0); });
        };
        PepperiFormComponent.isMatrixField = function (apiNameToCheck) {
            return apiNameToCheck.indexOf('Matrix') >= 0;
        };
        PepperiFormComponent.doesFieldHavaFloatingField = function (controlField, floatingField) {
            var hasFloatingField = false;
            if (floatingField.Layout.Y >= controlField.Layout.Y &&
                floatingField.Layout.Y < controlField.Layout.Y + controlField.Layout.Height &&
                floatingField.Layout.X >= controlField.Layout.X &&
                floatingField.Layout.X < controlField.Layout.X + controlField.Layout.Width) {
                hasFloatingField = true;
            }
            return hasFloatingField;
        };
        PepperiFormComponent.getOptionsForCustomField = function (controlField, dataField, canEditObject) {
            if (!controlField || !dataField) {
                return;
            }
            var placeholder = controlField.ReadOnly || !canEditObject ? '' : controlField.Title;
            return {
                key: controlField.ApiName,
                label: controlField.Title,
                type: 'text',
                accessory: dataField.Accessory,
                placeholder: placeholder,
                readonly: controlField.ReadOnly || !canEditObject,
                disabled: !dataField.Enabled || !canEditObject,
                hidden: controlField.Hidden,
                required: controlField.Mandatory,
                value: dataField.Value,
                formattedValue: dataField.FormattedValue,
                additionalValue: dataField.AdditionalValue,
                row: controlField.Layout.Y,
                rowSpan: controlField.Layout.Height,
                col: controlField.Layout.X,
                colSpan: controlField.Layout.Width,
                xAlignment: controlField.Layout.XAlignment,
                yAlignment: controlField.Layout.YAlignment,
                options: dataField.OptionalValues,
                groupFields: undefined,
                maxFieldCharacters: controlField.MaxFieldCharacters,
                minValue: controlField.MinValue,
                maxValue: controlField.MaxValue,
                // hasMenu: hasMenu,
                // hasCampaign: hasCampaign,
                // hasIndicators: hasIndicators,
                textColor: dataField.TextColor,
                notificationInfo: dataField.NotificationInfo
            };
        };
        PepperiFormComponent.convertToCustomField = function (controlField, dataField, canEditObject, menuField, hasCampaignField, indicatorsField, objectId, parentId, searchCode) {
            var customField;
            var options = PepperiFormComponent.getOptionsForCustomField(controlField, dataField, canEditObject);
            if (controlField.ApiName === 'ObjectMenu') {
                options.type = 'menu';
                if (dataField.TransactionItemType === 1 && dataField.OptionalValues.length > 0) {
                    var subMenuOptions = [{ Key: 'EditPackage', Value: 'Edit' }, { Key: 'DeletePackage', Value: 'Delete' }];
                    options.options = subMenuOptions.filter(function (option) { return option && dataField.OptionalValues.includes(option.Key); });
                }
                else {
                    options.options = null;
                }
                customField = new i11.PepperiMenuField(options);
            }
            else if (controlField.ApiName === 'QuantitySelector' ||
                controlField.ApiName === 'UnitsQuantity' ||
                controlField.ApiName.indexOf('size_') === 0) {
                if (dataField.FieldType === i11.FIELD_TYPE.InternalLink) {
                    options.type = 'button';
                }
                else if (dataField.FieldType === i11.FIELD_TYPE.Package) {
                    options.type = 'packageButton';
                }
                else if (dataField.FieldType === i11.FIELD_TYPE.NumberRealQuantitySelector ||
                    dataField.FieldType === i11.FIELD_TYPE.NumberReal) {
                    options.type = 'qs';
                    options.alowDecimal = true;
                }
                else if (dataField.FieldType === i11.FIELD_TYPE.NumberIntegerQuantitySelector ||
                    dataField.FieldType === i11.FIELD_TYPE.NumberInteger) {
                    options.type = 'qs';
                    options.alowDecimal = false;
                }
                else if (dataField.FieldType === i11.FIELD_TYPE.NumberIntegerForMatrix) {
                    options.type = 'qsForMatrix';
                    options.alowDecimal = false;
                }
                else if (dataField.FieldType === i11.FIELD_TYPE.NumberRealForMatrix) {
                    options.type = 'qsForMatrix';
                    options.alowDecimal = true;
                }
                customField = new i11.PepperiQuantitySelectorField(options);
            }
            else {
                // Hack need to remove this..
                if (dataField.FieldType === i11.FIELD_TYPE.Indicators && PepperiFormComponent.isMatrixField(dataField.ApiName)) {
                    dataField.FieldType = i11.FIELD_TYPE.InternalPage;
                }
                switch (dataField.FieldType) {
                    case i11.FIELD_TYPE.Address: {
                        var canEditGroupObject = controlField.ReadOnly ? false : canEditObject;
                        options.groupFields = PepperiFormComponent.convertAddressFields(controlField, dataField.GroupFields, canEditGroupObject);
                        customField = new i11.PepperiAddressField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Indicators: {
                        // options['type'] = 'indicators'; // Not needed this is PepperiIndicatorsField.
                        customField = new i11.PepperiIndicatorsField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.InternalPage: {
                        if (PepperiFormComponent.isMatrixField(controlField.ApiName)) {
                            options.rowSpan = controlField.Layout.Height;
                            options.objectId = objectId;
                            options.parentId = parentId;
                            options.searchCode = searchCode;
                            customField = new i11.PepperiInternalPageField(options);
                        }
                        else {
                            // Not supported
                        }
                        break;
                    }
                    case i11.FIELD_TYPE.Link: {
                        options.type = 'link';
                        customField = new i11.PepperiTextboxField(options);
                        // DI-11292 - add changes for link field for the "Read Only display value" prop
                        customField.formattedValue = customField.disabled && customField.formattedValue !== '' &&
                            customField.value !== '' ? customField.formattedValue : customField.value;
                        break;
                    }
                    case i11.FIELD_TYPE.InternalLink:
                    case i11.FIELD_TYPE.Button: {
                        options.type = 'button';
                        customField = new i11.PepperiButtonField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Attachment: {
                        options.type = 'attachment';
                        customField = new i11.PepperiAttachmentField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Signature: {
                        options.type = 'signature';
                        customField = new i11.PepperiSignatureField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Image:
                    case i11.FIELD_TYPE.ImageURL: {
                        options.type = 'image';
                        options.menuField = menuField && this.doesFieldHavaFloatingField(controlField, menuField) ? menuField : null;
                        options.hasCampaignField = hasCampaignField &&
                            this.doesFieldHavaFloatingField(controlField, hasCampaignField) ? hasCampaignField : null;
                        options.indicatorsField = indicatorsField &&
                            this.doesFieldHavaFloatingField(controlField, indicatorsField) ? indicatorsField : null;
                        customField = new i11.PepperiImageField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Images: {
                        options.type = 'images';
                        customField = new i11.PepperiImagesField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Email: {
                        options.type = 'email';
                        customField = new i11.PepperiTextboxField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Phone: {
                        options.type = 'phone';
                        customField = new i11.PepperiTextboxField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Duration: {
                        options.type = 'duration';
                        customField = new i11.PepperiTextboxField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Default:
                    case i11.FIELD_TYPE.TextBox:
                    case i11.FIELD_TYPE.LimitedLengthTextBox:
                    case i11.FIELD_TYPE.TextHeader:
                    case i11.FIELD_TYPE.CalculatedString:
                    case i11.FIELD_TYPE.MapDataString: {
                        customField = new i11.PepperiTextboxField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.TextArea: {
                        customField = new i11.PepperiTextareaField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.RichTextHTML: {
                        customField = new i11.PepperiRichHtmlTextareaField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Date:
                    case i11.FIELD_TYPE.LimitedDate:
                    case i11.FIELD_TYPE.CalculatedDate:
                    case i11.FIELD_TYPE.DateAndTime: {
                        options.type = dataField.FieldType === i11.FIELD_TYPE.DateAndTime ? 'datetime' : 'date';
                        customField = new i11.PepperiDateField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.NumberInteger:
                    case i11.FIELD_TYPE.CalculatedInt:
                    case i11.FIELD_TYPE.MapDataInt: {
                        options.type = 'int';
                        customField = new i11.PepperiTextboxField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Percentage: {
                        options.type = 'percentage';
                        customField = new i11.PepperiTextboxField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Currency: {
                        options.type = 'currency';
                        customField = new i11.PepperiTextboxField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.NumberReal:
                    case i11.FIELD_TYPE.CalculatedReal:
                    case i11.FIELD_TYPE.MapDataReal:
                    case i11.FIELD_TYPE.Sum:
                    case i11.FIELD_TYPE.Totals: {
                        options.type = 'real';
                        customField = new i11.PepperiTextboxField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Boolean:
                    case i11.FIELD_TYPE.CalculatedBool: {
                        customField = new i11.PepperiCheckboxField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.BooleanText: {
                        options.type = 'booleanText';
                        customField = new i11.PepperiCheckboxField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.ComboBox:
                    case i11.FIELD_TYPE.EmptyComboBox:
                    case i11.FIELD_TYPE.MapDataDropDown: {
                        // options.type = 'select';
                        customField = new i11.PepperiSelectField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.MultiTickBox:
                    case i11.FIELD_TYPE.MultiTickBoxToComboBox:
                    case i11.FIELD_TYPE.EmptyMultiTickBox: {
                        options.type = 'multi';
                        customField = new i11.PepperiSelectField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.GuidReferenceType: {
                        options.type = 'reference';
                        options.referenceObjectType = dataField.ReferenceObjectType;
                        options.referenceObjectSubType = dataField.ReferenceObjectSubType;
                        options.referenceObjectInternalType = dataField.ReferenceObjectInternalType;
                        customField = new i11.PepperiButtonField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.ListOfObjects: {
                        options.type = 'listofobjects';
                        customField = new i11.PepperiButtonField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Separator: {
                        customField = new i11.PepperiSeparatorField(options);
                        break;
                    }
                    /*
                        case FIELD_TYPE.Images: return that.field(value);
                    */
                    case i11.FIELD_TYPE.NumberRealQuantitySelector:
                    case i11.FIELD_TYPE.NumberIntegerQuantitySelector: {
                        options.type = 'qs';
                        options.alowDecimal = dataField.FieldType === i11.FIELD_TYPE.NumberRealQuantitySelector;
                        customField = new i11.PepperiQuantitySelectorField(options);
                        break;
                    }
                    case i11.FIELD_TYPE.Package: {
                        options.type = 'packageButton';
                        customField = new i11.PepperiQuantitySelectorField(options);
                        break;
                    }
                }
            }
            if (!customField) {
                options.label = controlField.ApiName + ' is not supported!!!';
                customField = new i11.PepperiSeparatorField(options);
            }
            return customField;
        };
        PepperiFormComponent.getFieldFormattedValue = function (field) {
            var fieldFormattedValue = field.formattedValue;
            // Fix for the custom check box component.
            if (field.controlType === 'checkbox') {
                fieldFormattedValue = fieldFormattedValue === 'true';
            }
            // Fix for the custom button component.
            if (field.controlType === 'button') {
                fieldFormattedValue = fieldFormattedValue === '0' ? '' : fieldFormattedValue;
            }
            return fieldFormattedValue;
        };
        PepperiFormComponent.toControlGroup = function (fields, fb, customizationService) {
            var group = {};
            if (fields && fields.length > 0) {
                fields.forEach(function (field) {
                    if (field.groupFields && field.groupFields.length > 0) {
                        var subGroup_1 = {};
                        field.groupFields.forEach(function (groupField) {
                            if (groupField.required && (!field.readonly && !field.disabled)) {
                                subGroup_1[groupField.key] = [{
                                        value: groupField.formattedValue || '',
                                        disabled: field.readonly || field.disabled || groupField.disabled
                                    }, [i3.Validators.required]];
                            }
                            else {
                                subGroup_1[groupField.key] = [{
                                        value: groupField.formattedValue || '',
                                        disabled: field.readonly || field.disabled || groupField.disabled
                                    }, [i3.Validators.nullValidator]];
                            }
                        });
                        group[field.key] = fb.group(subGroup_1);
                    }
                    else {
                        var validators = customizationService.getValidatorsForField(field.required, field.readonly, field.disabled, field.maxFieldCharacters, field.type, field.controlType === 'checkbox');
                        var fieldFormattedValue = PepperiFormComponent.getFieldFormattedValue(field);
                        group[field.key] = [{ value: fieldFormattedValue || '', disabled: field.disabled }, validators];
                    }
                });
            }
            return fb.group(group);
        };
        PepperiFormComponent.prototype.showFormValidationMessage = function () {
            var e_1, _a;
            var fields = this.fields;
            var emptyMandatoryFieldsMsg = '';
            var notValidFieldsMsg = '';
            try {
                // for (let i: number = 0; i < fields.length; i++) {
                //     let field = fields[i];
                for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                    var field = fields_1_1.value;
                    var formControl = this.form && this.form.get(field.key);
                    if (formControl) {
                        // Mandatory is empty.
                        if (field.required && formControl.value.toString().trim().length === 0) {
                            emptyMandatoryFieldsMsg += '<li><small>' + field.label + '</small></li>';
                        }
                        else if (!field.disabled && !formControl.valid) {
                            notValidFieldsMsg += '<li><small>' + field.label + '</small></li>';
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // Add the header message of the empty mandatory fields
            if (emptyMandatoryFieldsMsg.length > 0) {
                emptyMandatoryFieldsMsg = '<div>' + this.translate.instant('MESSAGES.ERROR_MANDATORY_FIELDS') +
                    '</div><ul style=\'padding: 0 20px;\'>' + emptyMandatoryFieldsMsg + '</ul><br/>';
            }
            // Add the header message of the empty mandatory fields
            if (notValidFieldsMsg.length > 0) {
                notValidFieldsMsg = '<div>' + this.translate.instant('MESSAGES.ERROR_INVALID_FIELDS') +
                    '</div><ul style=\'padding: 0 20px;\'>' + notValidFieldsMsg + '</ul>';
            }
            var title = this.translate.instant('MESSAGES.TITLE_NOTICE');
            var data = new i1$1.DialogData({
                title: title,
                content: emptyMandatoryFieldsMsg + notValidFieldsMsg,
                contentType: i1$1.DialogDataType.Html
            });
            this.dialogService.openDefaultDialog(data);
        };
        PepperiFormComponent.prototype.ngOnInit = function () {
            var themeVars = this.customizationService.getThemeVariables();
            // convert rem to pixel
            var RemToPixel = 16;
            this.formGutterSize = this.customizationService.getNumberThemeVariable(themeVars, i11.CustomizationService.FORM_SPACEING_KEY) * RemToPixel;
            this.cardGutterSize = this.customizationService.getNumberThemeVariable(themeVars, i11.CustomizationService.CARD_SPACEING_KEY) * RemToPixel;
        };
        PepperiFormComponent.prototype.ngDoCheck = function () {
            var changes = this.differ.diff(this.pepperiObjectInput); // check for changes
            if (changes) {
                this.updateForm(true);
            }
        };
        PepperiFormComponent.prototype.ngOnChanges = function (changes) {
            if (changes.pepperiObjectInput && changes.pepperiObjectInput.currentValue) {
                // Load changes
                if (!this.shouldReloadForm && changes.pepperiObjectInput.previousValue) {
                    this.pepperiObjectInput = changes.pepperiObjectInput.currentValue;
                    this.updateForm();
                }
                else {
                    this.shouldReloadForm = false;
                    this.initForm(changes);
                }
            }
            this.checkForChanges = new Date();
        };
        PepperiFormComponent.prototype.ngOnDestroy = function () {
            if (this.notifyValueChanged) {
                this.notifyValueChanged.unsubscribe();
            }
            if (this.formValidationChanged) {
                this.formValidationChanged.unsubscribe();
            }
            if (this.childClicked) {
                this.childClicked.unsubscribe();
            }
            if (this.childChanged) {
                this.childChanged.unsubscribe();
            }
            if (this.notifyFieldClicked) {
                this.notifyFieldClicked.unsubscribe();
            }
            if (this.notifyMenuItemClicked) {
                this.notifyMenuItemClicked.unsubscribe();
            }
        };
        PepperiFormComponent.prototype.getUiControlFields = function () {
            return this.uiControlHeader ?
                this.uiControlHeader.ControlFields :
                this.pepperiObjectInput.UIControl.ControlFields;
        };
        PepperiFormComponent.prototype.initFieldsStructure = function (fields, maxRow) {
            var e_2, _a, e_3, _b;
            var themeVars = this.customizationService.getThemeVariables();
            // Set form row height.
            if (this.layoutType === i11.LAYOUT_TYPE.PepperiCard) {
                var cardFieldHeight = this.customizationService.getNumberThemeVariable(themeVars, i11.CustomizationService.CARD_FIELD_HEIGHT_KEY);
                this.rowHeight = cardFieldHeight;
            }
            else {
                var rowFieldHeight = this.customizationService.getNumberThemeVariable(themeVars, i11.CustomizationService.FORM_FIELD_HEIGHT_KEY);
                var rowFieldTitleHeight = this.customizationService.getNumberThemeVariable(themeVars, i11.CustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY);
                this.rowHeight = rowFieldHeight + rowFieldTitleHeight;
            }
            // Create the fields structure (the fields must be sorted!!!).
            if (fields.length > 0) {
                // Init the layout.
                if (
                // this.layoutType === LAYOUT_TYPE.PepperiForm ||
                this.layoutType === i11.LAYOUT_TYPE.PepperiTable ||
                    this.layoutType === i11.LAYOUT_TYPE.Editmodal) {
                    this.fields = fields;
                    this.rows = [];
                    for (var i = 0; i <= maxRow; i++) {
                        this.rows[i] = [];
                    }
                    try {
                        // for (let i = 0; i < fields.length; i++) {
                        // const field = fields[i]
                        for (var fields_2 = __values(fields), fields_2_1 = fields_2.next(); !fields_2_1.done; fields_2_1 = fields_2.next()) {
                            var field = fields_2_1.value;
                            this.rows[field.row].push(field);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (fields_2_1 && !fields_2_1.done && (_a = fields_2.return)) _a.call(fields_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                else {
                    var doesfieldExistIn = new Array(maxRow);
                    for (var i = 0; i < doesfieldExistIn.length; i++) {
                        doesfieldExistIn[i] = new Array(this.columns);
                        for (var j = 0; j < doesfieldExistIn[i].length; j++) {
                            doesfieldExistIn[i][j] = false;
                        }
                    }
                    try {
                        // Run in squere (row - colspan, col - rowspan) and put true where it should.
                        // for (let index = 0; index < fields.length; index++) {
                        //     const currentField = fields[index];
                        for (var fields_3 = __values(fields), fields_3_1 = fields_3.next(); !fields_3_1.done; fields_3_1 = fields_3.next()) {
                            var currentField = fields_3_1.value;
                            if (currentField.rowSpan > 1) {
                                for (var row = currentField.row; row < currentField.row + currentField.rowSpan; row++) {
                                    if (currentField.colSpan > 1) {
                                        for (var col = currentField.col; col < currentField.col + currentField.colSpan; col++) {
                                            if (doesfieldExistIn.length > row && doesfieldExistIn[0].length > col) {
                                                doesfieldExistIn[row][col] = true;
                                            }
                                        }
                                    }
                                    else {
                                        if (doesfieldExistIn.length > row && doesfieldExistIn[0].length > currentField.col) {
                                            doesfieldExistIn[row][currentField.col] = true;
                                        }
                                    }
                                }
                            }
                            else if (currentField.colSpan > 1) {
                                for (var col = currentField.col; col < currentField.col + currentField.colSpan; col++) {
                                    if (doesfieldExistIn.length > currentField.row && doesfieldExistIn[0].length > col) {
                                        doesfieldExistIn[currentField.row][col] = true;
                                    }
                                }
                            }
                            else {
                                if (doesfieldExistIn.length > currentField.row && doesfieldExistIn[0].length > currentField.col) {
                                    doesfieldExistIn[currentField.row][currentField.col] = true;
                                }
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (fields_3_1 && !fields_3_1.done && (_b = fields_3.return)) _b.call(fields_3);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    // Create empty fields where doesfieldExistIn is false (For the md-grid-list UI Component).
                    for (var i = 0; i < doesfieldExistIn.length; i++) {
                        for (var j = 0; j < doesfieldExistIn[i].length; j++) {
                            if (!doesfieldExistIn[i][j]) {
                                // Create empty field and add it to the fields list.
                                fields.push(new i11.PepperiPlaceholderField({
                                    key: i + '_' + j,
                                    label: '',
                                    type: 'text',
                                    placeholder: '',
                                    readonly: false,
                                    disabled: false,
                                    hidden: false,
                                    required: false,
                                    value: '',
                                    formattedValue: '',
                                    row: i,
                                    rowSpan: 1,
                                    col: j,
                                    colSpan: 1,
                                    order: 1
                                }));
                            }
                        }
                    }
                    // Sort the fields again.
                    this.fields = fields.sort(function (f1, f2) { return (f1.row > f2.row ?
                        1 : f1.row < f2.row ?
                        -1 : f1.col > f2.col ?
                        1 : f1.col < f2.col ? -1 : 0); });
                }
            }
        };
        PepperiFormComponent.prototype.setForm = function (isForUpdate) {
            var e_4, _a, e_5, _b, e_6, _c;
            if (isForUpdate === void 0) { isForUpdate = false; }
            var allFieldsAreReadOnly = true;
            if (!isForUpdate) {
                var fields = [];
                try {
                    // for (let i = 0; i < this.fields.length; i++) {
                    // const currentField = this.fields[i];
                    for (var _d = __values(this.fields), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var currentField = _e.value;
                        // Add all fields except 'internalPage' type (for children).
                        if (currentField.controlType !== 'internalPage') {
                            fields.push(currentField);
                        }
                        if (!currentField.readonly) {
                            allFieldsAreReadOnly = false;
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                this.form = PepperiFormComponent.toControlGroup(fields, this.fb, this.customizationService);
            }
            else {
                try {
                    // Update form values if changed by calculated fields.
                    // for (let i = 0; i < this.fields.length; i++) {
                    // const currentField = this.fields[i];
                    for (var _f = __values(this.fields), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var currentField = _g.value;
                        if (currentField.controlType !== 'internalPage') {
                            if (currentField.groupFields && currentField.groupFields.length > 0) {
                                try {
                                    // for (let j = 0; j < currentField.groupFields.length; j++) {
                                    //     let currentGroupField = currentField.groupFields[j];
                                    for (var _h = (e_6 = void 0, __values(currentField.groupFields)), _j = _h.next(); !_j.done; _j = _h.next()) {
                                        var currentGroupField = _j.value;
                                        var fieldFormattedValue = PepperiFormComponent.getFieldFormattedValue(currentGroupField);
                                        this.customizationService.updateFormField(this.form, currentGroupField, fieldFormattedValue, currentField);
                                    }
                                }
                                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                                finally {
                                    try {
                                        if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                                    }
                                    finally { if (e_6) throw e_6.error; }
                                }
                            }
                            else {
                                var fieldFormattedValue = PepperiFormComponent.getFieldFormattedValue(currentField);
                                // this.form.controls[currentField.key].setValue(fieldFormattedValue);
                                this.customizationService.updateFormField(this.form, currentField, fieldFormattedValue);
                            }
                        }
                        if (!currentField.readonly) {
                            allFieldsAreReadOnly = false;
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
            var isFormValid = this.form.valid;
            // Change validation to true if all fields are read only. (By Amir.L request).
            if (!isFormValid && allFieldsAreReadOnly) {
                isFormValid = true;
            }
            this.onFormValidationChanged(isFormValid);
            // Set it to false to enable all fields.
            this.isLocked = false;
        };
        PepperiFormComponent.prototype.initForm = function (changes) {
            if (this.pepperiObjectInput.Data && this.pepperiObjectInput.Data.Fields) {
                var fields = this.convertCustomFields(this.getUiControlFields(), this.pepperiObjectInput.Data.Fields);
                var maxRow = Math.max.apply(Math, fields.map(function (f) {
                    return f.row + f.rowSpan;
                }));
                this.columns = Math.max.apply(Math, fields.map(function (f) {
                    return f.col + f.colSpan;
                }));
                this.initFieldsStructure(fields, maxRow);
                this.setForm();
            }
        };
        PepperiFormComponent.prototype.updateForm = function (cleanLastFocusedField) {
            var e_7, _a;
            if (cleanLastFocusedField === void 0) { cleanLastFocusedField = false; }
            if (this.pepperiObjectInput.Data && this.pepperiObjectInput.Data.Fields) {
                var _loop_1 = function (currentField) {
                    var e_8, _a;
                    var customField = this_1.fields.filter(function (f) { return f.key === currentField.ApiName; })[0];
                    // Update all fields except 'internalPage' type (for children).
                    if (customField && customField.controlType !== 'internalPage') {
                        var hasFocus = this_1.lastFocusedField && this_1.lastFocusedField.id === customField.key;
                        customField.updateField(currentField, this_1.canEditObject, hasFocus ? this_1.lastFocusedField : null);
                        // Update the group fields.
                        if (customField.controlType === 'address' && currentField.GroupFields) {
                            var _loop_2 = function (currentGroupField) {
                                currentGroupField.Enabled = !currentField.Enabled ? false : currentGroupField.Enabled;
                                var customGroupField = customField.groupFields.filter(function (f) { return f.key === currentGroupField.ApiName; })[0];
                                var hasGroupFocus = this_1.lastFocusedField && this_1.lastFocusedField.id === customGroupField.key;
                                customGroupField.updateField(currentGroupField, this_1.canEditObject, hasGroupFocus ? this_1.lastFocusedField : null);
                            };
                            try {
                                // for (let j = 0; j < currentField.GroupFields.length; j++) {
                                // let currentGroupField = currentField.GroupFields[j];
                                for (var _b = (e_8 = void 0, __values(currentField.GroupFields)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var currentGroupField = _c.value;
                                    _loop_2(currentGroupField);
                                }
                            }
                            catch (e_8_1) { e_8 = { error: e_8_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_8) throw e_8.error; }
                            }
                        }
                    }
                };
                var this_1 = this;
                try {
                    // for (let i = 0; i < this.pepperiObjectInput.Data.Fields.length; i++) {
                    // let currentField = this.pepperiObjectInput.Data.Fields[i];
                    for (var _b = __values(this.pepperiObjectInput.Data.Fields), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var currentField = _c.value;
                        _loop_1(currentField);
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                this.setForm(true);
                if (cleanLastFocusedField) {
                    // Clean the last focused field.
                    this.lastFocusedField = null;
                }
            }
        };
        PepperiFormComponent.prototype.ReloadForm = function () {
            this.shouldReloadForm = true;
        };
        // onSubmit() {
        //     if (this.form.valid) {
        //         this.payLoad = JSON.stringify(this.form.value);
        //         //this.submitted.emit(this.form.value);
        //     }
        // }
        PepperiFormComponent.prototype.getFormControlById = function (key) {
            var self = this;
            var formControl = null;
            this.fields.forEach(function (field) {
                if (field.key === key) {
                    formControl = self.form.get(field.key);
                    return;
                }
                else if (field.groupFields && field.groupFields.length > 0) {
                    field.groupFields.forEach(function (groupField) {
                        if (groupField.key === key) {
                            formControl = self.form.get(field.key + '.' + groupField.key);
                            return;
                        }
                    });
                }
            });
            return formControl;
        };
        PepperiFormComponent.prototype.setSpecialFields = function (controlFields, dataFields) {
            var e_9, _a, e_10, _b, e_11, _c;
            try {
                // let cf;
                // for (let index = 0; index < controlFields.length; index++) {
                //     cf = controlFields[index];
                for (var controlFields_1 = __values(controlFields), controlFields_1_1 = controlFields_1.next(); !controlFields_1_1.done; controlFields_1_1 = controlFields_1.next()) {
                    var cf = controlFields_1_1.value;
                    if (cf.ApiName === 'ObjectMenu') {
                        this.menuField = cf;
                    }
                    else if (cf.ApiName === 'ItemHasActiveCampaign') {
                        this.hasCampaignField = cf;
                    }
                    else if (cf.ApiName === 'ItemIndicatorsWithoutCampaign') {
                        this.indicatorsField = cf;
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (controlFields_1_1 && !controlFields_1_1.done && (_a = controlFields_1.return)) _a.call(controlFields_1);
                }
                finally { if (e_9) throw e_9.error; }
            }
            try {
                // let df;
                // for (let index = 0; index < dataFields.length; index++) {
                //     df = dataFields[index];
                for (var dataFields_1 = __values(dataFields), dataFields_1_1 = dataFields_1.next(); !dataFields_1_1.done; dataFields_1_1 = dataFields_1.next()) {
                    var df = dataFields_1_1.value;
                    if (df.ApiName === 'ObjectMenu') {
                        this.menuDataField = df;
                    }
                    else if (df.ApiName === 'ItemHasActiveCampaign') {
                        this.hasCampaignDataField = df;
                    }
                    else if (df.ApiName === 'ItemIndicatorsWithoutCampaign') {
                        this.indicatorsDataField = df;
                    }
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (dataFields_1_1 && !dataFields_1_1.done && (_b = dataFields_1.return)) _b.call(dataFields_1);
                }
                finally { if (e_10) throw e_10.error; }
            }
            if (this.menuField && this.menuDataField) {
                this.menuDataField.Layout = this.menuField.Layout;
            }
            if (this.hasCampaignField && this.hasCampaignDataField) {
                this.hasCampaignDataField.Layout = this.hasCampaignField.Layout;
            }
            if (this.indicatorsField && this.indicatorsDataField) {
                this.indicatorsDataField.Layout = this.indicatorsField.Layout;
            }
            try {
                // Check if menu is floating on other field.
                // for (let index = 0; index < controlFields.length; index++) {
                //     cf = controlFields[index];
                for (var controlFields_2 = __values(controlFields), controlFields_2_1 = controlFields_2.next(); !controlFields_2_1.done; controlFields_2_1 = controlFields_2.next()) {
                    var cf = controlFields_2_1.value;
                    if (this.menuField && cf.ApiName !== 'ObjectMenu') {
                        this.hasMenuFloatingOnOtherField = PepperiFormComponent.doesFieldHavaFloatingField(cf, this.menuField);
                        if (this.hasMenuFloatingOnOtherField) {
                            break;
                        }
                    }
                }
            }
            catch (e_11_1) { e_11 = { error: e_11_1 }; }
            finally {
                try {
                    if (controlFields_2_1 && !controlFields_2_1.done && (_c = controlFields_2.return)) _c.call(controlFields_2);
                }
                finally { if (e_11) throw e_11.error; }
            }
        };
        PepperiFormComponent.prototype.convertCustomFields = function (controlFields, dataFields) {
            var _this = this;
            var self = this;
            if (this.layoutType !== i11.LAYOUT_TYPE.PepperiTable) {
                this.setSpecialFields(controlFields, dataFields);
            }
            else {
                // Hack: convert to center alignment if table view & special fields)
                controlFields.forEach(function (field, index) {
                    if (field.ApiName === 'UnitsQuantity' ||
                        field.ApiName === 'QuantitySelector' ||
                        field.ApiName === 'ObjectMenu' ||
                        field.FieldType === i11.FIELD_TYPE.Image ||
                        field.FieldType === i11.FIELD_TYPE.ImageURL ||
                        field.FieldType === i11.FIELD_TYPE.Indicators ||
                        field.FieldType === i11.FIELD_TYPE.Boolean ||
                        field.FieldType === i11.FIELD_TYPE.CalculatedBool ||
                        field.FieldType === i11.FIELD_TYPE.Signature ||
                        field.FieldType === i11.FIELD_TYPE.NumberIntegerQuantitySelector ||
                        field.FieldType === i11.FIELD_TYPE.NumberRealQuantitySelector ||
                        field.FieldType === i11.FIELD_TYPE.Package ||
                        field.FieldType === i11.FIELD_TYPE.NumberIntegerForMatrix ||
                        field.FieldType === i11.FIELD_TYPE.NumberRealForMatrix) {
                        field.Layout.XAlignment = 3;
                    }
                });
            }
            var fields = [];
            var matrixFields = controlFields.filter(function (cf) { return PepperiFormComponent.isMatrixField(cf.ApiName); }).length;
            var matrixAlreadyPlaced = false;
            controlFields.forEach(function (field, index) {
                var dataField = dataFields.filter(function (df) { return df.ApiName === field.ApiName; })[0];
                if (!dataField) {
                    return;
                }
                // If current view is not table view and those fields are special.
                if (_this.layoutType !== i11.LAYOUT_TYPE.PepperiTable &&
                    ((_this.hasMenuFloatingOnOtherField && _this.menuField && _this.menuField.ApiName === field.ApiName) ||
                        (_this.indicatorsField && _this.indicatorsField.ApiName === field.ApiName) ||
                        (_this.hasCampaignField && _this.hasCampaignField.ApiName === field.ApiName))) {
                    return;
                }
                // Remove this. (fix two matrix into one)
                if (matrixFields > 0 && PepperiFormComponent.isMatrixField(field.ApiName)) {
                    if (matrixFields > 1 && matrixAlreadyPlaced) {
                        return;
                    }
                    matrixAlreadyPlaced = true;
                    if (matrixFields > 1) {
                        self.matrixIsLast = controlFields.length >= 2 ?
                            controlFields[controlFields.length - 2].ApiName === field.ApiName : false;
                    }
                    else {
                        self.matrixIsLast = controlFields[controlFields.length - 1].ApiName === field.ApiName;
                    }
                }
                // Set type to link
                if (_this.firstFieldAsLink && index === 0) {
                    dataField.FieldType = i11.FIELD_TYPE.InternalLink;
                    dataField.Value = _this.getInternalLinkHref();
                }
                else if (dataField.Value.length > 0 &&
                    (field.FieldType === i11.FIELD_TYPE.ReferenceType || field.FieldType === i11.FIELD_TYPE.GuidReferenceType)) {
                    var transactionUrl = _this.pepperiObjectInput.Data.MainAction === '2' ? 'transactions/scope_items/' : 'transactions/cart/';
                    dataField.Value = transactionUrl + dataField.Value;
                }
                if (field.ApiName === 'ObjectMenu') {
                    var data = _this.pepperiObjectInput.Data;
                    // HACK : Until "Enabled" returns from the server, we set PepperiMenu to be
                    //        Disabled in cart on regular items and not campign items.
                    dataField.Enabled = _this.pageType !== 'cart';
                    dataField.OptionalValues = data.TransactionItemCustomMenu;
                    dataField.TransactionItemType = data.TransactionItemType;
                }
                var customField = PepperiFormComponent.convertToCustomField(field, dataField, _this.canEditObject, _this.menuDataField, _this.hasCampaignDataField, _this.indicatorsDataField, _this.objectId, _this.parentId, _this.searchCode);
                fields.push(customField);
            });
            return fields.sort(function (f1, f2) { return (f1.row > f2.row ?
                1 : f1.row < f2.row ?
                -1 : f1.col > f2.col ?
                1 : f1.col < f2.col ? -1 : 0); });
        };
        PepperiFormComponent.prototype.onValueChanged = function (valueChanged, isEditModal) {
            if (isEditModal === void 0) { isEditModal = false; }
            // This was comment by Tomer cause the address has stop working because this change.
            // let clickedUiControlField = this.pepperiObjectInput.Data.Fields.filter(f => f.ApiName === valueChanged.apiName)[0];
            // if (clickedUiControlField) {
            this.onFormValidationChanged(this.form.valid);
            var formControl = this.getFormControlById(valueChanged.apiName);
            var isValid = formControl ? formControl.valid : true;
            // const isValid = true;
            if (isValid) {
                // Set it to false to disable all fields.
                if (this.layoutType === i11.LAYOUT_TYPE.PepperiForm) {
                    this.isLocked = true;
                }
                this.lastFocusedField = valueChanged.lastFocusedField;
                var customizeObjectChangedData = new i11.PepperiObjectChangedData(this.pepperiObjectInput.Data.UID.toString(), valueChanged.apiName, valueChanged.value, valueChanged.controlType);
                this.notifyValueChanged.emit(customizeObjectChangedData);
            }
            // }
        };
        PepperiFormComponent.prototype.onChildClicked = function (childClicked) {
            this.childClicked.emit(childClicked);
        };
        PepperiFormComponent.prototype.onChildChanged = function (childChanged) {
            this.childChanged.emit(childChanged);
        };
        PepperiFormComponent.prototype.onFormValidationChanged = function (formValidationChanged) {
            if (this.layoutType === i11.LAYOUT_TYPE.PepperiForm || this.layoutType === i11.LAYOUT_TYPE.PepperiCard) {
                this.formValidationChanged.emit(formValidationChanged);
            }
        };
        PepperiFormComponent.prototype.onClick = function (fieldClickEvent) {
            var clickedUiControlField = this.pepperiObjectInput.Data.Fields.filter(function (f) { return f.ApiName === fieldClickEvent.apiName; })[0];
            // let clickedField = this.fields.filter(f => f.key === fieldClickEvent.apiName)[0];
            if (clickedUiControlField) {
                if (clickedUiControlField.FieldType === i11.FIELD_TYPE.GuidReferenceType) {
                    var customizeFieldClickedData = new i11.PepperiFieldClickedData(this.pepperiObjectInput.Data.UID.toString(), fieldClickEvent.apiName, this.pepperiObjectInput.Data.Type, fieldClickEvent.eventWhich, fieldClickEvent.value, clickedUiControlField.FieldType, fieldClickEvent.referenceObjectInternalType);
                    this.notifyFieldClicked.emit(customizeFieldClickedData);
                }
                else if (clickedUiControlField.FieldType === i11.FIELD_TYPE.ListOfObjects) {
                    var customizeFieldClickedData = new i11.PepperiFieldClickedData(this.pepperiObjectInput.Data.UID.toString(), fieldClickEvent.apiName, this.pepperiObjectInput.Data.Type, fieldClickEvent.eventWhich, fieldClickEvent.value, clickedUiControlField.FieldType, fieldClickEvent.otherData);
                    this.notifyFieldClicked.emit(customizeFieldClickedData);
                }
                else {
                    var customizeFieldClickedData = new i11.PepperiFieldClickedData(this.pepperiObjectInput.Data.UID.toString(), fieldClickEvent.apiName, this.pepperiObjectInput.Data.Type, fieldClickEvent.eventWhich, fieldClickEvent.value, clickedUiControlField.FieldType, fieldClickEvent.otherData);
                    this.notifyFieldClicked.emit(customizeFieldClickedData);
                }
            }
            else {
                // For other api names (like enter children etc).
                var customizeFieldClickedData = new i11.PepperiFieldClickedData(this.pepperiObjectInput.Data.UID.toString(), fieldClickEvent.apiName, this.pepperiObjectInput.Data.Type, fieldClickEvent.eventWhich, fieldClickEvent.value, null, fieldClickEvent.otherData);
                this.notifyFieldClicked.emit(customizeFieldClickedData);
            }
        };
        PepperiFormComponent.prototype.onMenuItemClicked = function (fieldClickEvent) {
            var clickedUiControlField = this.pepperiObjectInput.Data.Fields.filter(function (f) { return f.ApiName === fieldClickEvent.apiName; })[0];
            var dataField = this.pepperiObjectInput.Data;
            var fieldType = typeof clickedUiControlField !== 'undefined' ? clickedUiControlField.FieldType : i11.FIELD_TYPE.Package;
            var customizeFieldClickedData = new i11.PepperiFieldClickedData(dataField.UID.toString(), fieldClickEvent.apiName, dataField.Type, fieldClickEvent.eventWhich, fieldClickEvent.value, fieldType, {
                ExtraInfo: dataField.ExtraInfo,
                ItemType: dataField.TransactionItemType
            });
            this.notifyMenuItemClicked.emit(customizeFieldClickedData);
        };
        PepperiFormComponent.prototype.getInternalLinkHref = function () {
            var hrefStr = '';
            var uid = this.pepperiObjectInput.Data.UID;
            var transactionUrl = this.pepperiObjectInput.Data.MainAction === '2' ? 'transactions/scope_items/' : 'transactions/cart/';
            // let isBuyer = sessionStorage.getItem('userRole') == 'Buyer' ? true : false;
            if (this.listType === 'all_activities') {
                hrefStr = this.pepperiObjectInput.Data.Type === 0 ? transactionUrl + uid : 'activities/details/' + uid;
            }
            else if (this.listType === 'accounts') {
                hrefStr = 'accounts/home_page/' + uid;
            }
            return hrefStr;
        };
        return PepperiFormComponent;
    }());
    PepperiFormComponent.ɵfac = function PepperiFormComponent_Factory(t) { return new (t || PepperiFormComponent)(i0.ɵɵdirectiveInject(i1$1.DialogService), i0.ɵɵdirectiveInject(i11.CustomizationService), i0.ɵɵdirectiveInject(i3$2.TranslateService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i0.KeyValueDiffers)); };
    PepperiFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiFormComponent, selectors: [["pep-form"]], inputs: { isReport: "isReport", uiControlHeader: "uiControlHeader", lockEvents: "lockEvents", canEditObject: "canEditObject", pepperiObjectInput: "pepperiObjectInput", isActive: "isActive", layoutType: "layoutType", listType: "listType", objectId: "objectId", parentId: "parentId", searchCode: "searchCode", showTitle: "showTitle", firstFieldAsLink: "firstFieldAsLink", isCardView: "isCardView", checkForChanges: "checkForChanges", pageType: "pageType" }, outputs: { notifyValueChanged: "notifyValueChanged", formValidationChanged: "formValidationChanged", childClicked: "childClicked", childChanged: "childChanged", notifyFieldClicked: "notifyFieldClicked", notifyMenuItemClicked: "notifyMenuItemClicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 1, consts: [["class", "pepperi-form", 3, "formGroup", "disabled", "ngStyle", "ngClass", 4, "ngIf"], ["report", ""], [1, "pepperi-form", 3, "formGroup", "disabled", "ngStyle", "ngClass"], [3, "cols", "rowHeight", "gutterSize", 4, "ngIf"], ["class", "card-spacing", 3, "cols", "rowHeight", "gutterSize", "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "cols", "rowHeight", "gutterSize"], [3, "rowspan", "colspan", 4, "ngFor", "ngForOf"], [3, "rowspan", "colspan"], [3, "form", "layoutType", "checkForChanges", "objectId", "hasHeightLimit", "field", "showTitle", "valueChanged", "notifyChildClicked", "childChanged", "elementClicked", "notifyMenuItemClicked", "formValidationChanged", 4, "ngIf"], [3, "form", "layoutType", "checkForChanges", "objectId", "hasHeightLimit", "field", "showTitle", "valueChanged", "notifyChildClicked", "childChanged", "elementClicked", "notifyMenuItemClicked", "formValidationChanged"], [1, "card-spacing", 3, "cols", "rowHeight", "gutterSize", "ngClass"], [3, "rowspan", "colspan", "ngStyle", 4, "ngFor", "ngForOf"], [3, "rowspan", "colspan", "ngStyle"], [3, "form", "layoutType", "isActive", "checkForChanges", "objectId", "hasHeightLimit", "field", "showTitle", "valueChanged", "notifyChildClicked", "childChanged", "elementClicked", "notifyMenuItemClicked", 4, "ngIf"], [3, "form", "layoutType", "isActive", "checkForChanges", "objectId", "hasHeightLimit", "field", "showTitle", "valueChanged", "notifyChildClicked", "childChanged", "elementClicked", "notifyMenuItemClicked"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["reportBlock", ""], ["notReportBlock", ""], [4, "ngTemplateOutlet"], ["class", "pull-left flip table-cell ", "style", "height: 100%", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "pull-left", "flip", "table-cell", 2, "height", "100%", 3, "ngClass", "ngStyle"], [3, "checkForChanges", "objectId", "field", "form", "layoutType", "showTitle", "isActive", "valueChanged", "elementClicked", "notifyMenuItemClicked", 4, "ngIf"], [3, "checkForChanges", "objectId", "field", "form", "layoutType", "showTitle", "isActive", "valueChanged", "elementClicked", "notifyMenuItemClicked"], ["class", "pull-left flip", "style", "width:100%;", 4, "ngFor", "ngForOf"], [1, "pull-left", "flip", 2, "width", "100%"], [3, "checkForChanges", "objectId", "field", "form", "layoutType", "showTitle", "isActive", "valueChanged", "elementClicked", 4, "ngIf"], [3, "checkForChanges", "objectId", "field", "form", "layoutType", "showTitle", "isActive", "valueChanged", "elementClicked"], ["class", "pull-left flip pepperi-report-fields", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [1, "pull-left", "flip", "pepperi-report-fields", 3, "ngStyle", "ngClass"], [3, "ngSwitch"], [3, "objectId", "form", "key", "src", "srcLarge", "options", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "layoutType", "elementClicked", 4, "ngSwitchCase"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "layoutType", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "additionalValue", "layoutType", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "type", "disabled", "readonly", "xAlignment", "layoutType", "elementClicked", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "layoutType", 4, "ngSwitchCase"], [3, "id", "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "layoutType", "valueChanged", "elementClicked", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "objectId", "form", "key", "src", "srcLarge", "options", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "layoutType", "elementClicked"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "layoutType"], [3, "form", "key", "value", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "additionalValue", "layoutType"], [3, "form", "key", "value", "formattedValue", "label", "type", "disabled", "readonly", "xAlignment", "layoutType", "elementClicked"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "layoutType"], [3, "id", "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "layoutType", "valueChanged", "elementClicked"], ["notEmptyBlock", ""], ["emptyBlock", ""], ["linkBlock", ""], ["notLinkBlock", ""], ["class", "color-link body-sm pepperi-report-input readonly", "target", "_blank", 3, "id", "title", "href", 4, "ngIf"], ["target", "_blank", 1, "color-link", "body-sm", "pepperi-report-input", "readonly", 3, "id", "title", "href"], [1, "body-sm", "pepperi-report-input", "readonly", 3, "id", "title", "ngStyle"]], template: function PepperiFormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PepperiFormComponent_fieldset_0_Template, 5, 13, "fieldset", 0);
                i0.ɵɵtemplate(1, PepperiFormComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.form);
            }
        }, directives: [i2.NgIf, i3.NgControlStatusGroup, i3.FormGroupDirective, i2.NgStyle, i2.NgClass, i5.MatGridList, i2.NgForOf, i5.MatGridTile, PepperiFieldGeneratorComponent, i2.NgTemplateOutlet, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i8.PepperiImageComponent, i15.PepperiSignatureComponent, i5$1.PepperiCheckboxComponent, i9$1.PepperiInternalButtonComponent, i16.PepperiTextareaComponent, i11$1.PepperiQuantitySelectorComponent], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiFormComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-form',
                        templateUrl: './form.component.html',
                        styleUrls: ['./form.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i1$1.DialogService }, { type: i11.CustomizationService }, { type: i3$2.TranslateService }, { type: i3.FormBuilder }, { type: i0.KeyValueDiffers }]; }, { isReport: [{
                    type: i0.Input
                }], uiControlHeader: [{
                    type: i0.Input
                }], lockEvents: [{
                    type: i0.Input
                }], canEditObject: [{
                    type: i0.Input
                }], pepperiObjectInput: [{
                    type: i0.Input
                }], isActive: [{
                    type: i0.Input
                }], layoutType: [{
                    type: i0.Input
                }], listType: [{
                    type: i0.Input
                }], objectId: [{
                    type: i0.Input
                }], parentId: [{
                    type: i0.Input
                }], searchCode: [{
                    type: i0.Input
                }], showTitle: [{
                    type: i0.Input
                }], firstFieldAsLink: [{
                    type: i0.Input
                }], isCardView: [{
                    type: i0.Input
                }], checkForChanges: [{
                    type: i0.Input
                }], pageType: [{
                    type: i0.Input
                }], notifyValueChanged: [{
                    type: i0.Output
                }], formValidationChanged: [{
                    type: i0.Output
                }], childClicked: [{
                    type: i0.Output
                }], childChanged: [{
                    type: i0.Output
                }], notifyFieldClicked: [{
                    type: i0.Output
                }], notifyMenuItemClicked: [{
                    type: i0.Output
                }] });
    })();

    var pepperiComponentsModules = [
        i3$1.PepperiAddressModule,
        i4.PepperiAttachmentModule,
        i5$1.PepperiCheckboxModule,
        i6$1.PepperiDateModule,
        i8.PepperiImageModule,
        i7$1.PepperiImagesFilmstripModule,
        i9$1.PepperiInternalButtonModule,
        // PepperiInternalPageModule,
        i10$1.PepperiMenuModule,
        i11$1.PepperiQuantitySelectorModule,
        i12.PepperiRichHtmlTextareaModule,
        i13.PepperiSelectModule,
        i14.PepperiSeparatorModule,
        i15.PepperiSignatureModule,
        i16.PepperiTextareaModule,
        i17.PepperiTextboxModule,
    ];
    var PepperiFormModule = /** @class */ (function () {
        function PepperiFormModule(pepperiIconRegistry) {
            this.pepperiIconRegistry = pepperiIconRegistry;
            this.pepperiIconRegistry.registerIcons([
                i1.pepperiIconIndicatorDotPlaceholder
            ]);
        }
        return PepperiFormModule;
    }());
    PepperiFormModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiFormModule });
    PepperiFormModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiFormModule_Factory(t) { return new (t || PepperiFormModule)(i0.ɵɵinject(i1.PepperiIconRegistry)); }, imports: [[
                i2.CommonModule,
                i3.ReactiveFormsModule,
                i3.FormsModule,
                // Material modules,
                i6.MatCommonModule,
                i5.MatGridListModule,
                i7.MatIconModule,
                i9.MatMenuModule,
                // External modules
                i10.SignaturePadModule,
                // Pepperi modules
                i11.PepperiModule,
                i1$1.PepperiDialogModule,
                i1.PepperiIconModule,
                pepperiComponentsModules,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiFormModule, { declarations: [PepperiFormComponent,
                PepperiFieldGeneratorComponent,
                PepperiIndicatorsComponent,
                PepperiInternalPageComponent,
                PepperiInternalListComponent], imports: [i2.CommonModule,
                i3.ReactiveFormsModule,
                i3.FormsModule,
                // Material modules,
                i6.MatCommonModule,
                i5.MatGridListModule,
                i7.MatIconModule,
                i9.MatMenuModule,
                // External modules
                i10.SignaturePadModule,
                // Pepperi modules
                i11.PepperiModule,
                i1$1.PepperiDialogModule,
                i1.PepperiIconModule, i3$1.PepperiAddressModule,
                i4.PepperiAttachmentModule,
                i5$1.PepperiCheckboxModule,
                i6$1.PepperiDateModule,
                i8.PepperiImageModule,
                i7$1.PepperiImagesFilmstripModule,
                i9$1.PepperiInternalButtonModule,
                // PepperiInternalPageModule,
                i10$1.PepperiMenuModule,
                i11$1.PepperiQuantitySelectorModule,
                i12.PepperiRichHtmlTextareaModule,
                i13.PepperiSelectModule,
                i14.PepperiSeparatorModule,
                i15.PepperiSignatureModule,
                i16.PepperiTextareaModule,
                i17.PepperiTextboxModule], exports: [PepperiFormComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiFormModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CommonModule,
                            i3.ReactiveFormsModule,
                            i3.FormsModule,
                            // Material modules,
                            i6.MatCommonModule,
                            i5.MatGridListModule,
                            i7.MatIconModule,
                            i9.MatMenuModule,
                            // External modules
                            i10.SignaturePadModule,
                            // Pepperi modules
                            i11.PepperiModule,
                            i1$1.PepperiDialogModule,
                            i1.PepperiIconModule,
                            pepperiComponentsModules,
                        ],
                        exports: [PepperiFormComponent],
                        declarations: [
                            PepperiFormComponent,
                            PepperiFieldGeneratorComponent,
                            PepperiIndicatorsComponent,
                            PepperiInternalPageComponent,
                            PepperiInternalListComponent
                        ],
                    }]
            }], function () { return [{ type: i1.PepperiIconRegistry }]; }, null);
    })();
    i0.ɵɵsetComponentScope(PepperiInternalListComponent, [i2.NgClass, i2.NgComponentOutlet, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgStyle, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgPlural, i2.NgPluralCase, i3.ɵangular_packages_forms_forms_y, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i3.DefaultValueAccessor, i3.NumberValueAccessor, i3.RangeValueAccessor, i3.CheckboxControlValueAccessor, i3.SelectControlValueAccessor, i3.SelectMultipleControlValueAccessor, i3.RadioControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.MinLengthValidator, i3.MaxLengthValidator, i3.PatternValidator, i3.CheckboxRequiredValidator, i3.EmailValidator, i3.FormControlDirective, i3.FormGroupDirective, i3.FormControlName, i3.FormGroupName, i3.FormArrayName, i3.NgModel, i3.NgModelGroup, i3.NgForm, i4$1.Dir, i5.MatGridList, i5.MatGridTile, i5.MatGridTileText, i6.MatLine, i5.MatGridTileHeaderCssMatStyler, i5.MatGridTileFooterCssMatStyler, i5.MatGridAvatarCssMatStyler, i7.MatIcon, i8$1.CdkScrollable, i9._MatMenu, i9.MatMenuItem, i9.MatMenuTrigger, i9.MatMenuContent, i10.SignaturePad, i11.ButtonBlurDirective, i11.MenuBlurDirective, i11.RtlClassDirective, i11.RtlDirectionDirective, i11.AttachDirective, i11.TargetDirective, i3$2.TranslateDirective, i1.PepperiIconComponent, i3$1.PepperiAddressComponent, i4.PepperiAttachmentComponent, i5$1.PepperiCheckboxComponent, i6$1.PepperiDateComponent, i8.PepperiImageComponent, i7$1.PepperiImagesFilmstripComponent, i9$1.PepperiInternalButtonComponent, i10$1.PepperiMenuComponent, i11$1.PepperiQuantitySelectorComponent, i12.PepperiRichHtmlTextareaComponent, i13.PepperiSelectComponent, i14.PepperiSeparatorComponent, i15.PepperiSignatureComponent, i16.PepperiTextareaComponent, i17.PepperiTextboxComponent, PepperiFormComponent,
        PepperiFieldGeneratorComponent,
        PepperiIndicatorsComponent,
        PepperiInternalPageComponent,
        PepperiInternalListComponent], [i2.AsyncPipe, i2.UpperCasePipe, i2.LowerCasePipe, i2.JsonPipe, i2.SlicePipe, i2.DecimalPipe, i2.PercentPipe, i2.TitleCasePipe, i2.CurrencyPipe, i2.DatePipe, i2.I18nPluralPipe, i2.I18nSelectPipe, i2.KeyValuePipe, i11.CapitalizePipe, i11.EncodePipe, i11.EscapePipe, i11.ReplaceLineBreaks, i11.DateFormatter, i11.DateStringFormatter, i11.SafeHtmlPipe, i11.SafePipe, i11.SplitUppercase, i11.ToNumber, i3$2.TranslatePipe]);

    /*
     * Public API Surface of ngx-lib/form
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiFormComponent = PepperiFormComponent;
    exports.PepperiFormModule = PepperiFormModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-form.umd.js.map
