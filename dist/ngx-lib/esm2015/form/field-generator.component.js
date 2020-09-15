import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@pepperi-addons/ngx-lib/address";
import * as i4 from "@pepperi-addons/ngx-lib/attachment";
import * as i5 from "@pepperi-addons/ngx-lib/checkbox";
import * as i6 from "@pepperi-addons/ngx-lib/date";
import * as i7 from "@pepperi-addons/ngx-lib/images-filmstrip";
import * as i8 from "@pepperi-addons/ngx-lib/image";
import * as i9 from "@pepperi-addons/ngx-lib/internal-button";
import * as i10 from "@pepperi-addons/ngx-lib/menu";
import * as i11 from "@pepperi-addons/ngx-lib/quantity-selector";
import * as i12 from "@pepperi-addons/ngx-lib/rich-html-textarea";
import * as i13 from "@pepperi-addons/ngx-lib/select";
import * as i14 from "@pepperi-addons/ngx-lib/separator";
import * as i15 from "@pepperi-addons/ngx-lib/signature";
import * as i16 from "@pepperi-addons/ngx-lib/textarea";
import * as i17 from "@pepperi-addons/ngx-lib/textbox";
import * as i18 from "./indicators.component";
import * as i19 from "./internal-page.component";
function PepperiFieldGeneratorComponent_pep_address_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-address", 19);
    i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_address_1_Template_pep_address_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onValueChanged($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("form", ctx_r0.form)("key", ctx_r0.field.key)("formattedValue", ctx_r0.field.formattedValue)("label", ctx_r0.field.label)("required", ctx_r0.field.required)("disabled", ctx_r0.field.disabled)("readonly", ctx_r0.field.readonly)("xAlignment", ctx_r0.field.xAlignment)("rowSpan", ctx_r0.field.rowSpan)("groupFields", ctx_r0.field.groupFields)("layoutType", ctx_r0.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_attachment_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-attachment", 20);
    i0.ɵɵlistener("elementClicked", function PepperiFieldGeneratorComponent_pep_attachment_2_Template_pep_attachment_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onClick($event); })("valueChanged", function PepperiFieldGeneratorComponent_pep_attachment_2_Template_pep_attachment_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.onValueChanged($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("form", ctx_r1.form)("key", ctx_r1.field.key)("src", ctx_r1.field.value)("label", ctx_r1.field.label)("required", ctx_r1.field.required)("disabled", ctx_r1.field.disabled)("readonly", ctx_r1.field.readonly)("xAlignment", ctx_r1.field.xAlignment)("rowSpan", ctx_r1.field.rowSpan)("isActive", ctx_r1.isActive)("showTitle", ctx_r1.showTitle)("layoutType", ctx_r1.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_checkbox_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-checkbox", 21);
    i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_checkbox_3_Template_pep_checkbox_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onValueChanged($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("form", ctx_r2.form)("key", ctx_r2.field.key)("value", ctx_r2.field.value)("label", ctx_r2.field.label)("type", ctx_r2.field.type)("required", ctx_r2.field.required)("disabled", ctx_r2.field.disabled)("readonly", ctx_r2.field.readonly)("xAlignment", ctx_r2.field.xAlignment)("rowSpan", ctx_r2.field.rowSpan)("additionalValue", ctx_r2.field.additionalValue)("showTitle", ctx_r2.showTitle)("layoutType", ctx_r2.layoutType)("isActive", ctx_r2.isActive);
} }
function PepperiFieldGeneratorComponent_pep_date_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-date", 22);
    i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_date_4_Template_pep_date_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.onValueChanged($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("form", ctx_r3.form)("key", ctx_r3.field.key)("value", ctx_r3.field.value)("formattedValue", ctx_r3.field.formattedValue)("label", ctx_r3.field.label)("type", ctx_r3.field.type)("required", ctx_r3.field.required)("disabled", ctx_r3.field.disabled)("readonly", ctx_r3.field.readonly)("textColor", ctx_r3.field.textColor)("xAlignment", ctx_r3.field.xAlignment)("rowSpan", ctx_r3.field.rowSpan)("minValue", ctx_r3.field.minValue)("maxValue", ctx_r3.field.maxValue)("showTitle", ctx_r3.showTitle)("layoutType", ctx_r3.layoutType)("isActive", ctx_r3.isActive);
} }
function PepperiFieldGeneratorComponent_pep_images_filmstrip_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-images-filmstrip", 23);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("objectId", ctx_r4.objectId)("form", ctx_r4.form)("key", ctx_r4.field.key)("label", ctx_r4.field.label)("showTitle", ctx_r4.showTitle)("value", ctx_r4.field.value)("layoutType", ctx_r4.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_image_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-image", 24);
    i0.ɵɵlistener("elementClicked", function PepperiFieldGeneratorComponent_pep_image_6_Template_pep_image_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.onClick($event); })("valueChanged", function PepperiFieldGeneratorComponent_pep_image_6_Template_pep_image_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.onValueChanged($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("objectId", ctx_r5.objectId)("form", ctx_r5.form)("key", ctx_r5.field.key)("src", ctx_r5.field.formattedValue)("srcLarge", ctx_r5.field.value)("options", ctx_r5.field.options)("label", ctx_r5.field.label)("type", ctx_r5.field.type)("required", ctx_r5.field.required)("disabled", ctx_r5.field.disabled)("readonly", ctx_r5.field.readonly)("xAlignment", ctx_r5.field.xAlignment)("rowSpan", ctx_r5.field.rowSpan)("indicatorsField", ctx_r5.field.indicatorsField)("menuField", ctx_r5.field.menuField)("hasCampaignField", ctx_r5.field.hasCampaignField)("sizeLimitMB", ctx_r5.field.sizeLimitMB)("isActive", ctx_r5.isActive)("layoutType", ctx_r5.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_internal_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-internal-button", 25);
    i0.ɵɵlistener("elementClicked", function PepperiFieldGeneratorComponent_pep_internal_button_7_Template_pep_internal_button_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.onClick($event); })("valueChanged", function PepperiFieldGeneratorComponent_pep_internal_button_7_Template_pep_internal_button_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.onValueChanged($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("form", ctx_r6.form)("key", ctx_r6.field.key)("value", ctx_r6.field.value)("formattedValue", ctx_r6.field.formattedValue)("label", ctx_r6.field.label)("referenceObjectInternalType", ctx_r6.field.referenceObjectInternalType)("type", ctx_r6.field.type)("disabled", ctx_r6.field.disabled)("readonly", ctx_r6.field.readonly)("xAlignment", ctx_r6.field.xAlignment)("layoutType", ctx_r6.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_menu_8_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-menu", 26);
    i0.ɵɵlistener("elementClicked", function PepperiFieldGeneratorComponent_pep_menu_8_Template_pep_menu_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.onClick($event); })("notifyMenuItemClicked", function PepperiFieldGeneratorComponent_pep_menu_8_Template_pep_menu_notifyMenuItemClicked_0_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.onMenuItemClicked($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("key", ctx_r7.field.key)("label", ctx_r7.field.label)("disabled", ctx_r7.field.disabled)("xAlignment", ctx_r7.field.xAlignment)("options", ctx_r7.field.options)("layoutType", ctx_r7.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-quantity-selector", 27);
    i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template_pep_quantity_selector_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.onValueChanged($event); })("formValidationChanged", function PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template_pep_quantity_selector_formValidationChanged_0_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.onFormValidationChanged($event); })("elementClicked", function PepperiFieldGeneratorComponent_pep_quantity_selector_9_Template_pep_quantity_selector_elementClicked_0_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.onClick($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("form", ctx_r8.form)("key", ctx_r8.field.key)("value", ctx_r8.field.value)("formattedValue", ctx_r8.field.formattedValue)("label", ctx_r8.field.label)("type", ctx_r8.field.type)("required", ctx_r8.field.required)("disabled", ctx_r8.field.disabled)("readonly", ctx_r8.field.readonly)("textColor", ctx_r8.field.textColor)("xAlignment", ctx_r8.field.xAlignment)("rowSpan", ctx_r8.field.rowSpan)("lastFocusField", ctx_r8.field.lastFocusField)("alowDecimal", ctx_r8.field.alowDecimal)("additionalValue", ctx_r8.field.additionalValue)("notificationInfo", ctx_r8.field.notificationInfo)("isActive", ctx_r8.isActive)("layoutType", ctx_r8.layoutType)("showTitle", ctx_r8.showTitle);
} }
function PepperiFieldGeneratorComponent_pep_rich_html_textarea_10_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-rich-html-textarea", 28);
    i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_rich_html_textarea_10_Template_pep_rich_html_textarea_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.onValueChanged($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("form", ctx_r9.form)("key", ctx_r9.field.key)("value", ctx_r9.field.value)("label", ctx_r9.field.label)("required", ctx_r9.field.required)("disabled", ctx_r9.field.disabled)("readonly", ctx_r9.field.readonly)("maxFieldCharacters", ctx_r9.field.maxFieldCharacters)("xAlignment", ctx_r9.field.xAlignment)("rowSpan", ctx_r9.field.rowSpan)("showTitle", ctx_r9.showTitle)("layoutType", ctx_r9.layoutType)("isActive", ctx_r9.isActive);
} }
function PepperiFieldGeneratorComponent_pep_select_11_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-select", 29);
    i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_select_11_Template_pep_select_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.onValueChanged($event); })("formValidationChanged", function PepperiFieldGeneratorComponent_pep_select_11_Template_pep_select_formValidationChanged_0_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.onFormValidationChanged($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵproperty("form", ctx_r10.form)("key", ctx_r10.field.key)("value", ctx_r10.field.value)("formattedValue", ctx_r10.field.formattedValue)("label", ctx_r10.field.label)("type", ctx_r10.field.type)("required", ctx_r10.field.required)("disabled", ctx_r10.field.disabled)("readonly", ctx_r10.field.readonly)("xAlignment", ctx_r10.field.xAlignment)("rowSpan", ctx_r10.field.rowSpan)("options", ctx_r10.field.options)("showTitle", ctx_r10.showTitle)("layoutType", ctx_r10.layoutType)("isActive", ctx_r10.isActive);
} }
function PepperiFieldGeneratorComponent_pep_separator_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-separator", 30);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("form", ctx_r11.form)("key", ctx_r11.field.key)("label", ctx_r11.field.label)("xAlignment", ctx_r11.field.xAlignment)("layoutType", ctx_r11.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_signature_13_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-signature", 31);
    i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_signature_13_Template_pep_signature_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.onValueChanged($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵproperty("form", ctx_r12.form)("key", ctx_r12.field.key)("src", ctx_r12.field.value)("label", ctx_r12.field.label)("required", ctx_r12.field.required)("disabled", ctx_r12.field.disabled)("readonly", ctx_r12.field.readonly)("xAlignment", ctx_r12.field.xAlignment)("rowSpan", ctx_r12.field.rowSpan)("isActive", ctx_r12.isActive)("layoutType", ctx_r12.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_textarea_14_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-textarea", 32);
    i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_textarea_14_Template_pep_textarea_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(); return ctx_r47.onValueChanged($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵproperty("form", ctx_r13.form)("key", ctx_r13.field.key)("value", ctx_r13.field.value)("label", ctx_r13.field.label)("required", ctx_r13.field.required)("disabled", ctx_r13.field.disabled)("readonly", ctx_r13.field.readonly)("maxFieldCharacters", ctx_r13.field.maxFieldCharacters)("textColor", ctx_r13.field.textColor)("xAlignment", ctx_r13.field.xAlignment)("rowSpan", ctx_r13.field.rowSpan)("lastFocusField", ctx_r13.field.lastFocusField)("showTitle", ctx_r13.showTitle)("layoutType", ctx_r13.layoutType)("isActive", ctx_r13.isActive);
} }
function PepperiFieldGeneratorComponent_pep_textbox_15_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-textbox", 33);
    i0.ɵɵlistener("valueChanged", function PepperiFieldGeneratorComponent_pep_textbox_15_Template_pep_textbox_valueChanged_0_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.onValueChanged($event); })("formValidationChanged", function PepperiFieldGeneratorComponent_pep_textbox_15_Template_pep_textbox_formValidationChanged_0_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r51 = i0.ɵɵnextContext(); return ctx_r51.onFormValidationChanged($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵproperty("form", ctx_r14.form)("key", ctx_r14.field.key)("value", ctx_r14.field.value)("formattedValue", ctx_r14.field.formattedValue)("label", ctx_r14.field.label)("placeholder", ctx_r14.field.placeholder)("type", ctx_r14.field.type)("required", ctx_r14.field.required)("disabled", ctx_r14.field.disabled)("readonly", ctx_r14.field.readonly)("maxFieldCharacters", ctx_r14.field.maxFieldCharacters)("textColor", ctx_r14.field.textColor)("xAlignment", ctx_r14.field.xAlignment)("rowSpan", ctx_r14.field.rowSpan)("lastFocusField", ctx_r14.field.lastFocusField)("showTitle", ctx_r14.showTitle)("layoutType", ctx_r14.layoutType)("isActive", ctx_r14.isActive);
} }
function PepperiFieldGeneratorComponent_pep_indicators_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pep-indicators", 34);
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵproperty("key", ctx_r15.field.key)("value", ctx_r15.field.value)("layoutType", ctx_r15.layoutType);
} }
function PepperiFieldGeneratorComponent_pep_internal_page_17_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pep-internal-page", 35);
    i0.ɵɵlistener("childClicked", function PepperiFieldGeneratorComponent_pep_internal_page_17_Template_pep_internal_page_childClicked_0_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(); return ctx_r52.onChildClick($event); })("childChanged", function PepperiFieldGeneratorComponent_pep_internal_page_17_Template_pep_internal_page_childChanged_0_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r54 = i0.ɵɵnextContext(); return ctx_r54.onChildChanged($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hasHeightLimit", ctx_r16.hasHeightLimit)("field", ctx_r16.field)("layoutType", ctx_r16.layoutType);
} }
function PepperiFieldGeneratorComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
export class PepperiFieldGeneratorComponent {
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
PepperiFieldGeneratorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiFieldGeneratorComponent, selectors: [["pep-field-generator"]], inputs: { field: "field", hasHeightLimit: "hasHeightLimit", isActive: "isActive", objectId: "objectId", form: "form", layoutType: "layoutType", showTitle: "showTitle", checkForChanges: "checkForChanges" }, outputs: { valueChanged: "valueChanged", childChanged: "childChanged", formValidationChanged: "formValidationChanged", elementClicked: "elementClicked", notifyMenuItemClicked: "notifyMenuItemClicked", notifyChildClicked: "notifyChildClicked" }, features: [i0.ɵɵNgOnChangesFeature], decls: 19, vars: 20, consts: [[3, "ngSwitch", "formGroup"], [3, "form", "key", "formattedValue", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "groupFields", "layoutType", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "isActive", "showTitle", "layoutType", "elementClicked", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "additionalValue", "showTitle", "layoutType", "isActive", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "minValue", "maxValue", "showTitle", "layoutType", "isActive", "valueChanged", 4, "ngSwitchCase"], [3, "objectId", "form", "key", "label", "showTitle", "value", "layoutType", 4, "ngSwitchCase"], [3, "objectId", "form", "key", "src", "srcLarge", "options", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "indicatorsField", "menuField", "hasCampaignField", "sizeLimitMB", "isActive", "layoutType", "elementClicked", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "referenceObjectInternalType", "type", "disabled", "readonly", "xAlignment", "layoutType", "elementClicked", "valueChanged", 4, "ngSwitchCase"], [3, "key", "label", "disabled", "xAlignment", "options", "layoutType", "elementClicked", "notifyMenuItemClicked", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "lastFocusField", "alowDecimal", "additionalValue", "notificationInfo", "isActive", "layoutType", "showTitle", "valueChanged", "formValidationChanged", "elementClicked", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "xAlignment", "rowSpan", "showTitle", "layoutType", "isActive", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "options", "showTitle", "layoutType", "isActive", "valueChanged", "formValidationChanged", 4, "ngSwitchCase"], [3, "form", "key", "label", "xAlignment", "layoutType", 4, "ngSwitchCase"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "isActive", "layoutType", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "lastFocusField", "showTitle", "layoutType", "isActive", "valueChanged", 4, "ngSwitchCase"], [3, "form", "key", "value", "formattedValue", "label", "placeholder", "type", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "lastFocusField", "showTitle", "layoutType", "isActive", "valueChanged", "formValidationChanged", 4, "ngSwitchCase"], [3, "key", "value", "layoutType", 4, "ngSwitchCase"], [3, "hasHeightLimit", "field", "layoutType", "childClicked", "childChanged", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "form", "key", "formattedValue", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "groupFields", "layoutType", "valueChanged"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "isActive", "showTitle", "layoutType", "elementClicked", "valueChanged"], [3, "form", "key", "value", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "additionalValue", "showTitle", "layoutType", "isActive", "valueChanged"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "minValue", "maxValue", "showTitle", "layoutType", "isActive", "valueChanged"], [3, "objectId", "form", "key", "label", "showTitle", "value", "layoutType"], [3, "objectId", "form", "key", "src", "srcLarge", "options", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "indicatorsField", "menuField", "hasCampaignField", "sizeLimitMB", "isActive", "layoutType", "elementClicked", "valueChanged"], [3, "form", "key", "value", "formattedValue", "label", "referenceObjectInternalType", "type", "disabled", "readonly", "xAlignment", "layoutType", "elementClicked", "valueChanged"], [3, "key", "label", "disabled", "xAlignment", "options", "layoutType", "elementClicked", "notifyMenuItemClicked"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "textColor", "xAlignment", "rowSpan", "lastFocusField", "alowDecimal", "additionalValue", "notificationInfo", "isActive", "layoutType", "showTitle", "valueChanged", "formValidationChanged", "elementClicked"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "xAlignment", "rowSpan", "showTitle", "layoutType", "isActive", "valueChanged"], [3, "form", "key", "value", "formattedValue", "label", "type", "required", "disabled", "readonly", "xAlignment", "rowSpan", "options", "showTitle", "layoutType", "isActive", "valueChanged", "formValidationChanged"], [3, "form", "key", "label", "xAlignment", "layoutType"], [3, "form", "key", "src", "label", "required", "disabled", "readonly", "xAlignment", "rowSpan", "isActive", "layoutType", "valueChanged"], [3, "form", "key", "value", "label", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "lastFocusField", "showTitle", "layoutType", "isActive", "valueChanged"], [3, "form", "key", "value", "formattedValue", "label", "placeholder", "type", "required", "disabled", "readonly", "maxFieldCharacters", "textColor", "xAlignment", "rowSpan", "lastFocusField", "showTitle", "layoutType", "isActive", "valueChanged", "formValidationChanged"], [3, "key", "value", "layoutType"], [3, "hasHeightLimit", "field", "layoutType", "childClicked", "childChanged"]], template: function PepperiFieldGeneratorComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, directives: [i1.NgSwitch, i2.NgControlStatusGroup, i2.FormGroupDirective, i1.NgSwitchCase, i3.PepperiAddressComponent, i4.PepperiAttachmentComponent, i5.PepperiCheckboxComponent, i6.PepperiDateComponent, i7.PepperiImagesFilmstripComponent, i8.PepperiImageComponent, i9.PepperiInternalButtonComponent, i10.PepperiMenuComponent, i11.PepperiQuantitySelectorComponent, i12.PepperiRichHtmlTextareaComponent, i13.PepperiSelectComponent, i14.PepperiSeparatorComponent, i15.PepperiSignatureComponent, i16.PepperiTextareaComponent, i17.PepperiTextboxComponent, i18.PepperiIndicatorsComponent, i19.PepperiInternalPageComponent], styles: ["[_nghost-%COMP%]{height:100%;width:100%}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiFieldGeneratorComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZ2VuZXJhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvZm9ybS9maWVsZC1nZW5lcmF0b3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9mb3JtL2ZpZWxkLWdlbmVyYXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFhLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUNqRCxpQkFBaUIsRUFBRSx1QkFBdUIsRUFDN0MsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0hsRCx1Q0FJYztJQURnQixnUEFBdUM7SUFDckUsaUJBQWM7OztJQUp5QixrQ0FBYSx5QkFBQSwrQ0FBQSw2QkFBQSxtQ0FBQSxtQ0FBQSxtQ0FBQSx1Q0FBQSxpQ0FBQSx5Q0FBQSxpQ0FBQTs7OztJQU1wRCwwQ0FJaUI7SUFEYSxtUEFBa0MseU9BQUE7SUFDaEUsaUJBQWlCOzs7SUFKNEIsa0NBQWEseUJBQUEsMkJBQUEsNkJBQUEsbUNBQUEsbUNBQUEsbUNBQUEsdUNBQUEsaUNBQUEsNkJBQUEsK0JBQUEsaUNBQUE7Ozs7SUFNMUQsd0NBSWU7SUFEdUMsa1BBQXVDO0lBQzdGLGlCQUFlOzs7SUFKMEIsa0NBQWEseUJBQUEsNkJBQUEsNkJBQUEsMkJBQUEsbUNBQUEsbUNBQUEsbUNBQUEsdUNBQUEsaUNBQUEsaURBQUEsK0JBQUEsaUNBQUEsNkJBQUE7Ozs7SUFNdEQsb0NBTVc7SUFEUCwwT0FBdUM7SUFDM0MsaUJBQVc7OztJQU5zQixrQ0FBYSx5QkFBQSw2QkFBQSwrQ0FBQSw2QkFBQSwyQkFBQSxtQ0FBQSxtQ0FBQSxtQ0FBQSxxQ0FBQSx1Q0FBQSxpQ0FBQSxtQ0FBQSxtQ0FBQSwrQkFB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LFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTtnQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7c0NBRVksS0FBSztrQkFBYixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFFRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0ksWUFBWTtrQkFBckIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxxQkFBcUI7a0JBQTlCLE1BQU07WUFDRyxjQUFjO2tCQUF2QixNQUFNO1lBQ0cscUJBQXFCO2tCQUE5QixNQUFNO1lBQ0csa0JBQWtCO2tCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCwgT25DaGFuZ2VzLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IExBWU9VVF9UWVBFIH0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BlcC1maWVsZC1nZW5lcmF0b3InLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ZpZWxkLWdlbmVyYXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9maWVsZC1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlGaWVsZEdlbmVyYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIGZpZWxkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBoYXNIZWlnaHRMaW1pdCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIG9iamVjdElkOiBhbnkgPSBudWxsO1xyXG4gICAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgbGF5b3V0VHlwZTogTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRS5QZXBwZXJpRm9ybTtcclxuICAgIEBJbnB1dCgpIHNob3dUaXRsZSA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgY2hlY2tGb3JDaGFuZ2VzOiBhbnkgPSBudWxsO1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBjaGlsZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgZm9ybVZhbGlkYXRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgICBAT3V0cHV0KCkgZWxlbWVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5TWVudUl0ZW1DbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIG5vdGlmeUNoaWxkQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBnZXQgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5maWVsZC5yZWFkb25seSB8fCB0aGlzLmZpZWxkLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Db250cm9sID0gdGhpcy5mb3JtICYmIHRoaXMuZm9ybS5nZXQodGhpcy5maWVsZC5rZXkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm1Db250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybUNvbnRyb2wudmFsaWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzVG91Y2hlZCgpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBmb3JtQ29udHJvbCA9IHRoaXMuZm9ybSAmJiB0aGlzLmZvcm0uZ2V0KHRoaXMuZmllbGQua2V5KTtcclxuICAgICAgICByZXR1cm4gZm9ybUNvbnRyb2wgPyBmb3JtQ29udHJvbC50b3VjaGVkIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzRGlydHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZm9ybUNvbnRyb2wgPSB0aGlzLmZvcm0gJiYgdGhpcy5mb3JtLmdldCh0aGlzLmZpZWxkLmtleSk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1Db250cm9sID8gZm9ybUNvbnRyb2wuZGlydHkgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlQ2hhbmdlZCkgeyB0aGlzLnZhbHVlQ2hhbmdlZC51bnN1YnNjcmliZSgpOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvcm1WYWxpZGF0aW9uQ2hhbmdlZCkgeyB0aGlzLmZvcm1WYWxpZGF0aW9uQ2hhbmdlZC51bnN1YnNjcmliZSgpOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkQ2hhbmdlZCkgeyB0aGlzLmNoaWxkQ2hhbmdlZC51bnN1YnNjcmliZSgpOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRDbGlja2VkKSB7IHRoaXMuZWxlbWVudENsaWNrZWQudW5zdWJzY3JpYmUoKTsgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ub3RpZnlNZW51SXRlbUNsaWNrZWQpIHsgdGhpcy5ub3RpZnlNZW51SXRlbUNsaWNrZWQudW5zdWJzY3JpYmUoKTsgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ub3RpZnlDaGlsZENsaWNrZWQpIHsgdGhpcy5ub3RpZnlDaGlsZENsaWNrZWQudW5zdWJzY3JpYmUoKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVmFsdWVDaGFuZ2VkKHZhbHVlQ2hhbmdlZDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh2YWx1ZUNoYW5nZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hpbGRDaGFuZ2VkKGNoaWxkQ2hhbmdlZDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jaGlsZENoYW5nZWQuZW1pdChjaGlsZENoYW5nZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRm9ybVZhbGlkYXRpb25DaGFuZ2VkKGZvcm1WYWxpZGF0aW9uQ2hhbmdlZDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5mb3JtVmFsaWRhdGlvbkNoYW5nZWQuZW1pdChmb3JtVmFsaWRhdGlvbkNoYW5nZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZmllbGRDbGlja2VkOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRDbGlja2VkLmVtaXQoZmllbGRDbGlja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1lbnVJdGVtQ2xpY2tlZChmaWVsZFRvRWRpdDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlNZW51SXRlbUNsaWNrZWQuZW1pdChmaWVsZFRvRWRpdCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGlsZENsaWNrKGNoaWxkQ2xpY2tlZDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlDaGlsZENsaWNrZWQuZW1pdChjaGlsZENsaWNrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSBpdCBvbmx5IGZvciB0ZXN0aW5nLlxyXG4gICAgICAgIC8vIHRoaXMuZmllbGQuZGlzYWJsZWQgPSB0aGlzLmZpZWxkLnJlYWRvbmx5ID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZmllbGQuY29udHJvbFR5cGVcIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuXHJcbiAgICA8cGVwLWFkZHJlc3MgKm5nU3dpdGNoQ2FzZT1cIidhZGRyZXNzJ1wiIFtmb3JtXT1cImZvcm1cIiBba2V5XT1cImZpZWxkLmtleVwiIFtmb3JtYXR0ZWRWYWx1ZV09XCJmaWVsZC5mb3JtYXR0ZWRWYWx1ZVwiXHJcbiAgICAgICAgW2xhYmVsXT1cImZpZWxkLmxhYmVsXCIgW3JlcXVpcmVkXT1cImZpZWxkLnJlcXVpcmVkXCIgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCIgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCJcclxuICAgICAgICBbeEFsaWdubWVudF09XCJmaWVsZC54QWxpZ25tZW50XCIgW3Jvd1NwYW5dPVwiZmllbGQucm93U3BhblwiIFtncm91cEZpZWxkc109XCJmaWVsZC5ncm91cEZpZWxkc1wiXHJcbiAgICAgICAgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiICh2YWx1ZUNoYW5nZWQpPVwib25WYWx1ZUNoYW5nZWQoJGV2ZW50KVwiPlxyXG4gICAgPC9wZXAtYWRkcmVzcz5cclxuXHJcbiAgICA8cGVwLWF0dGFjaG1lbnQgKm5nU3dpdGNoQ2FzZT1cIidhdHRhY2htZW50J1wiIFtmb3JtXT1cImZvcm1cIiBba2V5XT1cImZpZWxkLmtleVwiIFtzcmNdPVwiZmllbGQudmFsdWVcIlxyXG4gICAgICAgIFtsYWJlbF09XCJmaWVsZC5sYWJlbFwiIFtyZXF1aXJlZF09XCJmaWVsZC5yZXF1aXJlZFwiIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgW3hBbGlnbm1lbnRdPVwiZmllbGQueEFsaWdubWVudFwiIFtyb3dTcGFuXT1cImZpZWxkLnJvd1NwYW5cIiBbaXNBY3RpdmVdPVwiaXNBY3RpdmVcIiBbc2hvd1RpdGxlXT1cInNob3dUaXRsZVwiXHJcbiAgICAgICAgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiIChlbGVtZW50Q2xpY2tlZCk9XCJvbkNsaWNrKCRldmVudClcIiAodmFsdWVDaGFuZ2VkKT1cIm9uVmFsdWVDaGFuZ2VkKCRldmVudClcIj5cclxuICAgIDwvcGVwLWF0dGFjaG1lbnQ+XHJcblxyXG4gICAgPHBlcC1jaGVja2JveCAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIFtmb3JtXT1cImZvcm1cIiBba2V5XT1cImZpZWxkLmtleVwiIFt2YWx1ZV09XCJmaWVsZC52YWx1ZVwiIFtsYWJlbF09XCJmaWVsZC5sYWJlbFwiXHJcbiAgICAgICAgW3R5cGVdPVwiZmllbGQudHlwZVwiIFtyZXF1aXJlZF09XCJmaWVsZC5yZXF1aXJlZFwiIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgW3hBbGlnbm1lbnRdPVwiZmllbGQueEFsaWdubWVudFwiIFtyb3dTcGFuXT1cImZpZWxkLnJvd1NwYW5cIiBbYWRkaXRpb25hbFZhbHVlXT1cImZpZWxkLmFkZGl0aW9uYWxWYWx1ZVwiXHJcbiAgICAgICAgW3Nob3dUaXRsZV09XCJzaG93VGl0bGVcIiBbbGF5b3V0VHlwZV09XCJsYXlvdXRUeXBlXCIgKHZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlZCgkZXZlbnQpXCIgW2lzQWN0aXZlXT1cImlzQWN0aXZlXCI+XHJcbiAgICA8L3BlcC1jaGVja2JveD5cclxuXHJcbiAgICA8cGVwLWRhdGUgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiIFtmb3JtXT1cImZvcm1cIiBba2V5XT1cImZpZWxkLmtleVwiIFt2YWx1ZV09XCJmaWVsZC52YWx1ZVwiXHJcbiAgICAgICAgW2Zvcm1hdHRlZFZhbHVlXT1cImZpZWxkLmZvcm1hdHRlZFZhbHVlXCIgW2xhYmVsXT1cImZpZWxkLmxhYmVsXCIgW3R5cGVdPVwiZmllbGQudHlwZVwiIFtyZXF1aXJlZF09XCJmaWVsZC5yZXF1aXJlZFwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCIgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCIgW3RleHRDb2xvcl09XCJmaWVsZC50ZXh0Q29sb3JcIlxyXG4gICAgICAgIFt4QWxpZ25tZW50XT1cImZpZWxkLnhBbGlnbm1lbnRcIiBbcm93U3Bhbl09XCJmaWVsZC5yb3dTcGFuXCIgW21pblZhbHVlXT1cImZpZWxkLm1pblZhbHVlXCJcclxuICAgICAgICBbbWF4VmFsdWVdPVwiZmllbGQubWF4VmFsdWVcIiBbc2hvd1RpdGxlXT1cInNob3dUaXRsZVwiIFtsYXlvdXRUeXBlXT1cImxheW91dFR5cGVcIlxyXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwib25WYWx1ZUNoYW5nZWQoJGV2ZW50KVwiIFtpc0FjdGl2ZV09XCJpc0FjdGl2ZVwiPlxyXG4gICAgPC9wZXAtZGF0ZT5cclxuXHJcbiAgICA8cGVwLWltYWdlcy1maWxtc3RyaXAgKm5nU3dpdGNoQ2FzZT1cIidpbWFnZXMnXCIgW29iamVjdElkXT1cIm9iamVjdElkXCIgW2Zvcm1dPVwiZm9ybVwiIFtrZXldPVwiZmllbGQua2V5XCJcclxuICAgICAgICBbbGFiZWxdPVwiZmllbGQubGFiZWxcIiBbc2hvd1RpdGxlXT1cInNob3dUaXRsZVwiIFt2YWx1ZV09XCJmaWVsZC52YWx1ZVwiIFtsYXlvdXRUeXBlXT1cImxheW91dFR5cGVcIj5cclxuICAgIDwvcGVwLWltYWdlcy1maWxtc3RyaXA+XHJcblxyXG4gICAgPHBlcC1pbWFnZSAqbmdTd2l0Y2hDYXNlPVwiJ2ltYWdlJ1wiIFtvYmplY3RJZF09XCJvYmplY3RJZFwiIFtmb3JtXT1cImZvcm1cIiBba2V5XT1cImZpZWxkLmtleVwiXHJcbiAgICAgICAgW3NyY109XCJmaWVsZC5mb3JtYXR0ZWRWYWx1ZVwiIFtzcmNMYXJnZV09XCJmaWVsZC52YWx1ZVwiIFtvcHRpb25zXT1cImZpZWxkLm9wdGlvbnNcIiBbbGFiZWxdPVwiZmllbGQubGFiZWxcIlxyXG4gICAgICAgIFt0eXBlXT1cImZpZWxkLnR5cGVcIiBbcmVxdWlyZWRdPVwiZmllbGQucmVxdWlyZWRcIiBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIiBbcmVhZG9ubHldPVwiZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgIFt4QWxpZ25tZW50XT1cImZpZWxkLnhBbGlnbm1lbnRcIiBbcm93U3Bhbl09XCJmaWVsZC5yb3dTcGFuXCIgW2luZGljYXRvcnNGaWVsZF09XCJmaWVsZC5pbmRpY2F0b3JzRmllbGRcIlxyXG4gICAgICAgIFttZW51RmllbGRdPVwiZmllbGQubWVudUZpZWxkXCIgW2hhc0NhbXBhaWduRmllbGRdPVwiZmllbGQuaGFzQ2FtcGFpZ25GaWVsZFwiIFtzaXplTGltaXRNQl09XCJmaWVsZC5zaXplTGltaXRNQlwiXHJcbiAgICAgICAgW2lzQWN0aXZlXT1cImlzQWN0aXZlXCIgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiIChlbGVtZW50Q2xpY2tlZCk9XCJvbkNsaWNrKCRldmVudClcIlxyXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwib25WYWx1ZUNoYW5nZWQoJGV2ZW50KVwiPlxyXG4gICAgPC9wZXAtaW1hZ2U+XHJcblxyXG4gICAgPHBlcC1pbnRlcm5hbC1idXR0b24gKm5nU3dpdGNoQ2FzZT1cIididXR0b24nXCIgW2Zvcm1dPVwiZm9ybVwiIFtrZXldPVwiZmllbGQua2V5XCIgW3ZhbHVlXT1cImZpZWxkLnZhbHVlXCJcclxuICAgICAgICBbZm9ybWF0dGVkVmFsdWVdPVwiZmllbGQuZm9ybWF0dGVkVmFsdWVcIiBbbGFiZWxdPVwiZmllbGQubGFiZWxcIlxyXG4gICAgICAgIFtyZWZlcmVuY2VPYmplY3RJbnRlcm5hbFR5cGVdPVwiZmllbGQucmVmZXJlbmNlT2JqZWN0SW50ZXJuYWxUeXBlXCIgW3R5cGVdPVwiZmllbGQudHlwZVwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCIgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCIgW3hBbGlnbm1lbnRdPVwiZmllbGQueEFsaWdubWVudFwiXHJcbiAgICAgICAgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiIChlbGVtZW50Q2xpY2tlZCk9XCJvbkNsaWNrKCRldmVudClcIiAodmFsdWVDaGFuZ2VkKT1cIm9uVmFsdWVDaGFuZ2VkKCRldmVudClcIj5cclxuICAgIDwvcGVwLWludGVybmFsLWJ1dHRvbj5cclxuXHJcbiAgICA8IS0tIFtoYXNTdWJNZW51XT1cImZpZWxkLmhhc1N1Yk1lbnVcIiAtLT5cclxuICAgIDxwZXAtbWVudSAqbmdTd2l0Y2hDYXNlPVwiJ21lbnUnXCIgW2tleV09XCJmaWVsZC5rZXlcIiBbbGFiZWxdPVwiZmllbGQubGFiZWxcIiBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgIFt4QWxpZ25tZW50XT1cImZpZWxkLnhBbGlnbm1lbnRcIiBbb3B0aW9uc109XCJmaWVsZC5vcHRpb25zXCIgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiXHJcbiAgICAgICAgKGVsZW1lbnRDbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiIChub3RpZnlNZW51SXRlbUNsaWNrZWQpPVwib25NZW51SXRlbUNsaWNrZWQoJGV2ZW50KVwiPlxyXG4gICAgPC9wZXAtbWVudT5cclxuXHJcbiAgICA8cGVwLXF1YW50aXR5LXNlbGVjdG9yICpuZ1N3aXRjaENhc2U9XCIncXMnXCIgW2Zvcm1dPVwiZm9ybVwiIFtrZXldPVwiZmllbGQua2V5XCIgW3ZhbHVlXT1cImZpZWxkLnZhbHVlXCJcclxuICAgICAgICBbZm9ybWF0dGVkVmFsdWVdPVwiZmllbGQuZm9ybWF0dGVkVmFsdWVcIiBbbGFiZWxdPVwiZmllbGQubGFiZWxcIiBbdHlwZV09XCJmaWVsZC50eXBlXCIgW3JlcXVpcmVkXT1cImZpZWxkLnJlcXVpcmVkXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIiBbcmVhZG9ubHldPVwiZmllbGQucmVhZG9ubHlcIiBbdGV4dENvbG9yXT1cImZpZWxkLnRleHRDb2xvclwiXHJcbiAgICAgICAgW3hBbGlnbm1lbnRdPVwiZmllbGQueEFsaWdubWVudFwiIFtyb3dTcGFuXT1cImZpZWxkLnJvd1NwYW5cIiBbbGFzdEZvY3VzRmllbGRdPVwiZmllbGQubGFzdEZvY3VzRmllbGRcIlxyXG4gICAgICAgIFthbG93RGVjaW1hbF09XCJmaWVsZC5hbG93RGVjaW1hbFwiIFthZGRpdGlvbmFsVmFsdWVdPVwiZmllbGQuYWRkaXRpb25hbFZhbHVlXCJcclxuICAgICAgICBbbm90aWZpY2F0aW9uSW5mb109XCJmaWVsZC5ub3RpZmljYXRpb25JbmZvXCIgW2lzQWN0aXZlXT1cImlzQWN0aXZlXCIgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiXHJcbiAgICAgICAgW3Nob3dUaXRsZV09XCJzaG93VGl0bGVcIiAodmFsdWVDaGFuZ2VkKT1cIm9uVmFsdWVDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgIChmb3JtVmFsaWRhdGlvbkNoYW5nZWQpPVwib25Gb3JtVmFsaWRhdGlvbkNoYW5nZWQoJGV2ZW50KVwiIChlbGVtZW50Q2xpY2tlZCk9XCJvbkNsaWNrKCRldmVudClcIj5cclxuICAgIDwvcGVwLXF1YW50aXR5LXNlbGVjdG9yPlxyXG5cclxuICAgIDxwZXAtcmljaC1odG1sLXRleHRhcmVhICpuZ1N3aXRjaENhc2U9XCIncmljaGh0bWx0ZXh0YXJlYSdcIiBbZm9ybV09XCJmb3JtXCIgW2tleV09XCJmaWVsZC5rZXlcIiBbdmFsdWVdPVwiZmllbGQudmFsdWVcIlxyXG4gICAgICAgIFtsYWJlbF09XCJmaWVsZC5sYWJlbFwiIFtyZXF1aXJlZF09XCJmaWVsZC5yZXF1aXJlZFwiIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgW21heEZpZWxkQ2hhcmFjdGVyc109XCJmaWVsZC5tYXhGaWVsZENoYXJhY3RlcnNcIiBbeEFsaWdubWVudF09XCJmaWVsZC54QWxpZ25tZW50XCIgW3Jvd1NwYW5dPVwiZmllbGQucm93U3BhblwiXHJcbiAgICAgICAgW3Nob3dUaXRsZV09XCJzaG93VGl0bGVcIiBbbGF5b3V0VHlwZV09XCJsYXlvdXRUeXBlXCIgKHZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlZCgkZXZlbnQpXCIgW2lzQWN0aXZlXT1cImlzQWN0aXZlXCI+XHJcbiAgICA8L3BlcC1yaWNoLWh0bWwtdGV4dGFyZWE+XHJcblxyXG4gICAgPHBlcC1zZWxlY3QgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCIgW2Zvcm1dPVwiZm9ybVwiIFtrZXldPVwiZmllbGQua2V5XCIgW3ZhbHVlXT1cImZpZWxkLnZhbHVlXCJcclxuICAgICAgICBbZm9ybWF0dGVkVmFsdWVdPVwiZmllbGQuZm9ybWF0dGVkVmFsdWVcIiBbbGFiZWxdPVwiZmllbGQubGFiZWxcIiBbdHlwZV09XCJmaWVsZC50eXBlXCIgW3JlcXVpcmVkXT1cImZpZWxkLnJlcXVpcmVkXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIiBbcmVhZG9ubHldPVwiZmllbGQucmVhZG9ubHlcIiBbeEFsaWdubWVudF09XCJmaWVsZC54QWxpZ25tZW50XCJcclxuICAgICAgICBbcm93U3Bhbl09XCJmaWVsZC5yb3dTcGFuXCIgW29wdGlvbnNdPVwiZmllbGQub3B0aW9uc1wiIFtzaG93VGl0bGVdPVwic2hvd1RpdGxlXCIgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiXHJcbiAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlZCgkZXZlbnQpXCIgKGZvcm1WYWxpZGF0aW9uQ2hhbmdlZCk9XCJvbkZvcm1WYWxpZGF0aW9uQ2hhbmdlZCgkZXZlbnQpXCJcclxuICAgICAgICBbaXNBY3RpdmVdPVwiaXNBY3RpdmVcIj5cclxuICAgIDwvcGVwLXNlbGVjdD5cclxuXHJcbiAgICA8cGVwLXNlcGFyYXRvciAqbmdTd2l0Y2hDYXNlPVwiJ3NlcGFyYXRvcidcIiBbZm9ybV09XCJmb3JtXCIgW2tleV09XCJmaWVsZC5rZXlcIiBbbGFiZWxdPVwiZmllbGQubGFiZWxcIlxyXG4gICAgICAgIFt4QWxpZ25tZW50XT1cImZpZWxkLnhBbGlnbm1lbnRcIiBbbGF5b3V0VHlwZV09XCJsYXlvdXRUeXBlXCI+XHJcbiAgICA8L3BlcC1zZXBhcmF0b3I+XHJcblxyXG4gICAgPHBlcC1zaWduYXR1cmUgKm5nU3dpdGNoQ2FzZT1cIidzaWduYXR1cmUnXCIgW2Zvcm1dPVwiZm9ybVwiIFtrZXldPVwiZmllbGQua2V5XCIgW3NyY109XCJmaWVsZC52YWx1ZVwiIFtsYWJlbF09XCJmaWVsZC5sYWJlbFwiXHJcbiAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnJlcXVpcmVkXCIgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCIgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCJcclxuICAgICAgICBbeEFsaWdubWVudF09XCJmaWVsZC54QWxpZ25tZW50XCIgW3Jvd1NwYW5dPVwiZmllbGQucm93U3BhblwiIFtpc0FjdGl2ZV09XCJpc0FjdGl2ZVwiIFtsYXlvdXRUeXBlXT1cImxheW91dFR5cGVcIlxyXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwib25WYWx1ZUNoYW5nZWQoJGV2ZW50KVwiPlxyXG4gICAgPC9wZXAtc2lnbmF0dXJlPlxyXG5cclxuICAgIDxwZXAtdGV4dGFyZWEgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIiBbZm9ybV09XCJmb3JtXCIgW2tleV09XCJmaWVsZC5rZXlcIiBbdmFsdWVdPVwiZmllbGQudmFsdWVcIiBbbGFiZWxdPVwiZmllbGQubGFiZWxcIlxyXG4gICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5yZXF1aXJlZFwiIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgW21heEZpZWxkQ2hhcmFjdGVyc109XCJmaWVsZC5tYXhGaWVsZENoYXJhY3RlcnNcIiBbdGV4dENvbG9yXT1cImZpZWxkLnRleHRDb2xvclwiIFt4QWxpZ25tZW50XT1cImZpZWxkLnhBbGlnbm1lbnRcIlxyXG4gICAgICAgIFtyb3dTcGFuXT1cImZpZWxkLnJvd1NwYW5cIiBbbGFzdEZvY3VzRmllbGRdPVwiZmllbGQubGFzdEZvY3VzRmllbGRcIiBbc2hvd1RpdGxlXT1cInNob3dUaXRsZVwiXHJcbiAgICAgICAgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiICh2YWx1ZUNoYW5nZWQpPVwib25WYWx1ZUNoYW5nZWQoJGV2ZW50KVwiIFtpc0FjdGl2ZV09XCJpc0FjdGl2ZVwiPlxyXG4gICAgPC9wZXAtdGV4dGFyZWE+XHJcblxyXG4gICAgPHBlcC10ZXh0Ym94ICpuZ1N3aXRjaENhc2U9XCIndGV4dGJveCdcIiBbZm9ybV09XCJmb3JtXCIgW2tleV09XCJmaWVsZC5rZXlcIiBbdmFsdWVdPVwiZmllbGQudmFsdWVcIlxyXG4gICAgICAgIFtmb3JtYXR0ZWRWYWx1ZV09XCJmaWVsZC5mb3JtYXR0ZWRWYWx1ZVwiIFtsYWJlbF09XCJmaWVsZC5sYWJlbFwiIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW3R5cGVdPVwiZmllbGQudHlwZVwiIFtyZXF1aXJlZF09XCJmaWVsZC5yZXF1aXJlZFwiIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgW21heEZpZWxkQ2hhcmFjdGVyc109XCJmaWVsZC5tYXhGaWVsZENoYXJhY3RlcnNcIiBbdGV4dENvbG9yXT1cImZpZWxkLnRleHRDb2xvclwiIFt4QWxpZ25tZW50XT1cImZpZWxkLnhBbGlnbm1lbnRcIlxyXG4gICAgICAgIFtyb3dTcGFuXT1cImZpZWxkLnJvd1NwYW5cIiBbbGFzdEZvY3VzRmllbGRdPVwiZmllbGQubGFzdEZvY3VzRmllbGRcIiBbc2hvd1RpdGxlXT1cInNob3dUaXRsZVwiXHJcbiAgICAgICAgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiICh2YWx1ZUNoYW5nZWQpPVwib25WYWx1ZUNoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGZvcm1WYWxpZGF0aW9uQ2hhbmdlZCk9XCJvbkZvcm1WYWxpZGF0aW9uQ2hhbmdlZCgkZXZlbnQpXCIgW2lzQWN0aXZlXT1cImlzQWN0aXZlXCI+XHJcbiAgICA8L3BlcC10ZXh0Ym94PlxyXG5cclxuICAgIDxwZXAtaW5kaWNhdG9ycyAqbmdTd2l0Y2hDYXNlPVwiJ2luZGljYXRvcnMnXCIgW2tleV09XCJmaWVsZC5rZXlcIiBbdmFsdWVdPVwiZmllbGQudmFsdWVcIiBbbGF5b3V0VHlwZV09XCJsYXlvdXRUeXBlXCI+XHJcbiAgICA8L3BlcC1pbmRpY2F0b3JzPlxyXG4gICAgPHBlcC1pbnRlcm5hbC1wYWdlICpuZ1N3aXRjaENhc2U9XCInaW50ZXJuYWxQYWdlJ1wiIFtoYXNIZWlnaHRMaW1pdF09XCJoYXNIZWlnaHRMaW1pdFwiIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgW2xheW91dFR5cGVdPVwibGF5b3V0VHlwZVwiIChjaGlsZENsaWNrZWQpPVwib25DaGlsZENsaWNrKCRldmVudClcIiAoY2hpbGRDaGFuZ2VkKT1cIm9uQ2hpbGRDaGFuZ2VkKCRldmVudClcIj5cclxuICAgIDwvcGVwLWludGVybmFsLXBhZ2U+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3BsYWNlaG9sZGVyJ1wiPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPiJdfQ==