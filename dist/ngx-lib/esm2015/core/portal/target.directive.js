import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./portal.service";
export class TargetDirective {
    constructor(portalService, viewContainer) {
        this.portalService = portalService;
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.portalService.addTarget(this.targetName, this.viewContainer);
    }
}
TargetDirective.ɵfac = function TargetDirective_Factory(t) { return new (t || TargetDirective)(i0.ɵɵdirectiveInject(i1.PortalService), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
TargetDirective.ɵdir = i0.ɵɵdefineDirective({ type: TargetDirective, selectors: [["", "pepTarget", ""]], inputs: { targetName: ["pepTarget", "targetName"] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TargetDirective, [{
        type: Directive,
        args: [{
                selector: '[pepTarget]',
            }]
    }], function () { return [{ type: i1.PortalService }, { type: i0.ViewContainerRef }]; }, { targetName: [{
            type: Input,
            args: ['pepTarget']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvc3JjL2NvcmUvcG9ydGFsL3RhcmdldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQW1CLE1BQU0sZUFBZSxDQUFDOzs7QUFNekUsTUFBTSxPQUFPLGVBQWU7SUFHeEIsWUFDWSxhQUE0QixFQUM1QixhQUErQjtRQUQvQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7SUFDeEMsQ0FBQztJQUVKLFFBQVE7UUFDSixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs4RUFWUSxlQUFlO29EQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUgzQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7YUFDMUI7K0ZBRXVCLFVBQVU7a0JBQTdCLEtBQUs7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBPbkluaXQsIElucHV0LCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtQb3J0YWxTZXJ2aWNlfSBmcm9tICcuL3BvcnRhbC5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbcGVwVGFyZ2V0XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYXJnZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCdwZXBUYXJnZXQnKSB0YXJnZXROYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG4gICAgKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hZGRUYXJnZXQodGhpcy50YXJnZXROYW1lLCB0aGlzLnZpZXdDb250YWluZXIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==