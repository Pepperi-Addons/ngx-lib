import { Injectable } from '@angular/core';

export type PepFileType = 'script' | 'style';

export interface IPepExternalFileModel {
    path: string;
    type: PepFileType;
}

declare let document: any;

@Injectable({
    providedIn: 'root',
})
export class PepFileService {
    private scripts: Map<string, { loaded: boolean; src: string }>;
    private styles: Map<string, { loaded: boolean; src: string }>;

    constructor() {
        this.scripts = new Map<string, { loaded: boolean; src: string }>();
        this.styles = new Map<string, { loaded: boolean; src: string }>();
    }

    loadFiles(files: IPepExternalFileModel[]): Promise<any[]> {
        const promises: any[] = [];
        files.forEach((file) => {
            if (file.type === 'style') {
                promises.push(this.loadStyle(file.path));
            } else if (file.type === 'script') {
                promises.push(this.loadScript(file.path));
            }
        });
        return Promise.all(promises);
    }

    removeFiles(files: IPepExternalFileModel[]): void {
        for (
            let index = 0;
            index < files.length &&
            files[index].path &&
            files[index].path.trim() !== '';
            index++
        ) {
            const name = this.getFileName(files[index].path, true);
            const element = document.getElementById(name);
            element.parentNode.removeChild(element);

            if (files[index].type === 'script' && this.scripts.has(name)) {
                this.scripts.delete(name);
            } else if (files[index].type === 'style' && this.styles.has(name)) {
                this.styles.delete(name);
            }
        }
    }

    loadScript(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const name = this.getFileName(path, true);

            // If the script isn't exist add it.
            if (!this.scripts.has(name)) {
                this.scripts.set(name, { loaded: false, src: path });
            }

            const scriptItem = this.scripts.get(name);

            // Resolve if already loaded
            if (scriptItem.loaded) {
                resolve({
                    script: name,
                    loaded: true,
                    status: 'Already Loaded',
                });
            } else {
                // Load script
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = scriptItem.src;
                script.setAttribute('id', name);
                script.async = false;

                if (script.readyState) {
                    // IE
                    script.onreadystatechange = () => {
                        if (
                            script.readyState === 'loaded' ||
                            script.readyState === 'complete'
                        ) {
                            script.onreadystatechange = null;
                            scriptItem.loaded = true;
                            resolve({
                                path,
                                type: 'script',
                                loaded: true,
                                status: 'Loaded',
                            });
                        }
                    };
                } else {
                    // Others
                    script.onload = () => {
                        scriptItem.loaded = true;
                        resolve({
                            path,
                            type: 'script',
                            loaded: true,
                            status: 'Loaded',
                        });
                    };
                }
                script.onerror = (error: any) =>
                    resolve({
                        path,
                        type: 'script',
                        loaded: false,
                        status: 'Loaded',
                    });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    }

    loadStyle(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const name = this.getFileName(path, true);

            // If the style isn't exist add it.
            if (!this.styles.has(name)) {
                this.styles.set(name, { loaded: false, src: path });
            }

            const styleItem = this.styles.get(name);

            // Resolve if already loaded
            if (styleItem.loaded) {
                resolve({
                    path,
                    type: 'style',
                    loaded: true,
                    status: 'Already Loaded',
                });
            } else {
                // Load style
                const style = document.createElement('link');
                style.type = 'text/css';
                style.rel = 'stylesheet';
                style.href = styleItem.src;
                style.media = 'all';
                style.setAttribute('id', name);

                styleItem.loaded = true;
                resolve({
                    path,
                    type: 'style',
                    loaded: true,
                    status: 'Loaded',
                });

                document.getElementsByTagName('head')[0].appendChild(style);
            }
        });
    }

    loadFontStyle(styleId: string, href: string): void {
        const head = document.getElementsByTagName('head')[0];

        const styleElement = document.getElementById(
            styleId
        ) as HTMLLinkElement;

        if (styleElement) {
            styleElement.href = href;
        } else {
            const style = document.createElement('link');
            style.id = styleId;
            style.rel = 'stylesheet';
            style.href = `${href}`;

            head.appendChild(style);
        }
    }

    getFileName(filePath: string, withExtenstion = false): string {
        const lastIndex = withExtenstion
            ? filePath.length - 1
            : filePath.lastIndexOf('.');

        return filePath.substr(filePath.lastIndexOf('/') + 1, lastIndex);
    }

    getFileExtension(filename: string): string {
        const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
        return extension;
    }

    /* Returns true if url is valid */
    isValidUrl(url: string): boolean {
        /* Try creating a valid URL */
        try {
            const tmp = new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }
    
    convertFromb64toArrayBuffer(base64String: string): ArrayBuffer {
        const base64 = base64String.slice(base64String.indexOf(',') + 1);
        const binary_string = window.atob(base64);
        const len = binary_string.length;
        const bytes = new Uint8Array(len);
        
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    }

    convertFromb64toBlob(base64String: any): Blob {
        // const byteCharacters = window.atob(b64Data);
        const byteArrays = this.convertFromb64toArrayBuffer(base64String);

        const fileStrArr = base64String.split(';');
        const contentType = fileStrArr[0].split(':')[1];

        const blob = new Blob([byteArrays], { type: contentType });
        return blob;
    }

    getBase64FileSize(base64String: string): number {
        let fileSize: number;

        try {
            base64String = base64String.slice(base64String.indexOf(',') + 1);
            fileSize = window.atob(base64String).length;
        } catch (e) {
            fileSize = -1;
        }

        return fileSize; // return size in bytes;
    }

    fileToBase64(file: File) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }

    isValidFileExtension(
        fileExtension,
        acceptedExtensions
    ): boolean {
        const extensionOK =
            acceptedExtensions === '' ||
            acceptedExtensions.indexOf(fileExtension.toLowerCase()) !== -1;
        
        return extensionOK;
    }

    isValidFileSize(
        fileStr,
        sizeLimitMB = 5
    ): boolean {
        const file: any = fileStr;
        let fileSize = 0;
        // check if got file as Base64
        if (typeof fileStr === 'string' && fileStr.indexOf('data:') > -1) {
            fileSize = this.getBase64FileSize(fileStr);
        } else {
            fileSize = file.size;
        }
        // check the size
        const sizeOK: boolean = fileSize !== -1 && file != null && fileSize < sizeLimitMB * 1048576;
        return sizeOK;
    }

    getAssetsPath(assetsDomain = '', libName = 'ngx-lib'): string {
        const concatChar =
            assetsDomain === '' || assetsDomain.endsWith('/') ? '' : '/';
        return `${assetsDomain}${concatChar}assets/${libName}/`;
    }

    getAssetsTranslationsSuffix(libName = 'ngx-lib'): string {
        return `.${libName}.json`;
    }

    getAssetsTranslationsPath(assetsDomain = '', libName = 'ngx-lib'): string {
        return `${this.getAssetsPath(assetsDomain, libName)}i18n/`;
    }

    getAssetsImagesPath(assetsDomain = '', image = '', libName = 'ngx-lib'): string {
        return `${this.getAssetsPath(assetsDomain, libName)}images/${image}`;
    }

    getSvgAsImageSrc(svg: string): string {
        const blob = new Blob([svg], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        return url;
    }
}
