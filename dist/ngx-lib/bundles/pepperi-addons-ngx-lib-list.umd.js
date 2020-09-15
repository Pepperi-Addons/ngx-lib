(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/core'), require('@angular/material/checkbox'), require('@angular/material/radio'), require('@angular/material/icon'), require('@pepperi-addons/ngx-lib'), require('@pepperi-addons/ngx-lib/icon'), require('@pepperi-addons/ngx-lib/form'), require('@tweenjs/tween.js'), require('rxjs/operators'), require('disable-scroll'), require('jquery'), require('@ngx-translate/core')) :
  typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/list', ['exports', '@angular/core', '@angular/common', '@angular/material/core', '@angular/material/checkbox', '@angular/material/radio', '@angular/material/icon', '@pepperi-addons/ngx-lib', '@pepperi-addons/ngx-lib/icon', '@pepperi-addons/ngx-lib/form', '@tweenjs/tween.js', 'rxjs/operators', 'disable-scroll', 'jquery', '@ngx-translate/core'], factory) :
  (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].list = {}), global.ng.core, global.ng.common, global.ng.material.core, global.ng.material.checkbox, global.ng.material.radio, global.ng.material.icon, global['pepperi-addons']['ngx-lib'], global['pepperi-addons']['ngx-lib'].icon, global['pepperi-addons']['ngx-lib'].form, global.tween, global.rxjs.operators, global['disable-scroll'], global.jquery, global.translate));
}(this, (function (exports, i0, i2, core, i3, i8, i4, i1, i1$1, i7, tween, operators, disableScroll, $, i9) { 'use strict';

  disableScroll = disableScroll && Object.prototype.hasOwnProperty.call(disableScroll, 'default') ? disableScroll['default'] : disableScroll;

  var _c0 = ["container"];
  var _c1 = ["content"];
  var _c2 = ["shim"];
  var _c3 = ["*"];
  var VirtualScrollComponent = /** @class */ (function () {
      function VirtualScrollComponent(element, renderer, zone) {
          var _this = this;
          this.element = element;
          this.renderer = renderer;
          this.zone = zone;
          //@Input()
          //items: any[] = [];
          this.totalRows = 0;
          this.bufferAmount = 0;
          this.scrollAnimationTime = 1500;
          this.doNotCheckAngularZone = false;
          this.refreshHandler = function () {
              _this.refresh(true);
          };
          this.isTable = false;
          //@Output()
          //update: EventEmitter<any[]> = new EventEmitter<any[]>();
          //viewPortItems: any[];
          this.change = new i0.EventEmitter();
          this.load = new i0.EventEmitter();
          this.start = new i0.EventEmitter();
          this.end = new i0.EventEmitter();
          this.startupLoop = true;
          /** Cache of the last scroll height to prevent setting CSS when not needed. */
          this.lastScrollHeight = -1;
          /** Cache of the last top padding to prevent setting CSS when not needed. */
          this.lastTopPadding = -1;
      }
      Object.defineProperty(VirtualScrollComponent.prototype, "parentScroll", {
          get: function () {
              return this._parentScroll;
          },
          set: function (element) {
              if (this._parentScroll === element) {
                  return;
              }
              this._parentScroll = element;
              this.addParentEventHandlers(this._parentScroll);
          },
          enumerable: false,
          configurable: true
      });
      VirtualScrollComponent.prototype.ngOnInit = function () {
          this.scrollbarWidth = 0; // this.element.nativeElement.offsetWidth - this.element.nativeElement.clientWidth;
          this.scrollbarHeight = 0; // this.element.nativeElement.offsetHeight - this.element.nativeElement.clientHeight;
          if (!this.parentScroll) {
              this.addParentEventHandlers(this.element.nativeElement);
          }
      };
      VirtualScrollComponent.prototype.ngOnDestroy = function () {
          this.removeParentEventHandlers();
      };
      VirtualScrollComponent.prototype.ngOnChanges = function (changes) {
          this.previousStart = undefined;
          this.previousEnd = undefined;
          var totalRows = changes.totalRows || {};
          if ((changes.totalRows !== undefined && totalRows.previousValue === undefined) ||
              totalRows.previousValue !== undefined) {
              this.startupLoop = true;
          }
          var ieVer = this.detectIE();
          var headerRowHeight = '34px';
          // Set padding top for the table view because the header row.
          //this.renderer.setStyle(this.contentElementRef.nativeElement, 'padding-top', this.isTable ? headerRowHeight : '0');
          if (!ieVer || ieVer >= 16) {
              // not IE and version < 16
              this.renderer.setStyle(this.element.nativeElement, 'top', '0');
          }
          else {
              this.renderer.setStyle(this.element.nativeElement, 'top', headerRowHeight);
          }
          //Only for IE browsers
          /*  let ua = navigator.userAgent;
          if (this.isTable && (ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0 || ua.indexOf('Edge/') >= 0)) {
              this.renderer.setStyle(this.element.nativeElement, 'top', headerRowHeight);
          }
          else {
              this.renderer.setStyle(this.element.nativeElement, 'top', '0');
          }*/
          this.refresh();
      };
      VirtualScrollComponent.prototype.detectIE = function () {
          var ua = window.navigator.userAgent;
          // Test values; Uncomment to check result …
          // IE 10
          // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
          // IE 11
          // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
          // Edge 12 (Spartan)
          // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
          // Edge 13
          // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
          var msie = ua.indexOf('MSIE ');
          if (msie > 0) {
              // IE 10 or older => return version number
              return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
          }
          var trident = ua.indexOf('Trident/');
          if (trident > 0) {
              // IE 11 => return version number
              var rv = ua.indexOf('rv:');
              return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
          }
          var edge = ua.indexOf('Edge/');
          if (edge > 0) {
              // Edge (IE 12+) => return version number
              return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
          }
          // other browser
          return false;
      };
      VirtualScrollComponent.prototype.refresh = function (forceViewportUpdate) {
          var _this = this;
          if (forceViewportUpdate === void 0) { forceViewportUpdate = false; }
          this.zone.runOutsideAngular(function () {
              requestAnimationFrame(function () { return _this.calculateItems(forceViewportUpdate); });
          });
      };
      VirtualScrollComponent.prototype.scrollInto = function (index) {
          var _this = this;
          var el = this.parentScroll instanceof Window ? document.body : this.parentScroll || this.element.nativeElement;
          var offsetTop = this.getElementsOffset();
          //let index: number = (this.items || []).indexOf(item);
          if (index < 0 || index >= this.totalRows)
              return;
          var d = this.calculateDimensions();
          var scrollTop = Math.floor(index / d.itemsPerRow) * d.childHeight - d.childHeight * Math.min(index, this.bufferAmount);
          var animationRequest;
          if (this.currentTween !== undefined) {
              this.currentTween.stop();
          }
          // totally disable animate
          if (!this.scrollAnimationTime) {
              el.scrollTop = scrollTop;
              return;
          }
          this.currentTween = new tween.Tween({ scrollTop: el.scrollTop })
              .to({ scrollTop: scrollTop }, this.scrollAnimationTime)
              .easing(tween.Easing.Quadratic.Out)
              .onUpdate(function (data) {
              if (isNaN(data.scrollTop)) {
                  return;
              }
              _this.renderer.setProperty(el, 'scrollTop', data.scrollTop);
              _this.refresh(true);
          })
              .onStop(function () {
              cancelAnimationFrame(animationRequest);
          })
              .start();
          var animate = function (time) {
              _this.currentTween.update(time);
              if (_this.currentTween._object.scrollTop !== scrollTop) {
                  _this.zone.runOutsideAngular(function () {
                      animationRequest = requestAnimationFrame(animate);
                  });
              }
          };
          animate();
      };
      VirtualScrollComponent.prototype.addParentEventHandlers = function (parentScroll) {
          var _this = this;
          this.removeParentEventHandlers();
          if (parentScroll) {
              this.zone.runOutsideAngular(function () {
                  _this.disposeScrollHandler = _this.renderer.listen(parentScroll, 'mousewheel', _.throttle(_this.refreshHandler, 20, { leading: false, trailing: true }));
                  _this.renderer.listen(parentScroll, 'scroll', _.debounce(_this.refreshHandler, 150));
                  //this.renderer.listen(parentScroll, 'scroll', _.debounce(_.throttle(this.refreshHandler, 150), 50));
                  if (parentScroll instanceof Window) {
                      _this.disposeScrollHandler = _this.renderer.listen('window', 'resize', _.debounce(_this.refreshHandler, 250));
                  }
              });
          }
      };
      VirtualScrollComponent.prototype.removeParentEventHandlers = function () {
          if (this.disposeScrollHandler) {
              this.disposeScrollHandler();
              this.disposeScrollHandler = undefined;
          }
          if (this.disposeResizeHandler) {
              this.disposeResizeHandler();
              this.disposeResizeHandler = undefined;
          }
      };
      VirtualScrollComponent.prototype.countItemsPerRow = function () {
          var offsetTop;
          var itemsPerRow;
          var children = this.contentElementRef.nativeElement.children;
          for (itemsPerRow = 0; itemsPerRow < children.length; itemsPerRow++) {
              if (offsetTop != undefined && offsetTop !== children[itemsPerRow].offsetTop)
                  break;
              offsetTop = children[itemsPerRow].offsetTop;
          }
          return itemsPerRow;
      };
      VirtualScrollComponent.prototype.getElementsOffset = function () {
          var offsetTop = 0;
          if (this.containerElementRef && this.containerElementRef.nativeElement) {
              offsetTop += this.containerElementRef.nativeElement.offsetTop;
          }
          if (this.parentScroll) {
              offsetTop += this.element.nativeElement.offsetTop;
          }
          return offsetTop;
      };
      VirtualScrollComponent.prototype.calculateDimensions = function () {
          var el = this.parentScroll instanceof Window ? document.body : this.parentScroll || this.element.nativeElement;
          var itemCount = this.totalRows;
          var viewWidth = el.clientWidth - this.scrollbarWidth;
          var viewHeight = el.clientHeight - this.scrollbarHeight;
          var contentDimensions;
          if (this.childWidth == undefined || this.childHeight == undefined) {
              var content = this.contentElementRef.nativeElement;
              if (this.containerElementRef && this.containerElementRef.nativeElement) {
                  content = this.containerElementRef.nativeElement;
              }
              contentDimensions = content.children[0]
                  ? content.children[0].getBoundingClientRect()
                  : {
                      width: viewWidth,
                      height: viewHeight
                  };
          }
          var childWidth = this.childWidth || contentDimensions.width;
          var childHeight = this.childHeight || contentDimensions.height;
          var itemsPerRow = Math.max(1, this.countItemsPerRow());
          var itemsPerRowByCalc = Math.max(1, Math.floor(viewWidth / childWidth));
          var itemsPerCol = Math.max(1, Math.floor(viewHeight / childHeight));
          var elScrollTop = this.parentScroll instanceof Window ? window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 : el.scrollTop;
          var scrollTop = Math.max(0, elScrollTop);
          var scrollHeight = childHeight * Math.floor(itemCount / itemsPerRow) + (itemCount % itemsPerRow != 0 ? childHeight : 0);
          var ua = navigator.userAgent;
          /*if (this.isTable && (ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0 || ua.indexOf('Edge/') >= 0)) {
              scrollHeight += 34;
          }*/
          if (itemsPerCol === 1 && Math.floor((scrollTop / scrollHeight) * itemCount) + itemsPerRowByCalc >= itemCount) {
              itemsPerRow = itemsPerRowByCalc;
          }
          if (scrollHeight !== this.lastScrollHeight) {
              this.renderer.setStyle(this.shimElementRef.nativeElement, 'height', scrollHeight + "px");
              this.lastScrollHeight = scrollHeight;
          }
          return {
              itemCount: itemCount,
              viewWidth: viewWidth,
              viewHeight: viewHeight,
              childWidth: childWidth,
              childHeight: childHeight,
              itemsPerRow: itemsPerRow,
              itemsPerCol: itemsPerCol,
              itemsPerRowByCalc: itemsPerRowByCalc,
              scrollHeight: scrollHeight
          };
      };
      VirtualScrollComponent.prototype.calculateItems = function (forceViewportUpdate) {
          var _this = this;
          if (forceViewportUpdate === void 0) { forceViewportUpdate = false; }
          if (!this.doNotCheckAngularZone) {
              i0.NgZone.assertNotInAngularZone();
          }
          var el = this.parentScroll instanceof Window ? document.body : this.parentScroll || this.element.nativeElement;
          var d = this.calculateDimensions();
          //let items = this.items || [];
          var offsetTop = this.getElementsOffset();
          var elScrollTop = this.parentScroll instanceof Window ? window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 : el.scrollTop;
          if (elScrollTop > d.scrollHeight) {
              elScrollTop = d.scrollHeight + offsetTop;
          }
          var scrollTop = Math.max(0, elScrollTop - offsetTop);
          var indexByScrollTop = ((scrollTop / d.scrollHeight) * d.itemCount) / d.itemsPerRow;
          var end = Math.min(d.itemCount, Math.ceil(indexByScrollTop) * d.itemsPerRow + d.itemsPerRow * (d.itemsPerCol + 1));
          var maxStartEnd = end;
          var modEnd = end % d.itemsPerRow;
          if (modEnd) {
              maxStartEnd = end + d.itemsPerRow - modEnd;
          }
          var maxStart = Math.max(0, maxStartEnd - d.itemsPerCol * d.itemsPerRow - d.itemsPerRow);
          var start = Math.min(maxStart, Math.floor(indexByScrollTop) * d.itemsPerRow);
          var startRow = Math.ceil(start / d.itemsPerRow);
          var topPadding = this.totalRows === 0 ? 0 : d.childHeight * startRow - d.childHeight * Math.min(startRow, this.bufferAmount);
          if (topPadding !== this.lastTopPadding) {
              this.renderer.setStyle(this.contentElementRef.nativeElement, 'transform', "translateY(" + topPadding + "px)");
              this.renderer.setStyle(this.contentElementRef.nativeElement, 'webkitTransform', "translateY(" + topPadding + "px)");
              this.lastTopPadding = topPadding;
          }
          var buffer = this.bufferAmount * d.itemsPerRow;
          start = !isNaN(start) ? start : -1;
          end = !isNaN(end) ? end : -1;
          start -= buffer;
          start = Math.max(0, start);
          end += buffer;
          end = Math.min(this.totalRows, end);
          if (start !== this.previousStart || end !== this.previousEnd || forceViewportUpdate === true) {
              this.zone.run(function () {
                  // update the scroll list
                  end = end >= 0 ? end : 0; // To prevent from accidentally selecting the entire array with a negative 1 (-1) in the end position.
                  //this.viewPortItems = this.items.slice(start, end);
                  //this.update.emit(this.viewPortItems);
                  // emit 'start' event
                  //if (start !== this.previousStart && this.startupLoop === false) {
                  //    this.start.emit({ start, end });
                  //}
                  // emit 'end' event
                  //if (end !== this.previousEnd && this.startupLoop === false) {
                  //    this.end.emit({ start, end });
                  //}
                  // To know if to add at the start of the list or at the end.
                  var addAtStart = _this.previousEnd >= end;
                  _this.previousStart = start;
                  _this.previousEnd = end;
                  if (_this.startupLoop === true) {
                      _this.refresh();
                  }
                  else {
                      var calculatedChildHeight = d.childHeight;
                      _this.change.emit({ start: start, end: end, addAtStart: addAtStart, calculatedChildHeight: calculatedChildHeight });
                  }
              });
          }
          else if (this.startupLoop === true) {
              this.startupLoop = false;
              // Added to know when the scroll is ready (UI elements are displayed already).
              this.load.emit();
              this.refresh();
          }
      };
      return VirtualScrollComponent;
  }());
  VirtualScrollComponent.ɵfac = function VirtualScrollComponent_Factory(t) { return new (t || VirtualScrollComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.NgZone)); };
  VirtualScrollComponent.ɵcmp = i0.ɵɵdefineComponent({ type: VirtualScrollComponent, selectors: [["virtual-scroll"], ["", "virtualScroll", ""]], contentQueries: function VirtualScrollComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
              i0.ɵɵcontentQuery(dirIndex, _c0, true);
          }
          if (rf & 2) {
              var _t;
              i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.containerElementRef = _t.first);
          }
      }, viewQuery: function VirtualScrollComponent_Query(rf, ctx) {
          if (rf & 1) {
              i0.ɵɵviewQuery(_c1, true, i0.ElementRef);
              i0.ɵɵviewQuery(_c2, true, i0.ElementRef);
          }
          if (rf & 2) {
              var _t;
              i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentElementRef = _t.first);
              i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.shimElementRef = _t.first);
          }
      }, hostVars: 2, hostBindings: function VirtualScrollComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
              i0.ɵɵstyleProp("overflow-y", ctx.parentScroll ? "hidden" : "auto");
          }
      }, inputs: { totalRows: "totalRows", scrollbarWidth: "scrollbarWidth", scrollbarHeight: "scrollbarHeight", childWidth: "childWidth", childHeight: "childHeight", bufferAmount: "bufferAmount", scrollAnimationTime: "scrollAnimationTime", doNotCheckAngularZone: "doNotCheckAngularZone", parentScroll: "parentScroll", isTable: "isTable" }, outputs: { change: "change", load: "load", start: "start", end: "end" }, exportAs: ["virtualScroll"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 5, vars: 0, consts: [[1, "total-padding"], ["shim", ""], [1, "scrollable-content"], ["content", ""]], template: function VirtualScrollComponent_Template(rf, ctx) {
          if (rf & 1) {
              i0.ɵɵprojectionDef();
              i0.ɵɵelement(0, "div", 0, 1);
              i0.ɵɵelementStart(2, "div", 2, 3);
              i0.ɵɵprojection(4);
              i0.ɵɵelementEnd();
          }
      }, styles: ["[_nghost-%COMP%] {\n        overflow: hidden;\n        position: relative;\n        display: block;\n        -webkit-overflow-scrolling: touch;\n    }\n    .scrollable-content[_ngcontent-%COMP%] {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        //   z-index:495;\n    }\n    .total-padding[_ngcontent-%COMP%] {\n        width: 1px;\n        opacity: 0;\n    }\n\n    .rtl[_ngcontent-%COMP%] {\n        .scrollable-content {\n            left: unset;\n            right: 0;\n        }\n    }"] });
  /*@__PURE__*/ (function () {
      i0.ɵsetClassMetadata(VirtualScrollComponent, [{
              type: i0.Component,
              args: [{
                      selector: 'virtual-scroll,[virtualScroll]',
                      exportAs: 'virtualScroll',
                      template: "\n        <div class=\"total-padding\" #shim></div>\n        <div class=\"scrollable-content\" #content>\n            <ng-content></ng-content>\n        </div>\n    ",
                      host: {
                          '[style.overflow-y]': "parentScroll ? 'hidden' : 'auto'"
                      },
                      styles: [
                          "\n    :host {\n        overflow: hidden;\n        position: relative;\n        display: block;\n        -webkit-overflow-scrolling: touch;\n    }\n    .scrollable-content {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        //   z-index:495;\n    }\n    .total-padding {\n        width: 1px;\n        opacity: 0;\n    }\n\n    .rtl {\n        .scrollable-content {\n            left: unset;\n            right: 0;\n        }\n    }\n  "
                      ]
                  }]
          }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, { totalRows: [{
                  type: i0.Input
              }], scrollbarWidth: [{
                  type: i0.Input
              }], scrollbarHeight: [{
                  type: i0.Input
              }], childWidth: [{
                  type: i0.Input
              }], childHeight: [{
                  type: i0.Input
              }], bufferAmount: [{
                  type: i0.Input
              }], scrollAnimationTime: [{
                  type: i0.Input
              }], doNotCheckAngularZone: [{
                  type: i0.Input
              }], parentScroll: [{
                  type: i0.Input
              }], isTable: [{
                  type: i0.Input
              }], change: [{
                  type: i0.Output
              }], load: [{
                  type: i0.Output
              }], start: [{
                  type: i0.Output
              }], end: [{
                  type: i0.Output
              }], contentElementRef: [{
                  type: i0.ViewChild,
                  args: ['content', { read: i0.ElementRef }]
              }], shimElementRef: [{
                  type: i0.ViewChild,
                  args: ['shim', { read: i0.ElementRef }]
              }], containerElementRef: [{
                  type: i0.ContentChild,
                  args: ['container']
              }] });
  })();
  var VirtualScrollModule = /** @class */ (function () {
      function VirtualScrollModule() {
      }
      return VirtualScrollModule;
  }());
  VirtualScrollModule.ɵmod = i0.ɵɵdefineNgModule({ type: VirtualScrollModule });
  VirtualScrollModule.ɵinj = i0.ɵɵdefineInjector({ factory: function VirtualScrollModule_Factory(t) { return new (t || VirtualScrollModule)(); } });
  (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(VirtualScrollModule, { declarations: [VirtualScrollComponent], exports: [VirtualScrollComponent] }); })();
  /*@__PURE__*/ (function () {
      i0.ɵsetClassMetadata(VirtualScrollModule, [{
              type: i0.NgModule,
              args: [{
                      exports: [VirtualScrollComponent],
                      declarations: [VirtualScrollComponent]
                  }]
          }], null, null);
  })();

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

  var _c0$1 = ["noVirtualScrollCont"];
  var _c1$1 = ["tableHeader"];
  var _c2$1 = ["selectAllCB"];
  function PepperiListComponent_ng_container_0_Template(rf, ctx) {
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
  var _c3$1 = function (a0) { return { visibility: a0 }; };
  function PepperiListComponent_ng_container_1_div_1_mat_checkbox_3_Template(rf, ctx) {
      if (rf & 1) {
          var _r15_1 = i0.ɵɵgetCurrentView();
          i0.ɵɵelementStart(0, "mat-checkbox", 13, 14);
          i0.ɵɵlistener("change", function PepperiListComponent_ng_container_1_div_1_mat_checkbox_3_Template_mat_checkbox_change_0_listener($event) { i0.ɵɵrestoreView(_r15_1); var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.selectAllItemsForActions($event); });
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var ctx_r11 = i0.ɵɵnextContext(3);
          i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c3$1, ctx_r11.selectionTypeForActions == ctx_r11.SELECTION_TYPE_FOR_ACTIONS.Single || ctx_r11.selectionTypeForActions == ctx_r11.SELECTION_TYPE_FOR_ACTIONS.Multi && ctx_r11.hideAllSelectionInMulti ? "hidden" : "visible"))("indeterminate", ctx_r11.isAllSelected ? ctx_r11.unSelectedItems.size > 0 && ctx_r11.unSelectedItems.size < ctx_r11.totalRows : ctx_r11.selectedItems.size > 0 && !ctx_r11.getIsAllSelectedForActions())("disabled", ctx_r11.disabled || ctx_r11.selectionTypeForActions === ctx_r11.SELECTION_TYPE_FOR_ACTIONS.Single)("checked", ctx_r11.getIsAllSelectedForActions());
      }
  }
  function PepperiListComponent_ng_container_1_div_1_div_5_label_1_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementStart(0, "label", 20);
          i0.ɵɵtext(1);
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var field_r16 = i0.ɵɵnextContext().$implicit;
          i0.ɵɵclassMapInterpolate1("header-label body-sm pull-left flip text-align-", field_r16.Layout.XAlignment, "");
          i0.ɵɵpropertyInterpolate("id", field_r16.ApiName);
          i0.ɵɵpropertyInterpolate("title", field_r16.Title);
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1(" ", field_r16.Title, " ");
      }
  }
  function PepperiListComponent_ng_container_1_div_1_div_5_label_2_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementStart(0, "label", 21);
          i0.ɵɵtext(1, "\u00A0");
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var field_r16 = i0.ɵɵnextContext().$implicit;
          i0.ɵɵpropertyInterpolate("id", field_r16.ApiName);
      }
  }
  function PepperiListComponent_ng_container_1_div_1_div_5_div_3_Template(rf, ctx) {
      if (rf & 1) {
          var _r25_1 = i0.ɵɵgetCurrentView();
          i0.ɵɵelementStart(0, "div", 22);
          i0.ɵɵlistener("mousedown", function PepperiListComponent_ng_container_1_div_1_div_5_div_3_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var field_r16 = i0.ɵɵnextContext().$implicit; var ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.onListResizeStart($event, field_r16.ApiName); });
          i0.ɵɵelementStart(1, "mat-icon");
          i0.ɵɵelement(2, "pep-icon", 23);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
      }
  }
  function PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_1_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementStart(0, "mat-icon");
          i0.ɵɵelement(1, "pep-icon", 26);
          i0.ɵɵelementEnd();
      }
  }
  var _c4 = function (a0) { return { "sort-by": a0 }; };
  function PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementStart(0, "mat-icon", 27);
          i0.ɵɵpipe(1, "translate");
          i0.ɵɵelement(2, "pep-icon", 28);
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var field_r16 = i0.ɵɵnextContext(2).$implicit;
          var ctx_r28 = i0.ɵɵnextContext(3);
          i0.ɵɵpropertyInterpolate("title", i0.ɵɵpipeBind1(1, 2, "LIST.SORT_ASC"));
          i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c4, field_r16.ApiName === ctx_r28.sortBy && ctx_r28.isAsc));
      }
  }
  function PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementStart(0, "mat-icon", 27);
          i0.ɵɵpipe(1, "translate");
          i0.ɵɵelement(2, "pep-icon", 29);
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var field_r16 = i0.ɵɵnextContext(2).$implicit;
          var ctx_r29 = i0.ɵɵnextContext(3);
          i0.ɵɵpropertyInterpolate("title", i0.ɵɵpipeBind1(1, 2, "LIST.SORT_DESC"));
          i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c4, field_r16.ApiName === ctx_r29.sortBy && !ctx_r29.isAsc));
      }
  }
  var _c5 = function (a0) { return { "has-sorting": a0 }; };
  function PepperiListComponent_ng_container_1_div_1_div_5_div_4_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 24);
          i0.ɵɵtemplate(1, PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_1_Template, 2, 0, "mat-icon", 0);
          i0.ɵɵtemplate(2, PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_2_Template, 3, 6, "mat-icon", 25);
          i0.ɵɵtemplate(3, PepperiListComponent_ng_container_1_div_1_div_5_div_4_mat_icon_3_Template, 3, 6, "mat-icon", 25);
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var field_r16 = i0.ɵɵnextContext().$implicit;
          var ctx_r21 = i0.ɵɵnextContext(3);
          i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c5, field_r16.ApiName === ctx_r21.sortBy));
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", field_r16.ApiName !== ctx_r21.sortBy);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", field_r16.ApiName === ctx_r21.sortBy && !ctx_r21.isAsc);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", field_r16.ApiName === ctx_r21.sortBy && ctx_r21.isAsc);
      }
  }
  var _c6 = function (a0) { return { width: a0 }; };
  var _c7 = function (a0, a1, a2, a3, a4) { return { "support-sorting": a0, "has-sorting": a1, "is-resizing": a2, "is-first": a3, "is-last": a4 }; };
  function PepperiListComponent_ng_container_1_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
          var _r34_1 = i0.ɵɵgetCurrentView();
          i0.ɵɵelementStart(0, "div", 15);
          i0.ɵɵlistener("click", function PepperiListComponent_ng_container_1_div_1_div_5_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r34_1); var field_r16 = ctx.$implicit; var ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.supportSorting ? ctx_r33.onListSortingChange(field_r16.ApiName, ctx_r33.sortBy !== null && ctx_r33.sortBy != field_r16.ApiName ? true : !ctx_r33.isAsc, $event) : false; });
          i0.ɵɵtemplate(1, PepperiListComponent_ng_container_1_div_1_div_5_label_1_Template, 2, 6, "label", 16);
          i0.ɵɵtemplate(2, PepperiListComponent_ng_container_1_div_1_div_5_label_2_Template, 2, 1, "label", 17);
          i0.ɵɵtemplate(3, PepperiListComponent_ng_container_1_div_1_div_5_div_3_Template, 3, 0, "div", 18);
          i0.ɵɵtemplate(4, PepperiListComponent_ng_container_1_div_1_div_5_div_4_Template, 4, 6, "div", 19);
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var field_r16 = ctx.$implicit;
          var j_r17 = ctx.index;
          var ctx_r12 = i0.ɵɵnextContext(3);
          i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(6, _c6, field_r16.calcTitleColumnWidthString))("ngClass", i0.ɵɵpureFunction5(8, _c7, ctx_r12.supportSorting, field_r16.ApiName === ctx_r12.sortBy, field_r16.ApiName === ctx_r12.pressedColumn, j_r17 === 0 && ctx_r12.selectionTypeForActions !== ctx_r12.SELECTION_TYPE_FOR_ACTIONS.Multi, j_r17 === (ctx_r12.uiControl == null ? null : ctx_r12.uiControl.ControlFields == null ? null : ctx_r12.uiControl.ControlFields.length) - 1));
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", field_r16.Title != "");
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", field_r16.Title == "");
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", ctx_r12.supportResizing);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", ctx_r12.supportSorting);
      }
  }
  var _c8 = function (a0) { return { "below-header-and-top-bar": a0 }; };
  function PepperiListComponent_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
          var _r36_1 = i0.ɵɵgetCurrentView();
          i0.ɵɵelementStart(0, "div", 8, 9);
          i0.ɵɵlistener("mouseup", function PepperiListComponent_ng_container_1_div_1_Template_div_mouseup_0_listener($event) { i0.ɵɵrestoreView(_r36_1); var ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.onListResizeEnd($event); })("mouseenter", function PepperiListComponent_ng_container_1_div_1_Template_div_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r36_1); var ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.onListHeaderMouseEnter($event); })("mouseleave", function PepperiListComponent_ng_container_1_div_1_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r36_1); var ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.onListHeaderMouseLeave($event); })("mousemove", function PepperiListComponent_ng_container_1_div_1_Template_div_mousemove_0_listener($event) { i0.ɵɵrestoreView(_r36_1); var ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.onListResize($event); });
          i0.ɵɵelementStart(2, "fieldset", 10);
          i0.ɵɵtemplate(3, PepperiListComponent_ng_container_1_div_1_mat_checkbox_3_Template, 2, 6, "mat-checkbox", 11);
          i0.ɵɵelementStart(4, "fieldset");
          i0.ɵɵtemplate(5, PepperiListComponent_ng_container_1_div_1_div_5_Template, 5, 14, "div", 12);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var ctx_r6 = i0.ɵɵnextContext(2);
          i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c8, ctx_r6.parentScroll == null));
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngIf", ctx_r6.selectionTypeForActions !== ctx_r6.SELECTION_TYPE_FOR_ACTIONS.None);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngForOf", ctx_r6.uiControl == null ? null : ctx_r6.uiControl.ControlFields);
      }
  }
  function PepperiListComponent_ng_container_1_virtual_scroll_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementContainer(0);
      }
  }
  var _c9 = function (a0, a1) { return { "table-body": a0, "cards-body": a1 }; };
  function PepperiListComponent_ng_container_1_virtual_scroll_2_Template(rf, ctx) {
      if (rf & 1) {
          var _r42_1 = i0.ɵɵgetCurrentView();
          i0.ɵɵelementStart(0, "virtual-scroll", 30);
          i0.ɵɵlistener("load", function PepperiListComponent_ng_container_1_virtual_scroll_2_Template_virtual_scroll_load_0_listener($event) { i0.ɵɵrestoreView(_r42_1); var ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.onListLoad($event); })("change", function PepperiListComponent_ng_container_1_virtual_scroll_2_Template_virtual_scroll_change_0_listener($event) { i0.ɵɵrestoreView(_r42_1); var ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.onListChange($event); });
          i0.ɵɵtemplate(1, PepperiListComponent_ng_container_1_virtual_scroll_2_ng_container_1_Template, 1, 0, "ng-container", 7);
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var ctx_r7 = i0.ɵɵnextContext(2);
          var _r2 = i0.ɵɵreference(3);
          i0.ɵɵproperty("totalRows", ctx_r7.totalRows)("isTable", ctx_r7.isTable)("parentScroll", ctx_r7.parentScroll ? ctx_r7.parentScroll : ctx_r7.nativeWindow)("bufferAmount", ctx_r7.isReport ? ctx_r7.isTable ? 20 : 3 : ctx_r7.isTable ? 15 : 3)("ngClass", i0.ɵɵpureFunction2(6, _c9, ctx_r7.isTable, !ctx_r7.isTable));
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngTemplateOutlet", _r2);
      }
  }
  function PepperiListComponent_ng_container_1_div_3_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementContainer(0);
      }
  }
  function PepperiListComponent_ng_container_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 31, 32);
          i0.ɵɵtemplate(2, PepperiListComponent_ng_container_1_div_3_ng_container_2_Template, 1, 0, "ng-container", 7);
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var ctx_r8 = i0.ɵɵnextContext(2);
          var _r2 = i0.ɵɵreference(3);
          i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c9, ctx_r8.isTable, !ctx_r8.isTable));
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngTemplateOutlet", _r2);
      }
  }
  function PepperiListComponent_ng_container_1_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementContainer(0);
      }
  }
  function PepperiListComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementContainerStart(0);
          i0.ɵɵtemplate(1, PepperiListComponent_ng_container_1_div_1_Template, 6, 5, "div", 4);
          i0.ɵɵtemplate(2, PepperiListComponent_ng_container_1_virtual_scroll_2_Template, 2, 9, "virtual-scroll", 5);
          i0.ɵɵtemplate(3, PepperiListComponent_ng_container_1_div_3_Template, 3, 5, "div", 6);
          i0.ɵɵtemplate(4, PepperiListComponent_ng_container_1_ng_container_4_Template, 1, 0, "ng-container", 7);
          i0.ɵɵelementContainerEnd();
      }
      if (rf & 2) {
          var ctx_r1 = i0.ɵɵnextContext();
          var _r4 = i0.ɵɵreference(5);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", ctx_r1.isTable);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", ctx_r1.useVirtualScroll);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", !ctx_r1.useVirtualScroll);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngTemplateOutlet", _r4);
      }
  }
  function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_checkbox_3_Template(rf, ctx) {
      if (rf & 1) {
          var _r55_1 = i0.ɵɵgetCurrentView();
          i0.ɵɵelementStart(0, "mat-checkbox", 39);
          i0.ɵɵlistener("change", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_checkbox_3_Template_mat_checkbox_change_0_listener($event) { i0.ɵɵrestoreView(_r55_1); var pepperiObjectInput_r47 = i0.ɵɵnextContext(2).$implicit; var ctx_r54 = i0.ɵɵnextContext(2); return ctx_r54.selectItemForActions($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var pepperiObjectInput_r47 = i0.ɵɵnextContext(2).$implicit;
          var ctx_r52 = i0.ɵɵnextContext(2);
          i0.ɵɵproperty("disabled", ctx_r52.getIsDisabled(pepperiObjectInput_r47))("ngStyle", i0.ɵɵpureFunction1(3, _c3$1, ctx_r52.isTouchDevice || (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r52.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r52.hoveredItemId || ctx_r52.isAllSelected || ctx_r52.selectedItems.size > 0 ? "visible" : "hidden"))("checked", ctx_r52.getIsSelectedForActions(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type));
      }
  }
  function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_radio_button_4_Template(rf, ctx) {
      if (rf & 1) {
          var _r59_1 = i0.ɵɵgetCurrentView();
          i0.ɵɵelementStart(0, "mat-radio-button", 40);
          i0.ɵɵlistener("change", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_radio_button_4_Template_mat_radio_button_change_0_listener($event) { i0.ɵɵrestoreView(_r59_1); var pepperiObjectInput_r47 = i0.ɵɵnextContext(2).$implicit; var ctx_r58 = i0.ɵɵnextContext(2); return ctx_r58.selectItemForActions($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var pepperiObjectInput_r47 = i0.ɵɵnextContext(2).$implicit;
          var ctx_r53 = i0.ɵɵnextContext(2);
          i0.ɵɵproperty("disabled", ctx_r53.getIsDisabled(pepperiObjectInput_r47))("checked", ctx_r53.getIsSelectedForActions(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type));
      }
  }
  var _c10 = function (a0, a1) { return { selected: a0, highlighted: a1 }; };
  var _c11 = function (a0, a1) { return { height: a0, visibility: a1 }; };
  var _c12 = function (a0) { return { "background-color": a0 }; };
  function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
          var _r63_1 = i0.ɵɵgetCurrentView();
          i0.ɵɵelementContainerStart(0);
          i0.ɵɵelementStart(1, "div", 34);
          i0.ɵɵlistener("mouseenter", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_div_mouseenter_1_listener($event) { i0.ɵɵrestoreView(_r63_1); var pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit; var ctx_r62 = i0.ɵɵnextContext(2); return ctx_r62.onTableRowMouseEnter($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); })("mouseleave", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_div_mouseleave_1_listener($event) { i0.ɵɵrestoreView(_r63_1); var pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit; var ctx_r65 = i0.ɵɵnextContext(2); return ctx_r65.onTableRowMouseLeave($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
          i0.ɵɵelementStart(2, "fieldset", 35);
          i0.ɵɵtemplate(3, PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_checkbox_3_Template, 1, 5, "mat-checkbox", 36);
          i0.ɵɵtemplate(4, PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_mat_radio_button_4_Template, 1, 2, "mat-radio-button", 37);
          i0.ɵɵelementStart(5, "pep-form", 38);
          i0.ɵɵlistener("notifyValueChanged", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyValueChanged_5_listener($event) { i0.ɵɵrestoreView(_r63_1); var ctx_r67 = i0.ɵɵnextContext(3); return ctx_r67.onValueChanged($event); })("notifyFieldClicked", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyFieldClicked_5_listener($event) { i0.ɵɵrestoreView(_r63_1); var ctx_r68 = i0.ɵɵnextContext(3); return ctx_r68.onCustomizeFieldClick($event); })("notifyMenuItemClicked", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_notifyMenuItemClicked_5_listener($event) { i0.ɵɵrestoreView(_r63_1); var ctx_r69 = i0.ɵɵnextContext(3); return ctx_r69.onCustomizeFieldMenuClicked($event); })("click", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template_pep_form_click_5_listener($event) { i0.ɵɵrestoreView(_r63_1); var pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit; var ctx_r70 = i0.ɵɵnextContext(2); return ctx_r70.itemClicked($event, pepperiObjectInput_r47); });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementContainerEnd();
      }
      if (rf & 2) {
          var pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit;
          var ctx_r50 = i0.ɵɵnextContext(2);
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
      }
  }
  function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_mat_checkbox_2_Template(rf, ctx) {
      if (rf & 1) {
          var _r75_1 = i0.ɵɵgetCurrentView();
          i0.ɵɵelementStart(0, "mat-checkbox", 44);
          i0.ɵɵlistener("change", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_mat_checkbox_2_Template_mat_checkbox_change_0_listener($event) { i0.ɵɵrestoreView(_r75_1); var pepperiObjectInput_r47 = i0.ɵɵnextContext(2).$implicit; var ctx_r74 = i0.ɵɵnextContext(2); return ctx_r74.selectItemForActions($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var pepperiObjectInput_r47 = i0.ɵɵnextContext(2).$implicit;
          var ctx_r73 = i0.ɵɵnextContext(2);
          i0.ɵɵproperty("disabled", ctx_r73.getIsDisabled(pepperiObjectInput_r47))("checked", ctx_r73.getIsSelectedForActions(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.IsSelectableForActions, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type));
      }
  }
  var _c13 = function (a0, a1, a2) { return { selected: a0, highlighted: a1, cardView: a2 }; };
  function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
          var _r79_1 = i0.ɵɵgetCurrentView();
          i0.ɵɵelementContainerStart(0);
          i0.ɵɵelementStart(1, "div", 41);
          i0.ɵɵlistener("mouseenter", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_div_mouseenter_1_listener($event) { i0.ɵɵrestoreView(_r79_1); var pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit; var ctx_r78 = i0.ɵɵnextContext(2); return ctx_r78.onCardMouseEnter($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); })("mouseleave", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_div_mouseleave_1_listener($event) { i0.ɵɵrestoreView(_r79_1); var pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit; var ctx_r81 = i0.ɵɵnextContext(2); return ctx_r81.onCardMouseLeave($event, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type); });
          i0.ɵɵtemplate(2, PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_mat_checkbox_2_Template, 1, 2, "mat-checkbox", 42);
          i0.ɵɵelementStart(3, "pep-form", 43);
          i0.ɵɵlistener("notifyValueChanged", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyValueChanged_3_listener($event) { i0.ɵɵrestoreView(_r79_1); var ctx_r83 = i0.ɵɵnextContext(3); return ctx_r83.onValueChanged($event); })("notifyFieldClicked", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyFieldClicked_3_listener($event) { i0.ɵɵrestoreView(_r79_1); var ctx_r84 = i0.ɵɵnextContext(3); return ctx_r84.onCustomizeFieldClick($event); })("notifyMenuItemClicked", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_notifyMenuItemClicked_3_listener($event) { i0.ɵɵrestoreView(_r79_1); var ctx_r85 = i0.ɵɵnextContext(3); return ctx_r85.onCustomizeFieldMenuClicked($event); })("click", function PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template_pep_form_click_3_listener($event) { i0.ɵɵrestoreView(_r79_1); var pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit; var ctx_r86 = i0.ɵɵnextContext(2); return ctx_r86.itemClicked($event, pepperiObjectInput_r47); });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementContainerEnd();
      }
      if (rf & 2) {
          var pepperiObjectInput_r47 = i0.ɵɵnextContext().$implicit;
          var ctx_r51 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(1);
          i0.ɵɵclassMap(ctx_r51.itemClass);
          i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(19, _c13, ctx_r51.isItemSelected(pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID, pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type), (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r51.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r51.selectedItemId, ctx_r51.isCardView))("ngStyle", i0.ɵɵpureFunction2(23, _c11, ctx_r51.calculatedObjectHeight, ctx_r51.showItems || pepperiObjectInput_r47 ? "visible" : "hidden"));
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", ctx_r51.showSelection);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("firstFieldAsLink", ctx_r51.isCardView ? ctx_r51.firstFieldAsLink : false)("checkForChanges", ctx_r51.checkForChanges)("uiControlHeader", ctx_r51.uiControl)("pepperiObjectInput", pepperiObjectInput_r47)("isCardView", ctx_r51.isCardView)("canEditObject", !ctx_r51.disabled && (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.IsEditable))("objectId", ctx_r51.objectId)("parentId", ctx_r51.parentId)("searchCode", ctx_r51.searchCode)("lockEvents", ctx_r51.disableSelectionItems)("layoutType", ctx_r51.getThumbnailsLayout())("listType", ctx_r51.listType)("isActive", ((pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r51.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r51.selectedItemId || (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.UID) + ctx_r51.SEPARATOR + (pepperiObjectInput_r47 == null ? null : pepperiObjectInput_r47.Data == null ? null : pepperiObjectInput_r47.Data.Type) === ctx_r51.hoveredItemId) && !ctx_r51.isTouchDevice)("pageType", ctx_r51.pageType);
      }
  }
  function PepperiListComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementContainerStart(0);
          i0.ɵɵtemplate(1, PepperiListComponent_ng_template_2_ng_container_0_ng_container_1_Template, 6, 27, "ng-container", 0);
          i0.ɵɵtemplate(2, PepperiListComponent_ng_template_2_ng_container_0_ng_container_2_Template, 4, 26, "ng-container", 0);
          i0.ɵɵelementContainerEnd();
      }
      if (rf & 2) {
          var ctx_r46 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", ctx_r46.isTable);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", !ctx_r46.isTable);
      }
  }
  function PepperiListComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵtemplate(0, PepperiListComponent_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 33);
      }
      if (rf & 2) {
          var ctx_r3 = i0.ɵɵnextContext();
          i0.ɵɵproperty("ngForOf", ctx_r3.scrollItems)("ngForTrackBy", ctx_r3.trackByFunc);
      }
  }
  function PepperiListComponent_ng_template_4_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 48);
          i0.ɵɵelementStart(1, "label");
          i0.ɵɵtext(2);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var field_r91 = ctx.$implicit;
          var j_r92 = ctx.index;
          var ctx_r90 = i0.ɵɵnextContext(3);
          i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c6, field_r91.calcTitleColumnWidthString));
          i0.ɵɵadvance(1);
          i0.ɵɵclassMapInterpolate1("total-label body-sm text-align-", field_r91.Layout.XAlignment, "");
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1(" ", ctx_r90.totalsRow[j_r92], " ");
      }
  }
  function PepperiListComponent_ng_template_4_div_0_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 46);
          i0.ɵɵelementStart(1, "fieldset", 10);
          i0.ɵɵtemplate(2, PepperiListComponent_ng_template_4_div_0_div_2_Template, 3, 7, "div", 47);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var ctx_r89 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngForOf", ctx_r89.uiControl == null ? null : ctx_r89.uiControl.ControlFields);
      }
  }
  function PepperiListComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵtemplate(0, PepperiListComponent_ng_template_4_div_0_Template, 3, 1, "div", 45);
      }
      if (rf & 2) {
          var ctx_r5 = i0.ɵɵnextContext();
          i0.ɵɵproperty("ngIf", (ctx_r5.totalsRow == null ? null : ctx_r5.totalsRow.length) > 0 && ctx_r5.totalsRow.length <= (ctx_r5.uiControl == null ? null : ctx_r5.uiControl.ControlFields.length));
      }
  }
  (function (SELECTION_TYPE_FOR_ACTIONS) {
      SELECTION_TYPE_FOR_ACTIONS[SELECTION_TYPE_FOR_ACTIONS["None"] = 0] = "None";
      SELECTION_TYPE_FOR_ACTIONS[SELECTION_TYPE_FOR_ACTIONS["Single"] = 1] = "Single";
      SELECTION_TYPE_FOR_ACTIONS[SELECTION_TYPE_FOR_ACTIONS["Multi"] = 2] = "Multi";
      SELECTION_TYPE_FOR_ACTIONS[SELECTION_TYPE_FOR_ACTIONS["SingleAction"] = 3] = "SingleAction";
  })(exports.SELECTION_TYPE_FOR_ACTIONS || (exports.SELECTION_TYPE_FOR_ACTIONS = {}));
  (function (VIEW_TYPE) {
      VIEW_TYPE[VIEW_TYPE["None"] = 0] = "None";
      VIEW_TYPE[VIEW_TYPE["Card"] = 1] = "Card";
      VIEW_TYPE[VIEW_TYPE["Line"] = 2] = "Line";
      VIEW_TYPE[VIEW_TYPE["Table"] = 3] = "Table";
      VIEW_TYPE[VIEW_TYPE["Map"] = 4] = "Map";
  })(exports.VIEW_TYPE || (exports.VIEW_TYPE = {}));
  var SelectionData = /** @class */ (function () {
      function SelectionData() {
      }
      return SelectionData;
  }());
  var PepperiListComponent = /** @class */ (function () {
      function PepperiListComponent(element, layoutService, cd, renderer) {
          var _this = this;
          this.element = element;
          this.layoutService = layoutService;
          this.cd = cd;
          this.renderer = renderer;
          this.currentListTypeTranslation = '';
          this.noDataFoundMsg = 'Items not found';
          this.selectionTypeForActions = exports.SELECTION_TYPE_FOR_ACTIONS.Multi;
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
          this.notifyThumbnailClicked = new i0.EventEmitter();
          this.notifyFieldClicked = new i0.EventEmitter();
          this.notifyMenuItemClicked = new i0.EventEmitter();
          this.notifyValueChanged = new i0.EventEmitter();
          this.notifyListChanged = new i0.EventEmitter();
          this.notifySortingChanged = new i0.EventEmitter();
          this.notifySelectedItemsChanged = new i0.EventEmitter();
          this.notifySelectAllSingleActionClicked = new i0.EventEmitter();
          this.notifySingleActionClicked = new i0.EventEmitter();
          this.notifyListLoad = new i0.EventEmitter();
          this.LAYOUT_TYPE = i1.LAYOUT_TYPE;
          this.SELECTION_TYPE_FOR_ACTIONS = exports.SELECTION_TYPE_FOR_ACTIONS;
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
              .pipe(operators.delay(0))
              .subscribe(function (size) {
              _this.screenSize = size;
          });
          // this.checkForChanges = new Date().getTime();
          // this.state.stateKey = location.href;
          this.nativeWindow = window;
      }
      PepperiListComponent.prototype.ngOnInit = function () {
          this.containerWidth = 0;
      };
      PepperiListComponent.prototype.ngOnChanges = function (changes) {
          if (this.containerWidth <= 0) {
              this.setContainerWidth();
          }
      };
      PepperiListComponent.prototype.ngOnDestroy = function () {
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
      };
      PepperiListComponent.prototype.setContainerWidth = function () {
          var selectionCheckBoxWidth = this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.Multi ? 44 : 0;
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
      PepperiListComponent.prototype.saveSortingToSession = function () {
          // this.state.setItemInState(PepperiListComponent.SORT_BY_STATE_KEY, this.sortBy);
          // this.state.setItemInState(PepperiListComponent.ASCENDING_STATE_KEY, this.isAsc);
          // this.state.writeToSession();
      };
      PepperiListComponent.prototype.onMouseDown = function (event) {
          var self = this;
          // if (!this.element.nativeElement.contains(event.target) || event.target.className === 'scrollable-content') {
          //     setTimeout(() => {
          //         if (self.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.Multi || self.selectionTypeForActions === SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
          //         }
          //         // self.selectedItemId = '';
          //         //self.hoveredItemId = '';
          //     }, 500);
          // }
      };
      PepperiListComponent.prototype.removeTable = function () {
          this.cleanItems();
          this.uiControl = null;
      };
      PepperiListComponent.prototype.getTopItems = function () {
          return this.isTable ? PepperiListComponent.TOP_ITEMS_TABLE : PepperiListComponent.TOP_ITEMS_THUMBNAILS;
      };
      PepperiListComponent.prototype.toggleItems = function (isVisible) {
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
      };
      PepperiListComponent.prototype.updateScrollItems = function (startIndex, endIndex, loadInChunks) {
          if (loadInChunks === void 0) { loadInChunks = true; }
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
      };
      PepperiListComponent.prototype.setSelectionItems = function (itemId, uniqItemId, isChecked) {
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
      };
      PepperiListComponent.prototype.getUniqItemId = function (itemId, itemType) {
          if (itemType === void 0) { itemType = ''; }
          return itemId + this.SEPARATOR + itemType;
      };
      PepperiListComponent.prototype.isItemSelected = function (itemId, itemType) {
          if (itemType === void 0) { itemType = ''; }
          var isSelected = false;
          if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.SingleAction ||
              this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.Multi) {
              isSelected = this.selectedItems.has(itemId) || this.isAllSelected && !this.unSelectedItems.has(itemId);
          }
          else if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.Single) {
              var uniqItemId = this.getUniqItemId(itemId, itemType);
              isSelected = uniqItemId === this.selectedItemId;
          }
          return isSelected;
      };
      PepperiListComponent.prototype.setLayout = function () {
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
                  (cf.FieldType === i1.FIELD_TYPE.Image ||
                      // cf.FieldType === FIELD_TYPE.Indicators || ???
                      cf.FieldType === i1.FIELD_TYPE.Signature ||
                      cf.FieldType === i1.FIELD_TYPE.NumberIntegerQuantitySelector ||
                      cf.FieldType === i1.FIELD_TYPE.NumberRealQuantitySelector ||
                      cf.FieldType === i1.FIELD_TYPE.NumberIntegerForMatrix ||
                      cf.FieldType === i1.FIELD_TYPE.NumberRealForMatrix ||
                      cf.FieldType === i1.FIELD_TYPE.Package ||
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
      PepperiListComponent.prototype.calcColumnsWidth = function () {
          var fixedMultiple = 3.78; // for converting em to pixel.
          var length = this.uiControl.ControlFields.length;
          var selectionCheckBoxWidth = this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.Multi ? 44 : 0;
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
      PepperiListComponent.prototype.initResizeData = function () {
          this.startX = 0;
          this.startWidth = 0;
          this.tableStartWidth = 0;
          this.pressedColumn = '';
      };
      PepperiListComponent.prototype.onListResizeStart = function (event, apiName) {
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
      };
      PepperiListComponent.prototype.onListResize = function (event) {
          if (this.pressedColumn.length > 0) {
              var widthToAdd = this.layoutService.isRtl() ? this.startX - event.x : event.x - this.startX;
              // Set the width of the column and the container of the whole columns.
              if (this.startWidth + widthToAdd >= PepperiListComponent.MINIMUM_COLUMN_WIDTH || widthToAdd > 0) {
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
      PepperiListComponent.prototype.onListResizeEnd = function (event) {
          if (this.pressedColumn.length > 0) {
              if (event && $(event.srcElement).parents('.resizeBox').length > 0) {
                  this.initResizeData();
              }
              else {
                  // Set timeout 0 for onListSortingChange will have the pressedColumn.
                  var self_1 = this;
                  setTimeout(function () {
                      self_1.initResizeData();
                  }, 0);
              }
          }
      };
      PepperiListComponent.prototype.onListSortingChange = function (sortBy, isAsc, event) {
          if (event === void 0) { event = null; }
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
              this.notifySortingChanged.emit({ sortBy: sortBy, isAsc: isAsc });
          }
      };
      PepperiListComponent.prototype.onListHeaderMouseEnter = function (event) {
          // this.headerIsInFocus = true;
      };
      PepperiListComponent.prototype.onListHeaderMouseLeave = function (event) {
          // this.headerIsInFocus = false;
          this.onListResizeEnd(event);
          this.initResizeData();
      };
      PepperiListComponent.prototype.onListChange = function (event) {
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
              var getItemsFromApi = false;
              var index = event.start;
              while (!getItemsFromApi && index < event.end) {
                  if (!this.items[index]) {
                      getItemsFromApi = true;
                  }
                  index++;
              }
              // Get bulk from api.
              if (getItemsFromApi) {
                  var top = this.getTopItems() - 1;
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
      };
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
      PepperiListComponent.prototype.onListLoad = function (event) {
          this.notifyListLoad.emit(event);
      };
      PepperiListComponent.prototype.getParentContainer = function () {
          return this.parentScroll ? this.parentScroll : window;
      };
      PepperiListComponent.prototype.onValueChanged = function (valueChanged) {
          if (this.disabled) {
              return;
          }
          this.notifyValueChanged.emit(valueChanged);
      };
      PepperiListComponent.prototype.onCustomizeFieldClick = function (customizeFieldClickedData) {
          if (this.disabled) {
              return;
          }
          this.notifyFieldClicked.emit(customizeFieldClickedData);
      };
      PepperiListComponent.prototype.onCustomizeFieldMenuClicked = function (customizeFieldClickedData) {
          if (this.disabled) {
              return;
          }
          this.notifyMenuItemClicked.emit(customizeFieldClickedData);
      };
      PepperiListComponent.prototype.getIsDisabled = function (pepperiObjectInput) {
          if (this.disableSelectionItems) {
              return true;
          }
          else {
              var IsNotSelectableForActions = (pepperiObjectInput === null || pepperiObjectInput === void 0 ? void 0 : pepperiObjectInput.Data) && !pepperiObjectInput.Data.IsSelectableForActions;
              return IsNotSelectableForActions;
          }
      };
      PepperiListComponent.prototype.getIsAllSelectedForActions = function () {
          var e_1, _b;
          var res = false;
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
                  try {
                      // for (let index = 0; index < this.scrollItems.length; index++) {
                      //     const pepperiObjectInput = this.scrollItems[index];
                      for (var _c = __values(this.scrollItems), _d = _c.next(); !_d.done; _d = _c.next()) {
                          var pepperiObjectInput = _d.value;
                          res = pepperiObjectInput && pepperiObjectInput.Data &&
                              this.selectedItems.has(pepperiObjectInput.Data.UID.toString());
                          if (!res) {
                              break;
                          }
                      }
                  }
                  catch (e_1_1) { e_1 = { error: e_1_1 }; }
                  finally {
                      try {
                          if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                      }
                      finally { if (e_1) throw e_1.error; }
                  }
              }
          }
          return res;
      };
      PepperiListComponent.prototype.setIsAllSelected = function (isChecked) {
          if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.Multi ||
              this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
              this.selectAllCB.checked = isChecked;
              this.isAllSelected = isChecked;
          }
      };
      PepperiListComponent.prototype.selectAllItemsForActions = function (e) {
          // For material checkbox || radio.
          var isChecked = e.source.checked;
          // Indeterminate mode
          var isIndeterminate = false;
          var currentList = this.isAllSelected ? this.unSelectedItems : this.selectedItems;
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
              if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
                  // Add all or remove all
                  this.notifySelectAllSingleActionClicked.emit(isChecked);
              }
              else if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.Multi) {
                  if (!isChecked) {
                      this.notifySelectedItemsChanged.emit(0);
                      this.selectedItemId = '';
                  }
                  else {
                      var filteredItems = this.items.filter(function (item) { return item.Data && item.Data.IsSelectableForActions; });
                      this.notifySelectedItemsChanged.emit(filteredItems.length);
                  }
              }
          }
          else {
              if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
                  // Remove all
                  this.notifySelectAllSingleActionClicked.emit(false);
              }
          }
      };
      PepperiListComponent.prototype.getIsSelectedForActions = function (itemId, isSelectableForActions, itemType) {
          if (itemType === void 0) { itemType = ''; }
          if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.Single) {
              return this.selectedItemId === this.getUniqItemId(itemId, itemType);
          }
          else if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
              var res = this.isAllSelected || this.selectedItems.has(itemId);
              if (this.unSelectedItems.has(itemId)) {
                  res = false;
              }
              return res;
          }
          else if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.Multi) {
              if (!isSelectableForActions) {
                  return false;
              }
              else {
                  var res = this.isAllSelected || this.selectedItems.has(itemId);
                  if (this.unSelectedItems.has(itemId)) {
                      res = false;
                  }
                  return res;
              }
          }
      };
      PepperiListComponent.prototype.selectItemForActions = function (e, itemId, isSelectableForActions, itemType) {
          if (itemType === void 0) { itemType = ''; }
          // For material checkbox || radio.
          var isChecked = e.source.checked;
          this.setItemClicked(itemId, isSelectableForActions, itemType, isChecked);
      };
      PepperiListComponent.prototype.itemClicked = function (e, objectSingleData) {
          // Set seleted item
          var itemId = objectSingleData.Data.UID.toString();
          var itemType = objectSingleData.Data.Type.toString();
          var isChecked = false;
          if (objectSingleData && objectSingleData.Data && objectSingleData.Data.IsSelectableForActions) {
              this.selectedItemId = this.getUniqItemId(itemId, itemType);
              isChecked = true;
          }
          if (this.isTable) {
              if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.Single) {
                  this.setItemClicked(itemId, objectSingleData.Data.IsSelectableForActions, itemType, isChecked);
              }
              else if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.None) {
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
      };
      PepperiListComponent.prototype.setItemClicked = function (itemId, isSelectableForActions, itemType, isChecked) {
          var uniqItemId = this.getUniqItemId(itemId, itemType);
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
          if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.Single) {
              this.notifySelectedItemsChanged.emit(this.selectedItemId.length === 0 ? 0 : 1);
          }
          else if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.SingleAction) {
              this.setSelectionItems(itemId, uniqItemId, isChecked);
              this.notifySingleActionClicked.emit({ id: itemId, selected: isChecked });
          }
          else if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.Multi) {
              if (isSelectableForActions) {
                  this.setSelectionItems(itemId, uniqItemId, isChecked);
                  var currentList = this.isAllSelected ? this.unSelectedItems : this.selectedItems;
                  var currentListCount = this.isAllSelected ? this.totalRows - currentList.size : currentList.size;
                  this.notifySelectedItemsChanged.emit(currentListCount);
              }
          }
      };
      PepperiListComponent.prototype.onTableRowMouseEnter = function (event, itemId, itemType) {
          if (this.isTouchDevice) {
              return;
          }
          var uniqItemId = this.getUniqItemId(itemId, itemType);
          this.hoveredItemId = uniqItemId;
      };
      PepperiListComponent.prototype.onTableRowMouseLeave = function (event, itemId, itemType) {
          this.hoveredItemId = '';
      };
      PepperiListComponent.prototype.onCardMouseEnter = function (event, itemId, itemType) {
          if (this.isTouchDevice) {
              return;
          }
          var uniqItemId = this.getUniqItemId(itemId, itemType);
          this.hoveredItemId = uniqItemId;
      };
      PepperiListComponent.prototype.onCardMouseLeave = function (event, itemId, itemType) {
          this.hoveredItemId = '';
      };
      PepperiListComponent.prototype.getThumbnailsLayout = function () {
          return this.layoutType == null ? i1.LAYOUT_TYPE.PepperiCard : this.layoutType;
      };
      // call this function after resize + animation end
      PepperiListComponent.prototype.winResize = function (e) {
          if (typeof this.virtualScroll !== 'undefined') {
              this.virtualScroll.refresh();
          }
          this.containerWidth = 0;
          this.setLayout();
      };
      PepperiListComponent.prototype.trackByFunc = function (index, item) {
          return item && item.Data && item.Data.UID ? item.Data.UID : index;
          // let res: string = "";
          // if (item && item.Data && item.Data.UID) {
          //    res = item.Data.UID + "_" + this.listType + "_" + (this.isTable ? "Table" : "Thumbnails");
          // }
          // else {
          //    res = index + "_" + this.listType + "_" + (this.isTable ? "Table" : "Thumbnails");
          // }
          // return res;
      };
      PepperiListComponent.prototype.cleanItems = function () {
          this.itemsCounter = 0;
          this.items = this.totalRows > 0 ? Array(this.totalRows) : [];
          this.scrollItems = [];
          this.calculatedObjectHeight = '';
      };
      PepperiListComponent.prototype.getUIControl = function () {
          return this.uiControl;
      };
      PepperiListComponent.prototype.initListData = function (uiControl, totalRows, items, viewType, itemClass, showSelection) {
          if (viewType === void 0) { viewType = exports.VIEW_TYPE.Table; }
          if (itemClass === void 0) { itemClass = ''; }
          if (showSelection === void 0) { showSelection = false; }
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
          var currentList = this.isAllSelected ? this.unSelectedItems : this.selectedItems;
          var currentListCount = this.isAllSelected ? this.totalRows - currentList.size : currentList.size;
          this.notifySelectedItemsChanged.emit(currentListCount);
          this.isCardView = viewType === exports.VIEW_TYPE.Card;
          this.showSelection = showSelection;
          this.uiControl = uiControl;
          this.itemClass = itemClass;
          this.selectedItemId = '';
          this.isTable = viewType === exports.VIEW_TYPE.Table;
          this.totalRows = totalRows;
          // fix bug for the scrollTo that doesn't work on edge div , not window
          var scrollingElement = this.getParentContainer();
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
              var numberOfStartItems = this.getNumberOfStartItems();
              this.updateListItems(items, { start: 0, end: numberOfStartItems, fromIndex: 0, toIndex: numberOfStartItems, addAtStart: true });
              if (typeof this.virtualScroll !== 'undefined') {
                  this.virtualScroll.refresh();
              }
          }
          this.setLayout();
      };
      PepperiListComponent.prototype.getIsAllSelected = function (items) {
          var e_2, _b;
          var result = true;
          if (this.selectedItems.size > 0 && items.length > 0) {
              try {
                  // for (let index = 0; index < items.length; index++) {
                  // const pepperiObjectInput = items[index];
                  for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                      var pepperiObjectInput = items_1_1.value;
                      if (!(pepperiObjectInput && pepperiObjectInput.Data && this.selectedItems.has(pepperiObjectInput.Data.UID.toString()))) {
                          result = false;
                          break;
                      }
                  }
              }
              catch (e_2_1) { e_2 = { error: e_2_1 }; }
              finally {
                  try {
                      if (items_1_1 && !items_1_1.done && (_b = items_1.return)) _b.call(items_1);
                  }
                  finally { if (e_2) throw e_2.error; }
              }
          }
          else {
              result = false;
          }
          return result;
      };
      PepperiListComponent.prototype.getNumberOfStartItems = function () {
          var numberOfStartItems = 20;
          if ((this.screenSize === i1.SCREEN_SIZE.XL) ||
              (this.screenSize === i1.SCREEN_SIZE.LG)) {
              numberOfStartItems = this.isTable ? 50 : 40;
          }
          else if (this.screenSize === i1.SCREEN_SIZE.MD) {
              numberOfStartItems = this.isTable ? 30 : 20;
          }
          else if (this.screenSize === i1.SCREEN_SIZE.SM) {
              numberOfStartItems = this.isTable ? 20 : 10;
          }
          else if (this.screenSize === i1.SCREEN_SIZE.XS) {
              numberOfStartItems = this.isTable ? 15 : 5;
          }
          return numberOfStartItems;
      };
      PepperiListComponent.prototype.setSelectedIds = function (selectedIds, items) {
          var e_3, _b;
          if (items === void 0) { items = null; }
          this.selectedItems.clear();
          this.isAllSelected = false;
          if (selectedIds) {
              try {
                  // for (let i = 0; i < selected.length; i++) {
                  for (var selectedIds_1 = __values(selectedIds), selectedIds_1_1 = selectedIds_1.next(); !selectedIds_1_1.done; selectedIds_1_1 = selectedIds_1.next()) {
                      var selectedId = selectedIds_1_1.value;
                      var tmp = selectedId.split(this.SEPARATOR);
                      if (tmp && tmp.length > 0) {
                          var itemId = tmp[0];
                          var itemType = tmp.length > 1 ? tmp[1] : '';
                          this.selectedItems.set(itemId, this.getUniqItemId(itemId, itemType));
                      }
                  }
              }
              catch (e_3_1) { e_3 = { error: e_3_1 }; }
              finally {
                  try {
                      if (selectedIds_1_1 && !selectedIds_1_1.done && (_b = selectedIds_1.return)) _b.call(selectedIds_1);
                  }
                  finally { if (e_3) throw e_3.error; }
              }
              this.isAllSelected = this.getIsAllSelected(items ? items : this.scrollItems); // this.selectedItems.Count() === this.totalRows;
              this.setSelectionDataInSession();
          }
          if (typeof this.virtualScroll !== 'undefined') {
              this.virtualScroll.refresh();
          }
      };
      PepperiListComponent.prototype.setSelectionDataInSession = function () {
          // this.state.setItemInState(PepperiListComponent.SELECTED_ITEMS_STATE_KEY, this.selectedItems);
          // this.state.setItemInState(PepperiListComponent.UN_SELECTED_ITEMS_STATE_KEY, this.unSelectedItems);
          // this.state.setItemInState(PepperiListComponent.ALL_SELECTED_STATE_KEY, this.isAllSelected);
      };
      PepperiListComponent.prototype.updateListItems = function (items, event) {
          if (this.useVirtualScroll) {
              // Clean array
              if (this.itemsCounter + items.length > PepperiListComponent.TOP_ITEMS_ARRAY) {
                  this.cleanItems();
              }
              var startIndex = event.fromIndex ? event.fromIndex : event.start;
              for (var i = 0; i < items.length; i++) {
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
      };
      PepperiListComponent.prototype.updateListItem = function (data) {
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
      PepperiListComponent.prototype.focusOnAnItem = function (itemIndex) {
          if (typeof this.virtualScroll !== 'undefined') {
              this.virtualScroll.scrollInto(itemIndex);
          }
      };
      PepperiListComponent.prototype.getSelectedItemsData = function (isForEdit) {
          var _this = this;
          if (isForEdit === void 0) { isForEdit = false; }
          var res = new SelectionData();
          if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.Single) {
              var tmp = this.selectedItemId.split(this.SEPARATOR);
              res.selectionType = 1;
              res.rows = [tmp[0]];
              res.rowTypes = [tmp[1]];
          }
          else if (this.selectionTypeForActions === exports.SELECTION_TYPE_FOR_ACTIONS.Multi) {
              var items_2 = [];
              var itemTypes_1 = [];
              var selectionType = 1;
              var currentList_1 = [];
              // For edit - only the selected items.
              if (isForEdit) {
                  if (!this.isAllSelected) {
                      currentList_1 = Array.from(this.selectedItems.values());
                  }
                  else {
                      // Get the id's of the items that not founded in unSelectedItems.
                      this.items.forEach(function (item) {
                          if (item && !_this.unSelectedItems.has(item.Data.UID.toString())) {
                              currentList_1.push(_this.getUniqItemId(item.Data.UID.toString(), item.Data.Type.toString()));
                          }
                      });
                  }
              }
              else {
                  // For delete - can be the unselected with select_all functionality.
                  currentList_1 = Array.from(this.isAllSelected ? this.unSelectedItems.values() : this.selectedItems.values());
                  selectionType = this.isAllSelected ? 0 : 1;
              }
              currentList_1.forEach(function (item) {
                  var tmp = item.split(_this.SEPARATOR);
                  if (tmp.length === 2) {
                      items_2.push(tmp[0]);
                      itemTypes_1.push(tmp[1]);
                  }
              });
              res.selectionType = selectionType;
              res.rows = items_2;
              res.rowTypes = itemTypes_1;
          }
          return res;
      };
      PepperiListComponent.prototype.initCollectionFromState = function (collectionType, collection) {
          var _this = this;
          if (collectionType === 'Selected') {
              collection.forEach(function (x) { return _this.selectedItems.set(x, x); });
          }
          else {
              collection.forEach(function (x) { return _this.unSelectedItems.set(x, x); });
          }
      };
      PepperiListComponent.prototype.getIsItemEditable = function (uid) {
          var item = this.items.filter(function (x) { return x.Data.UID.toString() === uid; });
          if (item.length > 0) {
              return item[0].Data.IsEditable;
          }
          else {
              return false;
          }
      };
      PepperiListComponent.prototype.getItemDataByID = function (uid) {
          var _a;
          return (_a = this.items.find(function (item) { return item.Data.UID.toString() === uid; })) === null || _a === void 0 ? void 0 : _a.Data;
          // const item = this.items.filter(x => x.Data.UID.toString() === uid);
          // if (item.length > 0) {
          //     return item[0].Data;
          // } else {
          //     return null;
          // }
      };
      return PepperiListComponent;
  }());
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
  PepperiListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiListComponent, selectors: [["pep-list"]], viewQuery: function PepperiListComponent_Query(rf, ctx) {
          if (rf & 1) {
              i0.ɵɵviewQuery(VirtualScrollComponent, true);
              i0.ɵɵviewQuery(_c0$1, true);
              i0.ɵɵviewQuery(_c1$1, true);
              i0.ɵɵviewQuery(_c2$1, true);
          }
          if (rf & 2) {
              var _t;
              i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.virtualScroll = _t.first);
              i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.noVirtualScrollCont = _t.first);
              i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableHeader = _t.first);
              i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectAllCB = _t.first);
          }
      }, hostBindings: function PepperiListComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
              i0.ɵɵlistener("mousedown", function PepperiListComponent_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); }, false, i0.ɵɵresolveDocument)("resize", function PepperiListComponent_resize_HostBindingHandler($event) { return ctx.winResize($event); }, false, i0.ɵɵresolveWindow);
          }
      }, inputs: { currentListTypeTranslation: "currentListTypeTranslation", noDataFoundMsg: "noDataFoundMsg", selectionTypeForActions: "selectionTypeForActions", hideAllSelectionInMulti: "hideAllSelectionInMulti", top: "top", listType: "listType", objectId: "objectId", parentId: "parentId", searchCode: "searchCode", firstFieldAsLink: "firstFieldAsLink", supportSorting: "supportSorting", supportResizing: "supportResizing", parentScroll: "parentScroll", disabled: "disabled", isPrinting: "isPrinting", disableSelectionItems: "disableSelectionItems", isReport: "isReport", layoutType: "layoutType", pageType: "pageType", totalsRow: "totalsRow", isTouchDevice: "isTouchDevice" }, outputs: { notifyThumbnailClicked: "notifyThumbnailClicked", notifyFieldClicked: "notifyFieldClicked", notifyMenuItemClicked: "notifyMenuItemClicked", notifyValueChanged: "notifyValueChanged", notifyListChanged: "notifyListChanged", notifySortingChanged: "notifySortingChanged", notifySelectedItemsChanged: "notifySelectedItemsChanged", notifySelectAllSingleActionClicked: "notifySelectAllSingleActionClicked", notifySingleActionClicked: "notifySingleActionClicked", notifyListLoad: "notifyListLoad" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 2, consts: [[4, "ngIf"], ["listData", ""], ["listTotals", ""], [1, "no-data"], ["class", "table-header", 3, "ngClass", "mouseup", "mouseenter", "mouseleave", "mousemove", 4, "ngIf"], [3, "totalRows", "isTable", "parentScroll", "bufferAmount", "ngClass", "load", "change", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "table-header", 3, "ngClass", "mouseup", "mouseenter", "mouseleave", "mousemove"], ["tableHeader", ""], [1, "table-header-fieldset"], ["class", "pull-left flip row-selection", "type", "checkbox", 3, "ngStyle", "indeterminate", "disabled", "checked", "change", 4, "ngIf"], ["class", "header-column pull-left flip", 3, "ngStyle", "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "pull-left", "flip", "row-selection", 3, "ngStyle", "indeterminate", "disabled", "checked", "change"], ["selectAllCB", ""], [1, "header-column", "pull-left", "flip", 3, "ngStyle", "ngClass", "click"], [3, "id", "class", "title", 4, "ngIf"], ["class", "header-label body-sm pull-left flip", 3, "id", 4, "ngIf"], ["class", "resizeBox pull-right flip", 3, "mousedown", 4, "ngIf"], ["class", "sortingBox pull-left flip", 3, "ngClass", 4, "ngIf"], [3, "id", "title"], [1, "header-label", "body-sm", "pull-left", "flip", 3, "id"], [1, "resizeBox", "pull-right", "flip", 3, "mousedown"], ["name", "arrow-up", 1, "asc"], [1, "sortingBox", "pull-left", "flip", 3, "ngClass"], [3, "ngClass", "title", 4, "ngIf"], ["name", "arrow-either", 1, "asc"], [3, "ngClass", "title"], ["name", "arrow-down", 1, "asc"], ["name", "arrow-down", 1, "desc"], [3, "totalRows", "isTable", "parentScroll", "bufferAmount", "ngClass", "load", "change"], [3, "ngClass"], ["noVirtualScrollCont", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-row", 3, "ngClass", "ngStyle", "mouseenter", "mouseleave"], [1, "table-row-fieldset", 3, "ngStyle"], ["type", "checkbox", "class", "pull-left flip row-selection", 3, "disabled", "ngStyle", "checked", "change", 4, "ngIf"], ["name", "selection", "class", "pull-left flip row-selection pepperi-radio-button", 3, "disabled", "checked", "change", 4, "ngIf"], [3, "checkForChanges", "uiControlHeader", "firstFieldAsLink", "pepperiObjectInput", "canEditObject", "objectId", "parentId", "searchCode", "lockEvents", "isReport", "layoutType", "listType", "isActive", "pageType", "notifyValueChanged", "notifyFieldClicked", "notifyMenuItemClicked", "click"], ["type", "checkbox", 1, "pull-left", "flip", "row-selection", 3, "disabled", "ngStyle", "checked", "change"], ["name", "selection", 1, "pull-left", "flip", "row-selection", "pepperi-radio-button", 3, "disabled", "checked", "change"], [1, "pull-left", "flip", 3, "ngClass", "ngStyle", "mouseenter", "mouseleave"], ["class", "pull-left flip card-selection", 3, "disabled", "checked", "change", 4, "ngIf"], [3, "firstFieldAsLink", "checkForChanges", "uiControlHeader", "pepperiObjectInput", "isCardView", "canEditObject", "objectId", "parentId", "searchCode", "lockEvents", "layoutType", "listType", "isActive", "pageType", "notifyValueChanged", "notifyFieldClicked", "notifyMenuItemClicked", "click"], [1, "pull-left", "flip", "card-selection", 3, "disabled", "checked", "change"], ["class", "table-total", 4, "ngIf"], [1, "table-total"], ["class", "total-column pull-left flip", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "total-column", "pull-left", "flip", 3, "ngStyle"]], template: function PepperiListComponent_Template(rf, ctx) {
          if (rf & 1) {
              i0.ɵɵtemplate(0, PepperiListComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
              i0.ɵɵtemplate(1, PepperiListComponent_ng_container_1_Template, 5, 4, "ng-container", 0);
              i0.ɵɵtemplate(2, PepperiListComponent_ng_template_2_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
              i0.ɵɵtemplate(4, PepperiListComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
          }
          if (rf & 2) {
              i0.ɵɵproperty("ngIf", ctx.totalRows == 0);
              i0.ɵɵadvance(1);
              i0.ɵɵproperty("ngIf", ctx.totalRows > 0);
          }
      }, directives: [i2.NgIf, i2.NgTemplateOutlet, i2.NgClass, i2.NgForOf, i3.MatCheckbox, i2.NgStyle, i4.MatIcon, i1$1.PepperiIconComponent, VirtualScrollComponent, i7.PepperiFormComponent, i8.MatRadioButton], pipes: [i9.TranslatePipe], styles: ["[_nghost-%COMP%]{height:inherit}[_nghost-%COMP%]   virtual-scroll[_ngcontent-%COMP%]{min-height:calc(100% - 34px)}.no-data[_ngcontent-%COMP%]{font-size:1.5rem;margin-top:100px;text-align:center}.table-header[_ngcontent-%COMP%]{top:0}.table-header.below-header-and-top-bar[_ngcontent-%COMP%]{top:calc(var(--pep-header-height, 4rem) + var(--pep-top-bar-spacing-top, 1.5rem) + var(--pep-top-bar-spacing-bottom, .5rem) + var(--pep-top-bar-field-height, 2.5rem))}"] });
  /*@__PURE__*/ (function () {
      i0.ɵsetClassMetadata(PepperiListComponent, [{
              type: i0.Component,
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
                  type: i0.Input
              }], noDataFoundMsg: [{
                  type: i0.Input
              }], selectionTypeForActions: [{
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
              }], supportSorting: [{
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
              }], isReport: [{
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
              }], notifyListChanged: [{
                  type: i0.Output
              }], notifySortingChanged: [{
                  type: i0.Output
              }], notifySelectedItemsChanged: [{
                  type: i0.Output
              }], notifySelectAllSingleActionClicked: [{
                  type: i0.Output
              }], notifySingleActionClicked: [{
                  type: i0.Output
              }], notifyListLoad: [{
                  type: i0.Output
              }], virtualScroll: [{
                  type: i0.ViewChild,
                  args: [VirtualScrollComponent]
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

  var PepperiListModule = /** @class */ (function () {
      function PepperiListModule(pepperiIconRegistry) {
          this.pepperiIconRegistry = pepperiIconRegistry;
          this.pepperiIconRegistry.registerIcons([
              i1$1.pepperiIconArrowDown,
              i1$1.pepperiIconArrowEither,
              i1$1.pepperiIconArrowUp
          ]);
      }
      return PepperiListModule;
  }());
  PepperiListModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiListModule });
  PepperiListModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiListModule_Factory(t) { return new (t || PepperiListModule)(i0.ɵɵinject(i1$1.PepperiIconRegistry)); }, imports: [[
              i2.CommonModule,
              // Material modules,
              core.MatCommonModule,
              i3.MatCheckboxModule,
              i8.MatRadioModule,
              i4.MatIconModule,
              // Pepperi modules
              i1.PepperiModule,
              i1$1.PepperiIconModule,
              i7.PepperiFormModule,
              VirtualScrollModule
          ]] });
  (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiListModule, { declarations: [PepperiListComponent], imports: [i2.CommonModule,
              // Material modules,
              core.MatCommonModule,
              i3.MatCheckboxModule,
              i8.MatRadioModule,
              i4.MatIconModule,
              // Pepperi modules
              i1.PepperiModule,
              i1$1.PepperiIconModule,
              i7.PepperiFormModule,
              VirtualScrollModule], exports: [PepperiListComponent] });
  })();
  /*@__PURE__*/ (function () {
      i0.ɵsetClassMetadata(PepperiListModule, [{
              type: i0.NgModule,
              args: [{
                      imports: [
                          i2.CommonModule,
                          // Material modules,
                          core.MatCommonModule,
                          i3.MatCheckboxModule,
                          i8.MatRadioModule,
                          i4.MatIconModule,
                          // Pepperi modules
                          i1.PepperiModule,
                          i1$1.PepperiIconModule,
                          i7.PepperiFormModule,
                          VirtualScrollModule
                      ],
                      exports: [PepperiListComponent],
                      declarations: [PepperiListComponent],
                  }]
          }], function () { return [{ type: i1$1.PepperiIconRegistry }]; }, null);
  })();

  /*
   * Public API Surface of ngx-lib/list
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.PepperiListComponent = PepperiListComponent;
  exports.PepperiListModule = PepperiListModule;
  exports.SelectionData = SelectionData;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-list.umd.js.map
