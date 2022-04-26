import { Observable } from 'rxjs';
import {
    Component,
    OnInit,
    Injectable,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    Optional,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup } from '@angular/forms';
import {
    PepFileService,
    PepLayoutType,
    PepCustomizationService,
    PepHorizontalAlignment,
    DEFAULT_HORIZONTAL_ALIGNMENT,
    IPepFieldClickEvent,
} from '@pepperi-addons/ngx-lib';
import {
    PepDialogService,
    PepDialogData,
} from '@pepperi-addons/ngx-lib/dialog';
import { pepIconNoImage2 } from '@pepperi-addons/ngx-lib/icon';

export interface IPepFileChangeEvent {
    acceptedExtensions?: string;
    fileStr?: string;
    fileName?: string;
    fileExt?: string;
}

@Component({
    selector: 'pep-files-uploader',
    templateUrl: './files-uploader.component.html',
    styleUrls: ['./files-uploader.component.scss', './files-uploader.component.theme.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@Injectable()
export class PepFilesUploaderComponent implements OnInit {
    @Input() key = '';
    @Input() src = '';
    @Input() label = '';
    @Input() mandatory = false;
    @Input() disabled = false;
    @Input() xAlignment: PepHorizontalAlignment = DEFAULT_HORIZONTAL_ALIGNMENT;

    private _rowSpan = 1;
    @Input()
    set rowSpan(value) {
        this._rowSpan = value;
    }
    get rowSpan(): number {
        return this._rowSpan;
    }

    @Input() controlType = '';
    @Input() sizeLimitMB = 5;

    @Input() form: FormGroup;
    @Input() standAlone = false;
    @Input() acceptedExtensions = 'bmp,jpg,jpeg,png,gif,ico,svg,html,css';
    @Input() layoutType: PepLayoutType = 'form';

    @Output()
    fileChange: EventEmitter<IPepFileChangeEvent> = new EventEmitter<IPepFileChangeEvent>();
    @Output()
    elementClick: EventEmitter<IPepFieldClickEvent> = new EventEmitter<IPepFieldClickEvent>();

    @ViewChild('fileInput') fileInput: any;
    @ViewChild('imagePreview') imagePreview: any;

    @Input() fieldHeight = '';

    // multiple = false;
    uploader: FileUploader;
    progress = 0;
    // response: string;
    intervalID: any = null;

    constructor(
        private dialogService: PepDialogService,
        private customizationService: PepCustomizationService,
        private fileService: PepFileService,
        private translate: TranslateService
    ) {
        this.uploader = new FileUploader({ removeAfterUpload: true });

        this.uploader.onAfterAddingFile = (item) => {
            if (this.fileInput?.nativeElement) {
                this.fileInput.nativeElement.value = '';
            }
            const reader = new FileReader();

            reader.onload = (event: any) => {
                // fix for DI-19376 - when there is a dot on the file name (not include the extantion one)
                //const fileNameArray = item._file.name.split('.');
                const fileName = this.getFileName(item._file.name); //fileNameArray[0];
                const fileExt = this.getFileExtension(item._file.name); //fileNameArray[1]; // item._file.name.split('.').pop();
                const target = event.target || event.srcElement;
                const fileStr = target.result;
                const errorMsg = this.isValidFile(
                    fileStr,
                    fileExt,
                    this.acceptedExtensions,
                    this.sizeLimitMB
                );
                if (errorMsg === '') {
                    this.src = fileStr;
                    // this.setIntervalX(25, 75);
                    // this.setProgress(5);
                    this.fileChange.emit({
                        acceptedExtensions: this.acceptedExtensions,
                        fileStr,
                        fileName,
                        fileExt,
                    });
                } else {
                    const title = this.translate.instant(
                        'MESSAGES.TITLE_NOTICE'
                    );
                    const data = new PepDialogData({
                        title,
                        content: errorMsg,
                    });
                    this.dialogService.openDefaultDialog(data);
                }
            };
            reader.readAsDataURL(item._file);

            
        };
    }

    getFileName(filename){
        // get file name
        const fileName = filename.substring(0,filename.lastIndexOf('.'));
        return fileName;
    }

    getFileExtension(filename){
        // get file extension
        const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
        return extension;
    }
    ngOnInit(): void {
        /*this.uploader.onCompleteAll = () => {
            this.fileInput.nativeElement.value = '';
        }*/
    }

    isValidFile(
        fileStr,
        fileExtension,
        acceptedExtensions,
        sizeLimitMB = 5
    ): string {
        const file: any = fileStr;
        let fileSize = 0;
        let content = '';
        // check if got file as Base64
        if (typeof fileStr === 'string' && fileStr.indexOf('data:') > -1) {
            fileSize = this.getBase64FileSize(fileStr);
        } else {
            fileSize = file.size;
        }
        // check the size and the extension
        const sizeOK: boolean =
            fileSize !== -1 && file != null && fileSize < sizeLimitMB * 1048576;
        const extensionOK =
            acceptedExtensions === '' ||
            acceptedExtensions.indexOf(fileExtension.toLowerCase()) !== -1;
        if (!extensionOK) {
            content = this.translate.instant(
                'MESSAGES.ERROR_FAILD_TO_LOAD_EXTENSION',
                {
                    fileExtension:
                        "<label class='uppercase bold'>" +
                        fileExtension +
                        '</label>',
                }
            );
        } else if (!sizeOK) {
            content = this.translate.instant(
                'MESSAGES.ERROR_FAILD_TO_LOAD_SIZE',
                {
                    fileSize:
                        "<label class='uppercase bold'>" +
                        sizeLimitMB.toString() +
                        '</label>',
                }
            );
        }
        return content;
    }

    getBase64FileSize(base64String: string): number {
        let fileSize: number;

        try {
            base64String = base64String.substr(base64String.indexOf(',') + 1);
            fileSize = atob(base64String).length;
        } catch (e) {
            fileSize = -1;
        }

        return fileSize; // return size in bytes;
    }

    // setIntervalX(delay, repetitions): void {
    //     let x = 0;
    //     this.intervalID = window.setInterval(() => {
    //         // this.setProgress(this.progress + 5);
    //         if (++x === repetitions || this.uploader.progress >= 100) {
    //             window.clearInterval(this.intervalID);
    //         }
    //     }, delay);
    // }

    errorHandler(event): void {
        event.target.src = this.fileService.getSvgAsImageSrc(
            pepIconNoImage2.data
        );
        event.target.title = this.translate.instant('IMAGE.NO_IMAGE');
    }

    private setProgress(progress): void {
        this.progress = progress;
        this.uploader.progress = progress;
    }

    deleteFile(): void {
        this.uploader.clearQueue();
        window.clearInterval(this.intervalID);
        this.setProgress(0);

        const empltValue = '';
        this.src = empltValue;

        this.fileChange.emit(null);

        // this.fileChange.emit({
        //     acceptedExtensions: this.acceptedExtensions,
        //     fileStr: null,
        //     fileExt: null,
        // });
    }

    onElementClicked(event): void {
        this.elementClick.emit({
            key: this.key,
            controlType: this.controlType,
            eventWhich: event.which,
        });
    }

    onClick_ChooseFile(event): void {
        if (this.fileInput?.nativeElement) {
            this.fileInput.nativeElement.click();
        }
    }

    onKeyPress_ChooseFile(event): void {
        const e = event as KeyboardEvent;

        if ([13, 32].indexOf(e.which) !== -1) {
            if (this.fileInput?.nativeElement) {
                this.fileInput.nativeElement.click();
            }
        }
        e.preventDefault();
    }
}
