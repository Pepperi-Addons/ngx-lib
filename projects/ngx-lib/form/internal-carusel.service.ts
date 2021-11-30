import { Injectable } from '@angular/core';
import { PepHttpService } from '@pepperi-addons/ngx-lib';

@Injectable()
export class PepInternalCaruselService {
    private transactionUrl: string;
    private objectId: string;
    private parentId = '0';
    private searchCode: string;
    private viewType: string;
    public additionalApiName = '';

    constructor(private httpService: PepHttpService) {
        this.transactionUrl = 'Service1.svc/v1/OrderCenter/Transaction/';
    }

    initCarusel(
        objectId: string,
        searchCode: string,
        callbackFunc: any
    ): void {
        if (!objectId) {
            return;
        }

        this.objectId = objectId;
        this.searchCode = searchCode;

        this.httpService
            .getWapiApiCall(`${this.transactionUrl}${this.objectId}/CaruselItems`)
            .subscribe(
                (res) => {
                    callbackFunc(res);
                }
                // (error) => {},
                // () => {}
            );
    }
}
