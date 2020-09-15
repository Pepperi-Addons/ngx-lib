const FLOAT_REGEX = /^\d+(\.\d+)?$/;
const THREE_DIGIT_HEX_COLOR_REGEX = /^[0-9a-fA-F]{3}$/;
const THREE_DIGIT_HEX_COLOR_WITH_HASH_REGEX = /^#[0-9a-fA-F]{3}$/;
const SIX_DIGIT_HEX_COLOR_REGEX = /^[0-9a-fA-F]{6}$/;
const SIX_DIGIT_HEX_COLOR_WITH_HASH_REGEX = /^#[0-9a-fA-F]{6}$/;
/**
 * Convert hex string to 6 digits hex string.
 * @param str The string to convert.
 */
export function hex2sixDigitHex(str) {
    if (!str) {
        return null;
    }
    str = str.trim();
    if (SIX_DIGIT_HEX_COLOR_WITH_HASH_REGEX.test(str)) {
        return str;
    }
    if (SIX_DIGIT_HEX_COLOR_REGEX.test(str)) {
        return '#' + str;
    }
    if (THREE_DIGIT_HEX_COLOR_WITH_HASH_REGEX.test(str)) {
        return '#' + str[1] + str[1] + str[2] + str[2] + str[3] + str[3];
    }
    if (THREE_DIGIT_HEX_COLOR_REGEX.test(str)) {
        return '#' + str[0] + str[0] + str[1] + str[1] + str[2] + str[2];
    }
    return null;
}
/**
 * Convert rgb color to 6 digits hex string.
 * @param color The rgb color to convert.
 */
export function rgb2sixDigitHex(color) {
    color.r = color.r.toString(16);
    color.g = color.g.toString(16);
    color.b = color.b.toString(16);
    if (color.r.length === 1) {
        color.r = '0' + color.r;
    }
    if (color.g.length === 1) {
        color.g = '0' + color.g;
    }
    if (color.b.length === 1) {
        color.b = '0' + color.b;
    }
    return '#' + color.r + color.g + color.b;
}
/**
 * Convert hex string to rgb color.
 * @param str The hex string to convert.
 */
export function hex2rgb(str) {
    const sixDigitHex = hex2sixDigitHex(str);
    if (sixDigitHex === null) {
        return null;
    }
    return {
        r: parseInt(sixDigitHex.slice(1, 3), 16),
        g: parseInt(sixDigitHex.slice(3, 5), 16),
        b: parseInt(sixDigitHex.slice(5, 7), 16)
    };
}
export function rgbString2hsl(str) {
    const sep = str.indexOf(',') > -1 ? ',' : ' ';
    const rgbArr = str.substr(4).split(')')[0].split(sep);
    const r = rgbArr[0];
    const g = rgbArr[1].substr(0, rgbArr[1].length).trim();
    const b = rgbArr[2].substr(0, rgbArr[2].length).trim();
    return rgb2hsl({ r, g, b });
}
export function rgb2hsl({ r, g, b }) {
    r /= 255;
    g /= 255;
    b /= 255;
    // Find greatest and smallest channel values
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;
    if (delta === 0) {
        h = 0;
    }
    else if (cmax === r) {
        h = ((g - b) / delta) % 6;
    }
    else if (cmax === g) {
        h = (b - r) / delta + 2;
    }
    else {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }
    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return { h, s, l };
}
export function hslString2hsl(str) {
    const sep = str.indexOf(',') > -1 ? ',' : ' ';
    const hslArr = str.substr(4).split(')')[0].split(sep);
    let h = hslArr[0];
    let s = hslArr[1].substr(0, hslArr[1].length).trim();
    let l = hslArr[2].substr(0, hslArr[2].length).trim();
    // Strip label and convert to degrees (if necessary)
    if (h.indexOf('deg') > -1) {
        h = h.substr(0, h.length - 3);
    }
    else if (h.indexOf('rad') > -1) {
        h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
    }
    else if (h.indexOf('turn') > -1) {
        h = Math.round(h.substr(0, h.length - 4) * 360);
    }
    // Keep hue fraction of 360 if ending up over
    if (h >= 360) {
        h %= 360;
    }
    // Remove the %
    if (s.indexOf('%') > -1) {
        s = s.replace(/%/g, '');
    }
    // Remove the %
    if (l.indexOf('%') > -1) {
        l = l.replace(/%/g, '');
    }
    return { h, s, l };
}
export function hsl2rgb({ h, s, l }) {
    let r;
    let g;
    let b;
    if (!isFinite(h)) {
        h = 0;
    }
    if (!isFinite(s)) {
        s = 0;
    }
    if (!isFinite(l)) {
        l = 0;
    }
    h /= 60;
    if (h < 0) {
        h = 6 - (-h % 6);
    }
    h %= 6;
    s = Math.max(0, Math.min(1, s / 100));
    l = Math.max(0, Math.min(1, l / 100));
    const c = (1 - Math.abs((2 * l) - 1)) * s;
    const x = c * (1 - Math.abs((h % 2) - 1));
    if (h < 1) {
        r = c;
        g = x;
        b = 0;
    }
    else if (h < 2) {
        r = x;
        g = c;
        b = 0;
    }
    else if (h < 3) {
        r = 0;
        g = c;
        b = x;
    }
    else if (h < 4) {
        r = 0;
        g = x;
        b = c;
    }
    else if (h < 5) {
        r = x;
        g = 0;
        b = c;
    }
    else {
        r = c;
        g = 0;
        b = x;
    }
    const m = l - c / 2;
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return { r, g, b };
}
export function hex2hsl(str) {
    const sixDigitHex = hex2sixDigitHex(str);
    if (sixDigitHex === null) {
        return null;
    }
    const rgb = hex2rgb(sixDigitHex);
    if (rgb === null) {
        return null;
    }
    return rgb2hsl(rgb);
}
export function hsl2hex(hsl) {
    const rgb = hsl2rgb(hsl);
    return rgb2sixDigitHex(rgb);
}
export function relativeLuminance({ r, g, b }) {
    [r, g, b] = [r, g, b].map(c => {
        c = c / 255;
        if (c <= 0.03928) {
            return c / 12.92;
        }
        return Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export function contrast(str1, str2) {
    const L1 = relativeLuminance(hex2rgb(str1));
    const L2 = relativeLuminance(hex2rgb(str2));
    if (L1 < L2) {
        return (L2 + 0.05) / (L1 + 0.05);
    }
    return (L1 + 0.05) / (L2 + 0.05);
}
export function findClosestAccessibleDarkerColor(adjustableColor, otherColor, contrastRatio) {
    let { h, s, l } = hex2hsl(adjustableColor);
    if (contrast(adjustableColor, otherColor) >= contrastRatio) {
        return {
            color: adjustableColor,
            lightness: l
        };
    }
    let minColor = hsl2hex({ h, s, l: 0 });
    if (contrast(minColor, otherColor) < contrastRatio) {
        return null;
    }
    let min = 0;
    let max = l;
    let maxColor = hsl2hex({ h, s, l });
    let lastMinColor;
    let lastMaxColor;
    while (minColor !== lastMinColor || maxColor !== lastMaxColor) {
        lastMinColor = minColor;
        lastMaxColor = maxColor;
        l = (min + max) / 2;
        adjustableColor = hsl2hex({ h, s, l });
        if (contrast(adjustableColor, otherColor) < contrastRatio) {
            max = l;
            maxColor = hsl2hex({ h, s, l });
        }
        else {
            min = l;
            minColor = hsl2hex({ h, s, l });
        }
    }
    return {
        color: minColor,
        lightness: min
    };
}
export function findClosestAccessibleLighterColor(adjustableColor, otherColor, contrastRatio) {
    let { h, s, l } = hex2hsl(adjustableColor);
    if (contrast(adjustableColor, otherColor) >= contrastRatio) {
        return {
            color: adjustableColor,
            lightness: l
        };
    }
    let maxColor = hsl2hex({ h, s, l: 100 });
    if (contrast(maxColor, otherColor) < contrastRatio) {
        return null;
    }
    let min = l;
    let max = 100;
    let minColor = hsl2hex({ h, s, l });
    let lastMinColor;
    let lastMaxColor;
    while (minColor !== lastMinColor || maxColor !== lastMaxColor) {
        lastMinColor = minColor;
        lastMaxColor = maxColor;
        l = (min + max) / 2;
        adjustableColor = hsl2hex({ h, s, l });
        if (contrast(adjustableColor, otherColor) < contrastRatio) {
            min = l;
            minColor = hsl2hex({ h, s, l });
        }
        else {
            max = l;
            maxColor = hsl2hex({ h, s, l });
        }
    }
    return {
        color: maxColor,
        lightness: max
    };
}
export function findClosestAccessibleColor(adjustableColor, otherColor, contrastRatio) {
    const closestDarkerColor = findClosestAccessibleDarkerColor(adjustableColor, otherColor, contrastRatio);
    const closestLighterColor = findClosestAccessibleLighterColor(adjustableColor, otherColor, contrastRatio);
    if (closestDarkerColor === null) {
        if (closestLighterColor === null) {
            return null;
        }
        return closestLighterColor.color;
    }
    if (closestLighterColor === null) {
        return closestDarkerColor.color;
    }
    const { l } = hex2hsl(adjustableColor);
    if (closestLighterColor.lightness - l < l - closestDarkerColor.lightness) {
        return closestLighterColor.color;
    }
    return closestDarkerColor.color;
}
export function convertHslToStringHsl(hsl) {
    return 'hsl(' + (hsl.h < 0 ? hsl.h + 360 : hsl.h) + ', ' + hsl.s + '%, ' + hsl.l + '%)';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2NvbG9yL2NvbG9yLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQztBQUNwQyxNQUFNLDJCQUEyQixHQUFHLGtCQUFrQixDQUFDO0FBQ3ZELE1BQU0scUNBQXFDLEdBQUcsbUJBQW1CLENBQUM7QUFDbEUsTUFBTSx5QkFBeUIsR0FBRyxrQkFBa0IsQ0FBQztBQUNyRCxNQUFNLG1DQUFtQyxHQUFHLG1CQUFtQixDQUFDO0FBbUJoRTs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsZUFBZSxDQUFDLEdBQVc7SUFDdkMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNOLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWpCLElBQUksbUNBQW1DLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQy9DLE9BQU8sR0FBRyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLHlCQUF5QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNyQyxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDcEI7SUFFRCxJQUFJLHFDQUFxQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNqRCxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwRTtJQUVELElBQUksMkJBQTJCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZDLE9BQU8sR0FBRyxHQUFHLEdBQUcs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QUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXRDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDUCxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDVDtTQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNkLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNUO1NBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ1Q7U0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDVDtTQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNkLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNUO1NBQU07UUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7S0FD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QUFDLEtBQUssQ0FBQztBQUNwQyxDQUFDO0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLEdBQWE7SUFDL0MsT0FBTyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDNUYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZMT0FUX1JFR0VYID0gL15cXGQrKFxcLlxcZCspPyQvO1xyXG5jb25zdCBUSFJFRV9ESUdJVF9IRVhfQ09MT1JfUkVHRVggPSAvXlswLTlhLWZBLUZdezN9JC87XHJcbmNvbnN0IFRIUkVFX0RJR0lUX0hFWF9DT0xPUl9XSVRIX0hBU0hfUkVHRVggPSAvXiNbMC05YS1mQS1GXXszfSQvO1xyXG5jb25zdCBTSVhfRElHSVRfSEVYX0NPTE9SX1JFR0VYID0gL15bMC05YS1mQS1GXXs2fSQvO1xyXG5jb25zdCBTSVhfRElHSVRfSEVYX0NPTE9SX1dJVEhfSEFTSF9SRUdFWCA9IC9eI1swLTlhLWZBLUZdezZ9JC87XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJnYkNvbG9yIHtcclxuICAgIHI/OiBhbnk7XHJcbiAgICBnPzogYW55O1xyXG4gICAgYj86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIc2xDb2xvciB7XHJcbiAgICBoPzogYW55O1xyXG4gICAgcz86IGFueTtcclxuICAgIGw/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvc2VzdENvbG9yIHtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBsaWdodG5lc3M6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgaGV4IHN0cmluZyB0byA2IGRpZ2l0cyBoZXggc3RyaW5nLlxyXG4gKiBAcGFyYW0gc3RyIFRoZSBzdHJpbmcgdG8gY29udmVydC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXgyc2l4RGlnaXRIZXgoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdHIgPSBzdHIudHJpbSgpO1xyXG5cclxuICAgIGlmIChTSVhfRElHSVRfSEVYX0NPTE9SX1dJVEhfSEFTSF9SRUdFWC50ZXN0KHN0cikpIHtcclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChTSVhfRElHSVRfSEVYX0NPTE9SX1JFR0VYLnRlc3Qoc3RyKSkge1xyXG4gICAgICAgIHJldHVybiAnIycgKyBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFRIUkVFX0RJR0lUX0hFWF9DT0xPUl9XSVRIX0hBU0hfUkVHRVgudGVzdChzdHIpKSB7XHJcbiAgICAgICAgcmV0dXJuICcjJyArIHN0clsxXSArIHN0clsxXSArIHN0clsyXSArIHN0clsyXSArIHN0clszXSArIHN0clszXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVEhSRUVfRElHSVRfSEVYX0NPTE9SX1JFR0VYLnRlc3Qoc3RyKSkge1xyXG4gICAgICAgIHJldHVybiAnIycgKyBzdHJbMF0gKyBzdHJbMF0gKyBzdHJbMV0gKyBzdHJbMV0gKyBzdHJbMl0gKyBzdHJbMl07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IHJnYiBjb2xvciB0byA2IGRpZ2l0cyBoZXggc3RyaW5nLlxyXG4gKiBAcGFyYW0gY29sb3IgVGhlIHJnYiBjb2xvciB0byBjb252ZXJ0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYjJzaXhEaWdpdEhleChjb2xvcjogUmdiQ29sb3IpOiBzdHJpbmcge1xyXG4gICAgY29sb3IuciA9IGNvbG9yLnIudG9TdHJpbmcoMTYpO1xyXG4gICAgY29sb3IuZyA9IGNvbG9yLmcudG9TdHJpbmcoMTYpO1xyXG4gICAgY29sb3IuYiA9IGNvbG9yLmIudG9TdHJpbmcoMTYpO1xyXG5cclxuICAgIGlmIChjb2xvci5yLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGNvbG9yLnIgPSAnMCcgKyBjb2xvci5yO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb2xvci5nLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGNvbG9yLmcgPSAnMCcgKyBjb2xvci5nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb2xvci5iLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGNvbG9yLmIgPSAnMCcgKyBjb2xvci5iO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnIycgKyBjb2xvci5yICsgY29sb3IuZyArIGNvbG9yLmI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGhleCBzdHJpbmcgdG8gcmdiIGNvbG9yLlxyXG4gKiBAcGFyYW0gc3RyIFRoZSBoZXggc3RyaW5nIHRvIGNvbnZlcnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGV4MnJnYihzdHI6IHN0cmluZyk6IFJnYkNvbG9yIHtcclxuICAgIGNvbnN0IHNpeERpZ2l0SGV4ID0gaGV4MnNpeERpZ2l0SGV4KHN0cik7XHJcblxyXG4gICAgaWYgKHNpeERpZ2l0SGV4ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByOiBwYXJzZUludChzaXhEaWdpdEhleC5zbGljZSgxLCAzKSwgMTYpLFxyXG4gICAgICAgIGc6IHBhcnNlSW50KHNpeERpZ2l0SGV4LnNsaWNlKDMsIDUpLCAxNiksXHJcbiAgICAgICAgYjogcGFyc2VJbnQoc2l4RGlnaXRIZXguc2xpY2UoNSwgNyksIDE2KVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYlN0cmluZzJoc2woc3RyOiBzdHJpbmcpOiBIc2xDb2xvciB7XHJcbiAgICBjb25zdCBzZXAgPSBzdHIuaW5kZXhPZignLCcpID4gLTEgPyAnLCcgOiAnICc7XHJcbiAgICBjb25zdCByZ2JBcnIgPSBzdHIuc3Vic3RyKDQpLnNwbGl0KCcpJylbMF0uc3BsaXQoc2VwKTtcclxuXHJcbiAgICBjb25zdCByID0gcmdiQXJyWzBdO1xyXG4gICAgY29uc3QgZyA9IHJnYkFyclsxXS5zdWJzdHIoMCwgcmdiQXJyWzFdLmxlbmd0aCkudHJpbSgpO1xyXG4gICAgY29uc3QgYiA9IHJnYkFyclsyXS5zdWJzdHIoMCwgcmdiQXJyWzJdLmxlbmd0aCkudHJpbSgpO1xyXG5cclxuICAgIHJldHVybiByZ2IyaHNsKHsgciwgZywgYiB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYjJoc2woeyByLCBnLCBiIH06IFJnYkNvbG9yKTogSHNsQ29sb3Ige1xyXG4gICAgciAvPSAyNTU7XHJcbiAgICBnIC89IDI1NTtcclxuICAgIGIgLz0gMjU1O1xyXG5cclxuICAgIC8vIEZpbmQgZ3JlYXRlc3QgYW5kIHNtYWxsZXN0IGNoYW5uZWwgdmFsdWVzXHJcbiAgICBjb25zdCBjbWluID0gTWF0aC5taW4ociwgZywgYik7XHJcbiAgICBjb25zdCBjbWF4ID0gTWF0aC5tYXgociwgZywgYik7XHJcbiAgICBjb25zdCBkZWx0YSA9IGNtYXggLSBjbWluO1xyXG5cclxuICAgIGxldCBoID0gMDtcclxuICAgIGxldCBzID0gMDtcclxuICAgIGxldCBsID0gMDtcclxuXHJcbiAgICBpZiAoZGVsdGEgPT09IDApIHtcclxuICAgICAgICBoID0gMDtcclxuICAgIH0gZWxzZSBpZiAoY21heCA9PT0gcikge1xyXG4gICAgICAgIGggPSAoKGcgLSBiKSAvIGRlbHRhKSAlIDY7XHJcbiAgICB9IGVsc2UgaWYgKGNtYXggPT09IGcpIHtcclxuICAgICAgICBoID0gKGIgLSByKSAvIGRlbHRhICsgMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XHJcbiAgICB9XHJcblxyXG4gICAgaCA9IE1hdGgucm91bmQoaCAqIDYwKTtcclxuXHJcbiAgICBpZiAoaCA8IDApIHtcclxuICAgICAgICBoICs9IDM2MDtcclxuICAgIH1cclxuXHJcbiAgICBsID0gKGNtYXggKyBjbWluKSAvIDI7XHJcbiAgICBzID0gZGVsdGEgPT09IDAgPyAwIDogZGVsdGEgLyAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpO1xyXG4gICAgcyA9ICsocyAqIDEwMCkudG9GaXhlZCgxKTtcclxuICAgIGwgPSArKGwgKiAxMDApLnRvRml4ZWQoMSk7XHJcblxyXG4gICAgcmV0dXJuIHsgaCwgcywgbCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaHNsU3RyaW5nMmhzbChzdHI6IHN0cmluZyk6IEhzbENvbG9yIHtcclxuICAgIGNvbnN0IHNlcCA9IHN0ci5pbmRleE9mKCcsJykgPiAtMSA/ICcsJyA6ICcgJztcclxuICAgIGNvbnN0IGhzbEFyciA9IHN0ci5zdWJzdHIoNCkuc3BsaXQoJyknKVswXS5zcGxpdChzZXApO1xyXG5cclxuICAgIGxldCBoOiBhbnkgPSBoc2xBcnJbMF07XHJcbiAgICBsZXQgcyA9IGhzbEFyclsxXS5zdWJzdHIoMCwgaHNsQXJyWzFdLmxlbmd0aCkudHJpbSgpO1xyXG4gICAgbGV0IGwgPSBoc2xBcnJbMl0uc3Vic3RyKDAsIGhzbEFyclsyXS5sZW5ndGgpLnRyaW0oKTtcclxuXHJcbiAgICAvLyBTdHJpcCBsYWJlbCBhbmQgY29udmVydCB0byBkZWdyZWVzIChpZiBuZWNlc3NhcnkpXHJcbiAgICBpZiAoaC5pbmRleE9mKCdkZWcnKSA+IC0xKSB7XHJcbiAgICAgICAgaCA9IGguc3Vic3RyKDAsIGgubGVuZ3RoIC0gMyk7XHJcbiAgICB9IGVsc2UgaWYgKGguaW5kZXhPZigncmFkJykgPiAtMSkge1xyXG4gICAgICAgIGggPSBNYXRoLnJvdW5kKGguc3Vic3RyKDAsIGgubGVuZ3RoIC0gMykgKiAoMTgwIC8gTWF0aC5QSSkpO1xyXG4gICAgfSBlbHNlIGlmIChoLmluZGV4T2YoJ3R1cm4nKSA+IC0xKSB7XHJcbiAgICAgICAgaCA9IE1hdGgucm91bmQoaC5zdWJzdHIoMCwgaC5sZW5ndGggLSA0KSAqIDM2MCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gS2VlcCBodWUgZnJhY3Rpb24gb2YgMzYwIGlmIGVuZGluZyB1cCBvdmVyXHJcbiAgICBpZiAoaCA+PSAzNjApIHtcclxuICAgICAgICBoICU9IDM2MDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgdGhlICVcclxuICAgIGlmIChzLmluZGV4T2YoJyUnKSA+IC0xKSB7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvJS9nLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSAlXHJcbiAgICBpZiAobC5pbmRleE9mKCclJykgPiAtMSkge1xyXG4gICAgICAgIGwgPSBsLnJlcGxhY2UoLyUvZywgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGgsIHMsIGwgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhzbDJyZ2IoeyBoLCBzLCBsIH06IEhzbENvbG9yKTogUmdiQ29sb3Ige1xyXG4gICAgbGV0IHI7XHJcbiAgICBsZXQgZztcclxuICAgIGxldCBiO1xyXG5cclxuICAgIGlmICghaXNGaW5pdGUoaCkpIHtcclxuICAgICAgICBoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzRmluaXRlKHMpKSB7XHJcbiAgICAgICAgcyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc0Zpbml0ZShsKSkge1xyXG4gICAgICAgIGwgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGggLz0gNjA7XHJcblxyXG4gICAgaWYgKGggPCAwKSB7XHJcbiAgICAgICAgaCA9IDYgLSAoLWggJSA2KTtcclxuICAgIH1cclxuXHJcbiAgICBoICU9IDY7XHJcblxyXG4gICAgcyA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHMgLyAxMDApKTtcclxuICAgIGwgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBsIC8gMTAwKSk7XHJcblxyXG4gICAgY29uc3QgYyA9ICgxIC0gTWF0aC5hYnMoKDIgKiBsKSAtIDEpKSAqIHM7XHJcbiAgICBjb25zdCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKGggJSAyKSAtIDEpKTtcclxuXHJcbiAgICBpZiAoaCA8IDEpIHtcclxuICAgICAgICByID0gYztcclxuICAgICAgICBnID0geDtcclxuICAgICAgICBiID0gMDtcclxuICAgIH0gZWxzZSBpZiAoaCA8IDIpIHtcclxuICAgICAgICByID0geDtcclxuICAgICAgICBnID0gYztcclxuICAgICAgICBiID0gMDtcclxuICAgIH0gZWxzZSBpZiAoaCA8IDMpIHtcclxuICAgICAgICByID0gMDtcclxuICAgICAgICBnID0gYztcclxuICAgICAgICBiID0geDtcclxuICAgIH0gZWxzZSBpZiAoaCA8IDQpIHtcclxuICAgICAgICByID0gMDtcclxuICAgICAgICBnID0geDtcclxuICAgICAgICBiID0gYztcclxuICAgIH0gZWxzZSBpZiAoaCA8IDUpIHtcclxuICAgICAgICByID0geDtcclxuICAgICAgICBnID0gMDtcclxuICAgICAgICBiID0gYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgciA9IGM7XHJcbiAgICAgICAgZyA9IDA7XHJcbiAgICAgICAgYiA9IHg7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbSA9IGwgLSBjIC8gMjtcclxuICAgIHIgPSBNYXRoLnJvdW5kKChyICsgbSkgKiAyNTUpO1xyXG4gICAgZyA9IE1hdGgucm91bmQoKGcgKyBtKSAqIDI1NSk7XHJcbiAgICBiID0gTWF0aC5yb3VuZCgoYiArIG0pICogMjU1KTtcclxuXHJcbiAgICByZXR1cm4geyByLCBnLCBiIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXgyaHNsKHN0cjogc3RyaW5nKTogSHNsQ29sb3Ige1xyXG4gICAgY29uc3Qgc2l4RGlnaXRIZXggPSBoZXgyc2l4RGlnaXRIZXgoc3RyKTtcclxuXHJcbiAgICBpZiAoc2l4RGlnaXRIZXggPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZ2IgPSBoZXgycmdiKHNpeERpZ2l0SGV4KTtcclxuXHJcbiAgICBpZiAocmdiID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJnYjJoc2wocmdiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhzbDJoZXgoaHNsOiBIc2xDb2xvcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCByZ2IgPSBoc2wycmdiKGhzbCk7XHJcblxyXG4gICAgcmV0dXJuIHJnYjJzaXhEaWdpdEhleChyZ2IpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVMdW1pbmFuY2UoeyByLCBnLCBiIH06IFJnYkNvbG9yKTogbnVtYmVyIHtcclxuICAgIFtyLCBnLCBiXSA9IFtyLCBnLCBiXS5tYXAoYyA9PiB7XHJcbiAgICAgICAgYyA9IGMgLyAyNTU7XHJcblxyXG4gICAgICAgIGlmIChjIDw9IDAuMDM5MjgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLyAxMi45MjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdygoYyArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIDAuMjEyNiAqIHIgKyAwLjcxNTIgKiBnICsgMC4wNzIyICogYjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyYXN0KHN0cjE6IHN0cmluZywgc3RyMjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IEwxID0gcmVsYXRpdmVMdW1pbmFuY2UoaGV4MnJnYihzdHIxKSk7XHJcbiAgICBjb25zdCBMMiA9IHJlbGF0aXZlTHVtaW5hbmNlKGhleDJyZ2Ioc3RyMikpO1xyXG5cclxuICAgIGlmIChMMSA8IEwyKSB7XHJcbiAgICAgICAgcmV0dXJuIChMMiArIDAuMDUpIC8gKEwxICsgMC4wNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChMMSArIDAuMDUpIC8gKEwyICsgMC4wNSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2xvc2VzdEFjY2Vzc2libGVEYXJrZXJDb2xvcihcclxuICAgIGFkanVzdGFibGVDb2xvcjogc3RyaW5nLCBvdGhlckNvbG9yOiBzdHJpbmcsIGNvbnRyYXN0UmF0aW86IG51bWJlcik6IENsb3Nlc3RDb2xvciB7XHJcbiAgICBsZXQgeyBoLCBzLCBsIH0gPSBoZXgyaHNsKGFkanVzdGFibGVDb2xvcik7XHJcblxyXG4gICAgaWYgKGNvbnRyYXN0KGFkanVzdGFibGVDb2xvciwgb3RoZXJDb2xvcikgPj0gY29udHJhc3RSYXRpbykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBhZGp1c3RhYmxlQ29sb3IsXHJcbiAgICAgICAgICAgIGxpZ2h0bmVzczogbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1pbkNvbG9yID0gaHNsMmhleCh7IGgsIHMsIGw6IDAgfSk7XHJcblxyXG4gICAgaWYgKGNvbnRyYXN0KG1pbkNvbG9yLCBvdGhlckNvbG9yKSA8IGNvbnRyYXN0UmF0aW8pIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWluID0gMDtcclxuICAgIGxldCBtYXggPSBsO1xyXG4gICAgbGV0IG1heENvbG9yID0gaHNsMmhleCh7IGgsIHMsIGwgfSk7XHJcbiAgICBsZXQgbGFzdE1pbkNvbG9yO1xyXG4gICAgbGV0IGxhc3RNYXhDb2xvcjtcclxuXHJcbiAgICB3aGlsZSAobWluQ29sb3IgIT09IGxhc3RNaW5Db2xvciB8fCBtYXhDb2xvciAhPT0gbGFzdE1heENvbG9yKSB7XHJcbiAgICAgICAgbGFzdE1pbkNvbG9yID0gbWluQ29sb3I7XHJcbiAgICAgICAgbGFzdE1heENvbG9yID0gbWF4Q29sb3I7XHJcblxyXG4gICAgICAgIGwgPSAobWluICsgbWF4KSAvIDI7XHJcbiAgICAgICAgYWRqdXN0YWJsZUNvbG9yID0gaHNsMmhleCh7IGgsIHMsIGwgfSk7XHJcblxyXG4gICAgICAgIGlmIChjb250cmFzdChhZGp1c3RhYmxlQ29sb3IsIG90aGVyQ29sb3IpIDwgY29udHJhc3RSYXRpbykge1xyXG4gICAgICAgICAgICBtYXggPSBsO1xyXG4gICAgICAgICAgICBtYXhDb2xvciA9IGhzbDJoZXgoeyBoLCBzLCBsIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1pbiA9IGw7XHJcbiAgICAgICAgICAgIG1pbkNvbG9yID0gaHNsMmhleCh7IGgsIHMsIGwgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29sb3I6IG1pbkNvbG9yLFxyXG4gICAgICAgIGxpZ2h0bmVzczogbWluXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3RBY2Nlc3NpYmxlTGlnaHRlckNvbG9yKFxyXG4gICAgYWRqdXN0YWJsZUNvbG9yOiBzdHJpbmcsIG90aGVyQ29sb3I6IHN0cmluZywgY29udHJhc3RSYXRpbzogbnVtYmVyKTogQ2xvc2VzdENvbG9yIHtcclxuICAgIGxldCB7IGgsIHMsIGwgfSA9IGhleDJoc2woYWRqdXN0YWJsZUNvbG9yKTtcclxuXHJcbiAgICBpZiAoY29udHJhc3QoYWRqdXN0YWJsZUNvbG9yLCBvdGhlckNvbG9yKSA+PSBjb250cmFzdFJhdGlvKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29sb3I6IGFkanVzdGFibGVDb2xvcixcclxuICAgICAgICAgICAgbGlnaHRuZXNzOiBsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWF4Q29sb3IgPSBoc2wyaGV4KHsgaCwgcywgbDogMTAwIH0pO1xyXG5cclxuICAgIGlmIChjb250cmFzdChtYXhDb2xvciwgb3RoZXJDb2xvcikgPCBjb250cmFzdFJhdGlvKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1pbiA9IGw7XHJcbiAgICBsZXQgbWF4ID0gMTAwO1xyXG4gICAgbGV0IG1pbkNvbG9yID0gaHNsMmhleCh7IGgsIHMsIGwgfSk7XHJcbiAgICBsZXQgbGFzdE1pbkNvbG9yO1xyXG4gICAgbGV0IGxhc3RNYXhDb2xvcjtcclxuXHJcbiAgICB3aGlsZSAobWluQ29sb3IgIT09IGxhc3RNaW5Db2xvciB8fCBtYXhDb2xvciAhPT0gbGFzdE1heENvbG9yKSB7XHJcbiAgICAgICAgbGFzdE1pbkNvbG9yID0gbWluQ29sb3I7XHJcbiAgICAgICAgbGFzdE1heENvbG9yID0gbWF4Q29sb3I7XHJcblxyXG4gICAgICAgIGwgPSAobWluICsgbWF4KSAvIDI7XHJcbiAgICAgICAgYWRqdXN0YWJsZUNvbG9yID0gaHNsMmhleCh7IGgsIHMsIGwgfSk7XHJcblxyXG4gICAgICAgIGlmIChjb250cmFzdChhZGp1c3RhYmxlQ29sb3IsIG90aGVyQ29sb3IpIDwgY29udHJhc3RSYXRpbykge1xyXG4gICAgICAgICAgICBtaW4gPSBsO1xyXG4gICAgICAgICAgICBtaW5Db2xvciA9IGhzbDJoZXgoeyBoLCBzLCBsIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1heCA9IGw7XHJcbiAgICAgICAgICAgIG1heENvbG9yID0gaHNsMmhleCh7IGgsIHMsIGwgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29sb3I6IG1heENvbG9yLFxyXG4gICAgICAgIGxpZ2h0bmVzczogbWF4XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3RBY2Nlc3NpYmxlQ29sb3IoXHJcbiAgICBhZGp1c3RhYmxlQ29sb3I6IHN0cmluZywgb3RoZXJDb2xvcjogc3RyaW5nLCBjb250cmFzdFJhdGlvOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY2xvc2VzdERhcmtlckNvbG9yOiBDbG9zZXN0Q29sb3IgPVxyXG4gICAgICAgIGZpbmRDbG9zZXN0QWNjZXNzaWJsZURhcmtlckNvbG9yKGFkanVzdGFibGVDb2xvciwgb3RoZXJDb2xvciwgY29udHJhc3RSYXRpbyk7XHJcbiAgICBjb25zdCBjbG9zZXN0TGlnaHRlckNvbG9yOiBDbG9zZXN0Q29sb3IgPVxyXG4gICAgICAgIGZpbmRDbG9zZXN0QWNjZXNzaWJsZUxpZ2h0ZXJDb2xvcihhZGp1c3RhYmxlQ29sb3IsIG90aGVyQ29sb3IsIGNvbnRyYXN0UmF0aW8pO1xyXG5cclxuICAgIGlmIChjbG9zZXN0RGFya2VyQ29sb3IgPT09IG51bGwpIHtcclxuICAgICAgICBpZiAoY2xvc2VzdExpZ2h0ZXJDb2xvciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjbG9zZXN0TGlnaHRlckNvbG9yLmNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjbG9zZXN0TGlnaHRlckNvbG9yID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3REYXJrZXJDb2xvci5jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGwgfSA9IGhleDJoc2woYWRqdXN0YWJsZUNvbG9yKTtcclxuXHJcbiAgICBpZiAoY2xvc2VzdExpZ2h0ZXJDb2xvci5saWdodG5lc3MgLSBsIDwgbCAtIGNsb3Nlc3REYXJrZXJDb2xvci5saWdodG5lc3MpIHtcclxuICAgICAgICByZXR1cm4gY2xvc2VzdExpZ2h0ZXJDb2xvci5jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvc2VzdERhcmtlckNvbG9yLmNvbG9yO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEhzbFRvU3RyaW5nSHNsKGhzbDogSHNsQ29sb3IpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdoc2woJyArIChoc2wuaCA8IDAgPyBoc2wuaCArIDM2MCA6IGhzbC5oKSArICcsICcgKyBoc2wucyArICclLCAnICsgaHNsLmwgKyAnJSknO1xyXG59XHJcbiJdfQ==