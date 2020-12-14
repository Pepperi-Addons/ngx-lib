import { PepIconType } from './icon-generated.model';

export class PepIcon {
    name: PepIconType;
    position?: 'start' | 'end' = 'start';

    constructor(data: Partial<PepIcon>) {
        Object.assign(this, data);
    }
}
