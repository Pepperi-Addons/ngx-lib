import {Injectable} from '@angular/core';

export type PepFileType = 'script' | 'style';

export interface IPepExternalFileModel {
    path: string;
    type: PepFileType;
}

declare var document: any;

@Injectable({
    providedIn: 'root',
})
export class PepFileService {
    private scripts: Map<string, {loaded: boolean; src: string}>;
    private styles: Map<string, {loaded: boolean; src: string}>;

    constructor() {
        this.scripts = new Map<string, {loaded: boolean; src: string}>();
        this.styles = new Map<string, {loaded: boolean; src: string}>();
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
        for (let index = 0; index < files.length && files[index].path && files[index].path.trim() !== ''; index++) {
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
                this.scripts.set(name, {loaded: false, src: path});
            }

            const scriptItem = this.scripts.get(name);

            // Resolve if already loaded
            if (scriptItem.loaded) {
                resolve({script: name, loaded: true, status: 'Already Loaded'});
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
                        if (script.readyState === 'loaded' || script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            scriptItem.loaded = true;
                            resolve({path, type: 'script', loaded: true, status: 'Loaded'});
                        }
                    };
                } else {
                    // Others
                    script.onload = () => {
                        scriptItem.loaded = true;
                        resolve({path, type: 'script', loaded: true, status: 'Loaded'});
                    };
                }
                script.onerror = (error: any) => resolve({path, type: 'script', loaded: false, status: 'Loaded'});
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    }

    loadStyle(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const name = this.getFileName(path, true);

            // If the style isn't exist add it.
            if (!this.styles.has(name)) {
                this.styles.set(name, {loaded: false, src: path});
            }

            const styleItem = this.styles.get(name);

            // Resolve if already loaded
            if (styleItem.loaded) {
                resolve({path, type: 'style', loaded: true, status: 'Already Loaded'});
            } else {
                // Load style
                const style = document.createElement('link');
                style.type = 'text/css';
                style.rel = 'stylesheet';
                style.href = styleItem.src;
                style.media = 'all';
                style.setAttribute('id', name);

                styleItem.loaded = true;
                resolve({path, type: 'style', loaded: true, status: 'Loaded'});

                document.getElementsByTagName('head')[0].appendChild(style);
            }
        });
    }

    loadFontStyle(styleId: string, href: string): void {
        const head = document.getElementsByTagName('head')[0];

        const styleElement = document.getElementById(styleId) as HTMLLinkElement;

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


    getFileName(filePath: string, withExtenstion: boolean = false): string {
        const lastIndex = withExtenstion ? filePath.length - 1 : filePath.lastIndexOf('.');

        return filePath.substr(filePath.lastIndexOf('/') + 1, lastIndex);
    }

    getFileExtension(filePath: string): string {
        const fileSplit = filePath.split('.');
        let fileExt = '';
        if (fileSplit.length > 1) {
            fileExt = fileSplit[fileSplit.length - 2];
        }
        return fileExt;
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

    convertFromb64toBlob(b64Data: any, contentType = '', sliceSize = 512): Blob {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }

    getAssetsPath(assetsDomain: string = ''): string {
        const concatChar = (assetsDomain === '' || assetsDomain.endsWith('/')) ? '' : '/';
        return `${assetsDomain}${concatChar}assets/ngx-lib/`;
    }

    getAssetsTranslationsSuffix(): string {
        return '.ngx-lib.json';
    }

    getAssetsTranslationsPath(assetsDomain: string = ''): string {
        return `${this.getAssetsPath(assetsDomain)}i18n/`;
    }

    getAssetsImagesPath(assetsDomain: string = '', image: string = ''): string {
        return `${this.getAssetsPath(assetsDomain)}images/${image}`;
    }

    getSvgAsImageSrc(svg: string): string {
        const blob = new Blob([svg], {type: 'image/svg+xml'});
        const url = URL.createObjectURL(blob);
        return url;
    }
}
