import {
    Component,
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
export class PepListChooserComponent {
    private _options: Array<IPepListChooserOption> = null;
    @Input()
    set options(value: Array<IPepListChooserOption>) {
        this._options = value;

        this.menuItems = value.map((opt) => {
            return { key: opt.key, text: opt.text };
        });

        if (this.menuItems?.length === 1) {
            this.breadCrumbsItems = [];
            this.breadCrumbsItems.push(
                new PepBreadCrumbItem({
                    key: this.menuItems[0].key,
                    text: this.menuItems[0].text,
                })
            );
        }
    }
    get options(): Array<IPepListChooserOption> {
        return this._options;
    }

    private _currentList: IPepListChooserOption = null;
    @Input()
    set currentList(value: IPepListChooserOption) {
        this._currentList = value;
        this.currentItem = this.menuItems.find((mi) => mi.key === value.key);
    }
    get currentList(): IPepListChooserOption {
        return this._currentList;
    }

    @Input() sizeType: PepSizeType = 'md';

    @Output()
    change: EventEmitter<IPepListChooserOptionChangeEvent> = new EventEmitter<IPepListChooserOptionChangeEvent>();

    breadCrumbsItems: Array<PepBreadCrumbItem> = null;
    menuItems: Array<PepMenuItem> = null;
    currentItem: PepMenuItem = null;

    onMenuItemClicked(menuItemClickEvent: IPepMenuItemClickEvent): void {
        this.currentList = this.options.find(
            (list) => list.key === menuItemClickEvent.source.key
        );
        this.change.emit({ source: this.currentList });
    }
}
