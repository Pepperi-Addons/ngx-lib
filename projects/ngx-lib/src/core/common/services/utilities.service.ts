import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Injectable, Optional } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class PepUtilitiesService {
    private culture = 'en-US';

    constructor(@Optional() private translate: TranslateService = null) {
        this.culture = this.translate?.getBrowserCultureLang() || 'en-US';
    }

    private changeDecimalSeperator(value: string, reverse = false): string {
        // If the decimal separator is ','
        if (this.getDecimalSeparator() === ',') {
            // If reverse change the number from '.' to ',' else do the opposite.
            value = reverse ? value.replace('.', ',') : value.replace(',', '.');
        }

        return value;
    }

    private getDecimalSeparator() {
        const numberWithDecimalSeparator = 1.1;

        return numberWithDecimalSeparator
            .toLocaleString(this.culture)
            .substring(1, 2);
    }

    parseDate(dateStr: string, showTime = false): Date {
        let retVal: Date = null;
        if (dateStr !== '') {
            retVal = new Date(dateStr);

            // Convert to date with no offset.
            if (!showTime) {
                const index = dateStr.indexOf('T');

                if (index > 0) {
                    dateStr = dateStr.substring(0, index);
                }

                const dateText = dateStr.split('-');
                if (dateText.length === 3) {
                    const year = Number(dateText[0]);
                    const month = Number(dateText[1]) - 1;
                    const day = Number(dateText[2]);
                    retVal = new Date(year, month, day, 0, retVal.getTimezoneOffset() * -1);
                }
            } else {
                retVal = new Date(
                    retVal.getFullYear(), retVal.getMonth(), retVal.getDate(), retVal.getHours(),
                    retVal.getMinutes() + retVal.getTimezoneOffset() * -1, retVal.getSeconds());
            }
        }
        if (retVal && isNaN(retVal.getTime())) {
            retVal = null;
        }
        return retVal;
    }

    stringifyDate(date: Date, showTime = false): string {
        if (date) {
            if (showTime) {
                return date.toISOString(); // include - offset
            } else {
                const dateText = [];
                dateText.push(
                    date.getFullYear(),
                    '-',
                    date.getMonth() + 1,
                    '-',
                    date.getDate()
                );
                return dateText.join('');
            }
        } else {
            return '';
        }
    }

    isValueHtml(value: string): boolean {
        let res = false;
        const REGEXP = /<\/?[a-z][\s\S]*>/i;
        res = REGEXP.test(value);

        return res;
    }

    isJsonString(str: string): boolean {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    getSvgElementFromString(document, svgContent: string): SVGElement {
        const div = document.createElement('DIV');
        // div.className = 'svg-icon';
        // Add class svg-icon
        div.innerHTML = svgContent.replace('<svg ', '<svg class="svg-icon" ');
        return (
            div.querySelector('svg') ||
            document.createElementNS('http://www.w3.org/2000/svg', 'path')
        );
    }

    formatNumber(value: any, toDecimal: boolean): string {
        const number = this.coerceNumberProperty(value);
        const fractionDigits = toDecimal ? 2 : 0;

        const numberFormatter = new Intl.NumberFormat(this.culture, {
            minimumFractionDigits: fractionDigits,
            maximumFractionDigits: fractionDigits,
        });

        return numberFormatter.format(number);
    }

    incrementNumber(value: any): string {
        let numberValue = this.coerceNumberProperty(value);
        const newNumber = this.changeDecimalSeperator(
            (++numberValue).toString(),
            true
        );

        return newNumber;
    }

    decrementNumber(value: any): string {
        let numberValue = this.coerceNumberProperty(value);
        const newNumber = this.changeDecimalSeperator(
            (--numberValue).toString(),
            true
        );

        return newNumber;
    }

    coerceNumberProperty(value: any, fallbackValue = 0): number {
        // If the decimal separator is ',' change it to '.'
        value = this.changeDecimalSeperator(value);

        return coerceNumberProperty(value, fallbackValue);
    }
}
