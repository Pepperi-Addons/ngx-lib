import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HslColor } from './color-utils';
import { PepColorType } from './color.model';
import * as i0 from "@angular/core";
export declare enum ContrastRatioType {
    AA = 4.5,
    AAA = 7
}
export interface ColorPickerDialogData {
    value: string;
    type: PepColorType;
    showAAComplient: boolean;
    textColor: string;
    contrastRatio: ContrastRatioType;
}
export declare class PepperiColorPickerComponent implements OnInit {
    private dialogRef;
    data: ColorPickerDialogData;
    static CURRENT_HUE: string;
    PepColorType: typeof PepColorType;
    checkAAComplient: boolean;
    constructor(dialogRef: MatDialogRef<PepperiColorPickerComponent>, data: ColorPickerDialogData);
    currentHue: number;
    currentHueMin: number;
    currentHueMax: number;
    currentSaturation: number;
    currentSaturationMin: number;
    currentSaturationMax: number;
    currentLightness: number;
    currentLightnessMin: number;
    currentLightnessMax: number;
    complientColor: string;
    isUserChooseAAComplientColor: boolean;
    ngOnInit(): void;
    initVars(): void;
    setCurrentHueInCss(): void;
    convertValueStringToColor(color: any): void;
    convertColorToValueString(hslColor: HslColor): void;
    onHueChange(event: any): void;
    onSaturationChange(event: any): void;
    onLightnessChange(event: any): void;
    onColorValueChange(event: any): void;
    onSave(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<PepperiColorPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PepperiColorPickerComponent, "ng-component", never, {}, {}, never, never>;
}
