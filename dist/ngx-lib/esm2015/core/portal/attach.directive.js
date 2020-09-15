import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./portal.service";
export class AttachDirective {
    constructor(portalService, templateRef) {
        this.portalService = portalService;
        this.templateRef = templateRef;
    }
    ngOnInit() {
        this.portalService.attach(this.targetName, this.templateRef);
    }
    ngOnDestroy() {
        this.portalService.clear(this.targetName);
    }
}
AttachDirective.ɵfac = function AttachDirective_Factory(t) { return new (t || AttachDirective)(i0.ɵɵdirectiveInject(i1.PortalService), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
AttachDirective.ɵdir = i0.ɵɵdefineDirective({ type: AttachDirective, selectors: [["", "pepAttach", ""]], inputs: { targetName: ["pepAttach", "targetName"] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AttachDirective, [{
        type: Directive,
        args: [{
                selector: '[pepAttach]',
            }]
    }], function () { return [{ type: i1.PortalService }, { type: i0.TemplateRef }]; }, { targetName: [{
            type: Input,
            args: ['pepAttach']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNoLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvc3JjL2NvcmUvcG9ydGFsL2F0dGFjaC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBcUIsS0FBSyxFQUFjLE1BQU0sZUFBZSxDQUFDOzs7QUFNL0UsTUFBTSxPQUFPLGVBQWU7SUFHeEIsWUFDWSxhQUE0QixFQUM1QixXQUE2QjtRQUQ3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFDdEMsQ0FBQztJQUVKLFFBQVE7UUFDSixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs4RUFkUSxlQUFlO29EQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUgzQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7YUFDMUI7MEZBRXVCLFVBQVU7a0JBQTdCLEtBQUs7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtQb3J0YWxTZXJ2aWNlfSBmcm9tICcuL3BvcnRhbC5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbcGVwQXR0YWNoXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdHRhY2hEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBASW5wdXQoJ3BlcEF0dGFjaCcpIHRhcmdldE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBvcnRhbFNlcnZpY2U6IFBvcnRhbFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PlxyXG4gICAgKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hdHRhY2godGhpcy50YXJnZXROYW1lLCB0aGlzLnRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuY2xlYXIodGhpcy50YXJnZXROYW1lKTtcclxuICAgIH1cclxufVxyXG4iXX0=