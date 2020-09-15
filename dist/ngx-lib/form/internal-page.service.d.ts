import { HttpService } from '@pepperi-addons/ngx-lib';
import * as i0 from "@angular/core";
export declare class PepperiInternalPageService {
    private httpService;
    private transactionUrl;
    private objectId;
    private parentId;
    private searchCode;
    private viewType;
    additionalApiName: string;
    constructor(httpService: HttpService);
    getBaseParentUrl(): string;
    getChildren(callbackFunc: any): void;
    initDetails(objectId: string, parentId: string, searchCode: string, callbackFunc: any): void;
    changeChildrenViewType(viewType: string, callbackFunc: any): void;
    changeAdditionalApiName(additionalApiName: string, callbackFunc: any): void;
    childPlusClick(itemId: string, fieldApiName: string, callbackFunc: any): void;
    childMinusClick(itemId: string, fieldApiName: string, callbackFunc: any): void;
    childValueChanged(itemId: string, fieldApiName: string, value: string, callbackFunc: any): void;
    static ɵfac: i0.ɵɵFactoryDef<PepperiInternalPageService, never>;
    static ɵprov: i0.ɵɵInjectableDef<PepperiInternalPageService>;
}
