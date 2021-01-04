import {
    Component,
    OnInit,
    Injectable,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import { PepSizeType } from '@pepperi-addons/ngx-lib';
import {
    PepMenuItem,
    IPepMenuItemClickEvent,
} from '@pepperi-addons/ngx-lib/menu';
import { PepBreadCrumbItem } from '@pepperi-addons/ngx-lib/bread-crumbs';

export class IPepListChooserOption {
    key: string;
    text: string;
}

export interface IPepListChooserOptionChangeEvent {
    source: IPepListChooserOption;
}

@Component({
    selector: 'pep-list-chooser',
    templateUrl: './list-chooser.component.html',
    styleUrls: ['./list-chooser.component.scss'],
})
@Injectable()
export class PepListChooserComponent implements OnInit {
    private _options: Array<IPepListChooserOption> = null;
    @Input()
    set options(value: Array<IPepListChooserOption>) {
        this._options = value;

        this.menuItems = value.map((opt) => {
            return { key: opt.key, text: opt.text };
        });

        if (this.menuItems?.length === 1) {
            this.breadCrumbs = [];
            this.breadCrumbs.push(
                new PepBreadCrumbItem(this.menuItems[0].text)
            );
        }
    }
    get options(): Array<IPepListChooserOption> {
        return this._options;
    }

    @Input() sizeType: PepSizeType = 'md';

    @Output()
    change: EventEmitter<IPepListChooserOptionChangeEvent> = new EventEmitter<IPepListChooserOptionChangeEvent>();

    breadCrumbs: Array<PepBreadCrumbItem> = null;
    menuItems: Array<PepMenuItem> = null;

    constructor() {}

    ngOnInit(): void {}

    onMenuItemClicked(menuItemClickEvent: IPepMenuItemClickEvent): void {
        const currentList = this.options.find(
            (list) => list.key === menuItemClickEvent.source.key
        );
        this.change.emit({ source: currentList });
    }
}
