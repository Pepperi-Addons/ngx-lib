import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class CapitalizePipe {
    transform(value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
}
CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) { return new (t || CapitalizePipe)(); };
CapitalizePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "capitalize", type: CapitalizePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CapitalizePipe, [{
        type: Pipe,
        args: [{ name: 'capitalize' }]
    }], null, null); })();
export class EncodePipe {
    transform(value) {
        if (value) {
            const v = btoa(value);
            return v;
        }
        return value;
    }
}
EncodePipe.ɵfac = function EncodePipe_Factory(t) { return new (t || EncodePipe)(); };
EncodePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "encodePipe", type: EncodePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EncodePipe, [{
        type: Pipe,
        args: [{ name: 'encodePipe' }]
    }], null, null); })();
export class EscapePipe {
    transform(value) {
        if (value) {
            const v = escape(value);
            return v;
        }
        return value;
    }
}
EscapePipe.ɵfac = function EscapePipe_Factory(t) { return new (t || EscapePipe)(); };
EscapePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "escapePipe", type: EscapePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EscapePipe, [{
        type: Pipe,
        args: [{ name: 'escapePipe' }]
    }], null, null); })();
export class ReplaceLineBreaks {
    transform(value) {
        const newValue = value.replace(/(<br\ ?\/?>)/g, ' ');
        return newValue;
    }
}
ReplaceLineBreaks.ɵfac = function ReplaceLineBreaks_Factory(t) { return new (t || ReplaceLineBreaks)(); };
ReplaceLineBreaks.ɵpipe = i0.ɵɵdefinePipe({ name: "replaceLineBreaks", type: ReplaceLineBreaks, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ReplaceLineBreaks, [{
        type: Pipe,
        args: [{ name: 'replaceLineBreaks' }]
    }], null, null); })();
export class DateFormatter {
    transform(value, culture, showTime = false) {
        let res = '';
        value = new Date(value);
        if (value) {
            res = value.toLocaleDateString(culture || 'en-US');
            if (showTime) {
                res += ' ' + value.toLocaleTimeString((culture || 'en-US'), { hour: '2-digit', minute: '2-digit' });
            }
        }
        return res;
    }
}
DateFormatter.ɵfac = function DateFormatter_Factory(t) { return new (t || DateFormatter)(); };
DateFormatter.ɵpipe = i0.ɵɵdefinePipe({ name: "dateFormatter", type: DateFormatter, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateFormatter, [{
        type: Pipe,
        args: [{ name: 'dateFormatter' }]
    }], null, null); })();
export class DateStringFormatter {
    transform(value, culture, showTime = false) {
        let res = '';
        const tmpDate = new Date(value);
        if (value) {
            res = tmpDate.toLocaleDateString(culture || 'en-US');
            if (showTime) {
                res += ' ' + tmpDate.toLocaleTimeString(culture || 'en-US');
            }
        }
        return res;
    }
}
DateStringFormatter.ɵfac = function DateStringFormatter_Factory(t) { return new (t || DateStringFormatter)(); };
DateStringFormatter.ɵpipe = i0.ɵɵdefinePipe({ name: "dateStringFormatter", type: DateStringFormatter, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateStringFormatter, [{
        type: Pipe,
        args: [{ name: 'dateStringFormatter' }]
    }], null, null); })();
export class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
SafeHtmlPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SafeHtmlPipe, [{
        type: Pipe,
        args: [{ name: 'safeHtml' }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
export class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
SafePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SafePipe, [{
        type: Pipe,
        args: [{
                name: 'safe'
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
export class SplitUppercase {
    transform(value) {
        const newValue = value.replace(/([a-z])([A-Z])/g, '$1 $2');
        return newValue;
    }
}
SplitUppercase.ɵfac = function SplitUppercase_Factory(t) { return new (t || SplitUppercase)(); };
SplitUppercase.ɵpipe = i0.ɵɵdefinePipe({ name: "splitUppercase", type: SplitUppercase, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SplitUppercase, [{
        type: Pipe,
        args: [{ name: 'splitUppercase' }]
    }], null, null); })();
export class ToNumber {
    transform(value) {
        return parseInt(value);
    }
}
ToNumber.ɵfac = function ToNumber_Factory(t) { return new (t || ToNumber)(); };
ToNumber.ɵpipe = i0.ɵɵdefinePipe({ name: "toNumber", type: ToNumber, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToNumber, [{
        type: Pipe,
        args: [{ name: 'toNumber' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXBpcGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9zcmMvY29yZS9jb21tb24vcGlwZXMvY29tbW9uLXBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDOzs7QUFJbEQsTUFBTSxPQUFPLGNBQWM7SUFFdkIsU0FBUyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxLQUFLLEVBQUU7WUFDUCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7OzRFQVBRLGNBQWM7bUVBQWQsY0FBYztrREFBZCxjQUFjO2NBRDFCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7O0FBYTVCLE1BQU0sT0FBTyxVQUFVO0lBRW5CLFNBQVMsQ0FBQyxLQUFVO1FBQ2hCLElBQUksS0FBSyxFQUFFO1lBQ1AsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOztvRUFSUSxVQUFVOytEQUFWLFVBQVU7a0RBQVYsVUFBVTtjQUR0QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFOztBQWU1QixNQUFNLE9BQU8sVUFBVTtJQUVuQixTQUFTLENBQUMsS0FBVTtRQUNoQixJQUFJLEtBQUssRUFBRTtZQUNQLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsQ0FBQztTQUNaO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7b0VBUlEsVUFBVTsrREFBVixVQUFVO2tEQUFWLFVBQVU7Y0FEdEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTs7QUFhNUIsTUFBTSxPQUFPLGlCQUFpQjtJQUMxQixTQUFTLENBQUMsS0FBYTtRQUNuQixNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOztrRkFKUSxpQkFBaUI7NkVBQWpCLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBRDdCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTs7QUFTbkMsTUFBTSxPQUFPLGFBQWE7SUFDdEIsU0FBUyxDQUFDLEtBQVcsRUFBRSxPQUFZLEVBQUUsV0FBb0IsS0FBSztRQUMxRCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxLQUFLLEVBQUU7WUFDUCxHQUFHLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQztZQUNuRCxJQUFJLFFBQVEsRUFBRTtnQkFDVixHQUFHLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7YUFDdkc7U0FDSjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7MEVBWFEsYUFBYTtxRUFBYixhQUFhO2tEQUFiLGFBQWE7Y0FEekIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTs7QUFnQi9CLE1BQU0sT0FBTyxtQkFBbUI7SUFDNUIsU0FBUyxDQUFDLEtBQWEsRUFBRSxPQUFZLEVBQUUsV0FBb0IsS0FBSztRQUM1RCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLEtBQUssRUFBRTtZQUNQLEdBQUcsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDO1lBQ3JELElBQUksUUFBUSxFQUFFO2dCQUNWLEdBQUcsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQzthQUMvRDtTQUNKO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDOztzRkFYUSxtQkFBbUI7aUZBQW5CLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBRC9CLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTs7QUFnQnJDLE1BQU0sT0FBTyxZQUFZO0lBQ3JCLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBSSxDQUFDO0lBRWhELFNBQVMsQ0FBQyxJQUFJO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7O3dFQUxRLFlBQVk7K0RBQVosWUFBWTtrREFBWixZQUFZO2NBRHhCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7O0FBWTFCLE1BQU0sT0FBTyxRQUFRO0lBQ2pCLFlBQXNCLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBSSxDQUFDO0lBRTNDLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBWTtRQUNyQyxRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWxFLEtBQUssT0FBTyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXBFLEtBQUssUUFBUSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXRFLEtBQUssS0FBSyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWhFLEtBQUssYUFBYSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWhGLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLElBQUksRUFBRSxDQUFDLENBQUM7U0FFcEU7SUFDTCxDQUFDOztnRUFsQlEsUUFBUTt1REFBUixRQUFRO2tEQUFSLFFBQVE7Y0FIcEIsSUFBSTtlQUFDO2dCQUNGLElBQUksRUFBRSxNQUFNO2FBQ2Y7O0FBdUJELE1BQU0sT0FBTyxjQUFjO0lBQ3ZCLFNBQVMsQ0FBQyxLQUFhO1FBQ25CLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs7NEVBSlEsY0FBYzt1RUFBZCxjQUFjO2tEQUFkLGNBQWM7Y0FEMUIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOztBQVNoQyxNQUFNLE9BQU8sUUFBUTtJQUNqQixTQUFTLENBQUMsS0FBYTtRQUNuQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOztnRUFIUSxRQUFROzJEQUFSLFFBQVE7a0RBQVIsUUFBUTtjQURwQixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sLCBTYWZlU3R5bGUsIFNhZmVTY3JpcHQsIFNhZmVVcmwsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnY2FwaXRhbGl6ZScgfSlcclxuZXhwb3J0IGNsYXNzIENhcGl0YWxpemVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ2VuY29kZVBpcGUnIH0pXHJcbmV4cG9ydCBjbGFzcyBFbmNvZGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGJ0b2EodmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5kZWNsYXJlIGZ1bmN0aW9uIGVzY2FwZShzOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdlc2NhcGVQaXBlJyB9KVxyXG5leHBvcnQgY2xhc3MgRXNjYXBlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBlc2NhcGUodmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdyZXBsYWNlTGluZUJyZWFrcycgfSlcclxuZXhwb3J0IGNsYXNzIFJlcGxhY2VMaW5lQnJlYWtzIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8oPGJyXFwgP1xcLz8+KS9nLCAnICcpO1xyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiAnZGF0ZUZvcm1hdHRlcicgfSlcclxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXR0ZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogRGF0ZSwgY3VsdHVyZTogYW55LCBzaG93VGltZTogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVzID0gJyc7XHJcbiAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IHZhbHVlLnRvTG9jYWxlRGF0ZVN0cmluZyhjdWx0dXJlIHx8ICdlbi1VUycpO1xyXG4gICAgICAgICAgICBpZiAoc2hvd1RpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJlcyArPSAnICcgKyB2YWx1ZS50b0xvY2FsZVRpbWVTdHJpbmcoKGN1bHR1cmUgfHwgJ2VuLVVTJyksIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdkYXRlU3RyaW5nRm9ybWF0dGVyJyB9KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVN0cmluZ0Zvcm1hdHRlciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGN1bHR1cmU6IGFueSwgc2hvd1RpbWU6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJlcyA9ICcnO1xyXG4gICAgICAgIGNvbnN0IHRtcERhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IHRtcERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKGN1bHR1cmUgfHwgJ2VuLVVTJyk7XHJcbiAgICAgICAgICAgIGlmIChzaG93VGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzICs9ICcgJyArIHRtcERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKGN1bHR1cmUgfHwgJ2VuLVVTJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiAnc2FmZUh0bWwnIH0pXHJcbmV4cG9ydCBjbGFzcyBTYWZlSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICAgIHRyYW5zZm9ybShodG1sKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnc2FmZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNhZmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IGFueSwgdHlwZTogc3RyaW5nKTogU2FmZUh0bWwgfCBTYWZlU3R5bGUgfCBTYWZlU2NyaXB0IHwgU2FmZVVybCB8IFNhZmVSZXNvdXJjZVVybCB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2h0bWwnOiByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnc3R5bGUnOiByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3NjcmlwdCc6IHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U2NyaXB0KHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3VybCc6IHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3Jlc291cmNlVXJsJzogcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2FmZSB0eXBlIHNwZWNpZmllZDogJHt0eXBlfWApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ3NwbGl0VXBwZXJjYXNlJyB9KVxyXG5leHBvcnQgY2xhc3MgU3BsaXRVcHBlcmNhc2UgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMSAkMicpO1xyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiAndG9OdW1iZXInIH0pXHJcbmV4cG9ydCBjbGFzcyBUb051bWJlciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICB9XHJcbn0iXX0=