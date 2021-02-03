import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PepUtilitiesService {
    parseDate(dateStr: string, showTime = false): Date {
        let retVal: Date = null;
        if (dateStr !== '') {
            retVal = new Date(dateStr);
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

    // stringifyDateWithOffset(date: Date, showTime = false): string {
    //     if (showTime) {
    //         const offsetMinutes = new Date().getTimezoneOffset() * -1;
    //         date.setMinutes(date.getMinutes() - offsetMinutes);
    //     }

    //     return this.stringifyDate(date, showTime);
    // }

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
}
