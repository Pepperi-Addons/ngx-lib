export type PepSearchType = 'regular' | 'auto-complete';

export type PepSearchTriggerType = 'keydown' | 'click';

export type PepSearchStateType = 'open' | 'close';

export type PepSearchShrinkType = 'small-screen' | 'always' | 'never';

export interface IPepSearchClickEvent {
    value: string;
}

export interface IPepSearchAutocompleteChangeEvent {
    value: string;
    top: number;
}

export interface IPepSearchStateChangeEvent {
    state: PepSearchStateType;
}
