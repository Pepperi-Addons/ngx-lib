import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
export class UtilitiesService {
    constructor() { }
    parseDate(dateStr, showTime = false) {
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
    stringifyDate(date, showTime = false) {
        if (date) {
            const dateText = [];
            dateText.push(date.getFullYear(), '-', date.getMonth() + 1, '-', date.getDate());
            if (showTime) {
                dateText.push('T', (date.getHours() < 10 ? '0' : '') + date.getHours(), ':', (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(), ':', (date.getSeconds() < 10 ? '0' : '') + date.getSeconds(), 'Z');
            }
            return dateText.join('');
        }
        else {
            return '';
        }
    }
    stringifyDateWithOffset(date, showTime = false) {
        if (showTime) {
            const offsetMinutes = new Date().getTimezoneOffset() * -1;
            date.setMinutes(date.getMinutes() - offsetMinutes);
        }
        return this.stringifyDate(date, showTime);
    }
    isValueHtml(value) {
        let res = false;
        const REGEXP = /<\/?[a-z][\s\S]*>/i;
        res = REGEXP.test(value);
        return res;
    }
    isJsonString(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
}
UtilitiesService.ɵfac = function UtilitiesService_Factory(t) { return new (t || UtilitiesService)(); };
UtilitiesService.ɵprov = i0.ɵɵdefineInjectable({ token: UtilitiesService, factory: UtilitiesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UtilitiesService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3NyYy9jb3JlL2NvbW1vbi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUV6Qyw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsNEJBQTRCO0FBQzVCLFFBQVE7QUFFUiwyQ0FBMkM7QUFDM0MscUJBQXFCO0FBQ3JCLG9EQUFvRDtBQUNwRCwwQ0FBMEM7QUFDMUMsOENBQThDO0FBRTlDLGdEQUFnRDtBQUNoRCxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLDhFQUE4RTtBQUM5RSxvQkFBb0I7QUFDcEIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixRQUFRO0FBRVIseUJBQXlCO0FBQ3pCLCtEQUErRDtBQUMvRCxRQUFRO0FBQ1IsSUFBSTtBQUVKLDZCQUE2QjtBQUM3Qix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFFekIsNEVBQTRFO0FBQzVFLGdDQUFnQztBQUNoQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUN0QyxRQUFRO0FBRVIsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiwrREFBK0Q7QUFDL0Qsc0NBQXNDO0FBQ3RDLHNFQUFzRTtBQUN0RSx1Q0FBdUM7QUFDdkMsc0VBQXNFO0FBQ3RFLGdFQUFnRTtBQUNoRSxpRUFBaUU7QUFDakUsK0RBQStEO0FBQy9ELGlFQUFpRTtBQUNqRSxZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCLFFBQVE7QUFD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LHVCQUF1QixDQUFDLElBQVUsRUFBRSxXQUFvQixLQUFLO1FBQ3pELElBQUksUUFBUSxFQUFFO1lBQ1YsTUFBTSxhQUFhLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLGFBQWEsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWE7UUFDckIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLG9CQUFvQixDQUFDO1FBQ3BDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFXO1FBQ3BCLElBQUk7WUFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O2dGQXJFUSxnQkFBZ0I7d0RBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmIsTUFBTTtrREFFVCxnQkFBZ0I7Y0FINUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIGV4cG9ydCBjbGFzcyBKc29uRmlsdGVyIHtcclxuLy8gICAgIEV4cHJlc3Npb25JZDogbnVtYmVyO1xyXG4vLyAgICAgQ29tcGxleElkOiBudW1iZXI7XHJcbi8vICAgICBBcGlOYW1lOiBzdHJpbmc7XHJcbi8vICAgICBPcGVyYXRpb246IHN0cmluZztcclxuLy8gICAgIFZhbHVlczogc3RyaW5nW107XHJcbi8vICAgICBjb25zdHJ1Y3RvcigpIHtcclxuLy8gICAgICAgICB0aGlzLkV4cHJlc3Npb25JZCA9IDE7XHJcbi8vICAgICAgICAgdGhpcy5BcGlOYW1lID0gJyc7XHJcbi8vICAgICAgICAgdGhpcy5PcGVyYXRpb24gPSAnJztcclxuLy8gICAgICAgICB0aGlzLlZhbHVlcyA9IFtdO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGluaXRGcm9tT2JqKG9iajogSnNvbkZpbHRlcik6IHZvaWQge1xyXG4vLyAgICAgICAgIGlmIChvYmopIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5FeHByZXNzaW9uSWQgPSBvYmouRXhwcmVzc2lvbklkO1xyXG4vLyAgICAgICAgICAgICB0aGlzLkFwaU5hbWUgPSBvYmouQXBpTmFtZTtcclxuLy8gICAgICAgICAgICAgdGhpcy5PcGVyYXRpb24gPSBvYmouT3BlcmF0aW9uO1xyXG5cclxuLy8gICAgICAgICAgICAgaWYgKHRoaXMuVmFsdWVzICE9PSBvYmouVmFsdWVzKSB7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLlZhbHVlcyA9IFtdO1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKG9iai5WYWx1ZXMpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBvYmouVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB0aGlzLlZhbHVlcy5wdXNoKHZhbHVlKSk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgVmFsaWQoKTogYm9vbGVhbiB7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuT3BlcmF0aW9uICE9PSAnJyAmJiB0aGlzLkFwaU5hbWUgIT09ICcnO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgY2xhc3MgSnNvbkZpbHRlcnMge1xyXG4vLyAgICAgbGVmdE5vZGU6IHN0cmluZztcclxuLy8gICAgIHJpZ2h0Tm9kZTogc3RyaW5nO1xyXG4vLyAgICAgb3BlcmF0b3I6IHN0cmluZztcclxuLy8gICAgIENvbXBsZXhJZDogbnVtYmVyO1xyXG5cclxuLy8gICAgIGNvbnN0cnVjdG9yKGxlZnQgPSAnJywgcmlnaHQgPSAnJywgb3BlcmF0b3IgPSAnQU5EJywgY29tcGxleElkID0gMikge1xyXG4vLyAgICAgICAgIHRoaXMubGVmdE5vZGUgPSBsZWZ0O1xyXG4vLyAgICAgICAgIHRoaXMucmlnaHROb2RlID0gcmlnaHQ7XHJcbi8vICAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4vLyAgICAgICAgIHRoaXMuQ29tcGxleElkID0gY29tcGxleElkO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbi8vICAgICAgICAgbGV0IHJldFZhbCA9ICcnO1xyXG4vLyAgICAgICAgIGlmICh0aGlzLmxlZnROb2RlICE9PSAnJyAmJiB0aGlzLnJpZ2h0Tm9kZSA9PT0gJycpIHtcclxuLy8gICAgICAgICAgICAgcmV0VmFsID0gdGhpcy5sZWZ0Tm9kZTtcclxuLy8gICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVmdE5vZGUgPT09ICcnICYmIHRoaXMucmlnaHROb2RlICE9PSAnJykge1xyXG4vLyAgICAgICAgICAgICByZXRWYWwgPSB0aGlzLnJpZ2h0Tm9kZTtcclxuLy8gICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVmdE5vZGUgIT09ICcnICYmIHRoaXMucmlnaHROb2RlICE9PSAnJykge1xyXG4vLyAgICAgICAgICAgICByZXRWYWwgPSAneyBcIkNvbXBsZXhJZFwiOicgKyB0aGlzLkNvbXBsZXhJZCArICcsJztcclxuLy8gICAgICAgICAgICAgcmV0VmFsICs9ICcgXCJPcGVyYXRpb25cIjpcIicgKyB0aGlzLm9wZXJhdG9yICsgJ1wiLCc7XHJcbi8vICAgICAgICAgICAgIHJldFZhbCArPSAnIFwiTGVmdE5vZGVcIjogJyArIHRoaXMubGVmdE5vZGUgKyAnLCc7XHJcbi8vICAgICAgICAgICAgIHJldFZhbCArPSAnIFwiUmlnaHROb2RlXCI6ICcgKyB0aGlzLnJpZ2h0Tm9kZSArICd9JztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgcmV0dXJuIHJldFZhbDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGVudW0gREFURV9SQU5HRSB7XHJcbi8vICAgICBOb25lID0gMCxcclxuLy8gICAgIEluVGhlTGFzdCA9IDEsXHJcbi8vICAgICBUb2RheSA9IDIsXHJcbi8vICAgICBUaGlzV2VlayA9IDMsXHJcbi8vICAgICBUaGlzTW9udGggPSA0LFxyXG4vLyAgICAgLypCZWZvcmUgPSA1LCBBZnRlciA9IDYsKi8gQmV0d2VlbiA9IDUsXHJcbi8vICAgICBEdWVJbiA9IDYsXHJcbi8vICAgICBPbiA9IDcsXHJcbi8vICAgICBOb3RJblRoZUxhc3QgPSA4LFxyXG4vLyAgICAgTm90RHVlSW4gPSA5LFxyXG4vLyAgICAgSXNFbXB0eSA9IDEwLFxyXG4vLyAgICAgSXNOb3RFbXB0eSA9IDExLFxyXG4vLyB9XHJcbi8vIGV4cG9ydCBlbnVtIERBVEVfUEVSSU9EIHtcclxuLy8gICAgIE5vbmUgPSAwLFxyXG4vLyAgICAgRGF5cyA9IDEsXHJcbi8vICAgICBXZWVrcyA9IDIsXHJcbi8vICAgICBNb250aHMgPSAzLFxyXG4vLyAgICAgWWVhcnMgPSA0LFxyXG4vLyB9XHJcbi8vIGV4cG9ydCBlbnVtIERBVEVfUkFOR0VfVklFV1RZUEUge1xyXG4vLyAgICAgTm9uZSA9IDAsXHJcbi8vICAgICBQZXJpb2QgPSAxLFxyXG4vLyAgICAgT25lQ2FsZW5kYXIgPSAyLFxyXG4vLyAgICAgVHdvQ2FsZW5kYXJzID0gMyxcclxuLy8gICAgIE5vQ2FsZW5kYXJzID0gNCxcclxuLy8gfVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXRpbGl0aWVzU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHBhcnNlRGF0ZShkYXRlU3RyOiBzdHJpbmcsIHNob3dUaW1lOiBib29sZWFuID0gZmFsc2UpOiBhbnkge1xyXG4gICAgICAgIGxldCByZXRWYWwgPSBudWxsO1xyXG4gICAgICAgIGlmIChkYXRlU3RyICE9PSAnJykge1xyXG4gICAgICAgICAgICByZXRWYWwgPSBuZXcgRGF0ZShkYXRlU3RyKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVRleHQgPSBkYXRlU3RyLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIGlmIChkYXRlVGV4dC5sZW5ndGggPT09IDMgJiYgIXNob3dUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gTnVtYmVyKGRhdGVUZXh0WzBdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKGRhdGVUZXh0WzFdKSAtIDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXkgPSBOdW1iZXIoZGF0ZVRleHRbMl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0VmFsID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJldFZhbCAmJiBpc05hTihyZXRWYWwuZ2V0VGltZSgpKSkge1xyXG4gICAgICAgICAgICByZXRWYWwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0VmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmluZ2lmeURhdGUoZGF0ZTogRGF0ZSwgc2hvd1RpbWU6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGRhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVRleHQgPSBbXTtcclxuICAgICAgICAgICAgZGF0ZVRleHQucHVzaChkYXRlLmdldEZ1bGxZZWFyKCksICctJywgZGF0ZS5nZXRNb250aCgpICsgMSwgJy0nLCBkYXRlLmdldERhdGUoKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvd1RpbWUpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVUZXh0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgJ1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIChkYXRlLmdldEhvdXJzKCkgPCAxMCA/ICcwJyA6ICcnKSArIGRhdGUuZ2V0SG91cnMoKSxcclxuICAgICAgICAgICAgICAgICAgICAnOicsXHJcbiAgICAgICAgICAgICAgICAgICAgKGRhdGUuZ2V0TWludXRlcygpIDwgMTAgPyAnMCcgOiAnJykgKyBkYXRlLmdldE1pbnV0ZXMoKSxcclxuICAgICAgICAgICAgICAgICAgICAnOicsXHJcbiAgICAgICAgICAgICAgICAgICAgKGRhdGUuZ2V0U2Vjb25kcygpIDwgMTAgPyAnMCcgOiAnJykgKyBkYXRlLmdldFNlY29uZHMoKSxcclxuICAgICAgICAgICAgICAgICAgICAnWidcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlVGV4dC5qb2luKCcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0cmluZ2lmeURhdGVXaXRoT2Zmc2V0KGRhdGU6IERhdGUsIHNob3dUaW1lOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChzaG93VGltZSkge1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRNaW51dGVzID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogLTE7XHJcbiAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSAtIG9mZnNldE1pbnV0ZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5RGF0ZShkYXRlLCBzaG93VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWx1ZUh0bWwodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZXMgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBSRUdFWFAgPSAvPFxcLz9bYS16XVtcXHNcXFNdKj4vaTtcclxuICAgICAgICByZXMgPSBSRUdFWFAudGVzdCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgaXNKc29uU3RyaW5nKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgSlNPTi5wYXJzZShzdHIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iXX0=