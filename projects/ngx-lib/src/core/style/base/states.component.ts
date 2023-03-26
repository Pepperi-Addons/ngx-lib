import { Component, Input } from '@angular/core';

@Component({
    selector: 'storybook-states',
    template: `<div *ngIf="storyIndex === 1" class="set-grid">
        <div class="color-text-grid">
            <span>
                <span class="side-grid-col">
                    <h2 class="body-lg color-dimmed">Weak</h2>
                    <pre class="body-xs">class="pep-button weak"</pre>
                    <button class="size-it pep-button weak"></button>
                    <hr />
                    <h3 class="body-sm color-dimmed">Caution</h3>
                    <pre class="body-xs">class="pep-button weak caution"</pre>
                    <button class="size-it pep-button weak caution"></button>
                    <h3 class="body-sm color-dimmed">Success</h3>
                    <pre class="body-xs">class="pep-button weak success"</pre>
                    <button class="size-it pep-button weak success"></button>
                    <h3 class="body-sm color-dimmed">System</h3>
                    <pre class="body-xs">class="pep-button weak system-primary"</pre>
                    <button class="size-it pep-button weak system-primary"></button>
                    <h3 class="body-sm color-dimmed">Primary</h3>
                    <pre class="body-xs">class="pep-button weak user-primary"</pre>
                    <button class="size-it pep-button weak user-primary"></button>
                    <h3 class="body-sm color-dimmed">Secondary</h3>
                    <pre class="body-xs">class="pep-button weak user-secondary"</pre>
                    <button class="size-it pep-button weak user-secondary"></button>
                </span>
            </span>
            <span>
                <span class="side-grid-col">
                    <h2 class="body-lg color-dimmed">Regular</h2>
                    <pre class="body-xs">class="pep-button regular"</pre>
                    <button class="size-it pep-button regular"></button>
                    <hr />
                    <h3 class="body-sm color-dimmed">...</h3>
                    <pre class="body-xs">class="pep-button regular caution"</pre>
                    <button class="size-it pep-button regular caution"></button>
                    <h3 class="body-sm color-dimmed">...</h3>
                    <pre class="body-xs">class="pep-button regular success"</pre>
                    <button class="size-it pep-button regular success"></button>
                    <h3 class="body-sm color-dimmed">...</h3>
                    <pre class="body-xs">class="pep-button regular system-primary"</pre>
                    <button class="size-it pep-button regular system-primary"></button>
                    <h3 class="body-sm color-dimmed">...</h3>
                    <pre class="body-xs">class="pep-button regular user-primary"</pre>
                    <button class="size-it pep-button regular user-primary"></button>
                    <h3 class="body-sm color-dimmed">...</h3>
                    <pre class="body-xs">class="pep-button regular user-secondary"</pre>
                    <button class="size-it pep-button regular user-secondary"></button>
                </span>
            </span>
            <span>
                <span class="side-grid-col">
                    <h2 class="body-lg color-dimmed">Strong</h2>
                    <pre class="body-xs">class="pep-button strong"</pre>
                    <button class="size-it pep-button strong"></button>
                    <hr />
                    <h3 class="body-sm color-dimmed">...</h3>
                    <pre class="body-xs">class="pep-button strong caution"</pre>
                    <button class="size-it pep-button strong caution"></button>
                    <h3 class="body-sm color-dimmed">...</h3>
                    <pre class="body-xs">class="pep-button strong success"</pre>
                    <button class="size-it pep-button strong success"></button>
                    <h3 class="body-sm color-dimmed">...</h3>
                    <pre class="body-xs">class="pep-button strong system-primary"</pre>
                    <button class="size-it pep-button strong system-primary"></button>
                    <h3 class="body-sm color-dimmed">...</h3>
                    <pre class="body-xs">class="pep-button strong user-primary"</pre>
                    <button class="size-it pep-button strong user-primary"></button>
                    <h3 class="body-sm color-dimmed">...</h3>
                    <pre class="body-xs">class="pep-button strong user-secondary"</pre>
                    <button class="size-it pep-button strong user-secondary"></button>
                </span>
            </span>
        </div>
    </div> `,
})
export default class StatesComponent {
    /**
     */
    @Input()
    storyIndex?: number = 1;
}
