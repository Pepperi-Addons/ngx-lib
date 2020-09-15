import {Directive, OnInit, OnDestroy, Input, TemplateRef} from '@angular/core';
import {PortalService} from './portal.service';

@Directive({
    selector: '[pepAttach]',
})
export class AttachDirective implements OnInit, OnDestroy {
    @Input('pepAttach') targetName: string;

    constructor(
        private portalService: PortalService,
        private templateRef: TemplateRef<any>
    ) {}

    ngOnInit(): void {
        this.portalService.attach(this.targetName, this.templateRef);
    }

    ngOnDestroy(): void {
        this.portalService.clear(this.targetName);
    }
}
