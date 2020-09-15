import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class QuantitySelectorNumber {
    transform(value, allowDecimal) {
        const tmpValue = parseFloat(value);
        if (tmpValue === 0) {
            return '0';
        }
        else if (allowDecimal) {
            return tmpValue.toString();
        }
        else {
            return parseInt(value).toString();
        }
    }
}
QuantitySelectorNumber.ɵfac = function QuantitySelectorNumber_Factory(t) { return new (t || QuantitySelectorNumber)(); };
QuantitySelectorNumber.ɵpipe = i0.ɵɵdefinePipe({ name: "quantitySelectorNumber", type: QuantitySelectorNumber, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(QuantitySelectorNumber, [{
        type: Pipe,
        args: [{ name: 'quantitySelectorNumber' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbnRpdHktc2VsZWN0b3IucGlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3F1YW50aXR5LXNlbGVjdG9yL3F1YW50aXR5LXNlbGVjdG9yLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDOztBQUdsRCxNQUFNLE9BQU8sc0JBQXNCO0lBRS9CLFNBQVMsQ0FBQyxLQUFhLEVBQUUsWUFBcUI7UUFFMUMsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5DLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLEdBQUcsQ0FBQztTQUNkO2FBQ0ksSUFBSSxZQUFZLEVBQUU7WUFDbkIsT0FBTyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDOUI7YUFDSTtZQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQzs7NEZBZlEsc0JBQXNCO3VGQUF0QixzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQURsQyxJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncXVhbnRpdHlTZWxlY3Rvck51bWJlcicgfSlcclxuZXhwb3J0IGNsYXNzIFF1YW50aXR5U2VsZWN0b3JOdW1iZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYWxsb3dEZWNpbWFsOiBib29sZWFuKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgY29uc3QgdG1wVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHRtcFZhbHVlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFsbG93RGVjaW1hbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdG1wVmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=