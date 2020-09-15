import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export var FileTypeEnum;
(function (FileTypeEnum) {
    FileTypeEnum[FileTypeEnum["Script"] = 1] = "Script";
    FileTypeEnum[FileTypeEnum["Style"] = 2] = "Style";
})(FileTypeEnum || (FileTypeEnum = {}));
export class FileService {
    constructor() {
        this.scripts = new Map();
        this.styles = new Map();
    }
    loadFiles(files) {
        const promises = [];
        files.forEach((file) => {
            if (file.type === FileTypeEnum.Style) {
                promises.push(this.loadStyle(file.path));
            }
            else if (file.type === FileTypeEnum.Script) {
                promises.push(this.loadScript(file.path));
            }
        });
        return Promise.all(promises);
    }
    removeFiles(files) {
        for (let index = 0; index < files.length && files[index].path && files[index].path.trim() !== ''; index++) {
            const name = this.getFileName(files[index].path, true);
            const element = document.getElementById(name);
            element.parentNode.removeChild(element);
            if (files[index].type === FileTypeEnum.Script && this.scripts.has(name)) {
                this.scripts.delete(name);
            }
            else if (files[index].type === FileTypeEnum.Style && this.styles.has(name)) {
                this.styles.delete(name);
            }
        }
    }
    loadScript(path) {
        return new Promise((resolve, reject) => {
            const name = this.getFileName(path, true);
            // If the script isn't exist add it.
            if (!this.scripts.has(name)) {
                this.scripts.set(name, { loaded: false, src: path });
            }
            const scriptItem = this.scripts.get(name);
            // Resolve if already loaded
            if (scriptItem.loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
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
                            resolve({ path, type: FileTypeEnum.Script, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    // Others
                    script.onload = () => {
                        scriptItem.loaded = true;
                        resolve({ path, type: FileTypeEnum.Script, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error) => resolve({ path, type: FileTypeEnum.Script, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    }
    loadStyle(path) {
        return new Promise((resolve, reject) => {
            const name = this.getFileName(path, true);
            // If the style isn't exist add it.
            if (!this.styles.has(name)) {
                this.styles.set(name, { loaded: false, src: path });
            }
            const styleItem = this.styles.get(name);
            // Resolve if already loaded
            if (styleItem.loaded) {
                resolve({ path, type: FileTypeEnum.Style, loaded: true, status: 'Already Loaded' });
            }
            else {
                // Load style
                const style = document.createElement('link');
                style.type = 'text/css';
                style.rel = 'stylesheet';
                style.href = styleItem.src;
                style.media = 'all';
                style.setAttribute('id', name);
                styleItem.loaded = true;
                resolve({ path, type: FileTypeEnum.Style, loaded: true, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(style);
            }
        });
    }
    getFileName(filePath, withExtenstion = false) {
        let lastIndex = withExtenstion ? filePath.length - 1 : filePath.lastIndexOf('.');
        return filePath.substr(filePath.lastIndexOf('/') + 1, lastIndex);
    }
    getFileExtension(filePath) {
        var fileSplit = filePath.split('.');
        var fileExt = '';
        if (fileSplit.length > 1) {
            fileExt = fileSplit[fileSplit.length - 2];
        }
        return fileExt;
    }
    /* Returns true if url is valid */
    isValidUrl(url) {
        /* Try creating a valid URL */
        try {
            const tmp = new URL(url);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    convertFromb64toBlob(b64Data, contentType = '', sliceSize = 512) {
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
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    getAssetsPath() {
        return `/assets/ngx-lib/`;
    }
    getAssetsTranslationsPath() {
        return `${this.getAssetsPath()}i18n/`;
    }
    getAssetsImagesPath(image = '') {
        return `${this.getAssetsPath()}images/${image}`;
    }
    getNoImagePath() {
        return this.getAssetsImagesPath('no-image.svg');
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(); };
FileService.ɵprov = i0.ɵɵdefineInjectable({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FileService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9zcmMvY29yZS9jb21tb24vc2VydmljZXMvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRXpDLE1BQU0sQ0FBTixJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDcEIsbURBQVksQ0FBQTtJQUNaLGlEQUFXLENBQUE7QUFDZixDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7QUFZRCxNQUFNLE9BQU8sV0FBVztJQUlwQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQTBDLENBQUM7UUFDakUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBMEMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQTBCO1FBQ2hDLE1BQU0sUUFBUSxHQUFVLEVBQUUsQ0FBQztRQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUM1QztpQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzdDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVcs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TSxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QztZQUVELE1BQU0sU0FBUyxHQUFHLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUI7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sa0JBQWtCLENBQUM7SUFDOUIsQ0FBQztJQUVELHlCQUF5QjtRQUNyQixPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7SUFDMUMsQ0FBQztJQUVELG1CQUFtQixDQUFDLFFBQWdCLEVBQUU7UUFDbEMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsVUFBVSxLQUFLLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7O3NFQTFLUSxXQUFXO21EQUFYLFdBQVcsV0FBWCxXQUFXLG1CQUZSLE1BQU07a0RBRVQsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGVudW0gRmlsZVR5cGVFbnVtIHtcclxuICAgICdTY3JpcHQnID0gMSxcclxuICAgICdTdHlsZScgPSAyLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVybmFsRmlsZU1vZGVsIHtcclxuICAgIHBhdGg6IHN0cmluZztcclxuICAgIHR5cGU6IEZpbGVUeXBlRW51bTtcclxufVxyXG5cclxuZGVjbGFyZSB2YXIgZG9jdW1lbnQ6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc2NyaXB0czogTWFwPHN0cmluZywge2xvYWRlZDogYm9vbGVhbjsgc3JjOiBzdHJpbmd9PjtcclxuICAgIHByaXZhdGUgc3R5bGVzOiBNYXA8c3RyaW5nLCB7bG9hZGVkOiBib29sZWFuOyBzcmM6IHN0cmluZ30+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2NyaXB0cyA9IG5ldyBNYXA8c3RyaW5nLCB7bG9hZGVkOiBib29sZWFuOyBzcmM6IHN0cmluZ30+KCk7XHJcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBuZXcgTWFwPHN0cmluZywge2xvYWRlZDogYm9vbGVhbjsgc3JjOiBzdHJpbmd9PigpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRGaWxlcyhmaWxlczogRXh0ZXJuYWxGaWxlTW9kZWxbXSk6IFByb21pc2U8YW55W10+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlczogYW55W10gPSBbXTtcclxuICAgICAgICBmaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlLnR5cGUgPT09IEZpbGVUeXBlRW51bS5TdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRTdHlsZShmaWxlLnBhdGgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWxlLnR5cGUgPT09IEZpbGVUeXBlRW51bS5TY3JpcHQpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NyaXB0KGZpbGUucGF0aCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVGaWxlcyhmaWxlczogRXh0ZXJuYWxGaWxlTW9kZWxbXSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWxlcy5sZW5ndGggJiYgZmlsZXNbaW5kZXhdLnBhdGggJiYgZmlsZXNbaW5kZXhdLnBhdGgudHJpbSgpICE9PSAnJzsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXRGaWxlTmFtZShmaWxlc1tpbmRleF0ucGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpbGVzW2luZGV4XS50eXBlID09PSBGaWxlVHlwZUVudW0uU2NyaXB0ICYmIHRoaXMuc2NyaXB0cy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NyaXB0cy5kZWxldGUobmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsZXNbaW5kZXhdLnR5cGUgPT09IEZpbGVUeXBlRW51bS5TdHlsZSAmJiB0aGlzLnN0eWxlcy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVzLmRlbGV0ZShuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkU2NyaXB0KHBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0RmlsZU5hbWUocGF0aCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2NyaXB0IGlzbid0IGV4aXN0IGFkZCBpdC5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNjcmlwdHMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmlwdHMuc2V0KG5hbWUsIHtsb2FkZWQ6IGZhbHNlLCBzcmM6IHBhdGh9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2NyaXB0SXRlbSA9IHRoaXMuc2NyaXB0cy5nZXQobmFtZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXNvbHZlIGlmIGFscmVhZHkgbG9hZGVkXHJcbiAgICAgICAgICAgIGlmIChzY3JpcHRJdGVtLmxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7c2NyaXB0OiBuYW1lLCBsb2FkZWQ6IHRydWUsIHN0YXR1czogJ0FscmVhZHkgTG9hZGVkJ30pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTG9hZCBzY3JpcHRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgICAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBzY3JpcHRJdGVtLnNyYztcclxuICAgICAgICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHQuYXN5bmMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2NyaXB0LnJlYWR5U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJRVxyXG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JpcHQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0SXRlbS5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7cGF0aCwgdHlwZTogRmlsZVR5cGVFbnVtLlNjcmlwdCwgbG9hZGVkOiB0cnVlLCBzdGF0dXM6ICdMb2FkZWQnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcnNcclxuICAgICAgICAgICAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHRJdGVtLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe3BhdGgsIHR5cGU6IEZpbGVUeXBlRW51bS5TY3JpcHQsIGxvYWRlZDogdHJ1ZSwgc3RhdHVzOiAnTG9hZGVkJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IChlcnJvcjogYW55KSA9PiByZXNvbHZlKHtwYXRoLCB0eXBlOiBGaWxlVHlwZUVudW0uU2NyaXB0LCBsb2FkZWQ6IGZhbHNlLCBzdGF0dXM6ICdMb2FkZWQnfSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3R5bGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXRGaWxlTmFtZShwYXRoLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBzdHlsZSBpc24ndCBleGlzdCBhZGQgaXQuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdHlsZXMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlcy5zZXQobmFtZSwge2xvYWRlZDogZmFsc2UsIHNyYzogcGF0aH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZUl0ZW0gPSB0aGlzLnN0eWxlcy5nZXQobmFtZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXNvbHZlIGlmIGFscmVhZHkgbG9hZGVkXHJcbiAgICAgICAgICAgIGlmIChzdHlsZUl0ZW0ubG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtwYXRoLCB0eXBlOiBGaWxlVHlwZUVudW0uU3R5bGUsIGxvYWRlZDogdHJ1ZSwgc3RhdHVzOiAnQWxyZWFkeSBMb2FkZWQnfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMb2FkIHN0eWxlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgICAgICAgICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUuaHJlZiA9IHN0eWxlSXRlbS5zcmM7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS5tZWRpYSA9ICdhbGwnO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0eWxlSXRlbS5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7cGF0aCwgdHlwZTogRmlsZVR5cGVFbnVtLlN0eWxlLCBsb2FkZWQ6IHRydWUsIHN0YXR1czogJ0xvYWRlZCd9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpbGVOYW1lKGZpbGVQYXRoOiBzdHJpbmcsIHdpdGhFeHRlbnN0aW9uOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBsYXN0SW5kZXggPSB3aXRoRXh0ZW5zdGlvbiA/IGZpbGVQYXRoLmxlbmd0aCAtIDEgOiBmaWxlUGF0aC5sYXN0SW5kZXhPZignLicpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmlsZVBhdGguc3Vic3RyKGZpbGVQYXRoLmxhc3RJbmRleE9mKCcvJykgKyAxLCBsYXN0SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpbGVFeHRlbnNpb24oZmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGZpbGVTcGxpdCA9IGZpbGVQYXRoLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgdmFyIGZpbGVFeHQgPSAnJztcclxuICAgICAgICBpZiAoZmlsZVNwbGl0Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgZmlsZUV4dCA9IGZpbGVTcGxpdFtmaWxlU3BsaXQubGVuZ3RoIC0gMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWxlRXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJldHVybnMgdHJ1ZSBpZiB1cmwgaXMgdmFsaWQgKi9cclxuICAgIGlzVmFsaWRVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAvKiBUcnkgY3JlYXRpbmcgYSB2YWxpZCBVUkwgKi9cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB0bXAgPSBuZXcgVVJMKHVybCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0RnJvbWI2NHRvQmxvYihiNjREYXRhOiBhbnksIGNvbnRlbnRUeXBlID0gJycsIHNsaWNlU2l6ZSA9IDUxMik6IEJsb2Ige1xyXG4gICAgICAgIGNvbnN0IGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiNjREYXRhKTtcclxuICAgICAgICBjb25zdCBieXRlQXJyYXlzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBzbGljZSA9IGJ5dGVDaGFyYWN0ZXJzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgc2xpY2VTaXplKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVOdW1iZXJzID0gbmV3IEFycmF5KHNsaWNlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGJ5dGVOdW1iZXJzW2ldID0gc2xpY2UuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZU51bWJlcnMpO1xyXG4gICAgICAgICAgICBieXRlQXJyYXlzLnB1c2goYnl0ZUFycmF5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihieXRlQXJyYXlzLCB7dHlwZTogY29udGVudFR5cGV9KTtcclxuICAgICAgICByZXR1cm4gYmxvYjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBc3NldHNQYXRoKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGAvYXNzZXRzL25neC1saWIvYDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBc3NldHNUcmFuc2xhdGlvbnNQYXRoKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0QXNzZXRzUGF0aCgpfWkxOG4vYDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBc3NldHNJbWFnZXNQYXRoKGltYWdlOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0QXNzZXRzUGF0aCgpfWltYWdlcy8ke2ltYWdlfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm9JbWFnZVBhdGgoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBc3NldHNJbWFnZXNQYXRoKCduby1pbWFnZS5zdmcnKTtcclxuICAgIH1cclxufVxyXG4iXX0=