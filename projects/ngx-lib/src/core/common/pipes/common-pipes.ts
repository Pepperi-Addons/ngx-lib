import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Pipe, PipeTransform } from '@angular/core';
import {
    DomSanitizer,
    SafeHtml,
    SafeStyle,
    SafeScript,
    SafeUrl,
    SafeResourceUrl,
} from '@angular/platform-browser';
import { PepUtilitiesService } from '../services/utilities.service';

@Pipe({ name: 'pepCapitalize' })
export class PepCapitalizePipe implements PipeTransform {
    transform(value: any) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
}

@Pipe({ name: 'pepEncode' })
export class PepEncodePipe implements PipeTransform {
    transform(value: any) {
        if (value) {
            const v = btoa(value);
            return v;
        }
        return value;
    }
}

declare function escape(s: string): string;

@Pipe({ name: 'pepEscape' })
export class PepEscapePipe implements PipeTransform {
    transform(value: any) {
        if (value) {
            const v = escape(value);
            return v;
        }
        return value;
    }
}

@Pipe({ name: 'pepReplaceLineBreaks' })
export class PepReplaceLineBreaksPipe implements PipeTransform {
    transform(value: string): string {
        const newValue = value.replace(/(<br\ ?\/?>)/g, ' ');
        return newValue;
    }
}

@Pipe({ name: 'pepDateFormatter' })
export class PepDateFormatterPipe implements PipeTransform {
    transform(value: Date, culture: any, showTime = false): string {
        let res = '';
        value = new Date(value);
        if (value) {
            res = value.toLocaleDateString(culture || 'en-US');
            if (showTime) {
                res +=
                    ' ' +
                    value.toLocaleTimeString(culture || 'en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                    });
            }
        }
        return res;
    }
}

@Pipe({ name: 'pepDateStringFormatter' })
export class PepDateStringFormatterPipe implements PipeTransform {
    transform(value: string, culture: any, showTime = false): string {
        let res = '';
        const tmpDate = new Date(value);
        if (value) {
            res = tmpDate.toLocaleDateString(culture || 'en-US');
            if (showTime) {
                res += ' ' + tmpDate.toLocaleTimeString(culture || 'en-US');
            }
        }
        return res;
    }
}

@Pipe({ name: 'pepSafeHtml' })
export class PepSafeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}

@Pipe({ name: 'pepSafe' })
export class PepSafePipe implements PipeTransform {
    constructor(protected sanitizer: DomSanitizer) {}

    public transform(
        value: any,
        type: string
    ): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);

            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);

            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);

            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);

            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);

            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}

@Pipe({ name: 'pepSplitUppercase' })
export class PepSplitUppercasePipe implements PipeTransform {
    transform(value: string): string {
        const newValue = value.replace(/([a-z])([A-Z])/g, '$1 $2');
        return newValue;
    }
}

@Pipe({ name: 'pepToNumber' })
export class PepToNumberPipe implements PipeTransform {
    constructor(private utilitiesService: PepUtilitiesService) {}

    transform(value: string): number {
        const decimalSeparator = this.utilitiesService.getDecimalSeparator();
        // We need to remove the thousands separator so - If the decimal separator is '.' we need to remove the ',' from the value else we remove the '.'.
        value = decimalSeparator === '.' ? value.replace(/,/g, '') : value.replace(/./g, '');
        const numberValue = coerceNumberProperty(value);
        return numberValue;
        // return parseInt(value);
    }
}
