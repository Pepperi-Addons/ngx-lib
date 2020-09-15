import {Injectable} from '@angular/core';

// export class JsonFilter {
//     ExpressionId: number;
//     ComplexId: number;
//     ApiName: string;
//     Operation: string;
//     Values: string[];
//     constructor() {
//         this.ExpressionId = 1;
//         this.ApiName = '';
//         this.Operation = '';
//         this.Values = [];
//     }

//     initFromObj(obj: JsonFilter): void {
//         if (obj) {
//             this.ExpressionId = obj.ExpressionId;
//             this.ApiName = obj.ApiName;
//             this.Operation = obj.Operation;

//             if (this.Values !== obj.Values) {
//                 this.Values = [];
//                 if (obj.Values) {
//                     obj.Values.forEach((value) => this.Values.push(value));
//                 }
//             }
//         }
//     }

//     Valid(): boolean {
//         return this.Operation !== '' && this.ApiName !== '';
//     }
// }

// export class JsonFilters {
//     leftNode: string;
//     rightNode: string;
//     operator: string;
//     ComplexId: number;

//     constructor(left = '', right = '', operator = 'AND', complexId = 2) {
//         this.leftNode = left;
//         this.rightNode = right;
//         this.operator = operator;
//         this.ComplexId = complexId;
//     }

//     toString(): string {
//         let retVal = '';
//         if (this.leftNode !== '' && this.rightNode === '') {
//             retVal = this.leftNode;
//         } else if (this.leftNode === '' && this.rightNode !== '') {
//             retVal = this.rightNode;
//         } else if (this.leftNode !== '' && this.rightNode !== '') {
//             retVal = '{ "ComplexId":' + this.ComplexId + ',';
//             retVal += ' "Operation":"' + this.operator + '",';
//             retVal += ' "LeftNode": ' + this.leftNode + ',';
//             retVal += ' "RightNode": ' + this.rightNode + '}';
//         }
//         return retVal;
//     }
// }

// export enum DATE_RANGE {
//     None = 0,
//     InTheLast = 1,
//     Today = 2,
//     ThisWeek = 3,
//     ThisMonth = 4,
//     /*Before = 5, After = 6,*/ Between = 5,
//     DueIn = 6,
//     On = 7,
//     NotInTheLast = 8,
//     NotDueIn = 9,
//     IsEmpty = 10,
//     IsNotEmpty = 11,
// }
// export enum DATE_PERIOD {
//     None = 0,
//     Days = 1,
//     Weeks = 2,
//     Months = 3,
//     Years = 4,
// }
// export enum DATE_RANGE_VIEWTYPE {
//     None = 0,
//     Period = 1,
//     OneCalendar = 2,
//     TwoCalendars = 3,
//     NoCalendars = 4,
// }

@Injectable({
    providedIn: 'root',
})
export class UtilitiesService {

    constructor() {}

    parseDate(dateStr: string, showTime: boolean = false): any {
        let retVal = null;
        if (dateStr !== '') {
            retVal = new Date(dateStr);
            const dateText = dateStr.split('-');
            if (dateText.length === 3 && !showTime) {
                const year = Number(dateText[0]);
                const month = Number(dateText[1]) - 1;
                const day = Number(dateText[2]);
                retVal = new Date(year, month, day);
            }
        }
        if (retVal && isNaN(retVal.getTime())) {
            retVal = null;
        }
        return retVal;
    }

    stringifyDate(date: Date, showTime: boolean = false): string {
        if (date) {
            const dateText = [];
            dateText.push(date.getFullYear(), '-', date.getMonth() + 1, '-', date.getDate());

            if (showTime) {
                dateText.push(
                    'T',
                    (date.getHours() < 10 ? '0' : '') + date.getHours(),
                    ':',
                    (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(),
                    ':',
                    (date.getSeconds() < 10 ? '0' : '') + date.getSeconds(),
                    'Z'
                );
            }

            return dateText.join('');
        } else {
            return '';
        }
    }

    stringifyDateWithOffset(date: Date, showTime: boolean = false): string {
        if (showTime) {
            const offsetMinutes = new Date().getTimezoneOffset() * -1;
            date.setMinutes(date.getMinutes() - offsetMinutes);
        }

        return this.stringifyDate(date, showTime);
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
}
