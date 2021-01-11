import { Directive, OnInit, Input, ViewContainerRef } from '@angular/core';
import { PepPortalService } from './portal.service';

@Directive({
    selector: '[pepTarget]',
})
export class PepTargetDirective implements OnInit {
    @Input('pepTarget') targetName: string;

    constructor(
        private portalService: PepPortalService,
        private viewContainer: ViewContainerRef
    ) {}

    ngOnInit(): void {
        this.portalService.addTarget(this.targetName, this.viewContainer);
    }
}
