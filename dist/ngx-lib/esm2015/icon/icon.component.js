import { ChangeDetectionStrategy, Component, Inject, Input, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "./icon-registry.service";
const _c0 = ["*"];
export class PepperiIconComponent {
    constructor(renderer, element, iconRegistry, document) {
        this.renderer = renderer;
        this.element = element;
        this.iconRegistry = iconRegistry;
        this.document = document;
        this.fillColor = null;
    }
    set name(iconName) {
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        const svgData = this.iconRegistry.getIcon(iconName);
        this.svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
        this.renderer.addClass(this.svgIcon, 'svg-icon');
        this.setFill();
    }
    set fill(value) {
        this.fillColor = value;
        this.setFill();
    }
    svgElementFromString(svgContent) {
        const div = this.document.createElement('DIV');
        div.innerHTML = svgContent;
        return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }
    setFill() {
        if (this.svgIcon && this.fillColor) {
            this.renderer.setStyle(this.svgIcon, 'fill', this.fillColor);
        }
    }
}
PepperiIconComponent.ɵfac = function PepperiIconComponent_Factory(t) { return new (t || PepperiIconComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.PepperiIconRegistry), i0.ɵɵdirectiveInject(DOCUMENT, 8)); };
PepperiIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiIconComponent, selectors: [["pep-icon"]], inputs: { name: "name", fill: "fill" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function PepperiIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["[_nghost-%COMP%] {\n            display: inline-grid;\n        }\n\n        [_nghost-%COMP%]  svg { width: 1.5rem; height: 1.5rem }"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PepperiIconComponent, [{
        type: Component,
        args: [{
                selector: 'pep-icon',
                template: `
        <ng-content></ng-content>
    `,
                styles: [`
        :host {
            display: inline-grid;
        }

        :host::ng-deep svg { width: 1.5rem; height: 1.5rem }
    `],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.PepperiIconRegistry }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { name: [{
            type: Input
        }], fill: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBMkIsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBRW5KLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQWdCM0MsTUFBTSxPQUFPLG9CQUFvQjtJQXVCN0IsWUFDWSxRQUFtQixFQUNuQixPQUFtQixFQUNuQixZQUFpQyxFQUNILFFBQWE7UUFIM0MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNILGFBQVEsR0FBUixRQUFRLENBQUs7UUExQi9DLGNBQVMsR0FBRyxJQUFJLENBQUM7SUEyQnpCLENBQUM7SUF4QkQsSUFDSSxJQUFJLENBQUMsUUFBZ0I7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4RDtRQUNELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQ0ksSUFBSSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFTTyxvQkFBb0IsQ0FBQyxVQUFrQjtRQUMzQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUMzQixPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDM0csQ0FBQztJQUVPLE9BQU87UUFDWCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDaEU7SUFDTCxDQUFDOzt3RkF4Q1Esb0JBQW9CLDhJQTJCTCxRQUFRO3lEQTNCdkIsb0JBQW9COztRQVh6QixrQkFBWTs7a0RBV1Asb0JBQW9CO2NBZGhDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOztLQUVUO2dCQUNELE1BQU0sRUFBRSxDQUFDOzs7Ozs7S0FNUixDQUFDO2dCQUNGLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEOztzQkE0QlEsUUFBUTs7c0JBQUksTUFBTTt1QkFBQyxRQUFRO3dCQXRCNUIsSUFBSTtrQkFEUCxLQUFLO1lBY0YsSUFBSTtrQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEluamVjdCwgSW5wdXQsIE9wdGlvbmFsLCBWaWV3RW5jYXBzdWxhdGlvbiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBlcHBlcmlJY29uUmVnaXN0cnkgfSBmcm9tICcuL2ljb24tcmVnaXN0cnkuc2VydmljZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwZXAtaWNvbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpob3N0OjpuZy1kZWVwIHN2ZyB7IHdpZHRoOiAxLjVyZW07IGhlaWdodDogMS41cmVtIH1cclxuICAgIGBdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcHBlcmlJY29uQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgZmlsbENvbG9yID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3ZnSWNvbjogU1ZHRWxlbWVudDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IG5hbWUoaWNvbk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnN2Z0ljb24pIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5zdmdJY29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3ZnRGF0YSA9IHRoaXMuaWNvblJlZ2lzdHJ5LmdldEljb24oaWNvbk5hbWUpO1xyXG4gICAgICAgIHRoaXMuc3ZnSWNvbiA9IHRoaXMuc3ZnRWxlbWVudEZyb21TdHJpbmcoc3ZnRGF0YSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zdmdJY29uKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc3ZnSWNvbiwgJ3N2Zy1pY29uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgZmlsbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNldEZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgaWNvblJlZ2lzdHJ5OiBQZXBwZXJpSWNvblJlZ2lzdHJ5LFxyXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3ZnRWxlbWVudEZyb21TdHJpbmcoc3ZnQ29udGVudDogc3RyaW5nKTogU1ZHRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gc3ZnQ29udGVudDtcclxuICAgICAgICByZXR1cm4gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIHx8IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRGaWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnN2Z0ljb24gJiYgdGhpcy5maWxsQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnN2Z0ljb24sICdmaWxsJywgdGhpcy5maWxsQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=