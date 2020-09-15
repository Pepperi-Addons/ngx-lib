import { OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { PortalService } from './portal.service';
import * as i0 from "@angular/core";
export declare class AttachDirective implements OnInit, OnDestroy {
    private portalService;
    private templateRef;
    targetName: string;
    constructor(portalService: PortalService, templateRef: TemplateRef<any>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<AttachDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AttachDirective, "[pepAttach]", never, { "targetName": "pepAttach"; }, {}, never>;
}
