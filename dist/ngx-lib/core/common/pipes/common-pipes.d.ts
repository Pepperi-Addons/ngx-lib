import { PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class CapitalizePipe implements PipeTransform {
    transform(value: any): any;
    static ɵfac: i0.ɵɵFactoryDef<CapitalizePipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<CapitalizePipe, "capitalize">;
}
export declare class EncodePipe implements PipeTransform {
    transform(value: any): any;
    static ɵfac: i0.ɵɵFactoryDef<EncodePipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<EncodePipe, "encodePipe">;
}
export declare class EscapePipe implements PipeTransform {
    transform(value: any): any;
    static ɵfac: i0.ɵɵFactoryDef<EscapePipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<EscapePipe, "escapePipe">;
}
export declare class ReplaceLineBreaks implements PipeTransform {
    transform(value: string): string;
    static ɵfac: i0.ɵɵFactoryDef<ReplaceLineBreaks, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<ReplaceLineBreaks, "replaceLineBreaks">;
}
export declare class DateFormatter implements PipeTransform {
    transform(value: Date, culture: any, showTime?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDef<DateFormatter, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<DateFormatter, "dateFormatter">;
}
export declare class DateStringFormatter implements PipeTransform {
    transform(value: string, culture: any, showTime?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDef<DateStringFormatter, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<DateStringFormatter, "dateStringFormatter">;
}
export declare class SafeHtmlPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(html: any): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDef<SafeHtmlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SafeHtmlPipe, "safeHtml">;
}
export declare class SafePipe implements PipeTransform {
    protected sanitizer: DomSanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl;
    static ɵfac: i0.ɵɵFactoryDef<SafePipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SafePipe, "safe">;
}
export declare class SplitUppercase implements PipeTransform {
    transform(value: string): string;
    static ɵfac: i0.ɵɵFactoryDef<SplitUppercase, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SplitUppercase, "splitUppercase">;
}
export declare class ToNumber implements PipeTransform {
    transform(value: string): number;
    static ɵfac: i0.ɵɵFactoryDef<ToNumber, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<ToNumber, "toNumber">;
}
