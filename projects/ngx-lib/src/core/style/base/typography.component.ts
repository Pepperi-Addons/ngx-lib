import { Component, Input } from '@angular/core';

@Component({
    selector: 'storybook-typography',
    template: `<div *ngIf="storyIndex === 1" class="set-grid">
        <pre>.title-2xs</pre>
        <span class="title-2xs">This is a 2XS title </span>
        <pre>.title-xs</pre>
        <span class="title-xs">This is a XS title </span>
        <pre>.title-sm</pre>
        <span class="title-sm">This is a SM title </span>
        <pre>.title-md</pre>
        <span class="title-md">This is a MD title </span>
        <pre>.title-lg</pre>
        <span class="title-lg">This is a LG title </span>
        <pre>.title-xl</pre>
        <span class="title-xl">This is a XL title </span>
        <pre>.title-2xl</pre>
        <span class="title-2xl">This is a 2XL title </span>
        <pre>.title-3xl</pre>
        <span class="title-3xl">This is a 3XL title </span>
        <pre>.title-4xl</pre>
        <span class="title-4xl">This is a 4XL title </span>
        <pre>.title-5xl</pre>
        <span class="title-5xl">This is a 5XL title </span>
        <pre>.title-6xl</pre>
        <span class="title-6xl">This is a 6XL title </span>
        <pre>.title-7xl</pre>
        <span class="title-7xl">This is a 7XL title </span>
        <pre>.title-8xl</pre>
        <span class="title-8xl">This is a 8XL title </span>
    </div>
    <div *ngIf="storyIndex === 2" class="set-grid">
        <pre>&#60;h6&#62;</pre>
        <h6>This is an h6 tag</h6>
        <pre>&#60;h5&#62;</pre>
        <h5>This is an h5 tag</h5>
        <pre>&#60;h4&#62;</pre>
        <h4>This is an h4 tag</h4>
        <pre>&#60;h3&#62;</pre>
        <h3>This is an h3 tag</h3>
        <pre>&#60;h2&#62;</pre>
        <h2>This is an h2 tag</h2>
        <pre>&#60;h1&#62;</pre>
        <h1>This is an h1 tag</h1>
        </div>
    <div *ngIf="storyIndex === 3" class="set-grid">
        <pre>.body-2xs</pre>
        <span class="body-2xs">This is a 2XS body class</span>
        <pre>.body-xs</pre>
        <span class="body-xs">This is a XS body class</span>
        <pre>.body-sm</pre>
        <span class="body-sm">This is a SM body class</span>
        <pre>.body-md</pre>
        <span class="body-md">This is a MD body class</span>
        <pre>.body-lg</pre>
        <span class="body-lg">This is a LG body class</span>
        <pre>.body-xl</pre>
        <span class="body-xl">This is a XL body class</span>
        <pre>.body-2xl</pre>
        <span class="body-2xl">This is a 2XL body class</span>
        <hr/>
        <p>This is a classless <strong>&#60;p&#62;</strong> tag</p>
        </div>
    <div *ngIf="storyIndex === 4" class="set-grid">
        <pre>.color-user-primary</pre>
        <p class="color-user-primary">This one is using the <strong>primary</strong> color class</p>
        <pre>.color-user-secondary</pre>
        <p class="color-user-secondary">This one is using the <strong>secondary</strong> color class</p>
        <pre>.color-main</pre>
        <p class="color-main">This one is using the <strong>main</strong> color class</p>
        <pre>.color-invert</pre>
        <p class="color-invert">This one is using the <strong>invert</strong> color class</p>
        <pre>.color-link</pre>
        <p class="color-link">This one is using the <strong>link</strong> color class</p>
        <pre>.color-caution</pre>
        <p class="color-caution">This one is using the <strong>caution</strong> color class</p>
        <pre>.color-success</pre>
        <p class="color-success">This one is using the <strong>success</strong> color class</p>
        <pre>.color-dimmed class</pre>
        <p class="color-dimmed">This one is using the <strong>dimmed</strong> color class</p>
    </div>
    <div *ngIf="storyIndex === 5" class="set-grid">
        <p class="color-user-primary body-md">Unify B2B eCommerce, SFA & Trade Promotions</p>
        <h4 class="color-dimmed body-xl">Unify B2B eCommerce, SFA & Trade Promotions</h4>
        <span class="color-caution title-md">Unify B2B eCommerce, SFA & Trade Promotions</span>
    </div>`,
})
export default class TypographyComponent {
    /**
   */
    @Input()
    storyIndex?: number = 1;
}
