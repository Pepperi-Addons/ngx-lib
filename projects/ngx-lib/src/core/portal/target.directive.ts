import {Directive, OnInit, Input, ViewContainerRef} from '@angular/core';
import {PortalService} from './portal.service';

@Directive({
    selector: '[pepTarget]',
})
export class TargetDirective implements OnInit {
    @Input('pepTarget') targetName: string;

    constructor(
        private portalService: PortalService,
        private viewContainer: ViewContainerRef
    ) {}

    ngOnInit(): void {
        this.portalService.addTarget(this.targetName, this.viewContainer);
    }
}
