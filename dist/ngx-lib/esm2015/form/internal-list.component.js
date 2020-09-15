import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LAYOUT_TYPE, FIELD_TYPE } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib";
const _c0 = ["noVirtualScrollCont"];
const _c1 = ["tableHeader"];
const _c2 = ["selectAllCB"];
function PepperiInternalListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.noDataFoundMsg);
} }
function PepperiInternalListComponent_ng_container_1_div_1_div_4_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("header-label body-sm pull-left flip text-align-", field_r12.Layout.XAlignment, "");
    i0.ɵɵpropertyInterpolate("id", field_r12.ApiName);
    i0.ɵɵpropertyInterpolate("title", field_r12.Title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r12.Title, " ");
} }
function PepperiInternalListComponent_ng_container_1_div_1_div_4_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 17);
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("id", field_r12.ApiName);
} }
function PepperiInternalListComponent_ng_container_1_div_1_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵlistener("mousedown", function PepperiInternalListComponent_ng_container_1_div_1_div_4_div_3_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r20); const field_r12 = i0.ɵɵnextContext().$implicit; const ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19.onListResizeStart($event, field_r12.ApiName); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c3 = function (a0) { return { width: a0 }; };
const _c4 = function (a0, a1, a2) { return { "is-resizing": a0, "is-first": a1, "is-last": a2 }; };
function PepperiInternalListComponent_ng_container_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, PepperiInternalListComponent_ng_container_1_div_1_div_4_label_1_Template, 2, 6, "label", 13);
    i0.ɵɵtemplate(2, PepperiInternalListComponent_ng_container_1_div_1_div_4_label_2_Template, 2, 1, "label", 14);
    i0.ɵɵtemplate(3, PepperiInternalListComponent_ng_container_1_div_1_div_4_div_3_Template, 3, 0, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = ctx.$implicit;
    const j_r13 = ctx.index;
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c3, field_r12.calcTitleColumnWidthString))("ngClass", i0.ɵɵpureFunction3(7, _c4, field_r12.ApiName === ctx_r11.pressedColumn, j_r13 === 0, j_r13 === (ctx_r11.uiControl == null ? null : ctx_r11.uiControl.ControlFields == null ? null : ctx_r11.uiControl.ControlFields.length) - 1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r12.Title != "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r12.Title == "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.supportResizing);
} }
const _c5 = function (a0) { return { "below-header-and-top-bar": a0 }; };
function PepperiInternalListComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8, 9);
    i0.ɵɵlistener("mouseup", function PepperiInternalListComponent_ng_container_1_div_1_Template_div_mouseup_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.onListResizeEnd($event); })("mouseenter", function PepperiInternalListComponent_ng_container_1_div_1_Template_div_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.onListHeaderMouseEnter($event); })("mouseleave", function PepperiInternalListComponent_ng_container_1_div_1_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.onListHeaderMouseLeave($event); })("mousemove", function PepperiInternalListComponent_ng_container_1_div_1_Template_div_mousemove_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.onListResize($event); });
    i0.ɵɵelementStart(2, "fieldset", 10);
    i0.ɵɵelementStart(3, "fieldset");
    i0.ɵɵtemplate(4, PepperiInternalListComponent_ng_container_1_div_1_div_4_Template, 4, 11, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c5, ctx_r6.parentScroll == null));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r6.uiControl == null ? null : ctx_r6.uiControl.ControlFields);
} }
function PepperiInternalListComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiInternalListComponent_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c6 = function (a0, a1) { return { "table-body": a0, "cards-body": a1 }; };
function PepperiInternalListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiInternalListComponent_ng_container_1_div_1_Template, 5, 4, "div", 4);
    i0.ɵɵelementStart(2, "div", 5, 6);
    i0.ɵɵtemplate(4, PepperiInternalListComponent_ng_container_1_ng_container_4_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PepperiInternalListComponent_ng_container_1_ng_container_5_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    const _r4 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isTable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c6, ctx_r1.isTable, !ctx_r1.isTable));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
const _c7 = function (a0) { return { highlighted: a0 }; };
const _c8 = function (a0, a1) { return { height: a0, visibility: a1 }; };
const _c9 = function (a0) { return { "background-color": a0 }; };
function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵlistener("mouseenter", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_div_mouseenter_1_listener($event) { i0.ɵɵrestoreView(_r34); const pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit; const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.onTableRowMouseEnter($event, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type); })("mouseleave", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_div_mouseleave_1_listener($event) { i0.ɵɵrestoreView(_r34); const pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit; const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.onTableRowMouseLeave($event, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type); });
    i0.ɵɵelementStart(2, "fieldset", 22);
    i0.ɵɵelementStart(3, "pep-form", 23);
    i0.ɵɵlistener("notifyValueChanged", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyValueChanged_3_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r38 = i0.ɵɵnextContext(3); return ctx_r38.onValueChanged($event); })("notifyFieldClicked", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyFieldClicked_3_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r39 = i0.ɵɵnextContext(3); return ctx_r39.onCustomizeFieldClick($event); })("notifyMenuItemClicked", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyMenuItemClicked_3_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.onCustomizeFieldMenuClicked($event); })("click", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_click_3_listener($event) { i0.ɵɵrestoreView(_r34); const pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit; const ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.itemClicked($event, pepperiObjectInput_r28); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit;
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(16, _c7, (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r31.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r31.selectedItemId))("ngStyle", i0.ɵɵpureFunction2(18, _c8, ctx_r31.calculatedObjectHeight, ctx_r31.showItems || pepperiObjectInput_r28 ? "visible" : "hidden"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(21, _c9, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.BackgroundColor));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checkForChanges", ctx_r31.checkForChanges)("uiControlHeader", ctx_r31.uiControl)("firstFieldAsLink", ctx_r31.firstFieldAsLink)("pepperiObjectInput", pepperiObjectInput_r28)("canEditObject", !ctx_r31.disabled && (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.IsEditable))("objectId", ctx_r31.objectId)("parentId", ctx_r31.parentId)("searchCode", ctx_r31.searchCode)("lockEvents", ctx_r31.disableSelectionItems)("layoutType", ctx_r31.LAYOUT_TYPE.PepperiTable)("listType", ctx_r31.listType)("isActive", ((pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r31.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r31.selectedItemId || (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r31.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r31.hoveredItemId) && !ctx_r31.isTouchDevice)("pageType", ctx_r31.pageType);
} }
const _c10 = function (a0, a1) { return { highlighted: a0, cardView: a1 }; };
function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵlistener("mouseenter", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_div_mouseenter_1_listener($event) { i0.ɵɵrestoreView(_r45); const pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit; const ctx_r44 = i0.ɵɵnextContext(2); return ctx_r44.onCardMouseEnter($event, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type); })("mouseleave", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_div_mouseleave_1_listener($event) { i0.ɵɵrestoreView(_r45); const pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit; const ctx_r47 = i0.ɵɵnextContext(2); return ctx_r47.onCardMouseLeave($event, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID, pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type); });
    i0.ɵɵelementStart(2, "pep-form", 25);
    i0.ɵɵlistener("notifyValueChanged", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyValueChanged_2_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r49 = i0.ɵɵnextContext(3); return ctx_r49.onValueChanged($event); })("notifyFieldClicked", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyFieldClicked_2_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r50 = i0.ɵɵnextContext(3); return ctx_r50.onCustomizeFieldClick($event); })("notifyMenuItemClicked", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyMenuItemClicked_2_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r51 = i0.ɵɵnextContext(3); return ctx_r51.onCustomizeFieldMenuClicked($event); })("click", function PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_click_2_listener($event) { i0.ɵɵrestoreView(_r45); const pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit; const ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.itemClicked($event, pepperiObjectInput_r28); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pepperiObjectInput_r28 = i0.ɵɵnextContext().$implicit;
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r32.itemClass);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(18, _c10, (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r32.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r32.selectedItemId, ctx_r32.isCardView))("ngStyle", i0.ɵɵpureFunction2(21, _c8, ctx_r32.calculatedObjectHeight, ctx_r32.showItems || pepperiObjectInput_r28 ? "visible" : "hidden"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("firstFieldAsLink", ctx_r32.isCardView ? ctx_r32.firstFieldAsLink : false)("checkForChanges", ctx_r32.checkForChanges)("uiControlHeader", ctx_r32.uiControl)("pepperiObjectInput", pepperiObjectInput_r28)("isCardView", ctx_r32.isCardView)("canEditObject", !ctx_r32.disabled && (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.IsEditable))("objectId", ctx_r32.objectId)("parentId", ctx_r32.parentId)("searchCode", ctx_r32.searchCode)("lockEvents", ctx_r32.disableSelectionItems)("layoutType", ctx_r32.getThumbnailsLayout())("listType", ctx_r32.listType)("isActive", ((pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r32.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r32.selectedItemId || (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.UID) + ctx_r32.SEPARATOR + (pepperiObjectInput_r28 == null ? null : pepperiObjectInput_r28.Data == null ? null : pepperiObjectInput_r28.Data.Type) === ctx_r32.hoveredItemId) && !ctx_r32.isTouchDevice)("pageType", ctx_r32.pageType);
} }
function PepperiInternalListComponent_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_1_Template, 4, 23, "ng-container", 0);
    i0.ɵɵtemplate(2, PepperiInternalListComponent_ng_template_2_ng_container_0_ng_container_2_Template, 3, 24, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.isTable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r27.isTable);
} }
function PepperiInternalListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiInternalListComponent_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 20);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r3.scrollItems)("ngForTrackBy", ctx_r3.trackByFunc);
} }
function PepperiInternalListComponent_ng_template_4_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r57 = ctx.$implicit;
    const j_r58 = ctx.index;
    const ctx_r56 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c3, field_r57.calcTitleColumnWidthString));
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("total-label body-sm text-align-", field_r57.Layout.XAlignment, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r56.totalsRow[j_r58], " ");
} }
function PepperiInternalListComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵelementStart(1, "fieldset", 10);
    i0.ɵɵtemplate(2, PepperiInternalListComponent_ng_template_4_div_0_div_2_Template, 3, 7, "div", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r55 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r55.uiControl == null ? null : ctx_r55.uiControl.ControlFields);
} }
function PepperiInternalListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiInternalListComponent_ng_template_4_div_0_Template, 3, 1, "div", 26);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", (ctx_r5.totalsRow == null ? null : ctx_r5.totalsRow.length) > 0 && ctx_r5.totalsRow.length <= (ctx_r5.uiControl == null ? null : ctx_r5.uiControl.ControlFields.length));
} }
export var VIEW_TYPE;
(function (VIEW_TYPE) {
    VIEW_TYPE[VIEW_TYPE["Card"] = 0] = "Card";
    VIEW_TYPE[VIEW_TYPE["Line"] = 1] = "Line";
    VIEW_TYPE[VIEW_TYPE["Table"] = 2] = "Table";
})(VIEW_TYPE || (VIEW_TYPE = {}));
export class PepperiInternalListComponent {
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
PepperiInternalListComponent.ɵfac = function PepperiInternalListComponent_Factory(t) { return new (t || PepperiInternalListComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LayoutService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
PepperiInternalListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiInternalListComponent, selectors: [["pep-internal-list"]], viewQuery: function PepperiInternalListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
        i0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.noVirtualScrollCont = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableHeader = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectAllCB = _t.first);
    } }, hostBindings: function PepperiInternalListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function PepperiInternalListComponent_resize_HostBindingHandler($event) { return ctx.winResize($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { currentListTypeTranslation: "currentListTypeTranslation", noDataFoundMsg: "noDataFoundMsg", hideAllSelectionInMulti: "hideAllSelectionInMulti", top: "top", listType: "listType", objectId: "objectId", parentId: "parentId", searchCode: "searchCode", firstFieldAsLink: "firstFieldAsLink", supportResizing: "supportResizing", parentScroll: "parentScroll", disabled: "disabled", isPrinting: "isPrinting", disableSelectionItems: "disableSelectionItems", layoutType: "layoutType", pageType: "pageType", totalsRow: "totalsRow", isTouchDevice: "isTouchDevice" }, outputs: { notifyThumbnailClicked: "notifyThumbnailClicked", notifyFieldClicked: "notifyFieldClicked", notifyMenuItemClicked: "notifyMenuItemClicked", notifyValueChanged: "notifyValueChanged", notifySelectAllSingleActionClicked: "notifySelectAllSingleActionClicked", notifySingleActionClicked: "notifySingleActionClicked", notifyListLoad: "notifyListLoad" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 2, consts: [[4, "ngIf"], ["listData", ""], ["listTotals", ""], [1, "no-data"], ["class", "table-header", 3, "ngClass", "mouseup", "mouseenter", "mouseleave", "mousemove", 4, "ngIf"], [3, "ngClass"], ["noVirtualScrollCont", ""], [4, "ngTemplateOutlet"], [1, "table-header", 3, "ngClass", "mouseup", "mouseenter", "mouseleave", "mousemove"], ["tableHeader", ""], [1, "table-header-fieldset"], ["class", "header-column pull-left flip", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [1, "header-column", "pull-left", "flip", 3, "ngStyle", "ngClass"], [3, "id", "class", "title", 4, "ngIf"], ["class", "header-label body-sm pull-left flip", 3, "id", 4, "ngIf"], ["class", "resizeBox pull-right flip", 3, "mousedown", 4, "ngIf"], [3, "id", "title"], [1, "header-label", "body-sm", "pull-left", "flip", 3, "id"], [1, "resizeBox", "pull-right", "flip", 3, "mousedown"], ["name", "arrow-up", 1, "asc"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-row", 3, "ngClass", "ngStyle", "mouseenter", "mouseleave"], [1, "table-row-fieldset", 3, "ngStyle"], [3, "checkForChanges", "uiControlHeader", "firstFieldAsLink", "pepperiObjectInput", "canEditObject", "objectId", "parentId", "searchCode", "lockEvents", "layoutType", "listType", "isActive", "pageType", "notifyValueChanged", "notifyFieldClicked", "notifyMenuItemClicked", "click"], [1, "pull-left", "flip", 3, "ngClass", "ngStyle", "mouseenter", "mouseleave"], [3, "firstFieldAsLink", "checkForChanges", "uiControlHeader", "pepperiObjectInput", "isCardView", "canEditObject", "objectId", "parentId", "searchCode", "lockEvents", "layoutType", "listType", "isActive", "pageType", "notifyValueChanged", "notifyFieldClicked", "notifyMenuItemClicked", "click"], ["class", "table-total", 4, "ngIf"], [1, "table-total"], ["class", "total-column pull-left flip", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "total-column", "pull-left", "flip", 3, "ngStyle"]], template: function PepperiInternalListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PepperiInternalListComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, PepperiInternalListComponent_ng_container_1_Template, 6, 7, "ng-container", 0);
        i0.ɵɵtemplate(2, PepperiInternalListComponent_ng_template_2_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, PepperiInternalListComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.totalRows == 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.totalRows > 0);
    } }, styles: ["[_nghost-%COMP%]{height:inherit}.no-data[_ngcontent-%COMP%]{font-size:1.5rem;margin-top:100px;text-align:center}.table-header[_ngcontent-%COMP%]{top:0}.table-header.below-header-and-top-bar[_ngcontent-%COMP%]{top:calc(var(--pep-header-height, 4rem) + var(--pep-top-bar-spacing-top, 1.5rem) + var(--pep-top-bar-spacing-bottom, .5rem) + var(--pep-top-bar-field-height, 2.5rem))}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiInternalListComponent, [{
        type: Component,
        args: [{
                selector: 'pep-internal-list',
                templateUrl: './internal-list.component.html',
                styleUrls: ['./internal-list.component.scss'],
                host: {
                    '(window:resize)': 'winResize($event)'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.LayoutService }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { currentListTypeTranslation: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2Zvcm0vaW50ZXJuYWwtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2Zvcm0vaW50ZXJuYWwtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFxQixTQUFTLEVBRXZFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQ0gsV0FBVyxFQUNYLFVBQVUsRUFDYixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0lDUmpDLDZCQUNJO0lBQUEsOEJBQXFCO0lBQUEsWUFBb0I7SUFBQSxpQkFBTTtJQUNuRCwwQkFBZTs7O0lBRFUsZUFBb0I7SUFBcEIsMkNBQW9COzs7SUFlekIsaUNBR0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7OztJQUhKLDZHQUFvRjtJQUR2RCxpREFBd0I7SUFFckQsa0RBQXlCO0lBQ3pCLGVBQ0o7SUFESSxnREFDSjs7O0lBQ0EsaUNBQ2dEO0lBQUEsc0JBQU07SUFBQSxpQkFBUTs7O0lBRDdCLGlEQUF3Qjs7OztJQUd6RCwrQkFFSTtJQURBLDBUQUFzRDtJQUN0RCxnQ0FDSTtJQUFBLCtCQUFpRDtJQUNyRCxpQkFBVztJQUNmLGlCQUFNOzs7OztJQW5CViwrQkFNSTtJQUFBLDZHQUdJO0lBRUosNkdBQ2dEO0lBRWhELHlHQUVJO0lBSVIsaUJBQU07Ozs7O0lBbkJGLDBGQUF1RCw2T0FBQTtJQUtoRCxlQUF5QjtJQUF6Qiw0Q0FBeUI7SUFLekIsZUFBeUI7SUFBekIsNENBQXlCO0lBRzNCLGVBQXVCO0lBQXZCLDhDQUF1Qjs7Ozs7SUFwQjVDLGlDQUlJO0lBSGtF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Q0o7aUpBRVksMEJBQTBCO2tCQUFsQyxLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLHVCQUF1QjtrQkFBL0IsS0FBSztZQUVHLEdBQUc7a0JBQVgsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFFRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUVJLHNCQUFzQjtrQkFBL0IsTUFBTTtZQUNHLGtCQUFrQjtrQkFBM0IsTUFBTTtZQUNHLHFCQUFxQjtrQkFBOUIsTUFBTTtZQUNHLGtCQUFrQjtrQkFBM0IsTUFBTTtZQUNHLGtDQUFrQztrQkFBM0MsTUFBTTtZQUNHLHlCQUF5QjtrQkFBbEMsTUFBTTtZQUVHLGNBQWM7a0JBQXZCLE1BQU07WUFFMkIsbUJBQW1CO2tCQUFwRCxTQUFTO21CQUFDLHFCQUFxQjtZQUNOLFdBQVc7a0JBQXBDLFNBQVM7bUJBQUMsYUFBYTtZQUNFLFdBQVc7a0JBQXBDLFNBQVM7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZixcclxuICAgIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksIE9uQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtcclxuICAgIExBWU9VVF9UWVBFLCBMYXlvdXRTZXJ2aWNlLCBPYmplY3RTaW5nbGVEYXRhLCBVSUNvbnRyb2wsIFVJQ29udHJvbEZpZWxkLFxyXG4gICAgRklFTERfVFlQRSwgT2JqZWN0c0RhdGFSb3csIFNDUkVFTl9TSVpFLCBQZXBwZXJpT2JqZWN0Q2hhbmdlZERhdGEsIFBlcHBlcmlGaWVsZENsaWNrZWREYXRhXHJcbn0gZnJvbSAnQHBlcHBlcmktYWRkb25zL25neC1saWInO1xyXG5cclxuZXhwb3J0IGVudW0gVklFV19UWVBFIHtcclxuICAgIENhcmQsXHJcbiAgICBMaW5lLFxyXG4gICAgVGFibGVcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BlcC1pbnRlcm5hbC1saXN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbnRlcm5hbC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2ludGVybmFsLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnKHdpbmRvdzpyZXNpemUpJzogJ3dpblJlc2l6ZSgkZXZlbnQpJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVwcGVyaUludGVybmFsTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkgY3VycmVudExpc3RUeXBlVHJhbnNsYXRpb24gPSAnJztcclxuICAgIEBJbnB1dCgpIG5vRGF0YUZvdW5kTXNnID0gJ0l0ZW1zIG5vdCBmb3VuZCc7XHJcbiAgICBASW5wdXQoKSBoaWRlQWxsU2VsZWN0aW9uSW5NdWx0aSA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCgpIHRvcCA9IC0xO1xyXG4gICAgQElucHV0KCkgbGlzdFR5cGUgPSAnJztcclxuICAgIEBJbnB1dCgpIG9iamVjdElkID0gJzAnO1xyXG4gICAgQElucHV0KCkgcGFyZW50SWQgPSAnMCc7XHJcbiAgICBASW5wdXQoKSBzZWFyY2hDb2RlID0gJzAnO1xyXG4gICAgLy8gQElucHV0KCkgc2hvd1RvcEJvcmRlciA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZmlyc3RGaWVsZEFzTGluayA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgc3VwcG9ydFJlc2l6aW5nID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHBhcmVudFNjcm9sbDogRWxlbWVudCB8IFdpbmRvdyA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgaXNQcmludGluZyA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZVNlbGVjdGlvbkl0ZW1zID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBsYXlvdXRUeXBlOiBMQVlPVVRfVFlQRSA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBwYWdlVHlwZSA9ICcnO1xyXG4gICAgQElucHV0KCkgdG90YWxzUm93ID0gW107XHJcbiAgICBASW5wdXQoKSBpc1RvdWNoRGV2aWNlID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpIG5vdGlmeVRodW1ibmFpbENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxPYmplY3RTaW5nbGVEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0U2luZ2xlRGF0YT4oKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnlGaWVsZENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxQZXBwZXJpRmllbGRDbGlja2VkRGF0YT4oKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnlNZW51SXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxQZXBwZXJpRmllbGRDbGlja2VkRGF0YT4oKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnlWYWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxQZXBwZXJpT2JqZWN0Q2hhbmdlZERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxQZXBwZXJpT2JqZWN0Q2hhbmdlZERhdGE+KCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5U2VsZWN0QWxsU2luZ2xlQWN0aW9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnlTaW5nbGVBY3Rpb25DbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIEBPdXRwdXQoKSBub3RpZnlMaXN0TG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdub1ZpcnR1YWxTY3JvbGxDb250Jykgbm9WaXJ0dWFsU2Nyb2xsQ29udDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3RhYmxlSGVhZGVyJykgdGFibGVIZWFkZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdzZWxlY3RBbGxDQicpIHNlbGVjdEFsbENCOiBhbnk7XHJcblxyXG4gICAgTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRTtcclxuXHJcbiAgICBwdWJsaWMgdWlDb250cm9sOiBVSUNvbnRyb2wgPSBudWxsO1xyXG4gICAgcHVibGljIHRvdGFsUm93cyA9IC0xO1xyXG4gICAgaXRlbUNsYXNzOiBzdHJpbmc7XHJcbiAgICBpc1RhYmxlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGhhc0NvbHVtbldpZHRoT2ZUeXBlUGVyY2VudGFnZSA9IHRydWU7XHJcbiAgICBwdWJsaWMgaXRlbXM6IEFycmF5PE9iamVjdFNpbmdsZURhdGE+ID0gbnVsbDtcclxuICAgIGlzQ2FyZFZpZXcgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXRlbXNDb3VudGVyID0gMDtcclxuICAgIHNob3dJdGVtcyA9IHRydWU7XHJcbiAgICBzY3JvbGxJdGVtczogQXJyYXk8T2JqZWN0U2luZ2xlRGF0YT47XHJcblxyXG4gICAgcHVibGljIFNFUEFSQVRPUiA9ICcsJztcclxuXHJcbiAgICBuYXRpdmVXaW5kb3c6IGFueSA9IG51bGw7XHJcblxyXG4gICAgc2VsZWN0ZWRJdGVtSWQgPSAnJztcclxuICAgIGhvdmVyZWRJdGVtSWQgPSAnJztcclxuXHJcbiAgICBwcml2YXRlIGxvY2tFdmVudHMgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY29udGFpbmVyV2lkdGggPSAwO1xyXG5cclxuICAgIHNjcmVlblNpemU6IFNDUkVFTl9TSVpFO1xyXG5cclxuICAgIC8vIGhlYWRlcklzSW5Gb2N1cyA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEZvciByZXNpemVcclxuICAgIHByZXNzZWRDb2x1bW4gPSAnJztcclxuICAgIHN0YXJ0WCA9IDA7XHJcbiAgICBzdGFydFdpZHRoID0gMDtcclxuICAgIHRhYmxlU3RhcnRXaWR0aCA9IDA7XHJcblxyXG4gICAgaXNVc2VyU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIGNoZWNrRm9yQ2hhbmdlczogYW55ID0gbnVsbDtcclxuICAgIHVzZVZpcnR1YWxTY3JvbGwgPSB0cnVlO1xyXG4gICAgY2FsY3VsYXRlZE9iamVjdEhlaWdodDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIGxheW91dFNlcnZpY2U6IExheW91dFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5sYXlvdXRTZXJ2aWNlLm9uUmVzaXplJFxyXG4gICAgICAgICAgICAucGlwZShkZWxheSgwKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShzaXplID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuU2l6ZSA9IHNpemU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubmF0aXZlV2luZG93ID0gd2luZG93O1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXJXaWR0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGFpbmVyV2lkdGgoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubm90aWZ5VmFsdWVDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsdWVDaGFuZ2VkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ub3RpZnlGaWVsZENsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlGaWVsZENsaWNrZWQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vdGlmeU1lbnVJdGVtQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeU1lbnVJdGVtQ2xpY2tlZC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm90aWZ5VGh1bWJuYWlsQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVRodW1ibmFpbENsaWNrZWQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29udGFpbmVyV2lkdGgoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQ2hlY2tCb3hXaWR0aCA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvd0hlaWdodCA9IDQwOyAvLyB0aGUgdGFibGUgcm93IGhlaWdodCAoMi41cmVtICogMTZmb250LXNpemUpLlxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgLy8gVGhlIGNvbnRhaW5lci1mbHVpZCBjbGFzcyBwYWRkaW5nIGxlZnQgKyByaWdodCArIGJvcmRlclxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckZsdWlkU3BhY2luZyA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdMZWZ0LCAxMCkgKyBwYXJzZUludChzdHlsZS5wYWRkaW5nUmlnaHQsIDEwKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ID4gMCA/XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCA6IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBpZiB2ZXJ0aWNhbCBzY3JvbGwgc2hvdWxkIGFwcGVhciwgaWYgc28gc2V0IHRoZSBzY3JvbGwgd2lkdGguICh0aGlzLnRvdGFsUm93cyArIDEpICsgMSBpcyBmb3IgdGhlIGhlYWRlciByb3cuXHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsV2lkdGggPSBwYXJlbnRDb250YWluZXIuY2xpZW50SGVpZ2h0IDwgcm93SGVpZ2h0ICogKHRoaXMudG90YWxSb3dzICsgMSkgPyAxOCA6IDA7IC8vIDE4IGlzIHRoZSBkZWZhdWx0IHNjcm9sbCB3aWR0aC5cclxuXHJcbiAgICAgICAgLy8gVGhlIHNlbGVjdGlvbkNoZWNrQm94V2lkdGggd2lkdGggKyBjb250YWluZXJGbHVpZFNwYWNpbmcgKyBzY3JvbGxXaWR0aC5cclxuICAgICAgICBjb25zdCByb3dIZWFkZXJXaWR0aFRvU3ViID0gY29udGFpbmVyRmx1aWRTcGFjaW5nICsgc2VsZWN0aW9uQ2hlY2tCb3hXaWR0aCArIHNjcm9sbFdpZHRoO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSBwYXJlbnRDb250YWluZXIub2Zmc2V0V2lkdGggLSByb3dIZWFkZXJXaWR0aFRvU3ViO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xlYW5JdGVtcygpO1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvZ2dsZUl0ZW1zKGlzVmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hvd0l0ZW1zID0gaXNWaXNpYmxlO1xyXG4gICAgICAgIHRoaXMubG9ja0V2ZW50cyA9ICFpc1Zpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTY3JvbGxJdGVtcyhzdGFydEluZGV4LCBlbmRJbmRleCwgbG9hZEluQ2h1bmtzID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsSXRlbXMgPSB0aGlzLml0ZW1zLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVbmlxSXRlbUlkKGl0ZW1JZDogc3RyaW5nLCBpdGVtVHlwZTogc3RyaW5nID0gJycpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBpdGVtSWQgKyB0aGlzLlNFUEFSQVRPUiArIGl0ZW1UeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExheW91dCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy50b3RhbFJvd3MgPT09IDAgfHxcclxuICAgICAgICAgICAgIXRoaXMudWlDb250cm9sIHx8XHJcbiAgICAgICAgICAgICF0aGlzLnVpQ29udHJvbC5Db250cm9sRmllbGRzIHx8XHJcbiAgICAgICAgICAgIHRoaXMudWlDb250cm9sLkNvbnRyb2xGaWVsZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudWlDb250cm9sLkNvbnRyb2xGaWVsZHMuZm9yRWFjaCgoY2YpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNmLkNvbHVtbldpZHRoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjZi5Db2x1bW5XaWR0aCA9IDEwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi5pc1RhYmxlICYmXHJcbiAgICAgICAgICAgICAgICAoY2YuRmllbGRUeXBlID09PSBGSUVMRF9UWVBFLkltYWdlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2YuRmllbGRUeXBlID09PSBGSUVMRF9UWVBFLkluZGljYXRvcnMgfHwgPz8/XHJcbiAgICAgICAgICAgICAgICAgICAgY2YuRmllbGRUeXBlID09PSBGSUVMRF9UWVBFLlNpZ25hdHVyZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNmLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5OdW1iZXJJbnRlZ2VyUXVhbnRpdHlTZWxlY3RvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNmLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5OdW1iZXJSZWFsUXVhbnRpdHlTZWxlY3RvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNmLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5OdW1iZXJJbnRlZ2VyRm9yTWF0cml4IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgY2YuRmllbGRUeXBlID09PSBGSUVMRF9UWVBFLk51bWJlclJlYWxGb3JNYXRyaXggfHxcclxuICAgICAgICAgICAgICAgICAgICBjZi5GaWVsZFR5cGUgPT09IEZJRUxEX1RZUEUuUGFja2FnZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNmLkFwaU5hbWUgPT09ICdVbml0c1F1YW50aXR5JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNmLkFwaU5hbWUgPT09ICdRdWFudGl0eVNlbGVjdG9yJylcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjZi5MYXlvdXQuWEFsaWdubWVudCA9IDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNkWydkZXN0cm95ZWQnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgY29sdW1ucyB3aWR0aC5cclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXJXaWR0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGFpbmVyV2lkdGgoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FsY0NvbHVtbnNXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JDaGFuZ2VzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjQ29sdW1uc1dpZHRoKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGZpeGVkTXVsdGlwbGUgPSAzLjc4OyAvLyBmb3IgY29udmVydGluZyBlbSB0byBwaXhlbC5cclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnVpQ29udHJvbC5Db250cm9sRmllbGRzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25DaGVja0JveFdpZHRoID0gMDtcclxuXHJcbiAgICAgICAgLy8gSXMgdGFibGUgQU5EIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBjb2x1bW4gb2Ygd2lkdGggdHlwZSBvZiBwZXJjZW50YWdlLlxyXG4gICAgICAgIGlmICh0aGlzLmlzVGFibGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudWlDb250cm9sICYmIHRoaXMudWlDb250cm9sLkNvbnRyb2xGaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ29sdW1uV2lkdGhPZlR5cGVQZXJjZW50YWdlID0gdGhpcy51aUNvbnRyb2wuQ29udHJvbEZpZWxkcy5maWx0ZXIoY2YgPT4gY2YuQ29sdW1uV2lkdGhUeXBlID09PSAxKS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBjb2x1bW5zIHNpemUgaXMgZml4ZWQgYW5kIHRoZSB0b3RhbCBpcyBzbWFsbCB0aGVuIHRoZSBjb250YWluZXIgY2hhbmdlIGl0IHRvIHBlcmNlbnRhZ2UuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0NvbHVtbldpZHRoT2ZUeXBlUGVyY2VudGFnZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbEZpeGVkQ29sc1dpZHRoID0gdGhpcy51aUNvbnRyb2wuQ29udHJvbEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgLm1hcChjZiA9PiBjZi5Db2x1bW5XaWR0aCAqIGZpeGVkTXVsdGlwbGUpXHJcbiAgICAgICAgICAgICAgICAucmVkdWNlKChzdW0sIGN1cnJlbnQpID0+IHN1bSArIGN1cnJlbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gdG90YWxGaXhlZENvbHNXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDb2x1bW5XaWR0aE9mVHlwZVBlcmNlbnRhZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG90YWxDYWxjQ29sc1dpZHRoID0gMDtcclxuXHJcbiAgICAgICAgLy8gQ2FsYyBieSBwZXJjZW50YWdlXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQ29sdW1uV2lkdGhPZlR5cGVQZXJjZW50YWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsQ29sc1dpZHRoOiBudW1iZXIgPSB0aGlzLnVpQ29udHJvbC5Db250cm9sRmllbGRzLm1hcChjZiA9PiBjZi5Db2x1bW5XaWR0aCkucmVkdWNlKChzdW0sIGN1cnJlbnQpID0+IHN1bSArIGN1cnJlbnQpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdWlDb250cm9sRmllbGQ6IFVJQ29udHJvbEZpZWxkID0gdGhpcy51aUNvbnRyb2wuQ29udHJvbEZpZWxkc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjQ29sdW1uV2lkdGhQZXJjZW50YWdlID0gKDEwMCAvIHRvdGFsQ29sc1dpZHRoKSAqIHVpQ29udHJvbEZpZWxkLkNvbHVtbldpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgIHVpQ29udHJvbEZpZWxkLmNhbGNDb2x1bW5XaWR0aCA9IE1hdGguZmxvb3IoKHRoaXMuY29udGFpbmVyV2lkdGggKiBjYWxjQ29sdW1uV2lkdGhQZXJjZW50YWdlKSAvIDEwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBsZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdWlDb250cm9sRmllbGQuY2FsY1RpdGxlQ29sdW1uV2lkdGhTdHJpbmcgPSB1aUNvbnRyb2xGaWVsZC5jYWxjQ29sdW1uV2lkdGhTdHJpbmcgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2FsYygxMDAlIC0gJyArIHRvdGFsQ2FsY0NvbHNXaWR0aCArICdweCknOyAvLyBGb3IgMTAwJVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1aUNvbnRyb2xGaWVsZC5jYWxjVGl0bGVDb2x1bW5XaWR0aFN0cmluZyA9IHVpQ29udHJvbEZpZWxkLmNhbGNDb2x1bW5XaWR0aFN0cmluZyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpQ29udHJvbEZpZWxkLmNhbGNDb2x1bW5XaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDYWxjQ29sc1dpZHRoICs9IHVpQ29udHJvbEZpZWxkLmNhbGNDb2x1bW5XaWR0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgJ2luaGVyaXQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1aUNvbnRyb2xGaWVsZDogVUlDb250cm9sRmllbGQgPSB0aGlzLnVpQ29udHJvbC5Db250cm9sRmllbGRzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRGaXhlZFdpZHRoID0gTWF0aC5mbG9vcih1aUNvbnRyb2xGaWVsZC5Db2x1bW5XaWR0aCAqIGZpeGVkTXVsdGlwbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gbGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVpQ29udHJvbEZpZWxkLmNhbGNUaXRsZUNvbHVtbldpZHRoU3RyaW5nID0gY3VycmVudEZpeGVkV2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHVpQ29udHJvbEZpZWxkLmNhbGNDb2x1bW5XaWR0aFN0cmluZyA9IGN1cnJlbnRGaXhlZFdpZHRoIC0gNCArICdweCc7IC8vIC00IGZvciB0aGUgcm93IHBhZGRpbmcuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHVpQ29udHJvbEZpZWxkLmNhbGNUaXRsZUNvbHVtbldpZHRoU3RyaW5nID0gdWlDb250cm9sRmllbGQuY2FsY0NvbHVtbldpZHRoU3RyaW5nID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpeGVkV2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRvdGFsQ2FsY0NvbHNXaWR0aCArPSBjdXJyZW50Rml4ZWRXaWR0aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgdG90YWxDYWxjQ29sc1dpZHRoICsgc2VsZWN0aW9uQ2hlY2tCb3hXaWR0aCArICdweCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRSZXNpemVEYXRhKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhcnRYID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0V2lkdGggPSAwO1xyXG4gICAgICAgIHRoaXMudGFibGVTdGFydFdpZHRoID0gMDtcclxuICAgICAgICB0aGlzLnByZXNzZWRDb2x1bW4gPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBvbkxpc3RSZXNpemVTdGFydChldmVudCwgYXBpTmFtZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJlc3NlZENvbHVtbiA9IGFwaU5hbWU7XHJcbiAgICAgICAgdGhpcy5zdGFydFggPSBldmVudC54O1xyXG4gICAgICAgIHRoaXMuc3RhcnRXaWR0aCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyLWNvbHVtbicpLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vIFNldCB0aGUgdGFibGVTdGFydFdpZHRoIHRvIHRoZSBjb250YWluZXIgb2Zmc2V0V2lkdGhcclxuICAgICAgICB0aGlzLnRhYmxlU3RhcnRXaWR0aCA9IHRoaXMubm9WaXJ0dWFsU2Nyb2xsQ29udC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTGlzdFJlc2l6ZShldmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnByZXNzZWRDb2x1bW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aFRvQWRkID0gdGhpcy5sYXlvdXRTZXJ2aWNlLmlzUnRsKCkgPyB0aGlzLnN0YXJ0WCAtIGV2ZW50LnggOiBldmVudC54IC0gdGhpcy5zdGFydFg7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW4gYW5kIHRoZSBjb250YWluZXIgb2YgdGhlIHdob2xlIGNvbHVtbnMuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0V2lkdGggKyB3aWR0aFRvQWRkID49IDQ4IHx8IHdpZHRoVG9BZGQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnVpQ29udHJvbC5Db250cm9sRmllbGRzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbENhbGNDb2xzV2lkdGggPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1aUNvbnRyb2xGaWVsZDogVUlDb250cm9sRmllbGQgPSB0aGlzLnVpQ29udHJvbC5Db250cm9sRmllbGRzW2luZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBsZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGMgdGhlIGxhc3QgY29sdW1uIG9ubHkgaW4gcGVyY2VudGFnZSB0eXBlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDb2x1bW5XaWR0aE9mVHlwZVBlcmNlbnRhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpQ29udHJvbEZpZWxkLmNhbGNUaXRsZUNvbHVtbldpZHRoU3RyaW5nID0gdWlDb250cm9sRmllbGQuY2FsY0NvbHVtbldpZHRoU3RyaW5nID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FsYygxMDAlIC0gJyArIHRvdGFsQ2FsY0NvbHNXaWR0aCArICdweCknOyAvLyBGb3IgMTAwJVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVpQ29udHJvbEZpZWxkLkFwaU5hbWUgPT09IHRoaXMucHJlc3NlZENvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpQ29udHJvbEZpZWxkLmNhbGNDb2x1bW5XaWR0aCA9IHRoaXMuc3RhcnRXaWR0aCArIHdpZHRoVG9BZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlDb250cm9sRmllbGQuY2FsY1RpdGxlQ29sdW1uV2lkdGhTdHJpbmcgPSB1aUNvbnRyb2xGaWVsZC5jYWxjQ29sdW1uV2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpQ29udHJvbEZpZWxkLmNhbGNDb2x1bW5XaWR0aFN0cmluZyA9IHVpQ29udHJvbEZpZWxkLmNhbGNDb2x1bW5XaWR0aCAtIDQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh1aUNvbnRyb2xGaWVsZC5BcGlOYW1lID09PSB0aGlzLnByZXNzZWRDb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWlDb250cm9sRmllbGQuY2FsY0NvbHVtbldpZHRoID0gdGhpcy5zdGFydFdpZHRoICsgd2lkdGhUb0FkZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWlDb250cm9sRmllbGQuY2FsY1RpdGxlQ29sdW1uV2lkdGhTdHJpbmcgPSB1aUNvbnRyb2xGaWVsZC5jYWxjQ29sdW1uV2lkdGhTdHJpbmcgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlDb250cm9sRmllbGQuY2FsY0NvbHVtbldpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2FsY0NvbHNXaWR0aCArPSB1aUNvbnRyb2xGaWVsZC5jYWxjQ29sdW1uV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgdGhpcy50YWJsZVN0YXJ0V2lkdGggKyB3aWR0aFRvQWRkICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JDaGFuZ2VzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTGlzdFJlc2l6ZUVuZChldmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnByZXNzZWRDb2x1bW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQgJiYgJChldmVudC5zcmNFbGVtZW50KS5wYXJlbnRzKCcucmVzaXplQm94JykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0UmVzaXplRGF0YSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmluaXRSZXNpemVEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxpc3RIZWFkZXJNb3VzZUVudGVyKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5oZWFkZXJJc0luRm9jdXMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTGlzdEhlYWRlck1vdXNlTGVhdmUoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmhlYWRlcklzSW5Gb2N1cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25MaXN0UmVzaXplRW5kKGV2ZW50KTtcclxuICAgICAgICB0aGlzLmluaXRSZXNpemVEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25MaXN0Q2hhbmdlKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc1ByaW50aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZvciBvdGhlciBldmVudHMgZG8gbm90aGluZy5cclxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50LnN0YXJ0ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZXZlbnQuZW5kID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZWRPYmplY3RIZWlnaHQgPSBldmVudC5jYWxjdWxhdGVkQ2hpbGRIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubG9ja0V2ZW50cykge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUl0ZW1zKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY3JvbGxJdGVtcyhldmVudC5zdGFydCwgZXZlbnQuZW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlSXRlbXModHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTGlzdExvYWQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm90aWZ5TGlzdExvYWQuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50Q29udGFpbmVyKCk6IEVsZW1lbnQgfCBXaW5kb3cge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudFNjcm9sbCA/IHRoaXMucGFyZW50U2Nyb2xsIDogd2luZG93O1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmFsdWVDaGFuZ2VkKHZhbHVlQ2hhbmdlZDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZWQuZW1pdCh2YWx1ZUNoYW5nZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ3VzdG9taXplRmllbGRDbGljayhjdXN0b21pemVGaWVsZENsaWNrZWREYXRhOiBQZXBwZXJpRmllbGRDbGlja2VkRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm90aWZ5RmllbGRDbGlja2VkLmVtaXQoY3VzdG9taXplRmllbGRDbGlja2VkRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DdXN0b21pemVGaWVsZE1lbnVDbGlja2VkKGN1c3RvbWl6ZUZpZWxkQ2xpY2tlZERhdGE6IFBlcHBlcmlGaWVsZENsaWNrZWREYXRhKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub3RpZnlNZW51SXRlbUNsaWNrZWQuZW1pdChjdXN0b21pemVGaWVsZENsaWNrZWREYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJc0Rpc2FibGVkKHBlcHBlcmlPYmplY3RJbnB1dDogT2JqZWN0U2luZ2xlRGF0YSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVTZWxlY3Rpb25JdGVtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBJc05vdFNlbGVjdGFibGVGb3JBY3Rpb25zID0gcGVwcGVyaU9iamVjdElucHV0Py5EYXRhICYmICFwZXBwZXJpT2JqZWN0SW5wdXQuRGF0YS5Jc1NlbGVjdGFibGVGb3JBY3Rpb25zO1xyXG4gICAgICAgICAgICByZXR1cm4gSXNOb3RTZWxlY3RhYmxlRm9yQWN0aW9ucztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXRlbUNsaWNrZWQoZTogYW55LCBvYmplY3RTaW5nbGVEYXRhOiBPYmplY3RTaW5nbGVEYXRhKTogdm9pZCB7XHJcbiAgICAgICAgLy8gU2V0IHNlbGV0ZWQgaXRlbVxyXG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9IG9iamVjdFNpbmdsZURhdGEuRGF0YS5VSUQudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBpdGVtVHlwZSA9IG9iamVjdFNpbmdsZURhdGEuRGF0YS5UeXBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IGlzQ2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAob2JqZWN0U2luZ2xlRGF0YSAmJiBvYmplY3RTaW5nbGVEYXRhLkRhdGEgJiYgb2JqZWN0U2luZ2xlRGF0YS5EYXRhLklzU2VsZWN0YWJsZUZvckFjdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JZCA9IHRoaXMuZ2V0VW5pcUl0ZW1JZChpdGVtSWQsIGl0ZW1UeXBlKTtcclxuICAgICAgICAgICAgaXNDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1RhYmxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5VGh1bWJuYWlsQ2xpY2tlZC5lbWl0KG9iamVjdFNpbmdsZURhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRhYmxlUm93TW91c2VFbnRlcihldmVudDogYW55LCBpdGVtSWQ6IHN0cmluZywgaXRlbVR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVG91Y2hEZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdW5pcUl0ZW1JZCA9IHRoaXMuZ2V0VW5pcUl0ZW1JZChpdGVtSWQsIGl0ZW1UeXBlKTtcclxuICAgICAgICB0aGlzLmhvdmVyZWRJdGVtSWQgPSB1bmlxSXRlbUlkO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFibGVSb3dNb3VzZUxlYXZlKGV2ZW50OiBhbnksIGl0ZW1JZDogc3RyaW5nLCBpdGVtVHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ob3ZlcmVkSXRlbUlkID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYXJkTW91c2VFbnRlcihldmVudDogYW55LCBpdGVtSWQ6IHN0cmluZywgaXRlbVR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVG91Y2hEZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdW5pcUl0ZW1JZCA9IHRoaXMuZ2V0VW5pcUl0ZW1JZChpdGVtSWQsIGl0ZW1UeXBlKTtcclxuICAgICAgICB0aGlzLmhvdmVyZWRJdGVtSWQgPSB1bmlxSXRlbUlkO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FyZE1vdXNlTGVhdmUoZXZlbnQ6IGFueSwgaXRlbUlkOiBzdHJpbmcsIGl0ZW1UeXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhvdmVyZWRJdGVtSWQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaHVtYm5haWxzTGF5b3V0KCk6IExBWU9VVF9UWVBFIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXRUeXBlID09IG51bGwgPyBMQVlPVVRfVFlQRS5QZXBwZXJpQ2FyZCA6IHRoaXMubGF5b3V0VHlwZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxsIHRoaXMgZnVuY3Rpb24gYWZ0ZXIgcmVzaXplICsgYW5pbWF0aW9uIGVuZFxyXG4gICAgd2luUmVzaXplKGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcldpZHRoID0gMDtcclxuICAgICAgICB0aGlzLnNldExheW91dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrQnlGdW5jKGluZGV4OiBudW1iZXIsIGl0ZW06IE9iamVjdFNpbmdsZURhdGEpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBpdGVtICYmIGl0ZW0uRGF0YSAmJiBpdGVtLkRhdGEuVUlEID8gaXRlbS5EYXRhLlVJRCA6IGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFuSXRlbXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtc0NvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLnRvdGFsUm93cyA+IDAgPyBBcnJheTxPYmplY3RTaW5nbGVEYXRhPih0aGlzLnRvdGFsUm93cykgOiBbXTtcclxuICAgICAgICB0aGlzLnNjcm9sbEl0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVkT2JqZWN0SGVpZ2h0ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VUlDb250cm9sKCk6IFVJQ29udHJvbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudWlDb250cm9sO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRMaXN0RGF0YSh1aUNvbnRyb2w6IFVJQ29udHJvbCwgdG90YWxSb3dzOiBudW1iZXIsIGl0ZW1zOiBPYmplY3RTaW5nbGVEYXRhW10sIHZpZXdUeXBlOiBWSUVXX1RZUEUgPSBWSUVXX1RZUEUuVGFibGUsXHJcbiAgICAgICAgICAgICAgICAgaXRlbUNsYXNzOiBzdHJpbmcgPSAnJyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNDYXJkVmlldyA9IHZpZXdUeXBlID09PSBWSUVXX1RZUEUuQ2FyZDtcclxuICAgICAgICB0aGlzLnVpQ29udHJvbCA9IHVpQ29udHJvbDtcclxuICAgICAgICB0aGlzLml0ZW1DbGFzcyA9IGl0ZW1DbGFzcztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUlkID0gJyc7XHJcbiAgICAgICAgdGhpcy5pc1RhYmxlID0gdmlld1R5cGUgPT09IFZJRVdfVFlQRS5UYWJsZTtcclxuICAgICAgICB0aGlzLnRvdGFsUm93cyA9IHRvdGFsUm93cztcclxuXHJcbiAgICAgICAgLy8gZml4IGJ1ZyBmb3IgdGhlIHNjcm9sbFRvIHRoYXQgZG9lc24ndCB3b3JrIG9uIGVkZ2UgZGl2ICwgbm90IHdpbmRvd1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbGluZ0VsZW1lbnQgPSB0aGlzLmdldFBhcmVudENvbnRhaW5lcigpO1xyXG4gICAgICAgIHNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYW5JdGVtcygpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RJdGVtcyhpdGVtcywgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5vbkxpc3RMb2FkKG51bGwpO1xyXG5cclxuICAgICAgICB0aGlzLnNldExheW91dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxpc3RJdGVtcyhpdGVtczogT2JqZWN0U2luZ2xlRGF0YVtdLCBldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxJdGVtcyA9IHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICB0aGlzLml0ZW1zQ291bnRlciA9IGl0ZW1zLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMaXN0SXRlbShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgaXRlbXMgbGlzdFxyXG4gICAgICAgIGluZGV4ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgoaSA9PiBpICYmIGkuRGF0YSAmJiBpLkRhdGEuVUlEID09PSBkYXRhLlVJRCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XS5EYXRhID0gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVXBkYXRlIHNjcm9sbEl0ZW1zIGxpc3RcclxuICAgICAgICBpbmRleCA9IHRoaXMuc2Nyb2xsSXRlbXMuZmluZEluZGV4KGkgPT4gaSAmJiBpLkRhdGEgJiYgaS5EYXRhLlVJRCA9PT0gZGF0YS5VSUQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5zY3JvbGxJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxJdGVtc1tpbmRleF0uRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JDaGFuZ2VzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldElzSXRlbUVkaXRhYmxlKHVpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXMuZmlsdGVyKHggPT4geC5EYXRhLlVJRC50b1N0cmluZygpID09PSB1aWQpO1xyXG4gICAgICAgIGlmIChpdGVtLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1bMF0uRGF0YS5Jc0VkaXRhYmxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbURhdGFCeUlEKHVpZDogc3RyaW5nKTogT2JqZWN0c0RhdGFSb3cge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLkRhdGEuVUlELnRvU3RyaW5nKCkgPT09IHVpZCk/LkRhdGE7XHJcbiAgICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvdGFsUm93cyA9PSAwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibm8tZGF0YVwiPnt7IG5vRGF0YUZvdW5kTXNnIH19PC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwidG90YWxSb3dzID4gMFwiPlxyXG4gICAgPGRpdiAqbmdJZj1cImlzVGFibGVcIiAjdGFibGVIZWFkZXIgY2xhc3M9XCJ0YWJsZS1oZWFkZXJcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgJ2JlbG93LWhlYWRlci1hbmQtdG9wLWJhcicgOiBwYXJlbnRTY3JvbGwgPT0gbnVsbCB9XCIgKG1vdXNldXApPVwib25MaXN0UmVzaXplRW5kKCRldmVudClcIlxyXG4gICAgICAgIChtb3VzZWVudGVyKT1cIm9uTGlzdEhlYWRlck1vdXNlRW50ZXIoJGV2ZW50KVwiIChtb3VzZWxlYXZlKT1cIm9uTGlzdEhlYWRlck1vdXNlTGVhdmUoJGV2ZW50KVwiXHJcbiAgICAgICAgKG1vdXNlbW92ZSk9XCJvbkxpc3RSZXNpemUoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxmaWVsZHNldCBjbGFzcz1cInRhYmxlLWhlYWRlci1maWVsZHNldFwiPlxyXG4gICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiB1aUNvbnRyb2w/LkNvbnRyb2xGaWVsZHM7IGxldCBqID0gaW5kZXhcIiBjbGFzcz1cImhlYWRlci1jb2x1bW4gcHVsbC1sZWZ0IGZsaXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgd2lkdGg6IGZpZWxkLmNhbGNUaXRsZUNvbHVtbldpZHRoU3RyaW5nIH1cIiBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtcmVzaXppbmcnOiBmaWVsZC5BcGlOYW1lID09PSBwcmVzc2VkQ29sdW1uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lzLWZpcnN0JzogaiA9PT0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1sYXN0JzogaiA9PT0gdWlDb250cm9sPy5Db250cm9sRmllbGRzPy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJmaWVsZC5UaXRsZSAhPSAnJ1wiIGlkPVwie3sgZmllbGQuQXBpTmFtZSB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVhZGVyLWxhYmVsIGJvZHktc20gcHVsbC1sZWZ0IGZsaXAgdGV4dC1hbGlnbi17eyBmaWVsZC5MYXlvdXQuWEFsaWdubWVudCB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwie3sgZmllbGQuVGl0bGUgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZmllbGQuVGl0bGUgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cImZpZWxkLlRpdGxlID09ICcnXCIgaWQ9XCJ7eyBmaWVsZC5BcGlOYW1lIH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWFkZXItbGFiZWwgYm9keS1zbSBwdWxsLWxlZnQgZmxpcFwiPiZuYnNwOzwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzdXBwb3J0UmVzaXppbmdcIiBjbGFzcz1cInJlc2l6ZUJveCBwdWxsLXJpZ2h0IGZsaXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cIm9uTGlzdFJlc2l6ZVN0YXJ0KCRldmVudCwgZmllbGQuQXBpTmFtZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBlcC1pY29uIG5hbWU9XCJhcnJvdy11cFwiIGNsYXNzPVwiYXNjXCI+PC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICNub1ZpcnR1YWxTY3JvbGxDb250IFtuZ0NsYXNzXT1cInsgJ3RhYmxlLWJvZHknOiBpc1RhYmxlLCAnY2FyZHMtYm9keSc6ICFpc1RhYmxlIH1cIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGlzdERhdGFcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxpc3RUb3RhbHNcIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI2xpc3REYXRhPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGVwcGVyaU9iamVjdElucHV0IG9mIHNjcm9sbEl0ZW1zOyBsZXQgaW5kZXg7IGxldCBpc0ZpcnN0ID0gZmlyc3Q7IHRyYWNrQnk6IHRyYWNrQnlGdW5jXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVGFibGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJvd1wiXHJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJvblRhYmxlUm93TW91c2VFbnRlcigkZXZlbnQsIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVUlELCBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlR5cGUpXCJcclxuICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uVGFibGVSb3dNb3VzZUxlYXZlKCRldmVudCwgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5VSUQsIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVHlwZSlcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZDogcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5VSUQgKyBTRVBBUkFUT1IgKyBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlR5cGUgPT09IHNlbGVjdGVkSXRlbUlkXHJcbiAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7IGhlaWdodDogY2FsY3VsYXRlZE9iamVjdEhlaWdodCwgdmlzaWJpbGl0eTogc2hvd0l0ZW1zIHx8IHBlcHBlcmlPYmplY3RJbnB1dCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nIH1cIj5cclxuICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzcz1cInRhYmxlLXJvdy1maWVsZHNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uQmFja2dyb3VuZENvbG9yIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGVwLWZvcm0gW2NoZWNrRm9yQ2hhbmdlc109XCJjaGVja0ZvckNoYW5nZXNcIiBbdWlDb250cm9sSGVhZGVyXT1cInVpQ29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmaXJzdEZpZWxkQXNMaW5rXT1cImZpcnN0RmllbGRBc0xpbmtcIiBbcGVwcGVyaU9iamVjdElucHV0XT1cInBlcHBlcmlPYmplY3RJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjYW5FZGl0T2JqZWN0XT1cIiFkaXNhYmxlZCAmJiBwZXBwZXJpT2JqZWN0SW5wdXQ/LklzRWRpdGFibGVcIiBbb2JqZWN0SWRdPVwib2JqZWN0SWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50SWRdPVwicGFyZW50SWRcIiBbc2VhcmNoQ29kZV09XCJzZWFyY2hDb2RlXCIgW2xvY2tFdmVudHNdPVwiZGlzYWJsZVNlbGVjdGlvbkl0ZW1zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2xheW91dFR5cGVdPVwiTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlXCIgW2xpc3RUeXBlXT1cImxpc3RUeXBlXCIgW2lzQWN0aXZlXT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlVJRCArIFNFUEFSQVRPUiArIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVHlwZSA9PT0gc2VsZWN0ZWRJdGVtSWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlVJRCArIFNFUEFSQVRPUiArIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVHlwZSA9PT0gaG92ZXJlZEl0ZW1JZCkgJiYgIWlzVG91Y2hEZXZpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIChub3RpZnlWYWx1ZUNoYW5nZWQpPVwib25WYWx1ZUNoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChub3RpZnlGaWVsZENsaWNrZWQpPVwib25DdXN0b21pemVGaWVsZENsaWNrKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobm90aWZ5TWVudUl0ZW1DbGlja2VkKT1cIm9uQ3VzdG9taXplRmllbGRNZW51Q2xpY2tlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIml0ZW1DbGlja2VkKCRldmVudCwgcGVwcGVyaU9iamVjdElucHV0KVwiIFtwYWdlVHlwZV09XCJwYWdlVHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcGVwLWZvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1RhYmxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgW2NsYXNzXT1cIml0ZW1DbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJvbkNhcmRNb3VzZUVudGVyKCRldmVudCwgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5VSUQsIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVHlwZSlcIlxyXG4gICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwib25DYXJkTW91c2VMZWF2ZSgkZXZlbnQsIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVUlELCBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlR5cGUpXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ6IHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVUlEICsgU0VQQVJBVE9SICsgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5UeXBlID09PSBzZWxlY3RlZEl0ZW1JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFZpZXc6IGlzQ2FyZFZpZXdcclxuICAgICAgICAgICAgICAgICAgICB9XCIgY2xhc3M9XCJwdWxsLWxlZnQgZmxpcFwiXHJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7IGhlaWdodDogY2FsY3VsYXRlZE9iamVjdEhlaWdodCwgdmlzaWJpbGl0eTogc2hvd0l0ZW1zIHx8IHBlcHBlcmlPYmplY3RJbnB1dCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nIH1cIj5cclxuICAgICAgICAgICAgICAgIDxwZXAtZm9ybSBbZmlyc3RGaWVsZEFzTGlua109XCJpc0NhcmRWaWV3ID8gZmlyc3RGaWVsZEFzTGluayA6IGZhbHNlXCIgW2NoZWNrRm9yQ2hhbmdlc109XCJjaGVja0ZvckNoYW5nZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIFt1aUNvbnRyb2xIZWFkZXJdPVwidWlDb250cm9sXCIgW3BlcHBlcmlPYmplY3RJbnB1dF09XCJwZXBwZXJpT2JqZWN0SW5wdXRcIiBbaXNDYXJkVmlld109XCJpc0NhcmRWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICBbY2FuRWRpdE9iamVjdF09XCIhZGlzYWJsZWQgJiYgcGVwcGVyaU9iamVjdElucHV0Py5Jc0VkaXRhYmxlXCIgW29iamVjdElkXT1cIm9iamVjdElkXCJcclxuICAgICAgICAgICAgICAgICAgICBbcGFyZW50SWRdPVwicGFyZW50SWRcIiBbc2VhcmNoQ29kZV09XCJzZWFyY2hDb2RlXCIgW2xvY2tFdmVudHNdPVwiZGlzYWJsZVNlbGVjdGlvbkl0ZW1zXCJcclxuICAgICAgICAgICAgICAgICAgICBbbGF5b3V0VHlwZV09XCJnZXRUaHVtYm5haWxzTGF5b3V0KClcIiBbbGlzdFR5cGVdPVwibGlzdFR5cGVcIiBbaXNBY3RpdmVdPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5VSUQgKyBTRVBBUkFUT1IgKyBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlR5cGUgPT09IHNlbGVjdGVkSXRlbUlkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5VSUQgKyBTRVBBUkFUT1IgKyBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlR5cGUgPT09IGhvdmVyZWRJdGVtSWQpICYmICFpc1RvdWNoRGV2aWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIChub3RpZnlWYWx1ZUNoYW5nZWQpPVwib25WYWx1ZUNoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKG5vdGlmeUZpZWxkQ2xpY2tlZCk9XCJvbkN1c3RvbWl6ZUZpZWxkQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKG5vdGlmeU1lbnVJdGVtQ2xpY2tlZCk9XCJvbkN1c3RvbWl6ZUZpZWxkTWVudUNsaWNrZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIml0ZW1DbGlja2VkKCRldmVudCwgcGVwcGVyaU9iamVjdElucHV0KVwiIFtwYWdlVHlwZV09XCJwYWdlVHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9wZXAtZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjbGlzdFRvdGFscz5cclxuICAgIDxkaXYgKm5nSWY9XCJ0b3RhbHNSb3c/Lmxlbmd0aCA+IDAgJiYgdG90YWxzUm93Lmxlbmd0aCA8PSB1aUNvbnRyb2w/LkNvbnRyb2xGaWVsZHMubGVuZ3RoXCIgY2xhc3M9XCJ0YWJsZS10b3RhbFwiPlxyXG4gICAgICAgIDxmaWVsZHNldCBjbGFzcz1cInRhYmxlLWhlYWRlci1maWVsZHNldFwiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiB1aUNvbnRyb2w/LkNvbnRyb2xGaWVsZHM7IGxldCBqID0gaW5kZXhcIiBjbGFzcz1cInRvdGFsLWNvbHVtbiBwdWxsLWxlZnQgZmxpcFwiXHJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7IHdpZHRoOiBmaWVsZC5jYWxjVGl0bGVDb2x1bW5XaWR0aFN0cmluZyB9XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0b3RhbC1sYWJlbCBib2R5LXNtIHRleHQtYWxpZ24te3sgZmllbGQuTGF5b3V0LlhBbGlnbm1lbnQgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyB0b3RhbHNSb3dbal0gfX1cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=