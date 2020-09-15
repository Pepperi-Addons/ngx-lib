import * as i0 from "@angular/core";
export declare class UtilitiesService {
    constructor();
    parseDate(dateStr: string, showTime?: boolean): any;
    stringifyDate(date: Date, showTime?: boolean): string;
    stringifyDateWithOffset(date: Date, showTime?: boolean): string;
    isValueHtml(value: string): boolean;
    isJsonString(str: string): boolean;
    static ɵfac: i0.ɵɵFactoryDef<UtilitiesService, never>;
    static ɵprov: i0.ɵɵInjectableDef<UtilitiesService>;
}
