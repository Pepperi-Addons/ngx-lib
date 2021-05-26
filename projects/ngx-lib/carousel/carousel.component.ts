import {
    ElementRef,
    Component,
    Renderer2,
    OnDestroy,
    Input,
    Output,
    AfterViewInit,
    OnChanges,
    EventEmitter,
    ViewChild,
    ContentChildren,
    AfterViewChecked,
    QueryList,
    Inject,
    HostBinding,
    HostListener,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { PepCarouselItemDirective } from './carousel-item.directive';

@Component({
    selector: 'pep-carousel',
    template: `
        <div class="carousel-content" #contentRef>
            <ng-content></ng-content>
        </div>
    `,
    styles: [
        `
            :host {
                overflow: hidden;
                display: block;
            }
            .carousel-content {
                height: 100%;
                overflow: auto;
                white-space: nowrap;
            }
        `,
    ],
})
export class PepCarouselComponent
    implements OnDestroy, AfterViewInit, OnChanges, AfterViewChecked {
    private _index = 0;

    private _scrollbarHidden = false;

    private _disabled = false;

    private _xDisabled = false;

    private _xWheelEnabled = false;

    private _yDisabled = false;

    private _dragDisabled = false;

    private _snapDisabled = false;

    private _snapOffset = 0;

    private _snapDuration = 500;

    private _isDragging = false;

    private _onMouseMoveListener: () => any;

    private _onMouseUpListener: () => any;

    private _onMouseDownListener: () => any;

    private _onScrollListener: () => any;

    private _onDragStartListener: () => any;

    /**
     * Is the user currently pressing the element
     */
    isPressed = false;

    /**
     * Is the user currently scrolling the element
     */
    isScrolling = false;

    scrollTimer: any; // | NodeJS.Timer = -1;

    scrollToTimer: any; // | NodeJS.Timer = -1;

    /**
     * Is the user currently dragging the element
     */
    get isDragging(): boolean {
        return this._isDragging;
    }

    /**
     * The x coordinates on the element
     */
    downX = 0;

    /**
     * The y coordinates on the element
     */
    downY = 0;

    displayType: string | null = 'block';

    elWidth: string | null = null;

    elHeight: string | null = null;

    /**
     * The parentNode of carousel Element
     */
    parentNode: HTMLElement;

    /**
     * The carousel Element
     */

    @ViewChild('contentRef', { static: true }) _contentRef: ElementRef;

    @ContentChildren(PepCarouselItemDirective, { descendants: true })
    _children: QueryList<PepCarouselItemDirective>;

    @HostBinding('style.pointer-events') _pointerEvents = 'auto';

    wrapper: HTMLDivElement | null;

    scrollbarWidth: string | null = null;

    get currIndex() {
        return this._index;
    }
    set currIndex(value) {
        if (value !== this._index) {
            this._index = value;
            this.indexChanged.emit(value);
        }
    }

    isAnimating = false;

    prevChildrenLength = 0;

    indexBound = 0;

    @Output() dsInitialized = new EventEmitter<void>();

    @Output() indexChanged = new EventEmitter<number>();

    @Output() reachesLeftBound = new EventEmitter<boolean>();

    @Output() reachesRightBound = new EventEmitter<boolean>();

    @Output() snapAnimationFinished = new EventEmitter<number>();

    @Output() dragStart = new EventEmitter<void>();

    @Output() dragEnd = new EventEmitter<void>();

    /**
     * Whether the scrollbar is hidden
     */
    @Input('scrollbarHidden')
    get scrollbarHidden() {
        return this._scrollbarHidden;
    }
    set scrollbarHidden(value: boolean) {
        this._scrollbarHidden = value;
    }

    /**
     * Whether horizontally and vertically draging and scrolling is be disabled
     */
    @Input('disabled')
    get disabled() {
        return this._disabled;
    }
    set disabled(value: boolean) {
        this._disabled = value;
    }

    /**
     * Whether horizontally dragging and scrolling is be disabled
     */
    @Input('xDisabled')
    get xDisabled() {
        return this._xDisabled;
    }
    set xDisabled(value: boolean) {
        this._xDisabled = value;
    }

    /**
     * Whether vertically dragging and scrolling events is disabled
     */
    @Input('yDisabled')
    get yDisabled() {
        return this._yDisabled;
    }
    set yDisabled(value: boolean) {
        this._yDisabled = value;
    }

    /**
     * Whether scrolling horizontally with mouse wheel is enabled
     */
    @Input('xWheelEnabled')
    get xWheelEnabled() {
        return this._xWheelEnabled;
    }
    set xWheelEnabled(value: boolean) {
        this._xWheelEnabled = value;
    }

    @Input('dragDisabled')
    get dragDisabled() {
        return this._dragDisabled;
    }
    set dragDisabled(value: boolean) {
        this._dragDisabled = value;
    }

    @Input('snapDisabled')
    get snapDisabled() {
        return this._snapDisabled;
    }
    set snapDisabled(value: boolean) {
        this._snapDisabled = value;
    }

    @Input('snapOffset')
    get snapOffset() {
        return this._snapOffset;
    }
    set snapOffset(value: number) {
        this._snapOffset = value;
    }

    @Input('snapDuration')
    get snapDuration() {
        return this._snapDuration;
    }
    set snapDuration(value: number) {
        this._snapDuration = value;
    }

    constructor(
        @Inject(ElementRef) private _elementRef: ElementRef,
        @Inject(Renderer2) private _renderer: Renderer2,
        @Inject(DOCUMENT) private _document: any
    ) {
        this.scrollbarWidth = `${this.getScrollbarWidth()}px`;
    }

    ngOnChanges() {
        this.setScrollBar();

        if (this.xDisabled || this.disabled || this._scrollbarHidden) {
            this.disableScroll('x');
        } else {
            this.enableScroll('x');
        }

        if (this.yDisabled || this.disabled) {
            this.disableScroll('y');
        } else {
            this.enableScroll('y');
        }
    }

    ngAfterViewInit() {
        // auto assign computed css
        this._renderer.setAttribute(
            this._contentRef.nativeElement,
            'drag-scroll',
            'true'
        );

        this.displayType =
            typeof window !== 'undefined'
                ? window.getComputedStyle(this._elementRef.nativeElement)
                    .display
                : 'block';

        this._renderer.setStyle(
            this._contentRef.nativeElement,
            'display',
            this.displayType
        );
        this._renderer.setStyle(
            this._contentRef.nativeElement,
            'whiteSpace',
            'noWrap'
        );

        // store ele width height for later user
        this.markElDimension();

        this._renderer.setStyle(
            this._contentRef.nativeElement,
            'width',
            this.elWidth
        );
        this._renderer.setStyle(
            this._contentRef.nativeElement,
            'height',
            this.elHeight
        );

        if (this.wrapper) {
            this.checkScrollbar();
        }

        this._onMouseDownListener = this._renderer.listen(
            this._contentRef.nativeElement,
            'mousedown',
            this.onMouseDownHandler.bind(this)
        );
        this._onScrollListener = this._renderer.listen(
            this._contentRef.nativeElement,
            'scroll',
            this.onScrollHandler.bind(this)
        );
        // prevent Firefox from dragging images
        this._onDragStartListener = this._renderer.listen(
            'document',
            'dragstart',
            (e) => {
                e.preventDefault();
            }
        );
        this.checkNavStatus();
        this.dsInitialized.emit();
        this.adjustMarginToLastChild();
    }

    ngAfterViewChecked() {
        // avoid extra checks
        if (this._children.length !== this.prevChildrenLength) {
            this.markElDimension();
            this.checkScrollbar();
            this.prevChildrenLength = this._children.length;
            this.checkNavStatus();
        }
    }

    ngOnDestroy() {
        this._renderer.setAttribute(
            this._contentRef.nativeElement,
            'drag-scroll',
            'false'
        );
        if (this._onMouseDownListener) {
            this._onMouseDownListener = this._onMouseDownListener();
        }
        if (this._onScrollListener) {
            this._onScrollListener = this._onScrollListener();
        }
        if (this._onDragStartListener) {
            this._onDragStartListener = this._onDragStartListener();
        }
    }

    onMouseMoveHandler(event: MouseEvent) {
        this.onMouseMove(event);
    }

    onMouseMove(event: MouseEvent) {
        if (this.isPressed && !this.disabled) {
            // Workaround for prevent scroll stuck if browser lost focus
            // MouseEvent.buttons not support by Safari
            if (!event.buttons && !event.which) {
                return this.onMouseUpHandler(event);
            }

            this._pointerEvents = 'none';
            this._setIsDragging(true);

            // Drag X
            if (!this.xDisabled && !this.dragDisabled) {
                const clientX = (event as MouseEvent).clientX;
                this._contentRef.nativeElement.scrollLeft =
                    this._contentRef.nativeElement.scrollLeft -
                    clientX +
                    this.downX;
                this.downX = clientX;
            }

            // Drag Y
            if (!this.yDisabled && !this.dragDisabled) {
                const clientY = (event as MouseEvent).clientY;
                this._contentRef.nativeElement.scrollTop =
                    this._contentRef.nativeElement.scrollTop -
                    clientY +
                    this.downY;
                this.downY = clientY;
            }
        }
    }

    onMouseDownHandler(event: MouseEvent) {
        const carouselItem: PepCarouselItemDirective | null = this.locateCarouselItem(
            event.target as Element
        );
        if (carouselItem && carouselItem.dragDisabled) {
            return;
        }

        const isTouchEvent = event.type === 'touchstart';

        this._startGlobalListening(isTouchEvent);
        this.isPressed = true;

        const mouseEvent = event as MouseEvent;
        this.downX = mouseEvent.clientX;
        this.downY = mouseEvent.clientY;

        clearTimeout(this.scrollToTimer as number);
    }

    onScrollHandler() {
        this.checkNavStatus();
        if (!this.isPressed && !this.isAnimating && !this.snapDisabled) {
            this.isScrolling = true;
            clearTimeout(this.scrollTimer as number);
            this.scrollTimer = setTimeout(() => {
                this.isScrolling = false;
                this.locateCurrentIndex(true);
            }, 500);
        } else {
            this.locateCurrentIndex();
        }
    }

    onMouseUpHandler(event: MouseEvent) {
        if (this.isPressed) {
            this.isPressed = false;
            this._pointerEvents = 'auto';
            this._setIsDragging(false);
            if (!this.snapDisabled) {
                this.locateCurrentIndex(true);
            } else {
                this.locateCurrentIndex();
            }
            this._stopGlobalListening();
        }
    }

    /*
     * Nav button
     */
    moveLeft() {
        if (this.currIndex !== 0 || this.snapDisabled) {
            this.currIndex--;
            clearTimeout(this.scrollToTimer as number);
            this.scrollTo(
                this._contentRef.nativeElement,
                this.toChildrenLocation(),
                this.snapDuration
            );
        }
    }

    moveRight() {
        const container = this.wrapper || this.parentNode;
        const containerWidth = container ? container.clientWidth : 0;

        if (
            !this.isScrollReachesRightEnd() &&
            this.currIndex <
            this.maximumIndex(containerWidth, this._children.toArray())
        ) {
            this.currIndex++;
            clearTimeout(this.scrollToTimer as number);
            this.scrollTo(
                this._contentRef.nativeElement,
                this.toChildrenLocation(),
                this.snapDuration
            );
        }
    }

    moveTo(index: number) {
        const container = this.wrapper || this.parentNode;
        const containerWidth = container ? container.clientWidth : 0;
        if (
            index >= 0 &&
            index !== this.currIndex &&
            this.currIndex <=
            this.maximumIndex(containerWidth, this._children.toArray())
        ) {
            this.currIndex = Math.min(
                index,
                this.maximumIndex(containerWidth, this._children.toArray())
            );
            clearTimeout(this.scrollToTimer as number);
            this.scrollTo(
                this._contentRef.nativeElement,
                this.toChildrenLocation(),
                this.snapDuration
            );
        }
    }

    checkNavStatus() {
        setTimeout(() => {
            const onlyOneItem = Boolean(this._children.length <= 1);
            const containerIsLargerThanContent = Boolean(
                this._contentRef.nativeElement.scrollWidth <=
                this._contentRef.nativeElement.clientWidth
            );
            if (onlyOneItem || containerIsLargerThanContent) {
                // only one element
                this.reachesLeftBound.emit(true);
                this.reachesRightBound.emit(true);
            } else if (this.isScrollReachesRightEnd()) {
                // reached right end
                this.reachesLeftBound.emit(false);
                this.reachesRightBound.emit(true);
            } else if (
                this._contentRef.nativeElement.scrollLeft === 0 &&
                this._contentRef.nativeElement.scrollWidth >
                this._contentRef.nativeElement.clientWidth
            ) {
                // reached left end
                this.reachesLeftBound.emit(true);
                this.reachesRightBound.emit(false);
            } else {
                // in the middle
                this.reachesLeftBound.emit(false);
                this.reachesRightBound.emit(false);
            }
        }, 0);
    }

    @HostListener('wheel', ['$event'])
    public onWheel(event: WheelEvent) {
        if (this._xWheelEnabled) {
            event.preventDefault();

            if (this._snapDisabled) {
                this._contentRef.nativeElement.scrollBy(event.deltaY, 0);
            } else {
                if (event.deltaY < 0) {
                    this.moveLeft();
                } else if (event.deltaY > 0) {
                    this.moveRight();
                }
            }
        }
    }

    @HostListener('window:resize')
    public onWindowResize() {
        this.refreshWrapperDimensions();
        this.checkNavStatus();
    }

    private _setIsDragging(value: boolean) {
        if (this._isDragging === value) {
            return;
        }

        this._isDragging = value;
        value ? this.dragStart.emit() : this.dragEnd.emit();
    }

    private _startGlobalListening(isTouchEvent: boolean) {
        if (!this._onMouseMoveListener) {
            const eventName = isTouchEvent ? 'touchmove' : 'mousemove';
            this._onMouseMoveListener = this._renderer.listen(
                'document',
                eventName,
                this.onMouseMoveHandler.bind(this)
            );
        }

        if (!this._onMouseUpListener) {
            const eventName = isTouchEvent ? 'touchend' : 'mouseup';
            this._onMouseUpListener = this._renderer.listen(
                'document',
                eventName,
                this.onMouseUpHandler.bind(this)
            );
        }
    }

    private _stopGlobalListening() {
        if (this._onMouseMoveListener) {
            this._onMouseMoveListener = this._onMouseMoveListener();
        }

        if (this._onMouseUpListener) {
            this._onMouseUpListener = this._onMouseUpListener();
        }
    }

    private disableScroll(axis: string): void {
        this._renderer.setStyle(
            this._contentRef.nativeElement,
            `overflow-${axis}`,
            'hidden'
        );
    }

    private enableScroll(axis: string): void {
        this._renderer.setStyle(
            this._contentRef.nativeElement,
            `overflow-${axis}`,
            'auto'
        );
    }

    private hideScrollbar(): void {
        if (
            this._contentRef.nativeElement.style.display !== 'none' &&
            !this.wrapper
        ) {
            this.parentNode = this._contentRef.nativeElement.parentNode;

            // create container element
            this.wrapper = this._renderer.createElement('div');
            this._renderer.addClass(this.wrapper, 'carousel-wrapper');
            // this._renderer.setAttribute(this.wrapper, 'class', 'carousel-wrapper');
            // this._renderer.addClass(this.wrapper, 'carousel-container');

            this.refreshWrapperDimensions();

            this._renderer.setStyle(this.wrapper, 'overflow', 'hidden');

            this._renderer.setStyle(
                this._contentRef.nativeElement,
                'width',
                `calc(100% + ${this.scrollbarWidth})`
            );
            this._renderer.setStyle(
                this._contentRef.nativeElement,
                'height',
                `calc(100% + ${this.scrollbarWidth})`
            );

            // Append container element to component element.
            this._renderer.appendChild(
                this._elementRef.nativeElement,
                this.wrapper
            );

            // Append content element to container element.
            this._renderer.appendChild(
                this.wrapper,
                this._contentRef.nativeElement
            );

            this.adjustMarginToLastChild();
        }
    }

    private showScrollbar(): void {
        if (this.wrapper) {
            this._renderer.setStyle(
                this._contentRef.nativeElement,
                'width',
                '100%'
            );
            this._renderer.setStyle(
                this._contentRef.nativeElement,
                'height',
                this.wrapper.style.height
            );
            if (this.parentNode !== null) {
                this.parentNode.removeChild(this.wrapper);
                this.parentNode.appendChild(this._contentRef.nativeElement);
            }
            this.wrapper = null;

            this.adjustMarginToLastChild();
        }
    }

    private checkScrollbar() {
        if (
            this._contentRef.nativeElement.scrollWidth <=
            this._contentRef.nativeElement.clientWidth
        ) {
            this._renderer.setStyle(
                this._contentRef.nativeElement,
                'height',
                '100%'
            );
        } else {
            this._renderer.setStyle(
                this._contentRef.nativeElement,
                'height',
                `calc(100% + ${this.scrollbarWidth})`
            );
        }
        if (
            this._contentRef.nativeElement.scrollHeight <=
            this._contentRef.nativeElement.clientHeight
        ) {
            this._renderer.setStyle(
                this._contentRef.nativeElement,
                'width',
                '100%'
            );
        } else {
            this._renderer.setStyle(
                this._contentRef.nativeElement,
                'width',
                `calc(100% + ${this.scrollbarWidth})`
            );
        }
    }

    private setScrollBar(): void {
        if (this.scrollbarHidden) {
            this.hideScrollbar();
        } else {
            this.showScrollbar();
        }
    }

    private getScrollbarWidth(): number {
        /**
         * Browser Scrollbar Widths (2016)
         * OSX (Chrome, Safari, Firefox) - 15px
         * Windows XP (IE7, Chrome, Firefox) - 17px
         * Windows 7 (IE10, IE11, Chrome, Firefox) - 17px
         * Windows 8.1 (IE11, Chrome, Firefox) - 17px
         * Windows 10 (IE11, Chrome, Firefox) - 17px
         * Windows 10 (Edge 12/13) - 12px
         */
        const outer = this._renderer.createElement('div');
        this._renderer.setStyle(outer, 'visibility', 'hidden');
        this._renderer.setStyle(outer, 'width', '100px');
        this._renderer.setStyle(outer, 'msOverflowStyle', 'scrollbar'); // needed for WinJS apps
        // document.body.appendChild(outer);
        this._renderer.appendChild(this._document.body, outer);
        // this._renderer.appendChild(this._renderer.selectRootElement('body'), outer);
        const widthNoScroll = outer.offsetWidth;
        // force scrollbars
        this._renderer.setStyle(outer, 'overflow', 'scroll');

        // add innerdiv
        const inner = this._renderer.createElement('div');
        this._renderer.setStyle(inner, 'width', '100%');
        this._renderer.appendChild(outer, inner);

        const widthWithScroll = inner.offsetWidth;

        // remove divs
        this._renderer.removeChild(this._document.body, outer);

        /**
         * Scrollbar width will be 0 on Mac OS with the
         * default "Only show scrollbars when scrolling" setting (Yosemite and up).
         * setting default width to 20;
         */
        return widthNoScroll - widthWithScroll || 20;
    }

    private refreshWrapperDimensions() {
        if (this.wrapper) {
            const height =
                this._elementRef.nativeElement.style.height ||
                this._elementRef.nativeElement.offsetHeight;

            this._renderer.setStyle(this.wrapper, 'width', '100%');
            this._renderer.setStyle(
                this.wrapper,
                'height',
                height === 0 ? 'auto' : height + 'px'
            );
        }
    }

    /*
     * The below solution is heavily inspired from
     * https://gist.github.com/andjosh/6764939
     */
    private scrollTo(element: Element, to: number, duration: number) {
        this.isAnimating = true;
        const start = element.scrollLeft,
            change = to - start - this.snapOffset,
            increment = 20;
        let currentTime = 0;

        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
            t /= d / 2;
            if (t < 1) {
                return (c / 2) * t * t + b;
            }
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        const animateScroll = () => {
            currentTime += increment;
            element.scrollLeft = easeInOutQuad(
                currentTime,
                start,
                change,
                duration
            );
            if (currentTime < duration) {
                this.scrollToTimer = setTimeout(animateScroll, increment);
            } else {
                // run one more frame to make sure the animation is fully finished
                setTimeout(() => {
                    this.isAnimating = false;
                    this.snapAnimationFinished.emit(this.currIndex);
                }, increment);
            }
        };
        animateScroll();
    }

    private locateCurrentIndex(snap?: boolean) {
        this.currentChildWidth(
            (
                currentChildWidth,
                nextChildrenWidth,
                childrenWidth,
                idx: number,
                stop
            ) => {
                if (
                    this._contentRef.nativeElement.scrollLeft >=
                    childrenWidth &&
                    this._contentRef.nativeElement.scrollLeft <=
                    nextChildrenWidth
                ) {
                    if (
                        nextChildrenWidth -
                        this._contentRef.nativeElement.scrollLeft >
                        currentChildWidth / 2 &&
                        !this.isScrollReachesRightEnd()
                    ) {
                        // roll back scrolling
                        if (!this.isAnimating) {
                            this.currIndex = idx;
                        }
                        if (snap) {
                            this.scrollTo(
                                this._contentRef.nativeElement,
                                childrenWidth,
                                this.snapDuration
                            );
                        }
                    } else if (
                        this._contentRef.nativeElement.scrollLeft !== 0
                    ) {
                        // forward scrolling
                        if (!this.isAnimating) {
                            this.currIndex = idx + 1;
                        }
                        if (snap) {
                            this.scrollTo(
                                this._contentRef.nativeElement,
                                childrenWidth + currentChildWidth,
                                this.snapDuration
                            );
                        }
                    }
                    stop();
                } else if (idx + 1 === this._children.length - 1) {
                    // reaches last index
                    if (!this.isAnimating) {
                        this.currIndex = idx + 1;
                    }
                    stop();
                }
            }
        );
    }

    private currentChildWidth(
        cb: (
            currentClildWidth: number,
            nextChildrenWidth: number,
            childrenWidth: number,
            index: number,
            breakFunc: () => void
        ) => void
    ) {
        let childrenWidth = 0;
        let shouldBreak = false;
        const breakFunc = function () {
            shouldBreak = true;
        };
        const childrenArr = this._children.toArray();

        for (let i = 0; i < childrenArr.length; i++) {
            if (i === childrenArr.length - 1) {
                break;
            }
            if (shouldBreak) {
                break;
            }

            const nextChildrenWidth =
                childrenWidth +
                childrenArr[i + 1]._elementRef.nativeElement.clientWidth;
            const currentClildWidth =
                childrenArr[i]._elementRef.nativeElement.clientWidth;
            cb(
                currentClildWidth,
                nextChildrenWidth,
                childrenWidth,
                i,
                breakFunc
            );

            childrenWidth += currentClildWidth;
        }
    }

    private toChildrenLocation(): number {
        let to = 0;
        const childrenArr = this._children.toArray();
        for (let i = 0; i < this.currIndex; i++) {
            to += childrenArr[i]._elementRef.nativeElement.clientWidth;
        }
        return to;
    }

    private locateCarouselItem(
        element: Element
    ): PepCarouselItemDirective | null {
        let item: PepCarouselItemDirective | null = null;
        const childrenArr = this._children.toArray();
        for (let i = 0; i < childrenArr.length; i++) {
            if (element === childrenArr[i]._elementRef.nativeElement) {
                item = childrenArr[i];
            }
        }
        return item;
    }

    private markElDimension() {
        if (this.wrapper) {
            this.elWidth = this.wrapper.style.width;
            this.elHeight = this.wrapper.style.height;
        } else {
            this.elWidth =
                this._elementRef.nativeElement.style.width ||
                this._elementRef.nativeElement.offsetWidth + 'px';
            this.elHeight =
                this._elementRef.nativeElement.style.height ||
                this._elementRef.nativeElement.offsetHeight + 'px';
        }
        const container = this.wrapper || this.parentNode;
        const containerWidth = container ? container.clientWidth : 0;
        if (this._children.length > 1) {
            this.indexBound = this.maximumIndex(
                containerWidth,
                this._children.toArray()
            );
        }
    }

    private maximumIndex(
        containerWidth: number,
        childrenElements: PepCarouselItemDirective[]
    ): number {
        let count = 0;
        let childrenWidth = 0;
        for (let i = 0; i <= childrenElements.length; i++) {
            // last N element
            const carouselItemDirective: PepCarouselItemDirective =
                childrenElements[childrenElements.length - 1 - i];
            if (!carouselItemDirective) {
                break;
            } else {
                const nativeElement =
                    carouselItemDirective._elementRef.nativeElement;
                let itemWidth = nativeElement.clientWidth;
                if (itemWidth === 0 && nativeElement.firstElementChild) {
                    itemWidth =
                        carouselItemDirective._elementRef.nativeElement
                            .firstElementChild.clientWidth;
                }
                childrenWidth += itemWidth;
                if (childrenWidth < containerWidth) {
                    count++;
                } else {
                    break;
                }
            }
        }
        return childrenElements.length - count;
    }

    private isScrollReachesRightEnd(): boolean {
        const scrollLeftPos =
            this._contentRef.nativeElement.scrollLeft +
            this._contentRef.nativeElement.offsetWidth;
        return scrollLeftPos >= this._contentRef.nativeElement.scrollWidth;
    }

    /**
     * adds a margin right style to the last child element which will resolve the issue
     * of last item gets cutoff.
     */
    private adjustMarginToLastChild(): void {
        // if (this._children && this._children.length > 0 && this.hideScrollbar) {
        //     const childrenArr = this._children.toArray();
        //     const lastItem = childrenArr[childrenArr.length - 1]._elementRef.nativeElement;
        //     if (this.wrapper && childrenArr.length > 1) {
        //         this._renderer.setStyle(lastItem, 'margin-right', this.scrollbarWidth);
        //     } else {
        //         this._renderer.setStyle(lastItem, 'margin-right', 0);
        //     }
        // }
    }
}
