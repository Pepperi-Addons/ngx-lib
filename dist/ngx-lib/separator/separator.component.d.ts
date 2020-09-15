import { OnInit, Renderer2, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LAYOUT_TYPE } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
export declare class PepperiSeparatorComponent implements OnInit {
    private renderer;
    private element;
    key: string;
    label: string;
    xAlignment: string;
    controlType: string;
    form: FormGroup;
    layoutType: LAYOUT_TYPE;
    LAYOUT_TYPE: typeof LAYOUT_TYPE;
    standAlone: boolean;
    constructor(renderer: Renderer2, element: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<PepperiSeparatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PepperiSeparatorComponent, "pep-separator", never, { "key": "key"; "label": "label"; "xAlignment": "xAlignment"; "form": "form"; "layoutType": "layoutType"; }, {}, never, never>;
}
