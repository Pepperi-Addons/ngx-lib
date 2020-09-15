import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PepperiIconRegistry {
    constructor() {
        this.registry = new Map();
    }
    registerIcons(icons) {
        icons.forEach((icon) => this.registry.set(icon.name, icon.data));
    }
    getIcon(iconName) {
        if (!this.registry.has(iconName)) {
            console.warn(`We could not find the pepperi Icon with the name ${iconName},
                did you add it to the Icon registry?`);
        }
        return this.registry.get(iconName);
    }
}
PepperiIconRegistry.ɵfac = function PepperiIconRegistry_Factory(t) { return new (t || PepperiIconRegistry)(); };
PepperiIconRegistry.ɵprov = i0.ɵɵdefineInjectable({ token: PepperiIconRegistry, factory: PepperiIconRegistry.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiIconRegistry, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1yZWdpc3RyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9pY29uL2ljb24tcmVnaXN0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQU16QyxNQUFNLE9BQU8sbUJBQW1CO0lBSGhDO1FBS1ksYUFBUSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0tBYWhEO0lBWFUsYUFBYSxDQUFDLEtBQW9CO1FBQ3JDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFpQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTSxPQUFPLENBQUMsUUFBZ0I7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0RBQW9ELFFBQVE7cURBQ2hDLENBQUMsQ0FBQztTQUM5QztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7c0ZBZFEsbUJBQW1COzJEQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZoQixNQUFNO2tEQUVULG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1BlcHBlcmlJY29ufSBmcm9tICcuL2ljb24ubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXBwZXJpSWNvblJlZ2lzdHJ5IHtcclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdHJ5ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJJY29ucyhpY29uczogUGVwcGVyaUljb25bXSk6IHZvaWQge1xyXG4gICAgICAgIGljb25zLmZvckVhY2goKGljb246IFBlcHBlcmlJY29uKSA9PiB0aGlzLnJlZ2lzdHJ5LnNldChpY29uLm5hbWUsIGljb24uZGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJY29uKGljb25OYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWdpc3RyeS5oYXMoaWNvbk5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgV2UgY291bGQgbm90IGZpbmQgdGhlIHBlcHBlcmkgSWNvbiB3aXRoIHRoZSBuYW1lICR7aWNvbk5hbWV9LFxyXG4gICAgICAgICAgICAgICAgZGlkIHlvdSBhZGQgaXQgdG8gdGhlIEljb24gcmVnaXN0cnk/YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5LmdldChpY29uTmFtZSk7XHJcbiAgICB9XHJcbn1cclxuIl19