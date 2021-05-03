import { Injectable, Optional } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class PepUtilitiesService {
    private numberFormatter: Intl.NumberFormat;

    constructor(@Optional() private translate: TranslateService = null) {
        const culture = this.translate?.getBrowserCultureLang() || 'en-US';
        this.numberFormatter = new Intl.NumberFormat(culture, {
            maximumFractionDigits: 2,
        });
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
                    retVal = new Date(year, month, day);
                }
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

        // if (date) {
        //     const dateText = [];
        //     dateText.push(
        //         date.getFullYear(),
        //         '-',
        //         date.getMonth() + 1,
        //         '-',
        //         date.getDate()
        //     );

        //     if (showTime) {
        //         dateText.push(
        //             'T',
        //             (date.getHours() < 10 ? '0' : '') + date.getHours(),
        //             ':',
        //             (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(),
        //             ':',
        //             (date.getSeconds() < 10 ? '0' : '') + date.getSeconds(),
        //             'Z'
        //         );
        //     }

        //     return dateText.join('');
        // } else {
        //     return '';
        // }
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
        div.innerHTML = svgContent;
        return (
            div.querySelector('svg') ||
            document.createElementNS('http://www.w3.org/2000/svg', 'path')
        );
    }

    formatNumber(value: any): string {
        return this.numberFormatter.format(value);
    }
}
