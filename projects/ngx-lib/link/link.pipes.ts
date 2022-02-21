import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isUrl'
})
export class IsUrlPipe implements PipeTransform {
    transform(value: string): boolean {
        // const regex = /^((ht|f)tp(s?):\/\/)?([w]{3}[\.])?/;
        const regex = /^((http(s?)|ftp)\:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.*)/;
        //console.log(`pipe - value - ${value} is valid url - ${regex.test(value)}`);
        return regex.test(value);
    }
}