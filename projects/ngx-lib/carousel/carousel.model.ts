export interface PepCarouselElement extends HTMLElement {
    parentNode: HTMLElement;
    cloneNode: (deep: boolean) => HTMLDivElement;
}

export interface PepCarouselOption {
    disabled: boolean;
    snapDisabled: boolean;
    scrollbarHidden: boolean;
    yDisabled: boolean;
    xDisabled: boolean;
    nav: boolean;
}
