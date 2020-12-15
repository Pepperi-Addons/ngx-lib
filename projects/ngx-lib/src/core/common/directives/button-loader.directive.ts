import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Optional, Renderer2 } from '@angular/core';
import { UtilitiesService } from '../services/utilities.service';

@Directive({
    selector: '[pepButtonLoader]'
})
export class ButtonLoaderDirective implements OnInit {
    @Input() loaderTime = 0;
    @Input() loaderColor = null;
    @Input() loaderWidth = '1.5rem';
    @Input() loaderHeight = 'inherit';
    @Input() ignoreDisabledStyle = false;

    private _isLoading = false;
    private _finish = null;
    @Input()
    set finish(value: boolean) {
        this._finish = value;

        if (this._isLoading && value) {
            this.toggleLoading(false);
        }
    }
    
    private svgIcon: SVGElement;

    constructor(
        private renderer: Renderer2,
        private element: ElementRef,
        private utilitiesService: UtilitiesService,
        @Optional() @Inject(DOCUMENT) private document: any) { }

    @HostListener('click', ['$event'])
    clickEvent(event): void {
        this.toggleLoading(true);
        
        // In case that the finish input is supplied - init it.
        if (this._finish !== null) {
            this._finish = false;
        } else {
            // Init loaderTime if is not supplied (3000 - default 3 seconds).
            if (this.loaderTime === 0) {
                this.loaderTime = 3000;
            }
        }

        if (this.loaderTime > 0) {
            setTimeout(() => {
                this.toggleLoading(false);

            }, this.loaderTime);
        }
    }

    ngOnInit(): void {
        this.setButtonStyle();
        const svgData = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid" class="lds-ripple" style="background:0 0; "><circle cx="64" cy="64" r="0" fill="none" stroke-width="10"><animate attributeName="r" calcMode="spline" values="0;59" keyTimes="0;1" dur="2.4" keySplines="0 0.3 0.8 0.8" begin="-1.6s" repeatCount="indefinite"/><animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="2.4" keySplines="0.3 0 0.8 1" begin="-1.6s" repeatCount="indefinite"/></circle><circle cx="64" cy="64" r="0" fill="none" stroke-width="10"><animate attributeName="r" calcMode="spline" values="0;59" keyTimes="0;1" dur="2.4" keySplines="0 0.3 0.8 0.8" begin="-0.8s" repeatCount="indefinite"/><animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="2.4" keySplines="0.3 0 0.8 1" begin="-0.8s" repeatCount="indefinite"/></circle><circle cx="64" cy="64" r="0" fill="none" stroke-width="10"><animate attributeName="r" calcMode="spline" values="0;59" keyTimes="0;1" dur="2.4" keySplines="0 0.3 0.8 0.8" begin="0s" repeatCount="indefinite"/><animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="2.4" keySplines="0.3 0 0.8 1" begin="0s" repeatCount="indefinite"/></circle></svg>';
        this.svgIcon = this.utilitiesService.getSvgElementFromString(this.document, svgData);
        this.setIconStyle();
    }

    private setButtonStyle(): void {
        this.renderer.setStyle(this.element.nativeElement, 'display', 'flex');
        this.renderer.setStyle(this.element.nativeElement, 'justify-content', 'center');
        this.renderer.setStyle(this.element.nativeElement, 'align-items', 'center');

        if (this.ignoreDisabledStyle) {
            this.renderer.addClass(this.element.nativeElement, 'ignore-disabled');
        }
    }

    private setIconStyle(): void {
        if (this.loaderColor) {
            this.renderer.setStyle(this.svgIcon, 'stroke', this.loaderColor);
        }

        this.renderer.setStyle(this.svgIcon, 'width', this.loaderWidth);
        this.renderer.setStyle(this.svgIcon, 'height', this.loaderHeight);
        this.renderer.setStyle(this.svgIcon, 'margin-inline-start', '0.5rem');
        this.renderer.addClass(this.svgIcon, 'svg-icon');
        this.renderer.addClass(this.svgIcon, 'stroke');
    }

    private toggleLoading(show: boolean): void {
        if (show) {
            this._isLoading = true;
            this.renderer.appendChild(this.element.nativeElement, this.svgIcon);
            this.renderer.setAttribute(this.element.nativeElement, 'disabled', 'true');
            this.renderer.addClass(this.element.nativeElement, 'lock-events');
        } else {
            if (this._isLoading) {
                this._isLoading = false;
                this.renderer.removeChild(this.element.nativeElement, this.svgIcon);
                this.renderer.removeAttribute(this.element.nativeElement, 'disabled');
                this.renderer.removeClass(this.element.nativeElement, 'lock-events');
            }
        }
    }
}
