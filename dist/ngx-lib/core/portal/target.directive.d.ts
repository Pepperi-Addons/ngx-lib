import { OnInit, ViewContainerRef } from '@angular/core';
import { PortalService } from './portal.service';
import * as i0 from "@angular/core";
export declare class TargetDirective implements OnInit {
    private portalService;
    private viewContainer;
    targetName: string;
    constructor(portalService: PortalService, viewContainer: ViewContainerRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<TargetDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<TargetDirective, "[pepTarget]", never, { "targetName": "pepTarget"; }, {}, never>;
}
