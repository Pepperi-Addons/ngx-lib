import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    Input,
    Output,
    EventEmitter,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    OnChanges,
    ElementRef,
    Renderer2,
    TemplateRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignaturePad } from 'ngx-signaturepad/signature-pad';
import {
    PepFileService,
    PepLayoutType,
    PepCustomizationService,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    PepSignatureField,
    IPepFieldClickEvent,
} from '@pepperi-addons/ngx-lib';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { PepSignatureDialogComponent } from './signature-dialog.component';

@Component({
    selector: 'pep-signature',
    styleUrls: ['./signature.component.scss', './signature.component.theme.scss'],
    templateUrl: './signature.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PepSignatureComponent implements OnInit, OnChanges, OnDestroy {
    @Input() key = '';
    @Input() src = '';
    @Input() label = '';
    @Input() mandatory = false;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;

    private _rowSpan = 1;
    @Input()
    set rowSpan(value) {
        this._rowSpan = value;
        this.setFieldHeight();
    }
    get rowSpan(): number {
        return this._rowSpan;
    }

    @Input() signatureURL = '';
    // @Input() inDialog = false;

    private _visible = true;
    @Input()
    set visible(visible: boolean) {
        this._visible = visible;
        if (visible) {
            this.renderer.removeClass(
                this.element.nativeElement,
                'hidden-element'
            );
        } else {
            this.renderer.addClass(
                this.element.nativeElement,
                'hidden-element'
            );
        }
    }
    get visible(): boolean {
        return this._visible;
    }

    controlType = 'signature';

    @Input() form: FormGroup = null;
    @Input() showTitle = true;
    @Input() renderTitle = true;

    private _layoutType: PepLayoutType = 'form';
    @Input()
    set layoutType(value: PepLayoutType) {
        this._layoutType = value;
        this.setFieldHeight();
    }
    get layoutType(): PepLayoutType {
        return this._layoutType;
    }

    @Input() isActive = false;

    // To know if handle actions or just raise them as output
    @Input() handleActions = true;

    @Output()
    chooseFile: EventEmitter<void> = new EventEmitter<void>(); // This event will fired only when handleActions Input is false
    
    @Output()
    fileChange: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    elementClick: EventEmitter<IPepFieldClickEvent> = new EventEmitter<IPepFieldClickEvent>();
    
    // @ViewChild('signaturePad') signaturePad: SignaturePad;
    // @ViewChild('signaturePad', {static: true}) private signaturePad!: SignaturePad;  

    // @ViewChild('signaturePopupPad', { read: TemplateRef }) signaturePopupPad: TemplateRef<any>;
    dialogRef: MatDialogRef<any>;

    fieldHeight = '';
    standAlone = false;
    dataURI = null;
    showActionBtn = true;

    // public isVisibleModal = false;
    // acceptSignatureType = 'png';

    // public signaturePadOptions: any = {
    //     // passed through to szimek/signature_pad constructor
    //     minWidth: 2,
    //     canvasWidth: 500,
    //     canvasHeight: 300,
    //     penColor: 'rgb(151, 151, 151)',
    // };

    constructor(
        private dialogService: PepDialogService,
        private customizationService: PepCustomizationService,
        private fileService: PepFileService,
        private cd: ChangeDetectorRef,
        private renderer: Renderer2,
        private element: ElementRef
    ) { }

    private setFieldHeight(): void {
        this.fieldHeight = this.customizationService.calculateFieldHeight(
            this.layoutType,
            this.rowSpan,
            this.standAlone
        );
    }

    private setDefaultForm(): void {
        const pepField = new PepSignatureField({
            key: this.key,
            value: this.src,
            mandatory: this.mandatory,
            readonly: this.readonly,
            disabled: this.disabled,
        });
        this.form = this.customizationService.getDefaultFromGroup(pepField);
    }

    private openSignatoreDlg(src = ''): void {
        this.showActionBtn = this.signatureURL && this.signatureURL !== '' ? false : true;

        // this.dialogRef = this.dialogService.openDialog(this.signaturePopupPad);
        // this.dialogRef.afterOpened().subscribe(() => {
        //     this.afterDialogOpened();
        // });
        
        this.dialogRef = this.dialogService.openDialog(
            PepSignatureDialogComponent,
            {
                value: this.signatureURL,
                showActionBtn: this.showActionBtn,
                disabled: this.disabled || this.readonly
            }
        );

        this.dialogRef.afterClosed().subscribe((value) => {
            if (value !== undefined && value !== null) {
                if (value !== '') {
                    this.signatureURL = value.fileStr;
                    this.changeValue(value);
                } else {
                    this.signatureURL = '';
                    this.changeValue(this.signatureURL);
                }
            }
        });
    }

    // private afterDialogOpened(): void {
    //     if (this.signatureURL && this.signatureURL !== '') {
    //         this.signaturePad.fromDataURL(this.signatureURL);
    //         this.signaturePad.off();
    //     }
    // }

    ngOnInit(): void {
        if (this.form === null) {
            this.standAlone = true;
            this.setFieldHeight();
            this.setDefaultForm();

            this.renderer.addClass(
                this.element.nativeElement,
                PepCustomizationService.STAND_ALONE_FIELD_CLASS_NAME
            );

            if (!this.renderTitle) {
                this.renderer.addClass(
                    this.element.nativeElement,
                    PepCustomizationService.STAND_ALONE_FIELD_NO_SPACING_CLASS_NAME
                );
            }
        }
    }

    ngOnChanges(changes: any): void {
        if (this.standAlone) {
            this.setDefaultForm();
        }

        if (changes.src && changes.src.currentValue?.length > 0) {
            // Empty dataURI if there is change in the src.
            this.dataURI = null;

            // For clean the cache.
            // this.src = this.src ? this.src + '?t=' + new Date().toTimeString() : '';
        }
    }

    ngOnDestroy(): void {
        //
    }

    // drawComplete(): void {
    //     // will be notified of szimek/signature_pad's onEnd event
    // }

    // drawStart(): void {
    //     // will be notified of szimek/signature_pad's onBegin event
    // }

    openSignModal(): void {
        if (this.handleActions) {
            // If the signature is not empty open it in image viewer.
            //! Remove this `if` to always open signature in modal 
            if (this.standAlone && this.dataURI) {
                const fileStrArr = this.dataURI.fileStr.split(';');

                if (fileStrArr.length === 2) {
                    const win = window.open('', '_blank');
                    const blob = this.fileService.convertFromb64toBlob(
                        this.dataURI.fileStr
                    );
                    const url = URL.createObjectURL(blob);
                    win.location.href = url;
                }
                // signature allready exits
            } else {
                this.signatureURL = this.src;
                this.openSignatoreDlg(this.signatureURL);
            }
        } else {
            if (this.src?.length > 0) {
                this.elementClick.emit({
                    key: this.key,
                    value: this.signatureURL
                });
            } else {
                this.chooseFile.emit();
            }
        }
    }

    deleteSignature(event: any): void {
        this.signatureURL = '';
        this.changeValue(this.signatureURL);
        this.cd.detectChanges();
    }

    // clearSignModal(): void {
    //     this.signatureURL = '';
    //     this.signaturePad.clear();
    //     this.signaturePad.on();
    // }

    // saveSignModal(event: any): void {
    //     if (!this.signaturePad.isEmpty()) {
    //         this.signatureURL = this.signaturePad.toDataURL('image/png');
    //         const fileValue = {
    //             acceptedExtensions: this.acceptSignatureType,
    //             fileStr: this.signatureURL,
    //             fileExt: this.acceptSignatureType,
    //         };
    //         this.changeValue(fileValue);
    //     } else {
    //         this.signatureURL = '';
    //         this.changeValue(this.signatureURL);
    //     }

    //     this.dialogRef.close(this.signatureURL);
    // }
    
    // closeDialog(event) {
    //     this.dialogRef.close(event);
    // }

    errorHandler(event: any): void {
        this.signatureURL = this.src = ''; // this.blankImage;
    }

    changeValue(fileData: any): void {
        if (this.handleActions) {
            this.dataURI = fileData;
            this.src = this.standAlone && this.dataURI ? this.dataURI.fileStr : '';
            this.customizationService.updateFormFieldValue(
                this.form,
                this.key,
                this.dataURI ? this.dataURI.fileExt : ''
            );
        }
        this.fileChange.emit(fileData);
    }

    onKeyPress_OpenSignModal(event: any): void {
        const e = event as KeyboardEvent;

        if ([13, 32].indexOf(e.which) !== -1) {
            this.openSignModal();
        }
        e.preventDefault();
    }
}