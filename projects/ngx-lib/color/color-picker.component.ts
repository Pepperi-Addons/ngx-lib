import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import {
//     hex2hsl,
//     hslString2hsl,
//     rgbString2hsl,
//     IPepHslColor,
//     findClosestAccessibleColor,
//     hsl2hex,
//     convertHslToStringHsl,
// } from './color-utils';
import { PepColorService, IPepHslColor } from '@pepperi-addons/ngx-lib';

import { PepColorType } from './color.model';

enum PepContrastRatioType {
    AA = 4.5,
    AAA = 7,
}

interface IPepColorPickerDialogData {
    value: string;
    type: PepColorType;
    showAAComplient: boolean;
    textColor: string;
    contrastRatio: PepContrastRatioType;
}

@Component({
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
})
export class PepColorPickerComponent implements OnInit {
    static CURRENT_HUE = '--pep-color-picker-current-hue';
    private readonly defaultColor = '#ccc';

    checkAAComplient = true;

    constructor(
        private colorService: PepColorService,
        private dialogRef: MatDialogRef<PepColorPickerComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IPepColorPickerDialogData
    ) {
        this.data.type = data ? data.type : 'any';
        this.data.showAAComplient = !data
            ? false
            : data.showAAComplient ?? true;
        this.data.textColor = data && data.textColor ? data.textColor : '#fff';
        this.data.contrastRatio =
            data && data.contrastRatio
                ? data.contrastRatio
                : PepContrastRatioType.AA;
    }

    currentHue = 100;
    currentHueMin = 0;
    currentHueMax = 360;

    currentSaturation = 50;
    currentSaturationMin = 0;
    currentSaturationMax = 100;

    currentLightness = 50;
    currentLightnessMin = 0;
    currentLightnessMax = 100;

    complientColor: string;
    isUserChooseAAComplientColor: boolean;

    ngOnInit(): void {
        this.initVars();
        this.checkAAComplient = this.data.showAAComplient;
        this.convertValueStringToColor(this.data.value);
    }

    initVars(): void {
        if (this.data.type === 'main') {
            this.currentLightnessMax = 10;
            this.currentLightness = 5;
        } else if (this.data.type === 'success') {
            this.currentHueMin = 70;
            this.currentHueMax = 150;
            this.currentHue = 100;

            this.currentSaturationMin = 50;
            this.currentSaturationMax = 100;
            this.currentSaturation = 50;

            this.currentLightnessMin = 10;
            this.currentLightnessMax = 65;
            this.currentLightness = 50;
        } else if (this.data.type === 'caution') {
            this.currentHueMin = -20;
            this.currentHueMax = 20;
            this.currentHue = 10;

            this.currentSaturationMin = 75;
            this.currentSaturationMax = 100;
            this.currentSaturation = 75;

            this.currentLightnessMin = 25;
            this.currentLightnessMax = 75;
            this.currentLightness = 50;
        }
    }

    setCurrentHueInCss(): void {
        document.documentElement.style.setProperty(
            PepColorPickerComponent.CURRENT_HUE,
            this.currentHue.toString()
        );
    }

    convertValueStringToColor(color): void {
        if (color.indexOf('hsl') === 0) {
            const hsl = this.colorService.hslString2hsl(color);
            this.convertColorToValueString(hsl);
        } else if (color.indexOf('rgb') === 0) {
            const hsl = this.colorService.rgbString2hsl(color);
            this.convertColorToValueString(hsl);
        } else if (color.indexOf('#') === 0) {
            const hsl = this.colorService.hex2hsl(color);
            this.convertColorToValueString(hsl);
        } else {
            // Handle default.
            const hsl = this.colorService.hex2hsl(this.defaultColor);
            this.convertColorToValueString(hsl);
        }

        this.setCurrentHueInCss();
    }

    convertColorToValueString(hslColor: IPepHslColor): void {
        // Regular hue
        if (
            hslColor.h >= this.currentHueMin &&
            hslColor.h <= this.currentHueMax
        ) {
            this.currentHue = hslColor.h;
        } else if (
            this.currentHueMin < 0 &&
            hslColor.h >= 0 &&
            hslColor.h <= 360
        ) {
            // For min with - (change to the other side of the circle)
            hslColor.h = hslColor.h - 360;

            if (
                hslColor.h >= this.currentHueMin &&
                hslColor.h <= this.currentHueMax
            ) {
                this.currentHue = hslColor.h;
            }
        }

        this.currentSaturation =
            hslColor.s >= this.currentSaturationMin &&
                hslColor.s <= this.currentSaturationMax
                ? hslColor.s
                : this.currentSaturation;

        this.currentLightness =
            hslColor.l >= this.currentLightnessMin &&
                hslColor.l <= this.currentLightnessMax
                ? hslColor.l
                : this.currentLightness;

        // Write the value (if hue is changed to the other side of the circle return it back).
        const hsl = {
            h: this.currentHue,
            s: this.currentSaturation,
            l: this.currentLightness,
        };
        this.data.value = this.colorService.convertHslToStringHsl(hsl);

        // Check the contrast ratio - set the closest accessible color to complientColor
        // and update isUserChooseAAComplientColor.
        const adjustableColor = this.colorService.hsl2hex(hsl);
        const closestHex = this.colorService.findClosestAccessibleColor(
            adjustableColor,
            this.data.textColor,
            this.data.contrastRatio
        );

        this.isUserChooseAAComplientColor = adjustableColor === closestHex;
        this.complientColor = this.colorService.convertHslToStringHsl(this.colorService.hex2hsl(closestHex));
    }

    onHueChange(event): void {
        this.convertColorToValueString({ h: event.value });
        this.setCurrentHueInCss();
    }

    onSaturationChange(event): void {
        // this.currentSaturation = event.value;
        this.convertColorToValueString({ s: event.value });
    }

    onLightnessChange(event): void {
        // this.currentLightness = event.value;
        this.convertColorToValueString({
            l:
                this.currentLightnessMax -
                event.value +
                this.currentLightnessMin,
        });
    }

    onColorValueChange(event): void {
        this.convertValueStringToColor(event.value);
    }

    onSave(event): void {
        const color = this.checkAAComplient
            ? this.complientColor
            : this.data.value;

        // this.notify.emit({ key: this.key, value: color });
        this.dialogRef.close(color);
    }
}
