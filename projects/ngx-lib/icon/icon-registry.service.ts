import { Injectable } from '@angular/core';
import { PepIconData } from './icon-generated.model';

@Injectable({
    providedIn: 'root'
})
export class PepIconRegistry {

    private registry = new Map<string, string>();

    public registerIcons(icons: PepIconData[]): void {
        icons.forEach((icon: PepIconData) => this.registry.set(icon.name, icon.data));
    }

    public getIcon(iconName: string): string | undefined {
        iconName = iconName.trim();

        if (!this.registry.has(iconName)) {
            console.warn(`We could not find the Icon with the name ${iconName},
                did you add it to the Icon registry?`);
        }
        return this.registry.get(iconName);
    }
}
