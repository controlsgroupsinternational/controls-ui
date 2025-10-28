import { default as FileResizer } from 'react-image-file-resizer';

interface IHandleCompressionImageParams {
    imageFile: File;
    quality: number;
    maxWidth?: number;
    rotation?: number;
    minWidth?: number;
    maxHeight?: number;
    minHeight?: number;
    outputType?: string;
    compressFormat?: string;
    resizer: typeof FileResizer;
}
export declare const compressImage: ({ resizer, imageFile, maxWidth, maxHeight, compressFormat, quality, rotation, outputType }: IHandleCompressionImageParams) => Promise<{
    data_url: string | Blob | File | ProgressEvent<FileReader>;
    file: File;
}>;
export {};
