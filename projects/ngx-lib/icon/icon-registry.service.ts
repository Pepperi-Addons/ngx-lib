import { Injectable } from '@angular/core';
import { IPepIconData, PepIconType } from './icon-generated.model';

@Injectable({
    providedIn: 'root',
})
export class PepIconRegistry {
    private registry = new Map<PepIconType, string>();

    public registerIcons(icons: IPepIconData[]): void {
        icons.forEach((icon: IPepIconData) =>
            this.registry.set(icon.name, icon.data)
        );
    }

    public getIcon(iconName: PepIconType): string | undefined {
        if (!this.registry.has(iconName)) {
            console.warn(`We could not find the Icon with the name ${iconName},
                did you add it to the Icon registry?`);
        }
        return this.registry.get(iconName);
    }
}
