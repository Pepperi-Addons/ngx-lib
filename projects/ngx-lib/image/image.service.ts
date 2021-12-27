import { Injectable, TemplateRef } from '@angular/core';
import {
    PepFileService,
    PepCustomizationService,
    IPepOption,
} from '@pepperi-addons/ngx-lib';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';
import { PepImagesFilmstripComponent } from '@pepperi-addons/ngx-lib/images-filmstrip';
import { IPepFileChangeEvent } from '@pepperi-addons/ngx-lib/files-uploader';

@Injectable({
    providedIn: 'root',
})
export class PepImageService {
    constructor(
        private dialogService: PepDialogService,
        private customizationService: PepCustomizationService,
        private fileService: PepFileService,
    ) { }

    openImageDialog(imageSrc: string, options: IPepOption[], title = ''): void {
        const arr = [imageSrc].concat(
            (options || []).map((opt) => opt.value)
        );
        const imagesValue = arr.join(';');

        // Show image in modal.
        const config = this.dialogService.getDialogConfig({}, 'inline');
        config.maxWidth = '75vw';
        config.height = '95vh';

        this.dialogService.openDialog(
            PepImagesFilmstripComponent,
            {
                currIndex: 0,
                key: new Date().getDate(),
                value: imagesValue,
                label: title,
                uid: '',
                showThumbnails: arr.length > 1,
            },
            config
        );
    }

    openFromURI(event: IPepFileChangeEvent) {
        if (event) {
            const fileStrArr = event.fileStr.split(';');
            if (fileStrArr.length === 2) {
                const win = window.open('', '_blank');
                const contentType = fileStrArr[0].split(':')[1];
                const base64 = fileStrArr[1].split(',')[1];
                const blob = this.fileService.convertFromb64toBlob(
                    base64,
                    contentType
                );
                const url = URL.createObjectURL(blob);
                win.location.href = url;
            }
        }
    }
}
