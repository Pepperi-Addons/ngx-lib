// import {
//     Component,
//     ContentChild,
//     ElementRef,
//     EventEmitter,
//     Input,
//     NgModule,
//     NgZone,
//     OnChanges,
//     OnDestroy,
//     OnInit,
//     Output,
//     Renderer2,
//     SimpleChanges,
//     ViewChild,
// } from '@angular/core';

// import * as tween from '@tweenjs/tween.js';

// declare let _: any;
// export interface IPepVirtualScrollChangeEvent {
//     start?: number;
//     end?: number;
//     addAtStart?: boolean;
//     calculatedChildHeight?: number;
// }

// @Component({
//     selector: 'pep-virtual-scroll',
//     template: `
//         <div class="total-padding" #shim></div>
//         <div class="scrollable-content" #content>
//             <ng-content></ng-content>
//         </div>
//     `,
//     host: {
//         '[style.overflow-y]': "parentScroll ? 'hidden' : 'auto'",
//     },
//     styles: [
//         `
//             :host {
//                 overflow: hidden;
//                 position: relative;
//                 display: block;
//                 -webkit-overflow-scrolling: touch;
//             }
//             .scrollable-content {
//                 top: 0;
//                 left: 0;
//                 width: 100%;
//                 height: 100%;
//                 position: absolute;
//                 //   z-index:495;
//             }
//             .total-padding {
//                 width: 1px;
//                 opacity: 0;
//             }

//             .rtl {
//                 .scrollable-content {
//                     left: unset;
//                     right: 0;
//                 }
//             }
//         `,
//     ],
// })
// export class PepVirtualScrollComponent implements OnInit, OnChanges, OnDestroy {
//     //@Input()
//     //items: any[] = [];

//     @Input()
//     totalRows = 0;

//     @Input()
//     scrollbarWidth: number;

//     @Input()
//     scrollbarHeight: number;

//     @Input()
//     childWidth: number;

//     @Input()
//     childHeight: number;

//     @Input()
//     bufferAmount = 0;

//     @Input()
//     scrollAnimationTime = 1500;

//     @Input()
//     doNotCheckAngularZone = false;

//     private refreshHandler = () => {
//         this.refresh(true);
//     };
//     private _parentScroll: Element | Window;
//     @Input()
//     set parentScroll(element: Element | Window) {
//         if (this._parentScroll === element) {
//             return;
//         }
//         this._parentScroll = element;
//         this.addParentEventHandlers(this._parentScroll);
//     }

//     get parentScroll(): Element | Window {
//         return this._parentScroll;
//     }

//     @Input()
//     isTable = false;

//     //@Output()
//     //update: EventEmitter<any[]> = new EventEmitter<any[]>();
//     //viewPortItems: any[];

//     @Output()
//     change: EventEmitter<IPepVirtualScrollChangeEvent> = new EventEmitter<IPepVirtualScrollChangeEvent>();

//     @Output()
//     load: EventEmitter<void> = new EventEmitter<void>();

//     // @Output()
//     // start: EventEmitter<IPepVirtualScrollChangeEvent> = new EventEmitter<IPepVirtualScrollChangeEvent>();

//     // @Output()
//     // end: EventEmitter<IPepVirtualScrollChangeEvent> = new EventEmitter<IPepVirtualScrollChangeEvent>();

//     @ViewChild('content', { read: ElementRef })
//     contentElementRef: ElementRef;

//     @ViewChild('shim', { read: ElementRef })
//     shimElementRef: ElementRef;

//     @ContentChild('container')
//     containerElementRef: ElementRef;

//     previousStart: number;
//     previousEnd: number;
//     startupLoop = true;
//     currentTween: any;

//     private disposeScrollHandler: () => void | undefined;
//     private disposeResizeHandler: () => void | undefined;

//     /** Cache of the last scroll height to prevent setting CSS when not needed. */
//     private lastScrollHeight = -1;

//     /** Cache of the last top padding to prevent setting CSS when not needed. */
//     private lastTopPadding = -1;

//     constructor(
//         public element: ElementRef,
//         private renderer: Renderer2,
//         private zone: NgZone
//     ) { }

//     ngOnInit() {
//         this.scrollbarWidth = 0; // this.element.nativeElement.offsetWidth - this.element.nativeElement.clientWidth;
//         this.scrollbarHeight = 0; // this.element.nativeElement.offsetHeight - this.element.nativeElement.clientHeight;

//         if (!this.parentScroll) {
//             this.addParentEventHandlers(this.element.nativeElement);
//         }
//     }

//     ngOnDestroy() {
//         this.removeParentEventHandlers();
//     }

//     ngOnChanges(changes: SimpleChanges) {
//         this.previousStart = undefined;
//         this.previousEnd = undefined;
//         const totalRows = (changes as any).totalRows || {};
//         if (
//             ((changes as any).totalRows !== undefined &&
//                 totalRows.previousValue === undefined) ||
//             totalRows.previousValue !== undefined
//         ) {
//             this.startupLoop = true;
//         }

//         const ieVer = this.detectIE();
//         const headerRowHeight = '34px';

//         // Set padding top for the table view because the header row.
//         //this.renderer.setStyle(this.contentElementRef.nativeElement, 'padding-top', this.isTable ? headerRowHeight : '0');

//         if (!ieVer || ieVer >= 16) {
//             // not IE and version < 16
//             this.renderer.setStyle(this.element.nativeElement, 'top', '0');
//         } else {
//             this.renderer.setStyle(
//                 this.element.nativeElement,
//                 'top',
//                 headerRowHeight
//             );
//         }

//         //Only for IE browsers
//         /*  let ua = navigator.userAgent;
//         if (this.isTable && (ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0 || ua.indexOf('Edge/') >= 0)) {
//             this.renderer.setStyle(this.element.nativeElement, 'top', headerRowHeight);
//         }
//         else {
//             this.renderer.setStyle(this.element.nativeElement, 'top', '0');
//         }*/

//         this.refresh();
//     }

//     detectIE(): any {
//         const ua = window.navigator.userAgent;

//         // Test values; Uncomment to check result …

//         // IE 10
//         // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

//         // IE 11
//         // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

//         // Edge 12 (Spartan)
//         // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

//         // Edge 13
//         // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

//         const msie = ua.indexOf('MSIE ');
//         if (msie > 0) {
//             // IE 10 or older => return version number
//             return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
//         }

//         const trident = ua.indexOf('Trident/');
//         if (trident > 0) {
//             // IE 11 => return version number
//             const rv = ua.indexOf('rv:');
//             return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
//         }

//         const edge = ua.indexOf('Edge/');
//         if (edge > 0) {
//             // Edge (IE 12+) => return version number
//             return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
//         }

//         // other browser
//         return false;
//     }

//     refresh(forceViewportUpdate = false) {
//         this.zone.runOutsideAngular(() => {
//             requestAnimationFrame(() =>
//                 this.calculateItems(forceViewportUpdate)
//             );
//         });
//     }

//     scrollInto(index: any) {
//         const el: Element =
//             this.parentScroll instanceof Window
//                 ? document.body
//                 : this.parentScroll || this.element.nativeElement;
//         // const offsetTop = this.getElementsOffset();
//         //let index: number = (this.items || []).indexOf(item);
//         if (index < 0 || index >= this.totalRows) return;

//         const d = this.calculateDimensions();
//         const scrollTop =
//             Math.floor(index / d.itemsPerRow) * d.childHeight -
//             d.childHeight * Math.min(index, this.bufferAmount);

//         let animationRequest;

//         if (this.currentTween !== undefined) {
//             this.currentTween.stop();
//         }

//         // totally disable animate
//         if (!this.scrollAnimationTime) {
//             el.scrollTop = scrollTop;
//             return;
//         }

//         this.currentTween = new tween.Tween({ scrollTop: el.scrollTop })
//             .to({ scrollTop }, this.scrollAnimationTime)
//             .easing(tween.Easing.Quadratic.Out)
//             .onUpdate((data) => {
//                 if (isNaN(data.scrollTop)) {
//                     return;
//                 }
//                 this.renderer.setProperty(el, 'scrollTop', data.scrollTop);
//                 this.refresh(true);
//             })
//             .onStop(() => {
//                 cancelAnimationFrame(animationRequest);
//             })
//             .start();

//         const animate = (time?) => {
//             this.currentTween.update(time);
//             if (this.currentTween._object.scrollTop !== scrollTop) {
//                 this.zone.runOutsideAngular(() => {
//                     animationRequest = requestAnimationFrame(animate);
//                 });
//             }
//         };

//         animate();
//     }

//     private addParentEventHandlers(parentScroll: Element | Window) {
//         this.removeParentEventHandlers();
//         if (parentScroll) {
//             this.zone.runOutsideAngular(() => {
//                 this.disposeScrollHandler = this.renderer.listen(
//                     parentScroll,
//                     'mousewheel',
//                     _.throttle(this.refreshHandler, 20, {
//                         leading: false,
//                         trailing: true,
//                     })
//                 );
//                 this.renderer.listen(
//                     parentScroll,
//                     'scroll',
//                     _.debounce(this.refreshHandler, 150)
//                 );

//                 //this.renderer.listen(parentScroll, 'scroll', _.debounce(_.throttle(this.refreshHandler, 150), 50));

//                 if (parentScroll instanceof Window) {
//                     this.disposeScrollHandler = this.renderer.listen(
//                         'window',
//                         'resize',
//                         _.debounce(this.refreshHandler, 250)
//                     );
//                 }
//             });
//         }
//     }

//     private removeParentEventHandlers() {
//         if (this.disposeScrollHandler) {
//             this.disposeScrollHandler();
//             this.disposeScrollHandler = undefined;
//         }
//         if (this.disposeResizeHandler) {
//             this.disposeResizeHandler();
//             this.disposeResizeHandler = undefined;
//         }
//     }

//     private countItemsPerRow() {
//         if (this.isTable) {
//             return 1;
//         } else {
//             let offsetTop;
//             let itemsPerRow;
//             const children = this.contentElementRef.nativeElement.children;
//             for (
//                 itemsPerRow = 0;
//                 itemsPerRow < children.length;
//                 itemsPerRow++
//             ) {
//                 if (
//                     offsetTop != undefined &&
//                     offsetTop !== children[itemsPerRow].offsetTop
//                 )
//                     break;
//                 offsetTop = children[itemsPerRow].offsetTop;
//             }
//             return itemsPerRow;
//         }
//     }

//     private getElementsOffset(): number {
//         let offsetTop = 0;
//         if (
//             this.containerElementRef &&
//             this.containerElementRef.nativeElement
//         ) {
//             offsetTop += this.containerElementRef.nativeElement.offsetTop;
//         }
//         if (this.parentScroll) {
//             offsetTop += this.element.nativeElement.offsetTop;
//         }
//         return offsetTop;
//     }

//     private calculateDimensions() {
//         const el: Element =
//             this.parentScroll instanceof Window
//                 ? document.body
//                 : this.parentScroll || this.element.nativeElement;
//         const itemCount = this.totalRows;
//         const viewWidth = el.clientWidth - this.scrollbarWidth;
//         const viewHeight = el.clientHeight - this.scrollbarHeight;

//         let contentDimensions;
//         if (this.childWidth == undefined || this.childHeight == undefined) {
//             let content = this.contentElementRef.nativeElement;
//             if (
//                 this.containerElementRef &&
//                 this.containerElementRef.nativeElement
//             ) {
//                 content = this.containerElementRef.nativeElement;
//             }
//             contentDimensions = content.children[0]
//                 ? content.children[0].getBoundingClientRect()
//                 : {
//                     width: viewWidth,
//                     height: viewHeight,
//                 };
//         }

//         const childWidth = this.childWidth || contentDimensions.width;
//         const childHeight = this.childHeight || contentDimensions.height;

//         let itemsPerRow = Math.max(1, this.countItemsPerRow());
//         const itemsPerRowByCalc = Math.max(
//             1,
//             Math.floor(viewWidth / childWidth)
//         );
//         const itemsPerCol = Math.max(1, Math.floor(viewHeight / childHeight));
//         const elScrollTop =
//             this.parentScroll instanceof Window
//                 ? window.pageYOffset ||
//                 document.documentElement.scrollTop ||
//                 document.body.scrollTop ||
//                 0
//                 : el.scrollTop;
//         const scrollTop = Math.max(0, elScrollTop);

//         const scrollHeight =
//             childHeight * Math.floor(itemCount / itemsPerRow) +
//             (itemCount % itemsPerRow != 0 ? childHeight : 0);

//         const ua = navigator.userAgent;
//         /*if (this.isTable && (ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0 || ua.indexOf('Edge/') >= 0)) {
//             scrollHeight += 34;
//         }*/
//         if (
//             itemsPerCol === 1 &&
//             Math.floor((scrollTop / scrollHeight) * itemCount) +
//             itemsPerRowByCalc >=
//             itemCount
//         ) {
//             itemsPerRow = itemsPerRowByCalc;
//         }

//         if (scrollHeight !== this.lastScrollHeight) {
//             this.renderer.setStyle(
//                 this.shimElementRef.nativeElement,
//                 'height',
//                 `${scrollHeight}px`
//             );
//             this.lastScrollHeight = scrollHeight;
//         }

//         return {
//             itemCount: itemCount,
//             viewWidth: viewWidth,
//             viewHeight: viewHeight,
//             childWidth: childWidth,
//             childHeight: childHeight,
//             itemsPerRow: itemsPerRow,
//             itemsPerCol: itemsPerCol,
//             itemsPerRowByCalc: itemsPerRowByCalc,
//             scrollHeight,
//         };
//     }

//     private calculateItems(forceViewportUpdate = false) {
//         if (!this.doNotCheckAngularZone) {
//             NgZone.assertNotInAngularZone();
//         }

//         const el =
//             this.parentScroll instanceof Window
//                 ? document.body
//                 : this.parentScroll || this.element.nativeElement;
//         const d = this.calculateDimensions();

//         //let items = this.items || [];
//         const offsetTop = this.getElementsOffset();
//         let elScrollTop =
//             this.parentScroll instanceof Window
//                 ? window.pageYOffset ||
//                 document.documentElement.scrollTop ||
//                 document.body.scrollTop ||
//                 0
//                 : el.scrollTop;

//         if (elScrollTop > d.scrollHeight) {
//             elScrollTop = d.scrollHeight + offsetTop;
//         }

//         const scrollTop = Math.max(0, elScrollTop - offsetTop);
//         const indexByScrollTop =
//             ((scrollTop / d.scrollHeight) * d.itemCount) / d.itemsPerRow;
//         let end = Math.min(
//             d.itemCount,
//             Math.ceil(indexByScrollTop) * d.itemsPerRow +
//             d.itemsPerRow * (d.itemsPerCol + 1)
//         );

//         let maxStartEnd = end;
//         const modEnd = end % d.itemsPerRow;
//         if (modEnd) {
//             maxStartEnd = end + d.itemsPerRow - modEnd;
//         }
//         const maxStart = Math.max(
//             0,
//             maxStartEnd - d.itemsPerCol * d.itemsPerRow - d.itemsPerRow
//         );
//         let start = Math.min(
//             maxStart,
//             Math.floor(indexByScrollTop) * d.itemsPerRow
//         );

//         const startRow = Math.ceil(start / d.itemsPerRow);

//         const topPadding =
//             this.totalRows === 0
//                 ? 0
//                 : d.childHeight * startRow -
//                 d.childHeight * Math.min(startRow, this.bufferAmount);

//         if (topPadding !== this.lastTopPadding) {
//             this.renderer.setStyle(
//                 this.contentElementRef.nativeElement,
//                 'transform',
//                 `translateY(${topPadding}px)`
//             );
//             this.renderer.setStyle(
//                 this.contentElementRef.nativeElement,
//                 'webkitTransform',
//                 `translateY(${topPadding}px)`
//             );
//             this.lastTopPadding = topPadding;
//         }

//         const buffer = this.bufferAmount * d.itemsPerRow;
//         start = !isNaN(start) ? start : -1;
//         end = !isNaN(end) ? end : -1;
//         start -= buffer;
//         start = Math.max(0, start);
//         end += buffer;
//         end = Math.min(this.totalRows, end);

//         if (
//             start !== this.previousStart ||
//             end !== this.previousEnd ||
//             forceViewportUpdate === true
//         ) {
//             this.zone.run(() => {
//                 // update the scroll list
//                 end = end >= 0 ? end : 0; // To prevent from accidentally selecting the entire array with a negative 1 (-1) in the end position.

//                 //this.viewPortItems = this.items.slice(start, end);
//                 //this.update.emit(this.viewPortItems);

//                 // emit 'start' event
//                 //if (start !== this.previousStart && this.startupLoop === false) {
//                 //    this.start.emit({ start, end });
//                 //}

//                 // emit 'end' event
//                 //if (end !== this.previousEnd && this.startupLoop === false) {
//                 //    this.end.emit({ start, end });
//                 //}

//                 // To know if to add at the start of the list or at the end.
//                 const addAtStart = this.previousEnd >= end;
//                 this.previousStart = start;
//                 this.previousEnd = end;

//                 if (this.startupLoop === true) {
//                     this.refresh();
//                 } else {
//                     const calculatedChildHeight = d.childHeight;
//                     this.change.emit({
//                         start,
//                         end,
//                         addAtStart,
//                         calculatedChildHeight,
//                     });
//                 }
//             });
//         } else if (this.startupLoop === true) {
//             this.startupLoop = false;
//             // Added to know when the scroll is ready (UI elements are displayed already).
//             this.load.emit();
//             this.refresh();
//         }
//     }
// }
