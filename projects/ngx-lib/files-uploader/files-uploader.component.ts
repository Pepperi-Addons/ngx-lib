import { Observable } from 'rxjs';
import { Component, OnInit, Injectable, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup } from '@angular/forms';
import { FileService, LAYOUT_TYPE, CustomizationService } from '@pepperi-addons/ngx-lib';
import { DialogService, DialogData, DialogDataType } from '@pepperi-addons/ngx-lib/dialog';

@Component({
    selector: 'files-uploader',
    templateUrl: './files-uploader.component.html',
    styleUrls: ['./files-uploader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@Injectable()
export class FilesUploaderComponent implements OnInit {
    @Input() key = '';
    @Input() src = '';
    @Input() label = '';
    @Input() required = false;
    @Input() disabled = false;
    @Input() xAlignment = '0';
    @Input() rowSpan = 1;
    @Input() controlType = '';
    @Input() sizeLimitMB = 5;

    @Input() form: FormGroup;
    @Input() standAlone = false;
    @Input() acceptedExtensions = 'bmp,jpg,jpeg,png,gif,ico,svg,html,css';
    @Input() layoutType: LAYOUT_TYPE = LAYOUT_TYPE.PepperiForm;

    @Output() fileChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() elementClicked: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('fileInput') fileInput: any;
    @ViewChild('imagePreview') imagePreview: any;

    LAYOUT_TYPE = LAYOUT_TYPE;
    fieldHeight = '';

    // multiple = false;
    uploader: FileUploader;
    progress = 0;
    // response: string;
    intervalID: any = null;

    constructor(
        private translate: TranslateService,
        private dialogService: DialogService,
        private customizationService: CustomizationService,
        private fileService: FileService)
    {
        const self = this;
        this.uploader = new FileUploader({ removeAfterUpload: true });

        this.uploader.onAfterAddingFile = (item) => {
            if (self.fileInput?.nativeElement) {
                self.fileInput.nativeElement.value = '';
            }
            const reader = new FileReader();

            reader.onload = (event: any) => {
                const fileExt = item._file.name.split('.').pop();
                const target = event.target || event.srcElement;
                const fileStr = target.result;
                const errorMsg = self.isValidFile(fileStr, fileExt, self.acceptedExtensions, self.sizeLimitMB);
                if (errorMsg === '') {
                    self.src = fileStr;
                    self.setIntervalX(25, 75);
                    self.setProgress(5);
                    self.fileChanged.emit(
                        JSON.stringify({
                            acceptedExtensions: self.acceptedExtensions,
                            fileStr,
                            fileExt,
                        }));
                }
                else {
                    const title = self.translate.instant('MESSAGES.TITLE_NOTICE');
                    const data = new DialogData({
                        title,
                        content: errorMsg,
                        contentType: DialogDataType.Html});
                    self.dialogService.openDefaultDialog(data);
                }

            };
            reader.readAsDataURL(item._file);
        };
    }

    ngOnInit(): void {
        this.fieldHeight = this.customizationService.calculateFieldHeight(this.layoutType, this.rowSpan, this.standAlone);

        /*this.uploader.onCompleteAll = () => {
            this.fileInput.nativeElement.value = '';
        }*/
    }

    isValidFile(fileStr, fileExtension, acceptedExtensions, sizeLimitMB = 5): string {
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
        const sizeOK: boolean = fileSize !== -1 && file != null && fileSize < sizeLimitMB * (1048576);
        const extensionOK = acceptedExtensions === '' || acceptedExtensions.indexOf(fileExtension.toLowerCase()) !== -1;
        if (!extensionOK) {
            content = this.translate.instant('MESSAGES.ERROR_FAILD_TO_LOAD_EXTENSION',
                { fileExtension: '<label class=\'uppercase bold\'>' + fileExtension + '</label>' });
        } else if (!sizeOK) {
            content = this.translate.instant('MESSAGES.ERROR_FAILD_TO_LOAD_SIZE',
                { fileSize: '<label class=\'uppercase bold\'>' + (sizeLimitMB).toString() + '</label>' });
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

    setIntervalX(delay, repetitions): void {
        const self = this;
        let x = 0;
        this.intervalID = window.setInterval(() => {
            // self.setProgress(self.progress + 5);
            if (++x === repetitions || self.uploader.progress >= 100) {
                window.clearInterval(self.intervalID);
            }
        }, delay);
    }

    errorHandler(event): void {
        event.target.src = this.fileService.getNoImagePath();
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

        const value = '';
        this.src = value;
        this.fileChanged.emit(value);
    }

    onElementClicked(event): void {
        this.elementClicked.emit({ apiName: this.key, event });
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
