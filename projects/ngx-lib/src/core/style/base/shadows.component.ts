import { Component, Input } from '@angular/core';

@Component({
    selector: 'shadows-colors',
    template: `<div *ngIf="storyIndex === 1" class="set-grid">
        <h2 class="body-md color-dimmed">XS Shadows</h2>
        <div class="shadow-grid">
            <div class="shadow-xs-xsoft">
                <p class="body-sm"><code>.shadow-xs-xsoft</code></p>
            </div>
            <div class="shadow-xs-soft">
                <p class="body-sm"><code>.shadow-xs-soft</code></p>
            </div>
            <div class="shadow-xs-regular">
                <p class="body-sm"><code>.shadow-xs-regular</code></p>
            </div>
            <div class="shadow-xs-hard">
                <p class="body-sm"><code>.shadow-xs-hard</code></p>
            </div>
        </div>
        <h2 class="body-md color-dimmed">SM Shadows</h2>
        <div class="shadow-grid">
            <div class="shadow-sm-xsoft">
                <p class="body-sm"><code>.shadow-sm-xsoft</code></p>
            </div>
            <div class="shadow-sm-soft">
                <p class="body-sm"><code>.shadow-sm-soft</code></p>
            </div>
            <div class="shadow-sm-regular">
                <p class="body-sm"><code>.shadow-sm-regular</code></p>
            </div>
            <div class="shadow-sm-hard">
                <p class="body-sm"><code>.shadow-sm-hard</code></p>
            </div>
        </div>
        <h2 class="body-md color-dimmed">MD Shadows</h2>
        <div class="shadow-grid">
            <div class="shadow-md-xsoft">
                <p class="body-sm"><code>.shadow-md-xsoft</code></p>
            </div>
            <div class="shadow-md-soft">
                <p class="body-sm"><code>.shadow-md-soft</code></p>
            </div>
            <div class="shadow-md-regular">
                <p class="body-sm"><code>.shadow-md-regular</code></p>
            </div>
            <div class="shadow-md-hard">
                <p class="body-sm"><code>.shadow-md-hard</code></p>
            </div>
        </div>
        <h2 class="body-md color-dimmed">LG Shadows</h2>
        <div class="shadow-grid">
            <div class="shadow-lg-xsoft">
                <p class="body-sm">
                    <code>.shadow-lg-xsoft</code>
                </p>
            </div>
            <div class="shadow-lg-soft">
                <p class="body-sm"><code>.shadow-lg-soft</code></p>
            </div>
            <div class="shadow-lg-regular">
                <p class="body-sm"><code>.shadow-lg-regular</code></p>
            </div>
            <div class="shadow-lg-hard">
                <p class="body-sm"><code>.shadow-lg-hard</code></p>
            </div>
        </div>
        <h2 class="body-md color-dimmed">XL Shadows</h2>
        <div class="shadow-grid">
            <div class="shadow-xl-xsoft">
                <p class="body-sm"><code>.shadow-xl-xsoft</code></p>
            </div>
            <div class="shadow-xl-soft">
                <p class="body-sm"><code>.shadow-xl-soft</code></p>
            </div>
            <div class="shadow-xl-regular">
                <p class="body-sm"><code>.shadow-xl-regular</code></p>
            </div>
            <div class="shadow-xl-hard">
                <p class="body-sm"><code>.shadow-xl-hard</code></p>
            </div>
        </div>
    </div> `,
})
export default class ShadowsComponent {
    /**
     */
    @Input()
    storyIndex?: number = 1;
}
