// import { Directive, HostListener, Input, OnInit } from '@angular/core';
// import { PepScrollToService } from './scroll-to.service';

// @Directive({
//     selector: '[pepScrollTo]'
// })
// export class PepScrollToDirective implements OnInit {
//     @Input('scrollTo') scrollTo: any;
//     @Input('scrollDuration') scrollDuration: number;
//     @Input('scrollOffset') scrollOffset: number;

//     constructor(private scrollToService: PepScrollToService) { }

//     ngOnInit(): void {
//         this.scrollDuration = (!this.scrollDuration) ? 500 : this.scrollDuration;
//         this.scrollOffset = (!this.scrollOffset) ? 0 : this.scrollOffset;
//     }

//     @HostListener('mousedown')
//     onMouseClick() {
//         this.scrollToService.scrollWindowToElement(this.scrollTo, this.scrollDuration, this.scrollOffset);
//     }
// }
