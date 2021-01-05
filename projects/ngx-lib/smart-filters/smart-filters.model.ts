export type PepSmartFilterType = 'string' | 'boolean' | 'number' | 'date' | 'date-time';

export class PepSmartFilter {
    id: string;
    title: string;
    type: PepSmartFilterType;
    isOpen?: boolean = false;
    hasFilter?: boolean = true
}
