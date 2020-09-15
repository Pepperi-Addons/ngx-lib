import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { DialogData, DialogDataType } from '@pepperi-addons/ngx-lib/dialog';
import { PepperiFieldClickedData, PepperiObjectChangedData, LAYOUT_TYPE, FIELD_TYPE, CustomizationService, PepperiTextboxField, PepperiSelectField, PepperiMenuField, PepperiQuantitySelectorField, PepperiAddressField, PepperiIndicatorsField, PepperiInternalPageField, PepperiButtonField, PepperiAttachmentField, PepperiSignatureField, PepperiImageField, PepperiImagesField, PepperiTextareaField, PepperiRichHtmlTextareaField, PepperiDateField, PepperiCheckboxField, PepperiSeparatorField, PepperiPlaceholderField, } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib/dialog";
import * as i2 from "@pepperi-addons/ngx-lib";
import * as i3 from "@ngx-translate/core";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/grid-list";
import * as i7 from "./field-generator.component";
import * as i8 from "@pepperi-addons/ngx-lib/image";
import * as i9 from "@pepperi-addons/ngx-lib/signature";
import * as i10 from "@pepperi-addons/ngx-lib/checkbox";
import * as i11 from "@pepperi-addons/ngx-lib/internal-button";
import * as i12 from "@pepperi-addons/ngx-lib/textarea";
import * as i13 from "@pepperi-addons/ngx-lib/quantity-selector";
function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-field-generator", 10);
    i0.ɵɵlistener("valueChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(4); return ctx_r10.onValueChanged($event); })("notifyChildClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_notifyChildClicked_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(4); return ctx_r12.onChildClicked($event); })("childChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_childChanged_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(4); return ctx_r13.onChildChanged($event); })("elementClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r14 = i0.ɵɵnextContext(4); return ctx_r14.onClick($event); })("notifyMenuItemClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_notifyMenuItemClicked_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r15 = i0.ɵɵnextContext(4); return ctx_r15.onMenuItemClicked($event); })("formValidationChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_formValidationChanged_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r16 = i0.ɵɵnextContext(4); return ctx_r16.onFormValidationChanged($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("form", ctx_r9.form)("layoutType", ctx_r9.layoutType)("checkForChanges", ctx_r9.checkForChanges)("objectId", ctx_r9.pepperiObjectInput.Data.UID)("hasHeightLimit", !ctx_r9.matrixIsLast)("field", field_r8)("showTitle", ctx_r9.showTitle);
} }
function PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-grid-tile", 8);
    i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_pep_field_generator_1_Template, 1, 7, "pep-field-generator", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r8 = ctx.$implicit;
    i0.ɵɵproperty("rowspan", field_r8.rowSpan)("colspan", field_r8.colSpan);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r8.controlType != "placeholder");
} }
function PepperiFormComponent_fieldset_0_mat_grid_list_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-grid-list", 6);
    i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_1_mat_grid_tile_1_Template, 2, 3, "mat-grid-tile", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("cols", ctx_r3.columns)("rowHeight", ctx_r3.rowHeight + "rem")("gutterSize", ctx_r3.formGutterSize);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.fields);
} }
function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-field-generator", 15);
    i0.ɵɵlistener("valueChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(4); return ctx_r21.onValueChanged($event); })("notifyChildClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_notifyChildClicked_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(4); return ctx_r23.onChildClicked($event); })("childChanged", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_childChanged_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r24 = i0.ɵɵnextContext(4); return ctx_r24.onChildChanged($event); })("elementClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r25 = i0.ɵɵnextContext(4); return ctx_r25.onClick($event); })("notifyMenuItemClicked", function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template_pep_field_generator_notifyMenuItemClicked_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r26 = i0.ɵɵnextContext(4); return ctx_r26.onMenuItemClicked($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r19 = i0.ɵɵnextContext().$implicit;
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("form", ctx_r20.form)("layoutType", ctx_r20.layoutType)("isActive", ctx_r20.isActive)("checkForChanges", ctx_r20.checkForChanges)("objectId", ctx_r20.pepperiObjectInput.Data.UID)("hasHeightLimit", !ctx_r20.matrixIsLast)("field", field_r19)("showTitle", ctx_r20.showTitle);
} }
const _c0 = function (a0) { return { overflow: a0 }; };
function PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-grid-tile", 13);
    i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_pep_field_generator_1_Template, 1, 8, "pep-field-generator", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r19 = ctx.$implicit;
    i0.ɵɵproperty("rowspan", field_r19.rowSpan)("colspan", field_r19.colSpan)("ngStyle", i0.ɵɵpureFunction1(4, _c0, field_r19.type == "qs" ? "unset" : "hidden"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r19.controlType != "placeholder");
} }
const _c1 = function (a0) { return { "lock-events": a0 }; };
function PepperiFormComponent_fieldset_0_mat_grid_list_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-grid-list", 11);
    i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_2_mat_grid_tile_1_Template, 2, 6, "mat-grid-tile", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("cols", ctx_r4.columns)("rowHeight", ctx_r4.rowHeight + "rem")("gutterSize", ctx_r4.cardGutterSize)("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx_r4.lockEvents));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.fields);
} }
function PepperiFormComponent_fieldset_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 19);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r1 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1);
} }
function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-field-generator", 23);
    i0.ɵɵlistener("valueChanged", function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template_pep_field_generator_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(5); return ctx_r38.onValueChanged($event); })("elementClicked", function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template_pep_field_generator_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r40 = i0.ɵɵnextContext(5); return ctx_r40.onClick($event); })("notifyMenuItemClicked", function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template_pep_field_generator_notifyMenuItemClicked_0_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r41 = i0.ɵɵnextContext(5); return ctx_r41.onMenuItemClicked($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r35 = i0.ɵɵnextContext().$implicit;
    const ctx_r37 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("checkForChanges", ctx_r37.checkForChanges)("objectId", ctx_r37.pepperiObjectInput.Data.UID)("field", field_r35)("form", ctx_r37.form)("layoutType", ctx_r37.layoutType)("showTitle", false)("isActive", ctx_r37.isActive);
} }
const _c2 = function (a0) { return [a0]; };
const _c3 = function (a0) { return { width: a0 }; };
function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_pep_field_generator_1_Template, 1, 7, "pep-field-generator", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r35 = ctx.$implicit;
    const j_r36 = ctx.index;
    const ctx_r34 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c2, "text-align-" + field_r35.xAlignment))("ngStyle", i0.ɵɵpureFunction1(5, _c3, ctx_r34.uiControlHeader == null ? null : ctx_r34.uiControlHeader.ControlFields[j_r36] == null ? null : ctx_r34.uiControlHeader.ControlFields[j_r36].calcColumnWidthString));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r35.controlType != "placeholder");
} }
function PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_div_0_Template, 2, 7, "div", 20);
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngForOf", ctx_r32.fields);
} }
function PepperiFormComponent_fieldset_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 16);
    i0.ɵɵtemplate(2, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiFormComponent_fieldset_0_ng_container_3_ng_template_4_Template, 1, 1, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r29 = i0.ɵɵreference(3);
    const _r31 = i0.ɵɵreference(5);
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isReport)("ngIfThen", _r29)("ngIfElse", _r31);
} }
function PepperiFormComponent_fieldset_0_ng_container_4_div_1_pep_field_generator_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-field-generator", 27);
    i0.ɵɵlistener("valueChanged", function PepperiFormComponent_fieldset_0_ng_container_4_div_1_pep_field_generator_1_Template_pep_field_generator_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(4); return ctx_r47.onValueChanged($event); })("elementClicked", function PepperiFormComponent_fieldset_0_ng_container_4_div_1_pep_field_generator_1_Template_pep_field_generator_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r49 = i0.ɵɵnextContext(4); return ctx_r49.onClick($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r44 = i0.ɵɵnextContext().$implicit;
    const ctx_r46 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("checkForChanges", ctx_r46.checkForChanges)("objectId", ctx_r46.pepperiObjectInput.Data.UID)("field", field_r44)("form", ctx_r46.form)("layoutType", ctx_r46.layoutType)("showTitle", false)("isActive", ctx_r46.isActive);
} }
function PepperiFormComponent_fieldset_0_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_ng_container_4_div_1_pep_field_generator_1_Template, 1, 7, "pep-field-generator", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r44 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r44.controlType != "placeholder");
} }
function PepperiFormComponent_fieldset_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_ng_container_4_div_1_Template, 2, 1, "div", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.fields);
} }
const _c4 = function (a0) { return { "background-color": a0 }; };
const _c5 = function (a0, a1) { return { "material-form": a0, cardView: a1 }; };
function PepperiFormComponent_fieldset_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "fieldset", 2);
    i0.ɵɵtemplate(1, PepperiFormComponent_fieldset_0_mat_grid_list_1_Template, 2, 4, "mat-grid-list", 3);
    i0.ɵɵtemplate(2, PepperiFormComponent_fieldset_0_mat_grid_list_2_Template, 2, 7, "mat-grid-list", 4);
    i0.ɵɵtemplate(3, PepperiFormComponent_fieldset_0_ng_container_3_Template, 6, 3, "ng-container", 5);
    i0.ɵɵtemplate(4, PepperiFormComponent_fieldset_0_ng_container_4_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.form)("disabled", ctx_r0.isLocked)("ngStyle", i0.ɵɵpureFunction1(8, _c4, ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiCard && (ctx_r0.pepperiObjectInput == null ? null : ctx_r0.pepperiObjectInput.Data == null ? null : ctx_r0.pepperiObjectInput.Data.BackgroundColor)))("ngClass", i0.ɵɵpureFunction2(10, _c5, ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiForm, ctx_r0.isCardView == true));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiForm);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiCard);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.PepperiTable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.layoutType == ctx_r0.LAYOUT_TYPE.Editmodal);
} }
function PepperiFormComponent_ng_template_1_div_0_pep_image_2_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-image", 38);
    i0.ɵɵlistener("elementClicked", function PepperiFormComponent_ng_template_1_div_0_pep_image_2_Template_pep_image_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r61 = i0.ɵɵnextContext(3); return ctx_r61.onClick($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r52 = i0.ɵɵnextContext().$implicit;
    const ctx_r54 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("objectId", ctx_r54.objectId)("form", ctx_r54.form)("key", field_r52.key)("src", field_r52.formattedValue)("srcLarge", field_r52.value)("options", field_r52.options)("label", field_r52.label)("type", field_r52.type)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("layoutType", ctx_r54.layoutType);
} }
function PepperiFormComponent_ng_template_1_div_0_pep_signature_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-signature", 39);
} if (rf & 2) {
    const field_r52 = i0.ɵɵnextContext().$implicit;
    const ctx_r55 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("form", ctx_r55.form)("key", field_r52.key)("src", field_r52.value)("label", field_r52.label)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("layoutType", ctx_r55.layoutType);
} }
function PepperiFormComponent_ng_template_1_div_0_pep_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-checkbox", 40);
} if (rf & 2) {
    const field_r52 = i0.ɵɵnextContext().$implicit;
    const ctx_r56 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("form", ctx_r56.form)("key", field_r52.key)("value", field_r52.value)("label", field_r52.label)("type", field_r52.type)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("additionalValue", field_r52.additionalValue)("layoutType", ctx_r56.layoutType);
} }
function PepperiFormComponent_ng_template_1_div_0_pep_internal_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-internal-button", 41);
    i0.ɵɵlistener("elementClicked", function PepperiFormComponent_ng_template_1_div_0_pep_internal_button_5_Template_pep_internal_button_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r67); const ctx_r66 = i0.ɵɵnextContext(3); return ctx_r66.onClick($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r52 = i0.ɵɵnextContext().$implicit;
    const ctx_r57 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("form", ctx_r57.form)("key", field_r52.key)("value", field_r52.value)("formattedValue", field_r52.formattedValue)("label", field_r52.label)("type", field_r52.type)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("xAlignment", field_r52.xAlignment)("layoutType", ctx_r57.layoutType);
} }
function PepperiFormComponent_ng_template_1_div_0_pep_textarea_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-textarea", 42);
} if (rf & 2) {
    const field_r52 = i0.ɵɵnextContext().$implicit;
    const ctx_r58 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("form", ctx_r58.form)("key", field_r52.key)("value", field_r52.value)("label", field_r52.label)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("maxFieldCharacters", field_r52.maxFieldCharacters)("textColor", field_r52.textColor)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("layoutType", ctx_r58.layoutType);
} }
function PepperiFormComponent_ng_template_1_div_0_pep_quantity_selector_7_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-quantity-selector", 43);
    i0.ɵɵlistener("valueChanged", function PepperiFormComponent_ng_template_1_div_0_pep_quantity_selector_7_Template_pep_quantity_selector_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r71); const ctx_r70 = i0.ɵɵnextContext(3); return ctx_r70.onValueChanged($event); })("elementClicked", function PepperiFormComponent_ng_template_1_div_0_pep_quantity_selector_7_Template_pep_quantity_selector_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r71); const ctx_r72 = i0.ɵɵnextContext(3); return ctx_r72.onClick($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r52 = i0.ɵɵnextContext().$implicit;
    const ctx_r59 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", field_r52.key)("form", ctx_r59.form)("key", field_r52.key)("value", field_r52.value)("formattedValue", field_r52.formattedValue)("label", field_r52.label)("type", field_r52.type)("required", field_r52.required)("disabled", field_r52.disabled)("readonly", field_r52.readonly)("textColor", field_r52.textColor)("xAlignment", field_r52.xAlignment)("rowSpan", field_r52.rowSpan)("layoutType", ctx_r59.layoutType);
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_1_a_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r52 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵpropertyInterpolate("title", field_r52.formattedValue);
    i0.ɵɵpropertyInterpolate("href", field_r52.value, i0.ɵɵsanitizeUrl);
    i0.ɵɵproperty("id", field_r52.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r52.formattedValue);
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_1_a_0_Template, 2, 4, "a", 48);
} if (rf & 2) {
    const field_r52 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngIf", field_r52.formattedValue != null);
} }
const _c6 = function (a0) { return { color: a0 }; };
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r52 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵpropertyInterpolate("title", field_r52.formattedValue);
    i0.ɵɵproperty("id", field_r52.key)("ngStyle", i0.ɵɵpureFunction1(4, _c6, field_r52.textColor));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r52.formattedValue);
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 16);
    i0.ɵɵtemplate(1, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 46, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_ng_template_3_Template, 2, 6, "ng-template", null, 47, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r80 = i0.ɵɵreference(2);
    const _r82 = i0.ɵɵreference(4);
    const field_r52 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngIf", field_r52.type === "attachment" || field_r52.type === "link")("ngIfThen", _r80)("ngIfElse", _r82);
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} }
function PepperiFormComponent_ng_template_1_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 16);
    i0.ɵɵtemplate(2, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_2_Template, 5, 3, "ng-template", null, 44, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PepperiFormComponent_ng_template_1_div_0_ng_container_8_ng_template_4_Template, 2, 0, "ng-template", null, 45, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r75 = i0.ɵɵreference(3);
    const _r77 = i0.ɵɵreference(5);
    const field_r52 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (field_r52.formattedValue == null ? null : field_r52.formattedValue.length) > 0)("ngIfThen", _r75)("ngIfElse", _r77);
} }
function PepperiFormComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const field_r52 = ctx.$implicit;
    const j_r53 = ctx.index;
    const ctx_r51 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(9, _c3, ctx_r51.uiControlHeader == null ? null : ctx_r51.uiControlHeader.ControlFields[j_r53] == null ? null : ctx_r51.uiControlHeader.ControlFields[j_r53].calcColumnWidthString))("ngClass", i0.ɵɵpureFunction1(11, _c2, "text-align-" + field_r52.xAlignment));
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
} }
function PepperiFormComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiFormComponent_ng_template_1_div_0_Template, 9, 13, "div", 28);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r2.fields);
} }
// tslint:disable-next-line: no-conflicting-lifecycle
export class PepperiFormComponent {
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
PepperiFormComponent.ɵfac = function PepperiFormComponent_Factory(t) { return new (t || PepperiFormComponent)(i0.ɵɵdirectiveInject(i1.DialogService), i0.ɵɵdirectiveInject(i2.CustomizationService), i0.ɵɵdirectiveInject(i3.TranslateService), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i0.KeyValueDiffers)); };
PepperiFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiFormComponent, selectors: [["pep-form"]], inputs: { isReport: "isReport", uiControlHeader: "uiControlHeader", lockEvents: "lockEvents", canEditObject: "canEditObject", pepperiObjectInput: "pepperiObjectInput", isActive: "isActive", layoutType: "layoutType", listType: "listType", objectId: "objectId", parentId: "parentId", searchCode: "searchCode", showTitle: "showTitle", firstFieldAsLink: "firstFieldAsLink", isCardView: "isCardView", checkForChanges: "checkForChanges", pageType: "pageType" }, outputs: { notifyValueChanged: "notifyValueChanged", formValidationChanged: "formValidationChanged", childClicked: "childClicked", childChanged: "childChanged", notifyFieldClicked: "notifyFieldClicked", notifyMenuItemClicked: "notifyMenuItemClicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 1, consts: [["class", "pepperi-form", 3, "formGroup", "disabled", "ngStyle", "ngClass", 4, "ngIf"], ["report", ""], [1, "pepperi-form", 3, "formGroup", "disabled", "ngStyle", "ngClass"], [3, "cols", "rowHeight", "gutterSize", 4, "ngIf"], ["class", "card-spacing", 3, "cols", "rowHeight", "gutterSize", "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "cols", "rowHeight", "gutterSize"], [3, "rowspan", "colspan", 4, "ngFor", "ngForOf"], [3, "rowspan", "colspan"], [3, "form", "layoutType", "checkForChanges", "objectId", "hasHeightLimit", "field", "showTitle", "valueChanged", "notifyChildClicked", "childChanged", "elementClicked", "notifyMenuItemClicked", "formValidationChanged", 4, "ngIf"], [3, "form", "layoutType", "checkForChanges", "objectId", "hasHeightLimit", "field", "showTitle", "valueChanged", "notifyChildClicked", "childChanged", "elementClicked", "notifyMenuItemClicked", "formValidationChanged"], [1, "card-spacing", 3, "cols", "rowHeight", "gutterSize", "ngClass"], [3, "rowspan", "colspan", "ngStyle", 4, "ngFor", "ngForOf"], [3, "rowspan", "colspan", "ngStyle"], [3, "form", "layoutType", "isActive", "checkForChanges", "objectId", "hasHeightLimit", "field", "showTitle", "valueChanged", "notifyChildClicked", "childChanged", "elementClicked", "notifyMenuItemClicked", 4, "ngIf"], [3, "form", "layoutType", "isActive", "checkForChanges", "objectId", "hasHeightLimit", "field", "showTitle", "valueChanged", "notifyChildClicked", "childChanged", "elementClicked", "notifyMenuItemClicked"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["reportBlock", ""], ["notReportBlock", ""], [4, "ngTemplateOutlet"], ["class", "pull-left flip table-cell ", "style", "height: 100%", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "pull-left", "flip", "table-cell", 2, "height", "100%", 3, "ngClass", "ngStyle"], [3, "checkForChanges", "objectId", "field", "form", "layoutType", "showTitle", "isActive", "valueChanged", "elementClicked", "notifyMenuItemClicked", 4, "ngIf"], [3, "checkForChanges", "objectId", "field", "form", "layoutType", "showTitle", "isActive", "valueChanged", "elementClicked", "notifyMenuItemClicked"], ["class", "pull-left flip", "style", "width:100%;", 4, "ngFor", "ngForOf"], [1, "pull-left", "flip", 2, "width", "100%"], [3, "checkForChanges", "objectId", "field", "form", "layoutType", "showTitle", "isActive", "valueChanged", "elementClicked", 4, "ngIf"], [3, "checkForChanges", "objectId", "field", "form", "layoutType", "showTitle", "isActive", "valueChanged", "elementClicked"], ["class", "pull-left flip pepperi-report-fields", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [1, "pull-left", "flip", "pepperi-report-fields", 3, "ngStyle", "ngClass"], [3, "ngSwitch"], [3, "objectId", "form", "key", "src", "srcLarge", "options", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "layoutType", "elementClicked", 4, "ngSwitchCase"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "layoutType", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "additionalValue", "layoutType", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "type", "disabled", "readonly", "xAlignment", "layoutType", "elementClicked", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "layoutType", 4, "ngSwitchCase"], [3, "id", "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "layoutType", "valueChanged", "elementClicked", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "objectId", "form", "key", "src", "srcLarge", "options", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "layoutType", "elementClicked"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "layoutType"], [3, "form", "key", "value", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "additionalValue", "layoutType"], [3, "form", "key", "value", "formattedValue", "label", "type", "disabled", "readonly", "xAlignment", "layoutType", "elementClicked"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "layoutType"], [3, "id", "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "layoutType", "valueChanged", "elementClicked"], ["notEmptyBlock", ""], ["emptyBlock", ""], ["linkBlock", ""], ["notLinkBlock", ""], ["class", "color-link body-sm pepperi-report-input readonly", "target", "_blank", 3, "id", "title", "href", 4, "ngIf"], ["target", "_blank", 1, "color-link", "body-sm", "pepperi-report-input", "readonly", 3, "id", "title", "href"], [1, "body-sm", "pepperi-report-input", "readonly", 3, "id", "title", "ngStyle"]], template: function PepperiFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PepperiFormComponent_fieldset_0_Template, 5, 13, "fieldset", 0);
        i0.ɵɵtemplate(1, PepperiFormComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.form);
    } }, directives: [i5.NgIf, i4.NgControlStatusGroup, i4.FormGroupDirective, i5.NgStyle, i5.NgClass, i6.MatGridList, i5.NgForOf, i6.MatGridTile, i7.PepperiFieldGeneratorComponent, i5.NgTemplateOutlet, i5.NgSwitch, i5.NgSwitchCase, i5.NgSwitchDefault, i8.PepperiImageComponent, i9.PepperiSignatureComponent, i10.PepperiCheckboxComponent, i11.PepperiInternalButtonComponent, i12.PepperiTextareaComponent, i13.PepperiQuantitySelectorComponent], styles: ["[_nghost-%COMP%]{display:-ms-grid;display:grid}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiFormComponent, [{
        type: Component,
        args: [{
                selector: 'pep-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DialogService }, { type: i2.CustomizationService }, { type: i3.TranslateService }, { type: i4.FormBuilder }, { type: i0.KeyValueDiffers }]; }, { isReport: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2Zvcm0vZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2Zvcm0vZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLHVCQUF1QixFQUNsQyxLQUFLLEVBQW1CLE1BQU0sRUFBRSxZQUFZLEVBQy9DLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBMEIsVUFBVSxFQUFtQixNQUFNLGdCQUFnQixDQUFDO0FBRXJGLE9BQU8sRUFBaUIsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTNGLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLFdBQVcsRUFDWCxVQUFVLEVBQ1Ysb0JBQW9CLEVBTXBCLG1CQUFtQixFQUNuQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLDRCQUE0QixFQUM1QixtQkFBbUIsRUFDbkIsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4QixrQkFBa0IsRUFDbEIsc0JBQXNCLEVBQ3RCLHFCQUFxQixFQUNyQixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNwQiw0QkFBNEIsRUFDNUIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsdUJBQXVCLEdBQzFCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDM0JyQiwrQ0FPc0I7SUFKbEIsa1NBQXVDLGlTQUFBLHFSQUFBLGtSQUFBLDBTQUFBLGdUQUFBO0lBSTNDLGlCQUFzQjs7OztJQVAwQyxrQ0FBYSxpQ0FBQSwyQ0FBQSxnREFBQSx3Q0FBQSxtQkFBQSwrQkFBQTs7O0lBRGpGLHdDQUNJO0lBQUEsZ0pBT0E7SUFDSixpQkFBZ0I7OztJQVQ0QiwwQ0FBeUIsNkJBQUE7SUFDNUMsZUFBMEM7SUFBMUMsNERBQTBDOzs7SUFIdkUsd0NBRUk7SUFBQSxvSEFDSTtJQVNSLGlCQUFnQjs7O0lBWjZDLHFDQUFnQix1Q0FBQSxxQ0FBQTtJQUUxRCxlQUE0QjtJQUE1Qix1Q0FBNEI7Ozs7SUFpQnZDLCtDQU1zQjtJQUhsQixrU0FBdUMsaVNBQUEscVJBQUEsa1JBQUEsMFNBQUE7SUFHM0MsaUJBQXNCOzs7O0lBTjBDLG1DQUFhLGtDQUFBLDhCQUFBLDRDQUFBLGlEQUFBLHlDQUFBLG9CQUFBLGdDQUFBOzs7O0lBRmpGLHlDQUVJO0lBQUEsaUpBTUE7SUFDSixpQkFBZ0I7OztJQVQ0QiwyQ0FBeUIsOEJBQUEsb0ZBQUE7SUFFNUMsZUFBMEM7SUFBMUMsNkRBQTBDOzs7O0lBSnZFLHlDQUVJO0lBQUEscUhBRUk7SUFRUixpQkFBZ0I7OztJQVo2QyxxQ0FBZ0IsdUNBQUEscUNBQUEsMERBQUE7SUFFMUQsZUFBNEI7SUFBNUIsdUNBQTRCOzs7SUFhM0Msd0JBQXFGOzs7SUFFakYsd0JBQXdEOzs7SUFBeEQsZ0lBQXlDOzs7O0lBQTNCLHNDQUEwQjs7OztJQU1wQywrQ0FJc0I7SUFIdUMscVNBQXVDLHFSQUFBLDZTQUFBO0lBR3BHLGlCQUFzQjs7OztJQUowQyx5REFBbUMsaURBQUEsb0JBQUEsc0JBQUEsa0NBQUEsb0JBQUEsOEJBQUE7Ozs7O0lBSHZHLCtCQUdJO0lBQUEsb0pBSUE7SUFDSixpQkFBTTs7Ozs7SUFQRiwwRkFBOEMsa05BQUE7SUFFekIsZUFBMEM7SUFBMUMsNkRBQTBDOzs7SUFIbkUsOEdBR0k7OztJQUhDLHdDQUEyQzs7O0lBTnhELDZCQUNJO0lBQUEsa0hBQXNFO0lBQ3RFLGlKQUNJO0lBRUosaUpBQ0k7SUFVUiwwQkFBZTs7Ozs7SUFmRyxlQUF1RDtJQUF2RCxzQ0FBdUQsa0JBQUEsa0JBQUE7Ozs7SUFtQmpFLCtDQUlzQjtJQUh1Qyx1UkFBdUMsdVFBQUE7SUFHcEcsaUJBQXNCOzs7O0lBSjBDLHlEQUFtQyxpREFBQSxvQkFBQSxzQkFBQSxrQ0FBQSxvQkFBQSw4QkFBQTs7O0lBRHZHLCtCQUNJO0lBQUEsc0lBSUE7SUFDSixpQkFBTTs7O0lBTG1CLGVBQTBDO0lBQTFDLDZEQUEwQzs7O0lBRnZFLDZCQUNJO0lBQUEsZ0dBQ0k7SUFNUiwwQkFBZTs7O0lBUE4sZUFBMkM7SUFBM0MsdUNBQTJDOzs7OztJQXZEeEQsbUNBTUk7SUFDQSxvR0FFSTtJQWFKLG9HQUVJO0lBWUosa0dBQ0k7SUFpQkosa0dBQ0k7SUFhUixpQkFBVzs7O0lBcEVZLHVDQUFrQiw2QkFBQSwyT0FBQSx3SEFBQTtJQU90QixlQUE2QztJQUE3QywwRUFBNkM7SUFlN0MsZUFBNkM7SUFBN0MsMEVBQTZDO0lBYzlDLGVBQThDO0lBQTlDLDJFQUE4QztJQWtCOUMsZUFBMkM7SUFBM0Msd0VBQTJDOzs7O0lBcUJqRCxxQ0FLWTtJQURSLG9QQUFrQztJQUN0QyxpQkFBWTs7OztJQUx1QiwyQ0FBcUIsc0JBQUEsc0JBQUEsaUNBQUEsNkJBQUEsOEJBQUEsMEJBQUEsd0JBQUEsZ0NBQUEsZ0NBQUEsZ0NBQUEsb0NBQUEsOEJBQUEsa0NBQUE7OztJQU94RCxvQ0FJZ0I7Ozs7SUFKMkIsbUNBQWEsc0JBQUEsd0JBQUEsMEJBQUEsZ0NBQUEsZ0NBQUEsZ0NBQUEsb0NBQUEsOEJBQUEsa0NBQUE7OztJQU14RCxtQ0FJZTs7OztJQUowQixtQ0FBYSxzQkFBQSwwQkFBQSwwQkFBQSx3QkFBQSxnQ0FBQSxnQ0FBQSxnQ0FBQSxvQ0FBQSw4QkFBQSw4Q0FBQSxrQ0FBQTs7OztJQU10RCwrQ0FJc0I7SUFEUSx3UUFBa0M7SUFDaEUsaUJBQXNCOzs7O0lBSndCLG1DQUFhLHNCQUFBLDBCQUFBLDRDQUFBLDBCQUFBLHdCQUFBLGdDQUFBLGdDQUFBLG9DQUFBLGtDQUFBOzs7SUFNM0QsbUNBS2U7Ozs7SUFMMEIsbUNBQWEsc0JBQUEsMEJBQUEsMEJBQUEsZ0NBQUEsZ0NBQUEsZ0NBQUEsb0RBQUEsa0NBQUEsb0NBQUEsOEJBQUEsa0NBQUE7Ozs7SUFPdEQsaURBS3dCO0lBRE0sK1FBQXVDLCtQQUFBO0lBQ3JFLGlCQUF3Qjs7OztJQUxvQixrQ0FBZ0Isc0JBQUEsc0JBQUEsMEJBQUEsNENBQUEsMEJBQUEsd0JBQUEsZ0NBQUEsZ0NBQUEsZ0NBQUEsa0NBQUEsb0NBQUEsOEJBQUEsa0NBQUE7OztJQVF4RCx3QkFDZTs7O0lBRVgsd0JBRWU7OztJQUVYLDZCQUU2QjtJQUFBLFlBQTBCO0lBQUEsaUJBQUk7OztJQURsQiwyREFBa0M7SUFDdkUsbUVBQXdCO0lBRnpCLGtDQUFnQjtJQUVVLGVBQTBCO0lBQTFCLDhDQUEwQjs7O0lBRnZELGlJQUU2Qjs7O0lBRHpCLHVEQUFvQzs7OztJQUl4QyxnQ0FFMkM7SUFBQSxZQUEwQjtJQUFBLGlCQUFPOzs7SUFEeEUsMkRBQWtDO0lBRGhDLGtDQUFnQiw0REFBQTtJQUVxQixlQUEwQjtJQUExQiw4Q0FBMEI7OztJQVh6RSx5SUFFQTtJQUNBLHdLQUNJO0lBSUosd0tBQ0k7Ozs7O0lBUkEsbUZBQStGLGtCQUFBLGtCQUFBOzs7SUFjbkcsNEJBQU07SUFBQSxzQkFBTTtJQUFBLGlCQUFPOzs7SUFuQjNCLDZCQUNJO0lBQUEsMkhBQ0E7SUFDQSwwSkFDSTtJQWNKLDBKQUNJO0lBRVIsMEJBQWU7Ozs7O0lBcEJHLGVBQTZFO0lBQTdFLHNHQUE2RSxrQkFBQSxrQkFBQTs7O0lBNUN2RywrQkFHSTtJQUFBLGlDQUNJO0lBQUEsdUdBS0E7SUFFQSwrR0FJQTtJQUVBLDZHQUlBO0lBRUEsMkhBSUE7SUFFQSw2R0FLQTtJQUVBLCtIQUtBO0lBRUEsNEdBQ0k7SUFxQlIsMEJBQWU7SUFDbkIsaUJBQU07Ozs7O0lBakVGLCtOQUFpRiw4RUFBQTtJQUVuRSxlQUE4QjtJQUE5QixnREFBOEI7SUFDN0IsZUFBdUI7SUFBdkIsc0NBQXVCO0lBT25CLGVBQTJCO0lBQTNCLDBDQUEyQjtJQU01QixlQUEwQjtJQUExQix5Q0FBMEI7SUFNbkIsZUFBd0I7SUFBeEIsdUNBQXdCO0lBTS9CLGVBQTBCO0lBQTFCLHlDQUEwQjtJQU9qQixlQUFvQjtJQUFwQixtQ0FBb0I7OztJQXBDbkQscUZBR0k7OztJQUhDLHVDQUEyQzs7QURoQ3BELHFEQUFxRDtBQU9yRCxNQUFNLE9BQU8sb0JBQW9CO0lBZ2hCN0IsWUFDWSxhQUE0QixFQUM1QixvQkFBMEMsRUFDMUMsU0FBMkIsRUFDNUIsRUFBZSxFQUN0QixPQUF3QjtRQUpoQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzVCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFuaEJqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFFckIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQWdCLFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDbEQsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixhQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2YsZUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG9CQUFlLEdBQVEsSUFBSSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFYix1QkFBa0IsR0FBMkMsSUFBSSxZQUFZLEVBQTRCLENBQUM7UUFDMUcsMEJBQXFCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDM0UsaUJBQVksR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUM1RCxpQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzVELHVCQUFrQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2hFLDBCQUFxQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdFLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFLakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFLckIsZ0JBQWdCO1FBQ2hCLFNBQUksR0FBOEIsRUFBRSxDQUFDO1FBQ3JDLFdBQU0sR0FBdUIsRUFBRSxDQUFDO1FBQ2hDLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixnQ0FBMkIsR0FBRyxLQUFLLENBQUM7UUFNcEMsd0JBQW1CLEdBQVEsSUFBSSxDQUFDO1FBRWhDLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUdsQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBbWVsQiwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFuZUQsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFlBQWlCLEVBQUUsYUFBd0MsRUFBRSxhQUFzQjtRQUMzRyxNQUFNLE1BQU0sR0FBdUIsRUFBRSxDQUFDO1FBRXRDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxXQUE2QixDQUFDO1lBQ2xDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFFbEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BELFdBQVcsR0FBRyxJQUFJLG1CQUFtQixDQUFDO29CQUNsQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU87b0JBQ2xCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDcEIsSUFBSSxFQUFFLE1BQU07b0JBQ1osV0FBVztvQkFDWCxRQUFRLEVBQUUsQ0FBQyxhQUFhO29CQUN4QixRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYTtvQkFDMUMsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO29CQUNsQixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7b0JBQ3BDLEdBQUcsRUFBRSxDQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDO29CQUNWLEdBQUcsRUFBRSxDQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDO29CQUNWLFVBQVUsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVU7b0JBQzFDLFVBQVUsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVU7b0JBQzFDLEtBQUssRUFBRSxDQUFDO2lCQUNYLENBQUMsQ0FBQzthQUNOO2lCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6RCxXQUFXLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQztvQkFDbEMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPO29CQUNsQixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU87b0JBQ3BCLElBQUksRUFBRSxNQUFNO29CQUNaLFdBQVc7b0JBQ1gsUUFBUSxFQUFFLENBQUMsYUFBYTtvQkFDeEIsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWE7b0JBQzFDLE1BQU0sRUFBRSxLQUFLO29CQUNiLFFBQVEsRUFBRSxLQUFLO29CQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztvQkFDbEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO29CQUNwQyxHQUFHLEVBQUUsQ0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBQztvQkFDVixHQUFHLEVBQUUsQ0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBQztvQkFDVixVQUFVLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVO29CQUMxQyxVQUFVLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVO29CQUMxQyxLQUFLLEVBQUUsQ0FBQztpQkFDWCxDQUFDLENBQUM7YUFDTjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDMUQsV0FBVyxHQUFHLElBQUksa0JBQWtCLENBQUM7b0JBQ2pDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDbEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPO29CQUNwQixXQUFXO29CQUNYLE9BQU8sRUFBRSxLQUFLLENBQUMsY0FBYztvQkFDN0IsUUFBUSxFQUFFLENBQUMsYUFBYTtvQkFDeEIsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWE7b0JBQzFDLE1BQU0sRUFBRSxLQUFLO29CQUNiLFFBQVEsRUFBRSxLQUFLO29CQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztvQkFDbEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO29CQUNwQyxHQUFHLEVBQUUsQ0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBQztvQkFDVixHQUFHLEVBQUUsQ0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBQztvQkFDVixVQUFVLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVO29CQUMxQyxVQUFVLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVO29CQUMxQyxLQUFLLEVBQUUsQ0FBQztpQkFDWCxDQUFDLENBQUM7YUFDTjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUQsV0FBVyxHQUFHLElBQUksbUJBQW1CLENBQUM7b0JBQ2xDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDbEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPO29CQUNwQixJQUFJLEVBQUUsTUFBTTtvQkFDWixXQUFXO29CQUNYLFFBQVEsRUFBRSxDQUFDLGFBQWE7b0JBQ3hCLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhO29CQUMxQyxNQUFNLEVBQUUsS0FBSztvQkFDYixRQUFRLEVBQUUsS0FBSztvQkFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7b0JBQ2xCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztvQkFDcEMsR0FBRyxFQUFFLENBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUM7b0JBQ1YsR0FBRyxFQUFFLENBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUM7b0JBQ1YsVUFBVSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVTtvQkFDMUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVTtvQkFDMUMsS0FBSyxFQUFFLENBQUM7aUJBQ1gsQ0FBQyxDQUFDO2FBQ047aUJBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVELFdBQVcsR0FBRyxJQUFJLGtCQUFrQixDQUFDO29CQUNqQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU87b0JBQ2xCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDcEIsV0FBVztvQkFDWCxPQUFPLEVBQUUsS0FBSyxDQUFDLGNBQWM7b0JBQzdCLFFBQVEsRUFBRSxDQUFDLGFBQWE7b0JBQ3hCLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhO29CQUMxQyxNQUFNLEVBQUUsS0FBSztvQkFDYixRQUFRLEVBQUUsS0FBSztvQkFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7b0JBQ2xCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztvQkFDcEMsR0FBRyxFQUFFLENBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUM7b0JBQ1YsR0FBRyxFQUFFLENBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUM7b0JBQ1YsVUFBVSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVTtvQkFDMUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVTtvQkFDMUMsS0FBSyxFQUFFLENBQUM7aUJBQ1gsQ0FBQyxDQUFDO2FBQ047WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFzQjtRQUN2QyxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxNQUFNLENBQUMsMEJBQTBCLENBQUMsWUFBaUIsRUFBRSxhQUFrQjtRQUMxRSxJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM3QixJQUNJLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDM0UsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUM1RTtZQUNFLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUMzQjtRQUVELE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxZQUFpQixFQUFFLFNBQWMsRUFBRSxhQUFzQjtRQUM1RixJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRTVDLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxRQUFRLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUV0RixPQUFPO1lBQ0gsR0FBRyxFQUFFLFlBQVksQ0FBQyxPQUFPO1lBQ3pCLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSztZQUN6QixJQUFJLEVBQUUsTUFBTTtZQUNaLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUztZQUM5QixXQUFXO1lBQ1gsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRLElBQUksQ0FBQyxhQUFhO1lBQ2pELFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhO1lBQzlDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTTtZQUMzQixRQUFRLEVBQUUsWUFBWSxDQUFDLFNBQVM7WUFDaEMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1lBQ3RCLGNBQWMsRUFBRSxTQUFTLENBQUMsY0FBYztZQUN4QyxlQUFlLEVBQUUsU0FBUyxDQUFDLGVBQWU7WUFDMUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixPQUFPLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQ25DLEdBQUcsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsT0FBTyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUNsQyxVQUFVLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQzFDLFVBQVUsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFDMUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxjQUFjO1lBQ2pDLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxrQkFBa0I7WUFDbkQsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQy9CLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtZQUMvQixvQkFBb0I7WUFDcEIsNEJBQTRCO1lBQzVCLGdDQUFnQztZQUNoQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVM7WUFDOUIsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLGdCQUFnQjtTQUMvQyxDQUFDO0lBQ04sQ0FBQztJQUVNLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxZQUFpQixFQUFFLFNBQWMsRUFBRSxhQUFzQixFQUN4RixTQUFjLEVBQUUsZ0JBQXFCLEVBQUUsZUFBb0IsRUFDM0QsUUFBYSxFQUFFLFFBQWEsRUFBRSxVQUFlO1FBQzdDLElBQUksV0FBNkIsQ0FBQztRQUNsQyxNQUFNLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRXRHLElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyxZQUFZLEVBQUU7WUFDdkMsT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7WUFFdEIsSUFBSSxTQUFTLENBQUMsbUJBQW1CLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUUsTUFBTSxjQUFjLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDMUcsT0FBTyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzlHO2lCQUNJO2dCQUNELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1lBRUQsV0FBVyxHQUFHLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDL0M7YUFBTSxJQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssa0JBQWtCO1lBQ2xELFlBQVksQ0FBQyxPQUFPLEtBQUssZUFBZTtZQUN4QyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLFVBQVUsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2pELE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2FBQzNCO2lCQUFNLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsT0FBTyxFQUFFO2dCQUNuRCxPQUFPLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQzthQUNsQztpQkFBTSxJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDLDBCQUEwQjtnQkFDcEUsU0FBUyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUMvQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDcEIsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDOUI7aUJBQU0sSUFBSSxTQUFTLENBQUMsU0FBUyxLQUFLLFVBQVUsQ0FBQyw2QkFBNkI7Z0JBQ3ZFLFNBQVMsQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDLGFBQWEsRUFBRTtnQkFDbEQsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2FBQy9CO2lCQUFNLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsc0JBQXNCLEVBQUU7Z0JBQ2xFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO2dCQUM3QixPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUMvQjtpQkFBTSxJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDLG1CQUFtQixFQUFFO2dCQUMvRCxPQUFPLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDOUI7WUFFRCxXQUFXLEdBQUcsSUFBSSw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzRDthQUFNO1lBQ0gsNkJBQTZCO1lBQzdCLElBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsVUFBVSxJQUFJLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3hHLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQzthQUNqRDtZQUVELFFBQVEsU0FBUyxDQUFDLFNBQVMsRUFBRTtnQkFDekIsS0FBSyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sa0JBQWtCLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7b0JBQ3pFLE9BQU8sQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUN4RSxTQUFTLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQy9DLFdBQVcsR0FBRyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQyxNQUFNO2lCQUNUO2dCQUNELEtBQUssVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN4QixnRkFBZ0Y7b0JBQ2hGLFdBQVcsR0FBRyxJQUFJLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsRCxNQUFNO2lCQUNUO2dCQUNELEtBQUssVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxQixJQUFJLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQzFELE9BQU8sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7d0JBQzdDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO3dCQUM1QixPQUFPLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzt3QkFDNUIsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7d0JBRWhDLFdBQVcsR0FBRyxJQUFJLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUN2RDt5QkFBTTt3QkFDSCxnQkFBZ0I7cUJBQ25CO29CQUNELE1BQU07aUJBQ1Q7Z0JBQ0QsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO29CQUN0QixXQUFXLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFL0MsK0VBQStFO29CQUMvRSxXQUFXLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDLGNBQWMsS0FBSyxFQUFFO3dCQUNsRixXQUFXLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztvQkFFOUUsTUFBTTtpQkFDVDtnQkFDRCxLQUFLLFVBQVUsQ0FBQyxZQUFZLENBQUM7Z0JBQzdCLEtBQUssVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNwQixPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztvQkFDeEIsV0FBVyxHQUFHLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzlDLE1BQU07aUJBQ1Q7Z0JBQ0QsS0FBSyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO29CQUM1QixXQUFXLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbEQsTUFBTTtpQkFDVDtnQkFDRCxLQUFLLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7b0JBQzNCLFdBQVcsR0FBRyxJQUFJLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNqRCxNQUFNO2lCQUNUO2dCQUNELEtBQUssVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDdEIsS0FBSyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO29CQUN2QixPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDN0csT0FBTyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQjt3QkFDdkMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUM5RixPQUFPLENBQUMsZUFBZSxHQUFHLGVBQWU7d0JBQ3JDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUU1RixXQUFXLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDN0MsTUFBTTtpQkFDVDtnQkFDRCxLQUFLLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7b0JBQ3hCLFdBQVcsR0FBRyxJQUFJLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM5QyxNQUFNO2lCQUNUO2dCQUNELEtBQUssVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztvQkFDdkIsV0FBVyxHQUFHLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQy9DLE1BQU07aUJBQ1Q7Z0JBQ0QsS0FBSyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25CLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO29CQUN2QixXQUFXLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDL0MsTUFBTTtpQkFDVDtnQkFDRCxLQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEIsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7b0JBQzFCLFdBQVcsR0FBRyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQyxNQUFNO2lCQUNUO2dCQUNELEtBQUssVUFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDeEIsS0FBSyxVQUFVLENBQUMsT0FBTyxDQUFDO2dCQUN4QixLQUFLLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDckMsS0FBSyxVQUFVLENBQUMsVUFBVSxDQUFDO2dCQUMzQixLQUFLLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDakMsS0FBSyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNCLFdBQVcsR0FBRyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQyxNQUFNO2lCQUNUO2dCQUNELEtBQUssVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QixXQUFXLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsTUFBTTtpQkFDVDtnQkFFRCxLQUFLLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDMUIsV0FBVyxHQUFHLElBQUksNEJBQTRCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3hELE1BQU07aUJBQ1Q7Z0JBQ0QsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNyQixLQUFLLFVBQVUsQ0FBQyxXQUFXLENBQUM7Z0JBQzVCLEtBQUssVUFBVSxDQUFDLGNBQWMsQ0FBQztnQkFDL0IsS0FBSyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDcEYsV0FBVyxHQUFHLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVDLE1BQU07aUJBQ1Q7Z0JBQ0QsS0FBSyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUM5QixLQUFLLFVBQVUsQ0FBQyxhQUFhLENBQUM7Z0JBQzlCLEtBQUssVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN4QixPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztvQkFDckIsV0FBVyxHQUFHLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQy9DLE1BQU07aUJBQ1Q7Z0JBQ0QsS0FBSyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO29CQUM1QixXQUFXLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDL0MsTUFBTTtpQkFDVDtnQkFDRCxLQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEIsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7b0JBQzFCLFdBQVcsR0FBRyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQyxNQUFNO2lCQUNUO2dCQUNELEtBQUssVUFBVSxDQUFDLFVBQVUsQ0FBQztnQkFDM0IsS0FBSyxVQUFVLENBQUMsY0FBYyxDQUFDO2dCQUMvQixLQUFLLFVBQVUsQ0FBQyxXQUFXLENBQUM7Z0JBQzVCLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQztnQkFDcEIsS0FBSyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO29CQUN0QixXQUFXLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDL0MsTUFBTTtpQkFDVDtnQkFDRCxLQUFLLFVBQVUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLEtBQUssVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUM1QixXQUFXLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsTUFBTTtpQkFDVDtnQkFDRCxLQUFLLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDekIsT0FBTyxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7b0JBQzdCLFdBQVcsR0FBRyxJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoRCxNQUFNO2lCQUNUO2dCQUNELEtBQUssVUFBVSxDQUFDLFFBQVEsQ0FBQztnQkFDekIsS0FBSyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUM5QixLQUFLLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDN0IsMkJBQTJCO29CQUMzQixXQUFXLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDOUMsTUFBTTtpQkFDVDtnQkFDRCxLQUFLLFVBQVUsQ0FBQyxZQUFZLENBQUM7Z0JBQzdCLEtBQUssVUFBVSxDQUFDLHNCQUFzQixDQUFDO2dCQUN2QyxLQUFLLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUMvQixPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztvQkFDdkIsV0FBVyxHQUFHLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzlDLE1BQU07aUJBQ1Q7Z0JBQ0QsS0FBSyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDL0IsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsbUJBQW1CLENBQUM7b0JBQzVELE9BQU8sQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUMsc0JBQXNCLENBQUM7b0JBQ2xFLE9BQU8sQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUMsMkJBQTJCLENBQUM7b0JBQzVFLFdBQVcsR0FBRyxJQUFJLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM5QyxNQUFNO2lCQUNUO2dCQUNELEtBQUssVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMzQixPQUFPLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztvQkFDL0IsV0FBVyxHQUFHLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzlDLE1BQU07aUJBQ1Q7Z0JBQ0QsS0FBSyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3ZCLFdBQVcsR0FBRyxJQUFJLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNqRCxNQUFNO2lCQUNUO2dCQUNEOztrQkFFRTtnQkFDRixLQUFLLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDM0MsS0FBSyxVQUFVLENBQUMsNkJBQTZCLENBQUMsQ0FBQztvQkFDM0MsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ3BCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsMEJBQTBCLENBQUM7b0JBRXBGLFdBQVcsR0FBRyxJQUFJLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN4RCxNQUFNO2lCQUNUO2dCQUNELEtBQUssVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQixPQUFPLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztvQkFFL0IsV0FBVyxHQUFHLElBQUksNEJBQTRCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3hELE1BQU07aUJBQ1Q7YUFDSjtTQUNKO1FBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQztZQUM5RCxXQUFXLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwRDtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxNQUFNLENBQUMsc0JBQXNCLENBQUMsS0FBdUI7UUFDeEQsSUFBSSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBRS9DLDBDQUEwQztRQUMxQyxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFO1lBQ2xDLG1CQUFtQixHQUFHLG1CQUFtQixLQUFLLE1BQU0sQ0FBQztTQUN4RDtRQUVELHVDQUF1QztRQUN2QyxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssUUFBUSxFQUFFO1lBQ2hDLG1CQUFtQixHQUFHLG1CQUFtQixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztTQUNoRjtRQUVELE9BQU8sbUJBQW1CLENBQUM7SUFDL0IsQ0FBQztJQUVPLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBMEIsRUFBRSxFQUFlLEVBQ3JFLG9CQUEwQztRQUMxQyxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDbkQsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUVwQixLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDbkMsSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFOzRCQUM3RCxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7b0NBQ3hCLEtBQUssRUFBRSxVQUFVLENBQUMsY0FBYyxJQUFJLEVBQUU7b0NBQ3RDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDLFFBQVE7aUNBQ3BFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt5QkFDN0I7NkJBQU07NEJBQ0gsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO29DQUN4QixLQUFLLEVBQUUsVUFBVSxDQUFDLGNBQWMsSUFBSSxFQUFFO29DQUN0QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxRQUFRO2lDQUNwRSxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7eUJBQ2xDO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUVILEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDekM7cUJBQU07b0JBQ0gsTUFBTSxVQUFVLEdBQUcsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUN4RixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxXQUFXLEtBQUssVUFBVSxDQUFDLENBQUM7b0JBQzVGLE1BQU0sbUJBQW1CLEdBQUcsb0JBQW9CLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQy9FLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDbkc7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFhTSx5QkFBeUI7UUFDNUIsTUFBTSxNQUFNLEdBQXVCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0MsSUFBSSx1QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDakMsSUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFFM0Isb0RBQW9EO1FBQ3BELDZCQUE2QjtRQUM3QixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUN4QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUxRCxJQUFJLFdBQVcsRUFBRTtnQkFDYixzQkFBc0I7Z0JBQ3RCLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ3BFLHVCQUF1QixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztpQkFDNUU7cUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO29CQUM5QyxpQkFBaUIsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7aUJBQ3RFO2FBQ0o7U0FDSjtRQUVELHVEQUF1RDtRQUN2RCxJQUFJLHVCQUF1QixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEMsdUJBQXVCLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDO2dCQUN6Rix1Q0FBdUMsR0FBRyx1QkFBdUIsR0FBRyxZQUFZLENBQUM7U0FDeEY7UUFFRCx1REFBdUQ7UUFDdkQsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLGlCQUFpQixHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztnQkFDakYsdUNBQXVDLEdBQUcsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO1NBQzdFO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUM5RCxNQUFNLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUN4QixLQUFLO1lBQ0wsT0FBTyxFQUFFLHVCQUF1QixHQUFHLGlCQUFpQjtZQUNwRCxXQUFXLEVBQUUsY0FBYyxDQUFDLElBQUk7U0FDbkMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2hFLHVCQUF1QjtRQUN2QixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsc0JBQXNCLENBQUMsU0FBUyxFQUM1RSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLEVBQzVFLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEdBQUcsVUFBVSxDQUFDO0lBQzdELENBQUM7SUFFRCxTQUFTO1FBQ0wsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxvQkFBb0I7UUFFL0UsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFPO1FBQ2YsSUFBSSxPQUFPLENBQUMsa0JBQWtCLElBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRTtZQUN2RSxlQUFlO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFO2dCQUNwRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQztnQkFDbEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDMUI7U0FDSjtRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQUU7UUFFdkUsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FBRTtRQUU3RSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQUU7UUFFM0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUFFO1FBRTNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQUU7UUFFdkUsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FBRTtJQUNqRixDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztJQUN4RCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsTUFBMEIsRUFBRSxNQUFjO1FBQzFELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRWhFLHVCQUF1QjtRQUN2QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxDQUFDLFdBQVcsRUFBRTtZQUM3QyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsc0JBQXNCLENBQUMsU0FBUyxFQUM5RSxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1NBQ3BDO2FBQU07WUFDSCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsc0JBQXNCLENBQUMsU0FBUyxFQUM3RSxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHNCQUFzQixDQUFDLFNBQVMsRUFDbEYsb0JBQW9CLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQztTQUN6RDtRQUVELDhEQUE4RDtRQUM5RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLG1CQUFtQjtZQUNuQjtZQUNJLGlEQUFpRDtZQUNqRCxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQyxZQUFZO2dCQUM1QyxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQyxTQUFTLEVBQzNDO2dCQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFFZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDckI7Z0JBRUQsNENBQTRDO2dCQUM1QywwQkFBMEI7Z0JBQzFCLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO29CQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BDO2FBQ0o7aUJBQU07Z0JBQ0gsTUFBTSxnQkFBZ0IsR0FBZ0IsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXhELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzlDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDakQsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO3FCQUNsQztpQkFDSjtnQkFFRCw2RUFBNkU7Z0JBQzdFLHdEQUF3RDtnQkFDeEQsMENBQTBDO2dCQUMxQyxLQUFLLE1BQU0sWUFBWSxJQUFJLE1BQU0sRUFBRTtvQkFDL0IsSUFBSSxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTt3QkFDMUIsS0FBSyxJQUFJLEdBQUcsR0FBVyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxZQUFZLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7NEJBQzNGLElBQUksWUFBWSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0NBQzFCLEtBQUssSUFBSSxHQUFHLEdBQVcsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO29DQUMzRixJQUFJLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTt3Q0FDbkUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO3FDQUNyQztpQ0FDSjs2QkFDSjtpQ0FBTTtnQ0FDSCxJQUFJLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUU7b0NBQ2hGLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7aUNBQ2xEOzZCQUNKO3lCQUNKO3FCQUNKO3lCQUFNLElBQUksWUFBWSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7d0JBQ2pDLEtBQUssSUFBSSxHQUFHLEdBQVcsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFOzRCQUMzRixJQUFJLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsR0FBRyxJQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7Z0NBQ2hGLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7NkJBQ2xEO3lCQUNKO3FCQUNKO3lCQUFNO3dCQUNILElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxHQUFHLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUU7NEJBQzdGLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO3lCQUMvRDtxQkFDSjtpQkFDSjtnQkFFRCwyRkFBMkY7Z0JBQzNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ2pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFDekIsb0RBQW9EOzRCQUNwRCxNQUFNLENBQUMsSUFBSSxDQUNQLElBQUksdUJBQXVCLENBQUM7Z0NBQ3hCLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0NBQ2hCLEtBQUssRUFBRSxFQUFFO2dDQUNULElBQUksRUFBRSxNQUFNO2dDQUNaLFdBQVcsRUFBRSxFQUFFO2dDQUNmLFFBQVEsRUFBRSxLQUFLO2dDQUNmLFFBQVEsRUFBRSxLQUFLO2dDQUNmLE1BQU0sRUFBRSxLQUFLO2dDQUNiLFFBQVEsRUFBRSxLQUFLO2dDQUNmLEtBQUssRUFBRSxFQUFFO2dDQUNULGNBQWMsRUFBRSxFQUFFO2dDQUNsQixHQUFHLEVBQUUsQ0FBQztnQ0FDTixPQUFPLEVBQUUsQ0FBQztnQ0FDVixHQUFHLEVBQUUsQ0FBQztnQ0FDTixPQUFPLEVBQUUsQ0FBQztnQ0FDVixLQUFLLEVBQUUsQ0FBQzs2QkFDWCxDQUFDLENBQ0wsQ0FBQzt5QkFDTDtxQkFDSjtpQkFDSjtnQkFFRCx5QkFBeUI7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3BELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLO1FBQ3ZCLElBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRWhDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDZCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDbEIsaURBQWlEO1lBQ2pELHVDQUF1QztZQUN2QyxLQUFLLE1BQU0sWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BDLDREQUE0RDtnQkFDNUQsSUFBSSxZQUFZLENBQUMsV0FBVyxLQUFLLGNBQWMsRUFBRTtvQkFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDN0I7Z0JBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7b0JBQ3hCLG9CQUFvQixHQUFHLEtBQUssQ0FBQztpQkFDaEM7YUFDSjtZQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQy9GO2FBQ0k7WUFDRCxzREFBc0Q7WUFDdEQsaURBQWlEO1lBQ2pELHVDQUF1QztZQUN2QyxLQUFLLE1BQU0sWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBRXBDLElBQUksWUFBWSxDQUFDLFdBQVcsS0FBSyxjQUFjLEVBQUU7b0JBQzdDLElBQUksWUFBWSxDQUFDLFdBQVcsSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2pFLDhEQUE4RDt3QkFDOUQsMkRBQTJEO3dCQUMzRCxLQUFLLE1BQU0saUJBQWlCLElBQUksWUFBWSxDQUFDLFdBQVcsRUFBRTs0QkFDdEQsTUFBTSxtQkFBbUIsR0FBRyxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOzRCQUMzRixJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQ2xFLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxDQUFDO3lCQUUxQztxQkFDSjt5QkFBTTt3QkFDSCxNQUFNLG1CQUFtQixHQUFHLG9CQUFvQixDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUN0RixzRUFBc0U7d0JBQ3RFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztxQkFDM0Y7aUJBQ0o7Z0JBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7b0JBQ3hCLG9CQUFvQixHQUFHLEtBQUssQ0FBQztpQkFDaEM7YUFDSjtTQUNKO1FBRUQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFbEMsOEVBQThFO1FBQzlFLElBQUksQ0FBQyxXQUFXLElBQUksb0JBQW9CLEVBQUU7WUFDdEMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUxQyx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFPO1FBQ1osSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JFLE1BQU0sTUFBTSxHQUF1QixJQUFJLENBQUMsbUJBQW1CLENBQ3ZELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFcEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQ3pCLElBQUksRUFDSixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQ0wsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQ3pCLElBQUksRUFDSixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQ0wsQ0FBQztZQUVGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyx3QkFBaUMsS0FBSztRQUM3QyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckUseUVBQXlFO1lBQ3pFLDZEQUE2RDtZQUM3RCxLQUFLLE1BQU0sWUFBWSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUM1RCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvRSwrREFBK0Q7Z0JBQy9ELElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxXQUFXLEtBQUssY0FBYyxFQUFFO29CQUMzRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxXQUFXLENBQUMsR0FBRyxDQUFDO29CQUN2RixXQUFXLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFbkcsMkJBQTJCO29CQUMzQixJQUFJLFdBQVcsQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLFlBQVksQ0FBQyxXQUFXLEVBQUU7d0JBQ25FLDhEQUE4RDt3QkFDOUQsdURBQXVEO3dCQUN2RCxLQUFLLE1BQU0saUJBQWlCLElBQUksWUFBWSxDQUFDLFdBQVcsRUFBRTs0QkFDdEQsaUJBQWlCLENBQUMsT0FBTyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7NEJBRXRGLE1BQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNyRyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7NEJBRWpHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUM5RCxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ3JEO3FCQUNKO2lCQUNKO2FBQ0o7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRW5CLElBQUkscUJBQXFCLEVBQUU7Z0JBQ3ZCLGdDQUFnQztnQkFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzthQUNoQztTQUNKO0lBQ0wsQ0FBQztJQUVNLFVBQVU7UUFDYixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLDBEQUEwRDtJQUMxRCxrREFBa0Q7SUFDbEQsUUFBUTtJQUNSLElBQUk7SUFFSSxrQkFBa0IsQ0FBQyxHQUFXO1FBQ2xDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMxQixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO2dCQUNuQixXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPO2FBQ1Y7aUJBQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDMUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtvQkFDckMsSUFBSSxVQUFVLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTt3QkFDeEIsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDOUQsT0FBTztxQkFDVjtnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRU8sZ0JBQWdCLENBQUMsYUFBeUIsRUFBRSxVQUFzQjtRQUN0RSxVQUFVO1FBQ1YsK0RBQStEO1FBQy9ELGlDQUFpQztRQUNqQyxLQUFLLE1BQU0sRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUM1QixJQUFJLEVBQUUsQ0FBQyxPQUFPLEtBQUssWUFBWSxFQUFFO2dCQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzthQUN2QjtpQkFBTSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEtBQUssdUJBQXVCLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7YUFDOUI7aUJBQU0sSUFBSSxFQUFFLENBQUMsT0FBTyxLQUFLLCtCQUErQixFQUFFO2dCQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQzthQUM3QjtTQUNKO1FBRUQsVUFBVTtRQUNWLDREQUE0RDtRQUM1RCw4QkFBOEI7UUFDOUIsS0FBSyxNQUFNLEVBQUUsSUFBSSxVQUFVLEVBQUU7WUFDekIsSUFBSSxFQUFFLENBQUMsT0FBTyxLQUFLLFlBQVksRUFBRTtnQkFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7YUFDM0I7aUJBQU0sSUFBSSxFQUFFLENBQUMsT0FBTyxLQUFLLHVCQUF1QixFQUFFO2dCQUMvQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO2FBQ2xDO2lCQUFNLElBQUksRUFBRSxDQUFDLE9BQU8sS0FBSywrQkFBK0IsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQzthQUNqQztTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7U0FDckQ7UUFFRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDcEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1NBQ25FO1FBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUNsRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1NBQ2pFO1FBRUQsNENBQTRDO1FBQzVDLCtEQUErRDtRQUMvRCxpQ0FBaUM7UUFDakMsS0FBSyxNQUFNLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEtBQUssWUFBWSxFQUFFO2dCQUMvQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsb0JBQW9CLENBQUMsMEJBQTBCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFdkcsSUFBSSxJQUFJLENBQUMsMkJBQTJCLEVBQUU7b0JBQ2xDLE1BQU07aUJBQ1Q7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELG1CQUFtQixDQUFDLGFBQXlCLEVBQUUsVUFBc0I7UUFDakUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxXQUFXLENBQUMsWUFBWSxFQUFFO1lBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNILG9FQUFvRTtZQUNwRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNuQyxJQUNJLEtBQUssQ0FBQyxPQUFPLEtBQUssZUFBZTtvQkFDakMsS0FBSyxDQUFDLE9BQU8sS0FBSyxrQkFBa0I7b0JBQ3BDLEtBQUssQ0FBQyxPQUFPLEtBQUssWUFBWTtvQkFDOUIsS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsS0FBSztvQkFDcEMsS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsUUFBUTtvQkFDdkMsS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsVUFBVTtvQkFDekMsS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsT0FBTztvQkFDdEMsS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsY0FBYztvQkFDN0MsS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsU0FBUztvQkFDeEMsS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsNkJBQTZCO29CQUM1RCxLQUFLLENBQUMsU0FBUyxLQUFLLFVBQVUsQ0FBQywwQkFBMEI7b0JBQ3pELEtBQUssQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDLE9BQU87b0JBQ3RDLEtBQUssQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDLHNCQUFzQjtvQkFDckQsS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsbUJBQW1CLEVBQ3BEO29CQUNFLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztpQkFDL0I7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsTUFBTSxNQUFNLEdBQXVCLEVBQUUsQ0FBQztRQUV0QyxNQUFNLFlBQVksR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN2RyxJQUFJLG1CQUFtQixHQUFHLEtBQUssQ0FBQztRQUVoQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ25DLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUzRSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUFFLE9BQU87YUFBRTtZQUUzQixrRUFBa0U7WUFDbEUsSUFDSSxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQyxZQUFZO2dCQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFDLDJCQUEyQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDN0YsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ3hFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ2pGO2dCQUNFLE9BQU87YUFDVjtZQUVELHlDQUF5QztZQUN6QyxJQUFJLFlBQVksR0FBRyxDQUFDLElBQUksb0JBQW9CLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDdkUsSUFBSSxZQUFZLEdBQUcsQ0FBQyxJQUFJLG1CQUFtQixFQUFFO29CQUN6QyxPQUFPO2lCQUNWO2dCQUVELG1CQUFtQixHQUFHLElBQUksQ0FBQztnQkFFM0IsSUFBSSxZQUFZLEdBQUcsQ0FBQyxFQUFFO29CQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzNDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ2pGO3FCQUFNO29CQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBQ3pGO2FBQ0o7WUFFRCxtQkFBbUI7WUFDbkIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDdEMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO2dCQUM5QyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQ2hEO2lCQUFNLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDakMsQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLFVBQVUsQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsaUJBQWlCLENBQUMsRUFBRTtnQkFDcEcsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUM7Z0JBQzVILFNBQVMsQ0FBQyxLQUFLLEdBQUcsY0FBYyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDdEQ7WUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssWUFBWSxFQUFFO2dCQUNoQyxNQUFNLElBQUksR0FBUSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUMvQywyRUFBMkU7Z0JBQzNFLGtFQUFrRTtnQkFDbEUsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQztnQkFDN0MsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUM7Z0JBQzFELFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7YUFDNUQ7WUFDRCxNQUFNLFdBQVcsR0FBcUIsb0JBQW9CLENBQUMsb0JBQW9CLENBQzNFLEtBQUssRUFDTCxTQUFTLEVBQ1QsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsbUJBQW1CLEVBQ3hCLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsVUFBVSxDQUNsQixDQUFDO1lBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxjQUFjLENBQUMsWUFBaUIsRUFBRSxjQUF1QixLQUFLO1FBQzFELG9GQUFvRjtRQUNwRixzSEFBc0g7UUFDdEgsK0JBQStCO1FBQy9CLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEUsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkQsd0JBQXdCO1FBRXhCLElBQUksT0FBTyxFQUFFO1lBQ1QseUNBQXlDO1lBQ3pDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxXQUFXLENBQUMsV0FBVyxFQUFFO2dCQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN4QjtZQUVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7WUFDdEQsTUFBTSwwQkFBMEIsR0FBRyxJQUFJLHdCQUF3QixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUN2RyxZQUFZLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUk7SUFFUixDQUFDO0lBRUQsY0FBYyxDQUFDLFlBQWlCO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxjQUFjLENBQUMsWUFBaUI7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHVCQUF1QixDQUFDLHFCQUEwQjtRQUM5QyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQyxXQUFXLEVBQUU7WUFDNUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzFEO0lBQ0wsQ0FBQztJQUVELE9BQU8sQ0FBQyxlQUFvQjtRQUN4QixNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hILG9GQUFvRjtRQUVwRixJQUFJLHFCQUFxQixFQUFFO1lBQ3ZCLElBQUkscUJBQXFCLENBQUMsU0FBUyxLQUFLLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDbEUsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLHVCQUF1QixDQUN6RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFDM0MsZUFBZSxDQUFDLE9BQU8sRUFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ2pDLGVBQWUsQ0FBQyxVQUFVLEVBQzFCLGVBQWUsQ0FBQyxLQUFLLEVBQ3JCLHFCQUFxQixDQUFDLFNBQVMsRUFDL0IsZUFBZSxDQUFDLDJCQUEyQixDQUM5QyxDQUFDO2dCQUNGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUMzRDtpQkFBTSxJQUFJLHFCQUFxQixDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsYUFBYSxFQUFFO2dCQUNyRSxNQUFNLHlCQUF5QixHQUFHLElBQUksdUJBQXVCLENBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUMzQyxlQUFlLENBQUMsT0FBTyxFQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFDakMsZUFBZSxDQUFDLFVBQVUsRUFDMUIsZUFBZSxDQUFDLEtBQUssRUFDckIscUJBQXFCLENBQUMsU0FBUyxFQUMvQixlQUFlLENBQUMsU0FBUyxDQUM1QixDQUFDO2dCQUNGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUMzRDtpQkFBTTtnQkFDSCxNQUFNLHlCQUF5QixHQUFHLElBQUksdUJBQXVCLENBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUMzQyxlQUFlLENBQUMsT0FBTyxFQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFDakMsZUFBZSxDQUFDLFVBQVUsRUFDMUIsZUFBZSxDQUFDLEtBQUssRUFDckIscUJBQXFCLENBQUMsU0FBUyxFQUMvQixlQUFlLENBQUMsU0FBUyxDQUM1QixDQUFDO2dCQUNGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUMzRDtTQUNKO2FBQU07WUFDSCxpREFBaUQ7WUFDakQsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLHVCQUF1QixDQUN6RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFDM0MsZUFBZSxDQUFDLE9BQU8sRUFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ2pDLGVBQWUsQ0FBQyxVQUFVLEVBQzFCLGVBQWUsQ0FBQyxLQUFLLEVBQ3JCLElBQUksRUFDSixlQUFlLENBQUMsU0FBUyxDQUM1QixDQUFDO1lBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQUVELGlCQUFpQixDQUFDLGVBQW9CO1FBQ2xDLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEgsTUFBTSxTQUFTLEdBQVEsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztRQUNwRCxNQUFNLFNBQVMsR0FBRyxPQUFPLHFCQUFxQixLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3RILE1BQU0seUJBQXlCLEdBQUcsSUFBSSx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLGVBQWUsQ0FBQyxPQUFPLEVBQzNHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUM5RSxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVM7WUFDOUIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxtQkFBbUI7U0FDMUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxtQkFBbUI7UUFDZixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDN0MsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUM7UUFDNUgsOEVBQThFO1FBRTlFLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxnQkFBZ0IsRUFBRTtZQUNwQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsR0FBRyxHQUFHLENBQUM7U0FDMUc7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQ3JDLE9BQU8sR0FBRyxxQkFBcUIsR0FBRyxHQUFHLENBQUM7U0FDekM7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOzt3RkExcENRLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FDOUNqQyxnRkFNSTtRQWdFSixzSEFDSTs7UUF2RU0sK0JBQVk7O2tERDhDVCxvQkFBb0I7Y0FOaEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7MExBRVksUUFBUTtrQkFBaEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFFSSxrQkFBa0I7a0JBQTNCLE1BQU07WUFDRyxxQkFBcUI7a0JBQTlCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNHLGtCQUFrQjtrQkFBM0IsTUFBTTtZQUNHLHFCQUFxQjtrQkFBOUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIE9uRGVzdHJveSxcclxuICAgIElucHV0LCBLZXlWYWx1ZURpZmZlcnMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIERvQ2hlY2tcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UsIERpYWxvZ0RhdGEsIERpYWxvZ0RhdGFUeXBlIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWIvZGlhbG9nJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgICBQZXBwZXJpRmllbGRDbGlja2VkRGF0YSxcclxuICAgIFBlcHBlcmlPYmplY3RDaGFuZ2VkRGF0YSxcclxuICAgIExBWU9VVF9UWVBFLFxyXG4gICAgRklFTERfVFlQRSxcclxuICAgIEN1c3RvbWl6YXRpb25TZXJ2aWNlLFxyXG4gICAgVUlDb250cm9sLFxyXG4gICAgVUlDb250cm9sRmllbGQsXHJcbiAgICBPYmplY3RTaW5nbGVEYXRhLFxyXG4gICAgT2JqZWN0c0RhdGFSb3dDZWxsLFxyXG4gICAgUGVwcGVyaUZpZWxkQmFzZSxcclxuICAgIFBlcHBlcmlUZXh0Ym94RmllbGQsXHJcbiAgICBQZXBwZXJpU2VsZWN0RmllbGQsXHJcbiAgICBQZXBwZXJpTWVudUZpZWxkLFxyXG4gICAgUGVwcGVyaVF1YW50aXR5U2VsZWN0b3JGaWVsZCxcclxuICAgIFBlcHBlcmlBZGRyZXNzRmllbGQsXHJcbiAgICBQZXBwZXJpSW5kaWNhdG9yc0ZpZWxkLFxyXG4gICAgUGVwcGVyaUludGVybmFsUGFnZUZpZWxkLFxyXG4gICAgUGVwcGVyaUJ1dHRvbkZpZWxkLFxyXG4gICAgUGVwcGVyaUF0dGFjaG1lbnRGaWVsZCxcclxuICAgIFBlcHBlcmlTaWduYXR1cmVGaWVsZCxcclxuICAgIFBlcHBlcmlJbWFnZUZpZWxkLFxyXG4gICAgUGVwcGVyaUltYWdlc0ZpZWxkLFxyXG4gICAgUGVwcGVyaVRleHRhcmVhRmllbGQsXHJcbiAgICBQZXBwZXJpUmljaEh0bWxUZXh0YXJlYUZpZWxkLFxyXG4gICAgUGVwcGVyaURhdGVGaWVsZCxcclxuICAgIFBlcHBlcmlDaGVja2JveEZpZWxkLFxyXG4gICAgUGVwcGVyaVNlcGFyYXRvckZpZWxkLFxyXG4gICAgUGVwcGVyaVBsYWNlaG9sZGVyRmllbGQsXHJcbn0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25mbGljdGluZy1saWZlY3ljbGVcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BlcC1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9mb3JtLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Zvcm0uY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXBwZXJpRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkgaXNSZXBvcnQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHVpQ29udHJvbEhlYWRlcjogVUlDb250cm9sO1xyXG4gICAgQElucHV0KCkgbG9ja0V2ZW50cyA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgY2FuRWRpdE9iamVjdCA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBwZXBwZXJpT2JqZWN0SW5wdXQ6IE9iamVjdFNpbmdsZURhdGE7XHJcbiAgICBASW5wdXQoKSBpc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgbGF5b3V0VHlwZTogTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRS5QZXBwZXJpRm9ybTtcclxuICAgIEBJbnB1dCgpIGxpc3RUeXBlID0gJyc7XHJcbiAgICBASW5wdXQoKSBvYmplY3RJZCA9ICcwJztcclxuICAgIEBJbnB1dCgpIHBhcmVudElkID0gJzAnO1xyXG4gICAgQElucHV0KCkgc2VhcmNoQ29kZSA9ICcwJztcclxuICAgIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBmaXJzdEZpZWxkQXNMaW5rID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBpc0NhcmRWaWV3ID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBjaGVja0ZvckNoYW5nZXM6IGFueSA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBwYWdlVHlwZSA9ICcnO1xyXG5cclxuICAgIEBPdXRwdXQoKSBub3RpZnlWYWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxQZXBwZXJpT2JqZWN0Q2hhbmdlZERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxQZXBwZXJpT2JqZWN0Q2hhbmdlZERhdGE+KCk7XHJcbiAgICBAT3V0cHV0KCkgZm9ybVZhbGlkYXRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgICBAT3V0cHV0KCkgY2hpbGRDbGlja2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgY2hpbGRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5RmllbGRDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIG5vdGlmeU1lbnVJdGVtQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBMQVlPVVRfVFlQRSA9IExBWU9VVF9UWVBFO1xyXG4gICAgaXNMb2NrZWQgPSBmYWxzZTtcclxuICAgIGZvcm1HdXR0ZXJTaXplO1xyXG4gICAgY2FyZEd1dHRlclNpemU7XHJcbiAgICByb3dIZWlnaHQ7XHJcbiAgICBsYXN0Rm9jdXNlZEZpZWxkOiBhbnk7XHJcbiAgICBtYXRyaXhJc0xhc3QgPSBmYWxzZTtcclxuICAgIC8vIGxhc3RVcGRhdGVkRmllbGRBcGlOYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGZvcm06IEZvcm1Hcm91cDtcclxuICAgIGRpZmZlcjogYW55O1xyXG5cclxuICAgIC8vIHBheUxvYWQgPSAnJztcclxuICAgIHJvd3M6IEFycmF5PFBlcHBlcmlGaWVsZEJhc2VbXT4gPSBbXTtcclxuICAgIGZpZWxkczogUGVwcGVyaUZpZWxkQmFzZVtdID0gW107XHJcbiAgICBjb2x1bW5zID0gMTtcclxuXHJcbiAgICBoYXNNZW51RmxvYXRpbmdPbk90aGVyRmllbGQgPSBmYWxzZTtcclxuICAgIG1lbnVGaWVsZDogYW55O1xyXG4gICAgbWVudURhdGFGaWVsZDogYW55O1xyXG4gICAgaGFzQ2FtcGFpZ25GaWVsZDogYW55O1xyXG4gICAgaGFzQ2FtcGFpZ25EYXRhRmllbGQ6IGFueTtcclxuICAgIGluZGljYXRvcnNGaWVsZDogYW55O1xyXG4gICAgaW5kaWNhdG9yc0RhdGFGaWVsZDogYW55ID0gbnVsbDtcclxuXHJcbiAgICBzaG91bGRSZWxvYWRGb3JtID0gZmFsc2U7XHJcbiAgICBldmVudFNlcnZpY2VTdWI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBwdWJsaWMganNvbkxpYiA9IEpTT047XHJcblxyXG4gICAgc3RhdGljIGNvbnZlcnRBZGRyZXNzRmllbGRzKGNvbnRyb2xGaWVsZDogYW55LCBhZGRyZXNzRmllbGRzOiBBcnJheTxPYmplY3RzRGF0YVJvd0NlbGw+LCBjYW5FZGl0T2JqZWN0OiBib29sZWFuKTogUGVwcGVyaUZpZWxkQmFzZVtdIHtcclxuICAgICAgICBjb25zdCBmaWVsZHM6IFBlcHBlcmlGaWVsZEJhc2VbXSA9IFtdO1xyXG5cclxuICAgICAgICBhZGRyZXNzRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3VzdG9tRmllbGQ6IFBlcHBlcmlGaWVsZEJhc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZmllbGQuQXBpTmFtZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5BcGlOYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc3RyZWV0JykgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaVRleHRib3hGaWVsZCh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZC5BcGlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5BcGlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgICAgICAgICByZWFkb25seTogIWNhbkVkaXRPYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFmaWVsZC5FbmFibGVkIHx8ICFjYW5FZGl0T2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZC5WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogZmllbGQuRm9ybWF0dGVkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcm93OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvd1NwYW46IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbFNwYW46IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgeEFsaWdubWVudDogY29udHJvbEZpZWxkLkxheW91dC5YQWxpZ25tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHlBbGlnbm1lbnQ6IGNvbnRyb2xGaWVsZC5MYXlvdXQuWUFsaWdubWVudCxcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuQXBpTmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2NpdHknKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpVGV4dGJveEZpZWxkKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkLkFwaU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLkFwaU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiAhY2FuRWRpdE9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWZpZWxkLkVuYWJsZWQgfHwgIWNhbkVkaXRPYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkLlZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlOiBmaWVsZC5Gb3JtYXR0ZWRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICByb3c6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcm93U3BhbjogMSxcclxuICAgICAgICAgICAgICAgICAgICBjb2w6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sU3BhbjogMSxcclxuICAgICAgICAgICAgICAgICAgICB4QWxpZ25tZW50OiBjb250cm9sRmllbGQuTGF5b3V0LlhBbGlnbm1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgeUFsaWdubWVudDogY29udHJvbEZpZWxkLkxheW91dC5ZQWxpZ25tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5BcGlOYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc3RhdGUnKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpU2VsZWN0RmllbGQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogZmllbGQuQXBpTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQuQXBpTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBmaWVsZC5PcHRpb25hbFZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICByZWFkb25seTogIWNhbkVkaXRPYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFmaWVsZC5FbmFibGVkIHx8ICFjYW5FZGl0T2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZC5WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogZmllbGQuRm9ybWF0dGVkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcm93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvd1NwYW46IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbFNwYW46IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgeEFsaWdubWVudDogY29udHJvbEZpZWxkLkxheW91dC5YQWxpZ25tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHlBbGlnbm1lbnQ6IGNvbnRyb2xGaWVsZC5MYXlvdXQuWUFsaWdubWVudCxcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogMlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuQXBpTmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3ppcGNvZGUnKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpVGV4dGJveEZpZWxkKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkLkFwaU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLkFwaU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiAhY2FuRWRpdE9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWZpZWxkLkVuYWJsZWQgfHwgIWNhbkVkaXRPYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkLlZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlOiBmaWVsZC5Gb3JtYXR0ZWRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICByb3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcm93U3BhbjogMSxcclxuICAgICAgICAgICAgICAgICAgICBjb2w6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sU3BhbjogMSxcclxuICAgICAgICAgICAgICAgICAgICB4QWxpZ25tZW50OiBjb250cm9sRmllbGQuTGF5b3V0LlhBbGlnbm1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgeUFsaWdubWVudDogY29udHJvbEZpZWxkLkxheW91dC5ZQWxpZ25tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiAzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5BcGlOYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY291bnRyeScpID49IDApIHtcclxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkID0gbmV3IFBlcHBlcmlTZWxlY3RGaWVsZCh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZC5BcGlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5BcGlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZpZWxkLk9wdGlvbmFsVmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiAhY2FuRWRpdE9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWZpZWxkLkVuYWJsZWQgfHwgIWNhbkVkaXRPYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkLlZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlOiBmaWVsZC5Gb3JtYXR0ZWRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICByb3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgcm93U3BhbjogMSxcclxuICAgICAgICAgICAgICAgICAgICBjb2w6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sU3BhbjogMSxcclxuICAgICAgICAgICAgICAgICAgICB4QWxpZ25tZW50OiBjb250cm9sRmllbGQuTGF5b3V0LlhBbGlnbm1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgeUFsaWdubWVudDogY29udHJvbEZpZWxkLkxheW91dC5ZQWxpZ25tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiA0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmllbGRzLnB1c2goY3VzdG9tRmllbGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmllbGRzLnNvcnQoKG4xLCBuMikgPT4gKG4xLm9yZGVyID4gbjIub3JkZXIgPyAxIDogbjEub3JkZXIgPCBuMi5vcmRlciA/IC0xIDogMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc01hdHJpeEZpZWxkKGFwaU5hbWVUb0NoZWNrOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gYXBpTmFtZVRvQ2hlY2suaW5kZXhPZignTWF0cml4JykgPj0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRvZXNGaWVsZEhhdmFGbG9hdGluZ0ZpZWxkKGNvbnRyb2xGaWVsZDogYW55LCBmbG9hdGluZ0ZpZWxkOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgaGFzRmxvYXRpbmdGaWVsZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZmxvYXRpbmdGaWVsZC5MYXlvdXQuWSA+PSBjb250cm9sRmllbGQuTGF5b3V0LlkgJiZcclxuICAgICAgICAgICAgZmxvYXRpbmdGaWVsZC5MYXlvdXQuWSA8IGNvbnRyb2xGaWVsZC5MYXlvdXQuWSArIGNvbnRyb2xGaWVsZC5MYXlvdXQuSGVpZ2h0ICYmXHJcbiAgICAgICAgICAgIGZsb2F0aW5nRmllbGQuTGF5b3V0LlggPj0gY29udHJvbEZpZWxkLkxheW91dC5YICYmXHJcbiAgICAgICAgICAgIGZsb2F0aW5nRmllbGQuTGF5b3V0LlggPCBjb250cm9sRmllbGQuTGF5b3V0LlggKyBjb250cm9sRmllbGQuTGF5b3V0LldpZHRoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGhhc0Zsb2F0aW5nRmllbGQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhc0Zsb2F0aW5nRmllbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRPcHRpb25zRm9yQ3VzdG9tRmllbGQoY29udHJvbEZpZWxkOiBhbnksIGRhdGFGaWVsZDogYW55LCBjYW5FZGl0T2JqZWN0OiBib29sZWFuKTogYW55IHtcclxuICAgICAgICBpZiAoIWNvbnRyb2xGaWVsZCB8fCAhZGF0YUZpZWxkKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGNvbnRyb2xGaWVsZC5SZWFkT25seSB8fCAhY2FuRWRpdE9iamVjdCA/ICcnIDogY29udHJvbEZpZWxkLlRpdGxlO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBrZXk6IGNvbnRyb2xGaWVsZC5BcGlOYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDogY29udHJvbEZpZWxkLlRpdGxlLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yeTogZGF0YUZpZWxkLkFjY2Vzc29yeSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIHJlYWRvbmx5OiBjb250cm9sRmllbGQuUmVhZE9ubHkgfHwgIWNhbkVkaXRPYmplY3QsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiAhZGF0YUZpZWxkLkVuYWJsZWQgfHwgIWNhbkVkaXRPYmplY3QsXHJcbiAgICAgICAgICAgIGhpZGRlbjogY29udHJvbEZpZWxkLkhpZGRlbixcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGNvbnRyb2xGaWVsZC5NYW5kYXRvcnksXHJcbiAgICAgICAgICAgIHZhbHVlOiBkYXRhRmllbGQuVmFsdWUsXHJcbiAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlOiBkYXRhRmllbGQuRm9ybWF0dGVkVmFsdWUsXHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxWYWx1ZTogZGF0YUZpZWxkLkFkZGl0aW9uYWxWYWx1ZSxcclxuICAgICAgICAgICAgcm93OiBjb250cm9sRmllbGQuTGF5b3V0LlksXHJcbiAgICAgICAgICAgIHJvd1NwYW46IGNvbnRyb2xGaWVsZC5MYXlvdXQuSGVpZ2h0LFxyXG4gICAgICAgICAgICBjb2w6IGNvbnRyb2xGaWVsZC5MYXlvdXQuWCxcclxuICAgICAgICAgICAgY29sU3BhbjogY29udHJvbEZpZWxkLkxheW91dC5XaWR0aCxcclxuICAgICAgICAgICAgeEFsaWdubWVudDogY29udHJvbEZpZWxkLkxheW91dC5YQWxpZ25tZW50LFxyXG4gICAgICAgICAgICB5QWxpZ25tZW50OiBjb250cm9sRmllbGQuTGF5b3V0LllBbGlnbm1lbnQsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IGRhdGFGaWVsZC5PcHRpb25hbFZhbHVlcyxcclxuICAgICAgICAgICAgZ3JvdXBGaWVsZHM6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgbWF4RmllbGRDaGFyYWN0ZXJzOiBjb250cm9sRmllbGQuTWF4RmllbGRDaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICBtaW5WYWx1ZTogY29udHJvbEZpZWxkLk1pblZhbHVlLFxyXG4gICAgICAgICAgICBtYXhWYWx1ZTogY29udHJvbEZpZWxkLk1heFZhbHVlLFxyXG4gICAgICAgICAgICAvLyBoYXNNZW51OiBoYXNNZW51LFxyXG4gICAgICAgICAgICAvLyBoYXNDYW1wYWlnbjogaGFzQ2FtcGFpZ24sXHJcbiAgICAgICAgICAgIC8vIGhhc0luZGljYXRvcnM6IGhhc0luZGljYXRvcnMsXHJcbiAgICAgICAgICAgIHRleHRDb2xvcjogZGF0YUZpZWxkLlRleHRDb2xvcixcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uSW5mbzogZGF0YUZpZWxkLk5vdGlmaWNhdGlvbkluZm9cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydFRvQ3VzdG9tRmllbGQoY29udHJvbEZpZWxkOiBhbnksIGRhdGFGaWVsZDogYW55LCBjYW5FZGl0T2JqZWN0OiBib29sZWFuLFxyXG4gICAgICAgIG1lbnVGaWVsZDogYW55LCBoYXNDYW1wYWlnbkZpZWxkOiBhbnksIGluZGljYXRvcnNGaWVsZDogYW55LFxyXG4gICAgICAgIG9iamVjdElkOiBhbnksIHBhcmVudElkOiBhbnksIHNlYXJjaENvZGU6IGFueSk6IFBlcHBlcmlGaWVsZEJhc2Uge1xyXG4gICAgICAgIGxldCBjdXN0b21GaWVsZDogUGVwcGVyaUZpZWxkQmFzZTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gUGVwcGVyaUZvcm1Db21wb25lbnQuZ2V0T3B0aW9uc0ZvckN1c3RvbUZpZWxkKGNvbnRyb2xGaWVsZCwgZGF0YUZpZWxkLCBjYW5FZGl0T2JqZWN0KTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRyb2xGaWVsZC5BcGlOYW1lID09PSAnT2JqZWN0TWVudScpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ21lbnUnO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFGaWVsZC5UcmFuc2FjdGlvbkl0ZW1UeXBlID09PSAxICYmIGRhdGFGaWVsZC5PcHRpb25hbFZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJNZW51T3B0aW9ucyA9IFt7IEtleTogJ0VkaXRQYWNrYWdlJywgVmFsdWU6ICdFZGl0JyB9LCB7IEtleTogJ0RlbGV0ZVBhY2thZ2UnLCBWYWx1ZTogJ0RlbGV0ZScgfV07XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLm9wdGlvbnMgPSBzdWJNZW51T3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbiAmJiBkYXRhRmllbGQuT3B0aW9uYWxWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLktleSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5vcHRpb25zID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaU1lbnVGaWVsZChvcHRpb25zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRyb2xGaWVsZC5BcGlOYW1lID09PSAnUXVhbnRpdHlTZWxlY3RvcicgfHxcclxuICAgICAgICAgICAgY29udHJvbEZpZWxkLkFwaU5hbWUgPT09ICdVbml0c1F1YW50aXR5JyB8fFxyXG4gICAgICAgICAgICBjb250cm9sRmllbGQuQXBpTmFtZS5pbmRleE9mKCdzaXplXycpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhRmllbGQuRmllbGRUeXBlID09PSBGSUVMRF9UWVBFLkludGVybmFsTGluaykge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YUZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5QYWNrYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnR5cGUgPSAncGFja2FnZUJ1dHRvbic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YUZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5OdW1iZXJSZWFsUXVhbnRpdHlTZWxlY3RvciB8fFxyXG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5OdW1iZXJSZWFsKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnR5cGUgPSAncXMnO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hbG93RGVjaW1hbCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YUZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5OdW1iZXJJbnRlZ2VyUXVhbnRpdHlTZWxlY3RvciB8fFxyXG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5OdW1iZXJJbnRlZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnR5cGUgPSAncXMnO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hbG93RGVjaW1hbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFGaWVsZC5GaWVsZFR5cGUgPT09IEZJRUxEX1RZUEUuTnVtYmVySW50ZWdlckZvck1hdHJpeCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ3FzRm9yTWF0cml4JztcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuYWxvd0RlY2ltYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhRmllbGQuRmllbGRUeXBlID09PSBGSUVMRF9UWVBFLk51bWJlclJlYWxGb3JNYXRyaXgpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9ICdxc0Zvck1hdHJpeCc7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmFsb3dEZWNpbWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaVF1YW50aXR5U2VsZWN0b3JGaWVsZChvcHRpb25zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBIYWNrIG5lZWQgdG8gcmVtb3ZlIHRoaXMuLlxyXG4gICAgICAgICAgICBpZiAoZGF0YUZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5JbmRpY2F0b3JzICYmIFBlcHBlcmlGb3JtQ29tcG9uZW50LmlzTWF0cml4RmllbGQoZGF0YUZpZWxkLkFwaU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhRmllbGQuRmllbGRUeXBlID0gRklFTERfVFlQRS5JbnRlcm5hbFBhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZGF0YUZpZWxkLkZpZWxkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLkFkZHJlc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW5FZGl0R3JvdXBPYmplY3QgPSBjb250cm9sRmllbGQuUmVhZE9ubHkgPyBmYWxzZSA6IGNhbkVkaXRPYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5ncm91cEZpZWxkcyA9IFBlcHBlcmlGb3JtQ29tcG9uZW50LmNvbnZlcnRBZGRyZXNzRmllbGRzKGNvbnRyb2xGaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkLkdyb3VwRmllbGRzLCBjYW5FZGl0R3JvdXBPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkID0gbmV3IFBlcHBlcmlBZGRyZXNzRmllbGQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuSW5kaWNhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbnNbJ3R5cGUnXSA9ICdpbmRpY2F0b3JzJzsgLy8gTm90IG5lZWRlZCB0aGlzIGlzIFBlcHBlcmlJbmRpY2F0b3JzRmllbGQuXHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaUluZGljYXRvcnNGaWVsZChvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgRklFTERfVFlQRS5JbnRlcm5hbFBhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUGVwcGVyaUZvcm1Db21wb25lbnQuaXNNYXRyaXhGaWVsZChjb250cm9sRmllbGQuQXBpTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5yb3dTcGFuID0gY29udHJvbEZpZWxkLkxheW91dC5IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub2JqZWN0SWQgPSBvYmplY3RJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wYXJlbnRJZCA9IHBhcmVudElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNlYXJjaENvZGUgPSBzZWFyY2hDb2RlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaUludGVybmFsUGFnZUZpZWxkKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBzdXBwb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuTGluazoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9ICdsaW5rJztcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpVGV4dGJveEZpZWxkKG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBESS0xMTI5MiAtIGFkZCBjaGFuZ2VzIGZvciBsaW5rIGZpZWxkIGZvciB0aGUgXCJSZWFkIE9ubHkgZGlzcGxheSB2YWx1ZVwiIHByb3BcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZC5mb3JtYXR0ZWRWYWx1ZSA9IGN1c3RvbUZpZWxkLmRpc2FibGVkICYmIGN1c3RvbUZpZWxkLmZvcm1hdHRlZFZhbHVlICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZC52YWx1ZSAhPT0gJycgPyBjdXN0b21GaWVsZC5mb3JtYXR0ZWRWYWx1ZSA6IGN1c3RvbUZpZWxkLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgRklFTERfVFlQRS5JbnRlcm5hbExpbms6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuQnV0dG9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaUJ1dHRvbkZpZWxkKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLkF0dGFjaG1lbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnR5cGUgPSAnYXR0YWNobWVudCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaUF0dGFjaG1lbnRGaWVsZChvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgRklFTERfVFlQRS5TaWduYXR1cmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnR5cGUgPSAnc2lnbmF0dXJlJztcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpU2lnbmF0dXJlRmllbGQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuSW1hZ2VVUkw6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnR5cGUgPSAnaW1hZ2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMubWVudUZpZWxkID0gbWVudUZpZWxkICYmIHRoaXMuZG9lc0ZpZWxkSGF2YUZsb2F0aW5nRmllbGQoY29udHJvbEZpZWxkLCBtZW51RmllbGQpID8gbWVudUZpZWxkIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmhhc0NhbXBhaWduRmllbGQgPSBoYXNDYW1wYWlnbkZpZWxkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9lc0ZpZWxkSGF2YUZsb2F0aW5nRmllbGQoY29udHJvbEZpZWxkLCBoYXNDYW1wYWlnbkZpZWxkKSA/IGhhc0NhbXBhaWduRmllbGQgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaW5kaWNhdG9yc0ZpZWxkID0gaW5kaWNhdG9yc0ZpZWxkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9lc0ZpZWxkSGF2YUZsb2F0aW5nRmllbGQoY29udHJvbEZpZWxkLCBpbmRpY2F0b3JzRmllbGQpID8gaW5kaWNhdG9yc0ZpZWxkIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaUltYWdlRmllbGQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuSW1hZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ2ltYWdlcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaUltYWdlc0ZpZWxkKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLkVtYWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ2VtYWlsJztcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpVGV4dGJveEZpZWxkKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLlBob25lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ3Bob25lJztcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpVGV4dGJveEZpZWxkKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLkR1cmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ2R1cmF0aW9uJztcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpVGV4dGJveEZpZWxkKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLkRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuVGV4dEJveDpcclxuICAgICAgICAgICAgICAgIGNhc2UgRklFTERfVFlQRS5MaW1pdGVkTGVuZ3RoVGV4dEJveDpcclxuICAgICAgICAgICAgICAgIGNhc2UgRklFTERfVFlQRS5UZXh0SGVhZGVyOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLkNhbGN1bGF0ZWRTdHJpbmc6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuTWFwRGF0YVN0cmluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkID0gbmV3IFBlcHBlcmlUZXh0Ym94RmllbGQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuVGV4dEFyZWE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpVGV4dGFyZWFGaWVsZChvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuUmljaFRleHRIVE1MOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaVJpY2hIdG1sVGV4dGFyZWFGaWVsZChvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgRklFTERfVFlQRS5EYXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLkxpbWl0ZWREYXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLkNhbGN1bGF0ZWREYXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLkRhdGVBbmRUaW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gZGF0YUZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5EYXRlQW5kVGltZSA/ICdkYXRldGltZScgOiAnZGF0ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaURhdGVGaWVsZChvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgRklFTERfVFlQRS5OdW1iZXJJbnRlZ2VyOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLkNhbGN1bGF0ZWRJbnQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuTWFwRGF0YUludDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9ICdpbnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkID0gbmV3IFBlcHBlcmlUZXh0Ym94RmllbGQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuUGVyY2VudGFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9ICdwZXJjZW50YWdlJztcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpVGV4dGJveEZpZWxkKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLkN1cnJlbmN5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ2N1cnJlbmN5JztcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpVGV4dGJveEZpZWxkKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLk51bWJlclJlYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuQ2FsY3VsYXRlZFJlYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuTWFwRGF0YVJlYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuU3VtOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLlRvdGFsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9ICdyZWFsJztcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpVGV4dGJveEZpZWxkKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLkJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuQ2FsY3VsYXRlZEJvb2w6IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpQ2hlY2tib3hGaWVsZChvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgRklFTERfVFlQRS5Cb29sZWFuVGV4dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9ICdib29sZWFuVGV4dCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaUNoZWNrYm94RmllbGQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuQ29tYm9Cb3g6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuRW1wdHlDb21ib0JveDpcclxuICAgICAgICAgICAgICAgIGNhc2UgRklFTERfVFlQRS5NYXBEYXRhRHJvcERvd246IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25zLnR5cGUgPSAnc2VsZWN0JztcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpU2VsZWN0RmllbGQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuTXVsdGlUaWNrQm94OlxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLk11bHRpVGlja0JveFRvQ29tYm9Cb3g6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuRW1wdHlNdWx0aVRpY2tCb3g6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnR5cGUgPSAnbXVsdGknO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkID0gbmV3IFBlcHBlcmlTZWxlY3RGaWVsZChvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgRklFTERfVFlQRS5HdWlkUmVmZXJlbmNlVHlwZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9ICdyZWZlcmVuY2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucmVmZXJlbmNlT2JqZWN0VHlwZSA9IGRhdGFGaWVsZC5SZWZlcmVuY2VPYmplY3RUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucmVmZXJlbmNlT2JqZWN0U3ViVHlwZSA9IGRhdGFGaWVsZC5SZWZlcmVuY2VPYmplY3RTdWJUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucmVmZXJlbmNlT2JqZWN0SW50ZXJuYWxUeXBlID0gZGF0YUZpZWxkLlJlZmVyZW5jZU9iamVjdEludGVybmFsVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpQnV0dG9uRmllbGQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuTGlzdE9mT2JqZWN0czoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9ICdsaXN0b2ZvYmplY3RzJztcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpQnV0dG9uRmllbGQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuU2VwYXJhdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaVNlcGFyYXRvckZpZWxkKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEZJRUxEX1RZUEUuSW1hZ2VzOiByZXR1cm4gdGhhdC5maWVsZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLk51bWJlclJlYWxRdWFudGl0eVNlbGVjdG9yOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBGSUVMRF9UWVBFLk51bWJlckludGVnZXJRdWFudGl0eVNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ3FzJztcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmFsb3dEZWNpbWFsID0gZGF0YUZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5OdW1iZXJSZWFsUXVhbnRpdHlTZWxlY3RvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGQgPSBuZXcgUGVwcGVyaVF1YW50aXR5U2VsZWN0b3JGaWVsZChvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgRklFTERfVFlQRS5QYWNrYWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ3BhY2thZ2VCdXR0b24nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZCA9IG5ldyBQZXBwZXJpUXVhbnRpdHlTZWxlY3RvckZpZWxkKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWN1c3RvbUZpZWxkKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubGFiZWwgPSBjb250cm9sRmllbGQuQXBpTmFtZSArICcgaXMgbm90IHN1cHBvcnRlZCEhISc7XHJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkID0gbmV3IFBlcHBlcmlTZXBhcmF0b3JGaWVsZChvcHRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjdXN0b21GaWVsZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEZpZWxkRm9ybWF0dGVkVmFsdWUoZmllbGQ6IFBlcHBlcmlGaWVsZEJhc2UpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBmaWVsZEZvcm1hdHRlZFZhbHVlID0gZmllbGQuZm9ybWF0dGVkVmFsdWU7XHJcblxyXG4gICAgICAgIC8vIEZpeCBmb3IgdGhlIGN1c3RvbSBjaGVjayBib3ggY29tcG9uZW50LlxyXG4gICAgICAgIGlmIChmaWVsZC5jb250cm9sVHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgICAgICBmaWVsZEZvcm1hdHRlZFZhbHVlID0gZmllbGRGb3JtYXR0ZWRWYWx1ZSA9PT0gJ3RydWUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRml4IGZvciB0aGUgY3VzdG9tIGJ1dHRvbiBjb21wb25lbnQuXHJcbiAgICAgICAgaWYgKGZpZWxkLmNvbnRyb2xUeXBlID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgICAgICBmaWVsZEZvcm1hdHRlZFZhbHVlID0gZmllbGRGb3JtYXR0ZWRWYWx1ZSA9PT0gJzAnID8gJycgOiBmaWVsZEZvcm1hdHRlZFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZpZWxkRm9ybWF0dGVkVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdG9Db250cm9sR3JvdXAoZmllbGRzOiBQZXBwZXJpRmllbGRCYXNlW10sIGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBjdXN0b21pemF0aW9uU2VydmljZTogQ3VzdG9taXphdGlvblNlcnZpY2UpOiBGb3JtR3JvdXAge1xyXG4gICAgICAgIGNvbnN0IGdyb3VwID0ge307XHJcbiAgICAgICAgaWYgKGZpZWxkcyAmJiBmaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQuZ3JvdXBGaWVsZHMgJiYgZmllbGQuZ3JvdXBGaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ykdyb3VwID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmdyb3VwRmllbGRzLmZvckVhY2goZ3JvdXBGaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cEZpZWxkLnJlcXVpcmVkICYmICghZmllbGQucmVhZG9ubHkgJiYgIWZpZWxkLmRpc2FibGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViR3JvdXBbZ3JvdXBGaWVsZC5rZXldID0gW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ3JvdXBGaWVsZC5mb3JtYXR0ZWRWYWx1ZSB8fCAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmllbGQucmVhZG9ubHkgfHwgZmllbGQuZGlzYWJsZWQgfHwgZ3JvdXBGaWVsZC5kaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ykdyb3VwW2dyb3VwRmllbGQua2V5XSA9IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdyb3VwRmllbGQuZm9ybWF0dGVkVmFsdWUgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZpZWxkLnJlYWRvbmx5IHx8IGZpZWxkLmRpc2FibGVkIHx8IGdyb3VwRmllbGQuZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBncm91cFtmaWVsZC5rZXldID0gZmIuZ3JvdXAoc3ViR3JvdXApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gY3VzdG9taXphdGlvblNlcnZpY2UuZ2V0VmFsaWRhdG9yc0ZvckZpZWxkKGZpZWxkLnJlcXVpcmVkLCBmaWVsZC5yZWFkb25seSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlzYWJsZWQsIGZpZWxkLm1heEZpZWxkQ2hhcmFjdGVycywgZmllbGQudHlwZSwgZmllbGQuY29udHJvbFR5cGUgPT09ICdjaGVja2JveCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRm9ybWF0dGVkVmFsdWUgPSBQZXBwZXJpRm9ybUNvbXBvbmVudC5nZXRGaWVsZEZvcm1hdHRlZFZhbHVlKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICBncm91cFtmaWVsZC5rZXldID0gW3sgdmFsdWU6IGZpZWxkRm9ybWF0dGVkVmFsdWUgfHwgJycsIGRpc2FibGVkOiBmaWVsZC5kaXNhYmxlZCB9LCB2YWxpZGF0b3JzXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmIuZ3JvdXAoZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGN1c3RvbWl6YXRpb25TZXJ2aWNlOiBDdXN0b21pemF0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVyc1xyXG4gICAgKSB7XHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIGluaXRpYWwgdmFsdWUgdG8gY29tcGFyZSB3aXRoXHJcbiAgICAgICAgdGhpcy5kaWZmZXIgPSBkaWZmZXJzLmZpbmQoe30pLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93Rm9ybVZhbGlkYXRpb25NZXNzYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkczogUGVwcGVyaUZpZWxkQmFzZVtdID0gdGhpcy5maWVsZHM7XHJcbiAgICAgICAgbGV0IGVtcHR5TWFuZGF0b3J5RmllbGRzTXNnID0gJyc7XHJcbiAgICAgICAgbGV0IG5vdFZhbGlkRmllbGRzTXNnID0gJyc7XHJcblxyXG4gICAgICAgIC8vIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IGZpZWxkID0gZmllbGRzW2ldO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Db250cm9sID0gdGhpcy5mb3JtICYmIHRoaXMuZm9ybS5nZXQoZmllbGQua2V5KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTWFuZGF0b3J5IGlzIGVtcHR5LlxyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlcXVpcmVkICYmIGZvcm1Db250cm9sLnZhbHVlLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcHR5TWFuZGF0b3J5RmllbGRzTXNnICs9ICc8bGk+PHNtYWxsPicgKyBmaWVsZC5sYWJlbCArICc8L3NtYWxsPjwvbGk+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWZpZWxkLmRpc2FibGVkICYmICFmb3JtQ29udHJvbC52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdFZhbGlkRmllbGRzTXNnICs9ICc8bGk+PHNtYWxsPicgKyBmaWVsZC5sYWJlbCArICc8L3NtYWxsPjwvbGk+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIHRoZSBoZWFkZXIgbWVzc2FnZSBvZiB0aGUgZW1wdHkgbWFuZGF0b3J5IGZpZWxkc1xyXG4gICAgICAgIGlmIChlbXB0eU1hbmRhdG9yeUZpZWxkc01zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGVtcHR5TWFuZGF0b3J5RmllbGRzTXNnID0gJzxkaXY+JyArIHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ01FU1NBR0VTLkVSUk9SX01BTkRBVE9SWV9GSUVMRFMnKSArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+PHVsIHN0eWxlPVxcJ3BhZGRpbmc6IDAgMjBweDtcXCc+JyArIGVtcHR5TWFuZGF0b3J5RmllbGRzTXNnICsgJzwvdWw+PGJyLz4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIHRoZSBoZWFkZXIgbWVzc2FnZSBvZiB0aGUgZW1wdHkgbWFuZGF0b3J5IGZpZWxkc1xyXG4gICAgICAgIGlmIChub3RWYWxpZEZpZWxkc01zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG5vdFZhbGlkRmllbGRzTXNnID0gJzxkaXY+JyArIHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ01FU1NBR0VTLkVSUk9SX0lOVkFMSURfRklFTERTJykgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2Pjx1bCBzdHlsZT1cXCdwYWRkaW5nOiAwIDIwcHg7XFwnPicgKyBub3RWYWxpZEZpZWxkc01zZyArICc8L3VsPic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ01FU1NBR0VTLlRJVExFX05PVElDRScpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRGlhbG9nRGF0YSh7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBjb250ZW50OiBlbXB0eU1hbmRhdG9yeUZpZWxkc01zZyArIG5vdFZhbGlkRmllbGRzTXNnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogRGlhbG9nRGF0YVR5cGUuSHRtbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuRGVmYXVsdERpYWxvZyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0aGVtZVZhcnMgPSB0aGlzLmN1c3RvbWl6YXRpb25TZXJ2aWNlLmdldFRoZW1lVmFyaWFibGVzKCk7XHJcbiAgICAgICAgLy8gY29udmVydCByZW0gdG8gcGl4ZWxcclxuICAgICAgICBjb25zdCBSZW1Ub1BpeGVsID0gMTY7XHJcbiAgICAgICAgdGhpcy5mb3JtR3V0dGVyU2l6ZSA9IHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UuZ2V0TnVtYmVyVGhlbWVWYXJpYWJsZSh0aGVtZVZhcnMsXHJcbiAgICAgICAgICAgIEN1c3RvbWl6YXRpb25TZXJ2aWNlLkZPUk1fU1BBQ0VJTkdfS0VZKSAqIFJlbVRvUGl4ZWw7XHJcbiAgICAgICAgdGhpcy5jYXJkR3V0dGVyU2l6ZSA9IHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UuZ2V0TnVtYmVyVGhlbWVWYXJpYWJsZSh0aGVtZVZhcnMsXHJcbiAgICAgICAgICAgIEN1c3RvbWl6YXRpb25TZXJ2aWNlLkNBUkRfU1BBQ0VJTkdfS0VZKSAqIFJlbVRvUGl4ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmRpZmZlci5kaWZmKHRoaXMucGVwcGVyaU9iamVjdElucHV0KTsgLy8gY2hlY2sgZm9yIGNoYW5nZXNcclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGb3JtKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMucGVwcGVyaU9iamVjdElucHV0ICYmIGNoYW5nZXMucGVwcGVyaU9iamVjdElucHV0LmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAvLyBMb2FkIGNoYW5nZXNcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3VsZFJlbG9hZEZvcm0gJiYgY2hhbmdlcy5wZXBwZXJpT2JqZWN0SW5wdXQucHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXBwZXJpT2JqZWN0SW5wdXQgPSBjaGFuZ2VzLnBlcHBlcmlPYmplY3RJbnB1dC5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZvcm0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdWxkUmVsb2FkRm9ybSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0Rm9ybShjaGFuZ2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0ZvckNoYW5nZXMgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlZCkgeyB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlZC51bnN1YnNjcmliZSgpOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvcm1WYWxpZGF0aW9uQ2hhbmdlZCkgeyB0aGlzLmZvcm1WYWxpZGF0aW9uQ2hhbmdlZC51bnN1YnNjcmliZSgpOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkQ2xpY2tlZCkgeyB0aGlzLmNoaWxkQ2xpY2tlZC51bnN1YnNjcmliZSgpOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkQ2hhbmdlZCkgeyB0aGlzLmNoaWxkQ2hhbmdlZC51bnN1YnNjcmliZSgpOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vdGlmeUZpZWxkQ2xpY2tlZCkgeyB0aGlzLm5vdGlmeUZpZWxkQ2xpY2tlZC51bnN1YnNjcmliZSgpOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vdGlmeU1lbnVJdGVtQ2xpY2tlZCkgeyB0aGlzLm5vdGlmeU1lbnVJdGVtQ2xpY2tlZC51bnN1YnNjcmliZSgpOyB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VWlDb250cm9sRmllbGRzKCk6IEFycmF5PFVJQ29udHJvbEZpZWxkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudWlDb250cm9sSGVhZGVyID9cclxuICAgICAgICAgICAgdGhpcy51aUNvbnRyb2xIZWFkZXIuQ29udHJvbEZpZWxkcyA6XHJcbiAgICAgICAgICAgIHRoaXMucGVwcGVyaU9iamVjdElucHV0LlVJQ29udHJvbC5Db250cm9sRmllbGRzO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRGaWVsZHNTdHJ1Y3R1cmUoZmllbGRzOiBQZXBwZXJpRmllbGRCYXNlW10sIG1heFJvdzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGhlbWVWYXJzID0gdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS5nZXRUaGVtZVZhcmlhYmxlcygpO1xyXG5cclxuICAgICAgICAvLyBTZXQgZm9ybSByb3cgaGVpZ2h0LlxyXG4gICAgICAgIGlmICh0aGlzLmxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlDYXJkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRGaWVsZEhlaWdodCA9IHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UuZ2V0TnVtYmVyVGhlbWVWYXJpYWJsZSh0aGVtZVZhcnMsXHJcbiAgICAgICAgICAgICAgICBDdXN0b21pemF0aW9uU2VydmljZS5DQVJEX0ZJRUxEX0hFSUdIVF9LRVkpO1xyXG4gICAgICAgICAgICB0aGlzLnJvd0hlaWdodCA9IGNhcmRGaWVsZEhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByb3dGaWVsZEhlaWdodCA9IHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UuZ2V0TnVtYmVyVGhlbWVWYXJpYWJsZSh0aGVtZVZhcnMsXHJcbiAgICAgICAgICAgICAgICBDdXN0b21pemF0aW9uU2VydmljZS5GT1JNX0ZJRUxEX0hFSUdIVF9LRVkpO1xyXG4gICAgICAgICAgICBjb25zdCByb3dGaWVsZFRpdGxlSGVpZ2h0ID0gdGhpcy5jdXN0b21pemF0aW9uU2VydmljZS5nZXROdW1iZXJUaGVtZVZhcmlhYmxlKHRoZW1lVmFycyxcclxuICAgICAgICAgICAgICAgIEN1c3RvbWl6YXRpb25TZXJ2aWNlLkZPUk1fRklFTERfVElUTEVfSEVJR0hUX0tFWSk7XHJcbiAgICAgICAgICAgIHRoaXMucm93SGVpZ2h0ID0gcm93RmllbGRIZWlnaHQgKyByb3dGaWVsZFRpdGxlSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBmaWVsZHMgc3RydWN0dXJlICh0aGUgZmllbGRzIG11c3QgYmUgc29ydGVkISEhKS5cclxuICAgICAgICBpZiAoZmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gSW5pdCB0aGUgbGF5b3V0LlxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlUYWJsZSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXlvdXRUeXBlID09PSBMQVlPVVRfVFlQRS5FZGl0bW9kYWxcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG1heFJvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzW2ldID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGZpZWxkID0gZmllbGRzW2ldXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93c1tmaWVsZC5yb3ddLnB1c2goZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZG9lc2ZpZWxkRXhpc3RJbjogYm9vbGVhbltdW10gPSBuZXcgQXJyYXkobWF4Um93KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvZXNmaWVsZEV4aXN0SW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2VzZmllbGRFeGlzdEluW2ldID0gbmV3IEFycmF5KHRoaXMuY29sdW1ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZG9lc2ZpZWxkRXhpc3RJbltpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2VzZmllbGRFeGlzdEluW2ldW2pdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJ1biBpbiBzcXVlcmUgKHJvdyAtIGNvbHNwYW4sIGNvbCAtIHJvd3NwYW4pIGFuZCBwdXQgdHJ1ZSB3aGVyZSBpdCBzaG91bGQuXHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGN1cnJlbnRGaWVsZCA9IGZpZWxkc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGN1cnJlbnRGaWVsZCBvZiBmaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEZpZWxkLnJvd1NwYW4gPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdzogbnVtYmVyID0gY3VycmVudEZpZWxkLnJvdzsgcm93IDwgY3VycmVudEZpZWxkLnJvdyArIGN1cnJlbnRGaWVsZC5yb3dTcGFuOyByb3crKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWVsZC5jb2xTcGFuID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbDogbnVtYmVyID0gY3VycmVudEZpZWxkLmNvbDsgY29sIDwgY3VycmVudEZpZWxkLmNvbCArIGN1cnJlbnRGaWVsZC5jb2xTcGFuOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9lc2ZpZWxkRXhpc3RJbi5sZW5ndGggPiByb3cgJiYgZG9lc2ZpZWxkRXhpc3RJblswXS5sZW5ndGggPiBjb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvZXNmaWVsZEV4aXN0SW5bcm93XVtjb2xdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvZXNmaWVsZEV4aXN0SW4ubGVuZ3RoID4gcm93ICYmIGRvZXNmaWVsZEV4aXN0SW5bMF0ubGVuZ3RoID4gY3VycmVudEZpZWxkLmNvbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2VzZmllbGRFeGlzdEluW3Jvd11bY3VycmVudEZpZWxkLmNvbF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEZpZWxkLmNvbFNwYW4gPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbDogbnVtYmVyID0gY3VycmVudEZpZWxkLmNvbDsgY29sIDwgY3VycmVudEZpZWxkLmNvbCArIGN1cnJlbnRGaWVsZC5jb2xTcGFuOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvZXNmaWVsZEV4aXN0SW4ubGVuZ3RoID4gY3VycmVudEZpZWxkLnJvdyAmJiBkb2VzZmllbGRFeGlzdEluWzBdLmxlbmd0aCA+IGNvbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvZXNmaWVsZEV4aXN0SW5bY3VycmVudEZpZWxkLnJvd11bY29sXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9lc2ZpZWxkRXhpc3RJbi5sZW5ndGggPiBjdXJyZW50RmllbGQucm93ICYmIGRvZXNmaWVsZEV4aXN0SW5bMF0ubGVuZ3RoID4gY3VycmVudEZpZWxkLmNvbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9lc2ZpZWxkRXhpc3RJbltjdXJyZW50RmllbGQucm93XVtjdXJyZW50RmllbGQuY29sXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGVtcHR5IGZpZWxkcyB3aGVyZSBkb2VzZmllbGRFeGlzdEluIGlzIGZhbHNlIChGb3IgdGhlIG1kLWdyaWQtbGlzdCBVSSBDb21wb25lbnQpLlxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2VzZmllbGRFeGlzdEluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkb2VzZmllbGRFeGlzdEluW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZG9lc2ZpZWxkRXhpc3RJbltpXVtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGVtcHR5IGZpZWxkIGFuZCBhZGQgaXQgdG8gdGhlIGZpZWxkcyBsaXN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBlcHBlcmlQbGFjZWhvbGRlckZpZWxkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpICsgJ18nICsgaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3BhbjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNvcnQgdGhlIGZpZWxkcyBhZ2Fpbi5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzID0gZmllbGRzLnNvcnQoKGYxLCBmMikgPT4gKGYxLnJvdyA+IGYyLnJvdyA/XHJcbiAgICAgICAgICAgICAgICAgICAgMSA6IGYxLnJvdyA8IGYyLnJvdyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xIDogZjEuY29sID4gZjIuY29sID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgOiBmMS5jb2wgPCBmMi5jb2wgPyAtMSA6IDApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGb3JtKGlzRm9yVXBkYXRlID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBsZXQgYWxsRmllbGRzQXJlUmVhZE9ubHkgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoIWlzRm9yVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IFtdO1xyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGN1cnJlbnRGaWVsZCA9IHRoaXMuZmllbGRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGN1cnJlbnRGaWVsZCBvZiB0aGlzLmZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGFsbCBmaWVsZHMgZXhjZXB0ICdpbnRlcm5hbFBhZ2UnIHR5cGUgKGZvciBjaGlsZHJlbikuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEZpZWxkLmNvbnRyb2xUeXBlICE9PSAnaW50ZXJuYWxQYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKGN1cnJlbnRGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50RmllbGQucmVhZG9ubHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxGaWVsZHNBcmVSZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBQZXBwZXJpRm9ybUNvbXBvbmVudC50b0NvbnRyb2xHcm91cChmaWVsZHMsIHRoaXMuZmIsIHRoaXMuY3VzdG9taXphdGlvblNlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGZvcm0gdmFsdWVzIGlmIGNoYW5nZWQgYnkgY2FsY3VsYXRlZCBmaWVsZHMuXHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29uc3QgY3VycmVudEZpZWxkID0gdGhpcy5maWVsZHNbaV07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY3VycmVudEZpZWxkIG9mIHRoaXMuZmllbGRzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWVsZC5jb250cm9sVHlwZSAhPT0gJ2ludGVybmFsUGFnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEZpZWxkLmdyb3VwRmllbGRzICYmIGN1cnJlbnRGaWVsZC5ncm91cEZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudEZpZWxkLmdyb3VwRmllbGRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgY3VycmVudEdyb3VwRmllbGQgPSBjdXJyZW50RmllbGQuZ3JvdXBGaWVsZHNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY3VycmVudEdyb3VwRmllbGQgb2YgY3VycmVudEZpZWxkLmdyb3VwRmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZEZvcm1hdHRlZFZhbHVlID0gUGVwcGVyaUZvcm1Db21wb25lbnQuZ2V0RmllbGRGb3JtYXR0ZWRWYWx1ZShjdXJyZW50R3JvdXBGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWl6YXRpb25TZXJ2aWNlLnVwZGF0ZUZvcm1GaWVsZCh0aGlzLmZvcm0sIGN1cnJlbnRHcm91cEZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRm9ybWF0dGVkVmFsdWUsIGN1cnJlbnRGaWVsZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRGb3JtYXR0ZWRWYWx1ZSA9IFBlcHBlcmlGb3JtQ29tcG9uZW50LmdldEZpZWxkRm9ybWF0dGVkVmFsdWUoY3VycmVudEZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5mb3JtLmNvbnRyb2xzW2N1cnJlbnRGaWVsZC5rZXldLnNldFZhbHVlKGZpZWxkRm9ybWF0dGVkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWl6YXRpb25TZXJ2aWNlLnVwZGF0ZUZvcm1GaWVsZCh0aGlzLmZvcm0sIGN1cnJlbnRGaWVsZCwgZmllbGRGb3JtYXR0ZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghY3VycmVudEZpZWxkLnJlYWRvbmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsRmllbGRzQXJlUmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlzRm9ybVZhbGlkID0gdGhpcy5mb3JtLnZhbGlkO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgdmFsaWRhdGlvbiB0byB0cnVlIGlmIGFsbCBmaWVsZHMgYXJlIHJlYWQgb25seS4gKEJ5IEFtaXIuTCByZXF1ZXN0KS5cclxuICAgICAgICBpZiAoIWlzRm9ybVZhbGlkICYmIGFsbEZpZWxkc0FyZVJlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub25Gb3JtVmFsaWRhdGlvbkNoYW5nZWQoaXNGb3JtVmFsaWQpO1xyXG5cclxuICAgICAgICAvLyBTZXQgaXQgdG8gZmFsc2UgdG8gZW5hYmxlIGFsbCBmaWVsZHMuXHJcbiAgICAgICAgdGhpcy5pc0xvY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRGb3JtKGNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wZXBwZXJpT2JqZWN0SW5wdXQuRGF0YSAmJiB0aGlzLnBlcHBlcmlPYmplY3RJbnB1dC5EYXRhLkZpZWxkcykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZHM6IFBlcHBlcmlGaWVsZEJhc2VbXSA9IHRoaXMuY29udmVydEN1c3RvbUZpZWxkcyhcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VWlDb250cm9sRmllbGRzKCksIHRoaXMucGVwcGVyaU9iamVjdElucHV0LkRhdGEuRmllbGRzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1heFJvdyA9IE1hdGgubWF4LmFwcGx5KFxyXG4gICAgICAgICAgICAgICAgTWF0aCxcclxuICAgICAgICAgICAgICAgIGZpZWxkcy5tYXAoKGYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZi5yb3cgKyBmLnJvd1NwYW47XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMgPSBNYXRoLm1heC5hcHBseShcclxuICAgICAgICAgICAgICAgIE1hdGgsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHMubWFwKChmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGYuY29sICsgZi5jb2xTcGFuO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEZpZWxkc1N0cnVjdHVyZShmaWVsZHMsIG1heFJvdyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVGb3JtKGNsZWFuTGFzdEZvY3VzZWRGaWVsZDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucGVwcGVyaU9iamVjdElucHV0LkRhdGEgJiYgdGhpcy5wZXBwZXJpT2JqZWN0SW5wdXQuRGF0YS5GaWVsZHMpIHtcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBlcHBlcmlPYmplY3RJbnB1dC5EYXRhLkZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBsZXQgY3VycmVudEZpZWxkID0gdGhpcy5wZXBwZXJpT2JqZWN0SW5wdXQuRGF0YS5GaWVsZHNbaV07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY3VycmVudEZpZWxkIG9mIHRoaXMucGVwcGVyaU9iamVjdElucHV0LkRhdGEuRmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21GaWVsZCA9IHRoaXMuZmllbGRzLmZpbHRlcihmID0+IGYua2V5ID09PSBjdXJyZW50RmllbGQuQXBpTmFtZSlbMF07XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgYWxsIGZpZWxkcyBleGNlcHQgJ2ludGVybmFsUGFnZScgdHlwZSAoZm9yIGNoaWxkcmVuKS5cclxuICAgICAgICAgICAgICAgIGlmIChjdXN0b21GaWVsZCAmJiBjdXN0b21GaWVsZC5jb250cm9sVHlwZSAhPT0gJ2ludGVybmFsUGFnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNGb2N1cyA9IHRoaXMubGFzdEZvY3VzZWRGaWVsZCAmJiB0aGlzLmxhc3RGb2N1c2VkRmllbGQuaWQgPT09IGN1c3RvbUZpZWxkLmtleTtcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZC51cGRhdGVGaWVsZChjdXJyZW50RmllbGQsIHRoaXMuY2FuRWRpdE9iamVjdCwgaGFzRm9jdXMgPyB0aGlzLmxhc3RGb2N1c2VkRmllbGQgOiBudWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBncm91cCBmaWVsZHMuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbUZpZWxkLmNvbnRyb2xUeXBlID09PSAnYWRkcmVzcycgJiYgY3VycmVudEZpZWxkLkdyb3VwRmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudEZpZWxkLkdyb3VwRmllbGRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBjdXJyZW50R3JvdXBGaWVsZCA9IGN1cnJlbnRGaWVsZC5Hcm91cEZpZWxkc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjdXJyZW50R3JvdXBGaWVsZCBvZiBjdXJyZW50RmllbGQuR3JvdXBGaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cEZpZWxkLkVuYWJsZWQgPSAhY3VycmVudEZpZWxkLkVuYWJsZWQgPyBmYWxzZSA6IGN1cnJlbnRHcm91cEZpZWxkLkVuYWJsZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tR3JvdXBGaWVsZCA9IGN1c3RvbUZpZWxkLmdyb3VwRmllbGRzLmZpbHRlcihmID0+IGYua2V5ID09PSBjdXJyZW50R3JvdXBGaWVsZC5BcGlOYW1lKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc0dyb3VwRm9jdXMgPSB0aGlzLmxhc3RGb2N1c2VkRmllbGQgJiYgdGhpcy5sYXN0Rm9jdXNlZEZpZWxkLmlkID09PSBjdXN0b21Hcm91cEZpZWxkLmtleTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21Hcm91cEZpZWxkLnVwZGF0ZUZpZWxkKGN1cnJlbnRHcm91cEZpZWxkLCB0aGlzLmNhbkVkaXRPYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzR3JvdXBGb2N1cyA/IHRoaXMubGFzdEZvY3VzZWRGaWVsZCA6IG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEZvcm0odHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2xlYW5MYXN0Rm9jdXNlZEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDbGVhbiB0aGUgbGFzdCBmb2N1c2VkIGZpZWxkLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Rm9jdXNlZEZpZWxkID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVsb2FkRm9ybSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob3VsZFJlbG9hZEZvcm0gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uU3VibWl0KCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5wYXlMb2FkID0gSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JtLnZhbHVlKTtcclxuICAgIC8vICAgICAgICAgLy90aGlzLnN1Ym1pdHRlZC5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Rm9ybUNvbnRyb2xCeUlkKGtleTogc3RyaW5nKTogQWJzdHJhY3RDb250cm9sIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGZvcm1Db250cm9sID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbCA9IHNlbGYuZm9ybS5nZXQoZmllbGQua2V5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5ncm91cEZpZWxkcyAmJiBmaWVsZC5ncm91cEZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5ncm91cEZpZWxkcy5mb3JFYWNoKChncm91cEZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwRmllbGQua2V5ID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2wgPSBzZWxmLmZvcm0uZ2V0KGZpZWxkLmtleSArICcuJyArIGdyb3VwRmllbGQua2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtQ29udHJvbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFNwZWNpYWxGaWVsZHMoY29udHJvbEZpZWxkczogQXJyYXk8YW55PiwgZGF0YUZpZWxkczogQXJyYXk8YW55Pik6IHZvaWQge1xyXG4gICAgICAgIC8vIGxldCBjZjtcclxuICAgICAgICAvLyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29udHJvbEZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgY2YgPSBjb250cm9sRmllbGRzW2luZGV4XTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNmIG9mIGNvbnRyb2xGaWVsZHMpIHtcclxuICAgICAgICAgICAgaWYgKGNmLkFwaU5hbWUgPT09ICdPYmplY3RNZW51Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51RmllbGQgPSBjZjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjZi5BcGlOYW1lID09PSAnSXRlbUhhc0FjdGl2ZUNhbXBhaWduJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDYW1wYWlnbkZpZWxkID0gY2Y7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2YuQXBpTmFtZSA9PT0gJ0l0ZW1JbmRpY2F0b3JzV2l0aG91dENhbXBhaWduJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JzRmllbGQgPSBjZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbGV0IGRmO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhRmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vICAgICBkZiA9IGRhdGFGaWVsZHNbaW5kZXhdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZGYgb2YgZGF0YUZpZWxkcykge1xyXG4gICAgICAgICAgICBpZiAoZGYuQXBpTmFtZSA9PT0gJ09iamVjdE1lbnUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVEYXRhRmllbGQgPSBkZjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkZi5BcGlOYW1lID09PSAnSXRlbUhhc0FjdGl2ZUNhbXBhaWduJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDYW1wYWlnbkRhdGFGaWVsZCA9IGRmO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRmLkFwaU5hbWUgPT09ICdJdGVtSW5kaWNhdG9yc1dpdGhvdXRDYW1wYWlnbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yc0RhdGFGaWVsZCA9IGRmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tZW51RmllbGQgJiYgdGhpcy5tZW51RGF0YUZpZWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudURhdGFGaWVsZC5MYXlvdXQgPSB0aGlzLm1lbnVGaWVsZC5MYXlvdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5oYXNDYW1wYWlnbkZpZWxkICYmIHRoaXMuaGFzQ2FtcGFpZ25EYXRhRmllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNDYW1wYWlnbkRhdGFGaWVsZC5MYXlvdXQgPSB0aGlzLmhhc0NhbXBhaWduRmllbGQuTGF5b3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW5kaWNhdG9yc0ZpZWxkICYmIHRoaXMuaW5kaWNhdG9yc0RhdGFGaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmluZGljYXRvcnNEYXRhRmllbGQuTGF5b3V0ID0gdGhpcy5pbmRpY2F0b3JzRmllbGQuTGF5b3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgbWVudSBpcyBmbG9hdGluZyBvbiBvdGhlciBmaWVsZC5cclxuICAgICAgICAvLyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29udHJvbEZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgY2YgPSBjb250cm9sRmllbGRzW2luZGV4XTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNmIG9mIGNvbnRyb2xGaWVsZHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWVudUZpZWxkICYmIGNmLkFwaU5hbWUgIT09ICdPYmplY3RNZW51Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNNZW51RmxvYXRpbmdPbk90aGVyRmllbGQgPSBQZXBwZXJpRm9ybUNvbXBvbmVudC5kb2VzRmllbGRIYXZhRmxvYXRpbmdGaWVsZChjZiwgdGhpcy5tZW51RmllbGQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc01lbnVGbG9hdGluZ09uT3RoZXJGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRDdXN0b21GaWVsZHMoY29udHJvbEZpZWxkczogQXJyYXk8YW55PiwgZGF0YUZpZWxkczogQXJyYXk8YW55Pik6IFBlcHBlcmlGaWVsZEJhc2VbXSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxheW91dFR5cGUgIT09IExBWU9VVF9UWVBFLlBlcHBlcmlUYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFNwZWNpYWxGaWVsZHMoY29udHJvbEZpZWxkcywgZGF0YUZpZWxkcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSGFjazogY29udmVydCB0byBjZW50ZXIgYWxpZ25tZW50IGlmIHRhYmxlIHZpZXcgJiBzcGVjaWFsIGZpZWxkcylcclxuICAgICAgICAgICAgY29udHJvbEZpZWxkcy5mb3JFYWNoKChmaWVsZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5BcGlOYW1lID09PSAnVW5pdHNRdWFudGl0eScgfHxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5BcGlOYW1lID09PSAnUXVhbnRpdHlTZWxlY3RvcicgfHxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5BcGlOYW1lID09PSAnT2JqZWN0TWVudScgfHxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5GaWVsZFR5cGUgPT09IEZJRUxEX1RZUEUuSW1hZ2UgfHxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5GaWVsZFR5cGUgPT09IEZJRUxEX1RZUEUuSW1hZ2VVUkwgfHxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5GaWVsZFR5cGUgPT09IEZJRUxEX1RZUEUuSW5kaWNhdG9ycyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5Cb29sZWFuIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuRmllbGRUeXBlID09PSBGSUVMRF9UWVBFLkNhbGN1bGF0ZWRCb29sIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuRmllbGRUeXBlID09PSBGSUVMRF9UWVBFLlNpZ25hdHVyZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5OdW1iZXJJbnRlZ2VyUXVhbnRpdHlTZWxlY3RvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5OdW1iZXJSZWFsUXVhbnRpdHlTZWxlY3RvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5QYWNrYWdlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuRmllbGRUeXBlID09PSBGSUVMRF9UWVBFLk51bWJlckludGVnZXJGb3JNYXRyaXggfHxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5GaWVsZFR5cGUgPT09IEZJRUxEX1RZUEUuTnVtYmVyUmVhbEZvck1hdHJpeFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuTGF5b3V0LlhBbGlnbm1lbnQgPSAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpZWxkczogUGVwcGVyaUZpZWxkQmFzZVtdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdHJpeEZpZWxkcyA9IGNvbnRyb2xGaWVsZHMuZmlsdGVyKGNmID0+IFBlcHBlcmlGb3JtQ29tcG9uZW50LmlzTWF0cml4RmllbGQoY2YuQXBpTmFtZSkpLmxlbmd0aDtcclxuICAgICAgICBsZXQgbWF0cml4QWxyZWFkeVBsYWNlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb250cm9sRmllbGRzLmZvckVhY2goKGZpZWxkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhRmllbGQgPSBkYXRhRmllbGRzLmZpbHRlcihkZiA9PiBkZi5BcGlOYW1lID09PSBmaWVsZC5BcGlOYW1lKVswXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0YUZpZWxkKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgY3VycmVudCB2aWV3IGlzIG5vdCB0YWJsZSB2aWV3IGFuZCB0aG9zZSBmaWVsZHMgYXJlIHNwZWNpYWwuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0VHlwZSAhPT0gTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlICYmXHJcbiAgICAgICAgICAgICAgICAoKHRoaXMuaGFzTWVudUZsb2F0aW5nT25PdGhlckZpZWxkICYmIHRoaXMubWVudUZpZWxkICYmIHRoaXMubWVudUZpZWxkLkFwaU5hbWUgPT09IGZpZWxkLkFwaU5hbWUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuaW5kaWNhdG9yc0ZpZWxkICYmIHRoaXMuaW5kaWNhdG9yc0ZpZWxkLkFwaU5hbWUgPT09IGZpZWxkLkFwaU5hbWUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuaGFzQ2FtcGFpZ25GaWVsZCAmJiB0aGlzLmhhc0NhbXBhaWduRmllbGQuQXBpTmFtZSA9PT0gZmllbGQuQXBpTmFtZSkpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhpcy4gKGZpeCB0d28gbWF0cml4IGludG8gb25lKVxyXG4gICAgICAgICAgICBpZiAobWF0cml4RmllbGRzID4gMCAmJiBQZXBwZXJpRm9ybUNvbXBvbmVudC5pc01hdHJpeEZpZWxkKGZpZWxkLkFwaU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0cml4RmllbGRzID4gMSAmJiBtYXRyaXhBbHJlYWR5UGxhY2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1hdHJpeEFscmVhZHlQbGFjZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtYXRyaXhGaWVsZHMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXRyaXhJc0xhc3QgPSBjb250cm9sRmllbGRzLmxlbmd0aCA+PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbEZpZWxkc1tjb250cm9sRmllbGRzLmxlbmd0aCAtIDJdLkFwaU5hbWUgPT09IGZpZWxkLkFwaU5hbWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXRyaXhJc0xhc3QgPSBjb250cm9sRmllbGRzW2NvbnRyb2xGaWVsZHMubGVuZ3RoIC0gMV0uQXBpTmFtZSA9PT0gZmllbGQuQXBpTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IHR5cGUgdG8gbGlua1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdEZpZWxkQXNMaW5rICYmIGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhRmllbGQuRmllbGRUeXBlID0gRklFTERfVFlQRS5JbnRlcm5hbExpbms7XHJcbiAgICAgICAgICAgICAgICBkYXRhRmllbGQuVmFsdWUgPSB0aGlzLmdldEludGVybmFsTGlua0hyZWYoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhRmllbGQuVmFsdWUubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgKGZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5SZWZlcmVuY2VUeXBlIHx8IGZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5HdWlkUmVmZXJlbmNlVHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uVXJsID0gdGhpcy5wZXBwZXJpT2JqZWN0SW5wdXQuRGF0YS5NYWluQWN0aW9uID09PSAnMicgPyAndHJhbnNhY3Rpb25zL3Njb3BlX2l0ZW1zLycgOiAndHJhbnNhY3Rpb25zL2NhcnQvJztcclxuICAgICAgICAgICAgICAgIGRhdGFGaWVsZC5WYWx1ZSA9IHRyYW5zYWN0aW9uVXJsICsgZGF0YUZpZWxkLlZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZmllbGQuQXBpTmFtZSA9PT0gJ09iamVjdE1lbnUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSB0aGlzLnBlcHBlcmlPYmplY3RJbnB1dC5EYXRhO1xyXG4gICAgICAgICAgICAgICAgLy8gSEFDSyA6IFVudGlsIFwiRW5hYmxlZFwiIHJldHVybnMgZnJvbSB0aGUgc2VydmVyLCB3ZSBzZXQgUGVwcGVyaU1lbnUgdG8gYmVcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICBEaXNhYmxlZCBpbiBjYXJ0IG9uIHJlZ3VsYXIgaXRlbXMgYW5kIG5vdCBjYW1waWduIGl0ZW1zLlxyXG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkLkVuYWJsZWQgPSB0aGlzLnBhZ2VUeXBlICE9PSAnY2FydCc7XHJcbiAgICAgICAgICAgICAgICBkYXRhRmllbGQuT3B0aW9uYWxWYWx1ZXMgPSBkYXRhLlRyYW5zYWN0aW9uSXRlbUN1c3RvbU1lbnU7XHJcbiAgICAgICAgICAgICAgICBkYXRhRmllbGQuVHJhbnNhY3Rpb25JdGVtVHlwZSA9IGRhdGEuVHJhbnNhY3Rpb25JdGVtVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjdXN0b21GaWVsZDogUGVwcGVyaUZpZWxkQmFzZSA9IFBlcHBlcmlGb3JtQ29tcG9uZW50LmNvbnZlcnRUb0N1c3RvbUZpZWxkKFxyXG4gICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICBkYXRhRmllbGQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkVkaXRPYmplY3QsXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVEYXRhRmllbGQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NhbXBhaWduRGF0YUZpZWxkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JzRGF0YUZpZWxkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RJZCxcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50SWQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaENvZGVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGZpZWxkcy5wdXNoKGN1c3RvbUZpZWxkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZpZWxkcy5zb3J0KChmMSwgZjIpID0+IChmMS5yb3cgPiBmMi5yb3cgP1xyXG4gICAgICAgICAgICAxIDogZjEucm93IDwgZjIucm93ID9cclxuICAgICAgICAgICAgICAgIC0xIDogZjEuY29sID4gZjIuY29sID9cclxuICAgICAgICAgICAgICAgICAgICAxIDogZjEuY29sIDwgZjIuY29sID8gLTEgOiAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25WYWx1ZUNoYW5nZWQodmFsdWVDaGFuZ2VkOiBhbnksIGlzRWRpdE1vZGFsOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICAvLyBUaGlzIHdhcyBjb21tZW50IGJ5IFRvbWVyIGNhdXNlIHRoZSBhZGRyZXNzIGhhcyBzdG9wIHdvcmtpbmcgYmVjYXVzZSB0aGlzIGNoYW5nZS5cclxuICAgICAgICAvLyBsZXQgY2xpY2tlZFVpQ29udHJvbEZpZWxkID0gdGhpcy5wZXBwZXJpT2JqZWN0SW5wdXQuRGF0YS5GaWVsZHMuZmlsdGVyKGYgPT4gZi5BcGlOYW1lID09PSB2YWx1ZUNoYW5nZWQuYXBpTmFtZSlbMF07XHJcbiAgICAgICAgLy8gaWYgKGNsaWNrZWRVaUNvbnRyb2xGaWVsZCkge1xyXG4gICAgICAgIHRoaXMub25Gb3JtVmFsaWRhdGlvbkNoYW5nZWQodGhpcy5mb3JtLnZhbGlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybUNvbnRyb2wgPSB0aGlzLmdldEZvcm1Db250cm9sQnlJZCh2YWx1ZUNoYW5nZWQuYXBpTmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBmb3JtQ29udHJvbCA/IGZvcm1Db250cm9sLnZhbGlkIDogdHJ1ZTtcclxuICAgICAgICAvLyBjb25zdCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgICAgICAgLy8gU2V0IGl0IHRvIGZhbHNlIHRvIGRpc2FibGUgYWxsIGZpZWxkcy5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxhc3RGb2N1c2VkRmllbGQgPSB2YWx1ZUNoYW5nZWQubGFzdEZvY3VzZWRGaWVsZDtcclxuICAgICAgICAgICAgY29uc3QgY3VzdG9taXplT2JqZWN0Q2hhbmdlZERhdGEgPSBuZXcgUGVwcGVyaU9iamVjdENoYW5nZWREYXRhKHRoaXMucGVwcGVyaU9iamVjdElucHV0LkRhdGEuVUlELnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUNoYW5nZWQuYXBpTmFtZSwgdmFsdWVDaGFuZ2VkLnZhbHVlLCB2YWx1ZUNoYW5nZWQuY29udHJvbFR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlZC5lbWl0KGN1c3RvbWl6ZU9iamVjdENoYW5nZWREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkNoaWxkQ2xpY2tlZChjaGlsZENsaWNrZWQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hpbGRDbGlja2VkLmVtaXQoY2hpbGRDbGlja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoaWxkQ2hhbmdlZChjaGlsZENoYW5nZWQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hpbGRDaGFuZ2VkLmVtaXQoY2hpbGRDaGFuZ2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZvcm1WYWxpZGF0aW9uQ2hhbmdlZChmb3JtVmFsaWRhdGlvbkNoYW5nZWQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxheW91dFR5cGUgPT09IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtIHx8IHRoaXMubGF5b3V0VHlwZSA9PT0gTEFZT1VUX1RZUEUuUGVwcGVyaUNhcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtVmFsaWRhdGlvbkNoYW5nZWQuZW1pdChmb3JtVmFsaWRhdGlvbkNoYW5nZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGZpZWxkQ2xpY2tFdmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY2xpY2tlZFVpQ29udHJvbEZpZWxkID0gdGhpcy5wZXBwZXJpT2JqZWN0SW5wdXQuRGF0YS5GaWVsZHMuZmlsdGVyKGYgPT4gZi5BcGlOYW1lID09PSBmaWVsZENsaWNrRXZlbnQuYXBpTmFtZSlbMF07XHJcbiAgICAgICAgLy8gbGV0IGNsaWNrZWRGaWVsZCA9IHRoaXMuZmllbGRzLmZpbHRlcihmID0+IGYua2V5ID09PSBmaWVsZENsaWNrRXZlbnQuYXBpTmFtZSlbMF07XHJcblxyXG4gICAgICAgIGlmIChjbGlja2VkVWlDb250cm9sRmllbGQpIHtcclxuICAgICAgICAgICAgaWYgKGNsaWNrZWRVaUNvbnRyb2xGaWVsZC5GaWVsZFR5cGUgPT09IEZJRUxEX1RZUEUuR3VpZFJlZmVyZW5jZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbWl6ZUZpZWxkQ2xpY2tlZERhdGEgPSBuZXcgUGVwcGVyaUZpZWxkQ2xpY2tlZERhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXBwZXJpT2JqZWN0SW5wdXQuRGF0YS5VSUQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZENsaWNrRXZlbnQuYXBpTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcHBlcmlPYmplY3RJbnB1dC5EYXRhLlR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDbGlja0V2ZW50LmV2ZW50V2hpY2gsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDbGlja0V2ZW50LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrZWRVaUNvbnRyb2xGaWVsZC5GaWVsZFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDbGlja0V2ZW50LnJlZmVyZW5jZU9iamVjdEludGVybmFsVHlwZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5RmllbGRDbGlja2VkLmVtaXQoY3VzdG9taXplRmllbGRDbGlja2VkRGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xpY2tlZFVpQ29udHJvbEZpZWxkLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5MaXN0T2ZPYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21pemVGaWVsZENsaWNrZWREYXRhID0gbmV3IFBlcHBlcmlGaWVsZENsaWNrZWREYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVwcGVyaU9iamVjdElucHV0LkRhdGEuVUlELnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDbGlja0V2ZW50LmFwaU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXBwZXJpT2JqZWN0SW5wdXQuRGF0YS5UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ2xpY2tFdmVudC5ldmVudFdoaWNoLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ2xpY2tFdmVudC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjbGlja2VkVWlDb250cm9sRmllbGQuRmllbGRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ2xpY2tFdmVudC5vdGhlckRhdGFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUZpZWxkQ2xpY2tlZC5lbWl0KGN1c3RvbWl6ZUZpZWxkQ2xpY2tlZERhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VzdG9taXplRmllbGRDbGlja2VkRGF0YSA9IG5ldyBQZXBwZXJpRmllbGRDbGlja2VkRGF0YShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcHBlcmlPYmplY3RJbnB1dC5EYXRhLlVJRC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ2xpY2tFdmVudC5hcGlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVwcGVyaU9iamVjdElucHV0LkRhdGEuVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZENsaWNrRXZlbnQuZXZlbnRXaGljaCxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZENsaWNrRXZlbnQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tlZFVpQ29udHJvbEZpZWxkLkZpZWxkVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZENsaWNrRXZlbnQub3RoZXJEYXRhXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlGaWVsZENsaWNrZWQuZW1pdChjdXN0b21pemVGaWVsZENsaWNrZWREYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZvciBvdGhlciBhcGkgbmFtZXMgKGxpa2UgZW50ZXIgY2hpbGRyZW4gZXRjKS5cclxuICAgICAgICAgICAgY29uc3QgY3VzdG9taXplRmllbGRDbGlja2VkRGF0YSA9IG5ldyBQZXBwZXJpRmllbGRDbGlja2VkRGF0YShcclxuICAgICAgICAgICAgICAgIHRoaXMucGVwcGVyaU9iamVjdElucHV0LkRhdGEuVUlELnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBmaWVsZENsaWNrRXZlbnQuYXBpTmFtZSxcclxuICAgICAgICAgICAgICAgIHRoaXMucGVwcGVyaU9iamVjdElucHV0LkRhdGEuVHlwZSxcclxuICAgICAgICAgICAgICAgIGZpZWxkQ2xpY2tFdmVudC5ldmVudFdoaWNoLFxyXG4gICAgICAgICAgICAgICAgZmllbGRDbGlja0V2ZW50LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIGZpZWxkQ2xpY2tFdmVudC5vdGhlckRhdGFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlGaWVsZENsaWNrZWQuZW1pdChjdXN0b21pemVGaWVsZENsaWNrZWREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25NZW51SXRlbUNsaWNrZWQoZmllbGRDbGlja0V2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjbGlja2VkVWlDb250cm9sRmllbGQgPSB0aGlzLnBlcHBlcmlPYmplY3RJbnB1dC5EYXRhLkZpZWxkcy5maWx0ZXIoZiA9PiBmLkFwaU5hbWUgPT09IGZpZWxkQ2xpY2tFdmVudC5hcGlOYW1lKVswXTtcclxuICAgICAgICBjb25zdCBkYXRhRmllbGQ6IGFueSA9IHRoaXMucGVwcGVyaU9iamVjdElucHV0LkRhdGE7XHJcbiAgICAgICAgY29uc3QgZmllbGRUeXBlID0gdHlwZW9mIGNsaWNrZWRVaUNvbnRyb2xGaWVsZCAhPT0gJ3VuZGVmaW5lZCcgPyBjbGlja2VkVWlDb250cm9sRmllbGQuRmllbGRUeXBlIDogRklFTERfVFlQRS5QYWNrYWdlO1xyXG4gICAgICAgIGNvbnN0IGN1c3RvbWl6ZUZpZWxkQ2xpY2tlZERhdGEgPSBuZXcgUGVwcGVyaUZpZWxkQ2xpY2tlZERhdGEoZGF0YUZpZWxkLlVJRC50b1N0cmluZygpLCBmaWVsZENsaWNrRXZlbnQuYXBpTmFtZSxcclxuICAgICAgICAgICAgZGF0YUZpZWxkLlR5cGUsIGZpZWxkQ2xpY2tFdmVudC5ldmVudFdoaWNoLCBmaWVsZENsaWNrRXZlbnQudmFsdWUsIGZpZWxkVHlwZSwge1xyXG4gICAgICAgICAgICBFeHRyYUluZm86IGRhdGFGaWVsZC5FeHRyYUluZm8sXHJcbiAgICAgICAgICAgIEl0ZW1UeXBlOiBkYXRhRmllbGQuVHJhbnNhY3Rpb25JdGVtVHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm90aWZ5TWVudUl0ZW1DbGlja2VkLmVtaXQoY3VzdG9taXplRmllbGRDbGlja2VkRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW50ZXJuYWxMaW5rSHJlZigpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBocmVmU3RyID0gJyc7XHJcbiAgICAgICAgY29uc3QgdWlkID0gdGhpcy5wZXBwZXJpT2JqZWN0SW5wdXQuRGF0YS5VSUQ7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25VcmwgPSB0aGlzLnBlcHBlcmlPYmplY3RJbnB1dC5EYXRhLk1haW5BY3Rpb24gPT09ICcyJyA/ICd0cmFuc2FjdGlvbnMvc2NvcGVfaXRlbXMvJyA6ICd0cmFuc2FjdGlvbnMvY2FydC8nO1xyXG4gICAgICAgIC8vIGxldCBpc0J1eWVyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlclJvbGUnKSA9PSAnQnV5ZXInID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5saXN0VHlwZSA9PT0gJ2FsbF9hY3Rpdml0aWVzJykge1xyXG4gICAgICAgICAgICBocmVmU3RyID0gdGhpcy5wZXBwZXJpT2JqZWN0SW5wdXQuRGF0YS5UeXBlID09PSAwID8gdHJhbnNhY3Rpb25VcmwgKyB1aWQgOiAnYWN0aXZpdGllcy9kZXRhaWxzLycgKyB1aWQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxpc3RUeXBlID09PSAnYWNjb3VudHMnKSB7XHJcbiAgICAgICAgICAgIGhyZWZTdHIgPSAnYWNjb3VudHMvaG9tZV9wYWdlLycgKyB1aWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaHJlZlN0cjtcclxuICAgIH1cclxufVxyXG4iLCI8ZmllbGRzZXQgKm5nSWY9XCJmb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgW2Rpc2FibGVkXT1cImlzTG9ja2VkXCIgY2xhc3M9XCJwZXBwZXJpLWZvcm1cIlxyXG4gICAgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGxheW91dFR5cGUgPT0gTEFZT1VUX1RZUEUuUGVwcGVyaUNhcmQgJiYgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5CYWNrZ3JvdW5kQ29sb3IgfVwiXHJcbiAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgJ21hdGVyaWFsLWZvcm0nOiBsYXlvdXRUeXBlID09IExBWU9VVF9UWVBFLlBlcHBlcmlGb3JtLFxyXG4gICAgICAgIGNhcmRWaWV3OiBpc0NhcmRWaWV3ID09IHRydWVcclxuICAgIH1cIj5cclxuICAgIDwhLS0gTmV3IEZvcm0gLS0+XHJcbiAgICA8bWF0LWdyaWQtbGlzdCAqbmdJZj1cImxheW91dFR5cGUgPT0gTEFZT1VUX1RZUEUuUGVwcGVyaUZvcm1cIiBbY29sc109XCJjb2x1bW5zXCIgW3Jvd0hlaWdodF09XCJyb3dIZWlnaHQgKyAncmVtJ1wiXHJcbiAgICAgICAgW2d1dHRlclNpemVdPVwiZm9ybUd1dHRlclNpemVcIj5cclxuICAgICAgICA8bWF0LWdyaWQtdGlsZSAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGRzXCIgW3Jvd3NwYW5dPVwiZmllbGQucm93U3BhblwiIFtjb2xzcGFuXT1cImZpZWxkLmNvbFNwYW5cIj5cclxuICAgICAgICAgICAgPHBlcC1maWVsZC1nZW5lcmF0b3IgKm5nSWY9XCJmaWVsZC5jb250cm9sVHlwZSAhPSAncGxhY2Vob2xkZXInXCIgW2Zvcm1dPVwiZm9ybVwiIFtsYXlvdXRUeXBlXT1cImxheW91dFR5cGVcIlxyXG4gICAgICAgICAgICAgICAgW2NoZWNrRm9yQ2hhbmdlc109XCJjaGVja0ZvckNoYW5nZXNcIiBbb2JqZWN0SWRdPVwicGVwcGVyaU9iamVjdElucHV0LkRhdGEuVUlEXCJcclxuICAgICAgICAgICAgICAgIFtoYXNIZWlnaHRMaW1pdF09XCIhbWF0cml4SXNMYXN0XCIgW2ZpZWxkXT1cImZpZWxkXCIgW3Nob3dUaXRsZV09XCJzaG93VGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlZCgkZXZlbnQpXCIgKG5vdGlmeUNoaWxkQ2xpY2tlZCk9XCJvbkNoaWxkQ2xpY2tlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIChjaGlsZENoYW5nZWQpPVwib25DaGlsZENoYW5nZWQoJGV2ZW50KVwiIChlbGVtZW50Q2xpY2tlZCk9XCJvbkNsaWNrKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgKG5vdGlmeU1lbnVJdGVtQ2xpY2tlZCk9XCJvbk1lbnVJdGVtQ2xpY2tlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIChmb3JtVmFsaWRhdGlvbkNoYW5nZWQpPVwib25Gb3JtVmFsaWRhdGlvbkNoYW5nZWQoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8L3BlcC1maWVsZC1nZW5lcmF0b3I+XHJcbiAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxyXG4gICAgPC9tYXQtZ3JpZC1saXN0PlxyXG5cclxuICAgIDwhLS0gVGh1bWJuYWlscyAtLT5cclxuICAgIDxtYXQtZ3JpZC1saXN0ICpuZ0lmPVwibGF5b3V0VHlwZSA9PSBMQVlPVVRfVFlQRS5QZXBwZXJpQ2FyZFwiIFtjb2xzXT1cImNvbHVtbnNcIiBbcm93SGVpZ2h0XT1cInJvd0hlaWdodCArICdyZW0nXCJcclxuICAgICAgICBbZ3V0dGVyU2l6ZV09XCJjYXJkR3V0dGVyU2l6ZVwiIGNsYXNzPVwiY2FyZC1zcGFjaW5nXCIgW25nQ2xhc3NdPVwieyAnbG9jay1ldmVudHMnOiBsb2NrRXZlbnRzIH1cIj5cclxuICAgICAgICA8bWF0LWdyaWQtdGlsZSAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGRzXCIgW3Jvd3NwYW5dPVwiZmllbGQucm93U3BhblwiIFtjb2xzcGFuXT1cImZpZWxkLmNvbFNwYW5cIlxyXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJ7IG92ZXJmbG93OiBmaWVsZC50eXBlID09ICdxcycgPyAndW5zZXQnIDogJ2hpZGRlbicgfVwiPlxyXG4gICAgICAgICAgICA8cGVwLWZpZWxkLWdlbmVyYXRvciAqbmdJZj1cImZpZWxkLmNvbnRyb2xUeXBlICE9ICdwbGFjZWhvbGRlcidcIiBbZm9ybV09XCJmb3JtXCIgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiXHJcbiAgICAgICAgICAgICAgICBbaXNBY3RpdmVdPVwiaXNBY3RpdmVcIiBbY2hlY2tGb3JDaGFuZ2VzXT1cImNoZWNrRm9yQ2hhbmdlc1wiIFtvYmplY3RJZF09XCJwZXBwZXJpT2JqZWN0SW5wdXQuRGF0YS5VSURcIlxyXG4gICAgICAgICAgICAgICAgW2hhc0hlaWdodExpbWl0XT1cIiFtYXRyaXhJc0xhc3RcIiBbZmllbGRdPVwiZmllbGRcIiBbc2hvd1RpdGxlXT1cInNob3dUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAodmFsdWVDaGFuZ2VkKT1cIm9uVmFsdWVDaGFuZ2VkKCRldmVudClcIiAobm90aWZ5Q2hpbGRDbGlja2VkKT1cIm9uQ2hpbGRDbGlja2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgKGNoaWxkQ2hhbmdlZCk9XCJvbkNoaWxkQ2hhbmdlZCgkZXZlbnQpXCIgKGVsZW1lbnRDbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAobm90aWZ5TWVudUl0ZW1DbGlja2VkKT1cIm9uTWVudUl0ZW1DbGlja2VkKCRldmVudClcIj5cclxuICAgICAgICAgICAgPC9wZXAtZmllbGQtZ2VuZXJhdG9yPlxyXG4gICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cclxuICAgIDwvbWF0LWdyaWQtbGlzdD5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0VHlwZSA9PSBMQVlPVVRfVFlQRS5QZXBwZXJpVGFibGVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNSZXBvcnQ7IHRoZW4gcmVwb3J0QmxvY2s7IGVsc2Ugbm90UmVwb3J0QmxvY2tcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI3JlcG9ydEJsb2NrPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicmVwb3J0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI25vdFJlcG9ydEJsb2NrPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZHM7IGxldCBqID0gaW5kZXhcIiBjbGFzcz1cInB1bGwtbGVmdCBmbGlwIHRhYmxlLWNlbGwgXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIlsndGV4dC1hbGlnbi0nICsgZmllbGQueEFsaWdubWVudF1cIiBzdHlsZT1cImhlaWdodDogMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7IHdpZHRoOiAodWlDb250cm9sSGVhZGVyPy5Db250cm9sRmllbGRzKVtqXT8uY2FsY0NvbHVtbldpZHRoU3RyaW5nfVwiPlxyXG4gICAgICAgICAgICAgICAgPHBlcC1maWVsZC1nZW5lcmF0b3IgKm5nSWY9XCJmaWVsZC5jb250cm9sVHlwZSAhPSAncGxhY2Vob2xkZXInXCIgW2NoZWNrRm9yQ2hhbmdlc109XCJjaGVja0ZvckNoYW5nZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvYmplY3RJZF09XCJwZXBwZXJpT2JqZWN0SW5wdXQuRGF0YS5VSURcIiBbZmllbGRdPVwiZmllbGRcIiAodmFsdWVDaGFuZ2VkKT1cIm9uVmFsdWVDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIChlbGVtZW50Q2xpY2tlZCk9XCJvbkNsaWNrKCRldmVudClcIiAobm90aWZ5TWVudUl0ZW1DbGlja2VkKT1cIm9uTWVudUl0ZW1DbGlja2VkKCRldmVudClcIiBbZm9ybV09XCJmb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICBbbGF5b3V0VHlwZV09XCJsYXlvdXRUeXBlXCIgW3Nob3dUaXRsZV09XCJmYWxzZVwiIFtpc0FjdGl2ZV09XCJpc0FjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9wZXAtZmllbGQtZ2VuZXJhdG9yPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dFR5cGUgPT0gTEFZT1VUX1RZUEUuRWRpdG1vZGFsXCI+XHJcbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGRzOyBsZXQgaiA9IGluZGV4XCIgY2xhc3M9XCJwdWxsLWxlZnQgZmxpcFwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cclxuICAgICAgICAgICAgPHBlcC1maWVsZC1nZW5lcmF0b3IgKm5nSWY9XCJmaWVsZC5jb250cm9sVHlwZSAhPSAncGxhY2Vob2xkZXInXCIgW2NoZWNrRm9yQ2hhbmdlc109XCJjaGVja0ZvckNoYW5nZXNcIlxyXG4gICAgICAgICAgICAgICAgW29iamVjdElkXT1cInBlcHBlcmlPYmplY3RJbnB1dC5EYXRhLlVJRFwiIFtmaWVsZF09XCJmaWVsZFwiICh2YWx1ZUNoYW5nZWQpPVwib25WYWx1ZUNoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAoZWxlbWVudENsaWNrZWQpPVwib25DbGljaygkZXZlbnQpXCIgW2Zvcm1dPVwiZm9ybVwiIFtsYXlvdXRUeXBlXT1cImxheW91dFR5cGVcIiBbc2hvd1RpdGxlXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIFtpc0FjdGl2ZV09XCJpc0FjdGl2ZVwiPlxyXG4gICAgICAgICAgICA8L3BlcC1maWVsZC1nZW5lcmF0b3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tLS0tLS0gRm9yIHRlc3RpbmcgLS0tLS0tLS0tLS0tXHJcbiAgICB7eyBmb3JtLnZhbHVlIHwganNvbiB9fVxyXG4gICAge3sgZm9ybS52YWxpZCB9fVxyXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuPC9maWVsZHNldD5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjcmVwb3J0PlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGRzOyBsZXQgaiA9IGluZGV4XCIgY2xhc3M9XCJwdWxsLWxlZnQgZmxpcCBwZXBwZXJpLXJlcG9ydC1maWVsZHNcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cInsgd2lkdGg6ICh1aUNvbnRyb2xIZWFkZXI/LkNvbnRyb2xGaWVsZHMpW2pdPy5jYWxjQ29sdW1uV2lkdGhTdHJpbmcgfVwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwiWyd0ZXh0LWFsaWduLScgKyBmaWVsZC54QWxpZ25tZW50XVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImZpZWxkLmNvbnRyb2xUeXBlXCI+XHJcbiAgICAgICAgICAgIDxwZXAtaW1hZ2UgKm5nU3dpdGNoQ2FzZT1cIidpbWFnZSdcIiBbb2JqZWN0SWRdPVwib2JqZWN0SWRcIiBbZm9ybV09XCJmb3JtXCIgW2tleV09XCJmaWVsZC5rZXlcIlxyXG4gICAgICAgICAgICAgICAgW3NyY109XCJmaWVsZC5mb3JtYXR0ZWRWYWx1ZVwiIFtzcmNMYXJnZV09XCJmaWVsZC52YWx1ZVwiIFtvcHRpb25zXT1cImZpZWxkLm9wdGlvbnNcIiBbbGFiZWxdPVwiZmllbGQubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgW3R5cGVdPVwiZmllbGQudHlwZVwiIFtyZXF1aXJlZF09XCJmaWVsZC5yZXF1aXJlZFwiIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICBbeEFsaWdubWVudF09XCJmaWVsZC54QWxpZ25tZW50XCIgW3Jvd1NwYW5dPVwiZmllbGQucm93U3BhblwiIFtsYXlvdXRUeXBlXT1cImxheW91dFR5cGVcIlxyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnRDbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8L3BlcC1pbWFnZT5cclxuXHJcbiAgICAgICAgICAgIDxwZXAtc2lnbmF0dXJlICpuZ1N3aXRjaENhc2U9XCInc2lnbmF0dXJlJ1wiIFtmb3JtXT1cImZvcm1cIiBba2V5XT1cImZpZWxkLmtleVwiIFtzcmNdPVwiZmllbGQudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW2xhYmVsXT1cImZpZWxkLmxhYmVsXCIgW3JlcXVpcmVkXT1cImZpZWxkLnJlcXVpcmVkXCIgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiIFt4QWxpZ25tZW50XT1cImZpZWxkLnhBbGlnbm1lbnRcIiBbcm93U3Bhbl09XCJmaWVsZC5yb3dTcGFuXCJcclxuICAgICAgICAgICAgICAgIFtsYXlvdXRUeXBlXT1cImxheW91dFR5cGVcIj5cclxuICAgICAgICAgICAgPC9wZXAtc2lnbmF0dXJlPlxyXG5cclxuICAgICAgICAgICAgPHBlcC1jaGVja2JveCAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIFtmb3JtXT1cImZvcm1cIiBba2V5XT1cImZpZWxkLmtleVwiIFt2YWx1ZV09XCJmaWVsZC52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbbGFiZWxdPVwiZmllbGQubGFiZWxcIiBbdHlwZV09XCJmaWVsZC50eXBlXCIgW3JlcXVpcmVkXT1cImZpZWxkLnJlcXVpcmVkXCIgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiIFt4QWxpZ25tZW50XT1cImZpZWxkLnhBbGlnbm1lbnRcIiBbcm93U3Bhbl09XCJmaWVsZC5yb3dTcGFuXCJcclxuICAgICAgICAgICAgICAgIFthZGRpdGlvbmFsVmFsdWVdPVwiZmllbGQuYWRkaXRpb25hbFZhbHVlXCIgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiPlxyXG4gICAgICAgICAgICA8L3BlcC1jaGVja2JveD5cclxuXHJcbiAgICAgICAgICAgIDxwZXAtaW50ZXJuYWwtYnV0dG9uICpuZ1N3aXRjaENhc2U9XCInYnV0dG9uJ1wiIFtmb3JtXT1cImZvcm1cIiBba2V5XT1cImZpZWxkLmtleVwiIFt2YWx1ZV09XCJmaWVsZC52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbZm9ybWF0dGVkVmFsdWVdPVwiZmllbGQuZm9ybWF0dGVkVmFsdWVcIiBbbGFiZWxdPVwiZmllbGQubGFiZWxcIiBbdHlwZV09XCJmaWVsZC50eXBlXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiIFt4QWxpZ25tZW50XT1cImZpZWxkLnhBbGlnbm1lbnRcIlxyXG4gICAgICAgICAgICAgICAgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiIChlbGVtZW50Q2xpY2tlZCk9XCJvbkNsaWNrKCRldmVudClcIj5cclxuICAgICAgICAgICAgPC9wZXAtaW50ZXJuYWwtYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPHBlcC10ZXh0YXJlYSAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiIFtmb3JtXT1cImZvcm1cIiBba2V5XT1cImZpZWxkLmtleVwiIFt2YWx1ZV09XCJmaWVsZC52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbbGFiZWxdPVwiZmllbGQubGFiZWxcIiBbcmVxdWlyZWRdPVwiZmllbGQucmVxdWlyZWRcIiBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCIgW21heEZpZWxkQ2hhcmFjdGVyc109XCJmaWVsZC5tYXhGaWVsZENoYXJhY3RlcnNcIlxyXG4gICAgICAgICAgICAgICAgW3RleHRDb2xvcl09XCJmaWVsZC50ZXh0Q29sb3JcIiBbeEFsaWdubWVudF09XCJmaWVsZC54QWxpZ25tZW50XCIgW3Jvd1NwYW5dPVwiZmllbGQucm93U3BhblwiXHJcbiAgICAgICAgICAgICAgICBbbGF5b3V0VHlwZV09XCJsYXlvdXRUeXBlXCI+XHJcbiAgICAgICAgICAgIDwvcGVwLXRleHRhcmVhPlxyXG5cclxuICAgICAgICAgICAgPHBlcC1xdWFudGl0eS1zZWxlY3RvciAqbmdTd2l0Y2hDYXNlPVwiJ3FzJ1wiIFtpZF09XCJmaWVsZC5rZXlcIiBbZm9ybV09XCJmb3JtXCIgW2tleV09XCJmaWVsZC5rZXlcIlxyXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cImZpZWxkLnZhbHVlXCIgW2Zvcm1hdHRlZFZhbHVlXT1cImZpZWxkLmZvcm1hdHRlZFZhbHVlXCIgW2xhYmVsXT1cImZpZWxkLmxhYmVsXCIgW3R5cGVdPVwiZmllbGQudHlwZVwiXHJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQucmVxdWlyZWRcIiBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIiBbcmVhZG9ubHldPVwiZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgW3RleHRDb2xvcl09XCJmaWVsZC50ZXh0Q29sb3JcIiBbeEFsaWdubWVudF09XCJmaWVsZC54QWxpZ25tZW50XCIgW3Jvd1NwYW5dPVwiZmllbGQucm93U3BhblwiXHJcbiAgICAgICAgICAgICAgICBbbGF5b3V0VHlwZV09XCJsYXlvdXRUeXBlXCIgKHZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlZCgkZXZlbnQpXCIgKGVsZW1lbnRDbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8L3BlcC1xdWFudGl0eS1zZWxlY3Rvcj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5mb3JtYXR0ZWRWYWx1ZT8ubGVuZ3RoID4gMDsgdGhlbiBub3RFbXB0eUJsb2NrOyBlbHNlIGVtcHR5QmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNub3RFbXB0eUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09PSAnYXR0YWNobWVudCcgfHwgZmllbGQudHlwZSA9PT0gJ2xpbmsnOyB0aGVuIGxpbmtCbG9jazsgZWxzZSBub3RMaW5rQmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2xpbmtCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW2lkXT1cImZpZWxkLmtleVwiIGNsYXNzPVwiY29sb3ItbGluayBib2R5LXNtIHBlcHBlcmktcmVwb3J0LWlucHV0IHJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZm9ybWF0dGVkVmFsdWUgIT0gbnVsbFwiIHRpdGxlPVwie3sgZmllbGQuZm9ybWF0dGVkVmFsdWUgfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cInt7IGZpZWxkLnZhbHVlIH19XCI+e3sgZmllbGQuZm9ybWF0dGVkVmFsdWUgfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vdExpbmtCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lkXT1cImZpZWxkLmtleVwiIGNsYXNzPVwiYm9keS1zbSBwZXBwZXJpLXJlcG9ydC1pbnB1dCByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cInt7IGZpZWxkLmZvcm1hdHRlZFZhbHVlIH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgY29sb3I6IGZpZWxkLnRleHRDb2xvciB9XCI+e3sgZmllbGQuZm9ybWF0dGVkVmFsdWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2VtcHR5QmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=