import { Injectable } from '@angular/core';
import { HttpService } from '@pepperi-addons/ngx-lib';

@Injectable()
export class PepperiInternalPageService {

    private transactionUrl: string;
    private objectId: string;
    private parentId = '0';
    private searchCode: string;
    private viewType: string;
    public additionalApiName = '';

    constructor(private httpService: HttpService) {
        this.transactionUrl = 'Service1.svc/v1/OrderCenter/Transaction/';
    }

    getBaseParentUrl(): string {
        const url = `${this.transactionUrl}${this.objectId}/ParentLine/${this.parentId}/`;
        return url;
    }

    getChildren(callbackFunc: any): void {
        const body = JSON.stringify({
            TransactionUID: this.objectId,
            SearchCode: this.searchCode,
            AdditionalApiName: this.additionalApiName,
            ParentTransactionLineID: this.parentId,
            ViewType: this.viewType
        });

        // Set the additional api name with view type string.
        const moreParams = this.additionalApiName.length > 0 ?
            `${this.additionalApiName}/${this.viewType}` :
            `''/${this.viewType}`;

        const url = `${this.getBaseParentUrl()}Items/${moreParams}`;

        this.httpService.postWapiApiCall(
            url,
            body).subscribe(
                (res) => { callbackFunc(res); },
                (error) => { },
                () => { }
        );
    }

    initDetails(objectId: string, parentId: string, searchCode: string, callbackFunc: any): void {
        if (!objectId || !parentId) {
            return;
        }

        this.objectId = objectId;
        this.parentId = parentId;
        this.searchCode = searchCode;

        this.httpService.getWapiApiCall(
            `${this.getBaseParentUrl()}ViewTypes`).subscribe(
                (res) => { callbackFunc(res); },
                (error) => { },
                () => { }
        );
    }

    changeChildrenViewType(viewType: string, callbackFunc: any): void {
        this.viewType = viewType;
        this.getChildren(callbackFunc);
    }

    changeAdditionalApiName(additionalApiName: string, callbackFunc: any): void {
        this.additionalApiName = additionalApiName;
        this.getChildren(callbackFunc);
    }

    childPlusClick(itemId: string, fieldApiName: string, callbackFunc: any): void {
        const body = JSON.stringify({
            TransactionUID: this.objectId,
            SearchCode: this.searchCode,
            ParentTransactionLineID: this.parentId,
            TransactionLineUID: itemId,
            FieldApiName: fieldApiName,
            ViewType: this.viewType
        });

        this.httpService.postWapiApiCall(
            `${this.getBaseParentUrl()}IncrementValue`,
            body).subscribe(
                (res) => { callbackFunc(res); },
                (error) => { },
                () => { }
        );
    }

    childMinusClick(itemId: string, fieldApiName: string, callbackFunc: any): void {
        const body = JSON.stringify({
            TransactionUID: this.objectId,
            SearchCode: this.searchCode,
            ParentTransactionLineID: this.parentId,
            TransactionLineUID: itemId,
            FieldApiName: fieldApiName,
            ViewType: this.viewType
        });

        this.httpService.postWapiApiCall(
            `${this.getBaseParentUrl()}DecrementValue`,
            body).subscribe(
                (res) => { callbackFunc(res); },
                (error) => { },
                () => { }
        );
    }

    childValueChanged(itemId: string, fieldApiName: string, value: string, callbackFunc: any): void {
        const body = JSON.stringify({
            TransactionUID: this.objectId,
            SearchCode: this.searchCode,
            ParentTransactionLineID: this.parentId,
            TransactionLineUID: itemId,
            FieldApiName: fieldApiName,
            FieldValue: value,
            ViewType: this.viewType
        });

        this.httpService.postWapiApiCall(
            `${this.getBaseParentUrl()}SetFieldValue`,
            body).subscribe(
                (res) => { callbackFunc(res); },
                (error) => { },
                () => { }
        );
    }

}
