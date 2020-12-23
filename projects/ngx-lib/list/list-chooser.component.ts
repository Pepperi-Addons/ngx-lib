import { Component, OnInit, Injectable, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { PepLayoutService, PepScreenSizeType, PepSizeType } from '@pepperi-addons/ngx-lib';
import { PepMenuItem, IPepMenuItemClickEvent } from '@pepperi-addons/ngx-lib/menu';
import { PepBreadCrumbItem } from '@pepperi-addons/ngx-lib/bread-crumbs';

@Component({
    selector: 'pep-list-chooser',
    templateUrl: './list-chooser.component.html',
    styleUrls: ['./list-chooser.component.scss']
})

@Injectable()
export class PepListChooserComponent implements OnInit, OnChanges {

    @Input() options: Array<PepMenuItem> = null;
    // @Input() selectedOption: PepMenuItem = null;
    @Input() sizeType: PepSizeType = 'md';

    @Output() optionClick: EventEmitter<IPepMenuItemClickEvent> = new EventEmitter<IPepMenuItemClickEvent>();

    PepScreenSizeType = PepScreenSizeType;
    breadCrumbs: Array<PepBreadCrumbItem> = null;
    screenSize: PepScreenSizeType;

    constructor(
        public layoutService: PepLayoutService
    ) {
        this.layoutService.onResize$.subscribe(size => {
            this.screenSize = size;
        });
    }

    ngOnInit(): void {

    }

    ngOnChanges(changes): void {
        if (this.options?.length > 0) {
            if (this.options.length === 1) {
                this.breadCrumbs = [];
                this.breadCrumbs.push(new PepBreadCrumbItem(this.options[0].text));
            } else {
                // this.selectedOption = this.selectedOption != null ? this.selectedOption : this.options[0];
            }
        }
    }

    onOptionClicked(opt: PepMenuItem): void {
        // this.selectedOption = opt;
        this.optionClick.emit({ source: opt });
    }
}
