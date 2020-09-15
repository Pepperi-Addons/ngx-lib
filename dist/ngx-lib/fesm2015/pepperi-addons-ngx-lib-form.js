import { ɵɵelementContainerStart, ɵɵelement, ɵɵelementContainerEnd, ɵɵadvance, ɵɵproperty, ɵɵdefineComponent, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵpureFunction1, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, ɵɵinject, ɵɵdefineInjectable, Injectable, ɵɵtext, ɵɵnextContext, ɵɵtextInterpolate, ɵɵclassMapInterpolate1, ɵɵpropertyInterpolate, ɵɵtextInterpolate1, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵpureFunction3, ɵɵelementContainer, ɵɵreference, ɵɵpureFunction2, ɵɵclassMap, EventEmitter, ɵɵdirectiveInject, ElementRef, ChangeDetectorRef, Renderer2, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵresolveWindow, ɵɵNgOnChangesFeature, ɵɵtemplateRefExtractor, Output, ViewChild, ɵɵpipe, ɵɵpipeBind1, ViewContainerRef, ɵɵProvidersFeature, ViewEncapsulation, ɵɵsanitizeUrl, KeyValueDiffers, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgTemplateOutlet, NgSwitchDefault, CommonModule, NgComponentOutlet, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { FormBuilder, NgControlStatusGroup, FormGroupDirective, Validators, ReactiveFormsModule, FormsModule, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, FormControlDirective, FormControlName, FormGroupName, FormArrayName, NgModel, NgModelGroup, NgForm } from '@angular/forms';
import { MatCommonModule, MatLine } from '@angular/material/core';
import { MatGridList, MatGridTile, MatGridListModule, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuTrigger, _MatMenu, MatMenuItem, MatMenuModule, MatMenuContent } from '@angular/material/menu';
import { SignaturePadModule, SignaturePad } from 'angular2-signaturepad';
import { LAYOUT_TYPE, HttpService, FIELD_TYPE, LayoutService, ObjectSingleData, CustomizationService, PepperiTextboxField, PepperiSelectField, PepperiMenuField, PepperiQuantitySelectorField, PepperiSeparatorField, PepperiButtonField, PepperiCheckboxField, PepperiDateField, PepperiRichHtmlTextareaField, PepperiTextareaField, PepperiImagesField, PepperiImageField, PepperiSignatureField, PepperiAttachmentField, PepperiInternalPageField, PepperiIndicatorsField, PepperiAddressField, PepperiPlaceholderField, PepperiObjectChangedData, PepperiFieldClickedData, PepperiModule, ButtonBlurDirective, MenuBlurDirective, RtlClassDirective, RtlDirectionDirective, AttachDirective, TargetDirective, CapitalizePipe, EncodePipe, EscapePipe, ReplaceLineBreaks, DateFormatter, DateStringFormatter, SafeHtmlPipe, SafePipe, SplitUppercase, ToNumber } from '@pepperi-addons/ngx-lib';
import { PepperiIconComponent, pepperiIconIndicatorDotPlaceholder, PepperiIconRegistry, PepperiIconModule } from '@pepperi-addons/ngx-lib/icon';
import { DialogData, DialogDataType, DialogService, PepperiDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { PepperiAddressComponent, PepperiAddressModule } from '@pepperi-addons/ngx-lib/address';
import { PepperiAttachmentComponent, PepperiAttachmentModule } from '@pepperi-addons/ngx-lib/attachment';
import { PepperiCheckboxComponent, PepperiCheckboxModule } from '@pepperi-addons/ngx-lib/checkbox';
import { PepperiDateComponent, PepperiDateModule } from '@pepperi-addons/ngx-lib/date';
import { PepperiImageComponent, PepperiImageModule } from '@pepperi-addons/ngx-lib/image';
import { PepperiImagesFilmstripComponent, PepperiImagesFilmstripModule } from '@pepperi-addons/ngx-lib/images-filmstrip';
import { PepperiInternalButtonComponent, PepperiInternalButtonModule } from '@pepperi-addons/ngx-lib/internal-button';
import { PepperiMenuComponent, PepperiMenuModule } from '@pepperi-addons/ngx-lib/menu';
import { PepperiQuantitySelectorComponent, PepperiQuantitySelectorModule } from '@pepperi-addons/ngx-lib/quantity-selector';
import { PepperiRichHtmlTextareaComponent, PepperiRichHtmlTextareaModule } from '@pepperi-addons/ngx-lib/rich-html-textarea';
import { PepperiSelectComponent, PepperiSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepperiSeparatorComponent, PepperiSeparatorModule } from '@pepperi-addons/ngx-lib/separator';
import { PepperiSignatureComponent, PepperiSignatureModule } from '@pepperi-addons/ngx-lib/signature';
import { PepperiTextareaComponent, PepperiTextareaModule } from '@pepperi-addons/ngx-lib/textarea';
import { PepperiTextboxComponent, PepperiTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { TranslatePipe, TranslateService, TranslateDirective } from '@ngx-translate/core';
import { delay } from 'rxjs/operators';
import * as $$1 from 'jquery';
import { Dir } from '@angular/cdk/bidi';
import { CdkScrollable } from '@angular/cdk/scrolling';

function PepperiIndicatorsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "pep-icon", 3);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const value_r2 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("fill", value_r2);
} }
function PepperiIndicatorsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "pep-icon", 4);
    ɵɵelementContainerEnd();
} }
const _c0 = function (a0) { return { "is-inside-table": a0 }; };
class PepperiIndicatorsComponent {
    constructor() {
        this.controlType = 'indicators';
        this.layoutType = LAYOUT_TYPE.PepperiTable;
        this.LAYOUT_TYPE = LAYOUT_TYPE;
    }
}
PepperiIndicatorsComponent.ɵfac = function PepperiIndicatorsComponent_Factory(t) { return new (t || PepperiIndicatorsComponent)(); };
PepperiIndicatorsComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiIndicatorsComponent, selectors: [["pep-indicators"]], inputs: { key: "key", value: "value", layoutType: "layoutType" }, decls: 3, vars: 5, consts: [[1, "indicators-container", 3, "ngClass"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["name", "indicator_dot_placeholder", 1, "pull-left", "flip", 3, "fill"], ["name", "indicator_dot_placeholder", 1, "pull-left", "flip"]], template: function PepperiIndicatorsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, PepperiIndicatorsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵɵtemplate(2, PepperiIndicatorsComponent_ng_container_2_Template, 2, 0, "ng-container", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c0, ctx.layoutType === ctx.LAYOUT_TYPE.PepperiTable));
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.value == null ? null : ctx.value.split(";"));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.key != "ItemIndicatorsWithoutCampaign" && (ctx.value == null ? null : ctx.value.split(";").length) < 4);
    } }, directives: [NgClass, NgForOf, NgIf, PepperiIconComponent], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid;height:inherit}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center}.indicators-container[_ngcontent-%COMP%]{height:2.5rem}.indicators-container[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]{height:1rem;margin:.05rem;width:1rem}.indicators-container.is-inside-table[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiIndicatorsComponent, [{
        type: Component,
        args: [{
                selector: 'pep-indicators',
                templateUrl: './indicators.component.html',
                styleUrls: ['./indicators.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { key: [{
            type: Input
        }], value: [{
            type: Input
        }], layoutType: [{
            type: Input
        }] }); })();

class PepperiInternalPageService {
    constructor(httpService) {
        this.httpService = httpService;
        this.parentId = '0';
        this.additionalApiName = '';
        this.transactionUrl = 'Service1.svc/v1/OrderCenter/Transaction/';
    }
    getBaseParentUrl() {
        const url = `${this.transactionUrl}${this.objectId}/ParentLine/${this.parentId}/`;
        return url;
    }
    getChildren(callbackFunc) {
        const body = JSON.stringify({
            TransactionUID: this.objectId,
            SearchCode: this.searchCode,
            AdditionalApiName: this.additionalApiName,
            ParentTransactionLineID: this.parentId,
            ViewType: this.viewType
        });
        // Set the additional api name with view type string.
        const moreParams = this.additionalApiName.length > 0 ?
            `${this.additionalApiName}/${this.viewType}` :
            `''/${this.viewType}`;
        const url = `${this.getBaseParentUrl()}Items/${moreParams}`;
        this.httpService.postWapiApiCall(url, body).subscribe((res) => { callbackFunc(res); }, (error) => { }, () => { });
    }
    initDetails(objectId, parentId, searchCode, callbackFunc) {
        if (!objectId || !parentId) {
            return;
        }
        this.objectId = objectId;
        this.parentId = parentId;
        this.searchCode = searchCode;
        this.httpService.getWapiApiCall(`${this.getBaseParentUrl()}ViewTypes`).subscribe((res) => { callbackFunc(res); }, (error) => { }, () => { });
    }
    changeChildrenViewType(viewType, callbackFunc) {
        this.viewType = viewType;
        this.getChildren(callbackFunc);
    }
    changeAdditionalApiName(additionalApiName, callbackFunc) {
        this.additionalApiName = additionalApiName;
        this.getChildren(callbackFunc);
    }
    childPlusClick(itemId, fieldApiName, callbackFunc) {
        const body = JSON.stringify({
            TransactionUID: this.objectId,
            SearchCode: this.searchCode,
            ParentTransactionLineID: this.parentId,
            TransactionLineUID: itemId,
            FieldApiName: fieldApiName,
            ViewType: this.viewType
        });
        this.httpService.postWapiApiCall(`${this.getBaseParentUrl()}IncrementValue`, body).subscribe((res) => { callbackFunc(res); }, (error) => { }, () => { });
    }
    childMinusClick(itemId, fieldApiName, callbackFunc) {
        const body = JSON.stringify({
            TransactionUID: this.objectId,
            SearchCode: this.searchCode,
            ParentTransactionLineID: this.parentId,
            TransactionLineUID: itemId,
            FieldApiName: fieldApiName,
            ViewType: this.viewType
        });
        this.httpService.postWapiApiCall(`${this.getBaseParentUrl()}DecrementValue`, body).subscribe((res) => { callbackFunc(res); }, (error) => { }, () => { });
    }
    childValueChanged(itemId, fieldApiName, value, callbackFunc) {
        const body = JSON.stringify({
            TransactionUID: this.objectId,
            SearchCode: this.searchCode,
            ParentTransactionLineID: this.parentId,
            TransactionLineUID: itemId,
            FieldApiName: fieldApiName,
            FieldValue: value,
            ViewType: this.viewType
        });
        this.httpService.postWapiApiCall(`${this.getBaseParentUrl()}SetFieldValue`, body).subscribe((res) => { callbackFunc(res); }, (error) => { }, () => { });
    }
}
PepperiInternalPageService.ɵfac = function PepperiInternalPageService_Factory(t) { return new (t || PepperiInternalPageService)(ɵɵinject(HttpService)); };
PepperiInternalPageService.ɵprov = ɵɵdefineInjectable({ token: PepperiInternalPageService, factory: PepperiInternalPageService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiInternalPageService, [{
        type: Injectable
    }], function () { return [{ type: HttpService }]; }, null); })();

const _c0$1 = ["noVirtualScrollCont"];
const _c1 = ["tableHeader"];
const _c2 = ["selectAllCB"];
function PepperiInternalListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.noDataFoundMsg);
} }
function PepperiInternalListComponent_ng_container_1_div_1_div_4_label_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "label", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = ɵɵnextContext().$implicit;
    ɵɵclassMapInterpolate1("header-label body-sm pull-left flip text-align-", field_r12.Layout.XAlignment, "");
    ɵɵpropertyInterpolate("id", field_r12.ApiName);
    ɵɵpropertyInterpolate("title", field_r12.Title);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", field_r12.Title, " ");
} }
function PepperiInternalListComponent_ng_container_1_div_1_div_4_label_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "label", 17);
    ɵɵtext(1, "\u00A0");
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = ɵɵnextContext().$implicit;
    ɵɵpropertyInterpolate("id", field_r12.ApiName);
} }
function PepperiInternalListComponent_ng_container_1_div_1_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18);
    ɵɵlistener("mousedown", function PepperiInternalListComponent_ng_container_1_div_1_div_4_div_3_Template_div_mousedown_0_listener($event) { ɵɵrestoreView(_r20); const field_r12 = ɵɵnextContext().$implicit; const ctx_r19 = ɵɵnextContext(3); return ctx_r19.onListResizeStart($event, field_r12.ApiName); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵelement(2, "pep-icon", 19);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
const _c3 = function (a0) { return { width: a0 }; };
const _c4 = function (a0, a1, a2) { return { "is-resizing": a0, "is-first": a1, "is-last": a2 }; };
function PepperiInternalListComponent_ng_container_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtemplate(1, PepperiInternalListComponent_ng_container_1_div_1_div_4_label_1_Template, 2, 6, "label", 13);
    ɵɵtemplate(2, PepperiInternalListComponent_ng_container_1_div_1_div_4_label_2_Template, 2, 1, "label", 14);
    ɵɵtemplate(3, PepperiInternalListComponent_ng_container_1_div_1_div_4_div_3_Template, 3, 0, "div", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = ctx.$implicit;
    const j_r13 = ctx.index;
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c3, field_r12.calcTitleColumnWidthString))("ngClass", ɵɵpureFunction3(7, _c4, field_r12.ApiName === ctx_r11.pressedColumn, j_r13 === 0, j_r13 === (ctx_r11.uiControl == null ? null : ctx_r11.uiControl.ControlFields == null ? null : ctx_r11.uiControl.ControlFields.length) - 1));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r12.Title != "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r12.Title == "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r11.supportResizing);
} }
const _c5 = function (a0) { return { "below-header-and-top-bar": a0 }; };
function PepperiInternalListComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8, 9);
    ɵɵlistener("mouseup", function PepperiInternalListComponent_ng_container_1_div_1_Template_div_mouseup_0_listener($event) { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(2); return ctx_r22.onListResizeEnd($event); })("mouseenter", function PepperiInternalListComponent_ng_container_1_div_1_Template_div_mouseenter_0_listener($event) { ɵɵrestoreView(_r23); const ctx_r24 = ɵɵnextContext(2); return ctx_r24.onListHeaderMouseEnter($event); })("mouseleave", function PepperiInternalListComponent_ng_container_1_div_1_Template_div_mouseleave_0_listener($event) { ɵɵrestoreView(_r23); const ctx_r25 = ɵɵnextContext(2); return ctx_r25.onListHeaderMouseLeave($event); })("mousemove", function PepperiInternalListComponent_ng_container_1_div_1_Template_div_mousemove_0_listener($event) { ɵɵrestoreView(_r23); const ctx_r26 = ɵɵnextContext(2); return ctx_r26.onListResize($event); });
    ɵɵelementStart(2, "fieldset", 10);
    ɵɵelementStart(3, "fieldset");
    ɵɵtemplate(4, PepperiInternalListComponent_ng_container_1_div_1_div_4_Template, 4, 11, "div", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c5, ctx_r6.parentScroll == null));
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx_r6.uiControl == null ? null : ctx_r6.uiControl.ControlFields);
} }
function PepperiInternalListComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiInternalListComponent_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c6 = function (a0, a1) { return { "table-body": a0, "cards-body": a1 }; };
function PepperiInternalListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiInternalListComponent_ng_container_1_div_1_Template, 5, 4, "div", 4);
    ɵɵelementStart(2, "div", 5, 6);
    ɵɵtemplate(4, PepperiInternalListComponent_ng_container_1_ng_container_4_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
    ɵɵtemplate(5, PepperiInternalListComponent_ng_container_1_ng_container_5_Template, 1, 0, "ng-container", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r2 = ɵɵreference(3);
    const _r4 = ɵɵreference(5);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.isTable);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction2(4, _c6, ctx_r1.isTable, !ctx_r1.isTable));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r4);
} }
const _c7 = function (a0) { return { highlighted: a0 }; };
const _c8 = function (a0, a1) { return { height: a0, visibility: a1 }; };
const _c9 = function (a0) { return { "background-color": a0 }; };
function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 21);
    ɵɵlistener("mouseenter", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_div_mouseenter_1_listener($event) { ɵɵrestoreView(_r34); const pepperiObjectInput_r28 = ɵɵnextContext().$implicit; const ctx_r33 = ɵɵnextContext(2); return ctx_r33.onTableRowMouseEnter($event, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type); })("mouseleave", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_div_mouseleave_1_listener($event) { ɵɵrestoreView(_r34); const pepperiObjectInput_r28 = ɵɵnextContext().$implicit; const ctx_r36 = ɵɵnextContext(2); return ctx_r36.onTableRowMouseLeave($event, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type); });
    ɵɵelementStart(2, "fieldset", 22);
    ɵɵelementStart(3, "pep-form", 23);
    ɵɵlistener("notifyValueChanged", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyValueChanged_3_listener($event) { ɵɵrestoreView(_r34); const ctx_r38 = ɵɵnextContext(3); return ctx_r38.onValueChanged($event); })("notifyFieldClicked", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyFieldClicked_3_listener($event) { ɵɵrestoreView(_r34); const ctx_r39 = ɵɵnextContext(3); return ctx_r39.onCustomizeFieldClick($event); })("notifyMenuItemClicked", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyMenuItemClicked_3_listener($event) { ɵɵrestoreView(_r34); const ctx_r40 = ɵɵnextContext(3); return ctx_r40.onCustomizeFieldMenuClicked($event); })("click", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_click_3_listener($event) { ɵɵrestoreView(_r34); const pepperiObjectInput_r28 = ɵɵnextContext().$implicit; const ctx_r41 = ɵɵnextContext(2); return ctx_r41.itemClicked($event, pepperiObjectInput_r28); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const pepperiObjectInput_r28 = ɵɵnextContext().$implicit;
    const ctx_r31 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(16, _c7, (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r31.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r31.selectedItemId))("ngStyle", ɵɵpureFunction2(18, _c8, ctx_r31.calculatedObjectHeight, ctx_r31.showItems || pepperiObjectInput_r28 ? "visible" : "hidden"));
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(21, _c9, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.BackgroundColor));
    ɵɵadvance(1);
    ɵɵproperty("checkForChanges", ctx_r31.checkForChanges)("uiControlHeader", ctx_r31.uiControl)("firstFieldAsLink", ctx_r31.firstFieldAsLink)("pepperiObjectInput", pepperiObjectInput_r28)("canEditObject", !ctx_r31.disabled && (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.IsEditable))("objectId", ctx_r31.objectId)("parentId", ctx_r31.parentId)("searchCode", ctx_r31.searchCode)("lockEvents", ctx_r31.disableSelectionItems)("layoutType", ctx_r31.LAYOUT_TYPE.PepperiTable)("listType", ctx_r31.listType)("isActive", ((pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r31.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r31.selectedItemId || (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r31.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r31.hoveredItemId) && !ctx_r31.isTouchDevice)("pageType", ctx_r31.pageType);
} }
const _c10 = function (a0, a1) { return { highlighted: a0, cardView: a1 }; };
function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 24);
    ɵɵlistener("mouseenter", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_div_mouseenter_1_listener($event) { ɵɵrestoreView(_r45); const pepperiObjectInput_r28 = ɵɵnextContext().$implicit; const ctx_r44 = ɵɵnextContext(2); return ctx_r44.onCardMouseEnter($event, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type); })("mouseleave", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_div_mouseleave_1_listener($event) { ɵɵrestoreView(_r45); const pepperiObjectInput_r28 = ɵɵnextContext().$implicit; const ctx_r47 = ɵɵnextContext(2); return ctx_r47.onCardMouseLeave($event, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type); });
    ɵɵelementStart(2, "pep-form", 25);
    ɵɵlistener("notifyValueChanged", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyValueChanged_2_listener($event) { ɵɵrestoreView(_r45); const ctx_r49 = ɵɵnextContext(3); return ctx_r49.onValueChanged($event); })("notifyFieldClicked", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyFieldClicked_2_listener($event) { ɵɵrestoreView(_r45); const ctx_r50 = ɵɵnextContext(3); return ctx_r50.onCustomizeFieldClick($event); })("notifyMenuItemClicked", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyMenuItemClicked_2_listener($event) { ɵɵrestoreView(_r45); const ctx_r51 = ɵɵnextContext(3); return ctx_r51.onCustomizeFieldMenuClicked($event); })("click", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_click_2_listener($event) { ɵɵrestoreView(_r45); const pepperiObjectInput_r28 = ɵɵnextContext().$implicit; const ctx_r52 = ɵɵnextContext(2); return ctx_r52.itemClicked($event, pepperiObjectInput_r28); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const pepperiObjectInput_r28 = ɵɵnextContext().$implicit;
    const ctx_r32 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r32.itemClass);
    ɵɵproperty("ngClass", ɵɵpureFunction2(18, _c10, (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r32.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r32.selectedItemId, ctx_r32.isCardView))("ngStyle", ɵɵpureFunction2(21, _c8, ctx_r32.calculatedObjectHeight, ctx_r32.showItems || pepperiObjectInput_r28 ? "visible" : "hidden"));
    ɵɵadvance(1);
    ɵɵproperty("firstFieldAsLink", ctx_r32.isCardView ? ctx_r32.firstFieldAsLink : false)("checkForChanges", ctx_r32.checkForChanges)("uiControlHeader", ctx_r32.uiControl)("pepperiObjectInput", pepperiObjectInput_r28)("isCardView", ctx_r32.isCardView)("canEditObject", !ctx_r32.disabled && (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.IsEditable))("objectId", ctx_r32.objectId)("parentId", ctx_r32.parentId)("searchCode", ctx_r32.searchCode)("lockEvents", ctx_r32.disableSelectionItems)("layoutType", ctx_r32.getThumbnailsLayout())("listType", ctx_r32.listType)("isActive", ((pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r32.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r32.selectedItemId || (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r32.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r32.hoveredItemId) && !ctx_r32.isTouchDevice)("pageType", ctx_r32.pageType);
} }
function PepperiInternalListComponent_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template, 4, 23, "ng-container", 0);
    ɵɵtemplate(2, PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template, 3, 24, "ng-container", 0);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r27 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r27.isTable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r27.isTable);
} }
function PepperiInternalListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiInternalListComponent_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 20);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r3.scrollItems)("ngForTrackBy", ctx_r3.trackByFunc);
} }
function PepperiInternalListComponent_ng_template_4_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 29);
    ɵɵelementStart(1, "label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r57 = ctx.$implicit;
    const j_r58 = ctx.index;
    const ctx_r56 = ɵɵnextContext(3);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c3, field_r57.calcTitleColumnWidthString));
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("total-label body-sm text-align-", field_r57.Layout.XAlignment, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r56.totalsRow[j_r58], " ");
} }
function PepperiInternalListComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵelementStart(1, "fieldset", 10);
    ɵɵtemplate(2, PepperiInternalListComponent_ng_template_4_div_0_div_2_Template, 3, 7, "div", 28);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r55 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r55.uiControl == null ? null : ctx_r55.uiControl.ControlFields);
} }
function PepperiInternalListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiInternalListComponent_ng_template_4_div_0_Template, 3, 1, "div", 26);
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngIf", (ctx_r5.totalsRow == null ? null : ctx_r5.totalsRow.length) > 0 && ctx_r5.totalsRow.length <= (ctx_r5.uiControl == null ? null : ctx_r5.uiControl.ControlFields.length));
} }
var VIEW_TYPE;
(function (VIEW_TYPE) {
    VIEW_TYPE[VIEW_TYPE["Card"] = 0] = "Card";
    VIEW_TYPE[VIEW_TYPE["Line"] = 1] = "Line";
    VIEW_TYPE[VIEW_TYPE["Table"] = 2] = "Table";
})(VIEW_TYPE || (VIEW_TYPE = {}));
class PepperiInternalListComponent {
    constructor(element, layoutService, cd, renderer) {
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
        this.notifyThumbnailClicked = new EventEmitter();
        this.notifyFieldClicked = new EventEmitter();
        this.notifyMenuItemClicked = new EventEmitter();
        this.notifyValueChanged = new EventEmitter();
        this.notifySelectAllSingleActionClicked = new EventEmitter();
        this.notifySingleActionClicked = new EventEmitter();
        this.notifyListLoad = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
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
            .pipe(delay(0))
            .subscribe(size => {
            this.screenSize = size;
        });
        this.nativeWindow = window;
    }
    ngOnInit() {
        this.containerWidth = 0;
    }
    ngOnChanges(changes) {
        if (this.containerWidth <= 0) {
            this.setContainerWidth();
        }
    }
    ngOnDestroy() {
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
    }
    setContainerWidth() {
        const selectionCheckBoxWidth = 0;
        const rowHeight = 40; // the table row height (2.5rem * 16font-size).
        const style = window.getComputedStyle(this.element.nativeElement.parentElement);
        // The container-fluid class padding left + right + border
        const containerFluidSpacing = parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);
        const parentContainer = this.element.nativeElement.parentElement.parentElement > 0 ?
            this.element.nativeElement.parentElement.parentElement : this.element.nativeElement.parentElement;
        // Calculate if vertical scroll should appear, if so set the scroll width. (this.totalRows + 1) + 1 is for the header row.
        const scrollWidth = parentContainer.clientHeight < rowHeight * (this.totalRows + 1) ? 18 : 0; // 18 is the default scroll width.
        // The selectionCheckBoxWidth width + containerFluidSpacing + scrollWidth.
        const rowHeaderWidthToSub = containerFluidSpacing + selectionCheckBoxWidth + scrollWidth;
        this.containerWidth = parentContainer.offsetWidth - rowHeaderWidthToSub;
    }
    removeTable() {
        this.cleanItems();
        this.uiControl = null;
    }
    toggleItems(isVisible) {
        this.showItems = isVisible;
        this.lockEvents = !isVisible;
    }
    updateScrollItems(startIndex, endIndex, loadInChunks = true) {
        this.scrollItems = this.items.slice(startIndex, endIndex);
    }
    getUniqItemId(itemId, itemType = '') {
        return itemId + this.SEPARATOR + itemType;
    }
    setLayout() {
        const self = this;
        if (this.totalRows === 0 ||
            !this.uiControl ||
            !this.uiControl.ControlFields ||
            this.uiControl.ControlFields.length === 0) {
            return;
        }
        this.uiControl.ControlFields.forEach((cf) => {
            if (cf.ColumnWidth === 0) {
                cf.ColumnWidth = 10;
            }
            if (self.isTable &&
                (cf.FieldType === FIELD_TYPE.Image ||
                    // cf.FieldType === FIELD_TYPE.Indicators || ???
                    cf.FieldType === FIELD_TYPE.Signature ||
                    cf.FieldType === FIELD_TYPE.NumberIntegerQuantitySelector ||
                    cf.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                    cf.FieldType === FIELD_TYPE.NumberIntegerForMatrix ||
                    cf.FieldType === FIELD_TYPE.NumberRealForMatrix ||
                    cf.FieldType === FIELD_TYPE.Package ||
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
    }
    calcColumnsWidth() {
        const fixedMultiple = 3.78; // for converting em to pixel.
        const length = this.uiControl.ControlFields.length;
        const selectionCheckBoxWidth = 0;
        // Is table AND there is at least one column of width type of percentage.
        if (this.isTable) {
            if (this.uiControl && this.uiControl.ControlFields) {
                this.hasColumnWidthOfTypePercentage = this.uiControl.ControlFields.filter(cf => cf.ColumnWidthType === 1).length === 0;
            }
        }
        // If the columns size is fixed and the total is small then the container change it to percentage.
        if (!this.hasColumnWidthOfTypePercentage) {
            const totalFixedColsWidth = this.uiControl.ControlFields
                .map(cf => cf.ColumnWidth * fixedMultiple)
                .reduce((sum, current) => sum + current);
            if (window.innerWidth > totalFixedColsWidth) {
                this.hasColumnWidthOfTypePercentage = true;
            }
        }
        let totalCalcColsWidth = 0;
        // Calc by percentage
        if (this.hasColumnWidthOfTypePercentage) {
            const totalColsWidth = this.uiControl.ControlFields.map(cf => cf.ColumnWidth).reduce((sum, current) => sum + current);
            for (let index = 0; index < length; index++) {
                const uiControlField = this.uiControl.ControlFields[index];
                const calcColumnWidthPercentage = (100 / totalColsWidth) * uiControlField.ColumnWidth;
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
            for (let index = 0; index < length; index++) {
                const uiControlField = this.uiControl.ControlFields[index];
                const currentFixedWidth = Math.floor(uiControlField.ColumnWidth * fixedMultiple);
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
    }
    initResizeData() {
        this.startX = 0;
        this.startWidth = 0;
        this.tableStartWidth = 0;
        this.pressedColumn = '';
    }
    onListResizeStart(event, apiName) {
        this.pressedColumn = apiName;
        this.startX = event.x;
        this.startWidth = event.target.closest('.header-column').offsetWidth;
        // Set the tableStartWidth to the container offsetWidth
        this.tableStartWidth = this.noVirtualScrollCont.nativeElement.offsetWidth;
    }
    onListResize(event) {
        if (this.pressedColumn.length > 0) {
            const widthToAdd = this.layoutService.isRtl() ? this.startX - event.x : event.x - this.startX;
            // Set the width of the column and the container of the whole columns.
            if (this.startWidth + widthToAdd >= 48 || widthToAdd > 0) {
                const length = this.uiControl.ControlFields.length;
                let totalCalcColsWidth = 0;
                for (let index = 0; index < length; index++) {
                    const uiControlField = this.uiControl.ControlFields[index];
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
    }
    onListResizeEnd(event) {
        if (this.pressedColumn.length > 0) {
            if (event && $(event.srcElement).parents('.resizeBox').length > 0) {
                this.initResizeData();
            }
            else {
                const self = this;
                setTimeout(() => {
                    self.initResizeData();
                }, 0);
            }
        }
    }
    onListHeaderMouseEnter(event) {
        // this.headerIsInFocus = true;
    }
    onListHeaderMouseLeave(event) {
        // this.headerIsInFocus = false;
        this.onListResizeEnd(event);
        this.initResizeData();
    }
    onListChange(event) {
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
    }
    onListLoad(event) {
        this.notifyListLoad.emit(event);
    }
    getParentContainer() {
        return this.parentScroll ? this.parentScroll : window;
    }
    onValueChanged(valueChanged) {
        if (this.disabled) {
            return;
        }
        this.notifyValueChanged.emit(valueChanged);
    }
    onCustomizeFieldClick(customizeFieldClickedData) {
        if (this.disabled) {
            return;
        }
        this.notifyFieldClicked.emit(customizeFieldClickedData);
    }
    onCustomizeFieldMenuClicked(customizeFieldClickedData) {
        if (this.disabled) {
            return;
        }
        this.notifyMenuItemClicked.emit(customizeFieldClickedData);
    }
    getIsDisabled(pepperiObjectInput) {
        if (this.disableSelectionItems) {
            return true;
        }
        else {
            const IsNotSelectableForActions = (pepperiObjectInput === null || pepperiObjectInput === void 0 ? void 0 : pepperiObjectInput.Data) && !pepperiObjectInput.Data.IsSelectableForActions;
            return IsNotSelectableForActions;
        }
    }
    itemClicked(e, objectSingleData) {
        // Set seleted item
        const itemId = objectSingleData.Data.UID.toString();
        const itemType = objectSingleData.Data.Type.toString();
        let isChecked = false;
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
    }
    onTableRowMouseEnter(event, itemId, itemType) {
        if (this.isTouchDevice) {
            return;
        }
        const uniqItemId = this.getUniqItemId(itemId, itemType);
        this.hoveredItemId = uniqItemId;
    }
    onTableRowMouseLeave(event, itemId, itemType) {
        this.hoveredItemId = '';
    }
    onCardMouseEnter(event, itemId, itemType) {
        if (this.isTouchDevice) {
            return;
        }
        const uniqItemId = this.getUniqItemId(itemId, itemType);
        this.hoveredItemId = uniqItemId;
    }
    onCardMouseLeave(event, itemId, itemType) {
        this.hoveredItemId = '';
    }
    getThumbnailsLayout() {
        return this.layoutType == null ? LAYOUT_TYPE.PepperiCard : this.layoutType;
    }
    // call this function after resize + animation end
    winResize(e) {
        this.containerWidth = 0;
        this.setLayout();
    }
    trackByFunc(index, item) {
        return item && item.Data && item.Data.UID ? item.Data.UID : index;
    }
    cleanItems() {
        this.itemsCounter = 0;
        this.items = this.totalRows > 0 ? Array(this.totalRows) : [];
        this.scrollItems = [];
        this.calculatedObjectHeight = '';
    }
    getUIControl() {
        return this.uiControl;
    }
    initListData(uiControl, totalRows, items, viewType = VIEW_TYPE.Table, itemClass = '') {
        this.isCardView = viewType === VIEW_TYPE.Card;
        this.uiControl = uiControl;
        this.itemClass = itemClass;
        this.selectedItemId = '';
        this.isTable = viewType === VIEW_TYPE.Table;
        this.totalRows = totalRows;
        // fix bug for the scrollTo that doesn't work on edge div , not window
        const scrollingElement = this.getParentContainer();
        scrollingElement.scrollTo(0, 0);
        this.cleanItems();
        this.updateListItems(items, null);
        this.onListLoad(null);
        this.setLayout();
    }
    updateListItems(items, event) {
        this.scrollItems = this.items = items;
        this.itemsCounter = items.length;
    }
    updateListItem(data) {
        let index = 0;
        // Update items list
        index = this.items.findIndex(i => i && i.Data && i.Data.UID === data.UID);
        if (index >= 0 && index < this.items.length) {
            this.items[index].Data = data;
        }
        // Update scrollItems list
        index = this.scrollItems.findIndex(i => i && i.Data && i.Data.UID === data.UID);
        if (index >= 0 && index < this.scrollItems.length) {
            this.scrollItems[index].Data = data;
            this.checkForChanges = new Date().getTime();
        }
    }
    getIsItemEditable(uid) {
        const item = this.items.filter(x => x.Data.UID.toString() === uid);
        if (item.length > 0) {
            return item[0].Data.IsEditable;
        }
        else {
            return false;
        }
    }
    getItemDataByID(uid) {
        var _a;
        return (_a = this.items.find(item => item.Data.UID.toString() === uid)) === null || _a === void 0 ? void 0 : _a.Data;
    }
}
PepperiInternalListComponent.ɵfac = function PepperiInternalListComponent_Factory(t) { return new (t || PepperiInternalListComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LayoutService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2)); };
PepperiInternalListComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiInternalListComponent, selectors: [["pep-internal-list"]], viewQuery: function PepperiInternalListComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, true);
        ɵɵviewQuery(_c1, true);
        ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.noVirtualScrollCont = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableHeader = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectAllCB = _t.first);
    } }, hostBindings: function PepperiInternalListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("resize", function PepperiInternalListComponent_resize_HostBindingHandler($event) { return ctx.winResize($event); }, false, ɵɵresolveWindow);
    } }, inputs: { currentListTypeTranslation: "currentListTypeTranslation", noDataFoundMsg: "noDataFoundMsg", hideAllSelectionInMulti: "hideAllSelectionInMulti", top: "top", listType: "listType", objectId: "objectId", parentId: "parentId", searchCode: "searchCode", firstFieldAsLink: "firstFieldAsLink", supportResizing: "supportResizing", parentScroll: "parentScroll", disabled: "disabled", isPrinting: "isPrinting", disableSelectionItems: "disableSelectionItems", layoutType: "layoutType", pageType: "pageType", totalsRow: "totalsRow", isTouchDevice: "isTouchDevice" }, outputs: { notifyThumbnailClicked: "notifyThumbnailClicked", notifyFieldClicked: "notifyFieldClicked", notifyMenuItemClicked: "notifyMenuItemClicked", notifyValueChanged: "notifyValueChanged", notifySelectAllSingleActionClicked: "notifySelectAllSingleActionClicked", notifySingleActionClicked: "notifySingleActionClicked", notifyListLoad: "notifyListLoad" }, features: [ɵɵNgOnChangesFeature], decls: 6, vars: 2, consts: [[4, "ngIf"], ["listData", ""], ["listTotals", ""], [1, "no-data"], ["class", "table-header", 3, "ngClass", "mouseup", "mouseenter", "mouseleave", "mousemove", 4, "ngIf"], [3, "ngClass"], ["noVirtualScrollCont", ""], [4, "ngTemplateOutlet"], [1, "table-header", 3, "ngClass", "mouseup", "mouseenter", "mouseleave", "mousemove"], ["tableHeader", ""], [1, "table-header-fieldset"], ["class", "header-column pull-left flip", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [1, "header-column", "pull-left", "flip", 3, "ngStyle", "ngClass"], [3, "id", "class", "title", 4, "ngIf"], ["class", "header-label body-sm pull-left flip", 3, "id", 4, "ngIf"], ["class", "resizeBox pull-right flip", 3, "mousedown", 4, "ngIf"], [3, "id", "title"], [1, "header-label", "body-sm", "pull-left", "flip", 3, "id"], [1, "resizeBox", "pull-right", "flip", 3, "mousedown"], ["name", "arrow-up", 1, "asc"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-row", 3, "ngClass", "ngStyle", "mouseenter", "mouseleave"], [1, "table-row-fieldset", 3, "ngStyle"], [3, "checkForChanges", "uiControlHeader", "firstFieldAsLink", "pepperiObjectInput", "canEditObject", "objectId", "parentId", "searchCode", "lockEvents", "layoutType", "listType", "isActive", "pageType", "notifyValueChanged", "notifyFieldClicked", "notifyMenuItemClicked", "click"], [1, "pull-left", "flip", 3, "ngClass", "ngStyle", "mouseenter", "mouseleave"], [3, "firstFieldAsLink", "checkForChanges", "uiControlHeader", "pepperiObjectInput", "isCardView", "canEditObject", "objectId", "parentId", "searchCode", "lockEvents", "layoutType", "listType", "isActive", "pageType", "notifyValueChanged", "notifyFieldClicked", "notifyMenuItemClicked", "click"], ["class", "table-total", 4, "ngIf"], [1, "table-total"], ["class", "total-column pull-left flip", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "total-column", "pull-left", "flip", 3, "ngStyle"]], template: function PepperiInternalListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PepperiInternalListComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        ɵɵtemplate(1, PepperiInternalListComponent_ng_container_1_Template, 6, 7, "ng-container", 0);
        ɵɵtemplate(2, PepperiInternalListComponent_ng_template_2_Template, 1, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(4, PepperiInternalListComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.totalRows == 0);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.totalRows > 0);
    } }, styles: ["[_nghost-%COMP%]{height:inherit}.no-data[_ngcontent-%COMP%]{font-size:1.5rem;margin-top:100px;text-align:center}.table-header[_ngcontent-%COMP%]{top:0}.table-header.below-header-and-top-bar[_ngcontent-%COMP%]{top:calc(var(--pep-header-height, 4rem) + var(--pep-top-bar-spacing-top, 1.5rem) + var(--pep-top-bar-spacing-bottom, .5rem) + var(--pep-top-bar-field-height, 2.5rem))}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiInternalListComponent, [{
        type: Component,
        args: [{
                selector: 'pep-internal-list',
                templateUrl: './internal-list.component.html',
                styleUrls: ['./internal-list.component.scss'],
                host: {
                    '(window:resize)': 'winResize($event)'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: LayoutService }, { type: ChangeDetectorRef }, { type: Renderer2 }]; }, { currentListTypeTranslation: [{
            type: Input
        }], noDataFoundMsg: [{
            type: Input
        }], hideAllSelectionInMulti: [{
            type: Input
        }], top: [{
            type: Input
        }], listType: [{
            type: Input
        }], objectId: [{
            type: Input
        }], parentId: [{
            type: Input
        }], searchCode: [{
            type: Input
        }], firstFieldAsLink: [{
            type: Input
        }], supportResizing: [{
            type: Input
        }], parentScroll: [{
            type: Input
        }], disabled: [{
            type: Input
        }], isPrinting: [{
            type: Input
        }], disableSelectionItems: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], pageType: [{
            type: Input
        }], totalsRow: [{
            type: Input
        }], isTouchDevice: [{
            type: Input
        }], notifyThumbnailClicked: [{
            type: Output
        }], notifyFieldClicked: [{
            type: Output
        }], notifyMenuItemClicked: [{
            type: Output
        }], notifyValueChanged: [{
            type: Output
        }], notifySelectAllSingleActionClicked: [{
            type: Output
        }], notifySingleActionClicked: [{
            type: Output
        }], notifyListLoad: [{
            type: Output
        }], noVirtualScrollCont: [{
            type: ViewChild,
            args: ['noVirtualScrollCont']
        }], tableHeader: [{
            type: ViewChild,
            args: ['tableHeader']
        }], selectAllCB: [{
            type: ViewChild,
            args: ['selectAllCB']
        }] }); })();

const _c0$2 = ["orgCont"];
const _c1$1 = ["modalCont"];
const _c2$1 = ["matrixTemplate"];
function PepperiInternalPageComponent_ng_template_0_ng_container_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("\u00A0", ctx_r7.currentAdditionalApiName == null ? null : ctx_r7.currentAdditionalApiName.Value, "\u00A0");
} }
const _c3$1 = function (a0) { return { selected: a0 }; };
function PepperiInternalPageComponent_ng_template_0_ng_container_4_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function PepperiInternalPageComponent_ng_template_0_ng_container_4_button_11_Template_button_click_0_listener() { ɵɵrestoreView(_r12); const additionalApiName_r10 = ctx.$implicit; const ctx_r11 = ɵɵnextContext(3); return ctx_r11.changeAdditionalApiName(additionalApiName_r10); });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const additionalApiName_r10 = ctx.$implicit;
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c3$1, (ctx_r9.currentAdditionalApiName == null ? null : ctx_r9.currentAdditionalApiName.Key) == (additionalApiName_r10 == null ? null : additionalApiName_r10.Key)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(additionalApiName_r10.Value);
} }
const _c4$1 = function (a0) { return { "pull-left flip": a0 }; };
function PepperiInternalPageComponent_ng_template_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 11);
    ɵɵtemplate(2, PepperiInternalPageComponent_ng_template_0_ng_container_4_span_2_Template, 2, 1, "span", 12);
    ɵɵelementStart(3, "mat-icon", 13);
    ɵɵelement(4, "pep-icon", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "mat-menu", 15, 16);
    ɵɵelementStart(7, "button", 17);
    ɵɵlistener("click", function PepperiInternalPageComponent_ng_template_0_ng_container_4_Template_button_click_7_listener() { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(2); return ctx_r13.changeAdditionalApiName(null); });
    ɵɵelementStart(8, "span");
    ɵɵtext(9);
    ɵɵpipe(10, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(11, PepperiInternalPageComponent_ng_template_0_ng_container_4_button_11_Template, 3, 4, "button", 18);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r8 = ɵɵreference(6);
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("matMenuTriggerFor", _r8);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.currentAdditionalApiName);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c4$1, ctx_r5.currentAdditionalApiName));
    ɵɵadvance(4);
    ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c3$1, ctx_r5.currentAdditionalApiName === null));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(10, 6, "LIST.NONE"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r5.additionalApiNames);
} }
function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-icon", 26);
} }
function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-icon", 27);
} }
function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-icon", 28);
} }
function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_Template_button_click_0_listener() { ɵɵrestoreView(_r22); const viewType_r17 = ctx.$implicit; const ctx_r21 = ɵɵnextContext(3); return ctx_r21.changeChildrenViewType(viewType_r17 == null ? null : viewType_r17.Key); });
    ɵɵelementStart(1, "mat-icon", 22);
    ɵɵtemplate(2, PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_2_Template, 1, 0, "pep-icon", 23);
    ɵɵtemplate(3, PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_3_Template, 1, 0, "pep-icon", 24);
    ɵɵtemplate(4, PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_pep_icon_4_Template, 1, 0, "pep-icon", 25);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const viewType_r17 = ctx.$implicit;
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c3$1, (ctx_r16.currentViewType == null ? null : ctx_r16.currentViewType.Key) == (viewType_r17 == null ? null : viewType_r17.Key)));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", viewType_r17 == null ? null : viewType_r17.Key);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "OrderCenterMatrix");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "OrderCenterFlatMatrixGrid");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "OrderCenterFlatMatrixLine");
    ɵɵadvance(2);
    ɵɵtextInterpolate(viewType_r17 == null ? null : viewType_r17.Value);
} }
function PepperiInternalPageComponent_ng_template_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 11);
    ɵɵelementStart(2, "mat-icon");
    ɵɵelement(3, "pep-icon", 20);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-menu", 15, 21);
    ɵɵtemplate(6, PepperiInternalPageComponent_ng_template_0_ng_container_5_button_6_Template, 7, 8, "button", 18);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r15 = ɵɵreference(5);
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("matMenuTriggerFor", _r15);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r6.childViewTypes);
} }
function PepperiInternalPageComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵelementStart(1, "span", 7);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 8);
    ɵɵtemplate(4, PepperiInternalPageComponent_ng_template_0_ng_container_4_Template, 12, 12, "ng-container", 9);
    ɵɵtemplate(5, PepperiInternalPageComponent_ng_template_0_ng_container_5_Template, 7, 2, "ng-container", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "pep-internal-list", 10);
    ɵɵlistener("notifyValueChanged", function PepperiInternalPageComponent_ng_template_0_Template_pep_internal_list_notifyValueChanged_6_listener($event) { ɵɵrestoreView(_r24); const ctx_r23 = ɵɵnextContext(); return ctx_r23.onCustomizeObjectChanged($event); })("notifyFieldClicked", function PepperiInternalPageComponent_ng_template_0_Template_pep_internal_list_notifyFieldClicked_6_listener($event) { ɵɵrestoreView(_r24); const ctx_r25 = ɵɵnextContext(); return ctx_r25.onCustomizeFieldClick($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("matrix-title-container pepperi-border-bottom align-", ctx_r1.field.xAlignment, "");
    ɵɵpropertyInterpolate("title", ctx_r1.field.label);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.field.label);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (ctx_r1.currentViewType == null ? null : ctx_r1.currentViewType.Key) == "OrderCenterMatrix" && ctx_r1.additionalApiNames && ctx_r1.additionalApiNames.length > 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.childViewTypes && ctx_r1.childViewTypes.length > 1);
    ɵɵadvance(1);
    ɵɵproperty("totalsRow", ctx_r1.totalsRow);
} }
function PepperiInternalPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 29);
} }
function PepperiInternalPageComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 30);
    ɵɵlistener("click", function PepperiInternalPageComponent_button_5_Template_button_click_0_listener() { ɵɵrestoreView(_r27); const ctx_r26 = ɵɵnextContext(); return ctx_r26.showMatrixDialog(); });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "INTERNAL_PAGE.CLICK_TO_ORDER"));
} }
const _c5$1 = function (a0, a1) { return { "max-width": a0, "max-height": a1 }; };
class PepperiInternalPageComponent {
    constructor(fb, pepperiInternalPageService, customizationService, elementRef, changeDetectorRef) {
        this.fb = fb;
        this.pepperiInternalPageService = pepperiInternalPageService;
        this.customizationService = customizationService;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.controlType = 'internalPage';
        this.hasHeightLimit = false;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.childChanged = new EventEmitter();
        this.childClicked = new EventEmitter();
        // TODO: Implement
        // @ViewChild('childModal') public childModal: ModalDirective;
        this.childModal = { isShown: false };
        this.LAYOUT_TYPE = LAYOUT_TYPE;
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
    fillData() {
        const view = this.matrixTemplate.createEmbeddedView(null);
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
        setTimeout(() => {
            const buffer = [];
            if (this.childData.Rows) {
                // for (let i = 0; i < this.childData.Rows.length; i++) {
                for (const childDataRow of this.childData.Rows) {
                    const osd = new ObjectSingleData(this.uiControl, childDataRow);
                    osd.IsEditable = true;
                    buffer.push(osd);
                }
            }
            const viewType = this.isTableView() ? VIEW_TYPE.Table : VIEW_TYPE.Line;
            this.customList.initListData(this.uiControl, this.childData.TotalRows, buffer, viewType, this.getItemClass());
            this.setTotalsRow();
            if (!this.childModal.isShown) {
                const childrenCount = this.childData.Rows ? this.childData.Rows.length : 0;
                const isEven = childrenCount % 2 === 0;
                // 3 for matrix & flat matrix because the header + total is 2 more rows.
                const rowsToAdd = this.isMatrixView() || this.isFlatMatrixView() ? 3 : 1;
                const formRowHeight = this.customizationService.calculateFormFieldHeight() * 16; // convert rem to pixel
                // Set the default only if not set yet.
                if (this.defaultRowSpan === -1) {
                    this.defaultRowSpan = this.field.rowSpan;
                }
                // For line view Add the height of the line (form height).
                if (this.currentViewType.Key === 'OrderCenterFlatMatrixLine') {
                    const maxRow = Math.max.apply(Math, this.uiControl.ControlFields.map((f) => {
                        return f.Layout.Y + f.Layout.Height;
                    }));
                    // * 16 convert rem to pixel
                    const cardRowsHeight = this.customizationService.calculateCardRowsHeight(maxRow) * 16;
                    // maxRow * 24 + 60 - 24 for each row in card + 60 for the padding of each card.
                    // const rowSpanToAdd = Math.floor(childrenCount * ((cardRowsHeight + 56) / formRowHeight) + rowsToAdd);
                    // + 16 is the 1rem margin outside card.
                    const rowSpanToAdd = (childrenCount * (cardRowsHeight + 16)) / formRowHeight + rowsToAdd;
                    this.field.rowSpan = rowSpanToAdd;
                }
                else {
                    // const tableRowsHeight = this.customizationService.calculateTableRowsHeight(childrenCount) * 16;
                    // this.field.rowSpan = Math.ceil((tableRowsHeight + (rowsToAdd * 40)) / formRowHeight);
                    // * 16 convert rem to pixel
                    const rowsToAddHeight = this.customizationService.calculateTableRowsHeight(rowsToAdd, false) * 16;
                    const tableRowsHeight = this.customizationService.calculateTableRowsHeight(childrenCount) * 16;
                    this.field.rowSpan = (rowsToAddHeight + tableRowsHeight) / formRowHeight;
                }
                const self = this;
                self.sumOfMinColWidth = 0;
                self.totalRowsWidth = 0;
                this.childData.UIControl.ControlFields.forEach((uiControlField) => {
                    self.totalRowsWidth += uiControlField.ColumnWidth;
                    uiControlField.minFieldWidth = self.mmToPx(12); // NEED TO GET THIS PARAM FROM CUSTOMIZATION;
                    self.sumOfMinColWidth += 12;
                });
                setTimeout(() => {
                    self.setViewCover(this.childData.Rows);
                }, 0);
            }
        }, 150);
        this.changeDetectorRef.markForCheck();
    }
    fillChildData(res) {
        // TODO: ??
        // this.userService.setOptionalValuesDic(res.Rows);
        this.childData = res;
        this.uiControl = res.UIControl;
        this.additionalApiNames = res.AdditionalApiNames;
        this.fillData();
    }
    mmToPx(mm) {
        return Math.floor(mm * $$1('#my1_mm').height()); // JQuery returns sizes in PX
    }
    isMatrixView() {
        return this.currentViewType && this.currentViewType.Key === 'OrderCenterMatrix';
    }
    isFlatMatrixView() {
        return this.currentViewType && this.currentViewType.Key === 'OrderCenterFlatMatrixGrid';
    }
    isTableView() {
        return this.isMatrixView() || this.isFlatMatrixView();
    }
    getItemClass() {
        let res = '';
        if (!this.isTableView()) {
            res = 'line-view';
        }
        return res;
    }
    changeChildrenViewType(viewTypeKey) {
        const self = this;
        this.rows = [];
        this.uiControl = null;
        for (const vt of this.childViewTypes) {
            if (vt.Key === viewTypeKey) {
                this.currentViewType = vt;
                break;
            }
        }
        // check if view type changed
        // if (this.currentViewType.Key != viewTypeKey) {
        $$1('body').scrollTop(0);
        this.currentViewTypeTitle = this.currentViewType.Value;
        this.pepperiInternalPageService.changeChildrenViewType(this.currentViewType.Key, (res) => {
            if (res.Rows) {
                self.fillChildData(res);
            }
        });
    }
    setViewCover(rows) {
        if (!rows) {
            return;
        }
        const numofrows = rows.length;
        const matrixCont = $$1('#mainViewCont');
        const viewWidth = matrixCont.parents('mat-grid-tile').css('width');
        const viewHeight = matrixCont.parents('mat-grid-tile').css('height');
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
    }
    showMatrixDialog() {
        // this.childModal.config.ignoreBackdropClick = true;
        // TODO: Show modal
        // this.childModal.show();
    }
    // TODO:
    // onShown() {
    //     this.fillData();
    // }
    // TODO:
    // onHidden() {
    //     this.fillData();
    // }
    ngOnInit() {
        const self = this;
        // let field = this.field as PepperiInternalPageField;
        this.pepperiInternalPageService.initDetails(this.field.objectId, this.field.parentId, this.field.searchCode, (resViewTypes) => {
            // my code DI-7134
            resViewTypes.Rows = resViewTypes.Rows.filter((item) => item.Key !== 'OrderCenterView1');
            if (resViewTypes.Rows && resViewTypes.Rows.length > 0) {
                if (!resViewTypes.Default) {
                    resViewTypes.Default = resViewTypes.Rows[0].Key;
                }
                self.childViewTypes = resViewTypes.Rows;
                self.currentViewType = resViewTypes.Rows[0];
                // for (var i = 0; i < resViewTypes.Rows.length; i++) {
                for (const viewTypeRow of resViewTypes.Rows) {
                    if (viewTypeRow.Value === resViewTypes.Default) {
                        self.currentViewType = viewTypeRow;
                    }
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
    }
    loadLastAdditionalApiName() {
        const daa = sessionStorage.getItem(PepperiInternalPageComponent.CURRENT_ADDITIONAL_API_NAME);
        if (daa && daa.length > 0) {
            const additionalApiName = JSON.parse(daa);
            this.currentAdditionalApiName = additionalApiName;
            this.pepperiInternalPageService.additionalApiName = additionalApiName.Key;
        }
    }
    ngOnDestroy() {
        if (this.childChanged) {
            this.childChanged.unsubscribe();
        }
        if (this.childClicked) {
            this.childClicked.unsubscribe();
        }
        if (this.resize) {
            this.resize.unsubscribe();
        }
    }
    changeAdditionalApiName(additionalApiName) {
        const self = this;
        this.pepperiInternalPageService.changeAdditionalApiName(additionalApiName ? additionalApiName.Key : '', (res) => {
            // for (let index = 0; index < res.Rows.length; index++) {
            for (const row of res.Rows) {
                self.updateChanges(row);
            }
            self.changeDetectorRef.markForCheck();
        });
        sessionStorage.setItem(PepperiInternalPageComponent.CURRENT_ADDITIONAL_API_NAME, JSON.stringify(additionalApiName));
        setTimeout(() => {
            this.currentAdditionalApiName = additionalApiName;
        }, 0);
    }
    setTotalsRow() {
        this.totalsRow = [];
        if (this.isMatrixView() || this.isFlatMatrixView()) {
            let totalCol = 0;
            if (this.customList.items) {
                for (let col = 0; col < this.customList.items[0].Data.Fields.length; col++) {
                    const field = this.customList.items[0].Data.Fields[col];
                    if (field.FieldType === FIELD_TYPE.NumberIntegerForMatrix ||
                        field.FieldType === FIELD_TYPE.NumberIntegerQuantitySelector ||
                        field.FieldType === FIELD_TYPE.NumberRealForMatrix ||
                        field.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                        field.FieldType === FIELD_TYPE.CalculatedInt ||
                        field.FieldType === FIELD_TYPE.NumberInteger ||
                        field.FieldType === FIELD_TYPE.CalculatedReal ||
                        field.FieldType === FIELD_TYPE.NumberReal) {
                        totalCol = 0;
                        // for (var i = 0; i < this.customList.items.length; i++) {
                        for (const listItem of this.customList.items) {
                            if (listItem.Data.Fields[col] && listItem.Data.Fields[col].Value) {
                                const num = parseFloat(listItem.Data.Fields[col].Value);
                                totalCol += isNaN(num) ? 0 : num;
                            }
                        }
                        this.totalsRow.push(totalCol);
                    }
                    else {
                        this.totalsRow.push('');
                    }
                }
            }
        }
    }
    updateChanges(elementToUpdate) {
        this.customList.updateListItem(elementToUpdate);
        // Update memory data
        for (let index = 0; index < this.childData.Rows.length; index++) {
            if (this.childData.Rows[index].UID === elementToUpdate.UID) {
                this.childData.Rows[index] = elementToUpdate;
            }
        }
    }
    setValueCallback(id, res) {
        if (res.Rows.length === 1) {
            this.updateChanges(res.Rows[0]);
        }
        this.setTotalsRow();
        this.checkForChanges = new Date();
        // DI-15985
        this.childChanged.emit(res);
        this.changeDetectorRef.markForCheck();
    }
    onCustomizeObjectChanged(customizeObjectChangedData) {
        let handledEvent = false;
        const boundSetValueCallback = this.setValueCallback.bind(this); // .bind() to have this in the bound function.
        // For the new custom form, the plus and minus events transform in the PepperiObjectChangedData
        if (customizeObjectChangedData.ControlType === 'qs') {
            if (customizeObjectChangedData.Value === '+') {
                handledEvent = true;
                this.pepperiInternalPageService.childPlusClick(customizeObjectChangedData.Id, customizeObjectChangedData.ApiName, (res) => {
                    boundSetValueCallback(customizeObjectChangedData.Id, res);
                });
            }
            else if (customizeObjectChangedData.Value === '-') {
                handledEvent = true;
                this.pepperiInternalPageService.childMinusClick(customizeObjectChangedData.Id, customizeObjectChangedData.ApiName, (res) => {
                    boundSetValueCallback(customizeObjectChangedData.Id, res);
                });
            }
        }
        if (!handledEvent) {
            this.pepperiInternalPageService.childValueChanged(customizeObjectChangedData.Id, customizeObjectChangedData.ApiName, customizeObjectChangedData.Value, (res) => {
                boundSetValueCallback(customizeObjectChangedData.Id, res);
            });
        }
    }
    onCustomizeFieldClick(fieldClickEvent) {
        this.childClicked.emit(fieldClickEvent);
    }
}
PepperiInternalPageComponent.CURRENT_ADDITIONAL_API_NAME = 'item_details_currentAdditionalApiName';
PepperiInternalPageComponent.ɵfac = function PepperiInternalPageComponent_Factory(t) { return new (t || PepperiInternalPageComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(PepperiInternalPageService), ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
PepperiInternalPageComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiInternalPageComponent, selectors: [["pep-internal-page"]], viewQuery: function PepperiInternalPageComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, true, ViewContainerRef);
        ɵɵviewQuery(_c1$1, true, ViewContainerRef);
        ɵɵviewQuery(_c2$1, true);
        ɵɵviewQuery(PepperiInternalListComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.orgCont = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalCont = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.matrixTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customList = _t.first);
    } }, inputs: { field: "field", hasHeightLimit: "hasHeightLimit", layoutType: "layoutType" }, outputs: { childChanged: "childChanged", childClicked: "childClicked" }, features: [ɵɵProvidersFeature([PepperiInternalPageService])], decls: 8, vars: 6, consts: [["matrixTemplate", ""], ["id", "mainViewCont", 3, "ngStyle"], ["id", "my1_mm", 2, "height", "1mm", "width", "1mm", "display", "none"], ["class", "table-cover", 4, "ngIf"], ["class", "pepperi-button strong sm table-cover-button", 3, "click", 4, "ngIf"], ["orgCont", ""], [3, "title"], [1, "block-with-text", "body-md"], [1, "buttons-container", "spacing-element-negative", "pull-right", "flip"], [4, "ngIf"], [3, "totalsRow", "notifyValueChanged", "notifyFieldClicked"], ["mat-button", "", "menu-blur", "", 1, "spacing-element", "pepperi-button", "icon-button", "sm", "weak", 3, "matMenuTriggerFor"], ["class", "pull-left flip", 4, "ngIf"], [3, "ngClass"], ["name", "system_info"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "ngClass", "click"], ["mat-menu-item", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pull-left", "flip"], ["name", "view_card_md"], ["viewsMenu", "matMenu"], [3, "ngSwitch"], ["name", "view_matrix", 4, "ngSwitchCase"], ["name", "view_table", 4, "ngSwitchCase"], ["name", "view_line", 4, "ngSwitchCase"], ["name", "view_matrix"], ["name", "view_table"], ["name", "view_line"], [1, "table-cover"], [1, "pepperi-button", "strong", "sm", "table-cover-button", 3, "click"]], template: function PepperiInternalPageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PepperiInternalPageComponent_ng_template_0_Template, 7, 8, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵelementStart(2, "div", 1);
        ɵɵelement(3, "div", 2);
        ɵɵtemplate(4, PepperiInternalPageComponent_div_4_Template, 1, 0, "div", 3);
        ɵɵtemplate(5, PepperiInternalPageComponent_button_5_Template, 3, 3, "button", 4);
        ɵɵelementContainer(6, null, 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngStyle", ɵɵpureFunction2(3, _c5$1, ctx.viewWidth, ctx.viewHeight));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.coverChildTable && ctx.uiControl != null);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.coverChildTable && ctx.uiControl != null);
    } }, directives: [NgStyle, NgIf, PepperiInternalListComponent, MatMenuTrigger, MatIcon, NgClass, PepperiIconComponent, _MatMenu, MatMenuItem, NgForOf, NgSwitch, NgSwitchCase], pipes: [TranslatePipe], styles: [".matrix-title-container[_ngcontent-%COMP%]{align-items:flex-end;display:flex;height:var(--pep-form-field-height,2.5rem);padding:0}.matrix-title-container[_ngcontent-%COMP%]   .block-with-text[_ngcontent-%COMP%]{-ms-text-overflow:ellipsis;display:block;font-weight:var(--pep-font-weight-bold,600);max-height:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.matrix-title-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{align-self:center;display:flex}#mainViewCont[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin-bottom:1.5rem;width:100%}#mainViewCont[_ngcontent-%COMP%]   .table-cover[_ngcontent-%COMP%]{background-color:#fff;height:100%;opacity:.5;position:absolute;top:0;width:99%;z-index:101}#mainViewCont[_ngcontent-%COMP%]   .table-cover-button[_ngcontent-%COMP%]{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:102}#mainViewCont[_ngcontent-%COMP%]   .underCover[_ngcontent-%COMP%]{max-height:inherit;overflow:hidden}#mainViewCont[_ngcontent-%COMP%]    .table-header{top:unset!important}.modal-dialog[_ngcontent-%COMP%]{margin:.5rem 0;position:relative}.modal-dialog[_ngcontent-%COMP%]   .matrix-dialog-body[_ngcontent-%COMP%]{height:100%;overflow:auto;padding:.5rem}.modal-dialog[_ngcontent-%COMP%]   .matrix-dialog-body[_ngcontent-%COMP%]    .table-header{top:unset!important}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiInternalPageComponent, [{
        type: Component,
        args: [{
                selector: 'pep-internal-page',
                templateUrl: './internal-page.component.html',
                styleUrls: ['./internal-page.component.scss'],
                providers: [PepperiInternalPageService],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: FormBuilder }, { type: PepperiInternalPageService }, { type: CustomizationService }, { type: ElementRef }, { type: ChangeDetectorRef }]; }, { field: [{
            type: Input
        }], hasHeightLimit: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], childChanged: [{
            type: Output
        }], childClicked: [{
            type: Output
        }], orgCont: [{
            type: ViewChild,
            args: ['orgCont', { read: ViewContainerRef }]
        }], modalCont: [{
            type: ViewChild,
            args: ['modalCont', { read: ViewContainerRef }]
        }], matrixTemplate: [{
            type: ViewChild,
            args: ['matrixTemplate']
        }], customList: [{
            type: ViewChild,
            args: [PepperiInternalListComponent]
        }] }); })();

function PepperiFieldGeneratorComponent_pep_address_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-address", 19);
    ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_address_1_Template_pep_address_valueChanged_0_listener($event) { ɵɵrestoreView(_r19); const ctx_r18 = ɵɵnextContext(); return ctx_r18.onValueChanged($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("form", ctx_r0.form)("key", ctx_r0.field.key)("formattedValue", ctx_r0.field.formattedValue)("label", ctx_r0.field.label)("required", ctx_r0.field.required)("disabled", ctx_r0.field.disabled)("readonly", ctx_r0.field.readonly)("xAlignment", ctx_r0.field.xAlignment)("rowSpan", ctx_r0.field.rowSpan)("groupFields", ctx_r0.field.groupFields)("layoutType", ctx_r0.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_attachment_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-attachment", 20);
    ɵɵlistener("elementClicked", function PepperiFieldGeneratorComponent_pep_attachment_2_Template_pep_attachment_elementClicked_0_listener($event) { ɵɵrestoreView(_r21); const ctx_r20 = ɵɵnextContext(); return ctx_r20.onClick($event); })("valueChanged", function PepperiFieldGeneratorComponent_pep_attachment_2_Template_pep_attachment_valueChanged_0_listener($event) { ɵɵrestoreView(_r21); const ctx_r22 = ɵɵnextContext(); return ctx_r22.onValueChanged($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("form", ctx_r1.form)("key", ctx_r1.field.key)("src", ctx_r1.field.value)("label", ctx_r1.field.label)("required", ctx_r1.field.required)("disabled", ctx_r1.field.disabled)("readonly", ctx_r1.field.readonly)("xAlignment", ctx_r1.field.xAlignment)("rowSpan", ctx_r1.field.rowSpan)("isActive", ctx_r1.isActive)("showTitle", ctx_r1.showTitle)("layoutType", ctx_r1.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_checkbox_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-checkbox", 21);
    ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_checkbox_3_Template_pep_checkbox_valueChanged_0_listener($event) { ɵɵrestoreView(_r24); const ctx_r23 = ɵɵnextContext(); return ctx_r23.onValueChanged($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("form", ctx_r2.form)("key", ctx_r2.field.key)("value", ctx_r2.field.value)("label", ctx_r2.field.label)("type", ctx_r2.field.type)("required", ctx_r2.field.required)("disabled", ctx_r2.field.disabled)("readonly", ctx_r2.field.readonly)("xAlignment", ctx_r2.field.xAlignment)("rowSpan", ctx_r2.field.rowSpan)("additionalValue", ctx_r2.field.additionalValue)("showTitle", ctx_r2.showTitle)("layoutType", ctx_r2.layoutType)("isActive", ctx_r2.isActive);
} }
function PepperiFieldGeneratorComponent_pep_date_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-date", 22);
    ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_date_4_Template_pep_date_valueChanged_0_listener($event) { ɵɵrestoreView(_r26); const ctx_r25 = ɵɵnextContext(); return ctx_r25.onValueChanged($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("form", ctx_r3.form)("key", ctx_r3.field.key)("value", ctx_r3.field.value)("formattedValue", ctx_r3.field.formattedValue)("label", ctx_r3.field.label)("type", ctx_r3.field.type)("required", ctx_r3.field.required)("disabled", ctx_r3.field.disabled)("readonly", ctx_r3.field.readonly)("textColor", ctx_r3.field.textColor)("xAlignment", ctx_r3.field.xAlignment)("rowSpan", ctx_r3.field.rowSpan)("minValue", ctx_r3.field.minValue)("maxValue", ctx_r3.field.maxValue)("showTitle", ctx_r3.showTitle)("layoutType", ctx_r3.layoutType)("isActive", ctx_r3.isActive);
} }
function PepperiFieldGeneratorComponent_pep_images_filmstrip_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-images-filmstrip", 23);
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("objectId", ctx_r4.objectId)("form", ctx_r4.form)("key", ctx_r4.field.key)("label", ctx_r4.field.label)("showTitle", ctx_r4.showTitle)("value", ctx_r4.field.value)("layoutType", ctx_r4.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_image_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-image", 24);
    ɵɵlistener("elementClicked", function PepperiFieldGeneratorComponent_pep_image_6_Template_pep_image_elementClicked_0_listener($event) { ɵɵrestoreView(_r28); const ctx_r27 = ɵɵnextContext(); return ctx_r27.onClick($event); })("valueChanged", function PepperiFieldGeneratorComponent_pep_image_6_Template_pep_image_valueChanged_0_listener($event) { ɵɵrestoreView(_r28); const ctx_r29 = ɵɵnextContext(); return ctx_r29.onValueChanged($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("objectId", ctx_r5.objectId)("form", ctx_r5.form)("key", ctx_r5.field.key)("src", ctx_r5.field.formattedValue)("srcLarge", ctx_r5.field.value)("options", ctx_r5.field.options)("label", ctx_r5.field.label)("type", ctx_r5.field.type)("required", ctx_r5.field.required)("disabled", ctx_r5.field.disabled)("readonly", ctx_r5.field.readonly)("xAlignment", ctx_r5.field.xAlignment)("rowSpan", ctx_r5.field.rowSpan)("indicatorsField", ctx_r5.field.indicatorsField)("menuField", ctx_r5.field.menuField)("hasCampaignField", ctx_r5.field.hasCampaignField)("sizeLimitMB", ctx_r5.field.sizeLimitMB)("isActive", ctx_r5.isActive)("layoutType", ctx_r5.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_internal_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-internal-button", 25);
    ɵɵlistener("elementClicked", function PepperiFieldGeneratorComponent_pep_internal_button_7_Template_pep_internal_button_elementClicked_0_listener($event) { ɵɵrestoreView(_r31); const ctx_r30 = ɵɵnextContext(); return ctx_r30.onClick($event); })("valueChanged", function PepperiFieldGeneratorComponent_pep_internal_button_7_Template_pep_internal_button_valueChanged_0_listener($event) { ɵɵrestoreView(_r31); const ctx_r32 = ɵɵnextContext(); return ctx_r32.onValueChanged($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("form", ctx_r6.form)("key", ctx_r6.field.key)("value", ctx_r6.field.value)("formattedValue", ctx_r6.field.formattedValue)("label", ctx_r6.field.label)("referenceObjectInternalType", ctx_r6.field.referenceObjectInternalType)("type", ctx_r6.field.type)("disabled", ctx_r6.field.disabled)("readonly", ctx_r6.field.readonly)("xAlignment", ctx_r6.field.xAlignment)("layoutType", ctx_r6.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_menu_8_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-menu", 26);
    ɵɵlistener("elementClicked", function PepperiFieldGeneratorComponent_pep_menu_8_Template_pep_menu_elementClicked_0_listener($event) { ɵɵrestoreView(_r34); const ctx_r33 = ɵɵnextContext(); return ctx_r33.onClick($event); })("notifyMenuItemClicked", function PepperiFieldGeneratorComponent_pep_menu_8_Template_pep_menu_notifyMenuItemClicked_0_listener($event) { ɵɵrestoreView(_r34); const ctx_r35 = ɵɵnextContext(); return ctx_r35.onMenuItemClicked($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("key", ctx_r7.field.key)("label", ctx_r7.field.label)("disabled", ctx_r7.field.disabled)("xAlignment", ctx_r7.field.xAlignment)("options", ctx_r7.field.options)("layoutType", ctx_r7.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-quantity-selector", 27);
    ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template_pep_quantity_selector_valueChanged_0_listener($event) { ɵɵrestoreView(_r37); const ctx_r36 = ɵɵnextContext(); return ctx_r36.onValueChanged($event); })("formValidationChanged", function PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template_pep_quantity_selector_formValidationChanged_0_listener($event) { ɵɵrestoreView(_r37); const ctx_r38 = ɵɵnextContext(); return ctx_r38.onFormValidationChanged($event); })("elementClicked", function PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template_pep_quantity_selector_elementClicked_0_listener($event) { ɵɵrestoreView(_r37); const ctx_r39 = ɵɵnextContext(); return ctx_r39.onClick($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("form", ctx_r8.form)("key", ctx_r8.field.key)("value", ctx_r8.field.value)("formattedValue", ctx_r8.field.formattedValue)("label", ctx_r8.field.label)("type", ctx_r8.field.type)("required", ctx_r8.field.required)("disabled", ctx_r8.field.disabled)("readonly", ctx_r8.field.readonly)("textColor", ctx_r8.field.textColor)("xAlignment", ctx_r8.field.xAlignment)("rowSpan", ctx_r8.field.rowSpan)("lastFocusField", ctx_r8.field.lastFocusField)("alowDecimal", ctx_r8.field.alowDecimal)("additionalValue", ctx_r8.field.additionalValue)("notificationInfo", ctx_r8.field.notificationInfo)("isActive", ctx_r8.isActive)("layoutType", ctx_r8.layoutType)("showTitle", ctx_r8.showTitle);
} }
function PepperiFieldGeneratorComponent_pep_rich_html_textarea_10_Template(rf, ctx) { if (rf & 1) {
    const _r41 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-rich-html-textarea", 28);
    ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_rich_html_textarea_10_Template_pep_rich_html_textarea_valueChanged_0_listener($event) { ɵɵrestoreView(_r41); const ctx_r40 = ɵɵnextContext(); return ctx_r40.onValueChanged($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("form", ctx_r9.form)("key", ctx_r9.field.key)("value", ctx_r9.field.value)("label", ctx_r9.field.label)("required", ctx_r9.field.required)("disabled", ctx_r9.field.disabled)("readonly", ctx_r9.field.readonly)("maxFieldCharacters", ctx_r9.field.maxFieldCharacters)("xAlignment", ctx_r9.field.xAlignment)("rowSpan", ctx_r9.field.rowSpan)("showTitle", ctx_r9.showTitle)("layoutType", ctx_r9.layoutType)("isActive", ctx_r9.isActive);
} }
function PepperiFieldGeneratorComponent_pep_select_11_Template(rf, ctx) { if (rf & 1) {
    const _r43 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-select", 29);
    ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_select_11_Template_pep_select_valueChanged_0_listener($event) { ɵɵrestoreView(_r43); const ctx_r42 = ɵɵnextContext(); return ctx_r42.onValueChanged($event); })("formValidationChanged", function PepperiFieldGeneratorComponent_pep_select_11_Template_pep_select_formValidationChanged_0_listener($event) { ɵɵrestoreView(_r43); const ctx_r44 = ɵɵnextContext(); return ctx_r44.onFormValidationChanged($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext();
    ɵɵproperty("form", ctx_r10.form)("key", ctx_r10.field.key)("value", ctx_r10.field.value)("formattedValue", ctx_r10.field.formattedValue)("label", ctx_r10.field.label)("type", ctx_r10.field.type)("required", ctx_r10.field.required)("disabled", ctx_r10.field.disabled)("readonly", ctx_r10.field.readonly)("xAlignment", ctx_r10.field.xAlignment)("rowSpan", ctx_r10.field.rowSpan)("options", ctx_r10.field.options)("showTitle", ctx_r10.showTitle)("layoutType", ctx_r10.layoutType)("isActive", ctx_r10.isActive);
} }
function PepperiFieldGeneratorComponent_pep_separator_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-separator", 30);
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext();
    ɵɵproperty("form", ctx_r11.form)("key", ctx_r11.field.key)("label", ctx_r11.field.label)("xAlignment", ctx_r11.field.xAlignment)("layoutType", ctx_r11.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_signature_13_Template(rf, ctx) { if (rf & 1) {
    const _r46 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-signature", 31);
    ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_signature_13_Template_pep_signature_valueChanged_0_listener($event) { ɵɵrestoreView(_r46); const ctx_r45 = ɵɵnextContext(); return ctx_r45.onValueChanged($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext();
    ɵɵproperty("form", ctx_r12.form)("key", ctx_r12.field.key)("src", ctx_r12.field.value)("label", ctx_r12.field.label)("required", ctx_r12.field.required)("disabled", ctx_r12.field.disabled)("readonly", ctx_r12.field.readonly)("xAlignment", ctx_r12.field.xAlignment)("rowSpan", ctx_r12.field.rowSpan)("isActive", ctx_r12.isActive)("layoutType", ctx_r12.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_textarea_14_Template(rf, ctx) { if (rf & 1) {
    const _r48 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-textarea", 32);
    ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_textarea_14_Template_pep_textarea_valueChanged_0_listener($event) { ɵɵrestoreView(_r48); const ctx_r47 = ɵɵnextContext(); return ctx_r47.onValueChanged($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵɵnextContext();
    ɵɵproperty("form", ctx_r13.form)("key", ctx_r13.field.key)("value", ctx_r13.field.value)("label", ctx_r13.field.label)("required", ctx_r13.field.required)("disabled", ctx_r13.field.disabled)("readonly", ctx_r13.field.readonly)("maxFieldCharacters", ctx_r13.field.maxFieldCharacters)("textColor", ctx_r13.field.textColor)("xAlignment", ctx_r13.field.xAlignment)("rowSpan", ctx_r13.field.rowSpan)("lastFocusField", ctx_r13.field.lastFocusField)("showTitle", ctx_r13.showTitle)("layoutType", ctx_r13.layoutType)("isActive", ctx_r13.isActive);
} }
function PepperiFieldGeneratorComponent_pep_textbox_15_Template(rf, ctx) { if (rf & 1) {
    const _r50 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-textbox", 33);
    ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_textbox_15_Template_pep_textbox_valueChanged_0_listener($event) { ɵɵrestoreView(_r50); const ctx_r49 = ɵɵnextContext(); return ctx_r49.onValueChanged($event); })("formValidationChanged", function PepperiFieldGeneratorComponent_pep_textbox_15_Template_pep_textbox_formValidationChanged_0_listener($event) { ɵɵrestoreView(_r50); const ctx_r51 = ɵɵnextContext(); return ctx_r51.onFormValidationChanged($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext();
    ɵɵproperty("form", ctx_r14.form)("key", ctx_r14.field.key)("value", ctx_r14.field.value)("formattedValue", ctx_r14.field.formattedValue)("label", ctx_r14.field.label)("placeholder", ctx_r14.field.placeholder)("type", ctx_r14.field.type)("required", ctx_r14.field.required)("disabled", ctx_r14.field.disabled)("readonly", ctx_r14.field.readonly)("maxFieldCharacters", ctx_r14.field.maxFieldCharacters)("textColor", ctx_r14.field.textColor)("xAlignment", ctx_r14.field.xAlignment)("rowSpan", ctx_r14.field.rowSpan)("lastFocusField", ctx_r14.field.lastFocusField)("showTitle", ctx_r14.showTitle)("layoutType", ctx_r14.layoutType)("isActive", ctx_r14.isActive);
} }
function PepperiFieldGeneratorComponent_pep_indicators_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-indicators", 34);
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext();
    ɵɵproperty("key", ctx_r15.field.key)("value", ctx_r15.field.value)("layoutType", ctx_r15.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_internal_page_17_Template(rf, ctx) { if (rf & 1) {
    const _r53 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-internal-page", 35);
    ɵɵlistener("childClicked", function PepperiFieldGeneratorComponent_pep_internal_page_17_Template_pep_internal_page_childClicked_0_listener($event) { ɵɵrestoreView(_r53); const ctx_r52 = ɵɵnextContext(); return ctx_r52.onChildClick($event); })("childChanged", function PepperiFieldGeneratorComponent_pep_internal_page_17_Template_pep_internal_page_childChanged_0_listener($event) { ɵɵrestoreView(_r53); const ctx_r54 = ɵɵnextContext(); return ctx_r54.onChildChanged($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext();
    ɵɵproperty("hasHeightLimit", ctx_r16.hasHeightLimit)("field", ctx_r16.field)("layoutType", ctx_r16.layoutType);
} }
function PepperiFieldGeneratorComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
class PepperiFieldGeneratorComponent {
    constructor() {
        this.hasHeightLimit = false;
        this.isActive = false;
        this.objectId = null;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.showTitle = true;
        this.checkForChanges = null;
        this.valueChanged = new EventEmitter();
        this.childChanged = new EventEmitter();
        this.formValidationChanged = new EventEmitter();
        this.elementClicked = new EventEmitter();
        this.notifyMenuItemClicked = new EventEmitter();
        this.notifyChildClicked = new EventEmitter();
    }
    get isValid() {
        if (this.field.readonly || this.field.disabled) {
            return true;
        }
        else {
            const formControl = this.form && this.form.get(this.field.key);
            if (formControl) {
                return formControl.valid;
            }
            else {
                return false;
            }
        }
    }
    get isTouched() {
        const formControl = this.form && this.form.get(this.field.key);
        return formControl ? formControl.touched : false;
    }
    get isDirty() {
        const formControl = this.form && this.form.get(this.field.key);
        return formControl ? formControl.dirty : false;
    }
    ngOnDestroy() {
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
    }
    onValueChanged(valueChanged) {
        this.valueChanged.emit(valueChanged);
    }
    onChildChanged(childChanged) {
        this.childChanged.emit(childChanged);
    }
    onFormValidationChanged(formValidationChanged) {
        this.formValidationChanged.emit(formValidationChanged);
    }
    onClick(fieldClicked) {
        this.elementClicked.emit(fieldClicked);
    }
    onMenuItemClicked(fieldToEdit) {
        this.notifyMenuItemClicked.emit(fieldToEdit);
    }
    onChildClick(childClicked) {
        this.notifyChildClicked.emit(childClicked);
    }
    ngOnChanges(changes) {
        // debugger;
        // TODO: Remove it only for testing.
        // this.field.disabled = this.field.readonly = false;
    }
}
PepperiFieldGeneratorComponent.ɵfac = function PepperiFieldGeneratorComponent_Factory(t) { return new (t || PepperiFieldGeneratorComponent)(); };
PepperiFieldGeneratorComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiFieldGeneratorComponent, selectors: [["pep-field-generator"]], inputs: { field: "field", hasHeightLimit: "hasHeightLimit", isActive: "isActive", objectId: "objectId", form: "form", layoutType: "layoutType", showTitle: "showTitle", checkForChanges: "checkForChanges" }, outputs: { valueChanged: "valueChanged", childChanged: "childChanged", formValidationChanged: "formValidationChanged", elementClicked: "elementClicked", notifyMenuItemClicked: "notifyMenuItemClicked", notifyChildClicked: "notifyChildClicked" }, features: [ɵɵNgOnChangesFeature], decls: 19, vars: 20, consts: [[3, "ngSwitch", "formGroup"], [3, "form", "key", "formattedValue", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "groupFields", "layoutType", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "isActive", "showTitle", "layoutType", "elementClicked", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "additionalValue", "showTitle", "layoutType", "isActive", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "minValue", "maxValue", "showTitle", "layoutType", "isActive", "valueChanged", 4, "ngSwitchCase"], [3, "objectId", "form", "key", "label", "showTitle", "value", "layoutType", 4, "ngSwitchCase"], [3, "objectId", "form", "key", "src", "srcLarge", "options", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "indicatorsField", "menuField", "hasCampaignField", "sizeLimitMB", "isActive", "layoutType", "elementClicked", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "referenceObjectInternalType", "type", "disabled", "readonly", "xAlignment", "layoutType", "elementClicked", "valueChanged", 4, "ngSwitchCase"], [3, "key", "label", "disabled", "xAlignment", "options", "layoutType", "elementClicked", "notifyMenuItemClicked", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "lastFocusField", "alowDecimal", "additionalValue", "notificationInfo", "isActive", "layoutType", "showTitle", "valueChanged", "formValidationChanged", "elementClicked", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "xAlignment", "rowSpan", "showTitle", "layoutType", "isActive", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "options", "showTitle", "layoutType", "isActive", "valueChanged", "formValidationChanged", 4, "ngSwitchCase"], [3, "form", "key", "label", "xAlignment", "layoutType", 4, "ngSwitchCase"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "isActive", "layoutType", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "lastFocusField", "showTitle", "layoutType", "isActive", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "placeholder", "type", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "lastFocusField", "showTitle", "layoutType", "isActive", "valueChanged", "formValidationChanged", 4, "ngSwitchCase"], [3, "key", "value", "layoutType", 4, "ngSwitchCase"], [3, "hasHeightLimit", "field", "layoutType", "childClicked", "childChanged", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "form", "key", "formattedValue", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "groupFields", "layoutType", "valueChanged"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "isActive", "showTitle", "layoutType", "elementClicked", "valueChanged"], [3, "form", "key", "value", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "additionalValue", "showTitle", "layoutType", "isActive", "valueChanged"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "minValue", "maxValue", "showTitle", "layoutType", "isActive", "valueChanged"], [3, "objectId", "form", "key", "label", "showTitle", "value", "layoutType"], [3, "objectId", "form", "key", "src", "srcLarge", "options", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "indicatorsField", "menuField", "hasCampaignField", "sizeLimitMB", "isActive", "layoutType", "elementClicked", "valueChanged"], [3, "form", "key", "value", "formattedValue", "label", "referenceObjectInternalType", "type", "disabled", "readonly", "xAlignment", "layoutType", "elementClicked", "valueChanged"], [3, "key", "label", "disabled", "xAlignment", "options", "layoutType", "elementClicked", "notifyMenuItemClicked"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "lastFocusField", "alowDecimal", "additionalValue", "notificationInfo", "isActive", "layoutType", "showTitle", "valueChanged", "formValidationChanged", "elementClicked"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "xAlignment", "rowSpan", "showTitle", "layoutType", "isActive", "valueChanged"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "options", "showTitle", "layoutType", "isActive", "valueChanged", "formValidationChanged"], [3, "form", "key", "label", "xAlignment", "layoutType"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "isActive", "layoutType", "valueChanged"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "lastFocusField", "showTitle", "layoutType", "isActive", "valueChanged"], [3, "form", "key", "value", "formattedValue", "label", "placeholder", "type", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "lastFocusField", "showTitle", "layoutType", "isActive", "valueChanged", "formValidationChanged"], [3, "key", "value", "layoutType"], [3, "hasHeightLimit", "field", "layoutType", "childClicked", "childChanged"]], template: function PepperiFieldGeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PepperiFieldGeneratorComponent_pep_address_1_Template, 1, 11, "pep-address", 1);
        ɵɵtemplate(2, PepperiFieldGeneratorComponent_pep_attachment_2_Template, 1, 12, "pep-attachment", 2);
        ɵɵtemplate(3, PepperiFieldGeneratorComponent_pep_checkbox_3_Template, 1, 14, "pep-checkbox", 3);
        ɵɵtemplate(4, PepperiFieldGeneratorComponent_pep_date_4_Template, 1, 17, "pep-date", 4);
        ɵɵtemplate(5, PepperiFieldGeneratorComponent_pep_images_filmstrip_5_Template, 1, 7, "pep-images-filmstrip", 5);
        ɵɵtemplate(6, PepperiFieldGeneratorComponent_pep_image_6_Template, 1, 19, "pep-image", 6);
        ɵɵtemplate(7, PepperiFieldGeneratorComponent_pep_internal_button_7_Template, 1, 11, "pep-internal-button", 7);
        ɵɵtemplate(8, PepperiFieldGeneratorComponent_pep_menu_8_Template, 1, 6, "pep-menu", 8);
        ɵɵtemplate(9, PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template, 1, 19, "pep-quantity-selector", 9);
        ɵɵtemplate(10, PepperiFieldGeneratorComponent_pep_rich_html_textarea_10_Template, 1, 13, "pep-rich-html-textarea", 10);
        ɵɵtemplate(11, PepperiFieldGeneratorComponent_pep_select_11_Template, 1, 15, "pep-select", 11);
        ɵɵtemplate(12, PepperiFieldGeneratorComponent_pep_separator_12_Template, 1, 5, "pep-separator", 12);
        ɵɵtemplate(13, PepperiFieldGeneratorComponent_pep_signature_13_Template, 1, 11, "pep-signature", 13);
        ɵɵtemplate(14, PepperiFieldGeneratorComponent_pep_textarea_14_Template, 1, 15, "pep-textarea", 14);
        ɵɵtemplate(15, PepperiFieldGeneratorComponent_pep_textbox_15_Template, 1, 18, "pep-textbox", 15);
        ɵɵtemplate(16, PepperiFieldGeneratorComponent_pep_indicators_16_Template, 1, 3, "pep-indicators", 16);
        ɵɵtemplate(17, PepperiFieldGeneratorComponent_pep_internal_page_17_Template, 1, 3, "pep-internal-page", 17);
        ɵɵtemplate(18, PepperiFieldGeneratorComponent_ng_container_18_Template, 1, 0, "ng-container", 18);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.field.controlType)("formGroup", ctx.form);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "address");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "attachment");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "checkbox");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "date");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "images");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "image");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "button");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "menu");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "qs");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "richhtmltextarea");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "select");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "separator");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "signature");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "textarea");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "textbox");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "indicators");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "internalPage");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "placeholder");
    } }, directives: [NgSwitch, NgControlStatusGroup, FormGroupDirective, NgSwitchCase, PepperiAddressComponent, PepperiAttachmentComponent, PepperiCheckboxComponent, PepperiDateComponent, PepperiImagesFilmstripComponent, PepperiImageComponent, PepperiInternalButtonComponent, PepperiMenuComponent, PepperiQuantitySelectorComponent, PepperiRichHtmlTextareaComponent, PepperiSelectComponent, PepperiSeparatorComponent, PepperiSignatureComponent, PepperiTextareaComponent, PepperiTextboxComponent, PepperiIndicatorsComponent, PepperiInternalPageComponent], styles: ["[_nghost-%COMP%]{height:100%;width:100%}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiFieldGeneratorComponent, [{
        type: Component,
        args: [{
                selector: 'pep-field-generator',
                templateUrl: './field-generator.component.html',
                styleUrls: ['./field-generator.component.scss'],
                encapsulation: ViewEncapsulation.Emulated,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { field: [{
            type: Input
        }], hasHeightLimit: [{
            type: Input
        }], isActive: [{
            type: Input
        }], objectId: [{
            type: Input
        }], form: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], checkForChanges: [{
            type: Input
        }], valueChanged: [{
            type: Output
        }], childChanged: [{
            type: Output
        }], formValidationChanged: [{
            type: Output
        }], elementClicked: [{
            type: Output
        }], notifyMenuItemClicked: [{
            type: Output
        }], notifyChildClicked: [{
            type: Output
        }] }); })();

function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-field-generator", 10);
    ɵɵlistener("valueChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_valueChanged_0_listener($event) { ɵɵrestoreView(_r11); const ctx_r10 = ɵɵnextContext(4); return ctx_r10.onValueChanged($event); })("notifyChildClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_notifyChildClicked_0_listener($event) { ɵɵrestoreView(_r11); const ctx_r12 = ɵɵnextContext(4); return ctx_r12.onChildClicked($event); })("childChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_childChanged_0_listener($event) { ɵɵrestoreView(_r11); const ctx_r13 = ɵɵnextContext(4); return ctx_r13.onChildChanged($event); })("elementClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_elementClicked_0_listener($event) { ɵɵrestoreView(_r11); const ctx_r14 = ɵɵnextContext(4); return ctx_r14.onClick($event); })("notifyMenuItemClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_notifyMenuItemClicked_0_listener($event) { ɵɵrestoreView(_r11); const ctx_r15 = ɵɵnextContext(4); return ctx_r15.onMenuItemClicked($event); })("formValidationChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_formValidationChanged_0_listener($event) { ɵɵrestoreView(_r11); const ctx_r16 = ɵɵnextContext(4); return ctx_r16.onFormValidationChanged($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r8 = ɵɵnextContext().$implicit;
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵproperty("form", ctx_r9.form)("layoutType", ctx_r9.layoutType)("checkForChanges", ctx_r9.checkForChanges)("objectId", ctx_r9.pepperiObjectInput.Data.UID)("hasHeightLimit", !ctx_r9.matrixIsLast)("field", field_r8)("showTitle", ctx_r9.showTitle);
} }
function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-grid-tile", 8);
    ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template, 1, 7, "pep-field-generator", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r8 = ctx.$implicit;
    ɵɵproperty("rowspan", field_r8.rowSpan)("colspan", field_r8.colSpan);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r8.controlType != "placeholder");
} }
function PepperiFormComponent_fieldset_0_mat_grid_list_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-grid-list", 6);
    ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_Template, 2, 3, "mat-grid-tile", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("cols", ctx_r3.columns)("rowHeight", ctx_r3.rowHeight + "rem")("gutterSize", ctx_r3.formGutterSize);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r3.fields);
} }
function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-field-generator", 15);
    ɵɵlistener("valueChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_valueChanged_0_listener($event) { ɵɵrestoreView(_r22); const ctx_r21 = ɵɵnextContext(4); return ctx_r21.onValueChanged($event); })("notifyChildClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_notifyChildClicked_0_listener($event) { ɵɵrestoreView(_r22); const ctx_r23 = ɵɵnextContext(4); return ctx_r23.onChildClicked($event); })("childChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_childChanged_0_listener($event) { ɵɵrestoreView(_r22); const ctx_r24 = ɵɵnextContext(4); return ctx_r24.onChildChanged($event); })("elementClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_elementClicked_0_listener($event) { ɵɵrestoreView(_r22); const ctx_r25 = ɵɵnextContext(4); return ctx_r25.onClick($event); })("notifyMenuItemClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_notifyMenuItemClicked_0_listener($event) { ɵɵrestoreView(_r22); const ctx_r26 = ɵɵnextContext(4); return ctx_r26.onMenuItemClicked($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r19 = ɵɵnextContext().$implicit;
    const ctx_r20 = ɵɵnextContext(3);
    ɵɵproperty("form", ctx_r20.form)("layoutType", ctx_r20.layoutType)("isActive", ctx_r20.isActive)("checkForChanges", ctx_r20.checkForChanges)("objectId", ctx_r20.pepperiObjectInput.Data.UID)("hasHeightLimit", !ctx_r20.matrixIsLast)("field", field_r19)("showTitle", ctx_r20.showTitle);
} }
const _c0$3 = function (a0) { return { overflow: a0 }; };
function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-grid-tile", 13);
    ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template, 1, 8, "pep-field-generator", 14);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r19 = ctx.$implicit;
    ɵɵproperty("rowspan", field_r19.rowSpan)("colspan", field_r19.colSpan)("ngStyle", ɵɵpureFunction1(4, _c0$3, field_r19.type == "qs" ? "unset" : "hidden"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r19.controlType != "placeholder");
} }
const _c1$2 = function (a0) { return { "lock-events": a0 }; };
function PepperiFormComponent_fieldset_0_mat_grid_list_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-grid-list", 11);
    ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_Template, 2, 6, "mat-grid-tile", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("cols", ctx_r4.columns)("rowHeight", ctx_r4.rowHeight + "rem")("gutterSize", ctx_r4.cardGutterSize)("ngClass", ɵɵpureFunction1(5, _c1$2, ctx_r4.lockEvents));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.fields);
} }
function PepperiFormComponent_fieldset_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 19);
} if (rf & 2) {
    ɵɵnextContext(3);
    const _r1 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", _r1);
} }
function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-field-generator", 23);
    ɵɵlistener("valueChanged", function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template_pep_field_generator_valueChanged_0_listener($event) { ɵɵrestoreView(_r39); const ctx_r38 = ɵɵnextContext(5); return ctx_r38.onValueChanged($event); })("elementClicked", function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template_pep_field_generator_elementClicked_0_listener($event) { ɵɵrestoreView(_r39); const ctx_r40 = ɵɵnextContext(5); return ctx_r40.onClick($event); })("notifyMenuItemClicked", function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template_pep_field_generator_notifyMenuItemClicked_0_listener($event) { ɵɵrestoreView(_r39); const ctx_r41 = ɵɵnextContext(5); return ctx_r41.onMenuItemClicked($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r35 = ɵɵnextContext().$implicit;
    const ctx_r37 = ɵɵnextContext(4);
    ɵɵproperty("checkForChanges", ctx_r37.checkForChanges)("objectId", ctx_r37.pepperiObjectInput.Data.UID)("field", field_r35)("form", ctx_r37.form)("layoutType", ctx_r37.layoutType)("showTitle", false)("isActive", ctx_r37.isActive);
} }
const _c2$2 = function (a0) { return [a0]; };
const _c3$2 = function (a0) { return { width: a0 }; };
function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template, 1, 7, "pep-field-generator", 22);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r35 = ctx.$implicit;
    const j_r36 = ctx.index;
    const ctx_r34 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c2$2, "text-align-" + field_r35.xAlignment))("ngStyle", ɵɵpureFunction1(5, _c3$2, ctx_r34.uiControlHeader == null ? null : ctx_r34.uiControlHeader.ControlFields[j_r36] == null ? null : ctx_r34.uiControlHeader.ControlFields[j_r36].calcColumnWidthString));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r35.controlType != "placeholder");
} }
function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_Template, 2, 7, "div", 20);
} if (rf & 2) {
    const ctx_r32 = ɵɵnextContext(3);
    ɵɵproperty("ngForOf", ctx_r32.fields);
} }
function PepperiFormComponent_fieldset_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiFormComponent_fieldset_0_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵtemplate(2, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 17, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_Template, 1, 1, "ng-template", null, 18, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r29 = ɵɵreference(3);
    const _r31 = ɵɵreference(5);
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.isReport)("ngIfThen", _r29)("ngIfElse", _r31);
} }
function PepperiFormComponent_fieldset_0_ng_container_4_div_1_pep_field_generator_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-field-generator", 27);
    ɵɵlistener("valueChanged", function PepperiFormComponent_fieldset_0_ng_container_4_div_1_pep_field_generator_1_Template_pep_field_generator_valueChanged_0_listener($event) { ɵɵrestoreView(_r48); const ctx_r47 = ɵɵnextContext(4); return ctx_r47.onValueChanged($event); })("elementClicked", function PepperiFormComponent_fieldset_0_ng_container_4_div_1_pep_field_generator_1_Template_pep_field_generator_elementClicked_0_listener($event) { ɵɵrestoreView(_r48); const ctx_r49 = ɵɵnextContext(4); return ctx_r49.onClick($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r44 = ɵɵnextContext().$implicit;
    const ctx_r46 = ɵɵnextContext(3);
    ɵɵproperty("checkForChanges", ctx_r46.checkForChanges)("objectId", ctx_r46.pepperiObjectInput.Data.UID)("field", field_r44)("form", ctx_r46.form)("layoutType", ctx_r46.layoutType)("showTitle", false)("isActive", ctx_r46.isActive);
} }
function PepperiFormComponent_fieldset_0_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 25);
    ɵɵtemplate(1, PepperiFormComponent_fieldset_0_ng_container_4_div_1_pep_field_generator_1_Template, 1, 7, "pep-field-generator", 26);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r44 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r44.controlType != "placeholder");
} }
function PepperiFormComponent_fieldset_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiFormComponent_fieldset_0_ng_container_4_div_1_Template, 2, 1, "div", 24);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r6.fields);
} }
const _c4$2 = function (a0) { return { "background-color": a0 }; };
const _c5$2 = function (a0, a1) { return { "material-form": a0, cardView: a1 }; };
function PepperiFormComponent_fieldset_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "fieldset", 2);
    ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_1_Template, 2, 4, "mat-grid-list", 3);
    ɵɵtemplate(2, PepperiFormComponent_fieldset_0_mat_grid_list_2_Template, 2, 7, "mat-grid-list", 4);
    ɵɵtemplate(3, PepperiFormComponent_fieldset_0_ng_container_3_Template, 6, 3, "ng-container", 5);
    ɵɵtemplate(4, PepperiFormComponent_fieldset_0_ng_container_4_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r0.form)("disabled", ctx_r0.isLocked)("ngStyle", ɵɵpureFunction1(8, _c4$2, ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiCard && (ctx_r0.pepperiObjectInput == null ? null : ctx_r0.pepperiObjectInput.Data == null ? null : ctx_r0.pepperiObjectInput.Data.BackgroundColor)))("ngClass", ɵɵpureFunction2(10, _c5$2, ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiForm, ctx_r0.isCardView == true));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiForm);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiCard);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiTable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.Editmodal);
} }
function PepperiFormComponent_ng_template_1_div_0_pep_image_2_Template(rf, ctx) { if (rf & 1) {
    const _r62 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-image", 38);
    ɵɵlistener("elementClicked", function PepperiFormComponent_ng_template_1_div_0_pep_image_2_Template_pep_image_elementClicked_0_listener($event) { ɵɵrestoreView(_r62); const ctx_r61 = ɵɵnextContext(3); return ctx_r61.onClick($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r52 = ɵɵnextContext().$implicit;
    const ctx_r54 = ɵɵnextContext(2);
    ɵɵproperty("objectId", ctx_r54.objectId)("form", ctx_r54.form)("key", field_r52.key)("src", field_r52.formattedValue)("srcLarge", field_r52.value)("options", field_r52.options)("label", field_r52.label)("type", field_r52.type)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("layoutType", ctx_r54.layoutType);
} }
function PepperiFormComponent_ng_template_1_div_0_pep_signature_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-signature", 39);
} if (rf & 2) {
    const field_r52 = ɵɵnextContext().$implicit;
    const ctx_r55 = ɵɵnextContext(2);
    ɵɵproperty("form", ctx_r55.form)("key", field_r52.key)("src", field_r52.value)("label", field_r52.label)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("layoutType", ctx_r55.layoutType);
} }
function PepperiFormComponent_ng_template_1_div_0_pep_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-checkbox", 40);
} if (rf & 2) {
    const field_r52 = ɵɵnextContext().$implicit;
    const ctx_r56 = ɵɵnextContext(2);
    ɵɵproperty("form", ctx_r56.form)("key", field_r52.key)("value", field_r52.value)("label", field_r52.label)("type", field_r52.type)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("additionalValue", field_r52.additionalValue)("layoutType", ctx_r56.layoutType);
} }
function PepperiFormComponent_ng_template_1_div_0_pep_internal_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r67 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-internal-button", 41);
    ɵɵlistener("elementClicked", function PepperiFormComponent_ng_template_1_div_0_pep_internal_button_5_Template_pep_internal_button_elementClicked_0_listener($event) { ɵɵrestoreView(_r67); const ctx_r66 = ɵɵnextContext(3); return ctx_r66.onClick($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r52 = ɵɵnextContext().$implicit;
    const ctx_r57 = ɵɵnextContext(2);
    ɵɵproperty("form", ctx_r57.form)("key", field_r52.key)("value", field_r52.value)("formattedValue", field_r52.formattedValue)("label", field_r52.label)("type", field_r52.type)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("xAlignment", field_r52.xAlignment)("layoutType", ctx_r57.layoutType);
} }
function PepperiFormComponent_ng_template_1_div_0_pep_textarea_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "pep-textarea", 42);
} if (rf & 2) {
    const field_r52 = ɵɵnextContext().$implicit;
    const ctx_r58 = ɵɵnextContext(2);
    ɵɵproperty("form", ctx_r58.form)("key", field_r52.key)("value", field_r52.value)("label", field_r52.label)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("maxFieldCharacters", field_r52.maxFieldCharacters)("textColor", field_r52.textColor)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("layoutType", ctx_r58.layoutType);
} }
function PepperiFormComponent_ng_template_1_div_0_pep_quantity_selector_7_Template(rf, ctx) { if (rf & 1) {
    const _r71 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pep-quantity-selector", 43);
    ɵɵlistener("valueChanged", function PepperiFormComponent_ng_template_1_div_0_pep_quantity_selector_7_Template_pep_quantity_selector_valueChanged_0_listener($event) { ɵɵrestoreView(_r71); const ctx_r70 = ɵɵnextContext(3); return ctx_r70.onValueChanged($event); })("elementClicked", function PepperiFormComponent_ng_template_1_div_0_pep_quantity_selector_7_Template_pep_quantity_selector_elementClicked_0_listener($event) { ɵɵrestoreView(_r71); const ctx_r72 = ɵɵnextContext(3); return ctx_r72.onClick($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r52 = ɵɵnextContext().$implicit;
    const ctx_r59 = ɵɵnextContext(2);
    ɵɵproperty("id", field_r52.key)("form", ctx_r59.form)("key", field_r52.key)("value", field_r52.value)("formattedValue", field_r52.formattedValue)("label", field_r52.label)("type", field_r52.type)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("textColor", field_r52.textColor)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("layoutType", ctx_r59.layoutType);
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_1_a_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 49);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r52 = ɵɵnextContext(4).$implicit;
    ɵɵpropertyInterpolate("title", field_r52.formattedValue);
    ɵɵpropertyInterpolate("href", field_r52.value, ɵɵsanitizeUrl);
    ɵɵproperty("id", field_r52.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate(field_r52.formattedValue);
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_1_a_0_Template, 2, 4, "a", 48);
} if (rf & 2) {
    const field_r52 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngIf", field_r52.formattedValue != null);
} }
const _c6$1 = function (a0) { return { color: a0 }; };
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 50);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r52 = ɵɵnextContext(3).$implicit;
    ɵɵpropertyInterpolate("title", field_r52.formattedValue);
    ɵɵproperty("id", field_r52.key)("ngStyle", ɵɵpureFunction1(4, _c6$1, field_r52.textColor));
    ɵɵadvance(1);
    ɵɵtextInterpolate(field_r52.formattedValue);
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 16);
    ɵɵtemplate(1, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 46, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_3_Template, 2, 6, "ng-template", null, 47, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r80 = ɵɵreference(2);
    const _r82 = ɵɵreference(4);
    const field_r52 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngIf", field_r52.type === "attachment" || field_r52.type === "link")("ngIfThen", _r80)("ngIfElse", _r82);
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "\u00A0");
    ɵɵelementEnd();
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵtemplate(2, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_Template, 5, 3, "ng-template", null, 44, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_4_Template, 2, 0, "ng-template", null, 45, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r75 = ɵɵreference(3);
    const _r77 = ɵɵreference(5);
    const field_r52 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (field_r52.formattedValue == null ? null : field_r52.formattedValue.length) > 0)("ngIfThen", _r75)("ngIfElse", _r77);
} }
function PepperiFormComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 29);
    ɵɵelementContainerStart(1, 30);
    ɵɵtemplate(2, PepperiFormComponent_ng_template_1_div_0_pep_image_2_Template, 1, 14, "pep-image", 31);
    ɵɵtemplate(3, PepperiFormComponent_ng_template_1_div_0_pep_signature_3_Template, 1, 10, "pep-signature", 32);
    ɵɵtemplate(4, PepperiFormComponent_ng_template_1_div_0_pep_checkbox_4_Template, 1, 12, "pep-checkbox", 33);
    ɵɵtemplate(5, PepperiFormComponent_ng_template_1_div_0_pep_internal_button_5_Template, 1, 10, "pep-internal-button", 34);
    ɵɵtemplate(6, PepperiFormComponent_ng_template_1_div_0_pep_textarea_6_Template, 1, 12, "pep-textarea", 35);
    ɵɵtemplate(7, PepperiFormComponent_ng_template_1_div_0_pep_quantity_selector_7_Template, 1, 14, "pep-quantity-selector", 36);
    ɵɵtemplate(8, PepperiFormComponent_ng_template_1_div_0_ng_container_8_Template, 6, 3, "ng-container", 37);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const field_r52 = ctx.$implicit;
    const j_r53 = ctx.index;
    const ctx_r51 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(9, _c3$2, ctx_r51.uiControlHeader == null ? null : ctx_r51.uiControlHeader.ControlFields[j_r53] == null ? null : ctx_r51.uiControlHeader.ControlFields[j_r53].calcColumnWidthString))("ngClass", ɵɵpureFunction1(11, _c2$2, "text-align-" + field_r52.xAlignment));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", field_r52.controlType);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "image");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "signature");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "checkbox");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "button");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "textarea");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "qs");
} }
function PepperiFormComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PepperiFormComponent_ng_template_1_div_0_Template, 9, 13, "div", 28);
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r2.fields);
} }
// tslint:disable-next-line: no-conflicting-lifecycle
class PepperiFormComponent {
    constructor(dialogService, customizationService, translate, fb, differs) {
        this.dialogService = dialogService;
        this.customizationService = customizationService;
        this.translate = translate;
        this.fb = fb;
        this.isReport = false;
        this.lockEvents = false;
        this.canEditObject = true;
        this.isActive = false;
        this.layoutType = LAYOUT_TYPE.PepperiForm;
        this.listType = '';
        this.objectId = '0';
        this.parentId = '0';
        this.searchCode = '0';
        this.showTitle = true;
        this.firstFieldAsLink = false;
        this.isCardView = false;
        this.checkForChanges = null;
        this.pageType = '';
        this.notifyValueChanged = new EventEmitter();
        this.formValidationChanged = new EventEmitter();
        this.childClicked = new EventEmitter();
        this.childChanged = new EventEmitter();
        this.notifyFieldClicked = new EventEmitter();
        this.notifyMenuItemClicked = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
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
    static convertAddressFields(controlField, addressFields, canEditObject) {
        const fields = [];
        addressFields.forEach(field => {
            let customField;
            const placeholder = field.ApiName;
            if (field.ApiName.toLowerCase().indexOf('street') >= 0) {
                customField = new PepperiTextboxField({
                    key: field.ApiName,
                    label: field.ApiName,
                    type: 'text',
                    placeholder,
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
                customField = new PepperiTextboxField({
                    key: field.ApiName,
                    label: field.ApiName,
                    type: 'text',
                    placeholder,
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
                customField = new PepperiSelectField({
                    key: field.ApiName,
                    label: field.ApiName,
                    placeholder,
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
                customField = new PepperiTextboxField({
                    key: field.ApiName,
                    label: field.ApiName,
                    type: 'text',
                    placeholder,
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
                customField = new PepperiSelectField({
                    key: field.ApiName,
                    label: field.ApiName,
                    placeholder,
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
        return fields.sort((n1, n2) => (n1.order > n2.order ? 1 : n1.order < n2.order ? -1 : 0));
    }
    static isMatrixField(apiNameToCheck) {
        return apiNameToCheck.indexOf('Matrix') >= 0;
    }
    static doesFieldHavaFloatingField(controlField, floatingField) {
        let hasFloatingField = false;
        if (floatingField.Layout.Y >= controlField.Layout.Y &&
            floatingField.Layout.Y < controlField.Layout.Y + controlField.Layout.Height &&
            floatingField.Layout.X >= controlField.Layout.X &&
            floatingField.Layout.X < controlField.Layout.X + controlField.Layout.Width) {
            hasFloatingField = true;
        }
        return hasFloatingField;
    }
    static getOptionsForCustomField(controlField, dataField, canEditObject) {
        if (!controlField || !dataField) {
            return;
        }
        const placeholder = controlField.ReadOnly || !canEditObject ? '' : controlField.Title;
        return {
            key: controlField.ApiName,
            label: controlField.Title,
            type: 'text',
            accessory: dataField.Accessory,
            placeholder,
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
    }
    static convertToCustomField(controlField, dataField, canEditObject, menuField, hasCampaignField, indicatorsField, objectId, parentId, searchCode) {
        let customField;
        const options = PepperiFormComponent.getOptionsForCustomField(controlField, dataField, canEditObject);
        if (controlField.ApiName === 'ObjectMenu') {
            options.type = 'menu';
            if (dataField.TransactionItemType === 1 && dataField.OptionalValues.length > 0) {
                const subMenuOptions = [{ Key: 'EditPackage', Value: 'Edit' }, { Key: 'DeletePackage', Value: 'Delete' }];
                options.options = subMenuOptions.filter(option => option && dataField.OptionalValues.includes(option.Key));
            }
            else {
                options.options = null;
            }
            customField = new PepperiMenuField(options);
        }
        else if (controlField.ApiName === 'QuantitySelector' ||
            controlField.ApiName === 'UnitsQuantity' ||
            controlField.ApiName.indexOf('size_') === 0) {
            if (dataField.FieldType === FIELD_TYPE.InternalLink) {
                options.type = 'button';
            }
            else if (dataField.FieldType === FIELD_TYPE.Package) {
                options.type = 'packageButton';
            }
            else if (dataField.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                dataField.FieldType === FIELD_TYPE.NumberReal) {
                options.type = 'qs';
                options.alowDecimal = true;
            }
            else if (dataField.FieldType === FIELD_TYPE.NumberIntegerQuantitySelector ||
                dataField.FieldType === FIELD_TYPE.NumberInteger) {
                options.type = 'qs';
                options.alowDecimal = false;
            }
            else if (dataField.FieldType === FIELD_TYPE.NumberIntegerForMatrix) {
                options.type = 'qsForMatrix';
                options.alowDecimal = false;
            }
            else if (dataField.FieldType === FIELD_TYPE.NumberRealForMatrix) {
                options.type = 'qsForMatrix';
                options.alowDecimal = true;
            }
            customField = new PepperiQuantitySelectorField(options);
        }
        else {
            // Hack need to remove this..
            if (dataField.FieldType === FIELD_TYPE.Indicators && PepperiFormComponent.isMatrixField(dataField.ApiName)) {
                dataField.FieldType = FIELD_TYPE.InternalPage;
            }
            switch (dataField.FieldType) {
                case FIELD_TYPE.Address: {
                    const canEditGroupObject = controlField.ReadOnly ? false : canEditObject;
                    options.groupFields = PepperiFormComponent.convertAddressFields(controlField, dataField.GroupFields, canEditGroupObject);
                    customField = new PepperiAddressField(options);
                    break;
                }
                case FIELD_TYPE.Indicators: {
                    // options['type'] = 'indicators'; // Not needed this is PepperiIndicatorsField.
                    customField = new PepperiIndicatorsField(options);
                    break;
                }
                case FIELD_TYPE.InternalPage: {
                    if (PepperiFormComponent.isMatrixField(controlField.ApiName)) {
                        options.rowSpan = controlField.Layout.Height;
                        options.objectId = objectId;
                        options.parentId = parentId;
                        options.searchCode = searchCode;
                        customField = new PepperiInternalPageField(options);
                    }
                    else {
                        // Not supported
                    }
                    break;
                }
                case FIELD_TYPE.Link: {
                    options.type = 'link';
                    customField = new PepperiTextboxField(options);
                    // DI-11292 - add changes for link field for the "Read Only display value" prop
                    customField.formattedValue = customField.disabled && customField.formattedValue !== '' &&
                        customField.value !== '' ? customField.formattedValue : customField.value;
                    break;
                }
                case FIELD_TYPE.InternalLink:
                case FIELD_TYPE.Button: {
                    options.type = 'button';
                    customField = new PepperiButtonField(options);
                    break;
                }
                case FIELD_TYPE.Attachment: {
                    options.type = 'attachment';
                    customField = new PepperiAttachmentField(options);
                    break;
                }
                case FIELD_TYPE.Signature: {
                    options.type = 'signature';
                    customField = new PepperiSignatureField(options);
                    break;
                }
                case FIELD_TYPE.Image:
                case FIELD_TYPE.ImageURL: {
                    options.type = 'image';
                    options.menuField = menuField && this.doesFieldHavaFloatingField(controlField, menuField) ? menuField : null;
                    options.hasCampaignField = hasCampaignField &&
                        this.doesFieldHavaFloatingField(controlField, hasCampaignField) ? hasCampaignField : null;
                    options.indicatorsField = indicatorsField &&
                        this.doesFieldHavaFloatingField(controlField, indicatorsField) ? indicatorsField : null;
                    customField = new PepperiImageField(options);
                    break;
                }
                case FIELD_TYPE.Images: {
                    options.type = 'images';
                    customField = new PepperiImagesField(options);
                    break;
                }
                case FIELD_TYPE.Email: {
                    options.type = 'email';
                    customField = new PepperiTextboxField(options);
                    break;
                }
                case FIELD_TYPE.Phone: {
                    options.type = 'phone';
                    customField = new PepperiTextboxField(options);
                    break;
                }
                case FIELD_TYPE.Duration: {
                    options.type = 'duration';
                    customField = new PepperiTextboxField(options);
                    break;
                }
                case FIELD_TYPE.Default:
                case FIELD_TYPE.TextBox:
                case FIELD_TYPE.LimitedLengthTextBox:
                case FIELD_TYPE.TextHeader:
                case FIELD_TYPE.CalculatedString:
                case FIELD_TYPE.MapDataString: {
                    customField = new PepperiTextboxField(options);
                    break;
                }
                case FIELD_TYPE.TextArea: {
                    customField = new PepperiTextareaField(options);
                    break;
                }
                case FIELD_TYPE.RichTextHTML: {
                    customField = new PepperiRichHtmlTextareaField(options);
                    break;
                }
                case FIELD_TYPE.Date:
                case FIELD_TYPE.LimitedDate:
                case FIELD_TYPE.CalculatedDate:
                case FIELD_TYPE.DateAndTime: {
                    options.type = dataField.FieldType === FIELD_TYPE.DateAndTime ? 'datetime' : 'date';
                    customField = new PepperiDateField(options);
                    break;
                }
                case FIELD_TYPE.NumberInteger:
                case FIELD_TYPE.CalculatedInt:
                case FIELD_TYPE.MapDataInt: {
                    options.type = 'int';
                    customField = new PepperiTextboxField(options);
                    break;
                }
                case FIELD_TYPE.Percentage: {
                    options.type = 'percentage';
                    customField = new PepperiTextboxField(options);
                    break;
                }
                case FIELD_TYPE.Currency: {
                    options.type = 'currency';
                    customField = new PepperiTextboxField(options);
                    break;
                }
                case FIELD_TYPE.NumberReal:
                case FIELD_TYPE.CalculatedReal:
                case FIELD_TYPE.MapDataReal:
                case FIELD_TYPE.Sum:
                case FIELD_TYPE.Totals: {
                    options.type = 'real';
                    customField = new PepperiTextboxField(options);
                    break;
                }
                case FIELD_TYPE.Boolean:
                case FIELD_TYPE.CalculatedBool: {
                    customField = new PepperiCheckboxField(options);
                    break;
                }
                case FIELD_TYPE.BooleanText: {
                    options.type = 'booleanText';
                    customField = new PepperiCheckboxField(options);
                    break;
                }
                case FIELD_TYPE.ComboBox:
                case FIELD_TYPE.EmptyComboBox:
                case FIELD_TYPE.MapDataDropDown: {
                    // options.type = 'select';
                    customField = new PepperiSelectField(options);
                    break;
                }
                case FIELD_TYPE.MultiTickBox:
                case FIELD_TYPE.MultiTickBoxToComboBox:
                case FIELD_TYPE.EmptyMultiTickBox: {
                    options.type = 'multi';
                    customField = new PepperiSelectField(options);
                    break;
                }
                case FIELD_TYPE.GuidReferenceType: {
                    options.type = 'reference';
                    options.referenceObjectType = dataField.ReferenceObjectType;
                    options.referenceObjectSubType = dataField.ReferenceObjectSubType;
                    options.referenceObjectInternalType = dataField.ReferenceObjectInternalType;
                    customField = new PepperiButtonField(options);
                    break;
                }
                case FIELD_TYPE.ListOfObjects: {
                    options.type = 'listofobjects';
                    customField = new PepperiButtonField(options);
                    break;
                }
                case FIELD_TYPE.Separator: {
                    customField = new PepperiSeparatorField(options);
                    break;
                }
                /*
                    case FIELD_TYPE.Images: return that.field(value);
                */
                case FIELD_TYPE.NumberRealQuantitySelector:
                case FIELD_TYPE.NumberIntegerQuantitySelector: {
                    options.type = 'qs';
                    options.alowDecimal = dataField.FieldType === FIELD_TYPE.NumberRealQuantitySelector;
                    customField = new PepperiQuantitySelectorField(options);
                    break;
                }
                case FIELD_TYPE.Package: {
                    options.type = 'packageButton';
                    customField = new PepperiQuantitySelectorField(options);
                    break;
                }
            }
        }
        if (!customField) {
            options.label = controlField.ApiName + ' is not supported!!!';
            customField = new PepperiSeparatorField(options);
        }
        return customField;
    }
    static getFieldFormattedValue(field) {
        let fieldFormattedValue = field.formattedValue;
        // Fix for the custom check box component.
        if (field.controlType === 'checkbox') {
            fieldFormattedValue = fieldFormattedValue === 'true';
        }
        // Fix for the custom button component.
        if (field.controlType === 'button') {
            fieldFormattedValue = fieldFormattedValue === '0' ? '' : fieldFormattedValue;
        }
        return fieldFormattedValue;
    }
    static toControlGroup(fields, fb, customizationService) {
        const group = {};
        if (fields && fields.length > 0) {
            fields.forEach(field => {
                if (field.groupFields && field.groupFields.length > 0) {
                    const subGroup = {};
                    field.groupFields.forEach(groupField => {
                        if (groupField.required && (!field.readonly && !field.disabled)) {
                            subGroup[groupField.key] = [{
                                    value: groupField.formattedValue || '',
                                    disabled: field.readonly || field.disabled || groupField.disabled
                                }, [Validators.required]];
                        }
                        else {
                            subGroup[groupField.key] = [{
                                    value: groupField.formattedValue || '',
                                    disabled: field.readonly || field.disabled || groupField.disabled
                                }, [Validators.nullValidator]];
                        }
                    });
                    group[field.key] = fb.group(subGroup);
                }
                else {
                    const validators = customizationService.getValidatorsForField(field.required, field.readonly, field.disabled, field.maxFieldCharacters, field.type, field.controlType === 'checkbox');
                    const fieldFormattedValue = PepperiFormComponent.getFieldFormattedValue(field);
                    group[field.key] = [{ value: fieldFormattedValue || '', disabled: field.disabled }, validators];
                }
            });
        }
        return fb.group(group);
    }
    showFormValidationMessage() {
        const fields = this.fields;
        let emptyMandatoryFieldsMsg = '';
        let notValidFieldsMsg = '';
        // for (let i: number = 0; i < fields.length; i++) {
        //     let field = fields[i];
        for (const field of fields) {
            const formControl = this.form && this.form.get(field.key);
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
        const title = this.translate.instant('MESSAGES.TITLE_NOTICE');
        const data = new DialogData({
            title,
            content: emptyMandatoryFieldsMsg + notValidFieldsMsg,
            contentType: DialogDataType.Html
        });
        this.dialogService.openDefaultDialog(data);
    }
    ngOnInit() {
        const themeVars = this.customizationService.getThemeVariables();
        // convert rem to pixel
        const RemToPixel = 16;
        this.formGutterSize = this.customizationService.getNumberThemeVariable(themeVars, CustomizationService.FORM_SPACEING_KEY) * RemToPixel;
        this.cardGutterSize = this.customizationService.getNumberThemeVariable(themeVars, CustomizationService.CARD_SPACEING_KEY) * RemToPixel;
    }
    ngDoCheck() {
        const changes = this.differ.diff(this.pepperiObjectInput); // check for changes
        if (changes) {
            this.updateForm(true);
        }
    }
    ngOnChanges(changes) {
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
    }
    ngOnDestroy() {
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
    }
    getUiControlFields() {
        return this.uiControlHeader ?
            this.uiControlHeader.ControlFields :
            this.pepperiObjectInput.UIControl.ControlFields;
    }
    initFieldsStructure(fields, maxRow) {
        const themeVars = this.customizationService.getThemeVariables();
        // Set form row height.
        if (this.layoutType === LAYOUT_TYPE.PepperiCard) {
            const cardFieldHeight = this.customizationService.getNumberThemeVariable(themeVars, CustomizationService.CARD_FIELD_HEIGHT_KEY);
            this.rowHeight = cardFieldHeight;
        }
        else {
            const rowFieldHeight = this.customizationService.getNumberThemeVariable(themeVars, CustomizationService.FORM_FIELD_HEIGHT_KEY);
            const rowFieldTitleHeight = this.customizationService.getNumberThemeVariable(themeVars, CustomizationService.FORM_FIELD_TITLE_HEIGHT_KEY);
            this.rowHeight = rowFieldHeight + rowFieldTitleHeight;
        }
        // Create the fields structure (the fields must be sorted!!!).
        if (fields.length > 0) {
            // Init the layout.
            if (
            // this.layoutType === LAYOUT_TYPE.PepperiForm ||
            this.layoutType === LAYOUT_TYPE.PepperiTable ||
                this.layoutType === LAYOUT_TYPE.Editmodal) {
                this.fields = fields;
                this.rows = [];
                for (let i = 0; i <= maxRow; i++) {
                    this.rows[i] = [];
                }
                // for (let i = 0; i < fields.length; i++) {
                // const field = fields[i]
                for (const field of fields) {
                    this.rows[field.row].push(field);
                }
            }
            else {
                const doesfieldExistIn = new Array(maxRow);
                for (let i = 0; i < doesfieldExistIn.length; i++) {
                    doesfieldExistIn[i] = new Array(this.columns);
                    for (let j = 0; j < doesfieldExistIn[i].length; j++) {
                        doesfieldExistIn[i][j] = false;
                    }
                }
                // Run in squere (row - colspan, col - rowspan) and put true where it should.
                // for (let index = 0; index < fields.length; index++) {
                //     const currentField = fields[index];
                for (const currentField of fields) {
                    if (currentField.rowSpan > 1) {
                        for (let row = currentField.row; row < currentField.row + currentField.rowSpan; row++) {
                            if (currentField.colSpan > 1) {
                                for (let col = currentField.col; col < currentField.col + currentField.colSpan; col++) {
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
                        for (let col = currentField.col; col < currentField.col + currentField.colSpan; col++) {
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
                // Create empty fields where doesfieldExistIn is false (For the md-grid-list UI Component).
                for (let i = 0; i < doesfieldExistIn.length; i++) {
                    for (let j = 0; j < doesfieldExistIn[i].length; j++) {
                        if (!doesfieldExistIn[i][j]) {
                            // Create empty field and add it to the fields list.
                            fields.push(new PepperiPlaceholderField({
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
                this.fields = fields.sort((f1, f2) => (f1.row > f2.row ?
                    1 : f1.row < f2.row ?
                    -1 : f1.col > f2.col ?
                    1 : f1.col < f2.col ? -1 : 0));
            }
        }
    }
    setForm(isForUpdate = false) {
        let allFieldsAreReadOnly = true;
        if (!isForUpdate) {
            const fields = [];
            // for (let i = 0; i < this.fields.length; i++) {
            // const currentField = this.fields[i];
            for (const currentField of this.fields) {
                // Add all fields except 'internalPage' type (for children).
                if (currentField.controlType !== 'internalPage') {
                    fields.push(currentField);
                }
                if (!currentField.readonly) {
                    allFieldsAreReadOnly = false;
                }
            }
            this.form = PepperiFormComponent.toControlGroup(fields, this.fb, this.customizationService);
        }
        else {
            // Update form values if changed by calculated fields.
            // for (let i = 0; i < this.fields.length; i++) {
            // const currentField = this.fields[i];
            for (const currentField of this.fields) {
                if (currentField.controlType !== 'internalPage') {
                    if (currentField.groupFields && currentField.groupFields.length > 0) {
                        // for (let j = 0; j < currentField.groupFields.length; j++) {
                        //     let currentGroupField = currentField.groupFields[j];
                        for (const currentGroupField of currentField.groupFields) {
                            const fieldFormattedValue = PepperiFormComponent.getFieldFormattedValue(currentGroupField);
                            this.customizationService.updateFormField(this.form, currentGroupField, fieldFormattedValue, currentField);
                        }
                    }
                    else {
                        const fieldFormattedValue = PepperiFormComponent.getFieldFormattedValue(currentField);
                        // this.form.controls[currentField.key].setValue(fieldFormattedValue);
                        this.customizationService.updateFormField(this.form, currentField, fieldFormattedValue);
                    }
                }
                if (!currentField.readonly) {
                    allFieldsAreReadOnly = false;
                }
            }
        }
        let isFormValid = this.form.valid;
        // Change validation to true if all fields are read only. (By Amir.L request).
        if (!isFormValid && allFieldsAreReadOnly) {
            isFormValid = true;
        }
        this.onFormValidationChanged(isFormValid);
        // Set it to false to enable all fields.
        this.isLocked = false;
    }
    initForm(changes) {
        if (this.pepperiObjectInput.Data && this.pepperiObjectInput.Data.Fields) {
            const fields = this.convertCustomFields(this.getUiControlFields(), this.pepperiObjectInput.Data.Fields);
            const maxRow = Math.max.apply(Math, fields.map((f) => {
                return f.row + f.rowSpan;
            }));
            this.columns = Math.max.apply(Math, fields.map((f) => {
                return f.col + f.colSpan;
            }));
            this.initFieldsStructure(fields, maxRow);
            this.setForm();
        }
    }
    updateForm(cleanLastFocusedField = false) {
        if (this.pepperiObjectInput.Data && this.pepperiObjectInput.Data.Fields) {
            // for (let i = 0; i < this.pepperiObjectInput.Data.Fields.length; i++) {
            // let currentField = this.pepperiObjectInput.Data.Fields[i];
            for (const currentField of this.pepperiObjectInput.Data.Fields) {
                const customField = this.fields.filter(f => f.key === currentField.ApiName)[0];
                // Update all fields except 'internalPage' type (for children).
                if (customField && customField.controlType !== 'internalPage') {
                    const hasFocus = this.lastFocusedField && this.lastFocusedField.id === customField.key;
                    customField.updateField(currentField, this.canEditObject, hasFocus ? this.lastFocusedField : null);
                    // Update the group fields.
                    if (customField.controlType === 'address' && currentField.GroupFields) {
                        // for (let j = 0; j < currentField.GroupFields.length; j++) {
                        // let currentGroupField = currentField.GroupFields[j];
                        for (const currentGroupField of currentField.GroupFields) {
                            currentGroupField.Enabled = !currentField.Enabled ? false : currentGroupField.Enabled;
                            const customGroupField = customField.groupFields.filter(f => f.key === currentGroupField.ApiName)[0];
                            const hasGroupFocus = this.lastFocusedField && this.lastFocusedField.id === customGroupField.key;
                            customGroupField.updateField(currentGroupField, this.canEditObject, hasGroupFocus ? this.lastFocusedField : null);
                        }
                    }
                }
            }
            this.setForm(true);
            if (cleanLastFocusedField) {
                // Clean the last focused field.
                this.lastFocusedField = null;
            }
        }
    }
    ReloadForm() {
        this.shouldReloadForm = true;
    }
    // onSubmit() {
    //     if (this.form.valid) {
    //         this.payLoad = JSON.stringify(this.form.value);
    //         //this.submitted.emit(this.form.value);
    //     }
    // }
    getFormControlById(key) {
        const self = this;
        let formControl = null;
        this.fields.forEach((field) => {
            if (field.key === key) {
                formControl = self.form.get(field.key);
                return;
            }
            else if (field.groupFields && field.groupFields.length > 0) {
                field.groupFields.forEach((groupField) => {
                    if (groupField.key === key) {
                        formControl = self.form.get(field.key + '.' + groupField.key);
                        return;
                    }
                });
            }
        });
        return formControl;
    }
    setSpecialFields(controlFields, dataFields) {
        // let cf;
        // for (let index = 0; index < controlFields.length; index++) {
        //     cf = controlFields[index];
        for (const cf of controlFields) {
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
        // let df;
        // for (let index = 0; index < dataFields.length; index++) {
        //     df = dataFields[index];
        for (const df of dataFields) {
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
        if (this.menuField && this.menuDataField) {
            this.menuDataField.Layout = this.menuField.Layout;
        }
        if (this.hasCampaignField && this.hasCampaignDataField) {
            this.hasCampaignDataField.Layout = this.hasCampaignField.Layout;
        }
        if (this.indicatorsField && this.indicatorsDataField) {
            this.indicatorsDataField.Layout = this.indicatorsField.Layout;
        }
        // Check if menu is floating on other field.
        // for (let index = 0; index < controlFields.length; index++) {
        //     cf = controlFields[index];
        for (const cf of controlFields) {
            if (this.menuField && cf.ApiName !== 'ObjectMenu') {
                this.hasMenuFloatingOnOtherField = PepperiFormComponent.doesFieldHavaFloatingField(cf, this.menuField);
                if (this.hasMenuFloatingOnOtherField) {
                    break;
                }
            }
        }
    }
    convertCustomFields(controlFields, dataFields) {
        const self = this;
        if (this.layoutType !== LAYOUT_TYPE.PepperiTable) {
            this.setSpecialFields(controlFields, dataFields);
        }
        else {
            // Hack: convert to center alignment if table view & special fields)
            controlFields.forEach((field, index) => {
                if (field.ApiName === 'UnitsQuantity' ||
                    field.ApiName === 'QuantitySelector' ||
                    field.ApiName === 'ObjectMenu' ||
                    field.FieldType === FIELD_TYPE.Image ||
                    field.FieldType === FIELD_TYPE.ImageURL ||
                    field.FieldType === FIELD_TYPE.Indicators ||
                    field.FieldType === FIELD_TYPE.Boolean ||
                    field.FieldType === FIELD_TYPE.CalculatedBool ||
                    field.FieldType === FIELD_TYPE.Signature ||
                    field.FieldType === FIELD_TYPE.NumberIntegerQuantitySelector ||
                    field.FieldType === FIELD_TYPE.NumberRealQuantitySelector ||
                    field.FieldType === FIELD_TYPE.Package ||
                    field.FieldType === FIELD_TYPE.NumberIntegerForMatrix ||
                    field.FieldType === FIELD_TYPE.NumberRealForMatrix) {
                    field.Layout.XAlignment = 3;
                }
            });
        }
        const fields = [];
        const matrixFields = controlFields.filter(cf => PepperiFormComponent.isMatrixField(cf.ApiName)).length;
        let matrixAlreadyPlaced = false;
        controlFields.forEach((field, index) => {
            const dataField = dataFields.filter(df => df.ApiName === field.ApiName)[0];
            if (!dataField) {
                return;
            }
            // If current view is not table view and those fields are special.
            if (this.layoutType !== LAYOUT_TYPE.PepperiTable &&
                ((this.hasMenuFloatingOnOtherField && this.menuField && this.menuField.ApiName === field.ApiName) ||
                    (this.indicatorsField && this.indicatorsField.ApiName === field.ApiName) ||
                    (this.hasCampaignField && this.hasCampaignField.ApiName === field.ApiName))) {
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
            if (this.firstFieldAsLink && index === 0) {
                dataField.FieldType = FIELD_TYPE.InternalLink;
                dataField.Value = this.getInternalLinkHref();
            }
            else if (dataField.Value.length > 0 &&
                (field.FieldType === FIELD_TYPE.ReferenceType || field.FieldType === FIELD_TYPE.GuidReferenceType)) {
                const transactionUrl = this.pepperiObjectInput.Data.MainAction === '2' ? 'transactions/scope_items/' : 'transactions/cart/';
                dataField.Value = transactionUrl + dataField.Value;
            }
            if (field.ApiName === 'ObjectMenu') {
                const data = this.pepperiObjectInput.Data;
                // HACK : Until "Enabled" returns from the server, we set PepperiMenu to be
                //        Disabled in cart on regular items and not campign items.
                dataField.Enabled = this.pageType !== 'cart';
                dataField.OptionalValues = data.TransactionItemCustomMenu;
                dataField.TransactionItemType = data.TransactionItemType;
            }
            const customField = PepperiFormComponent.convertToCustomField(field, dataField, this.canEditObject, this.menuDataField, this.hasCampaignDataField, this.indicatorsDataField, this.objectId, this.parentId, this.searchCode);
            fields.push(customField);
        });
        return fields.sort((f1, f2) => (f1.row > f2.row ?
            1 : f1.row < f2.row ?
            -1 : f1.col > f2.col ?
            1 : f1.col < f2.col ? -1 : 0));
    }
    onValueChanged(valueChanged, isEditModal = false) {
        // This was comment by Tomer cause the address has stop working because this change.
        // let clickedUiControlField = this.pepperiObjectInput.Data.Fields.filter(f => f.ApiName === valueChanged.apiName)[0];
        // if (clickedUiControlField) {
        this.onFormValidationChanged(this.form.valid);
        const formControl = this.getFormControlById(valueChanged.apiName);
        const isValid = formControl ? formControl.valid : true;
        // const isValid = true;
        if (isValid) {
            // Set it to false to disable all fields.
            if (this.layoutType === LAYOUT_TYPE.PepperiForm) {
                this.isLocked = true;
            }
            this.lastFocusedField = valueChanged.lastFocusedField;
            const customizeObjectChangedData = new PepperiObjectChangedData(this.pepperiObjectInput.Data.UID.toString(), valueChanged.apiName, valueChanged.value, valueChanged.controlType);
            this.notifyValueChanged.emit(customizeObjectChangedData);
        }
        // }
    }
    onChildClicked(childClicked) {
        this.childClicked.emit(childClicked);
    }
    onChildChanged(childChanged) {
        this.childChanged.emit(childChanged);
    }
    onFormValidationChanged(formValidationChanged) {
        if (this.layoutType === LAYOUT_TYPE.PepperiForm || this.layoutType === LAYOUT_TYPE.PepperiCard) {
            this.formValidationChanged.emit(formValidationChanged);
        }
    }
    onClick(fieldClickEvent) {
        const clickedUiControlField = this.pepperiObjectInput.Data.Fields.filter(f => f.ApiName === fieldClickEvent.apiName)[0];
        // let clickedField = this.fields.filter(f => f.key === fieldClickEvent.apiName)[0];
        if (clickedUiControlField) {
            if (clickedUiControlField.FieldType === FIELD_TYPE.GuidReferenceType) {
                const customizeFieldClickedData = new PepperiFieldClickedData(this.pepperiObjectInput.Data.UID.toString(), fieldClickEvent.apiName, this.pepperiObjectInput.Data.Type, fieldClickEvent.eventWhich, fieldClickEvent.value, clickedUiControlField.FieldType, fieldClickEvent.referenceObjectInternalType);
                this.notifyFieldClicked.emit(customizeFieldClickedData);
            }
            else if (clickedUiControlField.FieldType === FIELD_TYPE.ListOfObjects) {
                const customizeFieldClickedData = new PepperiFieldClickedData(this.pepperiObjectInput.Data.UID.toString(), fieldClickEvent.apiName, this.pepperiObjectInput.Data.Type, fieldClickEvent.eventWhich, fieldClickEvent.value, clickedUiControlField.FieldType, fieldClickEvent.otherData);
                this.notifyFieldClicked.emit(customizeFieldClickedData);
            }
            else {
                const customizeFieldClickedData = new PepperiFieldClickedData(this.pepperiObjectInput.Data.UID.toString(), fieldClickEvent.apiName, this.pepperiObjectInput.Data.Type, fieldClickEvent.eventWhich, fieldClickEvent.value, clickedUiControlField.FieldType, fieldClickEvent.otherData);
                this.notifyFieldClicked.emit(customizeFieldClickedData);
            }
        }
        else {
            // For other api names (like enter children etc).
            const customizeFieldClickedData = new PepperiFieldClickedData(this.pepperiObjectInput.Data.UID.toString(), fieldClickEvent.apiName, this.pepperiObjectInput.Data.Type, fieldClickEvent.eventWhich, fieldClickEvent.value, null, fieldClickEvent.otherData);
            this.notifyFieldClicked.emit(customizeFieldClickedData);
        }
    }
    onMenuItemClicked(fieldClickEvent) {
        const clickedUiControlField = this.pepperiObjectInput.Data.Fields.filter(f => f.ApiName === fieldClickEvent.apiName)[0];
        const dataField = this.pepperiObjectInput.Data;
        const fieldType = typeof clickedUiControlField !== 'undefined' ? clickedUiControlField.FieldType : FIELD_TYPE.Package;
        const customizeFieldClickedData = new PepperiFieldClickedData(dataField.UID.toString(), fieldClickEvent.apiName, dataField.Type, fieldClickEvent.eventWhich, fieldClickEvent.value, fieldType, {
            ExtraInfo: dataField.ExtraInfo,
            ItemType: dataField.TransactionItemType
        });
        this.notifyMenuItemClicked.emit(customizeFieldClickedData);
    }
    getInternalLinkHref() {
        let hrefStr = '';
        const uid = this.pepperiObjectInput.Data.UID;
        const transactionUrl = this.pepperiObjectInput.Data.MainAction === '2' ? 'transactions/scope_items/' : 'transactions/cart/';
        // let isBuyer = sessionStorage.getItem('userRole') == 'Buyer' ? true : false;
        if (this.listType === 'all_activities') {
            hrefStr = this.pepperiObjectInput.Data.Type === 0 ? transactionUrl + uid : 'activities/details/' + uid;
        }
        else if (this.listType === 'accounts') {
            hrefStr = 'accounts/home_page/' + uid;
        }
        return hrefStr;
    }
}
PepperiFormComponent.ɵfac = function PepperiFormComponent_Factory(t) { return new (t || PepperiFormComponent)(ɵɵdirectiveInject(DialogService), ɵɵdirectiveInject(CustomizationService), ɵɵdirectiveInject(TranslateService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(KeyValueDiffers)); };
PepperiFormComponent.ɵcmp = ɵɵdefineComponent({ type: PepperiFormComponent, selectors: [["pep-form"]], inputs: { isReport: "isReport", uiControlHeader: "uiControlHeader", lockEvents: "lockEvents", canEditObject: "canEditObject", pepperiObjectInput: "pepperiObjectInput", isActive: "isActive", layoutType: "layoutType", listType: "listType", objectId: "objectId", parentId: "parentId", searchCode: "searchCode", showTitle: "showTitle", firstFieldAsLink: "firstFieldAsLink", isCardView: "isCardView", checkForChanges: "checkForChanges", pageType: "pageType" }, outputs: { notifyValueChanged: "notifyValueChanged", formValidationChanged: "formValidationChanged", childClicked: "childClicked", childChanged: "childChanged", notifyFieldClicked: "notifyFieldClicked", notifyMenuItemClicked: "notifyMenuItemClicked" }, features: [ɵɵNgOnChangesFeature], decls: 3, vars: 1, consts: [["class", "pepperi-form", 3, "formGroup", "disabled", "ngStyle", "ngClass", 4, "ngIf"], ["report", ""], [1, "pepperi-form", 3, "formGroup", "disabled", "ngStyle", "ngClass"], [3, "cols", "rowHeight", "gutterSize", 4, "ngIf"], ["class", "card-spacing", 3, "cols", "rowHeight", "gutterSize", "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "cols", "rowHeight", "gutterSize"], [3, "rowspan", "colspan", 4, "ngFor", "ngForOf"], [3, "rowspan", "colspan"], [3, "form", "layoutType", "checkForChanges", "objectId", "hasHeightLimit", "field", "showTitle", "valueChanged", "notifyChildClicked", "childChanged", "elementClicked", "notifyMenuItemClicked", "formValidationChanged", 4, "ngIf"], [3, "form", "layoutType", "checkForChanges", "objectId", "hasHeightLimit", "field", "showTitle", "valueChanged", "notifyChildClicked", "childChanged", "elementClicked", "notifyMenuItemClicked", "formValidationChanged"], [1, "card-spacing", 3, "cols", "rowHeight", "gutterSize", "ngClass"], [3, "rowspan", "colspan", "ngStyle", 4, "ngFor", "ngForOf"], [3, "rowspan", "colspan", "ngStyle"], [3, "form", "layoutType", "isActive", "checkForChanges", "objectId", "hasHeightLimit", "field", "showTitle", "valueChanged", "notifyChildClicked", "childChanged", "elementClicked", "notifyMenuItemClicked", 4, "ngIf"], [3, "form", "layoutType", "isActive", "checkForChanges", "objectId", "hasHeightLimit", "field", "showTitle", "valueChanged", "notifyChildClicked", "childChanged", "elementClicked", "notifyMenuItemClicked"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["reportBlock", ""], ["notReportBlock", ""], [4, "ngTemplateOutlet"], ["class", "pull-left flip table-cell ", "style", "height: 100%", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "pull-left", "flip", "table-cell", 2, "height", "100%", 3, "ngClass", "ngStyle"], [3, "checkForChanges", "objectId", "field", "form", "layoutType", "showTitle", "isActive", "valueChanged", "elementClicked", "notifyMenuItemClicked", 4, "ngIf"], [3, "checkForChanges", "objectId", "field", "form", "layoutType", "showTitle", "isActive", "valueChanged", "elementClicked", "notifyMenuItemClicked"], ["class", "pull-left flip", "style", "width:100%;", 4, "ngFor", "ngForOf"], [1, "pull-left", "flip", 2, "width", "100%"], [3, "checkForChanges", "objectId", "field", "form", "layoutType", "showTitle", "isActive", "valueChanged", "elementClicked", 4, "ngIf"], [3, "checkForChanges", "objectId", "field", "form", "layoutType", "showTitle", "isActive", "valueChanged", "elementClicked"], ["class", "pull-left flip pepperi-report-fields", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [1, "pull-left", "flip", "pepperi-report-fields", 3, "ngStyle", "ngClass"], [3, "ngSwitch"], [3, "objectId", "form", "key", "src", "srcLarge", "options", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "layoutType", "elementClicked", 4, "ngSwitchCase"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "layoutType", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "additionalValue", "layoutType", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "type", "disabled", "readonly", "xAlignment", "layoutType", "elementClicked", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "layoutType", 4, "ngSwitchCase"], [3, "id", "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "layoutType", "valueChanged", "elementClicked", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "objectId", "form", "key", "src", "srcLarge", "options", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "layoutType", "elementClicked"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "layoutType"], [3, "form", "key", "value", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "additionalValue", "layoutType"], [3, "form", "key", "value", "formattedValue", "label", "type", "disabled", "readonly", "xAlignment", "layoutType", "elementClicked"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "layoutType"], [3, "id", "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "layoutType", "valueChanged", "elementClicked"], ["notEmptyBlock", ""], ["emptyBlock", ""], ["linkBlock", ""], ["notLinkBlock", ""], ["class", "color-link body-sm pepperi-report-input readonly", "target", "_blank", 3, "id", "title", "href", 4, "ngIf"], ["target", "_blank", 1, "color-link", "body-sm", "pepperi-report-input", "readonly", 3, "id", "title", "href"], [1, "body-sm", "pepperi-report-input", "readonly", 3, "id", "title", "ngStyle"]], template: function PepperiFormComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PepperiFormComponent_fieldset_0_Template, 5, 13, "fieldset", 0);
        ɵɵtemplate(1, PepperiFormComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.form);
    } }, directives: [NgIf, NgControlStatusGroup, FormGroupDirective, NgStyle, NgClass, MatGridList, NgForOf, MatGridTile, PepperiFieldGeneratorComponent, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, PepperiImageComponent, PepperiSignatureComponent, PepperiCheckboxComponent, PepperiInternalButtonComponent, PepperiTextareaComponent, PepperiQuantitySelectorComponent], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiFormComponent, [{
        type: Component,
        args: [{
                selector: 'pep-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: DialogService }, { type: CustomizationService }, { type: TranslateService }, { type: FormBuilder }, { type: KeyValueDiffers }]; }, { isReport: [{
            type: Input
        }], uiControlHeader: [{
            type: Input
        }], lockEvents: [{
            type: Input
        }], canEditObject: [{
            type: Input
        }], pepperiObjectInput: [{
            type: Input
        }], isActive: [{
            type: Input
        }], layoutType: [{
            type: Input
        }], listType: [{
            type: Input
        }], objectId: [{
            type: Input
        }], parentId: [{
            type: Input
        }], searchCode: [{
            type: Input
        }], showTitle: [{
            type: Input
        }], firstFieldAsLink: [{
            type: Input
        }], isCardView: [{
            type: Input
        }], checkForChanges: [{
            type: Input
        }], pageType: [{
            type: Input
        }], notifyValueChanged: [{
            type: Output
        }], formValidationChanged: [{
            type: Output
        }], childClicked: [{
            type: Output
        }], childChanged: [{
            type: Output
        }], notifyFieldClicked: [{
            type: Output
        }], notifyMenuItemClicked: [{
            type: Output
        }] }); })();

const pepperiComponentsModules = [
    PepperiAddressModule,
    PepperiAttachmentModule,
    PepperiCheckboxModule,
    PepperiDateModule,
    PepperiImageModule,
    PepperiImagesFilmstripModule,
    PepperiInternalButtonModule,
    // PepperiInternalPageModule,
    PepperiMenuModule,
    PepperiQuantitySelectorModule,
    PepperiRichHtmlTextareaModule,
    PepperiSelectModule,
    PepperiSeparatorModule,
    PepperiSignatureModule,
    PepperiTextareaModule,
    PepperiTextboxModule,
];
class PepperiFormModule {
    constructor(pepperiIconRegistry) {
        this.pepperiIconRegistry = pepperiIconRegistry;
        this.pepperiIconRegistry.registerIcons([
            pepperiIconIndicatorDotPlaceholder
        ]);
    }
}
PepperiFormModule.ɵmod = ɵɵdefineNgModule({ type: PepperiFormModule });
PepperiFormModule.ɵinj = ɵɵdefineInjector({ factory: function PepperiFormModule_Factory(t) { return new (t || PepperiFormModule)(ɵɵinject(PepperiIconRegistry)); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            // Material modules,
            MatCommonModule,
            MatGridListModule,
            MatIconModule,
            MatMenuModule,
            // External modules
            SignaturePadModule,
            // Pepperi modules
            PepperiModule,
            PepperiDialogModule,
            PepperiIconModule,
            pepperiComponentsModules,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PepperiFormModule, { declarations: [PepperiFormComponent,
        PepperiFieldGeneratorComponent,
        PepperiIndicatorsComponent,
        PepperiInternalPageComponent,
        PepperiInternalListComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // Material modules,
        MatCommonModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        // External modules
        SignaturePadModule,
        // Pepperi modules
        PepperiModule,
        PepperiDialogModule,
        PepperiIconModule, PepperiAddressModule,
        PepperiAttachmentModule,
        PepperiCheckboxModule,
        PepperiDateModule,
        PepperiImageModule,
        PepperiImagesFilmstripModule,
        PepperiInternalButtonModule,
        // PepperiInternalPageModule,
        PepperiMenuModule,
        PepperiQuantitySelectorModule,
        PepperiRichHtmlTextareaModule,
        PepperiSelectModule,
        PepperiSeparatorModule,
        PepperiSignatureModule,
        PepperiTextareaModule,
        PepperiTextboxModule], exports: [PepperiFormComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PepperiFormModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    // Material modules,
                    MatCommonModule,
                    MatGridListModule,
                    MatIconModule,
                    MatMenuModule,
                    // External modules
                    SignaturePadModule,
                    // Pepperi modules
                    PepperiModule,
                    PepperiDialogModule,
                    PepperiIconModule,
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
    }], function () { return [{ type: PepperiIconRegistry }]; }, null); })();
ɵɵsetComponentScope(PepperiInternalListComponent, [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, NgModel, NgModelGroup, NgForm, Dir, MatGridList, MatGridTile, MatGridTileText, MatLine, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler, MatIcon, CdkScrollable, _MatMenu, MatMenuItem, MatMenuTrigger, MatMenuContent, SignaturePad, ButtonBlurDirective, MenuBlurDirective, RtlClassDirective, RtlDirectionDirective, AttachDirective, TargetDirective, TranslateDirective, PepperiIconComponent, PepperiAddressComponent, PepperiAttachmentComponent, PepperiCheckboxComponent, PepperiDateComponent, PepperiImageComponent, PepperiImagesFilmstripComponent, PepperiInternalButtonComponent, PepperiMenuComponent, PepperiQuantitySelectorComponent, PepperiRichHtmlTextareaComponent, PepperiSelectComponent, PepperiSeparatorComponent, PepperiSignatureComponent, PepperiTextareaComponent, PepperiTextboxComponent, PepperiFormComponent,
    PepperiFieldGeneratorComponent,
    PepperiIndicatorsComponent,
    PepperiInternalPageComponent,
    PepperiInternalListComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe, CapitalizePipe, EncodePipe, EscapePipe, ReplaceLineBreaks, DateFormatter, DateStringFormatter, SafeHtmlPipe, SafePipe, SplitUppercase, ToNumber, TranslatePipe]);

/*
 * Public API Surface of ngx-lib/form
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PepperiFormComponent, PepperiFormModule };
//# sourceMappingURL=pepperi-addons-ngx-lib-form.js.map
