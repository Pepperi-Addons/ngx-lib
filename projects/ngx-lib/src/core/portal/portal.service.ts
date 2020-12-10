import {Injectable, TemplateRef, ViewContainerRef} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PortalService {
    private targets: Map<string, ViewContainerRef>;

    constructor() {
        this.targets = new Map<string, ViewContainerRef>();
    }

    addTarget(targetName: string, viewContainer: ViewContainerRef): void {
        this.targets.set(targetName, viewContainer);
    }

    attach(targetName: string, template: TemplateRef<any>): void {
        const target = this.getTarget(targetName);

        if (target) {
            target.createEmbeddedView(template);
        }
    }

    clear(targetName: string): void {
        const target = this.getTarget(targetName);

        if (target) {
            target.clear();
        }
    }

    private getTarget(targetName: string): ViewContainerRef {
        return this.targets.has(targetName) ? this.targets.get(targetName) : null;
    }
}
