import { PipeTransform, Pipe, Injectable } from '@angular/core';

@Injectable()
@Pipe({
    name: 'translate',
    pure: false // required to update the value when the promise is resolved
})
export class TranslatePipe implements PipeTransform {
    constructor() { }
    transform(query: string, ...args: any[]): any {
        if (!query || query.length === 0) {
            return query;
        }

        return 'TODO';
    }
}
