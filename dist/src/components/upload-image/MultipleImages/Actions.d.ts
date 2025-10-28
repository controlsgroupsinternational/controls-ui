import { UploadImageCompress, UploadImageTabIndexs } from '../types';

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
    handleOnRemoveImage: (idxImageRemoved: number) => void;
}
export declare const MultiUploadImageActions: (props: UploadImageActionsProps) => import("react").JSX.Element;
export {};
