export type PepBreadCrumbsDisplayType = 'label' | 'items';

export class PepBreadCrumbItem {
    key: string;
    text: string;
    title?: string;
    disabled?: boolean = false;

    constructor(data: Partial<PepBreadCrumbItem>) {
        Object.assign(this, data);
    }
}

export interface IPepBreadCrumbItemClickEvent {
    source: PepBreadCrumbItem;
}
