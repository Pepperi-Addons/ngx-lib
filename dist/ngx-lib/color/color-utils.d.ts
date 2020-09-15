export interface RgbColor {
    r?: any;
    g?: any;
    b?: any;
}
export interface HslColor {
    h?: any;
    s?: any;
    l?: any;
}
export interface ClosestColor {
    color: string;
    lightness: number;
}
/**
 * Convert hex string to 6 digits hex string.
 * @param str The string to convert.
 */
export declare function hex2sixDigitHex(str: string): string;
/**
 * Convert rgb color to 6 digits hex string.
 * @param color The rgb color to convert.
 */
export declare function rgb2sixDigitHex(color: RgbColor): string;
/**
 * Convert hex string to rgb color.
 * @param str The hex string to convert.
 */
export declare function hex2rgb(str: string): RgbColor;
export declare function rgbString2hsl(str: string): HslColor;
export declare function rgb2hsl({ r, g, b }: RgbColor): HslColor;
export declare function hslString2hsl(str: string): HslColor;
export declare function hsl2rgb({ h, s, l }: HslColor): RgbColor;
export declare function hex2hsl(str: string): HslColor;
export declare function hsl2hex(hsl: HslColor): string;
export declare function relativeLuminance({ r, g, b }: RgbColor): number;
export declare function contrast(str1: string, str2: string): number;
export declare function findClosestAccessibleDarkerColor(adjustableColor: string, otherColor: string, contrastRatio: number): ClosestColor;
export declare function findClosestAccessibleLighterColor(adjustableColor: string, otherColor: string, contrastRatio: number): ClosestColor;
export declare function findClosestAccessibleColor(adjustableColor: string, otherColor: string, contrastRatio: number): string;
export declare function convertHslToStringHsl(hsl: HslColor): string;
