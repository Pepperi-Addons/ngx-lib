import {
    Component,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    ViewContainerRef,
    ComponentFactoryResolver,
    OnDestroy,
    ComponentRef,
    ComponentFactory,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    PepFieldBase,
    PepLayoutType,
    IPepFieldValueChangeEvent,
    IPepFieldClickEvent,
} from '@pepperi-addons/ngx-lib';
import { IPepFormFieldClickEvent, IPepFormFieldValueChangeEvent } from './form.model';
import { PepAddressComponent } from '@pepperi-addons/ngx-lib/address';
import { PepAttachmentComponent } from '@pepperi-addons/ngx-lib/attachment';
import { PepCheckboxComponent } from '@pepperi-addons/ngx-lib/checkbox';
import { PepDateComponent } from '@pepperi-addons/ngx-lib/date';
import { PepImageComponent } from '@pepperi-addons/ngx-lib/image';
import { PepImagesFilmstripComponent } from '@pepperi-addons/ngx-lib/images-filmstrip';
import { PepQuantitySelectorComponent } from '@pepperi-addons/ngx-lib/quantity-selector';
import { PepRichHtmlTextareaComponent } from '@pepperi-addons/ngx-lib/rich-html-textarea';
import { PepSelectComponent } from '@pepperi-addons/ngx-lib/select';
import { PepSeparatorComponent } from '@pepperi-addons/ngx-lib/separator';
import { PepSignatureComponent } from '@pepperi-addons/ngx-lib/signature';
import { PepTextareaComponent } from '@pepperi-addons/ngx-lib/textarea';
import { PepTextboxComponent } from '@pepperi-addons/ngx-lib/textbox';
import { PepLinkComponent } from '@pepperi-addons/ngx-lib/link';
import { PepIndicatorsComponent } from './indicators.component';
import { PepInternalButtonComponent } from './internal-button.component';
import { PepInternalMenuComponent } from './internal-menu.component';
import { PepInternalPageComponent } from './internal-page.component';
import { PepInternalCaruselComponent } from './internal-carusel.component';


@Component({
    selector: 'pep-dynamic-field-generator',
    templateUrl: './dynamic-field-generator.component.html',
    styleUrls: ['./dynamic-field-generator.component.scss'],

})
export class PepDynamicFieldGeneratorComponent {
    /*private _controlContainer: ViewContainerRef | undefined;
    @ViewChild('controlContainer', { read: ViewContainerRef, static: true })
    set controlContainer(val: ViewContainerRef) {
        this._controlContainer = val;
    }
    get controlContainer() {
        return this._controlContainer;
    }*/
    //@ViewChild('sectionContainer', { read: ViewContainerRef, static: true }) sectionContainer: ViewContainerRef;
    @ViewChild('controlContainer', { read: ViewContainerRef, static: true }) controlContainer: ViewContainerRef;

    private _field: any;
    @Input()
    set field(value: any) {
        this._field = value;
       // setTimeout(() => {
            this.createControlDynamically();
       // }, 0);
    }
    /*get field(): any {
        return this._field;
    }*/

    @Input() isActive = false;
    @Input() uid: any = null;
    @Input() form: FormGroup;
    @Input() layoutType: PepLayoutType = 'form';
    @Input() showTitle = true;

    @Input() checkForChanges: any = null;
    @Output()
    valueChange: EventEmitter<IPepFieldValueChangeEvent> = new EventEmitter<IPepFieldValueChangeEvent>();
    @Output()
    formValidationChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    elementClick: EventEmitter<IPepFieldClickEvent> = new EventEmitter<IPepFieldClickEvent>();

    @Output() internalFormFieldChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() internalFormFieldClick: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    formValueChange: EventEmitter<IPepFormFieldValueChangeEvent> = new EventEmitter<IPepFormFieldValueChangeEvent>();
    @Output()
    formFieldClick: EventEmitter<IPepFormFieldClickEvent> = new EventEmitter<IPepFormFieldClickEvent>();

    private _containerRef;
    private _resolvedComponent: any;
    private componentMapper = new Map<string, any>();

    constructor(private _resolver: ComponentFactoryResolver) {
        this.createMap(); //temp - move to singleton service
    }

    private hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    createMap() {
        this.componentMapper.set('address', PepAddressComponent);
        this.componentMapper.set('attachment', PepAttachmentComponent);
        this.componentMapper.set('checkbox', PepCheckboxComponent);
        this.componentMapper.set('date', PepDateComponent);
        this.componentMapper.set('image', PepImageComponent);
        this.componentMapper.set('images', PepImagesFilmstripComponent);
        this.componentMapper.set('qs', PepQuantitySelectorComponent);
        this.componentMapper.set('richhtmltextarea', PepRichHtmlTextareaComponent);
        this.componentMapper.set('select', PepSelectComponent);
        this.componentMapper.set('separator', PepSeparatorComponent);
        //this.componentMapper.set('signature', PepSignatureComponent);
        this.componentMapper.set('textarea', PepTextareaComponent);
        this.componentMapper.set('textbox', PepTextboxComponent);
        this.componentMapper.set('link', PepIndicatorsComponent);
        this.componentMapper.set('indicators', PepDateComponent);
        this.componentMapper.set('button', PepInternalButtonComponent);
        this.componentMapper.set('menu', PepInternalMenuComponent);
        this.componentMapper.set('internalPage', PepInternalPageComponent);
        this.componentMapper.set('internalCarusel', PepInternalCaruselComponent);
    }

    createControlDynamically() {
        if (this.controlContainer) {
            //const factory: ComponentFactory<any> = this.getComponentFactory();
            const component = this.componentMapper.get(this._field.controlType);
            if (component) {
                const factory: ComponentFactory<any> = this._resolver.resolveComponentFactory(component);

                if (factory) {
                    // const componentRef: ComponentRef<any> = this.controlContainer.createComponent(factory);
                    const componentRef: ComponentRef<any> = this.controlContainer.createComponent(factory);
                    this._containerRef = componentRef.instance;
                    this.setBaseProperties();
                    this.setControlProperties();
                    this.setAdditionalProperties();
                } else {
                    console.log('no fctory for comp type - ', this._field.controlType);
                }
            }            
            //const factory = this._resolver.resolveComponentFactory(PepTextboxComponent);
            

            //if (this._resolvedComponent) {

            // }

            // this.pepList = componentRef.instance;
        } else {
            //error
        }
    }
/*
    getComponentFactory() {
        switch (this._field.controlType) {
            case 'address':
                this._resolvedComponent = PepAddressComponent;
                return this._resolver.resolveComponentFactory(PepAddressComponent);
            case 'attachment':
                this._resolvedComponent = PepAttachmentComponent;
                return this._resolver.resolveComponentFactory(PepAttachmentComponent);
            case 'checkbox':
                this._resolvedComponent = PepCheckboxComponent;
                return this._resolver.resolveComponentFactory(PepCheckboxComponent);
            case 'date':
                this._resolvedComponent = PepDateComponent;
                return this._resolver.resolveComponentFactory(PepDateComponent);
            case 'image':
                this._resolvedComponent = PepImageComponent;
                return this._resolver.resolveComponentFactory(PepImageComponent);
            case 'images':
                this._resolvedComponent = PepImagesFilmstripComponent;
                return this._resolver.resolveComponentFactory(PepImagesFilmstripComponent);
            case 'qs':
                this._resolvedComponent = PepQuantitySelectorComponent;
                return this._resolver.resolveComponentFactory(PepQuantitySelectorComponent);
            case 'richhtmltextarea':
                this._resolvedComponent = PepRichHtmlTextareaComponent;
                return this._resolver.resolveComponentFactory(PepRichHtmlTextareaComponent);
            case 'select':
                this._resolvedComponent = PepSelectComponent;
                return this._resolver.resolveComponentFactory(PepSelectComponent);
            case 'separator':
                this._resolvedComponent = PepSeparatorComponent;
                return this._resolver.resolveComponentFactory(PepSeparatorComponent);
            case 'signature':
                this._resolvedComponent = PepSignatureComponent;
                return this._resolver.resolveComponentFactory(PepSignatureComponent);
            case 'textarea':
                this._resolvedComponent = PepTextareaComponent;
                return this._resolver.resolveComponentFactory(PepTextareaComponent);
            case 'textbox':
                this._resolvedComponent = PepTextboxComponent;
                return this._resolver.resolveComponentFactory(PepTextboxComponent);
            case 'link':
                this._resolvedComponent = PepLinkComponent;
                return this._resolver.resolveComponentFactory(PepLinkComponent);
            case 'indicators':
                this._resolvedComponent = PepIndicatorsComponent;
                return this._resolver.resolveComponentFactory(PepIndicatorsComponent);
            case 'button':
                this._resolvedComponent = PepInternalButtonComponent;
                return this._resolver.resolveComponentFactory(PepInternalButtonComponent);
            case 'menu':
                this._resolvedComponent = PepInternalMenuComponent;
                return this._resolver.resolveComponentFactory(PepInternalMenuComponent);
            case 'internalPage':
                this._resolvedComponent = PepInternalPageComponent;
                return this._resolver.resolveComponentFactory(PepInternalPageComponent);
            case 'internalCarusel':
                this._resolvedComponent = PepInternalCaruselComponent;
                return this._resolver.resolveComponentFactory(PepInternalCaruselComponent);
        }
    } */

    setBaseProperties() {
        switch (this._field.controlType) {
            case 'address':
            case 'separator':
                this._containerRef.form = this.form;
                this._containerRef.layoutType = this.layoutType;
                break;
            case 'attachment':
            case 'checkbox':
            case 'date':
            case 'link':
            case 'qs':
            case 'richhtmltextarea':
            case 'select':
            case 'textarea':
            case 'textbox':
                this._containerRef.form = this.form;
                this._containerRef.layoutType = this.layoutType;
                this._containerRef.showTitle = this.showTitle;
                this._containerRef.isActive = this.isActive;
                break;
            case 'image':
                this._containerRef.form = this.form;
                this._containerRef.uid = this.uid;
                this._containerRef.layoutType = this.layoutType;
                this._containerRef.isActive = this.isActive;
                break;
            case 'images':
                this._containerRef.form = this.form;
                this._containerRef.uid = this.uid;
                this._containerRef.layoutType = this.layoutType;
                this._containerRef.showTitle = this.showTitle;
                break;
            case 'signature':
                this._containerRef.form = this.form;
                this._containerRef.layoutType = this.layoutType;
                this._containerRef.isActive = this.isActive;
                break;
            case 'indicators':
            case 'menu':
                this._containerRef.layoutType = this.layoutType;
                break;
            case 'button':
                this._containerRef.form = this.form;
                this._containerRef.layoutType = this.layoutType;
                break;
            case 'internalPage':
                this._containerRef.field = this._field;
                this._containerRef.layoutType = this.layoutType;
                break;
            case 'internalCarusel':
                this._containerRef.field = this._field;
                break;
        }
    }

    setControlProperties() {
        Object.entries(this._field).forEach((prop: [string, any]) => {
            console.log('prop', prop);
            if (prop[1] !== undefined && this.hasProperty(this._containerRef, prop[0])) {
                this._containerRef[prop[0]] = prop[1];
            }
        })
    }

    setAdditionalProperties() {

    }
}