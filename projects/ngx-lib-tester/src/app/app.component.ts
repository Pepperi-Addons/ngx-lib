import { Component, OnInit } from '@angular/core';
import {
    PepCustomizationService,
    PepLoaderService,
    PepStyleType,
} from '@pepperi-addons/ngx-lib';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    footerHeight: number;
    showLoading = false;

    constructor(
        public customizationService: PepCustomizationService,
        public loaderService: PepLoaderService
    ) {
        // this.loaderService.show();
        this.loaderService.onChanged$.subscribe((show) => {
            this.showLoading = show;
        });
    }

    ngOnInit() {
        this.customizationService.setThemeVariables();
        this.customizationService.hideSettings();

        this.customizationService.footerHeight.subscribe((footerHeight) => {
            this.footerHeight = footerHeight;
        });
    }

    getTopBarStyle() {
        return document.documentElement.style.getPropertyValue(
            PepCustomizationService.STYLE_TOP_HEADER_KEY
        ) as PepStyleType;
    }

    navigateHome() {
        alert('Home');
    }

    getButtonClassName() {
        return this.getTopBarStyle() === 'strong'
            ? 'keep-background-on-focus'
            : 'invert';
    }
}
