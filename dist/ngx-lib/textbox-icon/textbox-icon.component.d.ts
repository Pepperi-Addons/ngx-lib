import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PepperiTextboxIconComponent {
    value: string;
    label: string;
    type?: string;
    disabled: boolean;
    test: boolean;
    iconClicked: EventEmitter<void>;
    constructor();
    iconButtonClicked(): void;
    static ɵfac: i0.ɵɵFactoryDef<PepperiTextboxIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PepperiTextboxIconComponent, "pep-textbox-icon", never, { "value": "value"; "label": "label"; "type": "type"; "disabled": "disabled"; }, { "iconClicked": "iconClicked"; }, never, never>;
}
