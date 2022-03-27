import { EmbeddedViewRef, Injectable, TemplateRef } from '@angular/core';
import { PepLayoutService } from '@pepperi-addons/ngx-lib';
import { ComponentType } from '@angular/cdk/portal';
import { PepDefaultSnackBarComponent } from './default-snack-bar.component';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { PepSnackBarData } from './snack-bar.model';

@Injectable({
    providedIn: 'root',
})
export class PepSnackBarService {
    constructor(
        private snackBar: MatSnackBar,
        private layoutService: PepLayoutService
    ) { }

    getSnackBarConfig(
        options: {
            announcementMessage?: string; 
            duration?: number;
            panelClass?: string;
            horizontalPosition?: MatSnackBarHorizontalPosition;
            verticalPosition?: MatSnackBarVerticalPosition 
        } = {}
    ): MatSnackBarConfig {
        const snackBarConfig = new MatSnackBarConfig();

        snackBarConfig.announcementMessage = options.announcementMessage;
        snackBarConfig.direction = this.layoutService.isRtl() ? 'rtl' : 'ltr';
        
        if (options.duration >= 0) {
            snackBarConfig.duration = options.duration;
        }

        snackBarConfig.panelClass = ['pep-snack-bar'];
        if (options.panelClass) {
            snackBarConfig.panelClass.push(options.panelClass);
        }

        snackBarConfig.horizontalPosition = options.horizontalPosition || 'end';
        snackBarConfig.verticalPosition = options.verticalPosition || 'bottom'

        return snackBarConfig;
    }

    openDefaultSnackBar(
        data: PepSnackBarData,
        config: MatSnackBarConfig = null
    ): MatSnackBarRef<PepDefaultSnackBarComponent> {
        if (!config) {
            config = this.getSnackBarConfig();
        }

        config.data = data;
        const snackBarRef = this.snackBar.openFromComponent(PepDefaultSnackBarComponent, config);
        return snackBarRef;
    }

    openSnackBarFromComponent<T>(
        component: ComponentType<T>,
        data: any = {},
        config: MatSnackBarConfig = null
    ): MatSnackBarRef<T> {
        if (!config) {
            config = this.getSnackBarConfig();
        }

        config.data = data;
        const snackBarRef = this.snackBar.openFromComponent(component, config);
        return snackBarRef;
    }

    openSnackBarFromTemplate<T>(
        template: TemplateRef<any>,
        data: any = {},
        config: MatSnackBarConfig = null
    ): MatSnackBarRef<EmbeddedViewRef<any>> {
        if (!config) {
            config = this.getSnackBarConfig();
        }

        config.data = data;
        const snackBarRef = this.snackBar.openFromTemplate(template, config);
        return snackBarRef;
    }
}
