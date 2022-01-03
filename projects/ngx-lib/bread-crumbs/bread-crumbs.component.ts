import {
    Component,
    Input,
    OnInit,
    Injectable,
    Output,
    EventEmitter,
} from '@angular/core';
import { PepLayoutService, PepScreenSizeType } from '@pepperi-addons/ngx-lib';
import {
    IPepBreadCrumbItemClickEvent,
    PepBreadCrumbItem,
    PepBreadCrumbsDisplayType,
} from './bread-crumbs.model';
import {
    pepIconArrowLeft,
    pepIconArrowRight,
} from '@pepperi-addons/ngx-lib/icon';
@Component({
    selector: 'pep-bread-crumbs',
    templateUrl: './bread-crumbs.component.html',
    styleUrls: ['./bread-crumbs.component.scss', './bread-crumbs.component.theme.scss'],
})
@Injectable()
export class PepBreadCrumbsComponent implements OnInit {
    private _items: Array<PepBreadCrumbItem> = [];
    @Input()
    set items(value: Array<PepBreadCrumbItem>) {
        this._items = value;
        this.setupShrinkItems();
    }
    get items(): Array<PepBreadCrumbItem> {
        return this._items;
    }

    private _displayType: PepBreadCrumbsDisplayType = 'label';
    @Input()
    set displayType(value: PepBreadCrumbsDisplayType) {
        this._displayType = value;
        this.setupShrinkItems();
    }
    get displayType(): PepBreadCrumbsDisplayType {
        return this._displayType;
    }

    @Input() addSpacing = false;

    @Output()
    itemClick: EventEmitter<IPepBreadCrumbItemClickEvent> = new EventEmitter<IPepBreadCrumbItemClickEvent>();

    charSeparator = ' / ';
    iconSeparator: string = pepIconArrowRight.name;
    shrinkItems = false;
    screenSize: PepScreenSizeType;

    constructor(private layoutService: PepLayoutService) { }

    ngOnInit(): void {
        this.layoutService.onResize$.pipe().subscribe((size) => {
            this.screenSize = size;
            this.setupShrinkItems();
        });

        if (this.layoutService.isRtl()) {
            this.charSeparator = ' \\ ';
            this.iconSeparator = pepIconArrowLeft.name;
        }
    }

    private setupShrinkItems() {
        if (this.displayType === 'items' && this.items.length > 1) {
            this.shrinkItems = this.screenSize > PepScreenSizeType.SM;
        }
    }

    getLabelTitle(): string {
        let labelTitle = '';

        if (this.items && this.items.length > 0) {
            for (let index = 0; index < this.items.length; index++) {
                if (index < this.items.length - 1) {
                    if (index > 0) {
                        labelTitle += this.charSeparator;
                    }

                    labelTitle += this.items[index].text;
                }
            }
        }

        return labelTitle;
    }

    onBreadCrumbItemClick(item: PepBreadCrumbItem): void {
        this.itemClick.emit({ source: item });
    }
}
