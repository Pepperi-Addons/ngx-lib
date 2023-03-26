import { Component, Input } from '@angular/core';

@Component({
    selector: 'storybook-z-index',
    template: `<div *ngIf="storyIndex === 1" class="set-grid">
        <div class="z-grid">
            <div class="z-grid__1">
                <code>variables.$z-index-high</code>
            </div>
            <div class="z-grid__2">
                <code>variables.$z-index-medium</code>
            </div>
            <div class="z-grid__3"><code>variables.$z-index-low</code></div>
            <div class="z-grid__4">
                <code>variables.$z-index-lowest</code>
            </div>
        </div>
    </div> `,
})
export default class ZIndexComponent {
    /**
     */
    @Input()
    storyIndex?: number = 1;
}
