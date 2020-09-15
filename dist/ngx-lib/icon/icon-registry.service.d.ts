import { PepperiIcon } from './icon.model';
import * as i0 from "@angular/core";
export declare class PepperiIconRegistry {
    private registry;
    registerIcons(icons: PepperiIcon[]): void;
    getIcon(iconName: string): string | undefined;
    static ɵfac: i0.ɵɵFactoryDef<PepperiIconRegistry, never>;
    static ɵprov: i0.ɵɵInjectableDef<PepperiIconRegistry>;
}
