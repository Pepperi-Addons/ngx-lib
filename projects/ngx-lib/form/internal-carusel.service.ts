import { Injectable } from '@angular/core';
import { PepHttpService } from '@pepperi-addons/ngx-lib';

@Injectable()
export class PepInternalCaruselService {
    private eventUrl: string;

    constructor(private httpService: PepHttpService) {
        this.eventUrl = 'Service1.svc/v1/EmitEvent';
    }

    emitEvent(uiObjectKey: string, fieldKey: string, fieldValue: string, eventName: string, callbackFunc: any) {
        const body = {
            'EventKey': eventName,
            'EventData': JSON.stringify({
                UIObjectKey: uiObjectKey,
                FieldID: fieldKey,
                Value: fieldValue
            })
        };

        this.httpService.postWapiApiCall(`${this.eventUrl}`, body).subscribe(
            (res) => {
                console.log(res);
                callbackFunc(res);
            }
            // (error) => {},
            // () => {}
        );
    }
}
