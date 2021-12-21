import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
    name: 'filterItemCounter'
})
export class FilterItemCounterPipe implements PipeTransform {
    transform(container: FormGroup): number {
        console.log('init filter', container);
        let counter = 0;
        Object.keys(container.controls).forEach(item => { if (item.includes('item') || item.includes('section')) { counter++; } });
        console.log('filter counter', counter);
        return counter;
    }
}