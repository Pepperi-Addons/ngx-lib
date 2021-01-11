import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pepQuantitySelectorNumber' })
export class PepQuantitySelectorNumberPipe implements PipeTransform {
    transform(value: string, allowDecimal: boolean): string {
        const tmpValue = parseFloat(value);

        if (tmpValue === 0) {
            return '0';
        } else if (allowDecimal) {
            return tmpValue.toString();
        } else {
            return parseInt(value).toString();
        }
    }
}
