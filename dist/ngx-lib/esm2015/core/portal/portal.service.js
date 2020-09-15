import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PortalService {
    constructor() {
        this.targets = new Map();
    }
    addTarget(targetName, viewContainer) {
        this.targets.set(targetName, viewContainer);
    }
    attach(targetName, template) {
        const target = this.getTarget(targetName);
        if (target) {
            target.createEmbeddedView(template);
        }
    }
    clear(targetName) {
        const target = this.getTarget(targetName);
        if (target) {
            target.clear();
        }
    }
    getTarget(targetName) {
        return this.targets.has(targetName) ? this.targets.get(targetName) : null;
    }
}
PortalService.ɵfac = function PortalService_Factory(t) { return new (t || PortalService)(); };
PortalService.ɵprov = i0.ɵɵdefineInjectable({ token: PortalService, factory: PortalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PortalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3NyYy9jb3JlL3BvcnRhbC9wb3J0YWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFnQyxNQUFNLGVBQWUsQ0FBQzs7QUFLeEUsTUFBTSxPQUFPLGFBQWE7SUFHdEI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUE0QixDQUFDO0lBQ3ZELENBQUM7SUFFRCxTQUFTLENBQUMsVUFBa0IsRUFBRSxhQUErQjtRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFrQixFQUFFLFFBQTBCO1FBQ2pELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFMUMsSUFBSSxNQUFNLEVBQUU7WUFDUixNQUFNLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQWtCO1FBQ3BCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFMUMsSUFBSSxNQUFNLEVBQUU7WUFDUixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRU8sU0FBUyxDQUFDLFVBQWtCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDOUUsQ0FBQzs7MEVBN0JRLGFBQWE7cURBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlYsTUFBTTtrREFFVCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9ydGFsU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHRhcmdldHM6IE1hcDxzdHJpbmcsIFZpZXdDb250YWluZXJSZWY+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IG5ldyBNYXA8c3RyaW5nLCBWaWV3Q29udGFpbmVyUmVmPigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhcmdldCh0YXJnZXROYW1lOiBzdHJpbmcsIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICB0aGlzLnRhcmdldHMuc2V0KHRhcmdldE5hbWUsIHZpZXdDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaCh0YXJnZXROYW1lOiBzdHJpbmcsIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5nZXRUYXJnZXQodGFyZ2V0TmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKHRhcmdldE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZ2V0VGFyZ2V0KHRhcmdldE5hbWUpO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhcmdldCh0YXJnZXROYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRzLmhhcyh0YXJnZXROYW1lKSA/IHRoaXMudGFyZ2V0cy5nZXQodGFyZ2V0TmFtZSkgOiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==