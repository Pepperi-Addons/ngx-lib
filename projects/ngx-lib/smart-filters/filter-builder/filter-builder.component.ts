import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
    ElementRef,
    Renderer2,
    AfterViewInit,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentFactory,
    ChangeDetectorRef

} from '@angular/core';
import { elementAt } from 'rxjs/operators';
import { PepSmartFilterBaseField } from '../common/model/field';
import { IPepSmartFilterData } from '../common/model/filter';//'@pepperi-addons/ngx-lib/smart-filters';
import { FilterBuilderService } from './filter-builder.service';
import { FilterBuilderSectionComponent } from './filter-builder-section/filter-builder-section.component';

@Component({
    selector: 'pep-filter-builder',
    templateUrl: './filter-builder.component.html',
    styleUrls: ['./filter-builder.component.scss'],
})
export class FilterBuilderComponent implements OnInit, AfterViewInit {
    @Input() json: any = null;
    @Input() fields: Array<any> = [];
    //@Input() filters: Array<IPepSmartFilterData>; //created from the json input

    //@Input() filters: any;
    @ViewChild('filterRoot', { read: ViewContainerRef, static: true }) filterRoot: ViewContainerRef;

    _items: Array<IPepSmartFilterData> = new Array<IPepSmartFilterData>();

    constructor(private renderer: Renderer2, private resolver: ComponentFactoryResolver, private changeDetectionRef: ChangeDetectorRef, public filterBuilderService: FilterBuilderService) {
        this._items.push({ item: '123' } as any);
    }

    ngOnInit() {
        /*this.json = { //TEMP
            ComplexId: 4,
            Operation: 'AND',
            LeftNode: {
                ComplexId: 3,
                Operation: 'OR',
                LeftNode: {
                    ComplexId: 2,
                    Operation: 'AND',
                    LeftNode: {
                        ExpressionId: 1,
                        ApiName: 'CampaignName',
                        Operation: 'Contains',
                        Values: ['Pep']
                    },
                    RightNode: {
                        ExpressionId: 2,
                        ApiName: 'AllowDecimal',
                        Operation: 'IsEqual',
                        Values: [true]
                    }
                },
                RightNode: {
                    ExpressionId: 3,
                    ApiName: 'CostPrice',
                    Operation: '>',
                    Values: [5]
                }
            },
            RightNode: {
                ExpressionId: 4,
                ApiName: 'CaseQuantity',
                Operation: '<',
                Values: [
                    5
                ]
            }
        } */

        if (this.json) {
            //this.loadTable();
            let res = this.filterBuilderService.jsonParser(this.json);
            console.log('parsed json', res);
        }


    }

    ngAfterViewInit() {

        /*console.log('root element', this.filterRoot);
        const elem = this.rendered.createElement('div');
        this.rendered.setProperty(elem, 'id', 'filter-id');
        this.rendered.appendChild(this.filterRoot.nativeElement, elem);

        const elem2 = this.rendered.createElement('div');
        this.rendered.setProperty(elem2, 'id', 'inner-filter-id');
        this.rendered.appendChild(elem, elem2); */
        /*this.json = { //TEMP
            ComplexId: 4,
            Operation: 'AND',
            LeftNode: {
                ComplexId: 3,
                Operation: 'OR',
                LeftNode: {
                    ComplexId: 2,
                    Operation: 'AND',
                    LeftNode: {
                        ExpressionId: 1,
                        ApiName: 'CampaignName',
                        Operation: 'Contains',
                        Values: ['Pep']
                    },
                    RightNode: {
                        ExpressionId: 2,
                        ApiName: 'AllowDecimal',
                        Operation: 'IsEqual',
                        Values: [true]
                    }
                },
                RightNode: {
                    ExpressionId: 3,
                    ApiName: 'CostPrice',
                    Operation: '>',
                    Values: [5]
                }
            },
            RightNode: {
                ExpressionId: 4,
                ApiName: 'CaseQuantity',
                Operation: '<',
                values: [
                    5
                ]
            }
        } */

        /*const factory: ComponentFactory<FilterBuilderSectionComponent> = this.resolver.resolveComponentFactory(FilterBuilderSectionComponent);
        let componentRef = this.filterRoot.createComponent(factory);
        componentRef.instance.operator = "AND"; */
        this.filterBuilderService.createFilterTree(this.json, this.fields, this.filterRoot);
        /*
        if (this.json) {
            //this.loadTable();
            //let res = this.filterBuilderService.jsonParser(this.json);
            //console.log('parsed json', res);
            this.filterBuilderService.createFilterTree(this.json, this.filterRoot.nativeElement);            
        } */
    }

    ngAfterViewChecked() {

        this.changeDetectionRef.detectChanges();
        //   console.log('ngAfterViewChecked');
    }

    /*
    onFilterChanged(event, index) {
        console.log('event', event);
        console.log('index', index);
    }

    addItem() {
        console.log('add item');
        this._items.push({ item: '123' } as any);
        //this.filterBuilderService.buildTree();
    }

    loadTable() {
        let currObject = this.json;
        if (this.filterBuilderService.hasProperty(currObject, 'LeftNode') &&
            this.filterBuilderService.hasProperty(currObject, 'RightNode')) {
            this.createSection(currObject.LeftNode);
            this.createSection(currObject.RightNode);
        }
        this.createItem(currObject);
    }

    createSection(obj: any) {
        //draw section of 2 items
        let current: any;
        //create UI section
        if (this.filterBuilderService.hasProperty(obj, 'LeftNode') &&
            this.filterBuilderService.hasProperty(obj, 'RightNode')) {
            this.createSection(obj.LeftNode);
            this.createSection(obj.RightNode);
        }
        this.createItem(obj);

    }

    createItem(obj: any) {
        //create UI item
    } */

    onSaveFiltersClicked() {
        this.filterBuilderService.saveFilterData();
        //console.log('resolved', this.resolver.resolveComponentFactory(FilterBuilderComponent));
        //console.log('filterRoot', this.filterRoot.element.nativeElement);
        //let aaa = this.filterBuilderService.getHostView();
        //let compType: any = aaa.componentType.prototype.getOperator();
        //console.log('compType', compType);
        //console.log('aaaa', aaa);
        //console.log('filterRoot', this.filterBuilderService.getHostView());
        /*for (let i = 0; i < this.filterRoot.length; i++) {
            const elementRef = this.filterRoot.get(i);
            console.log('elementRef', elementRef);
            //elementRef.rootNodes
        } */
    }


}
