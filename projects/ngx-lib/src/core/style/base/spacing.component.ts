import { Component, Input } from '@angular/core';

@Component({
    selector: 'storybook-spacing',
    template: `<div *ngIf="storyIndex === 1" class="set-grid">
        <div class="side-grid flex-wrap">
            <div>
                <code class="body-xs">$spacing-2xs</code>
                <div class="size-of-box-2xs"></div>
            </div>
            <div>
                <code class="body-xs">$spacing-xs</code>
                <div class="size-of-box-xs"></div>
            </div>
            <div>
                <code class="body-xs">$spacing-sm</code>
                <div class="size-of-box-sm"></div>
            </div>
            <div>
                <code class="body-xs">$spacing-md</code>
                <div class="size-of-box-md"></div>
            </div>
            <div>
                <code class="body-xs">$spacing-lg</code>
                <div class="size-of-box-lg"></div>
            </div>
            <div>
                <code class="body-xs">$spacing-xl</code>
                <div class="size-of-box-xl"></div>
            </div>
            <div>
                <code class="body-xs">$spacing-xl2</code>
                <div class="size-of-box-xl2"></div>
            </div>
            <div>
                <code class="body-xs">$spacing-xl3</code>
                <div class="size-of-box-xl3"></div>
            </div>
            <div>
                <code class="body-xs">$spacing-xl4</code>
                <div class="size-of-box-xl4"></div>
            </div>
            <div>
                <code class="body-xs">$spacing-xl5</code>
                <div class="size-of-box-xl5"></div>
            </div>
            <div>
                <code class="body-xs">$spacing-xl6</code>
                <div class="size-of-box-xl6"></div>
            </div>
            <div>
                <code class="body-xs">$spacing-xl7</code>
                <div class="size-of-box-xl7"></div>
            </div>
            <div>
                <code class="body-xs">$spacing-xl8</code>
                <div class="size-of-box-xl8"></div>
            </div>
            <div>
                <code class="body-xs">$spacing-xl9</code>
                <div class="size-of-box-xl9"></div>
            </div>
        </div>
    </div> `,
})
export default class SpacingComponent {
    /**
     */
    @Input()
    storyIndex?: number = 1;
}
