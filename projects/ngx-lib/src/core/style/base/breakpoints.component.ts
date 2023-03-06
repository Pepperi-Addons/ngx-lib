import { Component, Input } from '@angular/core';

@Component({
    selector: 'storybook-breakpoints',
    template: `<div *ngIf="storyIndex === 1" class="set-grid">
        <div class="size-it this-is-screen-size"></div>
    </div> `,
})
export default class BreakpointsComponent {
    /**
     */
    @Input()
    storyIndex?: number = 1;
}
