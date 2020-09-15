(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@pepperi-addons/ngx-lib/icon', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global['pepperi-addons'] = global['pepperi-addons'] || {}, global['pepperi-addons']['ngx-lib'] = global['pepperi-addons']['ngx-lib'] || {}, global['pepperi-addons']['ngx-lib'].icon = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var PepperiIconRegistry = /** @class */ (function () {
        function PepperiIconRegistry() {
            this.registry = new Map();
        }
        PepperiIconRegistry.prototype.registerIcons = function (icons) {
            var _this = this;
            icons.forEach(function (icon) { return _this.registry.set(icon.name, icon.data); });
        };
        PepperiIconRegistry.prototype.getIcon = function (iconName) {
            if (!this.registry.has(iconName)) {
                console.warn("We could not find the pepperi Icon with the name " + iconName + ",\n                did you add it to the Icon registry?");
            }
            return this.registry.get(iconName);
        };
        return PepperiIconRegistry;
    }());
    PepperiIconRegistry.ɵfac = function PepperiIconRegistry_Factory(t) { return new (t || PepperiIconRegistry)(); };
    PepperiIconRegistry.ɵprov = i0.ɵɵdefineInjectable({ token: PepperiIconRegistry, factory: PepperiIconRegistry.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiIconRegistry, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    var _c0 = ["*"];
    var PepperiIconComponent = /** @class */ (function () {
        function PepperiIconComponent(renderer, element, iconRegistry, document) {
            this.renderer = renderer;
            this.element = element;
            this.iconRegistry = iconRegistry;
            this.document = document;
            this.fillColor = null;
        }
        Object.defineProperty(PepperiIconComponent.prototype, "name", {
            set: function (iconName) {
                if (this.svgIcon) {
                    this.element.nativeElement.removeChild(this.svgIcon);
                }
                var svgData = this.iconRegistry.getIcon(iconName);
                this.svgIcon = this.svgElementFromString(svgData);
                this.element.nativeElement.appendChild(this.svgIcon);
                this.renderer.addClass(this.svgIcon, 'svg-icon');
                this.setFill();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PepperiIconComponent.prototype, "fill", {
            set: function (value) {
                this.fillColor = value;
                this.setFill();
            },
            enumerable: false,
            configurable: true
        });
        PepperiIconComponent.prototype.svgElementFromString = function (svgContent) {
            var div = this.document.createElement('DIV');
            div.innerHTML = svgContent;
            return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
        };
        PepperiIconComponent.prototype.setFill = function () {
            if (this.svgIcon && this.fillColor) {
                this.renderer.setStyle(this.svgIcon, 'fill', this.fillColor);
            }
        };
        return PepperiIconComponent;
    }());
    PepperiIconComponent.ɵfac = function PepperiIconComponent_Factory(t) { return new (t || PepperiIconComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(PepperiIconRegistry), i0.ɵɵdirectiveInject(common.DOCUMENT, 8)); };
    PepperiIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PepperiIconComponent, selectors: [["pep-icon"]], inputs: { name: "name", fill: "fill" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function PepperiIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        }, styles: ["[_nghost-%COMP%] {\n            display: inline-grid;\n        }\n\n        [_nghost-%COMP%]  svg { width: 1.5rem; height: 1.5rem }"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pep-icon',
                        template: "\n        <ng-content></ng-content>\n    ",
                        styles: ["\n        :host {\n            display: inline-grid;\n        }\n\n        :host::ng-deep svg { width: 1.5rem; height: 1.5rem }\n    "],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () {
            return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: PepperiIconRegistry }, { type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [common.DOCUMENT]
                        }] }];
        }, { name: [{
                    type: i0.Input
                }], fill: [{
                    type: i0.Input
                }] });
    })();

    var pepperiIconArrowBack = {
        name: 'arrow_back',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M19.713 4.309c.383.412.383 1.08 0 1.491l-3.916 5.454a1.113 1.113 0 000 1.492l3.916 5.454c.383.412.383 1.08 0 1.491a.93.93 0 01-1.384 0l-5.756-6.2c-.764-.823-.764-2.159 0-2.982l5.756-6.2a.93.93 0 011.384 0zm-7 0c.383.412.383 1.08 0 1.491l-3.916 5.454a1.113 1.113 0 000 1.492l3.916 5.454c.383.412.383 1.08 0 1.491a.93.93 0 01-1.384 0l-5.756-6.2c-.764-.823-.764-2.159 0-2.982l5.756-6.2a.93.93 0 011.384 0z\"/></svg>"
    };
    var pepperiIconArrowDownAlt = {
        name: 'arrow_down_alt',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M11.933 20a2 2 0 01-.059-.004L12 20a2.026 2.026 0 01-.527-.07l-.029-.009a1.476 1.476 0 01-.121-.039l-.01-.004a2.006 2.006 0 01-.405-.202l-.017-.012-6-4a2 2 0 012.218-3.328L10 14.263 10 6a2 2 0 114 0v8.263l2.89-1.927a2 2 0 012.22 3.328l-6 4-.012.008c-.124.081-.257.15-.398.202l-.012.004-.11.037a1.984 1.984 0 01-.025.008l-.011.002a1.315 1.315 0 01-.124.031l-.026.005a1.194 1.194 0 01-.131.022c-.007 0-.014.002-.02.003l-.02.002a1.995 1.995 0 01-.053.005l-.044.003a1.789 1.789 0 01-.057.003z\"/></svg>"
    };
    var pepperiIconArrowDown = {
        name: 'arrow_down',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M5.8 9.287l5.454 3.916c.412.382 1.08.382 1.492 0L18.2 9.287a1.113 1.113 0 011.491 0 .93.93 0 010 1.384l-6.2 5.756c-.823.764-2.159.764-2.982 0l-6.2-5.756a.93.93 0 010-1.384 1.113 1.113 0 011.491 0z\"/></svg>"
    };
    var pepperiIconArrowEither = {
        name: 'arrow_either',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M7.35 14.215l4.09 2.937a.835.835 0 001.12 0l4.09-2.937a.835.835 0 011.118 0 .698.698 0 010 1.038l-4.65 4.317a1.67 1.67 0 01-2.237 0l-4.65-4.317a.698.698 0 010-1.038.835.835 0 011.12 0zM13.12 4.43l4.65 4.317a.698.698 0 010 1.038.835.835 0 01-1.12 0l-4.09-2.937a.835.835 0 00-1.118 0L7.35 9.785a.835.835 0 01-1.12 0 .698.698 0 010-1.038l4.65-4.317a1.67 1.67 0 012.238 0z\"/></svg>"
    };
    var pepperiIconArrowLeftAlt = {
        name: 'arrow_left_alt',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M4 11.933a2 2 0 01.004-.059L4 12a2.026 2.026 0 01.07-.527l.009-.029a1.476 1.476 0 01.039-.121l.004-.01a2.006 2.006 0 01.202-.405l.012-.017 4-6a2 2 0 013.328 2.218L9.737 10 18 10a2 2 0 110 4H9.737l1.927 2.89a2 2 0 01-3.328 2.22l-4-6-.008-.012a1.993 1.993 0 01-.202-.398l-.004-.012-.037-.11a1.984 1.984 0 01-.008-.025l-.002-.011a1.315 1.315 0 01-.031-.124l-.005-.026a1.194 1.194 0 01-.022-.131c0-.007-.002-.014-.003-.02l-.002-.02a1.995 1.995 0 01-.005-.053l-.003-.044A1.789 1.789 0 014 12.067z\"/></svg>"
    };
    var pepperiIconArrowLeft = {
        name: 'arrow_left',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M14.713 5.8l-3.916 5.454a1.113 1.113 0 000 1.492l3.916 5.454c.383.412.383 1.08 0 1.491a.93.93 0 01-1.384 0l-5.756-6.2c-.764-.823-.764-2.159 0-2.982l5.756-6.2a.93.93 0 011.384 0c.383.412.383 1.08 0 1.491z\"/></svg>"
    };
    var pepperiIconArrowRightAlt = {
        name: 'arrow_right_alt',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M20 11.933a2 2 0 00-.004-.059L20 12a2.026 2.026 0 00-.07-.527l-.009-.029a1.476 1.476 0 00-.039-.121l-.004-.01a2.006 2.006 0 00-.202-.405l-.012-.017-4-6a2 2 0 00-3.328 2.218L14.263 10 6 10a2 2 0 100 4h8.263l-1.927 2.89a2 2 0 003.328 2.22l4-6 .008-.012c.081-.124.15-.257.202-.398l.004-.012.037-.11.008-.025.002-.011a1.315 1.315 0 00.031-.124l.005-.026a1.194 1.194 0 00.022-.131c0-.007.002-.014.003-.02l.002-.02.005-.053.003-.044a1.789 1.789 0 00.003-.057z\"/></svg>"
    };
    var pepperiIconArrowRight = {
        name: 'arrow_right',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M9.287 4.309a.93.93 0 011.384 0l5.756 6.2c.764.823.764 2.159 0 2.982l-5.756 6.2a.93.93 0 01-1.384 0 1.113 1.113 0 010-1.491l3.916-5.454a1.113 1.113 0 000-1.492L9.287 5.8a1.113 1.113 0 010-1.491z\"/></svg>"
    };
    var pepperiIconArrowTwoWaysHorL = {
        name: 'arrow_two_ways_hor_l',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M7.232 12.303a1.036 1.036 0 111.465 1.465L7.464 15H19a1 1 0 010 2H7.464l1.233 1.232a1.036 1.036 0 11-1.465 1.465l-2.929-2.93a1.032 1.032 0 01-.301-.67L4 16.019V16l.001-.019v-.078c.013-.203.085-.404.216-.573l.086-.098zm9.536-8l2.929 2.93c.186.186.287.426.301.67v.064L20 8v.034l-.002.063a1.032 1.032 0 01-.301.67l-2.93 2.93a1.036 1.036 0 11-1.464-1.465L16.536 9H5a1 1 0 01-.993-.883L4 8a1 1 0 011-1h11.536l-1.233-1.232a1.036 1.036 0 111.465-1.465z\"/></svg>"
    };
    var pepperiIconArrowTwoWaysHorR = {
        name: 'arrow_two_ways_hor_r',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M16.768 12.303a1.036 1.036 0 10-1.465 1.465L16.536 15H5a1 1 0 000 2h11.536l-1.233 1.232a1.036 1.036 0 101.465 1.465l2.929-2.93c.186-.186.287-.426.301-.67l.002-.078V16l-.001-.019v-.078a1.032 1.032 0 00-.216-.573l-.086-.098zm-9.536-8l-2.929 2.93a1.032 1.032 0 00-.301.67v.064L4 8v.034l.002.063c.014.244.115.484.301.67l2.93 2.93a1.036 1.036 0 101.464-1.465L7.464 9H19a1 1 0 00.993-.883L20 8a1 1 0 00-1-1H7.464l1.233-1.232a1.036 1.036 0 10-1.465-1.465z\"/></svg>"
    };
    var pepperiIconArrowTwoWaysVerB = {
        name: 'arrow_two_ways_ver_b',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M11.697 16.768a1.036 1.036 0 10-1.465-1.465L9 16.536V5a1 1 0 00-2 0v11.536l-1.232-1.233a1.036 1.036 0 10-1.465 1.465l2.93 2.929c.186.186.426.287.67.301l.078.002H8l.019-.001h.078c.203-.013.404-.085.573-.216l.098-.086zm8-9.536l-2.93-2.929a1.032 1.032 0 00-.67-.301h-.064L16 4h-.034l-.063.002a1.032 1.032 0 00-.67.301l-2.93 2.93a1.036 1.036 0 101.465 1.464L15 7.464V19a1 1 0 00.883.993L16 20a1 1 0 001-1V7.464l1.232 1.233a1.036 1.036 0 101.465-1.465z\"/></svg>"
    };
    var pepperiIconArrowTwoWaysVerT = {
        name: 'arrow_two_ways_ver_t',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M11.697 7.232a1.036 1.036 0 11-1.465 1.465L9 7.464V19a1 1 0 01-2 0V7.464L5.768 8.697a1.036 1.036 0 11-1.465-1.465l2.93-2.929c.186-.186.426-.287.67-.301L7.981 4H8l.019.001h.078c.203.013.404.085.573.216l.098.086zm8 9.536l-2.93 2.929a1.032 1.032 0 01-.67.301h-.064L16 20h-.034l-.063-.002a1.032 1.032 0 01-.67-.301l-2.93-2.93a1.036 1.036 0 111.465-1.464L15 16.536V5a1 1 0 01.883-.993L16 4a1 1 0 011 1v11.536l1.232-1.233a1.036 1.036 0 111.465 1.465z\"/></svg>"
    };
    var pepperiIconArrowUpAlt = {
        name: 'arrow_up_alt',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M12.067 4a2 2 0 01.059.004L12 4a2.026 2.026 0 01.527.07l.029.009a1.476 1.476 0 01.121.039l.01.004a2.006 2.006 0 01.405.202l.017.012 6 4a2 2 0 01-2.218 3.328L14 9.737 14 18a2 2 0 11-4 0V9.737l-2.89 1.927a2 2 0 01-2.22-3.328l6-4 .012-.008c.124-.081.257-.15.398-.202l.012-.004.11-.037.025-.008.011-.002a1.315 1.315 0 01.124-.031l.026-.005a1.194 1.194 0 01.131-.022c.007 0 .014-.002.02-.003l.02-.002.053-.005.044-.003A1.789 1.789 0 0111.933 4z\"/></svg>"
    };
    var pepperiIconArrowUp = {
        name: 'arrow_up',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M18.2 14.713l-5.454-3.916a1.113 1.113 0 00-1.492 0L5.8 14.713a1.113 1.113 0 01-1.491 0 .93.93 0 010-1.384l6.2-5.756c.823-.764 2.159-.764 2.982 0l6.2 5.756a.93.93 0 010 1.384 1.113 1.113 0 01-1.491 0z\"/></svg>"
    };
    var pepperiIconBarndPepperi = {
        name: 'barnd_pepperi',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M17.234 10.687a.17.17 0 00-.167-.171c-.446 0-.885.372-1.44.843-.887.753-1.99 1.69-3.705 1.69-1.714 0-2.818-.937-3.705-1.69-.556-.471-.994-.843-1.44-.843a.17.17 0 00-.168.171.17.17 0 00.167.172c.327 0 .744.354 1.228.765.88.747 2.084 2.563 3.918 2.563 2.19 0 2.682-1.514 3.918-2.563.483-.41.9-.765 1.227-.765a.17.17 0 00.167-.172M6.671 7.588c0 1.039.826 1.884 1.841 1.884 1.015 0 1.841-.845 1.841-1.884 0-1.038-.826-1.883-1.841-1.883-1.015 0-1.841.845-1.841 1.883m6.866 0c0 1.039.826 1.884 1.841 1.884 1.016 0 1.841-.845 1.841-1.884 0-1.038-.825-1.883-1.84-1.883-1.016 0-1.842.845-1.842 1.883m7.386 10.922a3.46 3.46 0 00-.778-.087c-1.144 0-2.125.544-2.52 1.311-.394-.767-1.375-1.31-2.519-1.31-.266 0-.526.028-.778.086.387-.651 1.12-1.154 2.01-1.405.12-.034.244-.063.37-.087V14.658a.188.188 0 00-.185-.19.188.188 0 00-.186.19v2.056c-.751.196-1.409.559-1.885 1.037-.802.11-1.655.185-2.507.185a18.55 18.55 0 01-2.507-.184c-.475-.479-1.133-.842-1.885-1.038v-2.056a.188.188 0 00-.185-.19.188.188 0 00-.186.19V17.018c.126.024.25.053.371.087.89.25 1.622.754 2.01 1.405a3.46 3.46 0 00-.779-.087c-1.144 0-2.124.544-2.52 1.311-.394-.767-1.374-1.31-2.519-1.31-.266 0-.526.028-.778.086.39-.656 1.13-1.16 2.028-1.409.088-.024.178-.046.27-.065V7.589c0-1.833 1.456-3.323 3.247-3.323 1.79 0 2.143.995 3.248 2.555.06.085.083.19.185.19.103 0 .127-.105.186-.19 1.139-1.647 1.457-2.555 3.247-2.555 1.791 0 3.248 1.49 3.248 3.322V17.035c.088.019.173.04.258.064.904.247 1.648.753 2.04 1.411M8.068 7.588c0 .25.198.454.443.454a.449.449 0 00.443-.454.449.449 0 00-.443-.453.449.449 0 00-.443.453m-.688 0c0-.638.507-1.157 1.131-1.157s1.13.52 1.13 1.157c0 .638-.506 1.157-1.13 1.157-.624 0-1.13-.519-1.13-1.157m7.553 0c0 .25.199.454.443.454a.449.449 0 00.444-.454.449.449 0 00-.444-.453.449.449 0 00-.443.453m-.687 0c0-.638.507-1.157 1.13-1.157.624 0 1.131.52 1.131 1.157 0 .638-.507 1.157-1.13 1.157-.624 0-1.131-.519-1.131-1.157m.48 10.416a2.626 2.626 0 00-.315.374.817.817 0 00.315-.374m4.918-1.172c-.04.045-.08.092-.12.135.695.287 1.287.708 1.71 1.222.26.015.515.044.764.088-.484-.62-1.321-1.123-2.354-1.445m-14.753-.088v-5.932c-.39-.236-.78-.368-1.135-.368-.145 0-.283.023-.41.07-1.047.385-1.14 2.298-.202 4.177.426.853 1.001 1.583 1.606 2.088l.141-.035m15.852-2.053c.938-1.879.845-3.792-.203-4.177a1.184 1.184 0 00-.41-.07c-.355 0-.744.132-1.135.368v5.932c.048.01.094.022.14.035.606-.505 1.182-1.235 1.608-2.088M2.819 18.035c-.278.015-.551.041-.819.08.5-.536 1.334-.98 2.365-1.283-.628.302-1.161.713-1.546 1.203\"/></svg>"
    };
    var pepperiIconIndicatorDotPlaceholder = {
        name: 'indicator_dot_placeholder',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\"><circle cx=\"4\" cy=\"4\" r=\"3.5\" fill-opacity=\".04\" fill-rule=\"evenodd\" stroke=\"#000\" stroke-opacity=\".04\"/></svg>"
    };
    var pepperiIconMiscExcel = {
        name: 'misc_excel',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M15 4.18a1 1 0 01.993.884L16 5.18v13.64a1 1 0 01-1.048.998l-.116-.012-10-1.667a1 1 0 01-.829-.866L4 17.153V6.847a1 1 0 01.718-.96l.118-.026 10-1.667A1 1 0 0115 4.18zM19 7a1 1 0 011 1v8a1 1 0 01-1 1h-1a1 1 0 01-1-1V8a1 1 0 011-1zm-5.715.214l-2.078.224-1.243 2.976L8.769 7.7l-2.126.23 2.174 3.795L6.5 16.054l2.079.224 1.386-3.229 1.409 3.531 2.126.23-2.39-5.179 2.175-4.417z\"/></svg>"
    };
    var pepperiIconNoImage = {
        name: 'no_image',
        data: "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 988 988\" xml:space=\"preserve\"><style>.st1{fill:#c1c1c1}</style><path d=\"M-546.6 491.2h5.6v5.6h-5.6v-5.6z\" fill=\"none\"/><path class=\"st1\" d=\"M144.5-966.5c-7.8-8.6-19.4-12.9-32.3-11.6L29-969.9c-9.9.9-22.4 6.5-28.5 12.5l-137.2 137.1c-10.8 10.8-12.1 27.6-2.6 37.1l98.3 98.3c3.9 3.9 9.9 6.5 15.9 6.5 7.3 0 14.7-3 19.8-8.6L132-824.2c6.5-6.5 12.1-18.1 12.9-26.3l8.6-85.8c1.4-12.1-1.6-22.5-9-30.2zm-157 271.3c-3.5 3.5-7.8 5.2-12.1 5.2-2.2 0-5.6-.4-8.2-3l-98.3-98.4c-5.2-5.2-3.9-14.7 2.6-21.1l22.4-22.4L10.3-718.4l-22.8 23.2zm155.3-242.9l-8.6 85.8c-.4 6-5.2 15.1-9.5 19.4L18.6-726.8-97.9-843.2 8.7-949.3c4.3-4.3 14.7-8.6 21.6-9.5l83.2-8.2h3.5c7.8 0 14.7 3 19.4 8.2 5.1 5.2 7.3 12.5 6.4 20.7z\"/><path class=\"st1\" d=\"M90.6-942.8c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm0 44.9c-9.5 0-16.8-7.8-16.8-16.8s7.8-16.8 16.8-16.8c9.5 0 16.8 7.8 16.8 16.8s-7.7 16.8-16.8 16.8zM-357.1-1138c-15.5-17.3-38.8-25.9-64.7-23.3l-166.4 16.5c-19.9 1.7-44.9 12.9-56.9 25l-274.4 274.3c-21.5 21.5-24.1 55.2-5.2 74.2L-728-574.6c7.7 7.7 19.8 12.9 31.9 12.9 14.7 0 29.3-6.1 39.7-17.3l274.2-274.3c12.9-12.9 24.1-36.2 25.9-52.6l17.3-171.7c2.6-24.1-3.4-44.8-18.1-60.4zm-314 542.6c-6.9 6.9-15.5 10.4-24.2 10.4-4.3 0-11.2-.9-16.4-6.1l-196.7-196.6c-10.3-10.3-7.7-29.3 5.2-42.3l44.9-44.9L-625.4-642l-45.7 46.6zm310.5-485.6l-17.2 171.6c-.9 12.1-10.3 30.2-19 38.8L-609-658.3l-233-232.9 213.2-212.2c8.6-8.6 29.3-17.3 43.1-19l166.5-16.4h6.9c15.5 0 29.3 6.1 38.8 16.4 10.3 10.3 14.7 25 12.9 41.4z\"/><path class=\"st1\" d=\"M-465-1090.5c-31.1 0-56.1 25-56.1 56.1s25 56.1 56.1 56.1 56.1-25 56.1-56.1-25-56.1-56.1-56.1zm0 89.7c-19 0-33.7-15.5-33.7-33.7 0-18.2 15.5-33.7 33.7-33.7 19 0 33.7 15.5 33.7 33.7 0 18.2-15.5 33.7-33.7 33.7z\"/><g><path class=\"st1\" d=\"M915.2 79.6c-23.3-25.9-58.2-38.8-97-34.9L568.5 69.3c-29.8 2.6-67.3 19.4-85.4 37.5L71.6 518.3c-32.3 32.3-36.2 82.8-7.8 111.3l295 295c11.6 11.6 29.7 19.4 47.8 19.4 22 0 44-9.1 59.5-25.9l411.5-411.5c19.4-19.4 36.2-54.3 38.8-78.9l25.9-257.5c3.9-36.2-5.1-67.3-27.1-90.6zm-471 813.9c-10.4 10.4-23.3 15.6-36.3 15.6-6.5 0-16.8-1.3-24.6-9.1l-295-295c-15.5-15.5-11.6-44 7.8-63.4l67.3-67.3 349.3 349.4-68.5 69.8zM910 165l-25.9 257.5c-1.3 18.1-15.5 45.3-28.5 58.2L537.3 799.1 187.9 449.7l319.7-318.3c12.9-12.9 44-25.9 64.7-28.5L822 78.3h10.4c23.3 0 44 9.1 58.2 24.6 15.5 15.5 22 37.5 19.4 62.1z\"/><path class=\"st1\" d=\"M753.4 150.8c-46.6 0-84.1 37.5-84.1 84.1s37.5 84.1 84.1 84.1 84.1-37.5 84.1-84.1-37.5-84.1-84.1-84.1zm0 134.6c-28.5 0-50.5-23.3-50.5-50.5s23.3-50.5 50.5-50.5c28.5 0 50.5 23.3 50.5 50.5s-23.3 50.5-50.5 50.5z\"/></g></svg>"
    };
    var pepperiIconNumberCoins = {
        name: 'number_coins',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M5.5 14.244c.355.562.885 1.04 1.547 1.432-.659.27-1.047.576-1.047.824 0 .589 2.186 1.5 5 1.5 2.44 0 4.409-.685 4.888-1.251.754-.14 1.457-.338 2.085-.592.018.112.027.226.027.343 0 2.172-3.186 3.5-7 3.5s-7-1.328-7-3.5c0-.914.563-1.678 1.5-2.256zm13.64-3.523c.547.5.86 1.098.86 1.779 0 2.172-3.186 3.5-7 3.5s-7-1.328-7-3.5c0-.27.049-.526.142-.769.543.309 1.17.562 1.858.759v.01c0 .589 2.186 1.5 5 1.5s5-.911 5-1.5c0-.172-.187-.372-.522-.568.672-.33 1.238-.733 1.662-1.21zM12 5c3.814 0 7 1.328 7 3.5 0 2.172-3.186 3.5-7 3.5s-7-1.328-7-3.5C5 6.328 8.186 5 12 5zm0 2c-2.814 0-5 .911-5 1.5S9.186 10 12 10s5-.911 5-1.5S14.814 7 12 7z\"/></svg>"
    };
    var pepperiIconNumberDecimal = {
        name: 'number_decimal',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M16.141 4.01a1 1 0 01.849 1.132L16.55 8h2.583c.48 0 .867.448.867 1s-.387 1-.867 1h-2.891l-.308 2h2.2c.479 0 .866.447.866 1 0 .553-.387 1-.867 1h-2.506l-.637 4.142a.999.999 0 01-.989.858l-.143-.01a1 1 0 01-.849-1.132L13.603 14h-1.976l-.637 4.142a1 1 0 01-.989.858l-.143-.01a1 1 0 01-.848-1.132L9.604 14H6.867C6.388 14 6 13.553 6 13c0-.553.388-1 .867-1H9.91l.308-2H7.867C7.388 10 7 9.552 7 9s.388-1 .867-1h2.66l.483-3.142a1 1 0 011.98.284L12.55 8h1.976l.483-3.142a1.002 1.002 0 011.132-.848zM5.5 16a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm8.718-6h-1.975l-.308 2h1.975l.308-2z\"/></svg>"
    };
    var pepperiIconNumberDollar = {
        name: 'number_dollar',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M11.203 20h1.48a.605.605 0 00.614-.591v-1.367l.307-.08C16.11 17.357 17 15.698 17 14.465c0-2.285-2.048-3.234-4.055-3.865-1.884-.598-2.487-.96-2.487-1.496 0-.48.578-.962 1.872-.962 1.426 0 2.319.39 2.7.56a.623.623 0 00.81-.284l.586-1.194a.584.584 0 00-.295-.784 7.681 7.681 0 00-2.335-.622l-.36-.044V4.587A.602.602 0 0012.82 4h-1.454c-.336 0-.614.264-.614.587v1.32l-.308.075c-2.023.492-3.232 1.741-3.232 3.337 0 2.104 2.167 3.042 4.293 3.684 1.962.615 2.228 1.147 2.228 1.588 0 .682-.917 1.178-2.179 1.178-1.073 0-2.228-.264-3.089-.706a.62.62 0 00-.487-.04.614.614 0 00-.36.32l-.566 1.21a.576.576 0 00.258.752c.717.399 1.782.693 2.913.816l.365.036v1.253c0 .326.274.59.614.59z\"/></svg>"
    };
    var pepperiIconNumberEuro = {
        name: 'number_euro',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M13.936 4.086l.294.008a6.185 6.185 0 013.268 1.148c.152.09.274.212.365.365l.102.243c.073.263.035.549-.102.784a1.025 1.025 0 01-.609.467c-.241.066-.573.05-.784-.102a5.58 5.58 0 00-1.107-.628l.127.058-.133-.051c-.25-.09-.507-.16-.769-.209l-.122-.02-.133-.013a5.058 5.058 0 00-.789.002l-.113.01-.138.024c-.259.05-.512.12-.76.209l-.129.049-.131.06a5.522 5.522 0 00-.73.428l-.126.09-.144.12a6.33 6.33 0 00-.675.677l-.118.145-.142.196a7.204 7.204 0 00-.547.94h4.249c.523 0 .96.455.96 1 0 .545-.437 1-.96 1H9.212l-.022.208a8.369 8.369 0 00-.032.793l4.882-.001c.523 0 .96.455.96 1 0 .545-.437 1-.96 1H9.46c.078.259.169.513.273.762l-.052-.131.101.225c.16.332.345.653.555.957l.139.19-.081-.098.16.206-.076-.103.118.145c.208.242.433.47.675.678l.139.114.131.095c.232.16.476.304.73.428l.139.062.121.048c.248.089.501.158.76.208l.121.02.13.015c.263.02.526.021.789.001l.143-.015.112-.018c.262-.05.519-.12.77-.209l.134-.052.161-.073c.19-.094.376-.2.554-.315l.263-.18c.21-.153.543-.169.785-.104.254.07.475.24.608.467a1.012 1.012 0 01-.16 1.233c-.067.054-.136.107-.205.16a6.275 6.275 0 01-1.66.848c-1.808.617-3.9.279-5.438-.851a7.376 7.376 0 01-1.055-.917 8.135 8.135 0 01-.88-1.132 7.267 7.267 0 01-.578-1.095 9.32 9.32 0 01-.528-1.568l-1.399-.001c-.523 0-.96-.455-.96-1 0-.545.437-1 .96-1h1.165a8.305 8.305 0 01.053-1H5.96c-.523 0-.96-.455-.96-1 0-.545.437-1 .96-1h1.651c.094-.267.201-.53.316-.79A7.681 7.681 0 019.41 6.094a7.302 7.302 0 011.065-.902c.31-.218.64-.408.99-.557.423-.18.846-.342 1.301-.426.48-.09.975-.143 1.464-.114z\"/></svg>"
    };
    var pepperiIconNumberMinus = {
        name: 'number_minus',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><rect width=\"16\" height=\"4\" x=\"4\" y=\"10\" fill-rule=\"evenodd\" rx=\"2\"/></svg>"
    };
    var pepperiIconNumberNumber = {
        name: 'number_number',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M16.141 4.01a1 1 0 01.849 1.132L16.582 8H19a1 1 0 110 2h-2.704l-.571 4H18a.999.999 0 110 2h-2.561l-.449 3.142a.999.999 0 01-.989.858l-.143-.01a1 1 0 01-.849-1.132L13.417 16H9.439l-.449 3.142a1 1 0 01-.989.858l-.143-.01a1 1 0 01-.848-1.132L7.418 16H5a1 1 0 110-2h2.704l.571-4H6a1 1 0 010-2h2.561l.449-3.142a1 1 0 011.98.284L10.582 8h3.978l.45-3.142a1.002 1.002 0 011.131-.848zM14.274 10h-3.978l-.571 4h3.978l.571-4z\"/></svg>"
    };
    var pepperiIconNumberPercent = {
        name: 'number_percent',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M17 13a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm1.364-9.364a1 1 0 010 1.414L7.05 18.364a1 1 0 01-1.414-1.414L16.95 5.636a1 1 0 011.414 0zM7 3a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z\"/></svg>"
    };
    var pepperiIconNumberPlus = {
        name: 'number_plus',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M12 4a2 2 0 012 2v4h4a2 2 0 110 4h-4v4a2 2 0 11-4 0v-4H6a2 2 0 110-4h4V6a2 2 0 012-2z\"/></svg>"
    };
    var pepperiIconShoppingCart = {
        name: 'shopping_cart',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M4 4h2.153a1 1 0 01.986.836L7.333 6H18a1 1 0 011 1v4.153a1 1 0 01-.836.986l-9.542 1.59.045.271H18a1 1 0 010 2H7.847a1 1 0 01-.986-.836L5.473 6.836A1 1 0 004.486 6H4a1 1 0 110-2zm3.86 5.164l.273 1.633a1 1 0 001.15.822l6.881-1.146A1 1 0 0017 9.486V9a1 1 0 00-1-1H8.847a1 1 0 00-.986 1.164zM17.5 20a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-11 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z\"/></svg>"
    };
    var pepperiIconShoppingPaper = {
        name: 'shopping_paper',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M12 2a5 5 0 015 5v1h2a2 2 0 012 2v8a4 4 0 01-4 4H7a4 4 0 01-4-4v-8a2 2 0 012-2h2V7a5 5 0 015-5zm6 8H6a1 1 0 00-1 1v7a2 2 0 002 2h10a2 2 0 002-2v-7a1 1 0 00-1-1zm-6-6a3 3 0 00-3 3v1h6V7a3 3 0 00-3-3z\"/></svg>"
    };
    var pepperiIconSystemAttach = {
        name: 'system_attach',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M10.86 14.378l2.787-2.786a.985.985 0 00-1.393-1.393l-2.786 2.786a2.955 2.955 0 104.179 4.18l2.786-2.787a4.925 4.925 0 00-6.965-6.965L6.68 10.199a.985.985 0 01-1.393-1.393L8.075 6.02a6.896 6.896 0 019.75 9.751l-2.785 2.786a4.925 4.925 0 01-6.965-6.965l2.786-2.786a2.955 2.955 0 114.179 4.18l-2.786 2.785a.985.985 0 01-1.393-1.393z\"/></svg>"
    };
    var pepperiIconSystemAvatar = {
        name: 'system_avatar',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M5.873 20C5.317 18.835 5 17.562 5 16.333c0-2.407 1.215-4.078 3.066-4.997C7.706 10.393 7.5 9.37 7.5 8.4 7.5 5.362 9.515 4 12 4s4.5 1.362 4.5 4.4c0 .97-.205 1.993-.566 2.936 1.85.919 3.066 2.59 3.066 4.997 0 1.23-.317 2.502-.873 3.667h-1.244c-1.16 0-1.16-.629-.999-.966.392-.816.616-1.705.616-2.534 0-1.482-.716-2.44-1.821-2.974C13.93 14.42 13.004 15 12 15c-1.004 0-1.93-.58-2.679-1.474C8.216 14.06 7.5 15.018 7.5 16.5c0 .827.223 1.712.612 2.525.163.34.163.975-.966.975H5.873zM12 12.5c1.105 0 2-2.2 2-3.857S13.105 6.5 12 6.5s-2 .486-2 2.143c0 1.657.895 3.857 2 3.857z\"/></svg>"
    };
    var pepperiIconSystemBin = {
        name: 'system_bin',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M9 7V6a1 1 0 011-1h4a1 1 0 011 1v.999l.913.001H17a1 1 0 010 2h-.167l-.757 9.083a1 1 0 01-.996.917H8.92a1 1 0 01-.996-.917L7.166 9H7a1 1 0 110-2h2zm5.76 2l-5.525.005L9.79 17h4.42l.55-8z\"/></svg>"
    };
    var pepperiIconSystemBolt = {
        name: 'system_bolt',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M10.612 19.84a.33.33 0 01-.279.16.332.332 0 01-.128-.026.362.362 0 01-.199-.402l1.25-6.568H7.333c-.103 0-.2-.05-.263-.137a.374.374 0 01-.06-.305l2-8.293A.336.336 0 019.333 4h6c.122 0 .235.07.294.185a.377.377 0 01-.012.362L12.943 9h3.723c.122 0 .235.064.294.18a.387.387 0 01-.015.37l-6.333 10.29z\"/></svg>"
    };
    var pepperiIconSystemChat = {
        name: 'system_chat',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M11.5 4a7.5 7.5 0 016.755 10.764L20 20l-5.236-1.745A7.5 7.5 0 1111.5 4zm0 2a5.5 5.5 0 102.392 10.454l.732-.354 2.214.738-.738-2.214.354-.732A5.5 5.5 0 0011.5 6zm-2 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z\"/></svg>"
    };
    var pepperiIconSystemCircle = {
        name: 'system_circle',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"red\" fill-rule=\"evenodd\"/></svg>"
    };
    var pepperiIconSystemClose = {
        name: 'system_close',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M18.39 5.61a2.085 2.085 0 010 2.95L14.948 12l3.44 3.44c.774.774.813 2.004.116 2.823l-.116.126a2.085 2.085 0 01-2.949 0L12 14.95l-3.44 3.44a2.085 2.085 0 11-2.95-2.949L9.052 12l-3.44-3.44a2.085 2.085 0 01-.116-2.823l.116-.126a2.085 2.085 0 012.949 0L12 9.05l3.44-3.44a2.085 2.085 0 012.95 0z\"/></svg>"
    };
    var pepperiIconSystemDoc = {
        name: 'system_doc',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M13.172 4a1 1 0 01.707.293l3.828 3.828a1 1 0 01.293.707V19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h6.172zM11 6H9a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1h-2a1 1 0 01-1-1V7a1 1 0 00-1-1z\"/></svg>"
    };
    var pepperiIconSystemDoor = {
        name: 'system_door',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M19 16.7a2 2 0 01-1.188 1.828l-7.109 3.16A.5.5 0 0110 21.23V10.3a2 2 0 011.188-1.828l5.579-2.48L7 5.959V17a1 1 0 01-2 0V5a1 1 0 011-1h12a1 1 0 011 1v11.7z\"/></svg>"
    };
    var pepperiIconSystemDotEllipsis = {
        name: 'system_dot_ellipsis',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\" transform=\"translate(5 17)\"><circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\"/><circle cx=\"7.5\" cy=\"1.5\" r=\"1.5\"/><circle cx=\"13.5\" cy=\"1.5\" r=\"1.5\"/></g></svg>"
    };
    var pepperiIconSystemEdit = {
        name: 'system_edit',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M21 20a1 1 0 010 2H3a1 1 0 010-2h18zM14.207 2.793l4 4a1 1 0 010 1.414l-8.5 8.5a1 1 0 01-.39.242l-6 2a1 1 0 01-1.266-1.265l2-6a1 1 0 01.242-.391l8.5-8.5a1 1 0 011.414 0zM11 7.414L5.874 12.54 4.581 16.42l3.879-1.293L13.585 10 11 7.414zm2.501-2.5L12.414 6 15 8.585 16.086 7.5 13.5 4.914z\"/></svg>"
    };
    var pepperiIconSystemEducation = {
        name: 'system_education',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M12.12 4.062l10.478 5.719a.25.25 0 010 .438l-.598.326V15a1 1 0 01-2 0v-3.363l-2 1.091V16c0 2.21-2.686 4-6 4s-6-1.79-6-4v-3.272L1.402 10.22a.25.25 0 010-.438L11.88 4.062a.25.25 0 01.24 0zm-4.121 9.757L8 16c0 .893 1.66 2 4 2s4-1.107 4-2l-.001-2.18-3.88 2.118a.25.25 0 01-.239 0L8 13.819zm3.98-7.302l-.038.013-6.237 3.36a.125.125 0 00-.031.196l.031.024 6.237 3.36a.125.125 0 00.08.013l.038-.013 6.237-3.36a.125.125 0 00.031-.196l-.031-.024-6.237-3.36a.125.125 0 00-.08-.013z\"/></svg>"
    };
    var pepperiIconSystemEmail = {
        name: 'system_email',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M12 4c4.411 0 8 3.589 8 8 0 .543-.055 1.086-.163 1.612-.344 1.64-1.939 2.685-3.555 2.345a2.973 2.973 0 01-1.64-.955A3.984 3.984 0 0112 16c-2.206 0-4-1.794-4-4s1.794-4 4-4a4.004 4.004 0 013.923 4.782l-.008.033a.994.994 0 00.143.752.998.998 0 00.632.432 1.008 1.008 0 001.184-.775A6.006 6.006 0 0012 6C8.691 6 6 8.69 6 12a6.006 6.006 0 008.064 5.636 1 1 0 11.685 1.88 7.983 7.983 0 01-2.75.484L12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8zm0 6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z\"/></svg>"
    };
    var pepperiIconSystemFileDownload = {
        name: 'system_file_download',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M19 11a1 1 0 011 1v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4a1 1 0 012 0v3a1 1 0 001 1h10a1 1 0 001-1v-3a1 1 0 011-1zm-6-5v5h2.575a.5.5 0 01.312.89l-3.575 2.86a.5.5 0 01-.624 0l-3.575-2.86a.5.5 0 01.312-.89H11V6h2z\"/></svg>"
    };
    var pepperiIconSystemFileUploadCloud = {
        name: 'system_file_upload_cloud',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M10 6a4 4 0 013.6 2.253 4 4 0 015.397 3.917A3 3 0 0118 18h-5.001L13 14h2.575a.5.5 0 00.312-.89l-3.575-2.86a.5.5 0 00-.624 0l-3.575 2.86a.5.5 0 00.312.89H11l-.001 4H7a4 4 0 01-.997-7.875L6 10a4 4 0 014-4z\"/></svg>"
    };
    var pepperiIconSystemFileUpload = {
        name: 'system_file_upload',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M19 11a1 1 0 011 1v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4a1 1 0 012 0v3a1 1 0 001 1h10a1 1 0 001-1v-3a1 1 0 011-1zm-6.688-4.75l3.575 2.86a.5.5 0 01-.312.89H13v4a1 1 0 01-2 0v-4H8.425a.5.5 0 01-.312-.89l3.575-2.86a.5.5 0 01.624 0z\"/></svg>"
    };
    var pepperiIconSystemFilter = {
        name: 'system_filter',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M13.5 15a.5.5 0 01.5.5v2.86a.5.5 0 01-.621.485l-3-.75A.5.5 0 0110 17.61V15.5a.5.5 0 01.5-.5h3zm2.5-5a1 1 0 010 2H8a1 1 0 010-2h8zm3-5a1 1 0 010 2H5a1 1 0 110-2h14z\"/></svg>"
    };
    var pepperiIconSystemFullScreen = {
        name: 'system_full_screen',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M10.597 13.403a.961.961 0 010 1.36L7.36 18H9a1 1 0 010 2H5a1 1 0 01-1-1v-4a1 1 0 012 0v1.64l3.238-3.237a.961.961 0 011.36 0zM19 4a1 1 0 011 1v4a1 1 0 01-2 0V7.36l-3.238 3.237a.961.961 0 11-1.36-1.36L16.642 6H15a1 1 0 010-2h4z\"/></svg>"
    };
    var pepperiIconSystemHeart = {
        name: 'system_heart',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M12 6.532C11.395 5.805 10.353 5 8.7 5 5.89 5 4 7.608 4 10.043c0 3.546 6.803 8.297 7.579 8.827a.75.75 0 00.842 0c.776-.53 7.579-5.282 7.579-8.827C20 7.608 18.11 5 15.299 5c-1.651 0-2.694.805-3.299 1.532zM6 10.27C6 8.9 7.028 7 8.957 7c1.755 0 2.374 1.517 2.398 1.577a.688.688 0 001.288.005c.025-.065.645-1.582 2.4-1.582C16.973 7 18 8.9 18 10.27c0 1.82-3.53 4.72-6 6.48-2.471-1.76-6-4.657-6-6.48z\"/></svg>"
    };
    var pepperiIconSystemHome = {
        name: 'system_home',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M17 5a1 1 0 011 1v3.057l1.581 1.13a1 1 0 01.3 1.288l-.067.106a1 1 0 01-1.395.233l-.42-.3L18 19a1 1 0 01-1 1H7a1 1 0 01-1-1v-7.486l-.419.3a1 1 0 11-1.162-1.628l7-5 .014-.01a.993.993 0 01.062-.04l-.076.05a1.009 1.009 0 01.7-.179.882.882 0 01.227.055.885.885 0 01.115.05c.041.022.081.046.12.074l-.076-.05a.993.993 0 01.062.04l.014.01L16 7.628V6a1 1 0 011-1zm-5.001 2.228l-4 2.857L8 18h8v-7.914l-4.001-2.858z\"/></svg>"
    };
    var pepperiIconSystemInfo = {
        name: 'system_info',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M12 3a9 9 0 110 18 9 9 0 010-18zm0 2a7 7 0 100 14 7 7 0 000-14zm.32 6a1 1 0 01.986 1.164l-.667 4a1 1 0 01-.986.836h-.473a1 1 0 01-.986-1.164l.667-4a1 1 0 01.986-.836h.473zm.18-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z\"/></svg>"
    };
    var pepperiIconSystemInventory = {
        name: 'system_inventory',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M12.394 4.08l7.302 3.13a.5.5 0 01.303.46L20 16.33a.5.5 0 01-.303.46l-7.304 3.128a1 1 0 01-.787 0L4.303 16.79A.5.5 0 014 16.33V7.67c0-.2.119-.38.303-.459l7.303-3.13a1 1 0 01.788 0zM6 9.518v5.824l5 2.142V11.66L6 9.517zm12 0l-5 2.142v5.824l5-2.142V9.517zm-6-3.429L7.539 8 12 9.912 16.461 8 12 6.088z\"/></svg>"
    };
    var pepperiIconSystemLink = {
        name: 'system_link',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M9.254 10.627a.97.97 0 010 1.373L6.51 14.745a1.941 1.941 0 002.744 2.745L12 14.745a.97.97 0 111.373 1.372l-2.746 2.746a3.882 3.882 0 01-5.49-5.49l2.745-2.746a.97.97 0 011.372 0zm5.491-1.373a.972.972 0 010 1.373l-4.117 4.118a.97.97 0 01-1.373-1.373l4.118-4.118a.97.97 0 011.372 0zm4.118-4.117a3.882 3.882 0 010 5.49l-2.746 2.745A.97.97 0 1114.745 12l2.745-2.746a1.942 1.942 0 00-2.745-2.744L12 9.255a.97.97 0 01-1.373-1.373l2.746-2.745a3.883 3.883 0 015.49 0z\"/></svg>"
    };
    var pepperiIconSystemMap = {
        name: 'system_map',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M8.958 20l-.073-.006a.985.985 0 01-.14-.027l-.03-.008a.855.855 0 01-.08-.027l-.006-.004-5-2A1 1 0 013 17V5a1 1 0 011.371-.928l4.66 1.863 5.653-1.884.01-.003a.997.997 0 01.086-.024l-.096.027a1.024 1.024 0 01.206-.046l.03-.002a.85.85 0 01.086-.004H15.042a.984.984 0 01.213.034l.03.008a.855.855 0 01.08.027l.006.004 5 2A1 1 0 0121 7v12a1 1 0 01-1.371.928l-4.661-1.864-5.652 1.885-.01.003a.997.997 0 01-.086.024l.096-.027a1.024 1.024 0 01-.206.046l-.03.002a.85.85 0 01-.086.004H8.958zM14 6.387l-4 1.334v9.892l4-1.334V6.387zm-9 .09v9.846l3 1.2V7.677l-3-1.2zm11 0v9.846l3 1.2V7.677l-3-1.2z\"/></svg>"
    };
    var pepperiIconSystemMenuDots = {
        name: 'system_menu_dots',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\" transform=\"translate(10 4)\"><path d=\"M2 12a2 2 0 110 4 2 2 0 010-4zm0-6a2 2 0 110 4 2 2 0 010-4z\"/><rect width=\"4\" height=\"4\" rx=\"2\"/></g></svg>"
    };
    var pepperiIconSystemMenu = {
        name: 'system_menu',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M19 16a1 1 0 010 2H5a1 1 0 010-2h14zm0-5a1 1 0 010 2H5a1 1 0 010-2h14zm0-5a1 1 0 010 2H5a1 1 0 110-2h14z\"/></svg>"
    };
    var pepperiIconSystemMove = {
        name: 'system_move',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M12 14a1 1 0 011 1v3.585l1.293-1.292a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L11 18.585V15a1 1 0 011-1zM6.707 8.293a1 1 0 010 1.414L5.415 11 9 11a1 1 0 010 2l-3.587-.001 1.294 1.294a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm10.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414l1.292-1.294L15 13a1 1 0 010-2l3.585-.001-1.292-1.292a1 1 0 01-.083-1.32zm-6-6a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L13 5.414V9a1 1 0 01-2 0V5.414L9.707 6.707a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414z\"/></svg>"
    };
    var pepperiIconSystemMust = {
        name: 'system_must',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><defs><filter id=\"a\" width=\"187.5%\" height=\"187.5%\" x=\"-43.7%\" y=\"-31.2%\" filterUnits=\"objectBoundingBox\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\" stdDeviation=\"2\"/><feColorMatrix in=\"shadowBlurOuter1\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0\"/></filter><path id=\"b\" d=\"M13.487 4l-.403 6.767 5.997-2.493.919 2.973-6.246 1.689 4.11 5.226L15.457 20 12 14.276 8.542 20l-2.405-1.838 4.109-5.226L4 11.247l.919-2.973 5.996 2.493L10.513 4h2.974z\"/></defs><g fill=\"none\" fill-rule=\"evenodd\"><use fill=\"#000\" filter=\"url(#a)\" xlink:href=\"#b\"/><use fill=\"#FE0000\" xlink:href=\"#b\"/></g></svg>"
    };
    var pepperiIconSystemOffLine = {
        name: 'system_off_line',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M20.142 5l1.414 1.414-2.93 2.93A4 4 0 0117 17h-6.03l-3.556 3.556L6 19.142 20.142 5zM14 5c1.141 0 2.17.478 2.9 1.244l-1.416 1.415a1.998 1.998 0 00-3.283.467l-.398.819a1 1 0 01-1.25.5l-.852-.32A1.991 1.991 0 009 9c-1.105 0-2 .895-2 1.98l.04 1.592-1.373.484A1.001 1.001 0 006 15h2.142l-2 2H6a3 3 0 01-.997-5.83l-.002-.085L5 11a4 4 0 015.402-3.748A3.998 3.998 0 0114 5zm3.029 5.941L12.97 15H17a2 2 0 00.5-3.937l-.471-.122z\"/></svg>"
    };
    var pepperiIconSystemOk = {
        name: 'system_ok',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M17.511 7c-.376.011-.732.168-.995.438-2.29 2.295-4.38 4.544-6.58 6.79l-2.584-2.072a1.445 1.445 0 00-2.035.226 1.448 1.448 0 00.226 2.035l3.618 2.894c.578.46 1.409.411 1.929-.113 2.602-2.608 4.934-5.17 7.476-7.718A1.449 1.449 0 0017.511 7z\"/></svg>"
    };
    var pepperiIconSystemPause = {
        name: 'system_pause',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M8.5 5A1.5 1.5 0 0110 6.5v11a1.5 1.5 0 01-3 0v-11A1.5 1.5 0 018.5 5zm7 0A1.5 1.5 0 0117 6.5v11a1.5 1.5 0 01-3 0v-11A1.5 1.5 0 0115.5 5z\"/></svg>"
    };
    var pepperiIconSystemPhone = {
        name: 'system_phone',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M4.814 8.88c1.362-1.39 2.043-1.022 2.98.328.85 1.228.595 2.046 0 2.578-.384.327-1.363.9-.852 1.76.724 1.227 2.129 2.7 3.363 3.478.851.531 1.532-.369 1.915-.696.596-.573 1.447-.736 2.64.164 1.32.982 1.66 1.677.127 2.905C9.88 22.384 1.323 13.546 4.814 8.88zM11 4a9 9 0 019 9 1 1 0 01-2 0 7 7 0 00-7-7 1 1 0 010-2zm0 4a5 5 0 015 5 1 1 0 01-2 0 3 3 0 00-3-3 1 1 0 010-2z\"/></svg>"
    };
    var pepperiIconSystemPlay = {
        name: 'system_play',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M8 4.869a1 1 0 01.555.167l9.821 6.548a.5.5 0 010 .832l-9.821 6.548A1 1 0 017 18.13V5.87a1 1 0 011-1zm2 4a1 1 0 00-1 1v4.262a1 1 0 001.555.833l3.821-2.548a.5.5 0 000-.832l-3.821-2.548A1 1 0 0010 8.87z\"/></svg>"
    };
    var pepperiIconSystemPrint = {
        name: 'system_print',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M15 7a1 1 0 00-1-1h-4a1 1 0 00-.993.883L9 7v1H7V6a2 2 0 012-2h6a2 2 0 012 2v2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2H5a2 2 0 01-2-2v-4a2 2 0 012-2h10V7zm0 7H9v3a1 1 0 00.883.993L10 18h4a1 1 0 00.993-.883L15 17v-3zm3-4H6a1 1 0 00-.993.883L5 11v2a1 1 0 00.883.993L6 14h1v-2h10v2h1a1 1 0 00.993-.883L19 13v-2a1 1 0 00-1-1z\"/></svg>"
    };
    var pepperiIconSystemProcessing = {
        name: 'system_processing',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M2 2h20v20H2z\"/><path fill=\"#000\" d=\"M18 12a1 1 0 012 0 8 8 0 01-11.955 6.955l-1.338 1.338A1 1 0 015 19.586V16a1 1 0 011-1h3.586a1 1 0 01.707 1.707l-.763.763A6 6 0 0018 12zM4 12a8 8 0 0111.955-6.955l1.338-1.338A1 1 0 0119 4.414V8a1 1 0 01-1 1h-3.586a1 1 0 01-.707-1.707l.763-.763A6 6 0 006 12a1 1 0 01-2 0z\"/></g></svg>"
    };
    var pepperiIconSystemQuestion = {
        name: 'system_question',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 3a9 9 0 110 18 9 9 0 010-18zm0 2a7 7 0 100 14 7 7 0 000-14zm-.004 9a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-.087-7c2.565 0 3.814 1.075 3.814 2.575 0 .93-.665 1.713-1.25 2.022-.774.409-1.213.678-1.268 1.27l-.006.133h-2.703c0-1.421.199-1.866 1.118-2.285.782-.358 1.38-.656 1.38-1.14 0-.432-.493-.726-1.11-.726-.62 0-1.156.305-1.225.75l-.007.097H8.21C8.235 7.795 9.511 7 11.91 7z\" fill=\"#1A1A1A\" fill-rule=\"evenodd\"/></svg>"
    };
    var pepperiIconSystemRotateDevice = {
        name: 'system_rotate_device',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M18.707 4.293A1 1 0 0119 5v3.586a1 1 0 01-1 1h-3.586a1 1 0 01-.707-1.707l.763-.763A6 6 0 006 12.561V16.5A1.5 1.5 0 007.5 18h9a1.5 1.5 0 001.5-1.5V13a1 1 0 012 0v4a3 3 0 01-3 3H7a3 3 0 01-3-3v-5h.021a8 8 0 0111.934-6.37l1.338-1.337a1 1 0 011.414 0zM12 11a2 2 0 011.001 3.732L13 16a1 1 0 01-2 0v-1.268A2 2 0 0112 11z\"/></svg>"
    };
    var pepperiIconSystemSearch = {
        name: 'system_search',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M10.5 4a6.5 6.5 0 015.533 9.912l3.538 3.538a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-3.538-3.538A6.5 6.5 0 1110.5 4zm0 2.5a4 4 0 100 8 4 4 0 000-8z\"/></svg>"
    };
    var pepperiIconSystemSelect = {
        name: 'system_select',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M16.153 4l-1.944 2H6a1 1 0 00-1 1v11h14v-7.039c.66-.69 1.322-1.38 2-2.073V19a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h12.153zm3.358 0a1.447 1.447 0 011.055 2.48c-2.542 2.548-4.874 5.11-7.476 7.718-.52.524-1.351.572-1.93.113l-3.617-2.894a1.449 1.449 0 011.809-2.261l2.585 2.072c2.199-2.246 4.29-4.495 6.58-6.79.262-.27.618-.427.994-.437z\"/></svg>"
    };
    var pepperiIconSystemSettings = {
        name: 'system_settings',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M13 4l.691 2.765c.479.154.929.373 1.34.645l2.576-1.198 1.258 1.554-1.72 2.285c.175.463.29.954.334 1.466l2.543 1.299-.45 1.948-2.847.053a5.524 5.524 0 01-.926 1.16l.589 2.784-1.798.876-1.838-2.188a5.55 5.55 0 01-1.503 0l-1.84 2.188-1.797-.876.59-2.784a5.524 5.524 0 01-.927-1.16l-2.847-.053-.45-1.948 2.543-1.298a5.47 5.47 0 01.333-1.465l-1.72-2.287 1.26-1.554L8.967 7.41a5.477 5.477 0 011.342-.645L11 4h2zm-1 4.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z\"/></svg>"
    };
    var pepperiIconSystemSignature = {
        name: 'system_signature',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M14.016 4.598l.235.002c1.196.047.94 1.048.557 1.43-1.459 1.387-3.133 2.392-4.927 3.205-.286.288-.573.574-.837.861-.365.385-1.198 1.591-2.065 2.904H20a1 1 0 010 2l-14.321.001c-.72 1.126-1.285 2.036-1.366 2.19-.383.669-1.62-.169-1.238-.838.038-.069.361-.616.807-1.359A1.002 1.002 0 014 13h1.095c.724-1.173 1.44-2.291 1.758-2.67-1.172.407-1.922.676-3.117 1.01-.742.215-1.137-1.291-.395-1.506 1.937-.55 3.922-1.125 5.764-1.938.717-.67 1.393-1.499 2.158-2.072.884-.694 1.793-1.272 2.988-1.224zm-1.648 4.278c.478-.192.933.478.67.885-.12.143-.192.31-.241.479.814-.096 1.507-.359 2.224-.862.263-.191.669-.048.813.215.12.215 1.507-.358 1.698-.43.336-.12.647.12.742.406.023.095.048.167.048.24.67.023 1.482-.192 2.104-.264.765-.096.762 1.453-.003 1.549-.886.096-1.89.335-2.775.191-.191-.048-.334-.215-.406-.406-.693.239-1.458.478-2.008.12-.981.574-2.057.836-3.229.789-.43-.024-.621-.382-.573-.765 0-.048.024-.072.024-.12-.598.262-1.173.574-1.746.885-.67.382-1.265-.999-.595-1.382a23.77 23.77 0 013.253-1.53z\"/></svg>"
    };
    var pepperiIconSystemSpinner = {
        name: 'system_spinner',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M4 4h16v16H4z\"/><path fill=\"#000\" d=\"M11 15a2 2 0 110 4 2 2 0 010-4zm5.5-1a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-9-5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm10 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5-5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z\"/></g></svg>"
    };
    var pepperiIconSystemSupport = {
        name: 'system_support',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M17 16V8l-.005-.182C16.875 5.76 14.743 4 12 4 9.176 4 7 5.865 7 8v8H5a2 2 0 01-2-2v-4a2 2 0 012-2l.004-.215C5.137 4.57 8.218 2 12 2c3.866 0 7 2.686 7 6a2 2 0 012 2v4a2 2 0 01-2 2c0 2.311-2.196 4.257-5.179 4.83A2.001 2.001 0 0110 20a2 2 0 013.622-1.17C15.641 18.396 17 17.188 17 16z\"/></svg>"
    };
    var pepperiIconSystemTexterea = {
        name: 'system_texterea',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M19.74 16.112a.889.889 0 010 1.257l-2.37 2.37a.889.889 0 11-1.258-1.256l2.37-2.37a.889.889 0 011.258 0zm0-5.926a.889.889 0 010 1.257l-8.297 8.297a.889.889 0 11-1.257-1.257l8.297-8.297a.889.889 0 011.257 0zm0-5.926a.889.889 0 010 1.257L5.517 19.74a.889.889 0 01-1.257-1.257L18.483 4.26a.889.889 0 011.257 0z\"/></svg>"
    };
    var pepperiIconSystemTool = {
        name: 'system_tool',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M17.5 3.293a1 1 0 01.083 1.32l-.083.094-1.06 1.06a1.5 1.5 0 002.12 2.122l1.061-1.06.088-.078a1 1 0 011.41 1.397l-.083.095-1.061 1.06a3.502 3.502 0 01-4.14.606l-5.255 5.255a3.5 3.5 0 11-1.416-1.416l5.256-5.254a3.502 3.502 0 01.605-4.14l1.06-1.061.088-.078a1 1 0 011.327.078zm-10 12.035a1.5 1.5 0 100 3 1.5 1.5 0 000-3z\"/></svg>"
    };
    var pepperiIconSystemView = {
        name: 'system_view',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><defs><path id=\"a\" d=\"M12 5c5.15 0 7.987 4.15 8.942 6.83L21 12c-.893 2.672-3.74 7-9 7-5.15 0-7.987-4.15-8.942-6.83L3 12c.893-2.672 3.74-7 9-7zm0 2c-4.09 0-6.305 3.092-7 5l.056.15C5.81 14.064 8.014 17 12 17c4.09 0 6.305-3.092 7-5l-.056-.15C18.19 9.936 15.986 7 12 7zm0 8.5A3.51 3.51 0 018.5 12 3.51 3.51 0 0112 8.5a3.51 3.51 0 013.5 3.5 3.51 3.51 0 01-3.5 3.5zm0-5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z\"/></defs><use fill-rule=\"evenodd\" xlink:href=\"#a\"/></svg>"
    };
    var pepperiIconTimeCal = {
        name: 'time_cal',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M16 3a1 1 0 011 1v1h1a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h1V4a1 1 0 01.883-.993L8 3a1 1 0 011 1v1h2V4a1 1 0 01.883-.993L12 3a1 1 0 011 1v1h2V4a1 1 0 01.883-.993zm2 8H6v6a1 1 0 001 1h10a1 1 0 001-1v-6zM7.983 7H7a1 1 0 00-1 1v1h12V8a1 1 0 00-1-1l-.983-.001L16 7h-.017l-3.966-.001L12 7h-.017l-3.966-.001L8 7h-.017z\"/></svg>"
    };
    var pepperiIconTimeDatetime = {
        name: 'time_datetime',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M16 3a1 1 0 011 1v1h1a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h1V4a1 1 0 01.883-.993L8 3a1 1 0 011 1v1h2V4a1 1 0 01.883-.993L12 3a1 1 0 011 1v1h2V4a1 1 0 01.883-.993zm1 4H7a1 1 0 00-1 1v9a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1zm-5 1a1 1 0 011 1v3.585l1.828 1.83a1 1 0 11-1.414 1.413l-2.121-2.12-.073-.083a1.003 1.003 0 01-.007-.008l.08.09A1.008 1.008 0 0111 13.02 1 1 0 0111 13V9a1 1 0 011-1z\"/></svg>"
    };
    var pepperiIconTimeDuration = {
        name: 'time_duration',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M16 3a1 1 0 011 1v1h1a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h1V4a1 1 0 01.883-.993L8 3a1 1 0 011 1v1h2V4a1 1 0 01.883-.993L12 3a1 1 0 011 1v1h2V4a1 1 0 01.883-.993zM7.983 7H7a1 1 0 00-1 1v9a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1l-.983-.001L16 7h-.017l-3.966-.001L12 7h-.017l-3.966-.001L8 7h-.017zm3.724 1.793l2.829 2.828a.998.998 0 01.289.793.998.998 0 01-.29.793l-2.828 2.829a1 1 0 01-1.414-1.415l2.206-2.207-2.206-2.207a1 1 0 011.414-1.414z\"/></svg>"
    };
    var pepperiIconTimeTime = {
        name: 'time_time',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M12 4a8 8 0 110 16 8 8 0 010-16zm0 2a6 6 0 100 12 6 6 0 000-12zm0 1a1 1 0 011 1v3.585l1.828 1.83a1 1 0 11-1.414 1.413l-2.121-2.12-.073-.083a1.003 1.003 0 01-.007-.008l.08.09A1.008 1.008 0 0111 12.02 1 1 0 0111 12V8a1 1 0 011-1z\"/></svg>"
    };
    var pepperiIconViewCardLg = {
        name: 'view_card_lg',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M18 4a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12zm-7 9H6v3a2 2 0 001.85 1.995L8 18h3v-5zm7 0h-5v5h3a2 2 0 001.995-1.85L18 16v-3zm-7-7H8a2 2 0 00-1.995 1.85L6 8v3h5V6zm5 0h-3v5h5V8a2 2 0 00-2-2z\"/></svg>"
    };
    var pepperiIconViewCardMd = {
        name: 'view_card_md',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M9 13a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 012-2h3zm9 0a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3a2 2 0 012-2h3zM7.5 15a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM9 4a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h3zm9 0a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6a2 2 0 012-2h3zM7.5 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z\"/></svg>"
    };
    var pepperiIconViewCardSm = {
        name: 'view_card_sm',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M7 16a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1h2zm6 0a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2zm6 0a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2zM7 10a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1h2zm6 0a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2zm6 0a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2zM7 4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h2zm6 0a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V5a1 1 0 011-1h2zm6 0a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V5a1 1 0 011-1h2z\"/></svg>"
    };
    var pepperiIconViewLine = {
        name: 'view_line',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M18 13a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2h12zm-1 2H7a1 1 0 00-.117 1.993L7 17h10a1 1 0 000-2zm1-10a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h12zm-1 2H7a1 1 0 00-.117 1.993L7 9h10a1 1 0 000-2z\"/></svg>"
    };
    var pepperiIconViewMatrix = {
        name: 'view_matrix',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M21 19a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14zM5 16v2a1 1 0 00.883.993L6 19h2v-3H5zm9 0h-4v3h4v-3zm5 0h-3v3h2a1 1 0 00.993-.883L19 18v-2zm-5-6h-4v4h4v-4zm5 0h-3v4h3v-4zm-5-5h-4v3h4V5zm4 0h-2v3h3V6a1 1 0 00-1-1zM8 5H6a1 1 0 00-.993.883L5 6v2h3V5zm-3 9h3v-4H5v4z\"/></svg>"
    };
    var pepperiIconViewTable = {
        name: 'view_table',
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M18 5a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h12zm0 10H6v1a1 1 0 00.883.993L7 17h10a1 1 0 001-1v-1zm0-4H6v2h12v-2zm-1-4H7a1 1 0 00-1 1v1h12V8a1 1 0 00-.883-.993L17 7z\"/></svg>"
    };

    var PepperiIconModule = /** @class */ (function () {
        function PepperiIconModule() {
        }
        return PepperiIconModule;
    }());
    PepperiIconModule.ɵmod = i0.ɵɵdefineNgModule({ type: PepperiIconModule });
    PepperiIconModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PepperiIconModule_Factory(t) { return new (t || PepperiIconModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PepperiIconModule, { declarations: [PepperiIconComponent], exports: [PepperiIconComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PepperiIconModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [PepperiIconComponent],
                        imports: [],
                        exports: [PepperiIconComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ngx-lib/icon
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PepperiIconComponent = PepperiIconComponent;
    exports.PepperiIconModule = PepperiIconModule;
    exports.PepperiIconRegistry = PepperiIconRegistry;
    exports.pepperiIconArrowBack = pepperiIconArrowBack;
    exports.pepperiIconArrowDown = pepperiIconArrowDown;
    exports.pepperiIconArrowDownAlt = pepperiIconArrowDownAlt;
    exports.pepperiIconArrowEither = pepperiIconArrowEither;
    exports.pepperiIconArrowLeft = pepperiIconArrowLeft;
    exports.pepperiIconArrowLeftAlt = pepperiIconArrowLeftAlt;
    exports.pepperiIconArrowRight = pepperiIconArrowRight;
    exports.pepperiIconArrowRightAlt = pepperiIconArrowRightAlt;
    exports.pepperiIconArrowTwoWaysHorL = pepperiIconArrowTwoWaysHorL;
    exports.pepperiIconArrowTwoWaysHorR = pepperiIconArrowTwoWaysHorR;
    exports.pepperiIconArrowTwoWaysVerB = pepperiIconArrowTwoWaysVerB;
    exports.pepperiIconArrowTwoWaysVerT = pepperiIconArrowTwoWaysVerT;
    exports.pepperiIconArrowUp = pepperiIconArrowUp;
    exports.pepperiIconArrowUpAlt = pepperiIconArrowUpAlt;
    exports.pepperiIconBarndPepperi = pepperiIconBarndPepperi;
    exports.pepperiIconIndicatorDotPlaceholder = pepperiIconIndicatorDotPlaceholder;
    exports.pepperiIconMiscExcel = pepperiIconMiscExcel;
    exports.pepperiIconNoImage = pepperiIconNoImage;
    exports.pepperiIconNumberCoins = pepperiIconNumberCoins;
    exports.pepperiIconNumberDecimal = pepperiIconNumberDecimal;
    exports.pepperiIconNumberDollar = pepperiIconNumberDollar;
    exports.pepperiIconNumberEuro = pepperiIconNumberEuro;
    exports.pepperiIconNumberMinus = pepperiIconNumberMinus;
    exports.pepperiIconNumberNumber = pepperiIconNumberNumber;
    exports.pepperiIconNumberPercent = pepperiIconNumberPercent;
    exports.pepperiIconNumberPlus = pepperiIconNumberPlus;
    exports.pepperiIconShoppingCart = pepperiIconShoppingCart;
    exports.pepperiIconShoppingPaper = pepperiIconShoppingPaper;
    exports.pepperiIconSystemAttach = pepperiIconSystemAttach;
    exports.pepperiIconSystemAvatar = pepperiIconSystemAvatar;
    exports.pepperiIconSystemBin = pepperiIconSystemBin;
    exports.pepperiIconSystemBolt = pepperiIconSystemBolt;
    exports.pepperiIconSystemChat = pepperiIconSystemChat;
    exports.pepperiIconSystemCircle = pepperiIconSystemCircle;
    exports.pepperiIconSystemClose = pepperiIconSystemClose;
    exports.pepperiIconSystemDoc = pepperiIconSystemDoc;
    exports.pepperiIconSystemDoor = pepperiIconSystemDoor;
    exports.pepperiIconSystemDotEllipsis = pepperiIconSystemDotEllipsis;
    exports.pepperiIconSystemEdit = pepperiIconSystemEdit;
    exports.pepperiIconSystemEducation = pepperiIconSystemEducation;
    exports.pepperiIconSystemEmail = pepperiIconSystemEmail;
    exports.pepperiIconSystemFileDownload = pepperiIconSystemFileDownload;
    exports.pepperiIconSystemFileUpload = pepperiIconSystemFileUpload;
    exports.pepperiIconSystemFileUploadCloud = pepperiIconSystemFileUploadCloud;
    exports.pepperiIconSystemFilter = pepperiIconSystemFilter;
    exports.pepperiIconSystemFullScreen = pepperiIconSystemFullScreen;
    exports.pepperiIconSystemHeart = pepperiIconSystemHeart;
    exports.pepperiIconSystemHome = pepperiIconSystemHome;
    exports.pepperiIconSystemInfo = pepperiIconSystemInfo;
    exports.pepperiIconSystemInventory = pepperiIconSystemInventory;
    exports.pepperiIconSystemLink = pepperiIconSystemLink;
    exports.pepperiIconSystemMap = pepperiIconSystemMap;
    exports.pepperiIconSystemMenu = pepperiIconSystemMenu;
    exports.pepperiIconSystemMenuDots = pepperiIconSystemMenuDots;
    exports.pepperiIconSystemMove = pepperiIconSystemMove;
    exports.pepperiIconSystemMust = pepperiIconSystemMust;
    exports.pepperiIconSystemOffLine = pepperiIconSystemOffLine;
    exports.pepperiIconSystemOk = pepperiIconSystemOk;
    exports.pepperiIconSystemPause = pepperiIconSystemPause;
    exports.pepperiIconSystemPhone = pepperiIconSystemPhone;
    exports.pepperiIconSystemPlay = pepperiIconSystemPlay;
    exports.pepperiIconSystemPrint = pepperiIconSystemPrint;
    exports.pepperiIconSystemProcessing = pepperiIconSystemProcessing;
    exports.pepperiIconSystemQuestion = pepperiIconSystemQuestion;
    exports.pepperiIconSystemRotateDevice = pepperiIconSystemRotateDevice;
    exports.pepperiIconSystemSearch = pepperiIconSystemSearch;
    exports.pepperiIconSystemSelect = pepperiIconSystemSelect;
    exports.pepperiIconSystemSettings = pepperiIconSystemSettings;
    exports.pepperiIconSystemSignature = pepperiIconSystemSignature;
    exports.pepperiIconSystemSpinner = pepperiIconSystemSpinner;
    exports.pepperiIconSystemSupport = pepperiIconSystemSupport;
    exports.pepperiIconSystemTexterea = pepperiIconSystemTexterea;
    exports.pepperiIconSystemTool = pepperiIconSystemTool;
    exports.pepperiIconSystemView = pepperiIconSystemView;
    exports.pepperiIconTimeCal = pepperiIconTimeCal;
    exports.pepperiIconTimeDatetime = pepperiIconTimeDatetime;
    exports.pepperiIconTimeDuration = pepperiIconTimeDuration;
    exports.pepperiIconTimeTime = pepperiIconTimeTime;
    exports.pepperiIconViewCardLg = pepperiIconViewCardLg;
    exports.pepperiIconViewCardMd = pepperiIconViewCardMd;
    exports.pepperiIconViewCardSm = pepperiIconViewCardSm;
    exports.pepperiIconViewLine = pepperiIconViewLine;
    exports.pepperiIconViewMatrix = pepperiIconViewMatrix;
    exports.pepperiIconViewTable = pepperiIconViewTable;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pepperi-addons-ngx-lib-icon.umd.js.map
