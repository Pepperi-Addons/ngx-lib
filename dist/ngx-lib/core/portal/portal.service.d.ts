import { TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PortalService {
    private targets;
    constructor();
    addTarget(targetName: string, viewContainer: ViewContainerRef): void;
    attach(targetName: string, template: TemplateRef<any>): void;
    clear(targetName: string): void;
    private getTarget;
    static ɵfac: i0.ɵɵFactoryDef<PortalService, never>;
    static ɵprov: i0.ɵɵInjectableDef<PortalService>;
}
