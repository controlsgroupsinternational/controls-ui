import { IMultiUploadImage, IMultiUploadImageProps, IImage } from '../..';
import { SetStateAction, Dispatch } from 'react';

interface IMultipleUploadImageProps extends Omit<IMultiUploadImageProps, "setUploadImage" | "initialPreview"> {
    setUploadImages: Dispatch<SetStateAction<IMultiUploadImage[]>>;
    initialPreview?: IImage[];
}
export declare const MultipleImages: (props: IMultipleUploadImageProps) => import("react").JSX.Element;
export {};
