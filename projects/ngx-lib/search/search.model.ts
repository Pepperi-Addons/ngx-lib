export type PepSearchStateType = 'open' | 'close';

export interface IPepSearchClickEvent {
    value: string;
}

export interface IPepSearchValueChangeEvent {
    value: string;
    top: number;
}

export interface IPepSearchStateChangeEvent {
    state: PepSearchStateType;
}
