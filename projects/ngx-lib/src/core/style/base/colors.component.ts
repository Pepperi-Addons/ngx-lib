import { Component, Input } from '@angular/core';

@Component({
    selector: 'storybook-colors',
    template: `<div *ngIf="storyIndex === 1" class="set-grid">
            <div class="color-text-grid">
                <div class="color-text-color-main"></div>
                <div class="color-text-color-dimmed"></div>
                <div class="color-text-color-disabled"></div>
                <div class="color-text-color-invert"></div>
                <div class="color-text-color-link"></div>
                <div class="color-text-color-link-highlight"></div>
                <div class="color-text-color-link-focus"></div>
                <div class="color-text-color-success"></div>
                <div class="color-text-color-caution"></div>
            </div>
        </div>
        <div *ngIf="storyIndex === 3" class="set-grid" id="color-system-primary-invert">
            <h2 class="body-sm">tran</h2>
            <div class="color-system-primary-invert-grid">
                <div class="t00"></div>
                <div class="t10"></div>
                <div class="t20"></div>
                <div class="t30"></div>
                <div class="t40"></div>
                <div class="t50"></div>
                <div class="t60"></div>
                <div class="t70"></div>
                <div class="t80"></div>
                <div class="t90"></div>
            </div>
            <h2 class="body-sm">flat</h2>
            <div class="color-system-primary-invert-grid">
                <div class="flat-l-20"></div>
                <div class="flat-l-10"></div>
                <div class="base"></div>
                <div class="flat-r-10"></div>
                <div class="flat-r-20"></div>
                <div class="flat-r-30"></div>
                <div class="flat-r-40"></div>
            </div>
        </div>
        <div *ngIf="storyIndex === 2" class="set-grid" id="color-system-primary">
            <h2 class="body-sm">tran</h2>
            <div class="color-system-primary-grid">
                <div class="t00"></div>
                <div class="t10"></div>
                <div class="t20"></div>
                <div class="t30"></div>
                <div class="t40"></div>
                <div class="t50"></div>
                <div class="t60"></div>
                <div class="t70"></div>
                <div class="t80"></div>
                <div class="t90"></div>
            </div>
            <h2 class="body-sm">flat</h2>
            <div class="color-system-primary-grid">
                <div class="flat-l-20"></div>
                <div class="flat-l-10"></div>
                <div class="base"></div>
                <div class="flat-r-10"></div>
                <div class="flat-r-20"></div>
                <div class="flat-r-30"></div>
                <div class="flat-r-40"></div>
            </div>
        </div>
        <div *ngIf="storyIndex === 4" class="set-grid" id="color-system-success">
            <h2 class="body-sm">tran</h2>
            <div class="color-system-success-grid">
                <div class="t00"></div>
                <div class="t10"></div>
                <div class="t20"></div>
                <div class="t30"></div>
                <div class="t40"></div>
                <div class="t50"></div>
                <div class="t60"></div>
                <div class="t70"></div>
                <div class="t80"></div>
                <div class="t90"></div>
            </div>
            <h2 class="body-sm">flat</h2>
            <div class="color-system-success-grid">
                <div class="flat-l-20"></div>
                <div class="flat-l-10"></div>
                <div class="base"></div>
                <div class="flat-r-10"></div>
                <div class="flat-r-20"></div>
                <div class="flat-r-30"></div>
                <div class="flat-r-40"></div>
            </div>
        </div>
        <div *ngIf="storyIndex === 5" class="set-grid" id="color-system-caution">
            <h2 class="body-sm">tran</h2>
            <div class="color-system-caution-grid">
                <div class="t00"></div>
                <div class="t10"></div>
                <div class="t20"></div>
                <div class="t30"></div>
                <div class="t40"></div>
                <div class="t50"></div>
                <div class="t60"></div>
                <div class="t70"></div>
                <div class="t80"></div>
                <div class="t90"></div>
            </div>
            <h2 class="body-sm">flat</h2>
            <div class="color-system-caution-grid">
                <div class="flat-l-20"></div>
                <div class="flat-l-10"></div>
                <div class="base"></div>
                <div class="flat-r-10"></div>
                <div class="flat-r-20"></div>
                <div class="flat-r-30"></div>
                <div class="flat-r-40"></div>
            </div>
        </div>
        <div *ngIf="storyIndex === 6" class="set-grid" id="color-user-primary">
            <h2 class="body-sm">tran</h2>
            <div class="color-user-primary-grid">
                <div class="t00"></div>
                <div class="t10"></div>
                <div class="t20"></div>
                <div class="t30"></div>
                <div class="t40"></div>
                <div class="t50"></div>
                <div class="t60"></div>
                <div class="t70"></div>
                <div class="t80"></div>
                <div class="t90"></div>
            </div>
            <h2 class="body-sm">flat</h2>
            <div class="color-user-primary-grid">
                <div class="flat-l-20"></div>
                <div class="flat-l-10"></div>
                <div class="base"></div>
                <div class="flat-r-10"></div>
                <div class="flat-r-20"></div>
                <div class="flat-r-30"></div>
                <div class="flat-r-40"></div>
            </div>
        </div>
        <div *ngIf="storyIndex === 7" class="set-grid" id="color-user-secondary">
            <h2 class="body-sm">tran</h2>
            <div class="color-user-secondary-grid">
                <div class="t00"></div>
                <div class="t10"></div>
                <div class="t20"></div>
                <div class="t30"></div>
                <div class="t40"></div>
                <div class="t50"></div>
                <div class="t60"></div>
                <div class="t70"></div>
                <div class="t80"></div>
                <div class="t90"></div>
            </div>
            <h2 class="body-sm">flat</h2>
            <div class="color-user-secondary-grid">
                <div class="flat-l-20"></div>
                <div class="flat-l-10"></div>
                <div class="base"></div>
                <div class="flat-r-10"></div>
                <div class="flat-r-20"></div>
                <div class="flat-r-30"></div>
                <div class="flat-r-40"></div>
            </div>
        </div>`,
})
export default class ColorsComponent {
    /**
     */
    @Input()
    storyIndex?: number = 1;
}
