import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PepWindowScrollingService {

    // Inject a STYLE element for overrides the scroll behavior, this way we can add | remove it in order to the behavior.
    private styleTag: HTMLStyleElement;

    constructor() {
        this.styleTag = this.buildStyleElement();
    }

    // Disable the scrolling feature on the main viewport.
    public disable(): void {
        document.body.appendChild( this.styleTag );
    }

    // Re-enable the scrolling feature on the main viewport.
    public enable(): void {
        document.body.removeChild( this.styleTag );
    }

    // Return a Style element that will prevent scrolling on the body.
    private buildStyleElement(): HTMLStyleElement {
        const style = document.createElement('style');

        style.type = 'text/css';
        style.setAttribute( 'data-debug', 'Injected by WindowScrolling service.' );
        style.textContent = `
            body {
                overflow: hidden !important ;
            }
        `;

        return( style );
    }
}
