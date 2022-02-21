import {
    Directive,
    OnInit,
    Input,
    Renderer2,
    ElementRef,
    Optional,
    Inject,
} from '@angular/core';
import { PepIconType } from './icon-generated.model';
import { PepIconService } from './icon.service';

@Directive({
    selector: '[pepSvgIcon]',
})
export class PepIconDirective implements OnInit {
    @Input('pepSvgIcon') iconName: PepIconType;

    constructor(
        private element: ElementRef,
        private pepIconService: PepIconService
    ) {}

    ngOnInit(): void {
        const svgIcon = this.pepIconService.getSvgIcon(this.iconName);
        this.element.nativeElement.appendChild(svgIcon);

    }
}
