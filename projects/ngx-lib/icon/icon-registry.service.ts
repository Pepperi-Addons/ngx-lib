import {Injectable} from '@angular/core';
import {PepperiIcon} from './icon.model';

@Injectable({
    providedIn: 'root'
})
export class PepperiIconRegistry {

    private registry = new Map<string, string>();

    public registerIcons(icons: PepperiIcon[]): void {
        icons.forEach((icon: PepperiIcon) => this.registry.set(icon.name, icon.data));
    }

    public getIcon(iconName: string): string | undefined {
        if (!this.registry.has(iconName)) {
            console.warn(`We could not find the pepperi Icon with the name ${iconName},
                did you add it to the Icon registry?`);
        }
        return this.registry.get(iconName);
    }
}
