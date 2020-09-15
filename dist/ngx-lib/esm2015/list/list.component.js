import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LAYOUT_TYPE, FIELD_TYPE, SCREEN_SIZE } from '@pepperi-addons/ngx-lib';
import { VirtualScrollComponent } from './virtual-scroll.component';
import disableScroll from 'disable-scroll';
// import { ApplicationState } from '../application-state/application-state';
import * as $ from 'jquery';
import * as i0 from "@angular/core";
import * as i1 from "@pepperi-addons/ngx-lib";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/checkbox";
import * as i4 from "@angular/material/icon";
import * as i5 from "@pepperi-addons/ngx-lib/icon";
import * as i6 from "./virtual-scroll.component";
import * as i7 from "@pepperi-addons/ngx-lib/form";
import * as i8 from "@angular/material/radio";
import * as i9 from "@ngx-translate/core";
const _c0 = ["noVirtualScrollCont"];
const _c1 = ["tableHeader"];
const _c2 = ["selectAllCB"];
function PepperiListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
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
const _c3 = function (a0) { return { visibility: a0 }; };
function PepperiListComponent_ng_container_1_div_1_mat_checkbox_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 13, 14);
    i0.ɵɵlistener("change", function PepperiListComponent_ng_container_1_div_1_mat_checkbox_3_Template_mat_checkbox_change_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.selectAllItemsForActions($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c3, ctx_r11.selectionTypeForActions == ctx_r11.SELECTION_TYPE_FOR_ACTIONS.Single || ctx_r11.selectionTypeForActions == ctx_r11.SELECTION_TYPE_FOR_ACTIONS.Multi && ctx_r11.hideAllSelectionInMulti ? "hidden" : "visible"))("indeterminate", ctx_r11.isAllSelected ? ctx_r11.unSelectedItems.size > 0 && ctx_r11.unSelectedItems.size < ctx_r11.totalRows : ctx_r11.selectedItems.size > 0 && !ctx_r11.getIsAllSelectedForActions())("disabled", ctx_r11.disabled || ctx_r11.selectionTypeForActions === ctx_r11.SELECTION_TYPE_FOR_ACTIONS.Single)("checked", ctx_r11.getIsAllSelectedForActions());
} }
function PepperiListComponent_ng_container_1_div_1_div_5_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("header-label body-sm pull-left flip text-align-", field_r16.Layout.XAlignment, "");
    i0.ɵɵpropertyInterpolate("id", field_r16.ApiName);
    i0.ɵɵpropertyInterpolate("title", field_r16.Title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r16.Title, " ");
} }
function PepperiListComponent_ng_container_1_div_1_div_5_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 21);
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("id", field_r16.ApiName);
} }
function PepperiListComponent_ng_container_1_div_1_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵlistener("mousedown", function PepperiListComponent_ng_container_1_div_1_div_5_div_3_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r25); const field_r16 = i0.ɵɵnextContext().$implicit; const ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.onListResizeStart($event, field_r16.ApiName); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵelement(2, "pep-icon", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵelement(1, "pep-icon", 26);
    i0.ɵɵelementEnd();
} }
const _c4 = function (a0) { return { "sort-by": a0 }; };
function PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 27);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "pep-icon", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r16 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r28 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", i0.ɵɵpipeBind1(1, 2, "LIST.SORT_ASC"));
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c4, field_r16.ApiName === ctx_r28.sortBy && ctx_r28.isAsc));
} }
function PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 27);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "pep-icon", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r16 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", i0.ɵɵpipeBind1(1, 2, "LIST.SORT_DESC"));
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c4, field_r16.ApiName === ctx_r29.sortBy && !ctx_r29.isAsc));
} }
const _c5 = function (a0) { return { "has-sorting": a0 }; };
function PepperiListComponent_ng_container_1_div_1_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtemplate(1, PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_1_Template, 2, 0, "mat-icon", 0);
    i0.ɵɵtemplate(2, PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_2_Template, 3, 6, "mat-icon", 25);
    i0.ɵɵtemplate(3, PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_3_Template, 3, 6, "mat-icon", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r16 = i0.ɵɵnextContext().$implicit;
    const ctx_r21 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c5, field_r16.ApiName === ctx_r21.sortBy));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r16.ApiName !== ctx_r21.sortBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r16.ApiName === ctx_r21.sortBy && !ctx_r21.isAsc);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r16.ApiName === ctx_r21.sortBy && ctx_r21.isAsc);
} }
const _c6 = function (a0) { return { width: a0 }; };
const _c7 = function (a0, a1, a2, a3, a4) { return { "support-sorting": a0, "has-sorting": a1, "is-resizing": a2, "is-first": a3, "is-last": a4 }; };
function PepperiListComponent_ng_container_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵlistener("click", function PepperiListComponent_ng_container_1_div_1_div_5_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r34); const field_r16 = ctx.$implicit; const ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.supportSorting ? ctx_r33.onListSortingChange(field_r16.ApiName, ctx_r33.sortBy !== null && ctx_r33.sortBy != field_r16.ApiName ? true : !ctx_r33.isAsc, $event) : false; });
    i0.ɵɵtemplate(1, PepperiListComponent_ng_container_1_div_1_div_5_label_1_Template, 2, 6, "label", 16);
    i0.ɵɵtemplate(2, PepperiListComponent_ng_container_1_div_1_div_5_label_2_Template, 2, 1, "label", 17);
    i0.ɵɵtemplate(3, PepperiListComponent_ng_container_1_div_1_div_5_div_3_Template, 3, 0, "div", 18);
    i0.ɵɵtemplate(4, PepperiListComponent_ng_container_1_div_1_div_5_div_4_Template, 4, 6, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r16 = ctx.$implicit;
    const j_r17 = ctx.index;
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(6, _c6, field_r16.calcTitleColumnWidthString))("ngClass", i0.ɵɵpureFunction5(8, _c7, ctx_r12.supportSorting, field_r16.ApiName === ctx_r12.sortBy, field_r16.ApiName === ctx_r12.pressedColumn, j_r17 === 0 && ctx_r12.selectionTypeForActions !== ctx_r12.SELECTION_TYPE_FOR_ACTIONS.Multi, j_r17 === (ctx_r12.uiControl == null ? null : ctx_r12.uiControl.ControlFields == null ? null : ctx_r12.uiControl.ControlFields.length) - 1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r16.Title != "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r16.Title == "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.supportResizing);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.supportSorting);
} }
const _c8 = function (a0) { return { "below-header-and-top-bar": a0 }; };
function PepperiListComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8, 9);
    i0.ɵɵlistener("mouseup", function PepperiListComponent_ng_container_1_div_1_Template_div_mouseup_0_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.onListResizeEnd($event); })("mouseenter", function PepperiListComponent_ng_container_1_div_1_Template_div_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.onListHeaderMouseEnter($event); })("mouseleave", function PepperiListComponent_ng_container_1_div_1_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.onListHeaderMouseLeave($event); })("mousemove", function PepperiListComponent_ng_container_1_div_1_Template_div_mousemove_0_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.onListResize($event); });
    i0.ɵɵelementStart(2, "fieldset", 10);
    i0.ɵɵtemplate(3, PepperiListComponent_ng_container_1_div_1_mat_checkbox_3_Template, 2, 6, "mat-checkbox", 11);
    i0.ɵɵelementStart(4, "fieldset");
    i0.ɵɵtemplate(5, PepperiListComponent_ng_container_1_div_1_div_5_Template, 5, 14, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c8, ctx_r6.parentScroll == null));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r6.selectionTypeForActions !== ctx_r6.SELECTION_TYPE_FOR_ACTIONS.None);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r6.uiControl == null ? null : ctx_r6.uiControl.ControlFields);
} }
function PepperiListComponent_ng_container_1_virtual_scroll_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c9 = function (a0, a1) { return { "table-body": a0, "cards-body": a1 }; };
function PepperiListComponent_ng_container_1_virtual_scroll_2_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "virtual-scroll", 30);
    i0.ɵɵlistener("load", function PepperiListComponent_ng_container_1_virtual_scroll_2_Template_virtual_scroll_load_0_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.onListLoad($event); })("change", function PepperiListComponent_ng_container_1_virtual_scroll_2_Template_virtual_scroll_change_0_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.onListChange($event); });
    i0.ɵɵtemplate(1, PepperiListComponent_ng_container_1_virtual_scroll_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵproperty("totalRows", ctx_r7.totalRows)("isTable", ctx_r7.isTable)("parentScroll", ctx_r7.parentScroll ? ctx_r7.parentScroll : ctx_r7.nativeWindow)("bufferAmount", ctx_r7.isReport ? ctx_r7.isTable ? 20 : 3 : ctx_r7.isTable ? 15 : 3)("ngClass", i0.ɵɵpureFunction2(6, _c9, ctx_r7.isTable, !ctx_r7.isTable));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function PepperiListComponent_ng_container_1_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiListComponent_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31, 32);
    i0.ɵɵtemplate(2, PepperiListComponent_ng_container_1_div_3_ng_container_2_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c9, ctx_r8.isTable, !ctx_r8.isTable));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function PepperiListComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PepperiListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiListComponent_ng_container_1_div_1_Template, 6, 5, "div", 4);
    i0.ɵɵtemplate(2, PepperiListComponent_ng_container_1_virtual_scroll_2_Template, 2, 9, "virtual-scroll", 5);
    i0.ɵɵtemplate(3, PepperiListComponent_ng_container_1_div_3_Template, 3, 5, "div", 6);
    i0.ɵɵtemplate(4, PepperiListComponent_ng_container_1_ng_container_4_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isTable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.useVirtualScroll);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.useVirtualScroll);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_checkbox_3_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 39);
    i0.ɵɵlistener("change", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_checkbox_3_Template_mat_checkbox_change_0_listener($event) { i0.ɵɵrestoreView(_r55); const pepperiObjectInput_r47 = i0.ɵɵnextContext(2).$implicit; const ctx_r54 = i0.ɵɵnextContext(2); return ctx_r54.selectItemForActions($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pepperiObjectInput_r47 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r52 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r52.getIsDisabled(pepperiObjectInput_r47))("ngStyle", i0.ɵɵpureFunction1(3, _c3, ctx_r52.isTouchDevice || (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r52.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r52.hoveredItemId || ctx_r52.isAllSelected || ctx_r52.selectedItems.size > 0 ? "visible" : "hidden"))("checked", ctx_r52.getIsSelectedForActions(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type));
} }
function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-radio-button", 40);
    i0.ɵɵlistener("change", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_radio_button_4_Template_mat_radio_button_change_0_listener($event) { i0.ɵɵrestoreView(_r59); const pepperiObjectInput_r47 = i0.ɵɵnextContext(2).$implicit; const ctx_r58 = i0.ɵɵnextContext(2); return ctx_r58.selectItemForActions($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pepperiObjectInput_r47 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r53 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r53.getIsDisabled(pepperiObjectInput_r47))("checked", ctx_r53.getIsSelectedForActions(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type));
} }
const _c10 = function (a0, a1) { return { selected: a0, highlighted: a1 }; };
const _c11 = function (a0, a1) { return { height: a0, visibility: a1 }; };
const _c12 = function (a0) { return { "background-color": a0 }; };
function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵlistener("mouseenter", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_div_mouseenter_1_listener($event) { i0.ɵɵrestoreView(_r63); const pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit; const ctx_r62 = i0.ɵɵnextContext(2); return ctx_r62.onTableRowMouseEnter($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); })("mouseleave", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_div_mouseleave_1_listener($event) { i0.ɵɵrestoreView(_r63); const pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit; const ctx_r65 = i0.ɵɵnextContext(2); return ctx_r65.onTableRowMouseLeave($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
    i0.ɵɵelementStart(2, "fieldset", 35);
    i0.ɵɵtemplate(3, PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_checkbox_3_Template, 1, 5, "mat-checkbox", 36);
    i0.ɵɵtemplate(4, PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_radio_button_4_Template, 1, 2, "mat-radio-button", 37);
    i0.ɵɵelementStart(5, "pep-form", 38);
    i0.ɵɵlistener("notifyValueChanged", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyValueChanged_5_listener($event) { i0.ɵɵrestoreView(_r63); const ctx_r67 = i0.ɵɵnextContext(3); return ctx_r67.onValueChanged($event); })("notifyFieldClicked", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyFieldClicked_5_listener($event) { i0.ɵɵrestoreView(_r63); const ctx_r68 = i0.ɵɵnextContext(3); return ctx_r68.onCustomizeFieldClick($event); })("notifyMenuItemClicked", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyMenuItemClicked_5_listener($event) { i0.ɵɵrestoreView(_r63); const ctx_r69 = i0.ɵɵnextContext(3); return ctx_r69.onCustomizeFieldMenuClicked($event); })("click", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_click_5_listener($event) { i0.ɵɵrestoreView(_r63); const pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit; const ctx_r70 = i0.ɵɵnextContext(2); return ctx_r70.itemClicked($event, pepperiObjectInput_r47); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit;
    const ctx_r50 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(19, _c10, ctx_r50.isItemSelected(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type), (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r50.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r50.selectedItemId))("ngStyle", i0.ɵɵpureFunction2(22, _c11, ctx_r50.calculatedObjectHeight, ctx_r50.showItems || pepperiObjectInput_r47 ? "visible" : "hidden"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(25, _c12, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.BackgroundColor));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r50.selectionTypeForActions == ctx_r50.SELECTION_TYPE_FOR_ACTIONS.Multi || ctx_r50.selectionTypeForActions == ctx_r50.SELECTION_TYPE_FOR_ACTIONS.SingleAction);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r50.selectionTypeForActions == ctx_r50.SELECTION_TYPE_FOR_ACTIONS.Single);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checkForChanges", ctx_r50.checkForChanges)("uiControlHeader", ctx_r50.uiControl)("firstFieldAsLink", ctx_r50.firstFieldAsLink)("pepperiObjectInput", pepperiObjectInput_r47)("canEditObject", !ctx_r50.disabled && (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.IsEditable))("objectId", ctx_r50.objectId)("parentId", ctx_r50.parentId)("searchCode", ctx_r50.searchCode)("lockEvents", ctx_r50.disableSelectionItems)("isReport", ctx_r50.isReport)("layoutType", ctx_r50.LAYOUT_TYPE.PepperiTable)("listType", ctx_r50.listType)("isActive", ((pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r50.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r50.selectedItemId || (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r50.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r50.hoveredItemId) && !ctx_r50.isTouchDevice)("pageType", ctx_r50.pageType);
} }
function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_mat_checkbox_2_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 44);
    i0.ɵɵlistener("change", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_mat_checkbox_2_Template_mat_checkbox_change_0_listener($event) { i0.ɵɵrestoreView(_r75); const pepperiObjectInput_r47 = i0.ɵɵnextContext(2).$implicit; const ctx_r74 = i0.ɵɵnextContext(2); return ctx_r74.selectItemForActions($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pepperiObjectInput_r47 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r73 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r73.getIsDisabled(pepperiObjectInput_r47))("checked", ctx_r73.getIsSelectedForActions(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type));
} }
const _c13 = function (a0, a1, a2) { return { selected: a0, highlighted: a1, cardView: a2 }; };
function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 41);
    i0.ɵɵlistener("mouseenter", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_div_mouseenter_1_listener($event) { i0.ɵɵrestoreView(_r79); const pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit; const ctx_r78 = i0.ɵɵnextContext(2); return ctx_r78.onCardMouseEnter($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); })("mouseleave", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_div_mouseleave_1_listener($event) { i0.ɵɵrestoreView(_r79); const pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit; const ctx_r81 = i0.ɵɵnextContext(2); return ctx_r81.onCardMouseLeave($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
    i0.ɵɵtemplate(2, PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_mat_checkbox_2_Template, 1, 2, "mat-checkbox", 42);
    i0.ɵɵelementStart(3, "pep-form", 43);
    i0.ɵɵlistener("notifyValueChanged", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyValueChanged_3_listener($event) { i0.ɵɵrestoreView(_r79); const ctx_r83 = i0.ɵɵnextContext(3); return ctx_r83.onValueChanged($event); })("notifyFieldClicked", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyFieldClicked_3_listener($event) { i0.ɵɵrestoreView(_r79); const ctx_r84 = i0.ɵɵnextContext(3); return ctx_r84.onCustomizeFieldClick($event); })("notifyMenuItemClicked", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyMenuItemClicked_3_listener($event) { i0.ɵɵrestoreView(_r79); const ctx_r85 = i0.ɵɵnextContext(3); return ctx_r85.onCustomizeFieldMenuClicked($event); })("click", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_click_3_listener($event) { i0.ɵɵrestoreView(_r79); const pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit; const ctx_r86 = i0.ɵɵnextContext(2); return ctx_r86.itemClicked($event, pepperiObjectInput_r47); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit;
    const ctx_r51 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r51.itemClass);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(19, _c13, ctx_r51.isItemSelected(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type), (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r51.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r51.selectedItemId, ctx_r51.isCardView))("ngStyle", i0.ɵɵpureFunction2(23, _c11, ctx_r51.calculatedObjectHeight, ctx_r51.showItems || pepperiObjectInput_r47 ? "visible" : "hidden"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r51.showSelection);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("firstFieldAsLink", ctx_r51.isCardView ? ctx_r51.firstFieldAsLink : false)("checkForChanges", ctx_r51.checkForChanges)("uiControlHeader", ctx_r51.uiControl)("pepperiObjectInput", pepperiObjectInput_r47)("isCardView", ctx_r51.isCardView)("canEditObject", !ctx_r51.disabled && (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.IsEditable))("objectId", ctx_r51.objectId)("parentId", ctx_r51.parentId)("searchCode", ctx_r51.searchCode)("lockEvents", ctx_r51.disableSelectionItems)("layoutType", ctx_r51.getThumbnailsLayout())("listType", ctx_r51.listType)("isActive", ((pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r51.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r51.selectedItemId || (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r51.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r51.hoveredItemId) && !ctx_r51.isTouchDevice)("pageType", ctx_r51.pageType);
} }
function PepperiListComponent_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template, 6, 27, "ng-container", 0);
    i0.ɵɵtemplate(2, PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template, 4, 26, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r46 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r46.isTable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r46.isTable);
} }
function PepperiListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiListComponent_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 33);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r3.scrollItems)("ngForTrackBy", ctx_r3.trackByFunc);
} }
function PepperiListComponent_ng_template_4_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r91 = ctx.$implicit;
    const j_r92 = ctx.index;
    const ctx_r90 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c6, field_r91.calcTitleColumnWidthString));
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("total-label body-sm text-align-", field_r91.Layout.XAlignment, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r90.totalsRow[j_r92], " ");
} }
function PepperiListComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵelementStart(1, "fieldset", 10);
    i0.ɵɵtemplate(2, PepperiListComponent_ng_template_4_div_0_div_2_Template, 3, 7, "div", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r89 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r89.uiControl == null ? null : ctx_r89.uiControl.ControlFields);
} }
function PepperiListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PepperiListComponent_ng_template_4_div_0_Template, 3, 1, "div", 45);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", (ctx_r5.totalsRow == null ? null : ctx_r5.totalsRow.length) > 0 && ctx_r5.totalsRow.length <= (ctx_r5.uiControl == null ? null : ctx_r5.uiControl.ControlFields.length));
} }
export var SELECTION_TYPE_FOR_ACTIONS;
(function (SELECTION_TYPE_FOR_ACTIONS) {
    SELECTION_TYPE_FOR_ACTIONS[SELECTION_TYPE_FOR_ACTIONS["None"] = 0] = "None";
    SELECTION_TYPE_FOR_ACTIONS[SELECTION_TYPE_FOR_ACTIONS["Single"] = 1] = "Single";
    SELECTION_TYPE_FOR_ACTIONS[SELECTION_TYPE_FOR_ACTIONS["Multi"] = 2] = "Multi";
    SELECTION_TYPE_FOR_ACTIONS[SELECTION_TYPE_FOR_ACTIONS["SingleAction"] = 3] = "SingleAction";
})(SELECTION_TYPE_FOR_ACTIONS || (SELECTION_TYPE_FOR_ACTIONS = {}));
export var VIEW_TYPE;
(function (VIEW_TYPE) {
    VIEW_TYPE[VIEW_TYPE["None"] = 0] = "None";
    VIEW_TYPE[VIEW_TYPE["Card"] = 1] = "Card";
    VIEW_TYPE[VIEW_TYPE["Line"] = 2] = "Line";
    VIEW_TYPE[VIEW_TYPE["Table"] = 3] = "Table";
    VIEW_TYPE[VIEW_TYPE["Map"] = 4] = "Map";
})(VIEW_TYPE || (VIEW_TYPE = {}));
export class SelectionData {
}
export class PepperiListComponent {
    constructor(element, layoutService, cd, renderer) {
        this.element = element;
        this.layoutService = layoutService;
        this.cd = cd;
        this.renderer = renderer;
        this.currentListTypeTranslation = '';
        this.noDataFoundMsg = 'Items not found';
        this.selectionTypeForActions = SELECTION_TYPE_FOR_ACTIONS.Multi;
        this.hideAllSelectionInMulti = false;
        this.top = -1;
        this.listType = '';
        this.objectId = '0';
        this.parentId = '0';
        this.searchCode = '0';
        // @Input() showTopBorder = false;
        this.firstFieldAsLink = false;
        this.supportSorting = true;
        this.supportResizing = true;
        this.parentScroll = null;
        this.disabled = false;
        this.isPrinting = false;
        this.disableSelectionItems = false;
        this.isReport = false;
        this.layoutType = null;
        this.pageType = '';
        this.totalsRow = [];
        this.isTouchDevice = false;
        this.notifyThumbnailClicked = new EventEmitter();
        this.notifyFieldClicked = new EventEmitter();
        this.notifyMenuItemClicked = new EventEmitter();
        this.notifyValueChanged = new EventEmitter();
        this.notifyListChanged = new EventEmitter();
        this.notifySortingChanged = new EventEmitter();
        this.notifySelectedItemsChanged = new EventEmitter();
        this.notifySelectAllSingleActionClicked = new EventEmitter();
        this.notifySingleActionClicked = new EventEmitter();
        this.notifyListLoad = new EventEmitter();
        this.LAYOUT_TYPE = LAYOUT_TYPE;
        this.SELECTION_TYPE_FOR_ACTIONS = SELECTION_TYPE_FOR_ACTIONS;
        this.uiControl = null;
        this.totalRows = -1;
        this.isTable = false;
        this.hasColumnWidthOfTypePercentage = true;
        this.items = null;
        this.showSelection = false;
        this.isCardView = false;
        this.itemsCounter = 0;
        this.showItems = true;
        this.SEPARATOR = ',';
        this.isAllSelected = false;
        this.selectedItems = new Map();
        this.unSelectedItems = new Map();
        // public tableHeaderWidth: string;
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
        // For sorting
        this.isAsc = true;
        this.sortBy = '';
        this.isUserSelected = false;
        this.checkForChanges = null;
        this.useVirtualScroll = true;
        this.layoutService.onResize$
            .pipe(delay(0))
            .subscribe(size => {
            this.screenSize = size;
        });
        // this.checkForChanges = new Date().getTime();
        // this.state.stateKey = location.href;
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
        if (this.notifyListChanged) {
            this.notifyListChanged.unsubscribe();
        }
        if (this.notifySortingChanged) {
            this.notifySortingChanged.unsubscribe();
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
        this.saveSortingToSession();
    }
    setContainerWidth() {
        const selectionCheckBoxWidth = this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi ? 44 : 0;
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
    saveSortingToSession() {
        // this.state.setItemInState(PepperiListComponent.SORT_BY_STATE_KEY, this.sortBy);
        // this.state.setItemInState(PepperiListComponent.ASCENDING_STATE_KEY, this.isAsc);
        // this.state.writeToSession();
    }
    onMouseDown(event) {
        const self = this;
        // if (!this.element.nativeElement.contains(event.target) || event.target.className === 'scrollable-content') {
        //     setTimeout(() => {
        //         if (self.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi || self.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
        //         }
        //         // self.selectedItemId = '';
        //         //self.hoveredItemId = '';
        //     }, 500);
        // }
    }
    removeTable() {
        this.cleanItems();
        this.uiControl = null;
    }
    getTopItems() {
        return this.isTable ? PepperiListComponent.TOP_ITEMS_TABLE : PepperiListComponent.TOP_ITEMS_THUMBNAILS;
    }
    toggleItems(isVisible) {
        this.showItems = isVisible;
        this.lockEvents = !isVisible;
        if (this.useVirtualScroll) {
            if (isVisible) {
                disableScroll.off();
            }
            else {
                disableScroll.on();
            }
        }
    }
    updateScrollItems(startIndex, endIndex, loadInChunks = true) {
        this.scrollItems = this.items.slice(startIndex, endIndex);
        // if (!loadInChunks) {
        //     this.scrollItems = this.items.slice(startIndex, endIndex).map((item) => item).filter((item) => item != null);
        // } else {
        //     // this.scrollItems = this.items.slice(startIndex, endIndex);
        //     const ITEMS_RENDERED_AT_ONCE = 15;//this.isTable ? 1 : 7;
        //     const INTERVAL_IN_MS = 10;
        //     let currentIndex = 0;
        //     const tmp = this.items.slice(startIndex, endIndex);
        //     // this.scrollItems = [];
        //     const interval = setInterval(() => {
        //         const nextIndex = currentIndex + ITEMS_RENDERED_AT_ONCE;
        //         for (let i = currentIndex; i < nextIndex; i++) {
        //             // if (currentIndex === 0) {
        //             //     this.scrollItems = [];
        //             // }
        //             if (i >= tmp.length) {
        //                 clearInterval(interval);
        //                 break;
        //             }
        //             if (this.scrollItems[i]) {
        //                 this.scrollItems[i] = tmp[i];
        //             } else {
        //                 this.scrollItems.push(tmp[i]);
        //             }
        //         }
        //         currentIndex += ITEMS_RENDERED_AT_ONCE;
        //     }, INTERVAL_IN_MS);
        // }
    }
    setSelectionItems(itemId, uniqItemId, isChecked) {
        // Set selected item checkbox
        if (this.isAllSelected) {
            if (isChecked) {
                this.unSelectedItems.delete(itemId);
                this.selectedItems.set(itemId, uniqItemId);
            }
            else {
                this.selectedItems.delete(itemId);
                this.unSelectedItems.set(itemId, uniqItemId);
            }
        }
        else {
            if (isChecked) {
                this.unSelectedItems.delete(itemId);
                this.selectedItems.set(itemId, uniqItemId);
            }
            else {
                this.selectedItems.delete(itemId);
                this.unSelectedItems.set(itemId, uniqItemId);
            }
        }
    }
    getUniqItemId(itemId, itemType = '') {
        return itemId + this.SEPARATOR + itemType;
    }
    isItemSelected(itemId, itemType = '') {
        let isSelected = false;
        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction ||
            this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
            isSelected = this.selectedItems.has(itemId) || this.isAllSelected && !this.unSelectedItems.has(itemId);
        }
        else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
            const uniqItemId = this.getUniqItemId(itemId, itemType);
            isSelected = uniqItemId === this.selectedItemId;
        }
        return isSelected;
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
        const selectionCheckBoxWidth = this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi ? 44 : 0;
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
        if (this.useVirtualScroll) {
            this.tableStartWidth = this.virtualScroll.contentElementRef.nativeElement.offsetWidth;
        }
        else {
            // Set the tableStartWidth to the container offsetWidth
            this.tableStartWidth = this.noVirtualScrollCont.nativeElement.offsetWidth;
        }
    }
    onListResize(event) {
        if (this.pressedColumn.length > 0) {
            const widthToAdd = this.layoutService.isRtl() ? this.startX - event.x : event.x - this.startX;
            // Set the width of the column and the container of the whole columns.
            if (this.startWidth + widthToAdd >= PepperiListComponent.MINIMUM_COLUMN_WIDTH || widthToAdd > 0) {
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
                // Set timeout 0 for onListSortingChange will have the pressedColumn.
                const self = this;
                setTimeout(() => {
                    self.initResizeData();
                }, 0);
            }
        }
    }
    onListSortingChange(sortBy, isAsc, event = null) {
        if (this.isPrinting) {
            return;
        }
        if (this.pressedColumn.length > 0 || (event && $(event.srcElement).parents('.resizeBox').length > 0)) {
            return;
        }
        if (this.sortBy !== sortBy || this.isAsc !== isAsc) {
            this.sortBy = sortBy;
            this.isAsc = isAsc;
            this.saveSortingToSession();
            this.notifySortingChanged.emit({ sortBy, isAsc });
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
            let getItemsFromApi = false;
            let index = event.start;
            while (!getItemsFromApi && index < event.end) {
                if (!this.items[index]) {
                    getItemsFromApi = true;
                }
                index++;
            }
            // Get bulk from api.
            if (getItemsFromApi) {
                const top = this.getTopItems() - 1;
                if (event.addAtStart) {
                    event.fromIndex = Math.max(event.start - (top - (event.end - event.start)), 0);
                    event.toIndex = event.end;
                }
                else {
                    event.fromIndex = event.start;
                    event.toIndex = Math.min(event.end + (top - (event.end - event.start)), this.totalRows);
                }
                this.notifyListChanged.emit(event);
                // this.lockEvents = true;
            }
            else {
                // this.scrollItems = this.items.slice(event.start, event.end);
                this.toggleItems(true);
            }
        }
    }
    // onScrollerListChange(event: any) {
    //     if (this.isPrinting) {
    //         return;
    //     }
    //     // For other events do nothing.
    //     if (typeof event.startIndex === 'undefined' || typeof event.endIndex === 'undefined') {
    //         return;
    //     }
    //     if (!this.lockEvents) {
    //         this.toggleItems(false);
    //         this.updateScrollItems(event.startIndex, event.endIndex);
    //         let getItemsFromApi = false;
    //         let index: number = event.startIndex;
    //         while (!getItemsFromApi && index < event.endIndex) {
    //             if (!this.items[index]) {
    //                 getItemsFromApi = true;
    //             }
    //             index++;
    //         }
    //         // Get bulk from api.
    //         if (getItemsFromApi) {
    //             const top = this.getTopItems() - 1;
    //             // if (event.addAtStart) {
    //             //     event.fromIndex = Math.max(event.start - (top - (event.end - event.start)), 0);
    //             //     event.toIndex = event.end;
    //             // } else {
    //             event.fromIndex = event.startIndex;
    //             event.toIndex = Math.min(event.endIndex + (top - (event.endIndex - event.startIndex)), this.totalRows);
    //             // }
    //             this.notifyListChanged.emit(event);
    //             // this.lockEvents = true;
    //         } else {
    //             // this.scrollItems = this.items.slice(event.start, event.end);
    //             this.toggleItems(true);
    //         }
    //     }
    // }
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
    getIsAllSelectedForActions() {
        let res = false;
        if (this.isAllSelected) {
            if (this.unSelectedItems.size === 0) {
                res = true;
            }
        }
        else {
            if (this.selectedItems.size === this.totalRows) {
                res = this.getIsAllSelected(this.scrollItems);
            }
            else if (this.selectedItems.size < this.totalRows) {
                // for (let index = 0; index < this.scrollItems.length; index++) {
                //     const pepperiObjectInput = this.scrollItems[index];
                for (const pepperiObjectInput of this.scrollItems) {
                    res = pepperiObjectInput && pepperiObjectInput.Data &&
                        this.selectedItems.has(pepperiObjectInput.Data.UID.toString());
                    if (!res) {
                        break;
                    }
                }
            }
        }
        return res;
    }
    setIsAllSelected(isChecked) {
        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi ||
            this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
            this.selectAllCB.checked = isChecked;
            this.isAllSelected = isChecked;
        }
    }
    selectAllItemsForActions(e) {
        // For material checkbox || radio.
        const isChecked = e.source.checked;
        // Indeterminate mode
        let isIndeterminate = false;
        const currentList = this.isAllSelected ? this.unSelectedItems : this.selectedItems;
        if (currentList.size > 0) {
            isIndeterminate = true;
            this.isAllSelected = false;
            this.notifySelectedItemsChanged.emit(0);
            e.source.checked = false;
        }
        this.selectedItems.clear();
        this.unSelectedItems.clear();
        if (!isIndeterminate) {
            this.isAllSelected = isChecked;
            if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
                // Add all or remove all
                this.notifySelectAllSingleActionClicked.emit(isChecked);
            }
            else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
                if (!isChecked) {
                    this.notifySelectedItemsChanged.emit(0);
                    this.selectedItemId = '';
                }
                else {
                    const filteredItems = this.items.filter(item => item.Data && item.Data.IsSelectableForActions);
                    this.notifySelectedItemsChanged.emit(filteredItems.length);
                }
            }
        }
        else {
            if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
                // Remove all
                this.notifySelectAllSingleActionClicked.emit(false);
            }
        }
    }
    getIsSelectedForActions(itemId, isSelectableForActions, itemType = '') {
        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
            return this.selectedItemId === this.getUniqItemId(itemId, itemType);
        }
        else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
            let res = this.isAllSelected || this.selectedItems.has(itemId);
            if (this.unSelectedItems.has(itemId)) {
                res = false;
            }
            return res;
        }
        else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
            if (!isSelectableForActions) {
                return false;
            }
            else {
                let res = this.isAllSelected || this.selectedItems.has(itemId);
                if (this.unSelectedItems.has(itemId)) {
                    res = false;
                }
                return res;
            }
        }
    }
    selectItemForActions(e, itemId, isSelectableForActions, itemType = '') {
        // For material checkbox || radio.
        const isChecked = e.source.checked;
        this.setItemClicked(itemId, isSelectableForActions, itemType, isChecked);
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
        if (this.isTable) {
            if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
                this.setItemClicked(itemId, objectSingleData.Data.IsSelectableForActions, itemType, isChecked);
            }
            else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.None) {
                // Just mark the row as highlighted
                this.setItemClicked(itemId, objectSingleData.Data.IsSelectableForActions, itemType, true);
            }
        }
        else {
            if (this.disabled) {
                return;
            }
            this.notifyThumbnailClicked.emit(objectSingleData);
        }
    }
    setItemClicked(itemId, isSelectableForActions, itemType, isChecked) {
        const uniqItemId = this.getUniqItemId(itemId, itemType);
        // select the selected item.
        if (isChecked) {
            // Set seleted item
            this.selectedItemId = uniqItemId;
        }
        else {
            if (this.selectedItemId === uniqItemId) {
                this.selectedItemId = '';
            }
        }
        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
            this.notifySelectedItemsChanged.emit(this.selectedItemId.length === 0 ? 0 : 1);
        }
        else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
            this.setSelectionItems(itemId, uniqItemId, isChecked);
            this.notifySingleActionClicked.emit({ id: itemId, selected: isChecked });
        }
        else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
            if (isSelectableForActions) {
                this.setSelectionItems(itemId, uniqItemId, isChecked);
                const currentList = this.isAllSelected ? this.unSelectedItems : this.selectedItems;
                const currentListCount = this.isAllSelected ? this.totalRows - currentList.size : currentList.size;
                this.notifySelectedItemsChanged.emit(currentListCount);
            }
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
        if (typeof this.virtualScroll !== 'undefined') {
            this.virtualScroll.refresh();
        }
        this.containerWidth = 0;
        this.setLayout();
    }
    trackByFunc(index, item) {
        return item && item.Data && item.Data.UID ? item.Data.UID : index;
        // let res: string = "";
        // if (item && item.Data && item.Data.UID) {
        //    res = item.Data.UID + "_" + this.listType + "_" + (this.isTable ? "Table" : "Thumbnails");
        // }
        // else {
        //    res = index + "_" + this.listType + "_" + (this.isTable ? "Table" : "Thumbnails");
        // }
        // return res;
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
    initListData(uiControl, totalRows, items, viewType = VIEW_TYPE.Table, itemClass = '', showSelection = false) {
        // const selectedItemsFromState: Map<string, string> =
        //     this.state.getItemFromState(PepperiListComponent.SELECTED_ITEMS_STATE_KEY);
        // if (selectedItemsFromState != null && typeof selectedItemsFromState.size !== 'undefined' &&
        //     selectedItemsFromState.size > 0) {
        //     this.selectedItems = selectedItemsFromState;
        //     this.state.setItemInState(PepperiListComponent.SELECTED_ITEMS_STATE_KEY, new Map<string, string>());
        // } else {
        this.selectedItems.clear();
        // }
        // const unSelectedItemsFromState: Map<string, string> =
        //     this.state.getItemFromState(PepperiListComponent.UN_SELECTED_ITEMS_STATE_KEY);
        // if (unSelectedItemsFromState != null && typeof unSelectedItemsFromState.size !== 'undefined' &&
        //     unSelectedItemsFromState.size > 0) {
        //     this.unSelectedItems = unSelectedItemsFromState;
        //     this.state.setItemInState(PepperiListComponent.UN_SELECTED_ITEMS_STATE_KEY, new Map<string, string>());
        // } else {
        this.unSelectedItems.clear();
        // }
        // if (this.state.getItemFromState(PepperiListComponent.ALL_SELECTED_STATE_KEY) != null) {
        //     let isAllSelectedFromState = this.state.getItemFromState(PepperiListComponent.ALL_SELECTED_STATE_KEY);
        //     this.isAllSelected = isAllSelectedFromState && this.getIsAllSelected(items);
        //     this.state.setItemInState(PepperiListComponent.ALL_SELECTED_STATE_KEY, false);
        // } else {
        this.isAllSelected = false;
        // }
        // if (this.state.getItemFromState(PepperiListComponent.SORT_BY_STATE_KEY) !== '') {
        //     this.sortBy = this.state.getItemFromState(PepperiListComponent.SORT_BY_STATE_KEY);
        //     this.state.setItemInState(PepperiListComponent.SORT_BY_STATE_KEY, '');
        // }
        // if (this.state.getItemFromState(PepperiListComponent.ASCENDING_STATE_KEY) != null) {
        //     this.isAsc = this.state.getItemFromState(PepperiListComponent.ASCENDING_STATE_KEY);
        //     this.state.setItemInState(PepperiListComponent.ASCENDING_STATE_KEY, false);
        // }
        const currentList = this.isAllSelected ? this.unSelectedItems : this.selectedItems;
        const currentListCount = this.isAllSelected ? this.totalRows - currentList.size : currentList.size;
        this.notifySelectedItemsChanged.emit(currentListCount);
        this.isCardView = viewType === VIEW_TYPE.Card;
        this.showSelection = showSelection;
        this.uiControl = uiControl;
        this.itemClass = itemClass;
        this.selectedItemId = '';
        this.isTable = viewType === VIEW_TYPE.Table;
        this.totalRows = totalRows;
        // fix bug for the scrollTo that doesn't work on edge div , not window
        const scrollingElement = this.getParentContainer();
        if (scrollingElement === window) {
            scrollingElement.scrollTo(0, 0);
        }
        else {
            this.focusOnAnItem(0);
        }
        this.cleanItems();
        if (this.totalRows === items.length) {
            this.useVirtualScroll = false;
            this.updateListItems(items, null);
            this.onListLoad(null);
        }
        else {
            this.useVirtualScroll = true;
            const numberOfStartItems = this.getNumberOfStartItems();
            this.updateListItems(items, { start: 0, end: numberOfStartItems, fromIndex: 0, toIndex: numberOfStartItems, addAtStart: true });
            if (typeof this.virtualScroll !== 'undefined') {
                this.virtualScroll.refresh();
            }
        }
        this.setLayout();
    }
    getIsAllSelected(items) {
        let result = true;
        if (this.selectedItems.size > 0 && items.length > 0) {
            // for (let index = 0; index < items.length; index++) {
            // const pepperiObjectInput = items[index];
            for (const pepperiObjectInput of items) {
                if (!(pepperiObjectInput && pepperiObjectInput.Data && this.selectedItems.has(pepperiObjectInput.Data.UID.toString()))) {
                    result = false;
                    break;
                }
            }
        }
        else {
            result = false;
        }
        return result;
    }
    getNumberOfStartItems() {
        let numberOfStartItems = 20;
        if ((this.screenSize === SCREEN_SIZE.XL) ||
            (this.screenSize === SCREEN_SIZE.LG)) {
            numberOfStartItems = this.isTable ? 50 : 40;
        }
        else if (this.screenSize === SCREEN_SIZE.MD) {
            numberOfStartItems = this.isTable ? 30 : 20;
        }
        else if (this.screenSize === SCREEN_SIZE.SM) {
            numberOfStartItems = this.isTable ? 20 : 10;
        }
        else if (this.screenSize === SCREEN_SIZE.XS) {
            numberOfStartItems = this.isTable ? 15 : 5;
        }
        return numberOfStartItems;
    }
    setSelectedIds(selectedIds, items = null) {
        this.selectedItems.clear();
        this.isAllSelected = false;
        if (selectedIds) {
            // for (let i = 0; i < selected.length; i++) {
            for (const selectedId of selectedIds) {
                const tmp = selectedId.split(this.SEPARATOR);
                if (tmp && tmp.length > 0) {
                    const itemId = tmp[0];
                    const itemType = tmp.length > 1 ? tmp[1] : '';
                    this.selectedItems.set(itemId, this.getUniqItemId(itemId, itemType));
                }
            }
            this.isAllSelected = this.getIsAllSelected(items ? items : this.scrollItems); // this.selectedItems.Count() === this.totalRows;
            this.setSelectionDataInSession();
        }
        if (typeof this.virtualScroll !== 'undefined') {
            this.virtualScroll.refresh();
        }
    }
    setSelectionDataInSession() {
        // this.state.setItemInState(PepperiListComponent.SELECTED_ITEMS_STATE_KEY, this.selectedItems);
        // this.state.setItemInState(PepperiListComponent.UN_SELECTED_ITEMS_STATE_KEY, this.unSelectedItems);
        // this.state.setItemInState(PepperiListComponent.ALL_SELECTED_STATE_KEY, this.isAllSelected);
    }
    updateListItems(items, event) {
        if (this.useVirtualScroll) {
            // Clean array
            if (this.itemsCounter + items.length > PepperiListComponent.TOP_ITEMS_ARRAY) {
                this.cleanItems();
            }
            const startIndex = event.fromIndex ? event.fromIndex : event.start;
            for (let i = 0; i < items.length; i++) {
                if (!this.items[i + startIndex]) {
                    this.items[i + startIndex] = items[i];
                    this.itemsCounter += 1;
                }
            }
            this.updateScrollItems(event.start, event.end);
            this.toggleItems(true);
            // this.lockEvents = false;
        }
        else {
            this.scrollItems = this.items = items;
            this.itemsCounter = items.length;
        }
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
    focusOnAnItem(itemIndex) {
        if (typeof this.virtualScroll !== 'undefined') {
            this.virtualScroll.scrollInto(itemIndex);
        }
    }
    getSelectedItemsData(isForEdit = false) {
        const res = new SelectionData();
        if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Single) {
            const tmp = this.selectedItemId.split(this.SEPARATOR);
            res.selectionType = 1;
            res.rows = [tmp[0]];
            res.rowTypes = [tmp[1]];
        }
        else if (this.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi) {
            const items = [];
            const itemTypes = [];
            let selectionType = 1;
            let currentList = [];
            // For edit - only the selected items.
            if (isForEdit) {
                if (!this.isAllSelected) {
                    currentList = Array.from(this.selectedItems.values());
                }
                else {
                    // Get the id's of the items that not founded in unSelectedItems.
                    this.items.forEach(item => {
                        if (item && !this.unSelectedItems.has(item.Data.UID.toString())) {
                            currentList.push(this.getUniqItemId(item.Data.UID.toString(), item.Data.Type.toString()));
                        }
                    });
                }
            }
            else {
                // For delete - can be the unselected with select_all functionality.
                currentList = Array.from(this.isAllSelected ? this.unSelectedItems.values() : this.selectedItems.values());
                selectionType = this.isAllSelected ? 0 : 1;
            }
            currentList.forEach(item => {
                const tmp = item.split(this.SEPARATOR);
                if (tmp.length === 2) {
                    items.push(tmp[0]);
                    itemTypes.push(tmp[1]);
                }
            });
            res.selectionType = selectionType;
            res.rows = items;
            res.rowTypes = itemTypes;
        }
        return res;
    }
    initCollectionFromState(collectionType, collection) {
        if (collectionType === 'Selected') {
            collection.forEach(x => this.selectedItems.set(x, x));
        }
        else {
            collection.forEach(x => this.unSelectedItems.set(x, x));
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
        // const item = this.items.filter(x => x.Data.UID.toString() === uid);
        // if (item.length > 0) {
        //     return item[0].Data;
        // } else {
        //     return null;
        // }
    }
}
PepperiListComponent.TOP_ITEMS_DEFAULT = 100;
PepperiListComponent.TOP_ITEMS_TABLE = 100;
PepperiListComponent.TOP_ITEMS_THUMBNAILS = 100;
PepperiListComponent.TOP_ITEMS_ARRAY = 2500;
PepperiListComponent.SELECTED_ITEMS_STATE_KEY = 'SelectedItems';
PepperiListComponent.UN_SELECTED_ITEMS_STATE_KEY = 'UnSelectedItems';
PepperiListComponent.ALL_SELECTED_STATE_KEY = 'AllSelected';
PepperiListComponent.SORT_BY_STATE_KEY = 'SortBy';
PepperiListComponent.ASCENDING_STATE_KEY = 'IsAscending';
PepperiListComponent.MINIMUM_COLUMN_WIDTH = 48;
PepperiListComponent.ɵfac = function PepperiListComponent_Factory(t) { return new (t || PepperiListComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LayoutService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
PepperiListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiListComponent, selectors: [["pep-list"]], viewQuery: function PepperiListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(VirtualScrollComponent, true);
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
        i0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.virtualScroll = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.noVirtualScrollCont = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableHeader = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectAllCB = _t.first);
    } }, hostBindings: function PepperiListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousedown", function PepperiListComponent_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); }, false, i0.ɵɵresolveDocument)("resize", function PepperiListComponent_resize_HostBindingHandler($event) { return ctx.winResize($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { currentListTypeTranslation: "currentListTypeTranslation", noDataFoundMsg: "noDataFoundMsg", selectionTypeForActions: "selectionTypeForActions", hideAllSelectionInMulti: "hideAllSelectionInMulti", top: "top", listType: "listType", objectId: "objectId", parentId: "parentId", searchCode: "searchCode", firstFieldAsLink: "firstFieldAsLink", supportSorting: "supportSorting", supportResizing: "supportResizing", parentScroll: "parentScroll", disabled: "disabled", isPrinting: "isPrinting", disableSelectionItems: "disableSelectionItems", isReport: "isReport", layoutType: "layoutType", pageType: "pageType", totalsRow: "totalsRow", isTouchDevice: "isTouchDevice" }, outputs: { notifyThumbnailClicked: "notifyThumbnailClicked", notifyFieldClicked: "notifyFieldClicked", notifyMenuItemClicked: "notifyMenuItemClicked", notifyValueChanged: "notifyValueChanged", notifyListChanged: "notifyListChanged", notifySortingChanged: "notifySortingChanged", notifySelectedItemsChanged: "notifySelectedItemsChanged", notifySelectAllSingleActionClicked: "notifySelectAllSingleActionClicked", notifySingleActionClicked: "notifySingleActionClicked", notifyListLoad: "notifyListLoad" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 2, consts: [[4, "ngIf"], ["listData", ""], ["listTotals", ""], [1, "no-data"], ["class", "table-header", 3, "ngClass", "mouseup", "mouseenter", "mouseleave", "mousemove", 4, "ngIf"], [3, "totalRows", "isTable", "parentScroll", "bufferAmount", "ngClass", "load", "change", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "table-header", 3, "ngClass", "mouseup", "mouseenter", "mouseleave", "mousemove"], ["tableHeader", ""], [1, "table-header-fieldset"], ["class", "pull-left flip row-selection", "type", "checkbox", 3, "ngStyle", "indeterminate", "disabled", "checked", "change", 4, "ngIf"], ["class", "header-column pull-left flip", 3, "ngStyle", "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "pull-left", "flip", "row-selection", 3, "ngStyle", "indeterminate", "disabled", "checked", "change"], ["selectAllCB", ""], [1, "header-column", "pull-left", "flip", 3, "ngStyle", "ngClass", "click"], [3, "id", "class", "title", 4, "ngIf"], ["class", "header-label body-sm pull-left flip", 3, "id", 4, "ngIf"], ["class", "resizeBox pull-right flip", 3, "mousedown", 4, "ngIf"], ["class", "sortingBox pull-left flip", 3, "ngClass", 4, "ngIf"], [3, "id", "title"], [1, "header-label", "body-sm", "pull-left", "flip", 3, "id"], [1, "resizeBox", "pull-right", "flip", 3, "mousedown"], ["name", "arrow-up", 1, "asc"], [1, "sortingBox", "pull-left", "flip", 3, "ngClass"], [3, "ngClass", "title", 4, "ngIf"], ["name", "arrow-either", 1, "asc"], [3, "ngClass", "title"], ["name", "arrow-down", 1, "asc"], ["name", "arrow-down", 1, "desc"], [3, "totalRows", "isTable", "parentScroll", "bufferAmount", "ngClass", "load", "change"], [3, "ngClass"], ["noVirtualScrollCont", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-row", 3, "ngClass", "ngStyle", "mouseenter", "mouseleave"], [1, "table-row-fieldset", 3, "ngStyle"], ["type", "checkbox", "class", "pull-left flip row-selection", 3, "disabled", "ngStyle", "checked", "change", 4, "ngIf"], ["name", "selection", "class", "pull-left flip row-selection pepperi-radio-button", 3, "disabled", "checked", "change", 4, "ngIf"], [3, "checkForChanges", "uiControlHeader", "firstFieldAsLink", "pepperiObjectInput", "canEditObject", "objectId", "parentId", "searchCode", "lockEvents", "isReport", "layoutType", "listType", "isActive", "pageType", "notifyValueChanged", "notifyFieldClicked", "notifyMenuItemClicked", "click"], ["type", "checkbox", 1, "pull-left", "flip", "row-selection", 3, "disabled", "ngStyle", "checked", "change"], ["name", "selection", 1, "pull-left", "flip", "row-selection", "pepperi-radio-button", 3, "disabled", "checked", "change"], [1, "pull-left", "flip", 3, "ngClass", "ngStyle", "mouseenter", "mouseleave"], ["class", "pull-left flip card-selection", 3, "disabled", "checked", "change", 4, "ngIf"], [3, "firstFieldAsLink", "checkForChanges", "uiControlHeader", "pepperiObjectInput", "isCardView", "canEditObject", "objectId", "parentId", "searchCode", "lockEvents", "layoutType", "listType", "isActive", "pageType", "notifyValueChanged", "notifyFieldClicked", "notifyMenuItemClicked", "click"], [1, "pull-left", "flip", "card-selection", 3, "disabled", "checked", "change"], ["class", "table-total", 4, "ngIf"], [1, "table-total"], ["class", "total-column pull-left flip", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "total-column", "pull-left", "flip", 3, "ngStyle"]], template: function PepperiListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PepperiListComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, PepperiListComponent_ng_container_1_Template, 5, 4, "ng-container", 0);
        i0.ɵɵtemplate(2, PepperiListComponent_ng_template_2_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, PepperiListComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.totalRows == 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.totalRows > 0);
    } }, directives: [i2.NgIf, i2.NgTemplateOutlet, i2.NgClass, i2.NgForOf, i3.MatCheckbox, i2.NgStyle, i4.MatIcon, i5.PepperiIconComponent, i6.VirtualScrollComponent, i7.PepperiFormComponent, i8.MatRadioButton], pipes: [i9.TranslatePipe], styles: ["[_nghost-%COMP%]{height:inherit}[_nghost-%COMP%]   virtual-scroll[_ngcontent-%COMP%]{min-height:calc(100% - 34px)}.no-data[_ngcontent-%COMP%]{font-size:1.5rem;margin-top:100px;text-align:center}.table-header[_ngcontent-%COMP%]{top:0}.table-header.below-header-and-top-bar[_ngcontent-%COMP%]{top:calc(var(--pep-header-height, 4rem) + var(--pep-top-bar-spacing-top, 1.5rem) + var(--pep-top-bar-spacing-bottom, .5rem) + var(--pep-top-bar-field-height, 2.5rem))}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiListComponent, [{
        type: Component,
        args: [{
                selector: 'pep-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss'],
                host: {
                    // '[style.width]': "'inherit'",
                    '(document:mousedown)': 'onMouseDown($event)',
                    '(window:resize)': 'winResize($event)'
                    // '(window:mouseup)': 'onListResizeEnd($event)',
                    // '(window:mousemove)': 'onListResize($event)'
                }
                // changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.LayoutService }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { currentListTypeTranslation: [{
            type: Input
        }], noDataFoundMsg: [{
            type: Input
        }], selectionTypeForActions: [{
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
        }], supportSorting: [{
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
        }], isReport: [{
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
        }], notifyListChanged: [{
            type: Output
        }], notifySortingChanged: [{
            type: Output
        }], notifySelectedItemsChanged: [{
            type: Output
        }], notifySelectAllSingleActionClicked: [{
            type: Output
        }], notifySingleActionClicked: [{
            type: Output
        }], notifyListLoad: [{
            type: Output
        }], virtualScroll: [{
            type: ViewChild,
            args: [VirtualScrollComponent]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFxQixTQUFTLEVBRXZFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQ0gsV0FBVyxFQUNYLFVBQVUsRUFBa0IsV0FBVyxFQUMxQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBZSxNQUFNLDRCQUE0QixDQUFDO0FBRWpGLE9BQU8sYUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLDZFQUE2RTtBQUU3RSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDZjVCLDZCQUNJO0lBQUEsOEJBQXFCO0lBQUEsWUFBb0I7SUFBQSxpQkFBTTtJQUNuRCwwQkFBZTs7O0lBRFUsZUFBb0I7SUFBcEIsMkNBQW9COzs7OztJQVlqQyw0Q0FPd0c7SUFBM0QsNFBBQTJDO0lBQUMsaUJBQWU7OztJQU4vQywyUUFHL0MseU1BQUEsK0dBQUEsaURBQUE7OztJQWVGLGlDQUdJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFISiw2R0FBb0Y7SUFEdkQsaURBQXdCO0lBRXJELGtEQUF5QjtJQUN6QixlQUNKO0lBREksZ0RBQ0o7OztJQUVBLGlDQUNnRDtJQUFBLHNCQUFNO0lBQUEsaUJBQVE7OztJQUQ3QixpREFBd0I7Ozs7SUFHekQsK0JBRUk7SUFEQSxrVEFBc0Q7SUFDdEQsZ0NBQ0k7SUFBQSwrQkFBaUQ7SUFDckQsaUJBQVc7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a0JBQTdCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUVJLHNCQUFzQjtrQkFBL0IsTUFBTTtZQUNHLGtCQUFrQjtrQkFBM0IsTUFBTTtZQUNHLHFCQUFxQjtrQkFBOUIsTUFBTTtZQUNHLGtCQUFrQjtrQkFBM0IsTUFBTTtZQUNHLGlCQUFpQjtrQkFBMUIsTUFBTTtZQUNHLG9CQUFvQjtrQkFBN0IsTUFBTTtZQUVHLDBCQUEwQjtrQkFBbkMsTUFBTTtZQUNHLGtDQUFrQztrQkFBM0MsTUFBTTtZQUNHLHlCQUF5QjtrQkFBbEMsTUFBTTtZQUVHLGNBQWM7a0JBQXZCLE1BQU07WUFFNEIsYUFBYTtrQkFBL0MsU0FBUzttQkFBQyxzQkFBc0I7WUFDQyxtQkFBbUI7a0JBQXBELFNBQVM7bUJBQUMscUJBQXFCO1lBQ04sV0FBVztrQkFBcEMsU0FBUzttQkFBQyxhQUFhO1lBQ0UsV0FBVztrQkFBcEMsU0FBUzttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLFxyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgT25DaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gICAgTEFZT1VUX1RZUEUsIExheW91dFNlcnZpY2UsIE9iamVjdFNpbmdsZURhdGEsIFVJQ29udHJvbCwgVUlDb250cm9sRmllbGQsXHJcbiAgICBGSUVMRF9UWVBFLCBPYmplY3RzRGF0YVJvdywgU0NSRUVOX1NJWkUsIFBlcHBlcmlPYmplY3RDaGFuZ2VkRGF0YSwgUGVwcGVyaUZpZWxkQ2xpY2tlZERhdGFcclxufSBmcm9tICdAcGVwcGVyaS1hZGRvbnMvbmd4LWxpYic7XHJcbmltcG9ydCB7IFZpcnR1YWxTY3JvbGxDb21wb25lbnQsIENoYW5nZUV2ZW50IH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IGRpc2FibGVTY3JvbGwgZnJvbSAnZGlzYWJsZS1zY3JvbGwnO1xyXG5cclxuLy8gaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uL2FwcGxpY2F0aW9uLXN0YXRlL2FwcGxpY2F0aW9uLXN0YXRlJztcclxuXHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmV4cG9ydCBlbnVtIFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TIHtcclxuICAgIE5vbmUsXHJcbiAgICBTaW5nbGUsXHJcbiAgICBNdWx0aSxcclxuICAgIFNpbmdsZUFjdGlvblxyXG59XHJcbmV4cG9ydCBlbnVtIFZJRVdfVFlQRSB7XHJcbiAgICBOb25lLFxyXG4gICAgQ2FyZCxcclxuICAgIExpbmUsXHJcbiAgICBUYWJsZSxcclxuICAgIE1hcFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZVNvcnRpbmdFdmVudCB7XHJcbiAgICBzb3J0Qnk6IHN0cmluZztcclxuICAgIGlzQXNjOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uRGF0YSB7XHJcbiAgICBzZWxlY3Rpb25UeXBlOiBudW1iZXI7XHJcbiAgICByb3dzOiBBcnJheTxhbnk+O1xyXG4gICAgcm93VHlwZXM6IEFycmF5PGFueT47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwZXAtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgLy8gJ1tzdHlsZS53aWR0aF0nOiBcIidpbmhlcml0J1wiLFxyXG4gICAgICAgICcoZG9jdW1lbnQ6bW91c2Vkb3duKSc6ICdvbk1vdXNlRG93bigkZXZlbnQpJyxcclxuICAgICAgICAnKHdpbmRvdzpyZXNpemUpJzogJ3dpblJlc2l6ZSgkZXZlbnQpJ1xyXG4gICAgICAgIC8vICcod2luZG93Om1vdXNldXApJzogJ29uTGlzdFJlc2l6ZUVuZCgkZXZlbnQpJyxcclxuICAgICAgICAvLyAnKHdpbmRvdzptb3VzZW1vdmUpJzogJ29uTGlzdFJlc2l6ZSgkZXZlbnQpJ1xyXG4gICAgfVxyXG4gICAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBzdGF0aWMgVE9QX0lURU1TX0RFRkFVTFQgPSAxMDA7XHJcbiAgICBzdGF0aWMgVE9QX0lURU1TX1RBQkxFID0gMTAwO1xyXG4gICAgc3RhdGljIFRPUF9JVEVNU19USFVNQk5BSUxTID0gMTAwO1xyXG4gICAgc3RhdGljIFRPUF9JVEVNU19BUlJBWSA9IDI1MDA7XHJcblxyXG4gICAgc3RhdGljIFNFTEVDVEVEX0lURU1TX1NUQVRFX0tFWSA9ICdTZWxlY3RlZEl0ZW1zJztcclxuICAgIHN0YXRpYyBVTl9TRUxFQ1RFRF9JVEVNU19TVEFURV9LRVkgPSAnVW5TZWxlY3RlZEl0ZW1zJztcclxuICAgIHN0YXRpYyBBTExfU0VMRUNURURfU1RBVEVfS0VZID0gJ0FsbFNlbGVjdGVkJztcclxuICAgIHN0YXRpYyBTT1JUX0JZX1NUQVRFX0tFWSA9ICdTb3J0QnknO1xyXG4gICAgc3RhdGljIEFTQ0VORElOR19TVEFURV9LRVkgPSAnSXNBc2NlbmRpbmcnO1xyXG5cclxuICAgIHN0YXRpYyBNSU5JTVVNX0NPTFVNTl9XSURUSCA9IDQ4O1xyXG5cclxuICAgIEBJbnB1dCgpIGN1cnJlbnRMaXN0VHlwZVRyYW5zbGF0aW9uID0gJyc7XHJcbiAgICBASW5wdXQoKSBub0RhdGFGb3VuZE1zZyA9ICdJdGVtcyBub3QgZm91bmQnO1xyXG4gICAgQElucHV0KCkgc2VsZWN0aW9uVHlwZUZvckFjdGlvbnM6IFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TID0gU0VMRUNUSU9OX1RZUEVfRk9SX0FDVElPTlMuTXVsdGk7XHJcbiAgICBASW5wdXQoKSBoaWRlQWxsU2VsZWN0aW9uSW5NdWx0aSA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCgpIHRvcCA9IC0xO1xyXG4gICAgQElucHV0KCkgbGlzdFR5cGUgPSAnJztcclxuICAgIEBJbnB1dCgpIG9iamVjdElkID0gJzAnO1xyXG4gICAgQElucHV0KCkgcGFyZW50SWQgPSAnMCc7XHJcbiAgICBASW5wdXQoKSBzZWFyY2hDb2RlID0gJzAnO1xyXG4gICAgLy8gQElucHV0KCkgc2hvd1RvcEJvcmRlciA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZmlyc3RGaWVsZEFzTGluayA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgc3VwcG9ydFNvcnRpbmcgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgc3VwcG9ydFJlc2l6aW5nID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHBhcmVudFNjcm9sbDogRWxlbWVudCB8IFdpbmRvdyA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgaXNQcmludGluZyA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZVNlbGVjdGlvbkl0ZW1zID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBpc1JlcG9ydCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgbGF5b3V0VHlwZTogTEFZT1VUX1RZUEUgPSBudWxsO1xyXG4gICAgQElucHV0KCkgcGFnZVR5cGUgPSAnJztcclxuICAgIEBJbnB1dCgpIHRvdGFsc1JvdyA9IFtdO1xyXG4gICAgQElucHV0KCkgaXNUb3VjaERldmljZSA9IGZhbHNlO1xyXG5cclxuICAgIEBPdXRwdXQoKSBub3RpZnlUaHVtYm5haWxDbGlja2VkOiBFdmVudEVtaXR0ZXI8T2JqZWN0U2luZ2xlRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdFNpbmdsZURhdGE+KCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5RmllbGRDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8UGVwcGVyaUZpZWxkQ2xpY2tlZERhdGE+KCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5TWVudUl0ZW1DbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8UGVwcGVyaUZpZWxkQ2xpY2tlZERhdGE+KCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5VmFsdWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8UGVwcGVyaU9iamVjdENoYW5nZWREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8UGVwcGVyaU9iamVjdENoYW5nZWREYXRhPigpO1xyXG4gICAgQE91dHB1dCgpIG5vdGlmeUxpc3RDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFuZ2VFdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnlTb3J0aW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPENoYW5nZVNvcnRpbmdFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPENoYW5nZVNvcnRpbmdFdmVudD4oKTtcclxuXHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5U2VsZWN0ZWRJdGVtc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5U2VsZWN0QWxsU2luZ2xlQWN0aW9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBub3RpZnlTaW5nbGVBY3Rpb25DbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIEBPdXRwdXQoKSBub3RpZnlMaXN0TG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKFZpcnR1YWxTY3JvbGxDb21wb25lbnQpIHZpcnR1YWxTY3JvbGw6IFZpcnR1YWxTY3JvbGxDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKCdub1ZpcnR1YWxTY3JvbGxDb250Jykgbm9WaXJ0dWFsU2Nyb2xsQ29udDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3RhYmxlSGVhZGVyJykgdGFibGVIZWFkZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdzZWxlY3RBbGxDQicpIHNlbGVjdEFsbENCOiBhbnk7XHJcblxyXG4gICAgTEFZT1VUX1RZUEUgPSBMQVlPVVRfVFlQRTtcclxuICAgIFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TID0gU0VMRUNUSU9OX1RZUEVfRk9SX0FDVElPTlM7XHJcblxyXG4gICAgcHVibGljIHVpQ29udHJvbDogVUlDb250cm9sID0gbnVsbDtcclxuICAgIHB1YmxpYyB0b3RhbFJvd3MgPSAtMTtcclxuICAgIGl0ZW1DbGFzczogc3RyaW5nO1xyXG4gICAgaXNUYWJsZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBoYXNDb2x1bW5XaWR0aE9mVHlwZVBlcmNlbnRhZ2UgPSB0cnVlO1xyXG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxPYmplY3RTaW5nbGVEYXRhPiA9IG51bGw7XHJcbiAgICBwdWJsaWMgc2hvd1NlbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgaXNDYXJkVmlldyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpdGVtc0NvdW50ZXIgPSAwO1xyXG4gICAgc2hvd0l0ZW1zID0gdHJ1ZTtcclxuICAgIHNjcm9sbEl0ZW1zOiBBcnJheTxPYmplY3RTaW5nbGVEYXRhPjtcclxuXHJcbiAgICBwdWJsaWMgU0VQQVJBVE9SID0gJywnO1xyXG4gICAgcHVibGljIGlzQWxsU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW1zID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcclxuICAgIHB1YmxpYyB1blNlbGVjdGVkSXRlbXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xyXG5cclxuICAgIC8vIHB1YmxpYyB0YWJsZUhlYWRlcldpZHRoOiBzdHJpbmc7XHJcbiAgICBuYXRpdmVXaW5kb3c6IGFueSA9IG51bGw7XHJcblxyXG4gICAgc2VsZWN0ZWRJdGVtSWQgPSAnJztcclxuICAgIGhvdmVyZWRJdGVtSWQgPSAnJztcclxuXHJcbiAgICBwcml2YXRlIGxvY2tFdmVudHMgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY29udGFpbmVyV2lkdGggPSAwO1xyXG5cclxuICAgIHNjcmVlblNpemU6IFNDUkVFTl9TSVpFO1xyXG5cclxuICAgIC8vIGhlYWRlcklzSW5Gb2N1cyA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEZvciByZXNpemVcclxuICAgIHByZXNzZWRDb2x1bW4gPSAnJztcclxuICAgIHN0YXJ0WCA9IDA7XHJcbiAgICBzdGFydFdpZHRoID0gMDtcclxuICAgIHRhYmxlU3RhcnRXaWR0aCA9IDA7XHJcblxyXG4gICAgLy8gRm9yIHNvcnRpbmdcclxuICAgIGlzQXNjID0gdHJ1ZTtcclxuICAgIHNvcnRCeSA9ICcnO1xyXG4gICAgaXNVc2VyU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIGNoZWNrRm9yQ2hhbmdlczogYW55ID0gbnVsbDtcclxuICAgIHVzZVZpcnR1YWxTY3JvbGwgPSB0cnVlO1xyXG4gICAgY2FsY3VsYXRlZE9iamVjdEhlaWdodDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIGxheW91dFNlcnZpY2U6IExheW91dFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIC8vIHByaXZhdGUgc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGVcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubGF5b3V0U2VydmljZS5vblJlc2l6ZSRcclxuICAgICAgICAgICAgLnBpcGUoZGVsYXkoMCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoc2l6ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlblNpemUgPSBzaXplO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5jaGVja0ZvckNoYW5nZXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnN0YXRlS2V5ID0gbG9jYXRpb24uaHJlZjtcclxuICAgICAgICB0aGlzLm5hdGl2ZVdpbmRvdyA9IHdpbmRvdztcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcldpZHRoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyV2lkdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRhaW5lcldpZHRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlZC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm90aWZ5TGlzdENoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlMaXN0Q2hhbmdlZC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm90aWZ5U29ydGluZ0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlTb3J0aW5nQ2hhbmdlZC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm90aWZ5RmllbGRDbGlja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RmllbGRDbGlja2VkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ub3RpZnlNZW51SXRlbUNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlNZW51SXRlbUNsaWNrZWQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vdGlmeVRodW1ibmFpbENsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlUaHVtYm5haWxDbGlja2VkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNhdmVTb3J0aW5nVG9TZXNzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29udGFpbmVyV2lkdGgoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQ2hlY2tCb3hXaWR0aCA9IHRoaXMuc2VsZWN0aW9uVHlwZUZvckFjdGlvbnMgPT09IFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TLk11bHRpID8gNDQgOiAwO1xyXG5cclxuICAgICAgICBjb25zdCByb3dIZWlnaHQgPSA0MDsgLy8gdGhlIHRhYmxlIHJvdyBoZWlnaHQgKDIuNXJlbSAqIDE2Zm9udC1zaXplKS5cclxuICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIC8vIFRoZSBjb250YWluZXItZmx1aWQgY2xhc3MgcGFkZGluZyBsZWZ0ICsgcmlnaHQgKyBib3JkZXJcclxuICAgICAgICBjb25zdCBjb250YWluZXJGbHVpZFNwYWNpbmcgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nTGVmdCwgMTApICsgcGFyc2VJbnQoc3R5bGUucGFkZGluZ1JpZ2h0LCAxMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCA+IDAgP1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgOiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgaWYgdmVydGljYWwgc2Nyb2xsIHNob3VsZCBhcHBlYXIsIGlmIHNvIHNldCB0aGUgc2Nyb2xsIHdpZHRoLiAodGhpcy50b3RhbFJvd3MgKyAxKSArIDEgaXMgZm9yIHRoZSBoZWFkZXIgcm93LlxyXG4gICAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gcGFyZW50Q29udGFpbmVyLmNsaWVudEhlaWdodCA8IHJvd0hlaWdodCAqICh0aGlzLnRvdGFsUm93cyArIDEpID8gMTggOiAwOyAvLyAxOCBpcyB0aGUgZGVmYXVsdCBzY3JvbGwgd2lkdGguXHJcblxyXG4gICAgICAgIC8vIFRoZSBzZWxlY3Rpb25DaGVja0JveFdpZHRoIHdpZHRoICsgY29udGFpbmVyRmx1aWRTcGFjaW5nICsgc2Nyb2xsV2lkdGguXHJcbiAgICAgICAgY29uc3Qgcm93SGVhZGVyV2lkdGhUb1N1YiA9IGNvbnRhaW5lckZsdWlkU3BhY2luZyArIHNlbGVjdGlvbkNoZWNrQm94V2lkdGggKyBzY3JvbGxXaWR0aDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcldpZHRoID0gcGFyZW50Q29udGFpbmVyLm9mZnNldFdpZHRoIC0gcm93SGVhZGVyV2lkdGhUb1N1YjtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU29ydGluZ1RvU2Vzc2lvbigpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLnNldEl0ZW1JblN0YXRlKFBlcHBlcmlMaXN0Q29tcG9uZW50LlNPUlRfQllfU1RBVEVfS0VZLCB0aGlzLnNvcnRCeSk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRJdGVtSW5TdGF0ZShQZXBwZXJpTGlzdENvbXBvbmVudC5BU0NFTkRJTkdfU1RBVEVfS0VZLCB0aGlzLmlzQXNjKTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLndyaXRlVG9TZXNzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZURvd24oZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpIHx8IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzY3JvbGxhYmxlLWNvbnRlbnQnKSB7XHJcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHNlbGYuc2VsZWN0aW9uVHlwZUZvckFjdGlvbnMgPT09IFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TLk11bHRpIHx8IHNlbGYuc2VsZWN0aW9uVHlwZUZvckFjdGlvbnMgPT09IFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TLlNpbmdsZUFjdGlvbikge1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIC8vIHNlbGYuc2VsZWN0ZWRJdGVtSWQgPSAnJztcclxuICAgICAgICAvLyAgICAgICAgIC8vc2VsZi5ob3ZlcmVkSXRlbUlkID0gJyc7XHJcbiAgICAgICAgLy8gICAgIH0sIDUwMCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xlYW5JdGVtcygpO1xyXG4gICAgICAgIHRoaXMudWlDb250cm9sID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRvcEl0ZW1zKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNUYWJsZSA/IFBlcHBlcmlMaXN0Q29tcG9uZW50LlRPUF9JVEVNU19UQUJMRSA6IFBlcHBlcmlMaXN0Q29tcG9uZW50LlRPUF9JVEVNU19USFVNQk5BSUxTO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9nZ2xlSXRlbXMoaXNWaXNpYmxlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93SXRlbXMgPSBpc1Zpc2libGU7XHJcbiAgICAgICAgdGhpcy5sb2NrRXZlbnRzID0gIWlzVmlzaWJsZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXNlVmlydHVhbFNjcm9sbCkge1xyXG4gICAgICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlU2Nyb2xsLm9mZigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZVNjcm9sbC5vbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU2Nyb2xsSXRlbXMoc3RhcnRJbmRleCwgZW5kSW5kZXgsIGxvYWRJbkNodW5rcyA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjcm9sbEl0ZW1zID0gdGhpcy5pdGVtcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcbiAgICAgICAgLy8gaWYgKCFsb2FkSW5DaHVua3MpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zY3JvbGxJdGVtcyA9IHRoaXMuaXRlbXMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpLm1hcCgoaXRlbSkgPT4gaXRlbSkuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9IG51bGwpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuc2Nyb2xsSXRlbXMgPSB0aGlzLml0ZW1zLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuXHJcbiAgICAgICAgLy8gICAgIGNvbnN0IElURU1TX1JFTkRFUkVEX0FUX09OQ0UgPSAxNTsvL3RoaXMuaXNUYWJsZSA/IDEgOiA3O1xyXG4gICAgICAgIC8vICAgICBjb25zdCBJTlRFUlZBTF9JTl9NUyA9IDEwO1xyXG5cclxuICAgICAgICAvLyAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHRtcCA9IHRoaXMuaXRlbXMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnNjcm9sbEl0ZW1zID0gW107XHJcblxyXG4gICAgICAgIC8vICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIElURU1TX1JFTkRFUkVEX0FUX09OQ0U7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IGN1cnJlbnRJbmRleDsgaSA8IG5leHRJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gaWYgKGN1cnJlbnRJbmRleCA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB0aGlzLnNjcm9sbEl0ZW1zID0gW107XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoaSA+PSB0bXAubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbEl0ZW1zW2ldKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSXRlbXNbaV0gPSB0bXBbaV07XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJdGVtcy5wdXNoKHRtcFtpXSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIGN1cnJlbnRJbmRleCArPSBJVEVNU19SRU5ERVJFRF9BVF9PTkNFO1xyXG4gICAgICAgIC8vICAgICB9LCBJTlRFUlZBTF9JTl9NUyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U2VsZWN0aW9uSXRlbXMoaXRlbUlkOiBzdHJpbmcsIHVuaXFJdGVtSWQ6IHN0cmluZywgaXNDaGVja2VkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgLy8gU2V0IHNlbGVjdGVkIGl0ZW0gY2hlY2tib3hcclxuICAgICAgICBpZiAodGhpcy5pc0FsbFNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5TZWxlY3RlZEl0ZW1zLmRlbGV0ZShpdGVtSWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNldChpdGVtSWQsIHVuaXFJdGVtSWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmRlbGV0ZShpdGVtSWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51blNlbGVjdGVkSXRlbXMuc2V0KGl0ZW1JZCwgdW5pcUl0ZW1JZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuU2VsZWN0ZWRJdGVtcy5kZWxldGUoaXRlbUlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zZXQoaXRlbUlkLCB1bmlxSXRlbUlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5kZWxldGUoaXRlbUlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5TZWxlY3RlZEl0ZW1zLnNldChpdGVtSWQsIHVuaXFJdGVtSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFVuaXFJdGVtSWQoaXRlbUlkOiBzdHJpbmcsIGl0ZW1UeXBlOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1JZCArIHRoaXMuU0VQQVJBVE9SICsgaXRlbVR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJdGVtU2VsZWN0ZWQoaXRlbUlkOiBzdHJpbmcsIGl0ZW1UeXBlOiBzdHJpbmcgPSAnJyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHlwZUZvckFjdGlvbnMgPT09IFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TLlNpbmdsZUFjdGlvbiB8fFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblR5cGVGb3JBY3Rpb25zID09PSBTRUxFQ1RJT05fVFlQRV9GT1JfQUNUSU9OUy5NdWx0aSkge1xyXG4gICAgICAgICAgICBpc1NlbGVjdGVkID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmhhcyhpdGVtSWQpIHx8IHRoaXMuaXNBbGxTZWxlY3RlZCAmJiAhdGhpcy51blNlbGVjdGVkSXRlbXMuaGFzKGl0ZW1JZCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGlvblR5cGVGb3JBY3Rpb25zID09PSBTRUxFQ1RJT05fVFlQRV9GT1JfQUNUSU9OUy5TaW5nbGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdW5pcUl0ZW1JZCA9IHRoaXMuZ2V0VW5pcUl0ZW1JZChpdGVtSWQsIGl0ZW1UeXBlKTtcclxuICAgICAgICAgICAgaXNTZWxlY3RlZCA9IHVuaXFJdGVtSWQgPT09IHRoaXMuc2VsZWN0ZWRJdGVtSWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXNTZWxlY3RlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMYXlvdXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxSb3dzID09PSAwIHx8XHJcbiAgICAgICAgICAgICF0aGlzLnVpQ29udHJvbCB8fFxyXG4gICAgICAgICAgICAhdGhpcy51aUNvbnRyb2wuQ29udHJvbEZpZWxkcyB8fFxyXG4gICAgICAgICAgICB0aGlzLnVpQ29udHJvbC5Db250cm9sRmllbGRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVpQ29udHJvbC5Db250cm9sRmllbGRzLmZvckVhY2goKGNmKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjZi5Db2x1bW5XaWR0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2YuQ29sdW1uV2lkdGggPSAxMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGYuaXNUYWJsZSAmJlxyXG4gICAgICAgICAgICAgICAgKGNmLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5JbWFnZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNmLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5JbmRpY2F0b3JzIHx8ID8/P1xyXG4gICAgICAgICAgICAgICAgICAgIGNmLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5TaWduYXR1cmUgfHxcclxuICAgICAgICAgICAgICAgICAgICBjZi5GaWVsZFR5cGUgPT09IEZJRUxEX1RZUEUuTnVtYmVySW50ZWdlclF1YW50aXR5U2VsZWN0b3IgfHxcclxuICAgICAgICAgICAgICAgICAgICBjZi5GaWVsZFR5cGUgPT09IEZJRUxEX1RZUEUuTnVtYmVyUmVhbFF1YW50aXR5U2VsZWN0b3IgfHxcclxuICAgICAgICAgICAgICAgICAgICBjZi5GaWVsZFR5cGUgPT09IEZJRUxEX1RZUEUuTnVtYmVySW50ZWdlckZvck1hdHJpeCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNmLkZpZWxkVHlwZSA9PT0gRklFTERfVFlQRS5OdW1iZXJSZWFsRm9yTWF0cml4IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgY2YuRmllbGRUeXBlID09PSBGSUVMRF9UWVBFLlBhY2thZ2UgfHxcclxuICAgICAgICAgICAgICAgICAgICBjZi5BcGlOYW1lID09PSAnVW5pdHNRdWFudGl0eScgfHxcclxuICAgICAgICAgICAgICAgICAgICBjZi5BcGlOYW1lID09PSAnUXVhbnRpdHlTZWxlY3RvcicpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY2YuTGF5b3V0LlhBbGlnbm1lbnQgPSAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jZFsnZGVzdHJveWVkJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIGNvbHVtbnMgd2lkdGguXHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyV2lkdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRhaW5lcldpZHRoKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbGNDb2x1bW5zV2lkdGgoKTtcclxuICAgICAgICB0aGlzLmNoZWNrRm9yQ2hhbmdlcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY0NvbHVtbnNXaWR0aCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBmaXhlZE11bHRpcGxlID0gMy43ODsgLy8gZm9yIGNvbnZlcnRpbmcgZW0gdG8gcGl4ZWwuXHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy51aUNvbnRyb2wuQ29udHJvbEZpZWxkcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQ2hlY2tCb3hXaWR0aCA9IHRoaXMuc2VsZWN0aW9uVHlwZUZvckFjdGlvbnMgPT09IFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TLk11bHRpID8gNDQgOiAwO1xyXG5cclxuICAgICAgICAvLyBJcyB0YWJsZSBBTkQgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGNvbHVtbiBvZiB3aWR0aCB0eXBlIG9mIHBlcmNlbnRhZ2UuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYWJsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51aUNvbnRyb2wgJiYgdGhpcy51aUNvbnRyb2wuQ29udHJvbEZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDb2x1bW5XaWR0aE9mVHlwZVBlcmNlbnRhZ2UgPSB0aGlzLnVpQ29udHJvbC5Db250cm9sRmllbGRzLmZpbHRlcihjZiA9PiBjZi5Db2x1bW5XaWR0aFR5cGUgPT09IDEpLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGNvbHVtbnMgc2l6ZSBpcyBmaXhlZCBhbmQgdGhlIHRvdGFsIGlzIHNtYWxsIHRoZW4gdGhlIGNvbnRhaW5lciBjaGFuZ2UgaXQgdG8gcGVyY2VudGFnZS5cclxuICAgICAgICBpZiAoIXRoaXMuaGFzQ29sdW1uV2lkdGhPZlR5cGVQZXJjZW50YWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsRml4ZWRDb2xzV2lkdGggPSB0aGlzLnVpQ29udHJvbC5Db250cm9sRmllbGRzXHJcbiAgICAgICAgICAgICAgICAubWFwKGNmID0+IGNmLkNvbHVtbldpZHRoICogZml4ZWRNdWx0aXBsZSlcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgY3VycmVudCkgPT4gc3VtICsgY3VycmVudCk7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiB0b3RhbEZpeGVkQ29sc1dpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NvbHVtbldpZHRoT2ZUeXBlUGVyY2VudGFnZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0b3RhbENhbGNDb2xzV2lkdGggPSAwO1xyXG5cclxuICAgICAgICAvLyBDYWxjIGJ5IHBlcmNlbnRhZ2VcclxuICAgICAgICBpZiAodGhpcy5oYXNDb2x1bW5XaWR0aE9mVHlwZVBlcmNlbnRhZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxDb2xzV2lkdGg6IG51bWJlciA9IHRoaXMudWlDb250cm9sLkNvbnRyb2xGaWVsZHMubWFwKGNmID0+IGNmLkNvbHVtbldpZHRoKS5yZWR1Y2UoKHN1bSwgY3VycmVudCkgPT4gc3VtICsgY3VycmVudCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1aUNvbnRyb2xGaWVsZDogVUlDb250cm9sRmllbGQgPSB0aGlzLnVpQ29udHJvbC5Db250cm9sRmllbGRzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGNDb2x1bW5XaWR0aFBlcmNlbnRhZ2UgPSAoMTAwIC8gdG90YWxDb2xzV2lkdGgpICogdWlDb250cm9sRmllbGQuQ29sdW1uV2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgdWlDb250cm9sRmllbGQuY2FsY0NvbHVtbldpZHRoID0gTWF0aC5mbG9vcigodGhpcy5jb250YWluZXJXaWR0aCAqIGNhbGNDb2x1bW5XaWR0aFBlcmNlbnRhZ2UpIC8gMTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB1aUNvbnRyb2xGaWVsZC5jYWxjVGl0bGVDb2x1bW5XaWR0aFN0cmluZyA9IHVpQ29udHJvbEZpZWxkLmNhbGNDb2x1bW5XaWR0aFN0cmluZyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjYWxjKDEwMCUgLSAnICsgdG90YWxDYWxjQ29sc1dpZHRoICsgJ3B4KSc7IC8vIEZvciAxMDAlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHVpQ29udHJvbEZpZWxkLmNhbGNUaXRsZUNvbHVtbldpZHRoU3RyaW5nID0gdWlDb250cm9sRmllbGQuY2FsY0NvbHVtbldpZHRoU3RyaW5nID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdWlDb250cm9sRmllbGQuY2FsY0NvbHVtbldpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENhbGNDb2xzV2lkdGggKz0gdWlDb250cm9sRmllbGQuY2FsY0NvbHVtbldpZHRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCAnaW5oZXJpdCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVpQ29udHJvbEZpZWxkOiBVSUNvbnRyb2xGaWVsZCA9IHRoaXMudWlDb250cm9sLkNvbnRyb2xGaWVsZHNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEZpeGVkV2lkdGggPSBNYXRoLmZsb29yKHVpQ29udHJvbEZpZWxkLkNvbHVtbldpZHRoICogZml4ZWRNdWx0aXBsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBsZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdWlDb250cm9sRmllbGQuY2FsY1RpdGxlQ29sdW1uV2lkdGhTdHJpbmcgPSBjdXJyZW50Rml4ZWRXaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdWlDb250cm9sRmllbGQuY2FsY0NvbHVtbldpZHRoU3RyaW5nID0gY3VycmVudEZpeGVkV2lkdGggLSA0ICsgJ3B4JzsgLy8gLTQgZm9yIHRoZSByb3cgcGFkZGluZy5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdWlDb250cm9sRmllbGQuY2FsY1RpdGxlQ29sdW1uV2lkdGhTdHJpbmcgPSB1aUNvbnRyb2xGaWVsZC5jYWxjQ29sdW1uV2lkdGhTdHJpbmcgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Rml4ZWRXaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdG90YWxDYWxjQ29sc1dpZHRoICs9IGN1cnJlbnRGaXhlZFdpZHRoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB0b3RhbENhbGNDb2xzV2lkdGggKyBzZWxlY3Rpb25DaGVja0JveFdpZHRoICsgJ3B4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFJlc2l6ZURhdGEoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFydFggPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRXaWR0aCA9IDA7XHJcbiAgICAgICAgdGhpcy50YWJsZVN0YXJ0V2lkdGggPSAwO1xyXG4gICAgICAgIHRoaXMucHJlc3NlZENvbHVtbiA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTGlzdFJlc2l6ZVN0YXJ0KGV2ZW50LCBhcGlOYW1lKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcmVzc2VkQ29sdW1uID0gYXBpTmFtZTtcclxuICAgICAgICB0aGlzLnN0YXJ0WCA9IGV2ZW50Lng7XHJcbiAgICAgICAgdGhpcy5zdGFydFdpZHRoID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXItY29sdW1uJykub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlVmlydHVhbFNjcm9sbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlU3RhcnRXaWR0aCA9IHRoaXMudmlydHVhbFNjcm9sbC5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgdGFibGVTdGFydFdpZHRoIHRvIHRoZSBjb250YWluZXIgb2Zmc2V0V2lkdGhcclxuICAgICAgICAgICAgdGhpcy50YWJsZVN0YXJ0V2lkdGggPSB0aGlzLm5vVmlydHVhbFNjcm9sbENvbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25MaXN0UmVzaXplKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJlc3NlZENvbHVtbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoVG9BZGQgPSB0aGlzLmxheW91dFNlcnZpY2UuaXNSdGwoKSA/IHRoaXMuc3RhcnRYIC0gZXZlbnQueCA6IGV2ZW50LnggLSB0aGlzLnN0YXJ0WDtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgd2lkdGggb2YgdGhlIGNvbHVtbiBhbmQgdGhlIGNvbnRhaW5lciBvZiB0aGUgd2hvbGUgY29sdW1ucy5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnRXaWR0aCArIHdpZHRoVG9BZGQgPj0gUGVwcGVyaUxpc3RDb21wb25lbnQuTUlOSU1VTV9DT0xVTU5fV0lEVEggfHwgd2lkdGhUb0FkZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMudWlDb250cm9sLkNvbnRyb2xGaWVsZHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsQ2FsY0NvbHNXaWR0aCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVpQ29udHJvbEZpZWxkOiBVSUNvbnRyb2xGaWVsZCA9IHRoaXMudWlDb250cm9sLkNvbnRyb2xGaWVsZHNbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsYyB0aGUgbGFzdCBjb2x1bW4gb25seSBpbiBwZXJjZW50YWdlIHR5cGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NvbHVtbldpZHRoT2ZUeXBlUGVyY2VudGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlDb250cm9sRmllbGQuY2FsY1RpdGxlQ29sdW1uV2lkdGhTdHJpbmcgPSB1aUNvbnRyb2xGaWVsZC5jYWxjQ29sdW1uV2lkdGhTdHJpbmcgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYWxjKDEwMCUgLSAnICsgdG90YWxDYWxjQ29sc1dpZHRoICsgJ3B4KSc7IC8vIEZvciAxMDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodWlDb250cm9sRmllbGQuQXBpTmFtZSA9PT0gdGhpcy5wcmVzc2VkQ29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlDb250cm9sRmllbGQuY2FsY0NvbHVtbldpZHRoID0gdGhpcy5zdGFydFdpZHRoICsgd2lkdGhUb0FkZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aUNvbnRyb2xGaWVsZC5jYWxjVGl0bGVDb2x1bW5XaWR0aFN0cmluZyA9IHVpQ29udHJvbEZpZWxkLmNhbGNDb2x1bW5XaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlDb250cm9sRmllbGQuY2FsY0NvbHVtbldpZHRoU3RyaW5nID0gdWlDb250cm9sRmllbGQuY2FsY0NvbHVtbldpZHRoIC0gNCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVpQ29udHJvbEZpZWxkLkFwaU5hbWUgPT09IHRoaXMucHJlc3NlZENvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1aUNvbnRyb2xGaWVsZC5jYWxjQ29sdW1uV2lkdGggPSB0aGlzLnN0YXJ0V2lkdGggKyB3aWR0aFRvQWRkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1aUNvbnRyb2xGaWVsZC5jYWxjVGl0bGVDb2x1bW5XaWR0aFN0cmluZyA9IHVpQ29udHJvbEZpZWxkLmNhbGNDb2x1bW5XaWR0aFN0cmluZyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aUNvbnRyb2xGaWVsZC5jYWxjQ29sdW1uV2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDYWxjQ29sc1dpZHRoICs9IHVpQ29udHJvbEZpZWxkLmNhbGNDb2x1bW5XaWR0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB0aGlzLnRhYmxlU3RhcnRXaWR0aCArIHdpZHRoVG9BZGQgKyAncHgnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGVja0ZvckNoYW5nZXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25MaXN0UmVzaXplRW5kKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJlc3NlZENvbHVtbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudCAmJiAkKGV2ZW50LnNyY0VsZW1lbnQpLnBhcmVudHMoJy5yZXNpemVCb3gnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRSZXNpemVEYXRhKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGltZW91dCAwIGZvciBvbkxpc3RTb3J0aW5nQ2hhbmdlIHdpbGwgaGF2ZSB0aGUgcHJlc3NlZENvbHVtbi5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbml0UmVzaXplRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25MaXN0U29ydGluZ0NoYW5nZShzb3J0Qnk6IHN0cmluZywgaXNBc2M6IGJvb2xlYW4sIGV2ZW50ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUHJpbnRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJlc3NlZENvbHVtbi5sZW5ndGggPiAwIHx8IChldmVudCAmJiAkKGV2ZW50LnNyY0VsZW1lbnQpLnBhcmVudHMoJy5yZXNpemVCb3gnKS5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zb3J0QnkgIT09IHNvcnRCeSB8fCB0aGlzLmlzQXNjICE9PSBpc0FzYykge1xyXG4gICAgICAgICAgICB0aGlzLnNvcnRCeSA9IHNvcnRCeTtcclxuICAgICAgICAgICAgdGhpcy5pc0FzYyA9IGlzQXNjO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVTb3J0aW5nVG9TZXNzaW9uKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVNvcnRpbmdDaGFuZ2VkLmVtaXQoeyBzb3J0QnksIGlzQXNjIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxpc3RIZWFkZXJNb3VzZUVudGVyKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5oZWFkZXJJc0luRm9jdXMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTGlzdEhlYWRlck1vdXNlTGVhdmUoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmhlYWRlcklzSW5Gb2N1cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25MaXN0UmVzaXplRW5kKGV2ZW50KTtcclxuICAgICAgICB0aGlzLmluaXRSZXNpemVEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25MaXN0Q2hhbmdlKGV2ZW50OiBDaGFuZ2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUHJpbnRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRm9yIG90aGVyIGV2ZW50cyBkbyBub3RoaW5nLlxyXG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnQuc3RhcnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBldmVudC5lbmQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlZE9iamVjdEhlaWdodCA9IGV2ZW50LmNhbGN1bGF0ZWRDaGlsZEhlaWdodCArICdweCc7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5sb2NrRXZlbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlSXRlbXMoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbEl0ZW1zKGV2ZW50LnN0YXJ0LCBldmVudC5lbmQsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBnZXRJdGVtc0Zyb21BcGkgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBldmVudC5zdGFydDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICghZ2V0SXRlbXNGcm9tQXBpICYmIGluZGV4IDwgZXZlbnQuZW5kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0SXRlbXNGcm9tQXBpID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBidWxrIGZyb20gYXBpLlxyXG4gICAgICAgICAgICBpZiAoZ2V0SXRlbXNGcm9tQXBpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldFRvcEl0ZW1zKCkgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5hZGRBdFN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZnJvbUluZGV4ID0gTWF0aC5tYXgoZXZlbnQuc3RhcnQgLSAodG9wIC0gKGV2ZW50LmVuZCAtIGV2ZW50LnN0YXJ0KSksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRvSW5kZXggPSBldmVudC5lbmQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmZyb21JbmRleCA9IGV2ZW50LnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRvSW5kZXggPSBNYXRoLm1pbihldmVudC5lbmQgKyAodG9wIC0gKGV2ZW50LmVuZCAtIGV2ZW50LnN0YXJ0KSksIHRoaXMudG90YWxSb3dzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUxpc3RDaGFuZ2VkLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5sb2NrRXZlbnRzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2Nyb2xsSXRlbXMgPSB0aGlzLml0ZW1zLnNsaWNlKGV2ZW50LnN0YXJ0LCBldmVudC5lbmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJdGVtcyh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBvblNjcm9sbGVyTGlzdENoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNQcmludGluZykge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyBGb3Igb3RoZXIgZXZlbnRzIGRvIG5vdGhpbmcuXHJcbiAgICAvLyAgICAgaWYgKHR5cGVvZiBldmVudC5zdGFydEluZGV4ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZXZlbnQuZW5kSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGlmICghdGhpcy5sb2NrRXZlbnRzKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudG9nZ2xlSXRlbXMoZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbEl0ZW1zKGV2ZW50LnN0YXJ0SW5kZXgsIGV2ZW50LmVuZEluZGV4KTtcclxuXHJcbiAgICAvLyAgICAgICAgIGxldCBnZXRJdGVtc0Zyb21BcGkgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBldmVudC5zdGFydEluZGV4O1xyXG5cclxuICAgIC8vICAgICAgICAgd2hpbGUgKCFnZXRJdGVtc0Zyb21BcGkgJiYgaW5kZXggPCBldmVudC5lbmRJbmRleCkge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1zW2luZGV4XSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGdldEl0ZW1zRnJvbUFwaSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAvLyBHZXQgYnVsayBmcm9tIGFwaS5cclxuICAgIC8vICAgICAgICAgaWYgKGdldEl0ZW1zRnJvbUFwaSkge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgdG9wID0gdGhpcy5nZXRUb3BJdGVtcygpIC0gMTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBpZiAoZXZlbnQuYWRkQXRTdGFydCkge1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gICAgIGV2ZW50LmZyb21JbmRleCA9IE1hdGgubWF4KGV2ZW50LnN0YXJ0IC0gKHRvcCAtIChldmVudC5lbmQgLSBldmVudC5zdGFydCkpLCAwKTtcclxuICAgIC8vICAgICAgICAgICAgIC8vICAgICBldmVudC50b0luZGV4ID0gZXZlbnQuZW5kO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIGV2ZW50LmZyb21JbmRleCA9IGV2ZW50LnN0YXJ0SW5kZXg7XHJcbiAgICAvLyAgICAgICAgICAgICBldmVudC50b0luZGV4ID0gTWF0aC5taW4oZXZlbnQuZW5kSW5kZXggKyAodG9wIC0gKGV2ZW50LmVuZEluZGV4IC0gZXZlbnQuc3RhcnRJbmRleCkpLCB0aGlzLnRvdGFsUm93cyk7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5ub3RpZnlMaXN0Q2hhbmdlZC5lbWl0KGV2ZW50KTtcclxuICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMubG9ja0V2ZW50cyA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLnNjcm9sbEl0ZW1zID0gdGhpcy5pdGVtcy5zbGljZShldmVudC5zdGFydCwgZXZlbnQuZW5kKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMudG9nZ2xlSXRlbXModHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgb25MaXN0TG9hZChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlMaXN0TG9hZC5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJlbnRDb250YWluZXIoKTogRWxlbWVudCB8IFdpbmRvdyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50U2Nyb2xsID8gdGhpcy5wYXJlbnRTY3JvbGwgOiB3aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgb25WYWx1ZUNoYW5nZWQodmFsdWVDaGFuZ2VkOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlZC5lbWl0KHZhbHVlQ2hhbmdlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DdXN0b21pemVGaWVsZENsaWNrKGN1c3RvbWl6ZUZpZWxkQ2xpY2tlZERhdGE6IFBlcHBlcmlGaWVsZENsaWNrZWREYXRhKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub3RpZnlGaWVsZENsaWNrZWQuZW1pdChjdXN0b21pemVGaWVsZENsaWNrZWREYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkN1c3RvbWl6ZUZpZWxkTWVudUNsaWNrZWQoY3VzdG9taXplRmllbGRDbGlja2VkRGF0YTogUGVwcGVyaUZpZWxkQ2xpY2tlZERhdGEpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vdGlmeU1lbnVJdGVtQ2xpY2tlZC5lbWl0KGN1c3RvbWl6ZUZpZWxkQ2xpY2tlZERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElzRGlzYWJsZWQocGVwcGVyaU9iamVjdElucHV0OiBPYmplY3RTaW5nbGVEYXRhKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZVNlbGVjdGlvbkl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IElzTm90U2VsZWN0YWJsZUZvckFjdGlvbnMgPSBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGEgJiYgIXBlcHBlcmlPYmplY3RJbnB1dC5EYXRhLklzU2VsZWN0YWJsZUZvckFjdGlvbnM7XHJcbiAgICAgICAgICAgIHJldHVybiBJc05vdFNlbGVjdGFibGVGb3JBY3Rpb25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXNBbGxTZWxlY3RlZEZvckFjdGlvbnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHJlcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0FsbFNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVuU2VsZWN0ZWRJdGVtcy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5zaXplID09PSB0aGlzLnRvdGFsUm93cykge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gdGhpcy5nZXRJc0FsbFNlbGVjdGVkKHRoaXMuc2Nyb2xsSXRlbXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5zaXplIDwgdGhpcy50b3RhbFJvd3MpIHtcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnNjcm9sbEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHBlcHBlcmlPYmplY3RJbnB1dCA9IHRoaXMuc2Nyb2xsSXRlbXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwZXBwZXJpT2JqZWN0SW5wdXQgb2YgdGhpcy5zY3JvbGxJdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IHBlcHBlcmlPYmplY3RJbnB1dCAmJiBwZXBwZXJpT2JqZWN0SW5wdXQuRGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuaGFzKHBlcHBlcmlPYmplY3RJbnB1dC5EYXRhLlVJRC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJc0FsbFNlbGVjdGVkKGlzQ2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblR5cGVGb3JBY3Rpb25zID09PSBTRUxFQ1RJT05fVFlQRV9GT1JfQUNUSU9OUy5NdWx0aSB8fFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblR5cGVGb3JBY3Rpb25zID09PSBTRUxFQ1RJT05fVFlQRV9GT1JfQUNUSU9OUy5TaW5nbGVBY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxDQi5jaGVja2VkID0gaXNDaGVja2VkO1xyXG4gICAgICAgICAgICB0aGlzLmlzQWxsU2VsZWN0ZWQgPSBpc0NoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEFsbEl0ZW1zRm9yQWN0aW9ucyhlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBGb3IgbWF0ZXJpYWwgY2hlY2tib3ggfHwgcmFkaW8uXHJcbiAgICAgICAgY29uc3QgaXNDaGVja2VkID0gZS5zb3VyY2UuY2hlY2tlZDtcclxuXHJcbiAgICAgICAgLy8gSW5kZXRlcm1pbmF0ZSBtb2RlXHJcbiAgICAgICAgbGV0IGlzSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gdGhpcy5pc0FsbFNlbGVjdGVkID8gdGhpcy51blNlbGVjdGVkSXRlbXMgOiB0aGlzLnNlbGVjdGVkSXRlbXM7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRMaXN0LnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIGlzSW5kZXRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBbGxTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVNlbGVjdGVkSXRlbXNDaGFuZ2VkLmVtaXQoMCk7XHJcbiAgICAgICAgICAgIGUuc291cmNlLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMudW5TZWxlY3RlZEl0ZW1zLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIGlmICghaXNJbmRldGVybWluYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBbGxTZWxlY3RlZCA9IGlzQ2hlY2tlZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHlwZUZvckFjdGlvbnMgPT09IFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TLlNpbmdsZUFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGFsbCBvciByZW1vdmUgYWxsXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVNlbGVjdEFsbFNpbmdsZUFjdGlvbkNsaWNrZWQuZW1pdChpc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uVHlwZUZvckFjdGlvbnMgPT09IFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TLk11bHRpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5U2VsZWN0ZWRJdGVtc0NoYW5nZWQuZW1pdCgwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUlkID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uRGF0YSAmJiBpdGVtLkRhdGEuSXNTZWxlY3RhYmxlRm9yQWN0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlTZWxlY3RlZEl0ZW1zQ2hhbmdlZC5lbWl0KGZpbHRlcmVkSXRlbXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblR5cGVGb3JBY3Rpb25zID09PSBTRUxFQ1RJT05fVFlQRV9GT1JfQUNUSU9OUy5TaW5nbGVBY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbGxcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5U2VsZWN0QWxsU2luZ2xlQWN0aW9uQ2xpY2tlZC5lbWl0KGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJc1NlbGVjdGVkRm9yQWN0aW9ucyhpdGVtSWQ6IHN0cmluZywgaXNTZWxlY3RhYmxlRm9yQWN0aW9uczogYm9vbGVhbiwgaXRlbVR5cGU6IHN0cmluZyA9ICcnKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHlwZUZvckFjdGlvbnMgPT09IFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TLlNpbmdsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1JZCA9PT0gdGhpcy5nZXRVbmlxSXRlbUlkKGl0ZW1JZCwgaXRlbVR5cGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3Rpb25UeXBlRm9yQWN0aW9ucyA9PT0gU0VMRUNUSU9OX1RZUEVfRk9SX0FDVElPTlMuU2luZ2xlQWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSB0aGlzLmlzQWxsU2VsZWN0ZWQgfHwgdGhpcy5zZWxlY3RlZEl0ZW1zLmhhcyhpdGVtSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudW5TZWxlY3RlZEl0ZW1zLmhhcyhpdGVtSWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uVHlwZUZvckFjdGlvbnMgPT09IFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TLk11bHRpKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNTZWxlY3RhYmxlRm9yQWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMuaXNBbGxTZWxlY3RlZCB8fCB0aGlzLnNlbGVjdGVkSXRlbXMuaGFzKGl0ZW1JZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudW5TZWxlY3RlZEl0ZW1zLmhhcyhpdGVtSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RJdGVtRm9yQWN0aW9ucyhlOiBhbnksIGl0ZW1JZDogc3RyaW5nLCBpc1NlbGVjdGFibGVGb3JBY3Rpb25zOiBib29sZWFuLCBpdGVtVHlwZTogc3RyaW5nID0gJycpOiB2b2lkIHtcclxuICAgICAgICAvLyBGb3IgbWF0ZXJpYWwgY2hlY2tib3ggfHwgcmFkaW8uXHJcbiAgICAgICAgY29uc3QgaXNDaGVja2VkID0gZS5zb3VyY2UuY2hlY2tlZDtcclxuICAgICAgICB0aGlzLnNldEl0ZW1DbGlja2VkKGl0ZW1JZCwgaXNTZWxlY3RhYmxlRm9yQWN0aW9ucywgaXRlbVR5cGUsIGlzQ2hlY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXRlbUNsaWNrZWQoZTogYW55LCBvYmplY3RTaW5nbGVEYXRhOiBPYmplY3RTaW5nbGVEYXRhKTogdm9pZCB7XHJcbiAgICAgICAgLy8gU2V0IHNlbGV0ZWQgaXRlbVxyXG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9IG9iamVjdFNpbmdsZURhdGEuRGF0YS5VSUQudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBpdGVtVHlwZSA9IG9iamVjdFNpbmdsZURhdGEuRGF0YS5UeXBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IGlzQ2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAob2JqZWN0U2luZ2xlRGF0YSAmJiBvYmplY3RTaW5nbGVEYXRhLkRhdGEgJiYgb2JqZWN0U2luZ2xlRGF0YS5EYXRhLklzU2VsZWN0YWJsZUZvckFjdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JZCA9IHRoaXMuZ2V0VW5pcUl0ZW1JZChpdGVtSWQsIGl0ZW1UeXBlKTtcclxuICAgICAgICAgICAgaXNDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVGFibGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHlwZUZvckFjdGlvbnMgPT09IFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TLlNpbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtQ2xpY2tlZChpdGVtSWQsIG9iamVjdFNpbmdsZURhdGEuRGF0YS5Jc1NlbGVjdGFibGVGb3JBY3Rpb25zLCBpdGVtVHlwZSwgaXNDaGVja2VkKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGlvblR5cGVGb3JBY3Rpb25zID09PSBTRUxFQ1RJT05fVFlQRV9GT1JfQUNUSU9OUy5Ob25lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBKdXN0IG1hcmsgdGhlIHJvdyBhcyBoaWdobGlnaHRlZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtQ2xpY2tlZChpdGVtSWQsIG9iamVjdFNpbmdsZURhdGEuRGF0YS5Jc1NlbGVjdGFibGVGb3JBY3Rpb25zLCBpdGVtVHlwZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVRodW1ibmFpbENsaWNrZWQuZW1pdChvYmplY3RTaW5nbGVEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXRlbUNsaWNrZWQoaXRlbUlkLCBpc1NlbGVjdGFibGVGb3JBY3Rpb25zOiBib29sZWFuLCBpdGVtVHlwZTogc3RyaW5nLCBpc0NoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB1bmlxSXRlbUlkID0gdGhpcy5nZXRVbmlxSXRlbUlkKGl0ZW1JZCwgaXRlbVR5cGUpO1xyXG5cclxuICAgICAgICAvLyBzZWxlY3QgdGhlIHNlbGVjdGVkIGl0ZW0uXHJcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAvLyBTZXQgc2VsZXRlZCBpdGVtXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSWQgPSB1bmlxSXRlbUlkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbUlkID09PSB1bmlxSXRlbUlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUlkID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblR5cGVGb3JBY3Rpb25zID09PSBTRUxFQ1RJT05fVFlQRV9GT1JfQUNUSU9OUy5TaW5nbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlTZWxlY3RlZEl0ZW1zQ2hhbmdlZC5lbWl0KHRoaXMuc2VsZWN0ZWRJdGVtSWQubGVuZ3RoID09PSAwID8gMCA6IDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3Rpb25UeXBlRm9yQWN0aW9ucyA9PT0gU0VMRUNUSU9OX1RZUEVfRk9SX0FDVElPTlMuU2luZ2xlQWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uSXRlbXMoaXRlbUlkLCB1bmlxSXRlbUlkLCBpc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVNpbmdsZUFjdGlvbkNsaWNrZWQuZW1pdCh7IGlkOiBpdGVtSWQsIHNlbGVjdGVkOiBpc0NoZWNrZWQgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGlvblR5cGVGb3JBY3Rpb25zID09PSBTRUxFQ1RJT05fVFlQRV9GT1JfQUNUSU9OUy5NdWx0aSkge1xyXG4gICAgICAgICAgICBpZiAoaXNTZWxlY3RhYmxlRm9yQWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25JdGVtcyhpdGVtSWQsIHVuaXFJdGVtSWQsIGlzQ2hlY2tlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSB0aGlzLmlzQWxsU2VsZWN0ZWQgPyB0aGlzLnVuU2VsZWN0ZWRJdGVtcyA6IHRoaXMuc2VsZWN0ZWRJdGVtcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0Q291bnQgPSB0aGlzLmlzQWxsU2VsZWN0ZWQgPyB0aGlzLnRvdGFsUm93cyAtIGN1cnJlbnRMaXN0LnNpemUgOiBjdXJyZW50TGlzdC5zaXplO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlTZWxlY3RlZEl0ZW1zQ2hhbmdlZC5lbWl0KGN1cnJlbnRMaXN0Q291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVGFibGVSb3dNb3VzZUVudGVyKGV2ZW50OiBhbnksIGl0ZW1JZDogc3RyaW5nLCBpdGVtVHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3VjaERldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1bmlxSXRlbUlkID0gdGhpcy5nZXRVbmlxSXRlbUlkKGl0ZW1JZCwgaXRlbVR5cGUpO1xyXG4gICAgICAgIHRoaXMuaG92ZXJlZEl0ZW1JZCA9IHVuaXFJdGVtSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25UYWJsZVJvd01vdXNlTGVhdmUoZXZlbnQ6IGFueSwgaXRlbUlkOiBzdHJpbmcsIGl0ZW1UeXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhvdmVyZWRJdGVtSWQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBvbkNhcmRNb3VzZUVudGVyKGV2ZW50OiBhbnksIGl0ZW1JZDogc3RyaW5nLCBpdGVtVHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3VjaERldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1bmlxSXRlbUlkID0gdGhpcy5nZXRVbmlxSXRlbUlkKGl0ZW1JZCwgaXRlbVR5cGUpO1xyXG4gICAgICAgIHRoaXMuaG92ZXJlZEl0ZW1JZCA9IHVuaXFJdGVtSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYXJkTW91c2VMZWF2ZShldmVudDogYW55LCBpdGVtSWQ6IHN0cmluZywgaXRlbVR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaG92ZXJlZEl0ZW1JZCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRodW1ibmFpbHNMYXlvdXQoKTogTEFZT1VUX1RZUEUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxheW91dFR5cGUgPT0gbnVsbCA/IExBWU9VVF9UWVBFLlBlcHBlcmlDYXJkIDogdGhpcy5sYXlvdXRUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGwgdGhpcyBmdW5jdGlvbiBhZnRlciByZXNpemUgKyBhbmltYXRpb24gZW5kXHJcbiAgICB3aW5SZXNpemUoZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52aXJ0dWFsU2Nyb2xsICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLnZpcnR1YWxTY3JvbGwucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXJXaWR0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRMYXlvdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFja0J5RnVuYyhpbmRleDogbnVtYmVyLCBpdGVtOiBPYmplY3RTaW5nbGVEYXRhKTogYW55IHtcclxuICAgICAgICByZXR1cm4gaXRlbSAmJiBpdGVtLkRhdGEgJiYgaXRlbS5EYXRhLlVJRCA/IGl0ZW0uRGF0YS5VSUQgOiBpbmRleDtcclxuICAgICAgICAvLyBsZXQgcmVzOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICAvLyBpZiAoaXRlbSAmJiBpdGVtLkRhdGEgJiYgaXRlbS5EYXRhLlVJRCkge1xyXG4gICAgICAgIC8vICAgIHJlcyA9IGl0ZW0uRGF0YS5VSUQgKyBcIl9cIiArIHRoaXMubGlzdFR5cGUgKyBcIl9cIiArICh0aGlzLmlzVGFibGUgPyBcIlRhYmxlXCIgOiBcIlRodW1ibmFpbHNcIik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgIHJlcyA9IGluZGV4ICsgXCJfXCIgKyB0aGlzLmxpc3RUeXBlICsgXCJfXCIgKyAodGhpcy5pc1RhYmxlID8gXCJUYWJsZVwiIDogXCJUaHVtYm5haWxzXCIpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhbkl0ZW1zKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXNDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy50b3RhbFJvd3MgPiAwID8gQXJyYXk8T2JqZWN0U2luZ2xlRGF0YT4odGhpcy50b3RhbFJvd3MpIDogW107XHJcbiAgICAgICAgdGhpcy5zY3JvbGxJdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlZE9iamVjdEhlaWdodCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVJQ29udHJvbCgpOiBVSUNvbnRyb2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVpQ29udHJvbDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TGlzdERhdGEodWlDb250cm9sOiBVSUNvbnRyb2wsIHRvdGFsUm93czogbnVtYmVyLCBpdGVtczogT2JqZWN0U2luZ2xlRGF0YVtdLCB2aWV3VHlwZTogVklFV19UWVBFID0gVklFV19UWVBFLlRhYmxlLFxyXG4gICAgICAgIGl0ZW1DbGFzczogc3RyaW5nID0gJycsIHNob3dTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdGVkSXRlbXNGcm9tU3RhdGU6IE1hcDxzdHJpbmcsIHN0cmluZz4gPVxyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXRlLmdldEl0ZW1Gcm9tU3RhdGUoUGVwcGVyaUxpc3RDb21wb25lbnQuU0VMRUNURURfSVRFTVNfU1RBVEVfS0VZKTtcclxuICAgICAgICAvLyBpZiAoc2VsZWN0ZWRJdGVtc0Zyb21TdGF0ZSAhPSBudWxsICYmIHR5cGVvZiBzZWxlY3RlZEl0ZW1zRnJvbVN0YXRlLnNpemUgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgLy8gICAgIHNlbGVjdGVkSXRlbXNGcm9tU3RhdGUuc2l6ZSA+IDApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWRJdGVtc0Zyb21TdGF0ZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRJdGVtSW5TdGF0ZShQZXBwZXJpTGlzdENvbXBvbmVudC5TRUxFQ1RFRF9JVEVNU19TVEFURV9LRVksIG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCkpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmNsZWFyKCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBjb25zdCB1blNlbGVjdGVkSXRlbXNGcm9tU3RhdGU6IE1hcDxzdHJpbmcsIHN0cmluZz4gPVxyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXRlLmdldEl0ZW1Gcm9tU3RhdGUoUGVwcGVyaUxpc3RDb21wb25lbnQuVU5fU0VMRUNURURfSVRFTVNfU1RBVEVfS0VZKTtcclxuICAgICAgICAvLyBpZiAodW5TZWxlY3RlZEl0ZW1zRnJvbVN0YXRlICE9IG51bGwgJiYgdHlwZW9mIHVuU2VsZWN0ZWRJdGVtc0Zyb21TdGF0ZS5zaXplICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgIC8vICAgICB1blNlbGVjdGVkSXRlbXNGcm9tU3RhdGUuc2l6ZSA+IDApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy51blNlbGVjdGVkSXRlbXMgPSB1blNlbGVjdGVkSXRlbXNGcm9tU3RhdGU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0SXRlbUluU3RhdGUoUGVwcGVyaUxpc3RDb21wb25lbnQuVU5fU0VMRUNURURfSVRFTVNfU1RBVEVfS0VZLCBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudW5TZWxlY3RlZEl0ZW1zLmNsZWFyKCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS5nZXRJdGVtRnJvbVN0YXRlKFBlcHBlcmlMaXN0Q29tcG9uZW50LkFMTF9TRUxFQ1RFRF9TVEFURV9LRVkpICE9IG51bGwpIHtcclxuICAgICAgICAvLyAgICAgbGV0IGlzQWxsU2VsZWN0ZWRGcm9tU3RhdGUgPSB0aGlzLnN0YXRlLmdldEl0ZW1Gcm9tU3RhdGUoUGVwcGVyaUxpc3RDb21wb25lbnQuQUxMX1NFTEVDVEVEX1NUQVRFX0tFWSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNBbGxTZWxlY3RlZCA9IGlzQWxsU2VsZWN0ZWRGcm9tU3RhdGUgJiYgdGhpcy5nZXRJc0FsbFNlbGVjdGVkKGl0ZW1zKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5zZXRJdGVtSW5TdGF0ZShQZXBwZXJpTGlzdENvbXBvbmVudC5BTExfU0VMRUNURURfU1RBVEVfS0VZLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzQWxsU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnN0YXRlLmdldEl0ZW1Gcm9tU3RhdGUoUGVwcGVyaUxpc3RDb21wb25lbnQuU09SVF9CWV9TVEFURV9LRVkpICE9PSAnJykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNvcnRCeSA9IHRoaXMuc3RhdGUuZ2V0SXRlbUZyb21TdGF0ZShQZXBwZXJpTGlzdENvbXBvbmVudC5TT1JUX0JZX1NUQVRFX0tFWSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUuc2V0SXRlbUluU3RhdGUoUGVwcGVyaUxpc3RDb21wb25lbnQuU09SVF9CWV9TVEFURV9LRVksICcnKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnN0YXRlLmdldEl0ZW1Gcm9tU3RhdGUoUGVwcGVyaUxpc3RDb21wb25lbnQuQVNDRU5ESU5HX1NUQVRFX0tFWSkgIT0gbnVsbCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzQXNjID0gdGhpcy5zdGF0ZS5nZXRJdGVtRnJvbVN0YXRlKFBlcHBlcmlMaXN0Q29tcG9uZW50LkFTQ0VORElOR19TVEFURV9LRVkpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0YXRlLnNldEl0ZW1JblN0YXRlKFBlcHBlcmlMaXN0Q29tcG9uZW50LkFTQ0VORElOR19TVEFURV9LRVksIGZhbHNlKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gdGhpcy5pc0FsbFNlbGVjdGVkID8gdGhpcy51blNlbGVjdGVkSXRlbXMgOiB0aGlzLnNlbGVjdGVkSXRlbXM7XHJcbiAgICAgICAgY29uc3QgY3VycmVudExpc3RDb3VudCA9IHRoaXMuaXNBbGxTZWxlY3RlZCA/IHRoaXMudG90YWxSb3dzIC0gY3VycmVudExpc3Quc2l6ZSA6IGN1cnJlbnRMaXN0LnNpemU7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlTZWxlY3RlZEl0ZW1zQ2hhbmdlZC5lbWl0KGN1cnJlbnRMaXN0Q291bnQpO1xyXG5cclxuICAgICAgICB0aGlzLmlzQ2FyZFZpZXcgPSB2aWV3VHlwZSA9PT0gVklFV19UWVBFLkNhcmQ7XHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0aW9uID0gc2hvd1NlbGVjdGlvbjtcclxuICAgICAgICB0aGlzLnVpQ29udHJvbCA9IHVpQ29udHJvbDtcclxuICAgICAgICB0aGlzLml0ZW1DbGFzcyA9IGl0ZW1DbGFzcztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUlkID0gJyc7XHJcbiAgICAgICAgdGhpcy5pc1RhYmxlID0gdmlld1R5cGUgPT09IFZJRVdfVFlQRS5UYWJsZTtcclxuICAgICAgICB0aGlzLnRvdGFsUm93cyA9IHRvdGFsUm93cztcclxuXHJcbiAgICAgICAgLy8gZml4IGJ1ZyBmb3IgdGhlIHNjcm9sbFRvIHRoYXQgZG9lc24ndCB3b3JrIG9uIGVkZ2UgZGl2ICwgbm90IHdpbmRvd1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbGluZ0VsZW1lbnQgPSB0aGlzLmdldFBhcmVudENvbnRhaW5lcigpO1xyXG4gICAgICAgIGlmIChzY3JvbGxpbmdFbGVtZW50ID09PSB3aW5kb3cpIHtcclxuICAgICAgICAgICAgc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzT25Bbkl0ZW0oMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsZWFuSXRlbXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxSb3dzID09PSBpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VWaXJ0dWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKGl0ZW1zLCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5vbkxpc3RMb2FkKG51bGwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlVmlydHVhbFNjcm9sbCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mU3RhcnRJdGVtcyA9IHRoaXMuZ2V0TnVtYmVyT2ZTdGFydEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKGl0ZW1zLCB7IHN0YXJ0OiAwLCBlbmQ6IG51bWJlck9mU3RhcnRJdGVtcywgZnJvbUluZGV4OiAwLCB0b0luZGV4OiBudW1iZXJPZlN0YXJ0SXRlbXMsIGFkZEF0U3RhcnQ6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudmlydHVhbFNjcm9sbCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlydHVhbFNjcm9sbC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TGF5b3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXNBbGxTZWxlY3RlZChpdGVtczogQXJyYXk8T2JqZWN0U2luZ2xlRGF0YT4pOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5zaXplID4gMCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgLy8gY29uc3QgcGVwcGVyaU9iamVjdElucHV0ID0gaXRlbXNbaW5kZXhdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBlcHBlcmlPYmplY3RJbnB1dCBvZiBpdGVtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEocGVwcGVyaU9iamVjdElucHV0ICYmIHBlcHBlcmlPYmplY3RJbnB1dC5EYXRhICYmIHRoaXMuc2VsZWN0ZWRJdGVtcy5oYXMocGVwcGVyaU9iamVjdElucHV0LkRhdGEuVUlELnRvU3RyaW5nKCkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldE51bWJlck9mU3RhcnRJdGVtcygpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBudW1iZXJPZlN0YXJ0SXRlbXMgPSAyMDtcclxuXHJcbiAgICAgICAgaWYgKCh0aGlzLnNjcmVlblNpemUgPT09IFNDUkVFTl9TSVpFLlhMKSB8fFxyXG4gICAgICAgICAgICAodGhpcy5zY3JlZW5TaXplID09PSBTQ1JFRU5fU0laRS5MRykpIHtcclxuICAgICAgICAgICAgbnVtYmVyT2ZTdGFydEl0ZW1zID0gdGhpcy5pc1RhYmxlID8gNTAgOiA0MDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2NyZWVuU2l6ZSA9PT0gU0NSRUVOX1NJWkUuTUQpIHtcclxuICAgICAgICAgICAgbnVtYmVyT2ZTdGFydEl0ZW1zID0gdGhpcy5pc1RhYmxlID8gMzAgOiAyMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2NyZWVuU2l6ZSA9PT0gU0NSRUVOX1NJWkUuU00pIHtcclxuICAgICAgICAgICAgbnVtYmVyT2ZTdGFydEl0ZW1zID0gdGhpcy5pc1RhYmxlID8gMjAgOiAxMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2NyZWVuU2l6ZSA9PT0gU0NSRUVOX1NJWkUuWFMpIHtcclxuICAgICAgICAgICAgbnVtYmVyT2ZTdGFydEl0ZW1zID0gdGhpcy5pc1RhYmxlID8gMTUgOiA1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bWJlck9mU3RhcnRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZElkcyhzZWxlY3RlZElkczogc3RyaW5nW10sIGl0ZW1zID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuaXNBbGxTZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0ZWRJZHMpIHtcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNlbGVjdGVkSWQgb2Ygc2VsZWN0ZWRJZHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IHNlbGVjdGVkSWQuc3BsaXQodGhpcy5TRVBBUkFUT1IpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0bXAgJiYgdG1wLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSWQgPSB0bXBbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVR5cGUgPSB0bXAubGVuZ3RoID4gMSA/IHRtcFsxXSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuc2V0KGl0ZW1JZCwgdGhpcy5nZXRVbmlxSXRlbUlkKGl0ZW1JZCwgaXRlbVR5cGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pc0FsbFNlbGVjdGVkID0gdGhpcy5nZXRJc0FsbFNlbGVjdGVkKGl0ZW1zID8gaXRlbXMgOiB0aGlzLnNjcm9sbEl0ZW1zKTsgLy8gdGhpcy5zZWxlY3RlZEl0ZW1zLkNvdW50KCkgPT09IHRoaXMudG90YWxSb3dzO1xyXG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvbkRhdGFJblNlc3Npb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52aXJ0dWFsU2Nyb2xsICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLnZpcnR1YWxTY3JvbGwucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3Rpb25EYXRhSW5TZXNzaW9uKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0SXRlbUluU3RhdGUoUGVwcGVyaUxpc3RDb21wb25lbnQuU0VMRUNURURfSVRFTVNfU1RBVEVfS0VZLCB0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuc2V0SXRlbUluU3RhdGUoUGVwcGVyaUxpc3RDb21wb25lbnQuVU5fU0VMRUNURURfSVRFTVNfU1RBVEVfS0VZLCB0aGlzLnVuU2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5zZXRJdGVtSW5TdGF0ZShQZXBwZXJpTGlzdENvbXBvbmVudC5BTExfU0VMRUNURURfU1RBVEVfS0VZLCB0aGlzLmlzQWxsU2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxpc3RJdGVtcyhpdGVtczogT2JqZWN0U2luZ2xlRGF0YVtdLCBldmVudDogQ2hhbmdlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy51c2VWaXJ0dWFsU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIC8vIENsZWFuIGFycmF5XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zQ291bnRlciArIGl0ZW1zLmxlbmd0aCA+IFBlcHBlcmlMaXN0Q29tcG9uZW50LlRPUF9JVEVNU19BUlJBWSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbkl0ZW1zKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBldmVudC5mcm9tSW5kZXggPyBldmVudC5mcm9tSW5kZXggOiBldmVudC5zdGFydDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pdGVtc1tpICsgc3RhcnRJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2kgKyBzdGFydEluZGV4XSA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNDb3VudGVyICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsSXRlbXMoZXZlbnQuc3RhcnQsIGV2ZW50LmVuZCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlSXRlbXModHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubG9ja0V2ZW50cyA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSXRlbXMgPSB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNDb3VudGVyID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMaXN0SXRlbShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgaXRlbXMgbGlzdFxyXG4gICAgICAgIGluZGV4ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgoaSA9PiBpICYmIGkuRGF0YSAmJiBpLkRhdGEuVUlEID09PSBkYXRhLlVJRCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XS5EYXRhID0gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVXBkYXRlIHNjcm9sbEl0ZW1zIGxpc3RcclxuICAgICAgICBpbmRleCA9IHRoaXMuc2Nyb2xsSXRlbXMuZmluZEluZGV4KGkgPT4gaSAmJiBpLkRhdGEgJiYgaS5EYXRhLlVJRCA9PT0gZGF0YS5VSUQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5zY3JvbGxJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxJdGVtc1tpbmRleF0uRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JDaGFuZ2VzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzT25Bbkl0ZW0oaXRlbUluZGV4KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZpcnR1YWxTY3JvbGwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlydHVhbFNjcm9sbC5zY3JvbGxJbnRvKGl0ZW1JbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGVkSXRlbXNEYXRhKGlzRm9yRWRpdDogYm9vbGVhbiA9IGZhbHNlKTogU2VsZWN0aW9uRGF0YSB7XHJcbiAgICAgICAgY29uc3QgcmVzOiBTZWxlY3Rpb25EYXRhID0gbmV3IFNlbGVjdGlvbkRhdGEoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHlwZUZvckFjdGlvbnMgPT09IFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TLlNpbmdsZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0bXAgPSB0aGlzLnNlbGVjdGVkSXRlbUlkLnNwbGl0KHRoaXMuU0VQQVJBVE9SKTtcclxuXHJcbiAgICAgICAgICAgIHJlcy5zZWxlY3Rpb25UeXBlID0gMTtcclxuICAgICAgICAgICAgcmVzLnJvd3MgPSBbdG1wWzBdXTtcclxuICAgICAgICAgICAgcmVzLnJvd1R5cGVzID0gW3RtcFsxXV07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGlvblR5cGVGb3JBY3Rpb25zID09PSBTRUxFQ1RJT05fVFlQRV9GT1JfQUNUSU9OUy5NdWx0aSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtVHlwZXMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGlvblR5cGUgPSAxO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudExpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZvciBlZGl0IC0gb25seSB0aGUgc2VsZWN0ZWQgaXRlbXMuXHJcbiAgICAgICAgICAgIGlmIChpc0ZvckVkaXQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0FsbFNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExpc3QgPSBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRJdGVtcy52YWx1ZXMoKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgaWQncyBvZiB0aGUgaXRlbXMgdGhhdCBub3QgZm91bmRlZCBpbiB1blNlbGVjdGVkSXRlbXMuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSAmJiAhdGhpcy51blNlbGVjdGVkSXRlbXMuaGFzKGl0ZW0uRGF0YS5VSUQudG9TdHJpbmcoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaXN0LnB1c2godGhpcy5nZXRVbmlxSXRlbUlkKGl0ZW0uRGF0YS5VSUQudG9TdHJpbmcoKSwgaXRlbS5EYXRhLlR5cGUudG9TdHJpbmcoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGb3IgZGVsZXRlIC0gY2FuIGJlIHRoZSB1bnNlbGVjdGVkIHdpdGggc2VsZWN0X2FsbCBmdW5jdGlvbmFsaXR5LlxyXG4gICAgICAgICAgICAgICAgY3VycmVudExpc3QgPSBBcnJheS5mcm9tKHRoaXMuaXNBbGxTZWxlY3RlZCA/IHRoaXMudW5TZWxlY3RlZEl0ZW1zLnZhbHVlcygpIDogdGhpcy5zZWxlY3RlZEl0ZW1zLnZhbHVlcygpKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblR5cGUgPSB0aGlzLmlzQWxsU2VsZWN0ZWQgPyAwIDogMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3VycmVudExpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGl0ZW0uc3BsaXQodGhpcy5TRVBBUkFUT1IpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0bXAubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh0bXBbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UeXBlcy5wdXNoKHRtcFsxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVzLnNlbGVjdGlvblR5cGUgPSBzZWxlY3Rpb25UeXBlO1xyXG4gICAgICAgICAgICByZXMucm93cyA9IGl0ZW1zO1xyXG4gICAgICAgICAgICByZXMucm93VHlwZXMgPSBpdGVtVHlwZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb2xsZWN0aW9uRnJvbVN0YXRlKGNvbGxlY3Rpb25UeXBlLCBjb2xsZWN0aW9uOiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjb2xsZWN0aW9uVHlwZSA9PT0gJ1NlbGVjdGVkJykge1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uLmZvckVhY2goeCA9PiB0aGlzLnNlbGVjdGVkSXRlbXMuc2V0KHgsIHgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uLmZvckVhY2goeCA9PiB0aGlzLnVuU2VsZWN0ZWRJdGVtcy5zZXQoeCwgeCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJc0l0ZW1FZGl0YWJsZSh1aWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zLmZpbHRlcih4ID0+IHguRGF0YS5VSUQudG9TdHJpbmcoKSA9PT0gdWlkKTtcclxuICAgICAgICBpZiAoaXRlbS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtWzBdLkRhdGEuSXNFZGl0YWJsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1EYXRhQnlJRCh1aWQ6IHN0cmluZyk6IE9iamVjdHNEYXRhUm93IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5EYXRhLlVJRC50b1N0cmluZygpID09PSB1aWQpPy5EYXRhO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBpdGVtID0gdGhpcy5pdGVtcy5maWx0ZXIoeCA9PiB4LkRhdGEuVUlELnRvU3RyaW5nKCkgPT09IHVpZCk7XHJcbiAgICAgICAgLy8gaWYgKGl0ZW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gaXRlbVswXS5EYXRhO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwidG90YWxSb3dzID09IDBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJuby1kYXRhXCI+e3sgbm9EYXRhRm91bmRNc2cgfX08L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJ0b3RhbFJvd3MgPiAwXCI+XHJcbiAgICA8IS0tXHJcbiAgICAgICAgICAgIGFwcERlYm91bmNlTW91c2VNb3ZlXHJcbiAgICAgICAgICAgIFtkZWJvdW5jZVRpbWVdPVwiMTBcIlxyXG4gICAgICAgICAgICAoZGVib3VuY2VNb3VzZU1vdmUpPVwib25MaXN0UmVzaXplKCRldmVudClcIiAtLT5cclxuICAgIDxkaXYgKm5nSWY9XCJpc1RhYmxlXCIgI3RhYmxlSGVhZGVyIGNsYXNzPVwidGFibGUtaGVhZGVyXCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7ICdiZWxvdy1oZWFkZXItYW5kLXRvcC1iYXInIDogcGFyZW50U2Nyb2xsID09IG51bGwgfVwiIChtb3VzZXVwKT1cIm9uTGlzdFJlc2l6ZUVuZCgkZXZlbnQpXCJcclxuICAgICAgICAobW91c2VlbnRlcik9XCJvbkxpc3RIZWFkZXJNb3VzZUVudGVyKCRldmVudClcIiAobW91c2VsZWF2ZSk9XCJvbkxpc3RIZWFkZXJNb3VzZUxlYXZlKCRldmVudClcIlxyXG4gICAgICAgIChtb3VzZW1vdmUpPVwib25MaXN0UmVzaXplKCRldmVudClcIj5cclxuICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJ0YWJsZS1oZWFkZXItZmllbGRzZXRcIj5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCAqbmdJZj1cInNlbGVjdGlvblR5cGVGb3JBY3Rpb25zICE9PSBTRUxFQ1RJT05fVFlQRV9GT1JfQUNUSU9OUy5Ob25lXCIgI3NlbGVjdEFsbENCXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInB1bGwtbGVmdCBmbGlwIHJvdy1zZWxlY3Rpb25cIiB0eXBlPVwiY2hlY2tib3hcIiBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25UeXBlRm9yQWN0aW9ucyA9PSBTRUxFQ1RJT05fVFlQRV9GT1JfQUNUSU9OUy5TaW5nbGUgfHwgKHNlbGVjdGlvblR5cGVGb3JBY3Rpb25zID09IFNFTEVDVElPTl9UWVBFX0ZPUl9BQ1RJT05TLk11bHRpICYmIGhpZGVBbGxTZWxlY3Rpb25Jbk11bHRpKSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJpc0FsbFNlbGVjdGVkID8gdW5TZWxlY3RlZEl0ZW1zLnNpemUgPiAwICYmIHVuU2VsZWN0ZWRJdGVtcy5zaXplIDwgdG90YWxSb3dzIDogKHNlbGVjdGVkSXRlbXMuc2l6ZSA+IDAgJiYgIWdldElzQWxsU2VsZWN0ZWRGb3JBY3Rpb25zKCkpXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBzZWxlY3Rpb25UeXBlRm9yQWN0aW9ucyA9PT0gU0VMRUNUSU9OX1RZUEVfRk9SX0FDVElPTlMuU2luZ2xlXCJcclxuICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImdldElzQWxsU2VsZWN0ZWRGb3JBY3Rpb25zKClcIiAoY2hhbmdlKT1cInNlbGVjdEFsbEl0ZW1zRm9yQWN0aW9ucygkZXZlbnQpXCI+PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIHVpQ29udHJvbD8uQ29udHJvbEZpZWxkczsgbGV0IGogPSBpbmRleFwiIGNsYXNzPVwiaGVhZGVyLWNvbHVtbiBwdWxsLWxlZnQgZmxpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieyB3aWR0aDogZmllbGQuY2FsY1RpdGxlQ29sdW1uV2lkdGhTdHJpbmcgfVwiIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdXBwb3J0LXNvcnRpbmcnOiBzdXBwb3J0U29ydGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdoYXMtc29ydGluZyc6IGZpZWxkLkFwaU5hbWUgPT09IHNvcnRCeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1yZXNpemluZyc6IGZpZWxkLkFwaU5hbWUgPT09IHByZXNzZWRDb2x1bW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaXMtZmlyc3QnOiBqID09PSAwICYmIHNlbGVjdGlvblR5cGVGb3JBY3Rpb25zICE9PSBTRUxFQ1RJT05fVFlQRV9GT1JfQUNUSU9OUy5NdWx0aSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpcy1sYXN0JzogaiA9PT0gdWlDb250cm9sPy5Db250cm9sRmllbGRzPy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzdXBwb3J0U29ydGluZyA/IChvbkxpc3RTb3J0aW5nQ2hhbmdlKGZpZWxkLkFwaU5hbWUsIHNvcnRCeSAhPT0gbnVsbCAmJiBzb3J0QnkgIT0gZmllbGQuQXBpTmFtZSA/IHRydWUgOiAhaXNBc2MsICRldmVudCkpIDogZmFsc2VcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwiZmllbGQuVGl0bGUgIT0gJydcIiBpZD1cInt7IGZpZWxkLkFwaU5hbWUgfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlYWRlci1sYWJlbCBib2R5LXNtIHB1bGwtbGVmdCBmbGlwIHRleHQtYWxpZ24te3sgZmllbGQuTGF5b3V0LlhBbGlnbm1lbnQgfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cInt7IGZpZWxkLlRpdGxlIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpZWxkLlRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIChjbGljayk9XCJvbkxpc3RTb3J0aW5nQ2hhbmdlKGZpZWxkLkFwaU5hbWUsIHNvcnRCeSAhPT0gbnVsbCAmJiBzb3J0QnkgIT0gZmllbGQuQXBpTmFtZSA/IHRydWUgOiAhaXNBc2MpXCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwiZmllbGQuVGl0bGUgPT0gJydcIiBpZD1cInt7IGZpZWxkLkFwaU5hbWUgfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlYWRlci1sYWJlbCBib2R5LXNtIHB1bGwtbGVmdCBmbGlwXCI+Jm5ic3A7PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInN1cHBvcnRSZXNpemluZ1wiIGNsYXNzPVwicmVzaXplQm94IHB1bGwtcmlnaHQgZmxpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwib25MaXN0UmVzaXplU3RhcnQoJGV2ZW50LCBmaWVsZC5BcGlOYW1lKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cImFycm93LXVwXCIgY2xhc3M9XCJhc2NcIj48L3BlcC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIFRoZSBvbkxpc3RTb3J0aW5nQ2hhbmdlIG1vdmVkIHRvIHRoZSBjb2x1bW4gY2xpY2sgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAoY2xpY2spPVwib25MaXN0U29ydGluZ0NoYW5nZShmaWVsZC5BcGlOYW1lLCB0cnVlKVwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzdXBwb3J0U29ydGluZ1wiIGNsYXNzPVwic29ydGluZ0JveCBwdWxsLWxlZnQgZmxpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ2hhcy1zb3J0aW5nJzogZmllbGQuQXBpTmFtZSA9PT0gc29ydEJ5IH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiZmllbGQuQXBpTmFtZSAhPT0gc29ydEJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cImFycm93LWVpdGhlclwiIGNsYXNzPVwiYXNjXCI+PC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImZpZWxkLkFwaU5hbWUgPT09IHNvcnRCeSAmJiAhaXNBc2NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnc29ydC1ieSc6IGZpZWxkLkFwaU5hbWUgPT09IHNvcnRCeSAmJiBpc0FzYyB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwie3sgJ0xJU1QuU09SVF9BU0MnIHwgdHJhbnNsYXRlIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGVwLWljb24gbmFtZT1cImFycm93LWRvd25cIiBjbGFzcz1cImFzY1wiPjwvcGVwLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImZpZWxkLkFwaU5hbWUgPT09IHNvcnRCeSAmJiBpc0FzY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdzb3J0LWJ5JzogZmllbGQuQXBpTmFtZSA9PT0gc29ydEJ5ICYmICFpc0FzYyB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwie3sgJ0xJU1QuU09SVF9ERVNDJyB8IHRyYW5zbGF0ZSB9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBlcC1pY29uIG5hbWU9XCJhcnJvdy1kb3duXCIgY2xhc3M9XCJkZXNjXCI+PC9wZXAtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8dmlydHVhbC1zY3JvbGwgKm5nSWY9XCJ1c2VWaXJ0dWFsU2Nyb2xsXCIgW3RvdGFsUm93c109XCJ0b3RhbFJvd3NcIiBbaXNUYWJsZV09XCJpc1RhYmxlXCIgKGxvYWQpPVwib25MaXN0TG9hZCgkZXZlbnQpXCJcclxuICAgICAgICAoY2hhbmdlKT1cIm9uTGlzdENoYW5nZSgkZXZlbnQpXCIgW3BhcmVudFNjcm9sbF09XCJwYXJlbnRTY3JvbGwgPyBwYXJlbnRTY3JvbGwgOiBuYXRpdmVXaW5kb3dcIlxyXG4gICAgICAgIFtidWZmZXJBbW91bnRdPVwiaXNSZXBvcnQgPyAoaXNUYWJsZSA/IDIwIDogMykgOiBpc1RhYmxlID8gMTUgOiAzXCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7ICd0YWJsZS1ib2R5JzogaXNUYWJsZSwgJ2NhcmRzLWJvZHknOiAhaXNUYWJsZSB9XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxpc3REYXRhXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L3ZpcnR1YWwtc2Nyb2xsPlxyXG5cclxuICAgIDwhLS0gPHZpcnR1YWwtc2Nyb2xsZXIgKm5nSWY9XCJ1c2VWaXJ0dWFsU2Nyb2xsXCIgW3RvdGFsSXRlbXNdPVwidG90YWxSb3dzXCIgKHZzQ2hhbmdlKT1cIm9uU2Nyb2xsZXJMaXN0Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtwYXJlbnRTY3JvbGxdPVwicGFyZW50U2Nyb2xsID8gcGFyZW50U2Nyb2xsIDogbmF0aXZlV2luZG93XCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7ICd0YWJsZS1ib2R5JzogaXNUYWJsZSwgJ2NhcmRzLWJvZHknOiAhaXNUYWJsZSB9XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxpc3REYXRhXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L3ZpcnR1YWwtc2Nyb2xsZXI+IC0tPlxyXG5cclxuICAgIDxkaXYgI25vVmlydHVhbFNjcm9sbENvbnQgKm5nSWY9XCIhdXNlVmlydHVhbFNjcm9sbFwiIFtuZ0NsYXNzXT1cInsgJ3RhYmxlLWJvZHknOiBpc1RhYmxlLCAnY2FyZHMtYm9keSc6ICFpc1RhYmxlIH1cIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGlzdERhdGFcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxpc3RUb3RhbHNcIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48IS0tIDxpbWcgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgc3JjPVwie3sgZW52VmFyaWFibGVzLkFzc2V0c0RvbWFpbiArIHdlYmFwcERpcmVjdG9yeSB9fS9hc3NldHMvaW1hZ2VzL25vLWltYWdlLnN2Z1wiIC8+IC0tPlxyXG5cclxuPG5nLXRlbXBsYXRlICNsaXN0RGF0YT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHBlcHBlcmlPYmplY3RJbnB1dCBvZiBzY3JvbGxJdGVtczsgbGV0IGluZGV4OyBsZXQgaXNGaXJzdCA9IGZpcnN0OyB0cmFja0J5OiB0cmFja0J5RnVuY1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1RhYmxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yb3dcIlxyXG4gICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25UYWJsZVJvd01vdXNlRW50ZXIoJGV2ZW50LCBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlVJRCwgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5UeXBlKVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJvblRhYmxlUm93TW91c2VMZWF2ZSgkZXZlbnQsIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVUlELCBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlR5cGUpXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGlzSXRlbVNlbGVjdGVkKHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVUlELCBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlR5cGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZDogcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5VSUQgKyBTRVBBUkFUT1IgKyBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlR5cGUgPT09IHNlbGVjdGVkSXRlbUlkXHJcbiAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7IGhlaWdodDogY2FsY3VsYXRlZE9iamVjdEhlaWdodCwgdmlzaWJpbGl0eTogc2hvd0l0ZW1zIHx8IHBlcHBlcmlPYmplY3RJbnB1dCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nIH1cIj5cclxuICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzcz1cInRhYmxlLXJvdy1maWVsZHNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uQmFja2dyb3VuZENvbG9yIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2VsZWN0aW9uVHlwZUZvckFjdGlvbnMgPT0gU0VMRUNUSU9OX1RZUEVfRk9SX0FDVElPTlMuTXVsdGkgfHwgc2VsZWN0aW9uVHlwZUZvckFjdGlvbnMgPT0gU0VMRUNUSU9OX1RZUEVfRk9SX0FDVElPTlMuU2luZ2xlQWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJwdWxsLWxlZnQgZmxpcCByb3ctc2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImdldElzRGlzYWJsZWQocGVwcGVyaU9iamVjdElucHV0KVwiIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBpc1RvdWNoRGV2aWNlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVUlEICsgU0VQQVJBVE9SICsgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5UeXBlID09PSBob3ZlcmVkSXRlbUlkIHx8IGlzQWxsU2VsZWN0ZWQgfHwgc2VsZWN0ZWRJdGVtcy5zaXplID4gMCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiZ2V0SXNTZWxlY3RlZEZvckFjdGlvbnMocGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5VSUQsIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uSXNTZWxlY3RhYmxlRm9yQWN0aW9ucywgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5UeXBlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwic2VsZWN0SXRlbUZvckFjdGlvbnMoJGV2ZW50LCBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlVJRCwgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5Jc1NlbGVjdGFibGVGb3JBY3Rpb25zLCBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlR5cGUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gKm5nSWY9XCJzZWxlY3Rpb25UeXBlRm9yQWN0aW9ucyA9PSBTRUxFQ1RJT05fVFlQRV9GT1JfQUNUSU9OUy5TaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0aW9uXCIgY2xhc3M9XCJwdWxsLWxlZnQgZmxpcCByb3ctc2VsZWN0aW9uIHBlcHBlcmktcmFkaW8tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImdldElzRGlzYWJsZWQocGVwcGVyaU9iamVjdElucHV0KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImdldElzU2VsZWN0ZWRGb3JBY3Rpb25zKHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVUlELCBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LklzU2VsZWN0YWJsZUZvckFjdGlvbnMsIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVHlwZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInNlbGVjdEl0ZW1Gb3JBY3Rpb25zKCRldmVudCwgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5VSUQsIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uSXNTZWxlY3RhYmxlRm9yQWN0aW9ucywgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5UeXBlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8cGVwLWZvcm0gW2NoZWNrRm9yQ2hhbmdlc109XCJjaGVja0ZvckNoYW5nZXNcIiBbdWlDb250cm9sSGVhZGVyXT1cInVpQ29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmaXJzdEZpZWxkQXNMaW5rXT1cImZpcnN0RmllbGRBc0xpbmtcIiBbcGVwcGVyaU9iamVjdElucHV0XT1cInBlcHBlcmlPYmplY3RJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjYW5FZGl0T2JqZWN0XT1cIiFkaXNhYmxlZCAmJiBwZXBwZXJpT2JqZWN0SW5wdXQ/LklzRWRpdGFibGVcIiBbb2JqZWN0SWRdPVwib2JqZWN0SWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50SWRdPVwicGFyZW50SWRcIiBbc2VhcmNoQ29kZV09XCJzZWFyY2hDb2RlXCIgW2xvY2tFdmVudHNdPVwiZGlzYWJsZVNlbGVjdGlvbkl0ZW1zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2lzUmVwb3J0XT1cImlzUmVwb3J0XCIgW2xheW91dFR5cGVdPVwiTEFZT1VUX1RZUEUuUGVwcGVyaVRhYmxlXCIgW2xpc3RUeXBlXT1cImxpc3RUeXBlXCIgW2lzQWN0aXZlXT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlVJRCArIFNFUEFSQVRPUiArIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVHlwZSA9PT0gc2VsZWN0ZWRJdGVtSWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlVJRCArIFNFUEFSQVRPUiArIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVHlwZSA9PT0gaG92ZXJlZEl0ZW1JZCkgJiYgIWlzVG91Y2hEZXZpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIChub3RpZnlWYWx1ZUNoYW5nZWQpPVwib25WYWx1ZUNoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChub3RpZnlGaWVsZENsaWNrZWQpPVwib25DdXN0b21pemVGaWVsZENsaWNrKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobm90aWZ5TWVudUl0ZW1DbGlja2VkKT1cIm9uQ3VzdG9taXplRmllbGRNZW51Q2xpY2tlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIml0ZW1DbGlja2VkKCRldmVudCwgcGVwcGVyaU9iamVjdElucHV0KVwiIFtwYWdlVHlwZV09XCJwYWdlVHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcGVwLWZvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1RhYmxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgW2NsYXNzXT1cIml0ZW1DbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJvbkNhcmRNb3VzZUVudGVyKCRldmVudCwgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5VSUQsIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVHlwZSlcIlxyXG4gICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwib25DYXJkTW91c2VMZWF2ZSgkZXZlbnQsIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVUlELCBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlR5cGUpXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGlzSXRlbVNlbGVjdGVkKHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVUlELCBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlR5cGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZDogcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5VSUQgKyBTRVBBUkFUT1IgKyBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlR5cGUgPT09IHNlbGVjdGVkSXRlbUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkVmlldzogaXNDYXJkVmlld1xyXG4gICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cInB1bGwtbGVmdCBmbGlwXCJcclxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgaGVpZ2h0OiBjYWxjdWxhdGVkT2JqZWN0SGVpZ2h0LCB2aXNpYmlsaXR5OiBzaG93SXRlbXMgfHwgcGVwcGVyaU9iamVjdElucHV0ID8gJ3Zpc2libGUnIDogJ2hpZGRlbicgfVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCAqbmdJZj1cInNob3dTZWxlY3Rpb25cIiBjbGFzcz1cInB1bGwtbGVmdCBmbGlwIGNhcmQtc2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZ2V0SXNEaXNhYmxlZChwZXBwZXJpT2JqZWN0SW5wdXQpXCJcclxuICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJnZXRJc1NlbGVjdGVkRm9yQWN0aW9ucyhwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlVJRCwgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5Jc1NlbGVjdGFibGVGb3JBY3Rpb25zLCBwZXBwZXJpT2JqZWN0SW5wdXQ/LkRhdGE/LlR5cGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInNlbGVjdEl0ZW1Gb3JBY3Rpb25zKCRldmVudCwgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5VSUQsIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uSXNTZWxlY3RhYmxlRm9yQWN0aW9ucywgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5UeXBlKVwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8cGVwLWZvcm0gW2ZpcnN0RmllbGRBc0xpbmtdPVwiaXNDYXJkVmlldyA/IGZpcnN0RmllbGRBc0xpbmsgOiBmYWxzZVwiIFtjaGVja0ZvckNoYW5nZXNdPVwiY2hlY2tGb3JDaGFuZ2VzXCJcclxuICAgICAgICAgICAgICAgICAgICBbdWlDb250cm9sSGVhZGVyXT1cInVpQ29udHJvbFwiIFtwZXBwZXJpT2JqZWN0SW5wdXRdPVwicGVwcGVyaU9iamVjdElucHV0XCIgW2lzQ2FyZFZpZXddPVwiaXNDYXJkVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NhbkVkaXRPYmplY3RdPVwiIWRpc2FibGVkICYmIHBlcHBlcmlPYmplY3RJbnB1dD8uSXNFZGl0YWJsZVwiIFtvYmplY3RJZF09XCJvYmplY3RJZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3BhcmVudElkXT1cInBhcmVudElkXCIgW3NlYXJjaENvZGVdPVwic2VhcmNoQ29kZVwiIFtsb2NrRXZlbnRzXT1cImRpc2FibGVTZWxlY3Rpb25JdGVtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW2xheW91dFR5cGVdPVwiZ2V0VGh1bWJuYWlsc0xheW91dCgpXCIgW2xpc3RUeXBlXT1cImxpc3RUeXBlXCIgW2lzQWN0aXZlXT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVUlEICsgU0VQQVJBVE9SICsgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5UeXBlID09PSBzZWxlY3RlZEl0ZW1JZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcHBlcmlPYmplY3RJbnB1dD8uRGF0YT8uVUlEICsgU0VQQVJBVE9SICsgcGVwcGVyaU9iamVjdElucHV0Py5EYXRhPy5UeXBlID09PSBob3ZlcmVkSXRlbUlkKSAmJiAhaXNUb3VjaERldmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiAobm90aWZ5VmFsdWVDaGFuZ2VkKT1cIm9uVmFsdWVDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIChub3RpZnlGaWVsZENsaWNrZWQpPVwib25DdXN0b21pemVGaWVsZENsaWNrKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIChub3RpZnlNZW51SXRlbUNsaWNrZWQpPVwib25DdXN0b21pemVGaWVsZE1lbnVDbGlja2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJpdGVtQ2xpY2tlZCgkZXZlbnQsIHBlcHBlcmlPYmplY3RJbnB1dClcIiBbcGFnZVR5cGVdPVwicGFnZVR5cGVcIj5cclxuICAgICAgICAgICAgICAgIDwvcGVwLWZvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2xpc3RUb3RhbHM+XHJcbiAgICA8ZGl2ICpuZ0lmPVwidG90YWxzUm93Py5sZW5ndGggPiAwICYmIHRvdGFsc1Jvdy5sZW5ndGggPD0gdWlDb250cm9sPy5Db250cm9sRmllbGRzLmxlbmd0aFwiIGNsYXNzPVwidGFibGUtdG90YWxcIj5cclxuICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJ0YWJsZS1oZWFkZXItZmllbGRzZXRcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgdWlDb250cm9sPy5Db250cm9sRmllbGRzOyBsZXQgaiA9IGluZGV4XCIgY2xhc3M9XCJ0b3RhbC1jb2x1bW4gcHVsbC1sZWZ0IGZsaXBcIlxyXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieyB3aWR0aDogZmllbGQuY2FsY1RpdGxlQ29sdW1uV2lkdGhTdHJpbmcgfVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidG90YWwtbGFiZWwgYm9keS1zbSB0ZXh0LWFsaWduLXt7IGZpZWxkLkxheW91dC5YQWxpZ25tZW50IH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgdG90YWxzUm93W2pdIH19XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+Il19