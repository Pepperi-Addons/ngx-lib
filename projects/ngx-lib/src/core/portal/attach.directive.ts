import {
    Directive,
    OnInit,
    OnDestroy,
    Input,
    TemplateRef,
} from '@angular/core';
import { PepPortalService } from './portal.service';

@Directive({
    selector: '[pepAttach]',
})
export class PepAttachDirective implements OnInit, OnDestroy {
    @Input('pepAttach') targetName: string;

    constructor(
        private portalService: PepPortalService,
        private templateRef: TemplateRef<any>
    ) {}

    ngOnInit(): void {
        this.portalService.attach(this.targetName, this.templateRef);
    }

    ngOnDestroy(): void {
        this.portalService.clear(this.targetName);
    }
}
