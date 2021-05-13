// const FLOAT_REGEX = /^\d+(\.\d+)?$/;
// const THREE_DIGIT_HEX_COLOR_REGEX = /^[0-9a-fA-F]{3}$/;
// const THREE_DIGIT_HEX_COLOR_WITH_HASH_REGEX = /^#[0-9a-fA-F]{3}$/;
// const SIX_DIGIT_HEX_COLOR_REGEX = /^[0-9a-fA-F]{6}$/;
// const SIX_DIGIT_HEX_COLOR_WITH_HASH_REGEX = /^#[0-9a-fA-F]{6}$/;

// export interface IPepRgbColor {
//     r?: any;
//     g?: any;
//     b?: any;
// }

// export interface IPepHslColor {
//     h?: any;
//     s?: any;
//     l?: any;
// }

// export interface IPepClosestColor {
//     color: string;
//     lightness: number;
// }

// /**
//  * Convert hex string to 6 digits hex string.
//  * @param str The string to convert.
//  */
// export function hex2sixDigitHex(str: string): string {
//     if (!str) {
//         return null;
//     }

//     str = str.trim();

//     if (SIX_DIGIT_HEX_COLOR_WITH_HASH_REGEX.test(str)) {
//         return str;
//     }

//     if (SIX_DIGIT_HEX_COLOR_REGEX.test(str)) {
//         return '#' + str;
//     }

//     if (THREE_DIGIT_HEX_COLOR_WITH_HASH_REGEX.test(str)) {
//         return '#' + str[1] + str[1] + str[2] + str[2] + str[3] + str[3];
//     }

//     if (THREE_DIGIT_HEX_COLOR_REGEX.test(str)) {
//         return '#' + str[0] + str[0] + str[1] + str[1] + str[2] + str[2];
//     }

//     return null;
// }

// /**
//  * Convert rgb color to 6 digits hex string.
//  * @param color The rgb color to convert.
//  */
// export function rgb2sixDigitHex(color: IPepRgbColor): string {
//     color.r = color.r.toString(16);
//     color.g = color.g.toString(16);
//     color.b = color.b.toString(16);

//     if (color.r.length === 1) {
//         color.r = '0' + color.r;
//     }

//     if (color.g.length === 1) {
//         color.g = '0' + color.g;
//     }

//     if (color.b.length === 1) {
//         color.b = '0' + color.b;
//     }

//     return '#' + color.r + color.g + color.b;
// }

// /**
//  * Convert hex string to rgb color.
//  * @param str The hex string to convert.
//  */
// export function hex2rgb(str: string): IPepRgbColor {
//     const sixDigitHex = hex2sixDigitHex(str);

//     if (sixDigitHex === null) {
//         return null;
//     }

//     return {
//         r: parseInt(sixDigitHex.slice(1, 3), 16),
//         g: parseInt(sixDigitHex.slice(3, 5), 16),
//         b: parseInt(sixDigitHex.slice(5, 7), 16),
//     };
// }

// export function rgbString2hsl(str: string): IPepHslColor {
//     const sep = str.indexOf(',') > -1 ? ',' : ' ';
//     const rgbArr = str.substr(4).split(')')[0].split(sep);

//     const r = rgbArr[0];
//     const g = rgbArr[1].substr(0, rgbArr[1].length).trim();
//     const b = rgbArr[2].substr(0, rgbArr[2].length).trim();

//     return rgb2hsl({ r, g, b });
// }

// export function rgb2hsl({ r, g, b }: IPepRgbColor): IPepHslColor {
//     r /= 255;
//     g /= 255;
//     b /= 255;

//     // Find greatest and smallest channel values
//     const cmin = Math.min(r, g, b);
//     const cmax = Math.max(r, g, b);
//     const delta = cmax - cmin;

//     let h = 0;
//     let s = 0;
//     let l = 0;

//     if (delta === 0) {
//         h = 0;
//     } else if (cmax === r) {
//         h = ((g - b) / delta) % 6;
//     } else if (cmax === g) {
//         h = (b - r) / delta + 2;
//     } else {
//         h = (r - g) / delta + 4;
//     }

//     h = Math.round(h * 60);

//     if (h < 0) {
//         h += 360;
//     }

//     l = (cmax + cmin) / 2;
//     s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);

//     return { h, s, l };
// }

// export function hslString2hsl(str: string): IPepHslColor {
//     const sep = str.indexOf(',') > -1 ? ',' : ' ';
//     const hslArr = str.substr(4).split(')')[0].split(sep);

//     let h: any = hslArr[0];
//     let s = hslArr[1].substr(0, hslArr[1].length).trim();
//     let l = hslArr[2].substr(0, hslArr[2].length).trim();

//     // Strip label and convert to degrees (if necessary)
//     if (h.indexOf('deg') > -1) {
//         h = h.substr(0, h.length - 3);
//     } else if (h.indexOf('rad') > -1) {
//         h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
//     } else if (h.indexOf('turn') > -1) {
//         h = Math.round(h.substr(0, h.length - 4) * 360);
//     }

//     // Keep hue fraction of 360 if ending up over
//     if (h >= 360) {
//         h %= 360;
//     }

//     // Remove the %
//     if (s.indexOf('%') > -1) {
//         s = s.replace(/%/g, '');
//     }

//     // Remove the %
//     if (l.indexOf('%') > -1) {
//         l = l.replace(/%/g, '');
//     }

//     return { h, s, l };
// }

// export function hsl2rgb({ h, s, l }: IPepHslColor): IPepRgbColor {
//     let r;
//     let g;
//     let b;

//     if (!isFinite(h)) {
//         h = 0;
//     }

//     if (!isFinite(s)) {
//         s = 0;
//     }

//     if (!isFinite(l)) {
//         l = 0;
//     }

//     h /= 60;

//     if (h < 0) {
//         h = 6 - (-h % 6);
//     }

//     h %= 6;

//     s = Math.max(0, Math.min(1, s / 100));
//     l = Math.max(0, Math.min(1, l / 100));

//     const c = (1 - Math.abs(2 * l - 1)) * s;
//     const x = c * (1 - Math.abs((h % 2) - 1));

//     if (h < 1) {
//         r = c;
//         g = x;
//         b = 0;
//     } else if (h < 2) {
//         r = x;
//         g = c;
//         b = 0;
//     } else if (h < 3) {
//         r = 0;
//         g = c;
//         b = x;
//     } else if (h < 4) {
//         r = 0;
//         g = x;
//         b = c;
//     } else if (h < 5) {
//         r = x;
//         g = 0;
//         b = c;
//     } else {
//         r = c;
//         g = 0;
//         b = x;
//     }

//     const m = l - c / 2;
//     r = Math.round((r + m) * 255);
//     g = Math.round((g + m) * 255);
//     b = Math.round((b + m) * 255);

//     return { r, g, b };
// }

// export function hex2hsl(str: string): IPepHslColor {
//     const sixDigitHex = hex2sixDigitHex(str);

//     if (sixDigitHex === null) {
//         return null;
//     }

//     const rgb = hex2rgb(sixDigitHex);

//     if (rgb === null) {
//         return null;
//     }

//     return rgb2hsl(rgb);
// }

// export function hsl2hex(hsl: IPepHslColor): string {
//     const rgb = hsl2rgb(hsl);

//     return rgb2sixDigitHex(rgb);
// }

// export function relativeLuminance({ r, g, b }: IPepRgbColor): number {
//     [r, g, b] = [r, g, b].map((c) => {
//         c = c / 255;

//         if (c <= 0.03928) {
//             return c / 12.92;
//         }

//         return Math.pow((c + 0.055) / 1.055, 2.4);
//     });

//     return 0.2126 * r + 0.7152 * g + 0.0722 * b;
// }

// export function contrast(str1: string, str2: string): number {
//     const L1 = relativeLuminance(hex2rgb(str1));
//     const L2 = relativeLuminance(hex2rgb(str2));

//     if (L1 < L2) {
//         return (L2 + 0.05) / (L1 + 0.05);
//     }

//     return (L1 + 0.05) / (L2 + 0.05);
// }

// export function findClosestAccessibleDarkerColor(
//     adjustableColor: string,
//     otherColor: string,
//     contrastRatio: number
// ): IPepClosestColor {
//     const { h, s, l } = hex2hsl(adjustableColor);

//     if (contrast(adjustableColor, otherColor) >= contrastRatio) {
//         return {
//             color: adjustableColor,
//             lightness: l,
//         };
//     }

//     let minColor = hsl2hex({ h, s, l: 0 });

//     if (contrast(minColor, otherColor) < contrastRatio) {
//         return null;
//     }

//     let min = 0;
//     let max = l;
//     let maxColor = hsl2hex({ h, s, l });
//     let lastMinColor;
//     let lastMaxColor;
//     let lTemp;

//     while (minColor !== lastMinColor || maxColor !== lastMaxColor) {
//         lastMinColor = minColor;
//         lastMaxColor = maxColor;

//         lTemp = (min + max) / 2;
//         adjustableColor = hsl2hex({ h, s, l: lTemp });

//         if (contrast(adjustableColor, otherColor) < contrastRatio) {
//             max = lTemp;
//             maxColor = hsl2hex({ h, s, l: lTemp });
//         } else {
//             min = lTemp;
//             minColor = hsl2hex({ h, s, l: lTemp });
//         }
//     }

//     return {
//         color: minColor,
//         lightness: min,
//     };
// }

// export function findClosestAccessibleLighterColor(
//     adjustableColor: string,
//     otherColor: string,
//     contrastRatio: number
// ): IPepClosestColor {
//     const { h, s, l } = hex2hsl(adjustableColor);

//     if (contrast(adjustableColor, otherColor) >= contrastRatio) {
//         return {
//             color: adjustableColor,
//             lightness: l,
//         };
//     }

//     let maxColor = hsl2hex({ h, s, l: 100 });

//     if (contrast(maxColor, otherColor) < contrastRatio) {
//         return null;
//     }

//     let min = l;
//     let max = 100;
//     let minColor = hsl2hex({ h, s, l });
//     let lastMinColor;
//     let lastMaxColor;
//     let lTemp;

//     while (minColor !== lastMinColor || maxColor !== lastMaxColor) {
//         lastMinColor = minColor;
//         lastMaxColor = maxColor;

//         lTemp = (min + max) / 2;
//         adjustableColor = hsl2hex({ h, s, l: lTemp });

//         if (contrast(adjustableColor, otherColor) < contrastRatio) {
//             min = lTemp;
//             minColor = hsl2hex({ h, s, l: lTemp });
//         } else {
//             max = lTemp;
//             maxColor = hsl2hex({ h, s, l: lTemp });
//         }
//     }

//     return {
//         color: maxColor,
//         lightness: max,
//     };
// }

// export function findClosestAccessibleColor(
//     adjustableColor: string,
//     otherColor: string,
//     contrastRatio: number
// ): string {
//     const closestDarkerColor: IPepClosestColor = findClosestAccessibleDarkerColor(
//         adjustableColor,
//         otherColor,
//         contrastRatio
//     );
//     const closestLighterColor: IPepClosestColor = findClosestAccessibleLighterColor(
//         adjustableColor,
//         otherColor,
//         contrastRatio
//     );

//     if (closestDarkerColor === null) {
//         if (closestLighterColor === null) {
//             return null;
//         }

//         return closestLighterColor.color;
//     }

//     if (closestLighterColor === null) {
//         return closestDarkerColor.color;
//     }

//     const { l } = hex2hsl(adjustableColor);

//     if (closestLighterColor.lightness - l < l - closestDarkerColor.lightness) {
//         return closestLighterColor.color;
//     }

//     return closestDarkerColor.color;
// }

// export function convertHslToStringHsl(hsl: IPepHslColor): string {
//     return (
//         'hsl(' +
//         (hsl.h < 0 ? hsl.h + 360 : hsl.h) +
//         ', ' +
//         hsl.s +
//         '%, ' +
//         hsl.l +
//         '%)'
//     );
// }
