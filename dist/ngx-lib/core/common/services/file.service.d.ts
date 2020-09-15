import * as i0 from "@angular/core";
export declare enum FileTypeEnum {
    'Script' = 1,
    'Style' = 2
}
export interface ExternalFileModel {
    path: string;
    type: FileTypeEnum;
}
export declare class FileService {
    private scripts;
    private styles;
    constructor();
    loadFiles(files: ExternalFileModel[]): Promise<any[]>;
    removeFiles(files: ExternalFileModel[]): void;
    loadScript(path: string): Promise<any>;
    loadStyle(path: string): Promise<any>;
    getFileName(filePath: string, withExtenstion?: boolean): string;
    getFileExtension(filePath: string): string;
    isValidUrl(url: string): boolean;
    convertFromb64toBlob(b64Data: any, contentType?: string, sliceSize?: number): Blob;
    getAssetsPath(): string;
    getAssetsTranslationsPath(): string;
    getAssetsImagesPath(image?: string): string;
    getNoImagePath(): string;
    static ɵfac: i0.ɵɵFactoryDef<FileService, never>;
    static ɵprov: i0.ɵɵInjectableDef<FileService>;
}
