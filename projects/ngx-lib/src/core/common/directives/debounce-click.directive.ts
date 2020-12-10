// import { Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
// import { Subject, Subscription } from 'rxjs';
// import { throttleTime  } from 'rxjs/operators';

// @Directive({
//     selector: '[pepPreventDoubleClick]'
// })
// export class PreventDoubleClickDirective implements OnInit, OnDestroy {
//     @Input() throttleTime = 2000;
//     @Output() throttledClick = new EventEmitter();

//     private clicks = new Subject();
//     private subscription: Subscription;

//     constructor() { }

//     ngOnInit(): void {
//         this.subscription = this.clicks.pipe(
//             throttleTime(this.throttleTime)
//           ).subscribe(e => this.emitThrottledClick(e));
//     }

//     emitThrottledClick(e): void {
//         this.throttledClick.emit(e);
//     }

//     ngOnDestroy(): void {
//         this.subscription.unsubscribe();
//     }

//     @HostListener('click', ['$event'])
//     clickEvent(event): void {
//           event.preventDefault();
//           event.stopPropagation();
//           this.clicks.next(event);
//         }
//     }
