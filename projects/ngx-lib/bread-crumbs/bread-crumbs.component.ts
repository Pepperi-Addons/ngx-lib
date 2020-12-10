import { Component, Input, OnInit, Injectable } from '@angular/core';
import { LayoutService } from '@pepperi-addons/ngx-lib';

export class PepBreadCrumbItem {
    text: string;
    onClick: () => void;
    clickParams: any;

    constructor(text: string, onClick: () => void = null, clickParams: any = null) {
        this.text = text;
        this.onClick = onClick;
        this.clickParams = clickParams;
    }
}

@Component({
    selector: 'pep-bread-crumbs',
    templateUrl: './bread-crumbs.component.html',
    styleUrls: ['./bread-crumbs.component.scss']
})
@Injectable()
export class PepBreadCrumbsComponent implements OnInit {

    @Input() breadCrumbs: Array<PepBreadCrumbItem> = [];
    @Input() addSpacing = false;

    breadCrumbSeparator = ' / ';

    constructor(private layoutService: LayoutService) { }

    ngOnInit(): void {
        if (this.layoutService.isRtl()) {
            this.breadCrumbSeparator = ' \\ ';
        }
    }

    getBreadCrumbTitle(): string {
        let breadCrumbTitle = '';

        if (this.breadCrumbs && this.breadCrumbs.length > 0) {
            for (let index = 0; index < this.breadCrumbs.length; index++) {
                if (index < this.breadCrumbs.length - 1) {
                    if (index > 0) {
                        breadCrumbTitle += this.breadCrumbSeparator;
                    }

                    breadCrumbTitle += this.breadCrumbs[index].text;
                }
            }
        }

        return breadCrumbTitle;
    }

}
