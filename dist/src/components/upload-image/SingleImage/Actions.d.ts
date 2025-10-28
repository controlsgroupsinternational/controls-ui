import { ImageListType, OnChangeImage, UploadImageCompress, UploadImageTabIndexs, SetUploadImage } from '../types';
import { default as React, Dispatch, SetStateAction } from 'react';

interface UploadImageActionsProps {
    src?: string;
    edit?: boolean;
    download?: boolean;
    imageIndex: number;
    disabled?: boolean;
    compress?: UploadImageCompress;
    tabIndexs?: UploadImageTabIndexs;
    onImageUpdate: (index: number) => void;
    onImageRemove: (index: number) => void;
    setUploadImage: SetUploadImage | OnChangeImage;
    setLocalImage: Dispatch<SetStateAction<ImageListType>>;
    handleOnRemove: (index: number) => void;
}
export declare const UploadImageActions: (props: UploadImageActionsProps) => React.JSX.Element;
export {};
