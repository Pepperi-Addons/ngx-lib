import { DOCUMENT } from '@angular/common';
import {
    Directive,
    ElementRef,
    HostListener,
    Inject,
    Input,
    OnInit,
    Optional,
    Renderer2,
} from '@angular/core';
import { PepCustomizationService } from '../../customization/customization.service';
import { PepUtilitiesService } from '../services/utilities.service';

@Directive({
    selector: '[pepDivLoader]',
})
export class PepDivLoaderDirective implements OnInit {
    @Input() loaderColor = null;
    @Input() loaderWidth = '5rem';
    @Input() loaderHeight = 'inherit';
    
    private svgIcon: SVGElement;

    constructor(
        private renderer: Renderer2,
        private element: ElementRef,
        private utilitiesService: PepUtilitiesService,
        private customizationService: PepCustomizationService,
        @Optional() @Inject(DOCUMENT) private document: any
    ) {}

    ngOnInit(): void {
        if (!this.loaderColor) {
            this.loaderColor = this.customizationService?.getLoadingSpinnerColor();
        }

        this.setDivStyle();
        const svgData =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid" class="lds-ripple" style="background:0 0; "><circle cx="64" cy="64" r="0" fill="none" stroke-width="10"><animate attributeName="r" calcMode="spline" values="0;59" keyTimes="0;1" dur="2.4" keySplines="0 0.3 0.8 0.8" begin="-1.6s" repeatCount="indefinite"/><animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="2.4" keySplines="0.3 0 0.8 1" begin="-1.6s" repeatCount="indefinite"/></circle><circle cx="64" cy="64" r="0" fill="none" stroke-width="10"><animate attributeName="r" calcMode="spline" values="0;59" keyTimes="0;1" dur="2.4" keySplines="0 0.3 0.8 0.8" begin="-0.8s" repeatCount="indefinite"/><animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="2.4" keySplines="0.3 0 0.8 1" begin="-0.8s" repeatCount="indefinite"/></circle><circle cx="64" cy="64" r="0" fill="none" stroke-width="10"><animate attributeName="r" calcMode="spline" values="0;59" keyTimes="0;1" dur="2.4" keySplines="0 0.3 0.8 0.8" begin="0s" repeatCount="indefinite"/><animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="2.4" keySplines="0.3 0 0.8 1" begin="0s" repeatCount="indefinite"/></circle></svg>';
        this.svgIcon = this.utilitiesService.getSvgElementFromString(
            this.document,
            svgData
        );

        this.setIconStyle();
        this.renderer.appendChild(this.element.nativeElement, this.svgIcon);
    }

    private setDivStyle(): void {
        this.renderer.setStyle(this.element.nativeElement, 'display', 'flex');
        this.renderer.setStyle(
            this.element.nativeElement,
            'justify-content',
            'center'
        );
        this.renderer.setStyle(
            this.element.nativeElement,
            'align-items',
            'center'
        );
    }

    private setIconStyle(): void {
        if (this.loaderColor) {
            this.renderer.setStyle(this.svgIcon, 'stroke', this.loaderColor);
        }

        this.renderer.setStyle(this.svgIcon, 'width', this.loaderWidth);
        this.renderer.setStyle(this.svgIcon, 'height', this.loaderHeight);
        this.renderer.addClass(this.svgIcon, 'svg-icon');
        this.renderer.addClass(this.svgIcon, 'stroke');
    }
}
