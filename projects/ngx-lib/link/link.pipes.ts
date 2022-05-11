import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isUrl'
})
export class IsUrlPipe implements PipeTransform {
    transform(value: string): boolean {
        //const regex = /^(((http(s?)|ftp)\:\/\/)|(www\.))[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.*)/;
        const regex = /^(((http(s?)|ftp)\:\/\/)|(www\.))/;
        return regex.test(value);
    }
}