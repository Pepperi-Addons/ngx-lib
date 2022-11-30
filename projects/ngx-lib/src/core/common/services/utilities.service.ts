import { coerceNumberProperty, _isNumberValue } from '@angular/cdk/coercion';
import { formatCurrency, formatNumber, formatPercent } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class PepUtilitiesService {
    private culture = 'en-US';

    constructor(@Optional() private translate: TranslateService = null) {
        this.culture = this.translate?.getBrowserCultureLang() || 'en-US';

        // try {
        //     import(`@angular/common/locales/global/${this.culture}`);
        // } catch {}
    }

    changeDecimalSeperatorWhenItsComma(value: string, reverse = false): string {
        // If the decimal separator is ','
        if (this.getDecimalSeparator() === ',') {
            // If reverse change the number from '.' to ',' else do the opposite.
            value = reverse ? value.replace('.', ',') : value.replace(',', '.');
        }

        return value;
    }

    private changeToNumberBeforeFormat(value: string, fallbackValue = 0): number {
        // If the decimal separator is ',' change it to '.'
        if (value?.length > 0) {

            console.log('coerceNumberProperty value is', value);

            // Remove the thousand separator - If the decimal seperator is '.' than the thoussnd seperator is ',' else  the thousand seperator is '.'
            const thousandSeparator = this.getDecimalSeparator() === '.' ? ',' : '.';
            if (value.includes(thousandSeparator)) {
                const regex = new RegExp(thousandSeparator, 'g')
                value = value.replace(regex, ''); // .replace(',', '');
                console.log('coerceNumberProperty after remove the thousend seperator value is', value);
            }

            // If the decimal separator is ',' change it to '.' for let the formatting works.
            value = this.changeDecimalSeperatorWhenItsComma(value);
            
            console.log('coerceNumberProperty after change decimal seperator value is', value);
        }

        return coerceNumberProperty(value, fallbackValue);
    }

    // adapted from https://github.com/sindresorhus/parse-ms.
    // moved to internal function because parse-ms is now pure ESM.
    private parseMs(milliseconds: number) {
        if (typeof milliseconds !== 'number') {
            throw new TypeError('Expected a number')
        }

        return {
            days: Math.trunc(milliseconds / 86400000),
            hours: Math.trunc(milliseconds / 3600000) % 24,
            minutes: Math.trunc(milliseconds / 60000) % 60,
            seconds: Math.trunc(milliseconds / 1000) % 60,
            milliseconds: Math.trunc(milliseconds) % 1000
        }
    }

    // adapted from https://github.com/rafaelrinaldi/add-zero.
    // moved to internal function b/c addZero is unmaintained (7+ years).
    // stripped out negative sign logic since we're already doing it elsewhere.
    private addZero(value: number, digits = 2) {
        digits = digits || 2

        let str = value.toString()
        let size = 0

        size = digits - str.length + 1
        str = new Array(size).join('0').concat(str)

        return str
    }

    private isCurrencyShouldBeOnRight(currencySymbol: string) {
        let res = false;

        if (currencySymbol == "€" ||
            currencySymbol == "₪" ||
            currencySymbol == "Ft" ||
            currencySymbol == "Kč" ||
            currencySymbol == "руб" ||
            currencySymbol == "zł" ||
            currencySymbol == "kr.") {
            res = true;
        }

        return res;
    }

    private cutValueByFractionDigits(value: string, maxFractionDigits: number): string {
        let res = value;
        maxFractionDigits = maxFractionDigits || 2;
        const decimalSeperator = this.getDecimalSeparator();

        if (value.includes(decimalSeperator)) {
            const valueArr = value.split(decimalSeperator);

            // if (valueArr[1].length < maxFractionDigits) {
            valueArr[1] = valueArr[1].padEnd(maxFractionDigits, '0');
            // }

            res = `${valueArr[0]}${decimalSeperator}${valueArr[1].slice(0, maxFractionDigits)}`;
        }

        return res;
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
        if (svgContent?.length > 0) {
            div.innerHTML = svgContent.replace('<svg ', '<svg class="svg-icon" ');
        }
        return (
            div.querySelector('svg') ||
            document.createElementNS('http://www.w3.org/2000/svg', 'path')
        );
    }

    // formatPercent(value: any, digitsInfo = '1.0-2') {
    formatPercent(value: any, minFractionDigits = 0, maxFractionDigits = 2) {
        minFractionDigits = coerceNumberProperty(minFractionDigits, null);
        maxFractionDigits = coerceNumberProperty(maxFractionDigits, null);

        value = this.cutValueByFractionDigits(value, maxFractionDigits);

        const number = this.changeToNumberBeforeFormat(value);

        if (number === 0) {
            return '0%';
        } else {
            // return formatPercent(number / 100, this.culture, digitsInfo);
            return new Intl.NumberFormat(this.culture, {
                style: 'percent',
                minimumFractionDigits: minFractionDigits || 0,
                maximumFractionDigits: maxFractionDigits || Math.max(2, minFractionDigits),
            }).format(number / 100);
        }
    }

    // formatCurrency(value: any, currencySign = '', digitsInfo = '1.2-2') {
    formatCurrency(value: any, currencySign = '', minFractionDigits = 2, maxFractionDigits = 2) {
        minFractionDigits = coerceNumberProperty(minFractionDigits, null);
        maxFractionDigits = coerceNumberProperty(maxFractionDigits, null);

        let res = '';

        // If the decimal seperator is the last digit
        // if (value.length > 0 && value.indexOf(this.getDecimalSeparator()) === value.length -1) {
        //     res = value;
        // } else {
            value = this.cutValueByFractionDigits(value, maxFractionDigits);
            const number = this.changeToNumberBeforeFormat(value);
            const styleOptions = {
                // style: 'currency',
                // currencySign: currencySign,
                minimumFractionDigits: minFractionDigits || Math.min(2, maxFractionDigits || 2),
                maximumFractionDigits: maxFractionDigits || Math.max(2, minFractionDigits),
            };
    
            if (number === 0) {
                // return formatCurrency(0, this.culture, currencySign, undefined, digitsInfo);
                res = new Intl.NumberFormat(this.culture, styleOptions).format(0);
            } else {
                // return formatCurrency(value, this.culture, currencySign, undefined, digitsInfo);
                res = new Intl.NumberFormat(this.culture, styleOptions).format(number);
            }
    
            if (currencySign.length > 0) {
                res = this.isCurrencyShouldBeOnRight(currencySign) ? `${res} ${currencySign}` : `${currencySign} ${res}`
            }
        // }

        return res;
    }

    // formatDecimal(value: any, digitsInfo = '1.2-2') {
    formatDecimal(value: any, minFractionDigits = 2, maxFractionDigits = 2) {
        minFractionDigits = coerceNumberProperty(minFractionDigits, null);
        console.log('formatDecimal minFractionDigits value is', minFractionDigits);

        maxFractionDigits = coerceNumberProperty(maxFractionDigits, null);
        console.log('formatDecimal minFractionDigits value is', maxFractionDigits);

        value = this.cutValueByFractionDigits(value, maxFractionDigits);

        const number = this.changeToNumberBeforeFormat(value);
        
        console.log('number value is', number);

        if (number === 0) {
            return '0';
        } else {
            // return formatNumber(value, this.culture, digitsInfo);
            const res = new Intl.NumberFormat(this.culture, {
                minimumFractionDigits: minFractionDigits || Math.min(2, maxFractionDigits || 2),
                maximumFractionDigits: maxFractionDigits || Math.max(2, minFractionDigits),
            }).format(number);
            
            console.log('Intl.NumberFormat value is', res);

            return res;
        }
    }

    // formatNumber(value: any, digitsInfo = '1.0-0'): string {
    formatNumber(value: any): string {
        const number = this.changeToNumberBeforeFormat(value);

        if (number === 0) {
            return '0';
        } else {
            // return formatNumber(value, this.culture, digitsInfo);
            return new Intl.NumberFormat(this.culture, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(number)
        }
    }

    /**
     * Convert a number in milliseconds to a standard duration string.
     * @param {number} value - duration in milliseconds
     * @param {object} options - formatDuration options object
     * @param {boolean} [options.leading=false] - add leading zero
     * @returns string - formatted duration string
    */
    formatDuration(value, options: { leading?: boolean, duration?: 'milliseconds' | 'seconds' } = {}): string {
        const isNumber = _isNumberValue(value);

        if (!isNumber) {
            return value;
        } else {
            let number = this.changeToNumberBeforeFormat(value);

            const leading = options?.leading || true;
            const duration = options?.duration || 'milliseconds';
            if (duration === 'seconds') {
                number = number * 1000;
            }

            const unsignedMs = number < 0 ? -number : number;
            const sign = number <= -1000 ? '-' : '';
            const t = this.parseMs(unsignedMs);
            const seconds = this.addZero(t.seconds);

            if (t.days) {
                return sign + t.days + ':' + this.addZero(t.hours) + ':' + this.addZero(t.minutes) + ':' + seconds
            }

            if (t.hours) {
                return sign + (leading ? this.addZero(t.hours) : t.hours) + ':' + this.addZero(t.minutes) + ':' + seconds
            }

            return sign + (leading ? this.addZero(t.minutes) : t.minutes) + ':' + seconds
        }
    }

    incrementNumber(value: any): string {
        // Change value to be with dot ('.') decimal seperator.
        let valueWithDotDecimalSeperator = this.changeDecimalSeperatorWhenItsComma(value);
        // let numberValue = this.changeToNumberWithDefaultSettings(valueWithDotDecimalSeperator);
        let numberValue = coerceNumberProperty(valueWithDotDecimalSeperator, 0);
        // Change value back to Culture decimal seperator.
        const newNumber = this.changeDecimalSeperatorWhenItsComma((++numberValue).toString(), true);

        return newNumber;
    }

    decrementNumber(value: any): string {
        // Change value to be with dot ('.') decimal seperator.
        let valueWithDotDecimalSeperator = this.changeDecimalSeperatorWhenItsComma(value);
        // let numberValue = this.changeToNumberWithDefaultSettings(valueWithDotDecimalSeperator);
        let numberValue = coerceNumberProperty(valueWithDotDecimalSeperator, 0);
        // Change value back to Culture decimal seperator.
        const newNumber = this.changeDecimalSeperatorWhenItsComma((--numberValue).toString(), true);

        return newNumber;
    }

    getDecimalSeparator(): string {
        const numberWithDecimalSeparator = 1.1;

        return numberWithDecimalSeparator
            .toLocaleString(this.culture)
            .substring(1, 2);
    }

    isEqualNumber(numberAsString: string, numberAsString2: string): boolean {
        const number = this.changeToNumberBeforeFormat(numberAsString);
        const number2 = this.changeToNumberBeforeFormat(numberAsString2);

        return number === number2;
    }
}
