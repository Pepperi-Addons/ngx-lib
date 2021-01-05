import {
    Compiler, Component,
    Injector, ViewChild,
    ViewContainerRef,
    NgModuleFactory,
    Input, OnChanges, SimpleChanges,
} from '@angular/core';
import { LoaderService } from './loader.service';
import { ModuleLoader, AddonOptions } from './loader.model';


// import as variable to export to dependecies sub-addon
import * as angularAnimations from '@angular/animations';
import * as angularCommon from '@angular/common';
import * as angularCommonHttp from '@angular/common/http';
import * as angularCore from '@angular/core';
import * as angularForms from '@angular/forms';
import * as angularPlatformBrowser from '@angular/platform-browser';
// import * as pepperiNgxLib from '@pepperi-addons/ngx-lib';
// import * as pepTextBox from '@pepperi-addons/ngx-lib/textbox';
import * as tslib from 'tslib';
import * as rxjs from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';
import * as matSelect from '@angular/material/select';
import * as matCore from '@angular/material/core';



@Component({
    selector: 'pep-addon',
    template: '<ng-container #placeHolder></ng-container>'
})
export class PepRemoteLoaderComponent implements OnChanges {

    @Input() options: AddonOptions;
    @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
    viewContainer: ViewContainerRef;
    private dependencies = {
        '@angular/core': angularCore,
        '@angular/common': angularCommon,
        '@angular/common/http': angularCommonHttp,
        '@angular/forms': angularForms,
        '@angular/animations': angularAnimations,
        '@angular/platform-browser': angularPlatformBrowser,
        'tslib': tslib,
        'rxjs': rxjs,
        'rxjsOperators': rxjsOperators,
        '@angular/material/select': matSelect,
        '@angular/material/core': matCore,
        // '@pepperi-addons/ngx-lib': pepperiNgxLib,
        // '@pepperi-addons/ngx-lib/textbox': pepTextBox,
    };

    constructor(
        private compiler: Compiler,
        private injector: Injector,
        private service: LoaderService
    ) {
    }

    async ngOnChanges(changes: SimpleChanges) {
        if (changes?.options?.currentValue) {
            const options = changes?.options?.currentValue;
            this.viewContainer.clear();
            const moduleToCompile = await this.service.register(this.dependencies)
                .then(res => this.service.load(options.remoteEntry));
            if (moduleToCompile) {
                let moduleFactory: NgModuleFactory<any>;
                if (moduleToCompile[options.exposedModule] instanceof NgModuleFactory) {
                    moduleFactory = moduleToCompile[options.exposedModule];
                } else {
                    moduleFactory = this.compiler.compileModuleSync(moduleToCompile[options.exposedModule]);
                }
                const moduleRef = moduleFactory.create(this.injector);
                const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(moduleToCompile[options.componentName]);
                this.viewContainer.createComponent(compFactory, null, this.injector);
            }
        }

    }

}
