import { Component, Input } from '@angular/core';

@Component({
    selector: 'storybook-border-radius',
    template: `<div *ngIf="storyIndex === 1" class="set-grid">
        <div class="side-grid flex-wrap">
            <div class="size-it round-it border-radius-sm">
                <h3 class="body-sm color-invert">.border-radius-sm</h3>
            </div>
            <div class="size-it round-it border-radius-md">
                <h3 class="body-sm color-invert">.border-radius-md</h3>
            </div>
            <div class="size-it round-it border-radius-lg">
                <h3 class="body-sm color-invert">.border-radius-lg</h3>
            </div>
            <div class="size-it round-it border-radius-xl">
                <h3 class="body-sm color-invert">.border-radius-xl</h3>
            </div>
        </div>
    </div> `,
})
export default class BorderRadiusComponent {
    /**
     */
    @Input()
    storyIndex?: number = 1;
}
