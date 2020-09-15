import {Injectable, TemplateRef, ViewContainerRef} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PortalService {
    private targets: Map<string, ViewContainerRef>;

    constructor() {
        this.targets = new Map<string, ViewContainerRef>();
    }

    addTarget(targetName: string, viewContainer: ViewContainerRef) {
        this.targets.set(targetName, viewContainer);
    }

    attach(targetName: string, template: TemplateRef<any>) {
        const target = this.getTarget(targetName);

        if (target) {
            target.createEmbeddedView(template);
        }
    }

    clear(targetName: string) {
        const target = this.getTarget(targetName);

        if (target) {
            target.clear();
        }
    }

    private getTarget(targetName: string) {
        return this.targets.has(targetName) ? this.targets.get(targetName) : null;
    }
}
