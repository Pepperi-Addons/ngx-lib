import {Pipe, PipeTransform} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
    name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {
    constructor(private translateService: TranslateService) {}

    private getCounterTranslation(counter: number, key: string) {
        const intervalText = this.translateService.get(`DATE_AGO.${key.toUpperCase()}`) || key;
        const agoText = this.translateService.get(counter === 1 ? 'DATE_AGO.SINGULAR' : 'DATE_AGO.PLURAL') || counter === 1 ? ' ago' : 's ago';
        return `${intervalText}${agoText}`;
    }

    transform(value: any, args?: any): any {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return this.translateService.get('DATE_AGO.JUST_NOW') || 'Just now';
            const intervals: { [key: string]: number } = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0) {
                    this.getCounterTranslation(counter, i);
                }
            }
        }
        return value;
    }

}